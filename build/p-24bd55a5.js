const e={baseUrl:"https://fightingmooseknuckleshockey.club/",teamId:"8842",leagueId:"4051",teamName:"Fighting Moose Knuckles Hockey Club",teamDescription:"",logo:"assets/logo-white.png",beerRules:"assets/beer-rules.md",beerCsv:"assets/beer.js"};let t,l,n,s=!1,o=!1,i=!1,r=null,c=!1;const a="undefined"!=typeof window?window:{},f=a.document||{head:{}},u={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,l,n)=>e.addEventListener(t,l,n),rel:(e,t,l,n)=>e.removeEventListener(t,l,n),ce:(e,t)=>new CustomEvent(e,t)},d=e=>Promise.resolve(e),h=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),p={},$="http://www.w3.org/1999/xlink",m=new WeakMap,y=e=>"sc-"+e.o,b={},w=e=>"object"==(e=typeof e)||"function"===e,k=(e,t,...l)=>{let n=null,s=null,o=null,i=!1,r=!1,c=[];const a=t=>{for(let l=0;l<t.length;l++)n=t[l],Array.isArray(n)?a(n):null!=n&&"boolean"!=typeof n&&((i="function"!=typeof e&&!w(n))&&(n+=""),i&&r?c[c.length-1].i+=n:c.push(i?g(null,n):n),r=i)};if(a(l),t){t.key&&(s=t.key),t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,S);const f=g(e,null);return f.u=t,c.length>0&&(f.h=c),f.p=s,f.$=o,f},g=(e,t)=>({t:0,m:e,i:t,k:null,h:null,u:null,p:null,$:null}),v={},S={forEach:(e,t)=>e.map(j).forEach(t),map:(e,t)=>e.map(j).map(t).map(C)},j=e=>({vattrs:e.u,vchildren:e.h,vkey:e.p,vname:e.$,vtag:e.m,vtext:e.i}),C=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),k(e.vtag,t,...e.vchildren||[])}const t=g(e.vtag,e.vtext);return t.u=e.vattrs,t.h=e.vchildren,t.p=e.vkey,t.$=e.vname,t},M=(e,t,l,n,s,o)=>{if(l!==n){let i=fe(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,s=R(l),o=R(n);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in l)n&&null!=n[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in n)l&&n[t]===l[t]||(t.includes("-")?e.style.setProperty(t,n[t]):e.style[t]=n[t])}else if("key"===t);else if("ref"===t)n&&n(e);else if(i||"o"!==t[0]||"n"!==t[1]){const c=w(n);if((i||c&&null!==n)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{let s=null==n?"":n;"list"===t?i=!1:null!=l&&e[t]==s||(e[t]=s)}}catch(e){}let a=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,a=!0),null==n||!1===n?!1===n&&""!==e.getAttribute(t)||(a?e.removeAttributeNS($,t):e.removeAttribute(t)):(!i||4&o||s)&&!c&&(n=!0===n?"":n,a?e.setAttributeNS($,t,n):e.setAttribute(t,n))}else t="-"===t[2]?t.slice(3):fe(a,r)?r.slice(2):r[2]+t.slice(3),l&&u.rel(e,t,l,!1),n&&u.ael(e,t,n,!1)}},O=/\s/,R=e=>e?e.split(O):[],U=(e,t,l,n)=>{const s=11===t.k.nodeType&&t.k.host?t.k.host:t.k,o=e&&e.u||b,i=t.u||b;for(n in o)n in i||M(s,n,o[n],void 0,l,t.t);for(n in i)M(s,n,o[n],i[n],l,t.t)},x=(e,o,r,c)=>{let a,u,d,h=o.h[r],p=0;if(s||(i=!0,"slot"===h.m&&(t&&c.classList.add(t+"-s"),h.t|=h.h?2:1)),null!==h.i)a=h.k=f.createTextNode(h.i);else if(1&h.t)a=h.k=f.createTextNode("");else if(a=h.k=f.createElement(2&h.t?"slot-fb":h.m),U(null,h,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),h.h)for(p=0;p<h.h.length;++p)u=x(e,h,p,a),u&&a.appendChild(u);return a["s-hn"]=n,3&h.t&&(a["s-sr"]=!0,a["s-cr"]=l,a["s-sn"]=h.$||"",d=e&&e.h&&e.h[r],d&&d.m===h.m&&e.k&&P(e.k,!1)),a},P=(e,t)=>{u.t|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const s=l[e];s["s-hn"]!==n&&s["s-ol"]&&(F(s).insertBefore(s,D(s)),s["s-ol"].remove(),s["s-ol"]=void 0,i=!0),t&&P(s,t)}u.t&=-2},E=(e,t,l,s,o,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);o<=i;++o)s[o]&&(r=x(null,l,o,e),r&&(s[o].k=r,c.insertBefore(r,D(t))))},L=(e,t,l,n,s)=>{for(;t<=l;++t)(n=e[t])&&(s=n.k,I(n),o=!0,s["s-ol"]?s["s-ol"].remove():P(s,!0),s.remove())},T=(e,t)=>e.m===t.m&&("slot"===e.m?e.$===t.$:e.p===t.p),D=e=>e&&e["s-ol"]||e,F=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,N=(e,t)=>{const l=t.k=e.k,n=e.h,s=t.h,o=t.i;let i;null===o?("slot"===t.m||U(e,t,!1),null!==n&&null!==s?((e,t,l,n)=>{let s,o,i=0,r=0,c=0,a=0,f=t.length-1,u=t[0],d=t[f],h=n.length-1,p=n[0],$=n[h];for(;i<=f&&r<=h;)if(null==u)u=t[++i];else if(null==d)d=t[--f];else if(null==p)p=n[++r];else if(null==$)$=n[--h];else if(T(u,p))N(u,p),u=t[++i],p=n[++r];else if(T(d,$))N(d,$),d=t[--f],$=n[--h];else if(T(u,$))"slot"!==u.m&&"slot"!==$.m||P(u.k.parentNode,!1),N(u,$),e.insertBefore(u.k,d.k.nextSibling),u=t[++i],$=n[--h];else if(T(d,p))"slot"!==u.m&&"slot"!==$.m||P(d.k.parentNode,!1),N(d,p),e.insertBefore(d.k,u.k),d=t[--f],p=n[++r];else{for(c=-1,a=i;a<=f;++a)if(t[a]&&null!==t[a].p&&t[a].p===p.p){c=a;break}c>=0?(o=t[c],o.m!==p.m?s=x(t&&t[r],l,c,e):(N(o,p),t[c]=void 0,s=o.k),p=n[++r]):(s=x(t&&t[r],l,r,e),p=n[++r]),s&&F(u.k).insertBefore(s,D(u.k))}i>f?E(e,null==n[h+1]?null:n[h+1].k,l,n,r,h):r>h&&L(t,i,f)})(l,n,t,s):null!==s?(null!==e.i&&(l.textContent=""),E(l,null,t,s,0,s.length-1)):null!==n&&L(n,0,n.length-1)):(i=l["s-cr"])?i.parentNode.textContent=o:e.i!==o&&(l.data=o)},W=e=>{let t,l,n,s,o,i,r=e.childNodes;for(l=0,n=r.length;l<n;l++)if(t=r[l],1===t.nodeType){if(t["s-sr"])for(o=t["s-sn"],t.hidden=!1,s=0;s<n;s++)if(i=r[s].nodeType,r[s]["s-hn"]!==t["s-hn"]||""!==o){if(1===i&&o===r[s].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==r[s].textContent.trim()){t.hidden=!0;break}W(t)}},q=[],A=e=>{let t,l,n,s,i,r,c=0,a=e.childNodes,f=a.length;for(;c<f;c++){if(t=a[c],t["s-sr"]&&(l=t["s-cr"])&&l.parentNode)for(n=l.parentNode.childNodes,s=t["s-sn"],r=n.length-1;r>=0;r--)l=n[r],l["s-cn"]||l["s-nr"]||l["s-hn"]===t["s-hn"]||(H(l,s)?(i=q.find((e=>e.g===l)),o=!0,l["s-sn"]=l["s-sn"]||s,i?i.v=t:q.push({v:t,g:l}),l["s-sr"]&&q.map((e=>{H(e.g,l["s-sn"])&&(i=q.find((e=>e.g===l)),i&&!e.v&&(e.v=i.v))}))):q.some((e=>e.g===l))||q.push({g:l}));1===t.nodeType&&A(t)}},H=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,I=e=>{e.u&&e.u.ref&&e.u.ref(null),e.h&&e.h.map(I)},K=e=>re(e).S,V=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},_=(e,t)=>{if(e.t|=16,!(4&e.t))return V(e,e.C),ve((()=>z(e,t)));e.t|=512},z=(e,t)=>{const l=e.M;let n;return t&&(n=Z(l,"componentWillLoad")),ee(n,(()=>B(e,l,t)))},B=async(e,t,l)=>{const n=e.S,s=n["s-rc"];l&&(e=>{const t=e.O,l=e.S,n=t.t,s=((e,t)=>{let l=y(t),n=pe.get(l);if(e=11===e.nodeType?e:f,n)if("string"==typeof n){let t,s=m.get(e=e.head||e);s||m.set(e,s=new Set),s.has(l)||(t=f.createElement("style"),t.innerHTML=n,e.insertBefore(t,e.querySelector("link")),s&&s.add(l))}else e.adoptedStyleSheets.includes(n)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,n]);return l})(l.shadowRoot?l.shadowRoot:l.getRootNode(),t);10&n&&(l["s-sc"]=s,l.classList.add(s+"-h"))})(e);G(e,t),s&&(s.map((e=>e())),n["s-rc"]=void 0);{const t=n["s-p"],l=()=>Q(e);0===t.length?l():(Promise.all(t).then(l),e.t|=4,t.length=0)}},G=(e,c)=>{try{r=c,c=c.render&&c.render(),e.t&=-17,e.t|=2,((e,r)=>{const c=e.S,a=e.O,d=e.R||g(null,null),h=(e=>e&&e.m===v)(r)?r:k(null,null,r);if(n=c.tagName,a.U&&(h.u=h.u||{},a.U.map((([e,t])=>h.u[t]=c[e]))),h.m=null,h.t|=4,e.R=h,h.k=d.k=c.shadowRoot||c,t=c["s-sc"],l=c["s-cr"],s=0!=(1&a.t),o=!1,N(d,h),u.t|=1,i){let e,t,l,n,s,o;A(h.k);let i=0;for(;i<q.length;i++)e=q[i],t=e.g,t["s-ol"]||(l=f.createTextNode(""),l["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=l,t));for(i=0;i<q.length;i++)if(e=q[i],t=e.g,e.v){for(n=e.v.parentNode,s=e.v.nextSibling,l=t["s-ol"];l=l.previousSibling;)if(o=l["s-nr"],o&&o["s-sn"]===t["s-sn"]&&n===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){s=o;break}(!s&&n!==t.parentNode||t.nextSibling!==s)&&t!==s&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),n.insertBefore(t,s))}else 1===t.nodeType&&(t.hidden=!0)}o&&W(h.k),u.t&=-2,q.length=0})(e,c)}catch(t){ue(t,e.S)}return r=null,null},J=()=>r,Q=e=>{const t=e.S,l=e.M,n=e.C;64&e.t?Z(l,"componentDidUpdate"):(e.t|=64,te(t),Z(l,"componentDidLoad"),e.P(t),n||Y()),e.j&&(e.j(),e.j=void 0),512&e.t&&ke((()=>_(e,!1))),e.t&=-517},X=e=>{{const t=re(e),l=t.S.isConnected;return l&&2==(18&t.t)&&_(t,!1),l}},Y=()=>{te(f.documentElement),ke((()=>(e=>{const t=u.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(a)))},Z=(e,t,l)=>{if(e&&e[t])try{return e[t](l)}catch(e){ue(e)}},ee=(e,t)=>e&&e.then?e.then(t):t(),te=e=>e.classList.add("hydrated"),le=(e,t,l)=>{if(t.L){e.watchers&&(t.T=e.watchers);const n=Object.entries(t.L),s=e.prototype;if(n.map((([e,[n]])=>{(31&n||2&l&&32&n)&&Object.defineProperty(s,e,{get(){return((e,t)=>re(this).D.get(t))(0,e)},set(l){((e,t,l,n)=>{const s=re(e),o=s.S,i=s.D.get(t),r=s.t,c=s.M;if(l=((e,t)=>null==e||w(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(l,n.L[t][0]),!(8&r&&void 0!==i||l===i)&&(s.D.set(t,l),c)){if(n.T&&128&r){const e=n.T[t];e&&e.map((e=>{try{c[e](l,i,t)}catch(e){ue(e,o)}}))}2==(18&r)&&_(s,!1)}})(this,e,l,t)},configurable:!0,enumerable:!0})})),1&l){const l=new Map;s.attributeChangedCallback=function(e,t,n){u.jmp((()=>{const t=l.get(e);if(this.hasOwnProperty(t))n=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==n)return;this[t]=(null!==n||"boolean"!=typeof this[t])&&n}))},e.observedAttributes=n.filter((([e,t])=>15&t[0])).map((([e,n])=>{const s=n[1]||e;return l.set(s,e),512&n[0]&&t.U.push([e,s]),s}))}}return e},ne=e=>{Z(e,"connectedCallback")},se=(e,t={})=>{const l=[],n=t.exclude||[],s=a.customElements,o=f.head,i=o.querySelector("meta[charset]"),r=f.createElement("style"),c=[];let d,p=!0;Object.assign(u,t),u.l=new URL(t.resourcesUrl||"./",f.baseURI).href,e.map((e=>{e[1].map((t=>{const o={t:t[0],o:t[1],L:t[2],F:t[3]};o.L=t[2],o.U=[],o.T={};const i=o.o,r=class extends HTMLElement{constructor(e){super(e),ae(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){d&&(clearTimeout(d),d=null),p?c.push(this):u.jmp((()=>(e=>{if(0==(1&u.t)){const t=re(e),l=t.O,n=()=>{};if(1&t.t)ne(t.M);else{t.t|=1,12&l.t&&(e=>{const t=e["s-cr"]=f.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let l=e;for(;l=l.parentNode||l.host;)if(l["s-p"]){V(t,t.C=l);break}}l.L&&Object.entries(l.L).map((([t,[l]])=>{if(31&l&&e.hasOwnProperty(t)){const l=e[t];delete e[t],e[t]=l}})),(async(e,t,l,n,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=he(l)).then){const e=()=>{};s=await s,e()}s.isProxied||(l.T=s.watchers,le(s,l,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){ue(e)}t.t&=-9,t.t|=128,e(),ne(t.M)}if(s.style){let e=s.style;const t=y(l);if(!pe.has(t)){const n=()=>{};((e,t,l)=>{let n=pe.get(e);h&&l?(n=n||new CSSStyleSheet,n.replace(t)):n=t,pe.set(e,n)})(t,e,!!(1&l.t)),n()}}}const o=t.C,i=()=>_(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,l)}n()}})(this)))}disconnectedCallback(){u.jmp((()=>(()=>{if(0==(1&u.t)){const e=re(this).M;Z(e,"disconnectedCallback"),Z(e,"componentDidUnload")}})()))}componentOnReady(){return re(this).N}};o.W=e[0],n.includes(i)||s.get(i)||(l.push(i),s.define(i,le(r,o,1)))}))})),r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),o.insertBefore(r,i?i.nextSibling:o.firstChild),p=!1,c.length?c.map((e=>e.connectedCallback())):u.jmp((()=>d=setTimeout(Y,30)))},oe=(e,t)=>t in p?p[t]:"window"===t?a:"document"===t?f:"isServer"!==t&&"isPrerender"!==t&&("isClient"===t||("resourcesUrl"===t||"publicPath"===t?(()=>{const e=new URL(".",u.l);return e.origin!==a.location.origin?e.href:e.pathname})():"queue"===t?{write:ve,read:ge,tick:{then:e=>ke(e)}}:void 0)),ie=new WeakMap,re=e=>ie.get(e),ce=(e,t)=>ie.set(t.M=e,t),ae=(e,t)=>{const l={t:0,S:e,O:t,D:new Map};return l.N=new Promise((e=>l.P=e)),e["s-p"]=[],e["s-rc"]=[],ie.set(e,l)},fe=(e,t)=>t in e,ue=(e,t)=>(0,console.error)(e,t),de=new Map,he=e=>{const t=e.o.replace(/-/g,"_"),l=e.W,n=de.get(l);return n?n[t]:import(`./${l}.entry.js`).then((e=>(de.set(l,e),e[t])),ue)},pe=new Map,$e=[],me=[],ye=(e,t)=>l=>{e.push(l),c||(c=!0,t&&4&u.t?ke(we):u.raf(we))},be=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){ue(e)}e.length=0},we=()=>{be($e),be(me),(c=$e.length>0)&&u.raf(we)},ke=e=>d().then(e),ge=ye($e,!1),ve=ye(me,!0);export{e as E,oe as a,se as b,J as c,X as f,K as g,k as h,d as p,ce as r}