import { build, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

/** Actions */
build({
  entryPoints: ['./assets/js/extension-script.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/extension-script.js',
  minify: !watchFlag,
  watch: watchFlag,
});

build({
  entryPoints: ['./assets/js/page-script.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/page-script.js',
  minify: !watchFlag,
  watch: watchFlag,
});

build({
  entryPoints: ['./assets/js/lit-setup.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/lit-setup.js',
  minify: !watchFlag,
  watch: watchFlag,
});

build({
  entryPoints: ['./assets/js/background.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/background.js',
  minify: !watchFlag,
  watch: watchFlag,
});
