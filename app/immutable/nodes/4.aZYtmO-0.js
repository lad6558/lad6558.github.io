import{_ as k}from"../chunks/preload-helper.0HuHagjb.js";import{H as R}from"../chunks/control.pJ1mnnAb.js";import{s as q,e as v,a as E,t as I,h as L,c as b,d as c,b as g,k as y,l as S,f as p,i as s,j as M}from"../chunks/scheduler.6v1fF6r-.js";import{S as V,i as z,c as N,a as U,m as B,t as F,b as G,d as J}from"../chunks/index.MwZ-SIZp.js";const K=(a,n)=>{const t=a[n];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((r,e)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(e.bind(null,new Error("Unknown variable dynamic import: "+n)))})};function Q(a,n){throw new R(a,n)}new TextEncoder;async function W({params:a,fetch:n}){try{const t=await K(Object.assign({"../../../blogs/ai4pseudoscience.md":()=>k(()=>import("../chunks/ai4pseudoscience.yWxcWYuD.js"),__vite__mapDeps([0,1,2]),import.meta.url),"../../../blogs/andi_versus_llm.md":()=>k(()=>import("../chunks/andi_versus_llm.PPPtgunJ.js"),__vite__mapDeps([3,1,2]),import.meta.url),"../../../blogs/old_guy_sussman.md":()=>k(()=>import("../chunks/old_guy_sussman.aCL3rirb.js"),__vite__mapDeps([4,1,2]),import.meta.url)}),`../../../blogs/${a.slug}.md`);return{Content:t.default,meta:t.metadata}}catch{Q(404,"Post not found")}}const nt=Object.freeze(Object.defineProperty({__proto__:null,load:W},Symbol.toStringTag,{value:"Module"}));function X(a){let n,t,r,e,l,f=a[0].title+"",P,w,_,j=a[0].description+"",x,$,d,A=a[0].date+"",T,O,m,h;return document.title=n=a[0].title,m=new a[1]({}),{c(){t=v("meta"),r=E(),e=v("section"),l=v("h1"),P=I(f),w=E(),_=v("p"),x=I(j),$=E(),d=v("p"),T=I(A),O=E(),N(m.$$.fragment),this.h()},l(o){const u=L("svelte-17fc3fl",document.head);t=b(u,"META",{name:!0,content:!0}),u.forEach(c),r=g(o),e=b(o,"SECTION",{class:!0});var i=y(e);l=b(i,"H1",{class:!0});var C=y(l);P=S(C,f),C.forEach(c),w=g(i),_=b(i,"P",{class:!0});var D=y(_);x=S(D,j),D.forEach(c),$=g(i),d=b(i,"P",{class:!0});var H=y(d);T=S(H,A),H.forEach(c),O=g(i),U(m.$$.fragment,i),i.forEach(c),this.h()},h(){p(t,"name","description"),p(t,"content",a[0].description),p(l,"class","text-4xl font-bold mb-2"),p(_,"class","text-slate-500 dark:text-slate-400 mb-1"),p(d,"class","text-slate-500 dark:text-slate-400 mb-8 text-sm"),p(e,"class","max-w-prose w-full mb-12 mt-4 px-4")},m(o,u){s(document.head,t),M(o,r,u),M(o,e,u),s(e,l),s(l,P),s(e,w),s(e,_),s(_,x),s(e,$),s(e,d),s(d,T),s(e,O),B(m,e,null),h=!0},p(o,[u]){(!h||u&1)&&n!==(n=o[0].title)&&(document.title=n)},i(o){h||(F(m.$$.fragment,o),h=!0)},o(o){G(m.$$.fragment,o),h=!1},d(o){o&&(c(r),c(e)),c(t),J(m)}}}function Y(a,n,t){let{data:r}=n;const{meta:e,Content:l}=r;return a.$$set=f=>{"data"in f&&t(2,r=f.data)},[e,l,r]}class ot extends V{constructor(n){super(),z(this,n,Y,X,q,{data:2})}}export{ot as component,nt as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/ai4pseudoscience.yWxcWYuD.js","../chunks/scheduler.6v1fF6r-.js","../chunks/index.MwZ-SIZp.js","../chunks/andi_versus_llm.PPPtgunJ.js","../chunks/old_guy_sussman.aCL3rirb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
