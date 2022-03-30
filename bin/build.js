import { build } from 'esbuild';
import { copy } from 'fs-extra';
import chokidar from 'chokidar';

import {
  entryPoints as jsEntry,
  outfile as jsOutfile,
} from './javascript/index.js';
import { entryPoints as cssEntry, outfile as cssOutfile } from './css/index.js';

const [, , watchOrBuild, file] = process.argv;

const builds = {
  static: async (watch = false) => {
    copy('./assets/static', './web/assets/static');
    if (!watch) return;
    chokidar
      .watch('./assets/static')
      .on('change', (path) => {
        copy(path, `./web/${path}`);
      })
      .on('add', (path) => {
        copy(path, `./web/${path}`);
      })
      .on('unlink', (path) => {});
  },
  html: (watch = false) => {
    copy('./index.html', './web/index.html');
    if (!watch) return;
    chokidar.watch('./index.html').on('change', () => {
      copy('./index.html', './web/index.html');
    });
  },
  js: async (watch = false) => {
    build({
      entryPoints: jsEntry,
      bundle: true,
      format: 'esm',
      outfile: jsOutfile,
      minify: !watch,
      watch,
    });
  },
  css: (watch = false) => {
    build({
      entryPoints: cssEntry,
      bundle: true,
      outfile: cssOutfile,
      minify: !watch,
      watch,
    });
  },
  'design-system': async (watch = false) => {
    // TODO: Build design-system
    // pull in `system/**/*.css`, merge rules, output system.css
  },
};

switch (watchOrBuild) {
  case 'watch':
    builds[file](true);
    break;
  case 'build':
    builds[file]();
    break;
  default:
    console.log('Usage: node build.js [watch|build] [js|css]');
    break;
}
