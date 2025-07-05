function e(){return`
  <div class="relative flex flex-row justify-between items-center h-20 mx-4 bg-white md:rounded-md  ">
    <!-- Logo -->
    <img src="/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" alt="Logo" class="h-14 md:h-[200px]">

    <!-- Burger Icon (Mobile only) -->
    <button id="burger-btn" class="md:hidden flex flex-col gap-1.5 z-50">
      <span class="w-6 h-0.5 bg-black"></span>
      <span class="w-6 h-0.5 bg-black"></span>
      <span class="w-6 h-0.5 bg-black"></span>
    </button>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden hidden absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col text-center py-4">
      <a href="/?id=111" class="py-2 font-medium hover:bg-black hover:text-white">Home</a>
      <a href="/dista/services/index.html?id=112" class="py-2 font-medium hover:bg-black hover:text-white">Services</a>
      <a href="/dista/case/index.html?id=113" class="py-2 font-medium hover:bg-black hover:text-white">Case Studies</a>
      <a href="/dista/aboutus/index.html?id=114" class="py-2 font-medium hover:bg-black hover:text-white">About Us</a>
      <a href="/dista/blog/index.html?id=115" class="py-2 font-medium hover:bg-black hover:text-white">Blog</a>
      <a href="/dista/contactus/index.html?id=116" class="py-2 font-medium hover:bg-black hover:text-white">Contact Us</a>
      <div class="mt-4 mx-4 bg-black text-white py-2 rounded font-medium">BOOK A CONSULTATION</div>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex flex-row items-center md:gap-3 ">
      <a href="/?id=111" class="nav-link text-center font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Home</a>
      <div class="relative group">
        <a href="/dista/services/index.html?id=112" class="nav-link font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black flex items-center">
          Services
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
        <div id="import" class="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56 z-50 top-full left-0">
          <!-- Dropdown items will be injected here -->
        </div>
      </div>
      <a href="/dista/case/index.html?id=113" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Case Studies</a>
      <a href="/dista/aboutus/index.html?id=114" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">About Us</a>
      <a href="/dista/blog/index.html?id=115" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Blog</a>
      <a href="/dista/contactus/index.html?id=116" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Contact Us</a>
    </div>

    <!-- CTA Button (Desktop only) -->
    <div class="translate-y-[1px] right-5 g-hov w-[50%] sm:w-[30%] md:w-[16%] h-[60%] z-30 g-hov hidden md:block">
     <a href="/dista/contactus/index.html">
      <div class="button-1"></div>
      <div class="button-2"></div>
     <div class="button-3 flex justify-center items-center text-sm sm:text-base font-medium text-white">BOOK A CONSULTATION</div>
    </div></a>
  </div>

  <script>
    (() => {
      const burgerBtn = document.getElementById('burger-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (burgerBtn && mobileMenu) {
        burgerBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    })();
  <\/script>
  `}function t(){return`
     <footer class="bg-black text-white py-12 w-screen absolute  ">
  <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-y-10  " >
    
    <!-- Column 1 -->
    <div class="space-y-2 min-w-[150px] flex flex-col">
      <a href="/"  class=" nav-lin text-base  font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black ">Home</a>
      <a href="/dista/services/index.html" class=" nav-lin text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Services</a>
      <a href="/dista/case/index.html" class=" nav-lin text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Case Studies</a>
      <a href="/dista/aboutus/index.html" class=" nav-lin text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">About us</a>
      <a href="/dista/blog/index.html" class=" nav-lin text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Blog</a>
      <a href="/dista/contactus/index.html" class=" nav-lin text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Contact Us</a>
    </div>

    <div id="import2"></div>

    <!-- Column 4 -->
    <div class=" nav-lin  space-y-2 min-w-[200px] text-right md:text-left flex flex-col text-left">
      <a href="/dista/contactus/index.html" class=" nav-lin  text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Book A Consultation</a>
      <a href="/" class=" nav-lin  text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Privacy Policy</a>
      <a href="/" class=" nav-lin  text-base font-medium py-2 px-4 rounded-md hover:bg-white  hover:text-black">Terms of Service</a>
      <a href="index" class="   text-sm text-white mt-4" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70">
        Email: <a href="mailto:info@lacleodigital.com" class="underline">info@lacleodigital.com</a><br>
        WhatsApp: <a href="https://wa.me/917428149253" class="underline">+91-7428149253</a>
      </a>
      <div class="flex gap-4 text-xl mt-4 text-gray-700">
        <a href="#" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70"><i class="fab fa-instagram"></i></a>
        <a href="#" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70"><i class="fab fa-pinterest-p"></i></a>
        <a href="#" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70"><i class="fab fa-linkedin-in"></i></a>
        <a href="#" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70"><i class="fab fa-whatsapp"></i></a>
        <a href="#" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70"><i class="fas fa-envelope"></i></a>
      </div>
    </div>

  </div>

  <div class="mt-12 text-center text-sm text-white">
    &copy; La Cleo Digital Private Limited | All rights reserved.
  </div>
</footer>
    `}function a(){return`
    <section class="bg-[#4361ee] py-10 px-6">
                  <h3 class="text-center text-xl text-white font-semibold mb-5">Trusted by some of the biggest brands</h3>
                  <div class="flex justify-center items-center gap-4 flex-wrap wave-text">
                    <span class=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="../../img/binmile-removebg-preview.png" alt=""></span>
                    <span class=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="../../img/edureka-removebg-preview.png" alt=""></span>
                    <span class=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="../../img/isntamart-removebg-preview.png" alt=""></span>
                    <span class=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="../../img/lambdatest-removebg-preview.png" alt=""></span>
                    <span class=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="../../img/link-removebg-preview.png" alt=""></span>
                    <span class=" w-28  bg-[#4361ee]  flex justify-center items-center"> <img src="../../img/livespace-removebg-preview.png" alt=""></span>
                  </div>
                </section>
    
    `}function i(){return`
   <div class="text-center  bg-black py-16 px-6  ">
      <h1 class="text-4xl font-bold text-blue-600 mb-3">Our Profiles</h1>
      <p class="text-lg text-gray-600 mb-10">
        We are highly related by our customers
      </p>
      <div class="flex flex-wrap justify-center gap-10">
        <a href="https://www.upwork.com/ag/lacleodgital/"><img src="../../public/imo/Upwork-2-removebg-preview.png" alt="Upwork" class="h-14 max-w-[100px] object-contain hover:scale-115" /></a>
       <a href="https://www.freelancer.in/u/lacleodigital"> <img src="../../public/imo/freela-removebg-preview.png" alt="Freelancer" class="h-14 max-w-[100px] object-contain  hover:scale-115" /></a>
       <a href="https://clutch.co/profile/lacleodigital"><img src="../../public/imo/2223-removebg-preview.png" alt="Clutch" class="h-14 max-w-[100px] object-contain hover:scale-115" /></a> 
       <a href="https://www.guru.com/freelancers/la-cleo-digital"><img src="../../public/imo/gur-removebg-preview.png" alt="Guru" class="h-14 max-w-[100px] object-contain hover:scale-115" /></a> 
       <a href="https://www.fiverr.com/lacleodigital"><img src="../../public/imo/fiverrrr-removebg-preview.png" alt="Fiverr" class="h-14 max-w-[100px] object-contain hover:scale-115" /></a> 
      </div>
    </div>
`}export{t as F,a as W,i as l,e as r};
