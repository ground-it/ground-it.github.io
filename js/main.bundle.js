!function(c){function t(t){for(var e,n,o=t[0],r=t[1],i=t[2],a=0,l=[];a<o.length;a++)n=o[a],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(c[e]=r[e]);for(p&&p(t);l.length;)l.shift()();return f.push.apply(f,i||[]),u()}function u(){for(var t,e=0;e<f.length;e++){for(var n=f[e],o=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(o=!1)}o&&(f.splice(e--,1),t=a(a.s=n[0]))}return t}var n={},s={0:0},f=[];function a(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return c[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=c,a.c=n,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var e=window.webpackJsonp=window.webpackJsonp||[],o=e.push.bind(e);e.push=t,e=e.slice();for(var r=0;r<e.length;r++)t(e[r]);var p=o;f.push([8,1]),u()}([,function(t,e,n){"use strict";(function(o){e.a=function(){var t=o(".burger"),e=o(".menu"),n=o(".menu ul li a");t.on("click",function(){e.toggleClass("menu-active")}),n.on("click",function(){e.toggleClass("menu-active"),t.toggleClass("burger-active")}),t.on("click",function(){t.toggleClass("burger-active")}),o(window).scroll(function(){100<o(window).scrollTop()?o("header").addClass("scrolled"):o("header").removeClass("scrolled")})}}).call(this,n(0))},function(t,e,n){"use strict";(function(n,o){e.a=function(){n("a").click(function(){var t=n(this).attr("href"),e=n(t).offset().top;return o("html:not(:animated),body:not(:animated)").animate({scrollTop:e},800),!1})}}).call(this,n(0),n(0))},function(t,e,n){"use strict";(function(t){e.a=function(){t(window).scroll(function(){2e3<t(window).scrollTop()?t(".toTopBtn").addClass("toTopBtn-active"):t(".toTopBtn").removeClass("toTopBtn-active")})}}).call(this,n(0))},function(t,e,n){"use strict";(function(t){e.a=function(){t(".owl-team").owlCarousel({autoplay:!0,stagePadding:0,margin:0,nav:!0,autoplaySpeed:1500,autoplayTimeout:3e3,loop:!0,responsive:{0:{items:1},650:{items:1},800:{items:2},1e3:{items:3}}})}}).call(this,n(0))},function(t,e,n){"use strict";(function(t){e.a=function(){t(".owl-carousel").owlCarousel({autoplay:!0,stagePadding:0,margin:0,autoplaySpeed:1500,autoplayTimeout:3e3,loop:!0,responsive:{0:{items:1},520:{items:2},650:{items:2},800:{items:3},1e3:{items:4}}})}}).call(this,n(0))},function(t,n,e){"use strict";(function(e){n.a=function(){var t=e(".preloader");setTimeout(function(){t.addClass("preloader-hide")},2e3)}}).call(this,e(0))},function(t,e,n){"use strict";(function(n){e.a=function(){var t=(new Date).getFullYear();console.log(t);var e=n("#copyright").innerText;console.log(e)}}).call(this,n(0))},function(t,e,c){"use strict";c.r(e),function(t){c(9),c(10),c(11),c(12);var e=c(1),n=c(2),o=c(3),r=c(4),i=c(5),a=c(6),l=c(7);t(window).on("load",function(){console.log("Rendered"),console.log("jquery is ready"),Object(e.a)(),Object(n.a)(),Object(o.a)(),Object(r.a)(),Object(i.a)(),Object(a.a)(),Object(l.a)()})}.call(this,c(0))},,function(t,e,n){}]);
//# sourceMappingURL=main.bundle.js.map