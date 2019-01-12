import { ATTRIBUTE_ACTIVE, ATTRIBUTE_BAR, ATTRIBUTE_CONTENT } from './constants';
import { getSiblings } from './helper';

export class Tabby {

    constructor(container, options) {
        this.container = container;
        this.animation = options.animation || false; // 'fade'
        this.methods = options.methods || null;

        // get the first active items
        this.firstBar = this.container.querySelector(
            `[${ATTRIBUTE_BAR}]`,
        );
        this.firstContent = this.container.querySelector(
            `[${ATTRIBUTE_CONTENT}]`,
        );

        // get the active items
        this.activeBar = this.container.querySelector(
            `[${ATTRIBUTE_BAR}][${ATTRIBUTE_ACTIVE}]`,
        );
        this.activeContent = this.container.querySelector(
            `[${ATTRIBUTE_CONTENT}][${ATTRIBUTE_ACTIVE}]`,
        );

        // collect all siblings bar items
        this.barItems = this.collectBarItems();

        // collect all sibling content items
        this.contentItems = this.collectContentItems();

        if (this.methods && this.methods.onConstruct) {
            this.methods.onConstruct(this);
        }

        this.initTabs(this.container);
    }

    /**
    * collect bar items
    *
    * @param {HTMLElement}
    *
    * @return {Array}
    */
    collectBarItems() {
        return getSiblings(this.firstBar);
    }

    /**
    * collect content items
    *
    * @param {HTMLElement}
    *
    * @return {Array}
    */
    collectContentItems() {
        return getSiblings(this.firstContent);
    }

    /**
    * kill Active Tab
    *
    */
    killActiveTab() {
        if (this.methods && this.methods.onBeforeKilltabs) {
            this.methods.onBeforeKilltabs(
                this,
                this.activeBar,
                this.activeContent,
            );
        }

        if (this.activeBar) {
            this.activeBar.removeAttribute(ATTRIBUTE_ACTIVE);
            this.activeBar = null;
        }

        if (this.activeContent) {
            this.activeContent.removeAttribute(ATTRIBUTE_ACTIVE);
            this.activeContent = null;
        }

        if (this.methods && this.methods.onAfterKilltabs) {
            this.methods.onAfterKilltabs(
                this,
                this.activeBar,
                this.activeContent,
            );
        }
    }

    /**
    * activate a tab
    *
    * @param {HTMLElement}
    */
    showTab(item) {
        this.activeBar = item;
        const attr = this.activeBar.getAttribute(ATTRIBUTE_BAR);
        this.activeContent = this.container.querySelector(
            `[${ATTRIBUTE_CONTENT}="${attr}"]`,
        );

        if (this.methods && this.methods.onBeforeShowtabs) {
            this.methods.onBeforeShowtabs(
                this,
                this.activeBar,
                this.activeContent,
            );
        }

        this.activeBar.setAttribute(ATTRIBUTE_ACTIVE, '');
        this.activeContent.setAttribute(ATTRIBUTE_ACTIVE, '');

        if (this.methods && this.methods.onAfterShowtabs) {
            this.methods.onAfterShowtabs(
                this,
                this.activeBar,
                this.activeContent,
            );
        }
    }

    /**
    * init Tabs
    *
    */
    initTabs() {
        if (this.methods && this.methods.onBeforeInit) {
            this.methods.onBeforeInit(this);
        }
        this.barItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (item === this.activeBar) {
                    return;
                }
                this.killActiveTab();
                this.showTab(item);
            });
        });

        if (this.methods && this.methods.onAfterInit) {
            this.methods.onAfterInit(this);
        }
    }



};
