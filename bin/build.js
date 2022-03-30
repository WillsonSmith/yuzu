import { build } from 'esbuild';

import { copyFile } from 'fs/promises';

import {
  entryPoints as jsEntry,
  outfile as jsOutfile,
} from './javascript/build.js';
import { entryPoints as cssEntry, outfile as cssOutfile } from './css/build.js';

const [, , watchOrBuild, file] = process.argv;

const builds = {
  static: (watch = false) => {},
  html: (watch = false) => {
    copyFile('./index.html', './web/index.html');
  },
  js: (watch = false) => {
    build({
      entryPoints: jsEntry,
      bundle: true,
      outfile: jsOutfile,
      watch,
    });
  },
  css: (watch = false) => {
    build({
      entryPoints: cssEntry,
      bundle: true,
      outfile: cssOutfile,
      watch,
    });
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
