/*! For license information please see 687.9322dcd5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcafe_companion=self.webpackChunkcafe_companion||[]).push([[687],{18033:(e,t,n)=>{n.d(t,{a:()=>c,c:()=>u,g:()=>l,s:()=>d});var o=n(67725);const r="ion-content",i=".ion-content-scroll-host",a=`${r}, ${i}`,s=e=>"ION-CONTENT"===e.tagName,l=async e=>s(e)?(await new Promise((t=>(0,o.c)(e,t))),e.getScrollElement()):e,c=e=>e.closest(a),d=(e,t)=>{if(s(e)){return e.scrollToTop(t)}return Promise.resolve(e.scrollTo({top:0,left:0,behavior:t>0?"smooth":"auto"}))},u=(e,t,n,o)=>{if(s(e)){return e.scrollByPoint(t,n,o)}return Promise.resolve(e.scrollBy({top:n,left:t,behavior:o>0?"smooth":"auto"}))}},14687:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>h});var o=n(18033),r=n(67725);const i=new WeakMap,a=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];i.has(e)!==n&&(n?l(e,t,o,r):c(e,t))},s=e=>e===e.getRootNode().activeElement,l=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const r=t.parentNode,a=t.cloneNode(!1);a.classList.add("cloned-input"),a.tabIndex=-1,o&&(a.disabled=!0),r.appendChild(a),i.set(e,a);const s="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${s}px,${n}px,0) scale(0)`},c=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},d="input, textarea, [no-blur], [contenteditable]",u=(e,t,n,o)=>{const r=e.top,i=e.bottom,a=t.top,s=a+15,l=.75*Math.min(t.bottom,o-n)-i,c=s-r,d=Math.round(l<0?-l:c>0?-c:0),u=Math.min(d,r-a),m=Math.abs(u)/.3;return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,m)),scrollPadding:n,inputSafeY:4-(r-s)}},m=async function(e,t,n,i,s){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(!n&&!i)return;const c=((e,t,n)=>{var o;const r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return u(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(e,n||i,s);if(n&&Math.abs(c.scrollAmount)<4)t.focus();else if(a(e,t,!0,c.inputSafeY,l),t.focus(),(0,r.r)((()=>e.click())),"undefined"!==typeof window){let r;const i=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",s),window.removeEventListener("ionKeyboardDidShow",i),n&&await(0,o.c)(n,0,c.scrollAmount,c.scrollDuration),a(e,t,!1,c.inputSafeY),t.focus()},s=()=>{window.removeEventListener("ionKeyboardDidShow",s),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await(0,o.g)(n),a=e.scrollHeight-e.clientHeight;if(c.scrollAmount>a-e.scrollTop)return"password"===t.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",s)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}},f=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y;return o*o+r*r>e*e}return!1},v="$ionPaddingTimer",p=(e,t)=>{var n,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName))return;const i=(0,o.a)(e);if(null===i)return;const a=i[v];a&&clearTimeout(a),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[v]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)},h=(e,t)=>{const n=document,i="ios"===t,l="android"===t,c=e.getNumber("keyboardHeight",290),u=e.getBoolean("scrollAssist",!0),v=e.getBoolean("hideCaretOnScroll",i),h=e.getBoolean("inputBlurring",i),g=e.getBoolean("scrollPadding",!0),w=Array.from(n.querySelectorAll("ion-input, ion-textarea")),y=new WeakMap,E=new WeakMap,b=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),i=(0,o.a)(e),d=i?null:e.closest("ion-footer");if(!n)return;if(i&&v&&!y.has(e)){const t=((e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{s(t)&&a(e,t,n)},i=()=>a(e,t,!1),l=()=>o(!0),c=()=>o(!1);return(0,r.a)(n,"ionScrollStart",l),(0,r.a)(n,"ionScrollEnd",c),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",l),(0,r.b)(n,"ionScrollEnd",c),t.removeEventListener("blur",i)}})(e,n,i);y.set(e,t)}if(!("date"===n.type||"datetime-local"===n.type)&&(i||d)&&u&&!E.has(e)){const t=function(e,t,n,o,i){let a,l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const c=e=>{a=(0,r.p)(e)},d=c=>{if(!a)return;const d=(0,r.p)(c);f(6,a,d)||s(t)||m(e,t,n,o,i,l)};return e.addEventListener("touchstart",c,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),()=>{e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",d,!0)}}(e,n,i,d,c,l);E.set(e,t)}};h&&(()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},a=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(d))return;const i=o.target;i!==r&&(i.matches(d)||i.closest(d)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",a,!1)})(),g&&(e=>{const t=document,n=t=>{p(t.target,e)},o=e=>{p(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",o)})(c);for(const o of w)b(o);n.addEventListener("ionInputDidLoad",(e=>{b(e.detail)})),n.addEventListener("ionInputDidUnload",(e=>{(e=>{if(v){const t=y.get(e);t&&t(),y.delete(e)}if(u){const t=E.get(e);t&&t(),E.delete(e)}})(e.detail)}))}}}]);
//# sourceMappingURL=687.9322dcd5.chunk.js.map