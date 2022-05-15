import { build as esbuild } from 'esbuild';
export const buildCss = (configurations) => {
  for (const config of configurations) {
    build(config);
  }
};

function build({ location, destination, watch, minify }) {
  esbuild({
    bundle: true,
    entryPoints: [location],
    external: [`*.ttf`],
    minify: minify,
    outfile: destination,
    watch: watch,
  });
}
