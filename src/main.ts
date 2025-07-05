import { renderHeader } from './header';
import { Footer } from './footer';
import Services from './links';
import { Wave } from './wavy';
import { maindata ,dataLoaded1 } from './maindata';
import { mdata,datalLoaded3 } from './maindatakeywords';
import { maindata2,datalLoaded2 } from './maindata2';
import { liblog } from './blog';
import { loginn } from './login';
import { image ,datalLoaded4} from './mainimage';
import  lin  from './linko';

Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded');

// header value
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


const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id')); // Convert string to number





// Show.html
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
  } else {
    container.innerHTML = `<p class="text-red-500 text-center">Service not found!</p>`;
    noly.innerHTML = '';
  }
} else {
  if (container) container.innerHTML = `<p class="text-red-500 text-center">Invalid service request!</p>`;
  if (noly) noly.innerHTML = '';
}

// Show.html end


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



const secondid=document.getElementById("second-id")

if (secondid){

  const flexrow=maindata2.filter((item)=> item.id==id);

  if(flexrow){
    
    const vtml=flexrow.map((items)=>{
      const imo = image.find((itemr) => itemr.id === items.sid);
      return`
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
    `}).join("")

    secondid.innerHTML=vtml
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


