import { renderHeader } from './header';
import { Footer } from './footer';
import { Wave } from './wavy';
import { maindata ,dataLoaded1 } from './maindata';
import { mdata,datalLoaded3 } from './maindatakeywords';
import { maindata2,datalLoaded2 } from './maindata2';
import { image ,datalLoaded4} from './mainimage';
import  lin  from './linko';

// Services function (replacing links.ts)
const Services = () => {
  return maindata.map((item) => {
    const img = image.find((imgItem) => imgItem.id === item.id);
    return `
    <div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
      <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
        <img src="${img ? img.imageurl : ''}" alt="" class="object-fill rounded-full w-full h-full" />
      </div>
      <h3 class="text-xl font-semibold text-black">${item.promo}</h3>
      <p class="text-sm px-2 text-black">${item.heading}</p>
      <a href="/dista/services/index.html?id=${item.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
  `;
  }).join("");
};

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

// Login form function
const loginn = () => {
  return `
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
  `;
};

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded');

// Mount header on every page
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

}else{
    console.log("header not loading")
}
// header value end here

// footer
const foot=document.getElementById("fe")

if (foot) {
  foot.innerHTML = Footer();
}else{
    console.log("header not loading")
}
// footer end



// services  link.ts

const servo= document.getElementById("ser")
if(servo){
 servo.innerHTML=Services()}

// services end

  // wave.ts

 const wave=document.getElementById("wave")

 if(wave){
  wave.innerHTML=Wave();
 }
 else{
  console.log("not able to load")
 }
// wave.ts end

const dam=document.getElementById("dam");
if (dam) {
  dam.innerHTML = lin();
}



window.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname.replace(/\/+$/, '');

  document.querySelectorAll('.rounded-underline').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, '');

    // Reset all links first
    link.classList.remove('active');

    // Add .active only if exact match
    if (currentPath === linkPath) {
      link.classList.add('active');
    }
  });
});


// Show.html mapping logic (robust)
function renderShowDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get('id'));
  const container = document.getElementById('service-contain');
  const noly = document.getElementById('text-noly');
  if (container && noly && !isNaN(id)) {
    const serviceee = maindata.find((item) => item.id === id) || maindata2.find((item) => item.sid == id);
    if (serviceee) {
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
      console.log('✅ Mapping/rendering ran for show.html, id:', id);
    } else {
      container.innerHTML = `<p class="text-red-500 text-center">Service not found!</p>`;
      noly.innerHTML = '';
    }
  } else {
    if (container) container.innerHTML = `<p class="text-red-500 text-center">Invalid service request!</p>`;
    if (noly) noly.innerHTML = '';
  }
}

// Call the mapping function for show.html
renderShowDetail();


// blog.html
const divblog=document.getElementById("blog");

if (divblog) {
  const html = liblog().map((item) => `
    <section class="h-[60vh] p-1 flex flex-col space-y-1 border-2 hover:border-black hover:scale-105 rounded-xl">
      <div class="h-[30vh] rounded-xl shadow-md relative">
        <img src="${item.image_url}" alt="img" class="w-full h-full object-cover rounded-xl">
      </div>
      <div class="h-[8vh] rounded-xl text-xl font-bold text-center">${item.image_heading}</div>
      <div class="h-[20vh] rounded-xl text-center">${item.text}</div>
    </section>
  `
    )
    .join(""); 

  divblog.innerHTML = html;
}
// blog.html end



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


const currentPath = window.location.pathname;

const links = document.querySelectorAll('.nav-link'); // for <a>
const linko = document.querySelectorAll('.nav-lin');  // for <p>

links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('bg-black', 'text-white','ease-in');
  }
});

linko.forEach(link => {
  const text = link.textContent?.trim().toLowerCase();
  const expectedPath = text === 'home' ? '/' : `/${text}`;
  if (expectedPath === currentPath) {
    link.classList.add('bg-white', 'text-black');
  }
});


const login= document.getElementById("login");

if(login){
  login.innerHTML = loginn();
}




const tittle=window.location.search

if (tittle) {
 const title= mdata.find((item) => item.id === Number(tittle.split('=')[1]));
  if (title) {
    document.title = title.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', title.description || '');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', title.metakeywords.join(', ') || '');  
  }else {
    document.title = "Lacleo Digital";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Default description');
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', 'default, keywords');
  }}
else if(tittle === ""){
    const title= mdata.find((item) => item.id === 111);
    if (title) {
      document.title = title.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', title.description || '');
      document.querySelector('meta[name="keywords"]')?.setAttribute('content', title.metakeywords.join(', ') || '');

}}



});


