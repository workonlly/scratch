import{d as u,a as f,b as p,c as m,m as h,i as r}from"./mainimage-DmFjaikM.js";import{r as x,F as v,W as w,l as b}from"./linko-NB29h-rl.js";Promise.all([u,f,p]).then(()=>{console.log("✅ All data loaded for services page"),console.log("maindata length:",m.length),console.log("maindata2 length:",h.length),console.log("image length:",r.length);const t=document.getElementById("app");t&&(t.innerHTML=x(),(()=>{const e=document.getElementById("burger-btn"),a=document.getElementById("mobile-menu");e&&a&&e.addEventListener("click",()=>{a.classList.toggle("hidden")})})());const l=document.getElementById("fe");l&&(l.innerHTML=v());const n=document.getElementById("wave");n&&(n.innerHTML=w());const d=document.getElementById("dam");d&&(d.innerHTML=b());const s=document.getElementById("just-id");s?(console.log("🔍 Starting services mapping..."),s.innerHTML=m.map(e=>{const a=h.filter(o=>o.id===e.id),i=r.find(o=>o.id===e.id);return console.log("🔍 Mapping service:",e.promo,"with",a.length,"sub-services"),`
  <div class="bg-white/70 shadow-xl p-4 min-h-[200px] md:w-[90%] m-10 flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black mx-auto">
  <a href="/dista/show/show.html?id=${e.id}" class="flex flex-col items-center gap-4 w-full no-underline">
    <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
      <img src="${i?i.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
    </div>
    <h3 class="text-xl font-semibold text-black">${e.promo}</h3>
    <p class="text-sm px-2 text-black">${e.heading}</p>
  </a>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-1">
    ${a.map(o=>{const c=r.find(g=>g.id===o.sid);return`
          <a href="/dista/show/show.html?id=${o.sid}" class="block bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full no-underline">
            <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
              <img src="${c?c.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold text-black">${o.promo}</h3>
            <p class="text-sm px-2 text-black">${o.heading}</p>
            <span class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">Learn more →</span>
          </a>
        `}).join("")}
  </div>
  <a href="/dista/show/show.html?id=${e.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium mt-4 no-underline">
    Learn more →
  </a>
</div>
    `}).join(""),console.log("✅ Services mapping completed")):console.log("❌ just-id element not found")}).catch(t=>{console.error("❌ Error loading data for services page:",t)});window.addEventListener("DOMContentLoaded",()=>{const t=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(l=>{const n=l.getAttribute("href");if(!n)return;const d=new URL(n,window.location.origin).pathname.replace(/\/+$/,"");l.classList.remove("active"),t===d&&l.classList.add("active")})});
