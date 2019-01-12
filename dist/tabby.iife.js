var Tabby = (function (exports) {
  'use strict';

  /**
    * Active Tabs Attribute
    *
    * @type {String}
    */

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
    * returns an array of next element siblings
    *
    * @param {HTMLElement}
    *
    * @return {Array}
    */

  /**
   * fade out an element
   * @type {HTML Element}
   */

  class Tabby {

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



  }

  const version = '3.0.0-beta';

  const init = (container = null, options = {}) => {

      if (!container) {
          return;
      }

      return Array.isArray(container)
          ? container.map((component) => new Tabby(component, options))
          : new Tabby(container, options);
  };

  exports.version = version;
  exports.init = init;

  return exports;

}({}));
