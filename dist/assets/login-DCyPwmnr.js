import{d as l,a as s,b as i}from"./mainimage-g2-cBrXy.js";import{r as c,F as u,W as m,l as f}from"./linko-NB29h-rl.js";import{d as p}from"./maindatakeywords-B6YbvK1q.js";const g=()=>`
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
  `;Promise.all([l,s,p,i]).then(()=>{console.log("✅ All data loaded for login page");const n=document.getElementById("app");n?(n.innerHTML=c(),(()=>{const r=document.getElementById("burger-btn"),d=document.getElementById("mobile-menu");r&&d&&r.addEventListener("click",()=>{d.classList.toggle("hidden")})})()):console.log("header not loading");const e=document.getElementById("fe");e?e.innerHTML=u():console.log("footer not loading");const o=document.getElementById("wave");o?o.innerHTML=m():console.log("wave not loading");const t=document.getElementById("dam");t&&(t.innerHTML=f());const a=document.getElementById("login-container");a&&(a.innerHTML=g())});window.addEventListener("DOMContentLoaded",()=>{const n=window.location.pathname.replace(/\/+$/,"");document.querySelectorAll(".rounded-underline").forEach(e=>{const o=e.getAttribute("href");if(!o)return;const t=new URL(o,window.location.origin).pathname.replace(/\/+$/,"");e.classList.remove("active"),n===t&&e.classList.add("active")})});
