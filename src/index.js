/**
  * Tabs js
  *
  * @author Jan-Markus Langer
  */

/**
  * Convert a NodeList to an Array
  *
  * @param {NodeList} nodeList
  *
  * @return {Array}
  */
const nodeToArray = nodeList => [].slice.call(nodeList);

/**
  * Active Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_ACTIVE = 'data-tabby-active';

/**
  * Bar Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_BAR = 'data-tabby-bar';

/**
  * Content Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_CONTENT = 'data-tabby-content';

/**
  * version
  *
  * @type {String}
  */
export const version = '[AIV]{version}[/AIV]';

/**
  * Tabs
  *
  * @type {Class}
  */
export class Component {
  /**
    * constructor
    *
    * @param {HTMLElement} container
    */
  constructor(container, hooks) {
    this.container = container;
    this.hooks = hooks;

    if (!this.container) {
      console.error('Container is not given!');
      return;
    }

    this.activeBar = this.container.querySelector(`[${ATTRIBUTE_BAR}]`);
    this.activeContent = this.container.querySelector(`[${ATTRIBUTE_CONTENT}]`);
    this.barItems = nodeToArray(
      this.container.querySelectorAll(`[${ATTRIBUTE_BAR}]`),
    );
    if (this.hooks.onConstruct) {
      this.hooks.onConstruct(this);
    }
    this.initTabs(this.container);
  }

  /**
    * kill Active Tab
    *
    */
  killActiveTab() {
    if (this.hooks.onBeforeKilltabs) {
      this.hooks.onBeforeKilltabs(this, this.activeBar, this.activeContent);
    }

    if (this.activeBar) {
      this.activeBar.removeAttribute(ATTRIBUTE_ACTIVE);
      this.activeBar = null;
    }

    if (this.activeContent) {
      this.activeContent.removeAttribute(ATTRIBUTE_ACTIVE);
      this.activeContent = null;
    }

    if (this.hooks.onAfterKilltabs) {
      this.hooks.onAfterKilltabs(this, this.activeBar, this.activeContent);
    }
  }

  /**
    * activate a tab
    *
    * @param {HTMLElement}
    */
  showTab(item) {
    this.activeBar = item;
    this.activeContent = this.container.querySelector(`[${ATTRIBUTE_CONTENT}="${this.activeBar.getAttribute(ATTRIBUTE_BAR)}"]`);

    if (this.hooks.onBeforeShowtabs) {
      this.hooks.onBeforeShowtabs(this, this.activeBar, this.activeContent);
    }

    this.activeBar.setAttribute(ATTRIBUTE_ACTIVE, '');
    this.activeContent.setAttribute(ATTRIBUTE_ACTIVE, '');

    if (this.hooks.onAfterShowtabs) {
      this.hooks.onAfterShowtabs(this, this.activeBar, this.activeContent);
    }
  }

  /**
    * init Tabs
    *
    */
  initTabs() {
    if (this.hooks.onBeforeInit) {
      this.hooks.onBeforeInit(this);
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

    if (this.hooks.onAfterInit) {
      this.hooks.onAfterInit(this);
    }
  }
}
