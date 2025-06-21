export function email():string{
    return`
     <!-- CTA / Contact Form -->
  <section class="bg-blue-50 py-12 px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold">Send Us A Message</h2>
        <p class="text-gray-600 text-lg">Quick Contact</p>
      </div>

      <div class="flex flex-col md:flex-row gap-6">
        <!-- Left Inputs -->
        <div class="flex-1 space-y-4">
          <input type="text" placeholder="Your Name" class="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Email Address" class="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Phone Number" class="w-full border px-4 py-2 rounded" />
          <input type="text" placeholder="Subject" class="w-full border px-4 py-2 rounded" />
        </div>

        <!-- Right Description -->
        <div class="flex-1 space-y-4">
          <textarea placeholder="Description" rows="8" class="w-full border px-4 py-2 rounded resize-none"></textarea>
          <input type="submit" value="Send Message" class="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-700" />
        </div>
      </div>
    </div>
  </section>
    `
}