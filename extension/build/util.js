import { copy } from 'fs-extra';
import { chokidar as dir } from 'chokidar';

export function copyStatic({ location, destination, watch }) {
  copy(location, destination);
  if (watch) {
    dir.watch(extensionIndex).on('change', () => {
      copy(extensionIndex, location);
    });
  }
}

export { copy, dir };
