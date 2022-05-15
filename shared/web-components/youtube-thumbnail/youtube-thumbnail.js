import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/responsive-media/responsive-media.js';

class YoutubeThumbnail extends LitElement {
  static get properties() {
    return {
      src: { type: String },
      url: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        --border-color: var(--sl-color-neutral-200);

        --thumbnail-border-radius: var(--sl-border-radius-x-large);
        --thumbnail-title-font-weight: var(--sl-font-weight-semibold);
        --thumbnail-title-line-height: var(--sl-line-height-denser);

        --name-line-height: var(--sl-line-height-denser);
      }
      a {
        text-decoration: none;
        color: var(--sl-color-neutral-900);
      }

      sl-card {
        --padding: var(--sl-spacing-large) var(--sl-spacing-x-small);
        --border-radius: calc(var(--thumbnail-border-radius) / 2);
      }

      .thumbnail-wrapper {
        display: grid;
        grid-template-areas:
          'thumbnail'
          'title'
          'name'
          'description';
      }

      .thumbnail {
        grid-area: thumbnail;

        overflow: hidden;
        border-radius: var(--thumbnail-border-radius);
        border: 2px solid var(--border-color);
      }

      .thumbnail-title {
        margin-top: var(--sl-spacing-small);

        grid-area: title;
        font-weight: var(--thumbnail-title-font-weight);
        line-height: var(--thumbnail-title-line-height);
      }

      .thumbnail-name {
        margin-top: var(--sl-spacing-medium);

        grid-area: name;
        line-height: var(--name-line-height);
      }

      .thumbnail-name ::slotted(a) {
        text-decoration: none;
        color: inherit;
      }

      .thumbnail-details {
        grid-area: description;
      }
    `;
  }

  constructor() {
    super();
    this.src = '';
    this.url = '';
  }

  // YouTube Thumbnail UI
  render() {
    return html`
      <sl-card>
        <div class="thumbnail-wrapper">
          <div class="thumbnail">
            <a href=${this.url}>
              <sl-responsive-media>
                <img src=${this.src} />
              </sl-responsive-media>
            </a>
          </div>
          <div class="thumbnail-title">
            <slot name="title"></slot>
          </div>
          <div class="thumbnail-name">
            <slot name="name"></slot>
          </div>
          <div class="thumbnail-details">
            <slot name="details"></slot>
          </div>
        </div>
      </sl-card>
    `;
  }
}

customElements.define('youtube-thumbnail', YoutubeThumbnail);
