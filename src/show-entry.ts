import { renderHeader } from './header';
import { Footer } from './footer';
import { Wave } from './wavy';
import { maindata, dataLoaded1 } from './maindata';
import { datalLoaded3 } from './maindatakeywords';
import { maindata2, datalLoaded2 } from './maindata2';
import { datalLoaded4 } from './mainimage';
import lin from './linko';

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded for show page');
  console.log('maindata length:', maindata.length);
  console.log('maindata2 length:', maindata2.length);

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

  // Show.html mapping logic (robust)
  function renderShowDetail() {
    console.log('🔍 Starting show detail mapping...');
    
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get('id'));
    console.log('📋 URL ID parameter:', id);
    
    const container = document.getElementById('service-contain');
    const noly = document.getElementById('text-noly');
    
    console.log('🔍 DOM elements found:', {
      container: !!container,
      noly: !!noly,
      id: id,
      isValidId: !isNaN(id)
    });

    if (container && noly && !isNaN(id)) {
      console.log('🔍 Searching for service with ID:', id);
      console.log('🔍 Available maindata IDs:', maindata.map(item => item.id));
      console.log('🔍 Available maindata2 SIDs:', maindata2.map(item => item.sid));
      
      const serviceee = maindata.find((item) => item.id === id) || maindata2.find((item) => item.sid == id);
      
      if (serviceee) {
        console.log('✅ Found service:', serviceee);
        container.innerHTML = `
          <header class="text-center py-10 space-y-2 bg-[#4361ee]">
            <h2 class="text-3xl font-bold text-white">${serviceee.promo}</h2>
            <h6 class="text-lg  text-white">•&nbsp;${serviceee.keywords}</h6>
          </header>
          <section class="px-6 py-12 max-w-5xl mx-auto space-y-4">
            <h3 class="text-2xl font-semibold text-center">${serviceee.secheading}</h3>
            <p class="text-center">${serviceee.secpara}</p>
          </section>
        `;
        noly.innerHTML = serviceee.text;
        console.log('✅ Mapping/rendering completed for show.html, id:', id);
      } else {
        console.log('❌ Service not found for ID:', id);
        container.innerHTML = `<p class="text-red-500 text-center">Service not found for ID: ${id}</p>`;
        noly.innerHTML = '';
      }
    } else {
      console.log('❌ Invalid mapping request:', {
        container: !!container,
        noly: !!noly,
        id: id,
        isValidId: !isNaN(id)
      });
      if (container) container.innerHTML = `<p class="text-red-500 text-center">Invalid service request! ID: ${id}</p>`;
      if (noly) noly.innerHTML = '';
    }
  }

  // Call the mapping function for show.html
  renderShowDetail();
}).catch(error => {
  console.error('❌ Error loading data for show page:', error);
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