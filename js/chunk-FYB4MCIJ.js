import{b as N}from"./chunk-4GYHPNAQ.js";import{M as A,N as S,W as P,a as U,c as y,f as H,g as _,i as I,k as V,m as x,o as Y,q as k,s as j}from"./chunk-XCMPV3EN.js";import{a as C}from"./chunk-NFFOKI2Q.js";C(),C();var g={set(t,d){localStorage.setItem(t,d)},get(t){return localStorage.getItem(t)},del(t){localStorage.removeItem(t)}},O=t=>{if(!t)return;let d=y(j,"div",{innerHTML:t,className:"tip"});setTimeout(()=>{d.addClass("hide"),setTimeout(()=>{j.removeChild(d)},300)},3e3)},F=()=>{x.auto_scroll&&g.set(S,String(Y.y))},G=t=>{let d=window.location.hash,c=null;if(A){g.del(S);return}d?c=document.querySelector(decodeURI(d)):c=x.auto_scroll?parseInt(g.get(S)):0,c&&(N(c),P(1)),t&&d&&!A&&(N(c),P(1))},z=(t,d)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(t).then(()=>{d&&d(!0)},()=>{d&&d(!1)}):(console.error("Too old browser, clipborad API not supported."),d&&d(!1))};C(),C();var D=()=>{let t;U.each("div.tab",d=>{if(d.getAttribute("data-ready"))return;let c=d.getAttribute("data-id"),u=d.getAttribute("data-title"),s=document.getElementById(c);s?t=!1:(s=document.createElement("div"),s.className="tabs",s.id=c,s.innerHTML='<div class="show-btn"></div>',s.querySelector(".show-btn").addEventListener("click",()=>{N(s)}),d.parentNode.insertBefore(s,d),t=!0);let h=s.querySelector(".nav ul");h||(h=y(s,"div",{className:"nav",innerHTML:"<ul></ul>"}).querySelector("ul"));let i=y(h,"li",{innerHTML:u});t&&(i.addClass("active"),d.addClass("active")),i.addEventListener("click",n=>{let b=n.currentTarget;s.find(".active").forEach(f=>{f.removeClass("active")}),d.addClass("active"),b.addClass("active")}),s.appendChild(d),d.setAttribute("data-ready",String(!0))})},L=null,q=/mobile/i.test(window.navigator.userAgent),K=(t,d)=>{let c={el:{},create(){t.player.options.btns&&t.player.options.btns.forEach(e=>{c.el[e]||(c.el[e]=y(t,"div",{className:e+" btn",onclick(r){t.player.fetch().then(()=>{t.player.options.events[e](r)})}}))})}},u={el:null,btns:{mode:void 0,volume:void 0},step:"next",create:()=>{if(!t.player.options.controls)return;let e=u;t.player.options.controls.forEach(r=>{if(e.btns[r])return;let a={onclick(p){e.events[r]?e.events[r](p):t.player.options.events[r](p)}};switch(r){case"volume":a.className=" "+(i.muted?"off":"on"),a.innerHTML='<div class="bar"></div>',a["on"+m.nameMap.dragStart]=e.events.volume,a.onclick=null;break;case"mode":a.className=" "+t.player.options.mode;break;default:a.className="";break}a.className=r+a.className+" btn",e.btns[r]=y(e.el,"div",a)}),e.btns.volume.bar=e.btns.volume.querySelector(".bar")},events:{mode(e){switch(t.player.options.mode){case"loop":t.player.options.mode="random";break;case"random":t.player.options.mode="order";break;default:t.player.options.mode="loop"}u.btns.mode.className="mode "+t.player.options.mode+" btn",g.set("_PlayerMode",t.player.options.mode)},volume(e){e.preventDefault();let r=e.currentTarget,a=!1,p=o=>{o.preventDefault(),t.player.volume(u.percent(o,r)),a=!0},l=o=>{o.preventDefault(),r.removeEventListener(m.nameMap.dragEnd,l),r.removeEventListener(m.nameMap.dragMove,p),a?(t.player.muted(),t.player.volume(u.percent(o,r))):i.muted?(t.player.muted(),t.player.volume(i.volume)):(t.player.muted("muted"),u.update(0))};r.addEventListener(m.nameMap.dragMove,p),r.addEventListener(m.nameMap.dragEnd,l)},backward(e){u.step="prev",t.player.mode()},forward(e){u.step="next",t.player.mode()}},update(e){u.btns.volume.className="volume "+(!i.muted&&e>0?"on":"off")+" btn",H(u.btns.volume.bar,Math.floor(e*100)+"%")},percent(e,r){let a=((e.clientX||e.changedTouches[0].clientX)-I(r))/_(r);return a=Math.max(a,0),Math.min(a,1)}},s={el:null,bar:null,create(){let e=n.current().el;e&&(s.el&&(s.el.parentNode.removeClass("current").removeEventListener(m.nameMap.dragStart,s.drag),s.el.remove()),s.el=y(e,"div",{className:"progress"}),s.el.setAttribute("data-dtime",m.secondToTime(0)),s.bar=y(s.el,"div",{className:"bar"}),e.addClass("current"),e.addEventListener(m.nameMap.dragStart,s.drag),n.scroll())},update(e){H(s.bar,Math.floor(e*100)+"%"),s.el.setAttribute("data-ptime",m.secondToTime(e*i.duration))},seeking(e){e?s.el.addClass("seeking"):s.el.removeClass("seeking")},percent(e,r){let a=((e.clientX||e.changedTouches[0].clientX)-I(r))/_(r);return a=Math.max(a,0),Math.min(a,1)},drag(e){e.preventDefault();let r=n.current().el,a=l=>{l.preventDefault();let o=s.percent(l,r);s.update(o),E.update(o*i.duration)},p=l=>{l.preventDefault(),r.removeEventListener(m.nameMap.dragEnd,p),r.removeEventListener(m.nameMap.dragMove,a);let o=s.percent(l,r);s.update(o),t.player.seek(o*i.duration),i.disableTimeupdate=!1,s.seeking(!1)};i.disableTimeupdate=!0,s.seeking(!0),r.addEventListener(m.nameMap.dragMove,a),r.addEventListener(m.nameMap.dragEnd,p)}},h={el:null,create(){let e=n.current();h.el.innerHTML='<div class="cover"><div class="disc"><img src="'+e.cover+'" class="blur"  alt="music cover"/></div></div><div class="info"><h4 class="title">'+e.name+"</h4><span>"+e.artist+'</span><div class="lrc"></div></div>',h.el.querySelector(".cover").addEventListener("click",t.player.options.events["play-pause"]),E.create(h.el.querySelector(".lrc"))}},i,n={el:null,data:[],index:-1,errnum:0,add:(e,r)=>{r.forEach(a=>{a.group=e,a.name=a.name||a.title||"Meida name",a.artist=a.artist||a.author||"Anonymous",a.cover=a.cover||a.pic,a.type=a.type||"normal",n.data.push(a)})},clear(){n.data=[],n.el.innerHTML="",n.index!==-1&&(n.index=-1,t.player.fetch())},create(){let e=n.el;n.data.map((r,a)=>{if(r.el)return null;let p="list-"+t.player._id+"-"+r.group,l=document.getElementById(p);return l||(l=y(e,"div",{id:p,className:t.player.group?"tab":"",innerHTML:"<ol></ol>"}),t.player.group&&(l.setAttribute("data-title",t.player.options.rawList[r.group].title),l.setAttribute("data-id",t.player._id))),r.el=y(l.querySelector("ol"),"li",{title:r.name+" - "+r.artist,innerHTML:'<span class="info"><span>'+r.name+"</span><span>"+r.artist+"</span></span>",onclick(o){let w=o.currentTarget;if(n.index===a&&s.el){i.paused?t.player.play():t.player.seek(i.duration*s.percent(o,w));return}t.player.switch(a),t.player.play()}}),r}),D()},current(){return this.data[this.index]},scroll(){let e=this.current(),r=this.el.querySelector("li.active");r&&r.removeClass("active");let a=this.el.querySelector(".tab.active");return a&&a.removeClass("active"),r=this.el.querySelectorAll(".nav li")[e.group],r&&r.addClass("active"),a=this.el.querySelectorAll(".tab")[e.group],a&&a.addClass("active"),N(e.el,e.el.offsetTop),this},title(){if(i.paused)return;let e=this.current();document.title="Now Playing..."+e.name+" - "+e.artist+" | "+k},error(){let e=this.current();e.el.removeClass("current").addClass("error"),e.error=!0,this.errnum++}},b={el:null,create(){this.el||(this.el=y(t,"div",{className:"player-info",innerHTML:(t.player.options.type==="audio"?'<div class="preview"></div>':"")+'<div class="controller"></div><div class="playlist"></div>'},"after"),h.el=this.el.querySelector(".preview"),n.el=this.el.querySelector(".playlist"),u.el=this.el.querySelector(".controller"))},hide(){let e=this.el;e.addClass("hide"),window.setTimeout(()=>{e.removeClass("show hide")},300)}},f={type:"audio",mode:"random",btns:["play-pause","music"],controls:["mode","backward","play-pause","forward","volume"],events:{"play-pause"(e){i.paused?t.player.play():t.player.pause()},music(e){b.el.hasClass("show")?b.hide():(b.el.addClass("show"),n.scroll().title())}}},m={random(e){return Math.floor(Math.random()*e)},parse(e){let r=[];return[["music.163.com.*song.*id=(\\d+)","netease","song"],["music.163.com.*album.*id=(\\d+)","netease","album"],["music.163.com.*artist.*id=(\\d+)","netease","artist"],["music.163.com.*playlist.*id=(\\d+)","netease","playlist"],["music.163.com.*discover/toplist.*id=(\\d+)","netease","playlist"],["y.qq.com.*song/(\\w+)(.html)?","tencent","song"],["y.qq.com.*album/(\\w+)(.html)?","tencent","album"],["y.qq.com.*singer/(\\w+)(.html)?","tencent","artist"],["y.qq.com.*playsquare/(\\w+)(.html)?","tencent","playlist"],["y.qq.com.*playlist/(\\w+)(.html)?","tencent","playlist"],["xiami.com.*song/(\\w+)","xiami","song"],["xiami.com.*album/(\\w+)","xiami","album"],["xiami.com.*artist/(\\w+)","xiami","artist"],["xiami.com.*collect/(\\w+)","xiami","playlist"]].forEach(a=>{let p=new RegExp(a[0]).exec(e);p!==null&&(r=[a[1],a[2],p[1]])}),r},fetch(e){let r=[];return new Promise((a,p)=>{e.forEach(l=>{let o=m.parse(l);if(o[0]){let w=JSON.stringify(o),M=g.get(w);M?(r.push(...JSON.parse(M)),a(r)):fetch(`${x.playerAPI}/meting/?server=`+o[0]+"&type="+o[1]+"&id="+o[2]+"&r="+Math.random()).then(v=>v.json()).then(v=>{g.set(w,JSON.stringify(v)),r.push(...v),a(r)}).catch(v=>{})}else r.push(l),a(r)})})},secondToTime(e){let r=o=>isNaN(o)?"00":o<10?"0"+o:""+o,a=Math.floor(e/3600),p=Math.floor((e-a*3600)/60),l=Math.floor(e-a*3600-p*60);return(a>0?[a,p,l]:[p,l]).map(r).join(":")},nameMap:{dragStart:q?"touchstart":"mousedown",dragMove:q?"touchmove":"mousemove",dragEnd:q?"touchend":"mouseup"}};i=null,t.player={_id:m.random(999999),group:!0,load(e){let r="";e&&e.length>0?this.options.rawList!==e&&(this.options.rawList=e,n.clear(),this.fetch()):(r="none",this.pause());for(let a in c.el)V(c.el[a],r);return this},fetch(){return new Promise((e,r)=>{if(n.data.length>0)e(!1);else if(this.options.rawList){let a=[];this.options.rawList.forEach((p,l)=>{a.push(new Promise((o,w)=>{let M=l,v;p.list?(this.group=!0,v=p.list):(M=0,this.group=!1,v=[p]),m.fetch(v).then(T=>{n.add(M,T),o(0)})}))}),Promise.all(a).then(()=>{e(!0)})}}).then(e=>{e&&(n.create(),u.create(),this.mode())})},mode(){let e=n.data.length;if(!e||n.errnum===e)return;let r=u.step==="next"?1:-1,a=()=>{let l=n.index+r;(l>e||l<0)&&(l=u.step==="next"?0:e-1),n.index=l},p=()=>{let l=m.random(e);n.index!==l?n.index=l:a()};switch(this.options.mode){case"random":p();break;case"order":a();break;case"loop":u.step&&a(),n.index===-1&&p();break}this.init()},switch(e){typeof e=="number"&&e!==n.index&&n.current()&&!n.current().error&&(n.index=e,this.init())},init(){let e=n.current();if(!e||e.error){this.mode();return}let r=!1;i.paused||(r=!0,this.stop()),i.setAttribute("src",e.url),i.setAttribute("title",e.name+" - "+e.artist),this.volume(g.get("_PlayerVolume")||"0.7"),this.muted(g.get("_PlayerMuted")),s.create(),this.options.type==="audio"&&h.create(),r===!0&&this.play()},play(){if(L&&L.player.pause(),n.current().error){this.mode();return}i.play().then(()=>{n.scroll()}).catch(e=>{})},pause(){i.pause(),document.title=k},stop(){i.pause(),i.currentTime=0,document.title=k},seek(e){e=Math.max(e,0),e=Math.min(e,i.duration),i.currentTime=e,s.update(e/i.duration)},muted(e){e==="muted"?(i.muted=e,g.set("_PlayerMuted",e),u.update(0)):(g.del("_PlayerMuted"),i.muted=!1,u.update(i.volume))},volume(e){isNaN(e)||(u.update(e),g.set("_PlayerVolume",e),i.volume=e)},mini(){b.hide()}};let E={el:null,data:null,index:0,create(e){let r=n.index,a=n.current().lrc,p=l=>{if(r!==n.index)return;this.data=this.parse(l);let o="";this.data.forEach((w,M)=>{o+="<p"+(M===0?' class="current"':"")+">"+w[1]+"</p>"}),this.el=y(e,"div",{className:"inner",innerHTML:o},"replace"),this.index=0};a.startsWith("http")?this.fetch(a,p):p(a)},update(e){if(this.data&&(this.index>this.data.length-1||e<this.data[this.index][0]||!this.data[this.index+1]||e>=this.data[this.index+1][0])){for(let r=0;r<this.data.length;r++)if(e>=this.data[r][0]&&(!this.data[r+1]||e<this.data[r+1][0])){this.index=r;let a=-(this.index-1);this.el.style.transform="translateY("+a+"rem)",this.el.getElementsByClassName("current")[0].removeClass("current"),this.el.getElementsByTagName("p")[r].addClass("current")}}},parse(e){if(e){e=e.replace(/([^\]^\n])\[/g,(l,o)=>o+`
[`);let r=e.split(`
`),a=[],p=r.length;for(let l=0;l<p;l++){let o=r[l].match(/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g),w=r[l].replace(/.*\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/g,"").replace(/<(\d{2}):(\d{2})(\.(\d{2,3}))?>/g,"").trim();if(o){let M=o.length;for(let v=0;v<M;v++){let T=/\[(\d{2}):(\d{2})(\.(\d{2,3}))?]/.exec(o[v]),X=T[1]*60,$=parseInt(T[2]),J=T[4]?parseInt(T[4])/((T[4]+"").length===2?100:1e3):0,R=X+$+J;a.push([R,w])}}}return a=a.filter(l=>l[1]),a.sort((l,o)=>l[0]-o[0]),a}else return[]},fetch(e,r){fetch(e).then(a=>a.text()).then(a=>{r(a)}).catch(a=>{})}},W={onerror(){n.error(),t.player.mode()},ondurationchange(){i.duration!==1&&s.el.setAttribute("data-dtime",m.secondToTime(i.duration))},onloadedmetadata(){t.player.seek(0),s.el.setAttribute("data-dtime",m.secondToTime(i.duration))},onplay(){t.parentNode.addClass("playing"),O(this.getAttribute("title")),L=t},onpause(){t.parentNode.removeClass("playing"),L=null},ontimeupdate(){this.disableTimeupdate||(s.update(this.currentTime/this.duration),E.update(this.currentTime))},onended(e){t.player.mode(),t.player.play()}};return(e=>{t.player.created||(t.player.options=Object.assign(f,e),t.player.options.mode=g.get("_PlayerMode")||t.player.options.mode,c.create(),i=y(t,t.player.options.type,W),b.create(),t.parentNode.addClass(t.player.options.type),t.player.created=!0)})(d),t};C();var Q=(t,d,c,u)=>{if(u)c();else{let s=document.createElement("script");s.onload=function(h,i){(i||!s.readyState)&&(console.log("abort!"),s.onload=null,s=void 0,!i&&c&&setTimeout(c,0))},s.src=t,s.integrity=d,s.crossOrigin="anonymous",document.head.appendChild(s)}},Z=t=>{let{text:d,parentNode:c,id:u,className:s,type:h,src:i,dataset:n}=t,b=d||t.textContent||t.innerHTML||"";c.removeChild(t);let f=document.createElement("script");u&&(f.id=u),s&&(f.className=s),h&&(f.type=h),i&&(f.src=i,f.async=!1),n.pjax!==void 0&&(f.dataset.pjax=""),b!==""&&f.appendChild(document.createTextNode(b)),c.appendChild(f)};C();var B=(t,d)=>{let c=x[t][d].url;return c.startsWith("https")?c:c.startsWith("http")?(console.warn(`Upgrade vendor ${t}/${d} to HTTPS, Please use HTTPS url instead of HTTP url.`),c.replace("http","https")):`/${c}`},ee=(t,d,c)=>{LOCAL[t]&&Q(B("js",t),x.js[t].sri,d||function(){window[t]=!0},c||window[t])},te=(t,d)=>{if(!window["css"+t]&&LOCAL[t]){let c={rel:"stylesheet",href:B("css",t)},u=x.css[t];u.local||(c.integrity=u.sri,c.crossOrigin="anonymous"),y(document.head,"link",c),window["css"+t]=!0}};export{g as a,O as b,F as c,G as d,z as e,D as f,K as g,Z as h,ee as i,te as j};/*! For license information please see chunk-FYB4MCIJ.js.LEGAL.txt */
