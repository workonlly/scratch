import{d as l,a as i,b as c}from"./mainimage-DmFjaikM.js";import{r,F as m,W as u,l as g}from"./linko-NB29h-rl.js";import{d as f}from"./maindatakeywords-DTiOTsIU.js";Promise.all([l,i,f,c]).then(()=>{console.log("✅ All data loaded for aboutus page");const o=document.getElementById("app");o?(o.innerHTML=r(),(()=>{const s=document.getElementById("burger-btn"),d=document.getElementById("mobile-menu");s&&d&&s.addEventListener("click",()=>{d.classList.toggle("hidden")})})()):console.log("header not loading");const e=document.getElementById("fe");e?e.innerHTML=m():console.log("footer not loading");const t=document.getElementById("wave");t?t.innerHTML=u():console.log("wave not loading");const n=document.getElementById("dam");n&&(n.innerHTML=g());const a=document.getElementById("em");a&&(a.innerHTML=`
      <section class="bg-white container mx-auto px-4 py-8 sm:py-12">
        <div class="text-center">
          <h3 class="text-xl sm:text-2xl font-bold mb-4">Ready to Work With Us?</h3>
          <p class="text-base sm:text-lg mb-6">Let's discuss how we can help grow your business.</p>
          <a href="/dista/contactus/index.html" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Get In Touch
          </a>
        </div>
      </section>
    `)});window.addEventListener("DOMContentLoaded",()=>{const o=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(e=>{const t=e.getAttribute("href");if(!t)return;const n=new URL(t,window.location.origin).pathname.replace(/\/+$/,"");e.classList.remove("active"),o===n&&e.classList.add("active")})});
