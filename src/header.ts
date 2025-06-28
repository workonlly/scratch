// Header.ts
export function renderHeader(): string {
  return `

    <div class="relative flex felx-row justify-between items-center h-20  ">
      <img src="/Yellow_and_Blue_Clean_and_Minimalist_Tech_Company_Logo__1_-removebg-preview.png" alt="Logo" class="h-[200px] ">
         
      
      <div class="hidden md:flex flex-row md:gap-3 ">
      <a href="/" class=" nav-link text-center font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Home</a>

      <div class="block   content-center ">
      <a href="/services" class="nav-link  font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Services</a>
      <div id="import" class="fstblock "></div>
      </div>
      
      <a href="/case/index" class=" nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Case Studies</a>
      <a href="/aboutus/index" class=" nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">About Us</a>
      <a href="/blog/index"  class=" nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Blog</a>
      <a href="/contactus/index" class=" nav-link text-base font-medium py-2 px-4 rounded-md hover:text-white  hover:bg-black">Contact Us</a>
    </div>

      <div class=" translate-y-[1px] right-5  g-hov w-[50%] sm:w-[30%] md:w-[16%] h-[60%] z-30 g-hov">
        <div class="button-1"></div>
        <div class="button-2"></div>
        <div class="button-3 flex justify-center items-center text-sm sm:text-base font-medium text-white">BOOK A CONSULTATION</div>
      </div>
    </div>
   

  `;
}
