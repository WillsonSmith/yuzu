import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
const basePath = document.documentElement.getAttribute(`data-base-path`);
setBasePath(basePath);

import { html, render } from 'lit';
import './components/extension-wrapper.js';
const bodyChildren = Array.from(document.body.children);
render(
  html` <extension-wrapper> ${bodyChildren} </extension-wrapper> `,
  document.body
);
