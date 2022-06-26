import { build as esbuild } from "esbuild";
function build({ location, destination, watch, minify }) {
  esbuild({
    bundle: true,
    entryPoints: [location],
    format: `esm`,
    minify,
    outfile: destination,
    watch,
    sourcemap: watch,
  });
}

export const buildJavascript = (configurations) => {
  for (const config of configurations) {
    build(config);
  }
};
