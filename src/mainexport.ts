import { maindata ,dataLoaded1 } from './maindata';
import { mdata,datalLoaded3 } from './maindatakeywords';
import { maindata2,datalLoaded2 } from './maindata2';
import "./style.css";
import { image ,datalLoaded4 } from "./mainimage.js";
import { supabase } from '../supabase.js';

declare global {
  interface Window {
    selectedId: number | null;
  }
}

// ✅ Declare global selectedId at the top
let selectedId: number | null = null;

// Wait for all data loads before rendering
Promise.all([dataLoaded1, datalLoaded2, datalLoaded3, datalLoaded4]).then(() => {
  console.log('✅ All data loaded');

const dropdown = document.getElementById("import");

if (dropdown) {
  dropdown.innerHTML = maindata
    .map((item) => {
      const subItems = maindata2.filter((sub) => sub.id === item.id);
      
      const hasSubItems = subItems.length > 0;

      return `
        <div class="relative group/item">
          <a href="/dista/show/show.html?id=${item.id}" class="flex justify-between items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">
            <span>${item.promo}</span>
            ${hasSubItems ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : ''}
          </a>
          ${hasSubItems ? `
            <div class="absolute top-0 left-full  bg-white shadow-lg rounded-md py-2 w-56 hidden group-hover/item:block">
              ${subItems.map(subItem => `<a href="/dista/show/show.html?id=${subItem.sid}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">${subItem.promo}</a>`).join("")}
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
          <a  href="/dista/show//show.html?id=${item.id}" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">${item.promo}</a>
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
          <a  href="/dista/show/show.html?id=${item.id}" class="hover:text-black text-base font-medium inline-block rounded-sm  px-[10px] py-[10px] hover:bg-white">${item.promo}</a>
        </div>
      `;
    })
    .join("");
}



const firstid=document.getElementById("first-id")

if (firstid){
   
   firstid.innerHTML = maindata.map((items) =>{
    const imo=image.find((item) => item.id === items.id);
    return `
    
   <div class="block bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full">
  
  <a href="/dista/show/show.html?id=${items.id}" class="flex flex-col items-center gap-4 w-full no-underline">
    
    <div class="rounded-full h-20 w-20 overflow-hidden">
      <img src="${imo ? imo.imageurl : ''}" alt="" class="object-cover w-full h-full rounded-full">
    </div>

    <h3 class="text-xl font-semibold text-black">${items.promo}</h3>

    <p class="text-sm px-2 text-black">
      ${items.heading}
    </p>

    <span class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium transition">
      Learn more →
    </span>

  </a>

</div>

  `}).join("");
}


const justid=document.getElementById("just-id")

if (justid) {
  justid.innerHTML = maindata.map((items) => {
    const gg = maindata2.filter((item) => item.id === items.id);
    const imo = image.find((itemr) => itemr.id === items.id);

    return `
  <div class="bg-white/70 shadow-xl p-4 min-h-[200px] md:w-[90%] m-10 flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black mx-auto">
  <a href="/dista/show/show.html?id=${items.id}" class="flex flex-col items-center gap-4 w-full no-underline">
    
    <!-- Top Icon/Image -->
    <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
      <img src="${imo ? imo.imageurl : ''}" alt="" class="object-fill rounded-full w-full h-full" />
    </div>

    <!-- Title & Heading -->
    <h3 class="text-xl font-semibold text-black">${items.promo}</h3>
    <p class="text-sm px-2 text-black">${items.heading}</p>
  </a>

  <!-- Sub Cards Section -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full p-1">
    ${gg
      .map((item) => {
        const ime = image.find((itemr) => itemr.id === item.sid);
        return `
          <a href="/dista/show/show.html?id=${item.sid}" class="block bg-white/70 shadow-xl p-4 min-h-[200px] flex flex-col items-center text-center gap-4 rounded-2xl hover:scale-105 transition-transform duration-300 hover:border-2 hover:border-black w-full no-underline">
            <div class="rounded-full h-[60px] w-[60px] overflow-hidden">
              <img src="${ime ? ime.imageurl : ''}" alt="" class="object-fill rounded-full w-full h-full" />
            </div>
            <h3 class="text-xl font-semibold text-black">${item.promo}</h3>
            <p class="text-sm px-2 text-black">${item.heading}</p>
            <span class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium">Learn more →</span>
          </a>
        `;
      })
      .join("")}
  </div>

  <!-- Learn More Button for Main Card -->
  <a href="/dista/show/show.html?id=${items.id}" class="text-black px-3 py-1 hover:text-white hover:bg-black rounded-full text-sm font-medium mt-4 no-underline">
    Learn more →
  </a>
</div>

    `;
  }).join("");
}


// ✅ Step 1: Render anchor tags
const login = document.getElementById("link-clicker");
const second=document.getElementById("second-clicked");

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

  // ✅ Fix: Use login.querySelectorAll instead of document.querySelectorAll
  // and add a small delay to ensure DOM is ready
  setTimeout(() => {
    const allAnchors = login.querySelectorAll("a");
    console.log('Found anchors:', allAnchors.length);
    
    allAnchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const clickedAnchor = e.currentTarget as HTMLAnchorElement;
        selectedId = Number(clickedAnchor.id);
        
        console.log('Clicked anchor ID:', selectedId);

        // Remove active class from all anchors within login element
        allAnchors.forEach((a) => a.classList.remove("bg-black", "text-white"));
        clickedAnchor.classList.add("bg-black", "text-white");

        renderSelectedData();
      });
    });
  }, 100);
}

function renderSelectedData() {
 
  const title = mdata.find(item => item.id === selectedId);
  const data=maindata.find(item => item.id === selectedId)||maindata2.find(item => item.sid === selectedId);


  const keywordBlocks = title?.metakeywords
  .map(
    (keyword, index) => `
    <div class="bg-white text-black text-center m-1 p-1 rounded flex  justify-between items-center">
      <span>${keyword}</span>
      <button class="ml-2 text-red-600 font-bold" data-index="${index}">✖</button>
    </div>`
  )
  .join("");
  const keywordBlocks1 = data?.keywords
  .map(
    (keyword, index) => `
    <div class="bg-white text-black text-center m-1 p-1 rounded flex  flex-row justify-between items-center">
      <span>${keyword}</span>
      <button class="ml-2 text-red-600 font-bold" data-index="${index}">✖</button>
    </div>`
  )
  .join("");



  const htmlContent = `
    <div class="max-w-5xl  bg-black rounded-2xl shadow-2xl p-1 mt-8 border border-gray-700">
      <h1 class="text-3xl font-extrabold text-center text-white mb-2 flex items-center justify-center gap-2">
        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        Edit Content
      </h1>
      <div class="bg-gray-700 h-1 rounded-full mb-6"></div>
      <!-- Title Section -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-white mb-1 flex items-center gap-2">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          Title
        </h2>
        <div class="text-gray-300 mb-1">Current Title</div>
        <div class="border border-gray-600 rounded-lg p-3 bg-gray-900 text-white font-semibold mb-2">${title?.title}</div>
        <div class="flex gap-2 items-center">
          <input type="text" id="title-input1" class="flex-1 border-2 border-gray-700 rounded-lg h-10 p-2 bg-black text-white focus:ring-2 focus:ring-white transition" placeholder="Enter your title here">
          <button type="button" id="title-update-btn1" class="h-10 bg-white text-black px-5 rounded-lg shadow hover:bg-gray-200 transition">Update</button>
        </div>
      </div>



      <!-- Main Window Section -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-white mb-1 flex items-center gap-2">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"/></svg>
          Main Window
        </h2>
        <div class="text-gray-300 mb-1">Main Window Heading</div>
        <input type="text" id="main-window-heading" class="flex-1 border-2 border-gray-700 rounded-lg h-10 p-2 mb-2 bg-black text-white focus:ring-2 focus:ring-white transition w-full" placeholder="${data?.promo }">
         <button type="button" id="main-window-heading1" class="h-10 bg-purple-600 text-white px-5 rounded-lg shadow hover:bg-purple-700 transition">Update</button>
        
         <div class="text-gray-300 mb-1">Main Window Text</div>
         <textarea id="main-window-text" class="w-full border-2 border-gray-700 rounded-lg h-34 p-2 mb-2 bg-black text-white focus:ring-2 focus:ring-white transition" rows="3" placeholder="${data?.text}"></textarea>
         <button type="button" id="main-window-text1" class="h-10 bg-purple-600 text-white px-5 rounded-lg shadow hover:bg-purple-700 transition">Update</button>
         <div class="text-gray-300 mb-1">Main Window Keywords</div>
         <div class="flex flex-row gap-2"> ${keywordBlocks1}</div>
        <div class="flex gap-2 items-center m-3">
              <input type="text" id="title-input" class="flex-1 border-2 border-gray-700 rounded-lg h-10 p-2 bg-black text-white focus:ring-2 focus:ring-white transition" placeholder="Enter your keywords here">
              <button type="button" id="title-update-btn" class="h-10 bg-white text-black px-5 rounded-lg shadow hover:bg-gray-200 transition">Update</button>
            </div>
      </div>
      <!-- End Main Window Section -->
      <div class="mb-8">
        <h2 class="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2"><svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"/></svg>Meta Description</h2>
        <div class="text-gray-500 mb-1">Current Description</div>
        <div class="border border-green-200 rounded-lg p-3 bg-green-50 text-green-900 font-medium mb-2 max-h-32 overflow-auto">${title?.description}</div>
        <div class="flex gap-2 items-center">
          <input type="text" id="desc-input" class="text-white flex-1 border-2 border-green-300 rounded-lg h-10 p-2 focus:ring-2 focus:ring-green-400 transition" placeholder="Paste description">
          <button type="button" id="desc-update-btn" class="h-10 bg-green-600 text-white px-5 rounded-lg shadow hover:bg-green-700 transition">Update</button>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2"><svg class="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 01-8 0"/></svg>Meta Keywords</h2>
        <div class="text-gray-500 mb-1">Current Keywords</div>
        <div class="flex flex-row gap-2"> ${keywordBlocks}</div>
        <div class="flex gap-2 items-center">
          <input type="text" id="keywords-input" class="flex-1 border-2 border-purple-300 rounded-lg h-10 p-2 focus:ring-2 focus:ring-purple-400 transition text-white" placeholder="Paste keywords (comma separated)">
          <button type="button" id="keywords-update-btn" class="h-10 bg-purple-600 text-white px-5 rounded-lg shadow hover:bg-purple-700 transition">Update</button>
        </div>
      </div>
    </div>
  `;
if (second){
  second.innerHTML = htmlContent;

  // --- Meta Keywords (title.metakeywords) delete logic ---
  document.querySelectorAll('.flex.flex-row.gap-2 > .bg-white .text-red-600[data-index]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const index = Number((e.currentTarget as HTMLElement).getAttribute('data-index'));
      if (title && typeof index === 'number' && Array.isArray(title.metakeywords)) {
        const newKeywords = [...title.metakeywords];
        newKeywords.splice(index, 1);
        const { error } = await supabase
          .from('maindatakeywords')
          .update({ metakeywords: newKeywords })
          .eq('id', title.id);
          alert("keyword deleted")
        if (error) {
          alert('Failed to delete keyword');
        } else {
          renderSelectedData();
        }
      }
    });
  });

  // --- Main Window Keywords (data.keywords) delete logic ---
  document.querySelectorAll('.flex.flex-row.justify-between.items-center .text-red-600[data-index]').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const index = Number((e.currentTarget as HTMLElement).getAttribute('data-index'));
      if (data && typeof index === 'number' && Array.isArray(data.keywords)) {
        const newKeywords = [...data.keywords];
        newKeywords.splice(index, 1);
        let table = '';
        let idField = '';
        let idValue: number | undefined = undefined;
        // Type guard for sid
        if ('id' in data) {
          table = 'maindata';
          idField = 'id';
          idValue = data.id;
        } else if (Object.prototype.hasOwnProperty.call(data, 'sid')) {
          table = 'maindata2';
          idField = 'id';
          idValue = (data as { sid: number }).sid;
        }
        if (table && idValue !== undefined) {
          const { error } = await supabase
            .from(table)
            .update({ keywords: newKeywords })
            .eq(idField, idValue);
            alert("keyword deleted")
          if (error) {
            alert('Failed to delete keyword');
          } else {
            renderSelectedData();
          }
        }
      }
    });
  });
}

  // 🟢 Title Update
  document.getElementById("title-update-btn1")?.addEventListener("click", async () => {
    const newTitle = (document.getElementById("title-input1") as HTMLInputElement).value.trim();
    if (newTitle !== null && newTitle.trim() !== "") {
      const index = title?.id;
      if (index !== -1) {
        const { error } = await supabase
        .from('maindatakeywords')
        .update({ title: newTitle })
        .eq('id', index);

        if (error) {
          console.error("Update failed:", error.message);
          alert("Update failed");
        }
        
    } else {
      alert("Title is empty!",);
    }
  }
  });
// end poin tof a function



  // 🟢 Title Update
  document.getElementById("main-window-heading1")?.addEventListener("click", async () => {
    const newTitle = (document.getElementById("main-window-heading") as HTMLInputElement).value.trim();
  
    if (newTitle !== "") {
      const index = title?.id;
  
      if (index !== -1 && index !== undefined) {
        let error = null;
  
        if (index < 11) {
          // ✅ Update in maindata
          const response = await supabase
            .from('maindata')
            .update({ promo: newTitle })
            .eq('id', index);
  
          error = response.error;
        } else {
          // ✅ Update in maindata2
          const response = await supabase
            .from('maindata2')
            .update({ promo: newTitle })
            .eq('id', index);
  
          error = response.error;
        }
  
        if (error) {
          console.error("Update failed:", error.message);
          alert("Update failed: " + error.message);
        } else {
          alert("Title updated!");
          renderSelectedData(); // refresh UI with new data
        }
      } else {
        alert("Invalid selected ID");
      }
    } else {
      alert("Title is empty!");
    }
  });
  
// end poin tof a function

  // 🟢 Title Update
  document.getElementById("main-window-text1")?.addEventListener("click", async () => {
    const newTitle = (document.getElementById("main-window-text") as HTMLInputElement).value.trim();
  
    if (newTitle !== "") {
      const index = title?.id;
  
      if (index !== -1 && index !== undefined) {
        let error = null;
  
        if (index < 11) {
          // ✅ Update in maindata
          const response = await supabase
            .from('maindata')
            .update({ text: newTitle })
            .eq('id', index);
  
          error = response.error;
        } else {
          // ✅ Update in maindata2
          const response = await supabase
            .from('maindata2')
            .update({ text: newTitle })
            .eq('id', index);
  
          error = response.error;
        }
  
        if (error) {
          console.error("Update failed:", error.message);
          alert("Update failed: " + error.message);
        } else {
          alert("Title updated!");
          renderSelectedData(); // refresh UI with new data
        }
      } else {
        alert("Invalid selected ID");
      }
    } else {
      alert("Title is empty!");
    }
  });
  
// end poin tof a function




  // 🟢 Description Update
  document.getElementById("desc-update-btn")?.addEventListener("click", async () => {
    const newDesc = (document.getElementById("desc-input") as HTMLInputElement).value.trim();
  
    if (newDesc !== "") {
      if (selectedId !== null) {
        const { error } = await supabase
          .from('maindatakeywords')
          .update({ description: newDesc })
          .eq('id', selectedId); // ✅ Use ID directly
  
        if (error) {
          console.error("Update failed:", error.message);
          alert("Failed to update description.");
        } else {
          alert("✅ Description updated!");
          renderSelectedData(); // optional: refresh UI
        }
      } else {
        alert("No item selected!");
      }
    } else {
      alert("Description is empty!");
    }
  });
  

  // 🟢 Keyword Add
 
  // 🟢 Keyword Delete Logic


  document.getElementById("keywords-update-btn")?.addEventListener("click", async () => {
    const enew = (document.getElementById("keywords-input") as HTMLInputElement).value.trim();
  
    if (enew !== "") {
      const index = title?.id;
  
      if (index !== -1 && index !== undefined) {
        // Step 1: Fetch current array
        const { data, error: fetchError } = await supabase
          .from('maindatakeywords')
          .select('metakeywords')
          .eq('id', index)
          .single();
  
        if (fetchError) {
          console.error("Fetch failed:", fetchError.message);
          alert("Failed to fetch current keywords.");
          return;
        }
  
        const currentKeywords = data?.metakeywords || [];
  
        // Step 2: Append new keyword
        const updatedKeywords = [...currentKeywords, enew];
  
        // Step 3: Update Supabase with new array
        const { error: updateError } = await supabase
          .from('maindatakeywords')
          .update({ metakeywords: updatedKeywords })
          .eq('id', index);
  
        if (updateError) {
          console.error("Update failed:", updateError.message);
          alert("Failed to update keywords.");
        } else {
          alert("✅ Keyword appended successfully!");
          renderSelectedData(); // Optional: refresh UI with new data
        }
      } else {
        alert("Invalid selected ID.");
      }
    } else {
      alert("Keyword is empty!");
    }
  });



  document.getElementById("title-update-btn")?.addEventListener("click", async () => {
    const enew = (document.getElementById("title-input") as HTMLInputElement).value.trim();
  
    if (enew !== "") {
      const index = title?.id;
  
      if (index !== -1 && index !== undefined) {
        let currentKeywords = [];
        let fetchError = null;
        let tableToUse = "";
  
        // Step 1: Fetch current keywords
        if (index < 11) {
          tableToUse = "maindata";
          const { data, error } = await supabase
            .from('maindata')
            .select('keywords')
            .eq('id', index)
            .single();
          currentKeywords = data?.keywords || [];
          fetchError = error;
        } else {
          tableToUse = "maindata2";
          const { data, error } = await supabase
            .from('maindata2')
            .select('keywords')
            .eq('id', index)
            .single();
          currentKeywords = data?.keywords || [];
          fetchError = error;
        }
  
        if (fetchError) {
          console.error("Fetch failed:", fetchError.message);
          alert("Failed to fetch current keywords.");
          return;
        }
  
        // Step 2: Append new keyword
        const updatedKeywords = [...currentKeywords, enew];
  
        // Step 3: Update the correct table
        const { error: updateError } = await supabase
          .from(tableToUse)
          .update({ keywords: updatedKeywords })
          .eq('id', index);
  
        if (updateError) {
          console.error("Update failed:", updateError.message);
          alert("Failed to update keywords.");
        } else {
          alert("✅ Keyword appended successfully!");
          renderSelectedData(); // Optional: refresh UI with new data
        }
      } else {
        alert("Invalid selected ID.");
      }
    } else {
      alert("Keyword is empty!");
    }
  });
  
  










  
}

});

