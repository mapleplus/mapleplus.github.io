import{b as C}from"./chunk-NQHYUYAU.js";import{M as I,N as S,W as O,a as B,c as h,f as k,g as H,i as P,k as $,m as w,o as D,q as N,s as _}from"./chunk-CYBKXS46.js";import{a as b}from"./chunk-65T5ARWG.js";b();b();var f={set(t,d){localStorage.setItem(t,d)},get(t){return localStorage.getItem(t)},del(t){localStorage.removeItem(t)}};var F=t=>{if(!t)return;let d=h(_,"div",{innerHTML:t,className:"tip"});setTimeout(()=>{d.addClass("hide"),setTimeout(()=>{_.removeChild(d)},300)},3e3)},ae=()=>{w.auto_scroll&&f.set(S,String(D.y))},se=t=>{let d=window.location.hash,c=null;if(I){f.del(S);return}d?c=document.querySelector(decodeURI(d)):c=w.auto_scroll?parseInt(f.get(S)):0,c&&(C(c),O(1)),t&&d&&!I&&(C(c),O(1))},ne=(t,d)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{d&&d(!0)},()=>{d&&d(!1)}):(console.error("Too old browser, clipborad API not supported."),d&&d(!1))};b();b();var U=()=>{let t;B.each("div.tab",d=>{if(d.getAttribute("data-ready"))return;let c=d.getAttribute("data-id"),u=d.getAttribute("data-title"),s=document.getElementById(c);s?t=!1:(s=document.createElement("div"),s.className="tabs",s.id=c,s.innerHTML='<div class="show-btn"></div>',s.querySelector(".show-btn").addEventListener("click",()=>{C(s)}),d.parentNode.insertBefore(s,d),t=!0);let v=s.querySelector(".nav ul");v||(v=h(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).querySelector("ul"));let o=h(v,"li",{innerHTML:u});t&&(o.addClass("active"),d.addClass("active")),o.addEventListener("click",i=>{let x=i.currentTarget;s.find(".active").forEach(y=>{y.removeClass("active")}),d.addClass("active"),x.addClass("active")}),s.appendChild(d),d.setAttribute("data-ready",String(!0))})};var q=null,j=/mobile/i.test(window.navigator.userAgent),be=(t,d)=>{let c={el:{},create(){t.player.options.btns&&t.player.options.btns.forEach(e=>{c.el[e]||(c.el[e]=h(t,"div",{className:e+" btn",onclick(a){t.player.fetch().then(()=>{t.player.options.events[e](a)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!t.player.options.controls)return;let e=u;t.player.options.controls.forEach(a=>{if(e.btns[a])return;let r={onclick(p){e.events[a]?e.events[a](p):t.player.options.events[a](p)}};switch(a){case"volume":r.className=" "+(o.muted?"off":"on"),r.innerHTML='<div class="bar"></div>',r["on"+m.nameMap.dragStart]=e.events.volume,r.onclick=null;break;case"mode":r.className=" "+t.player.options.mode;break;default:r.className="";break}r.className=a+r.className+" btn",e.btns[a]=h(e.el,"div",r)}),e.btns.volume.bar=e.btns.volume.querySelector(".bar")},events:{mode(e){switch(t.player.options.mode){case"loop":t.player.options.mode="random";break;case"random":t.player.options.mode="order";break;default:t.player.options.mode="loop"}u.btns.mode.className="mode "+t.player.options.mode+" btn",f.set("_PlayerMode",t.player.options.mode)},volume(e){e.preventDefault();let a=e.currentTarget,r=!1,p=l=>{l.preventDefault(),t.player.volume(u.percent(l,a)),r=!0},n=l=>{l.preventDefault(),a.removeEventListener(m.nameMap.dragEnd,n),a.removeEventListener(m.nameMap.dragMove,p),r?(t.player.muted(),t.player.volume(u.percent(l,a))):o.muted?(t.player.muted(),t.player.volume(o.volume)):(t.player.muted("muted"),u.update(0))};a.addEventListener(m.nameMap.dragMove,p),a.addEventListener(m.nameMap.dragEnd,n)},backward(e){u.step="prev",t.player.mode()},forward(e){u.step="next",t.player.mode()}},update(e){u.btns.volume.className="volume "+(!o.muted&&e>0?"on":"off")+" btn",k(u.btns.volume.bar,Math.floor(e*100)+"%")},percent(e,a){let r=((e.clientX||e.changedTouches[0].clientX)-P(a))/H(a);return r=Math.max(r,0),Math.min(r,1)}},s={el:null,bar:null,create(){let e=i.current().el;e&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(m.nameMap.dragStart,s.drag),s.el.remove()),s.el=h(e,"div",{className:"progress"}),s.el.setAttribute("data-dtime",m.secondToTime(0)),s.bar=h(s.el,"div",{className:"bar"}),e.addClass("current"),e.addEventListener(m.nameMap.dragStart,s.drag),i.scroll())},update(e){k(s.bar,Math.floor(e*100)+"%"),s.el.setAttribute("data-ptime",m.secondToTime(e*o.duration))},seeking(e){e?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(e,a){let r=((e.clientX||e.changedTouches[0].clientX)-P(a))/H(a);return r=Math.max(r,0),Math.min(r,1)},drag(e){e.preventDefault();let a=i.current().el,r=n=>{n.preventDefault();let l=s.percent(n,a);s.update(l),A.update(l*o.duration)},p=n=>{n.preventDefault(),a.removeEventListener(m.nameMap.dragEnd,p),a.removeEventListener(m.nameMap.dragMove,r);let l=s.percent(n,a);s.update(l),t.player.seek(l*o.duration),o.disableTimeupdate=!1,s.seeking(!1)};o.disableTimeupdate=!0,s.seeking(!0),a.addEventListener(m.nameMap.dragMove,r),a.addEventListener(m.nameMap.dragEnd,p)}},v={el:null,create(){let e=i.current();v.el.innerHTML='<div class="cover"><div class="disc"><img src="'+e.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+e.name+"</h4><span>"+e.artist+'</span><div class="lrc"></div></div>',v.el.querySelector(".cover").addEventListener("click",t.player.options.events["play-pause"]),A.create(v.el.querySelector(".lrc"))}},o,i={el:null,data:[],index:-1,errnum:0,add:(e,a)=>{a.forEach(r=>{r.group=e,r.name=r.name||r.title||"Meida name",r.artist=r.artist||r.author||"Anonymous",r.cover=r.cover||r.pic,r.type=r.type||"normal",i.data.push(r)})},clear(){i.data=[],i.el.innerHTML="",i.index!==-1&&(i.index=-1,t.player.fetch())},create(){let e=i.el;i.data.map((a,r)=>{if(a.el)return null;let p="list-"+t.player._id+"-"+a.group,n=document.getElementById(p);return n||(n=h(e,"div",{id:p,className:t.player.group?"tab":"",innerHTML:"<ol></ol>"}),t.player.group&&(n.setAttribute("data-title",t.player.options.rawList[a.group].title),n.setAttribute("data-id",t.player._id))),a.el=h(n.querySelector("ol"),"li",{title:a.name+" - "+a.artist,innerHTML:'<span class="info"><span>'+a.name+"</span><span>"+a.artist+"</span></span>",onclick(l){let M=l.currentTarget;if(i.index===r&&s.el){o.paused?t.player.play():t.player.seek(o.duration*s.percent(l,M));return}t.player.switch(r),t.player.play()}}),a}),U()},current(){return this.data[this.index]},scroll(){let e=this.current(),a=this.el.querySelector("li.active");a&&a.removeClass("active");let r=this.el.querySelector(".tab.active");return r&&r.removeClass("active"),a=this.el.querySelectorAll(".nav li")[e.group],a&&a.addClass("active"),r=this.el.querySelectorAll(".tab")[e.group],r&&r.addClass("active"),C(e.el,e.el.offsetTop),this},title(){if(o.paused)return;let e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+N},error(){let e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},x={el:null,create(){this.el||(this.el=h(t,"div",{className:"player-info",innerHTML:(t.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),v.el=this.el.querySelector(".preview"),i.el=this.el.querySelector(".playlist"),u.el=this.el.querySelector(".controller"))},hide(){let e=this.el;e.addClass("hide"),window.setTimeout(()=>{e.removeClass("show hide")},300)}},y={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(e){o.paused?t.player.play():t.player.pause()},music(e){x.el.hasClass("show")?x.hide():(x.el.addClass("show"),i.scroll().title())}}},m={random(e){return Math.floor(Math.random()*e)},parse(e){let a=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(r=>{let n=new RegExp(r[0]).exec(e);n!==null&&(a=[r[1],r[2],n[1]])}),a},fetch(e){let a=[];return new Promise((r,p)=>{e.forEach(n=>{let l=m.parse(n);if(l[0]){let M=JSON.stringify(l),T=f.get(M);T?(a.push(...JSON.parse(T)),r(a)):fetch(`${w.playerAPI}/meting/?server=`+l[0]+"&type="+l[1]+"&id="+l[2]+"&r="+Math.random()).then(g=>g.json()).then(g=>{f.set(M,JSON.stringify(g)),a.push(...g),r(a)}).catch(g=>{})}else a.push(n),r(a)})})},secondToTime(e){let a=l=>isNaN(l)?"00":l<10?"0"+l:""+l,r=Math.floor(e/3600),p=Math.floor((e-r*3600)/60),n=Math.floor(e-r*3600-p*60);return(r>0?[r,p,n]:[p,n]).map(a).join(":")},nameMap:{dragStart:j?"touchstart":"mousedown",dragMove:j?"touchmove":"mousemove",dragEnd:j?"touchend":"mouseup"}};o=null,t.player={_id:m.random(999999),group:!0,load(e){let a="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,i.clear(),this.fetch()):(a="none",this.pause());for(let r in c.el)$(c.el[r],a);return this},fetch(){return new Promise((e,a)=>{if(i.data.length>0)e(!1);else if(this.options.rawList){let r=[];this.options.rawList.forEach((p,n)=>{r.push(new Promise((l,M)=>{let T=n,g;p.list?(this.group=!0,g=p.list):(T=0,this.group=!1,g=[p]),m.fetch(g).then(L=>{i.add(T,L),l(0)})}))}),Promise.all(r).then(()=>{e(!0)})}}).then(e=>{e&&(i.create(),u.create(),this.mode())})},mode(){let e=i.data.length;if(!e||i.errnum===e)return;let a=u.step==="next"?1:-1,r=()=>{let n=i.index+a;(n>e||n<0)&&(n=u.step==="next"?0:e-1),i.index=n},p=()=>{let n=m.random(e);i.index!==n?i.index=n:r()};switch(this.options.mode){case"random":p();break;case"order":r();break;case"loop":u.step&&r(),i.index===-1&&p();break}this.init()},switch(e){typeof e=="number"&&e!==i.index&&i.current()&&!i.current().error&&(i.index=e,this.init())},init(){let e=i.current();if(!e||e.error){this.mode();return}let a=!1;o.paused||(a=!0,this.stop()),o.setAttribute("src",e.url),o.setAttribute("title",e.name+" - "+e.artist),this.volume(f.get("_PlayerVolume")||"0.7"),this.muted(f.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&v.create(),a===!0&&this.play()},play(){if(q&&q.player.pause(),i.current().error){this.mode();return}o.play().then(()=>{i.scroll()}).catch(e=>{})},pause(){o.pause(),document.title=N},stop(){o.pause(),o.currentTime=0,document.title=N},seek(e){e=Math.max(e,0),e=Math.min(e,o.duration),o.currentTime=e,s.update(e/o.duration)},muted(e){e==="muted"?(o.muted=e,f.set("_PlayerMuted",e),u.update(0)):(f.del("_PlayerMuted"),o.muted=!1,u.update(o.volume))},volume(e){isNaN(e)||(u.update(e),f.set("_PlayerVolume",e),o.volume=e)},mini(){x.hide()}};let A={el:null,data:null,index:0,create(e){let a=i.index,r=i.current().lrc,p=n=>{if(a!==i.index)return;this.data=this.parse(n);let l="";this.data.forEach((M,T)=>{l+="<p"+(T===0?' class="current"':"")+">"+M[1]+"</p>"}),this.el=h(e,"div",{className:"inner",innerHTML:l},"replace"),this.index=0};r.startsWith("http")?this.fetch(r,p):p(r)},update(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(let a=0;a<this.data.length;a++)if(e>=this.data[a][0]&&(!this.data[a+1]||e<this.data[a+1][0])){this.index=a;let r=-(this.index-1);this.el.style.transform="translateY("+r+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[a].addClass("current")}}},parse(e){if(e){e=e.replace(/([^\]^\n])\[/g,(n,l)=>l+`
[`);let a=e.split(`
`),r=[],p=a.length;for(let n=0;n<p;n++){let l=a[n].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),M=a[n].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(l){let T=l.length;for(let g=0;g<T;g++){let L=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(l[g]),X=L[1]*60,R=parseInt(L[2]),Y=L[4]?parseInt(L[4])/((L[4]+"").length===2?100:1e3):0,V=X+R+Y;r.push([V,M])}}}return r=r.filter(n=>n[1]),r.sort((n,l)=>n[0]-l[0]),r}else return[]},fetch(e,a){fetch(e).then(r=>r.text()).then(r=>{a(r)}).catch(r=>{})}},J={onerror(){i.error(),t.player.mode()},ondurationchange(){o.duration!==1&&s.el.setAttribute("data-dtime",m.secondToTime(o.duration))},onloadedmetadata(){t.player.seek(0),s.el.setAttribute("data-dtime",m.secondToTime(o.duration))},onplay(){t.parentNode.addClass("playing"),F(this.getAttribute("title")),q=t},onpause(){t.parentNode.removeClass("playing"),q=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),A.update(this.currentTime))},onended(e){t.player.mode(),t.player.play()}};return(e=>{t.player.created||(t.player.options=Object.assign(y,e),t.player.options.mode=f.get("_PlayerMode")||t.player.options.mode,c.create(),o=h(t,t.player.options.type,J),x.create(),t.parentNode.addClass(t.player.options.type),t.player.created=!0)})(d),t};b();var W=(t,d,c,u)=>{if(u)c();else{let s=document.createElement("script");s.onload=function(v,o){(o||!s.readyState)&&(console.log("abort!"),s.onload=null,s=void 0,!o&&c&&setTimeout(c,0))},s.src=t,s.integrity=d,s.crossOrigin="anonymous",document.head.appendChild(s)}},Te=t=>{let{text:d,parentNode:c,id:u,className:s,type:v,src:o,dataset:i}=t,x=d||t.textContent||t.innerHTML||"";c.removeChild(t);let y=document.createElement("script");u&&(y.id=u),s&&(y.className=s),v&&(y.type=v),o&&(y.src=o,y.async=!1),i.pjax!==void 0&&(y.dataset.pjax=""),x!==""&&y.appendChild(document.createTextNode(x)),c.appendChild(y)};b();var G=(t,d)=>{let c=w[t][d].url;return c.startsWith("https")?c:c.startsWith("http")?(console.warn(`Upgrade vendor ${t}/${d} to HTTPS, Please use HTTPS url instead of HTTP url.`),c.replace("http","https")):`/${c}`},Se=(t,d,c)=>{LOCAL[t]&&W(G("js",t),w.js[t].sri,d||function(){window[t]=!0},c||window[t])},qe=(t,d)=>{if(!window["css"+t]&&LOCAL[t]){let c={rel:"stylesheet",href:G("css",t)},u=w.css[t];u.local||(c.integrity=u.sri,c.crossOrigin="anonymous"),h(document.head,"link",c),window["css"+t]=!0}};export{f as a,F as b,ae as c,se as d,ne as e,U as f,be as g,Te as h,Se as i,qe as j};
/*! For license information please see chunk-B73LL4L7.js.LEGAL.txt */
