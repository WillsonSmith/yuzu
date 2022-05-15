import { build, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

/** Actions */
build({
  entryPoints: ['./assets/js/extensions/extension-script.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/extensions/extension-script.js',
  minify: !watchFlag,
  watch: watchFlag,
});

build({
  entryPoints: ['./assets/js/extensions/page-script.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/extensions/page-script.js',
  minify: !watchFlag,
  watch: watchFlag,
});

build({
  entryPoints: ['./assets/js/extensions/lit-setup.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/extensions/lit-setup.js',
  minify: !watchFlag,
  watch: watchFlag,
});

build({
  entryPoints: ['./assets/js/extensions/background.js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/extensions/background.js',
  minify: !watchFlag,
  watch: watchFlag,
});
