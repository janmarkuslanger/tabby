!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).Tabby={})}(this,function(t){"use strict";function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c="data-tabby-active",r="data-tabby-bar",s="data-tabby-content",u=function(t){var e=[t],i=t.nextElementSibling;if(!i)return e;for(;i;)e.push(i),i=i.nextElementSibling;return e},l=function(t){t.style.display="block"},f=function(t){t.style.display="none"},i=function(){function i(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),this.container=t,this.animation=e.animation,this.index=0,this.items=[],this.initTabs()}var t,e,n;return t=i,(e=[{key:"doSwitch",value:function(t){var e,i,n,a,o=this.items[this.index][1],r=this.items[t][1],s=this.items[this.index][0],u=this.items[t][0];this.animation?(e=function(){var e,i,n,a;f(o),l(r),i=r,n=0,a=.05,requestAnimationFrame(function t(){n<1?(n+=a,i.style.opacity=n.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),e&&e(i))}),s.removeAttribute(c),u.setAttribute(c,"")},i=o,n=1,a=.05,requestAnimationFrame(function t(){0<n?(n-=a,i.style.opacity=n.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),e&&e(i))})):(f(o),l(r),s.removeAttribute(c),u.setAttribute(c,"")),this.index=t}},{key:"next",value:function(){var t=this.index+1;this.isOutRange(t)||this.doSwitch(t)}},{key:"previous",value:function(){var t=this.index-1;this.isOutRange(t)||this.doSwitch(t)}},{key:"isOutRange",value:function(t){return t<0||t>this.items.length-1}},{key:"initTabs",value:function(){var a=this,t=u(this.container.querySelector("[".concat(r,"]"))),o=u(this.container.querySelector("[".concat(s,"]")));t.forEach(function(t,e){var i=t.getAttribute(r),n=o.filter(function(t){return t.getAttribute(s)===i})[0];0===e?(n.style.display="block",n.style.opacity="1"):(n.style.display="none",a.animation&&(n.style.opacity="0")),a.items.push([t,n]),t.addEventListener("click",function(){a.doSwitch(e)})})}}])&&a(t.prototype,e),n&&a(t,n),i}();t.version="3.1",t.init=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[].slice.call(document.querySelectorAll("[data-tabby]")).map(function(t){return new i(t,e)})},t.Tabby=i,Object.defineProperty(t,"__esModule",{value:!0})});
