export function Footer(): string{
    return`
    <footer class="bg-[#f9f9f9] text-[#003366] py-12 mt-16">
  <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-y-10">
    
    <!-- Column 1 -->
    <div class="space-y-2 min-w-[150px]">
      <p>Home</p>
      <p>Services</p>
      <p>Case Studies</p>
      <p>Blog</p>
      <p>Contact Us</p>
    </div>

    <!-- Column 2 -->
    <div class="space-y-2 min-w-[200px]">
      <p>Digital Marketing</p>
      <p>Digital Experience Testing</p>
      <p>Data Research</p>
      <p>Integration Engineering</p>
      <p>E-Commerce Consultancy</p>
      <p>Customer Support</p>
    </div>

    <!-- Column 3 -->
    <div class="space-y-2 min-w-[220px]">
      <p class="text-green-500">Social Media Marketing</p>
      <p>Market Research</p>
      <p>Link Building</p>
      <p class="text-green-500">Social Media Marketing</p>
      <p>B2B Lead Generation</p>
      <p>Cross Browser Testing</p>
    </div>

    <!-- Column 4 -->
    <div class="space-y-2 min-w-[200px] text-right md:text-left">
      <p>Book A Consultation</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
      <p class="text-sm text-gray-500 mt-4">
        Email: <a href="mailto:info@lacleodigital.com" class="underline">info@lacleodigital.com</a><br>
        WhatsApp: <a href="https://wa.me/917428149253" class="underline">+91-7428149253</a>
      </p>
      <div class="flex gap-4 text-xl mt-4 text-gray-700">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-pinterest-p"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
      </div>
    </div>

  </div>

  <div class="mt-12 text-center text-sm text-gray-400">
    &copy; La Cleo Digital Private Limited | All rights reserved.
  </div>
</footer>
    `
}