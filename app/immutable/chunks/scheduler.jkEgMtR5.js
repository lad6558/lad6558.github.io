function C(){}function D(t,e){for(const n in e)t[n]=e[n];return t}function q(t){return t()}function $(){return Object.create(null)}function B(t){t.forEach(q)}function tt(t){return typeof t=="function"}function et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let d;function nt(t,e){return t===e?!0:(d||(d=document.createElement("a")),d.href=e,t===d.href)}function it(t){return Object.keys(t).length===0}function O(t,...e){if(t==null){for(const i of e)i(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function lt(t,e,n){t.$$.on_destroy.push(O(e,n))}function ct(t,e,n,i){if(t){const l=H(t,e,n,i);return t[0](l)}}function H(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function rt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(e.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function st(t,e,n,i,l,s){if(l){const c=H(e,n,i,s);t.p(c,l)}}function ot(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let p=!1;function ut(){p=!0}function at(){p=!1}function G(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&r.push(a)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const u=e[r].claim_order,a=(l>0&&e[n[l]].claim_order<=u?l+1:G(1,l,P=>e[n[P]].claim_order,u))-1;i[r]=n[a]+1;const v=a+1;n[v]=r,l=Math.max(v,l)}const s=[],c=[];let o=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<c.length;r++){for(;u<s.length&&c[r].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(c[r],a)}}function z(t,e){if(p){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function I(t,e,n){p&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function x(t){t.parentNode&&t.parentNode.removeChild(t)}function ft(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function M(t){return document.createElement(t)}function U(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function T(t){return document.createTextNode(t)}function ht(){return T(" ")}function _t(){return T("")}function dt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function pt(t){return t.dataset.svelteH}function bt(t){return Array.from(t.childNodes)}function L(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,l=!1){L(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function W(t,e,n,i){return S(t,l=>l.nodeName===e,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(e))}function yt(t,e,n){return W(t,e,n,M)}function J(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>T(e),!0)}function gt(t){return J(t," ")}function w(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return-1}function xt(t,e){const n=w(t,"HTML_TAG_START",0),i=w(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new b(e);L(t);const l=t.splice(n,i-n+1);x(l[0]),x(l[l.length-1]);const s=l.slice(1,l.length-1);if(s.length===0)return new b(e);for(const c of s)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new b(e,s)}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function Tt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function K(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Nt(t,e){const n=[];let i=0;for(const l of e.childNodes)if(l.nodeType===8){const s=l.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(l)):s===`HEAD_${t}_START`&&(i+=1,n.push(l))}else i>0&&n.push(l);return n}class Q{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=U(n.nodeName):this.e=M(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)F(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(x)}}class b extends Q{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)I(this.t,this.n[n],e)}}function vt(t,e){return new t(e)}let m;function y(t){m=t}function N(){if(!m)throw new Error("Function called outside component initialization");return m}function wt(t){N().$$.on_mount.push(t)}function At(t){N().$$.after_update.push(t)}function kt(){const t=N();return(e,n,{cancelable:i=!1}={})=>{const l=t.$$.callbacks[e];if(l){const s=K(e,n,{cancelable:i});return l.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}function Ht(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const _=[],A=[];let h=[];const k=[],j=Promise.resolve();let E=!1;function V(){E||(E=!0,j.then(Y))}function Mt(){return V(),j}function X(t){h.push(t)}const g=new Set;let f=0;function Y(){if(f!==0)return;const t=m;do{try{for(;f<_.length;){const e=_[f];f++,y(e),Z(e.$$)}}catch(e){throw _.length=0,f=0,e}for(y(null),_.length=0,f=0;A.length;)A.pop()();for(let e=0;e<h.length;e+=1){const n=h[e];g.has(n)||(g.add(n),n())}h.length=0}while(_.length);for(;k.length;)k.pop()();E=!1,g.clear(),y(t)}function Z(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function Lt(t){const e=[],n=[];h.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),h=e}export{vt as A,Mt as B,B as C,$ as D,Y as E,tt as F,it as G,X as H,Lt as I,m as J,y as K,q as L,_ as M,V as N,ut as O,at as P,nt as Q,b as R,xt as S,dt as T,kt as U,ft as V,Ht as W,ht as a,gt as b,yt as c,x as d,M as e,mt as f,pt as g,Nt as h,z as i,I as j,bt as k,J as l,Et as m,C as n,lt as o,ct as p,ot as q,rt as r,et as s,T as t,st as u,_t as v,At as w,wt as x,Tt as y,A as z};