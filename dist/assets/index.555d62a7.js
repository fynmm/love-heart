(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();function g(){}function dt(n,t){for(const e in t)n[e]=t[e];return n}function ht(n){return n()}function it(){return Object.create(null)}function I(n){n.forEach(ht)}function nt(n){return typeof n=="function"}function E(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let G;function st(n,t){return G||(G=document.createElement("a")),G.href=t,n===G.href}function bt(n){return Object.keys(n).length===0}function pt(n,...t){if(n==null)return g;const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function ct(n,t,e){n.$$.on_destroy.push(pt(t,e))}function xt(n,t,e,r){if(n){const i=mt(n,t,e,r);return n[0](i)}}function mt(n,t,e,r){return n[1]&&r?dt(e.ctx.slice(),n[1](r(t))):e.ctx}function kt(n,t,e,r){if(n[2]&&r){const i=n[2](r(e));if(t.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(t.dirty.length,i.length);for(let c=0;c<s;c+=1)o[c]=t.dirty[c]|i[c];return o}return t.dirty|i}return t.dirty}function At(n,t,e,r,i,o){if(i){const s=mt(t,e,r,o);n.p(s,i)}}function Pt(n){if(n.ctx.length>32){const t=[],e=n.ctx.length/32;for(let r=0;r<e;r++)t[r]=-1;return t}return-1}function P(n,t){n.appendChild(t)}function A(n,t,e){n.insertBefore(t,e||null)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function _(n){return document.createElement(n)}function rt(n){return document.createTextNode(n)}function D(){return rt(" ")}function gt(){return rt("")}function St(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function m(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function qt(n){return Array.from(n.childNodes)}function Lt(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function at(n,t){return new n(t)}let j;function B(n){j=n}function zt(){if(!j)throw new Error("Function called outside component initialization");return j}function Ct(n){zt().$$.on_mount.push(n)}const O=[],lt=[],V=[],ut=[],Et=Promise.resolve();let Q=!1;function Rt(){Q||(Q=!0,Et.then(wt))}function Z(n){V.push(n)}const J=new Set;let K=0;function wt(){const n=j;do{for(;K<O.length;){const t=O[K];K++,B(t),Tt(t.$$)}for(B(null),O.length=0,K=0;lt.length;)lt.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];J.has(e)||(J.add(e),e())}V.length=0}while(O.length);for(;ut.length;)ut.pop()();Q=!1,J.clear(),B(n)}function Tt(n){if(n.fragment!==null){n.update(),I(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Z)}}const Y=new Set;let F;function _t(){F={r:0,c:[],p:F}}function vt(){F.r||I(F.c),F=F.p}function v(n,t){n&&n.i&&(Y.delete(n),n.i(t))}function b(n,t,e,r){if(n&&n.o){if(Y.has(n))return;Y.add(n),F.c.push(()=>{Y.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}function Ft(n,t){const e={},r={},i={$$scope:1};let o=n.length;for(;o--;){const s=n[o],c=t[o];if(c){for(const f in s)f in c||(r[f]=1);for(const f in c)i[f]||(e[f]=c[f],i[f]=1);n[o]=c}else for(const f in s)i[f]=1}for(const s in r)s in e||(e[s]=void 0);return e}function Ht(n){return typeof n=="object"&&n!==null?n:{}}function z(n){n&&n.c()}function S(n,t,e,r){const{fragment:i,after_update:o}=n.$$;i&&i.m(t,e),r||Z(()=>{const s=n.$$.on_mount.map(ht).filter(nt);n.$$.on_destroy?n.$$.on_destroy.push(...s):I(s),n.$$.on_mount=[]}),o.forEach(Z)}function q(n,t){const e=n.$$;e.fragment!==null&&(I(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Nt(n,t){n.$$.dirty[0]===-1&&(O.push(n),Rt(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function H(n,t,e,r,i,o,s,c=[-1]){const f=j;B(n);const a=n.$$={fragment:null,ctx:[],props:o,update:g,not_equal:i,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:it(),dirty:c,skip_bound:!1,root:t.target||f.$$.root};s&&s(a.root);let l=!1;if(a.ctx=e?e(n,t.props||{},(u,d,...h)=>{const p=h.length?h[0]:d;return a.ctx&&i(a.ctx[u],a.ctx[u]=p)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](p),l&&Nt(n,u)),d}):[],a.update(),l=!0,I(a.before_update),a.fragment=r?r(a.ctx):!1,t.target){if(t.hydrate){const u=qt(t.target);a.fragment&&a.fragment.l(u),u.forEach($)}else a.fragment&&a.fragment.c();t.intro&&v(n.$$.fragment),S(n,t.target,t.anchor,t.customElement),wt()}B(f)}class N{$destroy(){q(this,1),this.$destroy=g}$on(t,e){if(!nt(e))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const i=r.indexOf(e);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!bt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const M=[];function Mt(n,t){return{subscribe:X(n,t).subscribe}}function X(n,t=g){let e;const r=new Set;function i(c){if(E(n,c)&&(n=c,e)){const f=!M.length;for(const a of r)a[1](),M.push(a,n);if(f){for(let a=0;a<M.length;a+=2)M[a][0](M[a+1]);M.length=0}}}function o(c){i(c(n))}function s(c,f=g){const a=[c,f];return r.add(a),r.size===1&&(e=t(i)||g),c(n),()=>{r.delete(a),r.size===0&&(e(),e=null)}}return{set:i,update:o,subscribe:s}}function It(n,t,e){const r=!Array.isArray(n),i=r?[n]:n,o=t.length<2;return Mt(e,s=>{let c=!1;const f=[];let a=0,l=g;const u=()=>{if(a)return;l();const h=t(r?f[0]:f,s);o?s(h):l=nt(h)?h:g},d=i.map((h,p)=>pt(h,w=>{f[p]=w,a&=~(1<<p),c&&u()},()=>{a|=1<<p}));return c=!0,u(),function(){I(d),l()}})}const tt=X(window.location.pathname),et=X(null);It(et,n=>n?n.params||{}:{});const yt=(()=>{function n(){return new URL(window.location)}const{subscribe:t,set:e}=X(n());return{subscribe:t,set(r){e(r)},setCurrent(){e(n())}}})();function Ot(n){window.history.pushState({},"",n);const t=new URL(n,window.location.origin);tt.set(t.pathname),yt.set(t)}function Bt(n){let t,e,r;const i=[n[0]];var o=n[1];function s(c){let f={};for(let a=0;a<i.length;a+=1)f=dt(f,i[a]);return{props:f}}return o&&(t=at(o,s())),{c(){t&&z(t.$$.fragment),e=gt()},m(c,f){t&&S(t,c,f),A(c,e,f),r=!0},p(c,[f]){const a=f&1?Ft(i,[Ht(c[0])]):{};if(o!==(o=c[1])){if(t){_t();const l=t;b(l.$$.fragment,1,0,()=>{q(l,1)}),vt()}o?(t=at(o,s()),z(t.$$.fragment),v(t.$$.fragment,1),S(t,e.parentNode,e)):t=null}else o&&t.$set(a)},i(c){r||(t&&v(t.$$.fragment,c),r=!0)},o(c){t&&b(t.$$.fragment,c),r=!1},d(c){c&&$(e),t&&q(t,c)}}}function Ut(n,t,e){let r,i,o,s;ct(n,et,l=>e(3,o=l)),ct(n,tt,l=>e(4,s=l));let{routes:c=[]}=t;Ct(()=>{const l=u=>{tt.set(window.location.pathname),yt.setCurrent()};return window.addEventListener("popstate",l),()=>{window.removeEventListener("popstate",l)}});async function f(l){const u=a(l);if(typeof u.resolver=="function"){const d=await Promise.resolve(u.resolver(u));if(d.redirect){Ot(d.redirect);return}u.component=d.default||d}et.set(u)}function a(l){for(const u of c){const d=new RegExp(`^${u.path}$`,"i"),h=l.match(d);if(h)return Object.assign({},u,{params:h.groups,props:{}})}throw new Error(`No route for ${l} exists.`)}return n.$$set=l=>{"routes"in l&&e(2,c=l.routes)},n.$$.update=()=>{if(n.$$.dirty&4&&Array.isArray(c)===!1)throw new Error(`routes should be Array, given: ${typeof c}`);n.$$.dirty&16&&f(s),n.$$.dirty&8&&e(1,r=o&&o.component||null),n.$$.dirty&8&&e(0,i=o&&o.props||{})},[i,r,c,o,s]}class Dt extends N{constructor(t){super(),H(this,t,Ut,Bt,E,{routes:2})}}function jt(n){let t,e,r,i="\u2764\uFE0F "+n[0]+" \u2764\uFE0F",o,s,c,f,a;const l=n[2].default,u=xt(l,n,n[1],null);return{c(){t=_("div"),e=_("div"),r=_("h1"),o=rt(i),s=D(),c=_("hr"),f=D(),u&&u.c(),m(r,"class","py-4 font-mono text-pink-400 dark:text-white"),m(c,"class","py-4 border-pink-100 dark:border-gray-500"),m(e,"class","px-6 mx-auto max-w-screen-lg"),m(t,"class","h-screen dark:bg-gray-900")},m(d,h){A(d,t,h),P(t,e),P(e,r),P(r,o),P(e,s),P(e,c),P(e,f),u&&u.m(e,null),a=!0},p(d,[h]){(!a||h&1)&&i!==(i="\u2764\uFE0F "+d[0]+" \u2764\uFE0F")&&Lt(o,i),u&&u.p&&(!a||h&2)&&At(u,l,d,d[1],a?kt(l,d[1],h,null):Pt(d[1]),null)},i(d){a||(v(u,d),a=!0)},o(d){b(u,d),a=!1},d(d){d&&$(t),u&&u.d(d)}}}function Wt(n,t,e){let{$$slots:r={},$$scope:i}=t,{say:o="Heart"}=t;return n.$$set=s=>{"say"in s&&e(0,o=s.say),"$$scope"in s&&e(1,i=s.$$scope)},[o,i,r]}class ot extends N{constructor(t){super(),H(this,t,Wt,jt,E,{say:0})}}function Gt(n){let t;return{c(){t=_("section"),t.innerHTML=`<p class="font-mono transform translate-y-72 svelte-y2bu8s" style="font-size: 30px">\u5A77\u5B9D</p> 
  <div><canvas class="min-h-screen transform -translate-y-48 svelte-y2bu8s" id="pinkboard"></canvas></div>`},m(e,r){A(e,t,r)},p:g,i:g,o:g,d(e){e&&$(t)}}}function Kt(n){return setTimeout(()=>{var t={particles:{length:600,duration:3,velocity:60,effect:-.6,size:24}};(function(){for(var o=0,s=["ms","moz","webkit","o"],c=0;c<s.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[s[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[c]+"CancelAnimationFrame"]||window[s[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(f,a){var l=new Date().getTime(),u=Math.max(0,16-(l-o)),d=window.setTimeout(function(){f(l+u)},u);return o=l+u,d}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(f){clearTimeout(f)})})();var e=function(){function o(s,c){this.x=typeof s<"u"?s:0,this.y=typeof c<"u"?c:0}return o.prototype.clone=function(){return new o(this.x,this.y)},o.prototype.length=function(s){return typeof s>"u"?Math.sqrt(this.x*this.x+this.y*this.y):(this.normalize(),this.x*=s,this.y*=s,this)},o.prototype.normalize=function(){var s=this.length();return this.x/=s,this.y/=s,this},o}(),r=function(){function o(){this.position=new e,this.velocity=new e,this.acceleration=new e,this.age=0}return o.prototype.initialize=function(s,c,f,a){this.position.x=s,this.position.y=c,this.velocity.x=f,this.velocity.y=a,this.acceleration.x=f*t.particles.effect,this.acceleration.y=a*t.particles.effect,this.age=0},o.prototype.update=function(s){this.position.x+=this.velocity.x*s,this.position.y+=this.velocity.y*s,this.velocity.x+=this.acceleration.x*s,this.velocity.y+=this.acceleration.y*s,this.age+=s},o.prototype.draw=function(s,c){function f(l){return--l*l*l+1}var a=c.width*f(this.age/t.particles.duration);s.globalAlpha=1-this.age/t.particles.duration,s.drawImage(c,this.position.x-a/2,this.position.y-a/2,a,a)},o}(),i=function(){var o,s=0,c=0,f=t.particles.duration;function a(l){o=new Array(l);for(var u=0;u<o.length;u++)o[u]=new r}return a.prototype.add=function(l,u,d,h){o[c].initialize(l,u,d,h),c++,c==o.length&&(c=0),s==c&&s++,s==o.length&&(s=0)},a.prototype.update=function(l){var u;if(s<c)for(u=s;u<c;u++)o[u].update(l);if(c<s){for(u=s;u<o.length;u++)o[u].update(l);for(u=0;u<c;u++)o[u].update(l)}for(;o[s].age>=f&&s!=c;)s++,s==o.length&&(s=0)},a.prototype.draw=function(l,u){var d;if(s<c)for(d=s;d<c;d++)o[d].draw(l,u);if(c<s){for(d=s;d<o.length;d++)o[d].draw(l,u);for(d=0;d<c;d++)o[d].draw(l,u)}},a}();(function(o){var s=o.getContext("2d"),c=new i(t.particles.length),f=t.particles.length/t.particles.duration,a;function l(p){return new e(160*Math.pow(Math.sin(p),3),130*Math.cos(p)-50*Math.cos(2*p)-20*Math.cos(3*p)-10*Math.cos(4*p)+25)}var u=function(){var p=document.createElement("canvas"),w=p.getContext("2d");p.width=t.particles.size,p.height=t.particles.size;function R(W){var x=l(W);return x.x=t.particles.size/2+x.x*t.particles.size/350,x.y=t.particles.size/2-x.y*t.particles.size/350,x}w.beginPath();var L=-Math.PI,y=R(L);for(w.moveTo(y.x,y.y);L<Math.PI;)L+=.01,y=R(L),w.lineTo(y.x,y.y);w.closePath(),w.fillStyle="#ea80b0",w.fill();var C=new Image;return C.src=p.toDataURL(),C}();function d(){requestAnimationFrame(d);var p=new Date().getTime()/1e3,w=p-(a||p);a=p,s.clearRect(0,0,o.width,o.height);for(var R=f*w,L=0;L<R;L++){var y=l(Math.PI-2*Math.PI*Math.random()),C=y.clone().length(t.particles.velocity);c.add(o.width/2+y.x,o.height/2-y.y,C.x,-C.y)}c.update(w),c.draw(s,u)}function h(){o.width=o.clientWidth,o.height=o.clientHeight}window.onresize=h,setTimeout(function(){h(),d()},10)})(document.getElementById("pinkboard"))}),[]}class Vt extends N{constructor(t){super(),H(this,t,Kt,Gt,E,{})}}function Yt(n){let t;return{c(){t=_("section"),t.innerHTML='<canvas id="canvas" width="805" height="946"></canvas>',m(t,"class","svelte-17t5t1g")},m(e,r){A(e,t,r)},p:g,i:g,o:g,d(e){e&&$(t)}}}function Xt(n){return setTimeout(()=>{var t=document.getElementById("canvas");t.width=window.innerWidth,t.height=window.innerHeight;var e=t.getContext("webgl");e||console.error("Unable to initialize WebGL.");var r=.015,i=0,o=`
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
    `,s=`
    precision highp float;
    
    uniform float width;
    uniform float height;
    vec2 resolution = vec2(width, height);
    
    uniform float time;
    
    #define POINT_COUNT 8
    
    vec2 points[POINT_COUNT];
    const float speed = -0.5;
    const float len = 0.25;
    float intensity = 0.9;
    float radius = 0.015;
    
    //https://www.shadertoy.com/view/MlKcDD
    //Signed distance to a quadratic bezier
    float sdBezier(vec2 pos, vec2 A, vec2 B, vec2 C){
        vec2 a = B - A;
        vec2 b = A - 2.0*B + C;
        vec2 c = a * 2.0;
        vec2 d = A - pos;
    
        float kk = 1.0 / dot(b,b);
        float kx = kk * dot(a,b);
        float ky = kk * (2.0*dot(a,a)+dot(d,b)) / 3.0;
        float kz = kk * dot(d,a);
    
        float res = 0.0;
    
        float p = ky - kx*kx;
        float p3 = p*p*p;
        float q = kx*(2.0*kx*kx - 3.0*ky) + kz;
        float h = q*q + 4.0*p3;
    
        if(h >= 0.0){
            h = sqrt(h);
            vec2 x = (vec2(h, -h) - q) / 2.0;
            vec2 uv = sign(x)*pow(abs(x), vec2(1.0/3.0));
            float t = uv.x + uv.y - kx;
            t = clamp( t, 0.0, 1.0 );
    
            // 1 root
            vec2 qos = d + (c + b*t)*t;
            res = length(qos);
        }else{
            float z = sqrt(-p);
            float v = acos( q/(p*z*2.0) ) / 3.0;
            float m = cos(v);
            float n = sin(v)*1.732050808;
            vec3 t = vec3(m + m, -n - m, n - m) * z - kx;
            t = clamp( t, 0.0, 1.0 );
    
            // 3 roots
            vec2 qos = d + (c + b*t.x)*t.x;
            float dis = dot(qos,qos);
    
            res = dis;
    
            qos = d + (c + b*t.y)*t.y;
            dis = dot(qos,qos);
            res = min(res,dis);
    
            qos = d + (c + b*t.z)*t.z;
            dis = dot(qos,qos);
            res = min(res,dis);
    
            res = sqrt( res );
        }
    
        return res;
    }
    
    
    //http://mathworld.wolfram.com/HeartCurve.html
    vec2 getHeartPosition(float t){
        return vec2(16.0 * sin(t) * sin(t) * sin(t),
                                -(13.0 * cos(t) - 5.0 * cos(2.0*t)
                                - 2.0 * cos(3.0*t) - cos(4.0*t)));
    }
    
    //https://www.shadertoy.com/view/3s3GDn
    float getGlow(float dist, float radius, float intensity){
        return pow(radius/dist, intensity);
    }
    
    float getSegment(float t, vec2 pos, float offset, float scale){
        for(int i = 0; i < POINT_COUNT; i++){
            points[i] = getHeartPosition(offset + float(i)*len + fract(speed * t) * 6.28);
        }
    
        vec2 c = (points[0] + points[1]) / 2.0;
        vec2 c_prev;
        float dist = 10000.0;
    
        for(int i = 0; i < POINT_COUNT-1; i++){
            //https://tinyurl.com/y2htbwkm
            c_prev = c;
            c = (points[i] + points[i+1]) / 2.0;
            dist = min(dist, sdBezier(pos, scale * c_prev, scale * points[i], scale * c));
        }
        return max(0.0, dist);
    }
    
    void main(){
        vec2 uv = gl_FragCoord.xy/resolution.xy;
        float widthHeightRatio = resolution.x/resolution.y;
        vec2 centre = vec2(0.5, 0.5);
        vec2 pos = centre - uv;
        pos.y /= widthHeightRatio;
        //Shift upwards to centre heart
        pos.y += 0.02;
        float scale = 0.000015 * height;
    
        float t = time;
    
        //Get first segment
        float dist = getSegment(t, pos, 0.0, scale);
        float glow = getGlow(dist, radius, intensity);
    
        vec3 col = vec3(0.0);
    
        //White core
        col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
        //Pink glow
        col += glow * vec3(0.94,0.14,0.4);
    
        //Get second segment
        dist = getSegment(t, pos, 3.4, scale);
        glow = getGlow(dist, radius, intensity);
    
        //White core
        col += 10.0*vec3(smoothstep(0.003, 0.001, dist));
        //Blue glow
        col += glow * vec3(0.2,0.6,1.0);
    
        //Tone mapping
        col = 1.0 - exp(-col);
    
        //Output to screen
         gl_FragColor = vec4(col,1.0);
    }
    `;window.addEventListener("resize",c,!1);function c(){t.width=window.innerWidth,t.height=window.innerHeight,e.viewport(0,0,t.width,t.height),e.uniform1f(y,window.innerWidth),e.uniform1f(C,window.innerHeight)}function f(x,T){var k=e.createShader(T);if(e.shaderSource(k,x),e.compileShader(k),!e.getShaderParameter(k,e.COMPILE_STATUS))throw"Shader compile failed with: "+e.getShaderInfoLog(k);return k}function a(x,T){var k=e.getAttribLocation(x,T);if(k===-1)throw"Cannot find attribute "+T+".";return k}function l(x,T){var k=e.getUniformLocation(x,T);if(k===-1)throw"Cannot find uniform "+T+".";return k}var u=f(o,e.VERTEX_SHADER),d=f(s,e.FRAGMENT_SHADER),h=e.createProgram();e.attachShader(h,u),e.attachShader(h,d),e.linkProgram(h),e.useProgram(h);var p=new Float32Array([-1,1,-1,-1,1,1,1,-1]),w=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,w),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW);var R=a(h,"position");e.enableVertexAttribArray(R),e.vertexAttribPointer(R,2,e.FLOAT,!1,2*4,0);var L=l(h,"time"),y=l(h,"width"),C=l(h,"height");e.uniform1f(y,window.innerWidth),e.uniform1f(C,window.innerHeight);function W(){i+=r,e.uniform1f(L,i),e.drawArrays(e.TRIANGLE_STRIP,0,4),requestAnimationFrame(W)}W()}),[]}class $t extends N{constructor(t){super(),H(this,t,Xt,Yt,E,{})}}function Jt(n){let t,e;return t=new ot({props:{say:"\u{1F60D}\u7231\u4F60",$$slots:{default:[te]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(r,i){S(t,r,i),e=!0},p(r,i){const o={};i&16&&(o.$$scope={dirty:i,ctx:r}),t.$set(o)},i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){b(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function Qt(n){let t,e;return t=new $t({}),{c(){z(t.$$.fragment)},m(r,i){S(t,r,i),e=!0},p:g,i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){b(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function Zt(n){let t,e;return t=new ot({props:{say:"\u521A\u597D\uFF0C\u8FD9\u91CC\u6709\u4E00\u5C01\u7ED9\u4F60\u7684\u4FE1",$$slots:{default:[ee]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(r,i){S(t,r,i),e=!0},p(r,i){const o={};i&21&&(o.$$scope={dirty:i,ctx:r}),t.$set(o)},i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){b(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function te(n){let t,e,r;return e=new Vt({props:{name:U}}),{c(){t=_("div"),z(e.$$.fragment),m(t,"class","text-center")},m(i,o){A(i,t,o),S(e,t,null),r=!0},p:g,i(i){r||(v(e.$$.fragment,i),r=!0)},o(i){b(e.$$.fragment,i),r=!1},d(i){i&&$(t),q(e)}}}function ft(n){let t,e,r,i;return{c(){t=_("form"),e=_("label"),e.textContent="\u4EB2\u7231\u7684\uFF1A",r=D(),i=_("input"),m(e,"for","name"),m(e,"class","text-xl font-thin"),m(i,"type","text"),m(i,"name",U),m(i,"id","name"),i.disabled=!0,i.required=!0,m(i,"placeholder","\u4F60\u7684\u540D\u5B57"),i.value="\u5A77\u5B9D",m(i,"class","border-b bg-gray-100 h-9 p-2 w-32 rounded-md"),m(t,"class","pl-8 sm:pl-16 transform translate-y-24")},m(o,s){A(o,t,s),P(t,e),P(t,r),P(t,i)},p:g,d(o){o&&$(t)}}}function ee(n){let t,e,r,i,o,s,c,f,a=n[2]&&ft();return{c(){a&&a.c(),t=D(),e=_("img"),i=D(),o=_("div"),s=_("button"),s.textContent="\u62C6\u5F00\u4FE1\u5C01",st(e.src,r=n[0])||m(e,"src",r),m(e,"alt","Love letter"),m(s,"class","px-8 py-2 bg-pink-300 text-white rounded-lg"),m(o,"class","text-center pt-6")},m(l,u){a&&a.m(l,u),A(l,t,u),A(l,e,u),A(l,i,u),A(l,o,u),P(o,s),c||(f=St(s,"click",n[3]),c=!0)},p(l,u){l[2]?a?a.p(l,u):(a=ft(),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),u&1&&!st(e.src,r=l[0])&&m(e,"src",r)},d(l){a&&a.d(l),l&&$(t),l&&$(e),l&&$(i),l&&$(o),c=!1,f()}}}function ne(n){let t,e,r,i;const o=[Zt,Qt,Jt],s=[];function c(f,a){return f[1]===""?0:f[1]==="love1"?1:2}return t=c(n),e=s[t]=o[t](n),{c(){e.c(),r=gt()},m(f,a){s[t].m(f,a),A(f,r,a),i=!0},p(f,[a]){let l=t;t=c(f),t===l?s[t].p(f,a):(_t(),b(s[l],1,1,()=>{s[l]=null}),vt(),e=s[t],e?e.p(f,a):(e=s[t]=o[t](f),e.c()),v(e,1),e.m(r.parentNode,r))},i(f){i||(v(e),i=!0)},o(f){b(e),i=!1},d(f){s[t].d(f),f&&$(r)}}}let U="\u5A77\u5B9D";function re(n,t,e){let r="/close.jpg",i="",o=!0;function s(){console.log("click"),console.log("yourName:",U,"length:",U.length),e(2,o=!o),e(0,r=U.length>0?"/open.jpg":"/close.jpg"),setTimeout(()=>{e(1,i="love1"),setTimeout(()=>{e(1,i="love2")},2e3)},1e3)}return[r,i,o,s]}class oe extends N{constructor(t){super(),H(this,t,re,ne,E,{})}}function ie(n){let t,e;return t=new $t({}),{c(){z(t.$$.fragment)},m(r,i){S(t,r,i),e=!0},i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){b(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function se(n){let t,e;return t=new ot({props:{say:"\u{1F60D}\u7231\u4F60",$$slots:{default:[ie]},$$scope:{ctx:n}}}),{c(){z(t.$$.fragment)},m(r,i){S(t,r,i),e=!0},p(r,[i]){const o={};i&4&&(o.$$scope={dirty:i,ctx:r}),t.$set(o)},i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){b(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function ce(n){const e=new URLSearchParams(window.location.search).get("loveu");return console.log("name:",e),[]}class ae extends N{constructor(t){super(),H(this,t,ce,se,E,{})}}function le(n){let t,e;return t=new Dt({props:{routes:n[0]}}),{c(){z(t.$$.fragment)},m(r,i){S(t,r,i),e=!0},p:g,i(r){e||(v(t.$$.fragment,r),e=!0)},o(r){b(t.$$.fragment,r),e=!1},d(r){q(t,r)}}}function ue(n){return[[{path:"/",component:oe},{path:"/heart",component:ae}]]}class fe extends N{constructor(t){super(),H(this,t,ue,le,E,{})}}new fe({target:document.getElementById("app")});
