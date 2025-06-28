import { maindata } from "./maindata.js";
import { maindata2 } from "./maindata2.js";



const dropdown = document.getElementById("import");

if (dropdown) {
  dropdown.innerHTML = maindata
    .map((item) => {
      const subItems = maindata2
        .filter((sub) => sub.id === item.id)
        .map((sub) => `<a href="#" class="hover:text-white inline-block rounded-sm  px-[10px] py-[10px] hover:bg-black">${sub.promo}</a>`) // nested items
        .join("");

      return `
        <div class="dropdown-item  ">
          <a href="#">${item.promo}</a>
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
          <a href="#" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">${item.promo}</a>
        </div>
      `;
    })
    .join("");
}
