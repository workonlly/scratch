import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,   
    port: 5173,     
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html',
        contactus: './dista/contactus/index.html',
        services: './dista/services/index.html',
        aboutus: './dista/aboutus/index.html',
        blog: './dista/blog/index.html',
        case: './dista/case/index.html',
        login: './dista/login/login.html',
        admin: './dista/admin/index.html',
        show: './dista/show/show.html'
      }
    }
  },
  publicDir: 'public',
  base: '/'
})