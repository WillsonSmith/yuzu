// Require for extension window.
import { initializeExtensionScript } from './utilities/initialize.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '../assets/js/components/page-header/page-header.js';
import '../assets/js/components/colorize-word/colorize-word.js';

// Initialization.
setBasePath(`./assets/vendor/shoelace/dist`);
initializeExtensionScript();
