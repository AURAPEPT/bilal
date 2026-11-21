/* =========================================================
   À REMPLIR : les infos de la soirée
   Laisse "" (vide) si tu ne sais pas encore : le site affiche
   « à venir » et cache les boutons qui n'ont pas d'info.
   ========================================================= */
const CONFIG = {
  date: "",        // ex : "2027-06-12T19:00"  (heure locale, format AAAA-MM-JJTHH:MM)
  lieu: "",        // ex : "Salle Les Jardins d'Agadir"
  adresse: "",     // ex : "12 rue des Roses, 51100 Reims"  (sert au bouton Itinéraire)
  whatsapp: "",    // ex : "33612345678"  (indicatif pays sans le +, sans espaces)
  messageRsvp: "Salam ! Je confirme ma présence aux fiançailles de Shayma & Bilal 🌙",
};

const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s) => document.querySelector(s);
const wait = (ms) => new Promise((r) => setTimeout(r, reduce ? Math.min(ms, 60) : ms));
const mobile = innerWidth < 700;

/* ================= CIEL ÉTOILÉ (3D + warp) ================= */
const sky = $("#sky"), sctx = sky.getContext("2d");
let W, H, DPR;
let speed = 0.0007, targetSpeed = 0.0007;
const stars = [];
const shooting = [];
function resize() {
  DPR = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth; H = innerHeight;
  sky.width = W * DPR; sky.height = H * DPR;
  sctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
function newStar(s = {}) {
  s.x = Math.random() * 2 - 1; s.y = Math.random() * 2 - 1;
  s.z = s.z === undefined ? Math.random() : 1;
  s.tw = Math.random() * 6.28; s.gold = Math.random() < 0.18;
  return s;
}
for (let i = 0; i < (mobile ? 380 : 700); i++) stars.push(newStar());

function drawSky(t) {
  speed += (targetSpeed - speed) * 0.05;
  sctx.clearRect(0, 0, W, H);
  const cx = W / 2, cy = H / 2, f = Math.max(W, H) * 0.6;
  const warp = speed > 0.004;
  for (const s of stars) {
    const pz = s.z;
    s.z -= speed;
    if (s.z <= 0.02) { newStar(s); continue; }
    const sx = cx + (s.x / s.z) * f, sy = cy + (s.y / s.z) * f;
    if (sx < -50 || sx > W + 50 || sy < -50 || sy > H + 50) { newStar(s); continue; }
    const depth = 1 - s.z;
    const tw = 0.55 + 0.45 * Math.sin(t * 0.002 + s.tw);
    const a = Math.min(1, depth * 1.4) * (warp ? 1 : tw);
    const col = s.gold ? `rgba(255,222,150,${a})` : `rgba(235,240,255,${a})`;
    if (warp) {
      const zz = Math.min(1, pz + speed * 6);
      const px = cx + (s.x / zz) * f, py = cy + (s.y / zz) * f;
      sctx.strokeStyle = col; sctx.lineWidth = depth * 2.4;
      sctx.beginPath(); sctx.moveTo(px, py); sctx.lineTo(sx, sy); sctx.stroke();
    } else {
      const r = depth * 1.7 + 0.2;
      sctx.fillStyle = col;
      sctx.beginPath(); sctx.arc(sx, sy, r, 0, 6.283); sctx.fill();
    }
  }
  // étoiles filantes
  if (!warp && !reduce && Math.random() < 0.006) {
    shooting.push({ x: Math.random() * W, y: Math.random() * H * 0.5, vx: -(4 + Math.random() * 4), vy: 2 + Math.random() * 2, life: 1 });
  }
  for (let i = shooting.length - 1; i >= 0; i--) {
    const s = shooting[i];
    s.x += s.vx; s.y += s.vy; s.life -= 0.012;
    if (s.life <= 0) { shooting.splice(i, 1); continue; }
    const g = sctx.createLinearGradient(s.x, s.y, s.x - s.vx * 18, s.y - s.vy * 18);
    g.addColorStop(0, `rgba(255,245,220,${s.life})`); g.addColorStop(1, "rgba(255,245,220,0)");
    sctx.strokeStyle = g; sctx.lineWidth = 1.6;
    sctx.beginPath(); sctx.moveTo(s.x, s.y); sctx.lineTo(s.x - s.vx * 18, s.y - s.vy * 18); sctx.stroke();
  }
}

/* ================= SCÈNE 2 : PARTICULES « PAR PAIRE » ================= */
const fx = $("#fx"), fctx = fx.getContext("2d");
let FW, FH, parts = [], phase = "idle", phaseT = 0;
const pointer = { x: -9999, y: -9999 };
const orbs = [
  { name: "Shayma", col: [220, 230, 255] },   // argent lunaire
  { name: "Bilal", col: [255, 205, 120] },    // or
];
function sizeFx() {
  const r = fx.getBoundingClientRect();
  FW = r.width; FH = r.height;
  fx.width = FW * DPR; fx.height = FH * DPR;
  fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}
function textTargets() {
  const off = document.createElement("canvas");
  off.width = FW; off.height = FH;
  const o = off.getContext("2d");
  o.fillStyle = "#fff"; o.textAlign = "center"; o.textBaseline = "middle";
  const cy = FH * 0.53;
  if (FW < 700) {
    const fs = Math.min(FW * 0.21, 96, FH * 0.11);
    o.font = `${fs}px "Great Vibes"`;
    o.fillText("Shayma", FW / 2, cy - fs * 0.68);
    o.font = `${fs * 0.55}px "Great Vibes"`;
    o.fillText("&", FW / 2, cy + fs * 0.02);
    o.font = `${fs}px "Great Vibes"`;
    o.fillText("Bilal", FW / 2, cy + fs * 0.66);
  } else {
    const fs = Math.min(FW * 0.12, 150);
    o.font = `${fs}px "Great Vibes"`;
    o.fillText("Shayma & Bilal", FW / 2, cy);
  }
  const data = o.getImageData(0, 0, FW, FH).data;
  const pts = [];
  const step = 2;
  for (let y = 0; y < FH; y += step)
    for (let x = 0; x < FW; x += step)
      if (data[(y * FW + x) * 4 + 3] > 140) pts.push([x, y]);
  // limite le nombre de particules
  const max = mobile ? 3200 : 5200;
  while (pts.length > max) pts.splice((Math.random() * pts.length) | 0, 1);
  return pts;
}
function buildParticles() {
  const pts = textTargets();
  const cx = FW / 2, cy = FH * 0.53;
  parts = pts.map(([tx, ty], i) => {
    const side = tx < cx ? 0 : 1; // gauche = Shayma (argent), droite = Bilal (or)
    const c = orbs[Math.random() < 0.82 ? side : 1 - side].col;
    const a = Math.random() * 6.283, sp = 2 + Math.random() * 9;
    return {
      x: cx, y: cy, tx, ty, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
      c, s: Math.random() * 1.2 + 1.3, delay: Math.random() * 25, tw: Math.random() * 6.28,
    };
  });
}
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function drawOrb(x, y, col, r, a = 1) {
  const g = fctx.createRadialGradient(x, y, 0, x, y, r * 4);
  g.addColorStop(0, `rgba(255,255,255,${a})`);
  g.addColorStop(0.18, `rgba(${col},${0.9 * a})`);
  g.addColorStop(1, `rgba(${col},0)`);
  fctx.fillStyle = g;
  fctx.beginPath(); fctx.arc(x, y, r * 4, 0, 6.283); fctx.fill();
}

const SPIRAL = 3200;
let burst = 0;
function drawFx(t) {
  if (phase === "idle") return;
  const cx = FW / 2, cy = FH * 0.53;
  if (phase === "spiral") {
    // traînées : on efface partiellement
    fctx.globalCompositeOperation = "destination-out";
    fctx.fillStyle = "rgba(0,0,0,.18)";
    fctx.fillRect(0, 0, FW, FH);
    fctx.globalCompositeOperation = "lighter";
    const p = Math.min(1, (t - phaseT) / SPIRAL);
    const e = easeInOut(p);
    const R = Math.min(FW, FH) * 0.42 * (1 - e) + 2;
    const th = e * Math.PI * 5.5;
    for (let k = 0; k < 2; k++) {
      const ang = th + k * Math.PI;
      const x = cx + Math.cos(ang) * R, y = cy + Math.sin(ang) * R * 0.55;
      drawOrb(x, y, orbs[k].col.join(","), 5 + e * 3);
      if (p < 0.55) {
        fctx.globalCompositeOperation = "source-over";
        fctx.fillStyle = `rgba(246,236,214,${1 - p / 0.55})`;
        fctx.font = `italic ${mobile ? 18 : 22}px "Cormorant Garamond"`;
        fctx.textAlign = "center";
        fctx.fillText(orbs[k].name, x, y - 26);
        fctx.globalCompositeOperation = "lighter";
      }
    }
    if (p >= 1) { phase = "burst"; phaseT = t; burst = 1; navigator.vibrate?.(40); }
    fctx.globalCompositeOperation = "source-over";
    return;
  }
  // burst + texte
  fctx.globalCompositeOperation = "source-over";
  fctx.clearRect(0, 0, FW, FH);
  fctx.globalCompositeOperation = "lighter";
  const el = t - phaseT;
  if (burst > 0) {
    // onde de choc + flash au point d'union
    const r = (1 - burst) * Math.max(FW, FH) * 0.9;
    fctx.strokeStyle = `rgba(255,226,160,${burst})`;
    fctx.lineWidth = 3 * burst + 0.5;
    fctx.beginPath(); fctx.ellipse(cx, cy, r, r * 0.6, 0, 0, 6.283); fctx.stroke();
    drawOrb(cx, cy, "255,236,190", 26 * burst + 4, burst);
    burst -= 0.012;
  }
  const settle = el / 1000;
  for (const p of parts) {
    if (el / 16 > p.delay) {
      // ressort vers la cible + inertie de l'explosion
      const k = Math.min(0.09, 0.012 + settle * 0.02);
      p.vx += (p.tx - p.x) * k; p.vy += (p.ty - p.y) * k;
      // répulsion au doigt / souris
      const dx = p.x - pointer.x, dy = p.y - pointer.y, d2 = dx * dx + dy * dy;
      if (d2 < 6400) { const d = Math.sqrt(d2) || 1, f = (80 - d) / 80 * 6; p.vx += (dx / d) * f; p.vy += (dy / d) * f; }
      p.vx *= 0.82; p.vy *= 0.82;
      p.x += p.vx; p.y += p.vy;
    }
    const a = 0.75 + 0.25 * Math.sin(t * 0.003 + p.tw);
    fctx.fillStyle = `rgba(${p.c[0]},${p.c[1]},${p.c[2]},${a})`;
    fctx.fillRect(p.x, p.y, p.s, p.s);
  }
  fctx.globalCompositeOperation = "source-over";
}

/* ================= BOUCLE ================= */
function loop(t) { drawSky(t); drawFx(t); requestAnimationFrame(loop); }
resize();
addEventListener("resize", () => {
  resize();
  if (!$("#world").hidden) { sizeFx(); if (phase === "text" || phase === "burst") buildParticlesKeep(); }
});
function buildParticlesKeep() { buildParticles(); parts.forEach((p) => { p.x = p.tx; p.y = p.ty; p.delay = 0; }); }
requestAnimationFrame(loop);

/* ================= ENTRÉE DANS LA LUNE ================= */
let entered = false;
async function enter() {
  if (entered) return; entered = true;
  navigator.vibrate?.(25);
  const intro = $("#intro"), wrap = $("#moonWrap"), moon = $("#moon");
  wrap.style.animation = "none"; wrap.style.opacity = 1;
  intro.classList.add("leaving");
  await moon.animate(
    [{ transform: "scale(1)" }, { transform: "scale(.9)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }],
    { duration: 650, easing: "ease-out" }
  ).finished;
  targetSpeed = 0.03; // warp
  const zoom = wrap.animate(
    [{ transform: "scale(1) rotate(0deg)" }, { transform: "scale(1.6) rotate(-6deg)", offset: 0.35 }, { transform: "scale(34) rotate(-14deg)" }],
    { duration: reduce ? 10 : 2900, easing: "cubic-bezier(.65,0,.9,.4)", fill: "forwards" }
  );
  setTimeout(() => $("#flash").classList.add("on"), reduce ? 0 : 2350);
  await zoom.finished;
  await wait(450);
  targetSpeed = 0.00025;
  intro.remove();
  document.body.classList.remove("locked");
  scrollTo(0, 0);
  const world = $("#world");
  world.hidden = false;
  document.body.classList.add("world-on");
  sizeFx();
  await document.fonts.load('100px "Great Vibes"').catch(() => {});
  await wait(200);
  $("#flash").classList.remove("on");
  await wait(900);
  $(".hero-verse").classList.add("show");
  await wait(2200);
  buildParticles();
  phase = "spiral"; phaseT = performance.now();
  await wait(SPIRAL + 1800);
  phase = "text";
  $(".hero-sub").classList.add("show");
  await wait(1400);
  $(".scroll-hint").classList.add("show");
}
$("#moon").addEventListener("click", enter);

// interaction : on peut « toucher » les noms
fx.addEventListener("pointermove", (e) => { const r = fx.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; });
fx.addEventListener("pointerleave", () => { pointer.x = pointer.y = -9999; });
fx.addEventListener("pointerup", () => { pointer.x = pointer.y = -9999; });

/* ================= RÉVÉLATIONS AU SCROLL ================= */
document.querySelectorAll(".words").forEach((el) => {
  const words = el.textContent.trim().split(/\s+/);
  el.innerHTML = words.map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(" ");
});
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.25 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ================= INFOS + COMPTE À REBOURS ================= */
const d = CONFIG.date ? new Date(CONFIG.date) : null;
const valid = d && !isNaN(d);
$("#iDate").textContent = valid
  ? d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  : "Bientôt, in shâ’ Allâh";
$("#iHeure").textContent = valid ? d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }).replace(":", "h") : "À venir";
$("#iLieu").textContent = CONFIG.lieu || "À venir";
if (CONFIG.lieu && CONFIG.adresse) $("#iLieu").textContent = `${CONFIG.lieu} — ${CONFIG.adresse}`;
else if (CONFIG.adresse) $("#iLieu").textContent = CONFIG.adresse;

if (CONFIG.adresse || CONFIG.lieu) {
  const b = $("#bMaps");
  b.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent([CONFIG.lieu, CONFIG.adresse].filter(Boolean).join(", "));
  b.hidden = false;
}
if (CONFIG.whatsapp) {
  const b = $("#bRsvp");
  b.href = `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(CONFIG.messageRsvp)}`;
  b.hidden = false;
}
if (valid) {
  const cal = $("#bCal");
  cal.hidden = false;
  cal.addEventListener("click", () => {
    const fmt = (x) => x.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const end = new Date(d.getTime() + 4 * 3600e3);
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//shayma-bilal//fr", "BEGIN:VEVENT",
      `UID:${Date.now()}@shayma-bilal`, `DTSTAMP:${fmt(new Date())}`, `DTSTART:${fmt(d)}`, `DTEND:${fmt(end)}`,
      "SUMMARY:Fiançailles de Shayma & Bilal",
      `LOCATION:${[CONFIG.lieu, CONFIG.adresse].filter(Boolean).join(", ").replace(/,/g, "\\,")}`,
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = "fiancailles-shayma-bilal.ics";
    a.click();
  });
  const cd = $("#countdown");
  const set = (id, v) => { const el = $(id); const s = String(v); if (el.textContent !== s) { el.textContent = s; el.classList.remove("tick"); void el.offsetWidth; el.classList.add("tick"); } };
  const tickCd = () => {
    const ms = d - Date.now();
    if (ms <= 0) { cd.innerHTML = '<p class="accent">C’est le grand jour ✨</p>'; cd.hidden = false; return true; }
    cd.hidden = false;
    set("#cdJ", Math.floor(ms / 864e5)); set("#cdH", Math.floor(ms / 36e5) % 24);
    set("#cdM", Math.floor(ms / 6e4) % 60); set("#cdS", Math.floor(ms / 1e3) % 60);
  };
  if (!tickCd()) { const iv = setInterval(() => { if (tickCd()) clearInterval(iv); }, 1000); }
}
