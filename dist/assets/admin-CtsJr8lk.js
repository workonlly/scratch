import{d as n,a as d,b as i}from"./mainimage-g2-cBrXy.js";import{d as a}from"./maindatakeywords-B6YbvK1q.js";Promise.all([n,d,a,i]).then(()=>{console.log("✅ All data loaded for admin page");const t=document.getElementById("link-clicker"),o=document.getElementById("second-clicked");t&&o&&(t.innerHTML=`
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-black mb-4">Admin Panel</h2>
        <button onclick="showDashboard()" class="w-full text-left p-2 hover:bg-gray-100 rounded">Dashboard</button>
        <button onclick="showUsers()" class="w-full text-left p-2 hover:bg-gray-100 rounded">Users</button>
        <button onclick="showAnalytics()" class="w-full text-left p-2 hover:bg-gray-100 rounded">Analytics</button>
        <button onclick="logout()" class="w-full text-left p-2 hover:bg-red-100 text-red-600 rounded">Logout</button>
      </div>
    `,window.showDashboard(),window.showDashboard=function(){o.innerHTML=`
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Dashboard</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-blue-100 p-4 rounded">
              <h3 class="font-bold">Total Users</h3>
              <p class="text-2xl">1,234</p>
            </div>
            <div class="bg-green-100 p-4 rounded">
              <h3 class="font-bold">Active Projects</h3>
              <p class="text-2xl">56</p>
            </div>
            <div class="bg-yellow-100 p-4 rounded">
              <h3 class="font-bold">Revenue</h3>
              <p class="text-2xl">$45,678</p>
            </div>
          </div>
        </div>
      `},window.showUsers=function(){o.innerHTML=`
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Users</h2>
          <div class="bg-gray-50 p-4 rounded">
            <p>User management functionality would go here.</p>
          </div>
        </div>
      `},window.showAnalytics=function(){o.innerHTML=`
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Analytics</h2>
          <div class="bg-gray-50 p-4 rounded">
            <p>Analytics and reporting functionality would go here.</p>
          </div>
        </div>
      `},window.logout=function(){localStorage.removeItem("isAdmin"),window.location.href="/dista/login/login.html"})});function c({timeoutMinutes:t=30}={}){const o=t*60*1e3;let e;const l=()=>{clearTimeout(e),e=setTimeout(()=>{alert("Session expired. Logging out."),localStorage.removeItem("isAdmin"),window.location.href="/dista/login/login.html"},o)};["mousemove","keydown","click","scroll"].forEach(s=>document.addEventListener(s,l)),l()}localStorage.getItem("isAdmin")!=="true"?window.location.href="/dista/login/login.html":c({timeoutMinutes:30});
