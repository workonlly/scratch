import { renderHeader } from './header';
import { Footer } from './footer';
import Services from './links';
import { Wave } from './wavy';
import { dataLoaded1 } from './maindata';
import { datalLoaded3 } from './maindatakeywords';
import { maindata2, datalLoaded2 } from './maindata2';
import { image, datalLoaded4 } from './mainimage';
import lin from './linko';

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded for services page');

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
  } else {
    console.log("header not loading");
  }

  // Footer
  const foot = document.getElementById("fe");
  if (foot) {
    foot.innerHTML = Footer();
  } else {
    console.log("footer not loading");
  }

  // Services
  const servo = document.getElementById("ser");
  if (servo) {
    servo.innerHTML = Services();
  }

  // Wave
  const wave = document.getElementById("wave");
  if (wave) {
    wave.innerHTML = Wave();
  } else {
    console.log("wave not loading");
  }

  // Links
  const dam = document.getElementById("dam");
  if (dam) {
    dam.innerHTML = lin();
  }

  // Services mapping logic
  const secondid = document.getElementById("second-id");
  if (secondid) {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const flexrow = maindata2.filter((item) => item.id == id);

    if (flexrow) {
      const vtml = flexrow
        .map((items) => {
          const imo = image.find((itemr) => itemr.id === items.sid);
          return `
<div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
       <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
          <img src="${imo ? imo.imageurl : ""}" alt="" class="object-fill rounded-full w-full h-full" />
        </div>
      <h3 class="text-xl font-semibold text-black"> ${items.promo}</h3>

      <p class="text-sm px-2 text-black">
        ${items.heading}
      </p>

      <a href="/dista/show/show.html?id=${items.sid}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
    `;
        })
        .join("");

      secondid.innerHTML = vtml;
    }
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