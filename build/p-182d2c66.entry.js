import{r as t,h as e}from"./p-1523d1f5.js";import{s as r,b as o,t as a}from"./p-ba09dce9.js";let i=class{constructor(e){t(this,e)}async componentWillLoad(){if(r.standings)return void(this.standings=r.standings);const t=await o(),e=this.getData(t),a=this.getStats(t);this.standings=e.map((t=>Object.assign(Object.assign({},t),a[t.teamId]))),r.standings=this.standings}getTeams(t){return t.included.filter((t=>"teams"===t.type)).reduce(((t,e)=>(t[e.id]=e.attributes.name,t)),{[t.data.id]:t.data.attributes.name})}getStatsTypes(t){return t.included.filter((t=>"stats"===t.type)).reduce(((t,e)=>(t[e.id]=e.attributes.short_desc,t)),{})}getStats(t){const e=this.getStatsTypes(t);return t.included.filter((t=>"stat-events"===t.type)).reduce(((t,r)=>{const{value:o,team_id:a,stat_id:i}=r.attributes;return t[a]||(t[a]={}),t[a]=Object.assign(Object.assign({},t[a]),null==t[a][e[i]]?{[e[i]]:o}:{[e[i]]:t[a][e[i]]+o}),t}),{})}getData(t){const e=this.getTeams(t);return Object.values(t.included.filter((t=>"events"===t.type)).reduce(((t,r)=>{const{hscore:o,vscore:a,vteam_id:i,hteam_id:s}=r.attributes;return null==a||null==o||(t[s]||(t[s]={teamId:s,teamName:e[s],w:0,l:0,t:0,gf:0,ga:0}),t[i]||(t[i]={teamId:i,teamName:e[i],w:0,l:0,t:0,gf:0,ga:0}),o===a?(t[s].t=t[s].t+1,t[i].t=t[i].t+1):o>a?(t[s].w=t[s].w+1,t[i].l=t[i].l+1):(t[s].l=t[s].l+1,t[i].w=t[i].w+1),t[s].gf=t[s].gf+o,t[s].ga=t[s].ga+a,t[i].gf=t[i].gf+a,t[i].ga=t[i].ga+o),t}),{})).map((t=>Object.assign(Object.assign({},t),{pd:Math.round(t.gf-t.ga),pct:(2*t.w+t.t)/(2*(t.w+t.l+t.t))*100}))).sort(((t,e)=>e.pct-t.pct||e.pd-t.pd))}render(){return r.loading?e("div",{class:"text-center"},"Loading...."):e("div",{class:"flex-col w-full flex items-center justify-center"},e("div",{class:"flex items-center justify-center w-full lg:w-1/2"},e("table",{class:"w-full"},e("thead",null,e("tr",null,e("th",{class:"w-1/3"},"Team"),e("th",{class:"w-20"},"Win"),e("th",{class:"w-20"},"Loss"),e("th",{class:"w-20"},"Tie"),e("th",{class:"w-20"},"GF"),e("th",{class:"w-20"},"GA"),e("th",{class:"w-20"},"PD"),e("th",{class:"w-20"},"PCT"))),e("tbody",null,this.standings.map(((t,r)=>e("tr",null,e("td",{class:"py-1 border-gray-300 border-b "+(t.teamId===+a?"font-bold":"")},r+1,". ",t.teamName),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.w),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.l),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.t),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.gf),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.ga),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.pd),e("td",{class:"text-center py-1 border-gray-300 border-b"},t.pct.toFixed(2),"%"))))),e("tfoot",null,e("tr",null,e("td",{colSpan:8,class:"text-sm"}," * Ranked by: Percentage, Points Diff"))))))}};i.style='/*! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com*/*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;border:0 solid #e5e7eb;box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.flex{display:flex}.table{display:table}.hidden{display:none}.w-1{width:.25rem}.w-20{width:5rem}.w-full{width:100%}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.border-b{border-bottom-width:1px}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.py-1{padding-bottom:.25rem;padding-top:.25rem}.text-center{text-align:center}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-bold{font-weight:700}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)} /*! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com*/:after,:before{--tw-content:""}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}.w-1\\/3{width:33.333333%}@media (min-width:1024px){.lg\\:w-1\\/2{width:50%}.lg\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}';export{i as app_standings}