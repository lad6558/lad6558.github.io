import{_ as T}from"../chunks/preload-helper.0HuHagjb.js";import{H as R}from"../chunks/control.pJ1mnnAb.js";import{s as A,a as h,e as v,t as k,h as L,d as m,b,c as g,k as E,m as I,f as y,j as H,i as r}from"../chunks/scheduler.-wk-EB-r.js";import{S as M,i as V,b as z,d as N,m as U,a as B,t as F,e as G}from"../chunks/index.bmluPzg7.js";const J=(a,o)=>{const e=a[o];return e?typeof e=="function"?e():Promise.resolve(e):new Promise((t,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})};function K(a,o){throw new R(a,o)}new TextEncoder;async function Q({params:a,fetch:o}){try{const e=await J(Object.assign({"../../../blogs/first_post.md":()=>T(()=>import("../chunks/first_post.2O22fKg3.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../../blogs/old_guy_sussman.md":()=>T(()=>import("../chunks/old_guy_sussman.4673Jtgx.js"),__vite__mapDeps([3,1,2]),import.meta.url),"../../../blogs/second_post.md":()=>T(()=>import("../chunks/second_post.kBNic5fd.js"),__vite__mapDeps([4,1,2]),import.meta.url)}),`../../../blogs/${a.slug}.md`);return{Content:e.default,meta:e.metadata}}catch{K(404,"Post not found")}}const at=Object.freeze(Object.defineProperty({__proto__:null,load:Q},Symbol.toStringTag,{value:"Module"}));function W(a){let o,e,t,n,f=a[1].title+"",c,w,u,S=a[1].description+"",P,x,_,j=a[1].date+"",$,O,i,d;return document.title=o=a[0].meta.title,i=new a[2]({}),{c(){e=h(),t=v("section"),n=v("h1"),c=k(f),w=h(),u=v("p"),P=k(S),x=h(),_=v("p"),$=k(j),O=h(),z(i.$$.fragment),this.h()},l(s){L("svelte-16q1dwp",document.head).forEach(m),e=b(s),t=g(s,"SECTION",{class:!0});var l=E(t);n=g(l,"H1",{class:!0});var q=E(n);c=I(q,f),q.forEach(m),w=b(l),u=g(l,"P",{class:!0});var C=E(u);P=I(C,S),C.forEach(m),x=b(l),_=g(l,"P",{class:!0});var D=E(_);$=I(D,j),D.forEach(m),O=b(l),N(i.$$.fragment,l),l.forEach(m),this.h()},h(){y(n,"class","text-4xl font-bold mb-2"),y(u,"class","text-slate-500 dark:text-slate-400 mb-1"),y(_,"class","text-slate-500 dark:text-slate-400 mb-8 text-sm"),y(t,"class","max-w-prose w-full mb-12 mt-4 px-4")},m(s,p){H(s,e,p),H(s,t,p),r(t,n),r(n,c),r(t,w),r(t,u),r(u,P),r(t,x),r(t,_),r(_,$),r(t,O),U(i,t,null),d=!0},p(s,[p]){(!d||p&1)&&o!==(o=s[0].meta.title)&&(document.title=o)},i(s){d||(B(i.$$.fragment,s),d=!0)},o(s){F(i.$$.fragment,s),d=!1},d(s){s&&(m(e),m(t)),G(i)}}}function X(a,o,e){let{data:t}=o;const{meta:n,Content:f}=t;return a.$$set=c=>{"data"in c&&e(0,t=c.data)},[t,n,f]}class ot extends M{constructor(o){super(),V(this,o,X,W,A,{data:0})}}export{ot as component,at as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/first_post.2O22fKg3.js","../chunks/scheduler.-wk-EB-r.js","../chunks/index.bmluPzg7.js","../chunks/old_guy_sussman.4673Jtgx.js","../chunks/second_post.kBNic5fd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
