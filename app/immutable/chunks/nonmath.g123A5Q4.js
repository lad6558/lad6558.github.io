import{s as rl,e as o,b as a,c as i,j as s,g as p,m as l,n as pe,f as n}from"./scheduler.5tJKh472.js";import{S as hl,i as dl}from"./index.SdZpk_LJ.js";function fl(ul){let u,ue='(The following text is translated by ChatGPT from Chinese, so misquotes and errors are possible. You can find <a href="https://mp.weixin.qq.com/s/cilCl4UVgakWK-8kg9knEg" rel="nofollow">the original Chinese version here</a>.)',ut,r,re='<p><img src="/blogs/pnp/sipser.jpg" alt="Michael Sipser"/></p> <figcaption>This is Professor Michael Sipser. Back in his younger years, he spent decades thinking about whether P is equal to NP (a famous unsolved problem in computer science). While he still hasn’t figured it out, he’s dedicated himself to teaching MIT’s 18.404 Theory of Computation class, where he’s known as one of the most beloved professors on campus.</figcaption>',rt,h,he="P = NP",ht,d,de="One day in my sophomore year, I thought I’d discovered the solution to the famous unsolved computer science problem, P = NP. In 24 hours, I went from doubting myself to doubting reality, then into pure euphoria, before finally settling back into disillusionment.",dt,f,fe="It all started with an assignment from our 18.404 class. The question mentioned an algorithm that could solve the 2-SAT problem. Naturally, I thought, “Why stop there? Why can’t this work for 3-SAT? Why can’t this prove P = NP?”",ft,m,me="(For context: 2-SAT is a solved problem, but 3-SAT has no known polynomial solution. If a 3-SAT solution were found, it would prove P = NP.)",mt,v,ve="So, I did some quick mental math and ran it by a classmate, and since we couldn’t find any obvious flaws, I decided to sleep on it and tackle it fresh in the morning.",vt,x,xe="After all, if I were right, the foundations of theoretical computer science would crumble, and history itself would be changed. Countless computer scientists, including Sipser himself, have dedicated days and years to this problem. Could Sipser really have casually slipped a solution to P = NP into our homework?",xt,y,ye="The next morning, I still couldn’t find any holes in my theory. In the EECS lounge, I spotted a grad student I knew heading out for breakfast and thought I’d ask her to check my proof.",yt,w,we="“Hey! You’re in 18.404, right?”",wt,C,Ce="She replied, “Yes I am! Hi Andi, how are you doing?”",Ct,c,ce="“Doesn’t matter. Have you looked at the homework problems yet? Because I think I’ve just proved P = NP.”",ct,b,be="<em>Short, awkward silence</em>",bt,P,Pe="Her: “Umm, I’m pretty sure you didn’t? Sipser’s spent a lot of time thinking about it. There’s no way he could…”",Pt,k,ke="Then, I heard Sipser’s voice echo in my head from one of our lectures:",kt,I,Ie="<p>I myself have spent many years thinking about whether P is equal to NP, perhaps too many. So, why is it so hard to prove we can’t compute NP efficiently? Because we’re up against a formidable foe here – human intellect.</p>",It,_,_e="So, I said, “Maybe he’s too OLD for this.”",_t,T,Te="Her face shifted from “I’m excited for breakfast” to “I’ll have to starve for a while.”",Tt,g,ge="“Oh, you’re one of <em>those</em> people.”",gt,S,Se="“Yep. Here’s how the algorithm works…”",St,H,He="She didn’t point out any flaws (or maybe she just really wanted breakfast). Throughout the day, I had similar conversations with sophomores, juniors, seniors—they all started out as skeptics, but by the end of each conversation, no one could poke a hole in my arguments. With each retelling, my initial “there’s no way I’m right” attitude turned into genuine confidence.",Ht,q,qe="I even joked to a senior, “I am going to finish grad school before you do.”",qt,A,Ae="In my head, I’d already imagined myself on the front pages, lecturing passionately at conferences, while engineers worldwide scrambled to fix their broken encryption systems. Nineteen years of total obscurity, and now here I was, Yitang Zhang 2.0.",At,N,Ne="Finally, I put my theory to the ultimate test: I asked Professor Sipser himself on Piazza, “Why doesn’t this algorithm prove P = NP?”",Nt,M,Me="After a few back-and-forth clarifications, he said, “Uh, that’s not quite how the algorithm works…”",Mt,j,je="“Oh.” Then it hit me: I had misread the problem entirely. My so-called “algorithm” was totally invalid.",jt,L,Le="And I remembered Sipser’s words from another lecture:",Lt,z,ze="<p>People have been sending me letters for decades, claiming to have proved P = NP or P ≠ NP. Eventually, I just stopped responding. Not really worth my time.</p>",zt,B,Be="Turns out, if I had understood the original problem statement correctly, I wouldn’t have even known how to solve the assignment problem. My meteoric rise to “computer science prodigy” and crash down to “student who can’t solve his own homework” happened in the span of a day.",Bt,O,Oe="But then I thought of Yitang Zhang, who spent years publishing under a flawed advisor’s conclusions only to have it all overturned—a journey that took him over a decade. I, on the other hand, misread a single problem and took only a day to fall from grace. Not too bad, really.",Ot,E,Ee="Programmers around the globe can relax for another day.",Et,W,We=`<p><img src="/blogs/pnp/practicle.jpg" alt="&#39;Practicle&#39; Solvability"/></p> <figcaption>Sipser (writes): The idea of Polynomial Time is very important because it is not only mathematically elegant, but also roughly corresponds to the idea of &quot;practicle&quot; solvability.
<p>He paused at the word “practicle,” gave a thoughtful scratch of the head, and then, with a wry smile, corrected the typo. It was a rare nod to practicality in a room otherwise steeped in pure theory.</p></figcaption>`,Wt,Y,Ye="P ≠ NP",Yt,U,Ue="Fast forward to finals week. In a practice exam for 18.404, there was a true/false question with the options “Yes,” “No,” and “Open Problem.”",Ut,F,Fe="It looked false, so I confidently chose “No.” But the answer key said “Open Problem,” because the question boiled down to the P = NP problem. I didn’t want to mark myself wrong.",Ft,G,Ge="How cool would it be if this question were to appear on the real exam, and I could prove P ≠ NP right then and there?",Gt,K,Ke="Then an idea suddenly hit me: I could prove P ≠ NP using Shannon’s information theory. A rough sketch of the proof quickly appeared in my mind.",Kt,D,De="And then, daydreaming took over.",Dt,Q,Qe="You see, unlike the many failed attempts with diagonalization, my proof would go straight to the core of nondeterministic vs. deterministic computation. It would bridge seemingly unrelated fields. How poetic would that be!",Qt,R,Re="More importantly, if I were right, my answer to the multiple-choice would be the only correct one. The rest of the class, who marked it as an open problem, would all be wrong due to this unexpected breakthrough, and I’d earn a solid four-point lead.",Rt,Z,Ze="If the TA marked my answer wrong, I’d show him my proof. He’d definitely be skeptical—until, after a solid two hours of writing on the whiteboard, he’d start nodding along and eventually propose that we write up an urgent email to the professor.",Zt,V,Ve="Sipser, no stranger to “breakthrough” letters, would tell us to wait until the next day. And so, the next morning, he’d stroll into his office with a cup of tea only to find two exhausted students slumped at his door, surrounded by stacks of paper.",Vt,J,Je="He’d wake us, listen gravely to our explanation, until he forgot to add water to his teacup and started chewing on the tea leaves. Half an hour later, he’d stand up, draw the curtains, and whatever happened in that room… no one would know. But the news would soon spread: Sipser had finally published the paper of his life, titled “P ≠ NP.”",Jt,X,Xe="What everyone would talk about most, though, is that Sipser was only the second author. The first author was listed as “Anonymous.”",Xt,$,$e="Speculation would run wild as to who this mysterious “Anonymous” first author might be. Some would say it was GPT-5. Some would say it was Sipser’s cat. Some would even claim he’d channeled Alan Turing’s spirit.",$t,tt,tl="But Sipser, ever elusive, would reveal nothing. And when the Turing Award committee came knocking, he’d simply wave them off, saying the first author preferred anonymity.",te,et,el="As for me? I’d keep my identity under wraps because I knew I wasn’t a genius. I didn’t want to handle that level of expectation. I was just a regular programmer who wanted a quiet life.",ee,lt,ll="Every few years, the three of us would occasionally get together and grab a cup of tea.",le,nt,nl="Many years later, Sipser would take our secret to the grave.",ne,ot,ol="I’d attend his funeral, locking eyes with my old TA, now a big name in theoretical computer science, with the same unkempt hair he had when he taught my recitation. After the service, we’d sit outside Sipser’s empty office in silence. Eventually, I’d doze off, only to wake and find the TA gone, in his place a bouquet of white lilies. We’d never see each other again.",oe,it,il="I’d retire as an ordinary software engineering manager. On my deathbed, I’d confess this secret to my partner and two kids. They’d find my original proof on the back of the practice exam sheets, and the world would be shocked. But I’d already be gone, at peace.",ie,st,sl="Back in reality, this whole story was just a daydream. I wandered inside my dorm excitedly, until I ran into a senior who I could check my proof with. After an hour of heated debate, I finally realized my “proof” couldn’t even provide a lower bound on the complexity of a basic sorting algorithm, let alone tackle P ≠ NP.",se,at,al="She let me know she had a final project to finish, and I slunk back to my room, knowing that my answer would have to be marked wrong.",ae,pt,pl="Looking back, I spent two hours dreaming about my future fame, but it only took one hour for reality to bring me back down.";return{c(){u=o("p"),u.innerHTML=ue,ut=a(),r=o("figure"),r.innerHTML=re,rt=a(),h=o("h4"),h.textContent=he,ht=a(),d=o("p"),d.textContent=de,dt=a(),f=o("p"),f.textContent=fe,ft=a(),m=o("p"),m.textContent=me,mt=a(),v=o("p"),v.textContent=ve,vt=a(),x=o("p"),x.textContent=xe,xt=a(),y=o("p"),y.textContent=ye,yt=a(),w=o("p"),w.textContent=we,wt=a(),C=o("p"),C.textContent=Ce,Ct=a(),c=o("p"),c.textContent=ce,ct=a(),b=o("p"),b.innerHTML=be,bt=a(),P=o("p"),P.textContent=Pe,Pt=a(),k=o("p"),k.textContent=ke,kt=a(),I=o("blockquote"),I.innerHTML=Ie,It=a(),_=o("p"),_.textContent=_e,_t=a(),T=o("p"),T.textContent=Te,Tt=a(),g=o("p"),g.innerHTML=ge,gt=a(),S=o("p"),S.textContent=Se,St=a(),H=o("p"),H.textContent=He,Ht=a(),q=o("p"),q.textContent=qe,qt=a(),A=o("p"),A.textContent=Ae,At=a(),N=o("p"),N.textContent=Ne,Nt=a(),M=o("p"),M.textContent=Me,Mt=a(),j=o("p"),j.textContent=je,jt=a(),L=o("p"),L.textContent=Le,Lt=a(),z=o("blockquote"),z.innerHTML=ze,zt=a(),B=o("p"),B.textContent=Be,Bt=a(),O=o("p"),O.textContent=Oe,Ot=a(),E=o("p"),E.textContent=Ee,Et=a(),W=o("figure"),W.innerHTML=We,Wt=a(),Y=o("h4"),Y.textContent=Ye,Yt=a(),U=o("p"),U.textContent=Ue,Ut=a(),F=o("p"),F.textContent=Fe,Ft=a(),G=o("p"),G.textContent=Ge,Gt=a(),K=o("p"),K.textContent=Ke,Kt=a(),D=o("p"),D.textContent=De,Dt=a(),Q=o("p"),Q.textContent=Qe,Qt=a(),R=o("p"),R.textContent=Re,Rt=a(),Z=o("p"),Z.textContent=Ze,Zt=a(),V=o("p"),V.textContent=Ve,Vt=a(),J=o("p"),J.textContent=Je,Jt=a(),X=o("p"),X.textContent=Xe,Xt=a(),$=o("p"),$.textContent=$e,$t=a(),tt=o("p"),tt.textContent=tl,te=a(),et=o("p"),et.textContent=el,ee=a(),lt=o("p"),lt.textContent=ll,le=a(),nt=o("p"),nt.textContent=nl,ne=a(),ot=o("p"),ot.textContent=ol,oe=a(),it=o("p"),it.textContent=il,ie=a(),st=o("p"),st.textContent=sl,se=a(),at=o("p"),at.textContent=al,ae=a(),pt=o("p"),pt.textContent=pl},l(t){u=i(t,"P",{"data-svelte-h":!0}),s(u)!=="svelte-jotawk"&&(u.innerHTML=ue),ut=p(t),r=i(t,"FIGURE",{"data-svelte-h":!0}),s(r)!=="svelte-t59kth"&&(r.innerHTML=re),rt=p(t),h=i(t,"H4",{"data-svelte-h":!0}),s(h)!=="svelte-1l7cjop"&&(h.textContent=he),ht=p(t),d=i(t,"P",{"data-svelte-h":!0}),s(d)!=="svelte-s3g2qk"&&(d.textContent=de),dt=p(t),f=i(t,"P",{"data-svelte-h":!0}),s(f)!=="svelte-11chhih"&&(f.textContent=fe),ft=p(t),m=i(t,"P",{"data-svelte-h":!0}),s(m)!=="svelte-e819to"&&(m.textContent=me),mt=p(t),v=i(t,"P",{"data-svelte-h":!0}),s(v)!=="svelte-1xmlz5z"&&(v.textContent=ve),vt=p(t),x=i(t,"P",{"data-svelte-h":!0}),s(x)!=="svelte-14mzog8"&&(x.textContent=xe),xt=p(t),y=i(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-1gs7kq6"&&(y.textContent=ye),yt=p(t),w=i(t,"P",{"data-svelte-h":!0}),s(w)!=="svelte-13srbw"&&(w.textContent=we),wt=p(t),C=i(t,"P",{"data-svelte-h":!0}),s(C)!=="svelte-o9yzb3"&&(C.textContent=Ce),Ct=p(t),c=i(t,"P",{"data-svelte-h":!0}),s(c)!=="svelte-4ij2jp"&&(c.textContent=ce),ct=p(t),b=i(t,"P",{"data-svelte-h":!0}),s(b)!=="svelte-18dhr99"&&(b.innerHTML=be),bt=p(t),P=i(t,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1v1up1l"&&(P.textContent=Pe),Pt=p(t),k=i(t,"P",{"data-svelte-h":!0}),s(k)!=="svelte-1n1737a"&&(k.textContent=ke),kt=p(t),I=i(t,"BLOCKQUOTE",{"data-svelte-h":!0}),s(I)!=="svelte-gbk4wi"&&(I.innerHTML=Ie),It=p(t),_=i(t,"P",{"data-svelte-h":!0}),s(_)!=="svelte-49wm72"&&(_.textContent=_e),_t=p(t),T=i(t,"P",{"data-svelte-h":!0}),s(T)!=="svelte-snoi4y"&&(T.textContent=Te),Tt=p(t),g=i(t,"P",{"data-svelte-h":!0}),s(g)!=="svelte-d22bht"&&(g.innerHTML=ge),gt=p(t),S=i(t,"P",{"data-svelte-h":!0}),s(S)!=="svelte-1u5cmsn"&&(S.textContent=Se),St=p(t),H=i(t,"P",{"data-svelte-h":!0}),s(H)!=="svelte-iwyyen"&&(H.textContent=He),Ht=p(t),q=i(t,"P",{"data-svelte-h":!0}),s(q)!=="svelte-1sj6p57"&&(q.textContent=qe),qt=p(t),A=i(t,"P",{"data-svelte-h":!0}),s(A)!=="svelte-10yif84"&&(A.textContent=Ae),At=p(t),N=i(t,"P",{"data-svelte-h":!0}),s(N)!=="svelte-1d78c7"&&(N.textContent=Ne),Nt=p(t),M=i(t,"P",{"data-svelte-h":!0}),s(M)!=="svelte-1ktcmk1"&&(M.textContent=Me),Mt=p(t),j=i(t,"P",{"data-svelte-h":!0}),s(j)!=="svelte-10c3gfr"&&(j.textContent=je),jt=p(t),L=i(t,"P",{"data-svelte-h":!0}),s(L)!=="svelte-g3ohuy"&&(L.textContent=Le),Lt=p(t),z=i(t,"BLOCKQUOTE",{"data-svelte-h":!0}),s(z)!=="svelte-1bc7h2l"&&(z.innerHTML=ze),zt=p(t),B=i(t,"P",{"data-svelte-h":!0}),s(B)!=="svelte-1qe3sm6"&&(B.textContent=Be),Bt=p(t),O=i(t,"P",{"data-svelte-h":!0}),s(O)!=="svelte-3vp2is"&&(O.textContent=Oe),Ot=p(t),E=i(t,"P",{"data-svelte-h":!0}),s(E)!=="svelte-1mx2afg"&&(E.textContent=Ee),Et=p(t),W=i(t,"FIGURE",{"data-svelte-h":!0}),s(W)!=="svelte-1lyhi8c"&&(W.innerHTML=We),Wt=p(t),Y=i(t,"H4",{"data-svelte-h":!0}),s(Y)!=="svelte-1c720s8"&&(Y.textContent=Ye),Yt=p(t),U=i(t,"P",{"data-svelte-h":!0}),s(U)!=="svelte-wa75f7"&&(U.textContent=Ue),Ut=p(t),F=i(t,"P",{"data-svelte-h":!0}),s(F)!=="svelte-b3345y"&&(F.textContent=Fe),Ft=p(t),G=i(t,"P",{"data-svelte-h":!0}),s(G)!=="svelte-11a5mpp"&&(G.textContent=Ge),Gt=p(t),K=i(t,"P",{"data-svelte-h":!0}),s(K)!=="svelte-ozxwbz"&&(K.textContent=Ke),Kt=p(t),D=i(t,"P",{"data-svelte-h":!0}),s(D)!=="svelte-1qu3dee"&&(D.textContent=De),Dt=p(t),Q=i(t,"P",{"data-svelte-h":!0}),s(Q)!=="svelte-10eh41d"&&(Q.textContent=Qe),Qt=p(t),R=i(t,"P",{"data-svelte-h":!0}),s(R)!=="svelte-1uync4a"&&(R.textContent=Re),Rt=p(t),Z=i(t,"P",{"data-svelte-h":!0}),s(Z)!=="svelte-n92uxa"&&(Z.textContent=Ze),Zt=p(t),V=i(t,"P",{"data-svelte-h":!0}),s(V)!=="svelte-140s1pr"&&(V.textContent=Ve),Vt=p(t),J=i(t,"P",{"data-svelte-h":!0}),s(J)!=="svelte-lfpvlo"&&(J.textContent=Je),Jt=p(t),X=i(t,"P",{"data-svelte-h":!0}),s(X)!=="svelte-t3drc5"&&(X.textContent=Xe),Xt=p(t),$=i(t,"P",{"data-svelte-h":!0}),s($)!=="svelte-2gp1v3"&&($.textContent=$e),$t=p(t),tt=i(t,"P",{"data-svelte-h":!0}),s(tt)!=="svelte-eu3jza"&&(tt.textContent=tl),te=p(t),et=i(t,"P",{"data-svelte-h":!0}),s(et)!=="svelte-pk5s0w"&&(et.textContent=el),ee=p(t),lt=i(t,"P",{"data-svelte-h":!0}),s(lt)!=="svelte-15qeey6"&&(lt.textContent=ll),le=p(t),nt=i(t,"P",{"data-svelte-h":!0}),s(nt)!=="svelte-1976hwg"&&(nt.textContent=nl),ne=p(t),ot=i(t,"P",{"data-svelte-h":!0}),s(ot)!=="svelte-1p4x2n9"&&(ot.textContent=ol),oe=p(t),it=i(t,"P",{"data-svelte-h":!0}),s(it)!=="svelte-1klpx3o"&&(it.textContent=il),ie=p(t),st=i(t,"P",{"data-svelte-h":!0}),s(st)!=="svelte-1fjz9e7"&&(st.textContent=sl),se=p(t),at=i(t,"P",{"data-svelte-h":!0}),s(at)!=="svelte-1tevm01"&&(at.textContent=al),ae=p(t),pt=i(t,"P",{"data-svelte-h":!0}),s(pt)!=="svelte-rqfrsi"&&(pt.textContent=pl)},m(t,e){l(t,u,e),l(t,ut,e),l(t,r,e),l(t,rt,e),l(t,h,e),l(t,ht,e),l(t,d,e),l(t,dt,e),l(t,f,e),l(t,ft,e),l(t,m,e),l(t,mt,e),l(t,v,e),l(t,vt,e),l(t,x,e),l(t,xt,e),l(t,y,e),l(t,yt,e),l(t,w,e),l(t,wt,e),l(t,C,e),l(t,Ct,e),l(t,c,e),l(t,ct,e),l(t,b,e),l(t,bt,e),l(t,P,e),l(t,Pt,e),l(t,k,e),l(t,kt,e),l(t,I,e),l(t,It,e),l(t,_,e),l(t,_t,e),l(t,T,e),l(t,Tt,e),l(t,g,e),l(t,gt,e),l(t,S,e),l(t,St,e),l(t,H,e),l(t,Ht,e),l(t,q,e),l(t,qt,e),l(t,A,e),l(t,At,e),l(t,N,e),l(t,Nt,e),l(t,M,e),l(t,Mt,e),l(t,j,e),l(t,jt,e),l(t,L,e),l(t,Lt,e),l(t,z,e),l(t,zt,e),l(t,B,e),l(t,Bt,e),l(t,O,e),l(t,Ot,e),l(t,E,e),l(t,Et,e),l(t,W,e),l(t,Wt,e),l(t,Y,e),l(t,Yt,e),l(t,U,e),l(t,Ut,e),l(t,F,e),l(t,Ft,e),l(t,G,e),l(t,Gt,e),l(t,K,e),l(t,Kt,e),l(t,D,e),l(t,Dt,e),l(t,Q,e),l(t,Qt,e),l(t,R,e),l(t,Rt,e),l(t,Z,e),l(t,Zt,e),l(t,V,e),l(t,Vt,e),l(t,J,e),l(t,Jt,e),l(t,X,e),l(t,Xt,e),l(t,$,e),l(t,$t,e),l(t,tt,e),l(t,te,e),l(t,et,e),l(t,ee,e),l(t,lt,e),l(t,le,e),l(t,nt,e),l(t,ne,e),l(t,ot,e),l(t,oe,e),l(t,it,e),l(t,ie,e),l(t,st,e),l(t,se,e),l(t,at,e),l(t,ae,e),l(t,pt,e)},p:pe,i:pe,o:pe,d(t){t&&(n(u),n(ut),n(r),n(rt),n(h),n(ht),n(d),n(dt),n(f),n(ft),n(m),n(mt),n(v),n(vt),n(x),n(xt),n(y),n(yt),n(w),n(wt),n(C),n(Ct),n(c),n(ct),n(b),n(bt),n(P),n(Pt),n(k),n(kt),n(I),n(It),n(_),n(_t),n(T),n(Tt),n(g),n(gt),n(S),n(St),n(H),n(Ht),n(q),n(qt),n(A),n(At),n(N),n(Nt),n(M),n(Mt),n(j),n(jt),n(L),n(Lt),n(z),n(zt),n(B),n(Bt),n(O),n(Ot),n(E),n(Et),n(W),n(Wt),n(Y),n(Yt),n(U),n(Ut),n(F),n(Ft),n(G),n(Gt),n(K),n(Kt),n(D),n(Dt),n(Q),n(Qt),n(R),n(Rt),n(Z),n(Zt),n(V),n(Vt),n(J),n(Jt),n(X),n(Xt),n($),n($t),n(tt),n(te),n(et),n(ee),n(lt),n(le),n(nt),n(ne),n(ot),n(oe),n(it),n(ie),n(st),n(se),n(at),n(ae),n(pt))}}}const xl={title:"A Non-Mathematician's Apology",description:"Some would say it was GPT-5. Some would say it was Sipser's cat. Some would even claim he’d channeled Alan Turing’s spirit.",date:"2023-8-18",published:!1,image:"/blogs/pnp/practicle.jpg"};class yl extends hl{constructor(u){super(),dl(this,u,null,fl,rl,{})}}export{yl as default,xl as metadata};
