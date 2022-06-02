const oe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}};oe();const N={},ce=(e,t)=>e===t,ae=Symbol("solid-track"),U={equals:ce};let fe=se;const I={},E=1,B=2,z={owned:null,cleanups:null,context:null,owner:null};var d=null;let T=null,h=null,P=null,p=null,v=null,Q=0;function O(e,t){const n=h,s=d,i=e.length===0?z:{owned:null,cleanups:null,context:null,owner:t||s};d=i,h=null;try{return Y(()=>e(()=>J(i)),!0)}finally{h=n,d=s}}function ue(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,pending:I,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==I?n.pending:n.value)),W(n,i));return[ee.bind(n),s]}function G(e,t,n){const s=te(e,t,!1,E);D(s)}function H(e,t,n){n=n?Object.assign({},U,n):U;const s=te(e,t,!0,0);return s.pending=I,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,D(s),ee.bind(s)}function he(e){if(P)return e();let t;const n=P=[];try{t=e()}finally{P=null}return Y(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==I){const r=i.pending;i.pending=I,W(i,r)}}},!1),t}function V(e){let t,n=h;return h=null,t=e(),h=n,t}function de(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function pe(e){const t=H(e);return H(()=>F(t()))}function ee(){const e=T;if(this.sources&&(this.state||e)){const t=p;p=null,this.state===E||e?D(this):q(this),p=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function W(e,t,n){if(P)return e.pending===I&&P.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&Y(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i];s&&T.disposed.has(r),(s&&!r.tState||!s&&!r.state)&&(r.pure?p.push(r):v.push(r),r.observers&&ie(r)),s||(r.state=E)}if(p.length>1e6)throw p=[],new Error},!1),t}function D(e){if(!e.fn)return;J(e);const t=d,n=h,s=Q;h=d=e,ge(e,e.value,s),h=n,d=t}function ge(e,t,n){let s;try{s=e.fn(t)}catch(i){le(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?W(e,s):e.value=s,e.updatedAt=n)}function te(e,t,n,s,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==z&&(d.owned?d.owned.push(r):d.owned=[r]),r}function ne(e){const t=T;if(e.state===0||t)return;if(e.state===B||t)return q(e);if(e.suspense&&V(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Q);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===E||t)D(e);else if(e.state===B||t){const i=p;p=null,q(e,n[0]),p=i}}function Y(e,t){if(p)return e();let n=!1;t||(p=[]),v?n=!0:v=[],Q++;try{const s=e();return be(n),s}catch(s){le(s)}finally{p=null,n||(v=null)}}function be(e){p&&(se(p),p=null),!e&&(v.length?he(()=>{fe(v),v=null}):v=null)}function se(e){for(let t=0;t<e.length;t++)ne(e[t])}function q(e,t){const n=T;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===E||n?i!==t&&ne(i):(i.state===B||n)&&q(i,t))}}function ie(e){const t=T;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=B,s.pure?p.push(s):v.push(s),s.observers&&ie(s))}}function J(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();s<i.length&&(r.sourceSlots[l]=s,i[s]=r,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)J(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function le(e){throw e}function F(e){if(typeof e=="function"&&!e.length)return F(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=F(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const me=Symbol("fallback");function X(e){for(let t=0;t<e.length;t++)e[t]()}function _e(e,t,n={}){let s=[],i=[],r=[],l=0,o=t.length>1?[]:null;return de(()=>X(r)),()=>{let f=e()||[],a,c;return f[ae],V(()=>{let u=f.length,b,w,$,C,L,m,_,y,x;if(u===0)l!==0&&(X(r),r=[],s=[],i=[],l=0,o&&(o=[])),n.fallback&&(s=[me],i[0]=O(re=>(r[0]=re,n.fallback())),l=1);else if(l===0){for(i=new Array(u),c=0;c<u;c++)s[c]=f[c],i[c]=O(g);l=u}else{for($=new Array(u),C=new Array(u),o&&(L=new Array(u)),m=0,_=Math.min(l,u);m<_&&s[m]===f[m];m++);for(_=l-1,y=u-1;_>=m&&y>=m&&s[_]===f[y];_--,y--)$[y]=i[_],C[y]=r[_],o&&(L[y]=o[_]);for(b=new Map,w=new Array(y+1),c=y;c>=m;c--)x=f[c],a=b.get(x),w[c]=a===void 0?-1:a,b.set(x,c);for(a=m;a<=_;a++)x=s[a],c=b.get(x),c!==void 0&&c!==-1?($[c]=i[a],C[c]=r[a],o&&(L[c]=o[a]),c=w[c],b.set(x,c)):r[a]();for(c=m;c<u;c++)c in $?(i[c]=$[c],r[c]=C[c],o&&(o[c]=L[c],o[c](c))):i[c]=O(g);i=i.slice(0,l=u),s=f.slice(0)}return i});function g(u){if(r[c]=u,o){const[b,w]=ue(c);return o[c]=w,t(f[c],b)}return t(f[c])}}}function j(e,t){return V(()=>e(t||{}))}function we(e){const t="fallback"in e&&{fallback:()=>e.fallback};return H(_e(()=>e.each,e.children,t||void 0))}function ye(e,t,n){let s=n.length,i=t.length,r=s,l=0,o=0,f=t[i-1].nextSibling,a=null;for(;l<i||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const c=r<s?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],c)}else if(r===o)for(;l<i;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!a){a=new Map;let g=o;for(;g<r;)a.set(n[g],g++)}const c=a.get(t[l]);if(c!=null)if(o<c&&c<r){let g=l,u=1,b;for(;++g<i&&g<r&&!((b=a.get(t[g]))==null||b!==c+u);)u++;if(u>c-o){const w=t[l];for(;o<c;)e.insertBefore(n[o++],w)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}function ve(e,t,n){let s;return O(i=>{s=i,t===document?e():k(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function M(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function A(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function k(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return R(e,t,s,n);G(i=>R(e,t(),i,n),s)}function R(e,t,n,s,i){for(N.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(N.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=S(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(N.context)return n;n=S(e,n,s)}else{if(r==="function")return G(()=>{let o=t();for(;typeof o=="function";)o=o();n=R(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[];if(K(o,t,i))return G(()=>n=R(e,o,n,s,!0)),()=>n;if(N.context){for(let f=0;f<o.length;f++)if(o[f].parentNode)return n=o}if(o.length===0){if(n=S(e,n,s),l)return n}else Array.isArray(n)?n.length===0?Z(e,o,s):ye(e,n,o):(n&&S(e),Z(e,o));n=o}else if(t instanceof Node){if(N.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=S(e,n,s,t);S(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function K(e,t,n){let s=!1;for(let i=0,r=t.length;i<r;i++){let l=t[i],o;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))s=K(e,l)||s;else if((o=typeof l)=="string")e.push(document.createTextNode(l));else if(o==="function")if(n){for(;typeof l=="function";)l=l();s=K(e,Array.isArray(l)?l:[l])||s}else e.push(l),s=!0;else e.push(document.createTextNode(l.toString()))}return s}function Z(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function S(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(i,o):e.insertBefore(i,n):f&&o.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var Ae="/assets/avatar.0fb454df.jpg",$e="/assets/icon-github.afe2821b.svg",Ce="/assets/icon-linkedin.503b417d.svg",xe="/assets/icon-twitter.79282568.svg",Se="/assets/icon-downArrow.1e294ff9.svg";const Ie=M('<header class="Intro" id="home"><div class="Intro__container"><h1 class="Intro__title">Hi, I\u2019m Elhanan.</h1><p class="Intro__subtitle">I\u2019m a full-stack developer. Programming is my passion.</p><img class="Intro__avatar" alt="Owner avatar"><ul class="Intro__social-links"><li class="Intro__social-link"><a href="https://github.com/synthetic-borealis" target="_blank" rel="noreferrer"><img class="Intro__social-icon" alt="Github icon"></a></li><li class="Intro__social-link"><a href="https://www.linkedin.com/in/elhanan-flesch/" target="_blank" rel="noreferrer"><img class="Intro__social-icon" alt="LinkedIn icon"></a></li><li class="Intro__social-link"><a href="https://twitter.com/AlignedSpud" target="_blank" rel="noreferrer"><img class="Intro__social-icon" alt="Twitter icon"></a></li></ul></div><a class="Intro__down-link" href="#about-me"><img class="Intro__down-icon" alt="Down pointing arrow"></a></header>'),Ne=()=>(()=>{const e=Ie.cloneNode(!0),t=e.firstChild,n=t.firstChild,s=n.nextSibling,i=s.nextSibling,r=i.nextSibling,l=r.firstChild,o=l.firstChild,f=o.firstChild,a=l.nextSibling,c=a.firstChild,g=c.firstChild,u=a.nextSibling,b=u.firstChild,w=b.firstChild,$=t.nextSibling,C=$.firstChild;return A(i,"src",Ae),A(f,"src",$e),A(g,"src",Ce),A(w,"src",xe),A(C,"src",Se),e})();const je=M('<section class="AboutMe" id="about-me"><div class="AboutMe__container"><h2 class="AboutMe__title">About Me</h2><ul class="AboutMe__paragraphs-container"><li class="AboutMe__paragraph-item"><p class="AboutMe__paragraph">I\u2019m passionate about programming and highly motivated to learn and grow as a web developer. I am a graduate of the Practicum100 by Yandex web development course.</p></li><li class="AboutMe__paragraph-item"><p class="AboutMe__paragraph">Aside from web development, I`m passionate about gaming and game development. My favourite games include the Half-Life series, Portal and Gone Home.</p></li></ul></div></section>'),Pe=()=>je.cloneNode(!0);const ke=M('<section class="Projects" id="projects"><div class="Projects__wrapper"><h2 class="Projects__title">Projects</h2><ul class="Projects__card-container"></ul><p class="Projects__message">Check out my Github account for more projects.</p></div></section>'),Ee=e=>{const t=pe(()=>e.children);return(()=>{const n=ke.cloneNode(!0),s=n.firstChild,i=s.firstChild,r=i.nextSibling;return k(r,t),n})()};const Te=M('<article class="ProjectCard"><img class="ProjectCard__thumbnail"><h2 class="ProjectCard__caption"></h2><p class="ProjectCard__description"></p><a class="ProjectCard__repo-link" target="_blank" rel="noreferrer">Github Repository</a></article>'),Me=e=>(()=>{const t=Te.cloneNode(!0),n=t.firstChild,s=n.nextSibling,i=s.nextSibling,r=i.nextSibling;return k(s,()=>e.name),k(i,()=>e.description),G(l=>{const o=e.thumbnail,f=`${e.name} thumbnail`,a=e.repoUrl;return o!==l._v$&&A(n,"src",l._v$=o),f!==l._v$2&&A(n,"alt",l._v$2=f),a!==l._v$3&&A(r,"href",l._v$3=a),l},{_v$:void 0,_v$2:void 0,_v$3:void 0}),t})();var Le="/assets/news-explorer-screenshot.da56fa62.jpg",Oe="/assets/around-the-us-screenshot.c7e0a8c0.jpg",Ue="/assets/npm-logo.69d5ab3c.jpg";const Be=[{name:"News Explorer",thumbnail:Le,description:"Search & bookmark your favourite news articles.",repoUrl:"https://github.com/synthetic-borealis/news-explorer-frontend"},{name:"Around the U.S.",thumbnail:Oe,description:"An image sharing app for travel lovers.",repoUrl:"https://github.com/synthetic-borealis/react-around-api-full"},{name:"Hirnfick",thumbnail:Ue,description:"A Brainfuck source-to-source compiler & library that can be embedded in websites and Node.js apps. It can be downloaded from Github and via NPM.",repoUrl:"https://github.com/synthetic-borealis/hirnfick.js"}],Ge=M("<li></li>"),qe=()=>[j(Ne,{}),j(Pe,{}),j(Ee,{get children(){return j(we,{each:Be,children:e=>(()=>{const t=Ge.cloneNode(!0);return k(t,()=>Me(e)),t})()})}})];ve(()=>j(qe,{}),document.getElementById("root"));