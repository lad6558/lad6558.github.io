function C(){}function q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function $(){return Object.create(null)}function D(t){t.forEach(B)}function tt(t){return typeof t=="function"}function nt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let d;function et(t,n){return t===n?!0:(d||(d=document.createElement("a")),d.href=n,t===d.href)}function it(t){return Object.keys(t).length===0}function O(t,...n){if(t==null){for(const i of n)i(void 0);return C}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(O(n,e))}function ct(t,n,e,i){if(t){const l=M(t,n,e,i);return t[0](l)}}function M(t,n,e,i){return t[1]&&i?q(e.ctx.slice(),t[1](i(n))):e.ctx}function rt(t,n,e,i){if(t[2]&&i){const l=t[2](i(e));if(n.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(n.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=n.dirty[o]|l[o];return s}return n.dirty|l}return n.dirty}function st(t,n,e,i,l,s){if(l){const c=M(n,e,i,s);t.p(c,l)}}function ot(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let p=!1;function at(){p=!0}function ut(){p=!1}function G(t,n,e,i){for(;t<n;){const l=t+(n-t>>1);e(l)<=i?t=l+1:n=l}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<n.length;a++){const u=n[a];u.claim_order!==void 0&&r.push(u)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let l=0;for(let r=0;r<n.length;r++){const a=n[r].claim_order,u=(l>0&&n[e[l]].claim_order<=a?l+1:G(1,l,S=>n[e[S]].claim_order,a))-1;i[r]=e[u]+1;const w=u+1;e[w]=r,l=Math.max(w,l)}const s=[],c=[];let o=n.length-1;for(let r=e[l]+1;r!=0;r=i[r-1]){for(s.push(n[r-1]);o>=r;o--)c.push(n[o]);o--}for(;o>=0;o--)c.push(n[o]);s.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<s.length&&c[r].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(c[r],u)}}function z(t,n){if(p){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function F(t,n,e){t.insertBefore(n,e||null)}function R(t,n,e){p&&!e?z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function ft(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function H(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function ht(){return T(" ")}function _t(){return T("")}function dt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function pt(t){return t.dataset.svelteH}function bt(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,l=!1){L(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(n(o)){const r=e(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function J(t,n,e,i){return j(t,l=>l.nodeName===n,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];e[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(n))}function yt(t,n,e){return J(t,n,e,H)}function K(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>T(n),!0)}function gt(t){return K(t," ")}function N(t,n,e){for(let i=e;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===n)return i}return-1}function xt(t,n){const e=N(t,"HTML_TAG_START",0),i=N(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new b(n);L(t);const l=t.splice(e,i-e+1);x(l[0]),x(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(n);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(n,s)}function Et(t,n){n=""+n,t.data!==n&&(t.data=n)}function Tt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Q(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class V{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(n=!1){this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=U(e.nodeName):this.e=H(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)F(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(x)}}class b extends V{l=void 0;constructor(n=!1,e){super(n),this.e=this.n=null,this.l=e}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)R(this.t,this.n[e],n)}}function vt(t,n){return new t(n)}let m;function y(t){m=t}function v(){if(!m)throw new Error("Function called outside component initialization");return m}function wt(t){v().$$.on_mount.push(t)}function Nt(t){v().$$.after_update.push(t)}function At(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[n];if(l){const s=Q(n,e,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function kt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const _=[],A=[];let h=[];const k=[],P=Promise.resolve();let E=!1;function W(){E||(E=!0,P.then(Y))}function Mt(){return W(),P}function X(t){h.push(t)}const g=new Set;let f=0;function Y(){if(f!==0)return;const t=m;do{try{for(;f<_.length;){const n=_[f];f++,y(n),Z(n.$$)}}catch(n){throw _.length=0,f=0,n}for(y(null),_.length=0,f=0;A.length;)A.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];g.has(e)||(g.add(e),e())}h.length=0}while(_.length);for(;k.length;)k.pop()();E=!1,g.clear(),y(t)}function Z(t){if(t.fragment!==null){t.update(),D(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}function Ht(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{Mt as A,D as B,$ as C,Y as D,tt as E,it as F,X as G,Ht as H,m as I,y as J,B as K,_ as L,W as M,at as N,ut as O,et as P,b as Q,xt as R,dt as S,At as T,ft as U,kt as V,ht as a,gt as b,yt as c,mt as d,H as e,x as f,pt as g,bt as h,R as i,K as j,z as k,Et as l,lt as m,C as n,ct as o,ot as p,rt as q,_t as r,nt as s,T as t,st as u,Nt as v,wt as w,Tt as x,A as y,vt as z};
