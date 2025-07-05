const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy dista folder to dist/dista
// if (fs.existsSync('dista')) {
//   copyDir('dista', 'dist/dista');
//   console.log('✅ Copied dista folder to dist/dista');
// }

// Copy public folder to dist
if (fs.existsSync('public')) {
  copyDir('public', 'dist');
  console.log('✅ Copied public folder to dist');
}

// Copy CSS files to dist
if (fs.existsSync('css')) {
  copyDir('css', 'dist/css');
  console.log('✅ Copied css folder to dist/css');
}

// Copy global.css to dist
if (fs.existsSync('global.css')) {
  fs.copyFileSync('global.css', 'dist/global.css');
  console.log('✅ Copied global.css to dist');
}

// Copy _redirects to dist
if (fs.existsSync('_redirects')) {
  fs.copyFileSync('_redirects', 'dist/_redirects');
  console.log('✅ Copied _redirects to dist');
}

console.log('🚀 Deployment preparation complete!'); 