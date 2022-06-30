import { LitElement } from "lit";
import { html } from "lit/static-html.js";

/*
 * A component that listens for load events and caches the resources it loads.
 * Utilize service workers to cache the resources.
 * Needs to have a way to clear the cache.
 */
class AssetCache extends LitElement {
  staticCacheName = `yz-asset-cache-v1`;
  cache = `images`;
  static properties = {
    staticCacheName: { type: String },
    cache: { type: String },
  };

  constructor() {
    super();
    console.warn(`AssetCache is not ready for use. Plz don't.`);
  }

  firstUpdated() {
    if (this.cache === `images`) this.addImageLoadListeners();
    this.addEventListener(
      `yz-asset-cache-precache-asset`,
      this.handlePreCacheAsset
    );
    if (this.querySelector(`yz-asset-precache-source`)) {
      import(`./yz-asset-precache-source.js`);
    }
  }

  render() {
    return html` <slot></slot> `;
  }

  addImageLoadListeners() {
    for (const image of this.querySelectorAll(`img`)) {
      image.addEventListener(`load`, this.handleAssetLoad);
    }
  }

  handlePreCacheAsset = (event) => {
    console.log(`Pre-caching asset: ${event.detail.src}`);
    this.cacheAsset(event.detail.src);
  };

  handleAssetLoad = (event) => {
    let source = ``;
    if (event.detail) source = event.detail.src;
    if (event.target.src) {
      this.cacheAsset(event.target.src);
    }
  };

  cacheAsset(url) {
    console.log(`Caching asset: ${url}`);
    caches.open(this.staticCacheName).then((cache) => {
      cache.add(url);
    });
  }
}

customElements.define(`yz-asset-cache`, AssetCache);
