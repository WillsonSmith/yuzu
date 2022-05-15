import { copyStatic } from '../utilities/copyStatic.js';

export const buildHtml = (configurations) => {
  for (const config of configurations) {
    copyStatic(config);
  }
};
