import { Tabby } from './tabby';

export const version = '3.0.0-beta';

export const init = (container = null, options = {}) => {

    if (!container) {
        return;
    }

    return new Tabby(container, options);
};
