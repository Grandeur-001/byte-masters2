import{_ as xt}from"./Hero-2-C7k2O2uD.js";import{v as ee,x as p,k as E,y as Ce,z as ce,A as _e,o as Ge,B as wt,C as pe,D as St,E as A,G as yt,H as oe,I as At,J as _t,K as Tt,L as Ct,M as Xe,N as kt,O as I,a as de,b as ve,d as T,i as U,f as $,w as z,P as Et,s as M,F as Te,l as Ve,t as fe,h as Nt}from"./index-Cvnpr2WH.js";import{b as Dt,C as It,D as Ot}from"./Card.styled-C4-Q_JD3.js";/**
 * Vue 3 Carousel 0.16.0
 * (c) 2025
 * @license MIT
 */const Ke=["viewport","carousel"],he={"bottom-to-top":"btt","left-to-right":"ltr","right-to-left":"rtl","top-to-bottom":"ttb"},Je=["ltr","left-to-right","rtl","right-to-left","ttb","top-to-bottom","btt","bottom-to-top"],Mt={ariaGallery:"Gallery",ariaNavigateToPage:"Navigate to page {slideNumber}",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",iconArrowDown:"Arrow pointing downwards",iconArrowLeft:"Arrow pointing to the left",iconArrowRight:"Arrow pointing to the right",iconArrowUp:"Arrow pointing upwards",itemXofY:"Item {currentSlide} of {slidesCount}"},Qe=["slide","fade"],Ze=["center","start","end","center-even","center-odd"],Fe=10,ge=.08,S={autoplay:0,breakpointMode:Ke[0],breakpoints:void 0,dir:Je[0],enabled:!0,gap:0,height:"auto",i18n:Mt,ignoreAnimations:!1,itemsToScroll:1,itemsToShow:1,modelValue:0,mouseDrag:!0,mouseWheel:!1,pauseAutoplayOnHover:!1,preventExcessiveDragging:!1,slideEffect:Qe[0],snapAlign:Ze[0],touchDrag:!0,transition:300,wrapAround:!1},G=Symbol("carousel"),Lt=e=>{const t=Ce([]),n=i=>{i!==void 0?t.slice(i).forEach((o,d)=>{var u;(u=o.exposed)===null||u===void 0||u.setIndex(i+d)}):t.forEach((o,d)=>{var u;(u=o.exposed)===null||u===void 0||u.setIndex(d)})};return{cleanup:()=>{t.splice(0,t.length)},getSlides:()=>t,registerSlide:(i,o)=>{if(!i||i.props.isClone)return;const d=o??t.length;t.splice(d,0,i),n(d),e("slide-registered",{slide:i,index:d})},unregisterSlide:i=>{const o=t.indexOf(i);o!==-1&&(e("slide-unregistered",{slide:i,index:o}),t.splice(o,1),n(o))}}};function Bt(e){return e.length===0?0:e.reduce((n,i)=>n+i,0)/e.length}function Ue({slides:e,position:t,toShow:n}){const i=[],o=t==="before",d=o?-n:0,u=o?0:n;if(e.length<=0)return i;for(let s=d;s<u;s++){const w={index:o?s:s+e.length,isClone:!0,id:void 0,key:`clone-${t}-${s}`},c=e[(s%e.length+e.length)%e.length].vnode,g=yt(c,w);g.el=null,i.push(g)}return i}const Rt='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';function $e(e){if(!e.el||!(e.el instanceof Element))return;const t=e.el.querySelectorAll(Rt);for(const n of t)n instanceof HTMLElement&&!n.hasAttribute("disabled")&&n.getAttribute("aria-hidden")!=="true"&&n.setAttribute("tabindex","-1")}function jt(e,t){return Object.keys(e).filter(n=>!t.includes(n)).reduce((n,i)=>(n[i]=e[i],n),{})}function zt(e){const{isVertical:t,isReversed:n,dragged:i,effectiveSlideSize:o,threshold:d}=e,u=t?i.y:i.x;if(u===0)return 0;const s=u/o,m=Math.abs(s);if(m<d)return 0;const w=m<1?Math.sign(s):Math.round(s);return n?w:-w}function W({val:e,max:t,min:n}){return t<n?e:Math.min(Math.max(e,isNaN(n)?e:n),isNaN(t)?e:t)}function Wt(e){const{transform:t}=window.getComputedStyle(e);return t.split(/[(,)]/).slice(1,-1).map(n=>parseFloat(n))}function Pt(e){let t=1,n=1;return e.forEach(i=>{const o=Wt(i);o.length===6&&(t/=o[0],n/=o[3])}),{widthMultiplier:t,heightMultiplier:n}}function Vt(e,t){switch(e){case"start":return 0;case"center":case"center-odd":return(t-1)/2;case"center-even":return(t-2)/2;case"end":return t-1;default:return 0}}function Ft(e,t,n){switch(e){case"start":return 0;case"center":case"center-odd":return(n-t)/2;case"center-even":return n/2-t;case"end":return n-t;default:return 0}}function ke({slideSize:e,viewportSize:t,align:n,itemsToShow:i}){return i!==void 0?Vt(n,i):e!==void 0&&t!==void 0?Ft(n,e,t):0}function et(e="",t={}){return Object.entries(t).reduce((n,[i,o])=>n.replace(`{${i}}`,String(o)),e)}function tt({val:e,max:t,min:n=0}){const i=t-n+1;return((e-n)%i+i)%i+n}function Ee(e,t=0){let n=!1,i=0,o=null;function d(...u){if(n)return;n=!0;const s=()=>{o=requestAnimationFrame(m=>{m-i>t?(i=m,e(...u),n=!1):s()})};s()}return d.cancel=()=>{o&&(cancelAnimationFrame(o),o=null,n=!1)},d}function me(e,t="px"){if(!(e==null||e===""))return typeof e=="number"||parseFloat(e).toString()===e?`${e}${t}`:e}const Ut=ee({name:"CarouselAria",setup(){const e=oe(G);return e?()=>A("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},et(e.config.i18n.itemXofY,{currentSlide:e.currentSlide+1,slidesCount:e.slidesCount})):()=>""}});function $t(e){let t=!1;const n={x:0,y:0},i=pe({x:0,y:0}),o=E(!1),{isSliding:d}=e,u=p(()=>typeof d=="boolean"?d:d.value),s=c=>{var g;const a=c.target.tagName;if(["INPUT","TEXTAREA","SELECT"].includes(a)||u.value||(t=c.type==="touchstart",t&&c.touches.length>1))return;if(!t&&(c.preventDefault(),c.button!==0))return;n.x=t?c.touches[0].clientX:c.clientX,n.y=t?c.touches[0].clientY:c.clientY;const v=t?"touchmove":"mousemove",b=t?"touchend":"mouseup";document.addEventListener(v,m,{passive:!1}),document.addEventListener(b,w,{passive:!0}),(g=e.onDragStart)===null||g===void 0||g.call(e)},m=Ee(c=>{var g;if(t&&c.touches.length>1)return;o.value=!0;const a=t?c.touches[0].clientX:c.clientX,v=t?c.touches[0].clientY:c.clientY;i.x=a-n.x,i.y=v-n.y,(g=e.onDrag)===null||g===void 0||g.call(e,{deltaX:i.x,deltaY:i.y,isTouch:t})}),w=()=>{var c;m.cancel();const g=Math.abs(i.x)+Math.abs(i.y);!t&&g>10&&window.addEventListener("click",b=>{b.preventDefault(),b.stopPropagation()},{once:!0,capture:!0}),(c=e.onDragEnd)===null||c===void 0||c.call(e),i.x=0,i.y=0,o.value=!1;const a=t?"touchmove":"mousemove",v=t?"touchend":"mouseup";document.removeEventListener(a,m),document.removeEventListener(v,w)};return{dragged:i,isDragging:o,handleDragStart:s}}function Ht(){const e=E(!1);return{isHover:e,handleMouseEnter:()=>{e.value=!0},handleMouseLeave:()=>{e.value=!1}}}function Yt(e){const{isVertical:t,isSliding:n,config:i}=e,o=p(()=>typeof t=="boolean"?t:t.value),d=p(()=>typeof n=="boolean"?n:n.value);return{handleScroll:s=>{var m,w;if(s.preventDefault(),!i.mouseWheel||d.value)return;const c=typeof i.mouseWheel=="object"&&(m=i.mouseWheel.threshold)!==null&&m!==void 0?m:Fe,g=Math.abs(s.deltaY)>c?s.deltaY:0,a=Math.abs(s.deltaX)>c?s.deltaX:0;if(g===0&&a===0)return;const v=o.value?g:a,_=(v!==0?v:o.value?a:g)>0;(w=e.onWheel)===null||w===void 0||w.call(e,{deltaX:a,deltaY:g,isScrollingForward:_})}}}const qt={autoplay:{default:S.autoplay,type:Number},breakpoints:{default:S.breakpoints,type:Object},breakpointMode:{default:S.breakpointMode,validator(e){return Ke.includes(e)}},clamp:{type:Boolean},dir:{type:String,default:S.dir,validator(e,t){if(!Je.includes(e))return!1;const n=e in he?he[e]:e;return["ttb","btt"].includes(n)&&(!t.height||t.height==="auto")&&console.warn(`[vue3-carousel]: The dir "${e}" is not supported with height "auto".`),!0}},enabled:{default:S.enabled,type:Boolean},gap:{default:S.gap,type:Number},height:{default:S.height,type:[Number,String]},i18n:{default:S.i18n,type:Object},ignoreAnimations:{default:!1,type:[Array,Boolean,String]},itemsToScroll:{default:S.itemsToScroll,type:Number},itemsToShow:{default:S.itemsToShow,type:[Number,String]},modelValue:{default:void 0,type:Number},mouseDrag:{default:S.mouseDrag,type:[Boolean,Object]},mouseWheel:{default:S.mouseWheel,type:[Boolean,Object]},mouseScrollThreshold:{default:S.mouseScrollThreshold,type:Number},pauseAutoplayOnHover:{default:S.pauseAutoplayOnHover,type:Boolean},preventExcessiveDragging:{default:!1,type:Boolean,validator(e,t){return e&&t.wrapAround&&console.warn('[vue3-carousel]: "preventExcessiveDragging" cannot be used with wrapAround. The setting will be ignored.'),!0}},slideEffect:{type:String,default:S.slideEffect,validator(e){return Qe.includes(e)}},snapAlign:{default:S.snapAlign,validator(e){return Ze.includes(e)}},touchDrag:{default:S.touchDrag,type:[Boolean,Object]},transition:{default:S.transition,type:Number},wrapAround:{default:S.wrapAround,type:Boolean}},Gt=ee({name:"VueCarousel",props:qt,emits:["before-init","drag","init","loop","slide-end","slide-registered","slide-start","slide-unregistered","update:modelValue","wheel"],setup(e,{slots:t,emit:n,expose:i}){var o;const d=Lt(n),u=d.getSlides(),s=p(()=>u.length),m=E(null),w=E(null),c=E(0),g=p(()=>Object.assign(Object.assign(Object.assign({},S),jt(e,["breakpoints","modelValue"])),{i18n:Object.assign(Object.assign({},S.i18n),e.i18n)})),a=Ce(Object.assign({},g.value)),v=E((o=e.modelValue)!==null&&o!==void 0?o:0),b=E(v.value);ce(v,r=>b.value=r);const _=E(0),be=p(()=>Math.ceil((s.value-1)/2)),H=p(()=>s.value-1),X=p(()=>0);let L=null,N=null,Y=null;const K=p(()=>c.value+a.gap),B=p(()=>{const r=a.dir||"ltr";return r in he?he[r]:r}),R=p(()=>["rtl","btt"].includes(B.value)),j=p(()=>["ttb","btt"].includes(B.value)),P=p(()=>a.itemsToShow==="auto"),C=p(()=>j.value?"height":"width");function te(){var r;if(!se.value)return;const l=(g.value.breakpointMode==="carousel"?(r=m.value)===null||r===void 0?void 0:r.getBoundingClientRect().width:typeof window<"u"?window.innerWidth:0)||0,f=Object.keys(e.breakpoints||{}).map(h=>Number(h)).sort((h,y)=>+y-+h),x={};f.some(h=>l>=h?(Object.assign(x,e.breakpoints[h]),x.i18n&&Object.assign(x.i18n,g.value.i18n,e.breakpoints[h].i18n),!0):!1),Object.assign(a,g.value,x),P.value||(a.itemsToShow=W({val:Number(a.itemsToShow),max:e.clamp?s.value:1/0,min:1}))}const nt=Ee(()=>{te(),le(),V()}),re=Ce(new Set),O=E([]);function at({widthMultiplier:r,heightMultiplier:l}){O.value=u.map(f=>{var x;const h=(x=f.exposed)===null||x===void 0?void 0:x.getBoundingRect();return{width:h.width*r,height:h.height*l}})}const ne=E({width:0,height:0});function it({widthMultiplier:r,heightMultiplier:l}){var f;const x=((f=w.value)===null||f===void 0?void 0:f.getBoundingClientRect())||{width:0,height:0};ne.value={width:x.width*r,height:x.height*l}}function V(){if(!w.value)return;const r=Pt(re);if(it(r),at(r),P.value)c.value=Bt(O.value.map(l=>l[C.value]));else{const l=Number(a.itemsToShow),f=(l-1)*a.gap;c.value=(ne.value[C.value]-f)/l}}function le(){!a.wrapAround&&s.value>0&&(v.value=W({val:v.value,max:H.value,min:X.value}))}const xe=p(()=>typeof e.ignoreAnimations=="string"?e.ignoreAnimations.split(","):Array.isArray(e.ignoreAnimations)?e.ignoreAnimations:e.ignoreAnimations?!1:[]);_e(()=>le()),_e(()=>{V()});let J;const De=r=>{const l=r.target;if(!(!l?.contains(m.value)||Array.isArray(xe.value)&&xe.value.includes(r.animationName))&&(re.add(l),!J)){const f=()=>{J=requestAnimationFrame(()=>{V(),f()})};f()}},Ie=r=>{const l=r.target;l&&re.delete(l),J&&re.size===0&&(cancelAnimationFrame(J),V())},se=E(!1);typeof document<"u"&&_e(()=>{se.value&&xe.value!==!1?(document.addEventListener("animationstart",De),document.addEventListener("animationend",Ie)):(document.removeEventListener("animationstart",De),document.removeEventListener("animationend",Ie))}),Ge(()=>{se.value=!0,te(),Be(),m.value&&(Y=new ResizeObserver(nt),Y.observe(m.value)),n("init")}),wt(()=>{se.value=!1,d.cleanup(),N&&clearTimeout(N),J&&cancelAnimationFrame(J),L&&clearInterval(L),Y&&(Y.disconnect(),Y=null),typeof document<"u"&&Le(),m.value&&(m.value.removeEventListener("transitionend",V),m.value.removeEventListener("animationiteration",V))});const{isHover:Oe,handleMouseEnter:ot,handleMouseLeave:rt}=Ht(),Me=Ee(r=>{if(!r.ctrlKey)switch(r.key){case"ArrowLeft":case"ArrowUp":j.value===r.key.endsWith("Up")&&(R.value?q(!0):Q(!0));break;case"ArrowRight":case"ArrowDown":j.value===r.key.endsWith("Down")&&(R.value?Q(!0):q(!0));break}},200),Le=()=>{document.removeEventListener("keydown",Me)},lt=()=>{document.addEventListener("keydown",Me)};function Be(){!a.autoplay||a.autoplay<=0||(L=setInterval(()=>{a.pauseAutoplayOnHover&&Oe.value||q()},a.autoplay))}function we(){Re(),Be()}function Re(){L&&(clearInterval(L),L=null)}const F=E(!1),st=({deltaX:r,deltaY:l,isTouch:f})=>{var x,h,y,k;n("drag",{deltaX:r,deltaY:l});const D=f?typeof a.touchDrag=="object"&&(h=(x=a.touchDrag)===null||x===void 0?void 0:x.threshold)!==null&&h!==void 0?h:ge:typeof a.mouseDrag=="object"&&(k=(y=a.mouseDrag)===null||y===void 0?void 0:y.threshold)!==null&&k!==void 0?k:ge,ie=zt({isVertical:j.value,isReversed:R.value,dragged:{x:r,y:l},effectiveSlideSize:K.value,threshold:D});ie!==0&&(b.value=a.wrapAround?v.value+ie:W({val:v.value+ie,max:H.value,min:X.value}))},ut=()=>Z(b.value),{dragged:je,isDragging:ct,handleDragStart:ze}=$t({isSliding:F,onDrag:st,onDragEnd:ut}),dt=({deltaX:r,deltaY:l,isScrollingForward:f})=>{n("wheel",{deltaX:r,deltaY:l}),f?R.value?Q():q():R.value?q():Q()},{handleScroll:vt}=Yt({isVertical:j,isSliding:F,config:a,onWheel:dt});function q(r=!1){Z(v.value+a.itemsToScroll,r)}function Q(r=!1){Z(v.value-a.itemsToScroll,r)}function Z(r,l=!1){if(!l&&F.value)return;const f=(a.wrapAround?tt:W)({val:r,max:H.value,min:X.value});if(v.value===f)return;_.value=v.value,n("slide-start",{slidingToIndex:r,currentSlideIndex:v.value,prevSlideIndex:_.value,slidesCount:s.value}),Re(),F.value=!0,v.value=r,f!==r&&We.pause(),n("update:modelValue",f),N=setTimeout(()=>{a.wrapAround&&f!==r&&(We.resume(),v.value=f,n("loop",{currentSlideIndex:v.value,slidingToIndex:r})),n("slide-end",{currentSlideIndex:v.value,prevSlideIndex:_.value,slidesCount:s.value}),F.value=!1,we()},a.transition)}function ft(){te(),le(),V(),we()}ce(()=>[g.value,e.breakpoints],()=>te(),{deep:!0}),ce(()=>e.autoplay,()=>we());const We=ce(()=>e.modelValue,r=>{r!==v.value&&Z(Number(r),!0)});n("before-init");const ae=p(()=>{if(!a.wrapAround)return{before:0,after:0};if(P.value)return{before:u.length,after:u.length};const r=Number(a.itemsToShow),l=Math.ceil(r+(a.itemsToScroll-1)),f=l-b.value,x=l-(s.value-(b.value+1));return{before:Math.max(0,f),after:Math.max(0,x)}}),Se=p(()=>ae.value.before?P.value?O.value.slice(-1*ae.value.before).reduce((r,l)=>r+l[C.value]+a.gap,0)*-1:ae.value.before*K.value*-1:0),ye=p(()=>{var r;if(P.value){const l=(v.value%u.length+u.length)%u.length;return ke({slideSize:(r=O.value[l])===null||r===void 0?void 0:r[C.value],viewportSize:ne.value[C.value],align:a.snapAlign})}return ke({align:a.snapAlign,itemsToShow:+a.itemsToShow})}),ue=p(()=>{let r=0;if(P.value){if(v.value<0?r=O.value.slice(v.value).reduce((l,f)=>l+f[C.value]+a.gap,0)*-1:r=O.value.slice(0,v.value).reduce((l,f)=>l+f[C.value]+a.gap,0),r-=ye.value,!a.wrapAround){const l=O.value.reduce((f,x)=>f+x[C.value]+a.gap,0)-ne.value[C.value]-a.gap;r=W({val:r,max:l,min:0})}}else{let l=v.value-ye.value;a.wrapAround||(l=W({val:l,max:s.value-+a.itemsToShow,min:0})),r=l*K.value}return r*(R.value?1:-1)}),gt=p(()=>{var r,l;if(!P.value){const h=v.value-ye.value;return a.wrapAround?{min:Math.floor(h),max:Math.ceil(h+Number(a.itemsToShow)-1)}:{min:Math.floor(W({val:h,max:s.value-Number(a.itemsToShow),min:0})),max:Math.ceil(W({val:h+Number(a.itemsToShow)-1,max:s.value-1,min:0}))}}let f=0;{let h=0,y=0-ae.value.before;const k=Math.abs(ue.value+Se.value);for(;h<=k;){const D=(y%u.length+u.length)%u.length;h+=((r=O.value[D])===null||r===void 0?void 0:r[C.value])+a.gap,y++}f=y-1}let x=0;{let h=f,y=0;for(h<0?y=O.value.slice(0,h).reduce((k,D)=>k+D[C.value]+a.gap,0)-Math.abs(ue.value+Se.value):y=O.value.slice(0,h).reduce((k,D)=>k+D[C.value]+a.gap,0)-Math.abs(ue.value);y<ne.value[C.value];){const k=(h%u.length+u.length)%u.length;y+=((l=O.value[k])===null||l===void 0?void 0:l[C.value])+a.gap,h++}x=h-1}return{min:Math.floor(f),max:Math.ceil(x)}}),mt=p(()=>{if(a.slideEffect==="fade")return;const r=j.value?"Y":"X",l=j.value?je.y:je.x;let f=ue.value+l;if(!a.wrapAround&&a.preventExcessiveDragging){let x=0;P.value?x=O.value.reduce((k,D)=>k+D[C.value],0):x=(s.value-Number(a.itemsToShow))*K.value;const h=R.value?0:-1*x,y=R.value?x:0;f=W({val:f,min:h,max:y})}return`translate${r}(${f}px)`}),pt=p(()=>({"--vc-carousel-height":me(a.height),"--vc-cloned-offset":me(Se.value),"--vc-slide-gap":me(a.gap),"--vc-transition-duration":F.value?me(a.transition,"ms"):void 0})),Pe=pe({activeSlide:b,config:a,currentSlide:v,isSliding:F,isVertical:j,maxSlide:H,minSlide:X,nav:{slideTo:Z,next:q,prev:Q},normalizedDir:B,slideRegistry:d,slideSize:c,slides:u,slidesCount:s,viewport:w,visibleRange:gt});Xe(G,Pe);const Ae=pe({config:a,currentSlide:v,maxSlide:H,middleSlide:be,minSlide:X,slideSize:c,slidesCount:s});return i(pe(Object.assign({data:Ae,next:q,prev:Q,restartCarousel:ft,slideTo:Z,updateBreakpointsConfig:te,updateSlideSize:V,updateSlidesData:le},St(Pe)))),()=>{var r;const l=t.default||t.slides,f=l?.(Ae)||[],{before:x,after:h}=ae.value,y=Ue({slides:u,position:"before",toShow:x}),k=Ue({slides:u,position:"after",toShow:h}),D=[...y,...f,...k];if(!a.enabled||!D.length)return A("section",{ref:m,class:["carousel","is-disabled"]},D);const ie=((r=t.addons)===null||r===void 0?void 0:r.call(t,Ae))||[],ht=A("ol",{class:"carousel__track",onMousedownCapture:a.mouseDrag?ze:null,onTouchstartPassiveCapture:a.touchDrag?ze:null,onWheel:a.mouseWheel?vt:null,style:{transform:mt.value}},D),bt=A("div",{class:"carousel__viewport",ref:w},ht);return A("section",{ref:m,class:["carousel",`is-${B.value}`,`is-effect-${a.slideEffect}`,{"is-dragging":ct.value,"is-hover":Oe.value,"is-sliding":F.value,"is-vertical":j.value}],dir:B.value,style:pt.value,"aria-label":a.i18n.ariaGallery,tabindex:"0",onBlur:Le,onFocus:lt,onMouseenter:ot,onMouseleave:rt},[bt,ie,A(Ut)])}}});var Ne;(function(e){e.arrowDown="arrowDown",e.arrowLeft="arrowLeft",e.arrowRight="arrowRight",e.arrowUp="arrowUp"})(Ne||(Ne={}));const He=e=>`icon${e.charAt(0).toUpperCase()+e.slice(1)}`,Xt={arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"};function Kt(e){return e in Ne}const Ye=e=>e&&Kt(e),qe=ee({props:{name:{type:String,required:!0,validator:Ye},title:{type:String,default:e=>e.name?S.i18n[He(e.name)]:""}},setup(e){const t=oe(G,null);return()=>{const n=e.name;if(!n||!Ye(n))return;const i=Xt[n],o=A("path",{d:i}),d=t?.config.i18n[He(n)]||e.title,u=A("title",d);return A("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":d},[u,o])}}}),Jt=ee({name:"CarouselNavigation",inheritAttrs:!1,props:{carousel:{type:Object}},setup(e,{slots:t,attrs:n}){let i=oe(G,null);const{next:o,prev:d}=t,u=()=>({btt:"arrowDown",ltr:"arrowLeft",rtl:"arrowRight",ttb:"arrowUp"})[i.normalizedDir],s=()=>({btt:"arrowUp",ltr:"arrowRight",rtl:"arrowLeft",ttb:"arrowDown"})[i.normalizedDir],m=p(()=>!i.config.wrapAround&&i.currentSlide<=i.minSlide),w=p(()=>!i.config.wrapAround&&i.currentSlide>=i.maxSlide);return()=>{if(e.carousel&&(i=e.carousel),!i)return console.warn("[vue3-carousel]: A carousel component must be provided for the navigation component to display"),"";const{i18n:c}=i.config,g=A("button",Object.assign(Object.assign({type:"button",disabled:m.value,"aria-label":c.ariaPreviousSlide,title:c.ariaPreviousSlide,onClick:i.nav.prev},n),{class:["carousel__prev",{"carousel__prev--disabled":m.value},n.class]}),d?.()||A(qe,{name:u()})),a=A("button",Object.assign(Object.assign({type:"button",disabled:w.value,"aria-label":c.ariaNextSlide,title:c.ariaNextSlide,onClick:i.nav.next},n),{class:["carousel__next",{"carousel__next--disabled":w.value},n.class]}),o?.()||A(qe,{name:s()}));return[g,a]}}}),Qt=ee({name:"CarouselPagination",props:{disableOnClick:{type:Boolean},paginateByItemsToShow:{type:Boolean},carousel:{type:Object}},setup(e){let t=oe(G,null);const n=p(()=>t.config.itemsToShow),i=p(()=>ke({align:t.config.snapAlign,itemsToShow:n.value})),o=p(()=>e.paginateByItemsToShow&&n.value>1),d=p(()=>Math.ceil((t.activeSlide-i.value)/n.value)),u=p(()=>Math.ceil(t.slidesCount/n.value)),s=m=>tt(o.value?{val:d.value,max:u.value-1,min:0}:{val:t.activeSlide,max:t.maxSlide,min:t.minSlide})===m;return()=>{var m,w;if(e.carousel&&(t=e.carousel),!t)return console.warn("[vue3-carousel]: A carousel component must be provided for the pagination component to display"),"";const c=[];for(let g=o.value?0:t.minSlide;g<=(o.value?u.value-1:t.maxSlide);g++){const a=et(t.config.i18n[o.value?"ariaNavigateToPage":"ariaNavigateToSlide"],{slideNumber:g+1}),v=s(g),b=A("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":v},"aria-label":a,"aria-pressed":v,"aria-controls":(w=(m=t.slides[g])===null||m===void 0?void 0:m.exposed)===null||w===void 0?void 0:w.id,title:a,disabled:e.disableOnClick,onClick:()=>t.nav.slideTo(o.value?Math.floor(g*+t.config.itemsToShow+i.value):g)}),_=A("li",{class:"carousel__pagination-item",key:g},b);c.push(_)}return A("ol",{class:"carousel__pagination"},c)}}}),Zt=ee({name:"CarouselSlide",props:{id:{type:String,default:e=>e.isClone?void 0:At()},index:{type:Number,default:void 0},isClone:{type:Boolean,default:!1}},setup(e,{attrs:t,slots:n,expose:i}){const o=oe(G);if(Xe(G,void 0),!o)return()=>"";const d=E(e.index),u=b=>{d.value=b},s=_t(),m=()=>{const b=s.vnode.el;return b?b.getBoundingClientRect():{width:0,height:0}};i({id:e.id,setIndex:u,getBoundingRect:m});const w=p(()=>d.value===o.activeSlide),c=p(()=>d.value===o.activeSlide-1),g=p(()=>d.value===o.activeSlide+1),a=p(()=>d.value>=o.visibleRange.min&&d.value<=o.visibleRange.max),v=p(()=>{if(o.config.itemsToShow==="auto")return;const b=o.config.itemsToShow,_=o.config.gap>0&&b>1?`calc(${100/b}% - ${o.config.gap*(b-1)/b}px)`:`${100/b}%`;return o.isVertical?{height:_}:{width:_}});return o.slideRegistry.registerSlide(s,e.index),Tt(()=>{o.slideRegistry.unregisterSlide(s)}),e.isClone&&(Ge(()=>{$e(s.vnode)}),Ct(()=>{$e(s.vnode)})),()=>{var b,_;return o.config.enabled?A("li",{style:[t.style,Object.assign({},v.value)],class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":a.value,"carousel__slide--active":w.value,"carousel__slide--prev":c.value,"carousel__slide--next":g.value,"carousel__slide--sliding":o.isSliding},onFocusin:()=>{o.viewport&&(o.viewport.scrollLeft=0),o.nav.slideTo(d.value)},id:e.isClone?void 0:e.id,"aria-hidden":e.isClone||void 0},(_=n.default)===null||_===void 0?void 0:_.call(n,{currentIndex:d.value,isActive:w.value,isClone:e.isClone,isPrev:c.value,isNext:g.value,isSliding:o.isSliding,isVisible:a.value})):(b=n.default)===null||b===void 0?void 0:b.call(n)}}}),en={class:"p-7 md:p-9"},tn=["src","alt"],nn=["onClick"],an={__name:"About",setup(e){document.title="Bonasera Konnect | About";const t="Bonasera Konnect",n=[{id:1,name:"Sarah Johnson",country:"United States",city:"New York",testimony:"This service completely transformed our business operations. The team was professional, responsive, and delivered beyond our expectations. I highly recommend them to anyone looking for quality solutions.",image:"https://thvnext.bing.com/th?q=Swiper+Clear+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"},{id:2,name:"Marcus Chen",country:"Singapore",city:"Singapore",testimony:"Outstanding experience from start to finish. The attention to detail and innovative approach helped us achieve results we never thought possible. Truly exceptional service.",image:"https://thvnext.bing.com/th?q=Swiper+Clear+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"},{id:3,name:"Elena Rodriguez",country:"Spain",city:"Barcelona",testimony:"Working with this team was a game-changer for our company. Their expertise and dedication to excellence is unmatched. We saw immediate improvements in our processes.",image:"https://thvnext.bing.com/th?q=Swiper+Clear+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"},{id:4,name:"James Mitchell",country:"United Kingdom",city:"London",testimony:"Incredible results and fantastic support throughout the entire process. The team understood our needs perfectly and delivered a solution that exceeded all expectations.",image:"https://thvnext.bing.com/th?q=Swiper+Clear+Background&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.5&pid=InlineBlock&rm=3&ucfimg=1&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247"}],i=E({itemsToShow:1,snapAlign:"center",transition:600,mouseDrag:!0,touchDrag:!0,autoplay:4e3,pauseAutoplayOnHover:!0,wrapAround:!0,loop:!1}),o=E({768:{itemsToShow:2,itemsToScroll:1},1024:{itemsToShow:3,itemsToScroll:1}}),d=I`
    position: relative;
    padding: 20px 0;
    
    @media (max-width: 320px) {
      padding: 10px 0;
    }
  `,u=I`
    margin: 0 10px;
    height: 100%;
    
    @media (max-width: 768px) {
      margin: 0 5px;
    }
    
    @media (max-width: 320px) {
      margin: 0 2px;
    }
  `,s=I`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    gap: 15px;
    
    @media (max-width: 320px) {
      gap: 10px;
      margin-bottom: 15px;
    }
  `,m=I`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--accent-orange);
    
    @media (max-width: 320px) {
      width: 45px;
      height: 45px;
    }
  `,w=I`
    display: flex;
    flex-direction: column;
  `,c=I`
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 4px;
    
    @media (max-width: 320px) {
      font-size: 16px;
    }
  `,g=I`
    font-size: 14px;
    color: var(--text-secondary);
    
    @media (max-width: 320px) {
      font-size: 12px;
    }
  `,a=I`
    font-size: 40px;
    background-image: var(--linear-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
    
    @media (max-width: 320px) {
      font-size: 30px;
      margin-bottom: 10px;
    }
  `,v=I`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--bg-dark);
    border: 2px solid var(--border-gray);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    
    &:hover {
      background: var(--accent-orange);
      border-color: var(--accent-orange);
      color: var(--bg-dark);
      transform: translateY(-50%) scale(1.1);
    }
    
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
    
    @media (max-width: 320px) {
      width: 35px;
      height: 35px;
    }
  `,b=I`
    ${v}
    left: 10px;
  `,_=I`
    ${v}
    right: 10px;
  `,be=I`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 8px;
    background: red;

    
    @media (max-width: 320px) {
      margin-top: 20px;
      gap: 6px;
    }
  `,H=I`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: gray;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background: var(--accent-orange);
      transform: scale(1.2);
    }

    &:hover {
      background: var(--accent-red);
    }

    @media (max-width: 320px) {
      width: 10px;
      height: 10px;
    }
  `;return(X,L)=>(ve(),de(Te,null,[T("div",en,[U(xt,{badge:`About ${$(t)}`,title:"What You Need To Know",paragraph:"Explore expert articles, industry trends, and behind-the-scenes stories from our engineers, designers, and innovators at Bonasera Konnect."},null,8,["badge"])]),T("div",{class:M(d)},[U($(Gt),Et(i.value,{breakpoints:o.value}),{addons:z(()=>[U($(Jt),null,{prev:z(()=>[T("button",{class:M(b)},L[0]||(L[0]=[T("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[T("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})],-1)]))]),next:z(()=>[T("button",{class:M(_)},L[1]||(L[1]=[T("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[T("path",{d:"M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"})],-1)]))]),_:1}),U($(Qt),null,{default:z(({pagesCount:N,currentPage:Y,switchTo:K})=>[T("div",{class:M(be)},[(ve(!0),de(Te,null,Ve(N,B=>(ve(),de("button",{key:B,class:M([H,{active:B===Y}]),onClick:R=>K(B)},null,10,nn))),128))])]),_:1})]),default:z(()=>[(ve(),de(Te,null,Ve(n,N=>U($(Zt),{key:N.id},{default:z(()=>[T("div",{class:M(u)},[U($(Dt),null,{default:z(()=>[U($(It),null,{default:z(()=>[T("div",{class:M(s)},[T("img",{src:N.image,alt:N.name,class:M(m)},null,8,tn),T("div",{class:M(w)},[T("div",{class:M(c)},fe(N.name),1),T("div",{class:M(g)},fe(N.city)+", "+fe(N.country),1)])]),T("div",{class:M(a)},'"'),U($(Ot),null,{default:z(()=>[Nt(fe(N.testimony),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)])]),_:2},1024)),64))]),_:1},16,["breakpoints"])])],64))}},un=kt(an,[["__scopeId","data-v-81121a9f"]]);export{un as default};
