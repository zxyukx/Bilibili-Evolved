!function(o,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/download/motrix-output"]=t():o["video/download/motrix-output"]=t()}(self,(function(){return function(){"use strict";var o={d:function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o:function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}},t={};o.d(t,{plugin:function(){return n}});var e=coreApis.toast;const n={name:"downloadVideo.outputs.motrix",displayName:"下载视频 - Motrix 输出支持",description:"为下载视频增加 Motrix 输出支持.",setup:({addData:o})=>{o("downloadVideo.outputs",(o=>{o.push({name:"motrix",displayName:"Motrix",description:"调用 Motrix 下载.",runAction:async o=>{const t=o.infos.flatMap((o=>o.titledFragments));try{const o=new URLSearchParams({uris:t.map((o=>o.url)).join("\n"),referer:document.URL.replace(window.location.search,"")});window.open(`motrix://new-task?${o.toString()}`,"_self")}catch(o){e.Toast.error(String(o),"发生错误")}}})}))},commitHash:"2448e6b05c4b3e93de47eef7f9924e3bc77b303f",coreVersion:"2.1.8"};return t=t.plugin}()}));