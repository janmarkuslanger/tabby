!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Tabby={})}(this,function(t){"use strict";function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u="data-tabby-active",r="data-tabby-bar",s="data-tabby-content",c=function(t){var e=[t],n=t.nextElementSibling;if(!n)return e;for(;n;)e.push(n),n=n.nextElementSibling;return e},l=function(t){t.style.display="block"},f=function(t){t.style.display="none"},n=function(){function n(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=t,this.animation=e.animation||"fade",this.index=0,this.items=[],this.initTabs()}var t,e,i;return t=n,(e=[{key:"doSwitch",value:function(t){var e,n,i,a,o=this.items[this.index][1],r=this.items[t][1],s=this.items[this.index][0],c=this.items[t][0];this.animation?(e=function(){var e,n,i,a;f(o),l(r),n=r,i=0,a=.05,requestAnimationFrame(function t(){i<1?(i+=a,n.style.opacity=i.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),e&&e(n))}),s.removeAttribute(u),c.setAttribute(u,"")},n=o,i=1,a=.05,requestAnimationFrame(function t(){0<i?(i-=a,n.style.opacity=i.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),e&&e(n))})):(f(o),l(r),s.removeAttribute(u),c.setAttribute(u,"")),this.index=t}},{key:"initTabs",value:function(){var a=this,t=c(this.container.querySelector("[".concat(r,"]"))),o=c(this.container.querySelector("[".concat(s,"]")));t.forEach(function(t,e){var n=t.getAttribute(r),i=o.filter(function(t){return t.getAttribute(s)===n})[0];i.style.opacity=0===e?(i.style.display="block","1"):(i.style.display="none","0"),a.items.push([t,i]),t.addEventListener("click",function(){a.doSwitch(e)})})}}])&&a(t.prototype,e),i&&a(t,i),n}();t.version="3.0.0-beta",t.init=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[].slice.call(document.querySelectorAll("[data-tabby]")).map(function(t){return new n(t,e)})},Object.defineProperty(t,"__esModule",{value:!0})});
