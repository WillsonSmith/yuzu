# Project Template

Work in progress, more to come.

## Description

This project template is built on web components, it includes [`Shoelace`](https://shoelace.style/) and [`LitElement`](https://lit.dev/) as well as a number of other web components. The build system contains a series of `node` scripts that use [`esbuild`](https://esbuild.github.io/) for transpiling the source code. There are very few guard rails, and, as a result, builds are highly customizable.

The build system is built around [netlify](https://www.netlify.com), but can be changed with relative ease.

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
