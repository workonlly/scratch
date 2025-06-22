import * as XLSX from 'xlsx';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

async function fetchAndRenderSlides() {
  try {
    const res = await fetch('/Client.csv');
    const text = await res.text();

    // Parse CSV to JSON
    const workbook = XLSX.read(text, { type: 'string' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet, { defval: '' });

    

    const wrapper = document.getElementById('swiper-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = '';

    data.forEach((row) => {
      const name = row['Name'] || 'Anonymous';
      const feedback = row['Region'] || 'No feedback';
      const rating = row['Review'] || 'N/A';


      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div style="padding: 20px;  border-radius: 12px;  ">
        <div style="border-radius:10px; height:80px;width:80px; ">   <img src="/profi.png" alt="yello"></div>
          <h3>${name}</h3>
          <p><strong>Region:</strong> ${feedback}</p>
          <p><strong>Review:</strong> ${rating}</p>
        </div>
      `;
      wrapper.appendChild(slide);
    });

    new Swiper('.mySwiper', {
      loop: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 2000, // A longer duration works better with a linear transition
      slidesPerView: 3,
      spaceBetween: 20,
      allowTouchMove: false,
    });
    

  } catch (err) {
    console.error('❌ Error loading CSV:', err);
  }
}

fetchAndRenderSlides();
