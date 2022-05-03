/** Service Worker
 * Docs: https://developers.google.com/web/ilt/pwa/introduction-to-service-worker
 */

const filesToCache = [
  '/',
  'index.html',
  'assets/css/main.css',
  'assets/js/index.js',
  'assets/static/icon.png',
  '/assets/vendor/shoelace/dist/themes/light.css',
  '/assets/vendor/shoelace/dist/themes/dark.css',
  /**
   * Add caching for each imported shoelace component
   */
];

self.addEventListener('install', (event) => {
  // Perform install steps
});

self.addEventListener('activate', (event) => {
  // Perform activate steps
});
