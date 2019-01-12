import { ATTRIBUTE_ACTIVE, ATTRIBUTE_BAR, ATTRIBUTE_CONTENT } from './constants';
import { getSiblings } from './helper';
import { fadeOut } from './animations';

export class Tabby {

    constructor(container, options) {
        this.container = container;
        this.animation = options.animation || false; // 'fade'
        this.methods = options.methods || null;

        this.items = this.collectItems();
        this.initTabs();
    }

    collectItems() {
        const items = [];

        // const bars = getSiblings(this.firstBar);
        // const content = getSiblings(this.firstContent);

        bars.forEach((bar) => {
            const attr = bar.getAttribute(ATTRIBUTE_BAR);
            const partner = content.filter(item => item.getAttribute(ATTRIBUTE_CONTENT) === attr)[0];
            items.push([bar,partner]);
        });

        return items;
    }


    /**
    * activate a tab
    *
    * @param {HTMLElement}
    */
    showTab(item) {
    }

    /**
    * init Tabs
    *
    */
    initTabs() {

    }



};
