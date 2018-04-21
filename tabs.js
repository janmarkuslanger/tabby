const Tabs = (function(){



  const init = function init () {
    const modules = [].slice.call(document.querySelectorAll('[data-tabs]'));
    if(modules.length === 0) {
      return;
    }
    modules.forEach(function(module){
      
    });
  }

  return {
    init
  }

}());


Tabs.init()
