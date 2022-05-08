# Project Template

Work in progress, more to come.

## Description

An evolving template for building front-ene web applications. This project template is built on web components, it includes [`Shoelace`](https://shoelace.style/) and [`LitElement`](https://lit.dev/) as well as a number of custom web components that are built on an as-needed basis.

The build system contains a series of `node` scripts that use [`esbuild`](https://esbuild.github.io/) for transpiling the source code. There are very few guard rails, and, as a result, builds are highly customizable.

The project is oriented towards [netlify](https://www.netlify.com), but there are no hard lock-ins.

---

### Details

Details about the systems involved in this project.

#### Component System

- [`Shoelace`](https://shoelace.style/)
- [`Lit`](https://lit.dev/)

#### Build System

- [`esbuild`](https://esbuild.github.io/)

## Usage

```sh
npm install
```


```sh
# Start development server and continuously build assets
npm run dev
  
# Build assets for production
npm run application:build
```


```html
<!-- index.html -->
<body>
  <page-header>
    <a href="/" slot="title">
      <colorize-word>Template</colorize-word>
    </a>
  </page-header>

  <main>
    <sl-card>
      <h2 slot="header">Project template</h2>
      A template for front-end web applications.
    </sl-card>
  </main>

  <script type="module" src="./assets/js/(._.).js"></script>
</body>
```

```js
// assets/js/(._.).js

/** Shoelace setup */
import { setBasePath } from './components/index.js';
setBasePath('/assets/vendor/shoelace/dist');

/** Shoelace components used on index */
import '@shoelace-style/shoelace/dist/components/card/card.js';

/** Main page required components components */
import './components/page-header/page-header.js';
import './components/colorize-word/colorize-word.js';

```

<img width="1040" alt="image" src="https://user-images.githubusercontent.com/1087756/167305378-ef61531a-2bc7-42ff-9192-011dd7a3fe37.png">



## Projects that have evolved this template

- https://gifit.pics
- https://voice-clips.netlify.app
- https://willsonsmith.com

