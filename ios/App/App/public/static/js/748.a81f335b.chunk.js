/*! For license information please see 748.a81f335b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcafe_companion=self.webpackChunkcafe_companion||[]).push([[748],{39748:(e,t,o)=>{o.r(t),o.d(t,{startFocusVisible:()=>r});const s="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],o=!0;const r=e?e.shadowRoot:document,c=e||document.body,i=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},a=()=>{o=!1,i([])},d=e=>{o=n.includes(e.key),o||i([])},u=e=>{if(o&&void 0!==e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));i(t)}},v=()=>{r.activeElement===c&&i([])};r.addEventListener("keydown",d),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",a),r.addEventListener("mousedown",a);return{destroy:()=>{r.removeEventListener("keydown",d),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",a),r.removeEventListener("mousedown",a)},setFocus:i}}}}]);
//# sourceMappingURL=748.a81f335b.chunk.js.map