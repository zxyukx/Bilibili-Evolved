!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["feeds/disable-details"]=t():e["feeds/disable-details"]=t()}(self,(function(){return function(){var e,t,n={840:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,"[data-module=desc],\n.card[data-did] .content {\n  cursor: text;\n}\n[data-module=desc] .details,\n.card[data-did] .content .details {\n  color: #222;\n  font-size: 12px;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n  line-height: 22px;\n}\nbody.dark [data-module=desc] .details,\nbody.dark .card[data-did] .content .details {\n  color: #eee;\n}",""]),e.exports=o},274:function(e,t,n){var o=n(645)((function(e){return e[1]}));o.push([e.id,".card[data-did] .content .details {\n  display: none;\n}",""]),e.exports=o},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},94:function(e,t,n){var o=n(840);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},377:function(e,t,n){var o=n(274);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},23:function(e){"use strict";e.exports=coreApis.componentApis.feeds.api},163:function(e){"use strict";e.exports=coreApis.style}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},r.d(i,a),i},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){"use strict";r.d(i,{component:function(){return s}});var e=r(23),t=coreApis.utils.urls;let n=!0;const o="disable-feeds-details-style",a=async()=>{const{addImportantStyle:e}=await Promise.resolve().then(r.t.bind(r,163,23)),{default:t}=await Promise.resolve().then(r.t.bind(r,94,23));e(t,o)},s={name:"disableFeedsDetails",displayName:"禁止跳转动态详情",tags:[componentsTags.feeds],urlInclude:t.feedsUrls,description:{"zh-CN":"禁止动态点击后跳转详情页, 方便选择其中的文字."},entry:async()=>{const{addImportantStyle:t}=await Promise.resolve().then(r.t.bind(r,163,23)),{forEachFeedsCard:o}=await Promise.resolve().then(r.t.bind(r,23,23)),{default:i}=await Promise.resolve().then(r.t.bind(r,377,23));t(i,"disable-feeds-details-init-style"),a();o({added:t=>{const{element:o}=t;o.addEventListener("click",(e=>{if(e.ctrlKey||!n)return;const t=dqa(o,'.content, .bili-dyn-content [data-module="desc"] .bili-rich-text'),r=e.target;if(r.hasAttribute("click-title"))return;dqa(o,".im-popup").some((e=>e.contains(r)))||t.some((e=>e===r||e.contains(r)))&&e.stopImmediatePropagation()}),{capture:!0});const r=dq(o,".post-content, .bili-dyn-content");if(!r)return;if(![".video-container",".bangumi-container",".media-list",".article-container"].some((e=>dq(r,e)))&&!dq(r,".details")&&(r.classList.contains("repost")||t.type===e.feedsCardTypes.repost)){const e=dq(r,".content, .bili-dyn-content__orig__desc");if(!e)return;const t=document.createElement("div");t.classList.add("details"),t.setAttribute("click-title","详情"),t.innerHTML='\n        详情<i class="mdi mdi-chevron-right" click-title></i>\n      ',e.insertAdjacentElement("beforeend",t)}}})},unload:()=>{document.getElementById(o)?.remove(),n=!1},reload:()=>{a(),n=!0},commitHash:"2448e6b05c4b3e93de47eef7f9924e3bc77b303f",coreVersion:"2.1.8"}}(),i=i.component}()}));