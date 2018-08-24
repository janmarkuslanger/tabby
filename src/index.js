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
const TABS = 'data-tabs';

/**
  * Active Tabs Attribute
  *
  * @type {String}
  */
const ACTIVE = 'data-tabs-active';

/**
  * Item Tabs Attribute
  *
  * @type {String}
  */
const ITEM = 'data-tabs-item';

/**
  * Content Tabs Attribute
  *
  * @type {String}
  */
const CONTENT = 'data-tabs-content';

/**
  * close active tabs
  *
  * @param {HTMLElement} tabContainer
  */
const killActiveTab = (tabContainer) => {
  // get the active items
  const activeBar = tabContainer.querySelector(`[${ITEM}][${ACTIVE}]`);
  const activeItem = tabContainer.querySelector(`[${CONTENT}][${ACTIVE}]`);

  // if there is an active bar item remove the attribute
  if (activeBar) {
    activeBar.removeAttribute(ACTIVE);
  }

  // if there is an active content item renove the attribute
  if (activeItem) {
    activeItem.removeAttribute(ACTIVE);
  }
};

/**
  * activate a Tab Bar
  *
  * @param {HTMLElement} item
  * @param {HTMLElement} tabContainer
  */
const showTab = (item, tabContainer) => {
  // kill the active tab
  killActiveTab(tabContainer);

  // set active to the bar and content item
  item.setAttribute(ACTIVE, '');
  tabContainer
    .querySelector(`[${CONTENT}="${item.getAttribute(ITEM)}"]`)
    .setAttribute(ACTIVE, '');
};

/**
  * init the tabs
  *
  * @param {HTMLElement} tabContainer
  */
const initTabs = (tabContainer) => {
  // get the bar items
  const barItems = nodeToArray(tabContainer.querySelectorAll(`[${ITEM}]`));

  barItems.forEach((item) => {
    // add event listener
    item.addEventListener('click', () => {
      // the item is already set to active
      if (item.getAttribute(ACTIVE) !== null) {
        return;
      }

      // ativate the tab
      showTab(item, tabContainer);
    });
  });
};

/**
  * init function
  */
export const init = () => {
  // if there is no tabContainer to handle just return
  if (!document.querySelector(`[${TABS}]`)) { return; }

  // get all the tabContainer in DOM
  const tabsContainer = nodeToArray(document.querySelectorAll(`[${TABS}]`));

  // init them
  tabsContainer.forEach((tabContainer) => { initTabs(tabContainer); });
};
