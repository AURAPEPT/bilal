// Scène 3D « conte de fées » : lune peinte (formes réelles de la NASA, stylisées), terrain du cratère
// Copernic en aplats, Terre dessinée, ciel nuit magique, nuages, tapis volant, prénoms en poussière d'étoiles.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

const DEG = Math.PI / 180;
const LAT0 = 9.62 * DEG, LON0 = -20.08 * DEG, SPAN = 24 * DEG; // cratère Copernic
const RELIEF = (5018 / 1737400) * 2.2;
const BASE = 0.0004;
const clamp01 = (x) => Math.min(1, Math.max(0, x));
const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

export function webglOK() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); }
  catch (e) { return false; }
}
function objPos(lat, lon, r = 1) {
  return new THREE.Vector3(Math.cos(lon) * Math.cos(lat) * r, Math.sin(lat) * r, -Math.sin(lon) * Math.cos(lat) * r);
}

/* ------------------------------ shaders ------------------------------ */
const LOGV = `#include <common>\n#include <logdepthbuf_pars_vertex>\n`;
const LOGF = `#include <common>\n#include <logdepthbuf_pars_fragment>\n`;

const moonVert = LOGV + /* glsl */`
  varying vec2 vUv; varying vec3 vN; varying vec3 vT; varying vec3 vB; varying vec3 vWP;
  void main(){
    vUv = uv;
    vec3 d = normalize(position);
    vec3 t = normalize(cross(vec3(0.0,1.0,0.0), d) + vec3(1e-6,0.0,0.0));
    vec3 b = cross(d, t);
    mat3 m = mat3(modelMatrix);
    vN = m*d; vT = m*t; vB = m*b;
    vec4 wp = modelMatrix * vec4(position,1.0); vWP = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
    #include <logdepthbuf_vertex>
  }`;
