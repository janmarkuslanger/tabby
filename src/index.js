import { Tabby } from './tabby';

export const version = '3.0.0-beta';

export const init = (options = {}) => []
  .slice
  .call(document.querySelectorAll('[data-tabby]'))
  .map(component => new Tabby(component, options));
