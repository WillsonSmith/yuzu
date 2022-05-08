import { copy, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

/** Actions */
copy('./index.html', './web/index.html');

if (watchFlag) {
  watch('./index.html').on('change', () => {
    copy('./index.html', './web/index.html');
  });
}
