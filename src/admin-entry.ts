import { dataLoaded1 } from './maindata';
import { datalLoaded3 } from './maindatakeywords';
import { datalLoaded2 } from './maindata2';
import { datalLoaded4 } from './mainimage';

// Declare global functions
declare global {
  interface Window {
    showDashboard: () => void;
    showUsers: () => void;
    showAnalytics: () => void;
    logout: () => void;
  }
}

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded for admin page');

  // Admin-specific functionality
  const linkClicker = document.getElementById('link-clicker');
  const secondClicked = document.getElementById('second-clicked');

  if (linkClicker && secondClicked) {
    // Admin navigation and content rendering logic
    linkClicker.innerHTML = `
      <div class="space-y-4">
        <h2 class="text-xl font-bold text-black mb-4">Admin Panel</h2>
        <button onclick="showDashboard()" class="w-full text-left p-2 hover:bg-gray-100 rounded">Dashboard</button>
        <button onclick="showUsers()" class="w-full text-left p-2 hover:bg-gray-100 rounded">Users</button>
        <button onclick="showAnalytics()" class="w-full text-left p-2 hover:bg-gray-100 rounded">Analytics</button>
        <button onclick="logout()" class="w-full text-left p-2 hover:bg-red-100 text-red-600 rounded">Logout</button>
      </div>
    `;

    // Default to dashboard
    window.showDashboard();

    // Admin functions
    window.showDashboard = function() {
      secondClicked.innerHTML = `
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
      `;
    };

    window.showUsers = function() {
      secondClicked.innerHTML = `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Users</h2>
          <div class="bg-gray-50 p-4 rounded">
            <p>User management functionality would go here.</p>
          </div>
        </div>
      `;
    };

    window.showAnalytics = function() {
      secondClicked.innerHTML = `
        <div class="space-y-4">
          <h2 class="text-2xl font-bold">Analytics</h2>
          <div class="bg-gray-50 p-4 rounded">
            <p>Analytics and reporting functionality would go here.</p>
          </div>
        </div>
      `;
    };

    window.logout = function() {
      localStorage.removeItem("isAdmin");
      window.location.href = "/dista/login/login.html";
    };
  }
});

// Session timeout logic
function startSessionTimeout({ timeoutMinutes = 30 } = {}) {
  const timeoutMs = timeoutMinutes * 60 * 1000;
  let timeout: NodeJS.Timeout;

  const resetTimeout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      alert("Session expired. Logging out.");
      localStorage.removeItem("isAdmin");
      window.location.href = "/dista/login/login.html";
    }, timeoutMs);
  };

  ["mousemove", "keydown", "click", "scroll"].forEach(evt =>
    document.addEventListener(evt, resetTimeout)
  );

  resetTimeout();
}

// Check admin status and start session timeout
if (localStorage.getItem("isAdmin") !== "true") {
  window.location.href = "/dista/login/login.html";
} else {
  startSessionTimeout({ timeoutMinutes: 30 });
} 