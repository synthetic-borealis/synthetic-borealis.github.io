const ke=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}};ke();const B={};function ye(e){B.context=e}const Se=(e,t)=>e===t,Ce=Symbol("solid-track"),V={equals:Se};let ue=he;const L={},j=1,W=2,Ae={owned:null,cleanups:null,context:null,owner:null};var w=null;let T=null,m=null,E=null,v=null,$=null,ee=0;function O(e,t){const i=m,n=w,o=e.length===0,r=o?Ae:{owned:null,cleanups:null,context:null,owner:t||n},l=o?e:()=>e(()=>re(r));w=r,m=null;try{return oe(l,!0)}finally{m=i,w=n}}function Q(e,t){t=t?Object.assign({},V,t):V;const i={value:e,observers:null,observerSlots:null,pending:L,comparator:t.equals||void 0},n=o=>(typeof o=="function"&&(o=o(i.pending!==L?i.pending:i.value)),ie(i,o));return[pe.bind(i),n]}function M(e,t,i){const n=ne(e,t,!1,j);R(n)}function $e(e,t,i){ue=je;const n=ne(e,t,!1,j);n.user=!0,$?$.push(n):R(n)}function z(e,t,i){i=i?Object.assign({},V,i):V;const n=ne(e,t,!0,0);return n.pending=L,n.observers=null,n.observerSlots=null,n.comparator=i.equals||void 0,R(n),pe.bind(n)}function Ne(e){if(E)return e();let t;const i=E=[];try{t=e()}finally{E=null}return oe(()=>{for(let n=0;n<i.length;n+=1){const o=i[n];if(o.pending!==L){const r=o.pending;o.pending=L,ie(o,r)}}},!1),t}function H(e){let t,i=m;return m=null,t=e(),m=i,t}function te(e){$e(()=>H(e))}function fe(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function Z(e){const t=z(e);return z(()=>X(t()))}function pe(){const e=T;if(this.sources&&(this.state||e)){const t=v;v=null,this.state===j||e?R(this):G(this),v=t}if(m){const t=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(t)):(m.sources=[this],m.sourceSlots=[t]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function ie(e,t,i){if(E)return e.pending===L&&E.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let n=!1;return e.value=t,e.observers&&e.observers.length&&oe(()=>{for(let o=0;o<e.observers.length;o+=1){const r=e.observers[o];n&&T.disposed.has(r),(n&&!r.tState||!n&&!r.state)&&(r.pure?v.push(r):$.push(r),r.observers&&me(r)),n||(r.state=j)}if(v.length>1e6)throw v=[],new Error},!1),t}function R(e){if(!e.fn)return;re(e);const t=w,i=m,n=ee;m=w=e,Be(e,e.value,n),m=i,w=t}function Be(e,t,i){let n;try{n=e.fn(t)}catch(o){ge(o)}(!e.updatedAt||e.updatedAt<=i)&&(e.observers&&e.observers.length?ie(e,n):e.value=n,e.updatedAt=i)}function ne(e,t,i,n=j,o){const r={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:null,pure:i};return w===null||w!==Ae&&(w.owned?w.owned.push(r):w.owned=[r]),r}function F(e){const t=T;if(e.state===0||t)return;if(e.state===W||t)return G(e);if(e.suspense&&H(e.suspense.inFallback))return e.suspense.effects.push(e);const i=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ee);)(e.state||t)&&i.push(e);for(let n=i.length-1;n>=0;n--)if(e=i[n],e.state===j||t)R(e);else if(e.state===W||t){const o=v;v=null,G(e,i[0]),v=o}}function oe(e,t){if(v)return e();let i=!1;t||(v=[]),$?i=!0:$=[],ee++;try{const n=e();return Me(i),n}catch(n){ge(n)}finally{v=null,i||($=null)}}function Me(e){v&&(he(v),v=null),!e&&($.length?Ne(()=>{ue($),$=null}):$=null)}function he(e){for(let t=0;t<e.length;t++)F(e[t])}function je(e){let t,i=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[i++]=o:F(o)}B.context&&ye();const n=e.length;for(t=0;t<i;t++)F(e[t]);for(t=n;t<e.length;t++)F(e[t])}function G(e,t){const i=T;e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];o.sources&&(o.state===j||i?o!==t&&F(o):(o.state===W||i)&&G(o,t))}}function me(e){const t=T;for(let i=0;i<e.observers.length;i+=1){const n=e.observers[i];(!n.state||t)&&(n.state=W,n.pure?v.push(n):$.push(n),n.observers&&me(n))}}function re(e){let t;if(e.sources)for(;e.sources.length;){const i=e.sources.pop(),n=e.sourceSlots.pop(),o=i.observers;if(o&&o.length){const r=o.pop(),l=i.observerSlots.pop();n<o.length&&(r.sourceSlots[l]=n,o[n]=r,i.observerSlots[n]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)re(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ge(e){throw e}function X(e){if(typeof e=="function"&&!e.length)return X(e());if(Array.isArray(e)){const t=[];for(let i=0;i<e.length;i++){const n=X(e[i]);Array.isArray(n)?t.push.apply(t,n):t.push(n)}return t}return e}const Pe=Symbol("fallback");function le(e){for(let t=0;t<e.length;t++)e[t]()}function Ie(e,t,i={}){let n=[],o=[],r=[],l=0,a=t.length>1?[]:null;return fe(()=>le(r)),()=>{let d=e()||[],u,s;return d[Ce],H(()=>{let A=d.length,_,c,g,N,C,h,y,S,P;if(A===0)l!==0&&(le(r),r=[],n=[],o=[],l=0,a&&(a=[])),i.fallback&&(n=[Pe],o[0]=O(ve=>(r[0]=ve,i.fallback())),l=1);else if(l===0){for(o=new Array(A),s=0;s<A;s++)n[s]=d[s],o[s]=O(p);l=A}else{for(g=new Array(A),N=new Array(A),a&&(C=new Array(A)),h=0,y=Math.min(l,A);h<y&&n[h]===d[h];h++);for(y=l-1,S=A-1;y>=h&&S>=h&&n[y]===d[S];y--,S--)g[S]=o[y],N[S]=r[y],a&&(C[S]=a[y]);for(_=new Map,c=new Array(S+1),s=S;s>=h;s--)P=d[s],u=_.get(P),c[s]=u===void 0?-1:u,_.set(P,s);for(u=h;u<=y;u++)P=n[u],s=_.get(P),s!==void 0&&s!==-1?(g[s]=o[u],N[s]=r[u],a&&(C[s]=a[u]),s=c[s],_.set(P,s)):r[u]();for(s=h;s<A;s++)s in g?(o[s]=g[s],r[s]=N[s],a&&(a[s]=C[s],a[s](s))):o[s]=O(p);o=o.slice(0,l=A),n=d.slice(0)}return o});function p(A){if(r[s]=A,a){const[_,c]=Q(s);return a[s]=c,t(d[s],_)}return t(d[s])}}}function x(e,t){return H(()=>e(t||{}))}function D(e){const t="fallback"in e&&{fallback:()=>e.fallback};return z(Ie(()=>e.each,e.children,t||void 0))}function ae(e){let t=!1;const i=z(()=>e.when,void 0,{equals:(n,o)=>t?n===o:!n==!o});return z(()=>{const n=i();if(n){const o=e.children;return(t=typeof o=="function"&&o.length>0)?H(()=>o(n)):o}return e.fallback})}function U(e,t){return z(e,void 0,t?void 0:{equals:t})}function Le(e,t,i){let n=i.length,o=t.length,r=n,l=0,a=0,d=t[o-1].nextSibling,u=null;for(;l<o||a<r;){if(t[l]===i[a]){l++,a++;continue}for(;t[o-1]===i[r-1];)o--,r--;if(o===l){const s=r<n?a?i[a-1].nextSibling:i[r-a]:d;for(;a<r;)e.insertBefore(i[a++],s)}else if(r===a)for(;l<o;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===i[r-1]&&i[a]===t[o-1]){const s=t[--o].nextSibling;e.insertBefore(i[a++],t[l++].nextSibling),e.insertBefore(i[--r],s),t[o]=i[r]}else{if(!u){u=new Map;let p=a;for(;p<r;)u.set(i[p],p++)}const s=u.get(t[l]);if(s!=null)if(a<s&&s<r){let p=l,A=1,_;for(;++p<o&&p<r&&!((_=u.get(t[p]))==null||_!==s+A);)A++;if(A>s-a){const c=t[l];for(;a<s;)e.insertBefore(i[a++],c)}else e.replaceChild(i[a++],t[l++])}else l++;else t[l++].remove()}}}const se="_$DX_DELEGATE";function ze(e,t,i){let n;return O(o=>{n=o,t===document?e():k(t,e(),t.firstChild?null:void 0,i)}),()=>{n(),t.textContent=""}}function f(e,t,i){const n=document.createElement("template");n.innerHTML=e;let o=n.content.firstChild;return i&&(o=o.firstChild),o}function _e(e,t=window.document){const i=t[se]||(t[se]=new Set);for(let n=0,o=e.length;n<o;n++){const r=e[n];i.has(r)||(i.add(r),t.addEventListener(r,Ee))}}function b(e,t,i){i==null?e.removeAttribute(t):e.setAttribute(t,i)}function xe(e,t){t==null?e.removeAttribute("class"):e.className=t}function k(e,t,i,n){if(i!==void 0&&!n&&(n=[]),typeof t!="function")return J(e,t,n,i);M(o=>J(e,t(),o,i),n)}function Ee(e){const t=`$$${e.type}`;let i=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==i&&Object.defineProperty(e,"target",{configurable:!0,value:i}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return i||document}}),B.registry&&!B.done&&(B.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));i!==null;){const n=i[t];if(n&&!i.disabled){const o=i[`${t}Data`];if(o!==void 0?n.call(i,o,e):n.call(i,e),e.cancelBubble)return}i=i.host&&i.host!==i&&i.host instanceof Node?i.host:i.parentNode}}function J(e,t,i,n,o){for(B.context&&!i&&(i=[...e.childNodes]);typeof i=="function";)i=i();if(t===i)return i;const r=typeof t,l=n!==void 0;if(e=l&&i[0]&&i[0].parentNode||e,r==="string"||r==="number"){if(B.context)return i;if(r==="number"&&(t=t.toString()),l){let a=i[0];a&&a.nodeType===3?a.data=t:a=document.createTextNode(t),i=I(e,i,n,a)}else i!==""&&typeof i=="string"?i=e.firstChild.data=t:i=e.textContent=t}else if(t==null||r==="boolean"){if(B.context)return i;i=I(e,i,n)}else{if(r==="function")return M(()=>{let a=t();for(;typeof a=="function";)a=a();i=J(e,a,i,n)}),()=>i;if(Array.isArray(t)){const a=[];if(Y(a,t,o))return M(()=>i=J(e,a,i,n,!0)),()=>i;if(B.context){for(let d=0;d<a.length;d++)if(a[d].parentNode)return i=a}if(a.length===0){if(i=I(e,i,n),l)return i}else Array.isArray(i)?i.length===0?ce(e,a,n):Le(e,i,a):(i&&I(e),ce(e,a));i=a}else if(t instanceof Node){if(B.context&&t.parentNode)return i=l?[t]:t;if(Array.isArray(i)){if(l)return i=I(e,i,n,t);I(e,i,null,t)}else i==null||i===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);i=t}}return i}function Y(e,t,i){let n=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],a;if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))n=Y(e,l)||n;else if((a=typeof l)=="string")e.push(document.createTextNode(l));else if(a==="function")if(i){for(;typeof l=="function";)l=l();n=Y(e,Array.isArray(l)?l:[l])||n}else e.push(l),n=!0;else e.push(document.createTextNode(l.toString()))}return n}function ce(e,t,i){for(let n=0,o=t.length;n<o;n++)e.insertBefore(t[n],i)}function I(e,t,i,n){if(i===void 0)return e.textContent="";const o=n||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const a=t[l];if(o!==a){const d=a.parentNode===e;!r&&!l?d?e.replaceChild(o,a):e.insertBefore(o,i):d&&a.remove()}else r=!0}}else e.insertBefore(o,i);return[o]}var Fe="/assets/icon-github.afe2821b.svg",Te="/assets/icon-linkedin.503b417d.svg",He="/assets/icon-twitter.79282568.svg",Re="/assets/icon-cv.bda9d050.svg";const De=f('<ul class="SocialLinks"><li class="SocialLinks__link"><a target="_blank" rel="noreferrer"><img class="SocialLinks__icon" alt="Github icon"></a></li><li class="SocialLinks__link"><a target="_blank" rel="noreferrer"><img class="SocialLinks__icon" alt="LinkedIn icon"></a></li><li class="SocialLinks__link"><a target="_blank" rel="noreferrer"><img class="SocialLinks__icon" alt="Twitter icon"></a></li><li class="SocialLinks__link"><a target="_blank" rel="noreferrer"><img class="SocialLinks__icon" alt="Resume icon"></a></li></ul>'),be=e=>(()=>{const t=De.cloneNode(!0),i=t.firstChild,n=i.firstChild,o=n.firstChild,r=i.nextSibling,l=r.firstChild,a=l.firstChild,d=r.nextSibling,u=d.firstChild,s=u.firstChild,p=d.nextSibling,A=p.firstChild,_=A.firstChild;return b(o,"src",Fe),b(a,"src",Te),b(s,"src",He),b(_,"src",Re),M(c=>{const g=e.githubLink,N=e.linkedinLink,C=e.twitterLink,h=e.resumeLink;return g!==c._v$&&b(n,"href",c._v$=g),N!==c._v$2&&b(l,"href",c._v$2=N),C!==c._v$3&&b(u,"href",c._v$3=C),h!==c._v$4&&b(A,"href",c._v$4=h),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),t})();const we={githubLink:"https://github.com/synthetic-borealis",linkedinLink:"https://www.linkedin.com/in/elhanan-flesch/",twitterLink:"https://twitter.com/AlignedSpud",resumeLink:"https://drive.google.com/file/d/18nlWDhxVmxxyEETQNJQhSDOQtdXN0ruZ/view?usp=sharing"},Ue=f('<div><ul class="MobileMenu__link-container"></ul><button class="MobileMenu__arrows" aria-label="Another close menu button"></button></div>'),Oe=e=>{const t=Z(()=>e.children);function i(){e.closeMenuFunc()}return(()=>{const n=Ue.cloneNode(!0),o=n.firstChild,r=o.nextSibling;return k(o,t),k(n,()=>be(we),r),r.$$click=i,M(()=>xe(n,e.isMenuVisible?"MobileMenu MobileMenu_visible":"MobileMenu")),n})()};_e(["click"]);const Qe=f('<nav class="NavBar"><div class="NavBar__container"></div></nav>'),Ve=f('<div class="NavBar__link-container"><button></button></div>'),We=f('<ul class="NavBar__link-container"><li class="NavBar__link-wrapper"><a href="#" class="NavBar__link">Home</a></li><li class="NavBar__link-wrapper"><a href="#about-me" class="NavBar__link">About Me</a></li><li class="NavBar__link-wrapper"><a href="#projects" class="NavBar__link">Projects</a></li><li class="NavBar__link-wrapper"><a href="#skills" class="NavBar__link">Skills</a></li></ul>'),Ge=f('<li class="NavBar__link-wrapper"><a href="#" class="NavBar__link">Home</a></li>'),Je=f('<li class="NavBar__link-wrapper"><a href="#about-me" class="NavBar__link">About Me</a></li>'),Ze=f('<li class="NavBar__link-wrapper"><a href="#projects" class="NavBar__link">Projects</a></li>'),qe=f('<li class="NavBar__link-wrapper"><a href="#skills" class="NavBar__link">Skills</a></li>'),Ke=e=>{const[i,n]=Q(window.innerWidth<=1024),[o,r]=Q(!1),[l,a]=Q(!1),d=.25;function u(){!i()&&window.innerWidth<=1024?n(!0):i()&&window.innerWidth>1024&&(r(!1),n(!1))}function s(){r(!0),setTimeout(()=>a(!0))}function p(){a(!1),setTimeout(()=>r(!1),d)}function A(){!i()||(o()?p():s())}return te(()=>{window.addEventListener("resize",u)}),fe(()=>{window.removeEventListener("resize",u)}),[(()=>{const _=Qe.cloneNode(!0),c=_.firstChild;return k(c,(()=>{const g=U(()=>!!i(),!0);return()=>g()?(()=>{const N=Ve.cloneNode(!0),C=N.firstChild;return C.$$click=A,M(h=>{const y=o()?"NavBar__menu-button NavBar__menu-button_close":"NavBar__menu-button",S=o()?"Menu button":"Close menu button";return y!==h._v$&&xe(C,h._v$=y),S!==h._v$2&&b(C,"aria-label",h._v$2=S),h},{_v$:void 0,_v$2:void 0}),N})():[We.cloneNode(!0),U(()=>be(e.socialLinks))]})()),_})(),U((()=>{const _=U(()=>!!(o()&&i()),!0);return()=>_()?x(Oe,{get isMenuVisible(){return l()},closeMenuFunc:p,get socialLinks(){return e.socialLinks},get children(){return[(()=>{const c=Ge.cloneNode(!0),g=c.firstChild;return g.$$click=p,c})(),(()=>{const c=Je.cloneNode(!0),g=c.firstChild;return g.$$click=p,c})(),(()=>{const c=Ze.cloneNode(!0),g=c.firstChild;return g.$$click=p,c})(),(()=>{const c=qe.cloneNode(!0),g=c.firstChild;return g.$$click=p,c})()]}}):""})())]};_e(["click"]);var de="/assets/avatar.3cf102ba.webp",Xe="/assets/icon-downArrow.1e294ff9.svg";const Ye=f('<header class="Intro" id="home"><div class="Intro__container"><h1 class="Intro__title">Hi, I\u2019m Elhanan.</h1><p class="Intro__subtitle">I\u2019m a full-stack developer. Programming is my passion.</p><img class="Intro__avatar" alt="Owner avatar"></div><a class="Intro__down-link" href="#about-me"><img class="Intro__down-icon" alt="Down pointing arrow"></a></header>'),et=()=>(te(()=>{const e=document.createElement("link");e.rel="preload",e.as="image",e.href=de,e.type="image/webp",document.head.appendChild(e)}),(()=>{const e=Ye.cloneNode(!0),t=e.firstChild,i=t.firstChild,n=i.nextSibling,o=n.nextSibling,r=t.nextSibling,l=r.firstChild;return b(o,"src",de),b(l,"src",Xe),e})());const tt=f('<section class="AboutMe" id="about-me"><div class="AboutMe__container"><h2 class="AboutMe__title">About Me</h2><ul class="AboutMe__paragraphs-container"><li class="AboutMe__paragraph-item"><p class="AboutMe__paragraph">I\u2019m passionate about programming and highly motivated to learn and grow as a web developer. I am a graduate of the Practicum100 by Yandex web development course.</p></li><li class="AboutMe__paragraph-item"><p class="AboutMe__paragraph">Aside from web development, I`m passionate about gaming and game development. My favourite games include the Half-Life series, Portal and Gone Home.</p></li></ul></div></section>'),it=()=>tt.cloneNode(!0);const nt=f('<section class="Projects" id="projects"><div class="Projects__container"><h2 class="Projects__title">Projects</h2><ul class="Projects__card-container"></ul><p class="Projects__message">Check out my Github account for more projects.</p></div></section>'),ot=e=>{const t=Z(()=>e.children);return(()=>{const i=nt.cloneNode(!0),n=i.firstChild,o=n.firstChild,r=o.nextSibling;return k(r,t),i})()};const rt=f('<li class="ProjectCard__link-wrapper"><a class="ProjectCard__link" target="_blank" rel="noreferrer">Live Site</a></li>'),lt=f('<li class="ProjectCard__link-wrapper"><a class="ProjectCard__link" target="_blank" rel="noreferrer">Source Code</a></li>'),at=f('<article class="ProjectCard"><img class="ProjectCard__thumbnail"><h2 class="ProjectCard__caption"></h2><p class="ProjectCard__description"></p><ul class="ProjectCard__link-container"></ul></article>'),st=e=>(()=>{const t=at.cloneNode(!0),i=t.firstChild,n=i.nextSibling,o=n.nextSibling,r=o.nextSibling;return k(n,()=>e.name),k(o,()=>e.description),k(r,x(ae,{get when(){return e.liveUrl},get children(){const l=rt.cloneNode(!0),a=l.firstChild;return M(()=>b(a,"href",e.liveUrl)),l}}),null),k(r,x(ae,{get when(){return e.repoUrl},get children(){const l=lt.cloneNode(!0),a=l.firstChild;return M(()=>b(a,"href",e.repoUrl)),l}}),null),M(l=>{const a=e.thumbnail,d=`${e.name} thumbnail`;return a!==l._v$&&b(i,"src",l._v$=a),d!==l._v$2&&b(i,"alt",l._v$2=d),l},{_v$:void 0,_v$2:void 0}),t})();const ct=f('<section class="Skills" id="skills"><div class="Skills__container"><h2 class="Skills__title">Skills</h2><ul class="Skills__lists-container"></ul></div></section>'),dt=e=>{const t=Z(()=>e.children);return(()=>{const i=ct.cloneNode(!0),n=i.firstChild,o=n.firstChild,r=o.nextSibling;return k(r,t),i})()};const ut=f('<li class="SkillsList"><h2 class="SkillsList__title"></h2><ul class="SkillsList__card-container"></ul></li>'),q=e=>{const t=Z(()=>e.children);return(()=>{const i=ut.cloneNode(!0),n=i.firstChild,o=n.nextSibling;return k(n,()=>e.caption),k(o,t),i})()};const At=f('<li class="SkillCard"><img class="SkillCard__icon"><p class="SkillCard__caption"></p></li>'),K=e=>(()=>{const t=At.cloneNode(!0),i=t.firstChild,n=i.nextSibling;return k(n,()=>e.name),M(o=>{const r=e.icon,l=`${e.name} icon`;return r!==o._v$&&b(i,"src",o._v$=r),l!==o._v$2&&b(i,"alt",o._v$2=l),o},{_v$:void 0,_v$2:void 0}),t})();const ft=f('<footer class="Footer"><div class="Footer__container"><p class="Footer__copyright">\xA9 2022 Coding & Design by Elhanan Flesch</p></div></footer>'),pt=()=>ft.cloneNode(!0);function ht(e){const t=document.documentElement;t.style.setProperty("--main-bg-colour",e.mainBackground),t.style.setProperty("--menu-bg-colour",e.menuBackground),t.style.setProperty("--nav-bg-colour",e.navBackground),t.style.setProperty("--card-bg-colour",e.cardBackground),t.style.setProperty("--footer-bg-colour",e.footerBackground),t.style.setProperty("--nav-border-colour",e.navBorder),t.style.setProperty("--text-colour",e.text),t.style.setProperty("--link-colour",e.link)}function mt(){ht({mainBackground:"#222222",menuBackground:"rgb(51, 51, 51, 0.5)",navBackground:"#111122",cardBackground:"#333344",footerBackground:"#222244",navBorder:"#adadde",text:"#ededfd",link:"#fdfdfd"})}var gt="/assets/news-explorer-screenshot.fe93a2e4.webp",_t="/assets/around-the-us-screenshot.2f50c10b.webp",xt="data:image/webp;base64,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";const bt=[{name:"News Explorer",thumbnail:gt,description:"Search & bookmark your favourite news articles.",repoUrl:"https://github.com/synthetic-borealis/news-explorer-frontend"},{name:"Around the U.S.",thumbnail:_t,description:"An image sharing app for travel lovers.",liveUrl:"https://synthetic-borealis.github.io/react-around-api-full",repoUrl:"https://github.com/synthetic-borealis/react-around-api-full"},{name:"Hirnfick",thumbnail:xt,description:"A Brainfuck source-to-source compiler & library that can be embedded in websites and Node.js apps. It can be downloaded from Github and via NPM.",repoUrl:"https://github.com/synthetic-borealis/hirnfick.js"}];var wt="/assets/logo-html5.67b0d7b8.svg",vt="/assets/logo-css.6c636de5.svg",kt="/assets/logo-react.2232e29e.svg",yt="/assets/logo-nodejs.dfbdc027.svg",St="/assets/logo-mongodb.3be5722c.svg",Ct="/assets/logo-expressjs.b241ae7e.svg",$t="/assets/logo-python.fbc3b698.svg",Nt="/assets/logo-cpp.7a16311b.svg",Bt="/assets/logo-csharp.77405d72.svg",Mt="/assets/logo-typescript.b487cbba.svg",jt="/assets/logo-sass.0db97415.svg",Pt="/assets/logo-solidjs.9821eb0a.svg",It="/assets/logo-kotlin.9e209d66.svg";const Lt=[{name:"HTML",icon:wt},{name:"CSS",icon:vt},{name:"React.js",icon:kt},{name:"Node.js",icon:yt},{name:"MongoDB",icon:St},{name:"Express.js",icon:Ct}],zt=[{name:"Python",icon:$t},{name:"C++",icon:Nt},{name:"C#",icon:Bt},{name:"Solid.js",icon:Pt}],Et=[{name:"TypeScript",icon:Mt},{name:"Sass",icon:jt},{name:"Kotlin",icon:It}],Ft=f("<li></li>"),Tt=()=>(te(()=>{mt()}),[x(Ke,{socialLinks:we}),x(et,{}),x(it,{}),x(ot,{get children(){return x(D,{each:bt,children:e=>(()=>{const t=Ft.cloneNode(!0);return k(t,()=>st(e)),t})()})}}),x(dt,{get children(){return[x(q,{caption:"Currently Using",get children(){return x(D,{each:Lt,children:e=>K(e)})}}),x(q,{caption:"Basic",get children(){return x(D,{each:zt,children:e=>K(e)})}}),x(q,{caption:"Currently Learning",get children(){return x(D,{each:Et,children:e=>K(e)})}})]}}),x(pt,{})]);ze(()=>x(Tt,{}),document.getElementById("root"));
