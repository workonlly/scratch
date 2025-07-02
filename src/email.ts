export function email(): string {
  return `
    <!-- CTA / Contact Form -->
    <section class="bg-blue-50 py-12 px-6 mt-3">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold">Send Us A Message</h2>
          <p class="text-gray-600 text-lg">Quick Contact</p>
        </div>

        <div class="flex flex-col md:flex-row gap-6">
          <!-- Left Inputs -->
          <div class="flex-1 space-y-4">
            <input name="name" type="text" placeholder="Your Name" class="w-full border px-4 py-2 rounded" />
            <input name="email" type="text" placeholder="Email Address" class="w-full border px-4 py-2 rounded" />
            <input name="phone" type="text" placeholder="Phone Number" class="w-full border px-4 py-2 rounded" />
            <input name="subject" type="text" placeholder="Subject" class="w-full border px-4 py-2 rounded" />
          </div>

          <!-- Right Description -->
          <div class="flex-1 space-y-4">
            <textarea name="description" placeholder="Description" rows="8" class="w-full border px-4 py-2 rounded resize-none"></textarea>
            <input id="send-button" type="submit" value="Send Message" class="bg-white text-black px-6 py-2 rounded cursor-pointer hover:bg-black hover:text-white" />
          </div>
        </div>
      </div>
    </section>
  `;
}
