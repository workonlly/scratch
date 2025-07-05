import{d as I,a as S,b as $,m as L,i as q,c as j}from"./mainimage-g2-cBrXy.js";import"./gsap-zdca4WM-.js";import{r as E,F as P,W as N,l as O}from"./linko-NB29h-rl.js";/* empty css              */import{d as C,m as k}from"./maindatakeywords-B6YbvK1q.js";import{l as D}from"./blog-drMOORxl.js";import{l as U}from"./login-C4PZJEja.js";const M=document.getElementById("app");M&&(M.innerHTML=E());function R(){return`
          <section class="px-10 mt-20   bg-white  ">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" id="first-id">
        </div>
        <div class="relative h-[40vh] md:h-[60vh] sm:h-[90vh] rounded-lg m-4 p-2 sm:p-2 md:m-[20px] p-6 md:p-8 backdrop-blur-md shadow-lg flex flex-col items-center justify-center gap-6 text-center text-black bg-[#4361ee] hover:border-2 hover:border-black overflow-hidden">
    <h2 class="text-3xl md:text-5xl font-bold text-white mt-2">Offering You A More</h2>

    <p class="w-full max-w-xl text-white text-base md:text-xl leading-relaxed px-2">
     We empower businesses to thrive in the digital landscape by delivering comprehensive solutions, from virtual marketing to cutting-edge lead generation services.
    </p>
   <div class="w-full flex justify-center  md:mr-[20%] mr-[70%]">
   <a href="/dista/contactus/index.html">
    <div class="relative g-hov">
    
    <div class="button-1 "></div>
    <div class="button-2 "></div>
    <div class="button-3 flex justify-center items-center text-sm sm:text-base font-medium text-white">
      BOOK A CONSULTATION
    </div>
     </div>
     </a>
    </div>

        </div>
      </section>


    
    
    `}Promise.all([I,S,C,$]).then(()=>{var g,p,v,b,w,y;console.log("✅ All data loaded");const l=document.getElementById("app");l?(l.innerHTML=E(),(()=>{const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("hidden")})})()):console.log("header not loading");const r=document.getElementById("fe");r?r.innerHTML=P():console.log("header not loading");const a=document.getElementById("ser");a&&(a.innerHTML=R());const c=document.getElementById("wave");c?c.innerHTML=N():console.log("not able to load");const m=document.getElementById("dam");m&&(m.innerHTML=O()),window.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(t=>{const o=t.getAttribute("href");if(!o)return;const n=new URL(o,window.location.origin).pathname.replace(/\/+$/,"");t.classList.remove("active"),e===n&&t.classList.add("active")})});function T(){const e=new URLSearchParams(window.location.search),t=Number(e.get("id")),o=document.getElementById("service-contain"),n=document.getElementById("text-noly");if(o&&n&&!isNaN(t)){const i=j.find(s=>s.id===t)||L.find(s=>s.sid==t);i?(o.innerHTML=`
        <header class="text-center py-10 space-y-2 bg-[#4361ee]">
          <h2 class="text-3xl font-bold text-white">${i.promo}</h2>
          <h6 class="text-lg  text-white">•&nbsp;${i.keywords}</h6>
        </header>
        <section class="px-6 py-12 max-w-5xl mx-auto space-y-4">
          <h3 class="text-2xl font-semibold text-center">${i.secheading}</h3>
          <p class="text-center">${i.secpara}</p>
        </section>
      `,n.innerHTML=i.text,console.log("✅ Mapping/rendering ran for show.html, id:",t)):(o.innerHTML='<p class="text-red-500 text-center">Service not found!</p>',n.innerHTML="")}else o&&(o.innerHTML='<p class="text-red-500 text-center">Invalid service request!</p>'),n&&(n.innerHTML="")}T();const u=document.getElementById("blog");if(u){const e=D().map(t=>`
    <section class="h-[60vh] p-1 flex flex-col space-y-1 border-2 hover:border-black hover:scale-105 rounded-xl">
      <div class="h-[30vh] rounded-xl shadow-md relative">
        <img src="${t.image_url}" alt="img" class="w-full h-full object-cover rounded-xl">
      </div>
      <div class="h-[8vh] rounded-xl text-xl font-bold text-center">${t.image_heading}</div>
      <div class="h-[20vh] rounded-xl text-center">${t.text}</div>
    </section>
  `).join("");u.innerHTML=e}const h=document.getElementById("second-id");if(h){const e=new URLSearchParams(window.location.search),t=Number(e.get("id")),o=L.filter(n=>n.id==t);if(o){const n=o.map(i=>{const s=q.find(B=>B.id===i.sid);return`
<div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
       <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
          <img src="${s?s.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
        </div>
      <h3 class="text-xl font-semibold text-black"> ${i.promo}</h3>

      <p class="text-sm px-2 text-black">
        ${i.heading}
      </p>

      <a href="/dista/show/show.html?id=${i.sid}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
    `}).join("");h.innerHTML=n}}const f=window.location.pathname,H=document.querySelectorAll(".nav-link"),A=document.querySelectorAll(".nav-lin");H.forEach(e=>{e.getAttribute("href")===f&&e.classList.add("bg-black","text-white","ease-in")}),A.forEach(e=>{var n;const t=(n=e.textContent)==null?void 0:n.trim().toLowerCase();(t==="home"?"/":`/${t}`)===f&&e.classList.add("bg-white","text-black")});const x=document.getElementById("login");x&&(x.innerHTML=U());const d=window.location.search;if(d){const e=k.find(t=>t.id===Number(d.split("=")[1]));e?(document.title=e.title,(g=document.querySelector('meta[name="description"]'))==null||g.setAttribute("content",e.description||""),(p=document.querySelector('meta[name="keywords"]'))==null||p.setAttribute("content",e.metakeywords.join(", ")||"")):(document.title="Lacleo Digital",(v=document.querySelector('meta[name="description"]'))==null||v.setAttribute("content","Default description"),(b=document.querySelector('meta[name="keywords"]'))==null||b.setAttribute("content","default, keywords"))}else if(d===""){const e=k.find(t=>t.id===111);e&&(document.title=e.title,(w=document.querySelector('meta[name="description"]'))==null||w.setAttribute("content",e.description||""),(y=document.querySelector('meta[name="keywords"]'))==null||y.setAttribute("content",e.metakeywords.join(", ")||""))}});
