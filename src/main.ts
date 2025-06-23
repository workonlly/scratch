
import { renderHeader } from './header';
import { Footer } from './footer';
import { email } from './email';
import Services from './links';


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



