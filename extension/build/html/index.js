import { copyStatic } from '../util';

copyStatic({
  location: './extension/index.html',
  destination: './extension/yuzu.ext/index.html',
  watch: process.argv.includes('--watch'),
});
