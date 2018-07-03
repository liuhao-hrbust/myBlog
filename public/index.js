!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=14)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=s(e(13)),i=s(e(8)),a=s(e(4));function s(n){return n&&n.__esModule?n:{default:n}}var l={"/home":o.default,"/blog":i.default,"/contact":a.default},c=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}return r(n,[{key:"start",value:function(){var n=this;window.addEventListener("popstate",function(){n.load(location.pathname)}),this.load(location.pathname)}},{key:"go",value:function(n){history.pushState({},"",n),this.load(n)}},{key:"load",value:function(n){"/"===n&&(n="/home"),(new l[n]).mount(document.body)}}]),n}();t.default=new c},function(n,t,e){var r={},o=function(n){var t;return function(){return void 0===t&&(t=n.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var t={};return function(n){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),a=null,s=0,l=[],c=e(9);function u(n,t){for(var e=0;e<n.length;e++){var o=n[e],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:s}}}}function d(n,t){for(var e=[],r={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):e.push(r[a]={id:a,parts:[s]})}return e}function f(n,t){var e=i(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),l.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(n.insertInto+" "+n.insertAt.before);e.insertBefore(t,o)}}function p(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=l.indexOf(n);t>=0&&l.splice(t,1)}function h(n){var t=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),v(t,n.attrs),f(n,t),t}function v(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,r,o,i;if(t.transform&&n.css){if(!(i=t.transform(n.css)))return function(){};n.css=i}if(t.singleton){var l=s++;e=a||(a=h(t)),r=g.bind(null,e,l,!1),o=g.bind(null,e,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),f(n,t),t}(t),r=function(n,t,e){var r=e.css,o=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=c(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,t),o=function(){p(e),e.href&&URL.revokeObjectURL(e.href)}):(e=h(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){p(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=d(n,t);return u(e,t),function(n){for(var o=[],i=0;i<e.length;i++){var a=e[i];(s=r[a.id]).refs--,o.push(s)}n&&u(d(n,t),t);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete r[s.id]}}}};var m=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}();function g(n,t,e,r){var o=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(r),i=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(i).concat([o]).join("\n")}return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];"number"==typeof a[0]&&r[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(n,t,e){n.exports=e.p+"07de41263b5bc58f66540d87ac46102e.jpg"},function(n,t,e){"use strict"},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"",""])},function(n,t,e){var r=e(5);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t){n.exports=""},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=(i(e(0)),i(e(7)));function i(n){return n&&n.__esModule?n:{default:n}}e(6);var a=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}return r(n,[{key:"mount",value:function(n){document.title="blog",n.innerHTML=o.default}}]),n}();t.default=a},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(n,t,e){(n.exports=e(2)(!1)).push([n.i,'img {\n  padding: 0;\n  margin: 0;\n}\n.transparent {\n  background-color: transparent;\n  /*border-width: initial;*/\n  /*border-style: none;*/\n  /*border-color: initial;*/\n  /*border-image: initial;*/\n  padding: 10px;\n  position: absolute;\n  top: 0;\n}\nhtml {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  position: relative;\n  font-family: "lucida grande", "lucida sans unicode", lucida, helvetica,\n    "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;\n  color: #333;\n  width: 100%;\n  height: 100%;\n}\n\n.clearfix:after {\n  content: "";\n  height: 0;\n  line-height: 0;\n  display: block;\n  visibility: hidden;\n  clear: both;\n}\n\n.clearfix {\n  zoom: 1;\n}\na {\n  text-decoration: none;\n}\n\n.name {\n  float: left;\n}\n\nnav .blog {\n  float: right;\n}\n\nnav .project {\n  float: right;\n}\n\n.w {\n  position: relative;\n  width: 1500px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\nnav {\n  z-index: 1000;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\nnav > div {\n  padding: 5px 10px;\n  font-size: 20px;\n}\n\nnav > div > a {\n  color: white;\n}\n\n.big-banner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.bk-left {\n  background-color: rgba(255, 138, 0, 0.8);\n  /*display: none;*/\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  margin-right: 50%;\n}\n\n.bk-right {\n  background-color: rgba(255, 98, 77, 0.8);\n  /*display: none;*/\n  position: absolute;\n  width: 50%;\n  height: 100%;\n  left: 50%;\n}\n\n.discrib {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  height: 100%;\n  text-align: center;\n  margin-left: -120px;\n  margin-top: 20px;\n  color: #ffffff;\n  transition: all 1s;\n  left: 50%;\n}\n\n.discrib_active {\n  opacity: 1;\n  margin-top: 50px;\n  z-index: 6;\n}\n\n.bk-right .discrib_r img,\n.bk-left .discrib_l img {\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n  display: inline-block;\n  overflow: hidden;\n}\n.onr {\n  background-color: rgba(255, 138, 0, 0.7);\n}\n.onl {\n  background-color: rgba(255, 98, 77, 0.7);\n}\n.door {\n  height: 100%;\n  position: absolute;\n  z-index: 5;\n  width: 0%;\n  transition: width 0.3s;\n}\n\n.active_door {\n  width: 100%;\n}\n\n.round {\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  top: 50%;\n  margin-top: -40px;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.3);\n  z-index: 3;\n  text-align: center;\n  cursor: pointer;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  line-height: 40px;\n}\n\n.round-l {\n  width: 80px;\n\n  left: 25%;\n  margin-left: -40px;\n  color: #ff8a00;\n}\n\n.round-r {\n  left: 75%;\n  margin-left: -40px;\n  color: #ff8a00;\n  /*transition: transform 0.2s;*/\n  /*transform: scale(1, 1);*/\n}\n\n.round_active {\n  transform: scale(0, 0);\n}\n\n#home_page_video {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.round:hover {\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1),\n    0 8px 8px rgba(0, 0, 0, 0.1), 0 12px 12px rgba(0, 0, 0, 0.1);\n  transform: scale(1.05) translateY(-5px) perspective(300px) rotateX(20deg);\n}\n',""])},function(n,t,e){var r=e(10);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(1)(r,o);r.locals&&(n.exports=r.locals)},function(n,t,e){n.exports='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <title>Title</title>\n    \x3c!-- <link rel="stylesheet" href="first/style/base.css">\n    <link rel="stylesheet" href="first/style/index.css"> --\x3e\n</head>\n\n<body>\n    <div class="w ">\n        <nav class="transparentt clearfix">\n            <div class="name">\n                <a href="#">Laohoo</a>\n            </div>\n            <div class="blog">\n                <a class="toBlog">Blog</a>\n            </div>\n            <div class="project">\n                <a class="toProject" href="https://github.com/liuhao-hrbust/">Project</a>\n            </div>\n\n        </nav>\n    </div>\n\n    <div class="big-banner">\n        <video id="home_page_video" src="../../source/Home_Page_Video.webm" autoplay="autoplay" loop="loop" cover></video>\n        <div class="bk-left">\n            <div class="discrib_l discrib">\n                <img src="'+e(3)+'" alt="头像">\n                <h4>我是刘浩</h4>\n                <p>大三学生</p>\n                <p>努力到无能为力，拼搏到感动自己</p>\n            </div>\n            <div class="door onl"></div>\n\n        </div>\n\n        <div class="bk-right">\n            <div class="discrib_r discrib">\n                <img src="'+e(3)+'" alt="头像">\n                <h4>我是刘浩</h4>\n                <p>大三学生</p>\n                <p>努力到无能为力，拼搏到感动自己</p>\n            </div>\n            <div class="door onr"></div>\n        </div>\n        <div class="round-l round">\n            <p>Blog</p>\n        </div>\n        <div class="round-r round">\n            <p>Projects</p>\n        </div>\n    </div>\n\n</body>\n\n</html>'},function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),o=a(e(0)),i=a(e(12));function a(n){return n&&n.__esModule?n:{default:n}}e(11);var s=function(){function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)}return r(n,[{key:"mount",value:function(n){document.title="home",n.innerHTML=i.default,n.querySelector("toBlog").addEventListener("click",function(){o.default.go("/blog")})}}]),n}();t.default=s;var l=f("round-l",0),c=f("round-r",0),u=f("discrib_r",0),d=f("discrib_l",0);function f(n,t){return document.getElementsByClassName(n)[t]}l.onmouseover=function(){c.className="round-r round_active round",f("onr",0).className="door onr active_door",u.className="discrib_r discrib_active discrib"},l.onmouseleave=function(){f("onr",0).className="onr door",c.className="round-r round",u.className="discrib_r discrib"},c.onmouseover=function(){l.className="round-l round_active round",f("onl",0).className="door onl active_door",d.className="discrib_l discrib_active discrib"},c.onmouseleave=function(){f("onl",0).className="onl door",l.className="round-l round",d.className="discrib_l discrib"},l.onclick=function(){window.open("../home/index.html","_self")},c.onclick=function(){window.open("https://github.com/liuhao-hrbust/","_self")}},function(n,t,e){"use strict";(function(n){return n&&n.__esModule?n:{default:n}})(e(0)).default.start()}]);