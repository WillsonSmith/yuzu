import { LitElement } from "lit";
import { html } from "lit/static-html.js";
class AssetPreCacheSource extends LitElement {
  src = null;
  staticCacheName = `yz-asset-cache-v1`;
  static properties = {
    staticCacheName: { type: String },
    src: { type: String },
  };

  firstUpdated() {
    this.dispatchPrecacheEvent();
  }

  updated(changedProperties) {
    if (changedProperties.has(`src`)) {
      this.dispatchPrecacheEvent();
    }
  }

  render() {
    return html`<slot></slot>`;
  }

  dispatchPrecacheEvent() {
    const precacheAssetEvent = new CustomEvent(
      `yz-asset-cache-precache-asset`,
      {
        detail: {
          src: this.src,
        },
        bubbles: true,
      }
    );
    this.dispatchEvent(precacheAssetEvent);
  }
}

customElements.define(`yz-asset-precache-source`, AssetPreCacheSource);
