import{s as En,e as l,b as a,c as s,j as o,g as u,m as i,n as ui,f as n}from"./scheduler.5tJKh472.js";import{S as Wn,i as Nn}from"./index.SdZpk_LJ.js";function Rn(Fn){let r,ri='<p>(The following text is translated by ChatGPT from Chinese, so misquotes and errors are possible. You can find <a href="https://mp.weixin.qq.com/s/WI6mIoC8uI96pqi1i-WC3A" rel="nofollow">the original Chinese version here</a>. )</p>',At,p,pi="Part One",Ft,h,hi="This semester, I am in two statistics classes: one from the Math Department (Intro to Statistics) and the other from the Computer Science Department (Intro to Statistical Data Analysis).",Et,m,mi="Though the content is similar, the teaching styles are vastly different.",Wt,f,fi="The math department’s course is taught by a postdoc who meticulously defines, proves, and explains each theorem step by step.",Nt,v,vi="In contrast, the computer science course is taught by a Russian professor who previously did machine learning at Amazon.",Rt,d,di="For him, it is not about right or wrong: it is about what is more “cool.”",Dt,x,xi="“We’re calculating an eigenvalue here because it is a cool thing to do - even more cool if the matrix is symmetric.”",Ot,C,Ci="“Both of these estimators are cool. Plug-in is cool, but unbiased is also cool. It’s hard to say which one is more cool.”",Gt,c,ci="Part Two",Ut,b,bi="<p>That is what cool people do. Be brave. Be fearless. Make me proud.</p>",Qt,w,wi="Turns out these “cool” statements are not just random. The Russian professor knows what he is talking about.",Kt,y,yi="Once, he posed a problem: there are N balls in a bag (N unknown), numbered from 1 to N. You draw n balls (n is much smaller than N). How do you estimate the total number of balls in the bag?",Vt,_,_i="His solution was to take the largest number from the drawn balls as the estimate for N.",Yt,k,ki="He said this method was cool and that the British used a similar approach with German tank serial numbers to estimate the total number of German tanks during WWII.",Jt,P,Pi="Initially, I thought this didn’t make sense. Taking the maximum number would only underestimate N. This estimator is biased.",Xt,T,Ti="I thought a better estimator would be the average of all the numbers, which would be around N/2, and you double it to get N. The average would be an “unbiased” estimator, meaning that it does not tend to underestimate nor overestimate.",Zt,I,Ii="But it turns out his estimator of simpling taking the max, while simple and biased, has a lower RMSE (Root Mean Squared Error) than the unbiased estimator.",$t,g,gi='<p><img src="/blogs/pseudo/rmse.png" alt="Class slides saying the mysterious estimator actually achieves lower RMSE"/></p> <figcaption><p>All models are wrong. Some are useful.</p></figcaption>',te,H,Hi="This Russian professor calls machine learning a “fearless method.” He often lauds the pragmaticism of fearless approaches that aren’t followed with any theoretical justifications. An example from the estimator lecture would be:",ee,M,Mi="“The cool way to do plugin is that you never stop. Whenever you see a statistic about the true distribution, you add that little hat on top of the expectation and make it about the empirical distribution. That is what cool people do. Be brave. Be fearless. Make me proud.”",ie,B,Bi="Part Three",ne,q,qi="<p>We don’t need data scientists. We need data engineers.</p>",le,L,Li="The triumph of fearless methods of machine learning over traditional statistics is just a sign of the decline of intellectualism. Or maybe instead of decline, it would be regression toward the mean. Being useful has never been the primary goal of rigorous math and science anyway.",se,S,Si='In the 20th century, we had the atomic bomb and semiconductors, and, for a brief period, science was productive. Turns out that was the exception, not the norm. Human has learned <a href="http://www.incompleteideas.net/IncIdeas/BitterLesson.html" rel="nofollow">a bitter lesson</a>: human knowledge is nothing compared to raw computational power.',oe,j,ji="That Russian professor says we don’t need data scientists. We need data engineers.",ae,z,zi='He pronounces “gradient descent” as “gu-lah-di-ant,” because no matter how you pronounce it, it just works. (As for science, if you <a href="http://prefrontal.org/files/posters/Bennett-Salmon-2009.pdf" rel="nofollow">pronounce it the wrong way</a>, it sometimes may not work.)',ue,A,Ai="“Statisticians get scared when optimizing more than ten parameters, but we fearless computer scientists optimize billions of parameters with gradient descent effortlessly.”",re,F,Fi='<p><img src="/blogs/pseudo/salmon.png" alt="A paper titled An argument for multiple comparisons correction"/></p> <figcaption>Hard, rigorous science depends on many assumptions. But we humans can&#39;t keep track of all the assumptions, so we sometimes accidentally break them and science stops to work. &quot;The hard and stiff will be broken. The soft and supple will prevail.&quot;</figcaption>',pe,E,Ei="He even pronounces “honestly” with the “h” sound. “huh-nee-slee”. That’s because he doesn’t care how a posh French person would pronounce it (the word “honest” comes from Middle French). His way gets the meaning across.",he,W,Wi="If you strip his data from Siberian mammoths and send it through oil pipes, it could run Soviet tanks. His fearless methods work everywhere.",me,N,Ni="Part Four",fe,R,Ri="With AI4Science, it seems like solving scientific problems needs less and less scientific knowledge, just more data.",ve,D,Di="AlphaFold only needs to read a sequence to predict protein structures. Disease screening only requires reading an image. Studying a specific discipline seems less worthy of one’s time than just making a huge dataset and feeding it into a neural network.",de,O,Oi="When I was young, naive, and curious about science, I took the Intro to Neuroscience class at MIT.",xe,G,Gi="I ended up sleeping through every class and dropped it after two weeks. The only thing I remember is the professor saying, “I have a personal interest in bears.” because his last name was Bear.",Ce,U,Ui="When told him I would drop the class, Professor Bear said, “Young man, neuroscience is a long journey. There’s a lot of interesting stuff ahead. But like learning a language, you have to memorize the vocabulary and grammar first — what you’re learning now is just the most tedious part of the neuroscience language.”",ce,Q,Qi="Learning a language? I don’t have the time for that. Machine translation is quicker.",be,K,Ki="I swapped the class for a computer science class. Gotta stay away from the bear market.",we,V,Vi="Part Five",ye,Y,Yi='Professor Bear’s approach reflects the bottom-up thinking of neuroscience: starting small, studying neurotransmitters, neurons, neural pathways, and finally brain regions. This scientific rigor means every conclusion should be experimentally verifiable (well, <a href="https://en.wikipedia.org/wiki/Replication_crisis" rel="nofollow">should be</a>).',_e,J,Ji="However, this rigor is also a constraint.",ke,X,Xi="Because many fundamental aspects are not fully understood, scientists are cautious about making fearless claims on issues people care about, like “how to learn more effectively” or “how to categorize people.”",Pe,Z,Zi="This leads to a situation where fearless but unverified theories emerge before scientific evidence catches up.",Te,$,$i="Most people don’t have time to build a systematic understanding of neuroscience. They prefer simple, general theories like “left brain rational, right brain emotional,” “IQ above 140 means you’re in the top 1%,” or “the human brain has three parts: reptilian, mammalian, and rational.”",Ie,tt,tn="Despite academic disdain for these theories due to their inaccuracies, they become popular for their simplicity and applicability. IQ scores become entry criteria for some schools and companies; MBTI is what people actually ask about, not the Big Five; the three-part brain theory explains human desires and motivations and makes pop psychology bestsellers.",ge,et,en="Traditional scientists, addicted to scientific rigor, dare not propose such fearless, universal theories. This violates their integrity as scientists.",He,it,nn="“Pseudoscientists” don’t care. They step outside the existing theoretical framework, finding a balance between rigor and practicality, and propose bold theories.",Me,nt,ln="They break free from the ivory tower, bringing fire to the world. This fire, though uncontrolled and potentially dangerous, also brings warmth and joy to those outside the tower.",Be,lt,sn="Some may say with disdain that these pseudoscientists have never been inside the ivory tower in the first place.",qe,st,on="Indeed, they have nothing to be afraid of because they have nothing to lose.",Le,ot,an="The world belongs to fearless people.",Se,at,un="And I think the world is better with those pseudoscientific theories than without.",je,ut,rn="If the goal of science is to increase human understanding of the world, is verified, disease-curing science necessary closer to that goal than understandable, applicable pseudoscience?",ze,rt,pn='<p><img src="/blogs/pseudo/ai_methodology.png" alt="xkcd 2451 AI methodology"/></p> <figcaption>&quot;If it cannot be falsified, it is pseudoscience.&quot; But if it can&#39;t be falsified, does that mean it brings no social good?</figcaption>',Ae,pt,hn="Part Six",Fe,ht,mn="At one end of the world stands the ivory tower of academia, home to mathematicians, neuroscientists, and statisticians. They derive accurate theories with rigorous deductions and scientific methods. Their theories launch rockets, save lives, and build human knowledge.",Ee,mt,fn="At the other end is a bustling town where people are busy with their activities, having no time to ponder the symbols and theories on parchment in the ivory tower, but eager to live better lives.",We,ft,vn="In between walks a group of barefoot individuals traversing the knowledge wilderness. They carry stolen vases and torn pages from the ivory tower, looking to monetize them in the town.",Ne,vt,dn="They are unwelcome in the ivory tower, where they are called pseudoscientists.",Re,dt,xn="But they bridge the ivory tower and the town.",De,xt,Cn="There’s nothing shameful about being the bridge. Whether it’s the ivory tower, the town, or the barefoot individuals, all contribute to the world in their own way.",Oe,Ct,cn="I want to be the bridge.",Ge,ct,bn="Part Seven",Ue,bt,wn="<p>There has to be a way to prove that I am better. If the Big Five is not falsifiable, how is it science?”</p>",Qe,wt,yn="I can’t do AI4Science because I lack hard science knowledge. But I know some psychology, so I can do AI4PseudoScience for my MEng (Master of Engineering) project.",Ke,yt,_n="To do AI4PseudoScience, we need to first identify the important problems in pseudoscience. I believe MBTI is one such problem.",Ve,_t,kn="It was devised by a mother-daughter duo after reading Jung’s theory. The testing method is primitive: self-administered questionnaires. Very unscientific. (btw, I’m an INTP)",Ye,kt,Pn="I want to leverage machine learning to create a more accurate method of classifying people while keeping the simplicity and potential to become popular. Specifically, using representation learning to let machines summarize four new dimensions, then cluster into sixteen types.",Je,Pt,Tn="Neural networks can do more than just read questionnaires. They can analyze videos, audio, text, and even mouse-click speeds. The test begins the moment you visit the website.",Xe,Tt,In="I combine machine learning and psychology, two important pseudoscience fields. Very cool. Very fearless.",Ze,It,gn="I have a dream that one day people will ask about each other’s ANDI instead of MBTI.",$e,gt,Hn="When I brought this up to a neuroscientist, he said:",ti,Ht,Mn="“However, let’s say, if you succeed and come up with your ANDI, how do you prove to the academia that it is better than existing personality theories, like MBTI or the Big Five?”",ei,Mt,Bn="“Maybe I use ANDI to predict recruiting outcomes and social compatibility, and finds that it predicts better than the Big Five?”",ii,Bt,qn="The neuroscientist shook his head. “The Big Five researchers will say the Big Five is just a <em>theory</em> of personality. They never claimed it to be the best for predicting recruiting or social compatibility.”",ni,qt,Ln="“There has to be a way to prove that I am better. If the Big Five is not falsifiable, how is it science?”",li,Lt,Sn="He smiled. “Exactly.”",si,St,jn="I was a bit frustrated, but then it dawned on me. I am not even working towards a PhD. I am just working towards a Master of Engineering degree. So, I don’t have to care about my academic future. What I care about is making personality theories better.",oi,jt,zn="The Big Five researchers don’t have to acknowledge my work. Even if the whole academia doesn’t acknowledge my work, so be it. My work is for the laypeople who want to have a better understanding of themselves and each others.",ai,zt,An="I’ll be cool. I’ll Be fearless. I’ll make myself proud.";return{c(){r=l("aside"),r.innerHTML=ri,At=a(),p=l("h4"),p.textContent=pi,Ft=a(),h=l("p"),h.textContent=hi,Et=a(),m=l("p"),m.textContent=mi,Wt=a(),f=l("p"),f.textContent=fi,Nt=a(),v=l("p"),v.textContent=vi,Rt=a(),d=l("p"),d.textContent=di,Dt=a(),x=l("p"),x.textContent=xi,Ot=a(),C=l("p"),C.textContent=Ci,Gt=a(),c=l("h4"),c.textContent=ci,Ut=a(),b=l("blockquote"),b.innerHTML=bi,Qt=a(),w=l("p"),w.textContent=wi,Kt=a(),y=l("p"),y.textContent=yi,Vt=a(),_=l("p"),_.textContent=_i,Yt=a(),k=l("p"),k.textContent=ki,Jt=a(),P=l("p"),P.textContent=Pi,Xt=a(),T=l("p"),T.textContent=Ti,Zt=a(),I=l("p"),I.textContent=Ii,$t=a(),g=l("figure"),g.innerHTML=gi,te=a(),H=l("p"),H.textContent=Hi,ee=a(),M=l("p"),M.textContent=Mi,ie=a(),B=l("h4"),B.textContent=Bi,ne=a(),q=l("blockquote"),q.innerHTML=qi,le=a(),L=l("p"),L.textContent=Li,se=a(),S=l("p"),S.innerHTML=Si,oe=a(),j=l("p"),j.textContent=ji,ae=a(),z=l("p"),z.innerHTML=zi,ue=a(),A=l("p"),A.textContent=Ai,re=a(),F=l("figure"),F.innerHTML=Fi,pe=a(),E=l("p"),E.textContent=Ei,he=a(),W=l("p"),W.textContent=Wi,me=a(),N=l("h4"),N.textContent=Ni,fe=a(),R=l("p"),R.textContent=Ri,ve=a(),D=l("p"),D.textContent=Di,de=a(),O=l("p"),O.textContent=Oi,xe=a(),G=l("p"),G.textContent=Gi,Ce=a(),U=l("p"),U.textContent=Ui,ce=a(),Q=l("p"),Q.textContent=Qi,be=a(),K=l("p"),K.textContent=Ki,we=a(),V=l("h4"),V.textContent=Vi,ye=a(),Y=l("p"),Y.innerHTML=Yi,_e=a(),J=l("p"),J.textContent=Ji,ke=a(),X=l("p"),X.textContent=Xi,Pe=a(),Z=l("p"),Z.textContent=Zi,Te=a(),$=l("p"),$.textContent=$i,Ie=a(),tt=l("p"),tt.textContent=tn,ge=a(),et=l("p"),et.textContent=en,He=a(),it=l("p"),it.textContent=nn,Me=a(),nt=l("p"),nt.textContent=ln,Be=a(),lt=l("p"),lt.textContent=sn,qe=a(),st=l("p"),st.textContent=on,Le=a(),ot=l("p"),ot.textContent=an,Se=a(),at=l("p"),at.textContent=un,je=a(),ut=l("p"),ut.textContent=rn,ze=a(),rt=l("figure"),rt.innerHTML=pn,Ae=a(),pt=l("h4"),pt.textContent=hn,Fe=a(),ht=l("p"),ht.textContent=mn,Ee=a(),mt=l("p"),mt.textContent=fn,We=a(),ft=l("p"),ft.textContent=vn,Ne=a(),vt=l("p"),vt.textContent=dn,Re=a(),dt=l("p"),dt.textContent=xn,De=a(),xt=l("p"),xt.textContent=Cn,Oe=a(),Ct=l("p"),Ct.textContent=cn,Ge=a(),ct=l("h4"),ct.textContent=bn,Ue=a(),bt=l("blockquote"),bt.innerHTML=wn,Qe=a(),wt=l("p"),wt.textContent=yn,Ke=a(),yt=l("p"),yt.textContent=_n,Ve=a(),_t=l("p"),_t.textContent=kn,Ye=a(),kt=l("p"),kt.textContent=Pn,Je=a(),Pt=l("p"),Pt.textContent=Tn,Xe=a(),Tt=l("p"),Tt.textContent=In,Ze=a(),It=l("p"),It.textContent=gn,$e=a(),gt=l("p"),gt.textContent=Hn,ti=a(),Ht=l("p"),Ht.textContent=Mn,ei=a(),Mt=l("p"),Mt.textContent=Bn,ii=a(),Bt=l("p"),Bt.innerHTML=qn,ni=a(),qt=l("p"),qt.textContent=Ln,li=a(),Lt=l("p"),Lt.textContent=Sn,si=a(),St=l("p"),St.textContent=jn,oi=a(),jt=l("p"),jt.textContent=zn,ai=a(),zt=l("p"),zt.textContent=An},l(t){r=s(t,"ASIDE",{"data-svelte-h":!0}),o(r)!=="svelte-h9bezf"&&(r.innerHTML=ri),At=u(t),p=s(t,"H4",{"data-svelte-h":!0}),o(p)!=="svelte-14no8ob"&&(p.textContent=pi),Ft=u(t),h=s(t,"P",{"data-svelte-h":!0}),o(h)!=="svelte-4z04z2"&&(h.textContent=hi),Et=u(t),m=s(t,"P",{"data-svelte-h":!0}),o(m)!=="svelte-1dssbsq"&&(m.textContent=mi),Wt=u(t),f=s(t,"P",{"data-svelte-h":!0}),o(f)!=="svelte-15hsh4o"&&(f.textContent=fi),Nt=u(t),v=s(t,"P",{"data-svelte-h":!0}),o(v)!=="svelte-1ivpuik"&&(v.textContent=vi),Rt=u(t),d=s(t,"P",{"data-svelte-h":!0}),o(d)!=="svelte-1ee0dnl"&&(d.textContent=di),Dt=u(t),x=s(t,"P",{"data-svelte-h":!0}),o(x)!=="svelte-1vzq8hc"&&(x.textContent=xi),Ot=u(t),C=s(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-ulv3rs"&&(C.textContent=Ci),Gt=u(t),c=s(t,"H4",{"data-svelte-h":!0}),o(c)!=="svelte-1in3zrd"&&(c.textContent=ci),Ut=u(t),b=s(t,"BLOCKQUOTE",{"data-svelte-h":!0}),o(b)!=="svelte-y9nmb8"&&(b.innerHTML=bi),Qt=u(t),w=s(t,"P",{"data-svelte-h":!0}),o(w)!=="svelte-90b44m"&&(w.textContent=wi),Kt=u(t),y=s(t,"P",{"data-svelte-h":!0}),o(y)!=="svelte-re9qxm"&&(y.textContent=yi),Vt=u(t),_=s(t,"P",{"data-svelte-h":!0}),o(_)!=="svelte-iedmf5"&&(_.textContent=_i),Yt=u(t),k=s(t,"P",{"data-svelte-h":!0}),o(k)!=="svelte-17juh54"&&(k.textContent=ki),Jt=u(t),P=s(t,"P",{"data-svelte-h":!0}),o(P)!=="svelte-14635sw"&&(P.textContent=Pi),Xt=u(t),T=s(t,"P",{"data-svelte-h":!0}),o(T)!=="svelte-oc0v6l"&&(T.textContent=Ti),Zt=u(t),I=s(t,"P",{"data-svelte-h":!0}),o(I)!=="svelte-1qken3a"&&(I.textContent=Ii),$t=u(t),g=s(t,"FIGURE",{"data-svelte-h":!0}),o(g)!=="svelte-1cc1tvu"&&(g.innerHTML=gi),te=u(t),H=s(t,"P",{"data-svelte-h":!0}),o(H)!=="svelte-1o9mlf9"&&(H.textContent=Hi),ee=u(t),M=s(t,"P",{"data-svelte-h":!0}),o(M)!=="svelte-1s0qzet"&&(M.textContent=Mi),ie=u(t),B=s(t,"H4",{"data-svelte-h":!0}),o(B)!=="svelte-1pq6vyb"&&(B.textContent=Bi),ne=u(t),q=s(t,"BLOCKQUOTE",{"data-svelte-h":!0}),o(q)!=="svelte-19mlas8"&&(q.innerHTML=qi),le=u(t),L=s(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-11mcuoh"&&(L.textContent=Li),se=u(t),S=s(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1vn4dla"&&(S.innerHTML=Si),oe=u(t),j=s(t,"P",{"data-svelte-h":!0}),o(j)!=="svelte-aproqi"&&(j.textContent=ji),ae=u(t),z=s(t,"P",{"data-svelte-h":!0}),o(z)!=="svelte-1piv2ch"&&(z.innerHTML=zi),ue=u(t),A=s(t,"P",{"data-svelte-h":!0}),o(A)!=="svelte-favwej"&&(A.textContent=Ai),re=u(t),F=s(t,"FIGURE",{"data-svelte-h":!0}),o(F)!=="svelte-1gnmx8z"&&(F.innerHTML=Fi),pe=u(t),E=s(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-lcz07v"&&(E.textContent=Ei),he=u(t),W=s(t,"P",{"data-svelte-h":!0}),o(W)!=="svelte-eqlz6d"&&(W.textContent=Wi),me=u(t),N=s(t,"H4",{"data-svelte-h":!0}),o(N)!=="svelte-pe2vrr"&&(N.textContent=Ni),fe=u(t),R=s(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-1j3e1j4"&&(R.textContent=Ri),ve=u(t),D=s(t,"P",{"data-svelte-h":!0}),o(D)!=="svelte-81y525"&&(D.textContent=Di),de=u(t),O=s(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-1gwnll3"&&(O.textContent=Oi),xe=u(t),G=s(t,"P",{"data-svelte-h":!0}),o(G)!=="svelte-ppwheb"&&(G.textContent=Gi),Ce=u(t),U=s(t,"P",{"data-svelte-h":!0}),o(U)!=="svelte-1nao80s"&&(U.textContent=Ui),ce=u(t),Q=s(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-1th4tyf"&&(Q.textContent=Qi),be=u(t),K=s(t,"P",{"data-svelte-h":!0}),o(K)!=="svelte-lkdlse"&&(K.textContent=Ki),we=u(t),V=s(t,"H4",{"data-svelte-h":!0}),o(V)!=="svelte-10ridd3"&&(V.textContent=Vi),ye=u(t),Y=s(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-ew0p76"&&(Y.innerHTML=Yi),_e=u(t),J=s(t,"P",{"data-svelte-h":!0}),o(J)!=="svelte-1jmyp22"&&(J.textContent=Ji),ke=u(t),X=s(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-9dq8mk"&&(X.textContent=Xi),Pe=u(t),Z=s(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-e76c9c"&&(Z.textContent=Zi),Te=u(t),$=s(t,"P",{"data-svelte-h":!0}),o($)!=="svelte-946v78"&&($.textContent=$i),Ie=u(t),tt=s(t,"P",{"data-svelte-h":!0}),o(tt)!=="svelte-11jdaoa"&&(tt.textContent=tn),ge=u(t),et=s(t,"P",{"data-svelte-h":!0}),o(et)!=="svelte-1or789z"&&(et.textContent=en),He=u(t),it=s(t,"P",{"data-svelte-h":!0}),o(it)!=="svelte-14dvk8u"&&(it.textContent=nn),Me=u(t),nt=s(t,"P",{"data-svelte-h":!0}),o(nt)!=="svelte-1nz3vat"&&(nt.textContent=ln),Be=u(t),lt=s(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-fjutbt"&&(lt.textContent=sn),qe=u(t),st=s(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-1lpmakt"&&(st.textContent=on),Le=u(t),ot=s(t,"P",{"data-svelte-h":!0}),o(ot)!=="svelte-1ci03uw"&&(ot.textContent=an),Se=u(t),at=s(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-1ak051d"&&(at.textContent=un),je=u(t),ut=s(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-1bf2azk"&&(ut.textContent=rn),ze=u(t),rt=s(t,"FIGURE",{"data-svelte-h":!0}),o(rt)!=="svelte-1gt15ct"&&(rt.innerHTML=pn),Ae=u(t),pt=s(t,"H4",{"data-svelte-h":!0}),o(pt)!=="svelte-1badgnf"&&(pt.textContent=hn),Fe=u(t),ht=s(t,"P",{"data-svelte-h":!0}),o(ht)!=="svelte-u9cmdh"&&(ht.textContent=mn),Ee=u(t),mt=s(t,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-1696n02"&&(mt.textContent=fn),We=u(t),ft=s(t,"P",{"data-svelte-h":!0}),o(ft)!=="svelte-12k9a5i"&&(ft.textContent=vn),Ne=u(t),vt=s(t,"P",{"data-svelte-h":!0}),o(vt)!=="svelte-5was6a"&&(vt.textContent=dn),Re=u(t),dt=s(t,"P",{"data-svelte-h":!0}),o(dt)!=="svelte-om3lez"&&(dt.textContent=xn),De=u(t),xt=s(t,"P",{"data-svelte-h":!0}),o(xt)!=="svelte-13j3e16"&&(xt.textContent=Cn),Oe=u(t),Ct=s(t,"P",{"data-svelte-h":!0}),o(Ct)!=="svelte-k8uie5"&&(Ct.textContent=cn),Ge=u(t),ct=s(t,"H4",{"data-svelte-h":!0}),o(ct)!=="svelte-1lgy7gu"&&(ct.textContent=bn),Ue=u(t),bt=s(t,"BLOCKQUOTE",{"data-svelte-h":!0}),o(bt)!=="svelte-hpnkr6"&&(bt.innerHTML=wn),Qe=u(t),wt=s(t,"P",{"data-svelte-h":!0}),o(wt)!=="svelte-114k9hu"&&(wt.textContent=yn),Ke=u(t),yt=s(t,"P",{"data-svelte-h":!0}),o(yt)!=="svelte-14dquwi"&&(yt.textContent=_n),Ve=u(t),_t=s(t,"P",{"data-svelte-h":!0}),o(_t)!=="svelte-yxz1m3"&&(_t.textContent=kn),Ye=u(t),kt=s(t,"P",{"data-svelte-h":!0}),o(kt)!=="svelte-976xxn"&&(kt.textContent=Pn),Je=u(t),Pt=s(t,"P",{"data-svelte-h":!0}),o(Pt)!=="svelte-whajyd"&&(Pt.textContent=Tn),Xe=u(t),Tt=s(t,"P",{"data-svelte-h":!0}),o(Tt)!=="svelte-okkmcc"&&(Tt.textContent=In),Ze=u(t),It=s(t,"P",{"data-svelte-h":!0}),o(It)!=="svelte-hufhih"&&(It.textContent=gn),$e=u(t),gt=s(t,"P",{"data-svelte-h":!0}),o(gt)!=="svelte-i6j9tg"&&(gt.textContent=Hn),ti=u(t),Ht=s(t,"P",{"data-svelte-h":!0}),o(Ht)!=="svelte-alu5ea"&&(Ht.textContent=Mn),ei=u(t),Mt=s(t,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-1h1hh0e"&&(Mt.textContent=Bn),ii=u(t),Bt=s(t,"P",{"data-svelte-h":!0}),o(Bt)!=="svelte-yc3qew"&&(Bt.innerHTML=qn),ni=u(t),qt=s(t,"P",{"data-svelte-h":!0}),o(qt)!=="svelte-o3qp1x"&&(qt.textContent=Ln),li=u(t),Lt=s(t,"P",{"data-svelte-h":!0}),o(Lt)!=="svelte-4d074m"&&(Lt.textContent=Sn),si=u(t),St=s(t,"P",{"data-svelte-h":!0}),o(St)!=="svelte-z1s699"&&(St.textContent=jn),oi=u(t),jt=s(t,"P",{"data-svelte-h":!0}),o(jt)!=="svelte-1yuulbh"&&(jt.textContent=zn),ai=u(t),zt=s(t,"P",{"data-svelte-h":!0}),o(zt)!=="svelte-18ec236"&&(zt.textContent=An)},m(t,e){i(t,r,e),i(t,At,e),i(t,p,e),i(t,Ft,e),i(t,h,e),i(t,Et,e),i(t,m,e),i(t,Wt,e),i(t,f,e),i(t,Nt,e),i(t,v,e),i(t,Rt,e),i(t,d,e),i(t,Dt,e),i(t,x,e),i(t,Ot,e),i(t,C,e),i(t,Gt,e),i(t,c,e),i(t,Ut,e),i(t,b,e),i(t,Qt,e),i(t,w,e),i(t,Kt,e),i(t,y,e),i(t,Vt,e),i(t,_,e),i(t,Yt,e),i(t,k,e),i(t,Jt,e),i(t,P,e),i(t,Xt,e),i(t,T,e),i(t,Zt,e),i(t,I,e),i(t,$t,e),i(t,g,e),i(t,te,e),i(t,H,e),i(t,ee,e),i(t,M,e),i(t,ie,e),i(t,B,e),i(t,ne,e),i(t,q,e),i(t,le,e),i(t,L,e),i(t,se,e),i(t,S,e),i(t,oe,e),i(t,j,e),i(t,ae,e),i(t,z,e),i(t,ue,e),i(t,A,e),i(t,re,e),i(t,F,e),i(t,pe,e),i(t,E,e),i(t,he,e),i(t,W,e),i(t,me,e),i(t,N,e),i(t,fe,e),i(t,R,e),i(t,ve,e),i(t,D,e),i(t,de,e),i(t,O,e),i(t,xe,e),i(t,G,e),i(t,Ce,e),i(t,U,e),i(t,ce,e),i(t,Q,e),i(t,be,e),i(t,K,e),i(t,we,e),i(t,V,e),i(t,ye,e),i(t,Y,e),i(t,_e,e),i(t,J,e),i(t,ke,e),i(t,X,e),i(t,Pe,e),i(t,Z,e),i(t,Te,e),i(t,$,e),i(t,Ie,e),i(t,tt,e),i(t,ge,e),i(t,et,e),i(t,He,e),i(t,it,e),i(t,Me,e),i(t,nt,e),i(t,Be,e),i(t,lt,e),i(t,qe,e),i(t,st,e),i(t,Le,e),i(t,ot,e),i(t,Se,e),i(t,at,e),i(t,je,e),i(t,ut,e),i(t,ze,e),i(t,rt,e),i(t,Ae,e),i(t,pt,e),i(t,Fe,e),i(t,ht,e),i(t,Ee,e),i(t,mt,e),i(t,We,e),i(t,ft,e),i(t,Ne,e),i(t,vt,e),i(t,Re,e),i(t,dt,e),i(t,De,e),i(t,xt,e),i(t,Oe,e),i(t,Ct,e),i(t,Ge,e),i(t,ct,e),i(t,Ue,e),i(t,bt,e),i(t,Qe,e),i(t,wt,e),i(t,Ke,e),i(t,yt,e),i(t,Ve,e),i(t,_t,e),i(t,Ye,e),i(t,kt,e),i(t,Je,e),i(t,Pt,e),i(t,Xe,e),i(t,Tt,e),i(t,Ze,e),i(t,It,e),i(t,$e,e),i(t,gt,e),i(t,ti,e),i(t,Ht,e),i(t,ei,e),i(t,Mt,e),i(t,ii,e),i(t,Bt,e),i(t,ni,e),i(t,qt,e),i(t,li,e),i(t,Lt,e),i(t,si,e),i(t,St,e),i(t,oi,e),i(t,jt,e),i(t,ai,e),i(t,zt,e)},p:ui,i:ui,o:ui,d(t){t&&(n(r),n(At),n(p),n(Ft),n(h),n(Et),n(m),n(Wt),n(f),n(Nt),n(v),n(Rt),n(d),n(Dt),n(x),n(Ot),n(C),n(Gt),n(c),n(Ut),n(b),n(Qt),n(w),n(Kt),n(y),n(Vt),n(_),n(Yt),n(k),n(Jt),n(P),n(Xt),n(T),n(Zt),n(I),n($t),n(g),n(te),n(H),n(ee),n(M),n(ie),n(B),n(ne),n(q),n(le),n(L),n(se),n(S),n(oe),n(j),n(ae),n(z),n(ue),n(A),n(re),n(F),n(pe),n(E),n(he),n(W),n(me),n(N),n(fe),n(R),n(ve),n(D),n(de),n(O),n(xe),n(G),n(Ce),n(U),n(ce),n(Q),n(be),n(K),n(we),n(V),n(ye),n(Y),n(_e),n(J),n(ke),n(X),n(Pe),n(Z),n(Te),n($),n(Ie),n(tt),n(ge),n(et),n(He),n(it),n(Me),n(nt),n(Be),n(lt),n(qe),n(st),n(Le),n(ot),n(Se),n(at),n(je),n(ut),n(ze),n(rt),n(Ae),n(pt),n(Fe),n(ht),n(Ee),n(mt),n(We),n(ft),n(Ne),n(vt),n(Re),n(dt),n(De),n(xt),n(Oe),n(Ct),n(Ge),n(ct),n(Ue),n(bt),n(Qe),n(wt),n(Ke),n(yt),n(Ve),n(_t),n(Ye),n(kt),n(Je),n(Pt),n(Xe),n(Tt),n(Ze),n(It),n($e),n(gt),n(ti),n(Ht),n(ei),n(Mt),n(ii),n(Bt),n(ni),n(qt),n(li),n(Lt),n(si),n(St),n(oi),n(jt),n(ai),n(zt))}}}const Gn={title:"AI4PseudoScience",description:"If intellectualism declines, can science be far behind?",date:"2024-2-21",published:!0,image:"/blogs/pseudo/salmon.png"};class Un extends Wn{constructor(r){super(),Nn(this,r,null,Rn,En,{})}}export{Un as default,Gn as metadata};
