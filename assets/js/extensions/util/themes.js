export function themeClass(theme) {
  switch (theme) {
    case 'dark':
      return 'sl-theme-dark';
    case 'light':
      return '';
    case 'automatic':
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      return mediaQuery.matches ? 'sl-theme-dark' : '';
  }
}
