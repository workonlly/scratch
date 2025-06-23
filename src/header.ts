// Header.ts
export function renderHeader(): string {
  return `
<div class="sticky top-0 w-full z-50 bg-transparent sm:top-0 md:top-12" x-data="{ open: false }">  
  <!-- Nav Container -->
  <div class="flex justify-between items-center  h-16 px-4 bg-white/30 backdrop-blur-md rounded-lg shadow-lg w-full md:w-[45%] md:left-[26%] absolute z-50">
    <!-- Desktop Menu -->
    <div class="hidden md:flex flex-row md:justify-between ">
      <a href="/" class="text-center font-medium py-2 px-4 rounded-md hover:bg-white/70">Home</a>
      <a href="/services/services.html" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70">Services</a>
      <a href="/case studies/case.html" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70">Case Studies</a>
      <a href="/aboutus/about.html" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70">About Us</a>
      <a href="/blog/blog.html" target="_blank" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70">Blog</a>
      <a href="/contactus/coni.html" class="text-base font-medium py-2 px-4 rounded-md hover:bg-white/70">Contact Us</a>
    </div>

    <!-- Hamburger Icon (mobile only) -->
    <div class="md:hidden">
      <button @click="open = !open" class="text-black focus:outline-none">
        <svg x-show="!open" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg x-show="open" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown Menu -->
  <div class="md:hidden bg-white/20 backdrop-blur-md rounded-b-lg shadow-lg mt-1 px-4 py-3 space-y-2" x-show="open" x-transition>
    <a href="/" class="block text-base font-medium hover:text-blue-600">Home</a>
    <a href="/services/services.html" class="block text-base font-medium hover:text-blue-600">Services</a>
    <a href="/case studies/case.html" class="block text-base font-medium hover:text-blue-600">Case Studies</a>
    <a href="/aboutus/about.html" class="block text-base font-medium hover:text-blue-600">About Us</a>
    <a href="/blog/blog.html" target="_blank" class="block text-base font-medium hover:text-blue-600">Blog</a>
    <a href="/contactus/coni.html" class="block text-base font-medium hover:text-blue-600">Contact Us</a>
  </div>
</div>

  `;
}
