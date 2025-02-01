import{c as I}from"./chunk-CSYCUVEX.js";I();var x=class{constructor(){this.queue=[]}add(r){return this.queue.push(new M(r)),this}play(){this.queue.forEach(r=>r.play())}},O={targets:null,duration:1/0,easing:"linear",delay:0,begin:null,update:null,complete:null},T=()=>{let t={linear:()=>e=>e},r={Sine:()=>e=>1-Math.cos(e*Math.PI/2),Expo:()=>e=>e?Math.pow(2,10*e-10):0,Circ:()=>e=>1-Math.sqrt(1-e*e),Back:()=>e=>e*e*(3*e-2),Bounce:()=>e=>{let i,a=4;for(;e<((i=Math.pow(2,--a))-1)/11;);return 1/Math.pow(4,3-a)-7.5625*Math.pow((i*3-2)/22-e,2)}};return["Quad","Cubic","Quart","Quint"].forEach((e,i)=>{r[e]=()=>a=>Math.pow(a,i+2)}),Object.keys(r).forEach(e=>{let i=r[e];t["easeIn"+e]=i,t["easeOut"+e]=()=>a=>1-i()(1-a),t["easeInOut"+e]=()=>a=>a<.5?i()(a*2)/2:1-i()(a*-2+2)/2,t["easeOutIn"+e]=()=>a=>a<.5?(1-i()(1-a*2))/2:(i()(a*2-1)+1)/2}),t},P=["translateX","translateY","translateZ"],$=(t,r)=>t instanceof HTMLElement?"transform"in t.style&&P.includes(r)?"transform":r in t.style?"style":"attribute":"attribute",j=t=>{let r=Date.now()+t.delay,e=r+t.duration,i=!!t.targets,a=[],E=()=>{if(i){Array.isArray(t.targets)||(t.targets=[t.targets]);for(let s of t.targets){let l={};for(let n in t.dest){let o=t.dest[n],u=$(s,n);if(Array.isArray(o))if(o.length===2&&typeof o[0]!="object")u==="transform"?s.style.transform=`${n}(${typeof o[0]=="string"?o[0]:o[0]+"px"})`:u==="style"?s.style[n]=o[0]:s[n]=o[0],l[n]=o[0],t.dest[n]=o[1];else{let h=0;for(let f of o)f.startTimeStamp=h,h+=f.duration;l[n]=s[n]}else u==="transform"?l[n]=s.style.transform.match(new RegExp(`${n}\\((\\w+)\\)`))[1]:u==="style"?l[n]=s.style[n]:l[n]=s[n]}a.push(l)}}},y=(s,l,n,o,u,h=!1)=>{let f;if(typeof o=="string")if(f=o.endsWith("%")?"%":o.endsWith("px")?"px":null,f)o=parseFloat(o);else throw new TypeError("string value must ends with '%' or 'px'");let c=h?o:(o-l)*n+l;f&&(c+=f);let p=$(s,u);p==="transform"?s.style.transform=`${u}(${c}${f?"":"px"})`:p==="style"?s.style[u]=c:s[u]=c},g=(s,l,n=!1)=>{t.targets.forEach((o,u)=>{Object.keys(t.dest).forEach(h=>{let f=parseFloat(a[u][h]),c=t.dest[h];if(typeof c=="object")if(Array.isArray(c)){let p=0;for(;p<c.length&&l-r>=c[p].startTimeStamp;)p++;let{value:d,duration:b,easing:q=t.easing,startTimeStamp:A}=c[p-1];f=p<=1?f:c[p-2].value,l<=r+b+A?(s=T()[q]()((l-r-A)/b),y(o,f,s,d,h)):n&&y(o,f,s,d,h,n)}else{let{value:p,duration:d,easing:b=t.easing}=c;l<=r+d?(s=T()[b]()((l-r)/d),y(o,f,s,p,h)):n&&y(o,f,s,p,h,n)}else typeof c=="function"&&(c=c(o,u)),y(o,f,s,c,h,n)})})},w=()=>{let s=Date.now();if(s>e)g(1,s,!0),typeof t.complete=="function"&&t.complete(t.targets),t.isPlay=!1;else{if(s>=r){let l=T()[t.easing]()((s-r)/t.duration);i&&g(l,s),typeof t.update=="function"&&t.update(t.targets)}requestAnimationFrame(w)}};E(),typeof t.begin=="function"&&t.begin(t.targets),w()},M=class{constructor(r=O){r={...O,...r};let{targets:e,duration:i,easing:a,delay:E,begin:y,update:g,complete:w,...s}=r;this.targets=e,this.duration=i,this.easing=a,this.delay=E,this.begin=y,this.update=g,this.complete=w,this.dest=s||{},this.tl=null,this.isPlay=!1}timeline(){return this.tl||(this.tl=new x),this.tl}play(){this.isPlay||(this.isPlay=!0,j(this))}},S=t=>new M(t);S.random=(t,r)=>Math.floor(Math.random()*(r-t+1))+t;export{S as a};
/*! For license information please see chunk-F63MEY25.js.LEGAL.txt */
