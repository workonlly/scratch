// Header.ts
export function renderHeader(): string {
  return `

    <div class="relative flex felx-row justify-between items-center h-20 ">
      <img src="/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" alt="Logo" class="h-[200px] ">
         
      
      <div class="hidden md:flex flex-row md:justify-between ">
      <a href="/" class="text-center font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Home</a>
        <div class="dropdown-container">
    <a href="/services.html" class="text-center font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Services</a>
    <div class="dropdown-menu">
      
      <!-- Digital Marketing -->
      <div class="dropdown-container">
        <a href="/show.html?id=1" class="text-center font-medium py-2 px-4  hover:text-white  hover:bg-black">Digital Marketing</a>
        <div class="dropdown-menu">
          <a href="/show.html?id=11">Social Media Marketing</a>
          <a href="/show.html?id=12">Email Marketing</a>
          <a href="/show.html?id=13">Link Building</a>
          <a href="/show.html?id=14">PPC (Pay Per Click)</a>
        </div>
      </div>

      <!-- Digital Experience Testing -->
      <div class="dropdown-container">
        <a href="/show.html?id=2" class="text-center font-medium py-2 px-4  hover:text-white  hover:bg-black">Digital Experience Testing</a>
        <div class="dropdown-menu">
          <a href="/show.html?id=15">Cross Browser Testing</a>
          <a href="/show.html?id=16">End to End Functional Testing</a>
          <a href="/show.html?id=17">Non Functional Testing</a>
        </div>
      </div>

      <!-- Data Research -->
      <div class="dropdown-container">
        <a href="/show.html?id=3" class="text-center font-medium py-2 px-4  hover:text-white  hover:bg-black">Data Research</a>
        <div class="dropdown-menu">
          <a href="/show.html?id=18">B2B Lead Generation</a>
          <a href="/show.html?id=19">Market Research</a>
          <a href="/show.html?id=20">Data Entry & Cleaning</a>
        </div>
      </div>

      <!-- Integration Engineering -->
      <div class="dropdown-container">
        <a href="/show.html?id=4" class="text-center font-medium py-2 px-4  hover:text-white  hover:bg-black">Integration Engineering</a>
        <div class="dropdown-menu">
          <a href="/show.html?id=21">Marketing Automation</a>
          <a href="/show.html?id=22">Sales Automation</a>
          <a href="/show.html?id=23">CRM Automation</a>
        </div>
      </div>

      <!-- E-Commerce Consultancy -->
      <div class="dropdown-container">
        <a href="/show.html?id=5" class="text-center font-medium py-2 px-4  hover:text-white  hover:bg-black">E-Commerce Consultancy</a>
        <div class="dropdown-menu">
          <a href="/show.html?id=24">E-Commerce Store Setup</a>
          <a href="/show.html?id=25">Product Listing Catalogue Management</a>
          <a href="/show.html?id=26">E-Commerce Marketing</a>
          <a href="/show.html?id=27">Order Process Tracking</a>
          <a href="/show.html?id=28">Customer Ticket Management</a>
        </div>
      </div>

      <a href="/show.html?id=6" class="text-center font-medium py-2 px-4  hover:text-white  hover:bg-black">Customer Service</a>
    </div>
  </div>
      
      <a href="/case studies/case.html" class="text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Case Studies</a>
      <a href="/aboutus/about.html" class="text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">About Us</a>
      <a href="/blog/blog.html"  class="text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Blog</a>
      <a href="/contactus/coni.html" class="text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Contact Us</a>
    </div>

      <div class=" translate-y-[1px] right-5  g-hov w-[50%] sm:w-[30%] md:w-[16%] h-[60%] z-30 g-hov">
        <div class="button-1"></div>
        <div class="button-2"></div>
        <div class="button-3 flex justify-center items-center text-sm sm:text-base font-medium text-white">BOOK A CONSULTATION</div>
      </div>
    </div>
   

  `;
}
