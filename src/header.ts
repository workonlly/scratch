// Header.ts
export function renderHeader(): string {
  return `
    <header class="flex flex-row justify-between items-center m-1 p-[1%] box-shad rounded-xl backdrop-blur-md bg-white/10  shadow-lg">
      <div class="rounded-md shadow-md ml-[1%]">
        <img src="/logo.png" alt="img" class="h-[20vh] sticky top-0">
      </div>
      <div class="flex flex-col w-[50vw] gap-2 mr-[1%]">
        <button class="ml-auto rounded-md w-[40%] h-[40px] bg-[#3a86ff] font-bold text-white box-shad poppins-bold hover:bg-[#0466c8]">
          BOOK A CONSULTAION
        </button>
        <div class="flex flex-row justify-between">
          <a href="/" class="font-bold rounded-underline poppins-extrabold-italic">Home</a>
          <a href="/digital/digital.html" class=" nav-link font-bold rounded-underline poppins-extrabold-italic">Services</a>
          <a href="/case/case.html" class=" nav-link font-bold rounded-underline poppins-extrabold-italic">Case Studies</a>
          <a href="/aboutus/about.html" class=" nav-link font-bold rounded-underline poppins-extrabold-italic">About us</a>
          <a href="/blog/blog.html" class=" nav-link font-bold rounded-underline poppins-extrabold-italic">Blog</a>
          <a href="/contactus/coni.html" class=" nav-link font-bold rounded-underline poppins-extrabold-italic">Contact us</a>
        </div>
      </div>
    </header>
  `;
}
