import { copyStatic as copyStaticUtil } from '../utilities/copyStatic.js';

export const copyStatic = (configurations) => {
  for (const config of configurations) {
    copyStaticUtil(config);
  }
};
