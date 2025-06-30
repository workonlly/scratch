import { maindata } from "./maindata.js";
import { maindata2 } from "./maindata2.js";
import { mdata } from "./maindatakeywords.js";
import "./style.css";


declare global {
  interface Window {
    selectedId: number | null;
  }
}

const dropdown = document.getElementById("import");

if (dropdown) {
  dropdown.innerHTML = maindata
    .map((item) => {
      const subItems = maindata2.filter((sub) => sub.id === item.id);
      
      const hasSubItems = subItems.length > 0;

      return `
        <div class="relative group/item">
          <a href="../show.html?id=${item.id}" class="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">
            <span>${item.promo}</span>
            ${hasSubItems ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : ''}
          </a>
          ${hasSubItems ? `
            <div class="absolute top-0 left-full  bg-white shadow-lg rounded-md py-2 w-56 hidden group-hover/item:block">
              ${subItems.map(subItem => `<a href="../show.html?id=${subItem.sid}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">${subItem.promo}</a>`).join("")}
            </div>
          ` : ''}
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
    <div class="bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full ">
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

// ✅ Declare global selectedId
let selectedId: number | null = null;

// ✅ Step 1: Render anchor tags
const login = document.getElementById("link-clicker");

if (login) {
  const sam = maindata.map((item) => {
    return `
      <div class="text-black flex flex-col justify-left overflow-auto">
        <a id="${item.id}" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">${item.promo}</a>
      </div>`;
  });

  const sam2 = maindata2.map((sub) => {
    return `
      <div class="text-black flex flex-col justify-left overflow-auto">
        <a id="${sub.sid}" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">${sub.promo}</a>
      </div>`;
  });

  const sam3 = `
    <div class="text-black flex flex-col justify-left overflow-auto">
      <a id="111" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">Home</a>
      <a id="112" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">Services</a>
      <a id="113" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">Case Studies</a>
      <a id="114" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">Blog</a>
      <a id="115" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">About Us</a>
      <a id="116" class="hover:text-white text-base font-medium inline-block rounded-sm px-[10px] py-[10px] hover:bg-black">Contact Us</a>
    </div>`;

  login.innerHTML = sam3 + sam.join("\n") + sam2.join("\n");

  const allAnchors = document.querySelectorAll("a");
  allAnchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const clickedAnchor = e.currentTarget as HTMLAnchorElement;
      selectedId = Number(clickedAnchor.id);

      allAnchors.forEach((a) => a.classList.remove("bg-black", "text-white"));
      clickedAnchor.classList.add("bg-black", "text-white");

      renderSelectedData();
    });
  });
}

function renderSelectedData() {
  const second = document.getElementById("second-clicked");
  if (!second || selectedId === null) return;

  const selectedData = mdata.find((item) => item.id === selectedId);
  if (!selectedData) {
    second.innerHTML = `<div class="text-red-500">No data found for ID ${selectedId}</div>`;
    return;
  }

  const keywordBlocks = selectedData.metakeywords
    .map(
      (keyword, index) => `
      <div class="bg-white text-black text-center m-1 p-1 rounded flex justify-between items-center">
        <span>${keyword}</span>
        <button class="ml-2 text-red-600 font-bold" data-index="${index}">✖</button>
      </div>`
    )
    .join("");

  const htmlContent = `
    <h1 class="text-2xl font-bold text-center">Title</h1>
    <div class="bg-black h-1 m-2"></div>
    <div class="m-2 text-center">Current Title</div>
    <div class="border-2 border-black m-2 text-center h-10 bg-black text-white">${selectedData.title}</div>
    <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
      <input type="text" id="title-input" class="border-2 border-black h-10 p-2" placeholder="Enter your title here">
      <button type="button" id="title-update-btn" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
    </div>

    <div class="bg-black h-1 m-2"></div>
    <h1 class="text-2xl font-bold text-center">Meta Description</h1>
    <div class="m-2 text-center">Current Description</div>
    <div class="border-2 border-black m-2 text-center h-60 bg-black text-white overflow-auto">${selectedData.description}</div>
    <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
      <input type="text" id="desc-input" class="border-2 border-black w-1/2 h-20 p-2 mt-2" placeholder="Paste description">
      <button type="button" id="desc-update-btn" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
    </div>

    <div class="bg-black h-1 mt-5"></div>
    <h1 class="text-2xl font-bold text-center">Meta Keywords</h1>
    <div class="m-2 text-center">Current Keywords</div>
    <div class="border-2 border-black m-2 text-center h-50 bg-black text-white overflow-auto grid grid-cols-3">
      ${keywordBlocks}
    </div>
    <div class="h-[10vh] flex flex-row justify-center items-center gap-2">
      <input type="text" id="keywords-input" class="border-2 border-black w-1/2 h-20 p-2 mt-2" placeholder="Paste keywords (comma separated)">
      <button type="button" id="keywords-update-btn" class="h-10 bg-black text-white px-4 rounded-sm">Update</button>
    </div>
  `;

  second.innerHTML = htmlContent;

  // 🟢 Title Update
  document.getElementById("title-update-btn")?.addEventListener("click", () => {
    const newTitle = (document.getElementById("title-input") as HTMLInputElement).value.trim();
    if (newTitle) {
      const index = mdata.findIndex((item) => item.id === selectedId);
      if (index !== -1) {
        mdata[index].title = newTitle;
        alert("Title updated!");
        renderSelectedData();
      }
    } else {
      alert("Title is empty!");
    }
  });

  // 🟢 Description Update
  document.getElementById("desc-update-btn")?.addEventListener("click", () => {
    const newDesc = (document.getElementById("desc-input") as HTMLInputElement).value.trim();
    if (newDesc) {
      const index = mdata.findIndex((item) => item.id === selectedId);
      if (index !== -1) {
        mdata[index].description = newDesc;
        alert("Description updated!");
        renderSelectedData();
      }
    } else {
      alert("Description is empty!");
    }
  });

  // 🟢 Keyword Add
  document.getElementById("keywords-update-btn")?.addEventListener("click", () => {
    const input = document.getElementById("keywords-input") as HTMLInputElement;
    const newKeywords = input.value
      .split(',')
      .map(k => k.trim())
      .filter(k => k !== "");

    if (newKeywords.length > 0) {
      const index = mdata.findIndex((item) => item.id === selectedId);
      if (index !== -1) {
        mdata[index].metakeywords = mdata[index].metakeywords.concat(newKeywords);
        alert("Keywords updated!");
        renderSelectedData();
      }
    } else {
      alert("No valid keywords entered!");
    }
  });

  // 🟢 Keyword Delete Logic
  document.querySelectorAll('[data-index]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const indexToRemove = Number((btn as HTMLElement).getAttribute("data-index"));
      const index = mdata.findIndex((item) => item.id === selectedId);
      if (index !== -1) {
        mdata[index].metakeywords.splice(indexToRemove, 1);
        alert("Keyword removed!");
        renderSelectedData();
      }
    });
  });
}

