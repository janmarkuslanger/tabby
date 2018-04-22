const Tabs = (function(){

  const showTab = function showTab (item, module) {
    const activeItems = [].slice.call(document.querySelectorAll('[data-tabs-active]'));
    activeItems[0].removeAttribute('data-tabs-active');
    activeItems[1].removeAttribute('data-tabs-active');
    item.setAttribute('data-tabs-active', '');
    module.querySelector(`[data-tabs-content="${item.getAttribute('data-tabs-item')}"]`).setAttribute('data-tabs-active', '');
  }

  const initModule = function initModule (module) {
    const barItems = [].slice.call(module.querySelectorAll('[data-tabs-item]'));
    barItems.forEach(item => {
      item.addEventListener('click', function(){
        if(this.getAttribute('data-tabs-active') !== null) {
          return;
        }
        showTab(item, module);
      })
    })
  }

  const init = function init () {
    const modules = [].slice.call(document.querySelectorAll('[data-tabs]'));
    if(modules.length === 0) {
      return;
    }
    modules.forEach(function(module){
      initModule(module);
    });
  }

  return {
    init
  }

}());
