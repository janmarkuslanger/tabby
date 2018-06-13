const Tabs = (function(){

  const killActiveTab = tabContainer => {

    // get the active items
    const activeBar = tabContainer.querySelector('[data-tabs-item][data-tabs-active]');
    const activeItem = tabContainer.querySelector('[data-tabs-content][data-tabs-active]');

    // if there is an active bar item remove the attribute
    if(activeBar) {
      activeBar.removeAttribute('data-tabs-active');
    }

    // if there is an active content item renove the attribute
    if(activeItem) {
      activeItem.removeAttribute('data-tabs-active');
    }
  }

  const showTab = (item, tabContainer) => {

    // kill the active tab
    killActiveTab(tabContainer);

    // set active to the bar and content item
    item.setAttribute('data-tabs-active', '');
    tabContainer.querySelector(`[data-tabs-content="${item.getAttribute('data-tabs-item')}"]`).setAttribute('data-tabs-active', '');
  }

  const initTabs = function initTabs (tabContainer) {

    // get the bar items
    const barItems = [].slice.call(tabContainer.querySelectorAll('[data-tabs-item]'));

    barItems.forEach(item => {

      // add event listener
      item.addEventListener('click', function(){

        // the item is already set to active
        if(this.getAttribute('data-tabs-active') !== null) {
          return;
        }

        // ativate the tab
        showTab(item, tabContainer);
      })
    })
  }

  const init = function init () {

    // if there is no tabContainer to handle just return
    if(!document.querySelector('[data-tabs]')) { return; }

    // get all the tabContainer in DOM
    const tabsContainer = [].slice.call(document.querySelectorAll('[data-tabs]'));

    // init them
    tabsContainer.forEach(tabContainer => { initTabs(tabContainer); });
  }

  return {
    init
  }

}());
