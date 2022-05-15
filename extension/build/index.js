import { buildHtml } from './html/index.js';
import { buildCss } from './css/index.js';
import { copyStatic } from './static/index.js';
import { buildJavascript } from './javascript/index.js';

let [...flags] = process.argv;
flags = {
  watch: flags.includes('--watch'),
  minify: flags.includes('--minify'),
};

const extensionPath = './extension';
const distPath = './extension/dist';

console.log(`BUILD • HTML • ${flags.watch ? 'WATCHING' : 'BUILDING'}`);
buildHtml([
  {
    location: `${extensionPath}/index.html`,
    destination: `${distPath}/index.html`,
    ...{ flags },
  },
]);

// Javascript
const jsConfig = [
  {
    location: `${extensionPath}/extension-script.js`,
    destination: `${distPath}/extension-script.js`,
  },
  {
    location: `${extensionPath}/page-script.js`,
    outfile: `${distPath}/page-script.js`,
  },
  {
    location: `${extensionPath}/inject.js`,
    outfile: `${distPath}/inject.js`,
  },
  {
    location: `${extensionPath}/background.js`,
    outfile: `${distPath}/background.js`,
  },
].map((config) => ({ ...config, ...flags }));

console.log(`BUILD • JAVASCRIPT • ${flags.watch ? 'WATCHING' : 'BUILDING'}`);
buildJavascript(jsConfig);

// Static assets
const staticConfig = [
  {
    location: './node_modules/@shoelace-style/shoelace',
    destination: `${distPath}/vendor/modules/shoelace`,
  },
  {
    location: `${extensionPath}/service-worker.js`,
    destination: `${distPath}/service-worker.js`,
  },
  {
    location: `${extensionPath}/static`,
    destination: `${distPath}/static`,
  },
].map((config) => ({ ...config, ...flags }));

console.log(`BUILD • STATIC • ${flags.watch ? 'WATCHING' : 'BUILDING'}`);
copyStatic(staticConfig);

const cssConfig = [
  {
    location: `${extensionPath}/css/extension.css`,
    destination: `${distPath}/css/extension.css`,
  },
].map((config) => ({ ...config, ...flags }));

console.log(`BUILD • CSS • ${flags.watch ? 'WATCHING' : 'BUILDING'}`);
buildCss(cssConfig);
