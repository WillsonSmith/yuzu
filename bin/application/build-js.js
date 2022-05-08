import { build, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

/** Actions */
build({
  entryPoints: ['./assets/js/(._.).js'],
  bundle: true,
  format: 'esm',
  outfile: './web/assets/js/(._.).js',
  minify: !watch,
  watch: watchFlag,
});
