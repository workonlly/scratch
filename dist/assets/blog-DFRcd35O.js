import{d as r,a as i,b as s}from"./mainimage-g2-cBrXy.js";/* empty css              */import{r as c,F as m,W as g,l as u}from"./linko-NB29h-rl.js";import{l as f}from"./blog-drMOORxl.js";import{d as h}from"./maindatakeywords-B6YbvK1q.js";Promise.all([r,i,h,s]).then(()=>{console.log("✅ All data loaded for blog page");const n=document.getElementById("app");n?(n.innerHTML=c(),(()=>{const l=document.getElementById("burger-btn"),o=document.getElementById("mobile-menu");l&&o&&l.addEventListener("click",()=>{o.classList.toggle("hidden")})})()):console.log("header not loading");const e=document.getElementById("fe");e?e.innerHTML=m():console.log("footer not loading");const t=document.getElementById("wave");t?t.innerHTML=g():console.log("wave not loading");const d=document.getElementById("dam");d&&(d.innerHTML=u());const a=document.getElementById("blog");if(a){const l=f().map(o=>`
      <section class="h-[60vh] p-1 flex flex-col space-y-1 border-2 hover:border-black hover:scale-105 rounded-xl">
        <div class="h-[30vh] rounded-xl shadow-md relative">
          <img src="${o.image_url}" alt="img" class="w-full h-full object-cover rounded-xl">
        </div>
        <div class="h-[8vh] rounded-xl text-xl font-bold text-center">${o.image_heading}</div>
        <div class="h-[20vh] rounded-xl text-center">${o.text}</div>
      </section>
    `).join("");a.innerHTML=l}});window.addEventListener("DOMContentLoaded",()=>{const n=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(e=>{const t=e.getAttribute("href");if(!t)return;const d=new URL(t,window.location.origin).pathname.replace(/\/+$/,"");e.classList.remove("active"),n===d&&e.classList.add("active")})});
