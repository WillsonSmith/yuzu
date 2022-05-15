// Require for extension window.
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { initializeExtensionScript } from './utilities/initialize.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '../components/page-header/page-header.js';
import '../components/colorize-word/colorize-word.js';

// Initialization.
setBasePath('./assets/vendor/shoelace/dist');
initializeExtensionScript();
