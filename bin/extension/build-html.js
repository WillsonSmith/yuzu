import { copy, chokidar } from './util.js';
const watch = chokidar.watch;

const [...flags] = process.argv;
const watchFlag = flags.includes('--watch');

const extensionIndex = `./extension/index.html`;

/** Actions */
copy('./extension/index.html', './extension/yuzu.ext/index.html');

if (watchFlag) {
  watch('./index.html').on('change', () => {
    copy('./index.html', './web/index.html');
  });
}
