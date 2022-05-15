export function initializeExtensionScript() {
  const extensionHeader = document.querySelector('page-header');
  extensionHeader.addEventListener('theme-change', handleUpdateTheme);

  chrome.storage.sync.get('theme', ({ theme }) => {
    setLiveTheme(theme);
  });
}

function handleUpdateTheme(event) {
  const { theme } = event.detail;

  setLiveTheme(theme);
  chrome.storage.sync.set({ theme });
}

function setLiveTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle('sl-theme-dark', isDarkMode(theme));
}

function isDarkMode(savedTheme) {
  if (savedTheme === 'dark') return true;

  const mediaQuery = '(prefers-color-scheme: dark)';
  if (savedTheme === 'automatic' && window.matchMedia(mediaQuery)) return true;
  return false;
}
