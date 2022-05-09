import { html, render } from 'lit';
/** Shoelace setup */
// import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
// setBasePath(chrome.runtime.getURL('web/assets/vendor/shoelace/dist'));

// console.log(chrome.runtime.getURL('web/assets/vendor/shoelace/dist'));
// console.log(chrome.runtime.getURL('web/assets/js/lit-setup.js'));

document.documentElement.setAttribute(
  'data-base-path',
  chrome.runtime.getURL('web/assets/vendor/shoelace/dist')
);

const s = document.createElement('script');
s.type = 'module';
s.src = chrome.runtime.getURL('web/assets/js/lit-setup.js');
s.setAttribute('data-ch-extension', 'true');

render(s, document.body);
