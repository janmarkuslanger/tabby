!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tabby=e():t.Tabby=e()}(window,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var o=function(t){var e=[t],n=t.nextElementSibling;if(!n)return e;for(;n;)e.push(n),n=n.nextElementSibling;return e},r="data-tabby-active",s="data-tabby-bar",a="data-tabby-content";e.version="2.0.2",e.Component=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.methods=n,this.container&&(this.firstBar=this.container.querySelector("["+s+"]"),this.firstContent=this.container.querySelector("["+a+"]"),this.activeBar=this.container.querySelector("["+s+"]["+r+"]"),this.activeContent=this.container.querySelector("["+a+"]["+r+"]"),this.barItems=this.collectBarItems(),this.contentItems=this.collectContentItems(),this.methods&&this.methods.onConstruct&&this.methods.onConstruct(this),this.initTabs(this.container))}return i(t,[{key:"collectBarItems",value:function(){return o(this.firstBar)}},{key:"collectContentItems",value:function(){return o(this.firstContent)}},{key:"killActiveTab",value:function(){this.methods&&this.methods.onBeforeKilltabs&&this.methods.onBeforeKilltabs(this,this.activeBar,this.activeContent),this.activeBar&&(this.activeBar.removeAttribute(r),this.activeBar=null),this.activeContent&&(this.activeContent.removeAttribute(r),this.activeContent=null),this.methods&&this.methods.onAfterKilltabs&&this.methods.onAfterKilltabs(this,this.activeBar,this.activeContent)}},{key:"showTab",value:function(t){this.activeBar=t;var e=this.activeBar.getAttribute(s);this.activeContent=this.container.querySelector("["+a+'="'+e+'"]'),this.methods&&this.methods.onBeforeShowtabs&&this.methods.onBeforeShowtabs(this,this.activeBar,this.activeContent),this.activeBar.setAttribute(r,""),this.activeContent.setAttribute(r,""),this.methods&&this.methods.onAfterShowtabs&&this.methods.onAfterShowtabs(this,this.activeBar,this.activeContent)}},{key:"initTabs",value:function(){var t=this;this.methods&&this.methods.onBeforeInit&&this.methods.onBeforeInit(this),this.barItems.forEach(function(e){e.addEventListener("click",function(){e!==t.activeBar&&(t.killActiveTab(),t.showTab(e))})}),this.methods&&this.methods.onAfterInit&&this.methods.onAfterInit(this)}}]),t}()}])});