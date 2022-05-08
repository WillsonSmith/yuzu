/** Shoelace setup */
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('./assets/vendor/shoelace/dist');

/** Shoelace components used on index */
import '@shoelace-style/shoelace/dist/components/card/card.js';

/** Main page required components components */
import './components/page-header/page-header.js';
import './components/colorize-word/colorize-word.js';

/** Scripts */

chrome.storage.sync.get('color', ({ theme }) => setTheme(theme));

document
  .querySelector('page-header')
  .addEventListener('theme-change', ({ detail: { theme } }) => {
    updateTheme(theme);
  });

async function getTheme() {
  return chrome.storage.get('theme', ({ theme }) => {
    setTheme(theme);
  });
}

function updateTheme(theme) {
  chrome.storage.sync.set({ theme });
  setTheme(theme);
}

function setTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle(
    'sl-theme-dark',
    theme === 'dark' ||
      (theme === 'automatic' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );
}
