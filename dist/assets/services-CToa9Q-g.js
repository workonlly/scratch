import{c as u,m as h,i as c}from"./mainimage-g2-cBrXy.js";/* empty css              */import{r as f,F as x,W as p,l as g}from"./linko-NB29h-rl.js";Promise.all([]).then(()=>{const l=document.getElementById("app");l&&(l.innerHTML=f(),(()=>{const e=document.getElementById("burger-btn"),r=document.getElementById("mobile-menu");e&&r&&e.addEventListener("click",()=>{r.classList.toggle("hidden")})})());const n=document.getElementById("fe");n&&(n.innerHTML=x());const o=document.getElementById("wave");o&&(o.innerHTML=p());const d=document.getElementById("dam");d&&(d.innerHTML=g());const a=document.getElementById("just-id");a&&(a.innerHTML=u.map(e=>{const r=h.filter(t=>t.id===e.id),i=c.find(t=>t.id===e.id);return`
  <div class="bg-white/70 shadow-xl p-4 min-h-[200px] md:w-[90%] m-10 flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black mx-auto">
  <a href="/dista/show/show.html?id=${e.id}" class="flex flex-col items-center gap-4 w-full no-underline">
    <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
      <img src="${i?i.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
    </div>
    <h3 class="text-xl font-semibold text-black">${e.promo}</h3>
    <p class="text-sm px-2 text-black">${e.heading}</p>
  </a>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-1">
    ${r.map(t=>{const s=c.find(m=>m.id===t.sid);return`
          <a href="/dista/show/show.html?id=${t.sid}" class="block bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full no-underline">
            <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
              <img src="${s?s.imageurl:""}" alt="" class="object-fill rounded-full w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold text-black">${t.promo}</h3>
            <p class="text-sm px-2 text-black">${t.heading}</p>
            <span class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">Learn more →</span>
          </a>
        `}).join("")}
  </div>
  <a href="/dista/show/show.html?id=${e.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium mt-4 no-underline">
    Learn more →
  </a>
</div>
    `}).join(""))});window.addEventListener("DOMContentLoaded",()=>{const l=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(n=>{const o=n.getAttribute("href");if(!o)return;const d=new URL(o,window.location.origin).pathname.replace(/\/+$/,"");n.classList.remove("active"),l===d&&n.classList.add("active")})});
