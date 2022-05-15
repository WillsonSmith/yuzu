import { copy } from 'fs-extra';
import chokidar from 'chokidar';
const dir = chokidar;

export function copyStatic({ location, destination, watch }) {
  console.log(location, destination, 'WOWOWOWOWOWOW');
  copy(location, destination);
  if (watch) {
    dir.watch(location).on('change', () => {
      copy(location, destination);
    });
  }
}

export { copy, dir };
