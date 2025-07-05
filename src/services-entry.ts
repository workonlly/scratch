import { renderHeader } from './header';
import { Footer } from './footer';
import { Wave } from './wavy';
import { maindata } from './maindata';
import { maindata2 } from './maindata2';
import { image } from './mainimage';
import lin from './linko';

Promise.all([]).then(() => {
  // Mount header
  const mount = document.getElementById('app');
  if (mount) {
    mount.innerHTML = renderHeader();
    (() => {
      const burgerBtn = document.getElementById('burger-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    })();
  }

  // Footer
  const foot = document.getElementById('fe');
  if (foot) {
    foot.innerHTML = Footer();
  }

  // Wave
  const wave = document.getElementById('wave');
  if (wave) {
    wave.innerHTML = Wave();
  }

  // Links
  const dam = document.getElementById('dam');
  if (dam) {
    dam.innerHTML = lin();
  }

  // --- FULL MAPPING LOGIC (from mainexport.ts) ---
  const justid = document.getElementById('just-id');
  if (justid) {
    justid.innerHTML = maindata.map((items) => {
      const gg = maindata2.filter((item) => item.id === items.id);
      const imo = image.find((itemr) => itemr.id === items.id);
      return `
  <div class="bg-white/70 shadow-xl p-4 min-h-[200px] md:w-[90%] m-10 flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black mx-auto">
  <a href="/dista/show/show.html?id=${items.id}" class="flex flex-col items-center gap-4 w-full no-underline">
    <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
      <img src="${imo ? imo.imageurl : ''}" alt="" class="object-fill rounded-full w-full h-full" />
    </div>
    <h3 class="text-xl font-semibold text-black">${items.promo}</h3>
    <p class="text-sm px-2 text-black">${items.heading}</p>
  </a>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-1">
    ${gg
      .map((item) => {
        const ime = image.find((itemr) => itemr.id === item.sid);
        return `
          <a href="/dista/show/show.html?id=${item.sid}" class="block bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full no-underline">
            <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
              <img src="${ime ? ime.imageurl : ''}" alt="" class="object-fill rounded-full w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold text-black">${item.promo}</h3>
            <p class="text-sm px-2 text-black">${item.heading}</p>
            <span class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">Learn more →</span>
          </a>
        `;
      })
      .join('')}
  </div>
  <a href="/dista/show/show.html?id=${items.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium mt-4 no-underline">
    Learn more →
  </a>
</div>
    `;
    }).join('');
  }
});

// Navigation active state
window.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace(/\/+$/, '');
  document.querySelectorAll('.rounded-underline').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, '');
    link.classList.remove('active');
    if (currentPath === linkPath) {
      link.classList.add('active');
    }
  });
}); 