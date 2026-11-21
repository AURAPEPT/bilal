var fv=Object.defineProperty;var dv=(r,t,e)=>t in r?fv(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Vt=(r,t,e)=>dv(r,typeof t!="symbol"?t+"":t,e);function _r(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ta={duration:.5,overwrite:!1,delay:0},cf,Ri,qe,Nn=1e8,Ne=1/Nn,tf=Math.PI*2,pv=tf/4,mv=0,$p=Math.sqrt,gv=Math.cos,_v=Math.sin,mi=function(t){return typeof t=="string"},ri=function(t){return typeof t=="function"},xr=function(t){return typeof t=="number"},cc=function(t){return typeof t>"u"},ir=function(t){return typeof t=="object"},fn=function(t){return t!==!1},hf=function(){return typeof window<"u"},Ql=function(t){return ri(t)||mi(t)},Zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bi=Array.isArray,vv=/random\([^)]+\)/g,xv=/,\s*/g,zp=/(?:-?\.?\d|\.)+/gi,uf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Es=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ff=/[+-]=-?[.\d]+/,yv=/[^,'"\[\]\s]+/gi,Sv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ti,tr,ef,df,Sn={},ic={},Jp,Kp=function(t){return(ic=io(t,Sn))&&zi},hc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},wa=function(t,e){return!e&&console.warn(t)},Qp=function(t,e){return t&&(Sn[t]=e)&&ic&&(ic[t]=e)||Sn},Ea=function(){return 0},Mv={suppressEvents:!0,isStart:!0,kill:!1},jl={suppressEvents:!0,kill:!1},bv={suppressEvents:!0},pf={},Yr=[],nf={},jp,hn={},$u={},kp=30,tc=[],mf="",gf=function(t){var e=t[0],i,n;if(ir(e)||ri(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=tc.length;n--&&!tc[n].targetTest(e););i=tc[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new yf(t[n],i)))||t.splice(n,1);return t},$r=function(t){return t._gsap||gf(Un(t))[0]._gsap},_f=function(t,e,i){return(i=t[e])&&ri(i)?t[e]():cc(i)&&t.getAttribute&&t.getAttribute(e)||i},Ji=function(t,e){return(t=t.split(",")).forEach(e)||t},si=function(t){return Math.round(t*1e5)/1e5||0},je=function(t){return Math.round(t*1e7)/1e7||0},As=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},Tv=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},nc=function(){var t=Yr.length,e=Yr.slice(0),i,n;for(nf={},Yr.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},vf=function(t){return!!(t._initted||t._startAt||t.add)},tm=function(t,e,i,n){Yr.length&&!Ri&&nc(),t.render(e,i,n||!!(Ri&&e<0&&vf(t))),Yr.length&&!Ri&&nc()},em=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(yv).length<2?e:mi(t)?t.trim():t},im=function(t){return t},Mn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},wv=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},io=function(t,e){for(var i in e)t[i]=e[i];return t},Hp=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=ir(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},rc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},Sa=function(t){var e=t.parent||ti,i=t.keyframes?wv(Bi(t.keyframes)):Mn;if(fn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Ev=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},nm=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},uc=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Zr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},bs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Av=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},rf=function(t,e,i,n){return t._startAt&&(Ri?t._startAt.revert(jl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Cv=function r(t){return!t||t._ts&&r(t.parent)},Vp=function(t){return t._repeat?no(t._tTime,t=t.duration()+t._rDelay)*t:0},no=function(t,e){var i=Math.floor(t=je(t/e));return t&&i===t?i-1:i},sc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},fc=function(t){return t._end=je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ne)||0))},dc=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=je(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),fc(t),i._dirty||bs(i,t)),t},rm=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=sc(t.rawTime(),e),(!e._dur||Pa(0,e.totalDuration(),i)-e._tTime>Ne)&&e.render(i,!0)),bs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Ne}},er=function(t,e,i,n){return e.parent&&Zr(e),e._start=je((xr(i)?i:!i&&oc(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:i||t!==ti?Dn(t,i,e):t._time)+e._delay),e._end=je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),nm(t,e,"_first","_last",t._sort?"_start":0),oc(e)||(t._recent=e),n||rm(t,e),t._ts<0&&dc(t,t._tTime),t},sm=function(t,e){return(Sn.ScrollTrigger||hc("scrollTrigger",e))&&Sn.ScrollTrigger.create(e,t)},om=function(t,e,i,n,s){if(bf(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ri&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jp!==un.frame)return Yr.push(t),t._lazy=[s,n],1},Rv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},oc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Pv=function(t,e,i,n){var s=t.ratio,o=e<0||!e&&(!t._start&&Rv(t)&&!(!t._initted&&oc(t))||(t._ts<0||t._dp._ts<0)&&!oc(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Pa(0,t._tDur,e),h=no(l,a),t._yoyo&&h&1&&(o=1-o),h!==no(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ri||n||t._zTime===Ne||!e&&t._zTime){if(!t._initted&&om(t,e,n,i,l))return;for(d=t._zTime,t._zTime=e||(i?Ne:0),i||(i=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&rf(t,e,i,!0),t._onUpdate&&!i&&yn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&yn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Zr(t,1),!i&&!Ri&&(yn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Iv=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},ro=function(t,e,i,n){var s=t._repeat,o=je(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:je(o*(s+1)+t._rDelay*s):o,a>0&&!n&&dc(t,t._tTime=t._tDur*a),t.parent&&fc(t),i||bs(t.parent,t),t},Gp=function(t){return t instanceof Fi?bs(t):ro(t,t._dur)},Lv={_start:0,endTime:Ea,totalDuration:Ea},Dn=function r(t,e,i){var n=t.labels,s=t._recent||Lv,o=t.duration()>=Nn?s.endTime(!1):t._dur,a,l,c;return mi(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Bi(i)?i[0]:i).totalDuration()),a>1?r(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},Ma=function(t,e,i){var n=xr(e[1]),s=(n?2:1)+(t<2?0:1),o=e[s],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=fn(l.vars.inherit)&&l.parent;o.immediateRender=fn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ci(e[0],o,e[s+1])},Jr=function(t,e){return t||t===0?e(t):e},Pa=function(t,e,i){return i<t?t:i>e?e:i},Pi=function(t,e){return!mi(t)||!(e=Sv.exec(t))?"":e[1]},Dv=function(t,e,i){return Jr(i,function(n){return Pa(t,e,n)})},sf=[].slice,am=function(t,e){return t&&ir(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ir(t[0]))&&!t.nodeType&&t!==tr},Nv=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return mi(n)&&!e||am(n,1)?(s=i).push.apply(s,Un(n)):i.push(n)})||i},Un=function(t,e,i){return qe&&!e&&qe.selector?qe.selector(t):mi(t)&&!i&&(ef||!so())?sf.call((e||df).querySelectorAll(t),0):Bi(t)?Nv(t,i):am(t)?sf.call(t,0):t?[t]:[]},of=function(t){return t=Un(t)[0]||wa("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Un(e,i.querySelectorAll?i:i===t?wa("Invalid scope")||df.createElement("div"):t)}},lm=function(t){return t.sort(function(){return .5-Math.random()})},cm=function(t){if(ri(t))return t;var e=ir(t)?t:{each:t},i=Ts(e.ease),n=e.from||0,s=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,h=n,d=n;return mi(n)?h=d={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],d=n[1]),function(u,f,m){var _=(m||e).length,p=o[_],g,x,E,y,S,w,v,b,P;if(!p){if(P=e.grid==="auto"?0:(e.grid||[1,Nn])[1],!P){for(v=-Nn;v<(v=m[P++].getBoundingClientRect().left)&&P<_;);P<_&&P--}for(p=o[_]=[],g=l?Math.min(P,_)*h-.5:n%P,x=P===Nn?0:l?_*d/P-.5:n/P|0,v=0,b=Nn,w=0;w<_;w++)E=w%P-g,y=x-(w/P|0),p[w]=S=c?Math.abs(c==="y"?y:E):$p(E*E+y*y),S>v&&(v=S),S<b&&(b=S);n==="random"&&lm(p),p.max=v-b,p.min=b,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:c?c==="y"?_/P:P:Math.max(P,_/P))||0)*(n==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Pi(e.amount||e.each)||0,i=i&&_<0?Yv(i):i}return _=(p[u]-p.min)/p.max||0,je(p.b+(i?i(_):_)*p.v)+p.u}},af=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=je(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(xr(i)?0:Pi(i))}},hm=function(t,e){var i=Bi(t),n,s;return!i&&ir(t)&&(n=i=t.radius||Nn,t.values?(t=Un(t.values),(s=!xr(t[0]))&&(n*=n)):t=af(t.increment)),Jr(e,i?ri(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Nn,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!n||c<=n?t[h]:o,s||h===o||xr(o)?h:h+Pi(o)}:af(t))},um=function(t,e,i,n){return Jr(Bi(t)?!e:i===!0?!!(i=0):!n,function(){return Bi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Uv=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,o){return o(s)},n)}},Ov=function(t,e){return function(i){return t(parseFloat(i))+(e||Pi(i))}},Fv=function(t,e,i){return dm(t,e,0,1,i)},fm=function(t,e,i){return Jr(i,function(n){return t[~~e(n)]})},Bv=function r(t,e,i){var n=e-t;return Bi(t)?fm(t,r(0,t.length),e):Jr(i,function(s){return(n+(s-t)%n)%n+t})},zv=function r(t,e,i){var n=e-t,s=n*2;return Bi(t)?fm(t,r(0,t.length-1),e):Jr(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},oo=function(t){return t.replace(vv,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(xv);return um(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},dm=function(t,e,i,n,s){var o=e-t,a=n-i;return Jr(s,function(l){return i+((l-t)/o*a||0)})},kv=function r(t,e,i,n){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=mi(t),a={},l,c,h,d,u;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Bi(t)&&!Bi(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(m){m*=d;var _=Math.min(u,~~m);return h[_](m-_)},i=e}else n||(t=io(Bi(t)?[]:{},t));if(!h){for(l in e)Sf.call(a,t,l,"get",e[l]);s=function(m){return Ef(m,a)||(o?t.p:t)}}}return Jr(i,s)},Wp=function(t,e,i){var n=t.labels,s=Nn,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yn=function(t,e,i){var n=t.vars,s=n[e],o=qe,a=t._ctx,l,c,h;if(s)return l=n[e+"Params"],c=n.callbackScope||t,i&&Yr.length&&nc(),a&&(qe=a),h=l?s.apply(c,l):s.call(c),qe=o,h},xa=function(t){return Zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ri),t.progress()<1&&yn(t,"onInterrupt"),t},eo,pm=[],mm=function(t){if(t)if(t=!t.name&&t.default||t,hf()||t.headless){var e=t.name,i=ri(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:Ea,render:Ef,add:Sf,kill:nx,modifier:ix,rawVars:0},o={targetTest:0,get:0,getSetter:pc,aliases:{},register:0};if(so(),t!==n){if(hn[e])return;Mn(n,Mn(rc(t,s),o)),io(n.prototype,io(s,rc(t,o))),hn[n.prop=e]=n,t.targetTest&&(tc.push(n),pf[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qp(e,n),t.register&&t.register(zi,n,Ki)}else pm.push(t)},ke=255,ya={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},Zu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*ke+.5|0},gm=function(t,e,i){var n=t?xr(t)?[t>>16,t>>8&ke,t&ke]:0:ya.black,s,o,a,l,c,h,d,u,f,m;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ya[t])n=ya[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&ke,n&ke,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&ke,t&ke]}else if(t.substr(0,3)==="hsl"){if(n=m=t.match(zp),!e)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=Zu(l+1/3,s,o),n[1]=Zu(l,s,o),n[2]=Zu(l-1/3,s,o);else if(~t.indexOf("="))return n=t.match(uf),i&&n.length<4&&(n[3]=1),n}else n=t.match(zp)||ya.transparent;n=n.map(Number)}return e&&!m&&(s=n[0]/ke,o=n[1]/ke,a=n[2]/ke,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},_m=function(t){var e=[],i=[],n=-1;return t.split(vr).forEach(function(s){var o=s.match(Es)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},Xp=function(t,e,i){var n="",s=(t+n).match(vr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=gm(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),i&&(h=_m(t),l=i.c,l.join(n)!==h.c.join(n)))for(c=t.replace(vr,"1").split(Es),d=c.length-1;a<d;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=t.split(vr),d=c.length-1;a<d;a++)n+=c[a]+s[a];return n+c[d]},vr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ya)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Hv=/hsl[a]?\(/,xf=function(t){var e=t.join(" "),i;if(vr.lastIndex=0,vr.test(e))return i=Hv.test(e),t[1]=Xp(t[1],i),t[0]=Xp(t[0],i,_m(t[1])),!0},Aa,un=(function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,d,u,f,m=function _(p){var g=r()-n,x=p===!0,E,y,S,w;if((g>t||g<0)&&(i+=g-e),n+=g,S=n-i,E=S-o,(E>0||x)&&(w=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,o+=E+(E>=s?0:s-E),y=1),x||(l=c(_)),y)for(f=0;f<a.length;f++)a[f](S,u,w,p)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Jp&&(!ef&&hf()&&(tr=ef=window,df=tr.document||{},Sn.gsap=zi,(tr.gsapVersions||(tr.gsapVersions=[])).push(zi.version),Kp(ic||tr.GreenSockGlobals||!tr.gsap&&tr||{}),pm.forEach(mm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Aa=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Aa=0,c=Ea},lagSmoothing:function(p,g){t=p||1/0,e=Math.min(g||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,g,x){var E=g?function(y,S,w,v){p(y,S,w,v),d.remove(E)}:p;return d.remove(p),a[x?"unshift":"push"](E),so(),E},remove:function(p,g){~(g=a.indexOf(p))&&a.splice(g,1)&&f>=g&&f--},_listeners:a},d})(),so=function(){return!Aa&&un.wake()},ye={},Vv=/^[\d.\-M][\d.\-,\s]/,Gv=/["']/g,Wv=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(Gv,"").trim():+c,n=l.substr(a+1).trim();return e},Xv=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},qv=function(t){var e=(t+"").split("("),i=ye[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Wv(e[1])]:Xv(t).split(",").map(em)):ye._CE&&Vv.test(t)?ye._CE("",t):i},Yv=function(t){return function(e){return 1-t(1-e)}},Ts=function(t,e){return t&&(ri(t)?t:ye[t]||qv(t))||e},Cs=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},o;return Ji(t,function(a){ye[a]=Sn[a]=s,ye[o=a.toLowerCase()]=i;for(var l in s)ye[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ye[a+"."+l]=s[l]}),s},vm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ju=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/tf*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*_v((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:vm(a);return s=tf/s,l.config=function(c,h){return r(t,c,h)},l},Ku=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:vm(i);return n.config=function(s){return r(t,s)},n};Ji("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Cs(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});ye.Linear.easeNone=ye.none=ye.Linear.easeIn;Cs("Elastic",Ju("in"),Ju("out"),Ju());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(a){return a<e?r*a*a:a<i?r*Math.pow(a-1.5/t,2)+.75:a<n?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Cs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Cs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Cs("Circ",function(r){return-($p(1-r*r)-1)});Cs("Sine",function(r){return r===1?1:-gv(r*pv)+1});Cs("Back",Ku("in"),Ku("out"),Ku());ye.SteppedEase=ye.steps=Sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,o=1-Ne;return function(a){return((n*Pa(0,o,a)|0)+s)*i}}};Ta.ease=ye["quad.out"];Ji("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return mf+=r+","+r+"Params,"});var yf=function(t,e){this.id=mv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:_f,this.set=e?e.getSetter:pc},Ca=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ro(this,+e.duration,1,1),this.data=e.data,qe&&(this._ctx=qe,qe.data.push(this)),Aa||un.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,ro(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(so(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dc(this,i),!s._dp||s.parent||rm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&er(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Ne||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),tm(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Vp(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Vp(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?no(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Ne?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?sc(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+i||0,this._ts=this._ps||i===-Ne?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Pa(-Math.abs(this._delay),a,s),n!==!1),fc(this),Av(this)},t.paused=function(i){if(!arguments.length)return this._ps;if(this._ps!==i)if(this._ps=i,i)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{so(),this._ts=this._rts;var n=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Ne,o;if(s)for(this._tTime-=Ne,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=n+Ne){s=!1;break}o=o._next}this.totalTime(n,s)}return this},t.startTime=function(i){if(arguments.length){this._start=je(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&er(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(fn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sc(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=bv);var n=Ri;return Ri=i,vf(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ri=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Gp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,Gp(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Dn(this,i),fn(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,fn(n)),this._dur||(this._zTime=-Ne),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ne,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Ne)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(o){var a=ri(i)?i:im,l=function(){var h=n.then;n.then=null,s&&s(),ri(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=h),o(a),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){xa(this)},r})();Mn(Ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ne,_prom:0,_ps:!1,_rts:1});var Fi=(function(r){Yp(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=fn(i.sortChildren),ti&&er(i.parent||ti,_r(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&sm(_r(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,o){return Ma(0,arguments,this),this},e.from=function(n,s,o){return Ma(1,arguments,this),this},e.fromTo=function(n,s,o,a){return Ma(2,arguments,this),this},e.set=function(n,s,o){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ci(n,s,Dn(this,o),1),this},e.call=function(n,s,o){return er(this,ci.delayedCall(0,n,s),o)},e.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ci(n,o,Dn(this,l)),this},e.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,Sa(o).immediateRender=fn(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},e.staggerFromTo=function(n,s,o,a,l,c,h,d){return a.startAt=o,Sa(a).immediateRender=fn(a.immediateRender),this.staggerTo(n,s,a,l,c,h,d)},e.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:je(n),d=this._zTime<0!=n<0&&(this._initted||!c),u,f,m,_,p,g,x,E,y,S,w,v;if(this!==ti&&h>l&&n>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),u=h,y=this._start,E=this._ts,g=!E,d&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(p*100+n,s,o);if(u=je(h%p),h===l?(_=this._repeat,u=c):(S=je(h/p),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=no(this._tTime,p),!a&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),w&&_&1&&(u=c-u,v=1),_!==S&&!this._lock){var b=w&&S&1,P=b===(w&&_&1);if(_<S&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(v?0:je(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&yn(this,"onRepeat"),this.vars.repeatRefresh&&!v&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!v&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=Iv(this,je(a),je(u)),x&&(h-=u-(u=x._start))),this._tTime=h,this._time=u,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&h&&c&&!s&&!S&&(yn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&n>=0)for(f=this._first;f;){if(m=f._next,(f._act||u>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!g){x=0,m&&(h+=this._zTime=-Ne);break}}f=m}else{f=this._last;for(var A=n<0?n:u;f;){if(m=f._prev,(f._act||A<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,o||Ri&&vf(f)),u!==this._time||!this._ts&&!g){x=0,m&&(h+=this._zTime=A?-Ne:Ne);break}}f=m}}if(x&&!s&&(this.pause(),x.render(u>=a?0:-Ne)._zTime=u>=a?1:-1,this._ts))return this._start=y,fc(this),this.render(n,s,o);this._onUpdate&&!s&&yn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Zr(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(yn(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var o=this;if(xr(s)||(s=Dn(this,s,n)),!(n instanceof Ca)){if(Bi(n))return n.forEach(function(a){return o.add(a,s)}),this;if(mi(n))return this.addLabel(n,s);if(ri(n))n=ci.delayedCall(0,n);else return this}return this!==n?er(this,n,s):this},e.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Nn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ci?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},e.remove=function(n){return mi(n)?this.removeLabel(n):ri(n)?this.killTweensOf(n):(n.parent===this&&uc(this,n),n===this._recent&&(this._recent=this._last),bs(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(un.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=Dn(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,o){var a=ci.delayedCall(0,s||Ea,o);return a.data="isPause",this._hasPause=1,er(this,a,Dn(this,n))},e.removePause=function(n){var s=this._first;for(n=Dn(this,n);s;)s._start===n&&s.data==="isPause"&&Zr(s),s=s._next},e.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)qr!==a[l]&&a[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var o=[],a=Un(n),l=this._first,c=xr(s),h;l;)l instanceof ci?Tv(l._targets,a)&&(c?(!qr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(n,s){s=s||{};var o=this,a=Dn(o,n),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,m=ci.to(o,Mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ne,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==p&&ro(m,p,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,d||[])}},s));return u?m.render(0):m},e.tweenFromTo=function(n,s,o){return this.tweenTo(s,Mn({startAt:{time:Dn(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),Wp(this,Dn(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),Wp(this,Dn(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Ne)},e.shiftChildren=function(n,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=je(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return bs(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),bs(this)},e.totalDuration=function(n){var s=0,o=this,a=o._last,l=Nn,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,er(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=je(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ro(o,o===ti&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(ti._ts&&(tm(ti,sc(n,ti)),jp=un.frame),un.frame>=kp){kp+=dn.autoSleep||120;var s=ti._first;if((!s||!s._ts)&&dn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},t})(Ca);Mn(Fi.prototype,{_lock:0,_hasPause:0,_forcing:0});var $v=function(t,e,i,n,s,o,a){var l=new Ki(this._pt,t,e,0,1,wf,null,s),c=0,h=0,d,u,f,m,_,p,g,x;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=oo(n)),o&&(x=[i,n],o(x,t,e),i=x[0],n=x[1]),u=i.match(Yu)||[];d=Yu.exec(n);)m=d[0],_=n.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:m.charAt(1)==="="?As(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Yu.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(ff.test(n)||g)&&(l.e=0),this._pt=l,l},Sf=function(t,e,i,n,s,o,a,l,c,h){ri(n)&&(n=n(s||0,t,o));var d=t[e],u=i!=="get"?i:ri(d)?c?t[e.indexOf("set")||!ri(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=ri(d)?c?jv:ym:Tf,m;if(mi(n)&&(~n.indexOf("random(")&&(n=oo(n)),n.charAt(1)==="="&&(m=As(u,n)+(Pi(u)||0),(m||m===0)&&(n=m))),!h||u!==n||lf)return!isNaN(u*n)&&n!==""?(m=new Ki(this._pt,t,e,+u||0,n-(u||0),typeof d=="boolean"?ex:Sm,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!d&&!(e in t)&&hc(e,n),$v.call(this,t,e,u,n,f,l||dn.stringFilter,c))},Zv=function(t,e,i,n,s){if(ri(t)&&(t=ba(t,s,e,i,n)),!ir(t)||t.style&&t.nodeType||Bi(t)||Zp(t))return mi(t)?ba(t,s,e,i,n):t;var o={},a;for(a in t)o[a]=ba(t[a],s,e,i,n);return o},Mf=function(t,e,i,n,s,o){var a,l,c,h;if(hn[t]&&(a=new hn[t]).init(s,a.rawVars?e[t]:Zv(e[t],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Ki(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==eo))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},qr,lf,bf=function r(t,e,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,d=n.yoyoEase,u=n.keyframes,f=n.autoRevert,m=t._dur,_=t._startAt,p=t._targets,g=t.parent,x=g&&g.data==="nested"?g.vars.targets:p,E=t._overwrite==="auto"&&!cf,y=t.timeline,S=n.easeReverse||d,w,v,b,P,A,N,L,k,I,z,V,O,Q;if(y&&(!u||!s)&&(s="none"),t._ease=Ts(s,Ta.ease),t._rEase=S&&(Ts(S)||t._ease),t._from=!y&&!!n.runBackwards,t._from&&(t.ratio=1),!y||u&&!n.stagger){if(k=p[0]?$r(p[0]).harness:0,O=k&&n[k.prop],w=rc(n,pf),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&m?jl:Mv),_._lazy=0),o){if(Zr(t._startAt=ci.set(p,Mn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&fn(l),startAt:null,delay:0,onUpdate:c&&function(){return yn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ri||!a&&!f)&&t._startAt.revert(jl),a&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&m&&!_){if(e&&(a=!1),b=Mn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&fn(l),immediateRender:a,stagger:0,parent:g},w),O&&(b[k.prop]=O),Zr(t._startAt=ci.set(p,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ri?t._startAt.revert(jl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ne,Ne);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&fn(l)||l&&!m,v=0;v<p.length;v++){if(A=p[v],L=A._gsap||gf(p)[v]._gsap,t._ptLookup[v]=z={},nf[L.id]&&Yr.length&&nc(),V=x===p?v:x.indexOf(A),k&&(I=new k).init(A,O||w,t,V,x)!==!1&&(t._pt=P=new Ki(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){z[W]=P}),I.priority&&(N=1)),!k||O)for(b in w)hn[b]&&(I=Mf(b,w,t,V,A,x))?I.priority&&(N=1):z[b]=P=Sf.call(t,A,b,"get",w[b],V,x,0,n.stringFilter);t._op&&t._op[v]&&t.kill(A,t._op[v]),E&&t._pt&&(qr=t,ti.killTweensOf(A,z,t.globalTime(e)),Q=!t.parent,qr=0),t._pt&&l&&(nf[L.id]=1)}N&&Af(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,u&&e<=0&&y.render(Nn,!0,!0)},Jv=function(t,e,i,n,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return lf=1,t.vars[e]="+=0",bf(t,a),lf=0,l?wa(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=si(i)+Pi(d.e)),d.b&&(d.b=h.s+Pi(d.b))},Kv=function(t,e){var i=t[0]?$r(t[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return e;s=io({},e);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Qv=function(t,e,i,n){var s=e.ease||n||"power1.inOut",o,a;if(Bi(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ba=function(t,e,i,n,s){return ri(t)?t.call(e,i,n,s):mi(t)&&~t.indexOf("random(")?oo(t):t},ac=mf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",xm={};Ji(ac+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return xm[r]=1});ac=ac.split(",");var ci=(function(r){Yp(t,r);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:Sa(n))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=n.parent||ti,x=(Bi(i)||Zp(i)?xr(i[0]):"length"in n)?[i]:Un(i),E,y,S,w,v,b,P,A;if(a._targets=x.length?gf(x):wa("GSAP target "+i+" not found. https://gsap.com",!dn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||u||Ql(c)||Ql(h)){n=a.vars;var N=n.easeReverse||n.yoyoEase;if(E=a.timeline=new Fi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:x}),E.kill(),E.parent=E._dp=_r(a),E._start=0,u||Ql(c)||Ql(h)){if(w=x.length,P=u&&cm(u),ir(u))for(v in u)~ac.indexOf(v)&&(A||(A={}),A[v]=u[v]);for(y=0;y<w;y++)S=rc(n,xm),S.stagger=0,N&&(S.easeReverse=N),A&&io(S,A),b=x[y],S.duration=+ba(c,_r(a),y,b,x),S.delay=(+ba(h,_r(a),y,b,x)||0)-a._delay,!u&&w===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),E.to(b,S,P?P(y,b,x):0),E._ease=ye.none;E.duration()?c=h=0:a.timeline=0}else if(m){Sa(Mn(E.vars.defaults,{ease:"none"})),E._ease=Ts(m.ease||n.ease||"none");var L=0,k,I,z;if(Bi(m))m.forEach(function(V){return E.to(x,V,">")}),E.duration();else{S={};for(v in m)v==="ease"||v==="easeEach"||Qv(v,m[v],S,m.easeEach);for(v in S)for(k=S[v].sort(function(V,O){return V.t-O.t}),L=0,y=0;y<k.length;y++)I=k[y],z={ease:I.e,duration:(I.t-(y?k[y-1].t:0))/100*c},z[v]=I.v,E.to(x,z,L),L+=z.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||a.duration(c=E.duration())}else a.timeline=0;return f===!0&&!cf&&(qr=_r(a),ti.killTweensOf(x),qr=0),er(g,_r(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!c&&!m&&a._start===je(g._time)&&fn(d)&&Cv(_r(a))&&g.data!=="nested")&&(a._tTime=-Ne,a.render(Math.max(0,-h)||0)),p&&sm(_r(a),p),a}var e=t.prototype;return e.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,d=n>l-Ne&&!h?l:n<Ne?0:n,u,f,m,_,p,g,x,E;if(!c)Pv(this,n,s,o);else if(d!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+n,s,o);if(u=je(d%_),d===l?(m=this._repeat,u=c):(p=je(d/_),m=~~p,m&&m===p?(u=c,m--):u>c&&(u=c)),g=this._yoyo&&m&1,g&&(u=c-u),p=no(this._tTime,_),u===a&&!o&&this._initted&&m===p)return this._tTime=d,this;m!==p&&this.vars.repeatRefresh&&!g&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(je(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(om(this,h?n:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var S=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(u/c);if(this._from&&(this.ratio=x=1-x),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(yn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;E&&E.render(n<0?n:E._dur*E._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&rf(this,n,s,o),yn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&yn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&rf(this,n,!0,!0),(n||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Zr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(yn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,o,a,l){Aa||un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||bf(this,c),h=this._ease(c/this._dur),Jv(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(dc(this,0),this.parent||nm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ri),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,qr&&qr.vars.overwrite!==!0)._first||xa(this),this.parent&&o!==this.timeline.totalDuration()&&ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Un(n):a,c=this._ptLookup,h=this._pt,d,u,f,m,_,p,g;if((!s||s==="all")&&Ev(a,l))return s==="all"&&(this._pt=0),xa(this);for(d=this._op=this._op||[],s!=="all"&&(mi(s)&&(_={},Ji(s,function(x){return _[x]=1}),s=_),s=Kv(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){u=c[g],s==="all"?(d[g]=s,m=u,f={}):(f=d[g]=d[g]||{},m=s);for(_ in m)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&uc(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&xa(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return Ma(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return Ma(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return ti.killTweensOf(n,s,o)},t})(Ca);Mn(ci.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ji("staggerTo,staggerFrom,staggerFromTo",function(r){ci[r]=function(){var t=new Fi,e=sf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Tf=function(t,e,i){return t[e]=i},ym=function(t,e,i){return t[e](i)},jv=function(t,e,i,n){return t[e](n.fp,i)},tx=function(t,e,i){return t.setAttribute(e,i)},pc=function(t,e){return ri(t[e])?ym:cc(t[e])&&t.setAttribute?tx:Tf},Sm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ex=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wf=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Ef=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},ix=function(t,e,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,e,i),s=o},nx=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?uc(this,e,"_pt"):e.dep||(i=1),e=n;return!i},rx=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},Af=function(t){for(var e=t._pt,i,n,s,o;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=s},Ki=(function(){function r(e,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||Sm,this.d=l||this,this.set=c||Tf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=rx,this.m=i,this.mt=s,this.tween=n},r})();Ji(mf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return pf[r]=1});Sn.TweenMax=Sn.TweenLite=ci;Sn.TimelineLite=Sn.TimelineMax=Fi;ti=new Fi({sortChildren:!1,defaults:Ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});dn.stringFilter=xf;var ws=[],ec={},sx=[],qp=0,ox=0,Qu=function(t){return(ec[t]||sx).map(function(e){return e()})},Ra=function(){var t=Date.now(),e=[];t-qp>2&&(Qu("matchMediaInit"),ws.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=tr.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Qu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),qp=t,Qu("matchMedia"))},Mm=(function(){function r(e,i){this.selector=i&&of(i),this.data=[],this._r=[],this.isReverted=!1,this.id=ox++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){ri(i)&&(s=n,n=i,i=ri);var o=this,a=function(){var c=qe,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=of(s)),qe=o,d=n.apply(o,arguments),ri(d)&&o._r.push(d),qe=c,o.selector=h,o.isReverted=!1,d};return o.last=a,i===ri?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=qe;qe=null,i(this),qe=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof ci&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Fi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ci)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n){for(var o=ws.length;o--;)ws[o].id===this.id&&ws.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ra):a.removeEventListener("change",Ra)}),this._mqs=null}},t.revert=function(i){this.kill(i||{})},r})(),ax=(function(){function r(e){this.contexts=[],this.scope=e,qe&&qe.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){ir(i)||(i={matches:i});var o=new Mm(0,s||this.scope),a=o.conditions={},l,c,h;qe&&!o.selector&&(o.selector=qe.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=tr.matchMedia(i[c]),l&&(ws.indexOf(o)<0&&ws.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ra):l.addEventListener("change",Ra),(o._mqs||(o._mqs=[])).push(l)));return h&&n(o,function(d){return o.add(null,d)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),lc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return mm(n)})},timeline:function(t){return new Fi(t)},getTweensOf:function(t,e){return ti.getTweensOf(t,e)},getProperty:function(t,e,i,n){mi(t)&&(t=Un(t)[0]);var s=$r(t||{}).get,o=i?im:em;return i==="native"&&(i=""),t&&(e?o((hn[e]&&hn[e].get||s)(t,e,i,n)):function(a,l,c){return o((hn[a]&&hn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Un(t),t.length>1){var n=t.map(function(h){return zi.quickSetter(h,e,i)}),s=n.length;return function(h){for(var d=s;d--;)n[d](h)}}t=t[0]||{};var o=hn[e],a=$r(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;eo._pt=0,d.init(t,i?h+i:h,eo,0,[t]),d.render(1,d),eo._pt&&Ef(1,eo)}:a.set(t,l);return o?c:function(h){return c(t,l,i?h+i:h,a,1)}},quickTo:function(t,e,i){var n,s=zi.to(t,Mn((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ti.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ts(t.ease,Ta.ease)),Hp(Ta,t||{})},config:function(t){return Hp(dn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!hn[a]&&!Sn[a]&&wa(e+" effect requires "+a+" plugin.")}),$u[e]=function(a,l,c){return i(Un(a),Mn(l||{},s),c)},o&&(Fi.prototype[e]=function(a,l,c){return this.add($u[e](a,ir(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ye[t]=Ts(e)},parseEase:function(t,e){return arguments.length?Ts(t,e):ye},getById:function(t){return ti.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Fi(t),n,s;for(i.smoothChildTiming=fn(t.smoothChildTiming),ti.remove(i),i._dp=0,i._time=i._tTime=ti._time,n=ti._first;n;)s=n._next,(e||!(!n._dur&&n instanceof ci&&n.vars.onComplete===n._targets[0]))&&er(i,n,n._start-n._delay),n=s;return er(ti,i,0),i},context:function(t,e){return t?new Mm(t,e):qe},matchMedia:function(t){return new ax(t)},matchMediaRefresh:function(){return ws.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Ra()},addEventListener:function(t,e){var i=ec[t]||(ec[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ec[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:Bv,wrapYoyo:zv,distribute:cm,random:um,snap:hm,normalize:Fv,getUnit:Pi,clamp:Dv,splitColor:gm,toArray:Un,selector:of,mapRange:dm,pipe:Uv,unitize:Ov,interpolate:kv,shuffle:lm},install:Kp,effects:$u,ticker:un,updateRoot:Fi.updateRoot,plugins:hn,globalTimeline:ti,core:{PropTween:Ki,globals:Qp,Tween:ci,Timeline:Fi,Animation:Ca,getCache:$r,_removeLinkedListItem:uc,reverting:function(){return Ri},context:function(t){return t&&qe&&(qe.data.push(t),t._ctx=qe),qe},suppressOverwrites:function(t){return cf=t}}};Ji("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return lc[r]=ci[r]});un.add(Fi.updateRoot);eo=lc.to({},{duration:0});var lx=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},cx=function(t,e){var i=t._targets,n,s,o;for(n in e)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=lx(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[s],n))},ju=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(mi(s)&&(l={},Ji(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}cx(a,s)}}}},zi=lc.registerPlugin({name:"attr",init:function(t,e,i,n,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ri?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ju("roundProps",af),ju("modifiers"),ju("snap",hm))||lc;ci.version=Fi.version=zi.version="3.15.1";Jp=1;hf()&&so();var hx=ye.Power0,ux=ye.Power1,fx=ye.Power2,dx=ye.Power3,px=ye.Power4,mx=ye.Linear,gx=ye.Quad,_x=ye.Cubic,vx=ye.Quart,xx=ye.Quint,yx=ye.Strong,Sx=ye.Elastic,Mx=ye.Back,bx=ye.SteppedEase,Tx=ye.Bounce,wx=ye.Sine,Ex=ye.Expo,Ax=ye.Circ;var bm,Kr,lo,Df,Ls,Cx,Tm,Nf,Rx=function(){return typeof window<"u"},Sr={},Is=180/Math.PI,co=Math.PI/180,ao=Math.atan2,wm=1e8,Uf=/([A-Z])/g,Px=/(left|right|width|margin|padding|x)/i,Ix=/[\s,\(]\S/,nr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Lx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Dx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Nx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ux=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Dm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Nm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ox=function(t,e,i){return t.style[e]=i},Fx=function(t,e,i){return t.style.setProperty(e,i)},Bx=function(t,e,i){return t._gsap[e]=i},zx=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},kx=function(t,e,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Hx=function(t,e,i,n,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},ei="transform",pn=ei+"Origin",Vx=function r(t,e){var i=this,n=this.target,s=n.style,o=n._gsap;if(t in Sr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=nr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=yr(n,a)}):this.tfm[t]=o.x?o[t]:yr(n,t),t===pn&&(this.tfm.zOrigin=o.zOrigin);else return nr.transform.split(",").forEach(function(a){return r.call(i,a,e)});if(this.props.indexOf(ei)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(pn,e,"")),t=ei}(s||e)&&this.props.push(t,e,s[t])},Um=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Gx=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Uf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Nf(),(!s||!s.isStart)&&!i[ei]&&(Um(i),n.zOrigin&&i[pn]&&(i[pn]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Om=function(t,e){var i={target:t,props:[],revert:Gx,save:Vx};return t._gsap||zi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Fm,Pf=function(t,e){var i=Kr.createElementNS?Kr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Kr.createElement(t);return i&&i.style?i:Kr.createElement(t)},bn=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Uf,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,ho(e)||e,1)||""},Em="O,Moz,ms,Ms,Webkit".split(","),ho=function(t,e,i){var n=e||Ls,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Em[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Em[o]:"")+t},If=function(){Rx()&&window.document&&(bm=window,Kr=bm.document,lo=Kr.documentElement,Ls=Pf("div")||{style:{}},Cx=Pf("div"),ei=ho(ei),pn=ei+"Origin",Ls.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fm=!!ho("perspective"),Nf=zi.core.reverting,Df=1)},Am=function(t){var e=t.ownerSVGElement,i=Pf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),lo.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),lo.removeChild(i),s},Cm=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Bm=function(t){var e,i;try{e=t.getBBox()}catch{e=Am(t),i=1}return e&&(e.width||e.height)||i||(e=Am(t)),e&&!e.width&&!e.x&&!e.y?{x:+Cm(t,["x","cx","x1"])||0,y:+Cm(t,["y","cy","y1"])||0,width:0,height:0}:e},zm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bm(t))},jr=function(t,e){if(e){var i=t.style,n;e in Sr&&e!==pn&&(e=ei),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(Uf,"-$1").toLowerCase())):i.removeAttribute(e)}},Qr=function(t,e,i,n,s,o){var a=new Ki(t._pt,e,i,0,1,o?Nm:Dm);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},Rm={deg:1,rad:1,turn:1},Wx={grid:1,flex:1},ts=function r(t,e,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ls.style,l=Px.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=n==="px",f=n==="%",m,_,p,g;if(n===o||!s||Rm[n]||Rm[o])return s;if(o!=="px"&&!u&&(s=r(t,e,i,"px")),g=t.getCTM&&zm(t),(f||o==="%")&&(Sr[e]||~e.indexOf("adius")))return m=g?t.getBBox()[l?"width":"height"]:t[h],si(f?s/m*d:s/100*m);if(a[l?"width":"height"]=d+(u?o:n),_=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Kr||!_.appendChild)&&(_=Kr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===un.time&&!p.uncache)return si(s/p.width*d);if(f&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+n,m=t[h],x?t.style[e]=x:jr(t,e)}else(f||o==="%")&&!Wx[bn(_,"display")]&&(a.position=bn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ls),m=Ls[h],_.removeChild(Ls),a.position="absolute";return l&&f&&(p=$r(_),p.time=un.time,p.width=_[h]),si(u?m*s/d:m&&s?d/m*s:0)},yr=function(t,e,i,n){var s;return Df||If(),e in nr&&e!=="transform"&&(e=nr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Sr[e]&&e!=="transform"?(s=Da(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:gc(bn(t,pn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=mc[e]&&mc[e](t,e,i)||bn(t,e)||_f(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ts(t,e,s,i)+i:s},Xx=function(t,e,i,n){if(!i||i==="none"){var s=ho(e,t,1),o=s&&bn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=bn(t,"borderTopColor"))}var a=new Ki(this._pt,t.style,e,0,1,wf),l=0,c=0,h,d,u,f,m,_,p,g,x,E,y,S;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=bn(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=t.style[e],t.style[e]=n,n=bn(t,e)||n,_?t.style[e]=_:jr(t,e)),h=[i,n],xf(h),i=h[0],n=h[1],u=i.match(Es)||[],S=n.match(Es)||[],S.length){for(;d=Es.exec(n);)p=d[0],x=n.substring(l,d.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=As(f,p)+y),g=parseFloat(p),E=p.substr((g+"").length),l=Es.lastIndex-E.length,E||(E=E||dn.units[e]||y,l===n.length&&(n+=E,a.e+=E)),y!==E&&(f=ts(t,e,_,E)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:f,c:g-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?Nm:Dm;return ff.test(n)&&(a.e=0),this._pt=a,a},Pm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qx=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Pm[i]||i,e[1]=Pm[n]||n,e.join(" ")},Yx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Sr[a]&&(l=1,a=a==="transformOrigin"?pn:ei),jr(i,a);l&&(jr(i,ei),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",Da(i,1),o.uncache=1,Um(n)))}},mc={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new Ki(t._pt,e,i,0,0,Yx);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},La=[1,0,0,1,0,0],km={},Hm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Im=function(t){var e=bn(t,ei);return Hm(e)?La:e.substr(7).match(uf).map(si)},Of=function(t,e){var i=t._gsap||$r(t),n=t.style,s=Im(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?La:s):(s===La&&!t.offsetParent&&t!==lo&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,lo.appendChild(t)),s=Im(t),l?n.display=l:jr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):lo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lf=function(t,e,i,n,s,o){var a=t._gsap,l=s||Of(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],x=l[5],E=e.split(" "),y=parseFloat(E[0])||0,S=parseFloat(E[1])||0,w,v,b,P;i?l!==La&&(v=f*p-m*_)&&(b=y*(p/v)+S*(-_/v)+(_*x-p*g)/v,P=y*(-m/v)+S*(f/v)-(f*x-m*g)/v,y=b,S=P):(w=Bm(t),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),S=w.y+(~(E[1]||E[0]).indexOf("%")?S/100*w.height:S)),n||n!==!1&&a.smooth?(g=y-c,x=S-h,a.xOffset=d+(g*f+x*_)-g,a.yOffset=u+(g*m+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[pn]="0px 0px",o&&(Qr(o,a,"xOrigin",c,y),Qr(o,a,"yOrigin",h,S),Qr(o,a,"xOffset",d,a.xOffset),Qr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Da=function(t,e){var i=t._gsap||new yf(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=bn(t,pn)||"0",h,d,u,f,m,_,p,g,x,E,y,S,w,v,b,P,A,N,L,k,I,z,V,O,Q,W,R,J,xt,At,Y,ct;return h=d=u=_=p=g=x=E=y=0,f=m=1,i.svg=!!(t.getCTM&&zm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[ei]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ei]!=="none"?l[ei]:"")),n.scale=n.rotate=n.translate="none"),v=Of(t,i.svg),i.svg&&(i.uncache?(Q=t.getBBox(),c=i.xOrigin-Q.x+"px "+(i.yOrigin-Q.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),Lf(t,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,v)),S=i.xOrigin||0,w=i.yOrigin||0,v!==La&&(N=v[0],L=v[1],k=v[2],I=v[3],h=z=v[4],d=V=v[5],v.length===6?(f=Math.sqrt(N*N+L*L),m=Math.sqrt(I*I+k*k),_=N||L?ao(L,N)*Is:0,x=k||I?ao(k,I)*Is+_:0,x&&(m*=Math.abs(Math.cos(x*co))),i.svg&&(h-=S-(S*N+w*k),d-=w-(S*L+w*I))):(ct=v[6],At=v[7],R=v[8],J=v[9],xt=v[10],Y=v[11],h=v[12],d=v[13],u=v[14],b=ao(ct,xt),p=b*Is,b&&(P=Math.cos(-b),A=Math.sin(-b),O=z*P+R*A,Q=V*P+J*A,W=ct*P+xt*A,R=z*-A+R*P,J=V*-A+J*P,xt=ct*-A+xt*P,Y=At*-A+Y*P,z=O,V=Q,ct=W),b=ao(-k,xt),g=b*Is,b&&(P=Math.cos(-b),A=Math.sin(-b),O=N*P-R*A,Q=L*P-J*A,W=k*P-xt*A,Y=I*A+Y*P,N=O,L=Q,k=W),b=ao(L,N),_=b*Is,b&&(P=Math.cos(b),A=Math.sin(b),O=N*P+L*A,Q=z*P+V*A,L=L*P-N*A,V=V*P-z*A,N=O,z=Q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=si(Math.sqrt(N*N+L*L+k*k)),m=si(Math.sqrt(V*V+ct*ct)),b=ao(z,V),x=Math.abs(b)>2e-4?b*Is:0,y=Y?1/(Y<0?-Y:Y):0),i.svg&&(O=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Hm(bn(t,ei)),O&&t.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=u+o,i.scaleX=si(f),i.scaleY=si(m),i.rotation=si(_)+a,i.rotationX=si(p)+a,i.rotationY=si(g)+a,i.skewX=x+a,i.skewY=E+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[pn]=gc(c)),i.xOffset=i.yOffset=0,i.force3D=dn.force3D,i.renderTransform=i.svg?Zx:Fm?Vm:$x,i.uncache=0,i},gc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Cf=function(t,e,i){var n=Pi(e);return si(parseFloat(e)+parseFloat(ts(t,"x",i+"px",n)))+n},$x=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vm(t,e)},Rs="0deg",Ia="0px",Ps=") ",Vm=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,d=i.rotationX,u=i.skewX,f=i.skewY,m=i.scaleX,_=i.scaleY,p=i.transformPerspective,g=i.force3D,x=i.target,E=i.zOrigin,y="",S=g==="auto"&&t&&t!==1||g===!0;if(E&&(d!==Rs||h!==Rs)){var w=parseFloat(h)*co,v=Math.sin(w),b=Math.cos(w),P;w=parseFloat(d)*co,P=Math.cos(w),o=Cf(x,o,v*P*-E),a=Cf(x,a,-Math.sin(w)*-E),l=Cf(x,l,b*P*-E+E)}p!==Ia&&(y+="perspective("+p+Ps),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(S||o!==Ia||a!==Ia||l!==Ia)&&(y+=l!==Ia||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ps),c!==Rs&&(y+="rotate("+c+Ps),h!==Rs&&(y+="rotateY("+h+Ps),d!==Rs&&(y+="rotateX("+d+Ps),(u!==Rs||f!==Rs)&&(y+="skew("+u+", "+f+Ps),(m!==1||_!==1)&&(y+="scale("+m+", "+_+Ps),x.style[ei]=y||"translate(0, 0)"},Zx=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,d=i.scaleX,u=i.scaleY,f=i.target,m=i.xOrigin,_=i.yOrigin,p=i.xOffset,g=i.yOffset,x=i.forceCSS,E=parseFloat(o),y=parseFloat(a),S,w,v,b,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=co,c*=co,S=Math.cos(l)*d,w=Math.sin(l)*d,v=Math.sin(l-c)*-u,b=Math.cos(l-c)*u,c&&(h*=co,P=Math.tan(c-h),P=Math.sqrt(1+P*P),v*=P,b*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),S*=P,w*=P)),S=si(S),w=si(w),v=si(v),b=si(b)):(S=d,b=u,w=v=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=ts(f,"x",o,"px"),y=ts(f,"y",a,"px")),(m||_||p||g)&&(E=si(E+m-(m*S+_*v)+p),y=si(y+_-(m*w+_*b)+g)),(n||s)&&(P=f.getBBox(),E=si(E+n/100*P.width),y=si(y+s/100*P.height)),P="matrix("+S+","+w+","+v+","+b+","+E+","+y+")",f.setAttribute("transform",P),x&&(f.style[ei]=P)},Jx=function(t,e,i,n,s){var o=360,a=mi(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Is:1),c=l-n,h=n+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*wm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*wm)%o-~~(c/o)*o)),t._pt=u=new Ki(t._pt,e,i,n,c,Lx),u.e=h,u.u="deg",t._props.push(i),u},Lm=function(t,e){for(var i in e)t[i]=e[i];return t},Kx=function(t,e,i){var n=Lm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,d,u,f,m;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[ei]=e,a=Da(i,1),jr(i,ei),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ei],o[ei]=e,a=Da(i,1),o[ei]=c);for(l in Sr)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Pi(c),m=Pi(h),d=f!==m?ts(i,l,c,m):parseFloat(c),u=parseFloat(h),t._pt=new Ki(t._pt,a,l,d,u-d,Rf),t._pt.u=m||0,t._props.push(l));Lm(a,n)};Ji("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",o=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(a){return t<2?r+a:"border"+a+r});mc[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(m){return yr(a,m,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(m,_){return f[m]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var Ff={name:"css",register:If,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var o=this._props,a=t.style,l=i.vars.startAt,c,h,d,u,f,m,_,p,g,x,E,y,S,w,v,b,P;Df||If(),this.styles=this.styles||Om(t),b=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(hn[_]&&Mf(_,e,i,n,t,s)))){if(f=typeof h,m=mc[_],f==="function"&&(h=h.call(i,n,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=oo(h)),m)m(this,t,_,h,i)&&(v=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",vr.lastIndex=0,vr.test(c)||(p=Pi(c),g=Pi(h),g?p!==g&&(c=ts(t,_,c,g)+g):p&&(h+=p)),this.add(a,"setProperty",c,h,n,s,0,0,_),o.push(_),b.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,t,s):l[_],mi(c)&&~c.indexOf("random(")&&(c=oo(c)),Pi(c+"")||c==="auto"||(c+=dn.units[_]||Pi(yr(t,_))||""),(c+"").charAt(1)==="="&&(c=yr(t,_))):c=yr(t,_),u=parseFloat(c),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),d=parseFloat(h),_ in nr&&(_==="autoAlpha"&&(u===1&&yr(t,"visibility")==="hidden"&&d&&(u=0),b.push("visibility",0,a.visibility),Qr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=nr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Sr,E){if(this.styles.save(_),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=bn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=h,h=bn(t,"perspective"),A?t.style.perspective=A:jr(t,"perspective")}d=parseFloat(h)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Da(t,e.parseTransform),w=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Ki(this._pt,a,ei,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Ki(this._pt,S,"scaleY",S.scaleY,(x?As(S.scaleY,x+d):d)-S.scaleY||0,Rf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){b.push(pn,0,a[pn]),h=qx(h),S.svg?Lf(t,h,0,w,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==S.zOrigin&&Qr(this,S,"zOrigin",S.zOrigin,g),Qr(this,a,_,gc(c),gc(h)));continue}else if(_==="svgOrigin"){Lf(t,h,1,w,0,this);continue}else if(_ in km){Jx(this,S,_,u,x?As(u,x+h):h);continue}else if(_==="smoothOrigin"){Qr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){Kx(this,h,t);continue}}else _ in a||(_=ho(_)||_);if(E||(d||d===0)&&(u||u===0)&&!Ix.test(h)&&_ in a)p=(c+"").substr((u+"").length),d||(d=0),g=Pi(h)||(_ in dn.units?dn.units[_]:p),p!==g&&(u=ts(t,_,c,g)),this._pt=new Ki(this._pt,E?S:a,_,u,(x?As(u,x+d):d)-u,!E&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?Ux:Rf),this._pt.u=g||0,E&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Nx):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Dx);else if(_ in a)Xx.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,n,s);else if(_!=="parseTransform"){hc(_,h);continue}E||(_ in a?b.push(_,0,a[_]):typeof t[_]=="function"?b.push(_,2,t[_]()):b.push(_,1,c||t[_])),o.push(_)}}v&&Af(this)},render:function(t,e){if(e.tween._time||!Nf())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:yr,aliases:nr,getSetter:function(t,e,i){var n=nr[e];return n&&n.indexOf(",")<0&&(e=n),e in Sr&&e!==pn&&(t._gsap.x||yr(t,"x"))?i&&Tm===i?e==="scale"?zx:Bx:(Tm=i||{})&&(e==="scale"?kx:Hx):t.style&&!cc(t.style[e])?Ox:~e.indexOf("-")?Fx:pc(t,e)},core:{_removeProperty:jr,_getMatrix:Of}};zi.utils.checkPrefix=ho;zi.core.getStyleSaver=Om;(function(r,t,e,i){var n=Ji(r+","+t+","+e,function(s){Sr[s]=1});Ji(t,function(s){dn.units[s]="deg",km[s]=1}),nr[n[13]]=r+","+t,Ji(i,function(s){var o=s.split(":");nr[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ji("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){dn.units[r]="px"});zi.registerPlugin(Ff);var ae=zi.registerPlugin(Ff)||zi,Vw=ae.core.Tween;function Gm(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Qx(r,t,e){return t&&Gm(r.prototype,t),e&&Gm(r,e),r}var Ii,xc,jx,mn,es,is,fo,Xm,Ds,po,qm,Mr,Wn,Ym,$m=function(){return Ii||typeof window<"u"&&(Ii=window.gsap)&&Ii.registerPlugin&&Ii},Zm=1,uo=[],se=[],Xn=[],Ua=Date.now,Bf=function(t,e){return e},ty=function(){var t=po.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,se),n.push.apply(n,Xn),se=i,Xn=n,Bf=function(o,a){return e[o](a)}},Tr=function(t,e){return~Xn.indexOf(t)&&Xn[Xn.indexOf(t)+1][e]},Oa=function(t){return!!~qm.indexOf(t)},ji=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:n!==!1,capture:!!s})},Qi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},_c="scrollLeft",vc="scrollTop",zf=function(){return Mr&&Mr.isPressed||se.cache++},yc=function(t,e){var i=function n(s){if(s||s===0){Zm&&mn.history.scrollRestoration!=="manual"&&(mn.history.scrollRestoration="manual");var o=Mr&&Mr.isPressed;s=n.v=Math.round(s)||(Mr&&Mr.iOS?1:0),t(s),n.cacheID=se.cache,o&&Bf("ss",s)}else(e||se.cache!==n.cacheID||Bf("ref"))&&(n.cacheID=se.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},ki={s:_c,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yc(function(r){return arguments.length?mn.scrollTo(r,hi.sc()):mn.pageXOffset||es[_c]||is[_c]||fo[_c]||0})},hi={s:vc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ki,sc:yc(function(r){return arguments.length?mn.scrollTo(ki.sc(),r):mn.pageYOffset||es[vc]||is[vc]||fo[vc]||0})},tn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ii.utils.toArray)(t)[0]||(typeof t=="string"&&Ii.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ey=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},br=function(t,e){var i=e.s,n=e.sc;Oa(t)&&(t=es.scrollingElement||is);var s=se.indexOf(t),o=n===hi.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||ji(t,"scroll",zf);var a=se[s+o],l=a||(se[s+o]=yc(Tr(t,i),!0)||(Oa(t)?n:yc(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Ii.getProperty(t,"scrollBehavior")==="smooth"),l},Sc=function(t,e,i){var n=t,s=t,o=Ua(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,_){var p=Ua();_||p-o>l?(s=n,n=m,a=o,o=p):i?n+=m:n=s+(m-s)/(p-a)*(o-a)},d=function(){s=n=i?0:n,a=o=0},u=function(m){var _=a,p=s,g=Ua();return(m||m===0)&&m!==n&&h(m),o===a||g-a>c?0:(n+(i?p:-p))/((i?g:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Na=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Wm=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Jm=function(){po=Ii.core.globals().ScrollTrigger,po&&po.core&&ty()},Km=function(t){return Ii=t||$m(),!xc&&Ii&&typeof document<"u"&&document.body&&(mn=window,es=document,is=es.documentElement,fo=es.body,qm=[mn,es,is,fo],jx=Ii.utils.clamp,Ym=Ii.core.context||function(){},Ds="onpointerenter"in fo?"pointer":"mouse",Xm=oi.isTouch=mn.matchMedia&&mn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Wn=oi.eventTypes=("ontouchstart"in is?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in is?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zm=0},500),xc=1),po||Jm(),xc};ki.op=hi;se.cache=0;var oi=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(i){xc||Km(Ii)||console.warn("Please gsap.registerPlugin(Observer)"),po||Jm();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,h=i.preventDefault,d=i.onStop,u=i.onStopDelay,f=i.ignore,m=i.wheelSpeed,_=i.event,p=i.onDragStart,g=i.onDragEnd,x=i.onDrag,E=i.onPress,y=i.onRelease,S=i.onRight,w=i.onLeft,v=i.onUp,b=i.onDown,P=i.onChangeX,A=i.onChangeY,N=i.onChange,L=i.onToggleX,k=i.onToggleY,I=i.onHover,z=i.onHoverEnd,V=i.onMove,O=i.ignoreCheck,Q=i.isNormalizer,W=i.onGestureStart,R=i.onGestureEnd,J=i.onWheel,xt=i.onEnable,At=i.onDisable,Y=i.onClick,ct=i.scrollSpeed,bt=i.capture,Et=i.allowClicks,gt=i.lockAxis,Bt=i.onLockAxis;this.target=a=tn(a)||is,this.vars=i,f&&(f=Ii.utils.toArray(f)),n=n||1e-9,s=s||0,m=m||1,ct=ct||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(mn.getComputedStyle(fo).lineHeight)||22);var xe,Pt,jt,Ut,Ht,ge,_e,Z=this,he=0,ni=0,Ee=i.passive||!h&&i.passive!==!1,ie=br(a,ki),Ae=br(a,hi),Fe=ie(),F=Ae(),Se=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Wn[0]==="pointerdown",ue=Oa(a),Yt=a.ownerDocument||es,pt=[0,0,0],ve=[0,0,0],kt=0,Xt=function(){return kt=Ua()},C=function(vt,st){return(Z.event=vt)&&f&&ey(vt.target,f)||st&&Se&&vt.pointerType!=="touch"||O&&O(vt,st)},M=function(){Z._vx.reset(),Z._vy.reset(),Pt.pause(),d&&d(Z)},G=function(){var vt=Z.deltaX=Wm(pt),st=Z.deltaY=Wm(ve),it=Math.abs(vt)>=n,Mt=Math.abs(st)>=n;N&&(it||Mt)&&N(Z,vt,st,pt,ve),it&&(S&&Z.deltaX>0&&S(Z),w&&Z.deltaX<0&&w(Z),P&&P(Z),L&&Z.deltaX<0!=he<0&&L(Z),he=Z.deltaX,pt[0]=pt[1]=pt[2]=0),Mt&&(b&&Z.deltaY>0&&b(Z),v&&Z.deltaY<0&&v(Z),A&&A(Z),k&&Z.deltaY<0!=ni<0&&k(Z),ni=Z.deltaY,ve[0]=ve[1]=ve[2]=0),(Ut||jt)&&(V&&V(Z),jt&&(p&&jt===1&&p(Z),x&&x(Z),jt=0),Ut=!1),ge&&!(ge=!1)&&Bt&&Bt(Z),Ht&&(J(Z),Ht=!1),xe=0},ot=function(vt,st,it){pt[it]+=vt,ve[it]+=st,Z._vx.update(vt),Z._vy.update(st),c?xe||(xe=requestAnimationFrame(G)):G()},rt=function(vt,st){gt&&!_e&&(Z.axis=_e=Math.abs(vt)>Math.abs(st)?"x":"y",ge=!0),_e!=="y"&&(pt[2]+=vt,Z._vx.update(vt,!0)),_e!=="x"&&(ve[2]+=st,Z._vy.update(st,!0)),c?xe||(xe=requestAnimationFrame(G)):G()},dt=function(vt){if(!C(vt,1)){vt=Na(vt,h);var st=vt.clientX,it=vt.clientY,Mt=st-Z.x,nt=it-Z.y,Tt=Z.isDragging;Z.x=st,Z.y=it,(Tt||(Mt||nt)&&(Math.abs(Z.startX-st)>=s||Math.abs(Z.startY-it)>=s))&&(jt||(jt=Tt?2:1),Tt||(Z.isDragging=!0),rt(Mt,nt))}},mt=Z.onPress=function(at){C(at,1)||at&&at.button||(Z.axis=_e=null,Pt.pause(),Z.isPressed=!0,at=Na(at),he=ni=0,Z.startX=Z.x=at.clientX,Z.startY=Z.y=at.clientY,Z._vx.reset(),Z._vy.reset(),ji(Q?a:Yt,Wn[1],dt,Ee,!0),Z.deltaX=Z.deltaY=0,E&&E(Z))},X=Z.onRelease=function(at){if(!C(at,1)){Qi(Q?a:Yt,Wn[1],dt,!0);var vt=!isNaN(Z.y-Z.startY),st=Z.isDragging,it=st&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),Mt=Na(at);!it&&vt&&(Z._vx.reset(),Z._vy.reset(),h&&Et&&Ii.delayedCall(.08,function(){if(Ua()-kt>300&&!at.defaultPrevented){if(at.target.click)at.target.click();else if(Yt.createEvent){var nt=Yt.createEvent("MouseEvents");nt.initMouseEvent("click",!0,!0,mn,1,Mt.screenX,Mt.screenY,Mt.clientX,Mt.clientY,!1,!1,!1,!1,0,null),at.target.dispatchEvent(nt)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,d&&st&&!Q&&Pt.restart(!0),jt&&G(),g&&st&&g(Z),y&&y(Z,it)}},tt=function(vt){return vt.touches&&vt.touches.length>1&&(Z.isGesturing=!0)&&W(vt,Z.isDragging)},ut=function(){return(Z.isGesturing=!1)||R(Z)},D=function(vt){if(!C(vt)){var st=ie(),it=Ae();ot((st-Fe)*ct,(it-F)*ct,1),Fe=st,F=it,d&&Pt.restart(!0)}},et=function(vt){if(!C(vt)){vt=Na(vt,h),J&&(Ht=!0);var st=(vt.deltaMode===1?l:vt.deltaMode===2?mn.innerHeight:1)*m;ot(vt.deltaX*st,vt.deltaY*st,0),d&&!Q&&Pt.restart(!0)}},j=function(vt){if(!C(vt)){var st=vt.clientX,it=vt.clientY,Mt=st-Z.x,nt=it-Z.y;Z.x=st,Z.y=it,Ut=!0,d&&Pt.restart(!0),(Mt||nt)&&rt(Mt,nt)}},_t=function(vt){Z.event=vt,I(Z)},ht=function(vt){Z.event=vt,z(Z)},K=function(vt){return C(vt)||Na(vt,h)&&Y(Z)};Pt=Z._dc=Ii.delayedCall(u||.25,M).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Sc(0,50,!0),Z._vy=Sc(0,50,!0),Z.scrollX=ie,Z.scrollY=Ae,Z.isDragging=Z.isGesturing=Z.isPressed=!1,Ym(this),Z.enable=function(at){return Z.isEnabled||(ji(ue?Yt:a,"scroll",zf),o.indexOf("scroll")>=0&&ji(ue?Yt:a,"scroll",D,Ee,bt),o.indexOf("wheel")>=0&&ji(a,"wheel",et,Ee,bt),(o.indexOf("touch")>=0&&Xm||o.indexOf("pointer")>=0)&&(ji(a,Wn[0],mt,Ee,bt),ji(Yt,Wn[2],X),ji(Yt,Wn[3],X),Et&&ji(a,"click",Xt,!0,!0),Y&&ji(a,"click",K),W&&ji(Yt,"gesturestart",tt),R&&ji(Yt,"gestureend",ut),I&&ji(a,Ds+"enter",_t),z&&ji(a,Ds+"leave",ht),V&&ji(a,Ds+"move",j)),Z.isEnabled=!0,Z.isDragging=Z.isGesturing=Z.isPressed=Ut=jt=!1,Z._vx.reset(),Z._vy.reset(),Fe=ie(),F=Ae(),at&&at.type&&mt(at),xt&&xt(Z)),Z},Z.disable=function(){Z.isEnabled&&(uo.filter(function(at){return at!==Z&&Oa(at.target)}).length||Qi(ue?Yt:a,"scroll",zf),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),Qi(Q?a:Yt,Wn[1],dt,!0)),Qi(ue?Yt:a,"scroll",D,bt),Qi(a,"wheel",et,bt),Qi(a,Wn[0],mt,bt),Qi(Yt,Wn[2],X),Qi(Yt,Wn[3],X),Qi(a,"click",Xt,!0),Qi(a,"click",K),Qi(Yt,"gesturestart",tt),Qi(Yt,"gestureend",ut),Qi(a,Ds+"enter",_t),Qi(a,Ds+"leave",ht),Qi(a,Ds+"move",j),Z.isEnabled=Z.isPressed=Z.isDragging=!1,At&&At(Z))},Z.kill=Z.revert=function(){Z.disable();var at=uo.indexOf(Z);at>=0&&uo.splice(at,1),Mr===Z&&(Mr=0)},uo.push(Z),Q&&Oa(a)&&(Mr=Z),Z.enable(_)},Qx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();oi.version="3.15.1";oi.create=function(r){return new oi(r)};oi.register=Km;oi.getAll=function(){return uo.slice()};oi.getById=function(r){return uo.filter(function(t){return t.vars.id===r})[0]};$m()&&Ii.registerPlugin(oi);var Ft,vo,ce,De,En,Pe,jf,Fc,Za,Ga,Ba,Mc,Hi,kc,qf,nn,Qm,jm,xo,mg,kf,gg,en,Yf,_g,vg,ns,$f,td,yo,ed,rs,Zf,Hf,bc=1,Vi=Date.now,Vf=Vi(),Bn=0,za=0,tg=function(t,e,i){var n=wn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},eg=function(t,e){return e&&(!wn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},iy=function r(){return za&&requestAnimationFrame(r)},ig=function(){return kc=1},ng=function(){return kc=0},rr=function(t){return t},ka=function(t){return Math.round(t*1e5)/1e5||0},xg=function(){return typeof window<"u"},yg=function(){return Ft||xg()&&(Ft=window.gsap)&&Ft.registerPlugin&&Ft},zs=function(t){return!!~jf.indexOf(t)},Sg=function(t){return(t==="Height"?ed:ce["inner"+t])||En["client"+t]||Pe["client"+t]},Mg=function(t){return Tr(t,"getBoundingClientRect")||(zs(t)?function(){return Oc.width=ce.innerWidth,Oc.height=ed,Oc}:function(){return wr(t)})},ny=function(t,e,i){var n=i.d,s=i.d2,o=i.a;return(o=Tr(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?Sg(s):t["client"+s])||0}},ry=function(t,e){return!e||~Xn.indexOf(t)?Mg(t):function(){return Oc}},sr=function(t,e){var i=e.s,n=e.d2,s=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=Tr(t,i))?o()-Mg(t)()[s]:zs(t)?(En[i]||Pe[i])-Sg(n):t[i]-t["offset"+n])},Tc=function(t,e){for(var i=0;i<xo.length;i+=3)(!e||~e.indexOf(xo[i+1]))&&t(xo[i],xo[i+1],xo[i+2])},wn=function(t){return typeof t=="string"},Gi=function(t){return typeof t=="function"},Ha=function(t){return typeof t=="number"},Ns=function(t){return typeof t=="object"},Fa=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},mo=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},go=Math.abs,bg="left",Tg="top",id="right",nd="bottom",Os="width",Fs="height",Wa="Right",Xa="Left",qa="Top",Ya="Bottom",ui="padding",On="margin",Mo="Width",rd="Height",gi="px",Fn=function(t){return ce.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},sy=function(t){var e=Fn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},rg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},wr=function(t,e){var i=e&&Fn(t)[qf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ft.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Bc=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},wg=function(t){var e=[],i=t.labels,n=t.duration(),s;for(s in i)e.push(i[s]/n);return e},oy=function(t){return function(e){return Ft.utils.snap(wg(t),e)}},sd=function(t){var e=Ft.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return e(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=e(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:e(s<0?n-t:n+t)}},ay=function(t){return function(e,i){return sd(wg(t))(e,i.direction)}},wc=function(t,e,i,n){return i.split(",").forEach(function(s){return t(e,s,n)})},Ti=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},bi=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Ec=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},sg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ac={toggleActions:"play",anticipatePin:0},zc={top:0,left:0,center:.5,bottom:1,right:1},Lc=function(t,e){if(wn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in zc?zc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Cc=function(t,e,i,n,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,m=De.createElement("div"),_=zs(i)||Tr(i,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,g=_?Pe:i.tagName==="IFRAME"?i.contentDocument.body:i,x=t.indexOf("start")!==-1,E=x?c:h,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(n===hi?id:nd)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+n.op.d2],Dc(m,0,n,x),m},Dc=function(t,e,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+Mo]=1,s["border"+a+Mo]=0,s[i.p]=e+"px",Ft.set(t,s)},le=[],Jf={},Ja,og=function(){return Vi()-Bn>34&&(Ja||(Ja=requestAnimationFrame(Er)))},_o=function(){(!en||!en.isPressed||en.startX>Pe.clientWidth)&&(se.cache++,en?Ja||(Ja=requestAnimationFrame(Er)):Er(),Bn||Hs("scrollStart"),Bn=Vi())},Gf=function(){vg=ce.innerWidth,_g=ce.innerHeight},Va=function(t){se.cache++,(t===!0||!Hi&&!gg&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!Yf||vg!==ce.innerWidth||Math.abs(ce.innerHeight-_g)>ce.innerHeight*.25))&&Fc.restart(!0)},ks={},ly=[],Eg=function r(){return bi(ne,"scrollEnd",r)||Us(!0)},Hs=function(t){return ks[t]&&ks[t].map(function(e){return e()})||ly},Tn=[],Ag=function(t){for(var e=0;e<Tn.length;e+=5)(!t||Tn[e+4]&&Tn[e+4].query===t)&&(Tn[e].style.cssText=Tn[e+1],Tn[e].getBBox&&Tn[e].setAttribute("transform",Tn[e+2]||""),Tn[e+3].uncache=1)},Cg=function(){se.cache++,se.forEach(function(t){return Gi(t)&&(t.rec=t())})},od=function(t,e){var i;for(nn=0;nn<le.length;nn++)i=le[nn],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));rs=!0,e&&Ag(e),e||Hs("revert")},Rg=function(t,e){se.cache++,(e||!rn)&&se.forEach(function(i){return Gi(i)&&i.cacheID++&&(i.rec=0)}),wn(t)&&(td=t,ce.history.scrollRestoration!==t&&(ce.history.scrollRestoration=t))},rn,Bs=0,ag,cy=function(){if(ag!==Bs){var t=ag=Bs;requestAnimationFrame(function(){return t===Bs&&Us(!0)})}},Pg=function(){Pe.appendChild(yo),ed=!en&&yo.offsetHeight||ce.innerHeight,Pe.removeChild(yo)},lg=function(t){return Za(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Us=function(t,e){if(En=De.documentElement,Pe=De.body,jf=[ce,De,En,Pe],Bn&&!t&&!rs){Ti(ne,"scrollEnd",Eg);return}Pg(),rn=ne.isRefreshing=!0,rs||Cg();var i=Hs("refreshInit");mg&&ne.sort(),e||od(),se.forEach(function(n){Gi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),le.slice(0).forEach(function(n){return n.refresh()}),rs=!1,le.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Zf=1,lg(!0),le.forEach(function(n){var s=sr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),lg(!1),Zf=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),se.forEach(function(n){Gi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Rg(td,1),Fc.pause(),Bs++,rn=2,Er(2),le.forEach(function(n){return Gi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),rn=ne.isRefreshing=!1,Hs("refresh")},Kf=0,Nc=1,$a,Er=function(t){if(t===2||!rn&&!rs){ne.isUpdating=!0,$a&&$a.update(0);var e=le.length,i=Vi(),n=i-Vf>=50,s=e&&le[0].scroll();if(Nc=Kf>s?-1:1,rn||(Kf=s),n&&(Bn&&!kc&&i-Bn>200&&(Bn=0,Hs("scrollEnd")),Ba=Vf,Vf=i),Nc<0){for(nn=e;nn-- >0;)le[nn]&&le[nn].update(0,n);Nc=1}else for(nn=0;nn<e;nn++)le[nn]&&le[nn].update(0,n);ne.isUpdating=!1}Ja=0},Qf=[bg,Tg,nd,id,On+Ya,On+Wa,On+qa,On+Xa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Uc=Qf.concat([Os,Fs,"boxSizing","max"+Mo,"max"+rd,"position",On,ui,ui+qa,ui+Wa,ui+Ya,ui+Xa]),hy=function(t,e,i){So(i);var n=t._gsap;if(n.spacerIsNative)So(n.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Wf=function(t,e,i,n){if(!t._gsap.swappedIn){for(var s=Qf.length,o=e.style,a=t.style,l;s--;)l=Qf[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[nd]=a[id]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Os]=Bc(t,ki)+gi,o[Fs]=Bc(t,hi)+gi,o[ui]=a[On]=a[Tg]=a[bg]="0",So(n),a[Os]=a["max"+Mo]=i[Os],a[Fs]=a["max"+rd]=i[Fs],a[ui]=i[ui],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},uy=/([A-Z])/g,So=function(t){if(t){var e=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||Ft.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?e[s]=o:e[s]&&e.removeProperty(s.replace(uy,"-$1").toLowerCase())}},Rc=function(t){for(var e=Uc.length,i=t.style,n=[],s=0;s<e;s++)n.push(Uc[s],i[Uc[s]]);return n.t=t,n},fy=function(t,e,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Oc={left:0,top:0},cg=function(t,e,i,n,s,o,a,l,c,h,d,u,f,m){Gi(t)&&(t=t(l)),wn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Lc("0"+t.substr(3),i):0));var _=f?f.time():0,p,g,x;if(f&&f.seek(0),isNaN(t)||(t=+t),Ha(t))f&&(t=Ft.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Dc(a,i,n,!0);else{Gi(e)&&(e=e(l));var E=(t||"0").split(" "),y,S,w,v;x=tn(e,l)||Pe,y=wr(x)||{},(!y||!y.left&&!y.top)&&Fn(x).display==="none"&&(v=x.style.display,x.style.display="block",y=wr(x),v?x.style.display=v:x.style.removeProperty("display")),S=Lc(E[0],y[n.d]),w=Lc(E[1]||"0",i),t=y[n.p]-c[n.p]-h+S+s-w,a&&Dc(a,w,n,i-w<20||a._isStart&&w>20),i-=i-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var b=t+i,P=o._isStart;p="scroll"+n.d2,Dc(o,b,n,P&&b>20||!P&&(d?Math.max(Pe[p],En[p]):o.parentNode[p])<=b+1),d&&(c=wr(a),d&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+gi))}return f&&x&&(p=wr(x),f.seek(u),g=wr(x),f._caScrollDist=p[n.p]-g[n.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},dy=/(webkit|moz|length|cssText|inset)/i,hg=function(t,e,i,n){if(t.parentNode!==e){var s=t.style,o,a;if(e===Pe){t._stOrig=s.cssText,a=Fn(t);for(o in a)!+o&&!dy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;Ft.core.getCache(t).uncache=1,e.appendChild(t)}},Ig=function(t,e,i){var n=e,s=n;return function(o){var a=Math.round(t());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},Pc=function(t,e,i){var n={};n[e.p]="+="+i,Ft.set(t,n)},ug=function(t,e){var i=br(t,e),n="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,m={};c=c||i();var _=Ig(i,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[n]=a,l.inherit=!1,l.modifiers=m,m[n]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){se.cache++,o.tween&&Er()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ft.to(t,l),u};return t[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ti(t,"wheel",i.wheelHandler),ne.isTouch&&Ti(t,"touchmove",i.wheelHandler),s},ne=(function(){function r(e,i){vo||r.register(Ft)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),$f(this),this.init(e,i)}var t=r.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!za){this.update=this.refresh=this.kill=rr;return}i=rg(wn(i)||Ha(i)||i.nodeType?{trigger:i}:i,Ac);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,g=s.onScrubComplete,x=s.onSnapComplete,E=s.once,y=s.snap,S=s.pinReparent,w=s.pinSpacer,v=s.containerAnimation,b=s.fastScrollEnd,P=s.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ki:hi,N=!d&&d!==0,L=tn(i.scroller||ce),k=Ft.core.getCache(L),I=zs(L),z=("pinType"in i?i.pinType:Tr(L,"pinType")||I&&"fixed")==="fixed",V=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],O=N&&i.toggleActions.split(" "),Q="markers"in i?i.markers:Ac.markers,W=I?0:parseFloat(Fn(L)["border"+A.p2+Mo])||0,R=this,J=i.onRefreshInit&&function(){return i.onRefreshInit(R)},xt=ny(L,I,A),At=ry(L,I),Y=0,ct=0,bt=0,Et=br(L,A),gt,Bt,xe,Pt,jt,Ut,Ht,ge,_e,Z,he,ni,Ee,ie,Ae,Fe,F,Se,ue,Yt,pt,ve,kt,Xt,C,M,G,ot,rt,dt,mt,X,tt,ut,D,et,j,_t,ht;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=L,R.scroll=v?v.time.bind(v):Et,Pt=Et(),rs&&Et.rec==null&&(Et.rec=Pt),R.vars=i,n=n||i.animation,"refreshPriority"in i&&(mg=1,i.refreshPriority===-9999&&($a=R)),k.tweenScroll=k.tweenScroll||{top:ug(L,hi),left:ug(L,ki)},R.tweenTo=gt=k.tweenScroll[A.p],R.scrubDuration=function(it){tt=Ha(it)&&it,tt?X?X.duration(it):X=Ft.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return g&&g(R)}}):(X&&X.progress(1).kill(),X=0)},n&&(n.vars.lazy=!1,n._initted&&!R.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),R.animation=n.pause(),n.scrollTrigger=R,R.scrubDuration(d),dt=0,l||(l=n.vars.id)),y&&((!Ns(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Pe.style&&Ft.set(I?[Pe,En]:L,{scrollBehavior:"auto"}),se.forEach(function(it){return Gi(it)&&it.target===(I?De.scrollingElement||En:L)&&(it.smooth=!1)}),xe=Gi(y.snapTo)?y.snapTo:y.snapTo==="labels"?oy(n):y.snapTo==="labelsDirectional"?ay(n):y.directional!==!1?function(it,Mt){return sd(y.snapTo)(it,Vi()-ct<500?0:Mt.direction)}:Ft.utils.snap(y.snapTo),ut=y.duration||{min:.1,max:2},ut=Ns(ut)?Ga(ut.min,ut.max):Ga(ut,ut),D=Ft.delayedCall(y.delay||tt/2||.1,function(){var it=Et(),Mt=Vi()-ct<500,nt=gt.tween;if((Mt||Math.abs(R.getVelocity())<10)&&!nt&&!kc&&Y!==it){var Tt=(it-Ut)/ie,re=n&&!N?n.totalProgress():Tt,Jt=Mt?0:(re-mt)/(Vi()-Ba)*1e3||0,Be=Ft.utils.clamp(-Tt,1-Tt,go(Jt/2)*Jt/.185),$e=Tt+(y.inertia===!1?0:Be),He,Ie,Me=y,ze=Me.onStart,Ce=Me.onInterrupt,Si=Me.onComplete;if(He=xe($e,R),Ha(He)||(He=$e),Ie=Math.max(0,Math.round(Ut+He*ie)),it<=Ht&&it>=Ut&&Ie!==it){if(nt&&!nt._initted&&nt.data<=go(Ie-it))return;y.inertia===!1&&(Be=He-Tt),gt(Ie,{duration:ut(go(Math.max(go($e-re),go(He-re))*.185/Jt/.05||0)),ease:y.ease||"power3",data:go(Ie-it),onInterrupt:function(){return D.restart(!0)&&Ce&&mo(R,Ce)},onComplete:function(){R.update(),Y=Et(),n&&!N&&(X?X.resetTo("totalProgress",He,n._tTime/n._tDur):n.progress(He)),dt=mt=n&&!N?n.totalProgress():R.progress,x&&x(R),Si&&mo(R,Si)}},it,Be*ie,Ie-it-Be*ie),ze&&mo(R,ze,gt.tween)}}else R.isActive&&Y!==it&&D.restart(!0)}).pause()),l&&(Jf[l]=R),u=R.trigger=tn(u||f!==!0&&f),ht=u&&u._gsap&&u._gsap.stRevert,ht&&(ht=ht(R)),f=f===!0?u:tn(f),wn(a)&&(a={targets:u,className:a}),f&&(m===!1||m===On||(m=!m&&f.parentNode&&f.parentNode.style&&Fn(f.parentNode).display==="flex"?!1:ui),R.pin=f,Bt=Ft.core.getCache(f),Bt.spacer?Ae=Bt.pinState:(w&&(w=tn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Bt.spacerIsNative=!!w,w&&(Bt.spacerState=Rc(w))),Bt.spacer=Se=w||De.createElement("div"),Se.classList.add("pin-spacer"),l&&Se.classList.add("pin-spacer-"+l),Bt.pinState=Ae=Rc(f)),i.force3D!==!1&&Ft.set(f,{force3D:!0}),R.spacer=Se=Bt.spacer,rt=Fn(f),Xt=rt[m+A.os2],Yt=Ft.getProperty(f),pt=Ft.quickSetter(f,A.a,gi),Wf(f,Se,rt),F=Rc(f)),Q){ni=Ns(Q)?rg(Q,sg):sg,Z=Cc("scroller-start",l,L,A,ni,0),he=Cc("scroller-end",l,L,A,ni,0,Z),ue=Z["offset"+A.op.d2];var K=tn(Tr(L,"content")||L);ge=this.markerStart=Cc("start",l,K,A,ni,ue,0,v),_e=this.markerEnd=Cc("end",l,K,A,ni,ue,0,v),v&&(_t=Ft.quickSetter([ge,_e],A.a,gi)),!z&&!(Xn.length&&Tr(L,"fixedMarkers")===!0)&&(sy(I?Pe:L),Ft.set([Z,he],{force3D:!0}),M=Ft.quickSetter(Z,A.a,gi),ot=Ft.quickSetter(he,A.a,gi))}if(v){var at=v.vars.onUpdate,vt=v.vars.onUpdateParams;v.eventCallback("onUpdate",function(){R.update(0,0,1),at&&at.apply(v,vt||[])})}if(R.previous=function(){return le[le.indexOf(R)-1]},R.next=function(){return le[le.indexOf(R)+1]},R.revert=function(it,Mt){if(!Mt)return R.kill(!0);var nt=it!==!1||!R.enabled,Tt=Hi;nt!==R.isReverted&&(nt&&(et=Math.max(Et(),R.scroll.rec||0),bt=R.progress,j=n&&n.progress()),ge&&[ge,_e,Z,he].forEach(function(re){return re.style.display=nt?"none":"block"}),nt&&(Hi=R,R.update(nt)),f&&(!S||!R.isActive)&&(nt?hy(f,Se,Ae):Wf(f,Se,Fn(f),C)),nt||R.update(nt),Hi=Tt,R.isReverted=nt)},R.refresh=function(it,Mt,nt,Tt){if(!((Hi||!R.enabled)&&!Mt)){if(f&&it&&Bn){Ti(r,"scrollEnd",Eg);return}!rn&&J&&J(R),Hi=R,gt.tween&&!nt&&(gt.tween.kill(),gt.tween=0),X&&X.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(H){return H.vars.immediateRender&&H.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var re=xt(),Jt=At(),Be=v?v.duration():sr(L,A),$e=ie<=.01||!ie,He=0,Ie=Tt||0,Me=Ns(nt)?nt.end:i.end,ze=i.endTrigger||u,Ce=Ns(nt)?nt.start:i.start||(i.start===0||!u?0:f?"0 0":"0 100%"),Si=R.pinnedContainer=i.pinnedContainer&&tn(i.pinnedContainer,R),Ui=u&&Math.max(0,le.indexOf(R))||0,Ge=Ui,Ze,lt,Lt,Gt,zt,Ot,$t,Je,cn,Ke,T,U,$;for(Q&&Ns(nt)&&(U=Ft.getProperty(Z,A.p),$=Ft.getProperty(he,A.p));Ge-- >0;)Ot=le[Ge],Ot.end||Ot.refresh(0,1)||(Hi=R),$t=Ot.pin,$t&&($t===u||$t===f||$t===Si)&&!Ot.isReverted&&(Ke||(Ke=[]),Ke.unshift(Ot),Ot.revert(!0,!0)),Ot!==le[Ge]&&(Ui--,Ge--);for(Gi(Ce)&&(Ce=Ce(R)),Ce=tg(Ce,"start",R),Ut=cg(Ce,u,re,A,Et(),ge,Z,R,Jt,W,z,Be,v,R._startClamp&&"_startClamp")||(f?-.001:0),Gi(Me)&&(Me=Me(R)),wn(Me)&&!Me.indexOf("+=")&&(~Me.indexOf(" ")?Me=(wn(Ce)?Ce.split(" ")[0]:"")+Me:(He=Lc(Me.substr(2),re),Me=wn(Ce)?Ce:(v?Ft.utils.mapRange(0,v.duration(),v.scrollTrigger.start,v.scrollTrigger.end,Ut):Ut)+He,ze=u)),Me=tg(Me,"end",R),Ht=Math.max(Ut,cg(Me||(ze?"100% 0":Be),ze,re,A,Et()+He,_e,he,R,Jt,W,z,Be,v,R._endClamp&&"_endClamp"))||-.001,He=0,Ge=Ui;Ge--;)Ot=le[Ge]||{},$t=Ot.pin,$t&&Ot.start-Ot._pinPush<=Ut&&!v&&Ot.end>0&&(Ze=Ot.end-(R._startClamp?Math.max(0,Ot.start):Ot.start),($t===u&&Ot.start-Ot._pinPush<Ut||$t===Si)&&isNaN(Ce)&&(He+=Ze*(1-Ot.progress)),$t===f&&(Ie+=Ze));if(Ut+=He,Ht+=He,R._startClamp&&(R._startClamp+=He),R._endClamp&&!rn&&(R._endClamp=Ht||-.001,Ht=Math.min(Ht,sr(L,A))),ie=Ht-Ut||(Ut-=.01)&&.001,$e&&(bt=Ft.utils.clamp(0,1,Ft.utils.normalize(Ut,Ht,et))),R._pinPush=Ie,ge&&He&&(Ze={},Ze[A.a]="+="+He,Si&&(Ze[A.p]="-="+Et()),Ft.set([ge,_e],Ze)),f&&!(Zf&&R.end>=sr(L,A)))Ze=Fn(f),Gt=A===hi,Lt=Et(),ve=parseFloat(Yt(A.a))+Ie,!Be&&Ht>1&&(T=(I?De.scrollingElement||En:L).style,T={style:T,value:T["overflow"+A.a.toUpperCase()]},I&&Fn(Pe)["overflow"+A.a.toUpperCase()]!=="scroll"&&(T.style["overflow"+A.a.toUpperCase()]="scroll")),Wf(f,Se,Ze),F=Rc(f),lt=wr(f,!0),Je=z&&br(L,Gt?ki:hi)(),m?(C=[m+A.os2,ie+Ie+gi],C.t=Se,Ge=m===ui?Bc(f,A)+ie+Ie:0,Ge&&(C.push(A.d,Ge+gi),Se.style.flexBasis!=="auto"&&(Se.style.flexBasis=Ge+gi)),So(C),Si&&le.forEach(function(H){H.pin===Si&&H.vars.pinSpacing!==!1&&(H._subPinOffset=!0)}),z&&Et(et)):(Ge=Bc(f,A),Ge&&Se.style.flexBasis!=="auto"&&(Se.style.flexBasis=Ge+gi)),z&&(zt={top:lt.top+(Gt?Lt-Ut:Je)+gi,left:lt.left+(Gt?Je:Lt-Ut)+gi,boxSizing:"border-box",position:"fixed"},zt[Os]=zt["max"+Mo]=Math.ceil(lt.width)+gi,zt[Fs]=zt["max"+rd]=Math.ceil(lt.height)+gi,zt[On]=zt[On+qa]=zt[On+Wa]=zt[On+Ya]=zt[On+Xa]="0",zt[ui]=Ze[ui],zt[ui+qa]=Ze[ui+qa],zt[ui+Wa]=Ze[ui+Wa],zt[ui+Ya]=Ze[ui+Ya],zt[ui+Xa]=Ze[ui+Xa],Fe=fy(Ae,zt,S),rn&&Et(0)),n?(cn=n._initted,kf(1),n.render(n.duration(),!0,!0),kt=Yt(A.a)-ve+ie+Ie,G=Math.abs(ie-kt)>1,z&&G&&Fe.splice(Fe.length-2,2),n.render(0,!0,!0),cn||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),kf(0)):kt=ie,T&&(T.value?T.style["overflow"+A.a.toUpperCase()]=T.value:T.style.removeProperty("overflow-"+A.a));else if(u&&Et()&&!v)for(lt=u.parentNode;lt&&lt!==Pe;)lt._pinOffset&&(Ut-=lt._pinOffset,Ht-=lt._pinOffset),lt=lt.parentNode;Ke&&Ke.forEach(function(H){return H.revert(!1,!0)}),R.start=Ut,R.end=Ht,Pt=jt=rn?et:Et(),!v&&!rn&&!rs&&(Pt<et&&Et(et),R.scroll.rec=0),R.revert(!1,!0),ct=Vi(),D&&(Y=-1,D.restart(!0)),Hi=0,n&&N&&(n._initted||j)&&n.progress()!==j&&n.progress(j||0,!0).render(n.time(),!0,!0),($e||bt!==R.progress||v||_||n&&!n._initted)&&(n&&!N&&(n._initted||bt||n.vars.immediateRender!==!1)&&n.totalProgress(v&&Ut<-.001&&!bt?Ft.utils.normalize(Ut,Ht,0):bt,!0),R.progress=$e||(Pt-Ut)/ie===bt?0:bt),f&&m&&(Se._pinOffset=Math.round(R.progress*kt)),X&&X.invalidate(),isNaN(U)||(U-=Ft.getProperty(Z,A.p),$-=Ft.getProperty(he,A.p),Pc(Z,A,U),Pc(ge,A,U-(Tt||0)),Pc(he,A,$),Pc(_e,A,$-(Tt||0))),$e&&!rn&&R.update(),h&&!rn&&!Ee&&(Ee=!0,h(R),Ee=!1)}},R.getVelocity=function(){return(Et()-jt)/(Vi()-Ba)*1e3||0},R.endAnimation=function(){Fa(R.callbackAnimation),n&&(X?X.progress(1):n.paused()?N||Fa(n,R.direction<0,1):Fa(n,n.reversed()))},R.labelToScroll=function(it){return n&&n.labels&&(Ut||R.refresh()||Ut)+n.labels[it]/n.duration()*ie||0},R.getTrailing=function(it){var Mt=le.indexOf(R),nt=R.direction>0?le.slice(0,Mt).reverse():le.slice(Mt+1);return(wn(it)?nt.filter(function(Tt){return Tt.vars.preventOverlaps===it}):nt).filter(function(Tt){return R.direction>0?Tt.end<=Ut:Tt.start>=Ht})},R.update=function(it,Mt,nt){if(!(v&&!nt&&!it)){var Tt=rn===!0?et:R.scroll(),re=it?0:(Tt-Ut)/ie,Jt=re<0?0:re>1?1:re||0,Be=R.progress,$e,He,Ie,Me,ze,Ce,Si,Ui;if(Mt&&(jt=Pt,Pt=v?Et():Tt,y&&(mt=dt,dt=n&&!N?n.totalProgress():Jt)),p&&f&&!Hi&&!bc&&Bn&&(!Jt&&Ut<Tt+(Tt-jt)/(Vi()-Ba)*p?Jt=1e-4:Jt===1&&Ht>Tt+(Tt-jt)/(Vi()-Ba)*p&&(Jt=.9999)),Jt!==Be&&R.enabled){if($e=R.isActive=!!Jt&&Jt<1,He=!!Be&&Be<1,Ce=$e!==He,ze=Ce||!!Jt!=!!Be,R.direction=Jt>Be?1:-1,R.progress=Jt,ze&&!Hi&&(Ie=Jt&&!Be?0:Jt===1?1:Be===1?2:3,N&&(Me=!Ce&&O[Ie+1]!=="none"&&O[Ie+1]||O[Ie],Ui=n&&(Me==="complete"||Me==="reset"||Me in n))),P&&(Ce||Ui)&&(Ui||d||!n)&&(Gi(P)?P(R):R.getTrailing(P).forEach(function(Lt){return Lt.endAnimation()})),N||(X&&!Hi&&!bc?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Jt,n._tTime/n._tDur):(X.vars.totalProgress=Jt,X.invalidate().restart())):n&&n.totalProgress(Jt,!!(Hi&&(ct||it)))),f){if(it&&m&&(Se.style[m+A.os2]=Xt),!z)pt(ka(ve+kt*Jt));else if(ze){if(Si=!it&&Jt>Be&&Ht+1>Tt&&Tt+1>=sr(L,A),S)if(!it&&($e||Si)){var Ge=wr(f,!0),Ze=Tt-Ut;hg(f,Pe,Ge.top+(A===hi?Ze:0)+gi,Ge.left+(A===hi?0:Ze)+gi)}else hg(f,Se);So($e||Si?Fe:F),G&&Jt<1&&$e||pt(ve+(Jt===1&&!Si?kt:0))}}y&&!gt.tween&&!Hi&&!bc&&D.restart(!0),a&&(Ce||E&&Jt&&(Jt<1||!Hf))&&Za(a.targets).forEach(function(Lt){return Lt.classList[$e||E?"add":"remove"](a.className)}),o&&!N&&!it&&o(R),ze&&!Hi?(N&&(Ui&&(Me==="complete"?n.pause().totalProgress(1):Me==="reset"?n.restart(!0).pause():Me==="restart"?n.restart(!0):n[Me]()),o&&o(R)),(Ce||!Hf)&&(c&&Ce&&mo(R,c),V[Ie]&&mo(R,V[Ie]),E&&(Jt===1?R.kill(!1,1):V[Ie]=0),Ce||(Ie=Jt===1?1:3,V[Ie]&&mo(R,V[Ie]))),b&&!$e&&Math.abs(R.getVelocity())>(Ha(b)?b:2500)&&(Fa(R.callbackAnimation),X?X.progress(1):Fa(n,Me==="reverse"?1:!Jt,1))):N&&o&&!Hi&&o(R)}if(ot){var lt=v?Tt/v.duration()*(v._caScrollDist||0):Tt;M(lt+(Z._isFlipped?1:0)),ot(lt)}_t&&_t(-Tt/v.duration()*(v._caScrollDist||0))}},R.enable=function(it,Mt){R.enabled||(R.enabled=!0,Ti(L,"resize",Va),I||Ti(L,"scroll",_o),J&&Ti(r,"refreshInit",J),it!==!1&&(R.progress=bt=0,Pt=jt=Y=Et()),Mt!==!1&&R.refresh())},R.getTween=function(it){return it&&gt?gt.tween:X},R.setPositions=function(it,Mt,nt,Tt){if(v){var re=v.scrollTrigger,Jt=v.duration(),Be=re.end-re.start;it=re.start+Be*it/Jt,Mt=re.start+Be*Mt/Jt}R.refresh(!1,!1,{start:eg(it,nt&&!!R._startClamp),end:eg(Mt,nt&&!!R._endClamp)},Tt),R.update()},R.adjustPinSpacing=function(it){if(C&&it){var Mt=C.indexOf(A.d)+1;C[Mt]=parseFloat(C[Mt])+it+gi,C[1]=parseFloat(C[1])+it+gi,So(C)}},R.disable=function(it,Mt){if(it!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Mt||X&&X.pause(),et=0,Bt&&(Bt.uncache=1),J&&bi(r,"refreshInit",J),D&&(D.pause(),gt.tween&&gt.tween.kill()&&(gt.tween=0)),!I)){for(var nt=le.length;nt--;)if(le[nt].scroller===L&&le[nt]!==R)return;bi(L,"resize",Va),I||bi(L,"scroll",_o)}},R.kill=function(it,Mt){R.disable(it,Mt),X&&!Mt&&X.kill(),l&&delete Jf[l];var nt=le.indexOf(R);nt>=0&&le.splice(nt,1),nt===nn&&Nc>0&&nn--,nt=0,le.forEach(function(Tt){return Tt.scroller===R.scroller&&(nt=1)}),nt||rn||rs||(R.scroll.rec=0),n&&(n.scrollTrigger=null,it&&n.revert({kill:!1}),Mt||n.kill()),ge&&[ge,_e,Z,he].forEach(function(Tt){return Tt.parentNode&&Tt.parentNode.removeChild(Tt)}),$a===R&&($a=0),f&&(Bt&&(Bt.uncache=1),nt=0,le.forEach(function(Tt){return Tt.pin===f&&nt++}),nt||(Bt.spacer=0)),i.onKill&&i.onKill(R)},le.push(R),R.enable(!1,!1),ht&&ht(R),n&&n.add&&!ie){var st=R.update;R.update=function(){R.update=st,se.cache++,Ut||Ht||R.refresh()},Ft.delayedCall(.01,R.update),ie=.01,Ut=Ht=0}else R.refresh();f&&cy()},r.register=function(i){return vo||(Ft=i||yg(),xg()&&window.document&&r.enable(),vo=za),vo},r.defaults=function(i){if(i)for(var n in i)Ac[n]=i[n];return Ac},r.disable=function(i,n){za=0,le.forEach(function(o){return o[n?"kill":"disable"](i)}),bi(ce,"wheel",_o),bi(De,"scroll",_o),clearInterval(Mc),bi(De,"touchcancel",rr),bi(Pe,"touchstart",rr),wc(bi,De,"pointerdown,touchstart,mousedown",ig),wc(bi,De,"pointerup,touchend,mouseup",ng),Fc.kill(),Tc(bi);for(var s=0;s<se.length;s+=3)Ec(bi,se[s],se[s+1]),Ec(bi,se[s],se[s+2])},r.enable=function(){if(ce=window,De=document,En=De.documentElement,Pe=De.body,Ft){if(Za=Ft.utils.toArray,Ga=Ft.utils.clamp,$f=Ft.core.context||rr,kf=Ft.core.suppressOverwrites||rr,td=ce.history.scrollRestoration||"auto",Kf=ce.pageYOffset||0,Ft.core.globals("ScrollTrigger",r),Pe){za=1,yo=document.createElement("div"),yo.style.height="100vh",yo.style.position="absolute",Pg(),iy(),oi.register(Ft),r.isTouch=oi.isTouch,ns=oi.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Yf=oi.isTouch===1,Ti(ce,"wheel",_o),jf=[ce,De,En,Pe],Ft.matchMedia?(r.matchMedia=function(h){var d=Ft.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ft.addEventListener("matchMediaInit",function(){Cg(),od()}),Ft.addEventListener("matchMediaRevert",function(){return Ag()}),Ft.addEventListener("matchMedia",function(){Us(0,1),Hs("matchMedia")}),Ft.matchMedia().add("(orientation: portrait)",function(){return Gf(),Gf})):console.warn("Requires GSAP 3.11.0 or later"),Gf(),Ti(De,"scroll",_o);var i=Pe.hasAttribute("style"),n=Pe.style,s=n.borderTopStyle,o=Ft.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=wr(Pe),hi.m=Math.round(a.top+hi.sc())||0,ki.m=Math.round(a.left+ki.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(Pe.setAttribute("style",""),Pe.removeAttribute("style")),Mc=setInterval(og,250),Ft.delayedCall(.5,function(){return bc=0}),Ti(De,"touchcancel",rr),Ti(Pe,"touchstart",rr),wc(Ti,De,"pointerdown,touchstart,mousedown",ig),wc(Ti,De,"pointerup,touchend,mouseup",ng),qf=Ft.utils.checkPrefix("transform"),Uc.push(qf),vo=Vi(),Fc=Ft.delayedCall(.2,Us).pause(),xo=[De,"visibilitychange",function(){var h=ce.innerWidth,d=ce.innerHeight;De.hidden?(Qm=h,jm=d):(Qm!==h||jm!==d)&&Va()},De,"DOMContentLoaded",Us,ce,"load",Us,ce,"resize",Va],Tc(Ti),le.forEach(function(h){return h.enable(0,1)}),l=0;l<se.length;l+=3)Ec(bi,se[l],se[l+1]),Ec(bi,se[l],se[l+2])}else if(De){var c=function h(){r.enable(),De.removeEventListener("DOMContentLoaded",h)};De.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(Hf=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Mc)||(Mc=n)&&setInterval(og,n),"ignoreMobileResize"in i&&(Yf=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Tc(bi)||Tc(Ti,i.autoRefreshEvents||"none"),gg=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=tn(i),o=se.indexOf(s),a=zs(s);~o&&se.splice(o,a?6:2),n&&(a?Xn.unshift(ce,n,Pe,n,En,n):Xn.unshift(s,n))},r.clearMatchMedia=function(i){le.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(wn(i)?tn(i):i).getBoundingClientRect(),a=o[s?Os:Fs]*n||0;return s?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},r.positionInViewport=function(i,n,s){wn(i)&&(i=tn(i));var o=i.getBoundingClientRect(),a=o[s?Os:Fs],l=n==null?a/2:n in zc?zc[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},r.killAll=function(i){if(le.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=ks.killAll||[];ks={},n.forEach(function(s){return s()})}},r})();ne.version="3.15.1";ne.saveStyles=function(r){return r?Za(r).forEach(function(t){if(t&&t.style){var e=Tn.indexOf(t);e>=0&&Tn.splice(e,5),Tn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ft.core.getCache(t),$f())}}):Tn};ne.revert=function(r,t){return od(!r,t)};ne.create=function(r,t){return new ne(r,t)};ne.refresh=function(r){return r?Va(!0):(vo||ne.register())&&Us(!0)};ne.update=function(r){return++se.cache&&Er(r===!0?2:0)};ne.clearScrollMemory=Rg;ne.maxScroll=function(r,t){return sr(r,t?ki:hi)};ne.getScrollFunc=function(r,t){return br(tn(r),t?ki:hi)};ne.getById=function(r){return Jf[r]};ne.getAll=function(){return le.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ne.isScrolling=function(){return!!Bn};ne.snapDirectional=sd;ne.addEventListener=function(r,t){var e=ks[r]||(ks[r]=[]);~e.indexOf(t)||e.push(t)};ne.removeEventListener=function(r,t){var e=ks[r],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ne.batch=function(r,t){var e=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ft.delayedCall(n,function(){h(d,u),d=[],u=[]}).pause();return function(m){d.length||f.restart(!0),d.push(m.trigger),u.push(m),s<=d.length&&f.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Gi(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Gi(s)&&(s=s(),Ti(ne,"refresh",function(){return s=t.batchMax()})),Za(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(ne.create(c))}),e};var fg=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Xf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(oi.isTouch?" pinch-zoom":""):"none",t===En&&r(Pe,e)},Ic={auto:1,scroll:1},py=function(t){var e=t.event,i=t.target,n=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ft.core.getCache(s),a=Vi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Pe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ic[(l=Fn(s)).overflowY]||Ic[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!zs(s)&&(Ic[(l=Fn(s)).overflowY]||Ic[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Lg=function(t,e,i,n){return oi.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&py,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ti(De,oi.eventTypes[0],pg,!1,!0)},onDisable:function(){return bi(De,oi.eventTypes[0],pg,!0)}})},my=/(input|label|select|textarea)/i,dg,pg=function(t){var e=my.test(t.target.tagName);(e||dg)&&(t._gsapAllow=!0,dg=e)},gy=function(t){Ns(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=tn(t.target)||En,h=Ft.core.globals().ScrollSmoother,d=h&&h.get(),u=ns&&(t.content&&tn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=br(c,hi),m=br(c,ki),_=1,p=(oi.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,g=0,x=Gi(n)?function(){return n(a)}:function(){return n||2.8},E,y,S=Lg(c,t.type,!0,s),w=function(){return y=!1},v=rr,b=rr,P=function(){l=sr(c,hi),b=Ga(ns?1:0,l),i&&(v=Ga(0,sr(c,ki))),E=Bs},A=function(){u._gsap.y=ka(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(w);var Q=ka(a.deltaY/2),W=b(f.v-Q);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var R=ka((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=se.cache,Er()}return!0}f.offset&&A(),y=!0},L,k,I,z,V=function(){P(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return u&&Ft.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return ns&&O.type==="touchmove"&&N(O)||_>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=_;_=ka((ce.visualViewport&&ce.visualViewport.scale||1)/p),L.pause(),O!==_&&Xf(c,_>1.01?!0:i?!1:"x"),k=m(),I=f(),P(),E=Bs},t.onRelease=t.onGestureStart=function(O,Q){if(f.offset&&A(),!Q)z.restart(!0);else{se.cache++;var W=x(),R,J;i&&(R=m(),J=R+W*.05*-O.velocityX/.227,W*=fg(m,R,J,sr(c,ki)),L.vars.scrollX=v(J)),R=f(),J=R+W*.05*-O.velocityY/.227,W*=fg(f,R,J,sr(c,hi)),L.vars.scrollY=b(J),L.invalidate().duration(W).play(.01),(ns&&L.vars.scrollY>=l||R>=l-1)&&Ft.to({},{onUpdate:V,duration:W})}o&&o(O)},t.onWheel=function(){L._ts&&L.pause(),Vi()-g>1e3&&(E=0,g=Vi())},t.onChange=function(O,Q,W,R,J){if(Bs!==E&&P(),Q&&i&&m(v(R[2]===Q?k+(O.startX-O.x):m()+Q-R[1])),W){f.offset&&A();var xt=J[2]===W,At=xt?I+O.startY-O.y:f()+W-J[1],Y=b(At);xt&&At!==Y&&(I+=Y-At),f(Y)}(W||Q)&&Er()},t.onEnable=function(){Xf(c,i?!1:"x"),ne.addEventListener("refresh",V),Ti(ce,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),S.enable()},t.onDisable=function(){Xf(c,!0),bi(ce,"resize",V),ne.removeEventListener("refresh",V),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new oi(t),a.iOS=ns,ns&&!f()&&f(1),ns&&Ft.ticker.add(rr),z=a._dc,L=Ft.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ig(f,f(),function(){return L.pause()})},onUpdate:Er,onComplete:z.vars.onComplete}),a};ne.sort=function(r){if(Gi(r))return le.sort(r);var t=ce.pageYOffset||0;return ne.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ce.innerHeight}),le.sort(r||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ne.observe=function(r){return new oi(r)};ne.normalizeScroll=function(r){if(typeof r>"u")return en;if(r===!0&&en)return en.enable();if(r===!1){en&&en.kill(),en=r;return}var t=r instanceof oi?r:gy(r);return en&&en.target===t.target&&en.kill(),zs(t.target)&&(en=t),t};ne.core={_getVelocityProp:Sc,_inputObserver:Lg,_scrollers:se,_proxies:Xn,bridge:{ss:function(){Bn||Hs("scrollStart"),Bn=Vi()},ref:function(){return Hi}}};yg()&&Ft.registerPlugin(ne);var Ka,Qa,Dg=typeof Symbol=="function"?Symbol():"_split",ld,_y=()=>ld||Vs.register(window.gsap),Ng=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,ja=r=>r?typeof r=="string"?ja(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...ja(e)):t.push(e),t),[]):[r]:[],Ug=r=>ja(r).filter(t=>t&&t.nodeType===1),Hc=[],ad=function(){},vy={add:r=>r()},xy=/\s+/g,Og=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Vc={left:0,top:0,width:0,height:0},yy=(r,t)=>{for(;++t<r.length&&r[t]===Vc;);return r[t]||Vc},Fg=({element:r,html:t,ariaL:e,ariaH:i})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")},Bg=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||Hc),i=r.length,n,s,o,a;if(e.size)for(;--i>-1;){s=r[i];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(n=0,a=s;o.startsWith(a+=r[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){r[i]=o,r.splice(i+1,n);break}}}}return r},zg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),bo=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),cd=(r,t,e)=>{let i=t[r+"sClass"]||"",{tag:n="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=h=>{let d=document.createElement(n),u=e.length+1;return i&&(d.className=i+(l?" "+i+u:"")),o&&d.style.setProperty("--"+r,u+""),s!=="none"&&d.setAttribute("aria-hidden","true"),n!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(i=i.replace("++","")),c.collection=e,c},Sy=(r,t,e,i)=>{let n=cd("line",e,i),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},kg=(r,t,e,i,n,s,o,a,l,c)=>{var h;let d=Array.from(r.childNodes),u=0,{wordDelimiter:f,reduceWhiteSpace:m=!0,prepareText:_}=t,p=r.getBoundingClientRect(),g=p,x=!m&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",E=s&&c&&window.getComputedStyle(r).direction==="rtl",y=0,S=e.collection,w,v,b,P,A,N,L,k,I,z,V,O,Q,W,R,J,xt,At;for(typeof f=="object"?(b=f.delimiter||f,v=f.replaceWith||""):v=f===""?"":f||" ",w=v!==" ";u<d.length;u++)if(P=d[u],P.nodeType===3){for(R=P.textContent||"",m?R=R.replace(xy," "):x&&(R=R.replace(/\n/g,v+`
`)),_&&(R=_(R,r)),P.textContent=R,A=v||b?R.split(b||v):R.match(a)||Hc,xt=A[A.length-1],k=w?xt.slice(-1)===" ":!xt,xt||A.pop(),g=p,L=w?A[0].charAt(0)===" ":!A[0],L&&bo(" ",r,P),A[0]||A.shift(),Bg(A,l),s&&c||(P.textContent=""),I=1;I<=A.length;I++)if(J=A[I-1],!m&&x&&J.charAt(0)===`
`&&((h=P.previousSibling)==null||h.remove(),bo(document.createElement("br"),r,P),J=J.slice(1)),!m&&J==="")bo(v,r,P);else if(J===" ")r.insertBefore(document.createTextNode(" "),P);else{if(w&&J.charAt(0)===" "&&bo(" ",r,P),y&&I===1&&!L&&S.indexOf(y.parentNode)>-1?(N=S[S.length-1],N.appendChild(document.createTextNode(i?"":J))):(N=e(i?"":J),bo(N,r,P),y&&I===1&&!L&&N.insertBefore(y,N.firstChild)),i){if(V=Ng?Bg([...Ng.segment(J)].map(Y=>Y.segment),l):J.match(a)||Hc,l){let Y=J.match(l);Y&&Y.some(ct=>V.indexOf(ct)<0)&&(V=J.match(a)||Hc)}for(At=0;At<V.length;At++)N.appendChild(V[At]===" "?document.createTextNode(" "):i(V[At]))}if(s&&c){if(R=P.textContent=R.substring(J.length+1,R.length),z=N.getBoundingClientRect(),z.top>g.top&&(E?z.left>=g.left:z.left<=g.left)){for(O=r.cloneNode(),Q=r.childNodes[0];Q&&Q!==N;)W=Q,Q=Q.nextSibling,O.appendChild(W);r.parentNode.insertBefore(O,r),n&&zg(O)}g=z}(I<A.length||k)&&bo(I>=A.length?" ":w&&J.slice(-1)===" "?" "+v:v,r,P)}r.removeChild(P),y=0}else P.nodeType===1&&(o&&o.indexOf(P)>-1?(S.indexOf(P.previousSibling)>-1&&S[S.length-1].appendChild(P),y=P):(kg(P,t,e,i,n,s,o,a,l,!0),y=0),n&&zg(P))},Hg=class Vg{constructor(t,e){this.isSplit=!1,_y(),this.elements=Ug(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(s=>{var o;e.overwrite!==!1&&((o=s[Dg])==null||o._data.orig.filter(({element:a})=>a===s).forEach(Fg)),s[Dg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n=()=>{let s=i.length,o;for(;s--;){o=i[s];let a=o.element.offsetWidth;if(a!==o.width){o.width=a,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(this._data.t),this._data.t=setTimeout(n,200)})},ad(this),this.split(e)}split(t){return(this._ctx||vy).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,u=e.indexOf("words")>-1,f=d&&!u&&!h,m=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=m?new RegExp(m.source+"|"+Og.source,"gu"):Og,p=!!t.ignore&&Ug(t.ignore),{orig:g,animTime:x,obs:E}=this._data,y;(d||u||h)&&(this.elements.forEach((S,w)=>{g[w]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},i==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):i==="hidden"&&S.setAttribute("aria-hidden","true");let v=[],b=[],P=[],A=d?cd("char",t,v):null,N=cd("word",t,b),L,k,I,z;if(kg(S,t,N,A,f,n&&(h||f),p,_,m,!1),h){let V=ja(S.childNodes),O=Sy(S,V,t,P),Q,W=[],R=0,J=window.getComputedStyle(S).direction==="rtl",xt=V.map(ct=>ct.nodeType===1?ct.getBoundingClientRect():Vc),At=Vc,Y;for(L=0;L<V.length;L++)Q=V[L],Q.nodeType===1&&(Q.nodeName==="BR"?((!L||V[L-1].nodeName!=="BR")&&(W.push(Q),O(R,L+1)),R=L+1,At=yy(xt,L)):(Y=xt[L],L&&Y.top>At.top&&(J?Y.left+Y.width>At.left+1:Y.left<At.left+At.width-1)&&(O(R,L),R=L),At=Y));R<L&&O(R,L),W.forEach(ct=>{var bt;return(bt=ct.parentNode)==null?void 0:bt.removeChild(ct)})}if(!u){for(L=0;L<b.length;L++)if(k=b[L],d||!k.nextSibling||k.nextSibling.nodeType!==3)if(s&&!h){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";k.firstChild;)I.appendChild(k.firstChild);k.replaceWith(I)}else k.replaceWith(...k.childNodes);else z=k.nextSibling,z&&z.nodeType===3&&(z.textContent=(k.textContent||"")+(z.textContent||""),k.remove());b.length=0,S.normalize()}this.lines.push(...P),this.words.push(...b),this.chars.push(...v)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let w=S.cloneNode();return S.replaceWith(w),w.appendChild(S),S.className&&(w.className=S.className.trim().split(" ").map(v=>v+"-mask").join(" ")),w.style.overflow="clip",w.style.verticalAlign="top",w}))),this.isSplit=!0,Qa&&h&&a&&Qa.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=x?y.totalTime(x):y),h&&a&&this.elements.forEach((S,w)=>{g[w].width=S.offsetWidth,E&&E.observe(S)})}),this}kill(){let{obs:t,t:e}=this._data;t&&t.disconnect(),clearTimeout(e),Qa?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(Fg),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Vg(t,e)}static register(t){Ka=Ka||t||window.gsap,Ka&&(ja=Ka.utils.toArray,ad=Ka.core.context||ad),!ld&&window.innerWidth>0&&(Qa=document.fonts,ld=!0)}};Hg.version="3.15.1";var Vs=Hg;var Gg="1.3.27";function qg(r,t,e){return Math.max(r,Math.min(t,e))}function My(r,t,e){return(1-e)*r+e*t}function by(r,t,e,i){return My(r,t,1-Math.exp(-e*i))}function Ty(r,t){return(r%t+t)%t}var wy=class{constructor(){Vt(this,"isRunning",!1);Vt(this,"value",0);Vt(this,"from",0);Vt(this,"to",0);Vt(this,"currentTime",0);Vt(this,"lerp");Vt(this,"duration");Vt(this,"easing");Vt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=qg(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=by(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function Ey(r,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,i)},t)}}var Ay=class{constructor(r,t,{autoResize:e=!0,debounce:i=250}={}){Vt(this,"width",0);Vt(this,"height",0);Vt(this,"scrollHeight",0);Vt(this,"scrollWidth",0);Vt(this,"debouncedResize");Vt(this,"wrapperResizeObserver");Vt(this,"contentResizeObserver");Vt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Vt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Vt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=Ey(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Yg=class{constructor(){Vt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},Cy=100/6,ss={passive:!1};function Wg(r,t){return r===1?Cy:r===2?t:1}var Ry=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Vt(this,"touchStart",{x:0,y:0});Vt(this,"lastDelta",{x:0,y:0});Vt(this,"window",{width:0,height:0});Vt(this,"emitter",new Yg);Vt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Vt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})});Vt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Vt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:i}=r,n=Wg(i,this.window.width),s=Wg(i,this.window.height);t*=n,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Vt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ss),this.element.addEventListener("touchstart",this.onTouchStart,ss),this.element.addEventListener("touchmove",this.onTouchMove,ss),this.element.addEventListener("touchend",this.onTouchEnd,ss)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ss),this.element.removeEventListener("touchstart",this.onTouchStart,ss),this.element.removeEventListener("touchmove",this.onTouchMove,ss),this.element.removeEventListener("touchend",this.onTouchEnd,ss)}},Xg=r=>Math.min(1,1.001-2**(-10*r)),$g=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:p,virtualScroll:g,overscroll:x=!0,autoRaf:E=!1,anchors:y=!1,autoToggle:S=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:v=!1,naiveDimensions:b=v,stopInertiaOnNavigate:P=!1,respectReducedMotion:A=!0}={}){Vt(this,"_isScrolling",!1);Vt(this,"_isStopped",!1);Vt(this,"_isLocked",!1);Vt(this,"_preventNextNativeScrollEvent",!1);Vt(this,"_resetVelocityTimeout",null);Vt(this,"_rafId",null);Vt(this,"_isDraggingSelection",!1);Vt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Vt(this,"isTouching");Vt(this,"isIos");Vt(this,"time",0);Vt(this,"userData",{});Vt(this,"lastVelocity",0);Vt(this,"velocity",0);Vt(this,"direction",0);Vt(this,"options");Vt(this,"targetScroll");Vt(this,"animatedScroll");Vt(this,"animate",new wy);Vt(this,"emitter",new Yg);Vt(this,"dimensions");Vt(this,"virtualScroll");Vt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Vt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Vt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Vt(this,"onClick",r=>{let t=r.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Vt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Vt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(m=>m instanceof HTMLElement&&(typeof c=="function"&&c?.(m)||m.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&m.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&m.hasAttribute?.("data-lenis-prevent-horizontal")||n&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(m,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let u=n&&this.options.syncTouch,f=n&&i.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Vt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Vt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Gg,window.lenis||(window.lenis={}),window.lenis.version=Gg,d==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Xg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:p,virtualScroll:g,overscroll:x,autoRaf:E,anchors:y,autoToggle:S,allowNestedScroll:w,naiveDimensions:b,stopInertiaOnNavigate:P,respectReducedMotion:A},this.dimensions=new Ay(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Ry(e,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],s=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(n?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=r,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let m=null;if(typeof u=="string"?(m=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),m||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(m=u),m){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let _=m.getBoundingClientRect(),p=getComputedStyle(m),g=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),E=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(E)?0:E)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let m=u-this.animatedScroll;m>this.limit/2?u-=this.limit:m<-this.limit/2&&(u+=this.limit)}}else u=qg(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Xg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),n&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let i=Date.now();r._lenis||(r._lenis={});let n=r._lenis,s,o,a,l,c,h,d,u,f,m;if(i-(n.time??0)>2e3){n.time=Date.now();let w=window.getComputedStyle(r);if(n.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,m=r.clientHeight,a=d>f,l=u>m,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=d,n.scrollHeight=u,n.clientWidth=f,n.clientHeight=m,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=h}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,d=n.scrollWidth,u=n.scrollHeight,f=n.clientWidth,m=n.clientHeight,c=n.hasOverscrollBehaviorX,h=n.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",p,g,x,E,y,S;if(_==="horizontal")p=Math.round(r.scrollLeft),g=d-f,x=t,E=s,y=a,S=c;else if(_==="vertical")p=Math.round(r.scrollTop),g=u-m,x=e,E=o,y=l,S=h;else return!1;return!S&&(p>=g||p<=0)?!0:(x>0?p<g:p>0)&&E&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Ty(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var E0=0,Gd=1,A0=2;var Cl=1,C0=2,sa=3,xs=0,Di=1,Hn=2,kr=0,oa=1,ln=2,Wd=3,Xd=4,R0=5;var $s=100,P0=101,I0=102,L0=103,D0=104,N0=200,U0=201,O0=202,F0=203,qd=204,Yd=205,B0=206,z0=207,k0=208,H0=209,V0=210,G0=211,W0=212,X0=213,q0=214,_h=0,vh=1,xh=2,Go=3,yh=4,Sh=5,Mh=6,bh=7,$d=0,Y0=1,$0=2,ur=0,Rl=1,Pl=2,Il=3,Ll=4,Dl=5,Nl=6,Zs=7;var Zd=300,Js=301,aa=302,$h=303,Zh=304,Th=1e3,ar=1001,wh=1002,Ai=1003,Z0=1004;var Ul=1005;var an=1006,Jh=1007;var Hr=1008;var Pn=1009,Jd=1010,Kd=1011,la=1012,Kh=1013,Jn=1014,Kn=1015,Ni=1016,Qh=1017,jh=1018,Ks=1020,Qd=35902,jd=35899,tp=1021,ep=1022,Qn=1023,Ur=1026,Vr=1027,ip=1028,tu=1029,ys=1030,eu=1031;var iu=1033,Ol=33776,Fl=33777,Bl=33778,zl=33779,nu=35840,ru=35841,su=35842,ou=35843,au=36196,lu=37492,cu=37496,hu=37488,uu=37489,kl=37490,fu=37491,du=37808,pu=37809,mu=37810,gu=37811,_u=37812,vu=37813,xu=37814,yu=37815,Su=37816,Mu=37817,bu=37818,Tu=37819,wu=37820,Eu=37821,Au=36492,Cu=36494,Ru=36495,Pu=36283,Iu=36284,Hl=36285,Lu=36286;var ll=2300,Eh=2301,ph=2302,Ud=2303,Od=2400,Fd=2401,Bd=2402;var J0=3200;var np=0,K0=1,Gr="",Li="srgb",cl="srgb-linear",hl="linear",Te="srgb";var mh=7680;var Q0=519,j0=512,t_=513,e_=514,rp=515,i_=516,n_=517,sp=518,op=519,ap=35044;var lp="300 es",kn=2e3,ul=2001;function Py(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Iy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Wo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function r_(){let r=Wo("canvas");return r.style.display="block",r}var Zg={},Xo=null;function fl(...r){let t="THREE."+r.shift();Xo?Xo("log",t,...r):console.log(t,...r)}function s_(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Zt(...r){r=s_(r);let t="THREE."+r.shift();if(Xo)Xo("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Kt(...r){r=s_(r);let t="THREE."+r.shift();if(Xo)Xo("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function al(...r){let t=r.join(" ");t in Zg||(Zg[t]=!0,Zt(...r))}function o_(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var a_={[_h]:_h,[xh]:Mh,[yh]:yh,[Go]:Sh,[vh]:vh,[Mh]:xh,[bh]:bh,[Sh]:Go},lr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},Wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hd=Math.PI/180,Ah=180/Math.PI;function Qs(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wi[r&255]+Wi[r>>8&255]+Wi[r>>16&255]+Wi[r>>24&255]+"-"+Wi[t&255]+Wi[t>>8&255]+"-"+Wi[t>>16&15|64]+Wi[t>>24&255]+"-"+Wi[e&63|128]+Wi[e>>8&255]+"-"+Wi[e>>16&255]+Wi[e>>24&255]+Wi[i&255]+Wi[i>>8&255]+Wi[i>>16&255]+Wi[i>>24&255]).toLowerCase()}function me(r,t,e){return Math.max(t,Math.min(e,r))}function Ly(r,t){return(r%t+t)%t}function ud(r,t,e){return(1-e)*r+e*t}function l_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Du(r){switch(r.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function c_(r,t){if(t.constructor===Float32Array)return r;let e=Du(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(r/e,-1)}function h_(r,t){if(t.constructor===Float32Array)return r;let e=Du(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(r*e)}var pp=class pp{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pp.prototype.isVector2=!0;var Wt=pp,cr=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=s[o+0],f=s[o+1],m=s[o+2],_=s[o+3];if(d!==_||l!==u||c!==f||h!==m){let p=l*u+c*f+h*m+d*_;p<0&&(u=-u,f=-f,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){let x=Math.acos(p),E=Math.sin(x);g=Math.sin(g*x)/E,a=Math.sin(a*x)/E,l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+m*a,d=d*g+_*a;let x=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=x,c*=x,h*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=s[o],u=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*d+l*f-c*u,t[e+1]=l*m+h*u+c*d-a*f,t[e+2]=c*m+h*f+a*u-l*d,t[e+3]=h*m-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(s/2),u=l(i/2),f=l(n/2),m=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"YXZ":this._x=u*h*d+c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"ZXY":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d-u*f*m;break;case"ZYX":this._x=u*h*d-c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d+u*f*m;break;case"YZX":this._x=u*h*d+c*f*m,this._y=c*f*d+u*h*m,this._z=c*h*m-u*f*d,this._w=c*h*d-u*f*m;break;case"XZY":this._x=u*h*d-c*f*m,this._y=c*f*d-u*h*m,this._z=c*h*m+u*f*d,this._w=c*h*d+u*f*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},mp=class mp{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-s*n),d=2*(s*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-s*d,this.z=n+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fd.copy(this).projectOnVector(t),this.sub(fd)}reflect(t){return this.sub(fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mp.prototype.isVector3=!0;var B=mp,fd=new B,Jg=new cr,gp=class gp{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],m=i[8],_=n[0],p=n[3],g=n[6],x=n[1],E=n[4],y=n[7],S=n[2],w=n[5],v=n[8];return s[0]=o*_+a*x+l*S,s[3]=o*p+a*E+l*w,s[6]=o*g+a*y+l*v,s[1]=c*_+h*x+d*S,s[4]=c*p+h*E+d*w,s[7]=c*g+h*y+d*v,s[2]=u*_+f*x+m*S,s[5]=u*p+f*E+m*w,s[8]=u*g+f*y+m*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,m=e*d+i*u+n*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=d*_,t[1]=(n*c-h*i)*_,t[2]=(a*i-n*o)*_,t[3]=u*_,t[4]=(h*e-n*l)*_,t[5]=(n*s-a*e)*_,t[6]=f*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return al("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dd.makeScale(t,e)),this}rotate(t){return al("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dd.makeRotation(-t)),this}translate(t,e){return al("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gp.prototype.isMatrix3=!0;var te=gp,dd=new te,Kg=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qg=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dy(){let r={enabled:!0,workingColorSpace:cl,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Te&&(n.r=Nr(n.r),n.g=Nr(n.g),n.b=Nr(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(n.r=Vo(n.r),n.g=Vo(n.g),n.b=Vo(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gr?hl:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[o].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[cl]:{primaries:t,whitePoint:i,transfer:hl,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:i,transfer:Te,toXYZ:Kg,fromXYZ:Qg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),r}var de=Dy();function Nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var To,Ch=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{To===void 0&&(To=Wo("canvas")),To.width=t.width,To.height=t.height;let n=To.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=To}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Wo("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Nr(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nr(e[i]/255)*255):e[i]=Nr(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ny=0,qo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(pd(n[o].image)):s.push(pd(n[o]))}else s=pd(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function pd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ch.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var Uy=0,md=new B,qi=class r extends lr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=ar,n=ar,s=an,o=Hr,a=Qn,l=Pn,c=r.DEFAULT_ANISOTROPY,h=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Qs(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Th:t.x=t.x-Math.floor(t.x);break;case ar:t.x=t.x<0?0:1;break;case wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Th:t.y=t.y-Math.floor(t.y);break;case ar:t.y=t.y<0?0:1;break;case wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qi.DEFAULT_IMAGE=null;qi.DEFAULT_MAPPING=Zd;qi.DEFAULT_ANISOTROPY=1;var _p=class _p{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,S=(g+1)/2,w=(h+u)/4,v=(d+_)/4,b=(m+p)/4;return E>y&&E>S?E<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(E),n=w/i,s=v/i):y>S?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=w/n,s=b/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=v/s,n=b/s),this.set(i,n,s,e),this}let x=Math.sqrt((p-m)*(p-m)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=me(this.x,t.x,e.x),this.y=me(this.y,t.y,e.y),this.z=me(this.z,t.z,e.z),this.w=me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=me(this.x,t,e),this.y=me(this.y,t,e),this.z=me(this.z,t,e),this.w=me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_p.prototype.isVector4=!0;var ii=_p,Rh=class extends lr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ii(0,0,t,e),this.scissorTest=!1,this.viewport=new ii(0,0,t,e),this.textures=[];let n=i.count;for(let s=0;s<n;s++)this.textures[s]=new qi({width:t,height:e,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new qo(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends Rh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},dl=class extends qi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ph=class extends qi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Yh=class Yh{constructor(t,e,i,n,s,o,a,l,c,h,d,u,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,h,d,u,f,m,_,p)}set(t,e,i,n,s,o,a,l,c,h,d,u,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yh().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/wo.setFromMatrixColumn(t,0).length(),s=1/wo.setFromMatrixColumn(t,1).length(),o=1/wo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+m*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u+_*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,m=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,m=a*h,_=a*d;e[0]=l*h,e[4]=m*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+m,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,m=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oy,t,Fy)}lookAt(t,e,i){let n=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),os.crossVectors(i,An),os.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),os.crossVectors(i,An)),os.normalize(),Gc.crossVectors(An,os),n[0]=os.x,n[4]=Gc.x,n[8]=An.x,n[1]=os.y,n[5]=Gc.y,n[9]=An.y,n[2]=os.z,n[6]=Gc.z,n[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],m=i[2],_=i[6],p=i[10],g=i[14],x=i[3],E=i[7],y=i[11],S=i[15],w=n[0],v=n[4],b=n[8],P=n[12],A=n[1],N=n[5],L=n[9],k=n[13],I=n[2],z=n[6],V=n[10],O=n[14],Q=n[3],W=n[7],R=n[11],J=n[15];return s[0]=o*w+a*A+l*I+c*Q,s[4]=o*v+a*N+l*z+c*W,s[8]=o*b+a*L+l*V+c*R,s[12]=o*P+a*k+l*O+c*J,s[1]=h*w+d*A+u*I+f*Q,s[5]=h*v+d*N+u*z+f*W,s[9]=h*b+d*L+u*V+f*R,s[13]=h*P+d*k+u*O+f*J,s[2]=m*w+_*A+p*I+g*Q,s[6]=m*v+_*N+p*z+g*W,s[10]=m*b+_*L+p*V+g*R,s[14]=m*P+_*k+p*O+g*J,s[3]=x*w+E*A+y*I+S*Q,s[7]=x*v+E*N+y*z+S*W,s[11]=x*b+E*L+y*V+S*R,s[15]=x*P+E*k+y*O+S*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],x=l*f-c*u,E=a*f-c*d,y=a*u-l*d,S=o*f-c*h,w=o*u-l*h,v=o*d-a*h;return e*(_*x-p*E+g*y)-i*(m*x-p*S+g*w)+n*(m*E-_*S+g*v)-s*(m*y-_*w+p*v)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(s*h-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],x=e*a-i*o,E=e*l-n*o,y=e*c-s*o,S=i*l-n*a,w=i*c-s*a,v=n*c-s*l,b=h*_-d*m,P=h*p-u*m,A=h*g-f*m,N=d*p-u*_,L=d*g-f*_,k=u*g-f*p,I=x*k-E*L+y*N+S*A-w*P+v*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*k-l*L+c*N)*z,t[1]=(n*L-i*k-s*N)*z,t[2]=(_*v-p*w+g*S)*z,t[3]=(u*w-d*v-f*S)*z,t[4]=(l*A-o*k-c*P)*z,t[5]=(e*k-n*A+s*P)*z,t[6]=(p*y-m*v-g*E)*z,t[7]=(h*v-u*y+f*E)*z,t[8]=(o*L-a*A+c*b)*z,t[9]=(i*A-e*L-s*b)*z,t[10]=(m*w-_*y+g*x)*z,t[11]=(d*y-h*w-f*x)*z,t[12]=(a*P-o*N-l*b)*z,t[13]=(e*N-i*P+n*b)*z,t[14]=(_*E-m*S-p*x)*z,t[15]=(h*S-d*E+u*x)*z,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,m=s*d,_=o*h,p=o*d,g=a*d,x=l*c,E=l*h,y=l*d,S=i.x,w=i.y,v=i.z;return n[0]=(1-(_+g))*S,n[1]=(f+y)*S,n[2]=(m-E)*S,n[3]=0,n[4]=(f-y)*w,n[5]=(1-(u+g))*w,n[6]=(p+x)*w,n[7]=0,n[8]=(m+E)*v,n[9]=(p-x)*v,n[10]=(1-(u+_))*v,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=wo.set(n[0],n[1],n[2]).length(),a=wo.set(n[4],n[5],n[6]).length(),l=wo.set(n[8],n[9],n[10]).length();s<0&&(o=-o),qn.copy(this);let c=1/o,h=1/a,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,e.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=kn,l=!1){let c=this.elements,h=2*s/(e-t),d=2*s/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===kn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ul)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=kn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===kn)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===ul)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Yh.prototype.isMatrix4=!0;var Ve=Yh,wo=new B,qn=new Ve,Oy=new B(0,0,0),Fy=new B(1,1,1),os=new B,Gc=new B,An=new B,jg=new Ve,t0=new cr,us=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return jg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jg,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return t0.setFromEuler(this),this.setFromQuaternion(t0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};us.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},By=0,e0=new B,Eo=new cr,Ar=new Ve,Wc=new B,tl=new B,zy=new B,ky=new cr,i0=new B(1,0,0),n0=new B(0,1,0),r0=new B(0,0,1),s0={type:"added"},Hy={type:"removed"},Ao={type:"childadded",child:null},gd={type:"childremoved",child:null},gn=class r extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new B,e=new us,i=new cr,n=new B(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ve},normalMatrix:{value:new te}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(t,e){return Eo.setFromAxisAngle(t,e),this.quaternion.premultiply(Eo),this}rotateX(t){return this.rotateOnAxis(i0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(r0,t)}translateOnAxis(t,e){return e0.copy(t).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(i0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(r0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Wc.copy(t):Wc.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(tl,Wc,this.up):Ar.lookAt(Wc,tl,this.up),this.quaternion.setFromRotationMatrix(Ar),n&&(Ar.extractRotation(n.matrixWorld),Eo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Eo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(s0),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hy),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ar.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ar),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(s0),Ao.child=t,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,t,zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,ky,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new B(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dr=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vy={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,m=.005;c.inputState.pinching&&u>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Dr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},u_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function _d(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=de.workingColorSpace){if(t=Ly(t,1),e=me(e,0,1),i=me(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=_d(o,s,t+1/3),this.g=_d(o,s,t),this.b=_d(o,s,t-1/3)}return de.colorSpaceToWorking(this,n),this}setStyle(t,e=Li){function i(s){s!==void 0&&parseFloat(s)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,e);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Li){let i=u_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}copyLinearToSRGB(t){return this.r=Vo(t.r),this.g=Vo(t.g),this.b=Vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return de.workingToColorSpace(Xi.copy(this),t),Math.round(me(Xi.r*255,0,255))*65536+Math.round(me(Xi.g*255,0,255))*256+Math.round(me(Xi.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(Xi.copy(this),e);let i=Xi.r,n=Xi.g,s=Xi.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-s)/d+(n<s?6:0);break;case n:l=(s-i)/d+2;break;case s:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(Xi.copy(this),e),t.r=Xi.r,t.g=Xi.g,t.b=Xi.b,t}getStyle(t=Li){de.workingToColorSpace(Xi.copy(this),t);let e=Xi.r,i=Xi.g,n=Xi.b;return t!==Li?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(as),this.setHSL(as.h+t,as.s+e,as.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(as),t.getHSL(Xc);let i=ud(as.h,Xc.h,e),n=ud(as.s,Xc.s,e),s=ud(as.l,Xc.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xi=new Qt;Qt.NAMES=u_;var pl=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yn=new B,Cr=new B,vd=new B,Rr=new B,Co=new B,Ro=new B,o0=new B,xd=new B,yd=new B,Sd=new B,Md=new ii,bd=new ii,Td=new ii,Lr=class r{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Yn.subVectors(t,e),n.cross(Yn);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){Yn.subVectors(n,e),Cr.subVectors(i,e),vd.subVectors(t,e);let o=Yn.dot(Yn),a=Yn.dot(Cr),l=Yn.dot(vd),c=Cr.dot(Cr),h=Cr.dot(vd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,m=(o*h-a*l)*u;return s.set(1-f-m,m,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return Md.setScalar(0),bd.setScalar(0),Td.setScalar(0),Md.fromBufferAttribute(t,e),bd.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Md,s.x),o.addScaledVector(bd,s.y),o.addScaledVector(Td,s.z),o}static isFrontFacing(t,e,i,n){return Yn.subVectors(i,e),Cr.subVectors(t,e),Yn.cross(Cr).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yn.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Yn.cross(Cr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;Co.subVectors(n,i),Ro.subVectors(s,i),xd.subVectors(t,i);let l=Co.dot(xd),c=Ro.dot(xd);if(l<=0&&c<=0)return e.copy(i);yd.subVectors(t,n);let h=Co.dot(yd),d=Ro.dot(yd);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(i).addScaledVector(Co,o);Sd.subVectors(t,s);let f=Co.dot(Sd),m=Ro.dot(Sd);if(m>=0&&f<=m)return e.copy(s);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(Ro,a);let p=h*m-f*d;if(p<=0&&d-h>=0&&f-m>=0)return o0.subVectors(s,n),a=(d-h)/(d-h+(f-m)),e.copy(n).addScaledVector(o0,a);let g=1/(p+_+u);return o=_*g,a=u*g,e.copy(i).addScaledVector(Co,o).addScaledVector(Ro,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fs=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint($n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint($n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$n):$n.fromBufferAttribute(s,o),$n.applyMatrix4(t.matrixWorld),this.expandByPoint($n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qc.copy(i.boundingBox)),qc.applyMatrix4(t.matrixWorld),this.union(qc)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(el),Yc.subVectors(this.max,el),Po.subVectors(t.a,el),Io.subVectors(t.b,el),Lo.subVectors(t.c,el),ls.subVectors(Io,Po),cs.subVectors(Lo,Io),Gs.subVectors(Po,Lo);let e=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Gs.z,Gs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Gs.z,0,-Gs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Gs.y,Gs.x,0];return!wd(e,Po,Io,Lo,Yc)||(e=[1,0,0,0,1,0,0,0,1],!wd(e,Po,Io,Lo,Yc))?!1:($c.crossVectors(ls,cs),e=[$c.x,$c.y,$c.z],wd(e,Po,Io,Lo,Yc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Pr=[new B,new B,new B,new B,new B,new B,new B,new B],$n=new B,qc=new fs,Po=new B,Io=new B,Lo=new B,ls=new B,cs=new B,Gs=new B,el=new B,Yc=new B,$c=new B,Ws=new B;function wd(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Ws.fromArray(r,s);let a=n.x*Math.abs(Ws.x)+n.y*Math.abs(Ws.y)+n.z*Math.abs(Ws.z),l=t.dot(Ws),c=e.dot(Ws),h=i.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var fi=new B,Zc=new Wt,Gy=0,Ue=class extends lr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ap,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=t!==void 0?Du(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zc.fromBufferAttribute(this,e),Zc.applyMatrix3(t),this.setXY(e,Zc.x,Zc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix3(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix4(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyNormalMatrix(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.transformDirection(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):c_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):h_(t,this.array)}};var ml=class extends Ue{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var gl=class extends Ue{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ei=class extends Ue{constructor(t,e,i){super(new Float32Array(t),e,i)}},Wy=new fs,il=new B,Ed=new B,Or=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Wy.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;il.subVectors(t,this.center);let e=il.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(il,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(il.copy(t.center).add(Ed)),this.expandByPoint(il.copy(t.center).sub(Ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xy=0,zn=new Ve,Ad=new gn,Do=new B,Cn=new fs,nl=new fs,wi=new B,vi=class r extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Py(t)?gl:ml)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new te().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return zn.makeRotationFromQuaternion(t),this.applyMatrix4(zn),this}rotateX(t){return zn.makeRotationX(t),this.applyMatrix4(zn),this}rotateY(t){return zn.makeRotationY(t),this.applyMatrix4(zn),this}rotateZ(t){return zn.makeRotationZ(t),this.applyMatrix4(zn),this}translate(t,e,i){return zn.makeTranslation(t,e,i),this.applyMatrix4(zn),this}scale(t,e,i){return zn.makeScale(t,e,i),this.applyMatrix4(zn),this}lookAt(t){return Ad.lookAt(t),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Do).negate(),this.translate(Do.x,Do.y,Do.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ei(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(wi.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(wi),wi.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(wi)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Or);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];nl.setFromBufferAttribute(a),this.morphTargetsRelative?(wi.addVectors(Cn.min,nl.min),Cn.expandByPoint(wi),wi.addVectors(Cn.max,nl.max),Cn.expandByPoint(wi)):(Cn.expandByPoint(nl.min),Cn.expandByPoint(nl.max))}Cn.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)wi.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(wi));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wi.fromBufferAttribute(a,c),l&&(Do.fromBufferAttribute(t,c),wi.add(Do)),n=Math.max(n,i.distanceToSquared(wi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ue(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let P=0;P<i.count;P++)a[P]=new B,l[P]=new B;let h=new B,d=new B,u=new B,f=new Wt,m=new Wt,_=new Wt,p=new B,g=new B;function x(P,A,N){c[P]=c[A]=c[N]=1,h.fromBufferAttribute(i,P),d.fromBufferAttribute(i,A),u.fromBufferAttribute(i,N),f.fromBufferAttribute(s,P),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,N),d.sub(h),u.sub(h),m.sub(f),_.sub(f);let L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(L),g.copy(u).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(L),a[P].add(p),a[A].add(p),a[N].add(p),l[P].add(g),l[A].add(g),l[N].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let P=0,A=E.length;P<A;++P){let N=E[P],L=N.start,k=N.count;for(let I=L,z=L+k;I<z;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new B,S=new B,w=new B,v=new B;function b(P){w.fromBufferAttribute(n,P),v.copy(w);let A=a[P];y.copy(A),y.sub(w.multiplyScalar(w.dot(A))).normalize(),S.crossVectors(v,A);let L=S.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,L)}for(let P=0,A=i.count;P<A;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new B,s=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);n.fromBufferAttribute(e,m),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(n,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)wi.fromBufferAttribute(t,e),wi.normalize(),t.setXYZ(e,wi.x,wi.y,wi.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[m++]=c[f++]}return new Ue(u,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ap,this.updateRanges=[],this.version=0,this.uuid=Qs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,s=this.stride;n<s;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=a0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),n=new this.constructor(i,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=a0(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function a0(r){return r.buffer._uuid===void 0&&(r.buffer._uuid=Qs()),r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer._uuid:r.buffer._uuid+":"+r.byteOffset+":"+r.byteLength}var sn=new B,_l=class r{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n,this._normalizationScale=t!==void 0?Du(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyMatrix4(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.applyNormalMatrix(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)sn.fromBufferAttribute(this,e),sn.transformDirection(t),this.setXYZ(e,sn.x,sn.y,sn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=s,this}clone(t){if(t===void 0){fl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):c_(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):h_(t,this.data.array)}},Cd=new B,qy=new B,Yy=new te,Zn=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Cd.subVectors(i,e).cross(qy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Cd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yy.getNormalMatrix(t),n=this.coplanarPoint(Cd).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$y=0,Fr=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Qs(),this.name="",this.type="Material",this.blending=oa,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mh,this.stencilZFail=mh,this.stencilZPass=mh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Zn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Wt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hr=class extends Fr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},No,rl=new B,Uo=new B,Oo=new B,Fo=new Wt,sl=new Wt,f_=new Ve,Jc=new B,ol=new B,Kc=new B,l0=new Wt,Rd=new Wt,c0=new Wt,Br=class extends gn{constructor(t=new hr){if(super(),this.isSprite=!0,this.type="Sprite",No===void 0){No=new vi;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ih(e,5);No.setIndex([0,1,2,0,2,3]),No.setAttribute("position",new _l(i,3,0,!1)),No.setAttribute("uv",new _l(i,2,3,!1))}this.geometry=No,this.material=t,this.center=new Wt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Uo.setFromMatrixScale(this.matrixWorld),f_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Uo.multiplyScalar(-Oo.z);let i=this.material.rotation,n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));let o=this.center;Qc(Jc.set(-.5,-.5,0),Oo,o,Uo,n,s),Qc(ol.set(.5,-.5,0),Oo,o,Uo,n,s),Qc(Kc.set(.5,.5,0),Oo,o,Uo,n,s),l0.set(0,0),Rd.set(1,0),c0.set(1,1);let a=t.ray.intersectTriangle(Jc,ol,Kc,!1,rl);if(a===null&&(Qc(ol.set(-.5,.5,0),Oo,o,Uo,n,s),Rd.set(0,1),a=t.ray.intersectTriangle(Jc,Kc,ol,!1,rl),a===null))return;let l=t.ray.origin.distanceTo(rl);l<t.near||l>t.far||e.push({distance:l,point:rl.clone(),uv:Lr.getInterpolation(rl,Jc,ol,Kc,l0,Rd,c0,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Qc(r,t,e,i,n,s){Fo.subVectors(r,e).addScalar(.5).multiply(i),n!==void 0?(sl.x=s*Fo.x-n*Fo.y,sl.y=n*Fo.x+s*Fo.y):sl.copy(Fo),r.copy(t),r.x+=sl.x,r.y+=sl.y,r.applyMatrix4(f_)}var Ir=new B,Pd=new B,jc=new B,th=new B,Zo=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ir)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ir.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ir.copy(this.origin).addScaledVector(this.direction,e),Ir.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Pd.copy(t).add(e).multiplyScalar(.5),jc.copy(e).sub(t).normalize(),th.copy(this.origin).sub(Pd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(jc),a=th.dot(this.direction),l=-th.dot(jc),c=th.lengthSq(),h=Math.abs(1-o*o),d,u,f,m;if(h>0)if(d=o*l-a,u=o*a-l,m=s*h,d>=0)if(u>=-m)if(u<=m){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-m?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=m?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Pd).addScaledVector(jc,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ir.subVectors(t.center,this.origin);let i=Ir.dot(this.direction),n=Ir.dot(Ir)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Ir)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,g=i.x-o.x,x=i.y-o.y,E=i.z-o.z,y=Math.abs(l),S=Math.abs(c),w=Math.abs(h),v,b,P,A,N,L,k,I,z,V,O,Q;if(y>=S&&y>=w?(P=l,L=d,z=m,Q=g,l>=0?(v=c,b=h,A=u,N=f,k=_,I=p,V=x,O=E):(v=h,b=c,A=f,N=u,k=p,I=_,V=E,O=x)):S>=w?(P=c,L=u,z=_,Q=x,c>=0?(v=h,b=l,A=f,N=d,k=p,I=m,V=E,O=g):(v=l,b=h,A=d,N=f,k=m,I=p,V=g,O=E)):(P=h,L=f,z=p,Q=E,h>=0?(v=l,b=c,A=d,N=u,k=m,I=_,V=g,O=x):(v=c,b=l,A=u,N=d,k=_,I=m,V=x,O=g)),P===0)return null;let W=v/P,R=b/P,J=1/P,xt=A-W*L,At=N-R*L,Y=k-W*z,ct=I-R*z,bt=V-W*Q,Et=O-R*Q,gt=bt*ct-Et*Y,Bt=xt*Et-At*bt,xe=Y*At-ct*xt;if(n){if(gt<0||Bt<0||xe<0)return null}else if((gt<0||Bt<0||xe<0)&&(gt>0||Bt>0||xe>0))return null;let Pt=gt+Bt+xe;if(Pt===0)return null;let jt=J*(gt*L+Bt*z+xe*Q);return(Pt>0?jt<0:jt>0)?null:this.at(jt/Pt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jo=class extends Fr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=$d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},h0=new Ve,Xs=new Zo,eh=new Or,u0=new B,ih=new B,nh=new B,rh=new B,Id=new B,sh=new B,f0=new B,oh=new B,di=class extends gn{constructor(t=new vi,e=new Jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){sh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(Id.fromBufferAttribute(d,t),o?sh.addScaledVector(Id,h):sh.addScaledVector(Id.sub(e),h))}e.add(sh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eh.copy(i.boundingSphere),eh.applyMatrix4(s),Xs.copy(t.ray).recast(t.near),!(eh.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(eh,u0)===null||Xs.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(h0.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(h0),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Xs)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,S=E;y<S;y+=3){let w=a.getX(y),v=a.getX(y+1),b=a.getX(y+2);n=ah(this,g,t,i,c,h,d,w,v,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let x=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);n=ah(this,o,t,i,c,h,d,x,E,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=u.length;m<_;m++){let p=u[m],g=o[p.materialIndex],x=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=x,S=E;y<S;y+=3){let w=y,v=y+1,b=y+2;n=ah(this,g,t,i,c,h,d,w,v,b),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,e.push(n))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let x=p,E=p+1,y=p+2;n=ah(this,o,t,i,c,h,d,x,E,y),n&&(n.faceIndex=Math.floor(p/3),e.push(n))}}}};function Zy(r,t,e,i,n,s,o,a){let l;if(t.side===Di?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===xs,a),l===null)return null;oh.copy(a),oh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(oh);return c<e.near||c>e.far?null:{distance:c,point:oh.clone(),object:r}}function ah(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,ih),r.getVertexPosition(l,nh),r.getVertexPosition(c,rh);let h=Zy(r,t,e,i,ih,nh,rh,f0);if(h){let d=new B;Lr.getBarycoord(f0,ih,nh,rh,d),n&&(h.uv=Lr.getInterpolatedAttribute(n,a,l,c,d,new Wt)),s&&(h.uv1=Lr.getInterpolatedAttribute(s,a,l,c,d,new Wt)),o&&(h.normal=Lr.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};Lr.getNormal(ih,nh,rh,u.normal),h.face=u,h.barycoord=d}return h}var Ko=class extends qi{constructor(t=null,e=1,i=1,n,s,o,a,l,c=Ai,h=Ai,d,u){super(null,o,a,l,c,h,n,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=new Or,Jy=new Wt(.5,.5),lh=new B,Ys=class{constructor(t=new Zn,e=new Zn,i=new Zn,n=new Zn,s=new Zn,o=new Zn){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],x=s[12],E=s[13],y=s[14],S=s[15];if(n[0].setComponents(c-o,f-h,g-m,S-x).normalize(),n[1].setComponents(c+o,f+h,g+m,S+x).normalize(),n[2].setComponents(c+a,f+d,g+_,S+E).normalize(),n[3].setComponents(c-a,f-d,g-_,S-E).normalize(),i)n[4].setComponents(l,u,p,y).normalize(),n[5].setComponents(c-l,f-u,g-p,S-y).normalize();else if(n[4].setComponents(c-l,f-u,g-p,S-y).normalize(),e===kn)n[5].setComponents(c+l,f+u,g+p,S+y).normalize();else if(e===ul)n[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(t){qs.center.set(0,0,0);let e=Jy.distanceTo(t.center);return qs.radius=.7071067811865476+e,qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(lh.x=n.normal.x>0?t.max.x:t.min.x,lh.y=n.normal.y>0?t.max.y:t.min.y,lh.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(lh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},d0=new Ve,Lh=class r{constructor(){this.coordinateSystem=kn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let n=0;n<e.length;n++){let s=e[n];d0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[n]===void 0&&(i[n]=new Ys),i[n].setFromProjectionMatrix(d0,s.coordinateSystem,s.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let n=0;n<t._count;n++)e[n]===void 0&&(e[n]=new Ys),e[n].copy(i[n]);return this._count=t._count,this}clone(){return new r().copy(this)}};var Dh=class extends Fr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},p0=new Ve,zd=new Zo,ch=new Or,hh=new B,ds=class extends gn{constructor(t=new vi,e=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ch.copy(i.boundingSphere),ch.applyMatrix4(n),ch.radius+=s,t.ray.intersectsSphere(ch)===!1)return;p0.copy(n).invert(),zd.copy(t.ray).applyMatrix4(p0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=u,_=f;m<_;m++){let p=c.getX(m);hh.fromBufferAttribute(d,p),m0(hh,p,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,_=f;m<_;m++)hh.fromBufferAttribute(d,m),m0(hh,m,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function m0(r,t,e,i,n,s,o){let a=zd.distanceSqToPoint(r);if(a<e){let l=new B;zd.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var vl=class extends qi{constructor(t=[],e=Js,i,n,s,o,a,l,c,h){super(t,e,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xl=class extends qi{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zr=class extends qi{constructor(t,e,i=Jn,n,s,o,a=Ai,l=Ai,c,h=Ur,d=1){if(h!==Ur&&h!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},yl=class extends zr{constructor(t,e=Jn,i=Js,n,s,o=Ai,a=Ai,l,c=Ur){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sl=class extends qi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qo=class r extends vi{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,s,0),m("z","y","x",1,-1,i,e,-t,o,s,1),m("x","z","y",1,1,t,i,e,n,o,2),m("x","z","y",1,-1,t,i,-e,n,o,3),m("x","y","z",1,-1,t,e,i,n,s,4),m("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ei(c,3)),this.setAttribute("normal",new Ei(h,3)),this.setAttribute("uv",new Ei(d,2));function m(_,p,g,x,E,y,S,w,v,b,P){let A=y/v,N=S/b,L=y/2,k=S/2,I=w/2,z=v+1,V=b+1,O=0,Q=0,W=new B;for(let R=0;R<V;R++){let J=R*N-k;for(let xt=0;xt<z;xt++){let At=xt*A-L;W[_]=At*x,W[p]=J*E,W[g]=I,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[g]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(xt/v),d.push(1-R/b),O+=1}}for(let R=0;R<b;R++)for(let J=0;J<v;J++){let xt=u+J+z*R,At=u+J+z*(R+1),Y=u+(J+1)+z*(R+1),ct=u+(J+1)+z*R;l.push(xt,At,ct),l.push(At,Y,ct),Q+=6}a.addGroup(f,Q,P),f+=Q,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Nh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let h=i[n],u=i[n+1]-h,f=(o-h)/u;return(n+f)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new Wt:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new B,n=[],s=[],o=[],a=new B,l=new Ve;for(let f=0;f<=t;f++){let m=f/t;n[f]=this.getTangentAt(m,new B)}s[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(n[f-1],n[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(me(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(n[f],s[f])}if(e===!0){let f=Math.acos(me(s[0].dot(s[t]),-1,1));f/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(n[m],f*m)),o[m].crossVectors(n[m],s[m])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function cp(){let r=0,t=0,e=0,i=0;function n(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){n(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,n(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+i*a}}}var g0=new B,_0=new B,Ld=new cp,Dd=new cp,Nd=new cp,jo=class extends Nh{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new B){let i=e,n=this.points,s=n.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=n[(a-1)%s]:(_0.subVectors(n[0],n[1]).add(n[0]),c=_0);let d=n[a%s],u=n[(a+1)%s];if(this.closed||a+2<s?h=n[(a+2)%s]:(g0.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=g0),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Ld.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,m,_,p),Dd.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,m,_,p),Nd.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,m,_,p)}else this.curveType==="catmullrom"&&(Ld.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Dd.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Nd.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Ld.calc(l),Dd.calc(l),Nd.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new B().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var ps=class r extends vi{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],m=[],_=[],p=[];for(let g=0;g<h;g++){let x=g*u-o;for(let E=0;E<c;E++){let y=E*d-s;m.push(y,-x,0),_.push(0,0,1),p.push(E/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){let E=x+c*g,y=x+c*(g+1),S=x+1+c*(g+1),w=x+1+c*g;f.push(E,y,w),f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var ms=class r extends vi{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,f=[],m=[],_=[],p=[];for(let g=0;g<=i;g++){let x=[],E=g/i,y=o+E*a,S=t*Math.cos(y),w=Math.sqrt(t*t-S*S),v=0;g===0&&o===0?v=.5/e:g===i&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){let P=b/e,A=n+P*s;d.x=-w*Math.cos(A),d.y=S,d.z=w*Math.sin(A),m.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(P+v,1-E),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){let E=h[g][x+1],y=h[g][x],S=h[g+1][x],w=h[g+1][x+1];(g!==0||o>0)&&f.push(E,y,w),(g!==i-1||l<Math.PI)&&f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(_,3)),this.setAttribute("uv",new Ei(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function js(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(v0(n))n.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(v0(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function Yi(r){let t={};for(let e=0;e<r.length;e++){let i=js(r[e]);for(let n in i)t[n]=i[n]}return t}function v0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Ky(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function hp(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Wr={clone:js,merge:Yi},Qy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Oe=class extends Fr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qy,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=Ky(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new Qt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Wt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new B().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ii().fromArray(n.value);break;case"m3":this.uniforms[i].value=new te().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Ve().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ta=class extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Uh=class extends Fr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Oh=class extends Fr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bo(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function uh(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var gs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Fh=class extends gs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Od,endingEnd:Od}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fd:s=t,a=2*e-i;break;case Bd:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fd:o=t,l=2*i-e;break;case Bd:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(n-e),_=m*m,p=_*m,g=-u*p+2*u*_-u*m,x=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*m+1,E=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let S=0;S!==a;++S)s[S]=g*o[h+S]+x*o[c+S]+E*o[l+S]+y*o[d+S];return s}},Bh=class extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},zh=class extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},kh=class extends gs{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(i-e)/(n-e),_=1-m;for(let p=0;p!==a;++p)s[p]=o[c+p]*_+o[l+p]*m;return s}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let _=o[c+m],p=o[l+m],g=f*u+m*2,x=d[g],E=d[g+1],y=t*u+m*2,S=h[y],w=h[y+1],v=eS(i,e,x,S,n);s[m]=d_(v,_,E,w,p)}return s}};function d_(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function tS(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function eS(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=d_(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=tS(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Rn=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bo(e,this.TimeBufferType),this.values=Bo(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Bo(t.times,Array),values:Bo(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),uh(t.settings)&&(i.settings={inTangents:Bo(t.settings.inTangents,Array),outTangents:Bo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new kh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ll:e=this.InterpolantFactoryMethodDiscrete;break;case Eh:e=this.InterpolantFactoryMethodLinear;break;case ph:e=this.InterpolantFactoryMethodSmooth;break;case Ud:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ll;case this.InterpolantFactoryMethodLinear:return Eh;case this.InterpolantFactoryMethodSmooth:return ph;case this.InterpolantFactoryMethodBezier:return Ud}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t;uh(this.settings)&&(x0(this.settings.inTangents,t),x0(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;uh(this.settings)&&(y0(this.settings.inTangents,t),y0(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Iy(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ph,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let _=e[d+m];if(_!==e[u+m]||_!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,uh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function x0(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]+=t}function y0(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Rn.prototype.ValueTypeName="";Rn.prototype.TimeBufferType=Float32Array;Rn.prototype.ValueBufferType=Float32Array;Rn.prototype.DefaultInterpolation=Eh;var _s=class extends Rn{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ll;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;var Hh=class extends Rn{constructor(t,e,i,n){super(t,e,i,n)}};Hh.prototype.ValueTypeName="color";var Vh=class extends Rn{constructor(t,e,i,n){super(t,e,i,n)}};Vh.prototype.ValueTypeName="number";var Gh=class extends gs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)cr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ml=class extends Rn{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Gh(this.times,this.values,this.getValueSize(),t)}};Ml.prototype.ValueTypeName="quaternion";Ml.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends Rn{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ll;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wh=class extends Rn{constructor(t,e,i,n){super(t,e,i,n)}};Wh.prototype.ValueTypeName="vector";var gh={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(S0(r)||(this.files[r]=t))},get:function(r){if(this.enabled!==!1&&!S0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function S0(r){try{let t=r.slice(r.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ea=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],m=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},p_=new ea,ia=class{constructor(t){this.manager=t!==void 0?t:p_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};ia.DEFAULT_MATERIAL_NAME="__DEFAULT";var zo=new WeakMap,Xh=class extends ia{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=gh.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let d=zo.get(o);d===void 0&&(d=[],zo.set(o,d)),d.push({onLoad:e,onError:n})}return o}let a=Wo("img");function l(){h(),e&&e(this);let d=zo.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}zo.delete(this),s.manager.itemEnd(t)}function c(d){h(),n&&n(d),gh.remove(`image:${t}`);let u=zo.get(this)||[];for(let f=0;f<u.length;f++){let m=u[f];m.onError&&m.onError(d)}zo.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gh.add(`image:${t}`,a),s.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var bl=class extends ia{constructor(t){super(t)}load(t,e,i,n){let s=new qi,o=new Xh(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,n),s}};var fh=new B,dh=new cr,or=new B,Tl=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fh,dh,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fh,dh,or.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(fh,dh,or),or.x===1&&or.y===1&&or.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fh,dh,or.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hs=new B,M0=new Wt,b0=new Wt,on=class extends Tl{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ah*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(hd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hs.x,hs.y).multiplyScalar(-t/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-t/hs.z)}getViewSize(t,e){return this.getViewBounds(t,M0,b0),e.subVectors(b0,M0)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hd*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var na=class extends Tl{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ko=-90,Ho=1,ra=class extends gn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new on(ko,Ho,t,e);n.layers=this.layers,this.add(n);let s=new on(ko,Ho,t,e);s.layers=this.layers,this.add(s);let o=new on(ko,Ho,t,e);o.layers=this.layers,this.add(o);let a=new on(ko,Ho,t,e);a.layers=this.layers,this.add(a);let l=new on(ko,Ho,t,e);l.layers=this.layers,this.add(l);let c=new on(ko,Ho,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ul)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=_,t.setRenderTarget(i,5,n),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},qh=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},wl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=iS.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function iS(){this._document.hidden===!1&&this.reset()}var up="\\[\\]\\.:\\/",nS=new RegExp("["+up+"]","g"),fp="[^"+up+"]",rS="[^"+up.replace("\\.","")+"]",sS=/((?:WC+[\/:])*)/.source.replace("WC",fp),oS=/(WCOD+)?/.source.replace("WCOD",rS),aS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fp),lS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fp),cS=new RegExp("^"+sS+oS+aS+lS+"$"),hS=["material","materials","bones","map"],kd=class{constructor(t,e,i){let n=i||We.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},We=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(nS,"")}static parseTrackName(t){let e=cS.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);hS.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};We.Composite=kd;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eE=new Float32Array(1);var T0=new Ve,El=class{constructor(t,e,i=0,n=1/0){this.ray=new Zo(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return T0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(T0),this}intersectObject(t,e=!0,i=[]){return Hd(t,this,i,e),i.sort(w0),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Hd(t[n],this,i,e);return i.sort(w0),i}};function w0(r,t){return r.distance-t.distance}function Hd(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Hd(s[o],t,e,!0)}}var Al=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var vp=class vp{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};vp.prototype.isMatrix2=!0;var Vd=vp;function dp(r,t,e,i){let n=uS(i);switch(e){case tp:return r*t;case ip:return r*t/n.components*n.byteLength;case tu:return r*t/n.components*n.byteLength;case ys:return r*t*2/n.components*n.byteLength;case eu:return r*t*2/n.components*n.byteLength;case ep:return r*t*3/n.components*n.byteLength;case Qn:return r*t*4/n.components*n.byteLength;case iu:return r*t*4/n.components*n.byteLength;case Ol:case Fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Bl:case zl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ru:case ou:return Math.max(r,16)*Math.max(t,8)/4;case nu:case su:return Math.max(r,8)*Math.max(t,8)/2;case au:case lu:case hu:case uu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cu:case kl:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case mu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case gu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _u:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case vu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case xu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Tu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case wu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Eu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Au:case Cu:case Ru:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Pu:case Iu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Hl:case Lu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function uS(r){switch(r){case Pn:case Jd:return{byteLength:1,components:1};case la:case Kd:case Ni:return{byteLength:2,components:1};case Qh:case jh:return{byteLength:2,components:4};case Jn:case Kh:case Kn:return{byteLength:4,components:1};case Qd:case jd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function O_(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function dS(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],_=d[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_S=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,CS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,DS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,HS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GS="gl_FragColor = linearToOutputTexel( gl_FragColor );",WS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$S=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,GM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$M=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,JM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,QM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ub=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ob=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:gS,alphamap_pars_fragment:_S,alphatest_fragment:vS,alphatest_pars_fragment:xS,aomap_fragment:yS,aomap_pars_fragment:SS,batching_pars_vertex:MS,batching_vertex:bS,begin_vertex:TS,beginnormal_vertex:wS,bsdfs:ES,iridescence_fragment:AS,bumpmap_pars_fragment:CS,clipping_planes_fragment:RS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:IS,clipping_planes_vertex:LS,color_fragment:DS,color_pars_fragment:NS,color_pars_vertex:US,color_vertex:OS,common:FS,defaultnormal_vertex:BS,displacementmap_pars_vertex:zS,displacementmap_vertex:kS,emissivemap_fragment:HS,emissivemap_pars_fragment:VS,colorspace_fragment:GS,colorspace_pars_fragment:WS,envmap_fragment:XS,envmap_common_pars_fragment:qS,envmap_pars_fragment:YS,envmap_pars_vertex:$S,envmap_physical_pars_fragment:sM,envmap_vertex:ZS,fog_vertex:JS,fog_pars_vertex:KS,fog_fragment:QS,fog_pars_fragment:jS,gradientmap_pars_fragment:tM,lightmap_pars_fragment:eM,lights_lambert_fragment:iM,lights_lambert_pars_fragment:nM,lights_pars_begin:rM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:hM,lights_physical_pars_fragment:uM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:pM,lightprobes_pars_fragment:mM,logdepthbuf_fragment:gM,logdepthbuf_pars_fragment:_M,logdepthbuf_pars_vertex:vM,logdepthbuf_vertex:xM,map_fragment:yM,map_pars_fragment:SM,map_particle_fragment:MM,map_particle_pars_fragment:bM,metalnessmap_fragment:TM,metalnessmap_pars_fragment:wM,morphinstance_vertex:EM,morphcolor_vertex:AM,morphnormal_vertex:CM,morphtarget_pars_vertex:RM,morphtarget_vertex:PM,normal_fragment_begin:IM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:NM,normal_vertex:UM,normalmap_pars_fragment:OM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:zM,iridescence_pars_fragment:kM,opaque_fragment:HM,packing:VM,premultiplied_alpha_fragment:GM,project_vertex:WM,dithering_fragment:XM,dithering_pars_fragment:qM,roughnessmap_fragment:YM,roughnessmap_pars_fragment:$M,shadowmap_pars_fragment:ZM,shadowmap_pars_vertex:JM,shadowmap_vertex:KM,shadowmask_pars_fragment:QM,skinbase_vertex:jM,skinning_pars_vertex:tb,skinning_vertex:eb,skinnormal_vertex:ib,specularmap_fragment:nb,specularmap_pars_fragment:rb,tonemapping_fragment:sb,tonemapping_pars_fragment:ob,transmission_fragment:ab,transmission_pars_fragment:lb,uv_pars_fragment:cb,uv_pars_vertex:hb,uv_vertex:ub,worldpos_vertex:fb,background_vert:db,background_frag:pb,backgroundCube_vert:mb,backgroundCube_frag:gb,cube_vert:_b,cube_frag:vb,depth_vert:xb,depth_frag:yb,distance_vert:Sb,distance_frag:Mb,equirect_vert:bb,equirect_frag:Tb,linedashed_vert:wb,linedashed_frag:Eb,meshbasic_vert:Ab,meshbasic_frag:Cb,meshlambert_vert:Rb,meshlambert_frag:Pb,meshmatcap_vert:Ib,meshmatcap_frag:Lb,meshnormal_vert:Db,meshnormal_frag:Nb,meshphong_vert:Ub,meshphong_frag:Ob,meshphysical_vert:Fb,meshphysical_frag:Bb,meshtoon_vert:zb,meshtoon_frag:kb,points_vert:Hb,points_frag:Vb,shadow_vert:Gb,shadow_frag:Wb,sprite_vert:Xb,sprite_frag:qb},Ct={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},dr={basic:{uniforms:Yi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Yi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Yi([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Yi([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Yi([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Yi([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Yi([Ct.points,Ct.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Yi([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Yi([Ct.common,Ct.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Yi([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Yi([Ct.sprite,Ct.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Yi([Ct.common,Ct.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Yi([Ct.lights,Ct.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};dr.physical={uniforms:Yi([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new te},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Nu={r:0,b:0,g:0},Yb=new Ve,F_=new te;F_.set(-1,0,0,0,1,0,0,0,1);function $b(r,t,e,i,n,s){let o=new Qt(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(x){let E=x.isScene===!0?x.background:null;if(E&&E.isTexture){let y=x.backgroundBlurriness>0;E=t.get(E,y)}return E}function m(x){let E=!1,y=f(x);y===null?p(o,a):y&&y.isColor&&(p(y,1),E=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,E){let y=f(E);y&&y.isCubeTexture?(c===void 0&&(c=new di(new Qo(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:js(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Yb.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(F_),c.material.toneMapped=de.getTransfer(y.colorSpace)!==Te,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new di(new ps(2,2),new Oe({name:"BackgroundMaterial",uniforms:js(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=de.getTransfer(y.colorSpace)!==Te,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,E){x.getRGB(Nu,hp(r)),e.buffers.color.setClear(Nu.r,Nu.g,Nu.b,E,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,E=1){o.set(x),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,p(o,a)},render:m,addToRenderList:_,dispose:g}}function Zb(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null),s=n,o=!1;function a(N,L,k,I,z){let V=!1,O=d(N,I,k,L);s!==O&&(s=O,c(s.object)),V=f(N,I,k,z),V&&m(N,I,k,z),z!==null&&t.update(z,r.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,y(N,L,k,I),z!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return r.createVertexArray()}function c(N){return r.bindVertexArray(N)}function h(N){return r.deleteVertexArray(N)}function d(N,L,k,I){let z=I.wireframe===!0,V=i[L.id];V===void 0&&(V={},i[L.id]=V);let O=N.isInstancedMesh===!0?N.id:0,Q=V[O];Q===void 0&&(Q={},V[O]=Q);let W=Q[k.id];W===void 0&&(W={},Q[k.id]=W);let R=W[z];return R===void 0&&(R=u(l()),W[z]=R),R}function u(N){let L=[],k=[],I=[];for(let z=0;z<e;z++)L[z]=0,k[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,L,k,I){let z=s.attributes,V=L.attributes,O=0,Q=k.getAttributes();for(let W in Q)if(Q[W].location>=0){let J=z[W],xt=V[W];if(xt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(xt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(xt=N.instanceColor)),J===void 0||J.attribute!==xt||xt&&J.data!==xt.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function m(N,L,k,I){let z={},V=L.attributes,O=0,Q=k.getAttributes();for(let W in Q)if(Q[W].location>=0){let J=V[W];J===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let xt={};xt.attribute=J,J&&J.data&&(xt.data=J.data),z[W]=xt,O++}s.attributes=z,s.attributesNum=O,s.index=I}function _(){let N=s.newAttributes;for(let L=0,k=N.length;L<k;L++)N[L]=0}function p(N){g(N,0)}function g(N,L){let k=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;k[N]=1,I[N]===0&&(r.enableVertexAttribArray(N),I[N]=1),z[N]!==L&&(r.vertexAttribDivisor(N,L),z[N]=L)}function x(){let N=s.newAttributes,L=s.enabledAttributes;for(let k=0,I=L.length;k<I;k++)L[k]!==N[k]&&(r.disableVertexAttribArray(k),L[k]=0)}function E(N,L,k,I,z,V,O){O===!0?r.vertexAttribIPointer(N,L,k,z,V):r.vertexAttribPointer(N,L,k,I,z,V)}function y(N,L,k,I){_();let z=I.attributes,V=k.getAttributes(),O=L.defaultAttributeValues;for(let Q in V){let W=V[Q];if(W.location>=0){let R=z[Q];if(R===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),R!==void 0){let J=R.normalized,xt=R.itemSize,At=t.get(R);if(At===void 0)continue;let Y=At.buffer,ct=At.type,bt=At.bytesPerElement,Et=ct===r.INT||ct===r.UNSIGNED_INT||R.gpuType===Kh;if(R.isInterleavedBufferAttribute){let gt=R.data,Bt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,xe=R.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let Pt=0;Pt<W.locationSize;Pt++)g(W.location+Pt,gt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Pt=0;Pt<W.locationSize;Pt++)p(W.location+Pt);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let Pt=0;Pt<W.locationSize;Pt++)E(W.location+Pt,xt/W.locationSize,ct,J,Bt*bt,(xe+xt/W.locationSize*Pt)*bt,Et)}else{if(R.isInstancedBufferAttribute){for(let gt=0;gt<W.locationSize;gt++)g(W.location+gt,R.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let gt=0;gt<W.locationSize;gt++)p(W.location+gt);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let gt=0;gt<W.locationSize;gt++)E(W.location+gt,xt/W.locationSize,ct,J,xt*bt,xt/W.locationSize*gt*bt,Et)}}else if(O!==void 0){let J=O[Q];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(W.location,J);break;case 3:r.vertexAttrib3fv(W.location,J);break;case 4:r.vertexAttrib4fv(W.location,J);break;default:r.vertexAttrib1fv(W.location,J)}}}}x()}function S(){P();for(let N in i){let L=i[N];for(let k in L){let I=L[k];for(let z in I){let V=I[z];for(let O in V)h(V[O].object),delete V[O];delete I[z]}}delete i[N]}}function w(N){if(i[N.id]===void 0)return;let L=i[N.id];for(let k in L){let I=L[k];for(let z in I){let V=I[z];for(let O in V)h(V[O].object),delete V[O];delete I[z]}}delete i[N.id]}function v(N){for(let L in i){let k=i[L];for(let I in k){let z=k[I];if(z[N.id]===void 0)continue;let V=z[N.id];for(let O in V)h(V[O].object),delete V[O];delete z[N.id]}}}function b(N){for(let L in i){let k=i[L],I=N.isInstancedMesh===!0?N.id:0,z=k[I];if(z!==void 0){for(let V in z){let O=z[V];for(let Q in O)h(O[Q].object),delete O[Q];delete z[V]}delete k[I],Object.keys(k).length===0&&delete i[L]}}}function P(){A(),o=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Jb(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(r.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Kb(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(v){return!(v!==Qn&&i.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(v){let b=v===Ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==Pn&&v!==Kn&&!b&&i.convert(v)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:w}}function Qb(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Zn,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,g=r.get(d);if(!n||m===null||m.length===0||s&&!p)s?h(null):c();else{let x=s?0:i,E=x*4,y=g.clippingState||null;l.value=y,y=h(m,u,E,f);for(let S=0;S!==E;++S)y[S]=e[S];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,m){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,m!==!0||p===null){let g=f+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,y=f;E!==_;++E,y+=4)o.copy(d[E]).applyMatrix4(x,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Wl=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new vl(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Qo(5,5,5),s=new Oe({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Di,blending:kr});s.uniforms.tEquirect.value=e;let o=new di(n,s),a=e.minFilter;return e.minFilter===Hr&&(e.minFilter=an),new ra(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}},m_=256,jb=3,t1=20,B_=256,z_=16,e1=3,i1=new B,n1=new Qt,Ou=class r{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ra(1,10,null),this._boxMesh=new di(new Qo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=i1}=s,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,m=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(n1));let p=new ra(i,n,h);return p.position.copy(a),p.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=m,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=__(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(m_,l_(t))}_fromTexture(t,e){t.mapping===Js||t.mapping===aa?this._setSize(t.image.length===0?m_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=g_(t,!1,!1),i=Math.log2(t)-jb;for(let n=0;n<=i;n++)e.texture.mipmaps.push({width:t>>n,height:t>>n});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=g_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let n=this._boxMesh,s=this._cubeCamera;n.material=i,s.renderTarget=t,s.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),s.update(this._renderer,n),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Js||t.mapping===aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=__()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=r1(),this._integrationMaterial=s1());let e=this._cubeSize,i=t.texture.mipmaps.length-1,n=this._ggxMaterial.uniforms;n.envMap.value=this._sourceTarget.texture;let s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(e/z_);for(let o=0;o<=i;o++){let a=r.lodToRoughness(o,i);if(o>i-e1)s.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(B_*Math.pow(a,4)))+.5:0;n.roughness.value=a,n.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=o1());let i=this._blurMaterial,n=i.uniforms,s=this._sourceTarget;n.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,n.envMap.value=s.texture,this._renderCube(t,0,i),n.envMap.value=t.texture,this._renderCube(s,0,i)}};function g_(r,t,e){return new Wl(r,{minFilter:Hr,generateMipmaps:t,type:Ni,colorSpace:cl,depthBuffer:e})}function Xl(r,t,e){return new Oe({name:r,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:Di,blending:kr,depthTest:!1,depthWrite:!1})}function r1(){return Xl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${B_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function s1(){return Xl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:z_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function o1(){return Xl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${t1}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function __(){return Xl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function v_(){return Xl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function a1(r){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===$h||f===Zh)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let _=new Wl(m.height);return _.fromEquirectangularTexture(r,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,m=f===$h||f===Zh,_=f===Js||f===aa;if(m||_){let p=e.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Ou(r)),p=m?i.fromEquirectangular(u,p):i.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let x=u.image;return m&&x&&x.height>0||_&&x&&l(x)?(i===null&&(i=new Ou(r)),p=m?i.fromEquirectangular(u):i.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,f){return f===$h?u.mapping=Js:f===Zh&&(u.mapping=aa),u}function l(u){let f=0,m=6;for(let _=0;_<m;_++)u[_]!==void 0&&f++;return f===m}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function l1(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&al("WebGLRenderer: "+i+" extension not supported."),n}}}function c1(r,t,e,i){let n={},s=new WeakMap,o=new FinalizationRegistry(m=>delete n[m]);function a(m){l(m.target)}function l(m){m.index!==null&&t.remove(m.index);for(let p in m.attributes)t.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete n[m.id],o.unregister(m);let _=s.get(m);_&&(t.remove(_),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function c(m,_){return n[_.id]!==void 0||(_.addEventListener("dispose",a),n[_.id]=new WeakRef(_),o.register(_,_.id,_),e.memory.geometries++),_}function h(m){let _=m.attributes;for(let p in _)t.update(_[p],r.ARRAY_BUFFER)}function d(m){let _=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let x=_!==null?_.array.length:p.array.length/3-1,E=p.count>=65535?gl:ml,y=new E(Math.ceil(x/3)*6,1),S=y.array;if(_!==null){let v=_.array;g=_.version;for(let b=0,P=0;b<x;b+=3){let A=v[b+0],N=v[b+1],L=v[b+2];S[P++]=A,S[P++]=N,S[P++]=N,S[P++]=L,S[P++]=L,S[P++]=A}}else{g=p.version;for(let v=0,b=0;v<x;v+=3){let P=v+0,A=v+1,N=v+2;S[b++]=P,S[b++]=A,S[b++]=A,S[b++]=N,S[b++]=N,S[b++]=P}}y.version=g;let w=s.get(m);w&&t.remove(w),s.set(m,y)}function u(m){let _=s.get(m);if(_){let p=m.index;p!==null&&_.version<p.version&&d(m)}else d(m);return s.get(m)}function f(){for(let m in n){let _=n[m].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function h1(r,t,e){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(i,u,s,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(i,u,s,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];e.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function u1(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function f1(r,t,e){let i=new WeakMap,n=new ii;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let P=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*d),v=new dl(w,y,S,d);v.type=Kn,v.needsUpdate=!0;let b=E*4;for(let A=0;A<d;A++){let N=p[A],L=g[A],k=x[A],I=y*S*4*A;for(let z=0;z<N.count;z++){let V=z*b;f===!0&&(n.fromBufferAttribute(N,z),w[I+V+0]=n.x,w[I+V+1]=n.y,w[I+V+2]=n.z,w[I+V+3]=0),m===!0&&(n.fromBufferAttribute(L,z),w[I+V+4]=n.x,w[I+V+5]=n.y,w[I+V+6]=n.z,w[I+V+7]=0),_===!0&&(n.fromBufferAttribute(k,z),w[I+V+8]=n.x,w[I+V+9]=n.y,w[I+V+10]=n.z,w[I+V+11]=k.itemSize===4?n.w:1)}}u={count:d,texture:v,size:new Wt(y,S)},i.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function d1(r,t,e,i,n){let s=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(s.get(u)!==h&&(t.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var p1={[Rl]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Il]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Zs]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function m1(r,t,e,i,n,s){let o=new _i(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new vi;h.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ei([0,2,0,0,2,0],2));let d=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new di(h,d),f=new na(-1,1,1,-1,0,1),m=null,_=null,p=!1,g,x=null,E=[],y=!1;this.setSize=function(S,w){o.setSize(S,w),a!==null&&a.setSize(S,w),l!==null&&l.setSize(S,w);for(let v=0;v<E.length;v++){let b=E[v];b.setSize&&b.setSize(S,w)}},this.setEffects=function(S){E=S,y=E.length>0&&E[0].isRenderPass===!0;let w=o.width,v=o.height;E.length>0&&a===null&&(a=new _i(w,v,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),l=new _i(w,v,{type:Ni,depthBuffer:!1,stencilBuffer:!1}));let b=n===!0&&E.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new zr(w,v),s===!0&&(c.format=Vr,c.type=Ks)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<E.length;P++){let A=E[P];A.setSize&&A.setSize(w,v),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(S,w){if(p||S.toneMapping===ur&&E.length===0)return!1;if(x=w,w!==null){let v=w.width,b=w.height;(o.width!==v||o.height!==b)&&this.setSize(v,b)}return y===!1&&S.setRenderTarget(o),g=S.toneMapping,S.toneMapping=ur,!0},this.hasRenderPass=function(){return y},this.end=function(S,w){S.toneMapping=g,p=!0;let v=o,b=a;for(let P=0;P<E.length;P++){let A=E[P];A.enabled!==!1&&(A.render(S,b,v,w),A.needsSwap!==!1&&(v=b,b=b===a?l:a))}if(m!==S.outputColorSpace||_!==S.toneMapping){m=S.outputColorSpace,_=S.toneMapping,d.defines={},de.getTransfer(m)===Te&&(d.defines.SRGB_TRANSFER="");let P=p1[_];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(x),S.render(u,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var k_=new qi,H_=new zr(1,1),V_=new yl(1),G_=new dl,W_=new Ph,X_=new vl,x_=[],y_=[],S_=new Float32Array(16),M_=new Float32Array(9),b_=new Float32Array(4);function ha(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=x_[n];if(s===void 0&&(s=new Float32Array(n),x_[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function xi(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function yi(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Bu(r,t){let e=y_[t];e===void 0&&(e=new Int32Array(t),y_[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function g1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function _1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xi(e,t))return;r.uniform2fv(this.addr,t),yi(e,t)}}function v1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xi(e,t))return;r.uniform3fv(this.addr,t),yi(e,t)}}function x1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xi(e,t))return;r.uniform4fv(this.addr,t),yi(e,t)}}function y1(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(xi(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),yi(e,t)}else{if(xi(e,i))return;b_.set(i),r.uniformMatrix2fv(this.addr,!1,b_),yi(e,i)}}function S1(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(xi(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),yi(e,t)}else{if(xi(e,i))return;M_.set(i),r.uniformMatrix3fv(this.addr,!1,M_),yi(e,i)}}function M1(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(xi(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),yi(e,t)}else{if(xi(e,i))return;S_.set(i),r.uniformMatrix4fv(this.addr,!1,S_),yi(e,i)}}function b1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function T1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xi(e,t))return;r.uniform2iv(this.addr,t),yi(e,t)}}function w1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xi(e,t))return;r.uniform3iv(this.addr,t),yi(e,t)}}function E1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xi(e,t))return;r.uniform4iv(this.addr,t),yi(e,t)}}function A1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function C1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xi(e,t))return;r.uniform2uiv(this.addr,t),yi(e,t)}}function R1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xi(e,t))return;r.uniform3uiv(this.addr,t),yi(e,t)}}function P1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xi(e,t))return;r.uniform4uiv(this.addr,t),yi(e,t)}}function zu(r){return r.version===0&&(r.compareFunction=op,r.needsUpdate=!0),r}function I1(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?s=zu(H_):s=k_,e.setTexture2D(t||s,n)}function L1(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||W_,n)}function D1(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_CUBE_SHADOW?s=zu(V_):s=X_,e.setTextureCube(t||s,n)}function N1(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||G_,n)}function U1(r){switch(r){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return y1;case 35675:return S1;case 35676:return M1;case 5124:case 35670:return b1;case 35667:case 35671:return T1;case 35668:case 35672:return w1;case 35669:case 35673:return E1;case 5125:return A1;case 36294:return C1;case 36295:return R1;case 36296:return P1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return N1}}function O1(r,t){r.uniform1fv(this.addr,t)}function F1(r,t){let e=ha(t,this.size,2);r.uniform2fv(this.addr,e)}function B1(r,t){let e=ha(t,this.size,3);r.uniform3fv(this.addr,e)}function z1(r,t){let e=ha(t,this.size,4);r.uniform4fv(this.addr,e)}function k1(r,t){let e=ha(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function H1(r,t){let e=ha(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function V1(r,t){let e=ha(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function G1(r,t){r.uniform1iv(this.addr,t)}function W1(r,t){r.uniform2iv(this.addr,t)}function X1(r,t){r.uniform3iv(this.addr,t)}function q1(r,t){r.uniform4iv(this.addr,t)}function Y1(r,t){r.uniform1uiv(this.addr,t)}function $1(r,t){r.uniform2uiv(this.addr,t)}function Z1(r,t){r.uniform3uiv(this.addr,t)}function J1(r,t){r.uniform4uiv(this.addr,t)}function K1(r,t,e){let i=this.cache,n=t.length,s=Bu(e,n);xi(i,s)||(r.uniform1iv(this.addr,s),yi(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=zu(H_):o=k_;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function Q1(r,t,e){let i=this.cache,n=t.length,s=Bu(e,n);xi(i,s)||(r.uniform1iv(this.addr,s),yi(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||W_,s[o])}function j1(r,t,e){let i=this.cache,n=t.length,s=Bu(e,n);xi(i,s)||(r.uniform1iv(this.addr,s),yi(i,s));let o;this.type===r.SAMPLER_CUBE_SHADOW?o=zu(V_):o=X_;for(let a=0;a!==n;++a)e.setTextureCube(t[a]||o,s[a])}function tT(r,t,e){let i=this.cache,n=t.length,s=Bu(e,n);xi(i,s)||(r.uniform1iv(this.addr,s),yi(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||G_,s[o])}function eT(r){switch(r){case 5126:return O1;case 35664:return F1;case 35665:return B1;case 35666:return z1;case 35674:return k1;case 35675:return H1;case 35676:return V1;case 5124:case 35670:return G1;case 35667:case 35671:return W1;case 35668:case 35672:return X1;case 35669:case 35673:return q1;case 5125:return Y1;case 36294:return $1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return K1;case 35679:case 36299:case 36307:return Q1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return tT}}var Sp=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=U1(e.type)}},Mp=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=eT(e.type)}},bp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},xp=/(\w+)(\])?(\[|\.)?/g;function T_(r,t){r.seq.push(t),r.map[t.id]=t}function iT(r,t,e){let i=r.name,n=i.length;for(xp.lastIndex=0;;){let s=xp.exec(i),o=xp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){T_(e,c===void 0?new Sp(a,r,t):new Mp(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new bp(a),T_(e,d)),e=d}}}var ca=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);iT(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function w_(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var nT=37297,rT=0;function sT(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var E_=new te;function oT(r){de._getMatrix(E_,de.workingColorSpace,r);let t=`mat3( ${E_.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(r)){case hl:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function A_(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+sT(r.getShaderSource(t),a)}else return s}function aT(r,t){let e=oT(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lT={[Rl]:"Linear",[Pl]:"Reinhard",[Il]:"Cineon",[Ll]:"ACESFilmic",[Nl]:"AgX",[Zs]:"Neutral",[Dl]:"Custom"};function cT(r,t){let e=lT[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uu=new B;function hT(){de.getLuminanceCoefficients(Uu);let r=Uu.x.toFixed(4),t=Uu.y.toFixed(4),e=Uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gl).join(`
`)}function fT(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dT(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Gl(r){return r!==""}function C_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function R_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(r){return r.replace(pT,mT)}function mT(r,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Tp(e)}var gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(r){return r.replace(gT,_T)}function _T(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function I_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var vT={[Cl]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function xT(r){return vT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yT={[aa]:"ENVMAP_MODE_REFRACTION"};function ST(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var MT={[$d]:"ENVMAP_BLENDING_MULTIPLY",[Y0]:"ENVMAP_BLENDING_MIX",[$0]:"ENVMAP_BLENDING_ADD"};function bT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":MT[r.combine]||"ENVMAP_BLENDING_NONE"}function TT(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=xT(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ST(e),d=bT(e),u=uT(e),f=fT(s),m=n.createProgram(),_,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Gl).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Gl).join(`
`),p.length>0&&(p+=`
`)):(_=[I_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gl).join(`
`),p=[I_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ur?"#define TONE_MAPPING":"",e.toneMapping!==ur?oe.tonemapping_pars_fragment:"",e.toneMapping!==ur?cT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,aT("linearToOutputTexel",e.outputColorSpace),hT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gl).join(`
`)),o=Tp(o),o=C_(o,e),o=R_(o,e),a=Tp(a),a=C_(a,e),a=R_(a,e),o=P_(o),a=P_(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===lp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=g+_+o,E=g+p+a,y=w_(n,n.VERTEX_SHADER,x),S=w_(n,n.FRAGMENT_SHADER,E);n.attachShader(m,y),n.attachShader(m,S),e.index0AttributeName!==void 0?n.bindAttribLocation(m,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(m,0,"position"),n.linkProgram(m);function w(A){if(r.debug.checkShaderErrors){let N=n.getProgramInfoLog(m)||"",L=n.getShaderInfoLog(y)||"",k=n.getShaderInfoLog(S)||"",I=N.trim(),z=L.trim(),V=k.trim(),O=!0,Q=!0;if(n.getProgramParameter(m,n.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,m,y,S);else{let W=A_(n,y,"vertex"),R=A_(n,S,"fragment");Kt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(m,n.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+W+`
`+R)}else I!==""?Zt("WebGLProgram: Program Info Log:",I):(z===""||V==="")&&(Q=!1);Q&&(A.diagnostics={runnable:O,programLog:I,vertexShader:{log:z,prefix:_},fragmentShader:{log:V,prefix:p}})}n.deleteShader(y),n.deleteShader(S),v=new ca(n,m),b=dT(n,m)}let v;this.getUniforms=function(){return v===void 0&&w(this),v};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(m,nT)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rT++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=S,this}var wT=0,wp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ep(t),e.set(t,i)),i}},Ep=class{constructor(t){this.id=wT++,this.code=t,this.usedTimes=0}};function ET(r){return r===ys||r===kl||r===Hl}function AT(r,t,e,i,n,s){let o=new Yo,a=new wp,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,P,A,N,L){let k=A.fog,I=N.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,O=t.get(v.envMap||z,V),Q=u[v.type],W=i.precision;v.precision!==null&&(W=i.getMaxPrecision(v.precision),W!==v.precision&&Zt("WebGLProgram.getParameters:",v.precision,"not supported, using",W,"instead."));let R=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=R!==void 0?R.length:0,xt=0;I.morphAttributes.position!==void 0&&(xt=1),I.morphAttributes.normal!==void 0&&(xt=2),I.morphAttributes.color!==void 0&&(xt=3);let At,Y,ct,bt;if(Q){let nt=dr[Q];At=nt.vertexShader,Y=nt.fragmentShader}else{At=v.vertexShader,Y=v.fragmentShader;let nt=a.getVertexShaderStage(v),Tt=a.getFragmentShaderStage(v);a.update(v,nt,Tt),ct=nt.id,bt=Tt.id}let Et=r.getRenderTarget(),gt=r.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Pt=!!v.map,jt=!!v.matcap,Ut=!!O,Ht=Ut&&O.isPMREMTexture===!0,ge=!!v.aoMap,_e=!!v.lightMap,Z=!!v.bumpMap&&v.wireframe===!1,he=!!v.normalMap,ni=!!v.displacementMap,Ee=!!v.emissiveMap,ie=!!v.metalnessMap,Ae=!!v.roughnessMap,Fe=v.anisotropy>0,F=v.clearcoat>0,Se=v.diffuseRoughness>0,ue=v.dispersion>0,Yt=v.retroreflectivity>0,pt=v.iridescence>0,ve=v.sheen>0,kt=v.transmission>0,Xt=Fe&&!!v.anisotropyMap,C=F&&!!v.clearcoatMap,M=F&&!!v.clearcoatNormalMap,G=F&&!!v.clearcoatRoughnessMap,ot=Se&&!!v.diffuseRoughnessMap,rt=pt&&!!v.iridescenceMap,dt=pt&&!!v.iridescenceThicknessMap,mt=ve&&!!v.sheenColorMap,X=ve&&!!v.sheenRoughnessMap,tt=!!v.specularMap,ut=!!v.specularColorMap,D=!!v.specularIntensityMap,et=kt&&!!v.transmissionMap,j=kt&&!!v.thicknessMap,_t=!!v.gradientMap,ht=!!v.alphaMap,K=v.alphaTest>0,at=!!v.alphaHash,vt=!!v.extensions,st=ur;v.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(st=r.toneMapping);let it=Ht?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Mt={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:At,fragmentShader:Y,defines:v.defines,customVertexShaderID:ct,customFragmentShaderID:bt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:W,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:Et===null?r.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Pt,matcap:jt,envMap:Ut,envMapMode:Ut&&O.mapping,envMapPMREM:Ht,envMapMaxLod:Ht?it.length-1:null,envMapSize:Ht?it[0].width:null,aoMap:ge,lightMap:_e,bumpMap:Z,normalMap:he,displacementMap:ni,emissiveMap:Ee,normalMapObjectSpace:he&&v.normalMapType===K0,normalMapTangentSpace:he&&v.normalMapType===np,packedNormalMap:he&&v.normalMapType===np&&ET(v.normalMap.format),metalnessMap:ie,roughnessMap:Ae,anisotropy:Fe,anisotropyMap:Xt,clearcoat:F,clearcoatMap:C,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:Se,diffuseRoughnessMap:ot,dispersion:ue,retroreflection:Yt,iridescence:pt,iridescenceMap:rt,iridescenceThicknessMap:dt,sheen:ve,sheenColorMap:mt,sheenRoughnessMap:X,specularMap:tt,specularColorMap:ut,specularIntensityMap:D,transmission:kt,transmissionMap:et,thicknessMap:j,gradientMap:_t,opaque:v.transparent===!1&&v.blending===oa&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:K,alphaHash:at,combine:v.combine,mapUv:Pt&&f(v.map.channel),aoMapUv:ge&&f(v.aoMap.channel),lightMapUv:_e&&f(v.lightMap.channel),bumpMapUv:Z&&f(v.bumpMap.channel),normalMapUv:he&&f(v.normalMap.channel),displacementMapUv:ni&&f(v.displacementMap.channel),emissiveMapUv:Ee&&f(v.emissiveMap.channel),metalnessMapUv:ie&&f(v.metalnessMap.channel),roughnessMapUv:Ae&&f(v.roughnessMap.channel),anisotropyMapUv:Xt&&f(v.anisotropyMap.channel),clearcoatMapUv:C&&f(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ot&&f(v.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(v.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&f(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&f(v.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(v.sheenRoughnessMap.channel),specularMapUv:tt&&f(v.specularMap.channel),specularColorMapUv:ut&&f(v.specularColorMap.channel),specularIntensityMapUv:D&&f(v.specularIntensityMap.channel),transmissionMapUv:et&&f(v.transmissionMap.channel),thicknessMapUv:j&&f(v.thicknessMap.channel),alphaMapUv:ht&&f(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(he||Fe),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Pt||ht),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&he===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:L.filter(nt=>nt.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:Pt&&v.map.isVideoTexture===!0&&de.getTransfer(v.map.colorSpace)===Te,decodeVideoTextureEmissive:Ee&&v.emissiveMap.isVideoTexture===!0&&de.getTransfer(v.emissiveMap.colorSpace)===Te,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Hn,flipSided:v.side===Di,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:vt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(vt&&v.extensions.multiDraw===!0||xe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function _(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(p(b,v),g(b,v),b.push(r.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function p(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function g(v,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function x(v){let b=u[v.type],P;if(b){let A=dr[b];P=Wr.clone(A.uniforms)}else P=v.uniforms;return P}function E(v,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new TT(r,b,v,n),c.push(P),h.set(b,P)),P}function y(v){if(--v.usedTimes===0){let b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function S(v){a.remove(v)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:_,getUniforms:x,acquireProgram:E,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:w}}function CT(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function RT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function L_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function D_(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,_,p,g){let x=r[t];return x===void 0?(x={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:g},r[t]=x):(x.id=u.id,x.object=u,x.geometry=f,x.material=m,x.materialVariant=o(u),x.groupOrder=_,x.renderOrder=u.renderOrder,x.z=p,x.group=g),t++,x}function l(u,f,m,_,p,g,x){x.reversedDepth===!0&&(p=-p);let E=a(u,f,m,_,p,g);m.transmission>0?i.push(E):m.transparent===!0?n.push(E):e.push(E)}function c(u,f,m,_,p,g){let x=a(u,f,m,_,p,g);m.transmission>0?i.unshift(x):m.transparent===!0?n.unshift(x):e.unshift(x)}function h(u,f){e.length>1&&e.sort(u||RT),i.length>1&&i.sort(f||L_),n.length>1&&n.sort(f||L_)}function d(){for(let u=t,f=r.length;u<f;u++){let m=r[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:d,sort:h}}function PT(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new D_,r.set(i,[o])):n>=s.length?(o=new D_,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function IT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Qt};break;case"SpotLight":e={position:new B,direction:new B,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function LT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var DT=0;function NT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function UT(r){let t=new IT,e=LT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let n=new B,s=new Ve,o=new Ve;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,x=0,E=0,y=0,S=0,w=0,v=0,b=0,P=0,A=0;c.sort(NT);for(let L=0,k=c.length;L<k;L++){let I=c[L],z=I.color,V=I.intensity,O=I.distance,Q=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ys?Q=I.shadow.map.texture:Q=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*V,d+=z.g*V,u+=z.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],V);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),i.sunShadow[m]=J,i.sunShadowMap[m]=Q;let xt=R.getViewportCount();for(let At=0;At<xt;At++)i.sunShadowMatrix[_+At]=R.getMatrix(At),i.sunShadowCascade[_+At]=R._cascadeData[At];_+=xt,m++}i.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=I.shadow.matrix,S++}i.directional[p]=W,p++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(V),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[x]=W;let R=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,R.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[x]=R.matrix,I.castShadow){let J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=Q,v++}x++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=W,E++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let R=I.shadow,J=e.get(I);J.shadowIntensity=R.intensity,J.shadowBias=R.bias,J.shadowNormalBias=R.normalBias,J.shadowRadius=R.radius,J.shadowMapSize=R.mapSize,J.shadowCameraNear=R.camera.near,J.shadowCameraFar=R.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[y]=W,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==E||N.hemiLength!==y||N.numSunShadows!==m||N.numDirectionalShadows!==S||N.numPointShadows!==w||N.numSpotShadows!==v||N.numSpotMaps!==b||N.numLightProbes!==A)&&(i.sun.length=f,i.directional.length=p,i.spot.length=x,i.rectArea.length=E,i.point.length=g,i.hemi.length=y,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,N.sunLength=f,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=E,N.hemiLength=y,N.numSunShadows=m,N.numDirectionalShadows=S,N.numPointShadows=w,N.numSpotShadows=v,N.numSpotMaps=b,N.numLightProbes=A,i.version=DT++)}function l(c,h){let d=0,u=0,f=0,m=0,_=0,p=0,g=h.matrixWorldInverse;for(let x=0,E=c.length;x<E;x++){let y=c[x];if(y.isSunLight){let S=i.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),u++}else if(y.isSpotLight){let S=i.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let S=i.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(g),p++}}}return{setup:a,setupView:l,state:i}}function N_(r){let t=new UT(r),e=[],i=[],n=[];function s(d){h.camera=d,e.length=0,i.length=0,n.length=0}function o(d){d.isLightProbeGrid?n.push(d):e.push(d)}function a(d){i.push(d)}function l(){t.setup(e),n.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function OT(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new N_(r),t.set(n,[a])):s>=o.length?(a=new N_(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zT=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],kT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],U_=new Ve,Vl=new B,yp=new B;function HT(r,t,e){let i=new Ys,n=new Wt,s=new Wt,o=new ii,a=new Uh,l=new Oh,c={},h=e.maxTextureSize,d={[xs]:Di,[Di]:xs,[Hn]:Hn},u=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:FT,fragmentShader:BT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new vi;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new di(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cl;let g=this.type;this.render=function(w,v,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===C0&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cl);let P=r.getRenderTarget(),A=r.getActiveCubeFace(),N=r.getActiveMipmapLevel(),L=r.state;L.setBlending(kr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=g!==this.type;k&&v.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=w.length;I<z;I++){let V=w[I],O=V.shadow;if(O===void 0){Zt("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;n.copy(O.mapSize);let Q=O.getFrameExtents();n.multiply(Q),s.copy(O.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/Q.x),n.x=s.x*Q.x,O.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/Q.y),n.y=s.y*Q.y,O.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||k===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===sa){if(V.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new _i(n.x,n.y,{format:ys,type:Ni,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new zr(n.x,n.y,Kn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Ur,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ai,O.map.depthTexture.magFilter=Ai}else V.isPointLight?(O.map=new Wl(n.x),O.map.depthTexture=new yl(n.x,Jn)):(O.map=new _i(n.x,n.y),O.map.depthTexture=new zr(n.x,n.y,Jn)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Ur,this.type===Cl?(O.map.depthTexture.compareFunction=W?sp:rp,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Ai,O.map.depthTexture.magFilter=Ai);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==n.x||O.map.height!==n.y)&&O.map.setSize(n.x,n.y);let R=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();V.isPointLight!==!0&&O.updateMatrices(V,b);let J=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:b.layers;for(let xt=0;xt<R;xt++){let At=O.getCamera(xt);if(V.isPointLight){let Y=O.camera,ct=O.matrix,bt=V.distance||Y.far;bt!==Y.far&&(Y.far=bt,Y.updateProjectionMatrix()),Vl.setFromMatrixPosition(V.matrixWorld),Y.position.copy(Vl),yp.copy(Y.position),yp.add(zT[xt]),Y.up.copy(kT[xt]),Y.lookAt(yp),Y.updateMatrixWorld(),ct.makeTranslation(-Vl.x,-Vl.y,-Vl.z),U_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(U_,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(O.map),r.clear());let Y=O.getViewport(xt);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),L.viewport(o)}i=O.getFrustum(xt),y(v,b,At,V,J,this.type)}O.isPointLightShadow!==!0&&this.type===sa&&x(O,b),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(P,A,N)};function x(w,v){let b=t.update(_);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new _i(n.x,n.y,{format:ys,type:Ni}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(v,null,b,u,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(v,null,b,f,_,null)}function E(w,v,b,P){let A=null,N=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)A=N;else if(A=b.isPointLight===!0?l:a,r.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let L=A.uuid,k=v.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let z=I[k];z===void 0&&(z=A.clone(),I[k]=z,v.addEventListener("dispose",S)),A=z}if(A.visible=v.visible,A.wireframe=v.wireframe,P===sa?A.side=v.shadowSide!==null?v.shadowSide:v.side:A.side=v.shadowSide!==null?v.shadowSide:d[v.side],A.alphaMap=v.alphaMap,A.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,A.map=v.map,A.clipShadows=v.clipShadows,A.clippingPlanes=v.clippingPlanes,A.clipIntersection=v.clipIntersection,A.displacementMap=v.displacementMap,A.displacementScale=v.displacementScale,A.displacementBias=v.displacementBias,A.wireframeLinewidth=v.wireframeLinewidth,A.linewidth=v.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=r.properties.get(A);L.light=b}return A}function y(w,v,b,P,A,N){if(w.visible===!1)return;if(w.layers.test(A)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===sa)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),z=w.material;if(Array.isArray(z)){let V=I.groups;for(let O=0,Q=V.length;O<Q;O++){let W=V[O],R=z[W.materialIndex];if(R&&R.visible){let J=E(w,R,P,N);w.onBeforeShadow(r,w,v,b,I,J,W),r.renderBufferDirect(b,null,I,J,w,W),w.onAfterShadow(r,w,v,b,I,J,W)}}}else if(z.visible){let V=E(w,z,P,N);w.onBeforeShadow(r,w,v,b,I,V,null),r.renderBufferDirect(b,null,I,V,w,null),w.onAfterShadow(r,w,v,b,I,V,null)}}let k=w.children;for(let I=0,z=k.length;I<z;I++)y(k[I],v,b,P,A,N)}function S(w){w.target.removeEventListener("dispose",S);for(let b in c){let P=c[b],A=w.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function VT(r,t){function e(){let D=!1,et=new ii,j=null,_t=new ii(0,0,0,0);return{setMask:function(ht){j!==ht&&!D&&(r.colorMask(ht,ht,ht,ht),j=ht)},setLocked:function(ht){D=ht},setClear:function(ht,K,at,vt,st){st===!0&&(ht*=vt,K*=vt,at*=vt),et.set(ht,K,at,vt),_t.equals(et)===!1&&(r.clearColor(ht,K,at,vt),_t.copy(et))},reset:function(){D=!1,j=null,_t.set(-1,0,0,0)}}}function i(){let D=!1,et=!1,j=null,_t=null,ht=null;return{setReversed:function(K){if(et!==K){let at=t.get("EXT_clip_control");K?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT),et=K;let vt=ht;ht=null,this.setClear(vt)}},getReversed:function(){return et},setTest:function(K){K?gt(r.DEPTH_TEST):Bt(r.DEPTH_TEST)},setMask:function(K){j!==K&&!D&&(r.depthMask(K),j=K)},setFunc:function(K){if(et&&(K=a_[K]),_t!==K){switch(K){case _h:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case xh:r.depthFunc(r.LESS);break;case Go:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}_t=K}},setLocked:function(K){D=K},setClear:function(K){ht!==K&&(ht=K,et&&(K=1-K),r.clearDepth(K))},reset:function(){D=!1,j=null,_t=null,ht=null,et=!1}}}function n(){let D=!1,et=null,j=null,_t=null,ht=null,K=null,at=null,vt=null,st=null;return{setTest:function(it){D||(it?gt(r.STENCIL_TEST):Bt(r.STENCIL_TEST))},setMask:function(it){et!==it&&!D&&(r.stencilMask(it),et=it)},setFunc:function(it,Mt,nt){(j!==it||_t!==Mt||ht!==nt)&&(r.stencilFunc(it,Mt,nt),j=it,_t=Mt,ht=nt)},setOp:function(it,Mt,nt){(K!==it||at!==Mt||vt!==nt)&&(r.stencilOp(it,Mt,nt),K=it,at=Mt,vt=nt)},setLocked:function(it){D=it},setClear:function(it){st!==it&&(r.clearStencil(it),st=it)},reset:function(){D=!1,et=null,j=null,_t=null,ht=null,K=null,at=null,vt=null,st=null}}}let s=new e,o=new i,a=new n,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,m=[],_=null,p=!1,g=null,x=null,E=null,y=null,S=null,w=null,v=null,b=new Qt(0,0,0),P=0,A=!1,N=null,L=null,k=null,I=null,z=null,V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Q=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=Q>=1):W.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=Q>=2);let R=null,J={},xt=r.getParameter(r.SCISSOR_BOX),At=r.getParameter(r.VIEWPORT),Y=new ii().fromArray(xt),ct=new ii().fromArray(At);function bt(D,et,j,_t){let ht=new Uint8Array(4),K=r.createTexture();r.bindTexture(D,K),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<j;at++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(et,0,r.RGBA,1,1,_t,0,r.RGBA,r.UNSIGNED_BYTE,ht):r.texImage2D(et+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ht);return K}let Et={};Et[r.TEXTURE_2D]=bt(r.TEXTURE_2D,r.TEXTURE_2D,1),Et[r.TEXTURE_CUBE_MAP]=bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[r.TEXTURE_2D_ARRAY]=bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Et[r.TEXTURE_3D]=bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),gt(r.DEPTH_TEST),o.setFunc(Go),Z(!1),he(Gd),gt(r.CULL_FACE),ge(kr);function gt(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Bt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function xe(D,et){return u[D]!==et?(r.bindFramebuffer(D,et),u[D]=et,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=et),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=et),!0):!1}function Pt(D,et){let j=m,_t=!1;if(D){j=f.get(et),j===void 0&&(j=[],f.set(et,j));let ht=D.textures;if(j.length!==ht.length||j[0]!==r.COLOR_ATTACHMENT0){for(let K=0,at=ht.length;K<at;K++)j[K]=r.COLOR_ATTACHMENT0+K;j.length=ht.length,_t=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,_t=!0);_t&&r.drawBuffers(j)}function jt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Ut={[$s]:r.FUNC_ADD,[P0]:r.FUNC_SUBTRACT,[I0]:r.FUNC_REVERSE_SUBTRACT};Ut[L0]=r.MIN,Ut[D0]=r.MAX;let Ht={[N0]:r.ZERO,[U0]:r.ONE,[O0]:r.SRC_COLOR,[qd]:r.SRC_ALPHA,[V0]:r.SRC_ALPHA_SATURATE,[k0]:r.DST_COLOR,[B0]:r.DST_ALPHA,[F0]:r.ONE_MINUS_SRC_COLOR,[Yd]:r.ONE_MINUS_SRC_ALPHA,[H0]:r.ONE_MINUS_DST_COLOR,[z0]:r.ONE_MINUS_DST_ALPHA,[G0]:r.CONSTANT_COLOR,[W0]:r.ONE_MINUS_CONSTANT_COLOR,[X0]:r.CONSTANT_ALPHA,[q0]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(D,et,j,_t,ht,K,at,vt,st,it){if(D===kr){p===!0&&(Bt(r.BLEND),p=!1);return}if(p===!1&&(gt(r.BLEND),p=!0),D!==R0){if(D!==g||it!==A){if((x!==$s||S!==$s)&&(r.blendEquation(r.FUNC_ADD),x=$s,S=$s),it)switch(D){case oa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ln:r.blendFunc(r.ONE,r.ONE);break;case Wd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Kt("WebGLState: Invalid blending: ",D);break}else switch(D){case oa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ln:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wd:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xd:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",D);break}E=null,y=null,w=null,v=null,b.set(0,0,0),P=0,g=D,A=it}return}ht=ht||et,K=K||j,at=at||_t,(et!==x||ht!==S)&&(r.blendEquationSeparate(Ut[et],Ut[ht]),x=et,S=ht),(j!==E||_t!==y||K!==w||at!==v)&&(r.blendFuncSeparate(Ht[j],Ht[_t],Ht[K],Ht[at]),E=j,y=_t,w=K,v=at),(vt.equals(b)===!1||st!==P)&&(r.blendColor(vt.r,vt.g,vt.b,st),b.copy(vt),P=st),g=D,A=!1}function _e(D,et){D.side===Hn?Bt(r.CULL_FACE):gt(r.CULL_FACE);let j=D.side===Di;et&&(j=!j),Z(j),D.blending===oa&&D.transparent===!1?ge(kr):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let _t=D.stencilWrite;a.setTest(_t),_t&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(r.SAMPLE_ALPHA_TO_COVERAGE):Bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Z(D){N!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),N=D)}function he(D){D!==E0?(gt(r.CULL_FACE),D!==L&&(D===Gd?r.cullFace(r.BACK):D===A0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Bt(r.CULL_FACE),L=D}function ni(D){D!==k&&(O&&r.lineWidth(D),k=D)}function Ee(D,et,j){D?(gt(r.POLYGON_OFFSET_FILL),(I!==et||z!==j)&&(I=et,z=j,o.getReversed()&&(et=-et,j=-j),r.polygonOffset(et,j))):Bt(r.POLYGON_OFFSET_FILL)}function ie(D){D?gt(r.SCISSOR_TEST):Bt(r.SCISSOR_TEST)}function Ae(D){D===void 0&&(D=r.TEXTURE0+V-1),R!==D&&(r.activeTexture(D),R=D)}function Fe(D,et,j){j===void 0&&(R===null?j=r.TEXTURE0+V-1:j=R);let _t=J[j];_t===void 0&&(_t={type:void 0,texture:void 0},J[j]=_t),(_t.type!==D||_t.texture!==et)&&(R!==j&&(r.activeTexture(j),R=j),r.bindTexture(D,et||Et[D]),_t.type=D,_t.texture=et)}function F(){let D=J[R];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Se(){try{r.compressedTexImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function ue(){try{r.compressedTexImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function Yt(){try{r.texSubImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function pt(){try{r.texSubImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function ve(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function kt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function Xt(){try{r.texStorage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function C(){try{r.texStorage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function M(){try{r.texImage2D(...arguments)}catch(D){Kt("WebGLState:",D)}}function G(){try{r.texImage3D(...arguments)}catch(D){Kt("WebGLState:",D)}}function ot(D){return d[D]!==void 0?d[D]:r.getParameter(D)}function rt(D,et){d[D]!==et&&(r.pixelStorei(D,et),d[D]=et)}function dt(D){Y.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Y.copy(D))}function mt(D){ct.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),ct.copy(D))}function X(D,et){let j=c.get(et);j===void 0&&(j=new WeakMap,c.set(et,j));let _t=j.get(D);_t===void 0&&(_t=r.getUniformBlockIndex(et,D.name),r.uniformBlockBinding(et,_t,_t),j.set(D,_t))}function tt(D,et,j){let ht=c.get(et).get(D);l[ht]!==j&&(r.bindBufferBase(r.UNIFORM_BUFFER,ht,j),l[ht]=j)}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,J={},u={},l={},f=new WeakMap,m=[],_=null,p=!1,g=null,x=null,E=null,y=null,S=null,w=null,v=null,b=new Qt(0,0,0),P=0,A=!1,N=null,L=null,k=null,I=null,z=null,Y.set(0,0,r.canvas.width,r.canvas.height),ct.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:gt,disable:Bt,bindFramebuffer:xe,drawBuffers:Pt,useProgram:jt,setBlending:ge,setMaterial:_e,setFlipSided:Z,setCullFace:he,setLineWidth:ni,setPolygonOffset:Ee,setScissorTest:ie,activeTexture:Ae,bindTexture:Fe,unbindTexture:F,compressedTexImage2D:Se,compressedTexImage3D:ue,texImage2D:M,texImage3D:G,pixelStorei:rt,getParameter:ot,updateUBOMapping:X,uniformBlockBinding:tt,texStorage2D:Xt,texStorage3D:C,texSubImage2D:Yt,texSubImage3D:pt,compressedTexSubImage2D:ve,compressedTexSubImage3D:kt,scissor:dt,viewport:mt,reset:ut}}function GT(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,h=new WeakMap,d=new Set,u,f=new WeakMap,m=new Set,_=new FinalizationRegistry(C=>m.delete(C)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):Wo("canvas")}function x(C,M,G){let ot=1,rt=Xt(C);if((rt.width>G||rt.height>G)&&(ot=G/Math.max(rt.width,rt.height)),ot<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let dt=Math.floor(ot*rt.width),mt=Math.floor(ot*rt.height);u===void 0&&(u=g(dt,mt));let X=M?g(dt,mt):u;return X.width=dt,X.height=mt,X.getContext("2d").drawImage(C,0,0,dt,mt),Zt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+dt+"x"+mt+")."),X}else return"data"in C&&Zt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function E(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(C,M,G,ot,rt,dt=!1){if(C!==null){if(r[C]!==void 0)return r[C];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;ot&&(mt=t.get("EXT_texture_norm16"),mt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=M;if(M===r.RED&&(G===r.FLOAT&&(X=r.R32F),G===r.HALF_FLOAT&&(X=r.R16F),G===r.UNSIGNED_BYTE&&(X=r.R8),G===r.UNSIGNED_SHORT&&mt&&(X=mt.R16_EXT),G===r.SHORT&&mt&&(X=mt.R16_SNORM_EXT)),M===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.R8UI),G===r.UNSIGNED_SHORT&&(X=r.R16UI),G===r.UNSIGNED_INT&&(X=r.R32UI),G===r.BYTE&&(X=r.R8I),G===r.SHORT&&(X=r.R16I),G===r.INT&&(X=r.R32I)),M===r.RG&&(G===r.FLOAT&&(X=r.RG32F),G===r.HALF_FLOAT&&(X=r.RG16F),G===r.UNSIGNED_BYTE&&(X=r.RG8),G===r.UNSIGNED_SHORT&&mt&&(X=mt.RG16_EXT),G===r.SHORT&&mt&&(X=mt.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.RG8UI),G===r.UNSIGNED_SHORT&&(X=r.RG16UI),G===r.UNSIGNED_INT&&(X=r.RG32UI),G===r.BYTE&&(X=r.RG8I),G===r.SHORT&&(X=r.RG16I),G===r.INT&&(X=r.RG32I)),M===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.RGB8UI),G===r.UNSIGNED_SHORT&&(X=r.RGB16UI),G===r.UNSIGNED_INT&&(X=r.RGB32UI),G===r.BYTE&&(X=r.RGB8I),G===r.SHORT&&(X=r.RGB16I),G===r.INT&&(X=r.RGB32I)),M===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),G===r.UNSIGNED_INT&&(X=r.RGBA32UI),G===r.BYTE&&(X=r.RGBA8I),G===r.SHORT&&(X=r.RGBA16I),G===r.INT&&(X=r.RGBA32I)),M===r.RGB&&(G===r.UNSIGNED_SHORT&&mt&&(X=mt.RGB16_EXT),G===r.SHORT&&mt&&(X=mt.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),M===r.RGBA){let tt=dt?hl:de.getTransfer(rt);G===r.FLOAT&&(X=r.RGBA32F),G===r.HALF_FLOAT&&(X=r.RGBA16F),G===r.UNSIGNED_BYTE&&(X=tt===Te?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&mt&&(X=mt.RGBA16_EXT),G===r.SHORT&&mt&&(X=mt.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function v(C,M){let G;return C?M===null||M===Jn||M===Ks?G=r.DEPTH24_STENCIL8:M===Kn?G=r.DEPTH32F_STENCIL8:M===la&&(G=r.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jn||M===Ks?G=r.DEPTH_COMPONENT24:M===Kn?G=r.DEPTH_COMPONENT32F:M===la&&(G=r.DEPTH_COMPONENT16),G}function b(C,M){return E(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ai&&C.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function P(C){let M=new WeakRef(C);i.get(C).__ref=M,m.add(M),_.register(C,M,M)}function A(C){let M=i.get(C).__ref;M!==void 0&&(m.delete(M),_.unregister(M))}function N(C){k(C.target)}function L(C){I(C.target)}function k(C){C.removeEventListener("dispose",N),A(C),V(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&d.delete(C)}function I(C){C.removeEventListener("dispose",L),A(C),Q(C)}function z(){for(let C of m){let M=C.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):k(M))}m.clear(),d.clear()}function V(C){let M=i.get(C);if(M.__webglInit===void 0)return;let G=C.source,ot=f.get(G);if(ot){let rt=ot[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&O(C),Object.keys(ot).length===0&&f.delete(G)}i.remove(C)}function O(C){let M=i.get(C);r.deleteTexture(M.__webglTexture);let G=C.source,ot=f.get(G);delete ot[M.__cacheKey],o.memory.textures--}function Q(C){let M=i.get(C);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&k(G),C.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(M.__webglFramebuffer[rt]))for(let dt=0;dt<M.__webglFramebuffer[rt].length;dt++)r.deleteFramebuffer(M.__webglFramebuffer[rt][dt]);else r.deleteFramebuffer(M.__webglFramebuffer[rt]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[rt])}else{if(Array.isArray(M.__webglFramebuffer))for(let rt=0;rt<M.__webglFramebuffer.length;rt++)r.deleteFramebuffer(M.__webglFramebuffer[rt]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let rt=0;rt<M.__webglColorRenderbuffer.length;rt++)M.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[rt]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let ot=C.textures;for(let rt=0,dt=ot.length;rt<dt;rt++){let mt=i.get(ot[rt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(ot[rt])}i.remove(C)}let W=0;function R(){W=0}function J(){return W}function xt(C){W=C}function At(){let C=W;return C>=n.maxTextures&&Zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),W+=1,C}function Y(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.mipmapsAutoUpdate),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function ct(C,M){let G=i.get(C);if(C.isVideoTexture&&ve(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let ot=C.image;if(ot===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+M)}function bt(C,M){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){_e(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+M)}function Et(C,M){let G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){_e(G,C,M);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+M)}function gt(C,M){let G=i.get(C);if(C.version>0&&G.__version!==C.version){Z(G,C,M);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+M)}let Bt={[Th]:r.REPEAT,[ar]:r.CLAMP_TO_EDGE,[wh]:r.MIRRORED_REPEAT},xe={[Ai]:r.NEAREST,[Z0]:r.NEAREST_MIPMAP_NEAREST,[Ul]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[Jh]:r.LINEAR_MIPMAP_NEAREST,[Hr]:r.LINEAR_MIPMAP_LINEAR},Pt={[j0]:r.NEVER,[op]:r.ALWAYS,[t_]:r.LESS,[rp]:r.LEQUAL,[e_]:r.EQUAL,[sp]:r.GEQUAL,[i_]:r.GREATER,[n_]:r.NOTEQUAL};function jt(C,M){if(M.type===Kn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===Jh||M.magFilter===Ul||M.magFilter===Hr||M.minFilter===an||M.minFilter===Jh||M.minFilter===Ul||M.minFilter===Hr)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Bt[M.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Bt[M.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Bt[M.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,xe[M.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ai||M.minFilter!==Ul&&M.minFilter!==Hr||M.type===Kn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,n.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",N),P(M));let ot=M.source,rt=f.get(ot);rt===void 0&&(rt={},f.set(ot,rt));let dt=Y(M);if(dt!==C.__cacheKey){rt[dt]===void 0&&(rt[dt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),rt[dt].usedTimes++;let mt=rt[C.__cacheKey];mt!==void 0&&(rt[C.__cacheKey].usedTimes--,mt.usedTimes===0&&O(M)),C.__cacheKey=dt,C.__webglTexture=rt[dt].texture}return G}function Ht(C,M,G){return Math.floor(Math.floor(C/G)/M)}function ge(C,M,G,ot){let dt=C.updateRanges;if(dt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,G,ot,M.data);else{dt.sort((D,et)=>D.start-et.start);let mt=0;for(let D=1;D<dt.length;D++){let et=dt[mt],j=dt[D],_t=et.start+et.count,ht=Ht(j.start,M.width,4),K=Ht(et.start,M.width,4);j.start<=_t+1&&ht===K&&Ht(j.start+j.count-1,M.width,4)===ht?et.count=Math.max(et.count,j.start+j.count-et.start):(++mt,dt[mt]=j)}dt.length=mt+1;let X=e.getParameter(r.UNPACK_ROW_LENGTH),tt=e.getParameter(r.UNPACK_SKIP_PIXELS),ut=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let D=0,et=dt.length;D<et;D++){let j=dt[D],_t=Math.floor(j.start/4),ht=Math.ceil(j.count/4),K=_t%M.width,at=Math.floor(_t/M.width),vt=ht,st=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,K),e.pixelStorei(r.UNPACK_SKIP_ROWS,at),e.texSubImage2D(r.TEXTURE_2D,0,K,at,vt,st,G,ot,M.data)}C.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,X),e.pixelStorei(r.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ut)}}function _e(C,M,G){let ot=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ot=r.TEXTURE_3D);let rt=Ut(C,M),dt=M.source;e.bindTexture(ot,C.__webglTexture,r.TEXTURE0+G);let mt=i.get(dt);if(dt.version!==mt.__version||rt===!0){if(e.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let st=de.getPrimaries(de.workingColorSpace),it=M.colorSpace===Gr?null:de.getPrimaries(M.colorSpace),Mt=M.colorSpace===Gr||st===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let tt=x(M.image,!1,n.maxTextureSize);tt=kt(M,tt);let ut=s.convert(M.format,M.colorSpace),D=s.convert(M.type),et=w(M.internalFormat,ut,D,M.normalized,M.colorSpace,M.isVideoTexture);jt(ot,M);let j,_t=M.mipmaps,ht=M.isVideoTexture!==!0,K=mt.__version===void 0||rt===!0,at=dt.dataReady,vt=b(M,tt);if(M.isDepthTexture)et=v(M.format===Vr,M.type),K&&(ht?e.texStorage2D(r.TEXTURE_2D,1,et,tt.width,tt.height):e.texImage2D(r.TEXTURE_2D,0,et,tt.width,tt.height,0,ut,D,null));else if(M.isDataTexture)if(_t.length>0){ht&&K&&e.texStorage2D(r.TEXTURE_2D,vt,et,_t[0].width,_t[0].height);for(let st=0,it=_t.length;st<it;st++)j=_t[st],ht?at&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,j.width,j.height,ut,D,j.data):e.texImage2D(r.TEXTURE_2D,st,et,j.width,j.height,0,ut,D,j.data);M.generateMipmaps=!1}else ht?(K&&e.texStorage2D(r.TEXTURE_2D,vt,et,tt.width,tt.height),at&&ge(M,tt,ut,D)):e.texImage2D(r.TEXTURE_2D,0,et,tt.width,tt.height,0,ut,D,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ht&&K&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,et,_t[0].width,_t[0].height,tt.depth);for(let st=0,it=_t.length;st<it;st++)if(j=_t[st],M.format!==Qn)if(ut!==null)if(ht){if(at)if(M.layerUpdates.size>0){let Mt=dp(j.width,j.height,M.format,M.type);for(let nt of M.layerUpdates){let Tt=j.data.subarray(nt*Mt/j.data.BYTES_PER_ELEMENT,(nt+1)*Mt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,nt,j.width,j.height,1,ut,Tt)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,j.width,j.height,tt.depth,ut,j.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,et,j.width,j.height,tt.depth,0,j.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?at&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,j.width,j.height,tt.depth,ut,D,j.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,et,j.width,j.height,tt.depth,0,ut,D,j.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ht&&K&&e.texStorage2D(r.TEXTURE_2D,vt,et,_t[0].width,_t[0].height);for(let st=0,it=_t.length;st<it;st++)j=_t[st],M.format!==Qn?ut!==null?ht?at&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,j.width,j.height,ut,j.data):e.compressedTexImage2D(r.TEXTURE_2D,st,et,j.width,j.height,0,j.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?at&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,j.width,j.height,ut,D,j.data):e.texImage2D(r.TEXTURE_2D,st,et,j.width,j.height,0,ut,D,j.data)}else if(M.isDataArrayTexture)if(ht){if(K&&e.texStorage3D(r.TEXTURE_2D_ARRAY,vt,et,tt.width,tt.height,tt.depth),at)if(M.layerUpdates.size>0){let st=dp(tt.width,tt.height,M.format,M.type);for(let it of M.layerUpdates){let Mt=tt.data.subarray(it*st/tt.data.BYTES_PER_ELEMENT,(it+1)*st/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,it,tt.width,tt.height,1,ut,D,Mt)}M.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,D,tt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,et,tt.width,tt.height,tt.depth,0,ut,D,tt.data);else if(M.isData3DTexture)ht?(K&&e.texStorage3D(r.TEXTURE_3D,vt,et,tt.width,tt.height,tt.depth),at&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,D,tt.data)):e.texImage3D(r.TEXTURE_3D,0,et,tt.width,tt.height,tt.depth,0,ut,D,tt.data);else if(M.isFramebufferTexture){if(K)if(ht)e.texStorage2D(r.TEXTURE_2D,vt,et,tt.width,tt.height);else{let st=tt.width,it=tt.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,et,st,it,0,ut,D,null),st>>=1,it>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){let st=r.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),tt.parentNode!==st){st.appendChild(tt),d.add(M),st.onpaint=it=>{let Mt=it.changedElements;for(let nt of d)Mt.includes(nt.image)&&(nt.needsUpdate=!0)},st.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,tt);else{let Mt=r.RGBA,nt=r.RGBA,Tt=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Mt,nt,Tt,tt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(_t.length>0){if(ht&&K){let st=Xt(_t[0]);e.texStorage2D(r.TEXTURE_2D,vt,et,st.width,st.height)}for(let st=0,it=_t.length;st<it;st++)j=_t[st],ht?at&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,ut,D,j):e.texImage2D(r.TEXTURE_2D,st,et,ut,D,j);M.generateMipmaps=!1}else if(ht){if(K){let st=Xt(tt);e.texStorage2D(r.TEXTURE_2D,vt,et,st.width,st.height)}at&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,D,tt)}else e.texImage2D(r.TEXTURE_2D,0,et,ut,D,tt);E(M)&&M.mipmapsAutoUpdate===!0&&y(ot),mt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Z(C,M,G){if(M.image.length!==6)return;let ot=Ut(C,M),rt=M.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+G);let dt=i.get(rt);if(rt.version!==dt.__version||ot===!0){e.activeTexture(r.TEXTURE0+G);let mt=de.getPrimaries(de.workingColorSpace),X=M.colorSpace===Gr?null:de.getPrimaries(M.colorSpace),tt=M.colorSpace===Gr||mt===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let ut=M.isCompressedTexture||M.image[0].isCompressedTexture,D=M.image[0]&&M.image[0].isDataTexture,et=[];for(let nt=0;nt<6;nt++)!ut&&!D?et[nt]=x(M.image[nt],!0,n.maxCubemapSize):et[nt]=D?M.image[nt].image:M.image[nt],et[nt]=kt(M,et[nt]);let j=et[0],_t=s.convert(M.format,M.colorSpace),ht=s.convert(M.type),K=w(M.internalFormat,_t,ht,M.normalized,M.colorSpace),at=M.isVideoTexture!==!0,vt=dt.__version===void 0||ot===!0,st=rt.dataReady,it=b(M,j);jt(r.TEXTURE_CUBE_MAP,M);let Mt;if(M.isDepthTexture){if(K=v(M.format===Vr,M.type),vt)if(at)e.texStorage2D(r.TEXTURE_CUBE_MAP,1,K,j.width,j.height);else for(let nt=0;nt<6;nt++)e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,K,j.width,j.height,0,_t,ht,null)}else if(ut){at&&vt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,it,K,j.width,j.height);for(let nt=0;nt<6;nt++){Mt=et[nt].mipmaps;for(let Tt=0;Tt<Mt.length;Tt++){let re=Mt[Tt];M.format!==Qn?_t!==null?at?st&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,re.width,re.height,_t,re.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,K,re.width,re.height,0,re.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,0,0,re.width,re.height,_t,ht,re.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt,K,re.width,re.height,0,_t,ht,re.data)}}}else{if(Mt=M.mipmaps,at&&vt){Mt.length>0&&it++;let nt=Xt(et[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,it,K,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(D){at?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,et[nt].width,et[nt].height,_t,ht,et[nt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,K,et[nt].width,et[nt].height,0,_t,ht,et[nt].data);for(let Tt=0;Tt<Mt.length;Tt++){let Jt=Mt[Tt].image[nt].image;at?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,Jt.width,Jt.height,_t,ht,Jt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,K,Jt.width,Jt.height,0,_t,ht,Jt.data)}}else{at?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t,ht,et[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,K,_t,ht,et[nt]);for(let Tt=0;Tt<Mt.length;Tt++){let re=Mt[Tt];at?st&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,0,0,_t,ht,re.image[nt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+nt,Tt+1,K,_t,ht,re.image[nt])}}}E(M)&&M.mipmapsAutoUpdate===!0&&y(r.TEXTURE_CUBE_MAP),dt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function he(C,M,G,ot,rt,dt){let mt=s.convert(G.format,G.colorSpace),X=s.convert(G.type),tt=w(G.internalFormat,mt,X,G.normalized,G.colorSpace),ut=i.get(M),D=i.get(G);if(D.__renderTarget=M,!ut.__hasExternalTextures){let et=Math.max(1,M.width>>dt),j=Math.max(1,M.height>>dt);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,dt,tt,et,j,M.depth,0,mt,X,null):e.texImage2D(rt,dt,tt,et,j,0,mt,X,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),pt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,rt,D.__webglTexture,0,Yt(M)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,rt,D.__webglTexture,dt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ni(C,M,G){if(r.bindRenderbuffer(r.RENDERBUFFER,C),M.depthBuffer){let ot=M.depthTexture,rt=ot&&ot.isDepthTexture?ot.type:null,dt=v(M.stencilBuffer,rt),mt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt(M),dt,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt(M),dt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,dt,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,C)}else{let ot=M.textures;for(let rt=0;rt<ot.length;rt++){let dt=ot[rt],mt=s.convert(dt.format,dt.colorSpace),X=s.convert(dt.type),tt=w(dt.internalFormat,mt,X,dt.normalized,dt.colorSpace);pt(M)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Yt(M),tt,M.width,M.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt(M),tt,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,tt,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ee(C,M,G){let ot=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(M.depthTexture);rt.__renderTarget=M;let dt=ot?M.depthTexture.image[0]:M.depthTexture.image;(!rt.__webglTexture||dt.width!==M.width||dt.height!==M.height)&&(dt.width=M.width,dt.height=M.height,M.depthTexture.needsUpdate=!0),ot?gt(M.depthTexture,0):ct(M.depthTexture,0);let mt=rt.__webglTexture,X=Yt(M),tt=ot?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,ut=M.depthTexture.format===Vr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ur)pt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,tt,mt,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,ut,tt,mt,0);else if(M.depthTexture.format===Vr)pt(M)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,tt,mt,0,X):r.framebufferTexture2D(r.FRAMEBUFFER,ut,tt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(C){let M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let ot=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ot){let rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ot.removeEventListener("dispose",rt)};ot.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=ot}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let ot=0;ot<6;ot++)Ee(M.__webglFramebuffer[ot],C,ot);else C.texture.mipmaps.length>0?Ee(M.__webglFramebuffer[0],C,0):Ee(M.__webglFramebuffer,C,0);else if(G){M.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ot]),M.__webglDepthbuffer[ot]===void 0)M.__webglDepthbuffer[ot]=r.createRenderbuffer(),ni(M.__webglDepthbuffer[ot],C,!1);else{let rt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,dt)}}else if(C.texture.mipmaps.length>0?e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),ni(M.__webglDepthbuffer,C,!1);else{let rt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,dt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ae(C,M,G){let ot=i.get(C);M!==void 0&&he(ot.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ie(C)}function Fe(C){let M=C.texture,G=i.get(C),ot=i.get(M);C.addEventListener("dispose",L),P(C);let rt=C.textures,dt=C.isWebGLCubeRenderTarget===!0,mt=rt.length>1;if(mt||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=M.version,o.memory.textures++),dt){G.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps.length>0){G.__webglFramebuffer[X]=[];for(let tt=0;tt<M.mipmaps.length;tt++)G.__webglFramebuffer[X][tt]=r.createFramebuffer()}else G.__webglFramebuffer[X]=r.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)G.__webglFramebuffer[X]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(mt)for(let X=0,tt=rt.length;X<tt;X++){let ut=i.get(rt[X]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(C.samples>0&&pt(C)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<rt.length;X++){let tt=rt[X];G.__webglColorRenderbuffer[X]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[X]);let ut=s.convert(tt.format,tt.colorSpace),D=s.convert(tt.type),et=w(tt.internalFormat,ut,D,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),j=Yt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,j,et,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,G.__webglColorRenderbuffer[X])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),ni(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),jt(r.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)he(G.__webglFramebuffer[X][tt],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,tt);else he(G.__webglFramebuffer[X],C,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);E(M)?y(r.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&r.texParameteri(r.TEXTURE_CUBE_MAP,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let X=0,tt=rt.length;X<tt;X++){let ut=rt[X],D=i.get(ut),et=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(et=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(et,D.__webglTexture),jt(et,ut),he(G.__webglFramebuffer,C,ut,r.COLOR_ATTACHMENT0+X,et,0),E(ut)&&y(et)}e.unbindTexture()}else{let X=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(X=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(X,ot.__webglTexture),jt(X,M),M.mipmaps.length>0)for(let tt=0;tt<M.mipmaps.length;tt++)he(G.__webglFramebuffer[tt],C,M,r.COLOR_ATTACHMENT0,X,tt);else he(G.__webglFramebuffer,C,M,r.COLOR_ATTACHMENT0,X,0);E(M)?y(X):M.mipmaps.length>0&&r.texParameteri(X,r.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}C.depthBuffer&&ie(C)}function F(C){let M=C.textures;for(let G=0,ot=M.length;G<ot;G++){let rt=M[G];if(E(rt)&&rt.mipmapsAutoUpdate===!0){let dt=S(C),mt=i.get(rt).__webglTexture;e.bindTexture(dt,mt),y(dt),e.unbindTexture()}}}let Se=[];function ue(C){if(C.samples>0){if(pt(C)===!1){let M=C.textures,G=C.width,ot=C.height,rt=r.COLOR_BUFFER_BIT,dt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=i.get(C),X=M.length>1;if(X)for(let ut=0;ut<M.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ut=0;ut<M.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),X){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let D=i.get(M[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,G,ot,0,0,G,ot,rt,r.NEAREST),l===!0&&(Se.length=0,Se.push(r.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Se.push(dt),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Se))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),X)for(let ut=0;ut<M.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,mt.__webglColorRenderbuffer[ut]);let D=i.get(M[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,D,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Yt(C){return Math.min(n.maxSamples,C.samples)}function pt(C){let M=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function kt(C,M){let G=C.colorSpace,ot=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==cl&&G!==Gr&&(de.getTransfer(G)===Te?(ot!==Qn||rt!==Pn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",G)),M}function Xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=At,this.resetTextureUnits=R,this.getTextureUnits=J,this.setTextureUnits=xt,this.setTexture2D=ct,this.setTexture2DArray=bt,this.setTexture3D=Et,this.setTextureCube=gt,this.rebindTextures=Ae,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=he,this.useMultisampledRTT=pt,this.dispose=z}function WT(r,t){function e(i,n=Gr){let s,o=de.getTransfer(n);if(i===Pn)return r.UNSIGNED_BYTE;if(i===Qh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===jh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===jd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jd)return r.BYTE;if(i===Kd)return r.SHORT;if(i===la)return r.UNSIGNED_SHORT;if(i===Kh)return r.INT;if(i===Jn)return r.UNSIGNED_INT;if(i===Kn)return r.FLOAT;if(i===Ni)return r.HALF_FLOAT;if(i===tp)return r.ALPHA;if(i===ep)return r.RGB;if(i===Qn)return r.RGBA;if(i===Ur)return r.DEPTH_COMPONENT;if(i===Vr)return r.DEPTH_STENCIL;if(i===ip)return r.RED;if(i===tu)return r.RED_INTEGER;if(i===ys)return r.RG;if(i===eu)return r.RG_INTEGER;if(i===iu)return r.RGBA_INTEGER;if(i===Ol||i===Fl||i===Bl||i===zl)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nu||i===ru||i===su||i===ou)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===nu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===su)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ou)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===au||i===lu||i===cu||i===hu||i===uu||i===kl||i===fu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===au||i===lu)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===hu)return s.COMPRESSED_R11_EAC;if(i===uu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===kl)return s.COMPRESSED_RG11_EAC;if(i===fu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===du||i===pu||i===mu||i===gu||i===_u||i===vu||i===xu||i===yu||i===Su||i===Mu||i===bu||i===Tu||i===wu||i===Eu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===du)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_u)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Su)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Eu)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Au||i===Cu||i===Ru)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Au)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ru)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pu||i===Iu||i===Hl||i===Lu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Pu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ks?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var XT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ap=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Sl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Oe({vertexShader:XT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new di(new ps(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cp=class extends lr{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new Ap,g={},x=e.getContextAttributes(),E=null,y=null,S=[],w=[],v=new Wt,b=null,P=null,A=new on;A.viewport=new ii;let N=new on;N.viewport=new ii;let L=[A,N],k=new qh,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ct=S[Y];return ct===void 0&&(ct=new $o,S[Y]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(Y){let ct=S[Y];return ct===void 0&&(ct=new $o,S[Y]=ct),ct.getGripSpace()},this.getHand=function(Y){let ct=S[Y];return ct===void 0&&(ct=new $o,S[Y]=ct),ct.getHandSpace()};function V(Y){let ct=w.indexOf(Y.inputSource);if(ct===-1)return;let bt=S[ct];bt!==void 0&&(bt.update(Y.inputSource,Y.frame,c||o),bt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<S.length;Y++){let ct=w[Y];ct!==null&&(w[Y]=null,S[Y].disconnect(ct))}I=null,z=null,p.reset();for(let Y in g)delete g[Y];if(t.setRenderTarget(E),f=null,u=null,d=null,n=null,y=null,At.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(v.width,v.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return m},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(E=t.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Q),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Et=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=x.stencil?Vr:Ur,Et=x.stencil?Ks:Jn);let Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Bt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new _i(u.textureWidth,u.textureHeight,{format:Qn,type:Pn,depthTexture:new zr(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,e,bt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _i(f.framebufferWidth,f.framebufferHeight,{format:Qn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),At.setContext(n),At.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(Y){for(let ct=0;ct<Y.removed.length;ct++){let bt=Y.removed[ct],Et=w.indexOf(bt);Et>=0&&(w[Et]=null,S[Et].disconnect(bt))}for(let ct=0;ct<Y.added.length;ct++){let bt=Y.added[ct],Et=w.indexOf(bt);if(Et===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=w.length){w.push(bt),Et=Bt;break}else if(w[Bt]===null){w[Bt]=bt,Et=Bt;break}if(Et===-1)break}let gt=S[Et];gt&&gt.connect(bt)}}function W(Y,ct){ct===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ct.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ct=Y.near,bt=Y.far;p.texture!==null&&(p.depthNear>0&&(ct=p.depthNear),p.depthFar>0&&(bt=p.depthFar)),k.near=N.near=A.near=ct,k.far=N.far=A.far=bt,(I!==k.near||z!==k.far)&&(n.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,z=k.far),k.layers.mask=Y.layers.mask|6,A.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let Et=Y.parent,gt=k.cameras;W(k,Et);for(let Bt=0;Bt<gt.length;Bt++)W(gt[Bt],Et);k.projectionMatrix.copy(A.projectionMatrix),k.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),R(Y,k,Et)};function R(Y,ct,bt){bt===null?Y.matrix.copy(ct.matrixWorld):(Y.matrix.copy(bt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ct.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ct.projectionMatrix),Y.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ah*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function(Y){return g[Y]};let J=null;function xt(Y,ct){if(h=ct.getViewerPose(c||o),m=ct,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Et=!1;bt.length!==k.cameras.length&&(k.cameras.length=0,Et=!0);for(let Pt=0;Pt<bt.length;Pt++){let jt=bt[Pt],Ut=null;if(f!==null)Ut=f.getViewport(jt);else{let ge=d.getViewSubImage(u,jt);Ut=ge.viewport,Pt===0&&(t.setRenderTargetTextures(y,ge.colorTexture,ge.depthStencilTexture),t.setRenderTarget(y))}let Ht=L[Pt];Ht===void 0&&(Ht=new on,Ht.layers.enable(Pt),Ht.viewport=new ii,L[Pt]=Ht),Ht.matrix.fromArray(jt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(jt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Pt===0&&(k.matrix.copy(Ht.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Et===!0&&k.cameras.push(Ht)}let gt=n.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let Pt=d.getDepthInformation(bt[0]);Pt&&Pt.isValid&&Pt.texture&&p.init(Pt,n.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let Pt=0;Pt<bt.length;Pt++){let jt=bt[Pt].camera;if(jt){let Ut=g[jt];Ut||(Ut=new Sl,g[jt]=Ut);let Ht=d.getCameraImage(jt);Ut.sourceTexture=Ht}}}}for(let bt=0;bt<S.length;bt++){let Et=w[bt],gt=S[bt];Et!==null&&gt!==void 0&&gt.update(Et,ct,c||o)}J&&J(Y,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),m=null}let At=new O_;At.setAnimationLoop(xt),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}},YT=new Ve,q_=new te;q_.set(-1,0,0,0,1,0,0,0,1);function $T(r,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,hp(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function n(p,g,x,E,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),d(p,g)):g.isMeshPhongMaterial?(s(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),u(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,E):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Di&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Di&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let x=t.get(g),E=x.envMap,y=x.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(YT.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(q_),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=E*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function d(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Di&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function ZT(r,t,e,i){let n={},s={};function o(x,E){let y=E.program;i.uniformBlockBinding(x,y,n[x.id])}function a(x,E){let y=n[x.id];y===void 0&&(m(x),y=l(x),n[x.id]=y,x.addEventListener("dispose",p));let S=E.program;i.updateUBOMapping(x,S);let w=t.render.frame;s[x.id]!==w&&(c(x),s[x.id]=w)}function l(x){let E=r.createBuffer(),y=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,y,S),r.bindBuffer(r.UNIFORM_BUFFER,null),E}function c(x){let E=n[x.id],y=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let w=0,v=y.length;w<v;w++){let b=y[w];if(Array.isArray(b))for(let P=0,A=b.length;P<A;P++)h(b[P],w,P,S);else h(b,w,0,S)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(x,E,y,S){if(u(x,E,y,S)===!0){let w=x.__offset,v=x.value;if(Array.isArray(v)){let b=0;for(let P=0;P<v.length;P++){let A=v[P],N=_(A,!0);d(A,x.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(v,x.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,x.__data)}}function d(x,E,y){typeof x=="number"||typeof x=="boolean"?E[y]=x:x.isMatrix3?(E[y]=x.elements[0],E[y+1]=x.elements[1],E[y+2]=x.elements[2],E[y+3]=0,E[y+4]=x.elements[3],E[y+5]=x.elements[4],E[y+6]=x.elements[5],E[y+7]=0,E[y+8]=x.elements[6],E[y+9]=x.elements[7],E[y+10]=x.elements[8],E[y+11]=0):ArrayBuffer.isView(x)?E.set(x.subarray(0,E.length-y),y):x.toArray(E,y)}function u(x,E,y,S){let w=x.value,v=E+"_"+y;if(Array.isArray(w)){S[v]===void 0&&(S[v]=[]);let b=S[v],P=!1;for(let A=0;A<w.length;A++)f(w[A],b,A)===!0&&(P=!0);return P}return f(w,S,v)}function f(x,E,y){if(E[y]===void 0)return typeof x=="number"||typeof x=="boolean"?E[y]=x:ArrayBuffer.isView(x)?E[y]=x.slice():E[y]=x.clone(),!0;{let S=E[y];if(typeof x=="number"||typeof x=="boolean"){if(S!==x)return E[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(S.equals(x)===!1)return S.copy(x),!0}}return!1}function m(x){let E=x.uniforms,y=0,S=16;for(let v=0,b=E.length;v<b;v++){let P=Array.isArray(E[v])?E[v]:[E[v]];for(let A=0,N=P.length;A<N;A++){let L=P[A],k=Array.isArray(L.value)?L.value:[L.value],I=Array.isArray(E[v])||Array.isArray(L.value),z=y;for(let O=0,Q=k.length;O<Q;O++){let W=k[O],R=_(W,I),J=y%S,xt=J%R.boundary,At=J+xt;y+=xt,At!==0&&S-At<R.storage&&(y+=S-At),O===0&&(z=y),y+=R.storage}let V=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new V((y-z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=z}}let w=y%S;return w>0&&(y+=S-w),x.__size=y,x.__cache={},this}function _(x,E){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",x),E===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(x){let E=x.target;E.removeEventListener("dispose",p),r.deleteBuffer(n[E.id]),delete n[E.id],delete s[E.id]}function g(){for(let x in n)r.deleteBuffer(n[x]);n={},s={}}return{bind:o,update:a,dispose:g}}var JT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fr=null;function KT(){return fr===null&&(fr=new Ko(JT,16,16,ys,Ni),fr.name="DFG_LUT",fr.minFilter=an,fr.magFilter=an,fr.wrapS=ar,fr.wrapT=ar,fr.generateMipmaps=!1,fr.needsUpdate=!0),fr}var Fu=class{constructor(t={}){let{canvas:e=r_(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Pn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let _=f,p=new Set([iu,eu,tu]),g=new Set([Pn,Jn,la,Ks,Qh,jh]),x=new Uint32Array(4),E=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},S=null,w=null,v=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,L=null,k=null,I=null,z=null;this._outputColorSpace=Li;let V=0,O=0,Q=null,W=-1,R=null,J=new ii,xt=new ii,At=null,Y=new Qt(0),ct=0,bt=e.width,Et=e.height,gt=1,Bt=null,xe=null,Pt=new ii(0,0,bt,Et),jt=new ii(0,0,bt,Et),Ut=!1,Ht=new Ys,ge=new Lh,_e=!1,Z=!1,he=new Ve,ni=new B,Ee=new ii,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Fe(){return Q===null?gt:1}let F=i;function Se(T,U){return e.getContext(T,U)}let ue,Yt,pt,ve,kt,Xt,C,M,G,ot,rt,dt,mt,X,tt,ut,D,et,j,_t,ht,K,at;try{let T={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),F===null){let U="webgl2";if(F=Se(U,T),F===null)throw Se(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}vt()}catch(T){throw e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),Kt("WebGLRenderer: "+T.message),T}function vt(){ue=new l1(F),ue.init(),ht=new WT(F,ue),Yt=new Kb(F,ue,t,ht),pt=new VT(F,ue),Yt.reversedDepthBuffer&&u&&pt.buffers.depth.setReversed(!0),k=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),ve=new u1(F),kt=new CT,Xt=new GT(F,ue,pt,kt,Yt,ht,ve),C=new a1(A),M=new dS(F),K=new Zb(F,M),G=new c1(F,M,ve,K),ot=new d1(F,G,M,K,ve),et=new f1(F,Yt,Xt),tt=new Qb(kt),rt=new AT(A,C,ue,Yt,K,tt),dt=new $T(A,kt),mt=new PT,X=new OT(ue),D=new $b(A,C,pt,ot,m,l),ut=new HT(A,ot,Yt),at=new ZT(F,ve,Yt,pt),j=new Jb(F,ue,ve),_t=new h1(F,ue,ve),ve.programs=rt.programs,A.capabilities=Yt,A.extensions=ue,A.properties=kt,A.renderLists=mt,A.shadowMap=ut,A.state=pt,A.info=ve}_!==Pn&&(P=new m1(_,e.width,e.height,a,n,s));let st=new Cp(A,F);this.xr=st,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(T){T!==void 0&&(gt=T,this.setSize(bt,Et,!1))},this.getSize=function(T){return T.set(bt,Et)},this.setSize=function(T,U,$=!0){if(st.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}bt=T,Et=U,e.width=Math.floor(T*gt),e.height=Math.floor(U*gt),$===!0&&(e.style.width=T+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(bt*gt,Et*gt).floor()},this.setDrawingBufferSize=function(T,U,$){bt=T,Et=U,gt=$,e.width=Math.floor(T*$),e.height=Math.floor(U*$),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===Pn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Pt)},this.setViewport=function(T,U,$,H){T.isVector4?Pt.set(T.x,T.y,T.z,T.w):Pt.set(T,U,$,H),pt.viewport(J.copy(Pt).multiplyScalar(Fe()).round())},this.getScissor=function(T){return T.copy(jt)},this.setScissor=function(T,U,$,H){T.isVector4?jt.set(T.x,T.y,T.z,T.w):jt.set(T,U,$,H),pt.scissor(xt.copy(jt).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(T){pt.setScissorTest(Ut=T)},this.setOpaqueSort=function(T){Bt=T},this.setTransparentSort=function(T){xe=T},this.getClearColor=function(T){return T.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,$=!0){let H=0;if(T){let q=!1;if(Q!==null){let yt=Q.texture.format;q=p.has(yt)}if(q){let yt=Q.texture.type,Dt=g.has(yt),St=D.getClearColor(),wt=D.getClearAlpha(),It=St.r,ft=St.g,qt=St.b;Dt?(x[0]=It,x[1]=ft,x[2]=qt,x[3]=wt,F.clearBufferuiv(F.COLOR,0,x)):(E[0]=It,E[1]=ft,E[2]=qt,E[3]=wt,F.clearBufferiv(F.COLOR,0,E))}else H|=F.COLOR_BUFFER_BIT}U&&(H|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(H|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&F.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),D.dispose(),mt.dispose(),X.dispose(),Xt.dispose(),kt.dispose(),C.dispose(),ot.dispose(),G.dispose(),K.dispose(),at.dispose(),rt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ie),st.removeEventListener("sessionend",Me),ze.stop()};function it(T){T.preventDefault(),fl("WebGLRenderer: Context Lost."),N=!0}function Mt(){fl("WebGLRenderer: Context Restored."),N=!1;let T=ve.autoReset,U=ut.enabled,$=ut.autoUpdate,H=ut.needsUpdate,q=ut.type;vt(),ve.autoReset=T,ut.enabled=U,ut.autoUpdate=$,ut.needsUpdate=H,ut.type=q}function nt(T){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Tt(T){let U=T.target;U.removeEventListener("dispose",Tt),re(U)}function re(T){Jt(T),kt.remove(T)}function Jt(T){let U=kt.get(T).programs;U!==void 0&&(U.forEach(function($){rt.releaseProgram($)}),T.isShaderMaterial&&rt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,$,H,q,yt){U===null&&(U=ie);let Dt=q.isMesh&&q.matrixWorld.determinantAffine()<0,St=$t(T,U,$,H,q);pt.setMaterial(H,Dt);let wt=$.index,It=1;if(H.wireframe===!0){if(wt=G.getWireframeAttribute($),wt===void 0)return;It=2}let ft=$.drawRange,qt=$.attributes.position,Rt=ft.start*It,ee=(ft.start+ft.count)*It;yt!==null&&(Rt=Math.max(Rt,yt.start*It),ee=Math.min(ee,(yt.start+yt.count)*It)),wt!==null?(Rt=Math.max(Rt,0),ee=Math.min(ee,wt.count)):qt!=null&&(Rt=Math.max(Rt,0),ee=Math.min(ee,qt.count));let Xe=ee-Rt;if(Xe<0||Xe===1/0)return;K.setup(q,H,St,$,wt);let Le,Re=j;if(wt!==null&&(Le=M.get(wt),Re=_t,Re.setIndex(Le)),q.isMesh)H.wireframe===!0?(pt.setLineWidth(H.wireframeLinewidth*Fe()),Re.setMode(F.LINES)):Re.setMode(F.TRIANGLES);else if(q.isLine){let pi=H.linewidth;pi===void 0&&(pi=1),pt.setLineWidth(pi*Fe()),q.isLineSegments?Re.setMode(F.LINES):q.isLineLoop?Re.setMode(F.LINE_LOOP):Re.setMode(F.LINE_STRIP)}else q.isPoints?Re.setMode(F.POINTS):q.isSprite&&Re.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Re.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let pi=q._multiDrawStarts,Nt=q._multiDrawCounts,Ci=q._multiDrawCount,fe=wt?M.get(wt).bytesPerElement:1,mr=kt.get(H).currentProgram.getUniforms();for(let be=0;be<Ci;be++)mr.setValue(F,"_gl_DrawID",be),Re.render(pi[be]/fe,Nt[be])}else if(q.isInstancedMesh)Re.renderInstances(Rt,Xe,q.count);else if($.isInstancedBufferGeometry){let pi=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nt=Math.min($.instanceCount,pi);Re.renderInstances(Rt,Xe,Nt)}else Re.render(Rt,Xe)};function Be(T,U,$,H){L!==null&&T.isNodeMaterial&&L.setObject(H,T),_e===!0&&tt.setState(T,$,!1),T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=Di,T.needsUpdate=!0,Lt(T,U,H),T.side=xs,T.needsUpdate=!0,Lt(T,U,H),T.side=Hn):Lt(T,U,H)}this.compile=function(T,U,$=null){$===null&&($=T),L!==null&&L.renderStart(T,U,$),w=X.get($),w.init(U),b.push(w),$.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),T!==$&&T.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),Z=this.localClippingEnabled,_e=tt.init(this.clippingPlanes,Z),_e===!0&&tt.setGlobalState(this.clippingPlanes,U),L!==null&&ut.render(w.state.shadowsArray,$,U);let H=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let yt=q.material;if(yt)if(Array.isArray(yt))for(let Dt=0;Dt<yt.length;Dt++){let St=yt[Dt];Be(St,$,U,q),H.add(St)}else Be(yt,$,U,q),H.add(yt)}),w=b.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(T,U,$=null){let H=this.compile(T,U,$);return new Promise(q=>{function yt(){if(H.forEach(function(Dt){let wt=kt.get(Dt).currentProgram;(wt===void 0||wt.isReady())&&H.delete(Dt)}),H.size===0){q(T);return}setTimeout(yt,10)}ue.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let $e=null;function He(T){$e&&$e(T)}function Ie(){ze.stop()}function Me(){ze.start()}let ze=new O_;ze.setAnimationLoop(He),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(T){$e=T,st.setAnimationLoop(T),T===null?ze.stop():ze.start()},st.addEventListener("sessionstart",Ie),st.addEventListener("sessionend",Me),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(T,U);let $=st.enabled===!0&&st.isPresenting===!0,H=P!==null&&(Q===null||$)&&P.begin(A,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(U),U=st.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,U,Q),w=X.get(T,b.length),w.init(U),w.state.textureUnits=Xt.getTextureUnits(),b.push(w),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ge.setFromArrayCamera(U):Ht.setFromProjectionMatrix(he,kn,U.reversedDepth),Z=this.localClippingEnabled,_e=tt.init(this.clippingPlanes,Z),S=mt.get(T,v.length),S.init(),v.push(S),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Dt=A.xr.getDepthSensingMesh();Dt!==null&&Ce(Dt,U,-1/0,A.sortObjects)}Ce(T,U,0,A.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),A.sortObjects===!0&&S.sort(Bt,xe),Ae=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ae&&D.addToRenderList(S,T),this.info.autoReset===!0&&this.info.reset(),_e===!0&&tt.beginShadows();let q=w.state.shadowsArray;if(ut.render(q,T,U),_e===!0&&tt.endShadows(),(H&&P.hasRenderPass())===!1){let Dt=S.opaque,St=S.transmissive;if(w.setupLights(),U.isArrayCamera){let wt=U.cameras;if(St.length>0)for(let It=0,ft=wt.length;It<ft;It++){let qt=wt[It];Ui(Dt,St,T,qt)}Ae&&D.render(T);for(let It=0,ft=wt.length;It<ft;It++){let qt=wt[It];Si(S,T,qt,qt.viewport)}}else St.length>0&&Ui(Dt,St,T,U),Ae&&D.render(T),Si(S,T,U)}Q!==null&&O===0&&(Xt.updateMultisampleRenderTarget(Q),Xt.updateRenderTargetMipmap(Q)),H&&P.end(A),T.isScene===!0&&T.onAfterRender(A,T,U),K.resetDefaultState(),W=-1,R=null,b.pop(),b.length>0?(w=b[b.length-1],Xt.setTextureUnits(w.state.textureUnits),_e===!0&&tt.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,v.pop(),v.length>0?S=v[v.length-1]:S=null,L!==null&&L.renderEnd()};function Ce(T,U,$,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Dt=U.isArrayCamera?ge:Ht;if(!T.frustumCulled||T.intersectsFrustum(Dt)){H&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);let St=ot.update(T),wt=T.material;wt.visible&&S.push(T,St,wt,$,Ee.z,null,U)}}else if(T.isMesh||T.isLine||T.isPoints){let Dt=U.isArrayCamera?ge:Ht;if(!T.frustumCulled||T.intersectsFrustum(Dt)){let St=ot.update(T),wt=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ee.copy(St.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(wt)){let It=St.groups;for(let ft=0,qt=It.length;ft<qt;ft++){let Rt=It[ft],ee=wt[Rt.materialIndex];ee&&ee.visible&&S.push(T,St,ee,$,Ee.z,Rt,U)}}else wt.visible&&S.push(T,St,wt,$,Ee.z,null,U)}}}let yt=T.children;for(let Dt=0,St=yt.length;Dt<St;Dt++)Ce(yt[Dt],U,$,H)}function Si(T,U,$,H){let{opaque:q,transmissive:yt,transparent:Dt}=T;w.setupLightsView($),_e===!0&&tt.setGlobalState(A.clippingPlanes,$),H&&pt.viewport(J.copy(H)),q.length>0&&Ge(q,U,$),yt.length>0&&Ge(yt,U,$),Dt.length>0&&Ge(Dt,U,$),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ui(T,U,$,H){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let Rt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new _i(1,1,{generateMipmaps:!0,type:Rt?Ni:Pn,minFilter:Hr,samples:Math.max(4,Yt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let yt=w.state.transmissionRenderTarget[H.id],Dt=H.viewport||J;yt.setSize(Dt.z*A.transmissionResolutionScale,Dt.w*A.transmissionResolutionScale);let St=A.getRenderTarget(),wt=A.getActiveCubeFace(),It=A.getActiveMipmapLevel();A.setRenderTarget(yt),A.getClearColor(Y),ct=A.getClearAlpha(),ct<1&&A.setClearColor(16777215,.5),A.clear(),Ae&&D.render($);let ft=A.toneMapping;A.toneMapping=ur;let qt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),_e===!0&&tt.setGlobalState(A.clippingPlanes,H),Ge(T,$,H),Xt.updateMultisampleRenderTarget(yt),Xt.updateRenderTargetMipmap(yt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ee=0,Xe=U.length;ee<Xe;ee++){let Le=U[ee],{object:Re,geometry:pi,material:Nt,group:Ci}=Le;if(Nt.side===Hn&&Re.layers.test(H.layers)){let fe=Nt.side;Nt.side=Di,Nt.needsUpdate=!0,Ze(Re,$,H,pi,Nt,Ci),Nt.side=fe,Nt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Xt.updateMultisampleRenderTarget(yt),Xt.updateRenderTargetMipmap(yt))}A.setRenderTarget(St,wt,It),A.setClearColor(Y,ct),qt!==void 0&&(H.viewport=qt),A.toneMapping=ft}function Ge(T,U,$){let H=U.isScene===!0?U.overrideMaterial:null;for(let q=0,yt=T.length;q<yt;q++){let Dt=T[q],{object:St,geometry:wt,group:It}=Dt,ft=Dt.material;ft.allowOverride===!0&&H!==null&&(ft=H),St.layers.test($.layers)&&Ze(St,U,$,wt,ft,It)}}function Ze(T,U,$,H,q,yt){L!==null&&q.isNodeMaterial&&L.setObject(T,q),T.onBeforeRender(A,U,$,H,q,yt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(A,U,$,H,T,yt),q.transparent===!0&&q.side===Hn&&q.forceSinglePass===!1?(q.side=Di,q.needsUpdate=!0,A.renderBufferDirect($,U,H,q,T,yt),q.side=xs,q.needsUpdate=!0,A.renderBufferDirect($,U,H,q,T,yt),q.side=Hn):A.renderBufferDirect($,U,H,q,T,yt),T.onAfterRender(A,U,$,H,q,yt)}function lt(T){let U=0;for(let $ of T)$.texture!==null&&U++;return U}function Lt(T,U,$){U.isScene!==!0&&(U=ie);let H=kt.get(T),q=w.state.lights,yt=w.state.shadowsArray,Dt=q.state.version,St=rt.getParameters(T,q.state,yt,U,$,w.state.lightProbeGridArray),wt=rt.getProgramCacheKey(St),It=H.programs;H.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let ft=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;H.envMap=C.get(T.envMap||H.environment,ft),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,It===void 0&&(T.addEventListener("dispose",Tt),It=new Map,H.programs=It,H.programVariants=new Map);let qt=It.get(wt);if(qt!==void 0){if(H.currentProgram===qt&&H.lightsStateVersion===Dt)return Ot(T,St),qt}else St.uniforms=rt.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,$,St),T.onBeforeCompile(St,A),qt=rt.acquireProgram(St,wt),It.set(wt,qt),H.uniforms=St.uniforms;let Rt=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Rt.clippingPlanes=tt.uniform),Ot(T,St),H.needsLights=cn(T),H.lightsStateVersion=Dt,H.needsLights&&(Rt.ambientLightColor.value=q.state.ambient,Rt.lightProbe.value=q.state.probe,Rt.sunLights.value=q.state.sun,Rt.sunLightShadows.value=q.state.sunShadow,Rt.directionalLights.value=q.state.directional,Rt.directionalLightShadows.value=q.state.directionalShadow,Rt.spotLights.value=q.state.spot,Rt.spotLightShadows.value=q.state.spotShadow,Rt.rectAreaLights.value=q.state.rectArea,Rt.ltc_1.value=q.state.rectAreaLTC1,Rt.ltc_2.value=q.state.rectAreaLTC2,Rt.pointLights.value=q.state.point,Rt.pointLightShadows.value=q.state.pointShadow,Rt.hemisphereLights.value=q.state.hemi,Rt.sunShadowMatrix.value=q.state.sunShadowMatrix,Rt.sunShadowCascade.value=q.state.sunShadowCascade,Rt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Rt.spotLightMatrix.value=q.state.spotLightMatrix,Rt.spotLightMap.value=q.state.spotLightMap,Rt.pointShadowMatrix.value=q.state.pointShadowMatrix),H.numLightProbeGrids=lt(w.state.lightProbeGridArray),H.currentProgram=qt,H.uniformsList=null,qt}function Gt(T,U,$,H,q){let yt=kt.get(T),Dt=yt.currentProgram.id+","+H+","+q,St=yt.programVariants.get(Dt);return St===void 0?(St=Lt(T,U,$),yt.programVariants.set(Dt,St)):(yt.currentProgram=St,yt.uniformsList=null,yt.outputColorSpace=H,yt.toneMapping=q),St}function zt(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ca.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ot(T,U){let $=kt.get(T);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function $t(T,U,$,H,q){U.isScene!==!0&&(U=ie),Xt.resetTextureUnits();let yt=U.fog,Dt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,St=Q===null?A.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:de.workingColorSpace,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=C.get(H.envMap||Dt,wt),ft=H.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!$.morphAttributes.position,ee=!!$.morphAttributes.normal,Xe=!!$.morphAttributes.color,Le=ur;H.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Le=A.toneMapping);let Re=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pi=Re!==void 0?Re.length:0,Nt=kt.get(H),Ci=w.state.lights;if(_e===!0&&(Z===!0||T!==R)){let Qe=T===R&&H.id===W;tt.setState(H,T,Qe)}let fe=!1,mr=!1;H.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==Ci.state.version||q.isBatchedMesh&&Nt.batching===!1||!q.isBatchedMesh&&Nt.batching===!0||q.isBatchedMesh&&Nt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Nt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Nt.instancing===!1||!q.isInstancedMesh&&Nt.instancing===!0||q.isSkinnedMesh&&Nt.skinning===!1||!q.isSkinnedMesh&&Nt.skinning===!0||q.isInstancedMesh&&Nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Nt.instancingMorph===!1&&q.morphTexture!==null||Nt.envMap!==It||H.fog===!0&&Nt.fog!==yt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==tt.numPlanes||Nt.numIntersection!==tt.numIntersection)||Nt.vertexAlphas!==ft||Nt.vertexTangents!==qt||Nt.morphTargets!==Rt||Nt.morphNormals!==ee||Nt.morphColors!==Xe||Nt.morphTargetsCount!==pi||Nt.numLightProbeGrids!==lt(w.state.lightProbeGridArray)?fe=!0:(Nt.outputColorSpace!==St||Nt.toneMapping!==Le)&&(mr=!0):(fe=!0,Nt.__version=H.version);let be=Nt.currentProgram;(fe===!0||mr===!0)&&(be=mr===!0?Gt(H,U,q,St,Le):Lt(H,U,q),L&&H.isNodeMaterial&&L.onUpdateProgram(H,be,Nt));let Zi=!1,Oi=!1,Vn=!1,pe=be.getUniforms(),li=Nt.uniforms;if(pt.useProgram(be.program)&&(Zi=!0,Oi=!0,Vn=!0),H.id!==W&&(W=H.id,Oi=!0),Zi||R!==T){pt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pe.setValue(F,"projectionMatrix",T.projectionMatrix),pe.setValue(F,"viewMatrix",T.matrixWorldInverse);let Mi=pe.map.cameraPosition;Mi!==void 0&&Mi.setValue(F,ni.setFromMatrixPosition(T.matrixWorld)),Yt.logarithmicDepthBuffer&&pe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,Oi=!0,Vn=!0)}if(Nt.needsLights&&(Ci.state.sunShadowMap.length>0&&pe.setValue(F,"sunShadowMap",Ci.state.sunShadowMap,Xt),Ci.state.directionalShadowMap.length>0&&pe.setValue(F,"directionalShadowMap",Ci.state.directionalShadowMap,Xt),Ci.state.spotShadowMap.length>0&&pe.setValue(F,"spotShadowMap",Ci.state.spotShadowMap,Xt),Ci.state.pointShadowMap.length>0&&pe.setValue(F,"pointShadowMap",Ci.state.pointShadowMap,Xt)),q.isSkinnedMesh){pe.setOptional(F,q,"bindMatrix"),pe.setOptional(F,q,"bindMatrixInverse");let Qe=q.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),pe.setValue(F,"boneTexture",Qe.boneTexture,Xt))}q.isBatchedMesh&&(pe.setOptional(F,q,"batchingTexture"),pe.setValue(F,"batchingTexture",q._matricesTexture,Xt),pe.setOptional(F,q,"batchingIdTexture"),pe.setValue(F,"batchingIdTexture",q._indirectTexture,Xt),pe.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&pe.setValue(F,"batchingColorTexture",q._colorsTexture,Xt));let Gn=$.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&et.update(q,$,be),(Oi||Nt.receiveShadow!==q.receiveShadow)&&(Nt.receiveShadow=q.receiveShadow,pe.setValue(F,"receiveShadow",q.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(li.envMapIntensity.value=U.environmentIntensity),li.dfgLUT!==void 0&&(li.dfgLUT.value=KT()),Oi){if(pe.setValue(F,"toneMappingExposure",A.toneMappingExposure),Nt.needsLights&&Je(li,Vn),yt&&H.fog===!0&&dt.refreshFogUniforms(li,yt),dt.refreshMaterialUniforms(li,H,gt,Et,w.state.transmissionRenderTarget[T.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){let Qe=y,Mi=0;for(let gr of w.state.lightProbeGridArray)gr.texture!==null&&(Qe.textures[Mi]=gr.texture,Qe.min[Mi]=gr.boundingBox.min,Qe.max[Mi]=gr.boundingBox.max,Qe.resolution[Mi]=gr.resolution,Mi++);for(let gr in Qe)Qe[gr].length=Mi;li.probesSH.value=Qe.textures,li.probesMin.value=Qe.min,li.probesMax.value=Qe.max,li.probesResolution.value=Qe.resolution}ca.upload(F,zt(Nt),li,Xt)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ca.upload(F,zt(Nt),li,Xt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(F,"center",q.center),pe.setValue(F,"modelViewMatrix",q.modelViewMatrix),pe.setValue(F,"normalMatrix",q.normalMatrix),pe.setValue(F,"modelMatrix",q.matrixWorld),H.uniformsGroups!==void 0){let Qe=H.uniformsGroups;for(let Mi=0,gr=Qe.length;Mi<gr;Mi++){let Bp=Qe[Mi];at.update(Bp,be),at.bind(Bp,be)}}return be}function Je(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function cn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,U,$){let H=kt.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),kt.get(T.texture).__webglTexture=U,kt.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:$,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let $=kt.get(T);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,$=0){Q=T,V=U,O=$;let H=null,q=!1,yt=!1;if(T){let St=kt.get(T);if(St.__useDefaultFramebuffer!==void 0){pt.bindFramebuffer(F.FRAMEBUFFER,St.__webglFramebuffer),J.copy(T.viewport),xt.copy(T.scissor),At=T.scissorTest,pt.viewport(J),pt.scissor(xt),pt.setScissorTest(At),W=-1;return}else if(St.__webglFramebuffer===void 0)Xt.setupRenderTarget(T);else if(St.__hasExternalTextures)Xt.rebindTextures(T,kt.get(T.texture).__webglTexture,kt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ft=T.depthTexture;if(St.__boundDepthTexture!==ft){if(ft!==null&&kt.has(ft)&&(T.width!==ft.image.width||T.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(T)}}let wt=T.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(yt=!0);let It=kt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(It[U])?H=It[U][$]:H=It[U],q=!0):T.samples>0&&Xt.useMultisampledRTT(T)===!1?H=kt.get(T).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[$]:H=It,J.copy(T.viewport),xt.copy(T.scissor),At=T.scissorTest}else J.copy(Pt).multiplyScalar(gt).floor(),xt.copy(jt).multiplyScalar(gt).floor(),At=Ut;if($!==0&&(H=k),pt.bindFramebuffer(F.FRAMEBUFFER,H)&&pt.drawBuffers(T,H),pt.viewport(J),pt.scissor(xt),pt.setScissorTest(At),q){let St=kt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,$)}else if(yt){let St=U;for(let wt=0;wt<T.textures.length;wt++){let It=kt.get(T.textures[wt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+wt,It.__webglTexture,$,St)}}else if(T!==null&&$!==0){let St=kt.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,$)}W=-1};function Ke(T){let U=kt.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=Yt.textureFormatReadable(T.format),U.__typeReadable=Yt.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,$,H,q,yt,Dt,St=0){if(!(T&&T.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(wt=wt[Dt],Array.isArray(wt)&&(wt=wt[0])),wt){pt.bindFramebuffer(F.FRAMEBUFFER,wt);try{let It=T.textures[St],ft=It.format,qt=It.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let Rt=Ke(It);if(Rt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&$>=0&&$<=T.height-q&&F.readPixels(U,$,H,q,ht.convert(ft),ht.convert(qt),yt)}finally{let It=Q!==null?kt.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(T,U,$,H,q,yt,Dt,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=kt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(wt=wt[Dt],Array.isArray(wt)&&(wt=wt[0])),wt)if(U>=0&&U<=T.width-H&&$>=0&&$<=T.height-q){pt.bindFramebuffer(F.FRAMEBUFFER,wt);let It=T.textures[St],ft=It.format,qt=It.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let Rt=Ke(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(U,$,H,q,ht.convert(ft),ht.convert(qt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Xe=Q!==null?kt.get(Q).__webglFramebuffer:null;pt.bindFramebuffer(F.FRAMEBUFFER,Xe);let Le=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await o_(F,Le,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(ee),F.deleteSync(Le),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,$=0){let H=Math.pow(2,-$),q=Math.floor(T.image.width*H),yt=Math.floor(T.image.height*H),Dt=U!==null?U.x:0,St=U!==null?U.y:0;Xt.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,$,0,0,Dt,St,q,yt),pt.unbindTexture()},this.copyTextureToTexture=function(T,U,$=null,H=null,q=0,yt=0){let Dt,St,wt,It,ft,qt,Rt,ee,Xe,Le=T.isCompressedTexture?T.mipmaps[yt]:T.image;if($!==null)Dt=$.max.x-$.min.x,St=$.max.y-$.min.y,wt=$.isBox3?$.max.z-$.min.z:1,It=$.min.x,ft=$.min.y,qt=$.isBox3?$.min.z:0;else{let pe=Math.pow(2,-q);Dt=Math.floor(Le.width*pe),St=Math.floor(Le.height*pe),T.isDataArrayTexture?wt=Le.depth:T.isData3DTexture?wt=Math.floor(Le.depth*pe):wt=1,It=0,ft=0,qt=0}H!==null?(Rt=H.x,ee=H.y,Xe=H.z):(Rt=0,ee=0,Xe=0);let Re=ht.convert(U.format),pi=ht.convert(U.type),Nt;U.isData3DTexture?(Xt.setTexture3D(U,0),Nt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Xt.setTexture2DArray(U,0),Nt=F.TEXTURE_2D_ARRAY):(Xt.setTexture2D(U,0),Nt=F.TEXTURE_2D),pt.activeTexture(F.TEXTURE0),pt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),pt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),pt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Ci=pt.getParameter(F.UNPACK_ROW_LENGTH),fe=pt.getParameter(F.UNPACK_IMAGE_HEIGHT),mr=pt.getParameter(F.UNPACK_SKIP_PIXELS),be=pt.getParameter(F.UNPACK_SKIP_ROWS),Zi=pt.getParameter(F.UNPACK_SKIP_IMAGES);pt.pixelStorei(F.UNPACK_ROW_LENGTH,Le.width),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Le.height),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,It),pt.pixelStorei(F.UNPACK_SKIP_ROWS,ft),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);let Oi=T.isDataArrayTexture||T.isData3DTexture,Vn=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let pe=kt.get(T),li=kt.get(U),Gn=kt.get(pe.__renderTarget),Qe=kt.get(li.__renderTarget);pt.bindFramebuffer(F.READ_FRAMEBUFFER,Gn.__webglFramebuffer),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Qe.__webglFramebuffer);for(let Mi=0;Mi<wt;Mi++)Oi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(T).__webglTexture,q,qt+Mi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(U).__webglTexture,yt,Xe+Mi)),F.blitFramebuffer(It,ft,It+Dt,ft+St,Rt,ee,Rt+Dt,ee+St,F.DEPTH_BUFFER_BIT,F.NEAREST);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||kt.has(T)){let pe=kt.get(T),li=kt.get(U);pt.bindFramebuffer(F.READ_FRAMEBUFFER,I),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Gn=0;Gn<wt;Gn++)Oi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pe.__webglTexture,q,qt+Gn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pe.__webglTexture,q),Vn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,li.__webglTexture,yt,Xe+Gn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,li.__webglTexture,yt),q!==0?F.blitFramebuffer(It,ft,It+Dt,ft+St,Rt,ee,Rt+Dt,ee+St,F.COLOR_BUFFER_BIT,F.NEAREST):Vn?F.copyTexSubImage3D(Nt,yt,Rt,ee,Xe+Gn,It,ft,Dt,St):F.copyTexSubImage2D(Nt,yt,Rt,ee,It,ft,Dt,St);pt.bindFramebuffer(F.READ_FRAMEBUFFER,null),pt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Vn?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Nt,yt,Rt,ee,Xe,Dt,St,wt,Re,pi,Le.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Nt,yt,Rt,ee,Xe,Dt,St,wt,Re,Le.data):F.texSubImage3D(Nt,yt,Rt,ee,Xe,Dt,St,wt,Re,pi,Le):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,Rt,ee,Dt,St,Re,pi,Le.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,Rt,ee,Le.width,Le.height,Re,Le.data):F.texSubImage2D(F.TEXTURE_2D,yt,Rt,ee,Dt,St,Re,pi,Le);pt.pixelStorei(F.UNPACK_ROW_LENGTH,Ci),pt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fe),pt.pixelStorei(F.UNPACK_SKIP_PIXELS,mr),pt.pixelStorei(F.UNPACK_SKIP_ROWS,be),pt.pixelStorei(F.UNPACK_SKIP_IMAGES,Zi),yt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(Nt),pt.unbindTexture()},this.initRenderTarget=function(T){kt.get(T).__webglFramebuffer===void 0&&Xt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Xt.setTextureCube(T,0):T.isData3DTexture?Xt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Xt.setTexture2DArray(T,0):Xt.setTexture2D(T,0),pt.unbindTexture()},this.resetState=function(){V=0,O=0,Q=null,pt.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var ua={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jT=new na(-1,1,1,-1,0,1),Rp=class extends vi{constructor(){super(),this.setAttribute("position",new Ei([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ei([0,2,0,0,2,0],2))}},tw=new Rp,Ss=class{constructor(t){this._mesh=new di(tw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,jT)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var fa=class extends In{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wr.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ss(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ql=class extends In{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},ku=class extends In{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Hu=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Wt);this._width=i.width,this._height=i.height,e=new _i(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ni}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fa(ua),this.copyPass.material.blending=kr,this.timer=new wl}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ql!==void 0&&(o instanceof ql?i=!0:o instanceof ku&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vu=class extends In{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Qt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Y_={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Qt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var da=class r extends In{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Wt(t.x,t.y):new Wt(256,256),this.clearColor=new Qt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new _i(s,o,{type:Ni,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new _i(s,o,{type:Ni,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new _i(s,o,{type:Ni,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),o=Math.round(o/2)}let a=Y_;this.highPassUniforms=Wr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Wt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wr.clone(ua.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:ua.vertexShader,fragmentShader:ua.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Qt,this._oldClearAlpha=1,this._basic=new Jo,this._fsQuad=new Ss(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Wt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),s.push(c)}return new Oe({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Wt(.5,.5)},direction:{value:new Wt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};da.BlurDirectionX=new Wt(1,0);da.BlurDirectionY=new Wt(0,1);var Yl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Gu=class extends In{constructor(){super(),this.isOutputPass=!0,this.uniforms=Wr.clone(Yl.uniforms),this.material=new ta({name:Yl.name,uniforms:this.uniforms,vertexShader:Yl.vertexShader,fragmentShader:Yl.fragmentShader}),this._fsQuad=new Ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},de.getTransfer(this._outputColorSpace)===Te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var _n=Math.PI/180,Pp=9.62*_n,Ip=-20.08*_n,Lp=24*_n,$_=5018/1737400*2.2,Z_=4e-4,ew=r=>Math.min(1,Math.max(0,r)),Ln=(r,t,e)=>{let i=ew((e-r)/(t-r));return i*i*(3-2*i)},pr=(r,t,e)=>r+(t-r)*e;function J_(){try{let r=document.createElement("canvas");return!!(r.getContext("webgl2")||r.getContext("webgl"))}catch{return!1}}function iw(r,t,e=1){return new B(Math.cos(t)*Math.cos(r)*e,Math.sin(r)*e,-Math.sin(t)*Math.cos(r)*e)}var Xr=`#include <common>
#include <logdepthbuf_pars_vertex>
`,pa=`#include <common>
#include <logdepthbuf_pars_fragment>
`,nw=Xr+`
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
  }`,rw=pa+`
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
    // de loin, le terrain prend exactement l'aspect du globe (pas de \xAB carr\xE9 \xBB visible)
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
  }`,sw=Xr+`
  varying vec2 vUv; varying vec3 vN; varying vec3 vWP;
  void main(){ vUv = uv; vN = normalize(mat3(modelMatrix)*normal);
    vec4 wp = modelMatrix*vec4(position,1.0); vWP = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp;
    #include <logdepthbuf_vertex>
  }`,ow=pa+`
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
  }`,aw=Xr+`void main(){ gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
#include <logdepthbuf_vertex>
}`,lw=pa+`uniform vec3 uCol; uniform float uA; void main(){
#include <logdepthbuf_fragment>
 gl_FragColor = vec4(uCol*uA, 1.0);
#include <colorspace_fragment>
}`,Wu=pa+`
  varying vec3 vC; varying float vF; varying float vA;
  void main(){
    #include <logdepthbuf_fragment>
    vec2 p = gl_PointCoord - 0.5; float d = length(p);
    float core = smoothstep(0.2, 0.0, d);
    float cross = (smoothstep(0.07, 0.0, abs(p.x)) + smoothstep(0.07, 0.0, abs(p.y))) * smoothstep(0.5, 0.05, d);
    float a = (core + cross * vF) * vA;
    gl_FragColor = vec4(vC * a, 1.0);
  }`,cw=Xr+`
  attribute float aSize; attribute vec3 aColor; attribute float aPhase;
  uniform float uTime; uniform float uPR; varying vec3 vC; varying float vF; varying float vA;
  void main(){
    float tw = 0.55 + 0.45*sin(uTime*(0.8+aPhase*2.2) + aPhase*40.0);
    vC = aColor; vA = tw; vF = smoothstep(2.6, 5.0, aSize) * (0.5 + 0.5*tw);
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    gl_PointSize = aSize * uPR * (0.75 + 0.35*tw);
    #include <logdepthbuf_vertex>
  }`,hw=Xr+`
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
  }`,uw=Xr+`
  attribute float aLife; attribute float aSeed; uniform float uPR;
  varying vec3 vC; varying float vF; varying float vA;
  void main(){
    vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv;
    vC = mix(vec3(1.0,0.85,0.5), vec3(1.0,1.0,1.0), aSeed) * 1.6; vF = step(0.75, aSeed);
    vA = aLife; gl_PointSize = (2.0 + aSeed*5.0) * aLife * uPR;
    #include <logdepthbuf_vertex>
  }`,fw=Xr+`
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
  }`,dw=Xr+`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);
#include <logdepthbuf_vertex>
}`,pw=pa+`
  uniform float uA; uniform vec3 uCol; varying vec2 vUv;
  void main(){
    #include <logdepthbuf_fragment>
    float r = length(vUv - 0.5) * 2.0;
    float band = smoothstep(0.78, 0.96, r) * smoothstep(1.0, 0.96, r);
    gl_FragColor = vec4(uCol * band * uA, 1.0);
  }`,mw=Xr+`
  uniform float uTime; varying vec2 vUv; varying float vShade;
  void main(){
    vUv = uv; vec3 p = position;
    float w = sin(uv.x*7.0 - uTime*4.2)*0.045 + sin(uv.y*4.0 + uTime*2.3)*0.018;
    w *= 0.35 + 0.65*(1.0 - uv.x);
    p.z += w;
    vShade = 0.9 + 0.22 * cos(uv.x*7.0 - uTime*4.2) * (0.35 + 0.65*(1.0 - uv.x));
    gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0);
    #include <logdepthbuf_vertex>
  }`,gw=pa+`
  uniform sampler2D uMap; uniform float uA; varying vec2 vUv; varying float vShade;
  void main(){
    #include <logdepthbuf_fragment>
    vec4 c = texture2D(uMap, vUv); if (c.a < 0.4 || uA < 0.01) discard;
    gl_FragColor = vec4(c.rgb * vShade * (gl_FrontFacing ? 1.0 : 0.7) * uA, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,_w={uniforms:{tDiffuse:{value:null},uZoom:{value:0},uFlash:{value:0},uVig:{value:1},uAspect:{value:1},uFade:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},Xu=r=>{let t=new xl(r);return t.colorSpace=Li,t};function $l(r){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=e.createRadialGradient(128,128,0,128,128,128);return r.forEach(([n,s])=>i.addColorStop(n,s)),e.fillStyle=i,e.fillRect(0,0,256,256),Xu(t)}function vw(){let r=document.createElement("canvas");r.width=512,r.height=1024;let t=r.getContext("2d"),e=t.createLinearGradient(0,0,0,1024);return e.addColorStop(0,"#040622"),e.addColorStop(.35,"#0d1552"),e.addColorStop(.7,"#251f6e"),e.addColorStop(1,"#4a2f86"),t.fillStyle=e,t.fillRect(0,0,512,1024),t.globalCompositeOperation="lighter",[[.22,.68,.42,"rgba(255,110,200,0.10)"],[.82,.3,.5,"rgba(80,190,255,0.08)"],[.6,.86,.38,"rgba(160,110,255,0.12)"],[.3,.18,.3,"rgba(120,140,255,0.06)"]].forEach(([i,n,s,o])=>{let a=t.createRadialGradient(i*512,n*1024,0,i*512,n*1024,s*1024);a.addColorStop(0,o),a.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=a,t.fillRect(0,0,512,1024)}),Xu(r)}function xw(r){let t=document.createElement("canvas");t.width=512,t.height=256;let e=t.getContext("2d"),i=r,n=()=>(i=(i*9301+49297)%233280)/233280,s=[];for(let h=0;h<9;h++){let d=90+h*42+n()*20,u=40+Math.sin(h/8*Math.PI)*55+n()*18;s.push([d,190-u*.75,u])}e.fillStyle="#fff",s.forEach(([h,d,u])=>{e.beginPath(),e.arc(h,d,u,0,Math.PI*2),e.fill()}),e.fillRect(70,150,380,45),e.beginPath(),e.ellipse(256,196,200,18,0,0,Math.PI*2),e.fill(),e.globalCompositeOperation="source-atop";let o=e.createLinearGradient(0,40,0,215);o.addColorStop(0,"#fbe6ff"),o.addColorStop(.45,"#c9a8e8"),o.addColorStop(1,"#5a4aa0"),e.fillStyle=o,e.fillRect(0,0,512,256),s.forEach(([h,d,u])=>{let f=e.createRadialGradient(h+u*.3,d-u*.45,0,h+u*.3,d-u*.45,u);f.addColorStop(0,"rgba(255,240,250,0.55)"),f.addColorStop(1,"rgba(255,240,250,0)"),e.fillStyle=f,e.fillRect(0,0,512,256)});let a=document.createElement("canvas");a.width=512,a.height=256;let l=a.getContext("2d");l.filter="blur(3px)";let c=l.filter==="blur(3px)";return l.drawImage(t,0,0),Xu(c?a:t)}function yw(){let i=document.createElement("canvas");i.width=640,i.height=400;let n=i.getContext("2d");for(let d=18;d<382;d+=7)n.strokeStyle=d%14?"#f3dc9e":"#e9c77a",n.lineWidth=3,n.beginPath(),n.moveTo(4,d),n.lineTo(48,d),n.moveTo(592,d),n.lineTo(636,d),n.stroke();let s=46,o=594,a=10,l=390,c=(d,u,f,m,_)=>{n.fillStyle=_,n.fillRect(d,u,f-d,m-u)};c(s,a,o,l,"#e0b54f"),c(s+12,a+12,o-12,l-12,"#7a1630"),c(s+24,a+24,o-24,l-24,"#e8c36a"),c(s+30,a+30,o-30,l-30,"#1f2a6b"),c(s+44,a+44,o-44,l-44,"#b2223e"),n.fillStyle="#f3dc9e";for(let d=s+40;d<o-30;d+=22)[a+37,l-37].forEach(u=>{n.beginPath(),n.moveTo(d,u-5),n.lineTo(d+5,u),n.lineTo(d,u+5),n.lineTo(d-5,u),n.fill()});for(let d=a+44;d<l-40;d+=22)[s+37,o-37].forEach(u=>{n.beginPath(),n.moveTo(u,d-5),n.lineTo(u+5,d),n.lineTo(u,d+5),n.lineTo(u-5,d),n.fill()});let h=(d,u,f,m,_)=>{n.fillStyle=_,n.beginPath();for(let p=0;p<16;p++){let g=m+p*Math.PI/8-Math.PI/2,x=p%2?f*.7654:f;n.lineTo(d+Math.cos(g)*x,u+Math.sin(g)*x)}n.fill()};return h(640/2,400/2,92,0,"#e8c36a"),h(640/2,400/2,74,0,"#1f2a6b"),h(640/2,400/2,50,Math.PI/8,"#e8c36a"),h(640/2,400/2,30,0,"#0f7a66"),n.fillStyle="#f7e7b8",n.beginPath(),n.arc(640/2,400/2,10,0,Math.PI*2),n.fill(),[[s+80,a+80],[o-80,a+80],[s+80,l-80],[o-80,l-80]].forEach(([d,u])=>{h(d,u,26,0,"#e8c36a"),h(d,u,14,Math.PI/8,"#1f2a6b")}),Xu(i)}function Sw(r,t){return new Promise((e,i)=>{t.itemStart(r);let n=new Image;n.decoding="async",n.onload=()=>{let s=document.createElement("canvas");s.width=n.width,s.height=n.height;let o=s.getContext("2d");o.drawImage(n,0,0),e(o.getImageData(0,0,s.width,s.height)),t.itemEnd(r)},n.onerror=s=>{t.itemError(r),i(s)},n.src=r})}async function K_(r,{mobile:t,onProgress:e}){let i=new Fu({canvas:r,antialias:!0,powerPreference:"high-performance",logarithmicDepthBuffer:!0}),n=Math.min(window.devicePixelRatio||1,t?1.6:2);i.setPixelRatio(n),i.setSize(innerWidth,innerHeight,!1),i.toneMapping=Zs,i.toneMappingExposure=1,i.outputColorSpace=Li;let s=new pl;s.background=vw();let o=new on(30,innerWidth/innerHeight,2e-5,3e3);s.add(o);let a=new ea;a.onProgress=(lt,Lt,Gt)=>e&&e(Lt/Gt);let l=new bl(a),c=(lt,Lt=!0)=>new Promise((Gt,zt)=>l.load(lt,Ot=>{Lt&&(Ot.colorSpace=Li),Ot.anisotropy=i.capabilities.getMaxAnisotropy(),Gt(Ot)},void 0,zt)),[h,d,u,f,m,_,p]=await Promise.all([c(`assets/moon_toon_${t?2:4}k.jpg`),c(`assets/moon_toon_n_${t?1:2}k.jpg`,!1),c("assets/terrain_toon.png"),c("assets/terrain_toon_n.png",!1),c("assets/terrain_toon_s.png",!1),c("assets/earth_toon.jpg"),Sw("assets/terrain_toon_h.png",a)]),g={uSunDir:{value:new B(0,0,1)},uOrbPos:{value:[new B,new B]},uOrbCol:{value:[new Qt(.7,.85,1),new Qt(1,.72,.3)]},uOrbI:{value:[0,0]},uOrbR:{value:.03},uExposure:{value:.92},uShadowCol:{value:new Qt(.23,.22,.55)},uRimCol:{value:new Qt(.42,.62,1)}},x=new Ko(new Uint8Array([255,255,255,255]),1,1);x.needsUpdate=!0;let E=(lt,Lt,Gt,zt)=>new Oe({vertexShader:nw,fragmentShader:rw,uniforms:{...g,uMap:{value:lt},uNormal:{value:Lt},uShadow:{value:Gt},uNormalStrength:{value:zt},uShadowAmt:{value:0}}}),y=new Dr;y.rotation.set(Pp,-Math.PI/2-Ip,0),s.add(y),y.add(new di(new ms(1,t?160:256,t?120:192),E(h,d,x,1.5)));let S=lt=>new Oe({vertexShader:aw,fragmentShader:lw,side:Di,uniforms:{uCol:{value:new Qt(lt)},uA:{value:1}}}),w=new di(new ms(1,96,64),S("#1d1652"));s.add(w);let v=t?200:320,b=p.width,P=p.height,A=p.data,N=(lt,Lt)=>{let Gt=Math.min(b-1.001,Math.max(0,lt*(b-1))),zt=Math.min(P-1.001,Math.max(0,Lt*(P-1))),Ot=Gt|0,$t=zt|0,Je=Gt-Ot,cn=zt-$t,Ke=(T,U)=>A[(U*b+T)*4]/255;return pr(pr(Ke(Ot,$t),Ke(Ot+1,$t),Je),pr(Ke(Ot,$t+1),Ke(Ot+1,$t+1),Je),cn)},L=new Float32Array((v+1)*(v+1)*3),k=new Float32Array((v+1)*(v+1)*2);for(let lt=0;lt<=v;lt++)for(let Lt=0;Lt<=v;Lt++){let Gt=Lt/v,zt=lt/v,Ot=lt*(v+1)+Lt,$t=Ln(0,.12,Math.min(Gt,1-Gt,zt,1-zt)),Je=iw(Pp+(.5-zt)*Lp,Ip+(Gt-.5)*Lp,1+Z_+N(Gt,zt)*$_*$t);L.set([Je.x,Je.y,Je.z],Ot*3),k.set([Gt,1-zt],Ot*2)}let I=[];for(let lt=0;lt<v;lt++)for(let Lt=0;Lt<v;Lt++){let Gt=lt*(v+1)+Lt,zt=Gt+1,Ot=Gt+v+1,$t=Ot+1;I.push(Gt,Ot,zt,zt,Ot,$t)}let z=new vi;z.setAttribute("position",new Ue(L,3)),z.setAttribute("uv",new Ue(k,2)),z.setIndex(I);let V=E(u,f,m,2.4);V.defines={PATCH:1},Object.assign(V.uniforms,{uGlobeMap:{value:h},uGlobeNormal:{value:d},uDetail:{value:0},uGeo:{value:new B(Pp,Ip,Lp)}}),y.add(new di(z,V));let O=1+Z_+N(.5,.5)*$_,Q=new B(0,0,O+.0075),W=new Br(new hr({map:$l([[0,"rgba(255,236,200,0.5)"],[.2,"rgba(255,210,170,0.22)"],[.45,"rgba(190,150,255,0.08)"],[1,"rgba(0,0,0,0)"]]),blending:ln,depthWrite:!1,transparent:!0}));W.scale.setScalar(4.6),s.add(W);let R=new Oe({vertexShader:sw,fragmentShader:ow,uniforms:{uMap:{value:_},uSunDir:g.uSunDir,uOpacity:{value:1}}}),J=new di(new ms(1,64,48),R);J.rotation.set(.3,2.3,.1),s.add(J);let xt=new di(new ms(1,48,32),S("#1d1652"));s.add(xt);let At=new Br(new hr({map:$l([[0,"rgba(110,170,255,0)"],[.4,"rgba(110,170,255,0)"],[.46,"rgba(140,200,255,0.5)"],[.62,"rgba(120,150,255,0.1)"],[1,"rgba(0,0,0,0)"]]),blending:ln,depthWrite:!1,transparent:!0}));s.add(At);let Y=t?2200:4200,ct=new Float32Array(Y*3),bt=new Float32Array(Y),Et=new Float32Array(Y*3),gt=new Float32Array(Y),Bt=new B(.3,1,.45).normalize();for(let lt=0;lt<Y;lt++){let Lt=new B().randomDirection();lt<Y*.35&&Lt.addScaledVector(Bt,-Lt.dot(Bt)*(.8+Math.random()*.2)).normalize(),ct.set([Lt.x*900,Lt.y*900,Lt.z*900],lt*3);let Gt=Math.random();bt[lt]=Gt<.86?1.2+Math.random()*1.6:Gt<.97?3+Math.random()*3:7+Math.random()*6;let zt=Math.random(),Ot=zt<.2?[1,.86,.6]:zt<.35?[.75,.85,1]:zt<.42?[1,.75,.9]:[1,.98,.95],$t=.55+Math.random()*.6;Et.set([Ot[0]*$t,Ot[1]*$t,Ot[2]*$t],lt*3),gt[lt]=Math.random()}let xe=new vi;xe.setAttribute("position",new Ue(ct,3)),xe.setAttribute("aSize",new Ue(bt,1)),xe.setAttribute("aColor",new Ue(Et,3)),xe.setAttribute("aPhase",new Ue(gt,1));let Pt=new Oe({vertexShader:cw,fragmentShader:Wu,transparent:!0,depthWrite:!1,blending:ln,uniforms:{uTime:{value:0},uPR:{value:n}}}),jt=new ds(xe,Pt);jt.frustumCulled=!1,s.add(jt);let Ut=t?70:130,Ht=new Float32Array(Ut*3);for(let lt=0;lt<Ut*3;lt++)Ht[lt]=Math.random();let ge=new vi;ge.setAttribute("position",new Ue(new Float32Array(Ut*3),3)),ge.setAttribute("aSeed",new Ue(Ht,3));let _e=new Oe({vertexShader:hw,fragmentShader:Wu,transparent:!0,depthWrite:!1,depthTest:!1,blending:ln,uniforms:{uTime:{value:0},uPR:{value:n},uHalf:{value:new Wt(1,1)},uAlpha:{value:1}}}),Z=new ds(ge,_e);Z.frustumCulled=!1,Z.renderOrder=20,o.add(Z);let ni=[[-1.55,-1.2,1.2,1.7],[1.45,-1.3,1.5,1.6],[.1,-1.75,2.6,2.2],[-2.7,-.25,.2,1.5],[2.8,.2,-.3,1.6],[-.7,-2.1,4.2,2.6]].map(([lt,Lt,Gt,zt],Ot)=>{let $t=new Br(new hr({map:xw(17+Ot*31),transparent:!0,depthWrite:!1,opacity:0}));return $t.position.set(lt,Lt,Gt),$t.scale.set(zt,zt*.5,1),$t.userData={x:lt,y:Lt,z:Gt,ph:Ot*1.7},s.add($t),$t}),Ee=new Oe({vertexShader:mw,fragmentShader:gw,side:Hn,uniforms:{uTime:{value:0},uMap:{value:yw()},uA:{value:0}}}),ie=new di(new ps(1,.625,40,20),Ee);s.add(ie);let Ae=180,Fe=new Float32Array(Ae*3),F=new Float32Array(Ae),Se=new Float32Array(Ae),ue=new Float32Array(Ae*3);for(let lt=0;lt<Ae;lt++)Se[lt]=Math.random();let Yt=new vi;Yt.setAttribute("position",new Ue(Fe,3)),Yt.setAttribute("aLife",new Ue(F,1)),Yt.setAttribute("aSeed",new Ue(Se,1));let pt=new ds(Yt,new Oe({vertexShader:uw,fragmentShader:Wu,transparent:!0,depthWrite:!1,blending:ln,uniforms:{uPR:{value:n}}}));pt.frustumCulled=!1,s.add(pt);let ve=0,Xt=[$l([[0,"rgba(255,255,255,1)"],[.08,"rgba(225,240,255,0.95)"],[.25,"rgba(150,200,255,0.4)"],[1,"rgba(0,0,0,0)"]]),$l([[0,"rgba(255,255,255,1)"],[.08,"rgba(255,232,180,0.95)"],[.25,"rgba(255,170,70,0.4)"],[1,"rgba(0,0,0,0)"]])].map(lt=>{let Lt=new Br(new hr({map:lt,blending:ln,depthWrite:!1,transparent:!0,opacity:0}));return s.add(Lt),Lt}),C=new Br(new hr({map:$l([[0,"rgba(255,255,255,1)"],[.1,"rgba(255,230,240,0.85)"],[.35,"rgba(255,190,140,0.2)"],[1,"rgba(0,0,0,0)"]]),blending:ln,depthWrite:!1,transparent:!0,opacity:0}));C.position.copy(Q),s.add(C);let M=new Oe({vertexShader:dw,fragmentShader:pw,transparent:!0,depthWrite:!1,blending:ln,uniforms:{uA:{value:0},uCol:{value:new Qt(1,.8,.9)}}}),G=new di(new ps(1,1),M);G.position.set(0,0,O+.0012),G.scale.setScalar(1e-4),s.add(G);let ot=()=>innerWidth/innerHeight<.9,rt=()=>{let lt=innerWidth/innerHeight,Lt=Math.tan(15*_n),Gt=innerHeight;return lt<1?1/(.72*Lt*lt):1/(Math.min(.5,Math.max(.28,(.705*Gt-250)/Gt))*Lt)},dt=(lt=rt())=>(innerWidth/innerHeight<1?.035:.0475+55/innerHeight)*2*lt*Math.tan(15*_n),mt=.14,X=1.05,tt=new B(0,-Math.sin(mt),Math.cos(mt)).multiplyScalar(X),ut=new B(0,Math.sin(.035),Math.cos(.035)),D=new B(0,Math.cos(mt),Math.sin(mt)),et=tt.clone().normalize(),j=Math.acos(1/X),_t=lt=>{let Lt=-j+pr(-8,ot()?19:8,lt)*_n,Gt=D.clone().multiplyScalar(Math.cos(Lt)).addScaledVector(et,Math.sin(Lt));return Gt.applyAxisAngle(et,-(ot()?9:21)*_n),tt.clone().addScaledVector(Gt,70)},ht=70*Math.tan(2.4*_n);J.scale.setScalar(ht),At.scale.setScalar(ht*2.7);let K={mode:"intro",cam:{x:0,y:dt(),z:rt(),tx:0,ty:dt(),tz:0,fov:30},sun:{theta:112*_n,tilt:.12},fx:{zoom:0,flash:0,bloom:.42,fade:1,vig:1,exposure:.92},moon:{halo:0},earth:{rise:0,show:0},shadow:{amt:0},orbs:{p:0,i:0,show:0},burst:{a:0,ring:0},names:{prog:0,dissolve:0},scroll:{p:0},clouds:{a:0},carpet:{a:0},pointer:{x:0,y:0,sx:0,sy:0}},at=null;function vt(lt="Great Vibes"){at&&(s.remove(at),at.geometry.dispose());let Lt=ot(),Gt=document.createElement("canvas"),zt=1400,Ot=Lt?1100:420;Gt.width=zt,Gt.height=Ot;let $t=Gt.getContext("2d");$t.fillStyle="#fff",$t.textAlign="center",$t.textBaseline="middle";let Je=(be,Zi)=>{$t.font=`${Zi}px "${lt}"`;let Oi=$t.measureText(be).width;return Oi>zt*.9?Zi*zt*.9/Oi:Zi};if(Lt){let be=Math.min(Je("Shayma",330),Je("Bilal",330));$t.font=`${be}px "${lt}"`,$t.fillText("Shayma",zt/2,Ot*.24),$t.font=`${be*.6}px "${lt}"`,$t.fillText("&",zt/2,Ot*.52),$t.font=`${be}px "${lt}"`,$t.fillText("Bilal",zt/2,Ot*.78)}else{let be=Je("Shayma & Bilal",250);$t.font=`${be}px "${lt}"`,$t.fillText("Shayma & Bilal",zt/2,Ot*.55)}let cn=$t.getImageData(0,0,zt,Ot).data,Ke=[],T=Lt?4:3;for(let be=0;be<Ot;be+=T)for(let Zi=0;Zi<zt;Zi+=T)cn[(be*zt+Zi)*4+3]>120&&Ke.push([Zi/zt-.5,.5-be/Ot]);let U=t?7e3:14e3;for(;Ke.length>U;)Ke.splice(Math.random()*Ke.length|0,1);let $=ut.clone().sub(tt).normalize(),H=new B().crossVectors($,et).normalize(),q=new B().crossVectors(H,$).normalize(),yt=.12,Dt=(Lt?55:40)*_n,St=Math.tan(Dt/2),wt=2*yt*St*(innerWidth/innerHeight),It=Math.min(wt*(Lt?.8:.56),2*yt*St*(Lt?.5:.62)*zt/Ot),ft=It*Ot/zt,qt=tt.clone().addScaledVector($,yt).addScaledVector(q,(Lt?.36:.3)*yt*St),Rt=Ke.length,ee=new Float32Array(Rt*3),Xe=new Float32Array(Rt*3),Le=new Float32Array(Rt*4),Re=new Float32Array(Rt*3),pi=[.7,.82,1],Nt=[1,.72,.32],Ci=[1,.62,.86];Ke.forEach(([be,Zi],Oi)=>{let Vn=qt.clone().addScaledVector(H,be*It).addScaledVector(q,Zi*ft);Xe.set([Vn.x,Vn.y,Vn.z],Oi*3);let pe=Q.clone().add(new B().randomDirection().multiplyScalar(Math.random()*.0015));ee.set([pe.x,pe.y,pe.z],Oi*3),Le.set([Math.random(),Math.random(),Math.random(),Math.random()],Oi*4);let li=Math.random();Re.set(li<.1?Ci:be<0?li<.85?pi:Nt:li<.85?Nt:pi,Oi*3)});let fe=new vi;fe.setAttribute("position",new Ue(Xe.slice(),3)),fe.setAttribute("aStart",new Ue(ee,3)),fe.setAttribute("aTarget",new Ue(Xe,3)),fe.setAttribute("aRand",new Ue(Le,4)),fe.setAttribute("aColor",new Ue(Re,3));let mr=new Oe({vertexShader:fw,fragmentShader:Wu,transparent:!0,depthWrite:!1,depthTest:!1,blending:ln,uniforms:{uProg:{value:0},uTime:{value:0},uDissolve:{value:0},uPR:{value:n},uSize:{value:t?2.8:3.2},uSpread:{value:It*.12},uUp:{value:q},uRight:{value:H},uFwd:{value:$}}});at=new ds(fe,mr),at.frustumCulled=!1,at.renderOrder=10,s.add(at)}let st=null;function it(){let lt=ot()?.35:1,Lt=[tt.clone(),new B(0,-.55,1.45),new B(2.1*lt,-.5,2.7),new B(-1.9*lt,.45,3.3),new B(.4*lt,.15,5.6)],Gt=[ut.clone(),new B(0,.25,.75),new B(.95*lt,ot()?-.75:0,0),new B(-.95*lt,ot()?-.75:0,0),new B(0,ot()?-1.1:0,0)];st={pos:new jo(Lt,!1,"catmullrom",.3),tgt:new jo(Gt,!1,"catmullrom",.3)}}let Mt=[[0,78],[.3,30],[.62,14],[1,148]],nt=(lt,Lt)=>{for(let Gt=1;Gt<lt.length;Gt++)if(Lt<=lt[Gt][0]){let[zt,Ot]=lt[Gt-1],[$t,Je]=lt[Gt],cn=(Lt-zt)/($t-zt);return pr(Ot,Je,cn*cn*(3-2*cn))}return lt[lt.length-1][1]},Tt=new Hu(i);Tt.setPixelRatio(n),Tt.setSize(innerWidth,innerHeight),Tt.addPass(new Vu(s,o));let re=new da(new Wt(innerWidth/2,innerHeight/2),.45,.5,.9);Tt.addPass(re);let Jt=new fa(_w);Tt.addPass(Jt),Tt.addPass(new Gu);let Be=new El,$e=new Wt;function He(lt,Lt){return $e.set(lt/innerWidth*2-1,-(Lt/innerHeight)*2+1),Be.setFromCamera($e,o),Be.ray.intersectsSphere(new Or(new B,1))}function Ie(){o.aspect=innerWidth/innerHeight,o.updateProjectionMatrix(),i.setSize(innerWidth,innerHeight,!1),Tt.setSize(innerWidth,innerHeight),re.resolution.set(innerWidth/2,innerHeight/2),Jt.uniforms.uAspect.value=innerWidth/innerHeight,K.mode==="intro"&&(K.cam.z=rt(),K.cam.y=K.cam.ty=dt()),K.mode==="scroll"&&it()}Jt.uniforms.uAspect.value=innerWidth/innerHeight;let Me=new Al,ze=new B,Ce=new B,Si=new B,Ui=new B,Ge=0;function Ze(){let lt=Me.getElapsedTime(),Lt=Math.min(.05,lt-Ge);Ge=lt;let Gt=K.pointer;Gt.sx+=(Gt.x-Gt.sx)*.05,Gt.sy+=(Gt.y-Gt.sy)*.05;let zt=K.sun.theta;if(K.mode==="scroll"&&(zt=nt(Mt,K.scroll.p)*_n),g.uSunDir.value.set(Math.sin(zt),Math.sin(K.sun.tilt),Math.cos(zt)).normalize(),K.mode==="scroll"&&st){let ft=K.scroll.p;st.pos.getPoint(ft,ze),st.tgt.getPoint(ft,Ce),o.position.copy(ze),o.fov=pr(ot()?55:40,ot()?42:32,Ln(0,.3,ft)),o.up.copy(ze).normalize().lerp(new B(0,1,0),Ln(0,.25,ft)).normalize(),o.lookAt(Ce)}else{let ft=K.cam,qt=K.mode==="intro"?1:0;o.position.set(ft.x+(Math.sin(lt*.13)*.05+Gt.sx*.25)*qt*ft.z*.1,ft.y+(Math.cos(lt*.11)*.04-Gt.sy*.18)*qt*ft.z*.1,ft.z),o.fov=ft.fov;let Rt=Ln(1.15,1.03,o.position.length());o.up.set(0,1,0).lerp(o.position.clone().normalize(),Rt*.98).normalize(),o.lookAt(ft.tx,ft.ty,ft.tz)}o.updateProjectionMatrix(),o.updateMatrixWorld();let Ot=o.position.length(),$t=2*Math.tan(o.fov*_n/2)/innerHeight;g.uExposure.value=K.mode==="scroll"?pr(K.fx.exposure,.9,Ln(0,.2,K.scroll.p)):K.fx.exposure,V.uniforms.uDetail.value=Ln(1.9,1.25,Ot),V.uniforms.uShadowAmt.value=K.mode==="scroll"?K.shadow.amt*(1-Ln(0,.08,K.scroll.p)):K.shadow.amt,w.scale.setScalar(1+2.4*$t*(Ot-1)),w.visible=Ot>1.35,w.material.uniforms.uA.value=Ln(1.35,1.9,Ot),W.material.opacity=K.moon.halo*(.55+.45*Ln(1.6,4,Ot));let Je=_t(K.earth.rise);J.position.copy(Je),At.position.copy(Je),xt.position.copy(Je),J.rotation.y+=5e-4,xt.scale.setScalar(ht+2.2*$t*o.position.distanceTo(Je)),R.uniforms.uOpacity.value=K.earth.show,At.material.opacity=K.earth.show,J.visible=At.visible=xt.visible=K.earth.show>.001;let cn=K.mode==="scroll"?K.clouds.a*Ln(.25,.4,K.scroll.p):K.clouds.a;Ui.set(0,0,-1).applyQuaternion(o.quaternion),ni.forEach(ft=>{let qt=ft.userData;ft.position.set(qt.x+Math.sin(lt*.05+qt.ph)*.35,qt.y+Math.sin(lt*.13+qt.ph)*.04,qt.z);let Rt=o.position.distanceTo(ft.position),ee=Si.copy(ft.position).sub(o.position).dot(Ui)>0?1:0;ft.material.opacity=cn*Ln(.6,1.8,Rt)*ee*.9,ft.visible=ft.material.opacity>.002});let Ke=K.mode==="scroll"?K.carpet.a*Ln(.8,.9,K.scroll.p):K.carpet.a;Ee.uniforms.uA.value=Ke,Ee.uniforms.uTime.value=lt,ie.visible=Ke>.002;let T=lt*.075%1,U=pr(-7.5,7.5,T);if(ie.position.set(U,-.42+Math.sin(lt*.9)*.08+U*.06,2.4),ie.rotation.set(-1.15+Math.sin(lt*1.1)*.05,.12,-.08+Math.sin(lt*.9+1)*.06),ie.updateMatrixWorld(),ie.visible)for(let ft=0;ft<2;ft++){let qt=ve;ve=(ve+1)%Ae,ze.set(-.5,(Math.random()-.5)*.6,0).applyMatrix4(ie.matrixWorld),Fe.set([ze.x,ze.y,ze.z],qt*3),F[qt]=1,ue.set([-.05-Math.random()*.1,-.05-Math.random()*.12,(Math.random()-.5)*.05],qt*3)}let $=!1;for(let ft=0;ft<Ae;ft++)F[ft]>0&&($=!0,F[ft]=Math.max(0,F[ft]-Lt*.55),Fe[ft*3]+=ue[ft*3]*Lt,Fe[ft*3+1]+=ue[ft*3+1]*Lt,Fe[ft*3+2]+=ue[ft*3+2]*Lt);Yt.attributes.position.needsUpdate=!0,Yt.attributes.aLife.needsUpdate=!0,pt.visible=$;let H=K.orbs.p,q=1-Math.pow(1-H,2.2),yt=pr(.075,0,q),Dt=q*Math.PI*6.2+.4,St=pr(.05,0,q);for(let ft=0;ft<2;ft++){let qt=Dt+ft*Math.PI,Rt=g.uOrbPos.value[ft].set(Q.x+Math.cos(qt)*yt,Q.y+Math.sin(qt)*yt*.85,Q.z+St+Math.sin(qt*2)*.002*(1-q));Xt[ft].position.copy(Rt);let ee=.9+.1*Math.sin(lt*9+ft*2);Xt[ft].material.opacity=K.orbs.show,Xt[ft].scale.setScalar(.012*ee*(.7+K.orbs.show*.3)),g.uOrbI.value[ft]=K.orbs.i*ee}if(C.material.opacity=K.burst.a,C.scale.setScalar(.004+K.burst.a*.05),G.scale.setScalar(1e-4+K.burst.ring*.33),M.uniforms.uA.value=(1-K.burst.ring)*(K.burst.ring>0?1.6:0),at){let ft=at.material.uniforms;ft.uProg.value=K.names.prog,ft.uTime.value=lt,ft.uDissolve.value=K.mode==="scroll"?Ln(0,.07,K.scroll.p):K.names.dissolve,at.visible=K.names.prog>0&&ft.uDissolve.value<1}Pt.uniforms.uTime.value=lt;let wt=_e.uniforms;wt.uTime.value=lt,wt.uHalf.value.set(Math.tan(o.fov*_n/2)*o.aspect,Math.tan(o.fov*_n/2)),wt.uAlpha.value=(K.mode==="scroll"?.55:1)*(1-K.fx.fade),re.strength=K.fx.bloom;let It=Jt.uniforms;It.uZoom.value=K.fx.zoom,It.uFlash.value=K.fx.flash,It.uFade.value=K.fx.fade,It.uVig.value=K.fx.vig,Tt.render()}return i.setAnimationLoop(Ze),{S:K,M:Q,renderer:i,camera:o,resize:Ie,hitMoon:He,buildNames:vt,buildScrollPath:it,introDist:rt,introY:dt,poses:{landPos:tt,landTarget:ut,landFov:()=>ot()?55:40},pause(lt){i.setAnimationLoop(lt?null:Ze)}}}var ai="#d9b56c";function $i(r,t,e,i=0){let n=e*.7654,s=[];for(let o=0;o<16;o++){let a=i+o*Math.PI/8-Math.PI/2,l=o%2?n:e;s.push(`${(r+Math.cos(a)*l).toFixed(2)},${(t+Math.sin(a)*l).toFixed(2)}`)}return s.join(" ")}function Mw(r,t,e,i,n){let s=1-n;return[s*s*s*r[0]+3*s*s*n*t[0]+3*s*n*n*e[0]+n*n*n*i[0],s*s*s*r[1]+3*s*s*n*t[1]+3*s*n*n*e[1]+n*n*n*i[1]]}function Dp(r,t,{spring:e=.42,inset:i=0,lobes:n=0,peak:s=.06}={}){let o=Math.max(t*e,r*.55)+i,a=[i,o],l=[i,o*.4],c=[r*.16+i*.5,i+t*s*.3],h=[r/2,i];if(!n){let p=[r-i,o],g=[r-i,o*.4],x=[r-(r*.16+i*.5),i+t*s*.3];return`M${i},${t} L${a} C${l} ${c} ${h} C${x} ${g} ${p} L${r-i},${t}`}let d=n,u=[];for(let p=0;p<=d;p++)u.push(Mw(a,l,c,h,p/d));let f=u.slice(0,-1).reverse().map(([p,g])=>[r-p,g]),m=u.concat(f),_=`M${i},${t} L${m[0][0].toFixed(1)},${m[0][1].toFixed(1)}`;for(let p=1;p<m.length;p++){let[g,x]=m[p-1],[E,y]=m[p],S=Math.hypot(E-g,y-x)/2*1.08;_+=` A${S.toFixed(1)},${S.toFixed(1)} 0 0 1 ${E.toFixed(1)},${y.toFixed(1)}`}return _+` L${r-i},${t}`}function bw(r,t,{lobes:e=11,glow:i=!0,fill:n=!1}={}){let s=Dp(r,t,{inset:1.5}),o=Dp(r,t,{inset:9}),a=Dp(r,t,{inset:17,lobes:e}),l=1.5;return`<svg viewBox="0 0 ${r} ${t}" width="${r}" height="${t}" fill="none" aria-hidden="true">
    <defs><linearGradient id="ag${r|0}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f3dc9e"/><stop offset=".5" stop-color="${ai}"/><stop offset="1" stop-color="#8a6a2e" stop-opacity=".0"/></linearGradient>
      <linearGradient id="af${r|0}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a2f8f" stop-opacity=".88"/><stop offset=".38" stop-color="#16195e" stop-opacity=".93"/><stop offset="1" stop-color="#0a0d38" stop-opacity=".96"/></linearGradient></defs>
    ${n?`<path d="${s} Z" fill="url(#af${r|0})"/>`:""}
    <path class="draw" d="${s}" stroke="url(#ag${r|0})" stroke-width="1.6"${i?' filter="drop-shadow(0 0 6px rgba(217,181,108,.55))"':""}/>
    <path class="draw" d="${o}" stroke="url(#ag${r|0})" stroke-width=".7" opacity=".55"/>
    <path class="draw" d="${a}" stroke="url(#ag${r|0})" stroke-width="1.1"/>
    <polygon class="pop" points="${$i(r/2,l+2,7)}" fill="#16195e" stroke="${ai}" stroke-width="1.1" transform="translate(0,-10)"/>
    <circle class="pop" cx="${r/2}" cy="${l-8}" r="1.6" fill="${ai}"/>
  </svg>`}function Tw(){let r=["#1d4f8f","#0f6b57","#a8462a","#0f6b57"],t="<svg xmlns='http://www.w3.org/2000/svg' width='240' height='60' viewBox='0 0 240 60'><rect width='240' height='60' fill='#141a5c'/>";for(let e=0;e<4;e++){let i=30+e*60;t+=`<polygon points='${$i(i,30,25)}' fill='${r[e]}' stroke='${ai}' stroke-width='1.2'/>`,t+=`<polygon points='${$i(i,30,11,Math.PI/8)}' fill='#efe4cc' stroke='${ai}' stroke-width='.8'/>`,t+=`<circle cx='${i}' cy='30' r='3' fill='${r[(e+2)%4]}'/>`,t+=`<polygon points='${i+30},18 ${i+36},30 ${i+30},42 ${i+24},30' fill='#efe4cc' stroke='${ai}' stroke-width='.8'/>`,t+=`<polygon points='${i},-6 ${i+6},2 ${i},10 ${i-6},2' fill='${ai}' opacity='.55'/><polygon points='${i},50 ${i+6},58 ${i},66 ${i-6},58' fill='${ai}' opacity='.55'/>`}return t+=`<line x1='0' y1='.6' x2='240' y2='.6' stroke='${ai}'/><line x1='0' y1='59.4' x2='240' y2='59.4' stroke='${ai}'/></svg>`,`url("data:image/svg+xml,${encodeURIComponent(t)}")`}function ww(r=.09){let t=`<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='${ai}' stroke-width='.8' opacity='${r}'>
    <polygon points='${$i(60,60,34)}'/><polygon points='${$i(60,60,16,Math.PI/8)}'/>
    <polygon points='${$i(0,0,34)}'/><polygon points='${$i(120,0,34)}'/><polygon points='${$i(0,120,34)}'/><polygon points='${$i(120,120,34)}'/>
    <path d='M60 26 L60 0 M60 94 L60 120 M26 60 L0 60 M94 60 L120 60'/></g></svg>`;return`url("data:image/svg+xml,${encodeURIComponent(t)}")`}function Ew(){return`<svg viewBox="0 0 360 30" fill="none" aria-hidden="true">
    <defs><linearGradient id="dl" x1="0" x2="1"><stop offset="0" stop-color="${ai}" stop-opacity="0"/><stop offset="1" stop-color="${ai}"/></linearGradient>
    <linearGradient id="dr" x1="1" x2="0"><stop offset="0" stop-color="${ai}" stop-opacity="0"/><stop offset="1" stop-color="${ai}"/></linearGradient></defs>
    <path class="draw" d="M8 15 H146" stroke="url(#dl)" stroke-width="1"/><path class="draw" d="M352 15 H214" stroke="url(#dr)" stroke-width="1"/>
    <polygon class="pop" points="152,15 158,10 164,15 158,20" fill="${ai}"/><polygon class="pop" points="208,15 202,10 196,15 202,20" fill="${ai}"/>
    <polygon class="pop spin" points="${$i(180,15,12)}" stroke="${ai}" stroke-width="1.2" fill="#16195e"/>
    <polygon class="pop" points="${$i(180,15,5,Math.PI/8)}" fill="${ai}"/>
  </svg>`}function Aw(){return`<svg viewBox="0 0 60 60" fill="none" aria-hidden="true"><path d="M2 58 V18 Q2 2 18 2 H58" stroke="${ai}" stroke-width="1.2"/>
    <path d="M8 58 V22 Q8 8 22 8 H58" stroke="${ai}" stroke-width=".6" opacity=".6"/>
    <polygon points="${$i(15,15,6)}" fill="${ai}"/></svg>`}function Q_(r=document){r.querySelectorAll("[data-divider]").forEach(i=>{i.innerHTML=Ew()}),r.querySelectorAll("[data-corners]").forEach(i=>{["tl","tr","bl","br"].forEach(n=>{let s=document.createElement("span");s.className=`corner ${n}`,s.innerHTML=Aw(),i.appendChild(s)})}),document.documentElement.style.setProperty("--zellige",Tw()),document.documentElement.style.setProperty("--khatam",ww());let t=()=>r.querySelectorAll("[data-arch]").forEach(i=>{let n=i.getBoundingClientRect();n.width&&(i.innerHTML=bw(Math.round(n.width),Math.round(n.height),{lobes:+(i.dataset.lobes||11),fill:"fill"in i.dataset}))});t();let e;return addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(t,150)}),{arches:t}}ae.registerPlugin(ne,Vs);var we=(r,t=document)=>t.querySelector(r),vn=(r,t=document)=>[...t.querySelectorAll(r)],jn=window.CONFIG||{},Np=Math.PI/180,_a=matchMedia("(prefers-reduced-motion: reduce)").matches,sv=matchMedia("(pointer: coarse)").matches||innerWidth<760,j_=r=>new Promise(t=>setTimeout(t,r));"scrollRestoration"in history&&(history.scrollRestoration="manual");scrollTo(0,0);document.documentElement.style.setProperty("--star",`url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'><polygon points='${$i(25,25,22)}' fill='none' stroke='#d9b56c' stroke-width='1.5'/><polygon points='${$i(25,25,9,Math.PI/8)}' fill='#d9b56c'/></svg>`)}")`);var Kl=new $g({lerp:.085,smoothWheel:!0});Kl.stop();Kl.on("scroll",ne.update);ae.ticker.add(r=>Kl.raf(r*1e3));ae.ticker.lagSmoothing(0);var Zl=we("#ldStar");Zl.setAttribute("points",$i(50,50,40));var ov=Zl.getTotalLength?Zl.getTotalLength():400;Zl.style.strokeDasharray=ov;var qu=0;function Up(r){ae.to({v:qu},{v:r,duration:.5,onUpdate(){qu=this.targets()[0].v,Zl.style.strokeDashoffset=ov*(1-qu),we(".ld-pct").textContent=Math.round(qu*100)}})}Up(.02);var xn=we("#music"),tv=!1,ma=null,to=null,Ms=!1,av=jn.volume??.55;jn.musique&&(xn.addEventListener("loadedmetadata",()=>{tv=!0,we(".sound-hint").hidden=!1},{once:!0}),xn.addEventListener("error",()=>{tv=!1,we(".sound-hint").hidden=!0,we("#sound").hidden=!0},{once:!0}),xn.src=jn.musique,xn.load());var Jl={v:0};function Op(){ma?ma.gain.value=Jl.v:xn.volume=Math.min(1,Jl.v)}function lv(){if(!jn.musique||xn.error)return;try{let t=window.AudioContext||window.webkitAudioContext;if(t&&!to){to=new t;let e=to.createMediaElementSource(xn);ma=to.createGain(),ma.gain.value=0,e.connect(ma).connect(to.destination)}to&&to.resume()}catch{ma=null}Jl.v=0,Op();let r=xn.play();r&&r.then(()=>{we("#sound").hidden=!1,ae.to(Jl,{v:av,duration:5,ease:"sine.inOut",onUpdate:Op})}).catch(()=>{})}we("#sound").addEventListener("click",()=>{Ms=!Ms,we("#sound").classList.toggle("off",Ms),we("#sound").setAttribute("aria-label",Ms?"Remettre le son":"Couper le son"),ae.to(Jl,{v:Ms?0:av,duration:1.2,ease:"sine.inOut",onUpdate:Op,onStart(){Ms||xn.play().catch(()=>{})},onComplete(){Ms&&xn.pause()}})});document.addEventListener("visibilitychange",()=>{!xn.src||Ms||xn.paused===document.hidden||(document.hidden?xn.pause():va&&xn.play().catch(()=>{}))});var ga=we("#cursor");if(matchMedia("(pointer: fine)").matches&&!_a){document.body.classList.add("has-cursor");let r=ae.quickTo(ga,"x",{duration:.35,ease:"power3"}),t=ae.quickTo(ga,"y",{duration:.35,ease:"power3"});addEventListener("pointermove",e=>{r(e.clientX),t(e.clientY)}),document.addEventListener("pointerover",e=>{e.target.closest("a,button,summary")&&ga.classList.add("big")}),document.addEventListener("pointerout",e=>{e.target.closest("a,button,summary")&&ga.classList.remove("big")})}var cv=(()=>{let r=we("#magic"),t=r.getContext("2d"),e=we("#shooting"),i=e.getContext("2d"),n=0,s=0,o=Math.min(devicePixelRatio||1,2),a=[],l=[],c=()=>{n=innerWidth,s=innerHeight,[r,e].forEach(_=>{_.width=n*o,_.height=s*o}),t.setTransform(o,0,0,o,0,0),i.setTransform(o,0,0,o,0,0)};c(),addEventListener("resize",c);let h=["#fff3c4","#ffd27a","#ffb3e1","#bfe3ff","#ffffff"],d=(_,p,g=1,x=1)=>{for(let E=0;E<g&&a.length<260;E++){let y=Math.random()*Math.PI*2,S=(.3+Math.random()*1.6)*x;a.push({x:_,y:p,vx:Math.cos(y)*S,vy:Math.sin(y)*S-.4*x,life:1,s:2+Math.random()*4.5,c:h[Math.random()*h.length|0],r:Math.random()*3})}},u=(_,p,g,x,E)=>{_.save(),_.translate(p,g),_.rotate(E),_.beginPath();for(let y=0;y<8;y++){let S=y%2?x*.28:x,w=y*Math.PI/4;_.lineTo(Math.cos(w)*S,Math.sin(w)*S)}_.closePath(),_.fill(),_.restore()},f=-1,m=-1;return addEventListener("pointermove",_=>{if(_a)return;let p=Math.hypot(_.clientX-f,_.clientY-m);p>6&&(d(_.clientX,_.clientY,Math.min(3,1+p/25|0),.6),f=_.clientX,m=_.clientY)},{passive:!0}),addEventListener("pointerdown",_=>{_a||d(_.clientX,_.clientY,10,1.4)},{passive:!0}),ae.ticker.add(()=>{t.clearRect(0,0,n,s),t.globalCompositeOperation="lighter";for(let _=a.length-1;_>=0;_--){let p=a[_];if(p.x+=p.vx,p.y+=p.vy,p.vy+=.03,p.vx*=.98,p.life-=.018,p.r+=.05,p.life<=0){a.splice(_,1);continue}t.globalAlpha=p.life,t.fillStyle=p.c,t.shadowColor=p.c,t.shadowBlur=8,u(t,p.x,p.y,p.s*(.4+p.life*.6),p.r)}t.globalAlpha=1,t.shadowBlur=0,i.clearRect(0,0,n,s),!_a&&Math.random()<.007&&l.length<2&&l.push({x:Math.random()*n*.8+n*.2,y:Math.random()*s*.35,vx:-(7+Math.random()*6),vy:3+Math.random()*2.5,life:1});for(let _=l.length-1;_>=0;_--){let p=l[_];if(p.x+=p.vx,p.y+=p.vy,p.life-=.016,p.life<=0){l.splice(_,1);continue}let g=i.createLinearGradient(p.x,p.y,p.x-p.vx*16,p.y-p.vy*16);g.addColorStop(0,`rgba(255,248,225,${p.life})`),g.addColorStop(1,"rgba(255,190,240,0)"),i.strokeStyle=g,i.lineWidth=2,i.lineCap="round",i.beginPath(),i.moveTo(p.x,p.y),i.lineTo(p.x-p.vx*16,p.y-p.vy*16),i.stroke(),i.fillStyle=`rgba(255,255,255,${p.life})`,u(i,p.x,p.y,5,p.life*4)}}),{burst:(_,p,g=40)=>d(_,p,g,2.4)}})();vn("[data-twinkle]").forEach(r=>{for(let t=0;t<4;t++){let e=document.createElement("i");e.className="tw",e.style.left=`${8+Math.random()*84}%`,e.style.top=`${Math.random()*90}%`,e.style.animationDelay=`${(Math.random()*3).toFixed(2)}s`,e.style.setProperty("--s",(.6+Math.random()*.8).toFixed(2)),r.appendChild(e)}});function Cw(){let r=jn.date?new Date(jn.date):null,t=r&&!isNaN(r);we("#iDate").textContent=t?r.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"}):"Bient\xF4t, in sh\xE2\u2019 All\xE2h",we("#iHeure").textContent=t?r.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}).replace(":","h"):"\xC0 venir";let e=[jn.lieu,jn.adresse].filter(Boolean);if(we("#iLieu").textContent=e.length?e.join(" \u2014 "):"\xC0 venir",e.length){let a=we("#bMaps");a.href="https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(e.join(", ")),a.hidden=!1}if(jn.whatsapp){let a=we("#bRsvp");a.href=`https://wa.me/${String(jn.whatsapp).replace(/\D/g,"")}?text=${encodeURIComponent(jn.messageRsvp||"")}`,a.hidden=!1}if(!t)return;let i=we("#bCal");i.hidden=!1,i.addEventListener("click",()=>{let a=h=>h.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),l=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//shayma-bilal//fr","BEGIN:VEVENT",`UID:${Date.now()}@shayma-bilal`,`DTSTAMP:${a(new Date)}`,`DTSTART:${a(r)}`,`DTEND:${a(new Date(r.getTime()+144e5))}`,"SUMMARY:Fian\xE7ailles de Shayma & Bilal",`LOCATION:${e.join(", ").replace(/,/g,"\\,")}`,"END:VEVENT","END:VCALENDAR"].join(`\r
`),c=document.createElement("a");c.href=URL.createObjectURL(new Blob([l],{type:"text/calendar"})),c.download="fiancailles-shayma-bilal.ics",c.click()});let n=we("#countdown"),s=(a,l)=>{let c=we(a),h=String(l);c.textContent!==h&&(c.textContent=h,ae.fromTo(c,{y:-8,opacity:.3},{y:0,opacity:1,duration:.5,ease:"power3.out"}))},o=()=>{let a=r-Date.now();if(n.hidden=!1,a<=0)return n.innerHTML='<p class="accent">C\u2019est le grand jour \u2728</p>',!0;s("#cdJ",Math.floor(a/864e5)),s("#cdH",Math.floor(a/36e5)%24),s("#cdM",Math.floor(a/6e4)%60),s("#cdS",Math.floor(a/1e3)%60)};if(!o()){let a=setInterval(()=>{o()&&clearInterval(a)},1e3)}}function hv(r,{duration:t=2.2,delay:e=0}={}){let i=ae.timeline({delay:e}),n=vn(".draw",r);return n.forEach(s=>{let o=s.getTotalLength();s.style.strokeDasharray=o,s.style.strokeDashoffset=o}),i.to(n,{strokeDashoffset:0,duration:t,ease:"power2.inOut",stagger:.18}),i.from(vn(".pop",r),{scale:0,opacity:0,transformOrigin:"50% 50%",duration:.8,ease:"back.out(2)",stagger:.08},t*.6),i}var va=!1,ev=!1,Fp=null,Ye=null;async function Rw(){if(Q_(),Cw(),!J_())return rv();try{Ye=await K_(we("#gl"),{mobile:sv,onProgress:r=>Up(.05+r*.9)})}catch(r){return console.error(r),rv()}await Promise.race([Promise.all([document.fonts.ready,document.fonts.load('200px "Great Vibes"'),document.fonts.load('40px "Amiri Quran"')]),j_(3500)]),Ye.buildNames(),Up(1),await j_(550),addEventListener("resize",Pw),Iw()}var iv=innerWidth/innerHeight<.9;function Pw(){if(!Ye)return;Ye.resize();let r=innerWidth/innerHeight<.9;r!==iv&&Ye.S.names.prog===0&&Ye.buildNames(),iv=r}function Iw(){let r=Ye.S,t=Vs.create(".qamar-lat",{type:"chars"}),e=ae.timeline();e.to("#loader",{autoAlpha:0,duration:1.1,ease:"power2.inOut"}).add(()=>document.body.classList.remove("loading")).to(r.fx,{fade:0,duration:2.4,ease:"power2.out"},.2).fromTo(r.sun,{theta:122*Np},{theta:35*Np,duration:4.6,ease:"power2.inOut"},.2).to(r.moon,{halo:1,duration:3},1.8).to(r.clouds,{a:1,duration:3.5,ease:"power2.out"},1.2).to(r.carpet,{a:1,duration:2},3.2).fromTo(r.cam,{z:Ye.introDist()*1.4},{z:Ye.introDist(),duration:5,ease:"expo.out"},.2).add(hv(we(".intro-arch"),{duration:2.6}),1.4).from(".kicker",{opacity:0,y:16,duration:1.2,ease:"power3.out"},2.2).from(".qamar",{opacity:0,y:30,scale:.94,filter:"blur(14px)",duration:1.8,ease:"expo.out"},2.4).from(t.chars,{opacity:0,y:12,filter:"blur(6px)",stagger:.07,duration:1,ease:"power3.out"},2.9).from(".enter",{opacity:0,y:24,duration:1.2,ease:"expo.out"},3.4).from(".sound-hint",{opacity:0,duration:1},3.9).add(()=>{ae.to(".enter-ring",{scale:1.08,opacity:.55,duration:1.4,ease:"sine.inOut",yoyo:!0,repeat:-1}),Lw()},3.6),_a&&e.progress(1)}function Lw(){let r=we("#gl"),t=e=>{if(Ye.S.pointer.x=e.clientX/innerWidth*2-1,Ye.S.pointer.y=e.clientY/innerHeight*2-1,va)return;let i=Ye.hitMoon(e.clientX,e.clientY);r.style.cursor=i?"pointer":"",ga.classList.toggle("big",i),i&&Math.random()<.25&&cv.burst(e.clientX,e.clientY,1)};addEventListener("pointermove",t),r.addEventListener("click",e=>{Ye.hitMoon(e.clientX,e.clientY)&&nv()}),we("#enter").addEventListener("click",nv)}function nv(){if(va)return;va=!0,lv(),navigator.vibrate?.(18),cv.burst(innerWidth/2,innerHeight/2,70),ae.to(Ye.S.carpet,{a:0,duration:.8}),ga.classList.remove("big"),ae.killTweensOf(".enter-ring");let r=Ye.S,t=Ye.poses,e=Vs.create(".ar-hero",{type:"words"});we("#skip").hidden=!1,ae.from("#skip",{opacity:0,duration:1,delay:1.5});let i=ae.timeline({onComplete:uv});Fp=i,i.to(".intro-top > *",{y:-34,opacity:0,filter:"blur(10px)",stagger:.07,duration:.8,ease:"power2.in"},0).to(".intro-bottom",{y:34,opacity:0,duration:.6,ease:"power2.in"},0).to(".intro-arch",{scale:1.35,opacity:0,duration:1.6,ease:"power2.in"},.05).set("#intro",{display:"none"},1.7).to(r.cam,{z:Ye.introDist()*1.07,duration:.7,ease:"power2.out"},0).to(r.cam,{y:0,ty:0,z:1.3,fov:56,duration:3.1,ease:"expo.inOut"},.6).to(r.fx,{zoom:.17,duration:1.5,ease:"power3.in"},1).to(r.fx,{zoom:0,duration:1.7,ease:"power3.out"},2.5).to(r.moon,{halo:0,duration:1.4},1).to(r.sun,{theta:78*Np,duration:6.5,ease:"sine.inOut"},.8).to(r.cam,{x:t.landPos.x,y:t.landPos.y,z:t.landPos.z,tx:t.landTarget.x,ty:t.landTarget.y,tz:t.landTarget.z,fov:t.landFov(),duration:3.8,ease:"power3.inOut"},3.3).to(r.shadow,{amt:1,duration:2.6,ease:"power1.inOut"},4.2).to(r.fx,{exposure:.88,bloom:.3,duration:3,ease:"power1.inOut"},4).to(r.clouds,{a:0,duration:1.5},3.6).to(".frame-fixed",{opacity:1,duration:2},5.8).set(r.earth,{show:1},5).fromTo(r.earth,{rise:0},{rise:1,duration:7.5,ease:"power1.out"},5).to(".bism",{opacity:1,duration:1.4,ease:"power2.out"},6.6).set(".ar-hero",{opacity:1},7).from(e.words,{opacity:0,y:24,filter:"blur(12px)",duration:1.6,stagger:.28,ease:"expo.out"},7).fromTo(".fr-hero",{opacity:0,y:14},{opacity:1,y:0,duration:1.4,ease:"power3.out"},7.9).to(".st-verse .ref",{opacity:.9,duration:1.2},8.4).to(r.orbs,{show:1,i:1.5,duration:1.3,ease:"power2.out"},8.6).fromTo(r.orbs,{p:0},{p:1,duration:4.6,ease:"power1.in"},8.6).to(".st-verse",{opacity:0,y:-24,filter:"blur(8px)",duration:1.1,ease:"power2.in"},12).to(r.orbs,{i:10,duration:.25,ease:"power2.in"},12.95).to(r.fx,{flash:.6,bloom:1.9,duration:.2,ease:"power2.in"},13.05).to(r.burst,{a:1,duration:.15},13.1).add(()=>navigator.vibrate?.([25,40,35]),13.15).to(r.orbs,{i:0,show:0,duration:1.2,ease:"power2.out"},13.25).to(r.fx,{flash:0,duration:1.5,ease:"power2.out"},13.25).to(r.fx,{bloom:.38,duration:3,ease:"power2.out"},13.3).to(r.burst,{a:0,duration:1.8,ease:"power2.out"},13.3).fromTo(r.burst,{ring:0},{ring:1,duration:2.6,ease:"expo.out"},13.15).fromTo(r.names,{prog:0},{prog:1,duration:3.3,ease:"none"},13.15).fromTo(".sub1",{opacity:0,y:16,letterSpacing:".6em"},{opacity:1,y:0,letterSpacing:".32em",duration:1.8,ease:"expo.out"},15.4).fromTo(".sub2",{opacity:0,y:12},{opacity:1,y:0,duration:1.4,ease:"power3.out"},15.9).to(".scroll-cue",{opacity:1,duration:1.2},16.6).set("#skip",{display:"none"},16.6),_a&&i.progress(1)}we("#skip").addEventListener("click",()=>Fp&&Fp.progress(1));function uv(){ev||(ev=!0,document.body.classList.remove("locked"),Ye&&(Ye.S.mode="scroll",Ye.buildScrollPath(),Ye.S.clouds.a=1,Ye.S.carpet.a=1),Kl.start(),Dw(),ne.refresh())}function Dw(){Ye&&ae.to(Ye.S.scroll,{p:1,ease:"none",scrollTrigger:{trigger:"#content",start:"top top",end:"bottom bottom",scrub:1.4}}),ae.to(".st-sub, .scroll-cue",{opacity:0,y:-50,ease:"none",stagger:.02,scrollTrigger:{trigger:".landing-space",start:"top top",end:"45% top",scrub:!0}});let r=we(".progress");ae.to(r,{opacity:sv?0:1,duration:1}),ne.create({trigger:"#content",start:"top top",end:"bottom bottom",onUpdate:s=>{ae.set(".pg-line",{scaleY:s.progress}),ae.set(".pg-star",{y:s.progress*r.offsetHeight-4})}}),vn(".split-fr").forEach(s=>Vs.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit:o=>ae.from(o.lines,{yPercent:110,opacity:0,duration:1.3,stagger:.1,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 86%",once:!0}})})),vn(".split-ar").forEach(s=>{let o=Vs.create(s,{type:"words",wordsClass:"w-ar"});ae.from(o.words,{opacity:0,y:26,filter:"blur(10px)",duration:1.5,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}})}),vn(".rv").forEach(s=>ae.from(s,{opacity:0,y:34,filter:"blur(6px)",duration:1.3,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 88%",once:!0}})),vn("#content [data-arch], #content [data-divider]").forEach(s=>{let o=hv(s,{duration:s.matches("[data-divider]")?1.6:2.6});o.pause(),ne.create({trigger:s,start:"top 82%",once:!0,onEnter:()=>o.play()})}),vn("#content .divider .spin").forEach(s=>ae.to(s,{rotation:360,transformOrigin:"50% 50%",duration:22,repeat:-1,ease:"none"})),ae.to(".pair-star",{rotation:360,duration:30,repeat:-1,ease:"none"}),vn(".card, .verse-frame").forEach(s=>ae.fromTo(s,{y:80,scale:.94,opacity:0},{y:0,scale:1,opacity:1,ease:"expo.out",duration:1.6,scrollTrigger:{trigger:s,start:"top 92%",once:!0}})),vn(".rings i").forEach((s,o)=>ae.from(s,{x:o%2?40:-40,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 85%",once:!0}}));let t=vn(".hcard");t.forEach((s,o)=>{s.style.setProperty("--i",o),ae.from(s,{y:120,rotateX:-12,opacity:0,duration:1.4,ease:"expo.out",transformPerspective:900,scrollTrigger:{trigger:s,start:"top 95%",once:!0}}),o<t.length-1&&ae.to(s,{scale:.92,opacity:.35,ease:"none",scrollTrigger:{trigger:t[o+1],start:"top 85%",end:"top 20%",scrub:!0}})}),vn(".lanterns").forEach(s=>ae.from(vn(".lantern",s),{yPercent:-120,duration:2.2,ease:"elastic.out(1,0.45)",stagger:.18,scrollTrigger:{trigger:s.parentElement,start:"top 75%",once:!0}}));let e=vn(".lantern").map(s=>ae.quickSetter(s,"rotation","deg")),i=0,n=0;Kl.on("scroll",s=>{i=s.velocity}),ae.ticker.add(s=>{n+=(Math.max(-16,Math.min(16,i*.7))-n)*.06,i*=.9,e.forEach((o,a)=>o(Math.sin(s*1.2+a*1.7)*2.5-n))})}function rv(){document.body.classList.add("no-gl"),we("#fallback").hidden=!1,ae.to("#loader",{autoAlpha:0,duration:.8}),document.body.classList.remove("loading"),we(".frame-fixed").style.opacity=1,we("#enter").addEventListener("click",()=>{if(va)return;va=!0,lv(),ae.to("#intro, #fallback",{autoAlpha:0,duration:1});let r=document.createElement("p");r.className="script huge",r.textContent="Shayma & Bilal",r.style.cssText="position:absolute;left:0;right:0;top:44%;text-align:center;font-size:clamp(3rem,13vw,7rem)",we("#stage").appendChild(r),ae.to(".bism, .ar-hero, .fr-hero, .st-verse .ref, .sub1, .sub2, .scroll-cue",{opacity:1,duration:1.2,stagger:.15}),uv()})}Rw();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
