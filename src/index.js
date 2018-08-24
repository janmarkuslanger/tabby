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
  * Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_TABS = 'data-tabs';

/**
  * Active Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_ACTIVE = 'data-tabs-active';

/**
  * Bar Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_BAR = 'data-tabs-bar';

/**
  * Content Tabs Attribute
  *
  * @type {String}
  */
const ATTRIBUTE_CONTENT = 'data-tabs-content';

/**
  * Tabs
  *
  * @type {Class}
  */
class Tabs {
  /**
    * constructor
    *
    * @param {HTMLElement} container
    */
  constructor(container, hooks) {
    this.container = container;

    if (!this.container) {
      console.error('Container is not given!');
      return;
    }

    this.activeBar = this.container.querySelector(`[${ATTRIBUTE_BAR}]`);
    this.activeContent = this.container.querySelector(`[${ATTRIBUTE_CONTENT}]`);
    this.barItems = nodeToArray(
      this.container.querySelectorAll(`[${ATTRIBUTE_BAR}]`)
    );
    if (hooks.onContruct) {
      hooks.onContruct(this);
    }
    this.initTabs(this.container);
  }

  /**
    * kill Active Tab
    *
    */
  killActiveTab() {

    if (this.activeBar) {
      this.activeBar.removeAttribute(ATTRIBUTE_ACTIVE);
      this.activeBar = null;
    }

    if (this.activeContent) {
      this.activeContent.removeAttribute(ATTRIBUTE_CONTENT);
      this.activeContent = null;
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

    this.activeBar.setAttribute(ATTRIBUTE_ACTIVE, '');
    this.activeContent.setAttribute(ATTRIBUTE_ACTIVE, '');
  }

  /**
    * init Tabs
    *
    */
  initTabs() {
    this.barItems.forEach((item) => {
      item.addEventListener('click', () => {
        if (item === this.activeBar) {
          return;
        }
        this.killActiveTab();
        this.showTab(item);
      });
    });
  }

}
