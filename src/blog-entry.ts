import { renderHeader } from './header';
import { Footer } from './footer';
import { Wave } from './wavy';
import { dataLoaded1 } from './maindata';
import { datalLoaded3 } from './maindatakeywords';
import { datalLoaded2 } from './maindata2';
import { datalLoaded4 } from './mainimage';
import lin from './linko';

// Blog data function
const liblog = () => {
  return [
    {
      image_url: "/public/img/blog1.jpg",
      image_heading: "Digital Marketing Trends 2024",
      text: "Discover the latest trends in digital marketing and how they can transform your business strategy."
    },
    {
      image_url: "/public/img/blog2.jpg", 
      image_heading: "B2B Lead Generation Strategies",
      text: "Effective strategies for generating high-quality B2B leads in today's competitive market."
    },
    {
      image_url: "/public/img/blog3.jpg",
      image_heading: "CRM Integration Best Practices",
      text: "Learn how to integrate CRM systems effectively to streamline your business operations."
    }
  ];
};

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded for blog page');

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

  // Blog
  const divblog = document.getElementById("blog");
  if (divblog) {
    const html = liblog().map((item) => `
      <section class="h-[60vh] p-1 flex flex-col space-y-1 border-2 hover:border-black hover:scale-105 rounded-xl">
        <div class="h-[30vh] rounded-xl shadow-md relative">
          <img src="${item.image_url}" alt="img" class="w-full h-full object-cover rounded-xl">
        </div>
        <div class="h-[8vh] rounded-xl text-xl font-bold text-center">${item.image_heading}</div>
        <div class="h-[20vh] rounded-xl text-center">${item.text}</div>
      </section>
    `).join(""); 

    divblog.innerHTML = html;
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