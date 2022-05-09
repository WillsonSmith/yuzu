import { html, render } from 'lit';

document.documentElement.setAttribute(
  'data-base-path',
  chrome.runtime.getURL('web/assets/vendor/shoelace/dist')
);

const s = document.createElement('script');
s.type = 'module';
s.src = chrome.runtime.getURL('web/assets/js/lit-setup.js');
s.setAttribute('data-ch-extension', 'true');

// when chrome message with theme
chrome.runtime.onMessage.addListener(({ theme }, sender, sendResponse) => {
  sendResponse({ theme });
  document.documentElement.classList.toggle(
    'sl-theme-dark',
    theme === 'sl-theme-dark'
  );
});
