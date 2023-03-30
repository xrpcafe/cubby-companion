/*! For license information please see main.1057d933.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Rt=mt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,jt=mt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Lt=gt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ct} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Rt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${jt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pt=mt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Bt=gt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Pt} 1s linear infinite;
`,zt=mt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Dt=mt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ft=gt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${zt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Dt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ut=gt("div")`
  position: absolute;
`,$t=gt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,qt=mt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ht=gt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${qt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Vt=t=>{let{toast:r}=t,{icon:n,type:i,iconTheme:o}=r;return void 0!==n?"string"==typeof n?e.createElement(Ht,null,n):n:"blank"===i?null:e.createElement($t,null,e.createElement(Bt,{...o}),"loading"!==i&&e.createElement(Ut,null,"error"===i?e.createElement(Lt,{...o}):e.createElement(Ft,{...o})))},Wt=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,Kt=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Gt=gt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Zt=gt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Yt=e.memo((t=>{let{toast:r,position:n,style:i,children:o}=t,a=r.height?((e,t)=>{let r=e.includes("top")?1:-1,[n,i]=yt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Wt(r),Kt(r)];return{animation:t?`${mt(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${mt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(r.position||n||"top-center",r.visible):{opacity:0},s=e.createElement(Vt,{toast:r}),u=e.createElement(Zt,{...r.ariaProps},vt(r.message,r));return e.createElement(Gt,{className:r.className,style:{...a,...i,...r.style}},"function"==typeof o?o({icon:s,message:u}):e.createElement(e.Fragment,null,s,u))}));!function(e,t,r,n){at.p=t,ft=e,dt=r,pt=n}(e.createElement);var Xt=t=>{let{id:r,className:n,style:i,onHeightUpdate:o,children:a}=t,s=e.useCallback((e=>{if(e){let t=()=>{let t=e.getBoundingClientRect().height;o(r,t)};t(),new MutationObserver(t).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[r,o]);return e.createElement("div",{ref:s,className:n,style:i},a)},Jt=ht`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qt=t=>{let{reverseOrder:r,position:n="top-center",toastOptions:i,gutter:o,children:a,containerStyle:s,containerClassName:u}=t,{toasts:l,handlers:c}=It(i);return e.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:u,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map((t=>{let i=t.position||n,s=((e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:yt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...i}})(i,c.calculateOffset(t,{reverseOrder:r,gutter:o,defaultPosition:n}));return e.createElement(Xt,{id:t.id,key:t.id,onHeightUpdate:c.updateHeight,className:t.visible?Jt:"",style:s},"custom"===t.type?vt(t.message,t):a?a(t):e.createElement(Yt,{toast:t,position:i}))})))},er=Ot;const tr="https://api.xrp.cafe",rr=async e=>{try{let t={xrp_address:e},r=await fetch(tr+"/api/companion/getbulktxns",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return{success:!0,data:await r.json()}}catch(t){return{success:!1}}},nr=async(e,t,r)=>{try{let n={xrp_address:e,transactions:t,id:r},i=await fetch(tr+"/api/companion/submitTransactions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});return{success:!0,data:await i.json()}}catch(n){return{success:!1}}},ir=async e=>{try{let t={id:e},r=await fetch(tr+"/api/getBulkTransactionStatus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return{success:!0,data:await r.json()}}catch(t){return{success:!1}}},or=async(e,t)=>{try{let r={id:e,xrp_address:t},n=await fetch(tr+"/api/companion/rejectBulkTransaction",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});return{success:!0,data:await n.json()}}catch(r){return{success:!1}}};var ar=r(9809),sr=r(14454),ur=r(13214),lr=r.n(ur);const cr={SecureStorage:"ionicSecureStorage",IndexedDB:lr().INDEXEDDB,LocalStorage:lr().LOCALSTORAGE},hr={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[cr.SecureStorage,cr.IndexedDB,cr.LocalStorage]};class fr{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hr;this._db=null,this._secureStorageDriver=null;const t=Object.assign({},hr,e||{});this._config=t}async create(){const e=lr().createInstance(this._config);return this._db=e,await e.setDriver(this._config.driverOrder||[]),this}async defineDriver(e){return e._driver===cr.SecureStorage&&(this._secureStorageDriver=e),lr().defineDriver(e)}get driver(){var e;return(null===(e=this._db)||void 0===e?void 0:e.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(e){return this.assertDb().getItem(e)}set(e,t){return this.assertDb().setItem(e,t)}remove(e){return this.assertDb().removeItem(e)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(e){return this.assertDb().iterate(e)}setEncryptionKey(e){var t;if(!this._secureStorageDriver)throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available");null===(t=this._secureStorageDriver)||void 0===t||t.setEncryptionKey(e)}}const dr=class{constructor(){this.store=void 0,this.store=new fr,this.create()}async create(){await this.store.create()}async get(e){return await this.store.get(e)}async set(e,t){await this.store.set(e,t)}async clear(){await this.store.clear()}},pr=async(e,t)=>{try{let r=JSON.parse(e),n=[];const i=sr.Wallet.fromSeed(t);let o=await(async e=>{const t=new sr.Client("wss://xrplcluster.com/");try{let r;await t.connect();let n=await t.request((e=>({command:"account_info",account:e,ledger_index:"current",queue:!1}))(e));return await t.disconnect(),r=n.result,r.account_data.Sequence}catch(r){return!0===t.isConnected()&&await t.disconnect(),0}})(i.address);for(let e=0;e<r.length;e++){r[e].Sequence=o,r[e].Fee="15";let t=i.sign(r[e]);n.push(t),o+=1}return JSON.stringify(n)}catch(r){console.log(r)}};const mr={countArrayItems:e=>{try{return JSON.parse(e).length}catch(t){console.log(t)}},getTotalXRPAmount:e=>{try{let t=JSON.parse(e),r=0;for(let e=0;e<t.length;e++)r+=Number(t[e].Amount);return(r/1e6).toFixed(2)}catch(t){console.log(t)}},SplitTime:function(e){try{let t=new Date(e).getMinutes();return{Minutes:(new Date).getMinutes()-t}}catch(t){}}};var gr=r(33394),vr=r(37881),br=r(66303).Buffer;!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"undefined"!==typeof document&&document.documentElement.classList.add("ion-ce"),E(Object.assign({},e))}();const yr=()=>{const[t,r]=(0,e.useState)(""),[n,i]=(0,e.useState)(""),[o,a]=(0,e.useState)(""),[s,u]=(0,e.useState)(""),[l,c]=(0,e.useState)(""),[h,f]=(0,e.useState)(""),[d,p]=(0,e.useState)(""),[m,g]=(0,e.useState)(""),[v,b]=(0,e.useState)(""),[y,w]=(0,e.useState)(""),[M,_]=(0,e.useState)(""),[S,E]=(0,e.useState)(""),[k,A]=(0,e.useState)(""),[x,O]=(0,e.useState)(""),[T,N]=(0,e.useState)([]),[I,C]=(0,e.useState)(""),[R,j]=(0,e.useState)(!1),[L,P]=(0,e.useState)(!1),[B,z]=(0,e.useState)(!1),[D,F]=(0,e.useState)("family_seed"),U=e=>er(e),[$,q]=(new dr,(0,e.useState)(new dr));function H(e){z(e.target.value)}async function V(){await $.clear(),A(""),r(""),U("Account has been removed")}(0,e.useEffect)((()=>{(async()=>{let e=await $.get("xrp.cafe_seed");""!=e&&void 0!=e&&r(e)})()}),[]);const W=(e,t)=>{try{const r=ar.randomBytes(16),n=ar.createHash("sha256").update(t).digest("base64").substr(0,32),i=ar.createCipheriv("aes-256-cbc",n,r);let o=i.update(e);return o=br.concat([o,i.final()]),r.toString("hex")+":"+o.toString("hex")}catch(r){console.log(r)}},K=(e,t)=>{try{const r=e.split(":"),n=br.from(r.shift(),"hex"),i=br.from(r.join(":"),"hex"),o=ar.createHash("sha256").update(t).digest("base64").substr(0,32),a=ar.createDecipheriv("aes-256-cbc",o,n),s=a.update(i);return br.concat([s,a.final()]).toString()}catch(r){console.log(r)}};function G(e){a(e.target.value)}function Z(e){E(e.target.value)}async function Y(){let e=await rr(k);e.success&&N(e.data)}async function X(e){try{let n="",i=null;try{n=K(t,o),i=sr.Wallet.fromSeed(n)}catch(r){return void U("Invalid password")}P(!0),a("");let s=await pr(e,n);C(""),(await nr(i.address,s,x)).success&&await J(parseInt(x))}catch(r){C(""),a(""),O(""),U("An Error has occurred"),Y()}}async function J(e){return new Promise((async(t,r)=>{let n=await ir(e);n.success?n.data.length>0&&(0==n.data[0].processed?setTimeout((async function(){await J(e)}),2e3):1==n.data[0].processed?(j(!1),P(!1),U("Sweep has been executed successfully"),O(""),Y(),t(!0)):(j(!1),P(!1),U("Error: "+n.data[0].result),O(""),Y(),t(!0))):setTimeout((async function(){await J(e)}),2e3)}))}function Q(e){F(e.target.value)}return(0,vr.jsx)(Be,{children:(0,vr.jsxs)("main",{className:"bulk-app",children:[(0,vr.jsx)("header",{children:(0,vr.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Layer_1",viewBox:"0 0 376.43 84.2",children:[(0,vr.jsx)("defs",{}),(0,vr.jsx)("path",{d:"M106.06 41.21c0-15.05 9.44-25.26 25.39-25.26 14.42 0 23.51 8.29 23.6 21.05h-16.33c-.48-5.13-3.13-7.91-7.02-7.91-4.62 0-7.65 3.95-7.65 11.99s3.03 11.99 7.65 11.99c3.86 0 6.63-2.77 7.02-7.91h16.33c-.19 12.98-9.09 21.3-23.6 21.3-15.95 0-25.39-10.21-25.39-25.26ZM191.83 16.59h17.61v48.99h-16.71v-9.31h-.51c-2.14 6.25-7.75 9.95-15.05 9.95-10.3 0-17.06-7.65-17.09-18.37V16.6h17.61v27.55c.03 4.85 2.58 7.78 7.02 7.78s7.18-2.93 7.14-7.78V16.6ZM215.86.26h17.61v24.88h.26c1.91-4.98 6.51-9.18 13.78-9.18 9.69 0 19.14 7.4 19.14 25.13s-8.8 25.13-19.26 25.13c-6.89 0-11.61-3.7-13.65-8.67h-.38v8.04h-17.48V.26Zm25 52.43c4.85 0 7.65-4.34 7.65-11.61s-2.81-11.61-7.65-11.61-7.78 4.34-7.78 11.61 2.93 11.61 7.78 11.61ZM271.52.26h17.61v24.88h.26c1.91-4.98 6.51-9.18 13.78-9.18 9.69 0 19.14 7.4 19.14 25.13s-8.8 25.13-19.26 25.13c-6.89 0-11.61-3.7-13.65-8.67h-.38v8.04h-17.48V.26Zm25 52.43c4.85 0 7.65-4.34 7.65-11.61s-2.81-11.61-7.65-11.61-7.78 4.34-7.78 11.61 2.93 11.61 7.78 11.61ZM326.04 82.22l3.83-12.5c4.34 1.53 7.75 1.63 8.93-1.09l.38-.89-17.22-51.15h18.37l7.91 33.93h.51l8.04-33.93h18.5l-17.86 53.07c-2.71 8.1-8.48 14.29-20.79 14.29-4.05 0-7.85-.64-10.59-1.72ZM59.28 77.55H15.92c-8.14 0-14.77-6.62-14.77-14.77V19.43c.01-8.15 6.63-14.77 14.77-14.77h43.36c8.14 0 14.77 6.62 14.77 14.77v43.36c0 8.14-6.62 14.77-14.77 14.77ZM15.92 13.61c-3.21 0-5.82 2.61-5.82 5.82v43.36c0 3.21 2.61 5.82 5.82 5.82h43.36c3.21 0 5.82-2.61 5.82-5.82V19.43c0-3.21-2.61-5.82-5.82-5.82H15.92Z",className:"cls-1"}),(0,vr.jsx)("path",{d:"M37.6 53.09c-8.81 0-15.98-7.17-15.98-15.98a4.01 4.01 0 1 1 8.02 0c0 4.39 3.57 7.95 7.95 7.95s7.95-3.57 7.95-7.95a4.01 4.01 0 1 1 8.02 0c0 8.81-7.17 15.98-15.98 15.98Z",className:"cls-1"})]})}),(0,vr.jsx)(Qt,{}),(0,vr.jsxs)("div",{id:"modal_confirmBulkTxn",className:"modal "+(R?"is-active":""),children:[(0,vr.jsx)("div",{className:"modal-background",onClick:()=>j(!R)}),(0,vr.jsxs)("div",{className:"modal-card",children:[(0,vr.jsxs)("section",{className:"modal-card-body",children:[(0,vr.jsx)("div",{className:"field",children:(0,vr.jsxs)("div",{className:"control is-flex is-align-items-center",children:["Enter password/pin to confirm:"," ",(0,vr.jsx)("input",{type:"password",onChange:G,className:"input",value:o})]})}),(0,vr.jsx)("p",{className:"mb mb-2 has-text-centered notification",children:"Confirming will send all transactions to the ledger."})]}),(0,vr.jsxs)("footer",{className:"modal-card-foot",children:[(0,vr.jsx)("button",{className:"button is-primary is-medium is-fullwidth "+(L?"is-loading disabled":""),onClick:()=>X(I),children:"Confirm"}),(0,vr.jsx)("button",{className:"button is-medium is-fullwidth",onClick:()=>j(!1),children:"Cancel"})]})]})]}),""!=k?(0,vr.jsx)("div",{className:"app-screen",children:(0,vr.jsxs)("section",{className:"section",children:[(0,vr.jsxs)("div",{className:"wallet",children:[(0,vr.jsxs)("div",{className:"buttons has-addons is-centered",children:[(0,vr.jsx)("div",{className:"button is-small is-rounded is-primary is-light is-truncate",title:k,children:k}),(0,vr.jsx)("button",{className:"button is-small is-rounded is-danger",onClick:V,children:"Remove"})]}),"\xa0\xa0\xa0\xa0\xa0\xa0",(0,vr.jsx)("button",{className:"button is-icon","aria-label":"refresh",onClick:Y,children:(0,vr.jsx)("div",{className:"icon is-large",children:(0,vr.jsxs)("svg",{width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,vr.jsx)("path",{d:"M7.12921 0.999998L9.55132 3.4221C9.94184 3.81263 9.94184 4.44579 9.55132 4.83632L7.12921 7.25842",strokeLinecap:"round"}),(0,vr.jsx)("path",{d:"M14.1765 10.6425C14.1765 14.1537 11.3301 17 7.81899 17C4.30784 17 1.4615 14.1537 1.4615 10.6425C1.4615 7.13138 4.30784 4.28503 7.81899 4.28503H8.75504",strokeLinecap:"round"})]})})})]}),(0,vr.jsxs)("div",{className:"bulk-cards",children:[0===T.length?(0,vr.jsx)("div",{className:"notification",children:"No transactions found"}):(0,vr.jsx)(vr.Fragment,{}),T.map(((e,t)=>(0,vr.jsx)("div",{className:"card",children:(0,vr.jsxs)("div",{className:"card-content",children:[(0,vr.jsxs)("div",{className:"tag",children:[e.txn_type," transaction - ",mr.SplitTime(e.datetime).Minutes," Minute(s) ago"]}),(0,vr.jsx)("div",{className:"title",children:e.collection_name}),(0,vr.jsxs)("div",{className:"price",children:[mr.countArrayItems(e.txn_text)," NFTs -"," ",(0,vr.jsxs)("span",{children:[mr.getTotalXRPAmount(e.txn_text)," XRP"]})]}),(0,vr.jsxs)("div",{className:"buttons",children:[(0,vr.jsx)("button",{className:"button is-success",onClick:()=>{return t=e.txn_text,r=e.id,O(r),C(t),void j(!0);var t,r},children:"Confirm"}),(0,vr.jsx)("button",{className:"button is-danger",onClick:()=>async function(e){(await or(e,k)).success&&(U("Transaction rejected"),Y())}(e.id),children:"Cancel"})]})]})})))]})]})}):""!=t?(0,vr.jsx)("div",{className:"app-screen",children:(0,vr.jsxs)("section",{className:"section",children:[(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Enter password"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{className:"input",type:"password",onChange:G,placeholder:""})})]}),(0,vr.jsxs)("div",{className:"buttons mt mt-5",children:[(0,vr.jsx)("button",{className:"button is-success",onClick:async function(){const e=K(t,o);if(void 0===e)return void U("Invalid Password");let r=sr.Wallet.fromSeed(e);A(r.address),a("");let n=await rr(r.address);n.success&&N(n.data)},children:"Unlock"}),(0,vr.jsx)("button",{className:"button is-white",onClick:V,children:"Reset"})]})]})}):(0,vr.jsx)("div",{className:"app-screen",children:(0,vr.jsxs)("section",{className:"section",children:[(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Key type"}),(0,vr.jsxs)("div",{className:"control",children:[(0,vr.jsxs)("label",{className:"radio is-custom",children:["Family seed",(0,vr.jsx)("input",{type:"radio",name:"storage",value:"family_seed",checked:"family_seed"===D,onChange:Q}),(0,vr.jsx)("span",{className:"checkmark"})]}),(0,vr.jsxs)("label",{className:"radio is-custom",children:["Secret numbers",(0,vr.jsx)("input",{type:"radio",name:"storage",value:"secret_numbers",checked:"secret_numbers"===D,onChange:Q}),(0,vr.jsx)("span",{className:"checkmark"})]})]})]}),"family_seed"===D?(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Enter family seed"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",onChange:function(e){i(e.target.value)},className:"input"})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Create password"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"password",onChange:G,className:"input"})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Confirm password"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"password",onChange:Z,className:"input"})})]}),(0,vr.jsxs)("div",{className:"term-control",children:[(0,vr.jsxs)("label",{className:"checkbox",children:[(0,vr.jsx)("input",{type:"checkbox",onChange:H}),"I agree to the",(0,vr.jsx)("span",{className:"checkmark"})]}),(0,vr.jsx)("a",{role:"button",href:"https://xrp.cafe/terms",target:"_blank",children:"terms"})," ",(0,vr.jsx)("label",{children:"and"})," ",(0,vr.jsx)("a",{role:"button",href:"https://xrp.cafe/privacy",target:"_blank",children:"privacy policy"})]}),(0,vr.jsx)("div",{className:"buttons mt mt-5",children:(0,vr.jsx)("button",{className:"button is-success",onClick:async function(){if(o==S)if(!1!==B)try{let e=sr.Wallet.fromSeed(n);A(e.address);const t=W(n,S);await $.set("xrp.cafe_seed",t),r(t),i(""),a(""),E(""),U("Wallet added successfully")}catch(e){console.log(e),U("Invalid family seed")}else U("You must agree to the terms and conditions to continue.");else U("Password/Pin does not match.")},children:"Continue"})})]}):(0,vr.jsx)(vr.Fragment,{}),"secret_numbers"===D?(0,vr.jsxs)(vr.Fragment,{children:[(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"A"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){u(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"B"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){c(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"C"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){f(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"D"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){p(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"E"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){g(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"F"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){b(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"G"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){w(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"H"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"text",className:"input",onChange:function(e){_(e.target.value)}})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Create password"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"password",onChange:G,className:"input"})})]}),(0,vr.jsxs)("div",{className:"field",children:[(0,vr.jsx)("label",{className:"label",children:"Confirm password"}),(0,vr.jsx)("div",{className:"control",children:(0,vr.jsx)("input",{type:"password",onChange:Z,className:"input"})})]}),(0,vr.jsxs)("div",{className:"term-control",children:[(0,vr.jsxs)("label",{className:"checkbox",children:[(0,vr.jsx)("input",{type:"checkbox",onChange:H}),"I agree to the",(0,vr.jsx)("span",{className:"checkmark"})]}),(0,vr.jsx)("a",{role:"button",href:"https://xrp.cafe/terms",target:"_blank",children:"terms"}),(0,vr.jsx)("label",{children:"and"})," ",(0,vr.jsx)("a",{role:"button",href:"https://xrp.cafe/privacy",target:"_blank",children:"privacy policy"})]}),(0,vr.jsx)("div",{className:"buttons mt mt-5",children:(0,vr.jsx)("button",{className:"button is-success",onClick:async function(){if(o==S)if(!1!==B)if(""!=s.trim()&&""!=l.trim()&&""!=h.trim()&&""!=d.trim()&&""!=m.trim()&&""!=v.trim()&&""!=y.trim()&&""!=M.trim())try{const e=s.trim()+" "+l.trim()+" "+h.trim()+" "+d.trim()+" "+m.trim()+" "+v.trim()+" "+y.trim()+" "+M.trim(),t=new gr.Account(e);A(t.getAddress());let n=t.getFamilySeed();const o=W(n,S);await $.set("xrp.cafe_seed",o),r(o),i(""),a(""),E(""),U("Wallet added successfully")}catch(e){U("Invalid secret numbers")}else U("Invalid secret numbers");else U("You must agree to the terms and conditions to continue.");else U("Password/Pin does not match.")},children:"Continue"})})]}):(0,vr.jsx)(vr.Fragment,{})]})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));const wr=e=>{e&&e instanceof Function&&r.e(737).then(r.bind(r,31737)).then((t=>{let{getCLS:r,getFID:n,getFCP:i,getLCP:o,getTTFB:a}=t;r(e),n(e),i(e),o(e),a(e)}))},Mr=document.getElementById("root");(0,t.s)(Mr).render((0,vr.jsx)(e.StrictMode,{children:(0,vr.jsx)(yr,{})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()})).catch((e=>{console.error(e.message)})),wr()})()})();
//# sourceMappingURL=main.1057d933.js.map