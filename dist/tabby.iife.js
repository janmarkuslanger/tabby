var Tabby=function(t){"use strict";function a(t,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}var u="data-tabby-active",o="data-tabby-bar",c="data-tabby-content",s=function(t){var i=[t],n=t.nextElementSibling;if(!n)return i;for(;n;)i.push(n),n=n.nextElementSibling;return i},l=function(t){t.style.display="block"},y=function(t){t.style.display="none"},n=function(){function n(t,i){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,n),this.container=t,this.animation=i.animation,this.index=0,this.items=[],this.initTabs()}var t,i,e;return t=n,(i=[{key:"doSwitch",value:function(t){var i,n,e,a,r=this.items[this.index][1],o=this.items[t][1],c=this.items[this.index][0],s=this.items[t][0];this.animation?(i=function(){var i,n,e,a;y(r),l(o),n=o,e=0,a=.05,requestAnimationFrame(function t(){e<1?(e+=a,n.style.opacity=e.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),i&&i(n))}),c.removeAttribute(u),s.setAttribute(u,"")},n=r,e=1,a=.05,requestAnimationFrame(function t(){0<e?(e-=a,n.style.opacity=e.toString(),requestAnimationFrame(t)):(cancelAnimationFrame(t),i&&i(n))})):(y(r),l(o),c.removeAttribute(u),s.setAttribute(u,"")),this.index=t}},{key:"next",value:function(){this.doSwitch(this.index+1)}},{key:"previous",value:function(){this.doSwitch(this.index-1)}},{key:"initTabs",value:function(){var a=this,t=s(this.container.querySelector("[".concat(o,"]"))),r=s(this.container.querySelector("[".concat(c,"]")));t.forEach(function(t,i){var n=t.getAttribute(o),e=r.filter(function(t){return t.getAttribute(c)===n})[0];0===i?(e.style.display="block",e.style.opacity="1"):(e.style.display="none",a.animation&&(e.style.opacity="0")),a.items.push([t,e]),t.addEventListener("click",function(){a.doSwitch(i)})})}}])&&a(t.prototype,i),e&&a(t,e),n}();return t.version="3.1",t.init=function(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return[].slice.call(document.querySelectorAll("[data-tabby]")).map(function(t){return new n(t,i)})},t.Tabby=n,t}({});
