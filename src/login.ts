export function login():string {
return  `  
 <div class="h-screen w-screen  flex items-center justify-center">
  <div class="bg-black  backdrop-blur-md shadow-xl text-white p-6 rounded-xl w-[40%] h-[60%] space-y-4">
    <div class="flex justify-center">
      <img src="" alt="Logo" class="w-[150px] h-[150px] rounded-full bg-white" />
    </div>

    <div class="flex flex-col">
      <label for="name">Name</label>
      <input type="text"  id="name" placeholder="id here" class="p-1 rounded text-white border-2 border-white" />
    </div>

    <div class="flex flex-col">
      <label for="password">Password</label>
      <input type="text" id="password" name="password" placeholder="password" class="p-1 rounded text-white border-2 border-white" />
    </div>
  </div>
</div>
`  
}