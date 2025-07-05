import { renderHeader } from './header';

// Mount header on every page
const mount = document.getElementById('app');
if (mount) {
  mount.innerHTML = renderHeader();
} 