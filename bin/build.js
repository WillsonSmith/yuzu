import { build } from 'esbuild';
import { copyFile } from 'fs/promises';
import {
  entryPoints as jsEntry,
  outfile as jsOutfile,
} from './javascript/index.js';
import { entryPoints as cssEntry, outfile as cssOutfile } from './css/index.js';

const [, , watchOrBuild, file] = process.argv;

const builds = {
  static: (watch = false) => {},
  html: (watch = false) => {
    // TODO: watch array of static files and copy to web
    copyFile('./index.html', './web/index.html');
  },
  js: (watch = false) => {
    build({
      entryPoints: jsEntry,
      bundle: true,
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
