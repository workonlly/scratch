export function loginn():string {
return  `  
 <div class="h-screen w-screen  flex items-center justify-center">
  <div class="bg-black  backdrop-blur-md shadow-xl text-white p-6 rounded-xl w-[40%] h-[80%] space-y-4">
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
      <button onclick="login()" class=" p-2 hover:bg-white w-[40%] hover:text-black">Login</button>
      <p id="error" style="color:red;"></p>
  </div>
</div>
`  
}