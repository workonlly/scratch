export function Footer(): string{
    return`
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
    `
}