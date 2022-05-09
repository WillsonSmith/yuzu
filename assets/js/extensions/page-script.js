document.documentElement.setAttribute(
  'data-base-path',
  chrome.runtime.getURL('web/assets/vendor/shoelace/dist')
);

/** Create Injected Script */
const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('web/assets/js/extensions/lit-setup.js');
document.body.appendChild(script);

const enabled = ['dark', 'automatic'];
chrome.storage.sync.get('theme', ({ theme }) => {
  document.documentElement.classList.toggle(
    'sl-theme-dark',
    enabled.includes(theme)
  );
});

chrome.storage.onChanged.addListener(async ({ theme }) => {
  document.documentElement.classList.toggle(
    'sl-theme-dark',
    enabled.includes(theme.newValue)
  );
});
