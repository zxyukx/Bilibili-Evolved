!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/intersection-actions"]=t():e["video/player/intersection-actions"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return s}});var n,o=coreApis.componentApis.video.playerAgent,i=coreApis.componentApis.video.playerLight,a=coreApis.observer,r=coreApis.settings;!function(e){e.Top="视频顶部",e.Medium="视频中间",e.Bottom="视频底部"}(n||(n={}));const s={name:"playerIntersectionActions",author:{name:"FoundTheWOUT",link:"https://github.com/FoundTheWOUT"},tags:[componentsTags.video],entry:async({settings:{options:e},metadata:t})=>{const s=e,{query:{video:p}}=o.playerAgent,d=await p.element(),u=document.getElementById("video-player")??(dq(".player-wrap")||dq(".player-module"));let c,l=!0;function m(e){switch(e){case n.Top:return 1;case n.Medium:return.5;case n.Bottom:return 0;default:return.5}}function f(){c.observe(u)}function y(){c.unobserve(u)}const g=e=>new IntersectionObserver((([e])=>{e.isIntersecting?l||(l=!0,s.pause&&d.paused&&d.play(),s.light&&(0,r.getComponentSettings)("playerAutoLight").enabled&&!s.pause&&!d.paused&&(0,i.lightOff)()):(d.paused||(l=!1),s.pause&&!d.paused&&d.pause(),s.light&&(0,r.getComponentSettings)("playerAutoLight").enabled&&!s.pause&&(0,i.lightOn)())}),{threshold:m(e||s.triggerLocation)});(0,r.addComponentListener)(`${t.name}.triggerLocation`,(e=>{y(),c=g(e),f()})),c=g(),(0,a.videoChange)((async()=>{o.playerAgent.isAutoPlay()&&f(),d.addEventListener("play",f),d.addEventListener("ended",y)}))},displayName:"播放器位置动作",description:{"zh-CN":"设置当播放器移出视图的位置变化时执行的动作."},options:{triggerLocation:{defaultValue:n.Medium,displayName:"触发位置",dropdownEnum:n},pause:{defaultValue:!1,displayName:"自动暂停"},light:{defaultValue:!0,displayName:"自动开灯"}},commitHash:"7c1c01fd7ba7f8d4fc935026bf95e889092f26d1"};return t=t.component}()}));