import{s as W,e as g,a as E,t as R,c as b,h as _,b as T,j as L,f,d as p,P as ee,i as V,k as d,l as O,n as C,Q as ae,R as re,g as Q,S as Y,B as ie,T as oe,U as le,V as Z}from"../chunks/scheduler.iOX-l_vg.js";import{S as j,i as G,g as ce,a as D,c as de,t as S,b as F,d as U,m as z,e as B}from"../chunks/index.xWXcXuZW.js";function ue(r){return r?.length!==void 0?r:Array.from(r)}let N=[`Architectural and compiler support for accelerating embedding operations on general purpose processors
<br/>
Speaker: Marco Siracusa and Olivia Hsu<br/>
Speaker Affiliation: Barcelona Supercomputing Center(BSC) <br/>
Host: Professor Joel Emer<br/>
Host Affiliation: CSG - CSAIL - MIT <br/>
<br/>
Date: Wednesday, February 28, 2024<br/>
Time: 4:00 PM to 5:00 PM<br/>
<br/>
Location: 32 - G449<br/>
<br/>
<br/>
Abstract:
Feature embeddings let you transform categorical features (e.g.words) into numerical vectors that can be processed with Deep Neural Networks.This processing is implemented by looking up large embedding tables that store all the embedding vectors of all categorical features.Thus, embedding lookups are a fundamental operation in several machine learning applications such as large language models and recommender systems.However, off - the - shelf processors are not optimized to efficiently gather embedding vectors from scattered memory locations.More recent designs have proposed a specialized near - core engine that decouples irregular memory accesses from the computation performed on the core.One such engine in the literature is the Tensor Marshaling Unit(TMU).The TMU has been designed to accelerate the irregular iteration commonly found in sparse tensor algebra and has been shown to speed up several sparse tensor algebra kernels by 3 - 5x.

We propose to apply the TMU primitives beyond tensor algebra to embedding operations.However, handwriting all variants of these operations is time consuming and not amenable to optimizations like kernel fusion.For this reason, we also propose a methodology to automatically lower embedding operations to TMU - CPU code using MLIR.This compilation path enables speeding up the embedding codes found in machine learning frameworks such as TensorFlow and PyTorch.
`,`TL;DR: Innovation in AI talk happening THIS Thursday, 2/22, at 6 PM in room 32-144! Please RSVP here.

In the coming months, MIT Hacking Medicine is hosting a speaker series with topics in technology and healthcare innovation.

THIS Thursday, 2/22, at 6 PM in room 32-144, we’ll be kicking off the series in collaboration with MISTI India!

Come hear Raghu Dharmaraju, CEO, ARTPARK at Indian Institute of Science (IISc), speak about his experiences empowering people through innovation in artificial intelligence. He will also hold a Q&A at the end! Make sure to RSVP for refreshments.

If AI, entrepreneurship, and real-world innovation sound interesting to you, please RSVP here! 

What is MIT Hacking Medicine?

We are an organization that aims to connect brilliant and diverse minds in the biomedical field to solve healthcare’s biggest challenges. Every year, we organize Grand Hack, a three-day hackathon, where we bring together engineers, scientists, clinicians, and entrepreneurs to collaborate and develop solutions to key unmet needs in healthcare. 

Sounds exciting? Grand Hack 2024 will be happening HERE at MIT during April 19-21. Apply to participate here!

Upcoming Speaker Series Events



Thursday, 3/7, 5 PM: Susan Conover, CEO, Piction Health


We’ll be holding weekly speaker series events on Thursdays at 5 PM throughout March and the beginning of April (3/7 - 4/11), so stay tuned for more details!

bcc’d to all dorms, grand-hack-blue for bc-talk`,`Campus Freedom of Expression: Basic Principles and Current Controversies (register)
Monday, February 26 
4:00 to 5:00 p.m. ET, Room 45-801

Erwin Chemerinsky is the dean of the University of California Berkeley School of Law. A free speech scholar, he specializes in constitutional law, criminal procedure, and federal jurisdiction.

Islamophobia: A Threat to All (register)
Monday, March 18 
4:00 to 5:00 p.m. ET, Room 45-801
This event falls during Ramadan, and accommodations will be made for those who are fasting. 

Dalia Mogahed is the director of research at the Institute for Social Policy and Understanding. She is a Muslim studies scholar, specializing in issues of gender, identity, and Islamophobia in America. 

What Hinges on Anti-Palestinian Racism? (register)
Thursday, April 18
4:00 to 5:00 p.m. ET, Room 45-801

Murad Idris is an associate professor of Political Science at the University of Michigan. An Arab and Muslim American studies scholar, his research and teaching explores political theory, the history of political thought, and political theology.

String/Gravity Theory Seminar

Wednesday, February 21, 2024 - No seminar scheduled

Wednesday, February 28, 2024 at 3:00-4:30pm ET - Cosman Room (6C-442)
TBA
Ryan Unger, Princeton
`];N=N.map(r=>r.split(`
`).map(e=>e.trim().endsWith("<br/>")?e:e+"<br/>").join(`
`));const te=[{title:"Seminar: String/Gravity Theory",date:"Wed, 02/28",time:"3:00 PM",location:"Cosman Room (6C-442)",text:N[2],interested:!0},{title:"Talk: Innovation in AI Healthcare",date:"Thu, 02/22",time:"6:00 PM",location:"32-144",text:N[1],interested:!0},{title:"Seminar: Accelerating embedding operations on general purpose processors",date:"Wed, 02/28",time:"4:00 PM",location:"32-G449",text:N[0],interested:!1},{title:"Campus Freedom of Expression: Basic Principles and Current Controversies",date:"Mon, 02/26",time:"4:00 PM",location:"45-801",text:N[2],interested:!1}],he="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M464%20256A208%20208%200%201%201%2048%20256a208%20208%200%201%201%20416%200zM0%20256a256%20256%200%201%200%20512%200A256%20256%200%201%200%200%20256zM232%20120V256c0%208%204%2015.5%2010.7%2020l96%2064c11%207.4%2025.9%204.4%2033.3-6.7s4.4-25.9-6.7-33.3L280%20243.2V120c0-13.3-10.7-24-24-24s-24%2010.7-24%2024z'/%3e%3c/svg%3e";function fe(r){let e,t,n,a,i,u,c=r[0].time+"",s,o,l=r[0].date+"",m;return{c(){e=g("div"),t=g("img"),a=E(),i=g("div"),u=R("  "),s=R(c),o=R(", "),m=R(l),this.h()},l(v){e=b(v,"DIV",{class:!0});var h=_(e);t=b(h,"IMG",{class:!0,src:!0,alt:!0}),a=T(h),i=b(h,"DIV",{});var y=_(i);u=L(y,"  "),s=L(y,c),o=L(y,", "),m=L(y,l),y.forEach(f),h.forEach(f),this.h()},h(){p(t,"class","w-3"),ee(t.src,n=he)||p(t,"src",n),p(t,"alt",""),p(e,"class","flex")},m(v,h){V(v,e,h),d(e,t),d(e,a),d(e,i),d(i,u),d(i,s),d(i,o),d(i,m)},p(v,[h]){h&1&&c!==(c=v[0].time+"")&&O(s,c),h&1&&l!==(l=v[0].date+"")&&O(m,l)},i:C,o:C,d(v){v&&f(e)}}}function me(r,e,t){let{event:n}=e;return r.$$set=a=>{"event"in a&&t(0,n=a.event)},[n]}class ne extends j{constructor(e){super(),G(this,e,me,fe,W,{event:0})}}const ve="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20384%20512'%3e%3c!--!Font%20Awesome%20Free%206.5.1%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M215.7%20499.2C267%20435%20384%20279.4%20384%20192C384%2086%20298%200%20192%200S0%2086%200%20192c0%2087.4%20117%20243%20168.3%20307.2c12.3%2015.3%2035.1%2015.3%2047.4%200zM192%20128a64%2064%200%201%201%200%20128%2064%2064%200%201%201%200-128z'/%3e%3c/svg%3e";function pe(r){let e,t,n,a,i,u,c=r[0].location+"",s;return{c(){e=g("div"),t=g("img"),a=E(),i=g("div"),u=R("  "),s=R(c),this.h()},l(o){e=b(o,"DIV",{class:!0});var l=_(e);t=b(l,"IMG",{class:!0,src:!0,alt:!0}),a=T(l),i=b(l,"DIV",{});var m=_(i);u=L(m,"  "),s=L(m,c),m.forEach(f),l.forEach(f),this.h()},h(){p(t,"class","w-3"),ee(t.src,n=ve)||p(t,"src",n),p(t,"alt",""),p(e,"class","flex")},m(o,l){V(o,e,l),d(e,t),d(e,a),d(e,i),d(i,u),d(i,s)},p(o,[l]){l&1&&c!==(c=o[0].location+"")&&O(s,c)},i:C,o:C,d(o){o&&f(e)}}}function ge(r,e,t){let{event:n}=e;return r.$$set=a=>{"event"in a&&t(0,n=a.event)},[n]}class se extends j{constructor(e){super(),G(this,e,ge,pe,W,{event:0})}}function be(r){let e,t,n,a=r[1].title+"",i,u,c,s,o,l,m,v,h,y,w,A,P,x=r[1].text+"",M;return o=new ne({props:{event:r[1]}}),v=new se({props:{event:r[1]}}),{c(){e=g("div"),t=g("div"),n=g("p"),i=R(a),u=E(),c=g("div"),s=g("div"),F(o.$$.fragment),l=E(),m=g("div"),F(v.$$.fragment),h=E(),y=g("div"),w=E(),A=g("div"),P=new ae(!1),this.h()},l($){e=b($,"DIV",{class:!0});var I=_(e);t=b(I,"DIV",{class:!0});var k=_(t);n=b(k,"P",{class:!0});var H=_(n);i=L(H,a),H.forEach(f),u=T(k),c=b(k,"DIV",{class:!0});var q=_(c);s=b(q,"DIV",{class:!0});var J=_(s);U(o.$$.fragment,J),J.forEach(f),l=T(q),m=b(q,"DIV",{});var K=_(m);U(v.$$.fragment,K),K.forEach(f),q.forEach(f),k.forEach(f),h=T(I),y=b(I,"DIV",{class:!0}),_(y).forEach(f),w=T(I),A=b(I,"DIV",{class:!0});var X=_(A);P=re(X,!1),X.forEach(f),I.forEach(f),this.h()},h(){p(n,"class","font-semibold"),p(s,"class","w-40"),p(c,"class","flex text-xs pt-0.5"),p(t,"class","px-4 pb-2"),p(y,"class","border border-slate-300 mx-1"),P.a=null,p(A,"class","overflow-auto px-4 py-2 text-sm"),p(e,"class","flex flex-col py-4")},m($,I){V($,e,I),d(e,t),d(t,n),d(n,i),d(t,u),d(t,c),d(c,s),z(o,s,null),d(c,l),d(c,m),z(v,m,null),d(e,h),d(e,y),d(e,w),d(e,A),P.m(x,A),M=!0},p($,I){(!M||I&2)&&a!==(a=$[1].title+"")&&O(i,a);const k={};I&2&&(k.event=$[1]),o.$set(k);const H={};I&2&&(H.event=$[1]),v.$set(H),(!M||I&2)&&x!==(x=$[1].text+"")&&P.p(x)},i($){M||(S(o.$$.fragment,$),S(v.$$.fragment,$),M=!0)},o($){D(o.$$.fragment,$),D(v.$$.fragment,$),M=!1},d($){$&&f(e),B(o),B(v)}}}function _e(r){let e,t='<div class="text-center">Hover on events to see details</div>';return{c(){e=g("div"),e.innerHTML=t,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-v876yd"&&(e.innerHTML=t),this.h()},h(){p(e,"class","flex grow justify-center items-center text-2xl text-slate-400")},m(n,a){V(n,e,a)},p:C,i:C,o:C,d(n){n&&f(e)}}}function we(r){let e,t,n,a;const i=[_e,be],u=[];function c(s,o){return s[0]===null?0:1}return t=c(r),n=u[t]=i[t](r),{c(){e=g("div"),n.c(),this.h()},l(s){e=b(s,"DIV",{class:!0});var o=_(e);n.l(o),o.forEach(f),this.h()},h(){p(e,"class","flex grow")},m(s,o){V(s,e,o),u[t].m(e,null),a=!0},p(s,[o]){let l=t;t=c(s),t===l?u[t].p(s,o):(ce(),D(u[l],1,1,()=>{u[l]=null}),de(),n=u[t],n?n.p(s,o):(n=u[t]=i[t](s),n.c()),S(n,1),n.m(e,null))},i(s){a||(S(n),a=!0)},o(s){D(n),a=!1},d(s){s&&f(e),u[t].d()}}}function $e(r,e,t){let n,{currentEvent:a}=e;return r.$$set=i=>{"currentEvent"in i&&t(0,a=i.currentEvent)},r.$$.update=()=>{r.$$.dirty&1&&t(1,n=a!==null?te[a]:null)},[a,n]}class ye extends j{constructor(e){super(),G(this,e,$e,we,W,{currentEvent:0})}}function xe(r){let e,t,n,a=r[0].title+"",i,u,c,s,o,l,m,v,h,y,w,A,P;return s=new ne({props:{event:r[0]}}),l=new se({props:{event:r[0]}}),{c(){e=g("div"),t=g("div"),n=g("div"),i=R(a),u=E(),c=g("div"),F(s.$$.fragment),o=E(),F(l.$$.fragment),m=E(),v=g("div"),h=g("input"),this.h()},l(x){e=b(x,"DIV",{class:!0});var M=_(e);t=b(M,"DIV",{class:!0});var $=_(t);n=b($,"DIV",{class:!0});var I=_(n);i=L(I,a),I.forEach(f),u=T($),c=b($,"DIV",{class:!0});var k=_(c);U(s.$$.fragment,k),o=T(k),U(l.$$.fragment,k),k.forEach(f),$.forEach(f),m=T(M),v=b(M,"DIV",{class:!0});var H=_(v);h=b(H,"INPUT",{type:!0,class:!0}),H.forEach(f),M.forEach(f),this.h()},h(){p(n,"class","font-semibold text-sm line-clamp-1"),p(c,"class","text-xs pl-1 pt-0.5"),p(t,"class","flex flex-col"),p(h,"type","checkbox"),p(h,"class","checkbox checkbox-primary"),h.checked=y=r[0].interested,p(v,"class","flex flex-col items-center justify-center"),p(e,"class","flex flex-row justify-between h-16 px-2 pt-1.5")},m(x,M){V(x,e,M),d(e,t),d(t,n),d(n,i),d(t,u),d(t,c),z(s,c,null),d(c,o),z(l,c,null),d(e,m),d(e,v),d(v,h),w=!0,A||(P=[Y(e,"mouseenter",r[1]),Y(e,"mouseleave",r[2])],A=!0)},p(x,[M]){(!w||M&1)&&a!==(a=x[0].title+"")&&O(i,a);const $={};M&1&&($.event=x[0]),s.$set($);const I={};M&1&&(I.event=x[0]),l.$set(I),(!w||M&1&&y!==(y=x[0].interested))&&(h.checked=y)},i(x){w||(S(s.$$.fragment,x),S(l.$$.fragment,x),w=!0)},o(x){D(s.$$.fragment,x),D(l.$$.fragment,x),w=!1},d(x){x&&f(e),B(s),B(l),A=!1,ie(P)}}}function Ie(r,e,t){let{event:n,eventid:a}=e;const i=oe();function u(){i("eventhover",{eventid:a})}function c(){i("eventunhover",{eventid:a})}return r.$$set=s=>{"event"in s&&t(0,n=s.event),"eventid"in s&&t(3,a=s.eventid)},[n,u,c,a]}class Me extends j{constructor(e){super(),G(this,e,Ie,xe,W,{event:0,eventid:3})}}function Ee(r,e,t){const n=r.slice();return n[2]=e[t],n[4]=t,n}function Te(r){let e,t,n,a;return e=new Me({props:{event:r[2],eventid:r[4]}}),e.$on("eventhover",r[0]),e.$on("eventunhover",r[1]),{c(){F(e.$$.fragment),t=E(),n=g("div"),this.h()},l(i){U(e.$$.fragment,i),t=T(i),n=b(i,"DIV",{class:!0}),_(n).forEach(f),this.h()},h(){p(n,"class","border border-slate-300 mx-2")},m(i,u){z(e,i,u),V(i,t,u),V(i,n,u),a=!0},p:C,i(i){a||(S(e.$$.fragment,i),a=!0)},o(i){D(e.$$.fragment,i),a=!1},d(i){i&&(f(t),f(n)),B(e,i)}}}function ke(r){let e,t,n,a,i="Done! Add to Calendar",u,c=ue(te),s=[];for(let o=0;o<c.length;o+=1)s[o]=Te(Ee(r,c,o));return{c(){e=g("div"),t=g("div");for(let o=0;o<s.length;o+=1)s[o].c();n=E(),a=g("button"),a.textContent=i,this.h()},l(o){e=b(o,"DIV",{class:!0});var l=_(e);t=b(l,"DIV",{class:!0});var m=_(t);for(let v=0;v<s.length;v+=1)s[v].l(m);m.forEach(f),n=T(l),a=b(l,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(a)!=="svelte-1i412qw"&&(a.textContent=i),l.forEach(f),this.h()},h(){p(t,"class","w-full"),p(a,"class","btn btn-success m-2"),p(e,"class","min-w-96 w-96 flex flex-col justify-between bg-slate-100 pt-1")},m(o,l){V(o,e,l),d(e,t);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(t,null);d(e,n),d(e,a),u=!0},p:C,i(o){if(!u){for(let l=0;l<c.length;l+=1)S(s[l]);u=!0}},o(o){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)D(s[l]);u=!1},d(o){o&&f(e),le(s,o)}}}function Ce(r){function e(n){Z.call(this,r,n)}function t(n){Z.call(this,r,n)}return[e,t]}class De extends j{constructor(e){super(),G(this,e,Ce,ke,W,{})}}function Se(r){let e,t='<div class="pb-4"><svg class="w-8 fill-slate-400 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg></div>';return{c(){e=g("div"),e.innerHTML=t,this.h()},l(n){e=b(n,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-tse0xa"&&(e.innerHTML=t),this.h()},h(){p(e,"class","min-w-12 bg-slate-300 rounded-l-md flex justify-center items-end")},m(n,a){V(n,e,a)},p:C,i:C,o:C,d(n){n&&f(e)}}}class Ve extends j{constructor(e){super(),G(this,e,null,Se,W,{})}}function Ae(r){let e,t,n,a,i,u,c,s,o,l,m,v;return n=new Ve({}),c=new De({}),c.$on("eventhover",r[1]),c.$on("eventunhover",Pe),m=new ye({props:{currentEvent:r[0]}}),{c(){e=g("div"),t=g("div"),F(n.$$.fragment),a=E(),i=g("div"),u=E(),F(c.$$.fragment),s=E(),o=g("div"),l=E(),F(m.$$.fragment),this.h()},l(h){e=b(h,"DIV",{class:!0});var y=_(e);t=b(y,"DIV",{class:!0});var w=_(t);U(n.$$.fragment,w),a=T(w),i=b(w,"DIV",{class:!0}),_(i).forEach(f),u=T(w),U(c.$$.fragment,w),s=T(w),o=b(w,"DIV",{class:!0}),_(o).forEach(f),l=T(w),U(m.$$.fragment,w),w.forEach(f),y.forEach(f),this.h()},h(){p(i,"class","border border-slate-300"),p(o,"class","border border-slate-300"),p(t,"class","bg-slate-100 w-3/4 h-3/4 rounded-md flex flex-row shadow-2xl my-30 mx-12"),p(e,"class","bg-slate-800 h-screen flex justify-center items-center")},m(h,y){V(h,e,y),d(e,t),z(n,t,null),d(t,a),d(t,i),d(t,u),z(c,t,null),d(t,s),d(t,o),d(t,l),z(m,t,null),v=!0},p(h,[y]){const w={};y&1&&(w.currentEvent=h[0]),m.$set(w)},i(h){v||(S(n.$$.fragment,h),S(c.$$.fragment,h),S(m.$$.fragment,h),v=!0)},o(h){D(n.$$.fragment,h),D(c.$$.fragment,h),D(m.$$.fragment,h),v=!1},d(h){h&&f(e),B(n),B(c),B(m)}}}function Pe(r){}function He(r,e,t){let n=null;function a(i){t(0,n=i.detail.eventid)}return[n,a]}class Fe extends j{constructor(e){super(),G(this,e,He,Ae,W,{})}}export{Fe as component};
