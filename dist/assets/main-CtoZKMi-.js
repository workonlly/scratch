import{d as H,a as I,b as j,m as L,i as E,c as M}from"./mainimage-g2-cBrXy.js";import"./gsap-zdca4WM-.js";/* empty css              */import{r as q,F as A,W as P,l as _}from"./linko-NB29h-rl.js";import{d as D,m as k}from"./maindatakeywords-B6YbvK1q.js";const C=()=>M.map(a=>{const s=E.find(l=>l.id===a.id);return`
    <div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
      <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
        <img src="${s?s.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
      </div>
      <h3 class="text-xl font-semibold text-black">${a.promo}</h3>
      <p class="text-sm px-2 text-black">${a.heading}</p>
      <a href="/dista/services/index.html?id=${a.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
  `}).join(""),N=()=>[{image_url:"/public/img/blog1.jpg",image_heading:"Digital Marketing Trends 2024",text:"Discover the latest trends in digital marketing and how they can transform your business strategy."},{image_url:"/public/img/blog2.jpg",image_heading:"B2B Lead Generation Strategies",text:"Effective strategies for generating high-quality B2B leads in today's competitive market."},{image_url:"/public/img/blog3.jpg",image_heading:"CRM Integration Best Practices",text:"Learn how to integrate CRM systems effectively to streamline your business operations."}],R=()=>`
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address">
            </div>
            <div>
              <label for="password" class="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password">
            </div>
          </div>

          <div>
            <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  `;Promise.all([H,I,D,j]).then(()=>{var p,x,b,v,w,y;console.log("✅ All data loaded");const a=document.getElementById("app");a?(a.innerHTML=q(),(()=>{const e=document.getElementById("burger-btn"),t=document.getElementById("mobile-menu");e&&t&&e.addEventListener("click",()=>{t.classList.toggle("hidden")})})()):console.log("header not loading");const s=document.getElementById("fe");s?s.innerHTML=A():console.log("header not loading");const l=document.getElementById("ser");l&&(l.innerHTML=C());const c=document.getElementById("wave");c?c.innerHTML=P():console.log("not able to load");const m=document.getElementById("dam");m&&(m.innerHTML=_()),window.addEventListener("DOMContentLoaded",()=>{const e=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(t=>{const n=t.getAttribute("href");if(!n)return;const o=new URL(n,window.location.origin).pathname.replace(/\/+$/,"");t.classList.remove("active"),e===o&&t.classList.add("active")})});function B(){const e=new URLSearchParams(window.location.search),t=Number(e.get("id")),n=document.getElementById("service-contain"),o=document.getElementById("text-noly");if(n&&o&&!isNaN(t)){const r=M.find(i=>i.id===t)||L.find(i=>i.sid==t);r?(n.innerHTML=`
        <header class="text-center py-10 space-y-2 bg-[#4361ee]">
          <h2 class="text-3xl font-bold text-white">${r.promo}</h2>
          <h6 class="text-lg  text-white">•&nbsp;${r.keywords}</h6>
        </header>
        <section class="px-6 py-12 max-w-5xl mx-auto space-y-4">
          <h3 class="text-2xl font-semibold text-center">${r.secheading}</h3>
          <p class="text-center">${r.secpara}</p>
        </section>
      `,o.innerHTML=r.text,console.log("✅ Mapping/rendering ran for show.html, id:",t)):(n.innerHTML='<p class="text-red-500 text-center">Service not found!</p>',o.innerHTML="")}else n&&(n.innerHTML='<p class="text-red-500 text-center">Invalid service request!</p>'),o&&(o.innerHTML="")}B();const u=document.getElementById("blog");if(u){const e=N().map(t=>`
    <section class="h-[60vh] p-1 flex flex-col space-y-1 border-2 hover:border-black hover:scale-105 rounded-xl">
      <div class="h-[30vh] rounded-xl shadow-md relative">
        <img src="${t.image_url}" alt="img" class="w-full h-full object-cover rounded-xl">
      </div>
      <div class="h-[8vh] rounded-xl text-xl font-bold text-center">${t.image_heading}</div>
      <div class="h-[20vh] rounded-xl text-center">${t.text}</div>
    </section>
  `).join("");u.innerHTML=e}const f=document.getElementById("second-id");if(f){const e=new URLSearchParams(window.location.search),t=Number(e.get("id")),n=L.filter(o=>o.id==t);if(n){const o=n.map(r=>{const i=E.find(T=>T.id===r.sid);return`
<div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
       <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
          <img src="${i?i.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
        </div>
      <h3 class="text-xl font-semibold text-black"> ${r.promo}</h3>

      <p class="text-sm px-2 text-black">
        ${r.heading}
      </p>

      <a href="/dista/show/show.html?id=${r.sid}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
    `}).join("");f.innerHTML=o}}const g=window.location.pathname,S=document.querySelectorAll(".nav-link"),$=document.querySelectorAll(".nav-lin");S.forEach(e=>{e.getAttribute("href")===g&&e.classList.add("bg-black","text-white","ease-in")}),$.forEach(e=>{var o;const t=(o=e.textContent)==null?void 0:o.trim().toLowerCase();(t==="home"?"/":`/${t}`)===g&&e.classList.add("bg-white","text-black")});const h=document.getElementById("login");h&&(h.innerHTML=R());const d=window.location.search;if(d){const e=k.find(t=>t.id===Number(d.split("=")[1]));e?(document.title=e.title,(p=document.querySelector('meta[name="description"]'))==null||p.setAttribute("content",e.description||""),(x=document.querySelector('meta[name="keywords"]'))==null||x.setAttribute("content",e.metakeywords.join(", ")||"")):(document.title="Lacleo Digital",(b=document.querySelector('meta[name="description"]'))==null||b.setAttribute("content","Default description"),(v=document.querySelector('meta[name="keywords"]'))==null||v.setAttribute("content","default, keywords"))}else if(d===""){const e=k.find(t=>t.id===111);e&&(document.title=e.title,(w=document.querySelector('meta[name="description"]'))==null||w.setAttribute("content",e.description||""),(y=document.querySelector('meta[name="keywords"]'))==null||y.setAttribute("content",e.metakeywords.join(", ")||""))}});
