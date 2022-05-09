/** Shoelace setup */
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('./assets/vendor/shoelace/dist');

/** Shoelace components used on index */
import '@shoelace-style/shoelace/dist/components/card/card.js';

/** Main page required components components */
import './components/page-header/page-header.js';
import './components/colorize-word/colorize-word.js';

/** Initialize */
chrome.storage.sync.get('theme', ({ theme }) => {
  setTheme(theme);
});
const header = document.querySelector('page-header');
header.addEventListener('theme-change', ({ detail: { theme } }) =>
  updateTheme(theme)
);

/** Extension script */
chrome.storage.onChanged.addListener(async ({ theme }) => {
  const tab = await getCurrentTab();
  console.log(theme);
  chrome.tabs.sendMessage(
    tab.id,
    { theme: themeClass(theme.newValue) },
    (response) => {
      console.log(response);
    }
  );
});

/** Themes */
function updateTheme(theme) {
  chrome.storage.sync.set({ theme });
  setTheme(theme);
}

function setTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle('sl-theme-dark', themeClass(theme) === 'sl-theme-dark');
}

function themeClass(theme) {
  switch (theme) {
    case 'dark':
      return 'sl-theme-dark';
    case 'light':
      return '';
    case 'automatic':
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      return mediaQuery.matches ? 'sl-theme-dark' : '';
  }
}

/** Utility */

async function runOnPage(fn) {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: fn,
  });
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}
