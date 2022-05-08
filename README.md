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

## Installation

```
  npm install
```

## Usage

```
  npm run application:dev
  // Run in development mode

  npm run application:build
  // Build for production
```

## Projects that have evolved this template

- https://gifit.pics
- https://voice-clips.netlify.app
- https://willsonsmith.com

## On first viewing

<img width="954" alt="image" src="https://user-images.githubusercontent.com/1087756/167286192-9797a543-f01b-45e2-994f-1533d2feeccd.png">
