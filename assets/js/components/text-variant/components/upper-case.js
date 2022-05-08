class UpperCase extends LitElement {
  static get properties() {
    return {
      text: { type: String, attribute: false },
    };
  }
  static get styles() {
    return css`
      .uppercase {
        text-transform: uppercase;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <span class="uppercase">${this.textContent}</span>
      <sl-visually-hidden>
        <slot></slot>
      </sl-visually-hidden>
    `;
  }
}
customElements.define('upper-case', UpperCase);
