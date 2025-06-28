import { maindata } from "./maindata.js";
import { maindata2 } from "./maindata2.js";
import { loginpage } from "./admin.js";
import { mdata } from "./maindatakeywords.js";



const dropdown = document.getElementById("import");

if (dropdown) {
  dropdown.innerHTML = maindata
    .map((item) => {
      const subItems = maindata2
        .filter((sub) => sub.id === item.id)
        .map((sub) => `<a href="../show.html?id=${sub.sid}" class="hover:text-white inline-block rounded-sm  px-[10px] py-[10px] hover:bg-black">${sub.promo}</a>`) // nested items
        .join("");

      return `
        <div class="dropdown-item  ">
          <a href="../show.html?id=${item.id}">${item.promo}</a>
          ${subItems ? `<div class="submenu  "><div class="grid grid-cols-2 overflow-auto ">
            ${subItems}</div></div>` : ""}
        
        </div>
      `;
    })
    .join("");
}

const dropdown2 = document.getElementById("import2");

if(dropdown2) {
  dropdown2.innerHTML = maindata
    .map((item) => {
      return `
        <div class="  ">
          <a  href="../show.html?id=${item.id}" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">${item.promo}</a>
        </div>
      `;
    })
    .join("");
}
const dropdown1 = document.getElementById("import1");

if(dropdown1) {
  dropdown1.innerHTML = maindata2
    .map((item) => {
      return `
        <div class="  ">
          <a  href="../show.html?id=${item.id}" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">${item.promo}</a>
        </div>
      `;
    })
    .join("");
}



const firstid=document.getElementById("first-id")

if (firstid){

   firstid.innerHTML = maindata.map((items) => `
    <div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
      <div class="rounded-full h-14 w-14 bg-black"></div>

      <h3 class="text-xl font-semibold text-black">${items.promo}</h3>

      <p class="text-sm px-2 text-black">
        ${items.heading}
      </p>

      <a href="../show.html?id=${items.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
  `).join("");
}
const justid=document.getElementById("just-id")
 document.addEventListener("DOMContentLoaded", () => {
if (justid){

   justid.innerHTML = maindata.map((items) =>{ 
        const gg = maindata2.filter((item) => item.id === items.id);
    return`
    <div class="bg-white/70 shadow-xl p-4 min-h-[200px] m-[20px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
      <div class="rounded-full h-14 w-14 bg-black"></div>

      <h3 class="text-xl font-semibold text-black">${items.promo}</h3>

      <p class="text-sm px-2 text-black">
        ${items.heading}
      </p>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >
        ${gg.map((item) => `
          <div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
            <div class="rounded-full h-14 w-14 bg-black"></div>
            <h3 class="text-xl font-semibold text-black">${item.promo}</h3>
            <p class="text-sm px-2 text-black">${item.heading}</p>
               <a href="../show.html?id=${item.sid}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
                Learn more →
            </a>
          </div>
        `).join("")}
        </div>
      <a href="../show.html?id=${items.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">
        Learn more →
      </a>
    </div>
    `}).join("");
}})

  const login = document.getElementById("login");

if(login){

  login.innerHTML= maindata.map((item) => {
   return maindata2.map((sub) => {
      return mdata.map((items) => {
        return`
      <div class="bg-black h-full w-full flex flex-row gap-1 p-2">
    <!-- Side Panel -->
    <div class="w-[30%] h-full bg-white rounded-md overflow-y-auto p-4">
      <div class="text-black flex flex-col justify-left  overflow-auto">
       <a  href="" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">home</a>
        <a  href="" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">Case Studies</a>
    <a  href="" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">blog</a>
      <a  href="" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">About us</a>
    <a  href="" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">contact us</a>
        <div>${item.promo}</div>
        <div >${sub.promo}</div>
      </div>
    </div>

    <!-- Main Panel -->
    <div class="w-[70%] h-full bg-white rounded-md overflow-y-auto p-4">
      <h1 class="text-2xl font-bold text-center">Title</h1>
      <div class="bg-black h-1 m-2"></div>
      <div class="m-2 text-center">Current Title</div>

      <div class="border-2 border-black m-2 text-center h-20 bg-black"> ${items.title}</div>

      <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
        <input type="text" placeholder="Enter your title here" class="border-2 border-black h-10 p-2">
        <button type="submit" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
      </div>

      <div class="bg-black h-1 m-2"></div>
      <h1 class="text-2xl font-bold text-center">Meta Description</h1>
      <div class="bg-black h-1 m-2">${items.description}</div>
      <div class="m-2 text-center">Current Description</div>
      <div class="border-2 border-black m-2 text-center h-60 bg-black overflow-auto"></div>

      <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
        <input type="text" placeholder="Paste description" class="border-2 border-black w-1/2 h-20 p-2 mt-2">
        <button type="submit" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
      </div>
      <div class="bg-black h-1 mt-5"></div>
      <h1 class="text-2xl font-bold text-center">Meta keywrods</h1>
      <div class="bg-black h-1 m-2">${items.metakeywords}</div>
      <div class="m-2 text-center">Current keywords</div>
      <div class="border-2 border-black m-2 text-center h-50 bg-black overflow-auto"></div>

      <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
        <input type="text" placeholder="Paste keywords" class="border-2 border-black w-1/2 h-20 p-2 mt-2">
        <button type="submit" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
      </div>

      <div class="bg-black h-1 mt-6"></div>
      <h1 class="text-2xl font-bold text-center">Keywords on Page</h1>
      <div class="bg-black h-1 m-2"> ${item.keywords||sub.keywords}</div>
      <div class="m-2 text-center">Current Keywords</div>
      <div class="border-2 border-black m-2 text-center h-60 bg-black overflow-auto"></div>

      <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
        <input type="text" placeholder="Paste keywords" class="border-2 border-black w-1/2 h-20 p-2 mt-2">
        <button type="submit" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
      </div>
    </div>
  </div>

      
      `}).join("");
    }).join("");
  }).join("");
}