import { html, render } from 'lit';

document.documentElement.setAttribute(
  'data-base-path',
  chrome.runtime.getURL('web/assets/vendor/shoelace/dist')
);

/** Create Injected Script */
const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('web/assets/js/lit-setup.js');
script.setAttribute('data-ch-extension', 'true');
document.body.appendChild(script);

/** Change Shoelace theme on page  */
chrome.runtime.onMessage.addListener(({ theme }, _, sendResponse) => {
  sendResponse({ theme });
  document.documentElement.classList.toggle(
    'sl-theme-dark',
    theme === 'sl-theme-dark'
  );
});
