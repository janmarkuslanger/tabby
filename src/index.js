import { Tabby } from './tabby';

export const version = '3.0.0-beta';

export const init = (options = {}) => {

    // search for all tabby elements
    const tabbies = [].slice.call(document.querySelectorAll('[data-tabby]'));

    if (tabbies.lenght < 1) {
        return;
    }

    return tabbies.map(component => new Tabby(component, options));
};
