const Q=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}};Q();const _={};let V=H;const S={},I=1,A=2,B={owned:null,cleanups:null,context:null,owner:null};var a=null;let C=null,w=null,f=null,d=null,T=0;function W(e,t){const i=a,n=e.length===0?B:{owned:null,cleanups:null,context:null,owner:t||i};a=n;try{return L(()=>e(()=>P(n)),!0)}finally{a=i}}function $(e,t,i){const n=X(e,t,!1,I);U(n)}function Y(e){if(w)return e();let t;const i=w=[];try{t=e()}finally{w=null}return L(()=>{for(let n=0;n<i.length;n+=1){const s=i[n];if(s.pending!==S){const l=s.pending;s.pending=S,D(s,l)}}},!1),t}function O(e){let t;return t=e(),t}function D(e,t,i){if(w)return e.pending===S&&w.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let n=!1;return e.value=t,e.observers&&e.observers.length&&L(()=>{for(let s=0;s<e.observers.length;s+=1){const l=e.observers[s];n&&C.disposed.has(l),(n&&!l.tState||!n&&!l.state)&&(l.pure?f.push(l):d.push(l),l.observers&&R(l)),n||(l.state=I)}if(f.length>1e6)throw f=[],new Error},!1),t}function U(e){if(!e.fn)return;P(e);const t=a,i=T;a=e,J(e,e.value,i),a=t}function J(e,t,i){let n;try{n=e.fn(t)}catch(s){q(s)}(!e.updatedAt||e.updatedAt<=i)&&(e.observers&&e.observers.length?D(e,n):e.value=n,e.updatedAt=i)}function X(e,t,i,n,s){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:a,context:null,pure:i};return a===null||a!==B&&(a.owned?a.owned.push(l):a.owned=[l]),l}function G(e){const t=C;if(e.state===0||t)return;if(e.state===A||t)return N(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const i=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<T);)(e.state||t)&&i.push(e);for(let n=i.length-1;n>=0;n--)if(e=i[n],e.state===I||t)U(e);else if(e.state===A||t){const s=f;f=null,N(e,i[0]),f=s}}function L(e,t){if(f)return e();let i=!1;t||(f=[]),d?i=!0:d=[],T++;try{const n=e();return Z(i),n}catch(n){q(n)}finally{f=null,i||(d=null)}}function Z(e){f&&(H(f),f=null),!e&&(d.length?Y(()=>{V(d),d=null}):d=null)}function H(e){for(let t=0;t<e.length;t++)G(e[t])}function N(e,t){const i=C;e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===I||i?s!==t&&G(s):(s.state===A||i)&&N(s,t))}}function R(e){const t=C;for(let i=0;i<e.observers.length;i+=1){const n=e.observers[i];(!n.state||t)&&(n.state=A,n.pure?f.push(n):d.push(n),n.observers&&R(n))}}function P(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),n=e.sourceSlots.pop(),s=i.observers;if(s&&s.length){const l=s.pop(),o=i.observerSlots.pop();n<s.length&&(l.sourceSlots[o]=n,s[n]=l,i.observerSlots[n]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)P(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function q(e){throw e}function E(e,t){return O(()=>e(t||{}))}function z(e,t,i){let n=i.length,s=t.length,l=n,o=0,r=0,u=t[s-1].nextSibling,h=null;for(;o<s||r<l;){if(t[o]===i[r]){o++,r++;continue}for(;t[s-1]===i[l-1];)s--,l--;if(s===o){const c=l<n?r?i[r-1].nextSibling:i[l-r]:u;for(;r<l;)e.insertBefore(i[r++],c)}else if(l===r)for(;o<s;)(!h||!h.has(t[o]))&&t[o].remove(),o++;else if(t[o]===i[l-1]&&i[r]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(i[r++],t[o++].nextSibling),e.insertBefore(i[--l],c),t[s]=i[l]}else{if(!h){h=new Map;let p=r;for(;p<l;)h.set(i[p],p++)}const c=h.get(t[o]);if(c!=null)if(r<c&&c<l){let p=o,m=1,y;for(;++p<s&&p<l&&!((y=h.get(t[p]))==null||y!==c+m);)m++;if(m>c-r){const v=t[o];for(;r<c;)e.insertBefore(i[r++],v)}else e.replaceChild(i[r++],t[o++])}else o++;else t[o++].remove()}}}function ee(e,t,i){let n;return W(s=>{n=s,t===document?e():te(t,e(),t.firstChild?null:void 0,i)}),()=>{n(),t.textContent=""}}function F(e,t,i){const n=document.createElement("template");n.innerHTML=e;let s=n.content.firstChild;return i&&(s=s.firstChild),s}function b(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)}function te(e,t,i,n){if(i!==void 0&&!n&&(n=[]),typeof t!="function")return x(e,t,n,i);$(s=>x(e,t(),s,i),n)}function x(e,t,i,n,s){for(_.context&&!i&&(i=[...e.childNodes]);typeof i=="function";)i=i();if(t===i)return i;const l=typeof t,o=n!==void 0;if(e=o&&i[0]&&i[0].parentNode||e,l==="string"||l==="number"){if(_.context)return i;if(l==="number"&&(t=t.toString()),o){let r=i[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),i=g(e,i,n,r)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t}else if(t==null||l==="boolean"){if(_.context)return i;i=g(e,i,n)}else{if(l==="function")return $(()=>{let r=t();for(;typeof r=="function";)r=r();i=x(e,r,i,n)}),()=>i;if(Array.isArray(t)){const r=[];if(M(r,t,s))return $(()=>i=x(e,r,i,n,!0)),()=>i;if(_.context){for(let u=0;u<r.length;u++)if(r[u].parentNode)return i=r}if(r.length===0){if(i=g(e,i,n),o)return i}else Array.isArray(i)?i.length===0?k(e,r,n):z(e,i,r):(i&&g(e),k(e,r));i=r}else if(t instanceof Node){if(_.context&&t.parentNode)return i=o?[t]:t;if(Array.isArray(i)){if(o)return i=g(e,i,n,t);g(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}}return i}function M(e,t,i){let n=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],r;if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))n=M(e,o)||n;else if((r=typeof o)=="string")e.push(document.createTextNode(o));else if(r==="function")if(i){for(;typeof o=="function";)o=o();n=M(e,Array.isArray(o)?o:[o])||n}else e.push(o),n=!0;else e.push(document.createTextNode(o.toString()))}return n}function k(e,t,i){for(let n=0,s=t.length;n<s;n++)e.insertBefore(t[n],i)}function g(e,t,i,n){if(i===void 0)return e.textContent="";const s=n||document.createTextNode("");if(t.length){let l=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(s!==r){const u=r.parentNode===e;!l&&!o?u?e.replaceChild(s,r):e.insertBefore(s,i):u&&r.remove()}else l=!0}}else e.insertBefore(s,i);return[s]}var ie="/assets/avatar.0fb454df.jpg",ne="/assets/icon-github.afe2821b.svg",se="/assets/icon-linkedin.503b417d.svg",le="/assets/icon-twitter.79282568.svg",oe="/assets/icon-downArrow.1e294ff9.svg";const re=F('<header class="Intro" id="home"><div class="Intro__container"><h1 class="Intro__title">Hi, I\u2019m Elhanan.</h1><p class="Intro__subtitle">I\u2019m a full-stack developer. Programming is my passion.</p><img class="Intro__avatar" alt="Owner avatar"><ul class="Intro__social-links"><li class="Intro__social-link"><a href="https://github.com/synthetic-borealis" target="_blank" rel="noreferrer"><img class="Intro__social-icon" alt="Github icon"></a></li><li class="Intro__social-link"><a href="https://www.linkedin.com/in/elhanan-flesch/" target="_blank" rel="noreferrer"><img class="Intro__social-icon" alt="LinkedIn icon"></a></li><li class="Intro__social-link"><a href="https://twitter.com/AlignedSpud" target="_blank" rel="noreferrer"><img class="Intro__social-icon" alt="Twitter icon"></a></li></ul></div><a class="Intro__down-link" href="#about-me"><img class="Intro__down-icon" alt="Down pointing arrow"></a></header>'),fe=()=>(()=>{const e=re.cloneNode(!0),t=e.firstChild,i=t.firstChild,n=i.nextSibling,s=n.nextSibling,l=s.nextSibling,o=l.firstChild,r=o.firstChild,u=r.firstChild,h=o.nextSibling,c=h.firstChild,p=c.firstChild,m=h.nextSibling,y=m.firstChild,v=y.firstChild,j=t.nextSibling,K=j.firstChild;return b(s,"src",ie),b(u,"src",ne),b(p,"src",se),b(v,"src",le),b(K,"src",oe),e})();const ce=F('<section class="AboutMe" id="about-me"><div class="AboutMe__container"><h2 class="AboutMe__title">About Me</h2><ul class="AboutMe__paragraphs-container"><li class="AboutMe__paragraph-item"><p class="AboutMe__paragraph">I\u2019m passionate about programming and highly motivated to learn and grow as a web developer. I am a graduate of the Practicum100 by Yandex web development course.</p></li><li class="AboutMe__paragraph-item"><p class="AboutMe__paragraph">Aside from web development, I`m passionate about gaming and game development. My favourite games include the Half-Life series, Portal and Gone Home.</p></li></ul></div></section>'),ae=()=>ce.cloneNode(!0),ue=()=>[E(fe,{}),E(ae,{})];ee(()=>E(ue,{}),document.getElementById("root"));
