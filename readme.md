# LaCleo Digital - Multi-Page Vite Site

A modern, multi-page website built with Vite, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
├── src/                    # Source files
│   ├── *-entry.ts         # Page entry scripts
│   ├── maindata.ts        # Main services data
│   ├── maindata2.ts       # Sub-services data
│   ├── mainimage.ts       # Image data
│   ├── header.ts          # Header component
│   ├── footer.ts          # Footer component
│   └── ...
├── dista/                  # HTML templates
│   ├── services/
│   ├── show/
│   ├── aboutus/
│   └── ...
├── dist/                   # Built files (production)
├── public/                 # Static assets
└── css/                    # Stylesheets
```

## 🛠️ Build Process

1. **Vite** processes TypeScript and bundles assets
2. **HTML files** are built with correct script references
3. **Assets** are optimized and hashed for caching
4. **Static files** are copied to `dist/`

## 🌐 Deployment

### Vercel (Recommended)
- Connect your repository to Vercel
- Vercel will automatically build and deploy
- Configuration: `vercel.json`

### Manual Deployment
- Run `npm run build`
- Upload the `dist/` folder to your hosting provider

## 📄 Pages

- **Home**: `/` (index.html)
- **Services**: `/services` (full mapping grid)
- **Show**: `/show?id=X` (service details)
- **About**: `/aboutus`
- **Blog**: `/blog`
- **Case Studies**: `/case`
- **Contact**: `/contactus`
- **Login**: `/login`
- **Admin**: `/admin`

## 🔧 Key Features

- ✅ **Multi-page routing** with Vite
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Data mapping** with fallback support
- ✅ **Responsive design**
- ✅ **Production optimized**

## 🚀 Ready for Production

Your site is now optimized and ready for deployment!