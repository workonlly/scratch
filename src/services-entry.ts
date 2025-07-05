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
  console.log('maindata2 length:', maindata2.length);
  console.log('image length:', image.length);

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
    console.log('🔍 Starting services mapping...');
    
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    console.log('📋 URL ID parameter:', id);
    
    if (!isNaN(id)) {
      console.log('🔍 Searching for services with ID:', id);
      console.log('🔍 Available maindata2 IDs:', maindata2.map(item => item.id));
      
      const flexrow = maindata2.filter((item) => item.id == id);
      console.log('🔍 Found services:', flexrow.length);

      if (flexrow && flexrow.length > 0) {
        const vtml = flexrow
          .map((items) => {
            const imo = image.find((itemr) => itemr.id === items.sid);
            console.log('🔍 Service item:', items.promo, 'Image found:', !!imo);
            
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
        console.log('✅ Services mapping completed for ID:', id);
      } else {
        console.log('❌ No services found for ID:', id);
        secondid.innerHTML = `<p class="text-red-500 text-center">No services found for ID: ${id}</p>`;
      }
    } else {
      console.log('ℹ️ No ID parameter, showing all services');
      // Show all services when no ID parameter
      const allServices = maindata2.map((items) => {
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
      }).join("");
      
      secondid.innerHTML = allServices;
      console.log('✅ All services displayed');
    }
  } else {
    console.log('❌ second-id element not found');
  }
}).catch(error => {
  console.error('❌ Error loading data for services page:', error);
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