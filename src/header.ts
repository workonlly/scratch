// Header.ts
export function renderHeader(): string {
  return `
  <div class="relative flex flex-row justify-between items-center h-20 mx-4 bg-white  ">
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
      <a href="/services?id=112" class="py-2 font-medium hover:bg-black hover:text-white">Services</a>
      <a href="/case/index?id=113" class="py-2 font-medium hover:bg-black hover:text-white">Case Studies</a>
      <a href="/aboutus/index?id=114" class="py-2 font-medium hover:bg-black hover:text-white">About Us</a>
      <a href="/blog/index?id=115" class="py-2 font-medium hover:bg-black hover:text-white">Blog</a>
      <a href="/contactus/index?id=116" class="py-2 font-medium hover:bg-black hover:text-white">Contact Us</a>
      <div class="mt-4 mx-4 bg-black text-white py-2 rounded font-medium">BOOK A CONSULTATION</div>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex flex-row items-center md:gap-3 ">
      <a href="/?id=111" class="nav-link text-center font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Home</a>
      <div class="relative group">
        <a href="/services?id=112" class="nav-link font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black flex items-center">
          Services
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </a>
        <div id="import" class="absolute hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-56 z-50 top-full left-0">
          <!-- Dropdown items will be injected here -->
        </div>
      </div>
      <a href="/case/index?id=113" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Case Studies</a>
      <a href="/aboutus/index?id=114" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">About Us</a>
      <a href="/blog/index?id=115" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Blog</a>
      <a href="/contactus/index?id=115" class="nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white hover:bg-black">Contact Us</a>
    </div>

    <!-- CTA Button (Desktop only) -->
    <div class="translate-y-[1px] right-5 g-hov w-[50%] sm:w-[30%] md:w-[16%] h-[60%] z-30 g-hov hidden md:block">
     <a href="contactus/index.html">
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
  </script>
  `;
}

