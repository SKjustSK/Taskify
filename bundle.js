(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(436),c=n(417),d=n.n(c),l=new URL(n(302),n.b),u=new URL(n(629),n.b),m=i()(a());m.i(s.A);var h=d()(l),f=d()(u);m.push([e.id,`body {\n    display: grid;\n    grid-template-columns: 20% 1fr;\n    grid-template-rows: 1fr 5%;\n\n    font-family: var(--font), Arial, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    box-sizing: border-box;\n}\n\n/* Side bar + Nav bar*/\n.side-bar {\n    display: flex;\n    flex-direction: column;\n    padding: var(--side-bar-padding);\n    padding-top: calc(var(--side-bar-padding)*2);\n    background-color: var(--side-bar-color);\n    gap: 40px;\n    color: var(--nav-bar-text-color);\n}\n\n.brand-name {\n    display: flex;\n    align-items: center;\n    font-size: 4em;\n    height: 70px;\n    color: var(--brand-name-color);\n}\n\n.nav-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n.common-use-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.common-use-item,\n.category-item {\n    color: var(--nav-bar-text-color);\n    padding: var(--nav-bar-text-padding);\n    font-size: 1.1em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.common-use-item:hover,\n.category-item:hover {\n    background-color: var(--hover-color);\n}\n\n.categories-wrapper {\n    display: flex;\n    flex-direction: column;\n}\n\n.categories-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.categories-title {\n    font-size: 1.3em;\n    font-weight: 600;\n    padding: var(--nav-bar-text-padding);\n    padding-left: calc(-1*var(--nav-bar-text-padding));\n\n    color: var(--category-title-color);\n}\n\n.add-category {\n    display: flex;\n    align-items: center;\n    color: var(--nav-bar-text-color);\n    font-size: 1.8em;\n    aspect-ratio: 1 / 1;\n    padding-bottom: 0.195em;\n    cursor: pointer;\n    border-radius: 5px;\n    transition: var(--transition-time);\n}\n\n.add-category:hover {\n    background-color: var(--darker-hover-color);\n    transform: scale(1.2);\n}\n/**/\n\n\n/* Footer */\n.footer {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;    \n\n    font-size: 0.9em;\n    background-color: var(--footer-color);\n    color: var(--nav-bar-text-color);\n    gap: 0.19em;\n    a {\n        color: var(--nav-bar-text-color);\n    }\n}\n/**/\n\n\n/* Main content */\n.main-content-container {\n    display: flex;\n    padding: var(--side-bar-padding);\n    background-color: var(--main-content-color);\n}\n\n.main-content {\n    flex-grow: 1;\n    display: flex;\n    flex-direction: column;\n    margin: 3% 10%;\n}\n\n/* Title */\n.title-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: var(--task-card-padding);\n}\n\n.title-container .category-title {\n    font-size: 2.7em;\n}\n\n.title-container .delete-category {\n    display: flex;\n    align-items: center;\n    gap: 7px;\n    padding: var(--task-card-padding);\n    font-size: 0.9em;\n    border-radius: 5px;\n    margin-top: var(--task-card-padding);\n}\n\n.title-container .delete-category:hover {\n    background-color: #fee2e2;\n    color: #d6352a;\n    .icon-container {\n        /*same color as the above color, for delete icon svg*/\n        filter: invert(32%) sepia(75%) saturate(1355%) hue-rotate(335deg) brightness(89%) contrast(111%);\n    }\n}\n\n.title-container .delete-category .icon-container {\n    background-image: url(${h});\n    background-size: contain;\n    height: 1em;\n    width: 1em;\n\n    /*same color as color of delete category tex*/\n    filter: invert(46%) sepia(26%) saturate(7458%) hue-rotate(336deg) brightness(92%) contrast(108%);\n}\n\n.title-container .delete-category .delete-text {\n    color: var(--delete-color);\n}\n/**/\n\n/* Add task */\n.add-task-container {\n    display: flex;\n    align-self: start;\n    width: 10%;\n    gap: 3px;\n    padding: calc(0.5*var(--task-card-padding)) var(--task-card-padding);\n    cursor: pointer;\n}\n\n.add-task-icon {\n    display: flex;\n    align-items: center;\n    font-size: 1.3em;\n    aspect-ratio: 1 / 1;\n    border-radius: 100px;\n    color: var(--grey-500);\n    padding: calc(-1*1em);\n    padding-left:  0.17em; \n    padding-bottom:  0.17em; \n}\n\n.add-task-text {\n    color: var(--grey-500);\n    font-weight: 500;\n}\n\n.add-task-container:hover {\n    .add-task-text {\n        color: var(--main-content-primary);\n    }\n    .add-task-icon {\n        background-color: var(--main-content-primary);\n        color: var(--main-content-color);\n    }\n}\n/**/\n\n/* Tasks */\n.tasks-container {\n    display: flex;\n    flex-direction: column;\n    padding: var(--task-card-padding);\n}\n\n.task-item {\n    display: flex;\n    flex-direction: column;\n    gap: var(--task-card-padding);\n    padding: calc(var(--task-card-padding)) 0;\n    padding-right: var(--task-card-padding);    \n    border-bottom: 2px solid var(--main-content-primary); \n    /* background-color: aquamarine; */\n}\n\n.task-info {\n    /* display: flex; */\n    gap: calc(1.5*var(--task-card-padding));\n\n    display: grid;\n    align-items: center;\n    grid-template-columns: 2em 1fr 1em 1em 1em;\n}\n\n.task-completion {\n    cursor: pointer;\n}\n\n.task-title {\n    font-size: 1.2em;\n    font-weight: 300;\n}\n\n.priority-circle {\n    height: 0.9em;\n    width: 0.9em;\n    aspect-ratio: 1 / 1;\n    border-radius: 100px;\n    border: 2px solid black;\n}\n\n.high {\n    background-color: red;\n}\n.medium {\n    background-color: yellow;\n}\n.low {\n    background-color: rgb(0, 255, 0);\n}\n\n.edit-task-icon-container {\n    background-image: url(${f});\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 1em;\n    width: 1em;\n    cursor: pointer;\n\n    filter: invert(32%) sepia(3%) saturate(2494%) hue-rotate(176deg) brightness(96%) contrast(87%);\n}\n\n.edit-task-icon-container:hover {\n    filter: none;\n}\n\n.delete-task-icon-container {\n    background-image: url(${h});\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 1em;\n    width: 1em;\n    cursor: pointer;\n\n    filter: invert(32%) sepia(3%) saturate(2494%) hue-rotate(176deg) brightness(96%) contrast(87%);\n}\n\n.delete-task-icon-container:hover {\n    filter: invert(46%) sepia(26%) saturate(7458%) hue-rotate(336deg) brightness(92%) contrast(108%);\n}\n\n.task-info-two {\n    display: flex;\n    justify-content: space-between;\n    align-items: end;\n    color: var(--grey-600);\n    padding-left: calc(4.7*var(--task-card-padding));\n}\n\n.task-info-two .deadline {\n    font-size: 0.85em;\n}\n\n.strike {\n    color: var(--grey-600);\n    text-decoration: line-through;\n}\n/**/\n\n/**/\n\nbutton {\n    /*to override the button styles*/\n    background: none;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    text-align: start;\n    cursor: pointer;\n    /**/\n}`,""]);const g=m},436:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap);"]),i.push([e.id,":root {\n    --font: 'Outfit';\n\n    --grey-500: #6b7280;\n    --grey-600: #4b5563;\n    --main-content-primary: #34aa8b;\n    --side-bar-color: #A2435C;\n    --main-content-color: #F6F6F4;\n    --hover-color: #b44c67;\n    --darker-hover-color: #b14b66;\n    --footer-color: #10173b;\n    --delete-color: #F44336;\n\n    --nav-bar-text-color: #F6F6F4;\n    --brand-name-color: var(--main-contenst-color);\n    --category-title-color: var(--main-content-color);\n\n    --side-bar-padding: 10px;\n    --nav-bar-text-padding: 0.4em;\n    --task-card-padding: 10px;\n\n    --transition-time: 0.2s;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var m=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(h);else{var f=a(h,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},302:(e,t,n)=>{e.exports=n.p+"e66c5ed99285fcbc564b.svg"},629:(e,t,n)=>{e.exports=n.p+"a26a28f37ce8a7f5f576.svg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),c=n.n(s),d=n(540),l=n.n(d),u=n(113),m=n.n(u),h=n(208),f={};f.styleTagTransform=m(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),t()(h.A,f),h.A&&h.A.locals&&h.A.locals;const g=class{constructor(e,t,n,r,a){this.title=e,this.desc=t,this.deadline=n,this.priority=r,this.completion=a}isEqual(e){return this.title===e.title&&this.desc===e.desc&&this.deadline.getTime()==e.deadline.getTime()&&this.priority===e.priority}markComplete(){this.completion=!0}markIncomplete(){this.completion=!1}},p=class{constructor(e){this.title=e,this.tasks=[]}addTask(e){for(let t of this.tasks)if(t.isEqual(e))return void console.log(`Task '${t.title}' already exists`);this.tasks.push(e)}removeTask(e){this.tasks=this.tasks.filter((t=>!t.isEqual(e)))}getTask(e){for(let t of this.tasks)if(t.isEqual(e))return t}},b="categories";function y(e){localStorage.setItem(b,JSON.stringify(e))}function w(){let e=JSON.parse(localStorage.getItem(b));for(let t in e){let n=e[t],r=new p(n.title);r.tasks=n.tasks.map((e=>new g(e.title,e.desc,new Date(e.deadline),e.priority,e.completion))),e[t]=r}return e}const v=(e,t)=>{let n=w(),r=n[e];void 0!==r?(r.addTask(t),y(n)):console.log(`Category '${e}' does not exist.`)},k=(e,t)=>{let n=w(),r=n[e];void 0!==r?(r.removeTask(t),y(n)):console.log(`Category '${e}' does not exist.`)},x=(e,t)=>{let n=w(),r=n[e];void 0!==r?(r.getTask(t).markComplete(),y(n)):console.log(`Category '${e}' does not exist.`)},M=(e,t)=>{let n=w(),r=n[e];void 0!==r?(r.getTask(t).markIncomplete(),y(n)):console.log(`Category '${e}' does not exist.`)},T="General",C=()=>{if(null===localStorage.getItem("categories")){let e={},t=new p(T);e[T]=t,y(e)}},S=e=>{let t=w();void 0===t[e]?(t[e]=new p(e),y(t)):console.log(`Category '${e}' already exists.`)},D=e=>{let t=w();void 0!==t[e]?(delete t[e],y(t)):console.log(`Category '${e}' does not exist.`)};function E(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function P(e,t){const n=E(e),r=E(t);return n.getTime()>r.getTime()}function L(e){const t=E(e);return t.setHours(0,0,0,0),t}function W(e,t){return+L(e)==+L(t)}let q={};function A(){return q}function F(e,t){const n=A(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=E(e),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}const O={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Y={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},j={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function z(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,a=n?.width?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{const t=e.defaultWidth,a=n?.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const H={ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function $(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;const i=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(s):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(s);let d;return d=e.valueCallback?e.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:t.slice(i.length)}}}const G={ordinalNumber:(_={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(_.matchPattern);if(!n)return null;const r=n[0],a=e.match(_.parsePattern);if(!a)return null;let o=_.valueCallback?_.valueCallback(a[0]):a[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:e.slice(r.length)}}),era:$({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:$({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:$({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:$({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:$({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var _;const B={code:"en-US",formatDistance:(e,t,n)=>{let r;const a=O[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Y,formatRelative:(e,t,n,r)=>j[e],localize:H,match:G,options:{weekStartsOn:0,firstWeekContainsDate:1}},Q=(Math.pow(10,8),6048e5),I=864e5;function X(e){const t=E(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function U(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function J(e){const t=E(e);return function(e,t){const n=L(e),r=L(t),a=+n-X(n),o=+r-X(r);return Math.round((a-o)/I)}(t,function(e){const t=E(e),n=U(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t))+1}function R(e){return F(e,{weekStartsOn:1})}function V(e){const t=E(e),n=t.getFullYear(),r=U(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=R(r),o=U(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=R(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function K(e){const t=E(e),n=+R(t)-+function(e){const t=V(e),n=U(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),R(n)}(t);return Math.round(n/Q)+1}function Z(e,t){const n=E(e),r=n.getFullYear(),a=A(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=U(e,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=F(i,t),c=U(e,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=F(c,t);return n.getTime()>=s.getTime()?r+1:n.getTime()>=d.getTime()?r:r-1}function ee(e,t){const n=E(e),r=+F(n,t)-+function(e,t){const n=A(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=Z(e,t),o=U(e,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),F(o,t)}(n,t);return Math.round(r/Q)+1}function te(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const ne={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return te("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):te(n+1,2)},d:(e,t)=>te(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>te(e.getHours()%12||12,t.length),H:(e,t)=>te(e.getHours(),t.length),m:(e,t)=>te(e.getMinutes(),t.length),s:(e,t)=>te(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return te(Math.trunc(r*Math.pow(10,n-3)),t.length)}},re={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return ne.y(e,t)},Y:function(e,t,n,r){const a=Z(e,r),o=a>0?a:1-a;return"YY"===t?te(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):te(o,t.length)},R:function(e,t){return te(V(e),t.length)},u:function(e,t){return te(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return te(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return te(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return ne.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return te(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=ee(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):te(a,t.length)},I:function(e,t,n){const r=K(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):te(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):ne.d(e,t)},D:function(e,t,n){const r=J(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):te(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return te(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return te(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return te(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return ne.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):ne.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):te(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):te(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):ne.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):ne.s(e,t)},S:function(e,t){return ne.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return oe(r);case"XXXX":case"XX":return ie(r);default:return ie(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return oe(r);case"xxxx":case"xx":return ie(r);default:return ie(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ae(r,":");default:return"GMT"+ie(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ae(r,":");default:return"GMT"+ie(r,":")}},t:function(e,t,n){return te(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return te(e.getTime(),t.length)}};function ae(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+t+te(o,2)}function oe(e,t){return e%60==0?(e>0?"-":"+")+te(Math.abs(e)/60,2):ie(e,t)}function ie(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+te(Math.trunc(r/60),2)+t+te(r%60,2)}const se=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},ce=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},de={p:ce,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return se(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",se(r,t)).replace("{{time}}",ce(a,t))}},le=/^D+$/,ue=/^Y+$/,me=["D","DD","YY","YYYY"];function he(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=E(e);return!isNaN(Number(n))}const fe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ge=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pe=/^'([^]*?)'?$/,be=/''/g,ye=/[a-zA-Z]/;function we(e){const t=e.match(pe);return t?t[1].replace(be,"'"):e}const ve=e=>{let t=document.createElement("button");return t.classList.add("common-use-item"),t.innerText=e,t.addEventListener("click",(()=>{De.load_mainContent_commonUse(e)})),t},ke=e=>{let t=document.createElement("button");return t.classList.add("category-item",e),t.innerText=`# ${e}`,t.addEventListener("click",(()=>{De.load_mainContent_category(e)})),t},xe=e=>{let t=document.createElement("div");return t.classList.add("category-title"),t.innerText=e,t},Me=e=>{let t=document.createElement("button");t.classList.add("delete-category");let n=document.createElement("div");n.classList.add("icon-container");let r=document.createElement("div");return r.classList.add("delete-text"),r.innerText=`Delete ${e}`,t.addEventListener("click",(()=>{D(e),De.load_mainContent_commonUse("All"),De.load_navBar_categories()})),t.appendChild(n),t.appendChild(r),t},Te=(e,t)=>{let n=document.createElement("div");n.classList.add("task-item");let r=document.createElement("div");r.classList.add("task-info");let a=document.createElement("input");a.type="checkbox",a.name="task-completion",a.classList.add("task-completion"),t.completion?(a.checked=!0,x(e,t),n.classList.add("strike")):(a.checked=!1,M(e,t),n.classList.remove("strike")),a.addEventListener("click",(()=>{a.checked?(x(e,t),n.classList.add("strike")):(M(e,t),n.classList.remove("strike"))}));let o=document.createElement("div");o.classList.add("task-title"),o.innerText=t.title;let i=document.createElement("div");i.classList.add("priority-circle",t.priority);let s=document.createElement("div");s.classList.add("edit-task-icon-container");let c=document.createElement("div");c.classList.add("delete-task-icon-container"),c.addEventListener("click",(()=>{k(e,t),n.remove()}));let d=document.createElement("div");d.classList.add("task-info-two");let l=document.createElement("div");l.classList.add("deadline"),l.innerText=function(e,t,n){const r=A(),a=n?.locale??r.locale??B,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=E(e);if(!he(s))throw new RangeError("Invalid time value");let c=t.match(ge).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,de[t])(e,a.formatLong):e})).join("").match(fe).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:we(e)};if(re[t])return{isToken:!0,value:e};if(t.match(ye))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return ue.test(e)}(o)||!n?.useAdditionalDayOfYearTokens&&function(e){return le.test(e)}(o))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),me.includes(e))throw new RangeError(r)}(o,t,String(e)),(0,re[o[0]])(s,o,a.localize,d)})).join("")}(t.deadline,"d MMM, EEEE, yyyy");let u=document.createElement("div");return u.classList.add("task-category-indicator"),u.innerText=`# ${e}`,r.appendChild(a),r.appendChild(o),r.appendChild(i),r.appendChild(s),r.appendChild(c),n.appendChild(r),d.appendChild(l),d.appendChild(u),n.appendChild(d),n};function Ce(e){return"high"===e?3:"medium"===e?2:"low"===e?1:0}function Se(e,t){if(e.deadline-t.deadline==0){let n=Ce(e.priority);return Ce(t.priority)-n}return e.deadline-t.deadline}const De=(()=>{const e=()=>{i();const e=document.querySelector(".categories-wrapper"),t=w();for(let n in t){let t=ke(n);e.appendChild(t)}},t=()=>{s();const e=["All","Today","This Week","Past Due","Completed"],t=document.querySelector(".common-use-container");for(let n of e){let e=ve(n);t.appendChild(e)}},n=e=>{((e,t)=>{a();const n=document.querySelector(".title-container");let r=xe(e);n.appendChild(r);const o=w(),i=document.querySelector(".tasks-container");let s=[];for(let e in o){let t=o[e];for(let e of t.tasks)s.push({category:t.title,task:e})}let c=s.filter(t);c.sort(((e,t)=>Se(e.task,t.task)));for(let e of c){let t=Te(e.category,e.task);i.appendChild(t)}})(e,{All:e=>{let t=new Date;return P(e.task.deadline,t)||W(e.task.deadline,t)},Today:e=>W(new Date,e.task.deadline),"This Week":e=>{let t=new Date;return function(e,t,n){return+F(e,n)==+F(t,n)}(t,e.task.deadline)&&(P(e.task.deadline,t)||W(e.task.deadline,t))},"Past Due":e=>{let t=new Date;return n=e.task.deadline,r=t,+E(n)<+E(r)&&!W(e.task.deadline,t)&&0==e.task.completion;var n,r},Completed:e=>1==e.task.completion}[e])},r=()=>{o(),t(),e()},a=()=>{let e=document.querySelector(".title-container"),t=document.querySelector(".tasks-container");e.innerHTML="",t.innerHTML=""},o=()=>{i(),s()},i=()=>{let e=document.querySelectorAll(".category-item");for(let t of e)t.remove()},s=()=>{let e=document.querySelectorAll(".common-use-item");for(let t of e)t.remove()};return{load_navBar_categories:e,load_navBar_commonUse:t,load_mainContent_category:e=>{void 0!==w()[e]?(a(),(e=>{const t=document.querySelector(".title-container");let n=xe(e);if(t.appendChild(n),"General"!==e){let n=Me(e);t.appendChild(n)}})(e),(e=>{const t=document.querySelector(".tasks-container");let n=w()[e].tasks,r=[],a=new Date;for(let e of n)(P(e.deadline,a)||W(e.deadline,a))&&r.push(e);r.sort(Se);for(let n of r){let r=Te(e,n);t.appendChild(r)}})(e)):console.log(`Category ${e} does not exist.`)},load_mainContent_commonUse:n,load_navBar:r,clear_mainContent:a,clear_navBar:o,refresh:()=>{C(),r(),n("All")}}})();De.refresh();let Ee=document.querySelector(".footer"),Pe=document.createElement("button");Pe.setAttribute("style","background-color: white; border: solid 3px red"),Pe.innerText="Add Dummy Tasks",Pe.addEventListener("click",(()=>{!function(){let e=new g("Milk Cows","idk",new Date("2024-6-29"),"medium",!1),t=new g("Go on a Walk","idk",new Date("2024-6-18"),"high",!1),n=new g("Finish Odin Project","idk",new Date("2024-11-31"),"low",!1),r=new g("Do this today","idk",new Date("2024-6-16"),"high",!1),a=new g("Go gym","idk",new Date("2024-6-17"),"medium",!0),o=new g("Do this today too, but later","idk",new Date("2024-6-16"),"medium",!1),i=new g("In the past","idk",new Date("2024-6-14"),"low",!1);v("General",o),v("General",e),v("General",n),v("General",r),v("General",i),S("Fitness"),v("Fitness",t),v("Fitness",a)}(),De.refresh(),console.log(w())})),Ee.appendChild(Pe);let Le=document.createElement("button");Le.setAttribute("style","background-color: white; border: solid 3px red"),Le.innerText="Clear all Catgories and Tasks",Le.addEventListener("click",(()=>{localStorage.clear(),De.refresh(),console.log(w())})),Ee.appendChild(Le)})()})();