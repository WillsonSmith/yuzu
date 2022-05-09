import { LitElement, html, css, render } from 'lit';
// need to set base path to the extension's assets
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

const basePath = document.documentElement.getAttribute('data-base-path');
setBasePath(basePath);

document.body.innerHTML = '';

render(
  html` <sl-button>My button<sl-icon name="heart"></sl-icon></sl-button> `,
  document.body
);
