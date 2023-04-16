(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}})();const J="/assets/typescript-f6ead1af.svg",Q="/vite.svg";function U(t){var e=document.createElement("script");e.src="https://accounts.google.com/gsi/client",e.async=!0,e.defer=!0,document.head.appendChild(e);const a="837888262468-mmhoc2t6afsnsu1vadflf4qu7vqm307s.apps.googleusercontent.com",i="use",o="popup",n="true",r="onSignIn",u="";t.innerHTML=`   
  <div id="g_id_onload" data-client_id="${a}" data-context="${i}" data-ux_mode="${o}" data-callback="${r}" data-itp_support="${n}" login_url=${u}>
  </div>
  
  `}function W(t){t.innerHTML=` 
  <div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="outline" data-text="continue_with" data-size="large" data-logo_alignment="left">
  </div>
  `}function X(t){t.innerHTML=`<h3>This is a basic example on how to enable Google One Tap Authentication in a web page</h3>

  <p>To proceed with testing the authentication flow, <b>follow the prompt shown in the top right corner of the page.</b></p>

  <p>The Google One Tap flow is configured to automatically show the prompt in the right top corner, auto-select the current Google Account if you are already logged in with Google and proceed with the authentication flow automatically if you have done it before and your Google account allows it.</p>
  <div id="google">
 
  <div id="link-login">
    <p><b>If no prompt appears just click the button bellow to start the authentication flow:</b></p>
    <div id="buttonDiv"></div>
  </div>
  </div>`,W(document.querySelector("#link-login"))}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function H(t,e){var a=typeof Symbol=="function"&&t[Symbol.iterator];if(!a)return t;var i,o,n=a.call(t),r=[];try{for(;(e===void 0||e-- >0)&&!(i=n.next()).done;)r.push(i.value)}catch(u){o={error:u}}finally{try{i&&!i.done&&(a=n.return)&&a.call(n)}finally{if(o)throw o.error}}return r}var d;(function(t){t[t.NotStarted=0]="NotStarted",t[t.Running=1]="Running",t[t.Stopped=2]="Stopped"})(d||(d={}));var I={type:"xstate.init"};function _(t){return t===void 0?[]:[].concat(t)}function E(t,e){return typeof(t=typeof t=="string"&&e&&e[t]?e[t]:t)=="string"?{type:t}:typeof t=="function"?{type:t.name,exec:t}:t}function y(t){return function(e){return t===e}}function D(t){return typeof t=="string"?{type:t}:t}function N(t,e){return{value:t,context:e,actions:[],changed:!1,matches:y(t)}}function P(t,e,a){var i=e,o=!1;return[t.filter(function(n){if(n.type==="xstate.assign"){o=!0;var r=Object.assign({},i);return typeof n.assignment=="function"?r=n.assignment(i,a):Object.keys(n.assignment).forEach(function(u){r[u]=typeof n.assignment[u]=="function"?n.assignment[u](i,a):n.assignment[u]}),i=r,!1}return!0}),i,o]}function Z(t,e){e===void 0&&(e={});var a=H(P(_(t.states[t.initial].entry).map(function(r){return E(r,e.actions)}),t.context,I),2),i=a[0],o=a[1],n={config:t,_options:e,initialState:{value:t.initial,actions:i,context:o,matches:y(t.initial)},transition:function(r,u){var v,L,T=typeof r=="string"?{value:r,context:t.context}:r,s=T.value,f=T.context,m=D(u),b=t.states[s];if(b.on){var B=_(b.on[m.type]);try{for(var h=function(c){var S=typeof Symbol=="function"&&Symbol.iterator,M=S&&c[S],$=0;if(M)return M.call(c);if(c&&typeof c.length=="number")return{next:function(){return c&&$>=c.length&&(c=void 0),{value:c&&c[$++],done:!c}}};throw new TypeError(S?"Object is not iterable.":"Symbol.iterator is not defined.")}(B),p=h.next();!p.done;p=h.next()){var g=p.value;if(g===void 0)return N(s,f);var w=typeof g=="string"?{target:g}:g,l=w.target,O=w.actions,G=O===void 0?[]:O,k=w.cond,K=k===void 0?function(){return!0}:k,V=l===void 0,Y=l??s,C=t.states[Y];if(K(f,m)){var x=H(P((V?_(G):[].concat(b.exit,G,C.entry).filter(function(c){return c})).map(function(c){return E(c,n._options.actions)}),f,m),3),q=x[0],F=x[1],z=x[2],A=l??s;return{value:A,context:F,actions:q,changed:l!==s||q.length>0||z,matches:y(A)}}}}catch(c){v={error:c}}finally{try{p&&!p.done&&(L=h.return)&&L.call(h)}finally{if(v)throw v.error}}}return N(s,f)}};return n}var j=function(t,e){return t.actions.forEach(function(a){var i=a.exec;return i&&i(t.context,e)})};function tt(t){var e=t.initialState,a=d.NotStarted,i=new Set,o={_machine:t,send:function(n){a===d.Running&&(e=t.transition(e,n),j(e,D(n)),i.forEach(function(r){return r(e)}))},subscribe:function(n){return i.add(n),n(e),{unsubscribe:function(){return i.delete(n)}}},start:function(n){if(n){var r=typeof n=="object"?n:{context:t.config.context,value:n};e={value:r.value,actions:[],context:r.context,matches:y(r.value)}}else e=t.initialState;return a=d.Running,j(e,I),o},stop:function(){return a=d.Stopped,i.clear(),o},get state(){return e},get status(){return a}};return o}const et=Z({id:"auth",context:{google_identity:void 0},initial:"none",states:{none:{on:{GOOLE_CB:"authenticated"}},authenticated:{}}}),R=tt(et).start();R.subscribe(t=>{console.log(t.value)});function nt(t){R.subscribe(({value:a})=>{a=="authenticated"&&e()});const e=()=>{t.style.display="inline"};t.innerHTML=` <h3>Looks like you have already authenticated yourself!</h3>
  <p><b>Here is the info I recovered about your profile in your Google account:</b></p>
  <table id="token-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  <p>Your raw token is: <blockquote><em id="raw-token"></em></blockquote></p>
  <p>You can try to decode it by yourself in a webpage like <b><a href="https://jwt.io/">jwt.io</a></b> or <b><a href="https://jwt.ms/">jwt.ms</a></b>.</p>`}function ot(t){t.innerHTML=`
  <p>The following info is being requested:</p>
  <table>
    <thead>
      <tr>
        <th>API</th>
        <th>Scope</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-</td>
        <td>.../auth/userinfo.email</td>
        <td>See your primary Google Account email address</td>
      </tr>
      <tr>
        <td>-</td>
        <td>.../auth/userinfo.profile</td>
        <td>See your personal info, including any personal info you've made publicly available</td>
      </tr>
      <tr>
        <td>-</td>
        <td>openid</td>
        <td>Associate you with your personal info on Google</td>
      </tr>
    </tbody>
  </table>`}document.querySelector("#app").innerHTML=`
  <div>
    <div id="google-setup"> </div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${Q}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${J}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1> Google One Tap</h1>
     
    <div class="centered padding-top">
  
        <div id="no-auth" class="container"></div>
        <div id="authenticated" style="display:none"> </div>
        <div id="properties"></div>

    </div>
  </div>
  </div>
`;X(document.querySelector("#no-auth"));nt(document.querySelector("#authenticated"));ot(document.querySelector("#properties"));U(document.querySelector("#google-setup"));