// ombrage « dessin animé » : aplats, ombres colorées (lavande), liseré chaud au terminateur, lumière de contour
const moonFrag = LOGF + /* glsl */`
  uniform sampler2D uMap; uniform sampler2D uNormal; uniform sampler2D uShadow;
  uniform float uNormalStrength; uniform float uShadowAmt; uniform float uExposure;
  uniform vec3 uSunDir; uniform vec3 uShadowCol; uniform vec3 uRimCol;
  uniform vec3 uOrbPos[2]; uniform vec3 uOrbCol[2]; uniform float uOrbI[2]; uniform float uOrbR;
  #ifdef PATCH
  uniform sampler2D uGlobeMap; uniform sampler2D uGlobeNormal; uniform float uDetail; uniform vec3 uGeo;
  #endif
  varying vec2 vUv; varying vec3 vN; varying vec3 vT; varying vec3 vB; varying vec3 vWP;
  void main(){
    #include <logdepthbuf_fragment>
    vec3 alb = texture2D(uMap, vUv).rgb;
    vec3 tn = texture2D(uNormal, vUv).xyz*2.0-1.0;
    float ns = uNormalStrength;
    #ifdef PATCH
    // de loin, le terrain prend exactement l'aspect du globe (pas de « carré » visible)
    vec2 g = vec2(0.5 + (uGeo.y + (vUv.x - 0.5) * uGeo.z) / 6.2831853, 0.5 + (uGeo.x + (vUv.y - 0.5) * uGeo.z) / 3.14159265);
    float edge = smoothstep(0.0, 0.18, min(min(vUv.x, 1.0 - vUv.x), min(vUv.y, 1.0 - vUv.y)));
    float det = uDetail * edge;
    alb = mix(texture2D(uGlobeMap, g).rgb, alb, det);
    tn = mix(texture2D(uGlobeNormal, g).xyz*2.0-1.0, tn, det);
    ns = mix(1.5, uNormalStrength, det);
    #endif
    tn.xy *= ns;
    vec3 Ng = normalize(vN);
    vec3 N = normalize(normalize(vT)*tn.x + normalize(vB)*tn.y + Ng*tn.z);
    vec3 V = normalize(cameraPosition - vWP);
    float l = dot(N, uSunDir), lg = dot(Ng, uSunDir);
    float lit = smoothstep(-0.015, 0.045, l) * smoothstep(-0.1, 0.0, lg);
    lit *= mix(1.0, smoothstep(0.35, 0.65, texture2D(uShadow, vUv).r), uShadowAmt);
    float hi = smoothstep(0.5, 0.62, l) * lit;
    vec3 col = mix(alb * uShadowCol, alb * vec3(1.0, 0.985, 0.95), lit);
    col += alb * hi * vec3(0.10, 0.085, 0.06);
    float term = lit * (1.0 - smoothstep(0.04, 0.26, l));
    col *= mix(vec3(1.0), vec3(1.07, 0.84, 0.92), term * 0.6);
    float fres = pow(1.0 - max(dot(Ng, V), 0.0), 2.6);
    col += uRimCol * fres * 0.45 * (0.2 + 0.8 * smoothstep(-0.4, 0.5, lg));
    col *= uExposure;
    for (int i = 0; i < 2; i++) {
      vec3 L = uOrbPos[i] - vWP; float d = length(L);
      float k = smoothstep(0.0, 0.25, dot(N, L / d)) * uOrbI[i] / (1.0 + d*d/(uOrbR*uOrbR));
      col += alb * uOrbCol[i] * k;
    }
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

const earthVert = LOGV + /* glsl */`
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){ vUv = uv; vN = normalize(mat3(modelMatrix)*normal);
    vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp;
    #include <logdepthbuf_vertex>
  }`;
const earthFrag = LOGF + /* glsl */`
  uniform sampler2D uMap; uniform vec3 uSunDir; uniform float uOpacity;
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){
    #include <logdepthbuf_fragment>
    vec3 N = normalize(vN); vec3 V = normalize(cameraPosition - vWP);
    vec3 alb = texture2D(uMap, vUv).rgb;
    float l = dot(N, uSunDir);
    float lit = smoothstep(-0.03, 0.05, l);
    vec3 col = mix(alb * vec3(0.22, 0.24, 0.55), alb, lit);
    float ocean = smoothstep(0.1, 0.3, alb.b - alb.r);
    float glint = smoothstep(0.93, 0.96, dot(reflect(-uSunDir, N), V)) * ocean * lit;
    col += vec3(0.9) * glint;
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.2);
    col += vec3(0.35, 0.75, 1.0) * fres * (0.25 + 0.9 * lit);
    gl_FragColor = vec4(col * uOpacity, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

const hullVert = LOGV + `void main(){ gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);\n#include <logdepthbuf_vertex>\n}`;
const hullFrag = LOGF + `uniform vec3 uCol; uniform float uA; void main(){\n#include <logdepthbuf_fragment>\n gl_FragColor = vec4(uCol*uA, 1.0);\n#include <colorspace_fragment>\n}`;

// étoiles à quatre branches qui scintillent
const sparkleFrag = LOGF + /* glsl */`
  varying vec3 vC; varying float vF; varying float vA;
  void main(){
    #include <logdepthbuf_fragment>
    vec2 p = gl_PointCoord - 0.5; float d = length(p);
    float core = smoothstep(0.2, 0.0, d);
    float cross = (smoothstep(0.07, 0.0, abs(p.x)) + smoothstep(0.07, 0.0, abs(p.y))) * smoothstep(0.5, 0.05, d);
    float a = (core + cross * vF) * vA;
    gl_FragColor = vec4(vC * a, 1.0);
  }`;
const starVert = LOGV + /* glsl */`
  attribute float aSize; attribute vec3 aColor; attribute float aPhase;
  uniform float uTime; uniform float uPR; varying vec3 vC; varying float vF; varying float vA;
  void main(){
    float tw = 0.55 + 0.45*sin(uTime*(0.8+aPhase*2.2) + aPhase*40.0);
    vC = aColor; vA = tw; vF = smoothstep(2.6, 5.0, aSize) * (0.5 + 0.5*tw);
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    gl_PointSize = aSize * uPR * (0.75 + 0.35*tw);
    #include <logdepthbuf_vertex>
  }`;
// poussière de fée attachée à la caméra (flotte devant tout)
const dustVert = LOGV + /* glsl */`
  attribute vec3 aSeed; uniform float uTime; uniform float uPR; uniform vec2 uHalf; uniform float uAlpha;
  varying vec3 vC; varying float vF; varying float vA;
  void main(){
    float y = mod(aSeed.y * 2.0 + uTime * (0.012 + aSeed.z * 0.03), 2.0) - 1.0;
    float x = aSeed.x * 2.0 - 1.0 + sin(uTime * (0.3 + aSeed.z) + aSeed.y * 20.0) * 0.03;
    vec3 p = vec3(x * uHalf.x, y * uHalf.y, -1.0);
    gl_Position = projectionMatrix * vec4(p, 1.0);
    float tw = 0.5 + 0.5*sin(uTime*(1.5+aSeed.z*3.0) + aSeed.x*50.0);
    vC = mix(vec3(1.0,0.82,0.45), vec3(1.0,0.72,0.9), step(0.7, aSeed.z)) * 1.4;
    vF = step(0.86, aSeed.x) * tw; vA = tw * uAlpha * smoothstep(1.0, 0.7, abs(y));
    gl_PointSize = (1.6 + aSeed.z * 3.4 + vF * 5.0) * uPR;
    #include <logdepthbuf_vertex>
  }`;
const trailVert = LOGV + /* glsl */`
  attribute float aLife; attribute float aSeed; uniform float uPR;
  varying vec3 vC; varying float vF; varying float vA;
  void main(){
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    vC = mix(vec3(1.0,0.85,0.5), vec3(1.0,1.0,1.0), aSeed) * 1.6; vF = step(0.75, aSeed);
    vA = aLife; gl_PointSize = (2.0 + aSeed*5.0) * aLife * uPR;
    #include <logdepthbuf_vertex>
  }`;

const namesVert = LOGV + /* glsl */`
  attribute vec3 aStart; attribute vec3 aTarget; attribute vec4 aRand; attribute vec3 aColor;
  uniform float uProg; uniform float uTime; uniform float uDissolve; uniform float uPR; uniform float uSize; uniform float uSpread;
  uniform vec3 uUp; uniform vec3 uRight; uniform vec3 uFwd;
  varying vec3 vC; varying float vF; varying float vA;
  void main(){
    float t = clamp((uProg - aRand.x*0.45) / 0.55, 0.0, 1.0);
    float e = 1.0 - pow(1.0 - t, 4.0);
    vec3 sw = (uRight*sin(aRand.y*6.2832 + t*7.0) + uUp*cos(aRand.z*6.2832 + t*6.0) + uFwd*sin(aRand.w*6.2832 + t*5.0)) * uSpread * sin(t*3.14159);
    vec3 p = mix(aStart, aTarget, e) + sw;
    p += uUp * sin(uTime*1.3 + aRand.y*20.0) * uSpread * 0.01 * e;
    p += (uUp*(0.6 + aRand.x) + uRight*(aRand.y - 0.5)*1.2 + uFwd*(aRand.z - 0.5)) * uSpread * 2.5 * uDissolve * (0.4 + aRand.w);
    vec4 mv = viewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
    float tw = 0.7 + 0.3*sin(uTime*3.0 + aRand.w*40.0);
    vF = step(0.965, aRand.y) * tw;
    gl_PointSize = uSize * uPR * (0.6 + aRand.z*0.8 + vF*2.5) * step(0.0001, t);
    vC = aColor * mix(3.0, tw * 0.95, e);
    vA = smoothstep(0.0, 0.12, t) * (1.0 - smoothstep(0.0, 1.0, uDissolve));
    #include <logdepthbuf_vertex>
  }`;

const ringVert = LOGV + `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);\n#include <logdepthbuf_vertex>\n}`;
const ringFrag = LOGF + /* glsl */`
  uniform float uA; uniform vec3 uCol; varying vec2 vUv;
  void main(){
    #include <logdepthbuf_fragment>
    float r = length(vUv - 0.5) * 2.0;
    float band = smoothstep(0.78, 0.96, r) * smoothstep(1.0, 0.96, r);
    gl_FragColor = vec4(uCol * band * uA, 1.0);
  }`;

// tapis volant : tissu qui ondule
const carpetVert = LOGV + /* glsl */`
  uniform float uTime; varying vec2 vUv; varying float vShade;
  void main(){
    vUv = uv; vec3 p = position;
    float w = sin(uv.x*7.0 - uTime*4.2)*0.045 + sin(uv.y*4.0 + uTime*2.3)*0.018;
    w *= 0.35 + 0.65*(1.0 - uv.x);
    p.z += w;
    vShade = 0.9 + 0.22 * cos(uv.x*7.0 - uTime*4.2) * (0.35 + 0.65*(1.0 - uv.x));
    gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0);
    #include <logdepthbuf_vertex>
  }`;
const carpetFrag = LOGF + /* glsl */`
  uniform sampler2D uMap; uniform float uA; varying vec2 vUv; varying float vShade;
  void main(){
    #include <logdepthbuf_fragment>
    vec4 c = texture2D(uMap, vUv); if (c.a < 0.4 || uA < 0.01) discard;
    gl_FragColor = vec4(c.rgb * vShade * (gl_FrontFacing ? 1.0 : 0.7) * uA, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

const FinalShader = {
  uniforms: { tDiffuse: { value: null }, uZoom: { value: 0 }, uFlash: { value: 0 }, uVig: { value: 1 }, uAspect: { value: 1 }, uFade: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
  fragmentShader: /* glsl */`
    uniform sampler2D tDiffuse; uniform float uZoom; uniform float uFlash; uniform float uVig; uniform float uAspect; uniform float uFade;
    varying vec2 vUv;
    void main(){
      vec2 dir = vUv - 0.5; vec3 col;
      if (uZoom > 0.001) { col = vec3(0.0); float tot = 0.0;
        for (int i = 0; i < 14; i++) { float t = float(i)/13.0; float w = 1.0 - t*0.6; col += texture2D(tDiffuse, vUv - dir*uZoom*t).rgb * w; tot += w; }
        col /= tot;
      } else { col = texture2D(tDiffuse, vUv).rgb; }
      float v = smoothstep(1.1, 0.3, length(dir*vec2(uAspect, 1.0)) * 1.1);
      col = mix(col * mix(vec3(0.42, 0.36, 0.78), vec3(1.0), v), col, 1.0 - uVig);
      col += vec3(1.0, 0.9, 0.95) * uFlash;
      col *= 1.0 - uFade;
      gl_FragColor = vec4(col, 1.0);
    }`,
};

/* ------------------------------ textures peintes ------------------------------ */
const canvasTex = (c) => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
function glowTexture(stops) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'); const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  stops.forEach(([o, col]) => gr.addColorStop(o, col)); g.fillStyle = gr; g.fillRect(0, 0, 256, 256);
  return canvasTex(c);
}
function skyTexture() {
  const c = document.createElement('canvas'); c.width = 512; c.height = 1024; const g = c.getContext('2d');
  const lg = g.createLinearGradient(0, 0, 0, 1024);
  lg.addColorStop(0, '#040622'); lg.addColorStop(0.35, '#0d1552'); lg.addColorStop(0.7, '#251f6e'); lg.addColorStop(1, '#4a2f86');
  g.fillStyle = lg; g.fillRect(0, 0, 512, 1024);
  g.globalCompositeOperation = 'lighter';
  [[0.22, 0.68, 0.42, 'rgba(255,110,200,0.10)'], [0.82, 0.3, 0.5, 'rgba(80,190,255,0.08)'], [0.6, 0.86, 0.38, 'rgba(160,110,255,0.12)'], [0.3, 0.18, 0.3, 'rgba(120,140,255,0.06)']]
    .forEach(([x, y, r, col]) => { const rg = g.createRadialGradient(x * 512, y * 1024, 0, x * 512, y * 1024, r * 1024); rg.addColorStop(0, col); rg.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = rg; g.fillRect(0, 0, 512, 1024); });
  return canvasTex(c);
}
function cloudTexture(seed) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 256; const g = c.getContext('2d');
  let s = seed; const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const puffs = [];
  for (let i = 0; i < 9; i++) { const x = 90 + i * 42 + rnd() * 20; const r = 40 + Math.sin((i / 8) * Math.PI) * 55 + rnd() * 18; puffs.push([x, 190 - r * 0.75, r]); }
  g.fillStyle = '#fff';
  puffs.forEach(([x, y, r]) => { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); });
  g.fillRect(70, 150, 380, 45); g.beginPath(); g.ellipse(256, 196, 200, 18, 0, 0, Math.PI * 2); g.fill();
  g.globalCompositeOperation = 'source-atop';
  const lg = g.createLinearGradient(0, 40, 0, 215);
  lg.addColorStop(0, '#fbe6ff'); lg.addColorStop(0.45, '#c9a8e8'); lg.addColorStop(1, '#5a4aa0');
  g.fillStyle = lg; g.fillRect(0, 0, 512, 256);
  puffs.forEach(([x, y, r]) => { const rg = g.createRadialGradient(x + r * 0.3, y - r * 0.45, 0, x + r * 0.3, y - r * 0.45, r); rg.addColorStop(0, 'rgba(255,240,250,0.55)'); rg.addColorStop(1, 'rgba(255,240,250,0)'); g.fillStyle = rg; g.fillRect(0, 0, 512, 256); });
  const c2 = document.createElement('canvas'); c2.width = 512; c2.height = 256; const g2 = c2.getContext('2d');
  g2.filter = 'blur(3px)'; const blurOK = g2.filter === 'blur(3px)'; g2.drawImage(c, 0, 0);
  return canvasTex(blurOK ? c2 : c);
}
function carpetTexture() {
  const W = 640, H = 400, F = 46; const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
  for (let y = 18; y < H - 18; y += 7) { g.strokeStyle = y % 14 ? '#f3dc9e' : '#e9c77a'; g.lineWidth = 3; g.beginPath(); g.moveTo(4, y); g.lineTo(F + 2, y); g.moveTo(W - F - 2, y); g.lineTo(W - 4, y); g.stroke(); }
  const x0 = F, x1 = W - F, y0 = 10, y1 = H - 10;
  const rect = (a, b, cc, d, col) => { g.fillStyle = col; g.fillRect(a, b, cc - a, d - b); };
  rect(x0, y0, x1, y1, '#e0b54f'); rect(x0 + 12, y0 + 12, x1 - 12, y1 - 12, '#7a1630'); rect(x0 + 24, y0 + 24, x1 - 24, y1 - 24, '#e8c36a');
  rect(x0 + 30, y0 + 30, x1 - 30, y1 - 30, '#1f2a6b'); rect(x0 + 44, y0 + 44, x1 - 44, y1 - 44, '#b2223e');
  g.fillStyle = '#f3dc9e';
  for (let x = x0 + 40; x < x1 - 30; x += 22) { [y0 + 37, y1 - 37].forEach((y) => { g.beginPath(); g.moveTo(x, y - 5); g.lineTo(x + 5, y); g.lineTo(x, y + 5); g.lineTo(x - 5, y); g.fill(); }); }
  for (let y = y0 + 44; y < y1 - 40; y += 22) { [x0 + 37, x1 - 37].forEach((x) => { g.beginPath(); g.moveTo(x, y - 5); g.lineTo(x + 5, y); g.lineTo(x, y + 5); g.lineTo(x - 5, y); g.fill(); }); }
  const star = (cx, cy, R, rot, col) => { g.fillStyle = col; g.beginPath(); for (let i = 0; i < 16; i++) { const a = rot + (i * Math.PI) / 8 - Math.PI / 2, r = i % 2 ? R * 0.7654 : R; g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } g.fill(); };
  star(W / 2, H / 2, 92, 0, '#e8c36a'); star(W / 2, H / 2, 74, 0, '#1f2a6b'); star(W / 2, H / 2, 50, Math.PI / 8, '#e8c36a'); star(W / 2, H / 2, 30, 0, '#0f7a66');
  g.fillStyle = '#f7e7b8'; g.beginPath(); g.arc(W / 2, H / 2, 10, 0, Math.PI * 2); g.fill();
  [[x0 + 80, y0 + 80], [x1 - 80, y0 + 80], [x0 + 80, y1 - 80], [x1 - 80, y1 - 80]].forEach(([x, y]) => { star(x, y, 26, 0, '#e8c36a'); star(x, y, 14, Math.PI / 8, '#1f2a6b'); });
  return canvasTex(c);
}
function loadImageData(url, manager) {
  return new Promise((res, rej) => {
    manager.itemStart(url);
    const img = new Image(); img.decoding = 'async';
    img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height;
      const g = c.getContext('2d'); g.drawImage(img, 0, 0); res(g.getImageData(0, 0, c.width, c.height)); manager.itemEnd(url); };
    img.onerror = (e) => { manager.itemError(url); rej(e); };
    img.src = url;
  });
}

/* ============================== SCÈNE ============================== */
export async function createScene(canvas, { mobile, onProgress }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', logarithmicDepthBuffer: true });
  const PR = Math.min(window.devicePixelRatio || 1, mobile ? 1.6 : 2);
  renderer.setPixelRatio(PR);
  renderer.setSize(innerWidth, innerHeight, false);
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  scene.background = skyTexture();
  const camera = new THREE.PerspectiveCamera(30, innerWidth / innerHeight, 0.00002, 3000);
  scene.add(camera);

  /* ---------- chargement ---------- */
  const manager = new THREE.LoadingManager();
  manager.onProgress = (_u, l, t) => onProgress && onProgress(l / t);
  const tl = new THREE.TextureLoader(manager);
  const tex = (u, srgb = true) => new Promise((res, rej) => tl.load(u, (t) => {
    if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy(); res(t); }, undefined, rej));
  const [mColor, mNormal, pColor, pNormal, pShadow, eMap, hData] = await Promise.all([
    tex(`assets/moon_toon_${mobile ? 2 : 4}k.jpg`), tex(`assets/moon_toon_n_${mobile ? 1 : 2}k.jpg`, false),
    tex('assets/terrain_toon.png'), tex('assets/terrain_toon_n.png', false), tex('assets/terrain_toon_s.png', false),
    tex('assets/earth_toon.jpg'), loadImageData('assets/terrain_toon_h.png', manager),
  ]);

  /* ---------- uniforms partagés ---------- */
  const shared = {
    uSunDir: { value: new THREE.Vector3(0, 0, 1) },
    uOrbPos: { value: [new THREE.Vector3(), new THREE.Vector3()] },
    uOrbCol: { value: [new THREE.Color(0.7, 0.85, 1.0), new THREE.Color(1.0, 0.72, 0.3)] },
    uOrbI: { value: [0, 0] },
    uOrbR: { value: 0.03 },
    uExposure: { value: 0.92 },
    uShadowCol: { value: new THREE.Color(0.23, 0.22, 0.55) },
    uRimCol: { value: new THREE.Color(0.42, 0.62, 1.0) },
  };
  const white = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1); white.needsUpdate = true;
  const moonMat = (map, normal, shadow, ns) => new THREE.ShaderMaterial({
    vertexShader: moonVert, fragmentShader: moonFrag,
    uniforms: { ...shared, uMap: { value: map }, uNormal: { value: normal }, uShadow: { value: shadow }, uNormalStrength: { value: ns }, uShadowAmt: { value: 0 } },
  });

  /* ---------- Lune ---------- */
  const pivot = new THREE.Group();
  pivot.rotation.set(LAT0, -Math.PI / 2 - LON0, 0); // Copernic face à +Z, nord vers +Y, est vers +X
  scene.add(pivot);
  pivot.add(new THREE.Mesh(new THREE.SphereGeometry(1, mobile ? 160 : 256, mobile ? 120 : 192), moonMat(mColor, mNormal, white, 1.5)));
  const hullMat = (col) => new THREE.ShaderMaterial({ vertexShader: hullVert, fragmentShader: hullFrag, side: THREE.BackSide, uniforms: { uCol: { value: new THREE.Color(col) }, uA: { value: 1 } } });
  const moonHull = new THREE.Mesh(new THREE.SphereGeometry(1, 96, 64), hullMat('#1d1652')); // contour « encré »
  scene.add(moonHull);

  // terrain du cratère Copernic (relief LOLA adouci)
  const N = mobile ? 200 : 320;
  const hw = hData.width, hh = hData.height, hd = hData.data;
  const hAt = (u, v) => {
    const x = Math.min(hw - 1.001, Math.max(0, u * (hw - 1))), y = Math.min(hh - 1.001, Math.max(0, v * (hh - 1)));
    const x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0; const p = (xx, yy) => hd[(yy * hw + xx) * 4] / 255;
    return lerp(lerp(p(x0, y0), p(x0 + 1, y0), fx), lerp(p(x0, y0 + 1), p(x0 + 1, y0 + 1), fx), fy);
  };
  const pos = new Float32Array((N + 1) * (N + 1) * 3), uvs = new Float32Array((N + 1) * (N + 1) * 2);
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
    const u = i / N, v = j / N, k = j * (N + 1) + i;
    const edge = smooth(0, 0.12, Math.min(u, 1 - u, v, 1 - v));
    const p = objPos(LAT0 + (0.5 - v) * SPAN, LON0 + (u - 0.5) * SPAN, 1 + BASE + hAt(u, v) * RELIEF * edge);
    pos.set([p.x, p.y, p.z], k * 3); uvs.set([u, 1 - v], k * 2);
  }
  const idx = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(pos, 3)); pg.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); pg.setIndex(idx);
  const patchMat = moonMat(pColor, pNormal, pShadow, 2.4);
  patchMat.defines = { PATCH: 1 };
  Object.assign(patchMat.uniforms, { uGlobeMap: { value: mColor }, uGlobeNormal: { value: mNormal }, uDetail: { value: 0 }, uGeo: { value: new THREE.Vector3(LAT0, LON0, SPAN) } });
  pivot.add(new THREE.Mesh(pg, patchMat));
  const groundC = 1 + BASE + hAt(0.5, 0.5) * RELIEF;
  const M = new THREE.Vector3(0, 0, groundC + 0.0075);

  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 'rgba(255,236,200,0.5)'], [0.2, 'rgba(255,210,170,0.22)'], [0.45, 'rgba(190,150,255,0.08)'], [1, 'rgba(0,0,0,0)']]), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  halo.scale.setScalar(4.6); scene.add(halo);

  /* ---------- Terre ---------- */
  const earthMat = new THREE.ShaderMaterial({ vertexShader: earthVert, fragmentShader: earthFrag, uniforms: { uMap: { value: eMap }, uSunDir: shared.uSunDir, uOpacity: { value: 1 } } });
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 48), earthMat);
  earth.rotation.set(0.3, 2.3, 0.1); scene.add(earth);
  const earthHull = new THREE.Mesh(new THREE.SphereGeometry(1, 48, 32), hullMat('#1d1652')); scene.add(earthHull);
  const earthGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 'rgba(110,170,255,0)'], [0.4, 'rgba(110,170,255,0)'], [0.46, 'rgba(140,200,255,0.5)'], [0.62, 'rgba(120,150,255,0.1)'], [1, 'rgba(0,0,0,0)']]), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  scene.add(earthGlow);

  /* ---------- ciel : étoiles scintillantes ---------- */
  const SN = mobile ? 2200 : 4200;
  const sp = new Float32Array(SN * 3), ss = new Float32Array(SN), sc = new Float32Array(SN * 3), sph = new Float32Array(SN);
  const band = new THREE.Vector3(0.3, 1, 0.45).normalize();
  for (let i = 0; i < SN; i++) {
    const v = new THREE.Vector3().randomDirection();
    if (i < SN * 0.35) v.addScaledVector(band, -v.dot(band) * (0.8 + Math.random() * 0.2)).normalize();
    sp.set([v.x * 900, v.y * 900, v.z * 900], i * 3);
    const m = Math.random(); ss[i] = m < 0.86 ? 1.2 + Math.random() * 1.6 : m < 0.97 ? 3 + Math.random() * 3 : 7 + Math.random() * 6;
    const t = Math.random(); const col = t < 0.2 ? [1, 0.86, 0.6] : t < 0.35 ? [0.75, 0.85, 1] : t < 0.42 ? [1, 0.75, 0.9] : [1, 0.98, 0.95];
    const b = 0.55 + Math.random() * 0.6; sc.set([col[0] * b, col[1] * b, col[2] * b], i * 3); sph[i] = Math.random();
  }
  const sgeo = new THREE.BufferGeometry();
  sgeo.setAttribute('position', new THREE.BufferAttribute(sp, 3)); sgeo.setAttribute('aSize', new THREE.BufferAttribute(ss, 1));
  sgeo.setAttribute('aColor', new THREE.BufferAttribute(sc, 3)); sgeo.setAttribute('aPhase', new THREE.BufferAttribute(sph, 1));
  const starMat = new THREE.ShaderMaterial({ vertexShader: starVert, fragmentShader: sparkleFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uTime: { value: 0 }, uPR: { value: PR } } });
  const stars = new THREE.Points(sgeo, starMat); stars.frustumCulled = false; scene.add(stars);

  /* ---------- poussière de fée ---------- */
  const DN = mobile ? 70 : 130; const dseed = new Float32Array(DN * 3); for (let i = 0; i < DN * 3; i++) dseed[i] = Math.random();
  const dgeo = new THREE.BufferGeometry(); dgeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(DN * 3), 3)); dgeo.setAttribute('aSeed', new THREE.BufferAttribute(dseed, 3));
  const dustMat = new THREE.ShaderMaterial({ vertexShader: dustVert, fragmentShader: sparkleFrag, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uPR: { value: PR }, uHalf: { value: new THREE.Vector2(1, 1) }, uAlpha: { value: 1 } } });
  const dust = new THREE.Points(dgeo, dustMat); dust.frustumCulled = false; dust.renderOrder = 20; camera.add(dust);

  /* ---------- nuages ---------- */
  const cloudDefs = [[-1.55, -1.2, 1.2, 1.7], [1.45, -1.3, 1.5, 1.6], [0.1, -1.75, 2.6, 2.2], [-2.7, -0.25, 0.2, 1.5], [2.8, 0.2, -0.3, 1.6], [-0.7, -2.1, 4.2, 2.6]];
  const clouds = cloudDefs.map(([x, y, z, s], i) => {
    const c = new THREE.Sprite(new THREE.SpriteMaterial({ map: cloudTexture(17 + i * 31), transparent: true, depthWrite: false, opacity: 0 }));
    c.position.set(x, y, z); c.scale.set(s, s * 0.5, 1); c.userData = { x, y, z, ph: i * 1.7 }; scene.add(c); return c;
  });

  /* ---------- tapis volant ---------- */
  const carpetMat = new THREE.ShaderMaterial({ vertexShader: carpetVert, fragmentShader: carpetFrag, side: THREE.DoubleSide,
    uniforms: { uTime: { value: 0 }, uMap: { value: carpetTexture() }, uA: { value: 0 } } });
  const carpet = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.625, 40, 20), carpetMat);
  scene.add(carpet);
  const TRN = 180, trPos = new Float32Array(TRN * 3), trLife = new Float32Array(TRN), trSeed = new Float32Array(TRN), trVel = new Float32Array(TRN * 3);
  for (let i = 0; i < TRN; i++) trSeed[i] = Math.random();
  const trGeo = new THREE.BufferGeometry();
  trGeo.setAttribute('position', new THREE.BufferAttribute(trPos, 3)); trGeo.setAttribute('aLife', new THREE.BufferAttribute(trLife, 1)); trGeo.setAttribute('aSeed', new THREE.BufferAttribute(trSeed, 1));
  const trail = new THREE.Points(trGeo, new THREE.ShaderMaterial({ vertexShader: trailVert, fragmentShader: sparkleFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uPR: { value: PR } } }));
  trail.frustumCulled = false; scene.add(trail);
  let trHead = 0;

  /* ---------- lumières de Shayma & Bilal ---------- */
  const orbTex = [
    glowTexture([[0, 'rgba(255,255,255,1)'], [0.08, 'rgba(225,240,255,0.95)'], [0.25, 'rgba(150,200,255,0.4)'], [1, 'rgba(0,0,0,0)']]),
    glowTexture([[0, 'rgba(255,255,255,1)'], [0.08, 'rgba(255,232,180,0.95)'], [0.25, 'rgba(255,170,70,0.4)'], [1, 'rgba(0,0,0,0)']]),
  ];
  const orbs = orbTex.map((t) => { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 })); scene.add(s); return s; });
  const burst = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture([[0, 'rgba(255,255,255,1)'], [0.1, 'rgba(255,230,240,0.85)'], [0.35, 'rgba(255,190,140,0.2)'], [1, 'rgba(0,0,0,0)']]), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 }));
  burst.position.copy(M); scene.add(burst);
  const ringMat = new THREE.ShaderMaterial({ vertexShader: ringVert, fragmentShader: ringFrag, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: { uA: { value: 0 }, uCol: { value: new THREE.Color(1, 0.8, 0.9) } } });
  const ring = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), ringMat);
  ring.position.set(0, 0, groundC + 0.0012); ring.scale.setScalar(0.0001); scene.add(ring);

  /* ---------- caméra : poses clés ---------- */
  const portrait = () => innerWidth / innerHeight < 0.9;
  const introDist = () => {
    const a = innerWidth / innerHeight, t = Math.tan(15 * DEG), H = innerHeight;
    if (a < 1) return 1 / (0.72 * t * a);
    return 1 / (Math.min(0.5, Math.max(0.28, (0.705 * H - 250) / H)) * t);
  };
  const introY = (d = introDist()) => (innerWidth / innerHeight < 1 ? 0.035 : 0.0475 + 55 / innerHeight) * 2 * d * Math.tan(15 * DEG);
  const A = 0.14, ALT = 1.05;
  const landPos = new THREE.Vector3(0, -Math.sin(A), Math.cos(A)).multiplyScalar(ALT);
  const landTarget = new THREE.Vector3(0, Math.sin(0.035), Math.cos(0.035));
  const tNorth = new THREE.Vector3(0, Math.cos(A), Math.sin(A)), upCam = landPos.clone().normalize();
  const dip = Math.acos(1 / ALT);
  const earthAt = (rise) => {
    const el = -dip + lerp(-8, portrait() ? 19 : 8, rise) * DEG;
    const dir = tNorth.clone().multiplyScalar(Math.cos(el)).addScaledVector(upCam, Math.sin(el));
    dir.applyAxisAngle(upCam, -(portrait() ? 9 : 21) * DEG);
    return landPos.clone().addScaledVector(dir, 70);
  };
  const ER = 70 * Math.tan(2.4 * DEG);
  earth.scale.setScalar(ER); earthGlow.scale.setScalar(ER * 2.7);

  /* ---------- état animable (piloté par GSAP) ---------- */
  const S = {
    mode: 'intro',
    cam: { x: 0, y: introY(), z: introDist(), tx: 0, ty: introY(), tz: 0, fov: 30 },
    sun: { theta: 112 * DEG, tilt: 0.12 },
    fx: { zoom: 0, flash: 0, bloom: 0.42, fade: 1, vig: 1, exposure: 0.92 },
    moon: { halo: 0 },
    earth: { rise: 0, show: 0 },
    shadow: { amt: 0 },
    orbs: { p: 0, i: 0, show: 0 },
    burst: { a: 0, ring: 0 },
    names: { prog: 0, dissolve: 0 },
    scroll: { p: 0 },
    clouds: { a: 0 },
    carpet: { a: 0 },
    pointer: { x: 0, y: 0, sx: 0, sy: 0 },
  };

  /* ---------- prénoms en poussière d'étoiles ---------- */
  let names = null;
  function buildNames(font = 'Great Vibes') {
    if (names) { scene.remove(names); names.geometry.dispose(); }
    const port = portrait();
    const c = document.createElement('canvas'); const W = 1400, H = port ? 1100 : 420; c.width = W; c.height = H;
    const g = c.getContext('2d'); g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
    const fit = (txt, size) => { g.font = `${size}px "${font}"`; const w = g.measureText(txt).width; return w > W * 0.9 ? size * W * 0.9 / w : size; };
    if (port) {
      const fs = Math.min(fit('Shayma', 330), fit('Bilal', 330));
      g.font = `${fs}px "${font}"`; g.fillText('Shayma', W / 2, H * 0.24);
      g.font = `${fs * 0.6}px "${font}"`; g.fillText('&', W / 2, H * 0.52);
      g.font = `${fs}px "${font}"`; g.fillText('Bilal', W / 2, H * 0.78);
    } else { const fs = fit('Shayma & Bilal', 250); g.font = `${fs}px "${font}"`; g.fillText('Shayma & Bilal', W / 2, H * 0.55); }
    const data = g.getImageData(0, 0, W, H).data; const pts = [];
    const step = port ? 4 : 3;
    for (let y = 0; y < H; y += step) for (let x = 0; x < W; x += step) if (data[(y * W + x) * 4 + 3] > 120) pts.push([x / W - 0.5, 0.5 - y / H]);
    const max = mobile ? 7000 : 14000; while (pts.length > max) pts.splice((Math.random() * pts.length) | 0, 1);
    const fwd = landTarget.clone().sub(landPos).normalize();
    const right = new THREE.Vector3().crossVectors(fwd, upCam).normalize();
    const up = new THREE.Vector3().crossVectors(right, fwd).normalize();
    const dist = 0.12, fovL = (port ? 55 : 40) * DEG, th = Math.tan(fovL / 2);
    const viewW = 2 * dist * th * (innerWidth / innerHeight);
    const width = Math.min(viewW * (port ? 0.8 : 0.56), 2 * dist * th * (port ? 0.5 : 0.62) * W / H), height = width * H / W;
    const C = landPos.clone().addScaledVector(fwd, dist).addScaledVector(up, (port ? 0.36 : 0.3) * dist * th);
    const n = pts.length, aS = new Float32Array(n * 3), aT = new Float32Array(n * 3), aR = new Float32Array(n * 4), aC = new Float32Array(n * 3);
    const silver = [0.7, 0.82, 1.0], gold = [1.0, 0.72, 0.32], pink = [1.0, 0.62, 0.86];
    pts.forEach(([x, y], i) => {
      const t = C.clone().addScaledVector(right, x * width).addScaledVector(up, y * height); aT.set([t.x, t.y, t.z], i * 3);
      const s = M.clone().add(new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.0015)); aS.set([s.x, s.y, s.z], i * 3);
      aR.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const r = Math.random(); aC.set(r < 0.1 ? pink : (x < 0 ? (r < 0.85 ? silver : gold) : (r < 0.85 ? gold : silver)), i * 3);
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(aT.slice(), 3));
    geo.setAttribute('aStart', new THREE.BufferAttribute(aS, 3)); geo.setAttribute('aTarget', new THREE.BufferAttribute(aT, 3));
    geo.setAttribute('aRand', new THREE.BufferAttribute(aR, 4)); geo.setAttribute('aColor', new THREE.BufferAttribute(aC, 3));
    const mat = new THREE.ShaderMaterial({ vertexShader: namesVert, fragmentShader: sparkleFrag, transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending,
      uniforms: { uProg: { value: 0 }, uTime: { value: 0 }, uDissolve: { value: 0 }, uPR: { value: PR }, uSize: { value: mobile ? 2.8 : 3.2 },
        uSpread: { value: width * 0.12 }, uUp: { value: up }, uRight: { value: right }, uFwd: { value: fwd } } });
    names = new THREE.Points(geo, mat); names.frustumCulled = false; names.renderOrder = 10; scene.add(names);
  }

  /* ---------- parcours caméra au scroll ---------- */
  let scrollPath = null;
  function buildScrollPath() {
    const k = portrait() ? 0.35 : 1;
    const P = [landPos.clone(), new THREE.Vector3(0, -0.55, 1.45), new THREE.Vector3(2.1 * k, -0.5, 2.7), new THREE.Vector3(-1.9 * k, 0.45, 3.3), new THREE.Vector3(0.4 * k, 0.15, 5.6)];
    const T = [landTarget.clone(), new THREE.Vector3(0, 0.25, 0.75), new THREE.Vector3(0.95 * k, portrait() ? -0.75 : 0, 0), new THREE.Vector3(-0.95 * k, portrait() ? -0.75 : 0, 0), new THREE.Vector3(0, portrait() ? -1.1 : 0, 0)];
    scrollPath = { pos: new THREE.CatmullRomCurve3(P, false, 'catmullrom', 0.3), tgt: new THREE.CatmullRomCurve3(T, false, 'catmullrom', 0.3) };
  }
  const sunKeys = [[0, 78], [0.3, 30], [0.62, 14], [1, 148]];
  const keyed = (keys, p) => { for (let i = 1; i < keys.length; i++) if (p <= keys[i][0]) { const [a, va] = keys[i - 1], [b, vb] = keys[i]; const t = (p - a) / (b - a); return lerp(va, vb, t * t * (3 - 2 * t)); } return keys[keys.length - 1][1]; };

  /* ---------- post-production ---------- */
  const composer = new EffectComposer(renderer);
  composer.setPixelRatio(PR); composer.setSize(innerWidth, innerHeight);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), 0.45, 0.5, 0.9);
  composer.addPass(bloom);
  const finalPass = new ShaderPass(FinalShader); composer.addPass(finalPass);
  composer.addPass(new OutputPass());

  /* ---------- interaction ---------- */
  const ray = new THREE.Raycaster(); const ndc = new THREE.Vector2();
  function hitMoon(cx, cy) {
    ndc.set((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
    return ray.ray.intersectsSphere(new THREE.Sphere(new THREE.Vector3(), 1));
  }
  function resize() {
    camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight, false); composer.setSize(innerWidth, innerHeight);
    bloom.resolution.set(innerWidth / 2, innerHeight / 2);
    finalPass.uniforms.uAspect.value = innerWidth / innerHeight;
    if (S.mode === 'intro') { S.cam.z = introDist(); S.cam.y = S.cam.ty = introY(); }
    if (S.mode === 'scroll') buildScrollPath();
  }
  finalPass.uniforms.uAspect.value = innerWidth / innerHeight;

  /* ---------- boucle ---------- */
  const clock = new THREE.Clock(); const tmp = new THREE.Vector3(); const tgt = new THREE.Vector3();
  const cA = new THREE.Vector3(), cB = new THREE.Vector3();
  let last = 0;
  function frame() {
    const t = clock.getElapsedTime(); const dt = Math.min(0.05, t - last); last = t;
    const P = S.pointer; P.sx += (P.x - P.sx) * 0.05; P.sy += (P.y - P.sy) * 0.05;

    let theta = S.sun.theta;
    if (S.mode === 'scroll') theta = keyed(sunKeys, S.scroll.p) * DEG;
    shared.uSunDir.value.set(Math.sin(theta), Math.sin(S.sun.tilt), Math.cos(theta)).normalize();

    if (S.mode === 'scroll' && scrollPath) {
      const p = S.scroll.p; scrollPath.pos.getPoint(p, tmp); scrollPath.tgt.getPoint(p, tgt);
      camera.position.copy(tmp); camera.fov = lerp(portrait() ? 55 : 40, portrait() ? 42 : 32, smooth(0, 0.3, p));
      camera.up.copy(tmp).normalize().lerp(new THREE.Vector3(0, 1, 0), smooth(0, 0.25, p)).normalize();
      camera.lookAt(tgt);
    } else {
      const c = S.cam; const sway = S.mode === 'intro' ? 1 : 0;
      camera.position.set(c.x + (Math.sin(t * 0.13) * 0.05 + P.sx * 0.25) * sway * c.z * 0.1, c.y + (Math.cos(t * 0.11) * 0.04 - P.sy * 0.18) * sway * c.z * 0.1, c.z);
      camera.fov = c.fov;
      const upBlend = smooth(1.15, 1.03, camera.position.length());
      camera.up.set(0, 1, 0).lerp(camera.position.clone().normalize(), upBlend * 0.98).normalize();
      camera.lookAt(c.tx, c.ty, c.tz);
    }
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
    const camD = camera.position.length(), pxW = 2 * Math.tan(camera.fov * DEG / 2) / innerHeight;

    shared.uExposure.value = S.mode === 'scroll' ? lerp(S.fx.exposure, 0.9, smooth(0, 0.2, S.scroll.p)) : S.fx.exposure;
    patchMat.uniforms.uDetail.value = smooth(1.9, 1.25, camD);
    patchMat.uniforms.uShadowAmt.value = S.mode === 'scroll' ? S.shadow.amt * (1 - smooth(0, 0.08, S.scroll.p)) : S.shadow.amt;

    // contour encré : ~2,4 px quelle que soit la distance
    moonHull.scale.setScalar(1 + 2.4 * pxW * (camD - 1));
    moonHull.visible = camD > 1.35; moonHull.material.uniforms.uA.value = smooth(1.35, 1.9, camD);
    halo.material.opacity = S.moon.halo * (0.55 + 0.45 * smooth(1.6, 4, camD));

    // Terre
    const ep = earthAt(S.earth.rise); earth.position.copy(ep); earthGlow.position.copy(ep); earthHull.position.copy(ep);
    earth.rotation.y += 0.0005;
    earthHull.scale.setScalar(ER + 2.2 * pxW * camera.position.distanceTo(ep));
    earthMat.uniforms.uOpacity.value = S.earth.show; earthGlow.material.opacity = S.earth.show;
    earth.visible = earthGlow.visible = earthHull.visible = S.earth.show > 0.001;

    // nuages : dérivent, s'effacent quand on les traverse
    const cloudA = S.mode === 'scroll' ? S.clouds.a * smooth(0.25, 0.4, S.scroll.p) : S.clouds.a;
    cB.set(0, 0, -1).applyQuaternion(camera.quaternion);
    clouds.forEach((cl) => {
      const u = cl.userData; cl.position.set(u.x + Math.sin(t * 0.05 + u.ph) * 0.35, u.y + Math.sin(t * 0.13 + u.ph) * 0.04, u.z);
      const d = camera.position.distanceTo(cl.position);
      const front = cA.copy(cl.position).sub(camera.position).dot(cB) > 0 ? 1 : 0;
      cl.material.opacity = cloudA * smooth(0.6, 1.8, d) * front * 0.9; cl.visible = cl.material.opacity > 0.002;
    });

    // tapis volant : traverse le ciel devant la lune, avec traînée d'étincelles
    const ca = S.mode === 'scroll' ? S.carpet.a * smooth(0.8, 0.9, S.scroll.p) : S.carpet.a;
    carpetMat.uniforms.uA.value = ca; carpetMat.uniforms.uTime.value = t; carpet.visible = ca > 0.002;
    const cyc = (t * 0.075) % 1; const cx = lerp(-7.5, 7.5, cyc);
    carpet.position.set(cx, -0.42 + Math.sin(t * 0.9) * 0.08 + cx * 0.06, 2.4);
    carpet.rotation.set(-1.15 + Math.sin(t * 1.1) * 0.05, 0.12, -0.08 + Math.sin(t * 0.9 + 1) * 0.06);
    carpet.updateMatrixWorld();
    if (carpet.visible) {
      for (let k = 0; k < 2; k++) {
        const i = trHead; trHead = (trHead + 1) % TRN;
        tmp.set(-0.5, (Math.random() - 0.5) * 0.6, 0).applyMatrix4(carpet.matrixWorld);
        trPos.set([tmp.x, tmp.y, tmp.z], i * 3); trLife[i] = 1;
        trVel.set([-0.05 - Math.random() * 0.1, -0.05 - Math.random() * 0.12, (Math.random() - 0.5) * 0.05], i * 3);
      }
    }
    let anyLife = false;
    for (let i = 0; i < TRN; i++) if (trLife[i] > 0) {
      anyLife = true; trLife[i] = Math.max(0, trLife[i] - dt * 0.55);
      trPos[i * 3] += trVel[i * 3] * dt; trPos[i * 3 + 1] += trVel[i * 3 + 1] * dt; trPos[i * 3 + 2] += trVel[i * 3 + 2] * dt;
    }
    trGeo.attributes.position.needsUpdate = true; trGeo.attributes.aLife.needsUpdate = true;
    trail.visible = anyLife;

    // lumières de Shayma & Bilal
    const op = S.orbs.p, e = 1 - Math.pow(1 - op, 2.2);
    const R = lerp(0.075, 0, e), ang = e * Math.PI * 6.2 + 0.4, hgt = lerp(0.05, 0, e);
    for (let i = 0; i < 2; i++) {
      const a = ang + i * Math.PI;
      const v = shared.uOrbPos.value[i].set(M.x + Math.cos(a) * R, M.y + Math.sin(a) * R * 0.85, M.z + hgt + Math.sin(a * 2) * 0.002 * (1 - e));
      orbs[i].position.copy(v);
      const fl = 0.9 + 0.1 * Math.sin(t * 9 + i * 2);
      orbs[i].material.opacity = S.orbs.show; orbs[i].scale.setScalar(0.012 * fl * (0.7 + S.orbs.show * 0.3));
      shared.uOrbI.value[i] = S.orbs.i * fl;
    }
    burst.material.opacity = S.burst.a; burst.scale.setScalar(0.004 + S.burst.a * 0.05);
    ring.scale.setScalar(0.0001 + S.burst.ring * 0.33); ringMat.uniforms.uA.value = (1 - S.burst.ring) * (S.burst.ring > 0 ? 1.6 : 0);

    if (names) { const u = names.material.uniforms; u.uProg.value = S.names.prog; u.uTime.value = t; u.uDissolve.value = S.mode === 'scroll' ? smooth(0, 0.07, S.scroll.p) : S.names.dissolve; names.visible = S.names.prog > 0 && u.uDissolve.value < 1; }

    starMat.uniforms.uTime.value = t;
    const du = dustMat.uniforms; du.uTime.value = t; du.uHalf.value.set(Math.tan(camera.fov * DEG / 2) * camera.aspect, Math.tan(camera.fov * DEG / 2));
    du.uAlpha.value = (S.mode === 'scroll' ? 0.55 : 1) * (1 - S.fx.fade);
    bloom.strength = S.fx.bloom;
    const fu = finalPass.uniforms; fu.uZoom.value = S.fx.zoom; fu.uFlash.value = S.fx.flash; fu.uFade.value = S.fx.fade; fu.uVig.value = S.fx.vig;
    composer.render();
  }
  renderer.setAnimationLoop(frame);

  return {
    S, M, renderer, camera, resize, hitMoon, buildNames, buildScrollPath, introDist, introY,
    poses: { landPos, landTarget, landFov: () => (portrait() ? 55 : 40) },
    pause(v) { renderer.setAnimationLoop(v ? null : frame); },
  };
}
