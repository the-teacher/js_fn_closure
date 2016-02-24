;

// JsModule.init()

var JsModule = (function(){
  'use strict';
  var inited = false;

  var init_module = function(){
    console.log('MODULE INITIALIZER')
  }

  var init_module_once = function(){
    console.log('MODULE ONCE INITIALIZER')
  }

  var init = function(){
    if (!inited){ init_module_once() ; inited = true }
    init_module();
    return true;
  }

  // Define Public Methods
  return {
    init: init
  }
})();
