import{a as ae,c as be,d as Lt,e as Ct,f as Tt,g as xt,h as St,i as Me}from"./chunk-FXUM5GAQ.js";import{$ as yt,A as et,B as k,C as se,D as re,E as tt,F as ie,G as qe,H as Oe,I as ot,J as nt,M as st,N as rt,O as it,P as at,Q as ct,R as lt,S as dt,T as ut,U as mt,V as ft,W as ht,X as pt,Y as gt,Z as wt,_ as vt,a as b,aa as bt,ba as Et,c as W,ca as E,da as H,e as $,f as Ze,j as ee,k as Ve,l as h,m as He,n as te,o as oe,p as Je,q as Ke,r as ne,s as ve,t as Qe,u as P,v as _,w as ye,x as B,y as Ie,z as g}from"./chunk-WQMFUKE4.js";import"./chunk-FW7OHGKY.js";import{c as m}from"./chunk-6CJCZSTO.js";m();m();m();Ve();var Y=(e,t)=>{g.hasClass("on")?(g.removeClass("on"),B.removeClass("close"),t?g.style="":E(g,"slideRightOut")):t?g.style="":E(g,"slideRightIn",()=>{g.addClass("on"),B.addClass("close")})},_t=()=>{let e=g.querySelector(".inner");g.querySelector(".tab")&&e.removeChild(g.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(n=>{let s=g.querySelector(".panel."+n);if(s.innerHTML.trim().length<1){n==="contents"&&ee(ie,"none");return}n==="contents"&&ee(ie,"");let i=document.createElement("li"),c=document.createElement("span"),a=document.createTextNode(s.getAttribute("data-title"));c.appendChild(a),i.appendChild(c),i.addClass(n+" item"),o?(s.addClass(o),i.addClass(o)):s.removeClass("active"),i.addEventListener("click",r=>{let d=r.currentTarget;d.hasClass("active")||(g.find(".tab .item").forEach(l=>{l.removeClass("active")}),g.find(".panel").forEach(l=>{l.removeClass("active")}),g.querySelector(".panel."+d.className.replace(" item","")).addClass("active"),d.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),g.querySelector(".panels").style.paddingTop=""):g.querySelector(".panels").style.paddingTop=".625rem"},At=()=>{let e=a=>{let r=t[a];if(!r||r.hasClass("current"))return;b.each(".toc .active",l=>{l&&l.removeClass("active current")}),o.forEach(l=>{l&&l.removeClass("active")}),r.addClass("active current"),o[a]&&o[a].addClass("active");let d=r.parentNode;for(;!d.matches(".contents");){if(d.matches("li")){d.addClass("active");let l=document.getElementById(decodeURIComponent(d.querySelector("a.toc-link").getAttribute("href").replace("#","")));l&&l.addClass("active")}d=d.parentNode}getComputedStyle(g).display!=="none"&&s.hasClass("active")&&H(s,r.offsetTop-s.offsetHeight/4)},t=b.all(".contents li");if(t.length<1)return;let o=[...t],n=null;o=o.map((a,r)=>{let d=a.querySelector("a.toc-link"),l=document.getElementById(decodeURI(d.getAttribute("href").replace("#","")));if(!l)return null;let f=l.querySelector("a.anchor"),u=w=>{w.preventDefault();let q=document.getElementById(decodeURI(w.currentTarget.getAttribute("href").replace("#","")));n=r,H(q,null,()=>{e(r),n=null})};return d.addEventListener("click",u),f&&f.addEventListener("click",w=>{u(w),Ct(h.hostname+"/"+LOCAL.path+w.currentTarget.getAttribute("href"))}),l});let s=g.querySelector(".contents.panel"),i=a=>{let r=0,d=a[r];if(d.boundingClientRect.top>0)return r=o.indexOf(d.target),r===0?0:r-1;for(;r<a.length;r++)if(a[r].boundingClientRect.top<=0)d=a[r];else return o.indexOf(d.target);return o.indexOf(d.target)};(()=>{let a=new IntersectionObserver(r=>{let d=i(r)+(oe<0?1:0);n===null&&e(d)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(r=>{r&&a.observe(r)})})()},Re=()=>{H(0)},kt=()=>{H(parseInt(String($(Qe))))},Ht=()=>{H(document.getElementById("comments"))},It=()=>{b.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),s=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(n||s);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};m();var x={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),P.setAttribute("style","display:block"),x.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){x.lock||(h.loader.start&&E(P,0),document.body.addClass("loaded"),x.lock=!0)}};function Ne(){b.each(".overview .menu > .item",t=>{_.querySelector(".menu").appendChild(t.cloneNode(!0))}),P.addEventListener("click",x.vanish),B.addEventListener("click",Y),document.querySelector(".dimmer").addEventListener("click",Y),Ie.querySelector(".down").addEventListener("click",kt),Ie.querySelector(".up").addEventListener("click",Re),k||bt(W(ye,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),gt(k.querySelector(".player")),wt(k.querySelector(".back-to-top")),vt(k.querySelector(".chat")),yt(k.querySelector(".contents")),re.addEventListener("click",Re),tt.addEventListener("click",Ht),ie.addEventListener("click",Y),xt(se),document.querySelector("main").addEventListener("click",()=>{se.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}m();m();var qt=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});b.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),b.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let n=document.querySelector(".cards .item.active");n&&n.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};m();m();var A=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(ve.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(ve.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Ot=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?A("dark"):A())},Pe=e=>{ve.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Mt=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?A("dark"):A()});let e=ae.get("theme");e?A(e):h.darkmode&&A("dark")};var io=document.getElementById("waves"),Ee=()=>{rt($(_)),it($(ye)),at(Oe+$(io)),nt!==window.innerWidth&&Y(null,1),ct(window.innerHeight),lt(window.innerWidth)},Rt=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,n=window.scrollY>Oe,s=window.scrollY>0;n?Pe("#FFF"):Pe("#222"),_.toggleClass("show",n),k.toggleClass("affix",s),et.toggleClass("affix",s),g.toggleClass("affix",window.scrollY>ot&&document.body.offsetWidth>=991),typeof te.y>"u"&&(te.y=window.scrollY),dt(te.y-window.scrollY),oe<0?(_.removeClass("up"),_.toggleClass("down",n)):oe>0&&(_.removeClass("down"),_.toggleClass("up",n)),te.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";re.querySelector("span").innerText!==i&&(re.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&Ze(document.querySelector(".percent"),i)},Nt=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",He+h.favicon.hidden),document.title=LOCAL.favicon.hide,h.loader.switch&&x.show(),clearTimeout(Ke);break;case"visible":e.setAttribute("href",He+h.favicon.normal),document.title=LOCAL.favicon.show,h.loader.switch&&x.hide(1e3),ut(setTimeout(()=>{document.title=Je},2e3));break}},{passive:!0})};m();m();m();m();function Le(e,t,o){let n=e*4+1,s=6+t*(5+n),i=[137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,e>>8,e&255,0,0,t>>8,t&255,8,6,0,0,0,0,0,0,0,s>>>24,s>>16&255,s>>8&255,s&255,73,68,65,84,120,1],c=[0,498536548,997073096,651767980,1994146192,1802195444,1303535960,1342533948,-306674912,-267414716,-690576408,-882789492,-1687895376,-2032938284,-1609899400,-1111625188],a=1,r=0;for(let l=0,f=0,u=n-1;l<t;l++,u+=n-1)for(i.push(l+1<t?0:1,n&255,n>>8,~n&255,n>>8^255,0),r=(r+a)%65521;f<u;f++){let w=o[f]&255;i.push(w),a=(a+w)%65521,r=(r+a)%65521}i.push(r>>8,r&255,a>>8,a&255,0,0,0,0,0,0,0,0,73,69,78,68,174,66,96,130);for(let[l,f]of[[12,29],[37,41+s]]){let u=-1;for(let w=l;w<f;w++)u^=i[w],u=u>>>4^c[u&15],u=u>>>4^c[u&15];u=~u,i[f++]=u>>>24,i[f++]=u>>16&255,i[f++]=u>>8&255,i[f++]=u&255}return`data:image/png;base64,${globalThis.btoa(String.fromCharCode(...i))}`}var Bt=new Uint8Array(128);for(let e=0;e<83;e++)Bt["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#$%*+,-.:;=?@[]^_{|}~".charCodeAt(e)]=e;var Ce=(e,t,o)=>{let n=0;for(;t<o;)n*=83,n+=Bt[e.charCodeAt(t++)];return n},Dt=Math.pow,le=Math.PI,ao=le*2,Ut=3294.6,jt=269.025,co=e=>e>10.31475?Dt(e/jt+.052132,2.4):e/Ut,Be=e=>~~(e>1227e-8?jt*Dt(e,.416666)-13.025:e*Ut+1),ce=e=>(e<0?-1:1)*e*e,Pt=e=>{for(e+=le/2;e>le;)e-=ao;let t=1.27323954*e-.405284735*ce(e);return .225*(ce(t)-t)+t};function lo(e){let t=Ce(e,2,6);return[t>>16,t>>8&255,t&255]}function uo(e,t,o,n){let s=Ce(e,0,1),i=s%9+1,c=~~(s/9)+1,a=i*c,r=0,d=0,l=0,f=0,u=0,w=0,q=0,O=0,U=0,C=0,M=0,j=0,Z=(Ce(e,1,2)+1)/13446*(n|1),T=new Float64Array(a*3),z=lo(e);for(r=0;r<3;r++)T[r]=co(z[r]);for(r=1;r<a;r++)j=Ce(e,4+r*2,6+r*2),T[r*3]=ce(~~(j/361)-9)*Z,T[r*3+1]=ce(~~(j/19)%19-9)*Z,T[r*3+2]=ce(j%19-9)*Z;let de=new Float64Array(c*o),ue=new Float64Array(i*t);for(d=0;d<c;d++)for(f=0;f<o;f++)de[d*o+f]=Pt(le*f*d/o);for(r=0;r<i;r++)for(l=0;l<t;l++)ue[r*t+l]=Pt(le*l*r/t);let me=t*4,R=new Uint8ClampedArray(me*o);for(f=0;f<o;f++)for(l=0;l<t;l++){for(u=w=q=0,d=0;d<c;d++)for(U=de[d*o+f],r=0;r<i;r++)O=ue[r*t+l]*U,C=(r+d*i)*3,u+=T[C]*O,w+=T[C+1]*O,q+=T[C+2]*O;M=4*l+f*me,R[M]=Be(u),R[M+1]=Be(w),R[M+2]=Be(q),R[M+3]=255}return R}var Te=32,zt="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";function Gt(e,{ratio:t=1,size:o=Te}={}){let{width:n,height:s}=mo(t,o),i=uo(e,n,s);return Le(n,s,i)}function mo(e,t){let o=e>=1;return{width:o?t:Math.round(t*e),height:o?Math.round(t/e):t}}m();function fo(e){let{PI:t,min:o,max:n,cos:s,round:i}=Math,c=e[0]|e[1]<<8|e[2]<<16,a=e[3]|e[4]<<8,r=(c&63)/63,d=(c>>6&63)/31.5-1,l=(c>>12&63)/31.5-1,f=(c>>18&31)/31,u=c>>23,w=(a>>3&63)/63,q=(a>>9&63)/63,O=a>>15,U=n(3,O?u?5:7:a&7),C=n(3,O?a&7:u?5:7),M=u?(e[5]&15)/15:1,j=(e[5]>>4)/15,Z=u?6:5,T=0,z=(J,S,K)=>{let G=[];for(let N=0;N<S;N++)for(let F=N?0:1;F*S<J*(S-N);F++)G.push(((e[Z+(T>>1)]>>((T++&1)<<2)&15)/7.5-1)*K);return G},de=z(U,C,f),ue=z(3,3,w*1.25),me=z(3,3,q*1.25),R=u&&z(5,5,j),fe=ho(e),he=i(fe>1?32:32*fe),pe=i(fe>1?32/fe:32),V=new Uint8Array(he*pe*4),ge=[],we=[];for(let J=0,S=0;J<pe;J++)for(let K=0;K<he;K++,S+=4){let G=r,N=d,F=l,We=M;for(let p=0,y=n(U,u?5:3);p<y;p++)ge[p]=s(t/he*(K+.5)*p);for(let p=0,y=n(C,u?5:3);p<y;p++)we[p]=s(t/pe*(J+.5)*p);for(let p=0,y=0;p<C;p++)for(let L=p?0:1,Q=we[p]*2;L*C<U*(C-p);L++,y++)G+=de[y]*ge[L]*Q;for(let p=0,y=0;p<3;p++)for(let L=p?0:1,Q=we[p]*2;L<3-p;L++,y++){let Xe=ge[L]*Q;N+=ue[y]*Xe,F+=me[y]*Xe}if(u)for(let p=0,y=0;p<5;p++)for(let L=p?0:1,Q=we[p]*2;L<5-p;L++,y++)We+=R[y]*ge[L]*Q;let $e=G-2/3*N,Ye=(3*G-$e+F)/2,ro=Ye-F;V[S]=n(0,255*o(1,Ye)),V[S+1]=n(0,255*o(1,ro)),V[S+2]=n(0,255*o(1,$e)),V[S+3]=n(0,255*o(1,We))}return{w:he,h:pe,rgba:V}}function ho(e){let t=e[3],o=e[2]&128,n=e[4]&128,s=n?o?5:7:t&7,i=n?t&7:o?5:7;return s/i}function Ft(e){let t=po(e),{w:o,h:n,rgba:s}=fo(t);return Le(o,n,s)}function po(e){return Uint8Array.from(globalThis.atob(go(e)),t=>t.charCodeAt(0))}function go(e){return e.replaceAll("-","+").replaceAll("_","/")}var Wt=typeof window>"u",$t=!Wt&&"loading"in HTMLImageElement.prototype,Yt=!Wt&&(!("onscroll"in window)||/(?:gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function wo(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function vo(e){let t=Date.now();return zt.replace(/\s/,` data-id='${t}-${e}' `)}function yo(e,t){let o;return function(...n){o!=null&&clearTimeout(o),o=setTimeout(()=>{e(...n),o=void 0},t)}}function je(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:n=Te,updateSizesOnResize:s=!1,onImageLoad:i}={}){let c=new Set;for(let[a,r]of wo(e).entries()){let d=Ue(r,{updateOnResize:s});if(s&&d&&c.add(d),t){let f=Xt({image:r,hash:typeof t=="string"?t:void 0,hashType:o,size:n});f&&(r.src=f)}if(!r.dataset.src&&!r.dataset.srcset)continue;if(Yt||!$t){Zt(r),_e(r),Se(r);continue}if(r.src||(r.src=vo(a)),r.complete&&r.naturalWidth>0){De(r,i);continue}let l=()=>De(r,i);r.addEventListener("load",l,{once:!0}),c.add(()=>r.removeEventListener("load",l))}return()=>{for(let a of c)a();c.clear()}}function De(e,t){if(Jt(e)){Zt(e),_e(e),Se(e),t?.(e);return}let o=new Image,{srcset:n,src:s,sizes:i}=e.dataset;if(i==="auto"){let c=Vt(e);c&&(o.sizes=`${c}px`)}else e.sizes&&(o.sizes=e.sizes);n&&(o.srcset=n),s&&(o.src=s),o.addEventListener("load",()=>{_e(e),Se(e),t?.(e)},{once:!0})}function Xt({image:e,hash:t,hashType:o="blurhash",size:n=Te,ratio:s}={}){if(e&&!t){let{blurhash:i,thumbhash:c}=e.dataset;t=c||i,o=c?"thumbhash":"blurhash"}if(t)try{if(o==="blurhash"){if(e&&!s){let i=e.width||e.offsetWidth||n,c=e.height||e.offsetHeight||n;s=i/c}return Gt(t,{ratio:s,size:n})}return Ft(t)}catch{}}var xe=new WeakMap;function Ue(e,t){if(e.dataset.sizes!=="auto")return;let o=Vt(e);if(o&&(e.sizes=`${o}px`),Jt(e)&&t?.processSourceElements)for(let n of[...e.parentElement.getElementsByTagName("source")])Ue(n,{processSourceElements:!0});if(t?.updateOnResize){if(!xe.has(e)){let n=yo(()=>Ue(e),500),s=new ResizeObserver(n);xe.set(e,s),s.observe(e)}return()=>{let n=xe.get(e);n&&(n.disconnect(),xe.delete(e))}}}function Se(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function _e(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function Zt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(_e),[...t.querySelectorAll("source[data-src]")].forEach(Se))}function Vt(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}function Jt(e){return e.parentElement?.tagName.toLowerCase()==="picture"}var Kt=()=>{be(),g.hasClass("on")&&E(g,0,()=>{g.removeClass("on"),B.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(P.lastChild.cloneNode(!0)),H(0)},ze=async e=>{if(window.location.origin!==h.hostname&&window.location.origin!=="http://localhost:4000"){window.location.href=h.hostname;alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)}mt(0),ft(window.location.href),Me("katex"),await import("./copy-tex-6O4DXKTR.js"),Me("mermaid");let t=new IntersectionObserver(function(n,s){n.forEach(i=>{if(i.isIntersecting){let c=i.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),s.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(n=>{t.observe(n)}),e!==1&&b.each("script[data-pjax]",St),pt(document.title),Ee(),It(),_t(),At(),import("./post-LRTG3ZRH.js").then(({postBeauty:n})=>{n()});let o=document.getElementById("copyright");if(o){let n=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&n.disconnect()})},{root:null,threshold:.2});n.observe(o)}je(),Tt(),se.player.load(LOCAL.audio||h.audio||{}),x.hide(100),setTimeout(()=>{Lt()},500),qt()};m();function Ge(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}Ge();m();function D(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var oo=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function Fe(e,t,o,n){oo(t,s=>{D(e,i=>{i.addEventListener(s,o,n)})})}function X(e,t,o={}){oo(t,n=>{let s=new CustomEvent(n,{bubbles:!0,cancelable:!0,...o});D(e,i=>{i.dispatchEvent(s)})})}function Qt(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",n=e.parentNode||document.querySelector("head")||document.documentElement,s=document.createElement("script");return t.match("document.write")?!1:(s.type="text/javascript",s.id=e.id,o!==""&&(s.src=o,s.async=!1),t!==""&&s.appendChild(document.createTextNode(t)),n.appendChild(s),(n instanceof HTMLHeadElement||n instanceof HTMLBodyElement)&&n.contains(s)&&n.removeChild(s),!0)}function bo(e){e.tagName.toLowerCase()==="script"&&Qt(e),D(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),Qt(o))})}function Eo(e,t,o,n=document){e.forEach(s=>{D(n.querySelectorAll(s),t,o)})}var Ae=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function no(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function Lo(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function eo(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let n=0;n<o.length;n++)e.attributes.setNamedItem(o[n].cloneNode())}this.onSwitch()}function Co({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:n={},history:s=!0,scrollTo:i=0,scrollRestoration:c=!0,cacheBust:a=!0,timeout:r=0,currentUrlFullReload:d=!1}={}){let l={elements:e,selectors:t,switches:o,switchesOptions:n,history:s,scrollTo:i,scrollRestoration:c,cacheBust:a,timeout:r,currentUrlFullReload:d};return l.switches.head||(l.switches.head=eo),l.switches.body||(l.switches.body=eo),l}var ke="data-pjax-state";function to(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},n=To(e,t);if(n){e.setAttribute(ke,n);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(ke,"reload"),this.reload();return}e.setAttribute(ke,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function To(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function xo(e){e.setAttribute(ke,""),Fe(e,"click",t=>to.call(this,e,t)),Fe(e,"keyup",t=>{let o=t;o.keyCode===13&&to.call(this,e,o)})}function So(e,t,o,n){if(n={...n||this.options},n.request=t,e===!1){X(document,"pjax:complete pjax:error",n);return}let s=window.history.state||{};window.history.replaceState({url:s.url||window.location.href,title:s.title||document.title,uid:s.uid||Ae(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=i;let a=c.hash;c.href=o,a&&!c.hash&&(c.hash=a,o=c.href),this.state.href=o,this.state.options=n;try{this.loadContent(e,n)}catch(r){return X(document,"pjax:error",n),console.error("Pjax switch fail: ",r),this.latestChance(o)}}function _o(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Ao(e,t,o){let n=new RegExp("([?&])"+t+"=.*?(&|$)","i"),s=e.indexOf("?")!==-1?"&":"?";return e.match(n)?e.replace(n,"$1"+t+"="+o+"$2"):e+s+t+"="+o}function ko(e,t={},o){let n=t.requestOptions||{},s=(n.requestMethod||"GET").toUpperCase(),i=n.requestParams||null,c=null,a=new XMLHttpRequest,r=t.timeout;if(a.onreadystatechange=()=>{a.readyState===4&&(a.status===200?o(a.responseText,a,e,t):a.status!==0&&o(null,a,e,t))},a.onerror=d=>{console.error(d),o(null,a,e,t)},a.ontimeout=()=>{o(null,a,e,t)},i&&i.length){let d=i.map(l=>l.name+"="+l.value).join("&");switch(s){case"GET":e=e.split("?")[0],e+="?"+d;break;case"POST":c=d;break}}return t.cacheBust&&(e=Ao(e,"t",Date.now())),a.open(s,e,!0),a.timeout=r,a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),a.send(c),a}function Ho(e,t,o,n,s,i){let c=[];o.forEach(a=>{let r=n.querySelectorAll(a),d=s.querySelectorAll(a);if(r.length!==d.length)throw new Error(`DOM doesn't look the same on new loaded page: '${a}' - new ${r.length}, old ${d.length}`);D(r,(l,f)=>{let u=d[f],w=e[a]?e[a].bind(this,u,l,i,t[a]):no.bind(this,u,l,i);c.push(w)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(a=>{a()})}function Io(e,t,o){for(let n of t){let s=e.querySelectorAll(n);for(let i=0;i<s.length;i++)if(s[i].contains(o))return!0}return!1}var I=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Co(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=Ae(),this.parseDOM(document),Fe(window,"popstate",o=>{let n=o;if(n.state){let s={...this.options};s.url=n.state.url,s.title=n.state.title,s.history=!1,s.scrollPos=n.state.scrollPos,n.state.uid<this.lastUid?s.backward=!0:s.forward=!0,this.lastUid=n.state.uid,this.loadUrl(n.state.url,s)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){D(this.getElements(t),_o,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,n){return Eo.bind(this)(this.options.selectors,t,o,n)}switchSelectors(t,o,n,s){return Ho.bind(this)(this.options.switches,this.options.switchesOptions,t,o,n,s)}latestChance(t){window.location=t}onSwitch(){X(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){X(document,"pjax:complete pjax:error",o);return}let n=document.implementation.createHTMLDocument("pjax"),s=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(s);if(c&&c.length&&(c=c[0].match(i),c.length&&(c.shift(),c.forEach(a=>{let r=a.trim().split("=");r.length===1?n.documentElement.setAttribute(r[0],"true"):n.documentElement.setAttribute(r[0],r[1].slice(1,-1))}))),n.documentElement.innerHTML=t,document.activeElement&&Io(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,n,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),X(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,n;this.options.selectors.forEach(i=>{D(document.querySelectorAll(i),c=>{bo(c)})});let s=this.state;if(!((t=s.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=Ae(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=Ae(),window.history.pushState({url:s.href,title:s.options.title,uid:this.maxUid,scrollPos:[0,0]},s.options.title,s.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),X(document,"pjax:complete pjax:success",s.options),!((o=s.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let c=i.hash.slice(1);c=decodeURIComponent(c);let a=0,r=document.getElementById(c)||document.getElementsByName(c)[0];if(r&&r.offsetParent)do a+=r.offsetTop,r=r.offsetParent;while(r);window.scrollTo(0,a)}else s.options.scrollTo!==!1&&(Array.isArray(s.options.scrollTo)?window.scrollTo(s.options.scrollTo[0],s.options.scrollTo[1]):window.scrollTo(0,s.options.scrollTo))}else!((n=s.options)===null||n===void 0)&&n.scrollRestoration&&s.options.scrollPos&&window.scrollTo(s.options.scrollPos[0],s.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};I.prototype.attachLink=xo;I.prototype.doRequest=ko;I.prototype.handleResponse=So;I.switches={innerHTML:Lo,outerHTML:no};m();function so(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),n=W(ne,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),s=()=>{E(n,{delay:2500,opacity:0},()=>{ne.removeChild(n)})};o.hasClass("i-sun")?t=()=>{n.addClass("dark"),A("dark"),ae.set("theme","dark"),s()}:(n.addClass("dark"),t=()=>{n.removeClass("dark"),A(),ae.set("theme","light"),s()}),E(n,1,()=>{setTimeout(t,210)},()=>{ee(n,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var qo=async()=>{so(),Ne(),ht(new I({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-4PI5FSOV.js").then(({listen:e})=>{e(h.quicklink)}),Ot(),Nt(),Mt(),document.querySelector("li.item.search > i").addEventListener("click",()=>{h.search!==null&&(qe||Et(W(ne,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-UZDMJ4HT.js").then(({algoliaSearch:e})=>{e(st)}),b.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",E(qe,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-G6TBBY3V.js").then(e=>{e.default(h.fireworks)}),window.addEventListener("scroll",Rt,{passive:!0}),window.addEventListener("resize",Ee,{passive:!0}),window.addEventListener("pjax:send",Kt,{passive:!0}),window.addEventListener("pjax:success",ze,{passive:!0}),window.addEventListener("beforeunload",()=>{be()}),await ze(1)};Ge();if(window.location.origin!==h.hostname&&window.location.origin!=="http://localhost:4000"){window.location.href=h.hostname;alert(`\u68C0\u6D4B\u5230\u975E\u6CD5\u4EFF\u5192\u7F51\u7AD9\uFF0C\u5DF2\u81EA\u52A8\u8DF3\u8F6C\u56DE\u6B63\u786E\u9996\u9875;
We have detected a fake website, and you have been redirected to the correct homepage.`)}window.addEventListener("DOMContentLoaded",qo,{passive:!0});console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
