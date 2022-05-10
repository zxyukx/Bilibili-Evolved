!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/speed"]=t():e["video/player/speed"]=t()}(self,(function(){return function(){"use strict";var e={d:function(t,s){for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{plugin:function(){return $}});var s=coreApis.toast,n=coreApis.componentApis.video.playerAgent,r=coreApis.lifeCycle,o=coreApis.observer,i=coreApis.utils,a=coreApis.utils.sort,c=coreApis.settings;const l=e=>"function"==typeof e?{next:e}:e,d=e=>function e(t,s,n){let r=!1;const o=[],i=[];let a=!1;const d=()=>{for(;o.length;)o.pop()();i.length=0,a=!0},p=e=>{a||(i.forEach((t=>{t.error?.(e),(0,c.getGeneralSettings)().devMode&&console.error(e)})),d())},u=e=>{a||i.forEach((t=>{try{t.next(e)}catch(e){p(e)}}))},b=()=>{i.forEach((e=>{e.complete?.()})),d()},h=()=>{if(r)return;const e=t?.({next:u,error:p,complete:b});e&&o.push(e),r=!0},m=e=>null==e?null:(i.push(e),()=>{lodash.pull(i,e)}),y=(...t)=>0===t.length?{subscribe:e=>{const t=m(l(e));return(n?.connect??h)(),t},pipe:y,next:u,error:p,complete:b,...n}:e(t[0],{subscribe:m},n||{connect:h,next:u}).pipe(...t.slice(1));if(s){const e=t?.({subscribe:e=>s.subscribe({error:p,complete:b,...l(e)}),next:u,error:p,complete:b});e&&o.push(e)}return y()}(e),p=(e,t)=>d((({next:s})=>(e.addEventListener(t,s),()=>e.removeEventListener(t,s)))),u=e=>new Promise(((t,s)=>{const n=e.subscribe({next:e=>{t(e),n()},error:()=>{s(),n()},complete:()=>{s(),n()}})})),b=e=>(...t)=>{Promise.resolve().then((()=>e(...t)))},h=(...e)=>d((({next:t,error:s,complete:n})=>(e=>{const t=new Set;return e((e=>{lodash.castArray(e).forEach((e=>{t.add(e)}))})),()=>{t.forEach((e=>{e()}))}})((r=>{const o=[];let i=0;r(e.map(((r,a)=>{return r.pipe((c=b,({subscribe:e,next:t,complete:s,error:n})=>{e(lodash.mapValues({next:t,complete:s,error:n},(e=>c(e))))})).subscribe({next:s=>{o[a]=s,o.reduce((e=>e+1),0)===e.length&&t(o.slice())},complete:()=>{i++,i===e.length&&n()},error:s});var c}))),r((()=>{o.length=0,i=0}))})))),m=e=>({subscribe:t,next:s,error:n})=>{t(lodash.debounce((e=>{try{s(e)}catch(e){n(e)}}),e))},y=e=>({subscribe:t,next:s})=>{t((t=>{e(t)&&s(t)}))},f=(...e)=>({next:t,subscribe:s})=>{let n=!1;s((s=>{n||e.forEach((e=>t(e))),t(s),n=!0}))};var v=coreApis.pluginApis.data;const g=(e,t)=>{const s=t=>{(0,v.registerAndGetData)(e,t)[0]=t},n=(0,v.getData)(e);if(n.length)return[n[0],s];if(t){const e=t();return s(e),[e,s]}return[void 0,s]},w=(e,t=!1)=>t&&1===e?"倍速":Math.trunc(e)===e?`${e}.0x`:`${e}x`,E=e=>{if("倍速"===e)return 1;const t=/([0-9]*[.]?[0-9]+)x/.exec(e);if(t)return parseFloat(t[1]);throw new Error(`unknown speed text: ${e}`)};const x=n.playerAgent.provideCustomQuery({video:{speedMenuList:".bilibili-player-video-btn-speed-menu",speedMenuItem:".bilibili-player-video-btn-speed-menu-list",speedNameBtn:".bilibili-player-video-btn-speed-name",speedContainer:".bilibili-player-video-btn-speed",active:".bilibili-player-active",show:".bilibili-player-speed-show"},bangumi:{speedMenuList:".squirtle-speed-select-list",speedMenuItem:".squirtle-select-item",speedNameBtn:".squirtle-speed-select-result",speedContainer:".squirtle-speed-wrap",active:".active",show:".bilibili-player-speed-show"}});let S;!function(e){e[e.MIN=0]="MIN",e[e.CURRENT=1]="CURRENT",e[e.MAX=2]="MAX"}(S||(S={}));const N=(e,t,s)=>{const n=new MutationObserver(s);return n.observe(e,t),n},k=([e,t])=>{if(!e)throw new Error("speed container element not found!");if(!t)throw new Error("video element not found!");const s=e.querySelector(x.custom.speedNameBtn.selector),n=e.querySelector(x.custom.speedMenuList.selector);let r,o,c;const l=d(),p=d().pipe((({subscribe:e,next:t})=>{let s,n=!0;e((e=>{(n||s!==e)&&(n=!1,s=e,t(e))}))}));p.pipe(f(void 0),(({subscribe:e,next:t})=>{const s=[];return e((e=>{2===s.length&&s.shift(),s.push(e),2===s.length&&t(s.slice())})),()=>{s.length=0}})).subscribe((([e,t])=>{o=e,r=t}));const u=e=>{if(e)switch(e.nodeType){case Node.TEXT_NODE:p.next(E(e.data));break;case Node.ELEMENT_NODE:p.next(E(e.innerHTML));break;default:console.warn("The target parameter of updateActiveVideoSpeed must be a Node, and the node type must be one of TEXT_NODE and ELEMENT_NODE")}},b=()=>{c=lodash([...n.children]).map((e=>lodash.attempt((()=>E(e.textContent))))).reject((e=>lodash.isError(e))).sort((0,a.ascendingSort)()).value()};u(s),b();const h=N(n,{childList:!0,attributes:!0},(e=>{const{attributes:t=[],childList:s=[]}=lodash.groupBy(e,"type");s.length&&b(),l.next({attributes:t,childList:s})})),m=N(s,{childList:!0,subtree:!0},(e=>{e.forEach((e=>{const[t]=e.addedNodes;u(t)}))}));return{containerElement:e,videoElement:t,nameBtnElement:s,menuListElement:n,query:e=>{return(0,i.des)(`./*[contains(@class, "${t=x.custom.speedMenuItem.selector,t.replace(/^\./,"")}") and normalize-space()="${w(e)}"]`,n);var t},dispose:()=>{h.disconnect(),m.disconnect()},activeVideoSpeed$:p,menuListElementMutations$:l,getActiveVideoSpeed:()=>r,getOldActiveVideoSpeed:()=>o,getAvailableSpeedValues:()=>c}},C=e=>{const{videoElement:t,menuListElement:s}=e,n=p(s,"click").pipe((r=e=>{const{innerText:t,innerHTML:s}=e.target,n=t.trim()||s.trim();return lodash.attempt((()=>E(n)))},({subscribe:e,next:t})=>{e((e=>{t(r(e))}))}),y((e=>!lodash.isError(e))));var r;const o=d((({next:e})=>{let s=t;do{s=Object.getPrototypeOf(s)}while(null===s||!Object.prototype.hasOwnProperty.call(s,"playbackRate"));const n=Object.getOwnPropertyDescriptor(s,"playbackRate");return Object.defineProperty(s,"playbackRate",{set(t){n.set.call(this,t),e(t)}}),()=>{Object.defineProperty(s,"playbackRate",n)}})),i=n.pipe((({subscribe:e,next:t})=>{let s,n=!0;e((e=>{(n||s!==e)&&(n=!1,s=e,t(e))}))})),a=o.pipe((({subscribe:e,next:t})=>{let s,n=!0;e((e=>{(n||s!==e)&&(n=!1,s=e,t(e))}))})),c=d((({next:e})=>{const t=h(i,a);return t.subscribe((([t,s])=>{t===s&&e(s)})),()=>t.complete()})).pipe((({subscribe:e,next:t})=>{let s,n=!0;e((e=>{(n||s!==e)&&(n=!1,s=e,t(e))}))}));let l;a.pipe(m(200),f(void 0),(({subscribe:e,next:t})=>{const s=[];return e((e=>{2===s.length&&s.shift(),s.push(e),2===s.length&&t(s.slice())})),()=>{s.length=0}})).subscribe((([e])=>{l=e}));const u={menuListElementClickSpeed$:n,menuListElementClickSpeedChange$:i,playbackRate$:o,playbackRateChange$:a,videoSpeedChange$:c};return{...e,...u,dispose:()=>{lodash.values(u).forEach((e=>{e.complete()})),e.dispose()},getOldPlaybackRate:()=>l}},[T]=g("speed.NoSuchSpeedMenuItemElementError",(()=>class extends Error{constructor(e){const t=lodash.attempt((()=>w(e))),s=lodash.isError(t)?String(e):String(t);var n,r,o;super(`There is no such speed menu item as ${s}`),this.speed=e,o=void 0,(r="formattedSpeed")in(n=this)?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,this.formattedSpeed=s}})),A=e=>{const{query:t,videoElement:s,videoSpeedChange$:n,getOldActiveVideoSpeed:r,getAvailableSpeedValues:o,getActiveVideoSpeed:i}=e,a=async(e,r=200)=>{const o=t(e);if(null==o)throw new T(e);o.click();const i=t=>{if((t??s.playbackRate)!==e)throw new Error(`failed to set ${w(e)} video speed.`)},a=[u(n.pipe(m(Math.max(0,r||0))))];r>0&&a.push(new Promise(((e,t)=>setTimeout((()=>setTimeout(t,r)))))),await Promise.all(a).then(i).catch(i)},c=async()=>{await a(1)},l=async(e,t)=>{if(lodash.isNil(e)&&(e=!1),"boolean"==typeof e)e||1===s.playbackRate?await a(r()):await c();else{const s=o();switch(t){case S.MIN:await a(s[e]);break;case S.MAX:await a(s[s.length-1+e]);break;case S.CURRENT:default:{const t=s.indexOf(i());if(-1===t)throw new Error("Unexpected Error: The available speed values do not include the active speed value, this should be a bug, please report the issue on github!");await a(s[t+e])}}}},d=async e=>{try{await l(e,S.CURRENT)}catch(e){if(console.warn(e),!(e instanceof T))throw e}};return Object.assign(e,{set:a,force:async e=>{s.playbackRate=e},reset:c,toggle:l,step:d,increase:async()=>{await d(1)},decrease:async()=>{await d(-1)}})},O=()=>g("speed.speedContext"),L=()=>g("speed.buildArguments$",(()=>{return d().pipe((e=e=>e.settings.enabled,({subscribe:t,next:s})=>{const n=new Set;return t((t=>{const r=n.size;e(t)?n.add(t):n.delete(t),n.size!==r&&s([...n])})),()=>{n.clear()}}));var e})),M=async(e=lodash.identity)=>{const[t,s]=O();if(t)return t;let n,i;const[a]=g("lifeCycleComponentLoaded$",(()=>p(unsafeWindow,r.LifeCycleEventTypes.ComponentsLoaded))),[c]=L(),[l]=g("speed.videoChange$",(()=>((e,...t)=>d((({next:s})=>{e(...t,s)})))(o.videoChange).pipe(y((({aid:e,cid:t})=>e||t))))),[b]=g("speed.speedContext$",(()=>d((({next:t})=>h(l,c,a).subscribe((([s,r])=>{const[o]=O();o?.dispose(),i?.("context update");const a=new Promise(((e,t)=>{n=e,i=t}));Promise.all([Promise.all([x.custom.speedContainer(),x.query.video.element()]).then(n),a]).then((([,e])=>e)).then(k).then(C).then(A).then((e=>Object.assign(e,{videoIdObject:s,speedContext$:b,videoChange$:l}))).then(e(r)).then(t).catch((e=>console.error(e)))}))))));return b.subscribe(s),u(b)},$={name:"speed.keymap",displayName:"视频倍速 - 快捷键支持",author:{name:"JLoeve",link:"https://github.com/LonelySteve"},description:"\n\n为操作视频倍速提供快捷键支持：\n\n- 提高倍速\n- 降低倍速\n- 切换倍速\n\n若添加并启用了记忆倍速组件，则还会增加一个快捷键：\n\n- 清除倍速记忆\n  ",setup:({addData:e,addHook:t})=>{const n=e=>async t=>{const s=await M();return await e(s),t.showTip(w(s.videoElement.playbackRate),"mdi-fast-forward"),!0};e("keymap.actions",(e=>{Object.assign(e,{videoSpeedIncrease:{displayName:"提高倍速",run:n((({increase:e})=>e()))},videoSpeedDecrease:{displayName:"降低倍速",run:n((({decrease:e})=>e()))},videoSpeedToggle:{displayName:"切换倍速",run:n((({toggle:e})=>{e()}))}})})),e("keymap.presets",(e=>{e.videoSpeedIncrease="shift > 》 arrowUp",e.videoSpeedDecrease="shift < 《 arrowDown",e.videoSpeedToggle="shift ? ？"})),t("speed.component.rememberVideoSpeed",{after:t=>{e("keymap.actions",(e=>{e.videoSpeedForget={displayName:"清除倍速记忆",run:lodash.debounce(n((async()=>{t.settings.enabled?t.options.individualRemember?(t.forgetSpeed(),await t.resetVideoSpeed(),s.Toast.success("已清除当前视频倍速记忆值",t.metadata.displayName,3e3)):s.Toast.error("选项「各视频分别记忆」已禁用，不能清除当前视频倍速记忆值",t.metadata.displayName,5e3):s.Toast.error("组件已禁用，不能清除当前视频倍速记忆值",t.metadata.displayName,5e3)})),200)}})),e("keymap.presets",(e=>{e.videoSpeedForget="shift : ："}))}})},commitHash:"54f9d7ce46e5caa2e9067746d90aeb107ea386a1",coreVersion:"2.1.8"};return t=t.plugin}()}));