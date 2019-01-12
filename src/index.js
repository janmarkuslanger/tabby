import { Tabby } from './tabby';

export const version = '3.0.0-beta';

export const init = (container = null, options = {}) => {

    if (!container) {
        return;
    }

    return Array.isArray(container)
        ? container.map((component) => new Tabby(component, options))
        : new Tabby(container, options);
};
