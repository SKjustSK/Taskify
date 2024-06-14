(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap);"]),i.push([n.id,":root {\n    --side-bar-color: #A2435C;\n    --nav-bar-text-color: #F6F6F4;\n    --main-content-color: #F6F6F4;\n    --hover-color: #b44c67;\n    --darker-hover-color: #b14b66;\n    --footer-color: #10173b;\n    --side-bar-padding: 10px;\n    --font: 'Outfit';\n    --nav-bar-text-padding: 0.4em;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 20% 1fr;\n    grid-template-rows: 100vh 5%;\n\n    font-family: var(--font), Arial, Helvetica, sans-serif;\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n    box-sizing: border-box;\n}\n\n/* Side bar + Nav bar*/\n.side-bar {\n    display: flex;\n    flex-direction: column;\n    padding: var(--side-bar-padding);\n    padding-top: calc(var(--side-bar-padding)*2);\n    background-color: var(--side-bar-color);\n    gap: 7%;\n    color: var(--nav-bar-text-color);\n}\n\n.side-bar .brand-name {\n    display: flex;\n    align-items: center;\n    font-size: 4em;\n    height: 8%;\n}\n\n.nav-bar {\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n}\n\n.common-use-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.common-use-item,\n.category-item {\n    /*to override the button styles*/\n    background: none;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    text-align: start;\n    /**/\n    color: var(--nav-bar-text-color);\n    padding: var(--nav-bar-text-padding);\n    font-size: 1.1em;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.common-use-item:hover,\n.category-item:hover {\n    background-color: var(--hover-color);\n}\n\n.categories-wrapper {\n    display: flex;\n    flex-direction: column;\n}\n\n.categories-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.categories-title {\n    font-size: 1.3em;\n    font-weight: 600;\n    padding: var(--nav-bar-text-padding);\n    padding-left: calc(-1*var(--nav-bar-text-padding));\n}\n\n.add-category {\n    /*to override the button styles*/\n    background: none;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    text-align: start;\n    /**/\n    display: flex;\n    align-items: center;\n    color: var(--nav-bar-text-color);\n    font-size: 1.8em;\n    aspect-ratio: 1 / 1;\n    padding-bottom: 0.195em;\n    cursor: pointer;\n    border-radius: 100px;\n}\n\n.add-category:hover {\n    background-color: var(--nav-bar-text-color);\n    color: var(--side-bar-color);\n}\n/**/\n\n.footer {\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;    \n\n    font-size: 0.9em;\n    background-color: var(--footer-color);\n    color: var(--nav-bar-text-color);\n    gap: 0.19em;\n    a {\n        color: var(--nav-bar-text-color);\n    }\n}\n\n/* Main content */\n.main-content {\n    padding: var(--side-bar-padding);\n    background-color: var(--main-content-color);\n}\n\n/**/\n",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),c=t.n(s),l=t(540),d=t.n(l),u=t(113),p=t.n(u),f=t(208),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;const v=class{constructor(){this.tasks=[]}addTask(n){for(let e of this.tasks)if(e.isEqual(n))return void console.log(`Task '${e.title}' already exists`);this.tasks.push(n)}removeTask(n){this.tasks=this.tasks.filter((e=>!e.isEqual(n)))}},g=class{constructor(n,e,t,r,o){this.title=n,this.desc=e,this.deadline=t,this.priority=r,this.completion=o}isEqual(n){return this.title===n.title&&this.desc===n.desc&&this.deadline===n.deadline&&this.priority===n.priority&&this.completion===n.completion}markComplete(){this.completion=!0}markIncomplete(){this.completion=!1}},h="categories";function b(n){localStorage.setItem(h,JSON.stringify(n))}function y(){let n=JSON.parse(localStorage.getItem(h));for(let e in n){let t=n[e],r=new v;r.tasks=t.tasks.map((n=>new g(n.title,n.description,n.deadline,n.priority,n.completion))),n[e]=r}return n}const x=n=>{let e=y();void 0===e[n]?(e[n]=new v,b(e)):console.log(`Category '${n}' already exists.`)};function k(n){let e=document.createElement("button");return e.classList.add("category-item",n),e.innerText=`# ${n}`,e}(function(){if(null===localStorage.getItem("General")){let n=new Object,e=new v;n.General=e,b(n)}})(),x("Fitness"),console.log(y()),function(){let n=document.querySelector(".categories-wrapper"),e=y();for(let t in e){let e=k(t);n.appendChild(e)}}()})()})();