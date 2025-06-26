
import { renderHeader } from './header';
import { Footer } from './footer';
import { email } from './email';
import Services from './links';
import { Wave } from './wavy';
import { service } from './services';
import {servicess} from './servicess';
import { liblog } from './blog';
import { login } from './login';
const mount = document.getElementById('app');
if (mount) {
  mount.innerHTML = renderHeader();
}else{
    console.log("header not loading")
}

const foot=document.getElementById("fe")

if (foot) {
  foot.innerHTML = Footer();
}else{
    console.log("header not loading")
}

const emai=document.getElementById("em")

if (emai) {
  emai.innerHTML = email();
}else{
    console.log("header not loading")
}

const servo= document.getElementById("ser")
if(servo){
 servo.innerHTML=Services()}

 const wave=document.getElementById("wave")

 if(wave){
  wave.innerHTML=Wave();
 }
 else{
  console.log("not able to load")
 }


const log=document.getElementById("log")
if(log){

  log.innerHTML=login();
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

const container = document.getElementById('service-contain');
const noly = document.getElementById('text-noly');

if (container && noly && !isNaN(id)) {
  const serviceee = service.find((item) => item.id === id)||servicess.find((item)=> item.id==id);

  if (serviceee) {
    container.innerHTML = `
      <header class="text-center py-10 space-y-2 bg-[#4361ee]">
        <h2 class="text-3xl font-bold text-white">${serviceee.heading1}</h2>
        <h6 class="text-lg  text-white">•&nbsp;${serviceee.subHeading1}</h6>
      </header>

      <section class="px-6 py-12 max-w-5xl mx-auto space-y-4">
        <h3 class="text-2xl font-semibold text-center">${serviceee.heading2}</h3>
        <p class="text-center">${serviceee.subHeading2}</p>
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

const secondid=document.getElementById("second-id")

if (secondid){

  const flexrow=servicess.filter((item)=> item.sid==id);

  if(flexrow){

    const vtml=flexrow.map((items)=>`
<div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
      <div class="rounded-full h-14 w-14 bg-black"></div>

      <h3 class="text-xl font-semibold text-black"> ${items.heading1}</h3>

      <p class="text-sm px-2 text-black">
        Expand your social presence and engage your audience with impactful content and strategy.
      </p>

      <a href="#" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
    `).join("")

    secondid.innerHTML=vtml
  }
}

