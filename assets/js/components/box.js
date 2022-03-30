import { html, css, LitElement } from 'lit';

export class Box extends LitElement {
  static get styles() {
    return css`
      .Box {
        background: #f0f0f0;
        padding: 1rem;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html` <div class="Box">A box</div>`;
  }
}

customElements.define('box-component', Box);
