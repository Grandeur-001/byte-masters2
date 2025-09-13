import{v as E,D as W,k as b,m as B,b as A,w as g,Y as P,f as l,x as T,J as G,z as O,H as Te,I as ne,E as U,Z as Ie,P as de,G as Se,F as L,C as Me,$ as Ce,i as M,a0 as Ae,S as Ee,q as ue,o as X,n as $e,K as ce,a1 as J,A as Ne,a2 as ke,a3 as Be,a4 as Fe,M as De,N as Oe,O as S,a5 as ze,a as K,d as y,l as q,s as C,u as Pe,t as $,h as z,_ as Re}from"./index-Cvnpr2WH.js";import{_ as Ue}from"./Hero-2-C7k2O2uD.js";import{T as oe,d as re,D as se,b as ie}from"./Card.styled-C4-Q_JD3.js";import"./ScrollTicker.styled-z-huyfSh.js";import{_ as Le}from"./LinkBtn-DX3qWbnY.js";function Q(e,t){const n=typeof e=="string"&&!t?`${e}Context`:t,a=Symbol(n);return[r=>{const i=Te(a,r);if(i||i===null)return i;throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},r=>(De(a,r),r)]}function Ve(e){return Be()?(Fe(e),!0):!1}function je(e){let t=!1,n;const a=Ce(!0);return(...r)=>(t||(n=a.run(()=>e(...r)),t=!0),n)}function Ke(e){return typeof e=="function"?e():l(e)}const pe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const He=e=>typeof e<"u";function V(e){var t;const n=Ke(e);return(t=n?.$el)!=null?t:n}const fe=pe?window:void 0;function We(){const e=b(!1),t=G();return t&&X(()=>{e.value=!0},t),e}function Ge(e){const t=We();return T(()=>(t.value,!!e()))}function Je(e){return JSON.parse(JSON.stringify(e))}function Qe(e,t,n={}){const{window:a=fe,...r}=n;let i;const s=Ge(()=>a&&"ResizeObserver"in a),o=()=>{i&&(i.disconnect(),i=void 0)},d=T(()=>Array.isArray(e)?e.map(f=>V(f)):[V(e)]),u=O(d,f=>{if(o(),s.value&&a){i=new ResizeObserver(t);for(const I of f)I&&i.observe(I,r)}},{immediate:!0,flush:"post"}),c=()=>{o(),u()};return Ve(c),{isSupported:s,stop:c}}function me(e,t,n,a={}){var r,i,s;const{clone:o=!1,passive:d=!1,eventName:u,deep:c=!1,defaultValue:f,shouldEmit:I}=a,w=G(),D=n||w?.emit||((r=w?.$emit)==null?void 0:r.bind(w))||((s=(i=w?.proxy)==null?void 0:i.$emit)==null?void 0:s.bind(w?.proxy));let N=u;t||(t="modelValue"),N=N||`update:${t.toString()}`;const p=h=>o?typeof o=="function"?o(h):Je(h):h,v=()=>He(e[t])?p(e[t]):f,_=h=>{I?I(h)&&D(N,h):D(N,h)};if(d){const h=v(),k=b(h);let x=!1;return O(()=>e[t],m=>{x||(x=!0,k.value=p(m),J(()=>x=!1))}),O(k,m=>{!x&&(m!==e[t]||c)&&_(m)},{deep:c}),k}else return T({get(){return v()},set(h){_(h)}})}function ee(e){return e?e.flatMap(t=>t.type===L?ee(t.children):[t]):[]}function le(){let e=document.activeElement;if(e==null)return null;for(;e!=null&&e.shadowRoot!=null&&e.shadowRoot.activeElement!=null;)e=e.shadowRoot.activeElement;return e}const[ve,Rt]=Q("ConfigProvider");function ge(e){const t=ve({dir:b("ltr")});return T(()=>{var n;return e?.value||((n=t.dir)==null?void 0:n.value)||"ltr"})}function j(){const e=G(),t=b(),n=T(()=>{var s,o;return["#text","#comment"].includes((s=t.value)==null?void 0:s.$el.nodeName)?(o=t.value)==null?void 0:o.$el.nextElementSibling:V(t)}),a=Object.assign({},e.exposed),r={};for(const s in e.props)Object.defineProperty(r,s,{enumerable:!0,configurable:!0,get:()=>e.props[s]});if(Object.keys(a).length>0)for(const s in a)Object.defineProperty(r,s,{enumerable:!0,configurable:!0,get:()=>a[s]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=r;function i(s){t.value=s,s&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>s instanceof Element?s:s.$el}),e.exposed=r)}return{forwardRef:i,currentRef:t,currentElement:n}}let Ye=0;function he(e,t="radix"){const n=ve({useId:void 0});return ne?`${t}-${ne()}`:n.useId?`${t}-${n.useId()}`:`${t}-${++Ye}`}function qe(e,t){const n=b(e);function a(r){return t[n.value][r]??n.value}return{state:n,dispatch:r=>{n.value=a(r)}}}const te=E({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{var a,r;if(!n.default)return null;const i=ee(n.default()),s=i.findIndex(c=>c.type!==Ie);if(s===-1)return i;const o=i[s];(a=o.props)==null||delete a.ref;const d=o.props?de(t,o.props):t;t.class&&(r=o.props)!=null&&r.class&&delete o.props.class;const u=Se(o,d);for(const c in d)c.startsWith("on")&&(u.props||(u.props={}),u.props[c]=d[c]);return i.length===1?u:(i[s]=u,i)}}}),R=E({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:n}){const a=e.asChild?"template":e.as;return typeof a=="string"&&["area","img","input"].includes(a)?()=>U(a,t):a!=="template"?()=>U(e.as,t,{default:n.default}):()=>U(te,t,{default:n.default})}});function be(){const e=b(),t=T(()=>{var n,a;return["#text","#comment"].includes((n=e.value)==null?void 0:n.$el.nodeName)?(a=e.value)==null?void 0:a.$el.nextElementSibling:V(e)});return{primitiveElement:e,currentElement:t}}function Ze(e,t){var n;const a=b({}),r=b("none"),i=b(e),s=e.value?"mounted":"unmounted";let o;const d=((n=t.value)==null?void 0:n.ownerDocument.defaultView)??fe,{state:u,dispatch:c}=qe(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),f=p=>{var v;if(pe){const _=new CustomEvent(p,{bubbles:!1,cancelable:!1});(v=t.value)==null||v.dispatchEvent(_)}};O(e,async(p,v)=>{var _;const h=v!==p;if(await J(),h){const k=r.value,x=H(t.value);p?(c("MOUNT"),f("enter"),x==="none"&&f("after-enter")):x==="none"||((_=a.value)==null?void 0:_.display)==="none"?(c("UNMOUNT"),f("leave"),f("after-leave")):v&&k!==x?(c("ANIMATION_OUT"),f("leave")):(c("UNMOUNT"),f("after-leave"))}},{immediate:!0});const I=p=>{const v=H(t.value),_=v.includes(p.animationName),h=u.value==="mounted"?"enter":"leave";if(p.target===t.value&&_&&(f(`after-${h}`),c("ANIMATION_END"),!i.value)){const k=t.value.style.animationFillMode;t.value.style.animationFillMode="forwards",o=d?.setTimeout(()=>{var x;((x=t.value)==null?void 0:x.style.animationFillMode)==="forwards"&&(t.value.style.animationFillMode=k)})}p.target===t.value&&v==="none"&&c("ANIMATION_END")},w=p=>{p.target===t.value&&(r.value=H(t.value))},D=O(t,(p,v)=>{p?(a.value=getComputedStyle(p),p.addEventListener("animationstart",w),p.addEventListener("animationcancel",I),p.addEventListener("animationend",I)):(c("ANIMATION_END"),o!==void 0&&d?.clearTimeout(o),v?.removeEventListener("animationstart",w),v?.removeEventListener("animationcancel",I),v?.removeEventListener("animationend",I))},{immediate:!0}),N=O(u,()=>{const p=H(t.value);r.value=u.value==="mounted"?p:"none"});return ce(()=>{D(),N()}),{isPresent:T(()=>["mounted","unmountSuspended"].includes(u.value))}}function H(e){return e&&getComputedStyle(e).animationName||"none"}const Xe=E({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:n}){var a;const{present:r,forceMount:i}=W(e),s=b(),{isPresent:o}=Ze(r,s);n({present:o});let d=t.default({present:o});d=ee(d||[]);const u=G();if(d&&d?.length>1){const c=(a=u?.parent)!=null&&a.type.name?`<${u.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(f=>`  - ${f}`).join(`
`)].join(`
`))}return()=>i.value||r.value||o.value?U(t.default({present:o})[0],{ref:c=>{const f=V(c);return typeof f?.hasAttribute>"u"||(f!=null&&f.hasAttribute("data-radix-popper-content-wrapper")?s.value=f.firstElementChild:s.value=f),f}}):null}});Me({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});je(()=>b([]));const et="data-radix-vue-collection-item",[ae,tt]=Q("CollectionProvider");function at(e=et){const t=b(new Map),n=b(),a=tt({collectionRef:n,itemMap:t,attrName:e}),{getItems:r}=ye(a),i=T(()=>Array.from(a.itemMap.value.values())),s=T(()=>a.itemMap.value.size);return{getItems:r,reactiveItems:i,itemMapSize:s}}const nt=E({name:"CollectionSlot",setup(e,{slots:t}){const n=ae(),{primitiveElement:a,currentElement:r}=be();return O(r,()=>{n.collectionRef.value=r.value}),()=>U(te,{ref:a},t)}}),ot=E({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(e,{slots:t,attrs:n}){const a=ae(),{primitiveElement:r,currentElement:i}=be();return Ne(s=>{if(i.value){const o=ke(i.value);a.itemMap.value.set(o,{ref:i.value,value:e.value}),s(()=>a.itemMap.value.delete(o))}}),()=>U(te,{...n,[a.attrName]:"",ref:r},t)}});function ye(e){const t=e??ae();return{getItems:()=>{const n=t.collectionRef.value;if(!n)return[];const a=Array.from(n.querySelectorAll(`[${t.attrName}]`));return Array.from(t.itemMap.value.values()).sort((r,i)=>a.indexOf(r.ref)-a.indexOf(i.ref))}}}const rt="rovingFocusGroup.onEntryFocus",st={bubbles:!1,cancelable:!0},it={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function lt(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function dt(e,t,n){const a=lt(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return it[a]}function xe(e,t=!1){const n=le();for(const a of e)if(a===n||(a.focus({preventScroll:t}),le()!==n))return}function ut(e,t){return e.map((n,a)=>e[(t+a)%e.length])}const[ct,pt]=Q("RovingFocusGroup"),ft=E({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(e,{expose:t,emit:n}){const a=e,r=n,{loop:i,orientation:s,dir:o}=W(a),d=ge(o),u=me(a,"currentTabStopId",r,{defaultValue:a.defaultCurrentTabStopId,passive:a.currentTabStopId===void 0}),c=b(!1),f=b(!1),I=b(0),{getItems:w}=at();function D(p){const v=!f.value;if(p.currentTarget&&p.target===p.currentTarget&&v&&!c.value){const _=new CustomEvent(rt,st);if(p.currentTarget.dispatchEvent(_),r("entryFocus",_),!_.defaultPrevented){const h=w().map(F=>F.ref).filter(F=>F.dataset.disabled!==""),k=h.find(F=>F.getAttribute("data-active")==="true"),x=h.find(F=>F.id===u.value),m=[k,x,...h].filter(Boolean);xe(m,a.preventScrollOnEntryFocus)}}f.value=!1}function N(){setTimeout(()=>{f.value=!1},1)}return t({getItems:w}),pt({loop:i,dir:d,orientation:s,currentTabStopId:u,onItemFocus:p=>{u.value=p},onItemShiftTab:()=>{c.value=!0},onFocusableItemAdd:()=>{I.value++},onFocusableItemRemove:()=>{I.value--}}),(p,v)=>(A(),B(l(nt),null,{default:g(()=>[M(l(R),{tabindex:c.value||I.value===0?-1:0,"data-orientation":l(s),as:p.as,"as-child":p.asChild,dir:l(d),style:{outline:"none"},onMousedown:v[0]||(v[0]=_=>f.value=!0),onMouseup:N,onFocus:D,onBlur:v[1]||(v[1]=_=>c.value=!1)},{default:g(()=>[P(p.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),mt=E({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!0},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(e){const t=e,n=ct(),a=T(()=>t.tabStopId||he()),r=T(()=>n.currentTabStopId.value===a.value),{getItems:i}=ye();X(()=>{t.focusable&&n.onFocusableItemAdd()}),ce(()=>{t.focusable&&n.onFocusableItemRemove()});function s(o){if(o.key==="Tab"&&o.shiftKey){n.onItemShiftTab();return}if(o.target!==o.currentTarget)return;const d=dt(o,n.orientation.value,n.dir.value);if(d!==void 0){if(o.metaKey||o.ctrlKey||o.altKey||!t.allowShiftKey&&o.shiftKey)return;o.preventDefault();let u=[...i().map(c=>c.ref).filter(c=>c.dataset.disabled!=="")];if(d==="last")u.reverse();else if(d==="prev"||d==="next"){d==="prev"&&u.reverse();const c=u.indexOf(o.currentTarget);u=n.loop.value?ut(u,c+1):u.slice(c+1)}J(()=>xe(u))}}return(o,d)=>(A(),B(l(ot),null,{default:g(()=>[M(l(R),{tabindex:r.value?0:-1,"data-orientation":l(n).orientation.value,"data-active":o.active,"data-disabled":o.focusable?void 0:"",as:o.as,"as-child":o.asChild,onMousedown:d[0]||(d[0]=u=>{o.focusable?l(n).onItemFocus(a.value):u.preventDefault()}),onFocus:d[1]||(d[1]=u=>l(n).onItemFocus(a.value)),onKeydown:s},{default:g(()=>[P(o.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});function vt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}vt();const[Y,gt]=Q("TabsRoot"),ht=E({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,a=t,{orientation:r,dir:i}=W(n),s=ge(i);j();const o=me(n,"modelValue",a,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),d=b();return gt({modelValue:o,changeModelValue:u=>{o.value=u},orientation:r,dir:s,activationMode:n.activationMode,baseId:he(void 0,"radix-vue-tabs"),tabsList:d}),(u,c)=>(A(),B(l(R),{dir:l(s),"data-orientation":l(r),"as-child":u.asChild,as:u.as},{default:g(()=>[P(u.$slots,"default",{modelValue:l(o)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),bt=E({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(e){const t=e,{loop:n}=W(t),{forwardRef:a,currentElement:r}=j(),i=Y();return i.tabsList=r,(s,o)=>(A(),B(l(ft),{"as-child":"",orientation:l(i).orientation.value,dir:l(i).dir.value,loop:l(n)},{default:g(()=>[M(l(R),{ref:l(a),role:"tablist","as-child":s.asChild,as:s.as,"aria-orientation":l(i).orientation.value},{default:g(()=>[P(s.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function we(e,t){return`${e}-trigger-${t}`}function _e(e,t){return`${e}-content-${t}`}const yt=E({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const t=e,{forwardRef:n}=j(),a=Y(),r=T(()=>we(a.baseId,t.value)),i=T(()=>_e(a.baseId,t.value)),s=T(()=>t.value===a.modelValue.value),o=b(s.value);return X(()=>{requestAnimationFrame(()=>{o.value=!1})}),(d,u)=>(A(),B(l(Xe),{present:s.value,"force-mount":""},{default:g(({present:c})=>[M(l(R),{id:i.value,ref:l(n),"as-child":d.asChild,as:d.as,role:"tabpanel","data-state":s.value?"active":"inactive","data-orientation":l(a).orientation.value,"aria-labelledby":r.value,hidden:!c.value,tabindex:"0",style:$e({animationDuration:o.value?"0s":void 0})},{default:g(()=>[d.forceMount||s.value?P(d.$slots,"default",{key:0}):ue("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),xt=E({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=e,{forwardRef:n}=j(),a=Y(),r=T(()=>we(a.baseId,t.value)),i=T(()=>_e(a.baseId,t.value)),s=T(()=>t.value===a.modelValue.value);return(o,d)=>(A(),B(l(mt),{"as-child":"",focusable:!o.disabled,active:s.value},{default:g(()=>[M(l(R),{id:r.value,ref:l(n),role:"tab",type:o.as==="button"?"button":void 0,as:o.as,"as-child":o.asChild,"aria-selected":s.value?"true":"false","aria-controls":i.value,"data-state":s.value?"active":"inactive",disabled:o.disabled,"data-disabled":o.disabled?"":void 0,"data-orientation":l(a).orientation.value,onMousedown:d[0]||(d[0]=Ee(u=>{!o.disabled&&u.ctrlKey===!1?l(a).changeModelValue(o.value):u.preventDefault()},["left"])),onKeydown:d[1]||(d[1]=Ae(u=>l(a).changeModelValue(o.value),["enter","space"])),onFocus:d[2]||(d[2]=()=>{const u=l(a).activationMode!=="manual";!s.value&&!o.disabled&&u&&l(a).changeModelValue(o.value)})},{default:g(()=>[P(o.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),wt=E({__name:"TabsIndicator",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e,n=Y();j();const a=b(),r=b({size:null,position:null});O(()=>[n.modelValue.value,n?.dir.value],async()=>{await J(),i()},{immediate:!0}),Qe([n.tabsList,a],i);function i(){var s;a.value=(s=n.tabsList.value)==null?void 0:s.querySelector('[role="tab"][data-state="active"]'),a.value&&(n.orientation.value==="horizontal"?r.value={size:a.value.offsetWidth,position:a.value.offsetLeft}:r.value={size:a.value.offsetHeight,position:a.value.offsetTop})}return(s,o)=>typeof r.value.size=="number"?(A(),B(l(R),de({key:0},t,{style:{"--radix-tabs-indicator-size":`${r.value.size}px`,"--radix-tabs-indicator-position":`${r.value.position}px`}}),{default:g(()=>[P(s.$slots,"default")]),_:3},16,["style"])):ue("",!0)}}),_t=[{imageUrl:"https://solution25.com/wp-content/uploads/2022/08/ui-ux-design-for-beginners-2048x1560.jpg",badge:"UI/UX",title:"5 Principles We Use to Design User-Friendly Interfaces",description:"Explore the design principles that guide our team in creating intuitive, accessible, and delightful user experiences.",readmore:"/blog/ui-ux-principles"},{imageUrl:"https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",badge:"Development",title:"React vs Vue vs Angular: What’s Best for Your Project in 2025",description:" A breakdown of the top frontend frameworks, their strengths, weaknesses, and when to use each.",readmore:"/blog/framework-comparison"},{imageUrl:"https://matimtl.ca/wp-content/uploads/2022/04/app20development20cost.jpg",badge:"Mobile",title:"Cross-Platform vs Native Apps: Which Should You Build?",description:"Weigh the pros and cons of native vs cross-platform mobile development to make the right choice for your business.",readmore:"/blog/cross-vs-native"}],Z=[{name:"web-dev",title:"Web Development",category:"Web Development",categoryClass:"",contentTitle:"Building Modern Web Applications with Next.js 15",description:"Discover the latest features and best practices for creating lightning-fast, scalable web applications. From server components to advanced routing, we'll guide you through the cutting-edge techniques that define modern web development.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Sarah Chen",date:"Dec 15, 2024",readTime:"8 min read",badge:{text:"Latest",type:""}},{name:"ui-ux",title:"UI/UX Design",category:"UI/UX Design",categoryClass:"ui-tag",contentTitle:"The Psychology of User Interface Design",description:"Explore how cognitive psychology principles can transform your design process. Learn to create interfaces that not only look stunning but also provide intuitive user experiences that convert visitors into loyal customers.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Marcus Rodriguez",date:"Dec 12, 2024",readTime:"12 min read",badge:{text:"Trending",type:"trending"}},{name:"app-dev",title:"App Development",category:"App Development",categoryClass:"app-tag",contentTitle:"Cross-Platform Mobile Apps: React Native vs Flutter",description:"A comprehensive comparison of the two leading cross-platform frameworks. Discover which technology stack aligns with your project goals and learn the pros and cons from real-world development experiences.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Alex Kim",date:"Dec 10, 2024",readTime:"15 min read",badge:{text:"Featured",type:"featured"}},{name:"tech-trends",title:"Tech Trends",category:"Tech Trends",categoryClass:"trends-tag",contentTitle:"AI Integration in Modern Software Development",description:"How artificial intelligence is revolutionizing the way we build software. From automated code generation to intelligent testing, explore the tools and techniques that are shaping the future of development workflows.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Dr. Emily Watson",date:"Dec 8, 2024",readTime:"10 min read",badge:{text:"Hot",type:"hot"}}],Tt={class:"p-7 md:p-9"},It={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 md:p-9"},St=["src"],Mt={class:"p-6 flex flex-col flex-1"},Ct={class:"bg-[var(--fading-gray)] px-6 py-2 w-32 rounded-full flex justify-center items-center text-sm text-[var(--text-secondary)] mb-2"},At=["src","alt"],Et={class:"author"},$t={class:"date"},Nt={class:"read-time"},kt={class:"w-[190px]"},Bt={__name:"Blog",setup(e){document.title="Bonasera Konnect | Blogs",b("first");const t="Bonasera Konnect";Pe();const n=S`
      background: var(--bg-dark);
      min-height: 100vh;
      padding: 2rem 1rem;
    `,a=ze`
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    `,r=S`
      position: relative;
      display: flex;
      gap: 0.25rem;
      backdrop-filter: blur(10px);
      padding: 0.375rem;
      border-radius: 16px;
      border: 1px solid var(--border-gray);
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &:hover{
        background: var(--fading-gray);
      }
      &::-webkit-scrollbar {
        display: none;
      }

      /* Mobile responsiveness */
      @media (max-width: 640px) {
        gap: 0.125rem;
        padding: 0.25rem;
        border-radius: 12px;
      }

      @media (max-width: 320px) {
        padding: 0.1875rem;
        gap: 0.0625rem;
      }
    `,i=S`
      position: relative;
      background: transparent;
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
      min-width: fit-content;
      z-index: 2;

      &:hover {
        color: var(--text-primary);
        background: var(--accent-red-faded);
        transform: translateY(-1px);
      }

      &[data-state="active"] {
        background: var(--linear-gradient);
        color: white;
        box-shadow: 
          0 4px 12px rgba(239, 83, 80, 0.4),
          0 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid var(--accent-orange);
        outline-offset: 2px;
      }

      /* Mobile responsiveness */
      @media (max-width: 768px) {
        padding: 0.625rem 1.25rem;
        font-size: 0.8125rem;
      }

      @media (max-width: 640px) {
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        border-radius: 10px;
      }

      @media (max-width: 480px) {
        padding: 0.4375rem 0.875rem;
        font-size: 0.6875rem;
      }

      @media (max-width: 320px) {
        padding: 0.375rem 0.75rem;
        font-size: 0.625rem;
        border-radius: 8px;
      }
    `,s=S`
      position: absolute;
      background: var(--linear-gradient);
      border-radius: 12px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1;
      box-shadow: 
        0 4px 12px rgba(239, 83, 80, 0.4),
        0 2px 4px rgba(0, 0, 0, 0.2);

      @media (max-width: 640px) {
        border-radius: 10px;
      }

      @media (max-width: 320px) {
        border-radius: 8px;
      }
    `,o=S`
      animation: ${a} 0.5s ease-in-out;
    `,d=S`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      border: 1px solid var(--line-gray);
      border-radius: 16px;
      padding: 2rem;
      backdrop-filter: blur(10px);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
      }

      @media (max-width: 480px) {
        padding: 1.9rem;
        gap: 1.5rem;
      }


    `,u=S`
      position: relative;
      overflow: hidden;
      border-radius: 12px;
    `,c=S`
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
      transition: transform 0.3s ease;

      &:hover{
        transform: scale(1.05);
      }
    `,f=S`
      position: absolute;
      top: 1rem;
      right: 1rem;
    `,I=S`
      background: var(--linear-gradient);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;

      .trending {
        background: linear-gradient(90deg, #9C27B0 0%, #E91E63 100%);
      }

      .featured {
        background: linear-gradient(90deg, #2196F3 0%, #00BCD4 100%);
      }

      .hot {
        background: linear-gradient(90deg, #FF5722 0%, #FF9800 100%);
      }
    `,w=S`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    `,D=S`
      display: inline-block;
      background: var(--accent-red-faded);
      color: var(--accent-red);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      width: fit-content;
    `,N=S`
      background: var(--accent-orange-faded);
      color: var(--accent-orange);
    `,p=S`
      background: rgba(33, 150, 243, 0.1);
      color: #2196F3;
    `,v=S`
      background: rgba(156, 39, 176, 0.1);
      color: #9C27B0;
    `,_=S`
      display: flex;
      gap: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-secondary);

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    `,h={"ui-tag":N,"app-tag":p,"trends-tag":v};return(k,x)=>(A(),K(L,null,[y("div",Tt,[M(Ue,{badge:`${l(t)}'s Blog`,title:"Insights, Innovation & Tech Stories",paragraph:"Explore expert articles, industry trends, and behind-the-scenes stories from our engineers, designers, and innovators at Bonasera Konnect."},null,8,["badge"])]),y("div",It,[(A(!0),K(L,null,q(l(_t),(m,F)=>(A(),B(l(ie),{key:F,class:"float-in group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"},{default:g(()=>[y("img",{src:m.imageUrl,alt:"Blog Post",class:"object-cover w-full h-52 group-hover:scale-125 transition-all"},null,8,St),y("div",Mt,[y("span",Ct,$(m.badge),1),M(l(oe),{class:C(l(re))},{default:g(()=>[z($(m.title),1)]),_:2},1032,["class"]),M(l(se),{class:"flex-1"},{default:g(()=>[z($(m.description),1)]),_:2},1024),M(Le,{href:m.readmore},{default:g(()=>x[0]||(x[0]=[z(" Read more ")])),_:2,__:[0]},1032,["href"])])]),_:2},1024))),128))]),y("div",{class:C(`${n} p-5`)},[M(l(ht),{"default-value":l(Z)[0]?.name,class:"w-full"},{default:g(()=>[M(l(bt),{class:C(r)},{default:g(()=>[(A(!0),K(L,null,q(l(Z),m=>(A(),B(l(xt),{key:m.name,value:m.name,class:C(i)},{default:g(()=>[z($(m.title),1)]),_:2},1032,["value"]))),128))]),_:1}),M(l(wt),{class:C(s)}),y("div",null,[(A(!0),K(L,null,q(l(Z),m=>(A(),B(l(yt),{key:m.name,value:m.name},{default:g(()=>[y("div",{class:C(`${o} mt-[2rem]`)},[M(l(ie),{class:C(d)},{default:g(()=>[y("div",{class:C(u)},[y("img",{src:m.image,alt:m.title,class:C(c)},null,8,At),y("div",{class:C(f)},[y("div",{class:C([I,m.badge.type])},$(m.badge.text),3)])]),y("div",{class:C(w)},[y("div",{class:C([D,h[m.categoryClass]])},$(m.category),3),M(l(oe),{class:C(l(re))},{default:g(()=>[z($(m.contentTitle),1)]),_:2},1032,["class"]),M(l(se),{class:"w-full"},{default:g(()=>[z($(m.description),1)]),_:2},1024),y("div",{class:C(_)},[y("span",Et,"By "+$(m.author),1),y("span",$t,$(m.date),1),y("span",Nt,$(m.readTime),1)]),y("div",kt,[M(Re,{class:"w-fit"},{default:g(()=>x[1]||(x[1]=[z(" Read Full Article ")])),_:1,__:[1]})])])]),_:2},1024)],2)]),_:2},1032,["value"]))),128))])]),_:1},8,["default-value"])],2)],64))}},Ut=Oe(Bt,[["__scopeId","data-v-3f708fd7"]]);export{Ut as default};
