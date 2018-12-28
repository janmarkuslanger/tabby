/**
  * Tabby
  *
  * @author Jan-Markus Langer
  */
/**
  * returns an array of next element siblings
  *
  * @param {HTMLElement}
  *
  * @return {Array}
  */
const getNextElementSiblings = (element) => {
  const arrayContainer = [element];

  let nextElement = element.nextElementSibling;

  if (!nextElement) {
    return arrayContainer;
  }

  while (nextElement) {
    arrayContainer.push(nextElement);

    nextElement = nextElement.nextElementSibling;
  }

  return arrayContainer;
};

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
export const version = '2.0.2';

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
  constructor(container, methods) {
    this.container = container;
    this.methods = methods;

    if (!this.container) {
      Console.error('Container is not given!');
      return;
    }

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
    return getNextElementSiblings(this.firstBar);
  }

  /**
    * collect content items
    *
    * @param {HTMLElement}
    *
    * @return {Array}
    */
  collectContentItems() {
    return getNextElementSiblings(this.firstContent);
  }

  /**
    * kill Active Tab
    *
    */
  killActiveTab() {
    if (this.methods && this.methods.onBeforeKilltabs) {
      this.methods.onBeforeKilltabs(this, this.activeBar, this.activeContent);
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
      this.methods.onAfterKilltabs(this, this.activeBar, this.activeContent);
    }
  }

  /**
    * activate a tab
    *
    * @param {HTMLElement}
    */
  showTab(item) {
    this.activeBar = item;
    this.activeContent = this.container.querySelector(
      `[${ATTRIBUTE_CONTENT}="${this.activeBar.getAttribute(ATTRIBUTE_BAR)}"]`,
    );

    if (this.methods && this.methods.onBeforeShowtabs) {
      this.methods.onBeforeShowtabs(this, this.activeBar, this.activeContent);
    }

    this.activeBar.setAttribute(ATTRIBUTE_ACTIVE, '');
    this.activeContent.setAttribute(ATTRIBUTE_ACTIVE, '');

    if (this.methods && this.methods.onAfterShowtabs) {
      this.methods.onAfterShowtabs(this, this.activeBar, this.activeContent);
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
}
