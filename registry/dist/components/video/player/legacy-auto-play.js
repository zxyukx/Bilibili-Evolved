!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/legacy-auto-play"]=t():e["video/player/legacy-auto-play"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return c}});var o=coreApis.observer,n=coreApis.spinQuery,a=coreApis.utils,i=coreApis.utils.urls;const c={name:"legacyAutoPlay",displayName:"传统连播模式",description:"模拟传统的多 P 连播策略: 仅连播视频的分 P 和番剧的多集, 最后 1P 放完禁止连播其他推荐视频.",tags:[componentsTags.video],urlInclude:i.videoUrls,entry:async()=>{const e={enable:[".multi-page .next-button",".player-auxiliary-autoplay-switch input"],disable:[".recommend-list .next-button"]},t=[()=>Boolean(dq(".multi-page .list-box li.on:last-child"))];await(0,a.playerReady)();const i=async()=>{const o=await(0,n.select)([...e.disable,...e.enable].join(","));if(!o)return;var a;(e.enable.some((e=>o.matches(e)))&&t.every((e=>!e())))!==(a=o,Boolean(a.querySelector(".switch-button.on")||a.matches(":checked")))&&o.click()};(0,o.videoChange)((async()=>{i();(await(0,n.select)(".bilibili-player-video video"))?.addEventListener("play",i,{once:!0})}))},commitHash:"7c1c01fd7ba7f8d4fc935026bf95e889092f26d1"};return t=t.component}()}));