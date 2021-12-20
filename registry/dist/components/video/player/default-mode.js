!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/default-mode"]=t():e["video/player/default-mode"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{component:function(){return s}});var n=coreApis.componentApis.video.playerAgent,o=coreApis.spinQuery,l=coreApis.utils,r=coreApis.utils.urls;let a;!function(e){e.Normal="常规",e.Wide="宽屏",e.WebFullscreen="网页全屏",e.Fullscreen="全屏"}(a||(a={}));const s={name:"defaultPlayerMode",displayName:"默认播放器模式",entry:async({settings:{options:e}})=>{if((0,l.isEmbeddedPlayer)())return;await(0,l.playerReady)();const t=new Map([[a.Normal,none],[a.Wide,()=>{n.playerAgent.widescreen()}],[a.WebFullscreen,()=>{n.playerAgent.webFullscreen()}],[a.Fullscreen,async()=>{null!==await(0,o.sq)((()=>dq(n.playerAgent.query.video.element.selector)),(e=>null!==e&&4===e.readyState&&"complete"===document.readyState&&document.hasFocus()))?n.playerAgent.fullscreen():console.warn("[默认播放器模式] 未能应用全屏模式, 等待超时.")}]]),r=await n.playerAgent.query.video.element();if(!r)return;const s=t.get(e.mode);e.applyOnPlay&&!n.playerAgent.isAutoPlay()?r.addEventListener("play",s,{once:!0}):s()},tags:[componentsTags.video],description:{"zh-CN":"控制是否使用默认播放器模式, 可以为`常规`, `宽屏`, `网页全屏`或`全屏`. 注意: 不能和其他影响定位的功能一同使用, 例如播放器定位. (相关讨论: [#483](https://github.com/the1812/Bilibili-Evolved/issues/483))","en-US":"Set the default player mode. Could be `Normal`, `Widescreen`, `Web fullscreen` or `Fullscreen`.","ja-JP":"デフォルト・プレーヤー・モードが使用するかどうかを制御する、 例えば`常规`、`宽屏`、 `网页全屏`か`全屏`."},options:{mode:{defaultValue:a.Normal,displayName:"模式选择",dropdownEnum:a},applyOnPlay:{defaultValue:!1,displayName:"播放时应用"}},urlInclude:r.allVideoUrls,commitHash:"7c1c01fd7ba7f8d4fc935026bf95e889092f26d1"};return t=t.component}()}));