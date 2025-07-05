import { renderHeader } from './header';
import { Footer } from './footer';
import { Wave } from './wavy';
import { dataLoaded1 } from './maindata';
import { datalLoaded3 } from './maindatakeywords';
import { datalLoaded2 } from './maindata2';
import { datalLoaded4 } from './mainimage';
import lin from './linko';

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded for contactus page');

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

  // Email section
  const em = document.getElementById("em");
  if (em) {
    // Add any email-specific content here
    em.innerHTML = `
      <section class="bg-white container mx-auto px-4 py-8 sm:py-12">
        <div class="text-center">
          <h3 class="text-xl sm:text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p class="text-base sm:text-lg mb-6">Contact us today to discuss your project requirements.</p>
          <a href="mailto:info@lacleodigital.com" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Send us an Email
          </a>
        </div>
      </section>
    `;
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