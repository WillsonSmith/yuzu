import { buildHtml } from './html';
const [...flags] = process.argv;

buildHtml({
  location: './extension/index.html',
  destination: './extension/yuzu.ext/index.html',
});
