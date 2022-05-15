import { copy, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

/** Actions */
copy('./node_modules/@shoelace-style/shoelace', './web/assets/vendor/shoelace');
copy('./service-worker.js', './web/service-worker.js');
await copy('./assets/static', './web/assets/static');

if (watchFlag) {
  watch('./assets/static')
    .on('change', (path) => {
      copy(path, `./web/${path}`);
    })
    .on('add', (path) => {
      copy(path, `./web/${path}`);
    })
    .on('unlink', (path) => {});
}
