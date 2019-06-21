import { Tabby } from './tabby';

/**
 * current version
 * @type {Number}
 */
const version = '3.1';

/**
 * init on tabby element
 * returns an array of tabby components
 * @param {Object} options
 * @return {Array}
 */
const init = (options = {}) => []
  .slice
  .call(document.querySelectorAll('[data-tabby]'))
  .map(component => new Tabby(component, options));

export { version, init };
