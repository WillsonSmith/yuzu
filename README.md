# site-template

An evolving template for scaffolding front-end web applications.
By default it ships with [Shoelace](https://shoelace.style/) and [Lit](https://lit.dev/), built with [esbuild](https://esbuild.github.io/) to remain flexible and highly configurable.

Note:
When migrating components, please make sure to update the following:

1. Create the component with its new name
2. Point the export of the previous component to the new component
3. Mark the component as deprecated, and provide a migration guide
