document.documentElement.setAttribute(
  'data-base-path',
  chrome.runtime.getURL('web/assets/vendor/shoelace/dist')
);

/** Create Injected Script */
const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('web/assets/js/extensions/lit-setup.js');
script.setAttribute('data-ch-extension', 'true');
document.body.appendChild(script);

chrome.storage.sync.get('theme', ({ theme }) => {
  document.documentElement.classList.toggle(
    'sl-theme-dark',
    themeClass(theme) === 'sl-theme-dark'
  );
});

chrome.storage.onChanged.addListener(async ({ theme }) => {
  document.documentElement.classList.toggle(
    'sl-theme-dark',
    themeClass(theme.newValue) === 'sl-theme-dark'
  );
});

function themeClass(theme) {
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
