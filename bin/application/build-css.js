import { build, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

/** Actions */
build({
  entryPoints: ['./assets/css/main.css'],
  bundle: true,
  outfile: './web/assets/css/main.css',
  minify: !watch,
  watch: watchFlag,
  external: ['*.ttf'],
});
