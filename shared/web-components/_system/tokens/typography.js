import { css } from "lit";

export const fontFamily = css`
  :host {
    --yz-ff-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    --yz-ff-serif: Georgia, Cambria, "Times New Roman", Times, serif;
    --yz-ff-monospace: Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

export const fontSize = css`
  :host {
    --yz-fs-xs: 0.75rem;
    --yz-fs-sm: 0.875rem;
    --yz-fs-md: 1rem;
    --yz-fs-lg: 1.125rem;
    --yz-fs-xl: 1.25rem;
    --yz-fs-2xl: 1.5rem;
    --yz-fs-3xl: 1.875rem;
    --yz-fs-4xl: 2.25rem;
    --yz-fs-5xl: 3rem;

    --yz-fs-caption: var(--yz-fs-xs);
    --yz-fs-small: var(--yz-fs-sm);
    --yz-fs-body: var(--yz-fs-md);
    --yz-fs-heading: var(--yz-fs-xl);
    --yz-fs-display: var(--yz-fs-3xl);
  }
`;

export const fontWeight = css`
  :host {
    --yz-fw-thin: 100;
    --yz-fw-light: 300;
    --yz-fw-regular: 400;
    --yz-fw-medium: 500;
    --yz-fw-bold: 700;
    --yz-fw-black: 900;
  }
`;
