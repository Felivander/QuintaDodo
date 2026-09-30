import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{A as t,C as n,F as r,L as i,M as a,N as o,O as s,P as c,R as l,T as u,_ as d,a as f,c as p,g as m,i as h,j as g,l as _,o as v,s as y,v as b,z as x}from"./react.C1Oj3OU0.mjs";import{S,a as C,n as w,r as T,t as E}from"./motion.BqwLOZii.mjs";import{At as D,C as O,D as k,Dt as A,E as j,Et as M,G as N,I as P,K as F,M as I,Mt as L,N as R,Nt as ee,O as z,Q as te,R as ne,St as re,Tt as ie,W as B,_ as ae,_t as oe,a as V,bt as se,c as H,d as U,dt as ce,g as W,ht as le,i as G,it as ue,j as de,k as K,kt as fe,lt as pe,m as me,mt as he,n as ge,o as q,p as _e,q as ve,u as ye,vt as be,w as J,wt as xe,xt as Se,yt as Ce}from"./framer.Dwdmh5KE.mjs";import{a as Y,i as we,n as Te,o as Ee,r as De,t as Oe}from"./xtEebSFOv.CiBGoPpW.mjs";import{a as ke,c as Ae,d as je,f as Me,i as Ne,l as Pe,m as Fe,n as Ie,o as Le,p as Re,r as ze,s as Be,t as Ve,u as He}from"./shared-lib.CpJc62x4.mjs";import{i as Ue,n as We,r as Ge,t as Ke}from"./q6zlfd0YD.Dj62XjsX.mjs";import{n as qe,t as Je}from"./Fbr34OL50.D5AVszGQ.mjs";import{i as Ye,n as Xe,r as Ze,t as Qe}from"./ysRUlRD3i.BNUOEUFB.mjs";import{i as $e,n as et,r as tt,t as nt}from"./NXuvUfUtD.D1NgbG2U.mjs";import{a as rt,t as it}from"./xAlp1hIFb.Cm_YoT50.mjs";import{i as at,n as ot,r as st,t as ct}from"./DrC9SQV_P.BsqQz7iu.mjs";import{i as lt,n as ut,r as dt,t as ft}from"./scO7LZAVg.CzP0dTdR.mjs";import{n as pt,t as mt}from"./irQv7gkmR.Dx7aWPtg.mjs";import{h as ht,i as gt,m as _t,n as vt,o as yt,p as bt}from"./OIjZRBmWDcIE2B6qgG1j.MIDjdANy.mjs";import{i as xt,n as St,r as Ct,t as wt}from"./XzFlmRK2O.BVy-wD8t.mjs";import{t as Tt}from"./default-utils.js@_0.45.CyBgKUwJ.mjs";import{i as Et,n as Dt,r as Ot,t as kt}from"./ParallaxImage_prod.ChXCXlAe.mjs";import{n as At,t as jt}from"./eLIcV1V5e.D3jjIABa.mjs";import{i as Mt,n as Nt,r as Pt,t as Ft}from"./KSxvq0jgx.C9J6-m6_.mjs";import{n as It,t as Lt}from"./eZojnRZj9.Cc3MFcex.mjs";import{n as Rt,t as zt}from"./JG16GXvuu.D9T0NaMt.mjs";import{n as Bt,t as Vt}from"./kUrFT_hRx.Cgy285BV.mjs";import{n as Ht,t as Ut}from"./wT56GQUyZ.DD1HQzVi.mjs";import{n as Wt,r as Gt}from"./f4p5_y798._yoB8dip.mjs";import{i as Kt,t as qt}from"./tR2BzNoy4.ChCIdaRf.mjs";import{i as Jt,n as Yt,r as Xt,t as Zt}from"./mvGkm2rkf.hJq_geSX.mjs";import{n as Qt,r as $t}from"./YthgXUocT.BGHsHQ4O.mjs";function en({url:e,play:t,shouldMute:n,thumbnail:i,isRed:a,onClick:o,border:s,boxShadow:c,onMouseEnter:l,onMouseLeave:d,onMouseDown:f,onMouseUp:m,title:h,...g}){let v=yt(),b=t!==`Off`,x=v||i!==`Off`&&!b,[S,C]=u(()=>!0,!1),[w,T]=u(()=>!0,!x),[E,D]=r(!1),O=gt(g),k=O!==`0px 0px 0px 0px`&&O!==`0px`;if(e===``)return p(an,{});let A=tn(e);if(A===void 0)return p(on,{message:`Invalid Youtube URL.`});let[j,M,N]=A,P=M.searchParams;if(N)for(let[e,t]of N)P.set(e,t),e===`t`&&P.set(`start`,t);P.set(`iv_load_policy`,`3`),P.set(`rel`,`0`),P.set(`modestbranding`,`1`),P.set(`playsinline`,`1`),w?(b||x&&w)&&P.set(`autoplay`,`1`):P.set(`autoplay`,`0`),b&&n&&P.set(`mute`,`1`),t===`Loop`&&(P.set(`loop`,`1`),P.set(`playlist`,j)),a||P.set(`color`,`white`);let F={title:h||`Youtube Video`,allow:`presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`,src:M.href,frameBorder:`0`,onClick:o,onMouseEnter:l,onMouseLeave:d,onMouseDown:f,onMouseUp:m};return _(`article`,{onPointerEnter:()=>D(!0),onPointerLeave:()=>D(!1),onPointerOver:C,onKeyDown:T,onClick:T,style:{...dn,borderRadius:O,boxShadow:c,transform:k&&(w||v)?`translateZ(0.000001px)`:`unset`,cursor:`pointer`,overflow:`hidden`},role:`presentation`,children:[x&&_(y,{children:[p(`link`,{rel:`preconnect`,href:`https://i.ytimg.com`}),p(`img`,{decoding:`async`,src:rn(j,i),style:{...pn,objectFit:`cover`}})]}),S&&_(y,{children:[p(`link`,{rel:`dns-prefetch`,href:`https://i.ytimg.com`}),p(`link`,{rel:`preconnect`,href:`https://www.youtube.com`}),p(`link`,{rel:`dns-prefetch`,href:`https://www.google.com`})]}),v?null:p(`iframe`,{loading:w?void 0:`lazy`,style:w?pn:{...pn,display:`none`},...F}),s&&p(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`,boxSizing:`border-box`,borderRadius:O,...s}}),w?null:p(sn,{onClick:T,isHovered:E,isRed:a})]})}function tn(e){let t;try{t=new URL(e)}catch{return[e,nn(e),null]}let n=t.searchParams;if(t.hostname===`youtube.com`||t.hostname===`www.youtube.com`||t.hostname===`youtube-nocookie.com`||t.hostname===`www.youtube-nocookie.com`){let e=t.pathname.slice(1).split(`/`),r=e[0];if(r===`watch`){let e=t.searchParams.get(`v`);return[e,nn(e),n]}if(r===`embed`)return[e[1],t,n];if(r===`shorts`||r===`live`){let t=e[1];return[t,nn(t),n]}}if(t.hostname===`youtu.be`){let e=t.pathname.slice(1);return[e,nn(e),n]}}function nn(e){return new URL(`https://www.youtube.com/embed/${e}`)}function rn(e,t){let n=`https://i.ytimg.com/vi_webp/`,r=`webp`;switch(t){case`Low Quality`:return`${n}${e}/hqdefault.${r}`;case`Medium Quality`:return`${n}${e}/sddefault.${r}`;case`High Quality`:return`${n}${e}/maxresdefault.${r}`;default:return`${n}${e}/0.${r}`}}function an(){return p(`div`,{style:{...ht,overflow:`hidden`},children:p(`div`,{style:fn,children:`To embed a Youtube video, add the URL to the properties\xA0panel.`})})}function on({message:e}){return p(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{...bt,overflow:`hidden`},children:_(`div`,{style:fn,children:[`Error: `,e]})})}function sn({onClick:e,isHovered:t,isRed:n}){return p(`button`,{onClick:e,"aria-label":`Play`,style:un,children:_(`svg`,{height:`100%`,version:`1.1`,viewBox:`0 0 68 48`,width:`100%`,children:[p(`path`,{d:`M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z`,fill:t?n?`#f00`:`#000`:`#212121`,fillOpacity:t&&n?1:.8,style:{transition:`fill .1s cubic-bezier(0.4, 0, 1, 1), fill-opacity .1s cubic-bezier(0.4, 0, 1, 1)`}}),p(`path`,{d:`M 45,24 27,14 27,34`,fill:`#fff`})]})})}var cn,ln,un,dn,fn,pn,mn=e((()=>{v(),n(),te(),Tt(),(function(e){e.Normal=`Off`,e.Auto=`On`,e.Loop=`Loop`})(cn||={}),(function(e){e.High=`High Quality`,e.Medium=`Medium Quality`,e.Low=`Low Quality`,e.Off=`Off`})(ln||={}),en.displayName=`YouTube`,R(en,{url:{type:q.String,title:`Video`},play:{type:q.Enum,title:`Autoplay`,options:Object.values(cn)},shouldMute:{title:`Mute`,type:q.Boolean,enabledTitle:`Yes`,disabledTitle:`No`,hidden(e){return e.play===`Off`}},thumbnail:{title:`Thumbnail`,description:`Showing a thumbnail improves performance.`,type:q.Enum,options:Object.values(ln),hidden(e){return e.play!==`Off`}},isRed:{title:`Color`,type:q.Boolean,enabledTitle:`Red`,disabledTitle:`White`},...vt,border:{type:q.Border,optional:!0},boxShadow:{type:q.BoxShadow,optional:!0,title:`Shadows`},..._t}),en.defaultProps={url:`https://youtu.be/8AHPXm9Y6mI`,play:`Off`,shouldMute:!0,thumbnail:`Medium Quality`,isRed:!0,boxShadow:null,border:null},un={position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:68,height:48,padding:0,border:`none`,background:`transparent`,cursor:`pointer`},dn={position:`relative`,width:`100%`,height:`100%`},fn={textAlign:`center`,minWidth:140},pn={position:`absolute`,top:0,left:0,height:`100%`,width:`100%`}}));function hn(e){let t=H({state:Object.freeze({...e})}),n=e=>{typeof e==`function`&&(e=e(t.state)),t.state=Object.freeze({...t.state,...e})},i=typeof e==`object`?Object.freeze({...e}):e,a=new Set,s=e=>{typeof e==`function`&&(e=e(i)),i=typeof e==`object`?Object.freeze({...i,...e}):e,a.forEach(e=>e(i))};function c(){let[e,c]=r(i);return o(()=>(a.add(c),()=>a.delete(c)),[]),re()===!0?(re(),[t.state,n]):[e,s]}return c}var gn=e((()=>{n(),te()})),_n=e((()=>{gn()})),vn,yn=e((()=>{i(),v(),te(),_n(),vn=({title:e,description:t,containerStyle:n})=>_(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`,justifyContent:`center`,backgroundColor:`rgba(136, 85, 255, 0.1)`,overflow:`hidden`,...n},children:[p(`span`,{role:`img`,"aria-label":`icon`,style:{fontSize:`32px`},children:`✨`}),_(`div`,{style:{maxWidth:`240px`},children:[p(`h1`,{style:{fontSize:11,color:`#96F`,fontWeight:600},children:e}),p(`p`,{style:{fontSize:11,color:`rgba(153, 102, 255, 0.7)`,lineHeight:1.5},children:t})]})]}),q.Object,q.Color,q.Number,q.Number,q.Number,q.Enum,q.Number,hn({initialLimit:void 0,initialOffset:void 0,limit:void 0,offset:void 0,totalItems:void 0,page:1,searchQuery:``,totalPages:void 0})})),bn=e((()=>{yn()}));function xn(e){let[t,n]=r(!1);return o(()=>{let t=!0;return(async()=>{let r=e.map(e=>new Promise((t,n)=>{let r=new Image;r.src=e,r.onload=t,r.onerror=n}));try{await Promise.all(r),t&&n(!0)}catch(e){console.error(`Failed to preload images:`,e)}})(),()=>{t=!1}},[e]),t}function Sn({images:e=[],style:t={width:100,height:100,radius:0,fit:`fill`},frequency:n=50,visibleFor:i=1,perspective:a={enabled:!1,value:1e3},animation:c={in:{from:{opacity:0,scale:.5,blur:8,is3D:`2D`,rotate2D:0,rotate3D:{x:0,y:0,z:0}},to:{opacity:1,scale:1,blur:0,is3D:`2D`,rotate2D:0,rotate3D:{x:0,y:0,z:0}},transition:{type:`spring`,stiffness:300,damping:30}},out:{opacity:0,scale:.5,blur:8,is3D:`2D`,rotate2D:0,rotate3D:{x:0,y:0,z:0},transition:{type:`spring`,stiffness:300,damping:30}}},...l}){let u=200-(n-1)*199/49,[d,f]=r({x:0,y:0}),[m,h]=r(!1),[g,_]=r(0),[v,y]=r([]),[b,x]=r(!1),C=s(null),T=xn(b?e:[]);o(()=>{let e=new IntersectionObserver(([e])=>{x(e.isIntersecting)},{root:null,rootMargin:`0px`,threshold:.1});return C.current&&e.observe(C.current),()=>{C.current&&e.unobserve(C.current)}},[]);let E=e=>{let t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;f({x:n,y:r})},D=()=>{h(!0)},O=()=>{h(!1)};return o(()=>{if(m&&e.length>0){let t=v[v.length-1];if((t?Math.hypot(d.x-t.x,d.y-t.y):1/0)>u){let t={id:Math.random(),position:g,x:d.x,y:d.y,createdAt:Date.now(),state:`entering`};y(e=>[...e,t]),_(t=>(t+1)%e.length),setTimeout(()=>{y(e=>e.map(e=>e.id===t.id?{...e,state:`exiting`}:e))},i*1e3),setTimeout(()=>{y(e=>e.filter(e=>e.id!==t.id))},1e4)}}},[d,m,e,u,g,i]),e.length===0?p(vn,{title:`Set Up the Component`,description:`Add images to the component through the 'Images' property on the right panel. Then preview the website, and hover over the component.`,containerStyle:{...l.style,width:`100%`,height:`100%`}}):p(_e,{...l,ref:C,onMouseMove:E,onMouseEnter:D,onMouseLeave:O,background:``,children:T&&p(w,{children:v.map(({id:n,position:r,x:i,y:o,state:s})=>p(S.div,{initial:{opacity:c.in.from.opacity,scale:c.in.from.scale,filter:`blur(${c.in.from.blur}px)`,x:i-t.width/2,y:o-t.height/2,rotate:c.in.from.is3D===`2D`?c.in.from.rotate2D:0,rotateX:c.in.from.is3D===`3D`?c.in.from.rotate3D.x:0,rotateY:c.in.from.is3D===`3D`?c.in.from.rotate3D.y:0,rotateZ:c.in.from.is3D===`3D`?c.in.from.rotate3D.z:0},animate:s===`entering`?{opacity:c.in.to.opacity,scale:c.in.to.scale,filter:`blur(${c.in.to.blur}px)`,x:i-t.width/2,y:o-t.height/2,rotate:c.in.to.is3D===`2D`?c.in.to.rotate2D:0,rotateX:c.in.to.is3D===`3D`?c.in.to.rotate3D.x:0,rotateY:c.in.to.is3D===`3D`?c.in.to.rotate3D.y:0,rotateZ:c.in.to.is3D===`3D`?c.in.to.rotate3D.z:0}:{opacity:c.out.opacity,scale:c.out.scale,filter:`blur(${c.out.blur}px)`,x:i-t.width/2,y:o-t.height/2,rotate:c.out.is3D===`2D`?c.out.rotate2D:0,rotateX:c.out.is3D===`3D`?c.out.rotate3D.x:0,rotateY:c.out.is3D===`3D`?c.out.rotate3D.y:0,rotateZ:c.out.is3D===`3D`?c.out.rotate3D.z:0},transition:s===`entering`?c.in.transition:c.out.transition,style:{position:`absolute`,width:`${t.width}px`,height:`${t.height}px`,backgroundImage:`url(${e[r]??``})`,backgroundSize:t.fit===`fill`?`cover`:`contain`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,borderRadius:`${t.radius}px`,pointerEvents:`none`,perspective:a.enabled?`${a.value}px`:`none`}},n))})})}var Cn=e((()=>{v(),n(),te(),E(),bn(),Sn.displayName=`Cursor Image Trail`,R(Sn,{images:{type:q.Array,title:`Images`,propertyControl:{type:q.Image}},style:{type:q.Object,title:`Style`,controls:{width:{type:q.Number,title:`Width`,defaultValue:100,min:0,max:1e3,unit:`px`,step:1,displayStepper:!0},height:{type:q.Number,title:`Height`,defaultValue:100,min:0,max:1e3,unit:`px`,step:1,displayStepper:!0},radius:{type:q.Number,title:`Radius`,defaultValue:0,min:0,max:500,unit:`px`,step:1,displayStepper:!0},fit:{type:q.Enum,title:`Type`,options:[`fill`,`fit`],optionTitles:[`Fill`,`Fit`],defaultValue:`fill`,description:`Style the images that will appear.`}}},frequency:{type:q.Number,title:`Frequency`,defaultValue:35,min:1,max:50,step:1,displayStepper:!1,description:`How frequently these images appear.`},visibleFor:{type:q.Number,title:`Visible For`,defaultValue:1,min:.1,max:10,step:.1,unit:`s`,displayStepper:!0,description:`How long they're visible for before they animate out.`},animation:{type:q.Object,title:`Animation`,controls:{in:{type:q.Object,title:`In`,controls:{from:{type:q.Object,title:`From`,controls:{opacity:{type:q.Number,title:`Opacity`,defaultValue:0,min:0,max:1,step:.1},scale:{type:q.Number,title:`Scale`,defaultValue:.5,min:0,max:10,step:.1},blur:{type:q.Number,title:`Blur`,defaultValue:10,min:0,max:50,step:1,unit:`px`},is3D:{type:q.Enum,title:`Rotation`,options:[`2D`,`3D`],optionTitles:[`2D`,`3D`],defaultValue:`2D`,displaySegmentedControl:!0},rotate2D:{type:q.Number,title:`2D Rotate`,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.is3D===`3D`},rotate3D:{type:q.Object,title:`3D Rotate`,controls:{x:{type:q.Number,title:`X`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},y:{type:q.Number,title:`Y`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},z:{type:q.Number,title:`Z`,defaultValue:0,min:-360,max:360,step:1,unit:`°`}},hidden:e=>e.is3D===`2D`}}},to:{type:q.Object,title:`To`,controls:{opacity:{type:q.Number,title:`Opacity`,defaultValue:1,min:0,max:1,step:.1},scale:{type:q.Number,title:`Scale`,defaultValue:1,min:0,max:10,step:.1},blur:{type:q.Number,title:`Blur`,defaultValue:0,min:0,max:50,step:1,unit:`px`},is3D:{type:q.Enum,title:`Rotation`,options:[`2D`,`3D`],optionTitles:[`2D`,`3D`],defaultValue:`2D`,displaySegmentedControl:!0},rotate2D:{type:q.Number,title:`2D Rotate`,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.is3D===`3D`},rotate3D:{type:q.Object,title:`3D Rotate`,controls:{x:{type:q.Number,title:`X`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},y:{type:q.Number,title:`Y`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},z:{type:q.Number,title:`Z`,defaultValue:0,min:-360,max:360,step:1,unit:`°`}},hidden:e=>e.is3D===`2D`}}},transition:{type:q.Transition,title:`Transition`}}},out:{type:q.Object,title:`Out`,controls:{opacity:{type:q.Number,title:`Opacity`,defaultValue:0,min:0,max:1,step:.1},scale:{type:q.Number,title:`Scale`,defaultValue:.5,min:0,max:10,step:.1},blur:{type:q.Number,title:`Blur`,defaultValue:10,min:0,max:50,step:1,unit:`px`},is3D:{type:q.Enum,title:`Rotation`,options:[`2D`,`3D`],optionTitles:[`2D`,`3D`],defaultValue:`2D`,displaySegmentedControl:!0},rotate2D:{type:q.Number,title:`2D Rotate`,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.is3D===`3D`},rotate3D:{type:q.Object,title:`3D Rotate`,controls:{x:{type:q.Number,title:`X`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},y:{type:q.Number,title:`Y`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},z:{type:q.Number,title:`Z`,defaultValue:0,min:-360,max:360,step:1,unit:`°`}},hidden:e=>e.is3D===`2D`},transition:{type:q.Transition,title:`Transition`}}}}},perspective:{type:q.Object,title:`Perspective`,description:`More components at [Framer University](https://frameruni.link/cc).`,controls:{enabled:{type:q.Boolean,title:`Enable`,defaultValue:!1},value:{type:q.Number,title:`Value`,defaultValue:1200,min:500,max:5e3,step:10,displayStepper:!0,hidden:e=>!e.enabled}}}})}));function wn(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(Po[255&e]+Po[e>>8&255]+Po[e>>16&255]+Po[e>>24&255]+`-`+Po[255&t]+Po[t>>8&255]+`-`+Po[t>>16&15|64]+Po[t>>24&255]+`-`+Po[63&n|128]+Po[n>>8&255]+`-`+Po[n>>16&255]+Po[n>>24&255]+Po[255&r]+Po[r>>8&255]+Po[r>>16&255]+Po[r>>24&255]).toLowerCase()}function Tn(e,t,n){return Math.max(t,Math.min(n,e))}function En(e,t,n){return(1-n)*e+n*t}function Dn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function On(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(4294967295*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(2147483647*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error(`Invalid component type.`)}}function kn(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function An(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function jn(){let e=An(`canvas`);return e.style.display=`block`,e}function Mn(e){e in Bo||(Bo[e]=!0)}function Nn(){let e={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(e,t,n){return!1!==this.enabled&&t!==n&&t&&n?(this.spaces[t].transfer===bo&&(e.r=Pn(e.r),e.g=Pn(e.g),e.b=Pn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bo&&(e.r=Fn(e.r),e.g=Fn(e.g),e.b=Fn(e.b)),e):e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===go?yo:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[vo]:{primaries:t,whitePoint:r,transfer:yo,toXYZ:Vo,fromXYZ:Ho,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_o},outputColorSpaceConfig:{drawingBufferColorSpace:_o}},[_o]:{primaries:t,whitePoint:r,transfer:bo,toXYZ:Vo,fromXYZ:Ho,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_o}}}),e}function Pn(e){return e<.04045?.0773993808*e:(.9478672986*e+.0521327014)**2.4}function Fn(e){return e<.0031308?12.92*e:1.055*e**.41666-.055}function In(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Go.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:{}}function Ln(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){_s.fromArray(e,a);let o=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),s=t.dot(_s),c=n.dot(_s),l=r.dot(_s);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function Rn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+6*(t-e)*(2/3-n):e}function zn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Gc),e.getVertexPosition(c,Kc),e.getVertexPosition(l,qc);let u=function(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Zc.copy(s),Zc.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Zc);return l<n.near||l>n.far?null:{distance:l,point:Zc.clone(),object:e}}(e,t,n,r,Gc,Kc,qc,Xc);if(u){let e=new X;_c.getBarycoord(Xc,Gc,Kc,qc,e),i&&(u.uv=_c.getInterpolatedAttribute(i,s,c,l,e,new Lo)),a&&(u.uv1=_c.getInterpolatedAttribute(a,s,c,l,e,new Lo)),o&&(u.normal=_c.getInterpolatedAttribute(o,s,c,l,e,new X),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new X,materialIndex:0};_c.getNormal(Gc,Kc,qc,t.normal),u.face=t,u.barycoord=e}return u}function Bn(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?t[n][r]=null:t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Vn(e){let t={};for(let n=0;n<e.length;n++){let r=Bn(e[n]);for(let e in r)t[e]=r[e]}return t}function Hn(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:!0===t.isXRRenderTarget?t.texture.colorSpace:Uo.workingColorSpace}function Un(){return performance.now()}function Wn(e,t,n,r){let i=function(e){switch(e){case ba:case xa:return{byteLength:1,components:1};case Ca:case Sa:case Da:return{byteLength:2,components:1};case Oa:case ka:return{byteLength:2,components:4};case Ta:case wa:case Ea:return{byteLength:4,components:1};case ja:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}(r);switch(n){case 1021:case 1024:return e*t;case 1025:return e*t*2;case 1028:case Fa:return e*t/i.components*i.byteLength;case 1030:case Ia:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case Ma:case La:return e*t*4/i.components*i.byteLength;case Ra:case za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Va:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ua:case Ga:return Math.max(e,16)*Math.max(t,8)/4;case Ha:case Wa:return Math.max(e,8)*Math.max(t,8)/2;case Ka:case qa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ja:case Ya:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Za:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case eo:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case to:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case io:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ao:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case oo:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case so:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case co:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case lo:case uo:case fo:return Math.ceil(e/4)*Math.ceil(t/4)*16;case 36283:case po:return Math.ceil(e/4)*Math.ceil(t/4)*8;case mo:case ho:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Gn(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){!0!==t&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Kn(e){let t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))},update:function(n,r){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let e=t.get(n);(!e||e.version<n.version)&&t.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let i=t.get(n);if(i===void 0)t.set(n,function(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer(),s;if(e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback(),r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else{if(!(r instanceof Uint8ClampedArray))throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);s=e.UNSIGNED_BYTE}return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}(n,r));else if(i.version<n.version){if(i.size!==n.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);(function(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()})(i.buffer,n,r),i.version=n.version}}}}function qn(e,t,n,r,i,a,o){let s=new xc(0),c,l,u=!0===a?0:1,d=null,f=0,p=null;function m(e){let r=!0===e.isScene?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t,n){t.getRGB(Ll,Hn(e)),r.buffers.color.setClear(Ll.r,Ll.g,Ll.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),u=t,h(s,u)},getClearAlpha:function(){return u},setClearAlpha:function(e){u=e,h(s,u)},render:function(t){let n=!1,i=m(t);i===null?h(s,u):i&&i.isColor&&(h(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))},addToRenderList:function(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===ua)?(l===void 0&&(l=new Qc(new $c(1,1,1),new tl({name:`BackgroundCubeMaterial`,uniforms:Bn(Il.backgroundCube.uniforms),vertexShader:Il.backgroundCube.vertexShader,fragmentShader:Il.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Rl.copy(n.backgroundRotation),Rl.x*=-1,Rl.y*=-1,Rl.z*=-1,r.isCubeTexture&&!1===r.isRenderTargetTexture&&(Rl.y*=-1,Rl.z*=-1),l.material.uniforms.envMap.value=r,l.material.uniforms.flipEnvMap.value=r.isCubeTexture&&!1===r.isRenderTargetTexture?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(zl.makeRotationFromEuler(Rl)),l.material.toneMapped=Uo.getTransfer(r.colorSpace)!==bo,d===r&&f===r.version&&p===e.toneMapping||(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):r&&r.isTexture&&(c===void 0&&(c=new Qc(new Cl(2,2),new tl({name:`BackgroundMaterial`,uniforms:Bn(Il.background.uniforms),vertexShader:Il.background.vertexShader,fragmentShader:Il.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=r,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Uo.getTransfer(r.colorSpace)!==bo,!0===r.matrixAutoUpdate&&r.updateMatrix(),c.material.uniforms.uvTransform.value.copy(r.matrix),d===r&&f===r.version&&p===e.toneMapping||(c.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function Jn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=l(null),a=i,o=!1;function s(t){return e.bindVertexArray(t)}function c(t){return e.deleteVertexArray(t)}function l(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function u(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function d(e){f(e,0)}function f(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function p(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function m(t,n,r,i,a,o,s){!0===s?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function h(){g(),o=!0,a!==i&&(a=i,s(a.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(n,i,c,h,g){let _=!1,v=function(t,n,i){let a=!0===i.wireframe,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=o[n.id];s===void 0&&(s={},o[n.id]=s);let c=s[a];return c===void 0&&(c=l(e.createVertexArray()),s[a]=c),c}(h,c,i);a!==v&&(a=v,s(a.object)),_=function(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}(n,h,c,g),_&&function(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}(n,h,c,g),g!==null&&t.update(g,e.ELEMENT_ARRAY_BUFFER),(_||o)&&(o=!1,function(n,r,i,a){u();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,p=c.bytesPerElement,h=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===wa;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,g=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)f(i.location+e,t.meshPerAttribute);!0!==n.isInstancedMesh&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)d(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)m(i.location+e,o/i.locationSize,u,r,c*p,(g+o/i.locationSize*e)*p,h)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)f(i.location+e,s.meshPerAttribute);!0!==n.isInstancedMesh&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)d(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)m(i.location+e,o/i.locationSize,u,r,o*p,o/i.locationSize*e*p,h)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}p()}(n,i,c,h),g!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(g).buffer))},reset:h,resetDefaultState:g,dispose:function(){h();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)c(n[e].object),delete n[e];delete t[e]}delete r[e]}},releaseStatesOfGeometry:function(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)c(n[e].object),delete n[e];delete t[e]}delete r[e.id]},releaseStatesOfProgram:function(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)c(i[e].object),delete i[e];delete n[e.id]}},initAttributes:u,enableAttribute:d,disableUnusedAttributes:p}}function Yn(e,t,n){let r;function i(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}this.setMode=function(e){r=e},this.render=function(t,i){e.drawArrays(r,t,i),n.update(i,r,1)},this.renderInstances=i,this.renderMultiDraw=function(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)},this.renderMultiDrawInstances=function(e,a,o,s){if(o===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)i(e[t],a[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,a,0,s,0,o);let t=0;for(let e=0;e<o;e++)t+=a[e]*s[e];n.update(t,r,1)}}}function Xn(e,t,n,r){let i;function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=n.precision===void 0?`highp`:n.precision,s=a(o);s!==o&&(o=s);let c=!0===n.logarithmicDepthBuffer,l=!0===n.reverseDepthBuffer&&t.has(`EXT_clip_control`),u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(!0===t.has(`EXT_texture_filter_anisotropic`)){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:a,textureFormatReadable:function(t){return t===Ma||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(n){let i=n===Da&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==ba&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==Ea&&!i)},precision:o,logarithmicDepthBuffer:c,reverseDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),maxCubemapSize:e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:e.getParameter(e.MAX_VERTEX_ATTRIBS),maxVertexUniforms:e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:e.getParameter(e.MAX_VARYING_VECTORS),maxFragmentUniforms:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:e.getParameter(e.MAX_SAMPLES)}}function Zn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vl,s=new Ro,c={value:null,needsUpdate:!1};function l(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,!0!==i||l===null){let t=r+4*a,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=l(e,t,0)},this.setState=function(o,s,u){let d=o.clippingPlanes,f=o.clipIntersection,p=o.clipShadows,m=e.get(o);if(!i||d===null||d.length===0||a&&!p)a?l(null):function(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}();else{let e=a?0:r,t=4*e,i=m.clippingState||null;c.value=i,i=l(d,s,t,u);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}}}function Qn(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=ca:t===304&&(e.mapping=la),e}function r(e){let n=e.target;n.removeEventListener(`dispose`,r);let i=t.get(n);i!==void 0&&(t.delete(n),i.dispose())}return{get:function(i){if(i&&i.isTexture){let a=i.mapping;if(a===303||a===304){if(t.has(i))return n(t.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new ul(a.height);return o.fromEquirectangularTexture(e,i),t.set(i,o),i.addEventListener(`dispose`,r),n(o.texture,i.mapping)}return null}}}return i},dispose:function(){t=new WeakMap}}}function $n(e,t,n){let r=new Qo(e,t,n);return r.texture.mapping=ua,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function er(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function tr(){return new tl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function nr(){return new tl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ir(e){let t=new WeakMap,n=null;function r(e){let n=e.target;n.removeEventListener(`dispose`,r);let i=t.get(n);i!==void 0&&(t.delete(n),i.dispose())}return{get:function(i){if(i&&i.isTexture){let a=i.mapping,o=a===303||a===304,s=a===ca||a===la;if(o||s){let a=t.get(i),c=a===void 0?0:a.texture.pmremVersion;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return n===null&&(n=new Ql(e)),a=o?n.fromEquirectangular(i,a):n.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,t.set(i,a),a.texture;if(a!==void 0)return a.texture;{let c=i.image;return o&&c&&c.height>0||s&&c&&function(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}(c)?(n===null&&(n=new Ql(e)),a=o?n.fromEquirectangular(i):n.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,t.set(i,a),i.addEventListener(`dispose`,r),a.texture):null}}}return i},dispose:function(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function ar(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Mn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function or(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),!0===s.isInstancedBufferGeometry&&delete s._maxInstanceCount,n.memory.geometries--}function s(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{if(i===void 0)return;{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}}let s=new(kn(n)?jc:Ac)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}return{get:function(e,t){return!0===i[t.id]||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t},update:function(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&s(e)}else s(e);return a.get(e)}}}function sr(e,t,n){let r,i,a;function o(t,o,s){s!==0&&(e.drawElementsInstanced(r,o,i,t*a,s),n.update(o,r,s))}this.setMode=function(e){r=e},this.setIndex=function(e){i=e.type,a=e.bytesPerElement},this.render=function(t,o){e.drawElements(r,o,i,t*a),n.update(o,r,1)},this.renderInstances=o,this.renderMultiDraw=function(e,a,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,a,0,i,e,0,o);let s=0;for(let e=0;e<o;e++)s+=a[e];n.update(s,r,1)},this.renderMultiDrawInstances=function(e,s,c,l){if(c===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)o(e[t]/a,s[t],l[t]);else{u.multiDrawElementsInstancedWEBGL(r,s,0,i,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=s[e]*l[e];n.update(t,r,1)}}}function cr(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(n,r,i){switch(t.calls++,r){case e.TRIANGLES:t.triangles+=n/3*i;break;case e.LINES:t.lines+=n/2*i;break;case e.LINE_STRIP:t.lines+=i*(n-1);break;case e.LINE_LOOP:t.lines+=i*n;break;case e.POINTS:t.points+=i*n}}}}function lr(e,t,n){let r=new WeakMap,i=new Xo;return{update:function(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;!0===e&&(f=1),!0===n&&(f=2),!0===a&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new $o(h,p,m,u);g.type=Ea,g.needsUpdate=!0;let _=4*f;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;!0===e&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),!0===n&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),!0===a&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}d={count:u,texture:g,size:new Lo(p,m)},r.set(o,d),o.addEventListener(`dispose`,v)}if(!0===a.isInstancedMesh&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}}}function ur(e,t,n,r){let i=new WeakMap;function a(e){let t=e.target;t.removeEventListener(`dispose`,a),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:function(o){let s=r.render.frame,c=o.geometry,l=t.get(o,c);if(i.get(l)!==s&&(t.update(l),i.set(l,s)),o.isInstancedMesh&&(!1===o.hasEventListener(`dispose`,a)&&o.addEventListener(`dispose`,a),i.get(o)!==s&&(n.update(o.instanceMatrix,e.ARRAY_BUFFER),o.instanceColor!==null&&n.update(o.instanceColor,e.ARRAY_BUFFER),i.set(o,s))),o.isSkinnedMesh){let e=o.skeleton;i.get(e)!==s&&(e.update(),i.set(e,s))}return l},dispose:function(){i=new WeakMap}}}function dr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=iu[i];if(a===void 0&&(a=new Float32Array(i),iu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function pr(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function mr(e,t){let n=au[t];n===void 0&&(n=new Int32Array(t),au[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function hr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y||(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fr(n,t))return;e.uniform2fv(this.addr,t),pr(n,t)}}function _r(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)n[0]===t.r&&n[1]===t.g&&n[2]===t.b||(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fr(n,t))return;e.uniform3fv(this.addr,t),pr(n,t)}}function vr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fr(n,t))return;e.uniform4fv(this.addr,t),pr(n,t)}}function yr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),pr(n,t)}else{if(fr(n,r))return;cu.set(r),e.uniformMatrix2fv(this.addr,!1,cu),pr(n,r)}}function br(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),pr(n,t)}else{if(fr(n,r))return;su.set(r),e.uniformMatrix3fv(this.addr,!1,su),pr(n,r)}}function xr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),pr(n,t)}else{if(fr(n,r))return;ou.set(r),e.uniformMatrix4fv(this.addr,!1,ou),pr(n,r)}}function Sr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y||(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fr(n,t))return;e.uniform2iv(this.addr,t),pr(n,t)}}function wr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fr(n,t))return;e.uniform3iv(this.addr,t),pr(n,t)}}function Tr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fr(n,t))return;e.uniform4iv(this.addr,t),pr(n,t)}}function Er(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Dr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y||(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fr(n,t))return;e.uniform2uiv(this.addr,t),pr(n,t)}}function Or(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fr(n,t))return;e.uniform3uiv(this.addr,t),pr(n,t)}}function kr(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fr(n,t))return;e.uniform4uiv(this.addr,t),pr(n,t)}}function Ar(e,t,n){let r=this.cache,i=n.allocateTextureUnit(),a;r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),this.type===e.SAMPLER_2D_SHADOW?(eu.compareFunction=515,a=eu):a=$l,n.setTexture2D(t||a,i)}function jr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||nu,i)}function Mr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ru,i)}function Nr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||tu,i)}function Pr(e,t){e.uniform1fv(this.addr,t)}function Fr(e,t){let n=dr(t,this.size,2);e.uniform2fv(this.addr,n)}function Ir(e,t){let n=dr(t,this.size,3);e.uniform3fv(this.addr,n)}function Lr(e,t){let n=dr(t,this.size,4);e.uniform4fv(this.addr,n)}function Rr(e,t){let n=dr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function zr(e,t){let n=dr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Br(e,t){let n=dr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Vr(e,t){e.uniform1iv(this.addr,t)}function Hr(e,t){e.uniform2iv(this.addr,t)}function Ur(e,t){e.uniform3iv(this.addr,t)}function Wr(e,t){e.uniform4iv(this.addr,t)}function Gr(e,t){e.uniform1uiv(this.addr,t)}function Kr(e,t){e.uniform2uiv(this.addr,t)}function qr(e,t){e.uniform3uiv(this.addr,t)}function Jr(e,t){e.uniform4uiv(this.addr,t)}function Yr(e,t,n){let r=this.cache,i=t.length,a=mr(n,i);fr(r,a)||(e.uniform1iv(this.addr,a),pr(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||$l,a[e])}function Xr(e,t,n){let r=this.cache,i=t.length,a=mr(n,i);fr(r,a)||(e.uniform1iv(this.addr,a),pr(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||nu,a[e])}function Zr(e,t,n){let r=this.cache,i=t.length,a=mr(n,i);fr(r,a)||(e.uniform1iv(this.addr,a),pr(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ru,a[e])}function Qr(e,t,n){let r=this.cache,i=t.length,a=mr(n,i);fr(r,a)||(e.uniform1iv(this.addr,a),pr(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||tu,a[e])}function $r(e,t){e.seq.push(t),e.map[t.id]=t}function ei(e,t,n){let r=e.name,i=r.length;for(fu.lastIndex=0;;){let a=fu.exec(r),o=fu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){$r(n,l===void 0?new lu(s,e,t):new uu(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new du(s),$r(n,e)),n=e}}}function ti(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function ni(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+function(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}(e.getShaderSource(t),r)}return i}function ri(e,t){let n=function(e){Uo._getMatrix(hu,Uo.workingColorSpace,e);let t=`mat3( ${hu.elements.map(e=>e.toFixed(4))} )`;switch(Uo.getTransfer(e)){case yo:return[t,`LinearTransferOETF`];case bo:return[t,`sRGBTransferOETF`];default:return[t,`LinearTransferOETF`]}}(t);return[`vec4 ${e}( vec4 value ) {`,`\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function ii(e,t){let n;switch(t){case 1:default:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function ai(){return Uo.getLuminanceCoefficients(gu),[`float luminance( const in vec3 rgb ) {`,`\tconst vec3 weights = vec3( ${gu.x.toFixed(4)}, ${gu.y.toFixed(4)}, ${gu.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function oi(e){return e!==``}function si(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ci(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function li(e){return e.replace(_u,ui)}function ui(e,t){let n=Fl[t];if(n===void 0){let e=vu.get(t);if(e===void 0)throw Error(`Can not resolve #include <`+t+`>`);n=Fl[e]}return li(n)}function di(e){return e.replace(yu,fi)}function fi(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function pi(e){let t=`precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function mi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=function(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}(n),l=function(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case ca:case la:t=`ENVMAP_TYPE_CUBE`;break;case ua:t=`ENVMAP_TYPE_CUBE_UV`}return t}(n),u=function(e){let t=`ENVMAP_MODE_REFLECTION`;return e.envMap&&e.envMapMode===la&&(t=`ENVMAP_MODE_REFRACTION`),t}(n),d=function(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}(n),f=function(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}(n),p=function(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(oi).join(`
`)}(n),m=function(e){let t=[];for(let n in e){let r=e[n];!1!==r&&t.push(`#define `+n+` `+r)}return t.join(`
`)}(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(oi).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(oi).join(`
`),_.length>0&&(_+=`
`)):(g=[pi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&!1===n.flatShading?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&!1===n.flatShading?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(oi).join(`
`),_=[pi(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&!1===n.flatShading?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Fl.tonemapping_pars_fragment,n.toneMapping===0?``:ii(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Fl.colorspace_pars_fragment,ri(`linearToOutputTexel`,n.outputColorSpace),ai(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(oi).join(`
`)),o=li(o),o=si(o,n),o=ci(o,n),s=li(s),s=si(s,n),s=ci(s,n),o=di(o),s=di(s),!0!==n.isRawShaderMaterial&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===Ao?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===Ao?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=ti(i,i.VERTEX_SHADER,y),S=ti(i,i.FRAGMENT_SHADER,b);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;!1===i.getProgramParameter(h,i.LINK_STATUS)?(o=!1,typeof e.debug.onShaderError==`function`?e.debug.onShaderError(i,h,x,S):(ni(i,x,`vertex`),ni(i,S,`fragment`))):n!==``||r!==``&&a!==``||(s=!1),s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new pu(i,h),T=function(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}(i,h)}let w,T;i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?!0===n.morphTargets&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h),this.getUniforms=function(){return w===void 0&&C(this),w},this.getAttributes=function(){return T===void 0&&C(this),T};let E=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===E&&(E=i.getProgramParameter(h,37297)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mu++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function hi(e,t,n,r,i,a,o){let s=new Vs,c=new xu,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}return{getParameters:function(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===ua?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),a.precision);let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E,D,O,k,A=0;if(y.morphAttributes.position!==void 0&&(A=1),y.morphAttributes.normal!==void 0&&(A=2),y.morphAttributes.color!==void 0&&(A=3),C){let e=Il[C];E=e.vertexShader,D=e.fragmentShader}else E=a.vertexShader,D=a.fragmentShader,c.update(a),O=c.getVertexShaderID(a),k=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=!0===_.isInstancedMesh,P=!0===_.isBatchedMesh,F=!!a.map,I=!!a.matcap,L=!!x,R=!!a.aoMap,ee=!!a.lightMap,z=!!a.bumpMap,te=!!a.normalMap,ne=!!a.displacementMap,re=!!a.emissiveMap,ie=!!a.metalnessMap,B=!!a.roughnessMap,ae=a.anisotropy>0,oe=a.clearcoat>0,V=a.dispersion>0,se=a.iridescence>0,H=a.sheen>0,U=a.transmission>0,ce=ae&&!!a.anisotropyMap,W=oe&&!!a.clearcoatMap,le=oe&&!!a.clearcoatNormalMap,G=oe&&!!a.clearcoatRoughnessMap,ue=se&&!!a.iridescenceMap,de=se&&!!a.iridescenceThicknessMap,K=H&&!!a.sheenColorMap,fe=H&&!!a.sheenRoughnessMap,pe=!!a.specularMap,me=!!a.specularColorMap,he=!!a.specularIntensityMap,ge=U&&!!a.transmissionMap,q=U&&!!a.thicknessMap,_e=!!a.gradientMap,ve=!!a.alphaMap,ye=a.alphaTest>0,be=!!a.alphaHash,J=!!a.extensions,xe=0;a.toneMapped&&(j!==null&&!0!==j.isXRRenderTarget||(xe=e.toneMapping));let Se={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:E,fragmentShader:D,defines:a.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:!0===a.isRawShaderMaterial,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:!0===j.isXRRenderTarget?j.texture.colorSpace:vo,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:I,envMap:L,envMapMode:L&&x.mapping,envMapCubeUVHeight:S,aoMap:R,lightMap:ee,bumpMap:z,normalMap:te,displacementMap:f&&ne,emissiveMap:re,normalMapObjectSpace:te&&a.normalMapType===1,normalMapTangentSpace:te&&a.normalMapType===0,metalnessMap:ie,roughnessMap:B,anisotropy:ae,anisotropyMap:ce,clearcoat:oe,clearcoatMap:W,clearcoatNormalMap:le,clearcoatRoughnessMap:G,dispersion:V,iridescence:se,iridescenceMap:ue,iridescenceThicknessMap:de,sheen:H,sheenColorMap:K,sheenRoughnessMap:fe,specularMap:pe,specularColorMap:me,specularIntensityMap:he,transmission:U,transmissionMap:ge,thicknessMap:q,gradientMap:_e,opaque:!1===a.transparent&&a.blending===1&&!1===a.alphaToCoverage,alphaMap:ve,alphaTest:ye,alphaHash:be,combine:a.combine,mapUv:F&&h(a.map.channel),aoMapUv:R&&h(a.aoMap.channel),lightMapUv:ee&&h(a.lightMap.channel),bumpMapUv:z&&h(a.bumpMap.channel),normalMapUv:te&&h(a.normalMap.channel),displacementMapUv:ne&&h(a.displacementMap.channel),emissiveMapUv:re&&h(a.emissiveMap.channel),metalnessMapUv:ie&&h(a.metalnessMap.channel),roughnessMapUv:B&&h(a.roughnessMap.channel),anisotropyMapUv:ce&&h(a.anisotropyMap.channel),clearcoatMapUv:W&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:le&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:de&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:K&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:fe&&h(a.sheenRoughnessMap.channel),specularMapUv:pe&&h(a.specularMap.channel),specularColorMapUv:me&&h(a.specularColorMap.channel),specularIntensityMapUv:he&&h(a.specularIntensityMap.channel),transmissionMapUv:ge&&h(a.transmissionMap.channel),thicknessMapUv:q&&h(a.thicknessMap.channel),alphaMapUv:ve&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(te||ae),vertexColors:a.vertexColors,vertexAlphas:!0===a.vertexColors&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:!0===_.isPoints&&!!y.attributes.uv&&(F||ve),fog:!!v,useFog:!0===a.fog,fogExp2:!!v&&v.isFogExp2,flatShading:!0===a.flatShading,sizeAttenuation:!0===a.sizeAttenuation,logarithmicDepthBuffer:d,reverseDepthBuffer:M,skinning:!0===_.isSkinnedMesh,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:A,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:xe,decodeVideoTexture:F&&!0===a.map.isVideoTexture&&Uo.getTransfer(a.map.colorSpace)===bo,decodeVideoTextureEmissive:re&&!0===a.emissiveMap.isVideoTexture&&Uo.getTransfer(a.emissiveMap.colorSpace)===bo,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:J&&!0===a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(J&&!0===a.extensions.multiDraw||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Se.vertexUv1s=l.has(1),Se.vertexUv2s=l.has(2),Se.vertexUv3s=l.has(3),l.clear(),Se},getProgramCacheKey:function(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(function(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}(n,t),function(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()},getUniforms:function(e){let t=m[e.type],n;if(t){let e=Il[t];n=el.clone(e.uniforms)}else n=e.uniforms;return n},acquireProgram:function(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new mi(e,n,t,a),u.push(r)),r},releaseProgram:function(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}},releaseShaderCache:function(e){c.remove(e)},programs:u,dispose:function(){c.dispose()}}}function gi(){let e=new WeakMap;return{has:function(t){return e.has(t)},get:function(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n},remove:function(t){e.delete(t)},update:function(t,n,r){e.get(t)[n]=r},dispose:function(){e=new WeakMap}}}function _i(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function vi(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function yi(){let e=[],t=0,n=[],r=[],i=[];function a(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}return{opaque:n,transmissive:r,transparent:i,init:function(){t=0,n.length=0,r.length=0,i.length=0},push:function(e,t,o,s,c,l){let u=a(e,t,o,s,c,l);o.transmission>0?r.push(u):!0===o.transparent?i.push(u):n.push(u)},unshift:function(e,t,o,s,c,l){let u=a(e,t,o,s,c,l);o.transmission>0?r.unshift(u):!0===o.transparent?i.unshift(u):n.unshift(u)},finish:function(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){n.length>1&&n.sort(e||_i),r.length>1&&r.sort(t||vi),i.length>1&&i.sort(t||vi)}}}function bi(){let e=new WeakMap;return{get:function(t,n){let r=e.get(t),i;return r===void 0?(i=new yi,e.set(t,[i])):n>=r.length?(i=new yi,r.push(i)):i=r[n],i},dispose:function(){e=new WeakMap}}}function xi(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new X,color:new xc};break;case`SpotLight`:n={position:new X,direction:new X,color:new xc,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new X,color:new xc,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new X,skyColor:new xc,groundColor:new xc};break;case`RectAreaLight`:n={color:new xc,position:new X,halfWidth:new X,halfHeight:new X}}return e[t.id]=n,n}}}function Si(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ci(e){let t=new xi,n=function(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lo};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lo,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new X);let i=new X,a=new As,o=new As;return{setup:function(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Si);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(.5*y.width,0,0),e.halfHeight.set(0,.5*y.height,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(!0===e.has(`OES_texture_float_linear`)?(r.rectAreaLTC1=Z.LTC_FLOAT_1,r.rectAreaLTC2=Z.LTC_FLOAT_2):(r.rectAreaLTC1=Z.LTC_HALF_1,r.rectAreaLTC2=Z.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;y.directionalLength===c&&y.pointLength===l&&y.spotLength===u&&y.rectAreaLength===d&&y.hemiLength===f&&y.numDirectionalShadows===p&&y.numPointShadows===m&&y.numSpotShadows===h&&y.numSpotMaps===g&&y.numLightProbes===v||(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Cu++)},setupView:function(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(.5*f.width,0,0),e.halfHeight.set(0,.5*f.height,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}},state:r}}function wi(e){let t=new Ci(e),n=[],r=[],i={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:function(e){i.camera=e,n.length=0,r.length=0},state:i,setupLights:function(){t.setup(n)},setupLightsView:function(e){t.setupView(n,e)},pushLight:function(e){n.push(e)},pushShadow:function(e){r.push(e)}}}function Ti(e){let t=new WeakMap;return{get:function(n,r=0){let i=t.get(n),a;return i===void 0?(a=new wi(e),t.set(n,[a])):r>=i.length?(a=new wi(e),i.push(a)):a=i[r],a},dispose:function(){t=new WeakMap}}}function Ei(e,t,n){let r=new xl,i=new Lo,a=new Lo,o=new Xo,s=new wl({depthPacking:3201}),c=new Tl,l={},u=n.maxTextureSize,d={[Ni]:1,[Pi]:0,[Fi]:2},f=new tl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lo},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Bc;m.setAttribute(`position`,new kc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Qc(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Qo(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=!0===r.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=!0===r.isPointLight?c:s,e.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}return a.visible=n.visible,a.wireframe=n.wireframe,a.side=i===3?n.shadowSide===null?n.side:n.shadowSide:n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,!0===r.isPointLight&&!0===a.isMeshDistanceMaterial&&(e.properties.get(a).light=r),a}function b(n,i,a,o,s){if(!1===n.visible)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}this.render=function(t,n,s){if(!1===g.enabled||!1===g.autoUpdate&&!1===g.needsUpdate||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0||!1===d.autoUpdate&&!1===d.needsUpdate)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||!0===p||!0===m){let e=this.type===3?{}:{minFilter:ma,magFilter:ma};d.map!==null&&d.map.dispose(),d.map=new Qo(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}!0!==d.isPointLightShadow&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)}}function Di(e,t){let n=new function(){let t=!1,n=new Xo,r=null,i=new Xo(0,0,0,0);return{setMask:function(n){r===n||t||(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){!0===s&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),!1===i.equals(n)&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}},r=new function(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):te(e.DEPTH_TEST)},setMask:function(t){i===t||n||(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=wu[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:default:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}},i=new function(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):te(e.STENCIL_TEST))},setMask:function(r){n===r||t||(e.stencilMask(r),n=r)},setFunc:function(t,n,o){r===t&&i===n&&a===o||(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){o===t&&s===n&&c===r||(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}},a=new WeakMap,o=new WeakMap,s={},c={},l=new WeakMap,u=[],d=null,f=!1,p=null,m=null,h=null,g=null,_=null,v=null,y=null,b=new xc(0,0,0),x=0,S=!1,C=null,w=null,T=null,E=null,D=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,A=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=A>=1);let M=null,N={},P=e.getParameter(e.SCISSOR_BOX),F=e.getParameter(e.VIEWPORT),I=new Xo().fromArray(P),L=new Xo().fromArray(F);function R(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ee={};function z(t){!0!==s[t]&&(e.enable(t),s[t]=!0)}function te(t){!1!==s[t]&&(e.disable(t),s[t]=!1)}ee[e.TEXTURE_2D]=R(e.TEXTURE_2D,e.TEXTURE_2D,1),ee[e.TEXTURE_CUBE_MAP]=R(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[e.TEXTURE_2D_ARRAY]=R(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ee[e.TEXTURE_3D]=R(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),i.setClear(0),z(e.DEPTH_TEST),r.setFunc(3),B(!1),ae(1),z(e.CULL_FACE),ie(0);let ne={[Ii]:e.FUNC_ADD,[Li]:e.FUNC_SUBTRACT,[Ri]:e.FUNC_REVERSE_SUBTRACT};ne[103]=e.MIN,ne[104]=e.MAX;let re={[zi]:e.ZERO,[Bi]:e.ONE,[Vi]:e.SRC_COLOR,[Ui]:e.SRC_ALPHA,[Yi]:e.SRC_ALPHA_SATURATE,[qi]:e.DST_COLOR,[Gi]:e.DST_ALPHA,[Hi]:e.ONE_MINUS_SRC_COLOR,[Wi]:e.ONE_MINUS_SRC_ALPHA,[Ji]:e.ONE_MINUS_DST_COLOR,[Ki]:e.ONE_MINUS_DST_ALPHA,[Xi]:e.CONSTANT_COLOR,[Zi]:e.ONE_MINUS_CONSTANT_COLOR,[Qi]:e.CONSTANT_ALPHA,[$i]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(t,n,r,i,a,o,s,c,l,u){if(t!==0){if(!1===f&&(z(e.BLEND),f=!0),t===5)a||=n,o||=r,s||=i,n===m&&a===_||(e.blendEquationSeparate(ne[n],ne[a]),m=n,_=a),r===h&&i===g&&o===v&&s===y||(e.blendFuncSeparate(re[r],re[i],re[o],re[s]),h=r,g=i,v=o,y=s),!1!==c.equals(b)&&l===x||(e.blendColor(c.r,c.g,c.b,l),b.copy(c),x=l),p=t,S=!1;else if(t!==p||u!==S){if(m===Ii&&_===Ii||(e.blendEquation(e.FUNC_ADD),m=Ii,_=Ii),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR)}h=null,g=null,v=null,y=null,b.set(0,0,0),x=0,p=t,S=u}}else!0===f&&(te(e.BLEND),f=!1)}function B(t){C!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),C=t)}function ae(t){t===0?te(e.CULL_FACE):(z(e.CULL_FACE),t!==w&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),w=t}function oe(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),E===n&&D===r||(e.polygonOffset(n,r),E=n,D=r)):te(e.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:i},enable:z,disable:te,bindFramebuffer:function(t,n){return c[t]!==n&&(e.bindFramebuffer(t,n),c[t]=n,t===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=n),!0)},drawBuffers:function(t,n){let r=u,i=!1;if(t){r=l.get(n),r===void 0&&(r=[],l.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)},useProgram:function(t){return d!==t&&(e.useProgram(t),d=t,!0)},setBlending:ie,setMaterial:function(t,a){t.side===2?te(e.CULL_FACE):z(e.CULL_FACE);let o=t.side===1;a&&(o=!o),B(o),t.blending===1&&!1===t.transparent?ie(0):ie(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),r.setFunc(t.depthFunc),r.setTest(t.depthTest),r.setMask(t.depthWrite),n.setMask(t.colorWrite);let s=t.stencilWrite;i.setTest(s),s&&(i.setMask(t.stencilWriteMask),i.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),i.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),oe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?z(e.SAMPLE_ALPHA_TO_COVERAGE):te(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:B,setCullFace:ae,setLineWidth:function(t){t!==T&&(k&&e.lineWidth(t),T=t)},setPolygonOffset:oe,setScissorTest:function(t){t?z(e.SCISSOR_TEST):te(e.SCISSOR_TEST)},activeTexture:function(t){t===void 0&&(t=e.TEXTURE0+O-1),M!==t&&(e.activeTexture(t),M=t)},bindTexture:function(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+O-1:M);let i=N[r];i===void 0&&(i={type:void 0,texture:void 0},N[r]=i),i.type===t&&i.texture===n||(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ee[t]),i.type=t,i.texture=n)},unbindTexture:function(){let t=N[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D(...arguments)}catch{}},compressedTexImage3D:function(){try{e.compressedTexImage3D(...arguments)}catch{}},texImage2D:function(){try{e.texImage2D(...arguments)}catch{}},texImage3D:function(){try{e.texImage3D(...arguments)}catch{}},updateUBOMapping:function(t,n){let r=o.get(n);r===void 0&&(r=new WeakMap,o.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))},uniformBlockBinding:function(t,n){let r=o.get(n).get(t);a.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),a.set(n,r))},texStorage2D:function(){try{e.texStorage2D(...arguments)}catch{}},texStorage3D:function(){try{e.texStorage3D(...arguments)}catch{}},texSubImage2D:function(){try{e.texSubImage2D(...arguments)}catch{}},texSubImage3D:function(){try{e.texSubImage3D(...arguments)}catch{}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D(...arguments)}catch{}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D(...arguments)}catch{}},scissor:function(t){!1===I.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))},viewport:function(t){!1===L.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),s={},M=null,N={},c={},l=new WeakMap,u=[],d=null,f=!1,p=null,m=null,h=null,g=null,_=null,v=null,y=null,b=new xc(0,0,0),x=0,S=!1,C=null,w=null,T=null,E=null,D=null,I.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),n.reset(),r.reset(),i.reset()}}}function Oi(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=l!==void 0&&/OculusBrowser/g.test(l.userAgent),u=new Lo,d=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):An(`canvas`)}function g(e,t,n){let r=1,i=ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),o}return e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o=!1){if(n!==null&&e[n]!==void 0)return e[n];let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),r===e.RGBA){let t=o?yo:Uo.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===bo?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return s!==e.R16F&&s!==e.R32F&&s!==e.RG16F&&s!==e.RG32F&&s!==e.RGBA16F&&s!==e.RGBA32F||t.get(`EXT_color_buffer_float`),s}function x(t,n){let r;return t?n===null||n===Ta||n===Aa?r=e.DEPTH24_STENCIL8:n===Ea?r=e.DEPTH32F_STENCIL8:n===Ca&&(r=e.DEPTH24_STENCIL8):n===null||n===Ta||n===Aa?r=e.DEPTH_COMPONENT24:n===Ea?r=e.DEPTH_COMPONENT32F:n===Ca&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return!0===_(e)||e.isFramebufferTexture&&e.minFilter!==ma&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),function(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}(t),t.isVideoTexture&&d.delete(t)}function w(t){let n=t.target;n.removeEventListener(`dispose`,w),function(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}(n)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source;delete p.get(i)[n.__cacheKey],o.memory.textures--}let E=0;function D(t,i){let a=r.get(t);if(t.isVideoTexture&&function(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}(t),!1===t.isRenderTargetTexture&&t.version>0&&a.__version!==t.version){let e=t.image;if(e!==null&&!1!==e.complete)return void N(a,t,i)}n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}let O={[da]:e.REPEAT,[fa]:e.CLAMP_TO_EDGE,[pa]:e.MIRRORED_REPEAT},k={[ma]:e.NEAREST,[ha]:e.NEAREST_MIPMAP_NEAREST,[ga]:e.NEAREST_MIPMAP_LINEAR,[_a]:e.LINEAR,[va]:e.LINEAR_MIPMAP_NEAREST,[ya]:e.LINEAR_MIPMAP_LINEAR},A={[So]:e.NEVER,[ko]:e.ALWAYS,[Co]:e.LESS,[To]:e.LEQUAL,[wo]:e.EQUAL,[Oo]:e.GEQUAL,[Eo]:e.GREATER,[Do]:e.NOTEQUAL};function j(n,a){if(a.type===Ea&&!1===t.has(`OES_texture_float_linear`)&&(a.magFilter===1006||a.magFilter===va||a.magFilter===ga||a.magFilter===ya||a.minFilter===1006||a.minFilter===va||a.minFilter===ga||a.minFilter),e.texParameteri(n,e.TEXTURE_WRAP_S,O[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,O[a.wrapT]),n!==e.TEXTURE_3D&&n!==e.TEXTURE_2D_ARRAY||e.texParameteri(n,e.TEXTURE_WRAP_R,O[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,k[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,k[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,A[a.compareFunction])),!0===t.has(`EXT_texture_filter_anisotropic`)){if(a.magFilter===ma||a.minFilter!==ga&&a.minFilter!==ya||a.type===Ea&&!1===t.has(`OES_texture_float_linear`))return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function M(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function N(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=M(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||!0===l){n.activeTexture(e.TEXTURE0+s);let t=Uo.getPrimaries(Uo.workingColorSpace),r=o.colorSpace===go?null:Uo.getPrimaries(o.colorSpace),f=o.colorSpace===go||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=g(o.image,!1,i.maxTextureSize);p=te(o,p);let m=a.convert(o.format,o.colorSpace),h=a.convert(o.type),y,C=b(o.internalFormat,m,h,o.colorSpace,o.isVideoTexture);j(c,o);let w=o.mipmaps,T=!0!==o.isVideoTexture,E=d.__version===void 0||!0===l,D=u.dataReady,O=S(o,p);if(o.isDepthTexture)C=x(o.format===Pa,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,C,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,C,p.width,p.height,0,m,h,null));else if(o.isDataTexture)if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,C,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)y=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,h,y.data):n.texImage2D(e.TEXTURE_2D,t,C,y.width,y.height,0,m,h,y.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,C,p.width,p.height),D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,p.width,p.height,m,h,p.data)):n.texImage2D(e.TEXTURE_2D,0,C,p.width,p.height,0,m,h,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,C,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(y=w[t],o.format!==Ma){if(m!==null)if(T){if(D)if(o.layerUpdates.size>0){let r=Wn(y.width,y.height,o.format,o.type);for(let i of o.layerUpdates){let a=y.data.subarray(i*r/y.data.BYTES_PER_ELEMENT,(i+1)*r/y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,y.width,y.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,p.depth,m,y.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,C,y.width,y.height,p.depth,0,y.data,0,0)}else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,p.depth,m,h,y.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,C,y.width,y.height,p.depth,0,m,h,y.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,C,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)y=w[t],o.format===Ma?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,h,y.data):n.texImage2D(e.TEXTURE_2D,t,C,y.width,y.height,0,m,h,y.data):m!==null&&(T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,y.data):n.compressedTexImage2D(e.TEXTURE_2D,t,C,y.width,y.height,0,y.data))}else if(o.isDataArrayTexture)if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,C,p.width,p.height,p.depth),D)if(o.layerUpdates.size>0){let t=Wn(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,h,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,C,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,C,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)):n.texImage3D(e.TEXTURE_3D,0,C,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isFramebufferTexture){if(E)if(T)n.texStorage2D(e.TEXTURE_2D,O,C,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,C,t,r,0,m,h,null),t>>=1,r>>=1}}else if(w.length>0){if(T&&E){let t=ne(w[0]);n.texStorage2D(e.TEXTURE_2D,O,C,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)y=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,h,y):n.texImage2D(e.TEXTURE_2D,t,C,m,h,y);o.generateMipmaps=!1}else if(T){if(E){let t=ne(p);n.texStorage2D(e.TEXTURE_2D,O,C,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,h,p)}else n.texImage2D(e.TEXTURE_2D,0,C,m,h,p);_(o)&&v(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function P(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,ee(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function F(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=ee(n);z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.colorSpace),d=ee(n);r&&!1===z(n)?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):z(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function I(t){let i=r.get(t),a=!0===t.isWebGLCubeRenderTarget;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);(function(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!i.depthTexture||!i.depthTexture.isDepthTexture)throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,a.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),D(i.depthTexture,0);let o=a.__webglTexture,c=ee(i);if(i.depthTexture.format===Na)z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else{if(i.depthTexture.format!==Pa)throw Error(`Unknown depthTexture format`);z(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0)}})(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),F(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),F(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}let L=[],R=[];function ee(e){return Math.min(i.maxSamples,e.samples)}function z(e){let n=r.get(e);return e.samples>0&&!0===t.has(`WEBGL_multisampled_render_to_texture`)&&!1!==n.__useRenderToTexture}function te(e,t){let n=e.colorSpace;return e.format,e.type,!0===e.isCompressedTexture||!0===e.isVideoTexture||n!==vo&&n!==go&&Uo.getTransfer(n),t}function ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=function(){let e=E;return i.maxTextures,E+=1,e},this.resetTextureUnits=function(){E=0},this.setTexture2D=D,this.setTexture2DArray=function(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?N(a,t,i):n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)},this.setTexture3D=function(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?N(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)},this.setTextureCube=function(t,o){let s=r.get(t);t.version>0&&s.__version!==t.version?function(t,o,s){if(o.image.length!==6)return;let c=M(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||!0===c){n.activeTexture(e.TEXTURE0+s);let t=Uo.getPrimaries(Uo.workingColorSpace),r=o.colorSpace===go?null:Uo.getPrimaries(o.colorSpace),d=o.colorSpace===go||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)m[e]=f||p?p?o.image[e].image:o.image[e]:g(o.image[e],!0,i.maxCubemapSize),m[e]=te(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.colorSpace),w=!0!==o.isVideoTexture,T=u.__version===void 0||!0===c,E=l.dataReady,D,O=S(o,h);if(j(e.TEXTURE_CUBE_MAP,o),f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,h.width,h.height);for(let t=0;t<6;t++){D=m[t].mipmaps;for(let r=0;r<D.length;r++){let i=D[r];o.format===Ma?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y!==null&&(w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data))}}}else{if(D=o.mipmaps,w&&T){D.length>0&&O++;let t=ne(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<D.length;r++){let i=D[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<D.length;r++){let i=D[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}(s,t,o):n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture,e.TEXTURE0+o)},this.rebindTextures=function(t,n,i){let a=r.get(t);n!==void 0&&P(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&I(t)},this.setupRenderTarget=function(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=!0===t.isWebGLCubeRenderTarget,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&!1===z(t)){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.colorSpace,!0===t.isXRRenderTarget),u=ee(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),F(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),j(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)P(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else P(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a);n.bindTexture(e.TEXTURE_2D,o.__webglTexture),j(e.TEXTURE_2D,a),P(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,e.TEXTURE_2D,0),_(a)&&v(e.TEXTURE_2D)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),j(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)P(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else P(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&I(t)},this.updateRenderTargetMipmap=function(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(t.samples>0){if(!1===z(t)){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),!0===c&&(L.length=0,R.length=0,L.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&!1===t.resolveDepthBuffer&&(L.push(l),R.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,R)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&!1===t.resolveDepthBuffer&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}},this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=P,this.useMultisampledRTT=z}function ki(e,t){return{convert:function(n,r=``){let i,a=Uo.getTransfer(r);if(n===ba)return e.UNSIGNED_BYTE;if(n===Oa)return e.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return e.UNSIGNED_SHORT_5_5_5_1;if(n===ja)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===xa)return e.BYTE;if(n===Sa)return e.SHORT;if(n===Ca)return e.UNSIGNED_SHORT;if(n===wa)return e.INT;if(n===Ta)return e.UNSIGNED_INT;if(n===Ea)return e.FLOAT;if(n===Da)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===Ma)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===Na)return e.DEPTH_COMPONENT;if(n===Pa)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===Fa)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===Ia)return e.RG_INTEGER;if(n===La)return e.RGBA_INTEGER;if(n===Ra||n===za||n===Ba||n===Va)if(a===bo){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i===null)return null;if(n===Ra)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=t.get(`WEBGL_compressed_texture_s3tc`),i===null)return null;if(n===Ra)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Ha||n===Ua||n===Wa||n===Ga){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i===null)return null;if(n===Ha)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ua)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ga)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===Ka||n===qa||n===Ja){if(i=t.get(`WEBGL_compressed_texture_etc`),i===null)return null;if(n===Ka||n===qa)return a===bo?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===Ja)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(n===Ya||n===Xa||n===Za||n===Qa||n===$a||n===eo||n===to||n===no||n===ro||n===io||n===ao||n===oo||n===so||n===co){if(i=t.get(`WEBGL_compressed_texture_astc`),i===null)return null;if(n===Ya)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Za)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qa)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===io)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ao)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===so)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===co)return a===bo?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===lo||n===uo||n===fo){if(i=t.get(`EXT_texture_compression_bptc`),i===null)return null;if(n===lo)return a===bo?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===po||n===mo||n===ho){if(i=t.get(`EXT_texture_compression_rgtc`),i===null)return null;if(n===lo)return i.COMPRESSED_RED_RGTC1_EXT;if(n===po)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Aa?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}}}function Ai(e,t){function n(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function r(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,Du.copy(o),Du.x*=-1,Du.y*=-1,Du.z*=-1,a.isCubeTexture&&!1===a.isRenderTargetTexture&&(Du.y*=-1,Du.z*=-1),e.envMapRotation.value.setFromMatrix4(Ou.makeRotationFromEuler(Du)),e.flipEnvMap.value=a.isCubeTexture&&!1===a.isRenderTargetTexture?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}return{refreshFogUniforms:function(t,n){n.color.getRGB(t.fogColor.value,Hn(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)},refreshMaterialUniforms:function(e,i,a,o,s){i.isMeshBasicMaterial||i.isMeshLambertMaterial?r(e,i):i.isMeshToonMaterial?(r(e,i),function(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}(e,i)):i.isMeshPhongMaterial?(r(e,i),function(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}(e,i)):i.isMeshStandardMaterial?(r(e,i),function(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}(e,i),i.isMeshPhysicalMaterial&&function(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}(e,i,s)):i.isMeshMatcapMaterial?(r(e,i),function(e,t){t.matcap&&(e.matcap.value=t.matcap)}(e,i)):i.isMeshDepthMaterial?r(e,i):i.isMeshDistanceMaterial?(r(e,i),function(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}(e,i)):i.isMeshNormalMaterial?r(e,i):i.isLineBasicMaterial?(function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}(e,i),i.isLineDashedMaterial&&function(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}(e,i)):i.isPointsMaterial?function(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=.5*i,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,i,a,o):i.isSpriteMaterial?function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,i):i.isShadowMaterial?(e.color.value.copy(i.color),e.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function ji(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(!1===e.equals(i))return e.copy(i),!0}return!1}function l(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture,t}function u(t){let n=t.target;n.removeEventListener(`dispose`,u);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}return{bind:function(e,t){let n=t.program;r.uniformBlockBinding(e,n)},update:function(n,d){let f=i[n.id];f===void 0&&(function(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=l(i[e]),a=n%16,o=a%r.boundary,s=a+o;n+=o,s!==0&&16-s<r.storage&&(n+=16-s),t.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=r.storage}}}let r=n%16;r>0&&(n+=16-r),e.__size=n,e.__cache={}}(n),f=function(t){let n=function(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return 0}();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}(n),i[n.id]=f,n.addEventListener(`dispose`,u));let p=d.program;r.updateUBOMapping(n,p);let m=t.render.frame;a[n.id]!==m&&(function(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(!0===c(i,t,r,a)){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=l(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}(n),a[n.id]=m)},dispose:function(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}}}var Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,X,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Z,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au=e((()=>{i(),Mi=`174`,Ni=0,Pi=1,Fi=2,Ii=100,Li=101,Ri=102,zi=200,Bi=201,Vi=202,Hi=203,Ui=204,Wi=205,Gi=206,Ki=207,qi=208,Ji=209,Yi=210,Xi=211,Zi=212,Qi=213,$i=214,ea=0,ta=1,na=2,ra=3,ia=4,aa=5,oa=6,sa=7,ca=301,la=302,ua=306,da=1e3,fa=1001,pa=1002,ma=1003,ha=1004,ga=1005,_a=1006,va=1007,ya=1008,ba=1009,xa=1010,Sa=1011,Ca=1012,wa=1013,Ta=1014,Ea=1015,Da=1016,Oa=1017,ka=1018,Aa=1020,ja=35902,Ma=1023,Na=1026,Pa=1027,Fa=1029,Ia=1031,La=1033,Ra=33776,za=33777,Ba=33778,Va=33779,Ha=35840,Ua=35841,Wa=35842,Ga=35843,Ka=36196,qa=37492,Ja=37496,Ya=37808,Xa=37809,Za=37810,Qa=37811,$a=37812,eo=37813,to=37814,no=37815,ro=37816,io=37817,ao=37818,oo=37819,so=37820,co=37821,lo=36492,uo=36494,fo=36495,po=36284,mo=36285,ho=36286,go=``,_o=`srgb`,vo=`srgb-linear`,yo=`linear`,bo=`srgb`,xo=7680,So=512,Co=513,wo=514,To=515,Eo=516,Do=517,Oo=518,ko=519,Ao=`300 es`,jo=2e3,Mo=2001,No=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Po=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Fo=Math.PI/180,Io=180/Math.PI,Lo=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tn(this.x,e.x,t.x),this.y=Tn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tn(this.x,e,t),this.y=Tn(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ro=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zo=new Ro,Bo={},Vo=new Ro().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ho=new Ro().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),Uo=Nn(),Go=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Wo===void 0&&(Wo=An(`canvas`)),Wo.width=e.width,Wo.height=e.height;let n=Wo.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Wo}return t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=An(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=255*Pn(i[e]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*Pn(t[e]/255)):t[e]=Pn(t[e]);return{data:t,width:e.width,height:e.height}}return e}},Ko=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ko++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(In(r[t].image)):e.push(In(r[t]))}else e=In(r);n.url=e}return t||(e.images[this.uuid]=n),n}},Jo=0,Yo=class e extends No{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=1001,i=1001,a=1006,o=1008,s=1023,c=1009,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jo++}),this.uuid=wn(),this.name=``,this.source=new qo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new Lo(0,0),this.repeat=new Lo(1,1),this.center=new Lo(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ro,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case da:e.x-=Math.floor(e.x);break;case fa:e.x=e.x<0?0:1;break;case pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case da:e.y-=Math.floor(e.y);break;case fa:e.y=e.y<0?0:1;break;case pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){!0===e&&this.pmremVersion++}},Yo.DEFAULT_IMAGE=null,Yo.DEFAULT_MAPPING=300,Yo.DEFAULT_ANISOTROPY=1,Xo=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tn(this.x,e.x,t.x),this.y=Tn(this.y,e.y,t.y),this.z=Tn(this.z,e.z,t.z),this.w=Tn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tn(this.x,e,t),this.y=Tn(this.y,e,t),this.z=Tn(this.z,e,t),this.w=Tn(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends No{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xo(0,0,e,t),this.scissorTest=!1,this.viewport=new Xo(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_a,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Yo(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new qo(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Qo=class extends Zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$o=class extends Yo{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ma,this.minFilter=ma,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},es=class extends Yo{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ma,this.minFilter=ma,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ts=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)return e[t+0]=s,e[t+1]=c,e[t+2]=l,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=f,e[t+2]=p,void(e[t+3]=m);if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p}return!0===t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rs.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rs.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tn(this.x,e.x,t.x),this.y=Tn(this.y,e.y,t.y),this.z=Tn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tn(this.x,e,t),this.y=Tn(this.y,e,t),this.z=Tn(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tn(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ns.copy(this).projectOnVector(e),this.sub(ns)}reflect(e){return this.sub(ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ns=new X,rs=new ts,is=class{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(os.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(os.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=os.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(!0===t&&r!==void 0&&!0!==e.isInstancedMesh)for(let t=0,n=r.count;t<n;t++)!0===e.isMesh?e.getVertexPosition(t,os):os.fromBufferAttribute(r,t),os.applyMatrix4(e.matrixWorld),this.expandByPoint(os);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ss.copy(e.boundingBox)),ss.applyMatrix4(e.matrixWorld),this.union(ss)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,os),os.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),hs.subVectors(this.max,ms),cs.subVectors(e.a,ms),ls.subVectors(e.b,ms),us.subVectors(e.c,ms),ds.subVectors(ls,cs),fs.subVectors(us,ls),ps.subVectors(cs,us);let t=[0,-ds.z,ds.y,0,-fs.z,fs.y,0,-ps.z,ps.y,ds.z,0,-ds.x,fs.z,0,-fs.x,ps.z,0,-ps.x,-ds.y,ds.x,0,-fs.y,fs.x,0,-ps.y,ps.x,0];return!!Ln(t,cs,ls,us,hs)&&(t=[1,0,0,0,1,0,0,0,1],!!Ln(t,cs,ls,us,hs)&&(gs.crossVectors(ds,fs),t=[gs.x,gs.y,gs.z],Ln(t,cs,ls,us,hs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,os).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(os).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(as[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),as[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),as[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),as[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),as[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),as[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),as[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),as[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(as)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},as=[new X,new X,new X,new X,new X,new X,new X,new X],os=new X,ss=new is,cs=new X,ls=new X,us=new X,ds=new X,fs=new X,ps=new X,ms=new X,hs=new X,gs=new X,_s=new X,vs=new is,ys=new X,bs=new X,xs=class{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?vs.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);let t=ys.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=.5*(e-this.radius);this.center.addScaledVector(ys,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(bs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(bs)),this.expandByPoint(ys.copy(e.center).sub(bs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ss=new X,Cs=new X,ws=new X,Ts=new X,Es=new X,Ds=new X,Os=new X,ks=class{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ss.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,t),Ss.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cs.copy(e).add(t).multiplyScalar(.5),ws.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(Cs);let i=.5*e.distanceTo(t),a=-this.direction.dot(ws),o=Ts.dot(this.direction),s=-Ts.dot(ws),c=Ts.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Cs).addScaledVector(ws,d),f}intersectSphere(e,t){Ss.subVectors(e.center,this.origin);let n=Ss.dot(this.direction),r=Ss.dot(Ss)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r?null:((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r?null:((o>n||n!=n)&&(n=o),(s<r||r!=r)&&(r=s),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,t,n,r,i){Es.subVectors(t,e),Ds.subVectors(n,e),Os.crossVectors(Es,Ds);let a,o=this.direction.dot(Os);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Ts.subVectors(this.origin,e);let s=a*this.direction.dot(Ds.crossVectors(Ts,Ds));if(s<0)return null;let c=a*this.direction.dot(Es.cross(Ts));if(c<0||s+c>o)return null;let l=-a*Ts.dot(Os);return l<0?null:this.at(l/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},As=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/js.setFromMatrixColumn(e,0).length(),i=1/js.setFromMatrixColumn(e,1).length(),a=1/js.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ns,e,Ps)}lookAt(e,t,n){let r=this.elements;return Ls.subVectors(e,t),Ls.lengthSq()===0&&(Ls.z=1),Ls.normalize(),Fs.crossVectors(n,Ls),Fs.lengthSq()===0&&(Math.abs(n.z)===1?Ls.x+=1e-4:Ls.z+=1e-4,Ls.normalize(),Fs.crossVectors(n,Ls)),Fs.normalize(),Is.crossVectors(Ls,Fs),r[0]=Fs.x,r[4]=Is.x,r[8]=Ls.x,r[1]=Fs.y,r[5]=Is.y,r[9]=Ls.y,r[2]=Fs.z,r[6]=Is.z,r[10]=Ls.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14];return e[3]*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+e[7]*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+e[11]*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+e[15]*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=js.set(r[0],r[1],r[2]).length(),a=js.set(r[4],r[5],r[6]).length(),o=js.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Ms.copy(this);let s=1/i,c=1/a,l=1/o;return Ms.elements[0]*=s,Ms.elements[1]*=s,Ms.elements[2]*=s,Ms.elements[4]*=c,Ms.elements[5]*=c,Ms.elements[6]*=c,Ms.elements[8]*=l,Ms.elements[9]*=l,Ms.elements[10]*=l,t.setFromRotationMatrix(Ms),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=2e3){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===jo)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else{if(o!==Mo)throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);f=-a/(a-i),p=-a*i/(a-i)}return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=2e3){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===jo)p=(a+i)*u,m=-2*u;else{if(o!==Mo)throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);p=i*u,m=-1*u}return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},js=new X,Ms=new As,Ns=new X(0,0,0),Ps=new X(1,1,1),Fs=new X,Is=new X,Ls=new X,Rs=new As,zs=new ts,Bs=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Tn(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Tn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0)}return this._order=t,!0===n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zs.setFromEuler(this),this.setFromQuaternion(zs,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Bs.DEFAULT_ORDER=`XYZ`,Vs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Hs=0,Us=new X,Ws=new ts,Gs=new As,Ks=new X,qs=new X,Js=new X,Ys=new ts,Xs=new X(1,0,0),Zs=new X(0,1,0),Qs=new X(0,0,1),$s={type:`added`},ec={type:`removed`},tc={type:`childadded`,child:null},nc={type:`childremoved`,child:null},rc=class e extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hs++}),this.uuid=wn(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new X,n=new Bs,r=new ts,i=new X(1,1,1);n._onChange(function(){r.setFromEuler(n,!1)}),r._onChange(function(){n.setFromQuaternion(r,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new As},normalMatrix:{value:new Ro}}),this.matrix=new As,this.matrixWorld=new As,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Xs,e)}rotateY(e){return this.rotateOnAxis(Zs,e)}rotateZ(e){return this.rotateOnAxis(Qs,e)}translateOnAxis(e,t){return Us.copy(e).applyQuaternion(this.quaternion),this.position.add(Us.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xs,e)}translateY(e){return this.translateOnAxis(Zs,e)}translateZ(e){return this.translateOnAxis(Qs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gs.lookAt(qs,Ks,this.up):Gs.lookAt(Ks,qs,this.up),this.quaternion.setFromRotationMatrix(Gs),r&&(Gs.extractRotation(r.matrixWorld),Ws.setFromRotationMatrix(Gs),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this||e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($s),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ec),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($s),tc.child=e,this.dispatchEvent(tc),tc.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,Js),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,Ys,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(!0===this.matrixWorldAutoUpdate&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(!0===e&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),!0===this.matrixWorldAutoUpdate&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),!0===t){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},rc.DEFAULT_UP=new X(0,1,0),rc.DEFAULT_MATRIX_AUTO_UPDATE=!0,rc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,ic=new X,ac=new X,oc=new X,sc=new X,cc=new X,lc=new X,uc=new X,dc=new X,fc=new X,pc=new X,mc=new Xo,hc=new Xo,gc=new Xo,_c=class e{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ic.subVectors(e,t),r.cross(ic);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){ic.subVectors(r,t),ac.subVectors(n,t),oc.subVectors(e,t);let a=ic.dot(ic),o=ic.dot(ac),s=ic.dot(oc),c=ac.dot(ac),l=ac.dot(oc),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,sc)!==null&&sc.x>=0&&sc.y>=0&&sc.x+sc.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,sc)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,sc.x),s.addScaledVector(a,sc.y),s.addScaledVector(o,sc.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return mc.setScalar(0),hc.setScalar(0),gc.setScalar(0),mc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(mc,i.x),a.addScaledVector(hc,i.y),a.addScaledVector(gc,i.z),a}static isFrontFacing(e,t,n,r){return ic.subVectors(n,t),ac.subVectors(e,t),ic.cross(ac).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ic.subVectors(this.c,this.b),ac.subVectors(this.a,this.b),.5*ic.cross(ac).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;cc.subVectors(r,n),lc.subVectors(i,n),dc.subVectors(e,n);let s=cc.dot(dc),c=lc.dot(dc);if(s<=0&&c<=0)return t.copy(n);fc.subVectors(e,r);let l=cc.dot(fc),u=lc.dot(fc);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(cc,a);pc.subVectors(e,i);let f=cc.dot(pc),p=lc.dot(pc);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(lc,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return uc.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(uc,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(cc,a).addScaledVector(lc,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yc={h:0,s:0,l:0},bc={h:0,s:0,l:0},xc=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_o){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Uo.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Uo.workingColorSpace){return this.r=e,this.g=t,this.b=n,Uo.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Uo.workingColorSpace){var i;if(e=(e%(i=1)+i)%i,t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Rn(i,r,e+1/3),this.g=Rn(i,r,e),this.b=Rn(i,r,e-1/3)}return Uo.toWorkingColorSpace(this,r),this}setStyle(e,t=_o){let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let e,r=n[1],i=n[2];switch(r){case`rgb`:case`rgba`:if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return e[4],this.setRGB(Math.min(255,parseInt(e[1],10))/255,Math.min(255,parseInt(e[2],10))/255,Math.min(255,parseInt(e[3],10))/255,t);if(e=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return e[4],this.setRGB(Math.min(100,parseInt(e[1],10))/100,Math.min(100,parseInt(e[2],10))/100,Math.min(100,parseInt(e[3],10))/100,t);break;case`hsl`:case`hsla`:if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return e[4],this.setHSL(parseFloat(e[1])/360,parseFloat(e[2])/100,parseFloat(e[3])/100,t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let e=n[1],r=e.length;if(r===3)return this.setRGB(parseInt(e.charAt(0),16)/15,parseInt(e.charAt(1),16)/15,parseInt(e.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(e,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_o){let n=vc[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_o){return Uo.fromWorkingColorSpace(Sc.copy(this),e),65536*Math.round(Tn(255*Sc.r,0,255))+256*Math.round(Tn(255*Sc.g,0,255))+Math.round(Tn(255*Sc.b,0,255))}getHexString(e=_o){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Uo.workingColorSpace){Uo.fromWorkingColorSpace(Sc.copy(this),t);let n=Sc.r,r=Sc.g,i=Sc.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Uo.workingColorSpace){return Uo.fromWorkingColorSpace(Sc.copy(this),t),e.r=Sc.r,e.g=Sc.g,e.b=Sc.b,e}getStyle(e=_o){Uo.fromWorkingColorSpace(Sc.copy(this),e);let t=Sc.r,n=Sc.g,r=Sc.b;return e===`srgb`?`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(yc),this.setHSL(yc.h+e,yc.s+t,yc.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yc),e.getHSL(bc);let n=En(yc.h,bc.h,t),r=En(yc.s,bc.s,t),i=En(yc.l,bc.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sc=new xc,xc.NAMES=vc,Cc=0,wc=class extends No{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cc++}),this.uuid=wn(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xc(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0)continue;let r=this[t];r!==void 0&&(r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n)}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),!0===this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),!1===this.depthTest&&(n.depthTest=this.depthTest),!1===this.depthWrite&&(n.depthWrite=this.depthWrite),!1===this.colorWrite&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(n.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaHash&&(n.alphaHash=!0),!0===this.alphaToCoverage&&(n.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=!0),!0===this.forceSinglePass&&(n.forceSinglePass=!0),!0===this.wireframe&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),!1===this.fog&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){!0===e&&this.version++}onBuild(){}},Tc=class extends wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new xc(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bs,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ec=new X,Dc=new Lo,Oc=0,kc=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dc.fromBufferAttribute(this,t),Dc.applyMatrix3(e),this.setXY(t,Dc.x,Dc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix3(e),this.setXYZ(t,Ec.x,Ec.y,Ec.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ec.fromBufferAttribute(this,t),Ec.applyMatrix4(e),this.setXYZ(t,Ec.x,Ec.y,Ec.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ec.fromBufferAttribute(this,t),Ec.applyNormalMatrix(e),this.setXYZ(t,Ec.x,Ec.y,Ec.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ec.fromBufferAttribute(this,t),Ec.transformDirection(e),this.setXYZ(t,Ec.x,Ec.y,Ec.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),r=On(r,this.array),i=On(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},Ac=class extends kc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},jc=class extends kc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Mc=class extends kc{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nc=0,Pc=new As,Fc=new rc,Ic=new X,Lc=new is,Rc=new is,zc=new X,Bc=class e extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=wn(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kn(e)?jc:Ac)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ro().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pc.makeRotationFromQuaternion(e),this.applyMatrix4(Pc),this}rotateX(e){return Pc.makeRotationX(e),this.applyMatrix4(Pc),this}rotateY(e){return Pc.makeRotationY(e),this.applyMatrix4(Pc),this}rotateZ(e){return Pc.makeRotationZ(e),this.applyMatrix4(Pc),this}translate(e,t,n){return Pc.makeTranslation(e,t,n),this.applyMatrix4(Pc),this}scale(e,t,n){return Pc.makeScale(e,t,n),this.applyMatrix4(Pc),this}lookAt(e){return Fc.lookAt(e),Fc.updateMatrix(),this.applyMatrix4(Fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ic).negate(),this.translate(Ic.x,Ic.y,Ic.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Mc(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length,t.count,t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Lc.setFromBufferAttribute(n),this.morphTargetsRelative?(zc.addVectors(this.boundingBox.min,Lc.min),this.boundingBox.expandByPoint(zc),zc.addVectors(this.boundingBox.max,Lc.max),this.boundingBox.expandByPoint(zc)):(this.boundingBox.expandByPoint(Lc.min),this.boundingBox.expandByPoint(Lc.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)this.boundingSphere.set(new X,1/0);else if(e){let n=this.boundingSphere.center;if(Lc.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rc.setFromBufferAttribute(n),this.morphTargetsRelative?(zc.addVectors(Lc.min,Rc.min),Lc.expandByPoint(zc),zc.addVectors(Lc.max,Rc.max),Lc.expandByPoint(zc)):(Lc.expandByPoint(Rc.min),Lc.expandByPoint(Rc.max))}Lc.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)zc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(zc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)zc.fromBufferAttribute(a,t),o&&(Ic.fromBufferAttribute(e,t),zc.add(Ic)),r=Math.max(r,n.distanceToSquared(zc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;let n=t.position,r=t.normal,i=t.uv;!1===this.hasAttribute(`tangent`)&&this.setAttribute(`tangent`,new kc(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new X,s[e]=new X;let c=new X,l=new X,u=new X,d=new Lo,f=new Lo,p=new Lo,m=new X,h=new X;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start;for(let t=r,i=r+n.count;t<i;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new X,y=new X,b=new X,x=new X;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start;for(let t=r,i=r+n.count;t<i;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new kc(new Float32Array(3*t.count),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new X,i=new X,a=new X,o=new X,s=new X,c=new X,l=new X,u=new X;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zc.fromBufferAttribute(e,t),zc.normalize(),e.setXYZ(t,zc.x,zc.y,zc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new kc(a,r,i)}if(this.index===null)return this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=t(i[e],r);n.setAttribute(e,a)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=t(o[e],r);i.push(n)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Vc=new As,Hc=new ks,Uc=new xs,Wc=new X,Gc=new X,Kc=new X,qc=new X,Jc=new X,Yc=new X,Xc=new X,Zc=new X,Qc=class extends rc{constructor(e=new Bc,t=new Tc){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Yc.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Jc.fromBufferAttribute(s,e),a?Yc.addScaledVector(Jc,r):Yc.addScaledVector(Jc.sub(t),r))}t.add(Yc)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Hc.copy(e.ray).recast(e.near),!1===Uc.containsPoint(Hc.origin)&&(Hc.intersectSphere(Uc,Wc)===null||Hc.origin.distanceToSquared(Wc)>(e.far-e.near)**2))return;Vc.copy(i).invert(),Hc.copy(e.ray).applyMatrix4(Vc),n.boundingBox!==null&&!1===Hc.intersectsBox(n.boundingBox)||this._computeIntersections(e,t,Hc)}}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex];for(let i=Math.max(s.start,f.start),a=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));i<a;i+=3)r=zn(this,p,e,n,c,l,u,o.getX(i),o.getX(i+1),o.getX(i+2)),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}else for(let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);i<s;i+=3)r=zn(this,a,e,n,c,l,u,o.getX(i),o.getX(i+1),o.getX(i+2)),r&&(r.faceIndex=Math.floor(i/3),t.push(r));else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex];for(let i=Math.max(o.start,f.start),a=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));i<a;i+=3)r=zn(this,p,e,n,c,l,u,i,i+1,i+2),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}else for(let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);i<o;i+=3)r=zn(this,a,e,n,c,l,u,i,i+1,i+2),r&&(r.faceIndex=Math.floor(i/3),t.push(r))}},$c=class e extends Bc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new X;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Mc(c,3)),this.setAttribute(`normal`,new Mc(l,3)),this.setAttribute(`uv`,new Mc(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},el={clone:Bn,merge:Vn},tl=class extends wc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bn(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)!0===this.extensions[e]&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},nl=class extends rc{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new As,this.projectionMatrix=new As,this.projectionMatrixInverse=new As,this.coordinateSystem=jo}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rl=new X,il=new Lo,al=new Lo,ol=class extends nl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Io*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Fo*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Io*Math.atan(Math.tan(.5*Fo*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rl.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rl.x,rl.y).multiplyScalar(-e/rl.z),rl.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rl.x,rl.y).multiplyScalar(-e/rl.z)}getViewSize(e,t){return this.getViewBounds(e,il,al),t.subVectors(al,il)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Fo*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sl=-90,cl=class extends rc{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ol(sl,1,e,t);r.layers=this.layers,this.add(r);let i=new ol(sl,1,e,t);i.layers=this.layers,this.add(i);let a=new ol(sl,1,e,t);a.layers=this.layers,this.add(a);let o=new ol(sl,1,e,t);o.layers=this.layers,this.add(o);let s=new ol(sl,1,e,t);s.layers=this.layers,this.add(s);let c=new ol(sl,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===jo)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else{if(e!==Mo)throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1)}for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ll=class extends Yo{constructor(e,t,n,r,i,a,o,s,c,l){super(e=e===void 0?[]:e,t=t===void 0?ca:t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ul=class extends Qo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ll(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?_a:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $c(5,5,5),i=new tl({name:`CubemapFromEquirect`,uniforms:Bn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Qc(r,i),o=t.minFilter;return t.minFilter===ya&&(t.minFilter=1006),new cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},dl=class extends rc{constructor(){super(),this.isGroup=!0,this.type=`Group`}},fl={type:`move`},pl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fl)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new dl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ml=class extends rc{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bs,this.environmentIntensity=1,this.environmentRotation=new Bs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hl=new X,gl=new X,_l=new Ro,vl=class{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hl.subVectors(n,t).cross(gl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_l.getNormalMatrix(e),r=this.coplanarPoint(hl).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},yl=new xs,bl=new X,xl=class{constructor(e=new vl,t=new vl,n=new vl,r=new vl,i=new vl,a=new vl){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===jo)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else{if(t!==Mo)throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);n[5].setComponents(o,u,m,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yl.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yl)}intersectsSprite(e){return yl.center.set(0,0,0),yl.radius=.7071067811865476,yl.applyMatrix4(e.matrixWorld),this.intersectsSphere(yl)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(bl.x=r.normal.x>0?e.max.x:e.min.x,bl.y=r.normal.y>0?e.max.y:e.min.y,bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Sl=class extends Yo{constructor(e,t,n,r,i,a,o,s,c,l=1026){if(l!==Na&&l!==Pa)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===Na&&(n=Ta),n===void 0&&l===Pa&&(n=Aa),super(null,r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o===void 0?ma:o,this.minFilter=s===void 0?ma:s,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cl=class e extends Bc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Mc(p,3)),this.setAttribute(`normal`,new Mc(m,3)),this.setAttribute(`uv`,new Mc(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},wl=class extends wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Tl=class extends wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},El={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},Dl=class{constructor(e,t,n){let r=this,i,a=!1,o=0,s=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){s++,!1===a&&r.onStart!==void 0&&r.onStart(e,o,s),a=!0},this.itemEnd=function(e){o++,r.onProgress!==void 0&&r.onProgress(e,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return i?i(e):e},this.setURLModifier=function(e){return i=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Ol=new Dl,kl=class{constructor(e){this.manager=e===void 0?Ol:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},kl.DEFAULT_MATERIAL_NAME=`__DEFAULT`,Al=class extends kl{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=El.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0),a;let o=An(`img`);function s(){l(),El.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},jl=class extends kl{constructor(e){super(e)}load(e,t,n,r){let i=new Yo,a=new Al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Ml=class extends nl{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nl=class extends ol{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}},Pl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Un(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Un();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:Mi}})),x!==void 0&&(x.__THREE__||=Mi),Fl={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Z={common:{diffuse:{value:new xc(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ro},alphaMap:{value:null},alphaMapTransform:{value:new Ro},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ro}},envmap:{envMap:{value:null},envMapRotation:{value:new Ro},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ro}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ro}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ro},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ro},normalScale:{value:new Lo(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ro},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ro}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ro}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ro}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xc(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xc(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ro},alphaTest:{value:0},uvTransform:{value:new Ro}},sprite:{diffuse:{value:new xc(16777215)},opacity:{value:1},center:{value:new Lo(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ro},alphaMap:{value:null},alphaMapTransform:{value:new Ro},alphaTest:{value:0}}},Il={basic:{uniforms:Vn([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.fog]),vertexShader:Fl.meshbasic_vert,fragmentShader:Fl.meshbasic_frag},lambert:{uniforms:Vn([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new xc(0)}}]),vertexShader:Fl.meshlambert_vert,fragmentShader:Fl.meshlambert_frag},phong:{uniforms:Vn([Z.common,Z.specularmap,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,Z.lights,{emissive:{value:new xc(0)},specular:{value:new xc(1118481)},shininess:{value:30}}]),vertexShader:Fl.meshphong_vert,fragmentShader:Fl.meshphong_frag},standard:{uniforms:Vn([Z.common,Z.envmap,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.roughnessmap,Z.metalnessmap,Z.fog,Z.lights,{emissive:{value:new xc(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fl.meshphysical_vert,fragmentShader:Fl.meshphysical_frag},toon:{uniforms:Vn([Z.common,Z.aomap,Z.lightmap,Z.emissivemap,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.gradientmap,Z.fog,Z.lights,{emissive:{value:new xc(0)}}]),vertexShader:Fl.meshtoon_vert,fragmentShader:Fl.meshtoon_frag},matcap:{uniforms:Vn([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,Z.fog,{matcap:{value:null}}]),vertexShader:Fl.meshmatcap_vert,fragmentShader:Fl.meshmatcap_frag},points:{uniforms:Vn([Z.points,Z.fog]),vertexShader:Fl.points_vert,fragmentShader:Fl.points_frag},dashed:{uniforms:Vn([Z.common,Z.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fl.linedashed_vert,fragmentShader:Fl.linedashed_frag},depth:{uniforms:Vn([Z.common,Z.displacementmap]),vertexShader:Fl.depth_vert,fragmentShader:Fl.depth_frag},normal:{uniforms:Vn([Z.common,Z.bumpmap,Z.normalmap,Z.displacementmap,{opacity:{value:1}}]),vertexShader:Fl.meshnormal_vert,fragmentShader:Fl.meshnormal_frag},sprite:{uniforms:Vn([Z.sprite,Z.fog]),vertexShader:Fl.sprite_vert,fragmentShader:Fl.sprite_frag},background:{uniforms:{uvTransform:{value:new Ro},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fl.background_vert,fragmentShader:Fl.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ro}},vertexShader:Fl.backgroundCube_vert,fragmentShader:Fl.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fl.cube_vert,fragmentShader:Fl.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fl.equirect_vert,fragmentShader:Fl.equirect_frag},distanceRGBA:{uniforms:Vn([Z.common,Z.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fl.distanceRGBA_vert,fragmentShader:Fl.distanceRGBA_frag},shadow:{uniforms:Vn([Z.lights,Z.fog,{color:{value:new xc(0)},opacity:{value:1}}]),vertexShader:Fl.shadow_vert,fragmentShader:Fl.shadow_frag}},Il.physical={uniforms:Vn([Il.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ro},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ro},clearcoatNormalScale:{value:new Lo(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ro},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ro},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ro},sheen:{value:0},sheenColor:{value:new xc(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ro},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ro},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ro},transmissionSamplerSize:{value:new Lo},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ro},attenuationDistance:{value:0},attenuationColor:{value:new xc(0)},specularColor:{value:new xc(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ro},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ro},anisotropyVector:{value:new Lo},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ro}}]),vertexShader:Fl.meshphysical_vert,fragmentShader:Fl.meshphysical_frag},Ll={r:0,b:0,g:0},Rl=new Bs,zl=new As,Bl=[.125,.215,.35,.446,.526,.582],Vl=20,Hl=new Ml,Ul=new xc,Wl=null,Gl=0,Kl=0,ql=!1,Jl=(1+Math.sqrt(5))/2,Yl=1/Jl,Xl=[new X(-Jl,Yl,0),new X(Jl,Yl,0),new X(-Yl,0,Jl),new X(Yl,0,Jl),new X(0,Jl,-Yl),new X(0,Jl,Yl),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)],Zl=new X,Ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Zl}=i;Wl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Gl,Kl),this._renderer.xr.enabled=ql,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Gl=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_a,minFilter:_a,generateMipmaps:!1,type:Da,format:Ma,colorSpace:vo,depthBuffer:!1},r=$n(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$n(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(e){let t=[],n=[],r=[],i=e,a=e-4+1+Bl.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-4?s=Bl[o-e+4-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Bc;h.setAttribute(`position`,new kc(f,3)),h.setAttribute(`uv`,new kc(p,2)),h.setAttribute(`faceIndex`,new kc(m,1)),t.push(h),i>4&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}(r)),this._blurMaterial=function(e,t,n){let r=new Float32Array(Vl),i=new X(0,1,0);return new tl({name:`SphericalGaussianBlur`,defines:{n:Vl,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return r}_compileMaterial(e){let t=new Qc(this._lodPlanes[0],e);this._renderer.compile(t,Hl)}_sceneToCubeUV(e,t,n,r,i){let a=new ol(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ul),c.toneMapping=0,c.autoClear=!1;let d=new Tc({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),f=new Qc(new $c,d),p=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ul),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;er(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ca||e.mapping===la;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=nr()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Qc(this._lodPlanes[0],i);i.uniforms.envMap.value=e;let o=this._cubeSize;er(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Hl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Xl[(r-t-1)%Xl.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial,l=new Qc(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Vl,h=[],g=0;for(let e=0;e<Vl;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];er(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Hl)}},$l=new Yo,eu=new Sl(1,1),tu=new $o,nu=new es,ru=new ll,iu=[],au=[],ou=new Float32Array(16),su=new Float32Array(9),cu=new Float32Array(4),lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return hr;case 35664:return gr;case 35665:return _r;case 35666:return vr;case 35674:return yr;case 35675:return br;case 35676:return xr;case 5124:case 35670:return Sr;case 35667:case 35671:return Cr;case 35668:case 35672:return wr;case 35669:case 35673:return Tr;case 5125:return Er;case 36294:return Dr;case 36295:return Or;case 36296:return kr;case 35678:case 36198:case 36298:case 36306:case 35682:return Ar;case 35679:case 36299:case 36307:return jr;case 35680:case 36300:case 36308:case 36293:return Mr;case 36289:case 36303:case 36311:case 36292:return Nr}}(t.type)}},uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return Pr;case 35664:return Fr;case 35665:return Ir;case 35666:return Lr;case 35674:return Rr;case 35675:return zr;case 35676:return Br;case 5124:case 35670:return Vr;case 35667:case 35671:return Hr;case 35668:case 35672:return Ur;case 35669:case 35673:return Wr;case 5125:return Gr;case 36294:return Kr;case 36295:return qr;case 36296:return Jr;case 35678:case 36198:case 36298:case 36306:case 35682:return Yr;case 35679:case 36299:case 36307:return Xr;case 35680:case 36300:case 36308:case 36293:return Zr;case 36289:case 36303:case 36311:case 36292:return Qr}}(t.type)}},du=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},fu=/(\w+)(\])?(\[|\.)?/g,pu=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ei(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];!1!==o.needsUpdate&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},mu=0,hu=new Ro,gu=new X,_u=/^[ \t]*#include +<([\w\d./]+)>/gm,vu=new Map,yu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,bu=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return!1===a.has(r)&&(a.add(r),r.usedTimes++),!1===a.has(i)&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Su(e),t.set(e,n)),n}},Su=class{constructor(e){this.id=bu++,this.code=e,this.usedTimes=0}},Cu=0,wu={[ea]:1,[na]:6,[ia]:7,[ra]:5,[ta]:0,[oa]:2,[sa]:4,[aa]:3},Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Yo;e.properties.get(r).__webglTexture=t.texture,t.depthNear===n.depthNear&&t.depthFar===n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tl({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Qc(new Cl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eu=class extends No{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=new Tu,h=t.getContextAttributes(),g=null,_=null,v=[],y=[],b=new Lo,x=null,S=new ol;S.viewport=new Xo;let C=new ol;C.viewport=new Xo;let w=[S,C],T=new Nl,E=null,D=null;function O(e){let t=y.indexOf(e.inputSource);if(t===-1)return;let n=v[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function k(){r.removeEventListener(`select`,O),r.removeEventListener(`selectstart`,O),r.removeEventListener(`selectend`,O),r.removeEventListener(`squeeze`,O),r.removeEventListener(`squeezestart`,O),r.removeEventListener(`squeezeend`,O),r.removeEventListener(`end`,k),r.removeEventListener(`inputsourceschange`,A);for(let e=0;e<v.length;e++){let t=y[e];t!==null&&(y[e]=null,v[e].disconnect(t))}E=null,D=null,m.reset(),e.setRenderTarget(g),f=null,d=null,u=null,r=null,_=null,F.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:`sessionend`})}function A(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=y.indexOf(n);r>=0&&(y[r]=null,v[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=y.indexOf(n);if(r===-1){for(let e=0;e<v.length;e++){if(e>=y.length){y.push(n),r=e;break}if(y[e]===null){y[e]=n,r=e;break}}if(r===-1)break}let i=v[r];i&&i.connect(n)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=v[e];return t===void 0&&(t=new pl,v[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=v[e];return t===void 0&&(t=new pl,v[e]=t),t.getGripSpace()},this.getHand=function(e){let t=v[e];return t===void 0&&(t=new pl,v[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting},this.setReferenceSpaceType=function(e){o=e,n.isPresenting},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(g=e.getRenderTarget(),r.addEventListener(`select`,O),r.addEventListener(`selectstart`,O),r.addEventListener(`selectend`,O),r.addEventListener(`squeeze`,O),r.addEventListener(`squeezestart`,O),r.addEventListener(`squeezeend`,O),r.addEventListener(`end`,k),r.addEventListener(`inputsourceschange`,A),!0!==h.xrCompatible&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<`u`&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;h.depth&&(o=h.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=h.stencil?Pa:Na,a=h.stencil?Aa:Ta);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=new XRWebGLBinding(r,t),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Qo(d.textureWidth,d.textureHeight,{format:Ma,type:ba,depthTexture:new Sl(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:!1===d.ignoreDepthValues,resolveStencilBuffer:!1===d.ignoreDepthValues})}else{let n={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Qo(f.framebufferWidth,f.framebufferHeight,{format:Ma,type:ba,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:!1===f.ignoreDepthValues,resolveStencilBuffer:!1===f.ignoreDepthValues})}_.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),F.setContext(r),F.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let j=new X,M=new X;function N(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;m.texture!==null&&(m.depthNear>0&&(t=m.depthNear),m.depthFar>0&&(n=m.depthFar)),T.near=C.near=S.near=t,T.far=C.far=S.far=n,E===T.near&&D===T.far||(r.updateRenderState({depthNear:T.near,depthFar:T.far}),E=T.near,D=T.far),S.layers.mask=2|e.layers.mask,C.layers.mask=4|e.layers.mask,T.layers.mask=S.layers.mask|C.layers.mask;let i=e.parent,a=T.cameras;N(T,i);for(let e=0;e<a.length;e++)N(a[e],i);a.length===2?function(e,t,n){j.setFromMatrixPosition(t.matrixWorld),M.setFromMatrixPosition(n.matrixWorld);let r=j.distanceTo(M),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}(T,S,C):T.projectionMatrix.copy(S.projectionMatrix),function(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=2*Io*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}(e,T,i)},this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(T)};let P=null,F=new Gn;F.setAnimationLoop(function(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let n=!1;t.length!==T.cameras.length&&(T.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(f!==null)a=f.getViewport(i);else{let t=u.getViewSubImage(d,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(_,t.colorTexture,d.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(_))}let o=w[r];o===void 0&&(o=new ol,o.layers.enable(r),o.viewport=new Xo,w[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(T.matrix.copy(o.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),!0===n&&T.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&u){let n=u.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&m.init(e,n,r.renderState)}}for(let e=0;e<v.length;e++){let t=y[e],n=v[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}P&&P(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}),this.setAnimationLoop=function(e){P=e},this.dispose=function(){}}},Du=new Bs,Ou=new As,ku=class{constructor(e={}){let{canvas:t=jn(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,f;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Uint32Array(4),m=new Int32Array(4),h=null,g=null,_=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_o,this.toneMapping=0,this.toneMappingExposure=1;let y=this,b=!1,x=0,S=0,C=null,w=-1,T=null,E=new Xo,D=new Xo,O=null,k=new xc(0),A=0,j=t.width,M=t.height,N=1,P=null,F=null,I=new Xo(0,0,j,M),L=new Xo(0,0,j,M),R=!1,ee=new xl,z=!1,te=!1;this.transmissionResolutionScale=1;let ne=new As,re=new As,ie=new X,B=new Xo,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},oe=!1;function V(){return C===null?N:1}let se,H,U,ce,W,le,G,ue,de,K,fe,pe,me,he,ge,q,_e,ve,ye,be,J,xe,Se,Ce,Y=n;function we(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r${Mi}`),t.addEventListener(`webglcontextlost`,De,!1),t.addEventListener(`webglcontextrestored`,Oe,!1),t.addEventListener(`webglcontextcreationerror`,ke,!1),Y===null){let t=`webgl2`;if(Y=we(t,e),Y===null)throw we(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw e}function Te(){se=new ar(Y),se.init(),xe=new ki(Y,se),H=new Xn(Y,se,e,xe),U=new Di(Y,se),H.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),ce=new cr(Y),W=new gi,le=new Oi(Y,se,U,W,H,xe,ce),G=new Qn(y),ue=new ir(y),de=new Kn(Y),Se=new Jn(Y,de),K=new or(Y,de,ce,Se),fe=new ur(Y,K,de,ce),ye=new lr(Y,H,le),q=new Zn(W),pe=new hi(y,G,ue,se,H,Se,q),me=new Ai(y,W),he=new bi,ge=new Ti(se),ve=new qn(y,G,ue,U,fe,f,s),_e=new Ei(y,fe,H),Ce=new ji(Y,ce,H,U),be=new Yn(Y,se,ce),J=new sr(Y,se,ce),ce.programs=pe.programs,y.capabilities=H,y.extensions=se,y.properties=W,y.renderLists=he,y.shadowMap=_e,y.state=U,y.info=ce}Te();let Ee=new Eu(y,Y);function De(e){e.preventDefault(),b=!0}function Oe(){b=!1;let e=ce.autoReset,t=_e.enabled,n=_e.autoUpdate,r=_e.needsUpdate,i=_e.type;Te(),ce.autoReset=e,_e.enabled=t,_e.autoUpdate=n,_e.needsUpdate=r,_e.type=i}function ke(e){}function Ae(e){let t=e.target;t.removeEventListener(`dispose`,Ae),function(e){(function(e){let t=W.get(e).programs;t!==void 0&&(t.forEach(function(e){pe.releaseProgram(e)}),e.isShaderMaterial&&pe.releaseShaderCache(e))})(e),W.remove(e)}(t)}function je(e,t,n){!0===e.transparent&&e.side===2&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,Ve(e,t,n),e.side=0,e.needsUpdate=!0,Ve(e,t,n),e.side=2):Ve(e,t,n)}this.xr=Ee,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){let e=se.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=se.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(e){e!==void 0&&(N=e,this.setSize(j,M,!1))},this.getSize=function(e){return e.set(j,M)},this.setSize=function(e,n,r=!0){Ee.isPresenting||(j=e,M=n,t.width=Math.floor(e*N),t.height=Math.floor(n*N),!0===r&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(j*N,M*N).floor()},this.setDrawingBufferSize=function(e,n,r){j=e,M=n,N=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(I)},this.setViewport=function(e,t,n,r){e.isVector4?I.set(e.x,e.y,e.z,e.w):I.set(e,t,n,r),U.viewport(E.copy(I).multiplyScalar(N).round())},this.getScissor=function(e){return e.copy(L)},this.setScissor=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),U.scissor(D.copy(L).multiplyScalar(N).round())},this.getScissorTest=function(){return R},this.setScissorTest=function(e){U.setScissorTest(R=e)},this.setOpaqueSort=function(e){P=e},this.setTransparentSort=function(e){F=e},this.getClearColor=function(e){return e.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(C!==null){let t=C.texture.format;e=t===La||t===Ia||t===Fa}if(e){let e=C.texture.type,t=e===ba||e===Ta||e===Ca||e===Aa||e===Oa||e===ka,n=ve.getClearColor(),r=ve.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(p[0]=i,p[1]=a,p[2]=o,p[3]=r,Y.clearBufferuiv(Y.COLOR,0,p)):(m[0]=i,m[1]=a,m[2]=o,m[3]=r,Y.clearBufferiv(Y.COLOR,0,m))}else r|=Y.COLOR_BUFFER_BIT}t&&(r|=Y.DEPTH_BUFFER_BIT),n&&(r|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,De,!1),t.removeEventListener(`webglcontextrestored`,Oe,!1),t.removeEventListener(`webglcontextcreationerror`,ke,!1),ve.dispose(),he.dispose(),ge.dispose(),W.dispose(),G.dispose(),ue.dispose(),fe.dispose(),Se.dispose(),Ce.dispose(),pe.dispose(),Ee.dispose(),Ee.removeEventListener(`sessionstart`,Ne),Ee.removeEventListener(`sessionend`,Pe),Fe.stop()},this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ae);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=function(e,t,n,r,i){!0!==t.isScene&&(t=ae),le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=C===null?y.outputColorSpace:!0===C.isXRRenderTarget?C.texture.colorSpace:vo,c=(r.isMeshStandardMaterial?ue:G).get(r.envMap||o),l=!0===r.vertexColors&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(C!==null&&!0!==C.isXRRenderTarget||(m=y.toneMapping));let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=h===void 0?0:h.length,v=W.get(r),b=g.state.lights;if(!0===z&&(!0===te||e!==T)){let t=e===T&&r.id===w;q.setState(r,e,t)}let x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||v.outputColorSpace!==s||i.isBatchedMesh&&!1===v.batching?x=!0:i.isBatchedMesh||!0!==v.batching?i.isBatchedMesh&&!0===v.batchingColor&&i.colorTexture===null||i.isBatchedMesh&&!1===v.batchingColor&&i.colorTexture!==null||i.isInstancedMesh&&!1===v.instancing?x=!0:i.isInstancedMesh||!0!==v.instancing?i.isSkinnedMesh&&!1===v.skinning?x=!0:i.isSkinnedMesh||!0!==v.skinning?i.isInstancedMesh&&!0===v.instancingColor&&i.instanceColor===null||i.isInstancedMesh&&!1===v.instancingColor&&i.instanceColor!==null||i.isInstancedMesh&&!0===v.instancingMorph&&i.morphTexture===null||i.isInstancedMesh&&!1===v.instancingMorph&&i.morphTexture!==null||v.envMap!==c||!0===r.fog&&v.fog!==a?x=!0:v.numClippingPlanes===void 0||v.numClippingPlanes===q.numPlanes&&v.numIntersection===q.numIntersection?(v.vertexAlphas!==l||v.vertexTangents!==u||v.morphTargets!==d||v.morphNormals!==f||v.morphColors!==p||v.toneMapping!==m||v.morphTargetsCount!==_)&&(x=!0):x=!0:x=!0:x=!0:x=!0:(x=!0,v.__version=r.version);let S=v.currentProgram;!0===x&&(S=Ve(r,t,i));let E=!1,D=!1,O=!1,k=S.getUniforms(),A=v.uniforms;if(U.useProgram(S.program)&&(E=!0,D=!0,O=!0),r.id!==w&&(w=r.id,D=!0),E||T!==e){U.buffers.depth.getReversed()?(ne.copy(e.projectionMatrix),function(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}(ne),function(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=1-t[14])}(ne),k.setValue(Y,`projectionMatrix`,ne)):k.setValue(Y,`projectionMatrix`,e.projectionMatrix),k.setValue(Y,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(Y,ie.setFromMatrixPosition(e.matrixWorld)),H.logarithmicDepthBuffer&&k.setValue(Y,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(Y,`isOrthographic`,!0===e.isOrthographicCamera),T!==e&&(T=e,D=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(Y,i,`bindMatrix`),k.setOptional(Y,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(Y,`boneTexture`,e.boneTexture,le))}i.isBatchedMesh&&(k.setOptional(Y,i,`batchingTexture`),k.setValue(Y,`batchingTexture`,i._matricesTexture,le),k.setOptional(Y,i,`batchingIdTexture`),k.setValue(Y,`batchingIdTexture`,i._indirectTexture,le),k.setOptional(Y,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(Y,`batchingColorTexture`,i._colorsTexture,le));let j=n.morphAttributes;j.position===void 0&&j.normal===void 0&&j.color===void 0||ye.update(i,n,S),(D||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,k.setValue(Y,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&!1===c.isRenderTargetTexture?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),D&&(k.setValue(Y,`toneMappingExposure`,y.toneMappingExposure),v.needsLights&&(F=O,(P=A).ambientLightColor.needsUpdate=F,P.lightProbe.needsUpdate=F,P.directionalLights.needsUpdate=F,P.directionalLightShadows.needsUpdate=F,P.pointLights.needsUpdate=F,P.pointLightShadows.needsUpdate=F,P.spotLights.needsUpdate=F,P.spotLightShadows.needsUpdate=F,P.rectAreaLights.needsUpdate=F,P.hemisphereLights.needsUpdate=F),a&&!0===r.fog&&me.refreshFogUniforms(A,a),me.refreshMaterialUniforms(A,r,N,M,g.state.transmissionRenderTarget[e.id]),pu.upload(Y,He(v),A,le));var P,F;if(r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(pu.upload(Y,He(v),A,le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(Y,`center`,i.center),k.setValue(Y,`modelViewMatrix`,i.modelViewMatrix),k.setValue(Y,`normalMatrix`,i.normalMatrix),k.setValue(Y,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ce.update(n,S),Ce.bind(n,S)}}return S}(e,t,n,r,i);U.setMaterial(r,o);let c=n.index,l=1;if(!0===r.wireframe){if(c=K.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;let h;Se.setup(i,r,s,n,c);let _=be;if(c!==null&&(h=de.get(c),_=J,_.setIndex(h)),i.isMesh)!0===r.wireframe?(U.setLineWidth(r.wireframeLinewidth*V()),_.setMode(Y.LINES)):_.setMode(Y.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),U.setLineWidth(e*V()),i.isLineSegments?_.setMode(Y.LINES):i.isLineLoop?_.setMode(Y.LINE_LOOP):_.setMode(Y.LINE_STRIP)}else i.isPoints?_.setMode(Y.POINTS):i.isSprite&&_.setMode(Y.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)Mn(`THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),_.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(se.get(`WEBGL_multi_draw`))_.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?de.get(c).bytesPerElement:1,o=W.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(Y,`_gl_DrawID`,r),_.render(e[r]/a,t[r])}else if(i.isInstancedMesh)_.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);_.renderInstances(f,m,t)}else _.render(f,m)},this.compile=function(e,t,n=null){n===null&&(n=e),g=ge.get(n),g.init(t),v.push(g),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(g.pushLight(e),e.castShadow&&g.pushShadow(e))}),g.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];je(a,n,e),r.add(a)}else je(t,n,e),r.add(t)}),g=v.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){W.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}se.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Me=null;function Ne(){Fe.stop()}function Pe(){Fe.start()}let Fe=new Gn;function Ie(e,t,n,r){if(!1===e.visible)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)g.pushLight(e),e.castShadow&&g.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ee.intersectsSprite(e)){r&&B.setFromMatrixPosition(e.matrixWorld).applyMatrix4(re);let t=fe.update(e),i=e.material;i.visible&&h.push(e,t,i,n,B.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ee.intersectsObject(e))){let t=fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),B.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),B.copy(e.boundingSphere.center)),B.applyMatrix4(e.matrixWorld).applyMatrix4(re)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&h.push(e,t,s,n,B.z,o)}}else i.visible&&h.push(e,t,i,n,B.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ie(i[e],t,n,r)}function Le(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;g.setupLightsView(n),!0===z&&q.setGlobalState(y.clippingPlanes,n),r&&U.viewport(E.copy(r)),i.length>0&&ze(i,t,n),a.length>0&&ze(a,t,n),o.length>0&&ze(o,t,n),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Re(e,t,n,r){if((!0===n.isScene?n.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[r.id]===void 0&&(g.state.transmissionRenderTarget[r.id]=new Qo(1,1,{generateMipmaps:!0,type:se.has(`EXT_color_buffer_half_float`)||se.has(`EXT_color_buffer_float`)?Da:ba,minFilter:ya,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Uo.workingColorSpace}));let a=g.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z*y.transmissionResolutionScale,o.w*y.transmissionResolutionScale);let s=y.getRenderTarget();y.setRenderTarget(a),y.getClearColor(k),A=y.getClearAlpha(),A<1&&y.setClearColor(16777215,.5),y.clear(),oe&&ve.render(n);let c=y.toneMapping;y.toneMapping=0;let l=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),g.setupLightsView(r),!0===z&&q.setGlobalState(y.clippingPlanes,r),ze(e,n,r),le.updateMultisampleRenderTarget(a),le.updateRenderTargetMipmap(a),!1===se.has(`WEBGL_multisampled_render_to_texture`)){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,Be(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}!0===e&&(le.updateMultisampleRenderTarget(a),le.updateRenderTargetMipmap(a))}y.setRenderTarget(s),y.setClearColor(k,A),l!==void 0&&(r.viewport=l),y.toneMapping=c}function ze(e,t,n){let r=!0===t.isScene?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Be(o,t,n,s,c,l)}}function Be(e,t,n,r,i,a){e.onBeforeRender(y,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(y,t,n,r,e,a),!0===i.transparent&&i.side===2&&!1===i.forceSinglePass?(i.side=1,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,y.renderBufferDirect(n,t,r,i,e,a),i.side=2):y.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(y,t,n,r,i,a)}function Ve(e,t,n){!0!==t.isScene&&(t=ae);let r=W.get(e),i=g.state.lights,a=g.state.shadowsArray,o=i.state.version,s=pe.getParameters(e,i.state,a,t,n),c=pe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ue:G).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ae),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ue(e,s),u}else s.uniforms=pe.getUniforms(e),e.onBeforeCompile(s,y),u=pe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(d.clippingPlanes=q.uniform),Ue(e,s),r.needsLights=function(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function He(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=pu.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ue(e,t){let n=W.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}Fe.setAnimationLoop(function(e){Me&&Me(e)}),typeof self<`u`&&Fe.setContext(self),this.setAnimationLoop=function(e){Me=e,Ee.setAnimationLoop(e),e===null?Fe.stop():Fe.start()},Ee.addEventListener(`sessionstart`,Ne),Ee.addEventListener(`sessionend`,Pe),this.render=function(e,t){if(t!==void 0&&!0!==t.isCamera||!0===b)return;if(!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),t.parent===null&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===Ee.enabled&&!0===Ee.isPresenting&&(!0===Ee.cameraAutoUpdate&&Ee.updateCamera(t),t=Ee.getCamera()),!0===e.isScene&&e.onBeforeRender(y,e,t,C),g=ge.get(e,v.length),g.init(t),v.push(g),re.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ee.setFromProjectionMatrix(re),te=this.localClippingEnabled,z=q.init(this.clippingPlanes,te),h=he.get(e,_.length),h.init(),_.push(h),!0===Ee.enabled&&!0===Ee.isPresenting){let e=y.xr.getDepthSensingMesh();e!==null&&Ie(e,t,-1/0,y.sortObjects)}Ie(e,t,0,y.sortObjects),h.finish(),!0===y.sortObjects&&h.sort(P,F),oe=!1===Ee.enabled||!1===Ee.isPresenting||!1===Ee.hasDepthSensing(),oe&&ve.addToRenderList(h,e),this.info.render.frame++,!0===z&&q.beginShadows();let n=g.state.shadowsArray;_e.render(n,e,t),!0===z&&q.endShadows(),!0===this.info.autoReset&&this.info.reset();let r=h.opaque,i=h.transmissive;if(g.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++)Re(r,i,e,n[t]);oe&&ve.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];Le(h,e,r,r.viewport)}}else i.length>0&&Re(r,i,e,t),oe&&ve.render(e),Le(h,e,t);C!==null&&S===0&&(le.updateMultisampleRenderTarget(C),le.updateRenderTargetMipmap(C)),!0===e.isScene&&e.onAfterRender(y,e,t),Se.resetDefaultState(),w=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],!0===z&&q.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),h=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(e,t,n){W.get(e.texture).__webglTexture=t,W.get(e.depthTexture).__webglTexture=n;let r=W.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||!0===se.has(`WEBGL_multisampled_render_to_texture`)&&(r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=W.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let We=Y.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){C=e,x=t,S=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=W.get(e);if(s.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(Y.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)le.setupRenderTarget(e);else if(s.__hasExternalTextures)le.rebindTextures(e,W.get(e.texture).__webglTexture,W.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&W.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);le.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=W.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&!1===le.useMultisampledRTT(e)?W.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),D.copy(e.scissor),O=e.scissorTest}else E.copy(I).multiplyScalar(N).floor(),D.copy(L).multiplyScalar(N).floor(),O=R;if(n!==0&&(i=We),U.bindFramebuffer(Y.FRAMEBUFFER,i)&&r&&U.drawBuffers(e,i),U.viewport(E),U.scissor(D),U.setScissorTest(O),a){let r=W.get(e.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=W.get(e.texture),i=t;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,r.__webglTexture,n,i)}else if(e!==null&&n!==0){let t=W.get(e.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,t.__webglTexture,n)}w=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!e||!e.isWebGLRenderTarget)return;let s=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){U.bindFramebuffer(Y.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!H.textureFormatReadable(s)||!H.textureTypeReadable(c))return;t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&Y.readPixels(t,n,r,i,xe.convert(s),xe.convert(c),a)}finally{let e=C===null?null:W.get(C).__webglFramebuffer;U.bindFramebuffer(Y.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!e||!e.isWebGLRenderTarget)throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=W.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!H.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!H.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){U.bindFramebuffer(Y.FRAMEBUFFER,s);let e=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,e),Y.bufferData(Y.PIXEL_PACK_BUFFER,a.byteLength,Y.STREAM_READ),Y.readPixels(t,n,r,i,xe.convert(c),xe.convert(l),0);let o=C===null?null:W.get(C).__webglFramebuffer;U.bindFramebuffer(Y.FRAMEBUFFER,o);let u=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await function(e,t,n){return new Promise(function(r,i){setTimeout(function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}},n)})}(Y,u,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,e),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,a),Y.deleteBuffer(e),Y.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){!0!==e.isTexture&&(Mn(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;le.setTexture2D(e,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,n,0,0,o,s,i,a),U.unbindTexture()};let Ge=Y.createFramebuffer(),Ke=Y.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){let o,s,c,l,u,d,f,p,m;!0!==e.isTexture&&(Mn(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],a=arguments[3]||0,n=null),a===null&&(i===0?a=0:(Mn(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=xe.convert(t.format),_=xe.convert(t.type),v;t.isData3DTexture?(le.setTexture3D(t,0),v=Y.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(le.setTexture2DArray(t,0),v=Y.TEXTURE_2D_ARRAY):(le.setTexture2D(t,0),v=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,t.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,t.unpackAlignment);let y=Y.getParameter(Y.UNPACK_ROW_LENGTH),b=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),x=Y.getParameter(Y.UNPACK_SKIP_PIXELS),S=Y.getParameter(Y.UNPACK_SKIP_ROWS),C=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,h.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,h.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,l),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,u),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=W.get(e),r=W.get(t),h=W.get(n.__renderTarget),g=W.get(r.__renderTarget);U.bindFramebuffer(Y.READ_FRAMEBUFFER,h.__webglFramebuffer),U.bindFramebuffer(Y.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,W.get(e).__webglTexture,i,d+n),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,W.get(t).__webglTexture,a,m+n)),Y.blitFramebuffer(l,u,o,s,f,p,o,s,Y.DEPTH_BUFFER_BIT,Y.NEAREST);U.bindFramebuffer(Y.READ_FRAMEBUFFER,null),U.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||W.has(e)){let n=W.get(e),r=W.get(t);U.bindFramebuffer(Y.READ_FRAMEBUFFER,Ge),U.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Ke);for(let e=0;e<c;e++)w?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,n.__webglTexture,i),T?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,r.__webglTexture,a),i===0?T?Y.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):Y.copyTexSubImage2D(v,a,f,p,l,u,o,s):Y.blitFramebuffer(l,u,o,s,f,p,o,s,Y.COLOR_BUFFER_BIT,Y.NEAREST);U.bindFramebuffer(Y.READ_FRAMEBUFFER,null),U.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?Y.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?Y.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):Y.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):Y.texSubImage2D(Y.TEXTURE_2D,a,f,p,o,s,g,_,h);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,y),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,b),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,S),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&Y.generateMipmap(v),U.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return!0!==e.isTexture&&(Mn(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),Mn(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){W.get(e).__webglFramebuffer===void 0&&le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?le.setTextureCube(e,0):e.isData3DTexture?le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?le.setTexture2DArray(e,0):le.setTexture2D(e,0),U.unbindTexture()},this.resetState=function(){x=0,S=0,C=null,U.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return jo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Uo._getDrawingBufferColorSpace(e),t.unpackColorSpace=Uo._getUnpackColorSpace()}}}));
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ju(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dd[e&255]+dd[e>>8&255]+dd[e>>16&255]+dd[e>>24&255]+`-`+dd[t&255]+dd[t>>8&255]+`-`+dd[t>>16&15|64]+dd[t>>24&255]+`-`+dd[n&63|128]+dd[n>>8&255]+`-`+dd[n>>16&255]+dd[n>>24&255]+dd[r&255]+dd[r>>8&255]+dd[r>>16&255]+dd[r>>24&255]).toLowerCase()}function Mu(e,t,n){return Math.max(t,Math.min(n,e))}function Nu(e,t){return(e%t+t)%t}function Pu(e,t,n){return(1-n)*e+n*t}function Fu(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Iu(){let e={enabled:!0,workingColorSpace:od,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Lu(e.r),e.g=Lu(e.g),e.b=Lu(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ru(e.r),e.g=Ru(e.g),e.b=Ru(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?sd:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[od]:{primaries:t,whitePoint:r,transfer:sd,toXYZ:hd,fromXYZ:gd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ad},outputColorSpaceConfig:{drawingBufferColorSpace:ad}},[ad]:{primaries:t,whitePoint:r,transfer:cd,toXYZ:hd,fromXYZ:gd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ad}}}),e}function Lu(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ru(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}function zu(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?yd.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}function Bu(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}function Vu(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Hu(e){let t={};for(let n=0;n<e.length;n++){let r=Vu(e[n]);for(let e in r)t[e]=r[e]}return t}function Uu(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Wu(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf=e((()=>{i(),Gu=1e3,Ku=1001,qu=1002,Ju=1006,Yu=1008,Xu=1009,Zu=1016,Qu=1023,$u=2300,ed=2301,td=2302,nd=2400,rd=2401,id=2402,ad=`srgb`,od=`srgb-linear`,sd=`linear`,cd=`srgb`,ld=2e3,ud=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},dd=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Math.PI/180,180/Math.PI,fd=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mu(this.x,e.x,t.x),this.y=Mu(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mu(this.x,e,t),this.y=Mu(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mu(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},pd=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(md.makeScale(e,t)),this}rotate(e){return this.premultiply(md.makeRotation(-e)),this}translate(e,t){return this.premultiply(md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},md=new pd,hd=new pd().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new pd().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),_d=Iu(),yd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vd===void 0&&(vd=Fu(`canvas`)),vd.width=e.width,vd.height=e.height;let n=vd.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vd}return t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Fu(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Lu(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Lu(t[e]/255)*255):t[e]=Lu(t[e]);return{data:t,width:e.width,height:e.height}}else return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},bd=0,xd=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=ju(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(zu(r[t].image)):e.push(zu(r[t]))}else e=zu(r);n.url=e}return t||(e.images[this.uuid]=n),n}},Sd=0,Cd=class e extends ud{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ku,i=Ku,a=Ju,o=Yu,s=Qu,c=Xu,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=ju(),this.name=``,this.source=new xd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new fd(0,0),this.repeat=new fd(1,1),this.center=new fd(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pd,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gu:e.x-=Math.floor(e.x);break;case Ku:e.x=e.x<0?0:1;break;case qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gu:e.y-=Math.floor(e.y);break;case Ku:e.y=e.y<0?0:1;break;case qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}},Cd.DEFAULT_IMAGE=null,Cd.DEFAULT_MAPPING=300,Cd.DEFAULT_ANISOTROPY=1,wd=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mu(this.x,e.x,t.x),this.y=Mu(this.y,e.y,t.y),this.z=Mu(this.z,e.z,t.z),this.w=Mu(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mu(this.x,e,t),this.y=Mu(this.y,e,t),this.z=Mu(this.z,e,t),this.w=Mu(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Td=class extends ud{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wd(0,0,e,t),this.scissorTest=!1,this.viewport=new wd(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ju,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Cd(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new xd(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ed=class extends Td{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dd=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mu(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Od=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ad.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mu(this.x,e.x,t.x),this.y=Mu(this.y,e.y,t.y),this.z=Mu(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mu(this.x,e,t),this.y=Mu(this.y,e,t),this.z=Mu(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Mu(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mu(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kd=new Od,Ad=new Dd,jd=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Md.setFromMatrixColumn(e,0).length(),i=1/Md.setFromMatrixColumn(e,1).length(),a=1/Md.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pd,e,Fd)}lookAt(e,t,n){let r=this.elements;return Rd.subVectors(e,t),Rd.lengthSq()===0&&(Rd.z=1),Rd.normalize(),Id.crossVectors(n,Rd),Id.lengthSq()===0&&(Math.abs(n.z)===1?Rd.x+=1e-4:Rd.z+=1e-4,Rd.normalize(),Id.crossVectors(n,Rd)),Id.normalize(),Ld.crossVectors(Rd,Id),r[0]=Id.x,r[4]=Ld.x,r[8]=Rd.x,r[1]=Id.y,r[5]=Ld.y,r[9]=Rd.y,r[2]=Id.z,r[6]=Ld.z,r[10]=Rd.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=Md.set(r[0],r[1],r[2]).length(),a=Md.set(r[4],r[5],r[6]).length(),o=Md.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],Nd.copy(this);let s=1/i,c=1/a,l=1/o;return Nd.elements[0]*=s,Nd.elements[1]*=s,Nd.elements[2]*=s,Nd.elements[4]*=c,Nd.elements[5]*=c,Nd.elements[6]*=c,Nd.elements[8]*=l,Nd.elements[9]*=l,Nd.elements[10]*=l,t.setFromRotationMatrix(Nd),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=ld){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ld){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Md=new Od,Nd=new jd,Pd=new Od(0,0,0),Fd=new Od(1,1,1),Id=new Od,Ld=new Od,Rd=new Od,zd=new jd,Bd=new Dd,Vd=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Mu(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Mu(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Mu(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Mu(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Mu(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Mu(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},Vd.DEFAULT_ORDER=`XYZ`,Hd=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Ud=0,Wd=new Od,Gd=new Dd,Kd=new jd,qd=new Od,Jd=new Od,Yd=new Od,Xd=new Dd,Zd=new Od(1,0,0),Qd=new Od(0,1,0),$d=new Od(0,0,1),ef={type:`added`},tf={type:`removed`},nf={type:`childadded`,child:null},rf={type:`childremoved`,child:null},af=class e extends ud{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ju(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Od,n=new Vd,r=new Dd,i=new Od(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jd},normalMatrix:{value:new pd}}),this.matrix=new jd,this.matrixWorld=new jd,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gd.setFromAxisAngle(e,t),this.quaternion.multiply(Gd),this}rotateOnWorldAxis(e,t){return Gd.setFromAxisAngle(e,t),this.quaternion.premultiply(Gd),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis($d,e)}translateOnAxis(e,t){return Wd.copy(e).applyQuaternion(this.quaternion),this.position.add(Wd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis($d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kd.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qd.copy(e):qd.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Jd.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kd.lookAt(Jd,qd,this.up):Kd.lookAt(qd,Jd,this.up),this.quaternion.setFromRotationMatrix(Kd),r&&(Kd.extractRotation(r.matrixWorld),Gd.setFromRotationMatrix(Kd),this.quaternion.premultiply(Gd.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),nf.child=e,this.dispatchEvent(nf),nf.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),rf.child=e,this.dispatchEvent(rf),rf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kd.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kd.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kd),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),nf.child=e,this.dispatchEvent(nf),nf.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jd,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jd,Xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},af.DEFAULT_UP=new Od(0,1,0),af.DEFAULT_MATRIX_AUTO_UPDATE=!0,af.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sf={h:0,s:0,l:0},cf={h:0,s:0,l:0},lf=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ad){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_d.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=_d.workingColorSpace){return this.r=e,this.g=t,this.b=n,_d.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=_d.workingColorSpace){if(e=Nu(e,1),t=Mu(t,0,1),n=Mu(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Bu(i,r,e+1/3),this.g=Bu(i,r,e),this.b=Bu(i,r,e-1/3)}return _d.toWorkingColorSpace(this,r),this}setStyle(e,t=ad){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ad){let n=of[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lu(e.r),this.g=Lu(e.g),this.b=Lu(e.b),this}copyLinearToSRGB(e){return this.r=Ru(e.r),this.g=Ru(e.g),this.b=Ru(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ad){return _d.fromWorkingColorSpace(uf.copy(this),e),Math.round(Mu(uf.r*255,0,255))*65536+Math.round(Mu(uf.g*255,0,255))*256+Math.round(Mu(uf.b*255,0,255))}getHexString(e=ad){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_d.workingColorSpace){_d.fromWorkingColorSpace(uf.copy(this),t);let n=uf.r,r=uf.g,i=uf.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_d.workingColorSpace){return _d.fromWorkingColorSpace(uf.copy(this),t),e.r=uf.r,e.g=uf.g,e.b=uf.b,e}getStyle(e=ad){_d.fromWorkingColorSpace(uf.copy(this),e);let t=uf.r,n=uf.g,r=uf.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(sf),this.setHSL(sf.h+e,sf.s+t,sf.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sf),e.getHSL(cf);let n=Pu(sf.h,cf.h,t),r=Pu(sf.s,cf.s,t),i=Pu(sf.l,cf.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},uf=new lf,lf.NAMES=of,df=class extends af{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new jd,this.projectionMatrix=new jd,this.projectionMatrixInverse=new jd,this.coordinateSystem=ld}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ff=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},pf=class extends ff{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nd,endingEnd:nd}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case rd:i=e,o=2*t-n;break;case id:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case rd:a=e,s=2*n-t;break;case id:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},mf=class extends ff{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},hf=class extends ff{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},gf=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Uu(t,this.TimeBufferType),this.values=Uu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Uu(e.times,Array),values:Uu(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new hf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $u:t=this.InterpolantFactoryMethodDiscrete;break;case ed:t=this.InterpolantFactoryMethodLinear;break;case td:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $u;case this.InterpolantFactoryMethodLinear:return ed;case this.InterpolantFactoryMethodSmooth:return td}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Wu(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===td,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},gf.prototype.TimeBufferType=Float32Array,gf.prototype.ValueBufferType=Float32Array,gf.prototype.DefaultInterpolation=ed,_f=class extends gf{constructor(e,t,n){super(e,t,n)}},_f.prototype.ValueTypeName=`bool`,_f.prototype.ValueBufferType=Array,_f.prototype.DefaultInterpolation=$u,_f.prototype.InterpolantFactoryMethodLinear=void 0,_f.prototype.InterpolantFactoryMethodSmooth=void 0,vf=class extends gf{},vf.prototype.ValueTypeName=`color`,yf=class extends gf{},yf.prototype.ValueTypeName=`number`,bf=class extends ff{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Dd.slerpFlat(i,0,a,c-o,a,c,s);return i}},xf=class extends gf{InterpolantFactoryMethodLinear(e){return new bf(this.times,this.values,this.getValueSize(),e)}},xf.prototype.ValueTypeName=`quaternion`,xf.prototype.InterpolantFactoryMethodSmooth=void 0,Sf=class extends gf{constructor(e,t,n){super(e,t,n)}},Sf.prototype.ValueTypeName=`string`,Sf.prototype.ValueBufferType=Array,Sf.prototype.DefaultInterpolation=$u,Sf.prototype.InterpolantFactoryMethodLinear=void 0,Sf.prototype.InterpolantFactoryMethodSmooth=void 0,Cf=class extends gf{},Cf.prototype.ValueTypeName=`vector`,wf=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},Tf=new wf,Ef=class{constructor(e){this.manager=e===void 0?Tf:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},Ef.DEFAULT_MATERIAL_NAME=`__DEFAULT`,Df=class extends df{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Of=`\\[\\]\\.:\\/`,kf=RegExp(`[\\[\\]\\.:\\/]`,`g`),Af=`[^\\[\\]\\.:\\/]`,jf=`[^`+Of.replace(`\\.`,``)+`]`,Mf=`((?:WC+[\\/:])*)`.replace(`WC`,Af),Nf=`(WCOD+)?`.replace(`WCOD`,jf),Pf=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Af),Ff=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Af),If=RegExp(`^`+Mf+Nf+Pf+Ff+`$`),Lf=[`material`,`materials`,`bones`,`map`],Rf=class{constructor(e,t,n){let r=n||zf.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zf=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(kf,``)}static parseTrackName(e){let t=If.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Lf.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},zf.Composite=Rf,zf.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},zf.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},zf.prototype.GetterByBindingType=[zf.prototype._getValue_direct,zf.prototype._getValue_array,zf.prototype._getValue_arrayElement,zf.prototype._getValue_toArray],zf.prototype.SetterByBindingTypeAndVersioning=[[zf.prototype._setValue_direct,zf.prototype._setValue_direct_setNeedsUpdate,zf.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zf.prototype._setValue_array,zf.prototype._setValue_array_setNeedsUpdate,zf.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zf.prototype._setValue_arrayElement,zf.prototype._setValue_arrayElement_setNeedsUpdate,zf.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zf.prototype._setValue_fromArray,zf.prototype._setValue_fromArray_setNeedsUpdate,zf.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`174`}})),x!==void 0&&(x.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):x.__THREE__=`174`)})),Vf,Q,Hf,Uf,Wf,Gf=e((()=>{
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
i(),Bf(),Vf={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new lf(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pd},alphaMap:{value:null},alphaMapTransform:{value:new pd},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pd}},envmap:{envMap:{value:null},envMapRotation:{value:new pd},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pd}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pd}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pd},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pd},normalScale:{value:new fd(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pd},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pd}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pd}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pd}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lf(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lf(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pd},alphaTest:{value:0},uvTransform:{value:new pd}},sprite:{diffuse:{value:new lf(16777215)},opacity:{value:1},center:{value:new fd(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pd},alphaMap:{value:null},alphaMapTransform:{value:new pd},alphaTest:{value:0}}},Hf={basic:{uniforms:Hu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Vf.meshbasic_vert,fragmentShader:Vf.meshbasic_frag},lambert:{uniforms:Hu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new lf(0)}}]),vertexShader:Vf.meshlambert_vert,fragmentShader:Vf.meshlambert_frag},phong:{uniforms:Hu([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new lf(0)},specular:{value:new lf(1118481)},shininess:{value:30}}]),vertexShader:Vf.meshphong_vert,fragmentShader:Vf.meshphong_frag},standard:{uniforms:Hu([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new lf(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vf.meshphysical_vert,fragmentShader:Vf.meshphysical_frag},toon:{uniforms:Hu([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new lf(0)}}]),vertexShader:Vf.meshtoon_vert,fragmentShader:Vf.meshtoon_frag},matcap:{uniforms:Hu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Vf.meshmatcap_vert,fragmentShader:Vf.meshmatcap_frag},points:{uniforms:Hu([Q.points,Q.fog]),vertexShader:Vf.points_vert,fragmentShader:Vf.points_frag},dashed:{uniforms:Hu([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vf.linedashed_vert,fragmentShader:Vf.linedashed_frag},depth:{uniforms:Hu([Q.common,Q.displacementmap]),vertexShader:Vf.depth_vert,fragmentShader:Vf.depth_frag},normal:{uniforms:Hu([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Vf.meshnormal_vert,fragmentShader:Vf.meshnormal_frag},sprite:{uniforms:Hu([Q.sprite,Q.fog]),vertexShader:Vf.sprite_vert,fragmentShader:Vf.sprite_frag},background:{uniforms:{uvTransform:{value:new pd},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vf.background_vert,fragmentShader:Vf.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pd}},vertexShader:Vf.backgroundCube_vert,fragmentShader:Vf.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vf.cube_vert,fragmentShader:Vf.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vf.equirect_vert,fragmentShader:Vf.equirect_frag},distanceRGBA:{uniforms:Hu([Q.common,Q.displacementmap,{referencePosition:{value:new Od},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vf.distanceRGBA_vert,fragmentShader:Vf.distanceRGBA_frag},shadow:{uniforms:Hu([Q.lights,Q.fog,{color:{value:new lf(0)},opacity:{value:1}}]),vertexShader:Vf.shadow_vert,fragmentShader:Vf.shadow_frag}},Hf.physical={uniforms:Hu([Hf.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pd},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pd},clearcoatNormalScale:{value:new fd(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pd},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pd},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pd},sheen:{value:0},sheenColor:{value:new lf(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pd},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pd},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pd},transmissionSamplerSize:{value:new fd},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pd},attenuationDistance:{value:0},attenuationColor:{value:new lf(0)},specularColor:{value:new lf(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pd},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pd},anisotropyVector:{value:new fd},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pd}}]),vertexShader:Vf.meshphysical_vert,fragmentShader:Vf.meshphysical_frag},Uf=(1+Math.sqrt(5))/2,Wf=1/Uf,-Uf,-Wf,-Wf}));function Kf(e){let{imageBase:t,imageHover:n,borderRadius:i=0,radius:c=100,blur:l=.5,circleBoost:u=.6,texture:d=.7,timeSpeed:f=5,splatRadius:m=.08,velocityDissipation:h=.99,shrinkTimeSeconds:g=2.4,curl:v=30,pressureIterations:y=25,parallax:b=!0,parallaxAmount:S=100,parallaxSmoothing:C=0,preview:w=!0}=e;if(!(t&&t.src))return p(`div`,{style:{height:`100%`,width:`100%`,position:`relative`,borderRadius:i},children:p(`div`,{style:{height:`100%`,width:`100%`,position:`relative`,display:`flex`,justifyContent:`center`,alignItems:`center`},children:p(Et,{style:{position:`relative`,width:`100%`,height:`100%`,minWidth:0,minHeight:0},title:`Liquid Mask Effect`,description:`Add a base image to create stunning liquid mask effects with gooey animations`})})});let T=s(null),E=s(null),D=s(null),O=s(null),k=s(null),A=s({width:0,height:0,zoom:0}),M=s(!1),[N,P]=r(0),[F,I]=r(!1);o(()=>{let e=()=>{let e=x!==void 0&&x.matchMedia?x.matchMedia(`(pointer: coarse)`).matches:!1,t=x!==void 0&&x.matchMedia?x.matchMedia(`(max-width: 768px)`).matches:!1;I(e||t)};return e(),x.addEventListener(`resize`,e),()=>x.removeEventListener(`resize`,e)},[]);let[L,R]=r({radius:c,blur:l,circleBoost:u,texture:d,timeSpeed:f,splatRadius:m,velocityDissipation:h,shrinkTimeSeconds:g,curl:v,pressureIterations:y,preview:w,parallax:b,parallaxAmount:S,parallaxSmoothing:C});o(()=>{let e=setTimeout(()=>{R({radius:c,blur:l,circleBoost:u,texture:d,timeSpeed:f,splatRadius:m,velocityDissipation:h,shrinkTimeSeconds:g,curl:v,pressureIterations:y,preview:w,parallax:b,parallaxAmount:S,parallaxSmoothing:C})},100);return()=>clearTimeout(e)},[c,l,u,d,f,m,h,g,v,y,w,b,S,C]);let ee=a(e=>10+(e-10)*(190/990),[]),z=a(e=>.2+e*2.8,[]),te=a(e=>.5+e*3.5,[]),ne=a(e=>e*.1,[]),re=a(e=>({freq:2+e*12,strength:e*3,size:1-e*.7}),[]);return o(()=>{if(F)return;let e=T.current,r=E.current,i=D.current;if(!e||!r||!i)return;j.current()===j.canvas&&(M.current=!1);let a=!1,o=new ml,s=new ku({canvas:e,alpha:!0,antialias:!0});s.setPixelRatio(Math.min(x.devicePixelRatio,2)),s.setClearColor(0,0);let c=Math.max(i.clientWidth,300),l=Math.max(i.clientHeight,200);s.setSize(c,l);let u=new ol(180*(2*Math.atan(i.clientHeight/2/800))/Math.PI,c/l,1,5e3);u.position.set(0,0,800);let d=new jl,f=n?.src||t?.src||`/random-assets/blue-profile-image.png`,p=d.load(f,()=>{if(p.image){let e=p.image.width/p.image.height;H.u_frontImageAspect.value=e,a&&s.render(o,u)}});p.minFilter=_a;let m=re(L.texture),h=.5,g=Math.max(1,Math.floor(c*h)),_=Math.max(1,Math.floor(l*h)),v={type:Zu,minFilter:_a,magFilter:_a,format:Qu,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1},y=(e,t)=>new Ed(e,t,v),b=y(g,_),S=y(g,_),C=y(g,_),w=y(g,_),N=y(g,_),I=y(g,_),R=y(g,_),ie=()=>{b.dispose(),S.dispose(),C.dispose(),w.dispose(),N.dispose(),I.dispose(),R.dispose()},B=(e,t)=>{let n=Math.max(1,Math.floor(e*h)),r=Math.max(1,Math.floor(t*h));n===g&&r===_||(g=n,_=r,ie(),b=y(g,_),S=y(g,_),C=y(g,_),w=y(g,_),N=y(g,_),I=y(g,_),R=y(g,_))},ae=new Df(-1,1,1,-1,0,1),oe=new Cl(2,2,1,1),V={x:.5,y:.5},se={x:0,y:0},H={u_time:{value:0},u_mouse:{value:new Lo(.5,.5)},u_progress:{value:0},u_planeRes:{value:new Lo(1,1)},u_radius:{value:ee(L.radius)},u_blur:{value:z(L.blur)},u_circleBoost:{value:te(L.circleBoost)},u_noiseFreq:{value:m.freq},u_noiseStrength:{value:m.strength},u_noiseSize:{value:m.size},u_timeSpeed:{value:ne(L.timeSpeed)},u_frontImage:{value:p},u_frontImageAspect:{value:1},u_containerAspect:{value:1},u_parallaxOffset:{value:new Lo(0,0)},u_parallaxMax:{value:L.parallax?Math.max(0,Math.min(200,L.parallaxAmount??0)):0},u_windowSize:{value:new Lo(x.innerWidth,x.innerHeight)},u_containerOffset:{value:new Lo(0,0)},u_simResolution:{value:new Lo(g,_)},u_densityTex:{value:I.texture}};O.current=H;let U=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,ce=`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D u_velocity;
      uniform sampler2D u_source;
      uniform vec2 u_texelSize;
      uniform float u_dt;
      uniform float u_dissipationMultiply;
      void main() {
        vec2 vel = texture2D(u_velocity, vUv).xy;
        vec2 pos = vUv - vel * u_texelSize * u_dt;
        gl_FragColor = texture2D(u_source, pos) * u_dissipationMultiply;
      }
    `,W=new Cl(1,1,1,1),le=new tl({uniforms:H,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_progress;
      uniform vec2 u_planeRes;
      uniform float u_radius;
      uniform float u_blur;
      uniform float u_circleBoost;
      uniform float u_noiseFreq;
      uniform float u_noiseStrength;
      uniform float u_noiseSize;
      uniform float u_timeSpeed;
      uniform sampler2D u_frontImage;
      uniform float u_frontImageAspect;
      uniform float u_containerAspect;
      uniform vec2 u_windowSize;
      uniform vec2 u_containerOffset;
      uniform vec2 u_parallaxOffset;
      uniform float u_parallaxMax;

              // Simplex noise 3D from https://github.com/ashima/webgl-noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
      vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
      float snoise(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
        // First corner
        vec3 i  = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        // Other corners
        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        vec3 x1 = x0 - i1 + C.xxx;
        vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
        vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5 = -D.y

        // Permutations
        i = mod289(i);
        vec4 p = permute( permute( permute(
                   i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                 + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                 + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        // Gradients: 7x7 points over a square, mapped onto an octahedron.
        float n_ = 0.142857142857; // 1.0/7.0
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  // mod(p,7*7)

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        // Normalise gradients
        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        // Mix final noise value
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                      dot(p2,x2), dot(p3,x3) ) );
      }

      uniform sampler2D u_densityTex;

      void main() {
        vec2 uv = vUv;

        // Sample density directly - blob circularity is achieved via elliptical splats
        float density = texture2D(u_densityTex, uv).r * u_circleBoost * u_progress;

        // Noise for liquid texture edges
        float offx = uv.x + (u_time * u_timeSpeed * 0.1) + sin(uv.y + u_time * u_timeSpeed * 0.1);
        float offy = uv.y - cos(u_time * u_timeSpeed * 0.001) * 0.01;
        float effectiveNoiseFreq = u_noiseFreq / u_noiseSize;
        float n1 = snoise(vec3(offx * effectiveNoiseFreq, offy * effectiveNoiseFreq, u_time * u_timeSpeed)) - 1.0;
        float n2 = snoise(vec3(offx * effectiveNoiseFreq * 0.5, offy * effectiveNoiseFreq * 0.5, u_time * u_timeSpeed * 0.7)) - 1.0;
        float n = (n1 + n2 * 0.5) * 0.7;

        float finalMask = smoothstep(0.35, 0.55, (n * u_noiseStrength) + pow(density, 1.5));

        // Responsive UV mapping for front image (maintains aspect ratio like object-fit: cover)
        // For "cover": scale up so the image fills the container, cropping excess
        vec2 responsiveUV = uv;
        
        if (u_frontImageAspect > 0.0 && u_containerAspect > 0.0) {
            if (u_frontImageAspect > u_containerAspect) {
              // Image is wider than container - fit height, crop width
              float scale = u_frontImageAspect / u_containerAspect;
              responsiveUV.x = (uv.x - 0.5) / scale + 0.5;
            } else {
              // Image is taller than container - fit width, crop height
              float scale = u_containerAspect / u_frontImageAspect;
              responsiveUV.y = (uv.y - 0.5) / scale + 0.5;
            }
        }

        // Parallax the REVEALED (front) image: move opposite to cursor (add offset so image shifts away from cursor)
        vec2 inset = u_parallaxMax / u_planeRes;
        vec2 baseUV = inset + responsiveUV * (1.0 - 2.0 * inset);
        vec2 parallaxUV = u_parallaxOffset / u_planeRes;
        vec2 sampleUV = baseUV + parallaxUV;

        // Sample the front image with parallax and apply the mask
        vec4 frontColor = texture2D(u_frontImage, sampleUV);
        float outAlpha = frontColor.a * finalMask;
        // Hard cutoff: fully transparent where mask is negligible
        if (outAlpha < 0.01) outAlpha = 0.0;

        // Output straight alpha - THREE's default blend (SRC_ALPHA, ONE_MINUS_SRC_ALPHA) 
        // produces correct premultiplied result for canvas compositing
        gl_FragColor = vec4(frontColor.rgb, outAlpha);
      }
    `,transparent:!0}),G=new Qc(W,le);o.add(G);let ue=new ml,de=new Lo(1/g,1/_),K=new tl({vertexShader:U,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform vec2 u_point;
      uniform vec2 u_splatColor;
      uniform float u_radius;
      uniform float u_aspectRatio;
      uniform sampler2D u_target;
      void main() {
        vec2 p = vUv - u_point;
        // Correct for aspect ratio so blob appears circular in pixel space
        // aspectRatio = width/height
        // Wide (aspect > 1): UV-X maps to more pixels, so compress X to compensate
        // Tall (aspect < 1): UV-Y maps to more pixels, so compress Y to compensate  
        p.x *= max(u_aspectRatio, 1.0);
        p.y *= max(1.0 / u_aspectRatio, 1.0);
        float splat = exp(-dot(p, p) / (u_radius * u_radius));
        vec4 base = texture2D(u_target, vUv);
        base.xy += splat * u_splatColor;
        gl_FragColor = base;
      }
    `,uniforms:{u_point:{value:new Lo(.5,.5)},u_splatColor:{value:new Lo(0,0)},u_radius:{value:.02},u_aspectRatio:{value:1},u_target:{value:b.texture}},depthWrite:!1}),fe=new Qc(oe,K);ue.add(fe);let pe=new tl({vertexShader:U,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform vec2 u_point;
      uniform float u_radius;
      uniform float u_aspectRatio;
      uniform float u_densityAmount;
      uniform sampler2D u_target;
      void main() {
        vec2 p = vUv - u_point;
        // Correct for aspect ratio so blob appears circular in pixel space
        p.x *= max(u_aspectRatio, 1.0);
        p.y *= max(1.0 / u_aspectRatio, 1.0);
        float splat = exp(-dot(p, p) / (u_radius * u_radius));
        float base = texture2D(u_target, vUv).r;
        gl_FragColor = vec4(base + splat * u_densityAmount, 0.0, 0.0, 1.0);
      }
    `,uniforms:{u_point:{value:new Lo(.5,.5)},u_radius:{value:.02},u_aspectRatio:{value:1},u_densityAmount:{value:1},u_target:{value:I.texture}},depthWrite:!1}),me=new tl({vertexShader:U,fragmentShader:ce,uniforms:{u_velocity:{value:b.texture},u_source:{value:b.texture},u_texelSize:{value:de.clone()},u_dt:{value:1},u_dissipationMultiply:{value:.99}},depthWrite:!1}),he=new tl({vertexShader:U,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D u_velocity;
      uniform vec2 u_texelSize;
      void main() {
        float L = texture2D(u_velocity, vUv - vec2(u_texelSize.x, 0.0)).x;
        float R = texture2D(u_velocity, vUv + vec2(u_texelSize.x, 0.0)).x;
        float T = texture2D(u_velocity, vUv + vec2(0.0, u_texelSize.y)).y;
        float B = texture2D(u_velocity, vUv - vec2(0.0, u_texelSize.y)).y;
        float div = 0.5 * ((R - L) + (T - B));
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `,uniforms:{u_velocity:{value:b.texture},u_texelSize:{value:de.clone()}},depthWrite:!1}),ge=new tl({vertexShader:U,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D u_pressure;
      uniform sampler2D u_divergence;
      uniform vec2 u_texelSize;
      void main() {
        float L = texture2D(u_pressure, vUv - vec2(u_texelSize.x, 0.0)).r;
        float R = texture2D(u_pressure, vUv + vec2(u_texelSize.x, 0.0)).r;
        float T = texture2D(u_pressure, vUv + vec2(0.0, u_texelSize.y)).r;
        float B = texture2D(u_pressure, vUv - vec2(0.0, u_texelSize.y)).r;
        float C = texture2D(u_divergence, vUv).r;
        float p = (L + R + T + B - C) * 0.25;
        gl_FragColor = vec4(p, 0.0, 0.0, 1.0);
      }
    `,uniforms:{u_pressure:{value:w.texture},u_divergence:{value:C.texture},u_texelSize:{value:de.clone()}},depthWrite:!1}),q=new tl({vertexShader:U,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D u_velocity;
      uniform sampler2D u_pressure;
      uniform vec2 u_texelSize;
      void main() {
        float L = texture2D(u_pressure, vUv - vec2(u_texelSize.x, 0.0)).r;
        float R = texture2D(u_pressure, vUv + vec2(u_texelSize.x, 0.0)).r;
        float T = texture2D(u_pressure, vUv + vec2(0.0, u_texelSize.y)).r;
        float B = texture2D(u_pressure, vUv - vec2(0.0, u_texelSize.y)).r;
        vec2 vel = texture2D(u_velocity, vUv).xy;
        vel.x -= 0.5 * (R - L);
        vel.y -= 0.5 * (T - B);
        gl_FragColor = vec4(vel, 0.0, 1.0);
      }
    `,uniforms:{u_velocity:{value:b.texture},u_pressure:{value:w.texture},u_texelSize:{value:de.clone()}},depthWrite:!1}),_e=new tl({vertexShader:U,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D u_velocity;
      uniform vec2 u_texelSize;
      uniform float u_curl;
      void main() {
        float vL = texture2D(u_velocity, vUv - vec2(u_texelSize.x, 0.0)).y;
        float vR = texture2D(u_velocity, vUv + vec2(u_texelSize.x, 0.0)).y;
        float vT = texture2D(u_velocity, vUv + vec2(0.0, u_texelSize.y)).x;
        float vB = texture2D(u_velocity, vUv - vec2(0.0, u_texelSize.y)).x;
        float curl = (vR - vL) - (vT - vB);
        vec2 vel = texture2D(u_velocity, vUv).xy;
        float strength = u_curl * 0.00015;
        vel.x += strength * (vT - vB);
        vel.y += strength * (vL - vR);
        gl_FragColor = vec4(vel, 0.0, 1.0);
      }
    `,uniforms:{u_velocity:{value:b.texture},u_texelSize:{value:de.clone()},u_curl:{value:30}},depthWrite:!1}),ve=new tl({vertexShader:U,fragmentShader:ce,uniforms:{u_velocity:{value:b.texture},u_source:{value:I.texture},u_texelSize:{value:de.clone()},u_dt:{value:1},u_dissipationMultiply:{value:.93}},depthWrite:!1}),ye=new Lo,be=new Lo,J=()=>{let e=Math.max(i.clientWidth,2),t=Math.max(i.clientHeight,2);ye.set(e,t),be.set(0,0),G.position.set(0,0,0),G.scale.set(e,t,1),s.setSize(e,t,!1),u.aspect=e/t,u.updateProjectionMatrix(),u.position.z=800,u.lookAt(0,0,0),H.u_planeRes.value.set(e,t),H.u_windowSize.value.set(x.innerWidth,x.innerHeight);let n=i.getBoundingClientRect();H.u_containerOffset.value.set(n.left,n.top);let r=e/t;if(H.u_containerAspect.value=r,p.image){let e=p.image.width/p.image.height;H.u_frontImageAspect.value=e}B(e,t),de.set(1/g,1/_),H.u_simResolution.value.set(g,_),a&&s.render(o,u)};J();let xe=0,Se=0,Ce=new Pl,Y=new Lo(0,0),we=()=>{let e=j.current()===j.canvas,t=i.getBoundingClientRect().top<x.innerHeight&&i.getBoundingClientRect().bottom>0;return e&&L.preview||!e&&t},Te=()=>{if(!we()){a=!1;return}a=!0,Se=requestAnimationFrame(Te);let e=Ce.getDelta();if(H.u_time.value+=e,!L.parallax)H.u_parallaxOffset.value.set(0,0),Y.set(0,0);else{let t=Math.max(0,Math.min(1,L.parallaxSmoothing??0));if(t===0)H.u_parallaxOffset.value.copy(Y);else{let n=.04,r=n+(.25-n)*t,i=1-Math.exp(-e/Math.max(1e-6,r));H.u_parallaxOffset.value.lerp(Y,i)}}let t=H.u_mouse.value;se.x=t.x-V.x,se.y=t.y-V.y,V.x=t.x,V.y=t.y;let n=j.current()===j.canvas,r=Math.max(i.clientWidth,2),c=Math.max(i.clientHeight,2),l=r/c;H.u_containerAspect.value=l,H.u_planeRes.value.set(r,c),(s.getSize(new Lo).x!==r||s.getSize(new Lo).y!==c)&&(s.setSize(r,c,!1),u.aspect=l,u.updateProjectionMatrix(),G.scale.set(r,c,1)),B(r,c);let d,f;n&&L.preview?(d=.5,f=.5):(d=t.x,f=t.y);let p=Math.max(.005,L.splatRadius),m=Math.max(.9,Math.min(1,L.velocityDissipation)),h=.01**(1/(60*Math.max(.5,Math.min(10,L.shrinkTimeSeconds)))),v=Math.max(10,Math.min(50,Math.round(L.pressureIterations)));de.set(1/g,1/_),me.uniforms.u_texelSize.value.copy(de),he.uniforms.u_texelSize.value.copy(de),ge.uniforms.u_texelSize.value.copy(de),q.uniforms.u_texelSize.value.copy(de),ve.uniforms.u_texelSize.value.copy(de);let y=s.getContext();y.disable(y.BLEND),K.uniforms.u_point.value.set(d,f),K.uniforms.u_aspectRatio.value=l,K.uniforms.u_splatColor.value.set(se.x*30,se.y*30),K.uniforms.u_radius.value=p,K.uniforms.u_target.value=b.texture,fe.material=K,s.setRenderTarget(S),s.render(ue,ae),pe.uniforms.u_point.value.set(d,f),pe.uniforms.u_aspectRatio.value=l,pe.uniforms.u_radius.value=p;let x=n&&L.preview?.15:1;pe.uniforms.u_densityAmount.value=x,pe.uniforms.u_target.value=I.texture,fe.material=pe,s.setRenderTarget(R),s.render(ue,ae),me.uniforms.u_velocity.value=S.texture,me.uniforms.u_source.value=S.texture,me.uniforms.u_dt.value=1,me.uniforms.u_dissipationMultiply.value=m,fe.material=me,s.setRenderTarget(b),s.render(ue,ae),L.curl>0&&(_e.uniforms.u_velocity.value=b.texture,_e.uniforms.u_curl.value=L.curl,fe.material=_e,s.setRenderTarget(S),s.render(ue,ae));let T=L.curl>0?S.texture:b.texture;he.uniforms.u_velocity.value=T,fe.material=he,s.setRenderTarget(C),s.render(ue,ae),ge.uniforms.u_divergence.value=C.texture;let E=w,D=N;for(let e=0;e<v;e++){ge.uniforms.u_pressure.value=E.texture,fe.material=ge,s.setRenderTarget(D),s.render(ue,ae);let e=E;E=D,D=e}let O=L.curl>0?S:b,k=L.curl>0?b:S;if(q.uniforms.u_velocity.value=O.texture,q.uniforms.u_pressure.value=E.texture,fe.material=q,s.setRenderTarget(k),s.render(ue,ae),ve.uniforms.u_velocity.value=k.texture,ve.uniforms.u_source.value=R.texture,ve.uniforms.u_dt.value=1,ve.uniforms.u_dissipationMultiply.value=h,fe.material=ve,s.setRenderTarget(I),s.render(ue,ae),L.curl<=0){let e=b;b=S,S=e}s.setRenderTarget(null),s.clear(),y.enable(y.BLEND),H.u_densityTex.value=I.texture,H.u_parallaxMax.value=L.parallax?Math.max(0,Math.min(200,L.parallaxAmount??0)):0,H.u_blur.value=z(L.blur),H.u_circleBoost.value=te(L.circleBoost);let A=re(L.texture);H.u_noiseFreq.value=A.freq,H.u_noiseStrength.value=A.strength,H.u_noiseSize.value=A.size,H.u_timeSpeed.value=ne(L.timeSpeed),H.u_radius.value=ee(L.radius),n&&L.preview?(xe=1,H.u_mouse.value.set(.5,.5),H.u_noiseFreq.value=A.freq*1.25):H.u_noiseStrength.value=A.strength,M.current?H.u_progress.value=0:H.u_progress.value+=(xe-H.u_progress.value)*.08,s.render(o,u)};we()&&Te();let Ee=null,De=()=>{Ee||=setTimeout(()=>{J(),a&&s.render(o,u),Ee=null},100)},Oe=new ResizeObserver(e=>{e.forEach(e=>{let{width:t,height:n}=e.contentRect;(t!==ye.x||n!==ye.y)&&J()}),De()});Oe.observe(i),x.addEventListener(`resize`,De);let ke=0,Ae=null;if(j.current()===j.canvas){let e=0,t=n=>{if(ke=requestAnimationFrame(t),n-e<150)return;e=n;let r=k.current;if(!r)return;let a=r.getBoundingClientRect().width,o=i.clientWidth,s=i.clientHeight,c=A.current,l=Math.abs(a-c.zoom)>.5,u=o!==c.width||s!==c.height;(l||u)&&(c.zoom=a,c.width=o,c.height=s,M.current=!0,Ae&&clearTimeout(Ae),Ae=setTimeout(()=>{Ae=null,P(e=>e+1)},350))};ke=requestAnimationFrame(t)}let je=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&!a&&we()&&Te()})},{root:null,rootMargin:`50px`,threshold:.01});je.observe(i);let Me=L.parallax?Math.max(0,Math.min(200,L.parallaxAmount??0)):0,Ne=e=>{if(j.current()===j.canvas&&L.preview)return;let t=i.getBoundingClientRect(),n=(e.clientX-t.left)/t.width,r=1-(e.clientY-t.top)/t.height;if(n>=0&&n<=1&&r>=0&&r<=1){xe=1,!a&&we()&&Te();let e=Math.max(0,Math.min(1,n)),t=Math.max(0,Math.min(1,r));H.u_mouse.value.set(e,t),L.parallax&&Me>0&&Y.set((e-.5)*2*Me,(t-.5)*2*Me)}else xe=0,Y.set(0,0)};return x.addEventListener(`mousemove`,Ne),()=>{Se&&cancelAnimationFrame(Se),ke&&cancelAnimationFrame(ke),Ae&&clearTimeout(Ae),Oe.disconnect(),je.disconnect(),x.removeEventListener(`resize`,De),Ee&&clearTimeout(Ee),x.removeEventListener(`mousemove`,Ne),ie(),oe.dispose(),K.dispose(),pe.dispose(),me.dispose(),he.dispose(),ge.dispose(),q.dispose(),_e.dispose(),ve.dispose(),W.dispose(),le.dispose(),s.dispose()}},[N,L.radius,L.blur,L.circleBoost,L.texture,L.timeSpeed,L.splatRadius,L.velocityDissipation,L.shrinkTimeSeconds,L.curl,L.pressureIterations,L.preview,t?.positionX,t?.positionY,n?.positionX,n?.positionY,n?.src,L.parallax,L.parallaxAmount,L.parallaxSmoothing,ee,z,te,re,ne,F]),_(`div`,{ref:D,style:{width:`100%`,height:`100%`,position:`relative`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:i,overflow:`clip`,...e.style},children:[p(`figure`,{style:{position:`absolute`,inset:0,margin:0,padding:0,zIndex:1},children:p(`img`,{ref:E,src:t?.src,srcSet:t?.srcSet,alt:t?.alt||`Back image`,draggable:!1,style:{width:`100%`,height:`100%`,objectFit:`cover`,objectPosition:`${t?.positionX||`50%`} ${t?.positionY||`50%`}`,margin:0,padding:0,userSelect:`none`,pointerEvents:`none`}})}),!F&&p(`canvas`,{ref:T,id:`stage`,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,zIndex:3,pointerEvents:`none`,mixBlendMode:`normal`,background:`transparent`}}),p(`div`,{ref:k,style:{position:`absolute`,width:20,height:20,opacity:0,pointerEvents:`none`}})]})}var qf=e((()=>{i(),v(),n(),Au(),Gf(),te(),Ot(),R(Kf,{preview:{type:q.Boolean,title:`Preview`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},imageBase:{type:q.ResponsiveImage,title:`Front`},imageHover:{type:q.ResponsiveImage,title:`Back`},parallax:{type:q.Boolean,title:`Parallax`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},parallaxAmount:{type:q.Number,title:`Amount`,min:0,max:100,step:5,defaultValue:100,unit:`px`,hidden:e=>!e.parallax},parallaxSmoothing:{type:q.Number,title:`Smoothing`,min:0,max:1,step:.05,defaultValue:0,unit:``,hidden:e=>!e.parallax},borderRadius:{type:q.BorderRadius,title:`Radius`,min:0,max:100,step:1,defaultValue:0,unit:`px`},splatRadius:{type:q.Number,title:`Size`,min:.02,max:.2,step:.01,defaultValue:.08,unit:``},circleBoost:{type:q.Number,title:`Strength`,min:.2,max:1,step:.05,defaultValue:.6,unit:``},shrinkTimeSeconds:{type:q.Number,title:`Return time`,min:.5,max:10,step:.1,defaultValue:2.4,unit:`s`},texture:{type:q.Number,title:`Edge grain`,min:0,max:1,step:.1,defaultValue:.7,unit:``},curl:{type:q.Number,title:`Swirl`,min:0,max:100,step:5,defaultValue:30,unit:``,description:`More components at [Framer University](https://frameruni.link/cc).`}}),Kf.displayName=`Hover Mask Reveal`}));function Jf(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp=e((()=>{v(),te(),E(),n(),Ee(),$e(),lt(),Yf=B(Y),Xf={Tu0llLplW:{hover:!0}},Zf=[`AteOMvoYh`,`Tu0llLplW`],Qf=`framer-Jyh1C`,$f={AteOMvoYh:`framer-v-ujdaes`,Tu0llLplW:`framer-v-1lvqr1z`},ep={delay:0,duration:.4,ease:[.12,.23,.5,1],type:`tween`},tp=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},np={"Variant 1":`AteOMvoYh`,"Variant 2":`Tu0llLplW`},rp=S.create(c),ip=({answer:e,height:t,id:n,question:r,width:i,...a})=>({...a,ktvltmdNR:e??a.ktvltmdNR??`Un predio de 5.000 m² en Concordia, pensado para grupos, familias y celebraciones.`,NuFL0kKwx:r??a.NuFL0kKwx??`Cómo reservar`,variant:np[a.variant]??a.variant??`AteOMvoYh`}),ap=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),op=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se();ce();let{style:l,className:u,layoutId:d,variant:f,NuFL0kKwx:m,ktvltmdNR:h,...g}=ip(e),{baseVariant:v,classNames:y,clearLoadingGesture:x,gestureHandlers:C,gestureVariant:w,isLoading:E,setGestureState:D,setVariant:O,variants:k}=fe({cycleOrder:Zf,defaultVariant:`AteOMvoYh`,enabledGestures:Xf,ref:r,variant:f,variantClassNames:$f}),A=ap(e,k),{activeVariantCallback:j,delay:M}=pe(v),N=j(async(...e)=>{D({isPressed:!1}),O(`AteOMvoYh`)}),F=j(async(...e)=>{O(`Tu0llLplW`)}),I=P(Qf,nt,ft),L=()=>!(w===`Tu0llLplW-hover`||v===`Tu0llLplW`);return p(T,{id:d??i,children:p(rp,{animate:k,initial:!1,children:p(tp,{value:ep,children:p(S.div,{...g,...C,className:P(I,`framer-ujdaes`,u,y),"data-framer-name":`Variant 1`,layoutDependency:A,layoutId:`AteOMvoYh`,ref:r,style:{backgroundColor:`var(--token-97ec7ff8-e305-467e-b9ac-c2ac103aea95, rgb(239, 235, 227))`,opacity:1,...l},variants:{"Tu0llLplW-hover":{opacity:1},Tu0llLplW:{opacity:.5}},...Jf({"Tu0llLplW-hover":{"data-framer-name":void 0},Tu0llLplW:{"data-framer-name":`Variant 2`,"data-highlight":!0,onTap:N}},v,w),children:_(S.div,{className:`framer-646gg7`,layoutDependency:A,layoutId:`SHrz5Hsq3`,children:[p(S.div,{className:`framer-7vkym4`,"data-highlight":!0,layoutDependency:A,layoutId:`nJQLlzR7v`,onTap:F,children:p(G,{children:p(de,{className:`framer-1lcipxy-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:A,layoutId:`TP19bEpCL-container`,name:`Default`,nodeId:`TP19bEpCL`,rendersWithMotion:!0,scopeId:`jnl89rMPz`,style:{rotate:135},variants:{"Tu0llLplW-hover":{rotate:45},Tu0llLplW:{rotate:0}},children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(21, 19, 15))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`TP19bEpCL`,layoutId:`TP19bEpCL`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`regular`,width:`100%`})})})}),_(S.div,{className:`framer-42z604`,"data-framer-name":`Frame 49`,layoutDependency:A,layoutId:`CIiEgEbWL`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.h5,{className:`framer-styles-preset-ubyy1b`,"data-styles-preset":`NXuvUfUtD`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-1lwpl3i, var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(21, 19, 15)))`},children:`Cómo reservar`})}),className:`framer-178o14l`,"data-framer-name":`Question`,fonts:[`Inter`],layoutDependency:A,layoutId:`PwJi8InW8`,style:{"--extracted-1lwpl3i":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(21, 19, 15))`,"--framer-paragraph-spacing":`0px`},text:m,verticalAlignment:`top`,withExternalLayout:!0}),L()&&p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,children:`Un predio de 5.000 m² en Concordia, pensado para grupos, familias y celebraciones.`})}),className:`framer-sz7tqw`,"data-framer-name":`Answer`,fonts:[`Inter`],layoutDependency:A,layoutId:`qJJfR5Jks`,style:{"--framer-paragraph-spacing":`0px`},text:h,verticalAlignment:`top`,withExternalLayout:!0})]})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-Jyh1C.framer-1715kcr, .framer-Jyh1C .framer-1715kcr { display: block; }`,`.framer-Jyh1C.framer-ujdaes { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px 20px 24px 20px; position: relative; width: 968px; }`,`.framer-Jyh1C .framer-646gg7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-Jyh1C .framer-7vkym4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-Jyh1C .framer-1lcipxy-container { flex: none; height: 28px; position: relative; width: 28px; }`,`.framer-Jyh1C .framer-42z604 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,`.framer-Jyh1C .framer-178o14l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-Jyh1C .framer-sz7tqw { flex: none; height: auto; max-width: 570px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-Jyh1C.framer-v-1lvqr1z.framer-ujdaes { cursor: pointer; }`,`.framer-Jyh1C.framer-v-1lvqr1z .framer-1lcipxy-container { height: 24px; width: 24px; }`,...et,...ut],`framer-Jyh1C`),op.displayName=`Accordion`,op.defaultProps={height:134,width:968},R(op,{variant:{options:[`AteOMvoYh`,`Tu0llLplW`],optionTitles:[`Variant 1`,`Variant 2`],title:`Variant`,type:q.Enum},NuFL0kKwx:{defaultValue:`Cómo reservar`,displayTextArea:!1,title:`Question`,type:q.String},onNuFL0kKwxChange:{changes:`NuFL0kKwx`,type:q.ChangeHandler},ktvltmdNR:{defaultValue:`Un predio de 5.000 m² en Concordia, pensado para grupos, familias y celebraciones.`,displayTextArea:!1,title:`Answer`,type:q.String},onktvltmdNRChange:{changes:`ktvltmdNR`,type:q.ChangeHandler}}),I(op,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...Yf,...N(tt),...N(dt)],{supportsExplicitInterCodegen:!0})}));function cp(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp=e((()=>{v(),te(),E(),n(),lp=[`bRcU_NRZl`,`n1kfbTyQU`],up=`framer-ie8nR`,dp={bRcU_NRZl:`framer-v-n82g3u`,n1kfbTyQU:`framer-v-1bn0pe4`},fp={delay:0,duration:.4,ease:[.12,.23,.5,1],type:`tween`},pp=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,mp=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},hp={"Variant 1":`bRcU_NRZl`,"Variant 2":`n1kfbTyQU`},gp=S.create(c),_p=({height:e,id:t,logo01:n,logo02:r,width:i,...a})=>({...a,b8see0KbT:n??a.b8see0KbT??{alt:``,pixelHeight:40,pixelWidth:37,src:`/assets/framerusercontent.com/images/zBj9xCXNNtX2Qasul9QnTzWDF1g__05a02c1c51.png`},variant:hp[a.variant]??a.variant??`bRcU_NRZl`,WxWjGa_A5:r??a.WxWjGa_A5??{alt:``,pixelHeight:50,pixelWidth:378,src:`/assets/framerusercontent.com/images/WgqoIR0XVKIP3HfV1cFN5t2rxo__c6553b004c.png`}}),vp=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),yp=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se(),c=ce(),{style:l,className:u,layoutId:d,variant:f,b8see0KbT:m,WxWjGa_A5:h,...g}=_p(e),{baseVariant:_,classNames:v,clearLoadingGesture:y,gestureHandlers:x,gestureVariant:C,isLoading:w,setGestureState:E,setVariant:D,variants:O}=fe({cycleOrder:lp,defaultVariant:`bRcU_NRZl`,ref:r,variant:f,variantClassNames:dp}),k=vp(e,O),A=P(up);return p(T,{id:d??i,children:p(gp,{animate:O,initial:!1,children:p(mp,{value:fp,children:p(S.div,{...g,...x,className:P(A,`framer-n82g3u`,u,v),"data-framer-name":`Variant 1`,layoutDependency:k,layoutId:`bRcU_NRZl`,ref:r,style:{...l},...cp({n1kfbTyQU:{"data-framer-name":`Variant 2`}},_,C),children:p(W,{background:{alt:``,fit:`fit`,intrinsicHeight:40,intrinsicWidth:37,loading:F((c?.y||0)+(0+((c?.height||80)-0-20)/2)),pixelHeight:40,pixelWidth:37,sizes:`40px`,...pp(m),positionX:`center`,positionY:`center`},className:`framer-yxw2qe`,"data-framer-name":`Image`,layoutDependency:k,layoutId:`Vm1keN52P`,...cp({n1kfbTyQU:{background:{alt:``,fit:`fit`,intrinsicHeight:50,intrinsicWidth:378,loading:F((c?.y||0)+(0+((c?.height||80)-0-32)/2)),pixelHeight:50,pixelWidth:378,sizes:`128.8205px`,...pp(h),positionX:`center`,positionY:`center`}}},_,C)})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-ie8nR.framer-jn5ac4, .framer-ie8nR .framer-jn5ac4 { display: block; }`,`.framer-ie8nR.framer-n82g3u { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 80px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 240px; }`,`.framer-ie8nR .framer-yxw2qe { aspect-ratio: 1.25 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 40px; }`,`.framer-ie8nR.framer-v-1bn0pe4 .framer-yxw2qe { aspect-ratio: 4.0256410256410255 / 1; width: 129px; }`],`framer-ie8nR`),yp.displayName=`Client Logo`,yp.defaultProps={height:80,width:240},R(yp,{variant:{options:[`bRcU_NRZl`,`n1kfbTyQU`],optionTitles:[`Variant 1`,`Variant 2`],title:`Variant`,type:q.Enum},b8see0KbT:{__defaultAssetReference:`data:framer/asset-reference,zBj9xCXNNtX2Qasul9QnTzWDF1g.png?originalFilename=Client+Logo+01.png&width=37&height=40`,__vekterDefault:{alt:``,assetReference:`data:framer/asset-reference,zBj9xCXNNtX2Qasul9QnTzWDF1g.png?originalFilename=Client+Logo+01.png&width=37&height=40`},title:`Logo 01`,type:q.ResponsiveImage},WxWjGa_A5:{__defaultAssetReference:`data:framer/asset-reference,WgqoIR0XVKIP3HfV1cFN5t2rxo.png?originalFilename=Frame-1.png&width=378&height=50`,__vekterDefault:{alt:``,assetReference:`data:framer/asset-reference,WgqoIR0XVKIP3HfV1cFN5t2rxo.png?originalFilename=Frame-1.png&width=378&height=50`},title:`Logo 02`,type:q.ResponsiveImage}}),I(yp,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0})}));function xp(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np=e((()=>{v(),te(),E(),n(),Ee(),lt(),we(),Sp=B(Y),Cp={JTrcuqI_d:{hover:!0}},wp=`framer-Aurp6`,Tp={JTrcuqI_d:`framer-v-214z8b`},Ep={delay:0,duration:.4,ease:[.12,.23,.5,1],type:`tween`},Dp=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,Op=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},kp=S.create(c),Ap=({click:e,height:t,id:n,image:r,text:i,title:a,width:o,...s})=>({...s,aqXkj8oKY:i??s.aqXkj8oKY??`Residential`,KqROMJsFZ:a??s.KqROMJsFZ??`CONCORDIA, ER`,vxwSblaOu:r??s.vxwSblaOu??{alt:``,pixelHeight:1345,pixelWidth:1336,src:`/assets/framerusercontent.com/images/lFqIElibGrikZx8q6XiAQ9V02g0__9e37194595.jpeg`,srcSet:`/assets/framerusercontent.com/images/lFqIElibGrikZx8q6XiAQ9V02g0__df2a757ae4.jpeg 1017w,/assets/framerusercontent.com/images/lFqIElibGrikZx8q6XiAQ9V02g0__9e37194595.jpeg 1336w`},WmFty5NZZ:e??s.WmFty5NZZ}),jp=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Mp=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se(),l=ce(),{style:u,className:d,layoutId:f,variant:m,WmFty5NZZ:h,vxwSblaOu:g,KqROMJsFZ:v,aqXkj8oKY:y,...x}=Ap(e),{baseVariant:C,classNames:w,clearLoadingGesture:E,gestureHandlers:D,gestureVariant:O,isLoading:k,setGestureState:A,setVariant:j,variants:M}=fe({defaultVariant:`JTrcuqI_d`,enabledGestures:Cp,ref:r,variant:m,variantClassNames:Tp}),N=jp(e,M),{activeVariantCallback:I,delay:L}=pe(C),R=I(async(...e)=>{if(A({isPressed:!1}),h&&await h(...e)===!1)return!1}),ee=P(wp,Oe,ft);return p(T,{id:f??i,children:p(kp,{animate:M,initial:!1,children:p(Op,{value:Ep,children:_(S.div,{...x,...D,className:P(ee,`framer-214z8b`,d,w),"data-framer-name":`Variant 1`,"data-highlight":!0,layoutDependency:N,layoutId:`JTrcuqI_d`,onTap:R,ref:r,style:{...u},...xp({"JTrcuqI_d-hover":{"data-framer-name":void 0}},C,O),children:[_(S.div,{className:`framer-8h8tu1`,layoutDependency:N,layoutId:`avRsPaygM`,children:[p(W,{background:{alt:``,fit:`fill`,intrinsicHeight:1345,intrinsicWidth:1336,loading:F((l?.y||0)+0+(((l?.height||200)-0-293)/2+0+0)+0),pixelHeight:1345,pixelWidth:1336,sizes:l?.width||`100vw`,...Dp(g)},className:`framer-ubryfy`,layoutDependency:N,layoutId:`JDluPoiLB`,style:{rotate:0,scale:1},variants:{"JTrcuqI_d-hover":{rotate:1,scale:1.03}}}),_(S.div,{className:`framer-18srhz7`,layoutDependency:N,layoutId:`I5_vgWa0o`,children:[p(G,{children:p(de,{className:`framer-1u19e26-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:N,layoutId:`YiDld65WL-container`,name:`Default`,nodeId:`YiDld65WL`,rendersWithMotion:!0,scopeId:`si7QLZs5f`,children:p(Y,{color:`var(--token-ef5e28c5-723a-46cc-aaac-95da36ccaa0f, rgb(244, 241, 235))`,height:`100%`,iconSearch:`House`,iconSelection:`PlayCircle`,id:`YiDld65WL`,layoutId:`YiDld65WL`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`fill`,width:`100%`})})}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-1mnerwp`,"data-styles-preset":`xtEebSFOv`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235)))`},children:`RECORRIDO`})}),className:`framer-7zlvnw`,fonts:[`Inter`],layoutDependency:N,layoutId:`RtUnzdlXk`,style:{"--extracted-r6o4lv":`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},verticalAlignment:`top`,withExternalLayout:!0})]})]}),_(S.div,{className:`framer-iltcm3`,layoutDependency:N,layoutId:`s5WgtN9LP`,children:[_(S.div,{className:`framer-zzre9t`,layoutDependency:N,layoutId:`iOUqqGqjp`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,children:`EST. 2020 — CONCORDIA, ER`})}),className:`framer-1fw2ady`,fonts:[`Inter`],layoutDependency:N,layoutId:`dQGWjCzIj`,style:{"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:v,verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,children:`CONCORDIA, ER`})}),className:`framer-443qwr`,fonts:[`Inter`],layoutDependency:N,layoutId:`K2oq534gY`,style:{"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},verticalAlignment:`top`,withExternalLayout:!0})]}),_(S.div,{className:`framer-1un8rwb`,layoutDependency:N,layoutId:`SGPNRQWF5`,children:[p(S.div,{className:`framer-29ravh`,layoutDependency:N,layoutId:`TlHlQUfo9`,style:{backgroundColor:`rgb(0, 0, 0)`,borderBottomLeftRadius:5,borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5}}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,children:`Residential`})}),className:`framer-1b6lxp0`,fonts:[`Inter`],layoutDependency:N,layoutId:`CZ6DYaN_4`,style:{"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},text:y,verticalAlignment:`top`,withExternalLayout:!0})]})]})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-Aurp6.framer-1uklipm, .framer-Aurp6 .framer-1uklipm { display: block; }`,`.framer-Aurp6.framer-214z8b { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 328px; }`,`.framer-Aurp6 .framer-8h8tu1 { aspect-ratio: 1.2038461538461538 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 166px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,`.framer-Aurp6 .framer-ubryfy { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); }`,`.framer-Aurp6 .framer-18srhz7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; left: 12px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 12px; width: min-content; z-index: 2; }`,`.framer-Aurp6 .framer-1u19e26-container { flex: none; height: 16px; position: relative; width: 16px; }`,`.framer-Aurp6 .framer-7zlvnw { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,`.framer-Aurp6 .framer-iltcm3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-Aurp6 .framer-zzre9t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 21px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-Aurp6 .framer-1fw2ady, .framer-Aurp6 .framer-443qwr, .framer-Aurp6 .framer-1b6lxp0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-Aurp6 .framer-1un8rwb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,`.framer-Aurp6 .framer-29ravh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 5px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 5px; will-change: var(--framer-will-change-override, transform); }`,`.framer-Aurp6.framer-v-214z8b.hover .framer-zzre9t { justify-content: flex-end; }`,...Te,...ut],`framer-Aurp6`),Mp.displayName=`Reel Showcase for Popup Overlay`,Mp.defaultProps={height:305,width:328},R(Mp,{WmFty5NZZ:{title:`Click`,type:q.EventHandler},vxwSblaOu:{__defaultAssetReference:`data:framer/asset-reference,lFqIElibGrikZx8q6XiAQ9V02g0.jpeg?originalFilename=magnific_generate-9-different-angl_2931568851.jpeg&width=1336&height=1345`,__vekterDefault:{alt:``,assetReference:`data:framer/asset-reference,lFqIElibGrikZx8q6XiAQ9V02g0.jpeg?originalFilename=magnific_generate-9-different-angl_2931568851.jpeg&width=1336&height=1345`},title:`Image`,type:q.ResponsiveImage},KqROMJsFZ:{defaultValue:`CONCORDIA, ER`,displayTextArea:!1,title:`Title`,type:q.String},onKqROMJsFZChange:{changes:`KqROMJsFZ`,type:q.ChangeHandler},aqXkj8oKY:{defaultValue:`Residential`,displayTextArea:!1,title:`Text`,type:q.String},onaqXkj8oKYChange:{changes:`aqXkj8oKY`,type:q.ChangeHandler}}),I(Mp,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...Sp,...N(De),...N(dt)],{supportsExplicitInterCodegen:!0})}));function Pp(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp=e((()=>{v(),te(),E(),n(),Dt(),Le(),Mt(),lt(),qe(),Fp=B(kt),Ip=B(Je),Lp=[`Kga_SV3Uc`,`lweuIPizn`,`nRlf5seCf`],Rp=`framer-DSUuk`,zp={Kga_SV3Uc:`framer-v-1lsmk4w`,lweuIPizn:`framer-v-3bevhw`,nRlf5seCf:`framer-v-ux0kq8`},Bp={bounce:.2,delay:0,duration:.4,type:`spring`},Vp=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,Hp=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Up=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},Wp={Desktop:`Kga_SV3Uc`,Phone:`nRlf5seCf`,Tablet:`lweuIPizn`},Gp=S.create(c),Kp=({desc:e,height:t,id:n,iDCaption:r,image:i,scope01:a,scope02:o,scope03:s,title:c,width:l,...u})=>({...u,BZyFw15_r:a??u.BZyFw15_r??`[Graphic Design]`,HjZQ8vYD1:e??u.HjZQ8vYD1??`We are a creative team dedicated to crafting innovative designs and strategies that help brands.`,kga5kNKLo:s??u.kga5kNKLo??`[Social Media Posts] `,MZMZremxE:i??u.MZMZremxE??{alt:``,pixelHeight:1336,pixelWidth:1252,src:`/assets/framerusercontent.com/images/gR8ycjTVfdWAiKvpnabucQGag__f14e77d775.png`,srcSet:`/assets/framerusercontent.com/images/gR8ycjTVfdWAiKvpnabucQGag__de95fcfd71.png 959w,/assets/framerusercontent.com/images/gR8ycjTVfdWAiKvpnabucQGag__f14e77d775.png 1252w`},TEbXfm9jp:o??u.TEbXfm9jp??`[Interior Styling] `,variant:Wp[u.variant]??u.variant??`Kga_SV3Uc`,wglE1jQyo:c??u.wglE1jQyo??`Brand Guidlines`,ZyzNCJu2F:r??u.ZyzNCJu2F??`[ 01 / ESPACIO ]`}),qp=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Jp=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se(),l=ce(),{style:u,className:d,layoutId:f,variant:m,ZyzNCJu2F:h,wglE1jQyo:g,MZMZremxE:v,BZyFw15_r:y,TEbXfm9jp:x,kga5kNKLo:C,HjZQ8vYD1:w,...E}=Kp(e),{baseVariant:D,classNames:O,clearLoadingGesture:k,gestureHandlers:j,gestureVariant:M,isLoading:N,setGestureState:F,setVariant:I,variants:L}=fe({cycleOrder:Lp,defaultVariant:`Kga_SV3Uc`,ref:r,variant:m,variantClassNames:zp}),R=qp(e,L),ee=P(Rp,ze,ft,Ft),te=()=>![`lweuIPizn`,`nRlf5seCf`].includes(D);return A(),p(T,{id:f??i,children:p(Gp,{animate:L,initial:!1,children:p(Up,{value:Bp,children:p(S.div,{...E,...j,className:P(ee,`framer-1lsmk4w`,d,O),"data-framer-name":`Desktop`,layoutDependency:R,layoutId:`Kga_SV3Uc`,ref:r,style:{...u},...Pp({lweuIPizn:{"data-framer-name":`Tablet`},nRlf5seCf:{"data-framer-name":`Phone`}},D,M),children:_(S.div,{className:`framer-p75ie6`,layoutDependency:R,layoutId:`A1dhnG1A1`,children:[te()&&p(S.div,{className:`framer-kvae8s`,layoutDependency:R,layoutId:`Yl71ZMzEC`,children:_(S.div,{className:`framer-1jviqsp`,layoutDependency:R,layoutId:`rIWDQWVZH`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-1vhqizg`,"data-styles-preset":`kP1rreWNu`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-882f15a8-7122-4ca9-b62c-e2f8c413a3ab, rgb(221, 221, 221)))`},children:`[ Incluye ]`})}),className:`framer-18disu6`,"data-framer-name":`Caption`,fonts:[`Inter`],layoutDependency:R,layoutId:`JPLV1LWMJ`,style:{"--extracted-r6o4lv":`var(--token-882f15a8-7122-4ca9-b62c-e2f8c413a3ab, rgb(221, 221, 221))`,"--framer-paragraph-spacing":`0px`},verticalAlignment:`top`,withExternalLayout:!0}),_(S.div,{className:`framer-1v5uw97`,layoutDependency:R,layoutId:`pcNEjKMDC`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164)))`},children:`[Graphic Design]`})}),className:`framer-1arjovz`,"data-framer-name":`Text`,fonts:[`Inter`],layoutDependency:R,layoutId:`mgtm3zkcz`,style:{"--extracted-r6o4lv":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164))`,"--framer-paragraph-spacing":`0px`},text:y,verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164)))`},children:`[Interior Styling] `})}),className:`framer-1qptfus`,"data-framer-name":`Text`,fonts:[`Inter`],layoutDependency:R,layoutId:`LJxEMyUdz`,style:{"--extracted-r6o4lv":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164))`,"--framer-paragraph-spacing":`0px`},text:x,verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164)))`},children:`[Social Media Posts] `})}),className:`framer-1tg596d`,"data-framer-name":`Text`,fonts:[`Inter`],layoutDependency:R,layoutId:`SH8QDPLjH`,style:{"--extracted-r6o4lv":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164))`,"--framer-paragraph-spacing":`0px`},text:C,verticalAlignment:`top`,withExternalLayout:!0})]})]})}),_(S.div,{className:`framer-1btk2uj`,layoutDependency:R,layoutId:`kRX_XnUOx`,children:[p(G,{children:p(de,{className:`framer-egwi8f-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:R,layoutId:`GPvHrpsCl-container`,nodeId:`GPvHrpsCl`,rendersWithMotion:!0,scopeId:`tyn_cembn`,children:p(kt,{borderRadius:`0px`,boxShadow:``,height:`100%`,horizontalParallaxAmount:0,id:`GPvHrpsCl`,image:Vp(v),layoutId:`GPvHrpsCl`,style:{height:`100%`,maxWidth:`100%`,width:`100%`},verticalParallaxAmount:75,width:`100%`})})}),p(S.div,{className:`framer-1hr8ewl`,layoutDependency:R,layoutId:`tGwE8ZV_U`,children:_(S.div,{className:`framer-pyqpi1`,layoutDependency:R,layoutId:`SnJr1iASt`,children:[_(S.div,{className:`framer-v6b8sd`,layoutDependency:R,layoutId:`uGPKcFsUb`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-1vhqizg`,"data-styles-preset":`kP1rreWNu`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-882f15a8-7122-4ca9-b62c-e2f8c413a3ab, rgb(181, 168, 152)))`},children:`[ 01 / ESPACIO ]`})}),className:`framer-1jrrm9g`,"data-framer-name":`Caption`,fonts:[`Inter`],layoutDependency:R,layoutId:`wLARjR6IN`,style:{"--extracted-r6o4lv":`var(--token-882f15a8-7122-4ca9-b62c-e2f8c413a3ab, rgb(181, 168, 152))`,"--framer-paragraph-spacing":`0px`},text:h,verticalAlignment:`top`,withExternalLayout:!0}),_(S.div,{className:`framer-l4oyzm`,layoutDependency:R,layoutId:`wMrr6z_vZ`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.h3,{className:`framer-styles-preset-tgoaog`,"data-styles-preset":`KSxvq0jgx`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-a0htzi, var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235)))`},children:`Resdential Interiors`})}),className:`framer-1xntlvm`,"data-framer-name":`Title`,fonts:[`Inter`],layoutDependency:R,layoutId:`qclQvFs2K`,style:{"--extracted-a0htzi":`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235))`,"--framer-paragraph-spacing":`0px`},text:g,verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-alignment":`left`,"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(238, 238, 238)))`},children:`Piscina, salón climatizado, parrilla, cancha, granja y hospedaje, a 15 minutos del centro.`})}),className:`framer-1xneaj8`,"data-framer-name":`Text`,fonts:[`Inter`],layoutDependency:R,layoutId:`XBz3HiNRu`,style:{"--extracted-r6o4lv":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(238, 238, 238))`,"--framer-paragraph-spacing":`0px`},text:w,verticalAlignment:`top`,withExternalLayout:!0})]})]}),p(S.div,{className:`framer-1d2jy6c`,layoutDependency:R,layoutId:`s9wvP2BO5`,children:p(z,{links:[{href:{webPageId:`gDaVYicj9`},implicitPathVariables:void 0},{href:{webPageId:`gDaVYicj9`},implicitPathVariables:void 0},{href:{webPageId:`gDaVYicj9`},implicitPathVariables:void 0}],children:e=>p(G,{height:53,width:`240px`,y:(l?.y||0)+(0+((l?.height||415)-0-415)/2)+0+0+0+0+0+0+362+0+0,...Pp({lweuIPizn:{y:(l?.y||0)+0+(((l?.height||491)-0-561.8)/2+0+0)+0+0+0+240+20+0+228.8+0+0},nRlf5seCf:{y:(l?.y||0)+0+(((l?.height||592)-0-641.8)/2+0+0)+0+0+0+320+20+0+228.8+0+0}},D,M),children:p(de,{className:`framer-f8lfv8-container`,layoutDependency:R,layoutId:`Lf6CEuL3u-container`,nodeId:`Lf6CEuL3u`,rendersWithMotion:!0,scopeId:`tyn_cembn`,children:p(Je,{height:`100%`,id:`Lf6CEuL3u`,layoutId:`Lf6CEuL3u`,mraUIbOsu:e[0],style:{width:`100%`},variant:Hp(`wEyFkHYwL`),width:`100%`,xPptMBCot:`VER MÁS`,...Pp({lweuIPizn:{mraUIbOsu:e[1]},nRlf5seCf:{mraUIbOsu:e[2]}},D,M)})})})})})]})})]})]})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-DSUuk.framer-1wm3a5h, .framer-DSUuk .framer-1wm3a5h { display: block; }`,`.framer-DSUuk.framer-1lsmk4w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1318px; }`,`.framer-DSUuk .framer-p75ie6 { display: grid; flex: 1 0 0px; gap: 24px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-DSUuk .framer-kvae8s { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-1jviqsp { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-18disu6, .framer-DSUuk .framer-1arjovz, .framer-DSUuk .framer-1qptfus, .framer-DSUuk .framer-1tg596d, .framer-DSUuk .framer-1jrrm9g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-DSUuk .framer-1v5uw97 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-1btk2uj { align-self: start; display: grid; flex: none; gap: 24px 0px; grid-auto-rows: minmax(0, 1fr); grid-column: span 3; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: 415px; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-egwi8f-container { align-self: start; flex: none; height: 100%; justify-self: start; max-width: 100%; position: relative; width: 100%; }`,`.framer-DSUuk .framer-1hr8ewl { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; grid-column: span 2; height: 100%; justify-content: space-between; justify-self: start; overflow: visible; padding: 0px 0px 0px 40px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-pyqpi1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-DSUuk .framer-v6b8sd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-l4oyzm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-1xntlvm { flex: none; height: auto; max-width: 390px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-DSUuk .framer-1xneaj8 { --framer-text-wrap-override: balance; --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; max-width: 600px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,`.framer-DSUuk .framer-1d2jy6c { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-DSUuk .framer-f8lfv8-container { flex: none; height: auto; position: relative; width: 240px; }`,`.framer-DSUuk.framer-v-3bevhw.framer-1lsmk4w { flex-direction: column; gap: 20px; width: 768px; }`,`.framer-DSUuk.framer-v-3bevhw .framer-p75ie6, .framer-DSUuk.framer-v-ux0kq8 .framer-p75ie6 { flex: none; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); width: 100%; }`,`.framer-DSUuk.framer-v-3bevhw .framer-1btk2uj, .framer-DSUuk.framer-v-ux0kq8 .framer-1btk2uj { gap: 0px 0px; grid-auto-rows: min-content; grid-column: span 1; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; order: 0; }`,`.framer-DSUuk.framer-v-3bevhw .framer-egwi8f-container { aspect-ratio: 3.2 / 1; height: var(--framer-aspect-ratio-supported, 240px); }`,`.framer-DSUuk.framer-v-3bevhw .framer-1hr8ewl, .framer-DSUuk.framer-v-ux0kq8 .framer-1hr8ewl { grid-column: span 1; height: min-content; padding: 20px; }`,`.framer-DSUuk.framer-v-3bevhw .framer-pyqpi1, .framer-DSUuk.framer-v-ux0kq8 .framer-pyqpi1 { gap: 32px; height: min-content; justify-content: flex-start; }`,`.framer-DSUuk.framer-v-3bevhw .framer-v6b8sd, .framer-DSUuk.framer-v-ux0kq8 .framer-v6b8sd { gap: 8px; }`,`.framer-DSUuk.framer-v-3bevhw .framer-1xntlvm { max-width: 460px; }`,`.framer-DSUuk.framer-v-ux0kq8.framer-1lsmk4w { flex-direction: column; gap: 20px; width: 390px; }`,`.framer-DSUuk.framer-v-ux0kq8 .framer-egwi8f-container { aspect-ratio: 1.21875 / 1; height: var(--framer-aspect-ratio-supported, 320px); }`,...Ne,...ut,...Nt],`framer-DSUuk`),Jp.displayName=`Service Card`,Jp.defaultProps={height:415,width:1318},R(Jp,{variant:{options:[`Kga_SV3Uc`,`lweuIPizn`,`nRlf5seCf`],optionTitles:[`Desktop`,`Tablet`,`Phone`],title:`Variant`,type:q.Enum},ZyzNCJu2F:{defaultValue:`[ 01 / ESPACIO ]`,displayTextArea:!1,title:`ID Caption`,type:q.String},onZyzNCJu2FChange:{changes:`ZyzNCJu2F`,type:q.ChangeHandler},wglE1jQyo:{defaultValue:`Brand Guidlines`,displayTextArea:!1,title:`Title`,type:q.String},onwglE1jQyoChange:{changes:`wglE1jQyo`,type:q.ChangeHandler},MZMZremxE:{__defaultAssetReference:`data:framer/asset-reference,gR8ycjTVfdWAiKvpnabucQGag.png?width=1252&height=1336`,__vekterDefault:{alt:``,assetReference:`data:framer/asset-reference,gR8ycjTVfdWAiKvpnabucQGag.png?width=1252&height=1336`},title:`Image`,type:q.ResponsiveImage},BZyFw15_r:{defaultValue:`[Graphic Design]`,displayTextArea:!1,title:`Scope 01`,type:q.String},onBZyFw15_rChange:{changes:`BZyFw15_r`,type:q.ChangeHandler},TEbXfm9jp:{defaultValue:`[Interior Styling] `,displayTextArea:!1,title:`Scope 02`,type:q.String},onTEbXfm9jpChange:{changes:`TEbXfm9jp`,type:q.ChangeHandler},kga5kNKLo:{defaultValue:`[Social Media Posts] `,displayTextArea:!1,title:`Scope 03`,type:q.String},onkga5kNKLoChange:{changes:`kga5kNKLo`,type:q.ChangeHandler},HjZQ8vYD1:{defaultValue:`We are a creative team dedicated to crafting innovative designs and strategies that help brands.`,displayTextArea:!1,title:`Desc`,type:q.String},onHjZQ8vYD1Change:{changes:`HjZQ8vYD1`,type:q.ChangeHandler}}),I(Jp,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...Fp,...Ip,...N(ke),...N(dt),...N(Pt)],{supportsExplicitInterCodegen:!0}),Jp.loader={load:(e,t)=>(t.locale,Promise.allSettled([ne(Je,{},t)]))}}));function Xp(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm=e((()=>{v(),te(),E(),n(),at(),Le(),Fe(),lt(),Zp=ee(L(S.div)),Qp={nVP3g0kIQ:{hover:!0}},$p=[`C9bdsIrcp`,`nVP3g0kIQ`,`RDyYonAhp`,`OXuPQInsk`],em=`framer-l4nNe`,tm={C9bdsIrcp:`framer-v-77bf0g`,nVP3g0kIQ:`framer-v-16a0nwj`,OXuPQInsk:`framer-v-1nn3vcs`,RDyYonAhp:`framer-v-k9haed`},nm={delay:0,duration:.4,ease:[.12,.23,.5,1],type:`tween`},rm={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{delay:.1,duration:.4,ease:[.12,.23,.5,1],type:`tween`},x:0,y:0},im={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0},am=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,om=(e,t)=>typeof e==`string`&&typeof t==`string`?t+e:typeof e==`string`?e:typeof t==`string`?t:``,sm=(e,t)=>typeof e==`string`&&typeof t==`string`?e+t:typeof e==`string`?e:typeof t==`string`?t:``,cm=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},lm={"Desktop Closed":`nVP3g0kIQ`,"Desktop Opened":`C9bdsIrcp`,"Tablet Closed":`OXuPQInsk`,"Tablet Opened":`RDyYonAhp`},um=S.create(c),dm=({click:e,height:t,id:n,image:r,logo:i,name1:a,position:o,results:s,reviewText:c,width:l,...u})=>({...u,CcdDg4SVQ:r??u.CcdDg4SVQ??{alt:``,pixelHeight:2124,pixelWidth:2316,src:`/assets/framerusercontent.com/images/j5h7pqI7Bz2djjwib8IkiOGqgCM__472240ce33.png`,srcSet:`/assets/framerusercontent.com/images/j5h7pqI7Bz2djjwib8IkiOGqgCM__9e63d6eaad.png 512w,/assets/framerusercontent.com/images/j5h7pqI7Bz2djjwib8IkiOGqgCM__42a89a48aa.png 1024w,/assets/framerusercontent.com/images/j5h7pqI7Bz2djjwib8IkiOGqgCM__7d720112e4.png 2048w,/assets/framerusercontent.com/images/j5h7pqI7Bz2djjwib8IkiOGqgCM__472240ce33.png 2316w`},frytV_myc:i??u.frytV_myc??{alt:``,pixelHeight:50,pixelWidth:263,src:`/assets/framerusercontent.com/images/U3J3LorbS00fF3EUr959umL0V6o__22f4929cd4.png`},Gr3P7e7fE:a??u.Gr3P7e7fE??`MICHAEL DEEN`,QiY1NDIju:o??u.QiY1NDIju??`CTO @ Prizmas`,variant:lm[u.variant]??u.variant??`C9bdsIrcp`,Vkbq43heQ:s??u.Vkbq43heQ??`RAISED $2.6M IN FUNDING IN 2026`,xxFmiUh6K:c??u.xxFmiUh6K??`Llegás y está todo listo: pileta impecable, salón acondicionado y el predio entero a disposición.`,ZYg3kQEpu:e??u.ZYg3kQEpu}),fm=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),pm=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se(),l=ce(),{style:u,className:d,layoutId:f,variant:m,CcdDg4SVQ:h,Gr3P7e7fE:g,QiY1NDIju:v,frytV_myc:y,Vkbq43heQ:x,xxFmiUh6K:C,ZYg3kQEpu:w,...E}=dm(e),{baseVariant:D,classNames:O,clearLoadingGesture:k,gestureHandlers:A,gestureVariant:j,isLoading:M,setGestureState:N,setVariant:I,variants:L}=fe({cycleOrder:$p,defaultVariant:`C9bdsIrcp`,enabledGestures:Qp,ref:r,variant:m,variantClassNames:tm}),R=fm(e,L),{activeVariantCallback:ee,delay:z}=pe(D),te=ee(async(...e)=>{if(N({isPressed:!1}),w&&await w(...e)===!1)return!1}),ne=P(em,je,ze,ft,ct),re=()=>!(j===`nVP3g0kIQ-hover`||[`nVP3g0kIQ`,`OXuPQInsk`].includes(D)),ie=()=>D!==`RDyYonAhp`,B=sm(om(C,`"`),`"`);return p(T,{id:f??i,children:p(um,{animate:L,initial:!1,children:p(cm,{value:nm,children:_(S.div,{...E,...A,className:P(ne,`framer-77bf0g`,d,O),"data-framer-name":`Desktop Opened`,"data-highlight":!0,layoutDependency:R,layoutId:`C9bdsIrcp`,onTap:te,ref:r,style:{...u},...Xp({"nVP3g0kIQ-hover":{"data-framer-name":void 0},nVP3g0kIQ:{"data-framer-name":`Desktop Closed`},OXuPQInsk:{"data-framer-name":`Tablet Closed`},RDyYonAhp:{"data-framer-name":`Tablet Opened`}},D,j),children:[re()&&_(Zp,{__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,animate:rm,className:`framer-1mksk19`,"data-framer-appear-id":`1mksk19`,initial:im,layoutDependency:R,layoutId:`TRW3R3j_v`,optimized:!0,children:[_(S.div,{className:`framer-nrh4jd`,layoutDependency:R,layoutId:`aCtBBaB0U`,children:[_(S.div,{className:`framer-1ow7cr`,layoutDependency:R,layoutId:`MOxoWJcnu`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235)))`},children:`MICHAEL DEEN`})}),className:`framer-2arpbt`,"data-framer-name":`Name`,fonts:[`Inter`],layoutDependency:R,layoutId:`R4f_2dw1O`,style:{"--extracted-r6o4lv":`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235))`,"--framer-paragraph-spacing":`0px`},text:g,verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-1vhqizg`,"data-styles-preset":`kP1rreWNu`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164)))`},children:`CTO @ Prizmas`})}),className:`framer-zwjy8m`,"data-framer-name":`Position`,fonts:[`Inter`],layoutDependency:R,layoutId:`wsPmPLj0Z`,style:{"--extracted-r6o4lv":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164))`,"--framer-paragraph-spacing":`0px`},text:v,verticalAlignment:`top`,withExternalLayout:!0})]}),ie()&&p(W,{background:{alt:``,fit:`fit`,intrinsicHeight:50,intrinsicWidth:263,loading:F((l?.y||0)+24+0+0+(0+(Math.max(0,((l?.height||530)-48-0)/1)*1-0-219.6)/1*0)+10.6),pixelHeight:50,pixelWidth:263,sizes:`137px`,...am(y),positionX:`center`,positionY:`center`},className:`framer-t4y0cy`,"data-framer-name":`Logo`,layoutDependency:R,layoutId:`X9juQSft1`,style:{filter:`grayscale(1)`,WebkitFilter:`grayscale(1)`}})]}),_(S.div,{className:`framer-95d4ap`,layoutDependency:R,layoutId:`cpv6Xc4gc`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235)))`},children:`RAISED $2.6M IN FUNDING IN 2026`})}),className:`framer-1vy5wfu`,"data-framer-name":`Text`,fonts:[`Inter`],layoutDependency:R,layoutId:`APsNVA6LB`,style:{"--extracted-r6o4lv":`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235))`,"--framer-paragraph-spacing":`0px`},text:x,verticalAlignment:`top`,withExternalLayout:!0}),p(S.div,{className:`framer-1gee2aa`,"data-border":!0,layoutDependency:R,layoutId:`jPMcwpD6x`,style:{"--border-bottom-width":`1px`,"--border-color":`var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgb(239, 235, 227))`,"--border-left-width":`1px`,"--border-right-width":`1px`,"--border-style":`solid`,"--border-top-width":`1px`}}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.h4,{className:`framer-styles-preset-1tmtwu8`,"data-styles-preset":`DrC9SQV_P`,dir:`auto`,children:`"Llegás y está todo listo: pileta impecable, salón acondicionado y el predio entero a disposición."`})}),className:`framer-6xxc9p`,"data-framer-name":`Text`,fonts:[`Inter`],layoutDependency:R,layoutId:`V_wh5__2U`,style:{"--framer-paragraph-spacing":`0px`},text:B,verticalAlignment:`top`,withExternalLayout:!0})]})]}),p(W,{background:{alt:``,fit:`fill`,loading:F((l?.y||0)+-19),pixelHeight:2124,pixelWidth:2316,sizes:`calc(${l?.width||`100vw`} + 160px)`,...am(h)},className:`framer-qpb197`,"data-framer-name":`Image`,layoutDependency:R,layoutId:`WBSPCS5Kk`,style:{filter:`grayscale(0)`,WebkitFilter:`grayscale(0)`},variants:{"nVP3g0kIQ-hover":{filter:`grayscale(0)`,WebkitFilter:`grayscale(0)`},nVP3g0kIQ:{filter:`grayscale(1)`,WebkitFilter:`grayscale(1)`},OXuPQInsk:{filter:`grayscale(1)`,WebkitFilter:`grayscale(1)`}},...Xp({nVP3g0kIQ:{background:{alt:``,fit:`fill`,loading:F((l?.y||0)+-19),pixelHeight:2124,pixelWidth:2316,sizes:`calc(${l?.width||`100vw`} + 465px)`,...am(h)}},OXuPQInsk:{background:{alt:``,fit:`fill`,loading:F((l?.y||0)+-169),pixelHeight:2124,pixelWidth:2316,sizes:`calc(${l?.width||`100vw`} + 62px)`,...am(h)}},RDyYonAhp:{background:{alt:``,fit:`fill`,loading:F((l?.y||0)+-20),pixelHeight:2124,pixelWidth:2316,sizes:`calc(${l?.width||`100vw`} + 263px)`,...am(h)}}},D,j)})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-l4nNe.framer-1do0e6q, .framer-l4nNe .framer-1do0e6q { display: block; }`,`.framer-l4nNe.framer-77bf0g { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 530px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 24px; position: relative; width: 640px; }`,`.framer-l4nNe .framer-1mksk19 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,`.framer-l4nNe .framer-nrh4jd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,`.framer-l4nNe .framer-1ow7cr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-l4nNe .framer-2arpbt, .framer-l4nNe .framer-zwjy8m { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-l4nNe .framer-t4y0cy { aspect-ratio: 4.617021276595745 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 30px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 137px; will-change: var(--framer-will-change-filter-override, filter); }`,`.framer-l4nNe .framer-95d4ap { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-l4nNe .framer-1vy5wfu { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-l4nNe .framer-1gee2aa { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 120%; }`,`.framer-l4nNe .framer-6xxc9p { --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-l4nNe .framer-qpb197 { aspect-ratio: 1.0922190201729107 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 732px); left: -80px; position: absolute; right: -80px; top: -19px; z-index: 1; }`,`.framer-l4nNe.framer-v-16a0nwj.framer-77bf0g { width: 160px; }`,`.framer-l4nNe.framer-v-16a0nwj .framer-qpb197 { height: var(--framer-aspect-ratio-supported, 572px); left: -232px; right: -233px; }`,`.framer-l4nNe.framer-v-k9haed.framer-77bf0g { padding: 24px 20px 24px 20px; width: 680px; }`,`.framer-l4nNe.framer-v-k9haed .framer-nrh4jd { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: flex-start; }`,`.framer-l4nNe.framer-v-k9haed .framer-1ow7cr { gap: 4px; order: 1; }`,`.framer-l4nNe.framer-v-k9haed .framer-qpb197 { height: var(--framer-aspect-ratio-supported, 863px); left: -131px; right: -132px; top: -20px; }`,`.framer-l4nNe.framer-v-1nn3vcs.framer-77bf0g { height: 100px; padding: 24px 20px 24px 20px; width: 680px; }`,`.framer-l4nNe.framer-v-1nn3vcs .framer-qpb197 { height: var(--framer-aspect-ratio-supported, 679px); left: -30px; right: -32px; top: -169px; }`,...Me,...Ne,...ut,...ot,`.framer-l4nNe[data-border="true"]::after, .framer-l4nNe [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-l4nNe`),pm.displayName=`Testimonial`,pm.defaultProps={height:530,width:640},R(pm,{variant:{options:[`C9bdsIrcp`,`nVP3g0kIQ`,`RDyYonAhp`,`OXuPQInsk`],optionTitles:[`Desktop Opened`,`Desktop Closed`,`Tablet Opened`,`Tablet Closed`],title:`Variant`,type:q.Enum},CcdDg4SVQ:{__defaultAssetReference:`data:framer/asset-reference,j5h7pqI7Bz2djjwib8IkiOGqgCM.png?width=2316&height=2124`,__vekterDefault:{alt:``,assetReference:`data:framer/asset-reference,j5h7pqI7Bz2djjwib8IkiOGqgCM.png?width=2316&height=2124`},title:`Image`,type:q.ResponsiveImage},Gr3P7e7fE:{defaultValue:`MICHAEL DEEN`,displayTextArea:!1,title:`Name`,type:q.String},onGr3P7e7fEChange:{changes:`Gr3P7e7fE`,type:q.ChangeHandler},QiY1NDIju:{defaultValue:`CTO @ Prizmas`,displayTextArea:!1,title:`Position`,type:q.String},onQiY1NDIjuChange:{changes:`QiY1NDIju`,type:q.ChangeHandler},frytV_myc:{__defaultAssetReference:`data:framer/asset-reference,U3J3LorbS00fF3EUr959umL0V6o.png?originalFilename=Frame-6.png&width=263&height=50`,__vekterDefault:{alt:``,assetReference:`data:framer/asset-reference,U3J3LorbS00fF3EUr959umL0V6o.png?originalFilename=Frame-6.png&width=263&height=50`},title:`Logo`,type:q.ResponsiveImage},Vkbq43heQ:{defaultValue:`RAISED $2.6M IN FUNDING IN 2026`,displayTextArea:!1,title:`Results`,type:q.String},onVkbq43heQChange:{changes:`Vkbq43heQ`,type:q.ChangeHandler},xxFmiUh6K:{defaultValue:`Llegás y está todo listo: pileta impecable, salón acondicionado y el predio entero a disposición.`,displayTextArea:!1,title:`Review Text`,type:q.String},onxxFmiUh6KChange:{changes:`xxFmiUh6K`,type:q.ChangeHandler},ZYg3kQEpu:{title:`Click`,type:q.EventHandler}}),I(pm,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...N(Re),...N(ke),...N(dt),...N(st)],{supportsExplicitInterCodegen:!0})}));function hm(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var gm,_m,vm,ym,bm,xm,Sm,Cm,wm,Tm,Em,Dm,Om,km=e((()=>{v(),te(),E(),n(),mm(),gm=B(pm),_m=[`tbKz4usUS`,`Ez4Y8x0QS`,`KGCFJC1cC`,`rnz4hlgwT`,`wCeuNENHI`,`An75xWCjA`,`AGLeaxuHE`,`EM8STj06d`,`Ir9tLx94Z`,`XUlOZjmSL`],vm=`framer-KdOp2`,ym={AGLeaxuHE:`framer-v-9vwyer`,An75xWCjA:`framer-v-12i02uz`,EM8STj06d:`framer-v-686tgh`,Ez4Y8x0QS:`framer-v-189tmeb`,Ir9tLx94Z:`framer-v-19l3ueg`,KGCFJC1cC:`framer-v-cf2ar2`,rnz4hlgwT:`framer-v-19k1p26`,tbKz4usUS:`framer-v-5luxzx`,wCeuNENHI:`framer-v-1n0nabl`,XUlOZjmSL:`framer-v-fpkk22`},bm={delay:0,duration:.4,ease:[.12,.23,.5,1],type:`tween`},xm=(e,t)=>{if(!(!e||typeof e!=`object`))return{...e,alt:t}},Sm=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Cm=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},wm={"Desktop 01":`tbKz4usUS`,"Desktop 02":`Ez4Y8x0QS`,"Desktop 03":`KGCFJC1cC`,"Desktop 04":`rnz4hlgwT`,"Desktop 05":`wCeuNENHI`,"Responsive 01":`An75xWCjA`,"Responsive 02":`AGLeaxuHE`,"Responsive 03":`EM8STj06d`,"Responsive 04":`Ir9tLx94Z`,"Responsive 05":`XUlOZjmSL`},Tm=S.create(c),Em=({height:e,id:t,width:n,...r})=>({...r,variant:wm[r.variant]??r.variant??`tbKz4usUS`}),Dm=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Om=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se(),c=ce(),{style:l,className:u,layoutId:d,variant:f,...m}=Em(e),{baseVariant:h,classNames:g,clearLoadingGesture:v,gestureHandlers:y,gestureVariant:x,isLoading:C,setGestureState:w,setVariant:E,variants:D}=fe({cycleOrder:_m,defaultVariant:`tbKz4usUS`,ref:r,variant:f,variantClassNames:ym}),O=Dm(e,D),{activeVariantCallback:k,delay:A}=pe(h),j=k(async(...e)=>{E(`tbKz4usUS`)}),M=k(async(...e)=>{E(`An75xWCjA`)}),N=k(async(...e)=>{E(`Ez4Y8x0QS`)}),F=k(async(...e)=>{E(`AGLeaxuHE`)}),I=k(async(...e)=>{E(`KGCFJC1cC`)}),L=k(async(...e)=>{E(`EM8STj06d`)}),R=k(async(...e)=>{E(`rnz4hlgwT`)}),ee=k(async(...e)=>{E(`Ir9tLx94Z`)}),z=k(async(...e)=>{E(`wCeuNENHI`)}),te=k(async(...e)=>{E(`XUlOZjmSL`)}),ne=P(vm);return p(T,{id:d??i,children:p(Tm,{animate:D,initial:!1,children:p(Cm,{value:bm,children:_(S.div,{...m,...y,className:P(ne,`framer-5luxzx`,u,g),"data-framer-name":`Desktop 01`,layoutDependency:O,layoutId:`tbKz4usUS`,ref:r,style:{...l},...hm({AGLeaxuHE:{"data-framer-name":`Responsive 02`},An75xWCjA:{"data-framer-name":`Responsive 01`},EM8STj06d:{"data-framer-name":`Responsive 03`},Ez4Y8x0QS:{"data-framer-name":`Desktop 02`},Ir9tLx94Z:{"data-framer-name":`Responsive 04`},KGCFJC1cC:{"data-framer-name":`Desktop 03`},rnz4hlgwT:{"data-framer-name":`Desktop 04`},wCeuNENHI:{"data-framer-name":`Desktop 05`},XUlOZjmSL:{"data-framer-name":`Responsive 05`}},h,x),children:[p(G,{height:530,y:(c?.y||0)+(0+((c?.height||530)-0-530)/2),...hm({AGLeaxuHE:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+0+0)},An75xWCjA:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+0+0)},EM8STj06d:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+0+0)},Ir9tLx94Z:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+0+0)},XUlOZjmSL:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+0+0)}},h,x),children:p(de,{className:`framer-16fzsl9-container`,layoutDependency:O,layoutId:`rZVtoFNRt-container`,nodeId:`rZVtoFNRt`,rendersWithMotion:!0,scopeId:`WwrH2bd0n`,children:p(pm,{CcdDg4SVQ:xm({pixelHeight:2400,pixelWidth:2400,src:`/assets/framerusercontent.com/images/fdORnkgdTrr4PVr5tPMpaUT6wI__45a0387c2b.png`,srcSet:`/assets/framerusercontent.com/images/fdORnkgdTrr4PVr5tPMpaUT6wI__668935bb2a.png 512w,/assets/framerusercontent.com/images/fdORnkgdTrr4PVr5tPMpaUT6wI__108614bc8e.png 1024w,/assets/framerusercontent.com/images/fdORnkgdTrr4PVr5tPMpaUT6wI__617f515770.png 2048w,/assets/framerusercontent.com/images/fdORnkgdTrr4PVr5tPMpaUT6wI__45a0387c2b.png 2400w`},``),frytV_myc:xm({pixelHeight:74,pixelWidth:400,src:`/assets/framerusercontent.com/images/SEQNuGQeqVrI7gzxUSwiiWKD8__7f40f0da05.png`},``),Gr3P7e7fE:`TYLER ASHFORD`,height:`100%`,id:`rZVtoFNRt`,layoutId:`rZVtoFNRt`,QiY1NDIju:`HOMEOWNER`,style:{height:`100%`,width:`100%`},variant:Sm(`C9bdsIrcp`),Vkbq43heQ:`ELM GROVE RESIDENCE`,width:`100%`,xxFmiUh6K:`Predio cerrado y exclusivo: mientras está tu grupo, no hay ningún otro evento.`,ZYg3kQEpu:j,...hm({AGLeaxuHE:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:M},An75xWCjA:{variant:Sm(`RDyYonAhp`),ZYg3kQEpu:void 0},EM8STj06d:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:M},Ez4Y8x0QS:{style:{height:`100%`},variant:Sm(`nVP3g0kIQ`)},Ir9tLx94Z:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:M},KGCFJC1cC:{style:{height:`100%`},variant:Sm(`nVP3g0kIQ`)},rnz4hlgwT:{style:{height:`100%`},variant:Sm(`nVP3g0kIQ`)},wCeuNENHI:{style:{height:`100%`},variant:Sm(`nVP3g0kIQ`)},XUlOZjmSL:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:M}},h,x)})})}),p(G,{height:530,y:(c?.y||0)+(0+((c?.height||530)-0-530)/2),...hm({AGLeaxuHE:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+530+10)},An75xWCjA:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+530+10)},EM8STj06d:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+530+10)},Ir9tLx94Z:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+530+10)},XUlOZjmSL:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+530+10)}},h,x),children:p(de,{className:`framer-1cykvu-container`,layoutDependency:O,layoutId:`UB70cJHxX-container`,nodeId:`UB70cJHxX`,rendersWithMotion:!0,scopeId:`WwrH2bd0n`,children:p(pm,{CcdDg4SVQ:xm({pixelHeight:2400,pixelWidth:2400,src:`/assets/framerusercontent.com/images/2aREOjBLZVwIVp8mjIq88WEeFG0__45a0387c2b.png`,srcSet:`/assets/framerusercontent.com/images/2aREOjBLZVwIVp8mjIq88WEeFG0__668935bb2a.png 512w,/assets/framerusercontent.com/images/2aREOjBLZVwIVp8mjIq88WEeFG0__108614bc8e.png 1024w,/assets/framerusercontent.com/images/2aREOjBLZVwIVp8mjIq88WEeFG0__617f515770.png 2048w,/assets/framerusercontent.com/images/2aREOjBLZVwIVp8mjIq88WEeFG0__45a0387c2b.png 2400w`},``),frytV_myc:xm({pixelHeight:69,pixelWidth:400,src:`/assets/framerusercontent.com/images/iO7WQr4hwC4nUk5sswFhaCI5E__cb6ec19663.png`},``),Gr3P7e7fE:`DAVID ROMANO`,height:`100%`,id:`UB70cJHxX`,layoutId:`UB70cJHxX`,QiY1NDIju:`RESTAURANT OWNER`,style:{height:`100%`},variant:Sm(`nVP3g0kIQ`),Vkbq43heQ:`ALTO DINING CONCEPT`,width:`100%`,xxFmiUh6K:`Salón climatizado con estufa a leña Lepen y mesas para más de 25 comensales.`,ZYg3kQEpu:N,...hm({AGLeaxuHE:{style:{height:`100%`,width:`100%`},variant:Sm(`RDyYonAhp`),ZYg3kQEpu:void 0},An75xWCjA:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:F},EM8STj06d:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:F},Ez4Y8x0QS:{style:{height:`100%`,width:`100%`},variant:Sm(`C9bdsIrcp`)},Ir9tLx94Z:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:F},XUlOZjmSL:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:F}},h,x)})})}),p(G,{height:530,y:(c?.y||0)+(0+((c?.height||530)-0-530)/2),...hm({AGLeaxuHE:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1060+20)},An75xWCjA:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1060+20)},EM8STj06d:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1060+20)},Ir9tLx94Z:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1060+20)},XUlOZjmSL:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1060+20)}},h,x),children:p(de,{className:`framer-pg2cic-container`,layoutDependency:O,layoutId:`WBQM9AVFs-container`,nodeId:`WBQM9AVFs`,rendersWithMotion:!0,scopeId:`WwrH2bd0n`,children:p(pm,{CcdDg4SVQ:xm({pixelHeight:2400,pixelWidth:2400,src:`/assets/framerusercontent.com/images/ma3SkKwbnJSYT5zrIsvpOL0R2g__45a0387c2b.png`,srcSet:`/assets/framerusercontent.com/images/ma3SkKwbnJSYT5zrIsvpOL0R2g__668935bb2a.png 512w,/assets/framerusercontent.com/images/ma3SkKwbnJSYT5zrIsvpOL0R2g__108614bc8e.png 1024w,/assets/framerusercontent.com/images/ma3SkKwbnJSYT5zrIsvpOL0R2g__617f515770.png 2048w,/assets/framerusercontent.com/images/ma3SkKwbnJSYT5zrIsvpOL0R2g__45a0387c2b.png 2400w`},``),frytV_myc:xm({pixelHeight:66,pixelWidth:400,src:`/assets/framerusercontent.com/images/cjWt2J5ACwQezjesg4q3uX5Gv0__111f932482.png`},``),Gr3P7e7fE:`QUINTA DODÓ`,height:`100%`,id:`WBQM9AVFs`,layoutId:`WBQM9AVFs`,QiY1NDIju:`HOSPEDAJE`,style:{height:`100%`},variant:Sm(`nVP3g0kIQ`),Vkbq43heQ:`DORMITORIOS`,width:`100%`,xxFmiUh6K:`Dos habitaciones climatizadas, sommier matrimonial y tres camas individuales.`,ZYg3kQEpu:I,...hm({AGLeaxuHE:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:L},An75xWCjA:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:L},EM8STj06d:{style:{height:`100%`,width:`100%`},variant:Sm(`RDyYonAhp`),ZYg3kQEpu:void 0},Ir9tLx94Z:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:L},KGCFJC1cC:{style:{height:`100%`,width:`100%`},variant:Sm(`C9bdsIrcp`)},XUlOZjmSL:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:L}},h,x)})})}),p(G,{height:530,y:(c?.y||0)+(0+((c?.height||530)-0-530)/2),...hm({AGLeaxuHE:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1590+30)},An75xWCjA:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1590+30)},EM8STj06d:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1590+30)},Ir9tLx94Z:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1590+30)},XUlOZjmSL:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+1590+30)}},h,x),children:p(de,{className:`framer-1r77sy4-container`,layoutDependency:O,layoutId:`tAGe5g0x4-container`,nodeId:`tAGe5g0x4`,rendersWithMotion:!0,scopeId:`WwrH2bd0n`,children:p(pm,{CcdDg4SVQ:xm({pixelHeight:2400,pixelWidth:2400,src:`/assets/framerusercontent.com/images/9RrpxBbmkBJLxydwSFDo3E5arYo__45a0387c2b.png`,srcSet:`/assets/framerusercontent.com/images/9RrpxBbmkBJLxydwSFDo3E5arYo__668935bb2a.png 512w,/assets/framerusercontent.com/images/9RrpxBbmkBJLxydwSFDo3E5arYo__108614bc8e.png 1024w,/assets/framerusercontent.com/images/9RrpxBbmkBJLxydwSFDo3E5arYo__617f515770.png 2048w,/assets/framerusercontent.com/images/9RrpxBbmkBJLxydwSFDo3E5arYo__45a0387c2b.png 2400w`},``),frytV_myc:xm({pixelHeight:55,pixelWidth:400,src:`/assets/framerusercontent.com/images/L0g4WAhewI3rECpdCEQ3HQnuII__b137786cd2.png`},``),Gr3P7e7fE:`DEREK OKONKWO`,height:`100%`,id:`tAGe5g0x4`,layoutId:`tAGe5g0x4`,QiY1NDIju:`DIRECTOR, ARCH STUDIO`,style:{height:`100%`},variant:Sm(`nVP3g0kIQ`),Vkbq43heQ:`COPENHAGEN WORKPLACE`,width:`100%`,xxFmiUh6K:`Cocina completa con horno, heladera vertical con freezer, un freezer aparte y vajilla.`,ZYg3kQEpu:R,...hm({AGLeaxuHE:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:ee},An75xWCjA:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:ee},EM8STj06d:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:ee},Ir9tLx94Z:{style:{height:`100%`,width:`100%`},variant:Sm(`RDyYonAhp`),ZYg3kQEpu:void 0},rnz4hlgwT:{style:{height:`100%`,width:`100%`},variant:Sm(`C9bdsIrcp`)},XUlOZjmSL:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:ee}},h,x)})})}),p(G,{height:530,y:(c?.y||0)+(0+((c?.height||530)-0-530)/2),...hm({AGLeaxuHE:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+2120+40)},An75xWCjA:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+2120+40)},EM8STj06d:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+2120+40)},Ir9tLx94Z:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+2120+40)},XUlOZjmSL:{width:c?.width||`100vw`,y:(c?.y||0)+0+(((c?.height||970)-0-2690)/2+2120+40)}},h,x),children:p(de,{className:`framer-191u63b-container`,layoutDependency:O,layoutId:`vFQLYbBEJ-container`,nodeId:`vFQLYbBEJ`,rendersWithMotion:!0,scopeId:`WwrH2bd0n`,children:p(pm,{CcdDg4SVQ:xm({pixelHeight:2400,pixelWidth:2400,src:`/assets/framerusercontent.com/images/LcN0pM8MOgr5nvsK1qtbX0ZNKkE__45a0387c2b.png`,srcSet:`/assets/framerusercontent.com/images/LcN0pM8MOgr5nvsK1qtbX0ZNKkE__668935bb2a.png 512w,/assets/framerusercontent.com/images/LcN0pM8MOgr5nvsK1qtbX0ZNKkE__108614bc8e.png 1024w,/assets/framerusercontent.com/images/LcN0pM8MOgr5nvsK1qtbX0ZNKkE__617f515770.png 2048w,/assets/framerusercontent.com/images/LcN0pM8MOgr5nvsK1qtbX0ZNKkE__45a0387c2b.png 2400w`},``),frytV_myc:xm({pixelHeight:77,pixelWidth:400,src:`/assets/framerusercontent.com/images/hKqKxmhYjhYEp3SqTHwwr9PY0__8bd1c78559.png`},``),Gr3P7e7fE:`JAKE TANAKA`,height:`100%`,id:`vFQLYbBEJ`,layoutId:`vFQLYbBEJ`,QiY1NDIju:`CHEF & CO-OWNER`,style:{height:`100%`},variant:Sm(`nVP3g0kIQ`),Vkbq43heQ:`NOMA KITCHEN TOKYO`,width:`100%`,xxFmiUh6K:`Cancha con arcos, ping-pong, un caballo y granja: los chicos no se quieren ir.`,ZYg3kQEpu:z,...hm({AGLeaxuHE:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:te},An75xWCjA:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:te},EM8STj06d:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:te},Ir9tLx94Z:{style:{width:`100%`},variant:Sm(`OXuPQInsk`),ZYg3kQEpu:te},wCeuNENHI:{style:{height:`100%`,width:`100%`},variant:Sm(`C9bdsIrcp`)},XUlOZjmSL:{style:{height:`100%`,width:`100%`},variant:Sm(`RDyYonAhp`),ZYg3kQEpu:void 0}},h,x)})})})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-KdOp2.framer-1o23nfu, .framer-KdOp2 .framer-1o23nfu { display: block; }`,`.framer-KdOp2.framer-5luxzx { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1318px; }`,`.framer-KdOp2 .framer-16fzsl9-container { flex: 1 0 0px; height: 530px; position: relative; width: 1px; }`,`.framer-KdOp2 .framer-1cykvu-container, .framer-KdOp2 .framer-pg2cic-container, .framer-KdOp2 .framer-1r77sy4-container, .framer-KdOp2 .framer-191u63b-container { flex: none; height: 530px; position: relative; width: auto; }`,`.framer-KdOp2.framer-v-189tmeb .framer-16fzsl9-container, .framer-KdOp2.framer-v-cf2ar2 .framer-16fzsl9-container, .framer-KdOp2.framer-v-19k1p26 .framer-16fzsl9-container, .framer-KdOp2.framer-v-1n0nabl .framer-16fzsl9-container { flex: none; width: auto; }`,`.framer-KdOp2.framer-v-189tmeb .framer-1cykvu-container, .framer-KdOp2.framer-v-cf2ar2 .framer-pg2cic-container, .framer-KdOp2.framer-v-19k1p26 .framer-1r77sy4-container, .framer-KdOp2.framer-v-1n0nabl .framer-191u63b-container { flex: 1 0 0px; width: 1px; }`,`.framer-KdOp2.framer-v-12i02uz.framer-5luxzx, .framer-KdOp2.framer-v-9vwyer.framer-5luxzx, .framer-KdOp2.framer-v-686tgh.framer-5luxzx, .framer-KdOp2.framer-v-19l3ueg.framer-5luxzx, .framer-KdOp2.framer-v-fpkk22.framer-5luxzx { flex-direction: column; width: 768px; }`,`.framer-KdOp2.framer-v-12i02uz .framer-16fzsl9-container { flex: none; width: 100%; }`,`.framer-KdOp2.framer-v-12i02uz .framer-1cykvu-container, .framer-KdOp2.framer-v-12i02uz .framer-pg2cic-container, .framer-KdOp2.framer-v-12i02uz .framer-1r77sy4-container, .framer-KdOp2.framer-v-12i02uz .framer-191u63b-container, .framer-KdOp2.framer-v-9vwyer .framer-pg2cic-container, .framer-KdOp2.framer-v-9vwyer .framer-1r77sy4-container, .framer-KdOp2.framer-v-9vwyer .framer-191u63b-container, .framer-KdOp2.framer-v-686tgh .framer-1cykvu-container, .framer-KdOp2.framer-v-686tgh .framer-1r77sy4-container, .framer-KdOp2.framer-v-686tgh .framer-191u63b-container, .framer-KdOp2.framer-v-19l3ueg .framer-1cykvu-container, .framer-KdOp2.framer-v-19l3ueg .framer-pg2cic-container, .framer-KdOp2.framer-v-19l3ueg .framer-191u63b-container, .framer-KdOp2.framer-v-fpkk22 .framer-1cykvu-container, .framer-KdOp2.framer-v-fpkk22 .framer-pg2cic-container, .framer-KdOp2.framer-v-fpkk22 .framer-1r77sy4-container { height: auto; width: 100%; }`,`.framer-KdOp2.framer-v-9vwyer .framer-16fzsl9-container, .framer-KdOp2.framer-v-686tgh .framer-16fzsl9-container, .framer-KdOp2.framer-v-19l3ueg .framer-16fzsl9-container, .framer-KdOp2.framer-v-fpkk22 .framer-16fzsl9-container { flex: none; height: auto; width: 100%; }`,`.framer-KdOp2.framer-v-9vwyer .framer-1cykvu-container, .framer-KdOp2.framer-v-686tgh .framer-pg2cic-container, .framer-KdOp2.framer-v-19l3ueg .framer-1r77sy4-container, .framer-KdOp2.framer-v-fpkk22 .framer-191u63b-container { width: 100%; }`],`framer-KdOp2`),Om.displayName=`Testimonial Cascading Slider`,Om.defaultProps={height:530,width:1318},R(Om,{variant:{options:[`tbKz4usUS`,`Ez4Y8x0QS`,`KGCFJC1cC`,`rnz4hlgwT`,`wCeuNENHI`,`An75xWCjA`,`AGLeaxuHE`,`EM8STj06d`,`Ir9tLx94Z`,`XUlOZjmSL`],optionTitles:[`Desktop 01`,`Desktop 02`,`Desktop 03`,`Desktop 04`,`Desktop 05`,`Responsive 01`,`Responsive 02`,`Responsive 03`,`Responsive 04`,`Responsive 05`],title:`Variant`,type:q.Enum}}),I(Om,[{explicitInter:!0,fonts:[]},...gm],{supportsExplicitInterCodegen:!0}),Om.loader={load:(e,t)=>(t.locale,Promise.allSettled([ne(pm,{},t)]))}}));function Am(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm=e((()=>{v(),te(),E(),n(),Fe(),Ue(),qe(),Ie(),jm=B(Ve),Mm=B(Je),Nm=L(S.div),Pm=ve(Ve),Fm=ve(Je),Im=[`jeM7O389h`,`e7jCmLncb`,`jQUxj19s0`],Lm=`framer-lBgzu`,Rm={e7jCmLncb:`framer-v-1tg1vpa`,jeM7O389h:`framer-v-5ymydm`,jQUxj19s0:`framer-v-1kq7wld`},zm={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:20},Bm={delay:.1,duration:.5,ease:[.12,.23,.5,1],type:`tween`},Vm={bounce:.2,delay:0,duration:.4,type:`spring`},Hm=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Um=({value:e,children:n})=>{let r=t(C),i=e??r.transition,a=g(()=>({...r,transition:i}),[JSON.stringify(i)]);return p(C.Provider,{value:a,children:n})},Wm={Desktop:`jeM7O389h`,Phone:`jQUxj19s0`,Tablet:`e7jCmLncb`},Gm=S.create(c),Km={"Dark Medium":`GU0m0pCxW`,"Dark Small":`Flkz_MeHp`,"Light Medium":`GTNUDt4Zb`,"Light Small":`svk5pCbXV`},qm={Dark:`oRMomUJVX`,Light:`wEyFkHYwL`},Jm=(e,t)=>{let[n,i]=r(e),[a,o]=r(e);return t?[e,t]:(e!==a&&(i(e),o(e)),[n,i])},Ym=({border:e,buttonStyle:t,buttonText:n,caption:r,captionVariant:i,heading:a,headingColor:o,height:s,id:c,link:l,text:u,width:d,...f})=>({...f,B2qWQM2Kn:r??f.B2qWQM2Kn??`OUR SERVICES`,Civ3FnzVk:e??f.Civ3FnzVk??{borderColor:`var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(239, 235, 227, 0.2)) /* {"name":"Stroke Light"} */`,borderStyle:`solid`,borderWidth:1},E1O3NBgQo:n??f.E1O3NBgQo??`VIEW ALL ARTICLES`,F9nJqTVzk:l??f.F9nJqTVzk,FAUEOSNK0:u??f.FAUEOSNK0??`Un predio entero para vos y tus invitados: pileta, salón, cancha y granja en un mismo lugar.`,fnv7tXH0e:qm[t]??t??f.fnv7tXH0e??`wEyFkHYwL`,koxy6GD8D:Km[i]??i??f.koxy6GD8D??`GTNUDt4Zb`,l3EvDYHSy:o??f.l3EvDYHSy??`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(255, 255, 255))`,rUvvcCQd7:a??f.rUvvcCQd7??`Confort integral en un entorno campestre único`,variant:Wm[f.variant]??f.variant??`jeM7O389h`}),Xm=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Zm=D(m(function(e,t){let n=s(null),r=t??n,i=b(),{activeLocale:a,setLocale:o}=se(),l=ce(),{style:u,className:d,layoutId:f,variant:m,koxy6GD8D:h,B2qWQM2Kn:g,onB2qWQM2KnChange:v,rUvvcCQd7:y,l3EvDYHSy:x,FAUEOSNK0:C,Civ3FnzVk:w,fnv7tXH0e:E,E1O3NBgQo:D,onE1O3NBgQoChange:O,F9nJqTVzk:k,...A}=Ym(e),[j,M]=Jm(g,v),[N,F]=Jm(D,O),{baseVariant:I,classNames:L,clearLoadingGesture:R,gestureHandlers:ee,gestureVariant:z,isLoading:te,setGestureState:ne,setVariant:re,variants:ie}=fe({cycleOrder:Im,defaultVariant:`jeM7O389h`,ref:r,variant:m,variantClassNames:Rm}),B=Xm(e,ie),ae=P(Lm,Ke,je);return p(T,{id:f??i,children:p(Gm,{animate:ie,initial:!1,children:p(Um,{value:Vm,children:_(Nm,{...A,...ee,__framer__animate:{transition:Bm},__framer__animateOnce:!0,__framer__enter:zm,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,className:P(ae,`framer-5ymydm`,d,L),"data-framer-name":`Desktop`,layoutDependency:B,layoutId:`jeM7O389h`,ref:r,style:{...u},...Am({e7jCmLncb:{"data-framer-name":`Tablet`},jQUxj19s0:{"data-framer-name":`Phone`}},I,z),children:[p(Um,{value:Vm,children:_(S.div,{className:`framer-18r7gzg`,layoutDependency:B,layoutId:`hx7zADnuJ`,children:[p(S.div,{className:`framer-1bhha9u`,layoutDependency:B,layoutId:`OeMmckChZ`,children:p(G,{height:14,y:(l?.y||0)+0+(((l?.height||327)-0-337)/2+0+0)+0+0+0,...Am({jQUxj19s0:{y:(l?.y||0)+0+(((l?.height||435)-0-359)/2+0+0)+0+0+0}},I,z),children:p(de,{className:`framer-1ubhany-container`,layoutDependency:B,layoutId:`f0wY9Gn86-container`,nodeId:`f0wY9Gn86`,rendersWithMotion:!0,scopeId:`wZkujO9lS`,children:p(Ve,{height:`100%`,id:`f0wY9Gn86`,layoutId:`f0wY9Gn86`,onSlFHHeousChange:M,SlFHHeous:j,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:Hm(h),width:`100%`})})})}),_(S.div,{className:`framer-1hfipi7`,layoutDependency:B,layoutId:`XrsHYCxPD`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.h2,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-1of0zx5, var(--variable-reference-l3EvDYHSy-wZkujO9lS))`},children:`Confort integral en un entorno campestre único`})}),className:`framer-15gd285`,fonts:[`Inter`],layoutDependency:B,layoutId:`qu5IxasHD`,style:{"--extracted-1of0zx5":`var(--variable-reference-l3EvDYHSy-wZkujO9lS)`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,"--variable-reference-l3EvDYHSy-wZkujO9lS":x},text:y,verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(S.p,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`var(--extracted-r6o4lv, var(--variable-reference-l3EvDYHSy-wZkujO9lS))`},children:`Un predio entero para vos y tus invitados: pileta, salón, cancha y granja en un mismo lugar.`})}),className:`framer-1c92hd9`,fonts:[`Inter`],layoutDependency:B,layoutId:`utFAgi5Ee`,style:{"--extracted-r6o4lv":`var(--variable-reference-l3EvDYHSy-wZkujO9lS)`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`,"--variable-reference-l3EvDYHSy-wZkujO9lS":x},text:C,verticalAlignment:`top`,withExternalLayout:!0}),p(G,{height:53,width:`240px`,y:(l?.y||0)+0+(((l?.height||327)-0-337)/2+0+0)+0+0+0+217,...Am({jQUxj19s0:{y:(l?.y||0)+0+(((l?.height||435)-0-359)/2+0+0)+0+38+0+201}},I,z),children:p(de,{className:`framer-tpjrbe-container`,layoutDependency:B,layoutId:`sqfA_FaQb-container`,nodeId:`sqfA_FaQb`,rendersWithMotion:!0,scopeId:`wZkujO9lS`,children:p(Je,{height:`100%`,id:`sqfA_FaQb`,layoutId:`sqfA_FaQb`,mraUIbOsu:k,onxPptMBCotChange:F,style:{width:`100%`},variant:Hm(E),width:`100%`,xPptMBCot:N})})})]})]})}),p(S.div,{className:`framer-as3t6v`,"data-border":!0,layoutDependency:B,layoutId:`n8UjdYlW_`,style:{"--border-bottom-width":(w?.borderBottomWidth??w?.borderWidth)+`px`,"--border-color":w?.borderColor,"--border-left-width":(w?.borderLeftWidth??w?.borderWidth)+`px`,"--border-right-width":(w?.borderRightWidth??w?.borderWidth)+`px`,"--border-style":w?.borderStyle,"--border-top-width":(w?.borderTopWidth??w?.borderWidth)+`px`}})]})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-lBgzu.framer-1oy3lp, .framer-lBgzu .framer-1oy3lp { display: block; }`,`.framer-lBgzu.framer-5ymydm { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 66px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1318px; }`,`.framer-lBgzu .framer-18r7gzg { display: grid; flex: none; gap: 24px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-lBgzu .framer-1bhha9u { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-lBgzu .framer-1ubhany-container { flex: none; height: auto; position: relative; width: auto; }`,`.framer-lBgzu .framer-1hfipi7 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; grid-column: span 3; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-lBgzu .framer-15gd285 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 800px; position: relative; width: 100%; }`,`.framer-lBgzu .framer-1c92hd9 { --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 620px; position: relative; width: 100%; }`,`.framer-lBgzu .framer-tpjrbe-container { flex: none; height: auto; position: relative; width: 240px; }`,`.framer-lBgzu .framer-as3t6v { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200%; z-index: 1; }`,`.framer-lBgzu.framer-v-1tg1vpa.framer-5ymydm { width: 768px; }`,`.framer-lBgzu.framer-v-1kq7wld.framer-5ymydm { width: 390px; }`,`.framer-lBgzu.framer-v-1kq7wld .framer-18r7gzg { grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,`.framer-lBgzu.framer-v-1kq7wld .framer-1hfipi7 { gap: 12px; grid-column: span 1; }`,...We,...Me,`.framer-lBgzu[data-border="true"]::after, .framer-lBgzu [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`],`framer-lBgzu`),Zm.displayName=`Section Header`,Zm.defaultProps={height:327,width:1318},R(Zm,{variant:{options:[`jeM7O389h`,`e7jCmLncb`,`jQUxj19s0`],optionTitles:[`Desktop`,`Tablet`,`Phone`],title:`Variant`,type:q.Enum},koxy6GD8D:Pm?.variant&&{...Pm.variant,defaultValue:`GTNUDt4Zb`,description:void 0,hidden:void 0,optional:void 0,title:`Caption Variant`},onkoxy6GD8DChange:{changes:`koxy6GD8D`,type:q.ChangeHandler},B2qWQM2Kn:{defaultValue:`OUR SERVICES`,displayTextArea:!1,title:`Caption`,type:q.String},onB2qWQM2KnChange:{changes:`B2qWQM2Kn`,type:q.ChangeHandler},rUvvcCQd7:{defaultValue:`Confort integral en un entorno campestre único`,displayTextArea:!1,title:`Heading`,type:q.String},onrUvvcCQd7Change:{changes:`rUvvcCQd7`,type:q.ChangeHandler},l3EvDYHSy:{defaultValue:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(255, 255, 255)) /* {"name":"Text Light 01"} */`,title:`Heading Color`,type:q.Color},FAUEOSNK0:{defaultValue:`Un predio entero para vos y tus invitados: pileta, salón, cancha y granja en un mismo lugar.`,displayTextArea:!1,title:`Text`,type:q.String},onFAUEOSNK0Change:{changes:`FAUEOSNK0`,type:q.ChangeHandler},Civ3FnzVk:{defaultValue:{borderColor:`var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(239, 235, 227, 0.2)) /* {"name":"Stroke Light"} */`,borderStyle:`solid`,borderWidth:1},title:`Border`,type:q.Border},fnv7tXH0e:Fm?.variant&&{...Fm.variant,defaultValue:`wEyFkHYwL`,description:void 0,hidden:void 0,optional:void 0,title:`Button Style`},onfnv7tXH0eChange:{changes:`fnv7tXH0e`,type:q.ChangeHandler},E1O3NBgQo:{defaultValue:`VIEW ALL ARTICLES`,displayTextArea:!1,title:`Button Text`,type:q.String},onE1O3NBgQoChange:{changes:`E1O3NBgQo`,type:q.ChangeHandler},F9nJqTVzk:{title:`Link`,type:q.Link}}),I(Zm,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...jm,...Mm,...N(Ge),...N(Re)],{supportsExplicitInterCodegen:!0}),Zm.loader={load:(e,t)=>(t.locale,Promise.allSettled([ne(Ve,{},t),ne(Je,{},t)]))}}));function $m(e){let{contentType:t=`image`,images:n=[{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`,alt:`Image 1`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg`,alt:`Image 2`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg`,alt:`Image 3`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg`,alt:`Image 4`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg`,alt:`Image 5`}}],videos:i=[{inputType:`url`,url:`data:,`,file:``,coverImage:{src:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`},loop:!0,muted:!0}],gap:c=8,imageRadius:l=8,dragSensitivity:u=2.5,hintText:f=`Drag to move and moree.....`,hintTextColor:m=`#FFFFFF`,hintBackgroundColor:h=`rgba(0, 0, 0, 0.6)`,hintFont:v,imageSizeMode:b=`fit`,imageWidth:S=300,imageHeight:C=300,videoSizeMode:w=`16:9`,videoWidth:T=300,videoHeight:E=169,showVideoControls:D=!0,playButtonColor:O=`#FFFFFF`,playButtonBackgroundColor:k=`rgba(0, 0, 0, 0.7)`,playButtonHoverBackgroundColor:A=`rgba(0, 0, 0, 0.9)`,playButtonSize:j=48,playButtonPosition:M=`center`,playButtonX:N=12,playButtonY:P=12}=e,F=.085,I=be(),L=s(null),R=s(null),ee=s(new Map);s(new Map);let z=s(null),te=s({x:0,y:0}),ne=s({x:0,y:0}),re=s({x:0,y:0}),ie=s([]),[B,ae]=r({x:0,y:0}),[oe,V]=r({x:0,y:0}),[se,H]=r({x:0,y:0}),U=s(!1),[ce,W]=r(!1),[le,G]=r(!1),[ue,de]=r(!1),[K,fe]=r(!0),pe=s(null),me=s(null),he=s({x:0,y:0}),ge=s({x:0,y:0}),q=s(),[_e,ve]=r(new Set),[ye,J]=r(new Set),[xe,Se]=r({width:0,height:0}),[Ce,Y]=r({width:0,height:0}),[we,Te]=r([]),[Ee,De]=r([]),[Oe,ke]=r(new Map),[Ae,je]=r(new Map),[Me,Ne]=r([]),[Pe,Fe]=r(new Map),[Ie,Le]=r(null),[Re,ze]=r(null),Be=s(null),Ve=t===`image`?n:i,He=Math.max(2,Math.ceil(Math.sqrt(Ve.length))),Ue=a(()=>{let e=T,t=E;if(w!==`custom`&&w!==`fit`)switch(w){case`16:9`:t=Math.round(T*9/16);break;case`9:16`:t=Math.round(T*16/9);break;case`4:3`:t=Math.round(T*3/4);break;case`1:1`:t=T;break}return{width:e,height:t}},[w,T,E]),We=g(()=>t===`image`?S:w===`fit`?T:Ue().width,[t,b,S,w,T,Ue]);o(()=>{if(!L.current)return;let e=()=>{if(!L.current)return;let{width:e,height:t}=L.current.getBoundingClientRect();Y({width:e,height:t})};if(e(),x!==void 0)return x.addEventListener(`resize`,e),()=>x.removeEventListener(`resize`,e)},[]),o(()=>{t!==`image`||b!==`fit`||n.forEach((e,t)=>{let n=e.image?.src;if(!n)return;let r=new Image;r.onload=()=>{d(()=>{ke(e=>{let n=new Map(e);return n.set(t,{width:r.naturalWidth,height:r.naturalHeight}),n})})},r.src=n})},[n,t,b]),o(()=>{if(Ve.length===0||We===0)return;let e=Ve.filter((e,n)=>t===`image`?!_e.has(n):!ye.has(n));if(e.length===0){Ne([]),Se({width:0,height:0}),t===`image`?Te([]):De([]);return}let n=Math.ceil(Ce.height/200)+8,r=He*n,i=[],a=[];for(let n=0;n<r;n++){let r=n%e.length;i.push(e[r]);let o=Ve.findIndex((n,i)=>t===`image`?!_e.has(i)&&n===e[r]:!ye.has(i)&&n===e[r]);a.push(o)}t===`image`?Te(i):De(i);let o=Array(He).fill(0),s=[];i.forEach((e,n)=>{let r=a[n],i=o.indexOf(Math.min(...o)),l=We,u=200;if(t===`image`)if(b===`fit`){let e=Oe.get(r);if(e){l=We;let t=e.height/e.width;u=Math.round(We*t)}else l=We,u=Math.round(We*.75)}else l=S,u=C;else if(w===`fit`){l=We;let e=Ae.get(r);if(e&&e.width>0&&e.height>0){let t=e.height/e.width;u=Math.round(We*t)}else u=Math.round(We*.5625)}else{let e=Ue();l=e.width,u=e.height}let d=i*(We+c),f=o[i];s.push({x:d,y:f,width:l,height:u,originalIndex:r}),o[i]+=u+c}),Ne(s);let l=Math.max(...o),u=He*We+(He-1)*c;Se({width:u+c,height:l+c})},[n,i,t,He,c,We,Ce,b,S,C,w,Oe,Ae,Ue,Ve.length,_e,ye]);let Ge=(e,t,n)=>{let r=t-e;return((n-e)%r+r)%r+e},Ke=a(e=>e.inputType===`url`&&e.url?e.url:e.image?.src||`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`,[]),qe=a(e=>e.inputType===`file`&&e.file?e.file:e.url||`data:,`,[]),Je=a(e=>{d(()=>{ve(t=>new Set(t).add(e))})},[]),Ye=a(e=>{d(()=>{J(t=>new Set(t).add(e))})},[]);o(()=>()=>{ee.current.forEach(e=>{e&&(e.pause(),e.removeAttribute(`src`),e.load())}),ee.current.clear(),z.current&&=(z.current.disconnect(),null)},[]),o(()=>{if(x===void 0||I)return;let e=()=>{let n=te.current,r=ne.current,i=r.x-n.x,a=r.y-n.y;if(Math.abs(i)>=.01||Math.abs(a)>=.01){let e={x:n.x+i*F,y:n.y+a*F};if(te.current=e,xe.width>0&&xe.height>0){let n={x:Ge(-xe.width,xe.width,e.x),y:Ge(-xe.height,xe.height,e.y)};re.current=n,ie.current.forEach((e,r)=>{if(!e)return;let i=t===`image`?5:3,a=r%i-Math.floor(i/2),o=Math.floor(r/i)-Math.floor(i/2),s=n.x+a*xe.width,c=n.y+o*xe.height;e.style.transform=`translate(calc(-50% + ${s}px), calc(-50% + ${c}px))`})}}q.current=requestAnimationFrame(e)};return ae(e=>{let t=oe.x-e.x,n=oe.y-e.y;if(Math.abs(t)<.01&&Math.abs(n)<.01)return oe;let r={x:e.x+t*F,y:e.y+n*F};return xe.width>0&&xe.height>0&&H({x:Ge(-xe.width,xe.width,r.x),y:Ge(-xe.height,xe.height,r.y)}),r}),q.current=requestAnimationFrame(e),()=>{q.current&&cancelAnimationFrame(q.current)}},[oe,F,xe,I,t]);let Xe=a(e=>{e.target.closest(`[data-content-item="true"]`)&&t===`video`||(U.current=!0,d(()=>W(!0)),d(()=>de(!1)),d(()=>fe(!1)),x!==void 0&&(me.current!=null&&(x.clearTimeout(me.current),me.current=null),pe.current!=null&&x.clearTimeout(pe.current),pe.current=x.setTimeout(()=>{d(()=>de(!0))},2e3)),he.current={x:e.clientX,y:e.clientY},ge.current={x:oe.x,y:oe.y})},[oe.x,oe.y,t]),Ze=a(e=>{if(!U.current)return;let t=(e.clientX-he.current.x)*u,n=(e.clientY-he.current.y)*u;d(()=>{V({x:ge.current.x+t,y:ge.current.y+n})}),ne.current={x:ge.current.x+t,y:ge.current.y+n}},[u]),Qe=a(()=>{U.current=!1,d(()=>W(!1)),d(()=>de(!1)),d(()=>fe(!1)),x!==void 0&&pe.current!=null&&(x.clearTimeout(pe.current),pe.current=null),x!==void 0&&(me.current!=null&&x.clearTimeout(me.current),me.current=x.setTimeout(()=>{d(()=>fe(!0))},2e3))},[]);o(()=>{if(x!==void 0)return x.addEventListener(`mousemove`,Ze),x.addEventListener(`mouseup`,Qe),()=>{x.removeEventListener(`mousemove`,Ze),x.removeEventListener(`mouseup`,Qe)}},[Ze,Qe]),o(()=>{if(x===void 0||typeof document>`u`)return;let e=document.body;if(e){if(ce){Be.current===null&&(Be.current=e.style.cursor||``),e.style.cursor=`grabbing`;return}Be.current!==null&&(e.style.cursor=Be.current,Be.current=null)}},[ce]),o(()=>()=>{x!==void 0&&me.current!=null&&(x.clearTimeout(me.current),me.current=null)},[]);let $e=a((e,t,n)=>{n.stopPropagation();let r=ee.current.get(e);if(r)if(r.paused){Re!==null&&Re!==t&&(ee.current.forEach(e=>{let t=Number(e?.dataset?.originalIndex);e&&t===Re&&!e.paused&&e.pause()}),d(()=>{Fe(e=>{let t=new Map(e),n=t.get(Re)||{playing:!1,volume:1,muted:!0};return t.set(Re,{...n,playing:!1}),t})}));let e=r.play();e!==void 0&&e.then(()=>{d(()=>{ze(t),Fe(e=>{let n=new Map(e),i=n.get(t)||{playing:!1,volume:1,muted:r.muted};return n.set(t,{...i,playing:!0,muted:r.muted,volume:r.volume}),n})})}).catch(e=>{console.error(`Error playing video:`,e)})}else ee.current.forEach(e=>{let n=Number(e?.dataset?.originalIndex);e&&n===t&&!e.paused&&e.pause()}),d(()=>{ze(e=>e===t?null:e),Fe(e=>{let n=new Map(e),i=n.get(t)||{playing:!1,volume:r.volume||1,muted:r.muted};return n.set(t,{...i,playing:!1,muted:r.muted,volume:r.volume}),n})})},[Re]),et=a((e,t,n)=>{n.stopPropagation(),$e(e,t,n)},[$e]);a((e,t,n,r)=>{r.stopPropagation(),ee.current.forEach(e=>{let r=Number(e?.dataset?.originalIndex);e&&r===t&&(e.volume=n,e.muted=n===0)}),d(()=>{Fe(e=>{let r=new Map(e),i=r.get(t)||{playing:!1,volume:1,muted:n===0};return r.set(t,{...i,volume:n,muted:n===0}),r})})},[]),a((e,t,n)=>{n.stopPropagation();let r=ee.current.get(e);if(!r)return;let i=!r.muted;ee.current.forEach(e=>{let n=Number(e?.dataset?.originalIndex);e&&n===t&&(e.muted=i)}),d(()=>{Fe(e=>{let n=new Map(e),r=n.get(t)||{playing:!1,volume:1,muted:i};return n.set(t,{...r,muted:i}),n})})},[]),a((e,t)=>{t.stopPropagation();let n=ee.current.get(e);n&&(typeof document>`u`||(document.fullscreenElement?document.exitFullscreen():n.requestFullscreen()))},[]),o(()=>{if(!(x===void 0||t!==`video`))return z.current&&z.current.disconnect(),z.current=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;if(t.tagName===`VIDEO`&&!e.isIntersecting&&!t.paused){t.pause();let e=t?.dataset?.originalIndex,n=e==null?NaN:Number(e);if(!Number.isFinite(n))return;d(()=>{Fe(e=>{let r=new Map(e),i=r.get(n)||{playing:!1,volume:t.volume,muted:t.muted};return r.set(n,{...i,playing:!1}),r}),ze(e=>e===n?null:e)})}})},{root:L.current,rootMargin:`100px`,threshold:.1}),ee.current.forEach(e=>{e&&z.current&&z.current.observe(e)}),()=>{z.current&&z.current.disconnect()}},[t,Ee.length]);let tt=a((e,t,n,r)=>{let i=ee.current.get(e);if(i&&i!==t&&(i.pause(),z.current&&z.current.unobserve(i)),t){ee.current.set(e,t),t.dataset.videoKey=e,z.current&&z.current.observe(t),typeof r==`number`&&Number.isFinite(r)&&(t.dataset.originalIndex=String(r),n&&d(()=>{Fe(e=>{if(e.has(r))return e;let t=new Map(e);return t.set(r,{playing:!1,volume:+!n.muted,muted:n.muted}),t})}));return}i&&(i.pause(),z.current&&z.current.unobserve(i)),ee.current.delete(e)},[]),nt={position:`absolute`,top:`50%`,left:`50%`,transform:`translate(calc(-50% + ${se.x}px), calc(-50% + ${se.y}px))`,willChange:`transform`,width:`${xe.width}px`,height:`${xe.height}px`},rt={position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`${xe.width}px`,height:`${xe.height}px`},it={position:`absolute`,objectFit:`cover`,userSelect:`none`,backgroundColor:`#1a1a1a`},at={display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:`8px`,color:`#999`,fontSize:`13px`,fontFamily:`system-ui, -apple-system, sans-serif`,textAlign:`center`,padding:`16px`};return _(`div`,{ref:L,style:{position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,cursor:ce?`grabbing`:`grab`,userSelect:`none`,backgroundColor:`transparent`},onMouseDown:I?void 0:Xe,onMouseEnter:()=>d(()=>G(!0)),onMouseLeave:()=>d(()=>G(!1)),children:[p(`div`,{style:{position:`absolute`,inset:0,zIndex:1e3,display:`flex`,alignItems:`center`,justifyContent:`center`,background:ce?`transparent`:`rgba(0, 0, 0, 0.25)`,pointerEvents:`none`,opacity:le&&!ce&&K||ce&&ue?1:0,transition:`opacity 0.25s ease`},"aria-hidden":`true`,children:p(`div`,{style:{padding:`10px 14px`,borderRadius:999,background:h,color:m,whiteSpace:`nowrap`,...v||{}},children:f})}),(I?[0]:t===`image`?[-2,-1,0,1,2]:[-1,0,1]).map(e=>(I?[0]:t===`image`?[-2,-1,0,1,2]:[-1,0,1]).map(n=>{let r=n===0&&e===0,i=t===`image`?5:3,a=(e+Math.floor(i/2))*i+(n+Math.floor(i/2));return p(`div`,{ref:e=>{e&&(ie.current[a]=e),r&&(R.current=e)},style:I?rt:{...nt,transform:`translate(calc(-50% + ${se.x+n*xe.width}px), calc(-50% + ${se.y+e*xe.height}px))`},children:t===`image`?we.map((t,r)=>{let i=Me[r];if(!i)return null;let a=`${n}-${e}-img-${r}`,o=_e.has(i.originalIndex);return p(`div`,{"data-content-item":`true`,style:{...it,left:`${i.x}px`,top:`${i.y}px`,width:`${i.width}px`,height:`${i.height}px`,cursor:ce?`grabbing`:`default`,pointerEvents:`auto`,borderRadius:`${l}px`,overflow:`hidden`},children:o?_(`div`,{style:at,children:[_(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[p(`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`}),p(`circle`,{cx:`8.5`,cy:`8.5`,r:`1.5`}),p(`path`,{d:`M21 15l-5-5L5 21`})]}),p(`span`,{children:`Image unavailable`})]}):p(`img`,{src:Ke(t),alt:t.image?.alt||`Image ${r+1}`,style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`${l}px`,pointerEvents:`none`},draggable:!1,loading:`lazy`,onError:()=>Je(i.originalIndex)})},a)}):Ee.map((t,r)=>{let i=Me[r];if(!i)return null;let a=`${n}-${e}-vid-${r}`,o=`${n}-${e}-${r}`,s=Ie===o,c=Pe.get(i.originalIndex),u=ye.has(i.originalIndex);return _(`div`,{"data-content-item":`true`,style:{...it,left:`${i.x}px`,top:`${i.y}px`,width:`${i.width}px`,height:`${i.height}px`,cursor:ce?`grabbing`:`pointer`,pointerEvents:`auto`,borderRadius:`${l}px`,overflow:`hidden`},onMouseEnter:()=>{D&&!u&&d(()=>Le(o))},onMouseLeave:()=>{D&&!u&&d(()=>Le(null))},children:[u?_(`div`,{style:at,children:[_(`svg`,{width:`40`,height:`40`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[p(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`2.18`,ry:`2.18`}),p(`path`,{d:`M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5`}),p(`circle`,{cx:`12`,cy:`12`,r:`2`})]}),p(`span`,{children:`Video unavailable`})]}):_(y,{children:[p(`video`,{ref:e=>tt(o,e,t,i.originalIndex),src:qe(t),style:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`${l}px`,pointerEvents:`none`,display:`block`},loop:t.loop,muted:t.muted,playsInline:!0,preload:`metadata`,onLoadedMetadata:e=>{let t=e.currentTarget,n=t.videoWidth,r=t.videoHeight;!n||!r||d(()=>{je(e=>{if(e.has(i.originalIndex))return e;let t=new Map(e);return t.set(i.originalIndex,{width:n,height:r}),t})})},onPlay:()=>{d(()=>{ze(i.originalIndex),Fe(e=>{let n=new Map(e),r=n.get(i.originalIndex)||{playing:!1,volume:1,muted:t.muted};return n.set(i.originalIndex,{...r,playing:!0}),n})})},onPause:()=>{d(()=>{ze(e=>e===i.originalIndex?null:e),Fe(e=>{let n=new Map(e),r=n.get(i.originalIndex)||{playing:!1,volume:1,muted:t.muted};return n.set(i.originalIndex,{...r,playing:!1}),n})})},onError:()=>Ye(i.originalIndex)}),!c?.playing&&t.coverImage?.src&&!s&&p(`img`,{src:t.coverImage.src,alt:t.coverImage.alt||`Video cover`,style:{position:`absolute`,top:0,left:0,width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`${l}px`,pointerEvents:`none`,zIndex:1},loading:`lazy`,onError:()=>Ye(i.originalIndex)})]}),D&&Ie===o&&p(`div`,{style:{position:`absolute`,bottom:0,left:0,right:0,background:`linear-gradient(to top, rgba(0,0,0,0.8), transparent)`,padding:`20px 12px 12px`,borderRadius:`0 0 ${l}px ${l}px`,display:`flex`,alignItems:`center`,gap:`8px`,pointerEvents:`none`,zIndex:5}}),D&&Ie===o&&p(`button`,{onClick:e=>et(o,i.originalIndex,e),onMouseDown:e=>e.stopPropagation(),style:{position:`absolute`,...M===`center`&&{top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`},...M===`bottom-left`&&{bottom:`12px`,left:`12px`},...M===`bottom-right`&&{bottom:`12px`,right:`12px`},...M===`top-left`&&{top:`12px`,left:`12px`},...M===`top-right`&&{top:`12px`,right:`12px`},...M===`custom`&&{top:`${P}px`,left:`${N}px`},width:`${j}px`,height:`${j}px`,borderRadius:`50%`,backgroundColor:k,border:`none`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,pointerEvents:`auto`,zIndex:100,transition:`opacity 0.2s ease, transform 0.2s ease, background-color 0.2s ease`,opacity:1},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=A,e.currentTarget.style.transform=M===`center`?`translate(-50%, -50%) scale(1.1)`:`scale(1.1)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=k,e.currentTarget.style.transform=M===`center`?`translate(-50%, -50%) scale(1)`:`scale(1)`},"aria-label":c?.playing?`Pause`:`Play`,children:c?.playing?p(`svg`,{width:j*.4,height:j*.4,viewBox:`0 0 24 24`,fill:O,children:p(`path`,{d:`M6 4h4v16H6V4zm8 0h4v16h-4V4z`})}):p(`svg`,{width:j*.45,height:j*.45,viewBox:`0 0 24 24`,fill:O,children:p(`path`,{d:`M8 5v14l11-7z`})})})]},a)})},`${n}-${e}`)}))]})}var eh=e((()=>{i(),v(),n(),te(),R($m,{contentType:{type:q.Enum,title:`Content Type`,description:`Choose images or videos.`,options:[`image`,`video`],optionTitles:[`Images`,`Videos`],defaultValue:`image`,displaySegmentedControl:!0},images:{type:q.Array,title:`Images`,description:`Add images to the grid.`,control:{type:q.Object,controls:{inputType:{type:q.Enum,title:`Input Type`,description:`Use a URL or upload.`,options:[`upload`,`url`],optionTitles:[`Upload`,`URL`],defaultValue:`upload`,displaySegmentedControl:!0},url:{type:q.String,title:`Image URL`,description:`Direct link to an image.`,defaultValue:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`,hidden:e=>e.inputType===`upload`},image:{type:q.ResponsiveImage,title:`Image`,description:`Pick an image.`,hidden:e=>e.inputType===`url`}}},defaultValue:[{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`,alt:`Image 1`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/aNsAT3jCvt4zglbWCUoFe33Q.jpg`,alt:`Image 2`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg`,alt:`Image 3`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg`,alt:`Image 4`}},{inputType:`upload`,url:``,image:{src:`/assets/framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg`,alt:`Image 5`}}],hidden:({contentType:e})=>e===`video`},videos:{type:q.Array,title:`Videos`,description:`Add videos to the grid.`,control:{type:q.Object,controls:{inputType:{type:q.Enum,title:`Input Type`,description:`Use a URL or upload a file.`,options:[`url`,`file`],optionTitles:[`URL`,`File`],defaultValue:`url`,displaySegmentedControl:!0},url:{type:q.String,title:`Video URL`,description:`Direct link to a video.`,defaultValue:`data:,`,hidden:e=>e.inputType===`file`},file:{type:q.File,title:`Video File`,description:`Upload an mp4/webm/mov.`,allowedFileTypes:[`mp4`,`webm`,`mov`],hidden:e=>e.inputType===`url`},coverImage:{type:q.ResponsiveImage,title:`Cover Image`,description:`Shown before play.`},loop:{type:q.Boolean,title:`Loop`,description:`Replay automatically.`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},muted:{type:q.Boolean,title:`Muted`,description:`Start with sound off.`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`}}},defaultValue:[{inputType:`url`,url:`data:,`,file:``,coverImage:{src:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`},loop:!0,muted:!0}],hidden:({contentType:e})=>e===`image`},imageSizeMode:{type:q.Enum,title:`Image Size`,description:`Fit keeps aspect ratio.`,options:[`fit`,`fixed`],optionTitles:[`Fit Content`,`Fixed`],defaultValue:`fit`,displaySegmentedControl:!0,hidden:({contentType:e})=>e===`video`},imageWidth:{type:q.Number,title:`Width`,description:`Image tile width.`,defaultValue:300,min:50,max:1e3,step:10,unit:`px`,hidden:({contentType:e})=>e===`video`},imageHeight:{type:q.Number,title:`Height`,description:`Used in Fixed mode.`,defaultValue:300,min:50,max:1e3,step:10,unit:`px`,hidden:({contentType:e,imageSizeMode:t})=>e===`video`||t===`fit`},videoSizeMode:{type:q.Enum,title:`Video Size`,description:`Pick an aspect ratio.`,options:[`fit`,`16:9`,`9:16`,`4:3`,`1:1`,`custom`],optionTitles:[`Fit Content`,`16:9`,`9:16`,`4:3`,`1:1`,`Custom`],defaultValue:`16:9`,hidden:({contentType:e})=>e===`image`},videoWidth:{type:q.Number,title:`Width`,description:`Video tile width.`,defaultValue:300,min:50,max:1e3,step:10,unit:`px`,hidden:({contentType:e})=>e===`image`},videoHeight:{type:q.Number,title:`Height`,description:`Only for Custom ratio.`,defaultValue:169,min:50,max:1e3,step:10,unit:`px`,hidden:({contentType:e,videoSizeMode:t})=>e===`image`||t!==`custom`},gap:{type:q.Number,title:`Gap`,description:`Space between tiles.`,defaultValue:8,min:0,max:50,step:1,unit:`px`},imageRadius:{type:q.Number,title:`Image Radius`,description:`Corner radius for images.`,defaultValue:8,min:0,max:50,step:1,unit:`px`},dragSensitivity:{type:q.Number,title:`Drag Sensitivity`,description:`Higher = faster drag.`,defaultValue:2.5,min:.1,max:5,step:.1},hintText:{type:q.String,title:`Hover Hint`,defaultValue:`Drag to move and moree.....`},hintTextColor:{type:q.Color,title:`Hint Text`,defaultValue:`#FFFFFF`},hintBackgroundColor:{type:q.Color,title:`Hint BG`,defaultValue:`rgba(0, 0, 0, 0.6)`},hintFont:{type:q.Font,title:`Hint Font`,controls:`extended`,defaultFontType:`sans-serif`,defaultValue:{fontSize:`12px`,variant:`Medium`,letterSpacing:`-0.01em`,lineHeight:`1em`}},showVideoControls:{type:q.Boolean,title:`Video Controls`,description:`Show controls on hover.`,defaultValue:!0,enabledTitle:`Show`,disabledTitle:`Hide`,hidden:({contentType:e})=>e===`image`},playButtonColor:{type:q.Color,title:`Button Color`,description:`Icon color.`,defaultValue:`#FFFFFF`,hidden:({contentType:e,showVideoControls:t})=>e===`image`||!t},playButtonBackgroundColor:{type:q.Color,title:`Button BG`,description:`Button background.`,defaultValue:`rgba(0, 0, 0, 0.7)`,hidden:({contentType:e,showVideoControls:t})=>e===`image`||!t},playButtonHoverBackgroundColor:{type:q.Color,title:`Button BG Hover`,description:`Background on hover.`,defaultValue:`rgba(0, 0, 0, 0.9)`,hidden:({contentType:e,showVideoControls:t})=>e===`image`||!t},playButtonSize:{type:q.Number,title:`Button Size`,description:`Diameter in pixels.`,defaultValue:48,min:24,max:100,step:2,unit:`px`,hidden:({contentType:e,showVideoControls:t})=>e===`image`||!t},playButtonPosition:{type:q.Enum,title:`Button Position`,description:`Preset or Custom.`,options:[`center`,`bottom-left`,`bottom-right`,`top-left`,`top-right`,`custom`],optionTitles:[`Center`,`Bottom Left`,`Bottom Right`,`Top Left`,`Top Right`,`Custom`],defaultValue:`center`,hidden:({contentType:e,showVideoControls:t})=>e===`image`||!t},playButtonX:{type:q.Number,title:`Button X`,description:`Left offset for Custom.`,defaultValue:12,min:-500,max:2e3,step:1,unit:`px`,hidden:({contentType:e,showVideoControls:t,playButtonPosition:n})=>e===`image`||!t||n!==`custom`},playButtonY:{type:q.Number,title:`Button Y`,description:`Top offset for Custom.`,defaultValue:12,min:-500,max:2e3,step:1,unit:`px`,hidden:({contentType:e,showVideoControls:t,playButtonPosition:n})=>e===`image`||!t||n!==`custom`}}),$m.displayName=`Draggable Gallery`})),th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,$,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg;e((()=>{v(),te(),E(),n(),f(),xt(),mn(),Cn(),qf(),Ee(),Dt(),At(),It(),qe(),pt(),Rt(),sp(),Bt(),Ie(),Ye(),bp(),Np(),Yp(),Ht(),km(),Qm(),St(),Xe(),eh(),Wt(),Kt(),rt(),at(),He(),Mt(),Jt(),$e(),Fe(),Ue(),lt(),we(),Qt(),th=B(Mp),nh=B(en),rh=L(V),ih=B(Ze),ah=L(K),oh=B(Je),sh=L(W),ch=B(Ve),lh=ee(V),uh=B(Kf),dh=B($m),fh=B(Zm),ph=B(Jp),mh=L(S.div),hh=B(Sn),gh=B(Y),_h=B(Qe),vh=B(Ct),yh=B(Vt),bh=B(Lt),xh=B(wt),Sh=B(kt),Ch=B(Om),wh=B(yp),Th=B(Ut),Eh=B(jt),Dh=B(op),Oh=B(mt),kh=B(zt),Ah={BHHxTWG2D:`(min-width: 768px) and (max-width: 1349.98px)`,kbVNPWMyK:`(max-width: 767.98px)`,nTka1ueo6:`(min-width: 1350px)`},jh=()=>typeof document<`u`,Mh=[],Nh=`framer-GkiUt`,Ph={BHHxTWG2D:`framer-v-1hq6fa4`,kbVNPWMyK:`framer-v-vr1zvv`,nTka1ueo6:`framer-v-19vk3yv`},Fh=(e,t,n)=>e&&t?`position`:n,Ih={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:-60,y:0},Lh={damping:12,delay:0,mass:1,stiffness:52,type:`spring`},Rh=(e,t)=>{if(!(!e||typeof e!=`object`))return{...e,alt:t}},zh={delay:0,duration:.4,ease:[.12,.23,.5,1],type:`tween`},Bh={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:.6,skewX:0,skewY:0,transition:zh,x:0,y:0},Vh=(e,t)=>`translate(-50%, -50%) ${t}`,Hh={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:zh,x:0,y:0},Uh={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:.6,skewX:0,skewY:0,x:0,y:0},Wh=()=>document.querySelector(`#template-overlay`)??document.querySelector(`#overlay`)??document.body,Gh=({children:e,blockDocumentScrolling:t,dismissWithEsc:n,enabled:r=!0})=>{let[i,a]=xe({blockDocumentScrolling:t,dismissWithEsc:r&&n});return e({hide:()=>a(!1),show:()=>a(!0),toggle:()=>a(!i),visible:r&&i})},Kh={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:20},qh={damping:12,delay:.3,mass:1,stiffness:72,type:`spring`},$=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Jh={damping:12,delay:.35,mass:1,stiffness:72,type:`spring`},Yh={damping:12,delay:.4,mass:1,stiffness:72,type:`spring`},Xh={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:.7,skewX:0,skewY:0,x:0,y:0},Zh={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:60,y:0},Qh={damping:12,delay:1,mass:1,stiffness:52,type:`spring`},$h={effect:{filter:`blur(10px)`,opacity:.001,rotate:0,scale:1,skewX:0,skewY:0,x:0,y:10},tokenization:`character`,transition:{bounce:0,delay:.05,duration:.4,type:`spring`},trigger:`onMount`,type:`appear`},eg={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:Qh,x:0,y:0},tg={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:60},ng={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0},rg={delay:.1,duration:.4,ease:[.12,.23,.5,1],type:`tween`},ig={delay:.1,duration:.5,ease:[.12,.23,.5,1],type:`tween`},ag=e=>typeof e==`number`&&e%2==1,og=(e,t)=>e?`bmSusK7eW`:`oWmxq92m1`,sg=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,cg=()=>({from:{alias:`IQvrLa9Ez`,data:it,type:`Collection`},limit:{type:`LiteralValue`,value:3},select:[{collection:`IQvrLa9Ez`,name:`CLf17_gof`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`jNghr8F0c`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`wj5tFSpKK`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`tfVxn_NQB`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`N7wAysbGw`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`Ai5pJFGr3`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`iaRLaEILA`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`id`,type:`Identifier`}]}),lg=()=>({from:{alias:`IQvrLa9Ez`,data:it,type:`Collection`},limit:{type:`LiteralValue`,value:4},select:[{collection:`IQvrLa9Ez`,name:`CLf17_gof`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`jNghr8F0c`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`wj5tFSpKK`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`tfVxn_NQB`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`N7wAysbGw`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`Ai5pJFGr3`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`iaRLaEILA`,type:`Identifier`},{collection:`IQvrLa9Ez`,name:`id`,type:`Identifier`}]}),ug=({query:e,pageSize:t,children:n})=>n(ie(e)),dg={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:100},fg={delay:.2,duration:.4,ease:[.12,.23,.5,1],type:`tween`},pg={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:60},mg={delay:.4,duration:.4,ease:[.12,.23,.5,1],type:`tween`},hg={delay:.6,duration:.4,ease:[.12,.23,.5,1],type:`tween`},gg={opacity:.05,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,x:0,y:0},_g={delay:0,duration:.4,ease:[.44,0,.56,1],type:`tween`},vg={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transformPerspective:1200,x:0,y:0},yg={delay:0,duration:.3,ease:[.44,0,.56,1],type:`tween`},bg={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:.96,skewX:0,skewY:0,x:0,y:20},xg=(e,t,n)=>{switch(e.state){case`success`:return t.success??n;case`pending`:return t.pending??n;case`error`:return t.error??n;case`incomplete`:return t.incomplete??n;default:return n}},Sg=(e,t={},n)=>{let r=`en-US`,i=t.locale||n||r,{useGrouping:a,notation:o,compactDisplay:s,style:c,currency:l,currencyDisplay:u,unit:d,unitDisplay:f,minimumFractionDigits:p,maximumFractionDigits:m,minimumIntegerDigits:h}=t,g={useGrouping:a,notation:o,compactDisplay:s,style:c,currency:l,currencyDisplay:u,unit:d,unitDisplay:f,minimumFractionDigits:p,maximumFractionDigits:m,minimumIntegerDigits:h},_=Number(e);try{return _.toLocaleString(i,g)}catch{try{return _.toLocaleString(r,g)}catch{return _.toLocaleString()}}},Cg=(e,t)=>typeof e==`string`&&typeof t==`string`?e+t:typeof e==`string`?e:typeof t==`string`?t:``,wg=()=>({from:{constraint:{left:{collection:`tutNwIF4d`,name:`RHenhwgxn`,type:`Identifier`},operator:`==`,right:{collection:`RHenhwgxn`,name:`id`,type:`Identifier`},type:`BinaryOperation`},left:{alias:`tutNwIF4d`,data:qt,type:`Collection`},right:{alias:`RHenhwgxn`,data:Gt,type:`Collection`},type:`LeftJoin`},limit:{type:`LiteralValue`,value:10},select:[{collection:`tutNwIF4d`,name:`XbITkRr0o`,type:`Identifier`},{alias:`RHenhwgxn.Nm9y_TLDH`,collection:`RHenhwgxn`,name:`Nm9y_TLDH`,type:`Identifier`},{collection:`tutNwIF4d`,name:`Z_6ZG5G1C`,type:`Identifier`},{collection:`tutNwIF4d`,name:`XBBGDydy1`,type:`Identifier`},{collection:`tutNwIF4d`,name:`ziuBo4Hia`,type:`Identifier`},{collection:`tutNwIF4d`,name:`Pg1bMBtx7`,type:`Identifier`},{collection:`tutNwIF4d`,name:`lLbwIsKXg`,type:`Identifier`},{collection:`tutNwIF4d`,name:`id`,type:`Identifier`}],where:{collection:`tutNwIF4d`,name:`FFvi49nWl`,type:`Identifier`}}),Tg=(e,t)=>e?`jXtAz8TbI`:`HHt2GCuad`,Eg=()=>({from:{constraint:{left:{collection:`O4UVjDZE9`,name:`RHenhwgxn`,type:`Identifier`},operator:`==`,right:{collection:`RHenhwgxn`,name:`id`,type:`Identifier`},type:`BinaryOperation`},left:{alias:`O4UVjDZE9`,data:qt,type:`Collection`},right:{alias:`RHenhwgxn`,data:Gt,type:`Collection`},type:`LeftJoin`},limit:{type:`LiteralValue`,value:2},select:[{collection:`O4UVjDZE9`,name:`XbITkRr0o`,type:`Identifier`},{alias:`RHenhwgxn.Nm9y_TLDH`,collection:`RHenhwgxn`,name:`Nm9y_TLDH`,type:`Identifier`},{collection:`O4UVjDZE9`,name:`Z_6ZG5G1C`,type:`Identifier`},{collection:`O4UVjDZE9`,name:`XBBGDydy1`,type:`Identifier`},{collection:`O4UVjDZE9`,name:`ziuBo4Hia`,type:`Identifier`},{collection:`O4UVjDZE9`,name:`Pg1bMBtx7`,type:`Identifier`},{collection:`O4UVjDZE9`,name:`lLbwIsKXg`,type:`Identifier`},{collection:`O4UVjDZE9`,name:`id`,type:`Identifier`}],where:{operator:`not`,type:`UnaryOperation`,value:{collection:`O4UVjDZE9`,name:`FFvi49nWl`,type:`Identifier`}}}),Dg={Desktop:`nTka1ueo6`,Phone:`kbVNPWMyK`,Tablet:`BHHxTWG2D`},Og=({value:e})=>oe()?null:p(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),kg=({height:e,id:t,width:n,...r})=>({...r,variant:Dg[r.variant]??r.variant??`nTka1ueo6`}),Ag=D(m(function(e,n){let r=s(null),i=n??r,a=b(),{activeLocale:o,setLocale:l}=se(),u=ce(),{style:d,className:f,layoutId:m,variant:v,...x}=kg(e);Se(g(()=>$t({},o),[o]));let[E,D]=le(v,Ah,!1),{activeVariantCallback:j,delay:N}=pe(void 0),F=({overlay:e})=>j(async(...t)=>{e.toggle()}),I=P(Nh,ft,Zt,Ke,Oe,Be,Ft,je,ct,nt),L=t(me)?.isLayoutTemplate,R=!!t(C)?.transition?.layout,ee=Fh(L,R),te=()=>!jh()||![`BHHxTWG2D`,`kbVNPWMyK`].includes(E);A();let ne=()=>!jh()||E!==`kbVNPWMyK`,re=M(`e5FE2W6aP`),ie=s(null),B=()=>!jh()||E===`BHHxTWG2D`,oe=()=>!jh()||E!==`BHHxTWG2D`,H=M(`Iaz3gWA8B`),ue=s(null),de=M(`FPw1o0xNx`),fe=s(null),q=M(`NdBysKKCq`),_e=s(null),ve=Ce();return he({}),p(me.Provider,{value:{activeVariantId:E,humanReadableVariantMap:Dg,primaryVariantId:`nTka1ueo6`,variantClassNames:Ph},children:_(T,{id:m??a,children:[p(Og,{value:`html body { background: var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231)); }`}),_(S.div,{...x,className:P(I,`framer-19vk3yv`,f),ref:i,style:{...d},children:[_(S.section,{className:`framer-aiycup`,"data-framer-name":`Hero`,layout:ee,children:[_(`div`,{className:`framer-ab78dw`,"data-framer-name":`Hero`,children:[_(`div`,{className:`framer-1agxmwb`,children:[_(`div`,{className:`framer-1sdh4ul`,children:[_(`div`,{className:`framer-15cyj6`,children:[_(`div`,{className:`framer-1o7fi4e`,children:[p(Gh,{dismissWithEsc:!0,children:e=>p(y,{children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px), 1px) * 0.4)`},kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:305,width:`max((max((min(${u?.width||`100vw`} - 32px, 1520px) - 60px) / 4, 50px) * 3 + 40px) / 3, 1px)`,children:_(rh,{__framer__animate:{transition:Lh},__framer__animateOnce:!0,__framer__enter:Ih,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-102xn4b-container`,id:`102xn4b`,nodeId:`VOaTMFLoj`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:[p(Mp,{aqXkj8oKY:`Residential`,height:`100%`,id:`VOaTMFLoj`,KqROMJsFZ:`CONCORDIA, ER`,layoutId:`VOaTMFLoj`,style:{width:`100%`},vxwSblaOu:Rh({pixelHeight:1345,pixelWidth:1336,positionX:`48.2%`,positionY:`97.6%`,src:`/assets/framerusercontent.com/images/lFqIElibGrikZx8q6XiAQ9V02g0__9e37194595.jpeg`,srcSet:`/assets/framerusercontent.com/images/lFqIElibGrikZx8q6XiAQ9V02g0__df2a757ae4.jpeg 1017w,/assets/framerusercontent.com/images/lFqIElibGrikZx8q6XiAQ9V02g0__9e37194595.jpeg 1336w`},``),width:`100%`,WmFty5NZZ:F({overlay:e})}),p(w,{children:e.visible&&p(y,{children:h(p(ae,{triggerId:`102xn4b`,children:_(k,{children:[p(S.div,{animate:{opacity:1,transition:{delay:0,duration:0,ease:[.5,0,.88,.77],type:`tween`}},className:P(I,`framer-1qxd5su`),"data-framer-portal-id":`102xn4b`,exit:{opacity:0,transition:{delay:0,duration:0,ease:[.12,.23,.5,1],type:`tween`}},initial:{opacity:0},onTap:()=>e.hide()},`ktgsiwSgE`),p(G,{children:p(V,{animate:Hh,className:P(I,`framer-yfrlhf-container`),"data-framer-portal-id":`102xn4b`,exit:Bh,inComponentSlot:!0,initial:Uh,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`lzpOSVSu4`,rendersWithMotion:!0,scopeId:`YthgXUocT`,transformTemplate:Vh,children:p(en,{borderRadius:0,bottomLeftRadius:0,bottomRightRadius:0,boxShadow:``,height:`100%`,id:`lzpOSVSu4`,isMixedBorderRadius:!1,isRed:!0,layoutId:`lzpOSVSu4`,play:`Off`,shouldMute:!0,style:{height:`100%`,width:`100%`},thumbnail:`Medium Quality`,topLeftRadius:0,topRightRadius:0,url:`https://youtu.be/8AHPXm9Y6mI`,width:`100%`})})})]})}),Wh())})})]})})})})}),te()&&p(`div`,{className:`framer-14bzszq hidden-1hq6fa4 hidden-vr1zvv`}),p(`div`,{className:`framer-19uxege`,children:_(`div`,{className:`framer-14466wy`,children:[p(G,{height:36,children:p(rh,{__framer__animate:{transition:qh},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-b3ilw6-container`,nodeId:`GNPDjUk3X`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(Ze,{BkO4Wzknc:`PARQUE ARBOLADO DE 5.000 M²`,height:`100%`,id:`GNPDjUk3X`,layoutId:`GNPDjUk3X`,variant:$(`qQAwcfDuf`),width:`100%`})})}),p(ah,{__framer__animate:{transition:Jh},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__fromCanvasComponent:!0,__perspectiveFX:!1,__targetOpacity:1,children:p(c,{children:p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,children:`5.000 m² de parque arbolado con piscina, salón climatizado y parrilla, a 15 minutos del centro de Concordia.`})}),className:`framer-b4b9lw`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),p(z,{links:[{href:{hash:`:e5FE2W6aP`,webPageId:`YthgXUocT`},implicitPathVariables:void 0},{href:{hash:`:e5FE2W6aP`,webPageId:`YthgXUocT`},implicitPathVariables:void 0},{href:{hash:`:e5FE2W6aP`,webPageId:`YthgXUocT`},implicitPathVariables:void 0}],children:e=>p(G,{height:53,width:`240px`,children:p(rh,{__framer__animate:{transition:Yh},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-q8kgu5-container`,nodeId:`du76_72N6`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{mraUIbOsu:e[1]},kbVNPWMyK:{mraUIbOsu:e[2]}},children:p(Je,{height:`100%`,id:`du76_72N6`,layoutId:`du76_72N6`,mraUIbOsu:e[0],style:{width:`100%`},variant:$(`oRMomUJVX`),width:`100%`,xPptMBCot:`Reservar por WhatsApp`})})})})})]})})]}),te()&&p(`div`,{className:`framer-1rekjd6 hidden-1hq6fa4 hidden-vr1zvv`,children:p(sh,{__framer__animate:{transition:Lh},__framer__animateOnce:!0,__framer__enter:Xh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,background:{alt:``,fit:`fit`,intrinsicHeight:265,intrinsicWidth:300,pixelHeight:265,pixelWidth:300,positionX:`center`,positionY:`center`,sizes:`70px`,src:`/assets/framerusercontent.com/images/SWktC2kDTh4OjgOWjHX5FhObWY__6e8adadf96.png`},className:`framer-yg08gi`})})]}),ne()&&p(ah,{__framer__animate:{transition:Lh},__framer__animateOnce:!0,__framer__enter:Zh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__fromCanvasComponent:!0,__perspectiveFX:!1,__targetOpacity:1,children:_(c,{children:[p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-alignment":`right`},children:`Piscina & Solárium `}),p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-alignment":`right`},children:`Salón Climatizado `}),p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-alignment":`right`},children:`Galería & Parrilla `}),p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-alignment":`right`},children:`Parque, Cancha & Granja`})]}),className:`framer-8ndmwc hidden-vr1zvv`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),p(`div`,{className:`framer-1qbsg9t`,"data-border":!0}),_(`div`,{className:`framer-hbnt28`,children:[_(`div`,{className:`framer-eygy0b`,children:[p(G,{height:14,children:p(rh,{__framer__animate:{transition:Qh},__framer__animateOnce:!0,__framer__enter:Ih,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1geelzg-container`,nodeId:`KlsMXwjbq`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`KlsMXwjbq`,layoutId:`KlsMXwjbq`,SlFHHeous:`Bienvenidos a Quinta Dodó`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GU0m0pCxW`),width:`100%`})})}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h1`,{className:`framer-styles-preset-56svq9`,"data-styles-preset":`mvGkm2rkf`,dir:`auto`,children:`espacios que inspiran historias`})}),className:`framer-16v743x`,effect:$h,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),ne()&&p(G,{height:14,children:p(lh,{animate:eg,className:`framer-me0pd6-container hidden-vr1zvv`,"data-framer-appear-id":`me0pd6`,initial:tg,nodeId:`qjWdRTuEd`,optimized:!0,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`qjWdRTuEd`,layoutId:`qjWdRTuEd`,SlFHHeous:`MÁS BENEFICIOS`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GU0m0pCxW`),width:`100%`})})})]})]}),te()&&p(G,{children:p(V,{className:`framer-nkj9oa-container hidden-1hq6fa4 hidden-vr1zvv`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`SjFfR9TNR`,scopeId:`YthgXUocT`,children:p(Kf,{borderRadius:`0px`,circleBoost:.5,curl:3,height:`100%`,id:`SjFfR9TNR`,imageBase:Rh({pixelHeight:1080,pixelWidth:1920,src:`/assets/framerusercontent.com/images/bPjIC5vBE3OpRpyc1h7v7YfYRM__88ac9c24fa.jpeg`,srcSet:`/assets/framerusercontent.com/images/bPjIC5vBE3OpRpyc1h7v7YfYRM__6424be15e0.jpeg 512w,/assets/framerusercontent.com/images/bPjIC5vBE3OpRpyc1h7v7YfYRM__9735ad0ac5.jpeg 1024w,/assets/framerusercontent.com/images/bPjIC5vBE3OpRpyc1h7v7YfYRM__88ac9c24fa.jpeg 1920w`},``),imageHover:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg`,srcSet:`/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__f2c812bad0.jpeg 512w,/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__42536f9797.jpeg 1024w,/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg 1200w`},``),layoutId:`SjFfR9TNR`,parallax:!1,parallaxAmount:100,parallaxSmoothing:0,preview:!0,shrinkTimeSeconds:2.4,splatRadius:.12,style:{height:`100%`,width:`100%`},texture:.7,width:`100%`})})})]}),p(`div`,{className:`framer-bk1czx`,"data-framer-name":`Gallery`,children:p(G,{children:p(V,{className:`framer-17r3u4b-container`,"data-code-component-plugin-id":`84d4c1`,isAuthoredByUser:!0,nodeId:`ob7HW2zEE`,scopeId:`YthgXUocT`,children:p($m,{contentType:`image`,dragSensitivity:3.5,gap:8,height:`100%`,hintBackgroundColor:`var(--token-f583f80d-77b6-48b4-9b80-6a3fc987668d, rgb(26, 21, 18))`,hintFont:{fontFamily:`"Inter Display", "Inter Display Placeholder", sans-serif`,fontFeatureSettings:`'salt' on`,fontSize:`16px`,fontStyle:`normal`,fontWeight:600,letterSpacing:`-0.01em`,lineHeight:`1em`},hintText:`Arrastrá para recorrer la quinta`,hintTextColor:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(255, 255, 255))`,id:`ob7HW2zEE`,imageHeight:300,imageRadius:0,images:[{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg`,srcSet:`/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__f2c812bad0.jpeg 512w,/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__42536f9797.jpeg 1024w,/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:1024,pixelWidth:1024,src:`/assets/framerusercontent.com/images/h9MaG5FEkxHmmnSJlOdfA0j6CcU__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/h9MaG5FEkxHmmnSJlOdfA0j6CcU__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/h9MaG5FEkxHmmnSJlOdfA0j6CcU__90eed7ebd3.jpeg 1024w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/framerusercontent.com/images/to4m8a7kbzln4In00CRbjuZRQFI__0404e46688.jpeg`,srcSet:`/assets/framerusercontent.com/images/to4m8a7kbzln4In00CRbjuZRQFI__f2c812bad0.jpeg 512w,/assets/framerusercontent.com/images/to4m8a7kbzln4In00CRbjuZRQFI__42536f9797.jpeg 1024w,/assets/framerusercontent.com/images/to4m8a7kbzln4In00CRbjuZRQFI__0404e46688.jpeg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:1152,pixelWidth:928,src:`/assets/framerusercontent.com/images/kwP41D5KHqHCxkwtEcEkLlaf4Xk__0c55e41633.jpeg`,srcSet:`/assets/framerusercontent.com/images/kwP41D5KHqHCxkwtEcEkLlaf4Xk__70e95906f8.jpeg 824w,/assets/framerusercontent.com/images/kwP41D5KHqHCxkwtEcEkLlaf4Xk__0c55e41633.jpeg 928w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:1024,pixelWidth:1024,src:`/assets/framerusercontent.com/images/E5Eq5rbGo3etGr6SnbIMPlPKec__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/E5Eq5rbGo3etGr6SnbIMPlPKec__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/E5Eq5rbGo3etGr6SnbIMPlPKec__90eed7ebd3.jpeg 1024w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:768,pixelWidth:1024,src:`/assets/framerusercontent.com/images/gjXMWnEL0NJu6tSHjURbcQFJE__1c2aed7aef.jpeg`,srcSet:`/assets/framerusercontent.com/images/gjXMWnEL0NJu6tSHjURbcQFJE__e435015e2e.jpeg 512w,/assets/framerusercontent.com/images/gjXMWnEL0NJu6tSHjURbcQFJE__1c2aed7aef.jpeg 1024w`},``),inputType:`upload`,url:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`},{image:Rh({pixelHeight:1792,pixelWidth:2400,src:`/assets/framerusercontent.com/images/pwftHnssLove9zCJUF8oAr2oT4__bc73c09cce.jpeg`,srcSet:`/assets/framerusercontent.com/images/pwftHnssLove9zCJUF8oAr2oT4__6ae6c6018e.jpeg 512w,/assets/framerusercontent.com/images/pwftHnssLove9zCJUF8oAr2oT4__d6e0e2e7a7.jpeg 1024w,/assets/framerusercontent.com/images/pwftHnssLove9zCJUF8oAr2oT4__cd71775036.jpeg 2048w,/assets/framerusercontent.com/images/pwftHnssLove9zCJUF8oAr2oT4__bc73c09cce.jpeg 2400w`},``),inputType:`upload`,url:`/assets/framerusercontent.com/images/GfGkADagM4KEibNcIiRUWlfrR0.jpg`},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/bano-1200.jpg`,srcSet:`/assets/quintadodo/galeria/bano-512.jpg 512w,/assets/quintadodo/galeria/bano-1024.jpg 1024w,/assets/quintadodo/galeria/bano-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/dog-1200.jpg`,srcSet:`/assets/quintadodo/galeria/dog-512.jpg 512w,/assets/quintadodo/galeria/dog-1024.jpg 1024w,/assets/quintadodo/galeria/dog-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/dormitoriomain-1200.jpg`,srcSet:`/assets/quintadodo/galeria/dormitoriomain-512.jpg 512w,/assets/quintadodo/galeria/dormitoriomain-1024.jpg 1024w,/assets/quintadodo/galeria/dormitoriomain-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/farm-1200.jpg`,srcSet:`/assets/quintadodo/galeria/farm-512.jpg 512w,/assets/quintadodo/galeria/farm-1024.jpg 1024w,/assets/quintadodo/galeria/farm-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/caballo-1200.jpg`,srcSet:`/assets/quintadodo/galeria/caballo-512.jpg 512w,/assets/quintadodo/galeria/caballo-1024.jpg 1024w,/assets/quintadodo/galeria/caballo-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/juegos-1200.jpg`,srcSet:`/assets/quintadodo/galeria/juegos-512.jpg 512w,/assets/quintadodo/galeria/juegos-1024.jpg 1024w,/assets/quintadodo/galeria/juegos-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/mate-1200.jpg`,srcSet:`/assets/quintadodo/galeria/mate-512.jpg 512w,/assets/quintadodo/galeria/mate-1024.jpg 1024w,/assets/quintadodo/galeria/mate-1200.jpg 1200w`},``),inputType:`upload`,url:``},{image:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/quintadodo/galeria/salamandra-1200.jpg`,srcSet:`/assets/quintadodo/galeria/salamandra-512.jpg 512w,/assets/quintadodo/galeria/salamandra-1024.jpg 1024w,/assets/quintadodo/galeria/salamandra-1200.jpg 1200w`},``),inputType:`upload`,url:``}],imageSizeMode:`fit`,imageWidth:340,layoutId:`ob7HW2zEE`,playButtonBackgroundColor:`rgba(26, 21, 18, 0.5)`,playButtonColor:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231))`,playButtonHoverBackgroundColor:`rgba(26, 21, 18, 0.5)`,playButtonPosition:`center`,playButtonSize:48,playButtonX:12,playButtonY:12,showVideoControls:!0,style:{height:`100%`,width:`100%`},videoHeight:169,videos:[{inputType:`url`,loop:!0,muted:!0,url:`data:,`}],videoSizeMode:`16:9`,videoWidth:300,width:`100%`})})})})]}),p(S.section,{className:`framer-9j0qtz`,"data-framer-name":`Services`,id:re,layout:ee,ref:ie,children:_(`div`,{className:`framer-x0uo20`,children:[p(z,{links:[{href:{webPageId:`gDaVYicj9`},implicitPathVariables:void 0},{href:{webPageId:`gDaVYicj9`},implicitPathVariables:void 0},{href:{webPageId:`gDaVYicj9`},implicitPathVariables:void 0}],children:e=>p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:327,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-14apyip-container`,nodeId:`MUFHfBoW6`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{F9nJqTVzk:e[1],variant:$(`e7jCmLncb`)},kbVNPWMyK:{F9nJqTVzk:e[2],variant:$(`jQUxj19s0`)}},children:p(Zm,{B2qWQM2Kn:`QUÉ OFRECE LA QUINTA`,Civ3FnzVk:{borderColor:`var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(242, 237, 231, 0.2))`,borderStyle:`solid`,borderWidth:1},E1O3NBgQo:`RESERVAR POR WHATSAPP`,F9nJqTVzk:e[0],FAUEOSNK0:`Desde celebraciones multitudinarias hasta fines de semana de puro silencio y relax.`,fnv7tXH0e:`wEyFkHYwL`,height:`100%`,id:`MUFHfBoW6`,koxy6GD8D:`GTNUDt4Zb`,l3EvDYHSy:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231))`,layoutId:`MUFHfBoW6`,rUvvcCQd7:`Confort integral en un entorno campestre único`,style:{width:`100%`},variant:$(`jeM7O389h`),width:`100%`})})})})})}),_(`div`,{className:`framer-184l42h`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:415,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-82wf5q-container`,nodeId:`k39iGgOkz`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`lweuIPizn`)},kbVNPWMyK:{variant:$(`nRlf5seCf`)}},children:p(Jp,{BZyFw15_r:`[Banco sumergido]`,height:`100%`,HjZQ8vYD1:`Piscina de agua cristalina con banco húmedo perimetral, cerco de seguridad y solárium amplio.`,id:`k39iGgOkz`,kga5kNKLo:`[Solárium amplio]`,layoutId:`k39iGgOkz`,MZMZremxE:Rh({pixelHeight:1024,pixelWidth:1024,src:`/assets/framerusercontent.com/images/jQdABLcVgRSVhuPJFM6Kwsq688__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/jQdABLcVgRSVhuPJFM6Kwsq688__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/jQdABLcVgRSVhuPJFM6Kwsq688__90eed7ebd3.jpeg 1024w`},``),style:{width:`100%`},TEbXfm9jp:`[Cerco perimetral]`,variant:$(`Kga_SV3Uc`),wglE1jQyo:`Piscina con Banco Sumergido`,width:`100%`,ZyzNCJu2F:`[ 01 / ESPACIO ]`})})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:415,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(rh,{__framer__animate:{transition:rg},__framer__animateOnce:!0,__framer__enter:ng,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1ov0ff3-container`,nodeId:`d68ripfeJ`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`lweuIPizn`)},kbVNPWMyK:{variant:$(`nRlf5seCf`)}},children:p(Jp,{BZyFw15_r:`[Estufa Lepen a leña]`,height:`100%`,HjZQ8vYD1:`Living-comedor cerrado con estufa Lepen a leña, mesas para 25+ comensales y cocina completa.`,id:`d68ripfeJ`,kga5kNKLo:`[Vajilla completa]`,layoutId:`d68ripfeJ`,MZMZremxE:Rh({pixelHeight:1024,pixelWidth:1024,src:`/assets/framerusercontent.com/images/UkYKMgxEEeLqekeyy7dlhXCpl4__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/UkYKMgxEEeLqekeyy7dlhXCpl4__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/UkYKMgxEEeLqekeyy7dlhXCpl4__90eed7ebd3.jpeg 1024w`},``),style:{width:`100%`},TEbXfm9jp:`[Cocina completa]`,variant:$(`Kga_SV3Uc`),wglE1jQyo:`Salón con Estufa Lepen`,width:`100%`,ZyzNCJu2F:`[ 02 / ESPACIO ]`})})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:415,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(rh,{__framer__animate:{transition:rg},__framer__animateOnce:!0,__framer__enter:ng,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-vmlwa2-container`,nodeId:`VDEg1EBQd`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`lweuIPizn`)},kbVNPWMyK:{variant:$(`nRlf5seCf`)}},children:p(Jp,{BZyFw15_r:`[Parrilla criolla techada]`,height:`100%`,HjZQ8vYD1:`Parrilla criolla techada, mesada exterior con bacha y mesa de ping-pong bajo la sombra.`,id:`VDEg1EBQd`,kga5kNKLo:`[Mesada & bacha]`,layoutId:`VDEg1EBQd`,MZMZremxE:Rh({pixelHeight:1024,pixelWidth:1024,src:`/assets/framerusercontent.com/images/w4JMpgPOjdZDTdwhryIsYpKMc__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/w4JMpgPOjdZDTdwhryIsYpKMc__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/w4JMpgPOjdZDTdwhryIsYpKMc__90eed7ebd3.jpeg 1024w`},``),style:{width:`100%`},TEbXfm9jp:`[Mesa de ping-pong]`,variant:$(`Kga_SV3Uc`),wglE1jQyo:`Galería & Parrilla`,width:`100%`,ZyzNCJu2F:`[ 03 / ESPACIO ]`})})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:415,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(rh,{__framer__animate:{transition:rg},__framer__animateOnce:!0,__framer__enter:ng,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-16r0zzo-container`,nodeId:`NG9gtNX3L`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`lweuIPizn`)},kbVNPWMyK:{variant:$(`nRlf5seCf`)}},children:p(Jp,{BZyFw15_r:`[Cancha con arcos]`,height:`100%`,HjZQ8vYD1:`Cancha de fútbol con arcos, un caballo en el predio y granja con gallinas. 100% Pet Friendly.`,id:`NG9gtNX3L`,kga5kNKLo:`[100% Pet Friendly]`,layoutId:`NG9gtNX3L`,MZMZremxE:Rh({pixelHeight:1024,pixelWidth:1024,src:`/assets/framerusercontent.com/images/9JOOi0mHXkGkqH1vJE81jbJ6rrc__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/9JOOi0mHXkGkqH1vJE81jbJ6rrc__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/9JOOi0mHXkGkqH1vJE81jbJ6rrc__90eed7ebd3.jpeg 1024w`},``),style:{width:`100%`},TEbXfm9jp:`[Un caballo y granja]`,variant:$(`Kga_SV3Uc`),wglE1jQyo:`Parque, Cancha & Granja`,width:`100%`,ZyzNCJu2F:`[ 04 / ESPACIO ]`})})})})})]})]})}),_(S.section,{className:`framer-1o5qyp2`,"data-framer-name":`Gallery`,layout:ee,children:[_(mh,{__framer__animate:{transition:ig},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1qyh68q`,children:[p(G,{height:14,children:p(V,{className:`framer-123iawt-container`,nodeId:`acjUQrEl7`,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`acjUQrEl7`,layoutId:`acjUQrEl7`,SlFHHeous:`NUESTRA PROPUESTA`,UFegHV865:`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(44, 34, 24))`,variant:$(`GU0m0pCxW`),width:`100%`})})}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(44, 34, 24))`},children:`Cada rincón pensado para disfrutar el campo sin resignar confort`})}),className:`framer-6dsgmj`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),p(G,{children:p(V,{className:`framer-1hjseti-container`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`BFzR6HOvm`,scopeId:`YthgXUocT`,children:p(Sn,{animation:{in:{from:{blur:10,is3D:`2D`,opacity:0,rotate2D:10,rotate3D:{x:0,y:0,z:0},scale:.5},to:{blur:0,is3D:`2D`,opacity:1,rotate2D:0,rotate3D:{x:0,y:0,z:0},scale:1},transition:{damping:40,delay:0,mass:1,stiffness:500,type:`spring`}},out:{blur:10,is3D:`2D`,opacity:0,rotate2D:-20,rotate3D:{x:0,y:0,z:0},scale:.5,transition:{damping:60,delay:0,mass:1,stiffness:500,type:`spring`}}},frequency:35,height:`100%`,id:`BFzR6HOvm`,images:[`/assets/framerusercontent.com/images/jpnrAhspXY5nPE74WzIccBalBU__90eed7ebd3.jpg`,`/assets/framerusercontent.com/images/E5Eq5rbGo3etGr6SnbIMPlPKec__90eed7ebd3.jpeg`,`/assets/framerusercontent.com/images/h9MaG5FEkxHmmnSJlOdfA0j6CcU__90eed7ebd3.jpeg`,`/assets/framerusercontent.com/images/lZg1VOTULJe118CCJ03sj2NQSbY__90eed7ebd3.jpg`,`/assets/framerusercontent.com/images/nxRyZf5KsAEu4FbyzwKPAe1n0__90eed7ebd3.jpg`,`/assets/framerusercontent.com/images/gjXMWnEL0NJu6tSHjURbcQFJE__1c2aed7aef.jpeg`,`/assets/framerusercontent.com/images/A0SPsvkLS7buhhBBbYa28296YK8__90eed7ebd3.jpeg`,`/assets/framerusercontent.com/images/bpHPQVuElzCQSiIbuL7fwhe1OQ__90eed7ebd3.jpg`,`/assets/framerusercontent.com/images/ACeWXT49fVtgLniVu5GQ7dD4Pk__90eed7ebd3.jpg`],layoutId:`BFzR6HOvm`,perspective:{enabled:!1,value:1200},style:{fit:`fill`,height:200,radius:0,width:200},visibleFor:1,width:`100%`})})}),_(`div`,{className:`framer-15grppn`,children:[p(G,{children:p(V,{className:`framer-nyex8r-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`dfhlEgXyl`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`dfhlEgXyl`,layoutId:`dfhlEgXyl`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-5pvv60-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`EuABgw_5o`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`EuABgw_5o`,layoutId:`EuABgw_5o`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-1otrxs6-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`RLiAS6Rvx`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`RLiAS6Rvx`,layoutId:`RLiAS6Rvx`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-184q96j-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`BMX8eOZzH`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`BMX8eOZzH`,layoutId:`BMX8eOZzH`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-hr0oaj-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`XTGb0RBGw`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`XTGb0RBGw`,layoutId:`XTGb0RBGw`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-ddm69z-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`JJd6p_O5F`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`JJd6p_O5F`,layoutId:`JJd6p_O5F`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-1c7ocwe-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`iimooGMhY`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`iimooGMhY`,layoutId:`iimooGMhY`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})}),p(G,{children:p(V,{className:`framer-1kly2or-container`,"data-framer-name":`Default`,isAuthoredByUser:!0,isModuleExternal:!0,name:`Default`,nodeId:`oJXEeBshF`,scopeId:`YthgXUocT`,children:p(Y,{color:`var(--token-25c2af49-c180-40b0-87c5-11222f986e18, rgb(44, 34, 24))`,height:`100%`,iconSearch:`House`,iconSelection:`Plus`,id:`oJXEeBshF`,layoutId:`oJXEeBshF`,mirrored:!1,name:`Default`,selectByList:!0,style:{height:`100%`,width:`100%`},weight:`bold`,width:`100%`})})})]})]}),p(S.section,{className:`framer-vfne17`,"data-framer-name":`About`,layout:ee,children:p(`div`,{className:`framer-1j0tlts`,children:_(`div`,{className:`framer-lythd7`,"data-framer-name":`Section Header 2`,children:[_(mh,{__framer__animate:{transition:ig},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1gzi89d`,children:[_(`div`,{className:`framer-134t1j6`,children:[_(`div`,{className:`framer-1mr0e7r`,children:[p(`div`,{className:`framer-1lmcs10`,children:p(G,{height:14,children:p(V,{className:`framer-kcrzb4-container`,nodeId:`cQDgSkVtP`,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`cQDgSkVtP`,layoutId:`cQDgSkVtP`,SlFHHeous:`LA PROPUESTA`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GU0m0pCxW`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{BHHxTWG2D:{children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`“Un predio entero `})})},kbVNPWMyK:{children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`“Un predio entero para vos: pileta, salón y parque, sin compartir con nadie más.”`})})}},children:p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`“Un predio entero`})}),className:`framer-wlkaep`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),ne()&&p(J,{breakpoint:E,overrides:{BHHxTWG2D:{children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`para vos: pileta, salón y parque, sin compartir con nadie más.”`})})}},children:p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`pileta, salón y parque, sin compartir el predio con nadie más.”`})}),className:`framer-wo07li hidden-vr1zvv`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})})]}),_(`div`,{className:`framer-xf94ee`,children:[ne()&&p(`div`,{className:`framer-6rj6zc hidden-vr1zvv`}),_(`div`,{className:`framer-1czg0dk`,"data-framer-name":`Client Info`,children:[p(W,{background:{alt:``,fit:`fill`,intrinsicHeight:1024,intrinsicWidth:1024,pixelHeight:1024,pixelWidth:1024,sizes:`50px`,src:`/assets/framerusercontent.com/images/Jl4CfxyGptW5fosEutM5qHEpXs__90eed7ebd3.jpeg`,srcSet:`/assets/framerusercontent.com/images/Jl4CfxyGptW5fosEutM5qHEpXs__9adb09303e.jpeg 512w,/assets/framerusercontent.com/images/Jl4CfxyGptW5fosEutM5qHEpXs__90eed7ebd3.jpeg 1024w`},className:`framer-ig9uqr`,"data-framer-name":`Image`}),_(`div`,{className:`framer-13uu21g`,"data-framer-name":`Wrapper`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-1mnerwp`,"data-styles-preset":`xtEebSFOv`,dir:`auto`,children:`QUINTA DODÓ`})}),className:`framer-y39w0u`,"data-framer-name":`Name`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-1kn2crz`,"data-styles-preset":`KfHGuG91B`,dir:`auto`,children:`CONCORDIA, ENTRE RÍOS`})}),className:`framer-1t01n0l`,"data-framer-name":`Position`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]})]}),p(`div`,{className:`framer-1rp2ojl`,"data-border":!0}),_(`div`,{className:`framer-1ndtbu`,children:[p(`div`,{className:`framer-l4nkv6`,children:p(G,{height:28,children:p(V,{className:`framer-oixsgs-container`,nodeId:`FlIj945mI`,scopeId:`YthgXUocT`,children:p(Qe,{height:`100%`,id:`FlIj945mI`,layoutId:`FlIj945mI`,variant:$(`o_TFBGX4g`),width:`100%`})})})}),B()&&p(`div`,{className:`framer-kujbcq hidden-19vk3yv hidden-vr1zvv`,"data-framer-name":`Spacer`}),_(`div`,{className:`framer-5l6u8n`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h3`,{className:`framer-styles-preset-tgoaog`,"data-styles-preset":`KSxvq0jgx`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`La Quinta`})}),className:`framer-1su6k5l`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{children:_(c,{children:[_(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:[`Nos escribís por WhatsApp con la fecha, la cantidad de personas y la modalidad elegida. `,p(`span`,{style:{"--framer-text-color":`rgb(153, 153, 153)`},children:`Un predio entero para vos y tus invitados: pileta, salón, cancha y granja en un mismo lugar.`})]}),p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`rgb(153, 153, 153)`},children:`Te enviamos el presupuesto detallado y congelás tu fecha con una seña bancaria segura.`})]})}},children:p(K,{__fromCanvasComponent:!0,children:_(c,{children:[p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`Quinta Dodó está sobre Boulevard Yuquerí, en Concordia, Entre Ríos: 5.000 m² de parque arbolado con acceso pavimentado todo el año. `}),p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:p(`br`,{className:`trailing-break`})}),p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-color":`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(0, 0, 0))`},children:`Un enclave sereno a 15 minutos del centro, cerca de los complejos termales, el lago Salto Grande y la costanera.`})]}),className:`framer-1sz90u1`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),p(z,{links:[{href:{webPageId:`fhzyndQ7W`},implicitPathVariables:void 0},{href:{webPageId:`fhzyndQ7W`},implicitPathVariables:void 0},{href:{webPageId:`fhzyndQ7W`},implicitPathVariables:void 0}],children:e=>p(G,{height:53,width:`240px`,children:p(V,{className:`framer-1bl0khq-container`,nodeId:`lmltbqOCk`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{mraUIbOsu:e[1]},kbVNPWMyK:{mraUIbOsu:e[2]}},children:p(Je,{height:`100%`,id:`lmltbqOCk`,layoutId:`lmltbqOCk`,mraUIbOsu:e[0],style:{width:`100%`},variant:$(`oRMomUJVX`),width:`100%`,xPptMBCot:`VER MÁS`})})})})})]}),p(`div`,{className:`framer-52kmmd`,"data-framer-name":`Reel Showcase`,children:p(G,{children:p(V,{className:`framer-1u3www5-container`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`QNyITuuEf`,scopeId:`YthgXUocT`,children:p(Ct,{backgroundColor:`rgba(0, 0, 0, 0)`,borderRadius:0,bottomLeftRadius:0,bottomRightRadius:0,controls:!1,height:`100%`,id:`QNyITuuEf`,isMixedBorderRadius:!1,layoutId:`QNyITuuEf`,loop:!0,muted:!0,objectFit:`cover`,playing:!0,posterEnabled:!1,srcFile:`data:,`,srcType:`Upload`,srcUrl:`data:,`,startTime:0,style:{height:`100%`,width:`100%`},topLeftRadius:0,topRightRadius:0,volume:25,width:`100%`})})})})]})]})})}),p(S.section,{className:`framer-z1004e`,"data-framer-name":`Case Study`,layout:ee,children:_(`div`,{className:`framer-1qudxke`,children:[p(z,{links:[{href:{webPageId:`f0070Q8yD`},implicitPathVariables:void 0},{href:{webPageId:`f0070Q8yD`},implicitPathVariables:void 0},{href:{webPageId:`f0070Q8yD`},implicitPathVariables:void 0}],children:e=>p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:187,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-tc54hh-container`,nodeId:`ZOKKzaadm`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{T6RLhSQPD:e[1],variant:$(`frPWSaIVg`)},kbVNPWMyK:{T6RLhSQPD:e[2],variant:$(`do8Gz4RJ9`)}},children:p(Vt,{B2qWQM2Kn:`LOS ESPACIOS`,height:`100%`,id:`ZOKKzaadm`,ImGI0XuYk:`wEyFkHYwL`,JPh3A9twy:`VER TODOS LOS ESPACIOS`,koxy6GD8D:`GTNUDt4Zb`,l3EvDYHSy:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231))`,layoutId:`ZOKKzaadm`,rUvvcCQd7:`Los espacios de la quinta`,style:{width:`100%`},T6RLhSQPD:e[0],variant:$(`OxZOmCU6O`),width:`100%`})})})})})}),p(`div`,{className:`framer-gkwf3n`,children:p(ge,{children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{query:lg()}},children:p(ug,{query:cg(),children:(e,t,n)=>p(y,{children:e?.map(({Ai5pJFGr3:e,CLf17_gof:t,iaRLaEILA:n,id:r,jNghr8F0c:i,N7wAysbGw:a,tfVxn_NQB:s,wj5tFSpKK:c},l)=>{t??=``,s??=``,a??=``,e??=``,n??=``;let d=l+1;return p(T,{id:`IQvrLa9Ez-${r}`,children:p(O.Provider,{value:{iaRLaEILA:n},children:p(`div`,{className:`framer-f49yhy`,children:p(z,{links:[{href:{pathVariables:{iaRLaEILA:n},webPageId:`r9qXTuWaQ`},implicitPathVariables:void 0},{href:{pathVariables:{iaRLaEILA:n},webPageId:`r9qXTuWaQ`},implicitPathVariables:void 0},{href:{pathVariables:{iaRLaEILA:n},webPageId:`r9qXTuWaQ`},implicitPathVariables:void 0}],children:n=>p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`max(max((min(${u?.width||`100vw`} - 32px, 1520px) - 20px) / 2, 50px), 1px)`},kbVNPWMyK:{width:`max(max(min(${u?.width||`100vw`} - 24px, 1520px), 50px), 1px)`}},children:p(G,{height:565,width:`max(max((min(${u?.width||`100vw`} - 32px, 1520px) - 40px) / 3, 50px), 1px)`,children:p(V,{className:`framer-fnt7hs-container`,nodeId:`H2n6MJSNn`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{btLSpTGaH:n[1]},kbVNPWMyK:{btLSpTGaH:n[2]}},children:p(Lt,{btLSpTGaH:n[0],cuGSR3cns:sg(i),EqGuG6qB5:sg(c),fEASoZSlg:s,height:`100%`,id:`H2n6MJSNn`,layoutId:`H2n6MJSNn`,pndVhXH52:a,sEerlBRvr:t,style:{width:`100%`},variant:$(og(ag(d),o)),width:`100%`,zy31qvsjm:e})})})})})})})})},r)})})})})})}),p(`div`,{className:`framer-1tf26ni`,"data-border":!0}),_(`div`,{className:`framer-1dx3mxi`,"data-framer-name":`Container`,children:[_(`div`,{className:`framer-124hxq4`,"data-framer-name":`Column 1 `,children:[_(`div`,{className:`framer-q907b5`,"data-framer-name":`Logo`,children:[p(W,{background:{alt:``,fit:`fit`,intrinsicHeight:258,intrinsicWidth:400,pixelHeight:258,pixelWidth:400,positionX:`center`,positionY:`center`,sizes:`30px`,src:`/assets/framerusercontent.com/images/JkVWAw7QfWEZEAAaAqeKKiDGMg__c8283483ff.png`},className:`framer-2671o0`}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h4`,{className:`framer-styles-preset-1tmtwu8`,"data-styles-preset":`DrC9SQV_P`,dir:`auto`,children:`DODÓ`})}),className:`framer-ng5u28`,"data-framer-name":`DODÓ`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),_(`div`,{className:`framer-aqf9su`,"data-framer-name":`Client`,children:[p(J,{breakpoint:E,overrides:{BHHxTWG2D:{background:{alt:``,fit:`fill`,pixelHeight:2400,pixelWidth:1920,sizes:`44px`,src:`/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__083ff20079.png`,srcSet:`/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__ea69a8ad73.png 819w,/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__3d8afe8c38.png 1638w,/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__083ff20079.png 1920w`}}},children:p(W,{background:{alt:``,fit:`fill`,pixelHeight:2400,pixelWidth:1920,sizes:`50px`,src:`/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__083ff20079.png`,srcSet:`/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__ea69a8ad73.png 819w,/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__3d8afe8c38.png 1638w,/assets/framerusercontent.com/images/LXMzHopfrpSYVrMRaIIbSgJDWk__083ff20079.png 1920w`},className:`framer-1i8oovj`,"data-framer-name":`Image`})}),_(`div`,{className:`framer-10sgb81`,"data-framer-name":`Info`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-color":`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(244, 241, 235))`},children:`QUINTA DODÓ`})}),className:`framer-uuh75s`,"data-framer-name":`Name`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-1kn2crz`,"data-styles-preset":`KfHGuG91B`,dir:`auto`,style:{"--framer-text-color":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(184, 178, 164))`},children:`LIVING-COMEDOR`})}),className:`framer-16o4nie`,"data-framer-name":`Position`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})]}),_(`div`,{className:`framer-1ugpmrw`,"data-framer-name":`Column2`,children:[p(J,{breakpoint:E,overrides:{BHHxTWG2D:{children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-alignment":`left`},children:`“Predio cerrado, exclusivo y listo para usar”`})})},kbVNPWMyK:{children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-alignment":`left`},children:`“Predio cerrado, exclusivo y listo para usar”`})})}},children:p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-alignment":`right`},children:`“Predio cerrado, exclusivo y listo para usar”`})}),className:`framer-ch19h8`,"data-framer-name":`Text`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),p(J,{breakpoint:E,overrides:{BHHxTWG2D:{children:p(c,{children:p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-alignment":`left`,"--framer-text-color":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(238, 238, 238))`},children:`Llegás y está todo listo: pileta impecable, salón acondicionado y el parque entero a disposición.`})})},kbVNPWMyK:{children:p(c,{children:p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-alignment":`left`,"--framer-text-color":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(238, 238, 238))`},children:`Llegás y está todo listo: pileta impecable, salón acondicionado y el parque entero a disposición.`})})}},children:p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-1kb28s5`,"data-styles-preset":`oNk_OX8PT`,dir:`auto`,style:{"--framer-text-alignment":`right`,"--framer-text-color":`var(--token-7ef362c8-7676-4801-86d9-558d1adb50b6, rgb(238, 238, 238))`},children:`Llegás y está todo listo: pileta impecable, salón acondicionado y el parque entero a disposición.`})}),className:`framer-k7l5a3`,"data-framer-name":`Text`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})}),p(z,{links:[{href:{webPageId:`f0070Q8yD`},implicitPathVariables:void 0},{href:{webPageId:`f0070Q8yD`},implicitPathVariables:void 0},{href:{webPageId:`f0070Q8yD`},implicitPathVariables:void 0}],children:e=>p(G,{height:53,width:`240px`,children:p(V,{className:`framer-oz1fcb-container`,nodeId:`YCMUoJUsG`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{mraUIbOsu:e[1]},kbVNPWMyK:{mraUIbOsu:e[2]}},children:p(Je,{height:`100%`,id:`YCMUoJUsG`,layoutId:`YCMUoJUsG`,mraUIbOsu:e[0],style:{width:`100%`},variant:$(`wEyFkHYwL`),width:`100%`,xPptMBCot:`VER TODOS LOS ESPACIOS`})})})})})]})]})]})}),_(S.section,{className:`framer-1tpxl96`,"data-framer-name":`Metrics`,layout:ee,children:[_(`div`,{className:`framer-1dxv4tc`,children:[_(mh,{__framer__animate:{transition:fg},__framer__animateOnce:!0,__framer__enter:dg,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-18gkykc`,children:[_(`div`,{className:`framer-1o0445l`,children:[p(G,{height:14,children:p(V,{className:`framer-x6zpqt-container`,nodeId:`HZXUuwTla`,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`HZXUuwTla`,layoutId:`HZXUuwTla`,SlFHHeous:`5.000 M²`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GTNUDt4Zb`),width:`100%`})})}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h2`,{className:`framer-styles-preset-153z37z`,"data-styles-preset":`q6zlfd0YD`,dir:`auto`,style:{"--framer-text-alignment":`center`},children:`Un predio entero pensado para grupos, familias y celebraciones.`})}),className:`framer-yk9gzu`,"data-framer-name":`Heading`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]}),p(`div`,{className:`framer-118bfrb`,children:p(`div`,{className:`framer-1xp00tt`,"data-border":!0})})]}),_(`div`,{className:`framer-w9hpa2`,children:[p(`div`,{className:`framer-jfxzbe`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`max((min(${u?.width||`100vw`} - 32px, 1520px) - 20px) / 2, 1px)`},kbVNPWMyK:{height:160,width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 1px)`}},children:p(G,{height:240,width:`max((min(${u?.width||`100vw`} - 32px, 1520px) - 60px) / 4, 1px)`,children:p(rh,{__framer__animate:{transition:zh},__framer__animateOnce:!0,__framer__enter:pg,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-6td4le-container`,nodeId:`QQxAqJDN0`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(wt,{height:`100%`,htcJkRyLe:`Metros cuadrados de parque arbolado y cerrado`,id:`QQxAqJDN0`,k75Tj4ZBq:250,layoutId:`QQxAqJDN0`,style:{height:`100%`,width:`100%`},TncBKiiI6:`+`,variant:$(`iV7bJmFcA`),width:`100%`})})})})}),p(`div`,{className:`framer-1o3bsq5`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`max((min(${u?.width||`100vw`} - 32px, 1520px) - 20px) / 2, 1px)`},kbVNPWMyK:{height:160,width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 1px)`}},children:p(G,{height:240,width:`max((min(${u?.width||`100vw`} - 32px, 1520px) - 60px) / 4, 1px)`,children:p(rh,{__framer__animate:{transition:fg},__framer__animateOnce:!0,__framer__enter:pg,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-11r5d9w-container`,nodeId:`besIakyyA`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{kbVNPWMyK:{variant:$(`E37qFAq3H`)}},children:p(wt,{height:`100%`,htcJkRyLe:`Comensales sentados en el salón climatizado`,id:`besIakyyA`,k75Tj4ZBq:98,layoutId:`besIakyyA`,style:{height:`100%`,width:`100%`},TncBKiiI6:`%`,variant:$(`iV7bJmFcA`),width:`100%`})})})})})}),oe()&&p(`div`,{className:`framer-1xrzg7e hidden-1hq6fa4`,children:p(J,{breakpoint:E,overrides:{kbVNPWMyK:{height:160,width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 1px)`}},children:p(G,{height:240,width:`max((min(${u?.width||`100vw`} - 32px, 1520px) - 60px) / 4, 1px)`,children:p(rh,{__framer__animate:{transition:mg},__framer__animateOnce:!0,__framer__enter:pg,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-pipbj-container`,nodeId:`Ctp5N8VMA`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(wt,{height:`100%`,htcJkRyLe:`Minutos hasta el centro de Concordia`,id:`Ctp5N8VMA`,k75Tj4ZBq:15,layoutId:`Ctp5N8VMA`,style:{height:`100%`,width:`100%`},TncBKiiI6:`+`,variant:$(`iV7bJmFcA`),width:`100%`})})})})}),te()&&p(`div`,{className:`framer-3o0upc hidden-1hq6fa4 hidden-vr1zvv`,children:p(G,{height:240,width:`max((min(${u?.width||`100vw`} - 32px, 1520px) - 60px) / 4, 1px)`,children:p(rh,{__framer__animate:{transition:hg},__framer__animateOnce:!0,__framer__enter:pg,__framer__styleAppearEffectEnabled:!0,__framer__threshold:0,__perspectiveFX:!1,__targetOpacity:1,className:`framer-xhdqyx-container`,nodeId:`Ar1xUCdtV`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(wt,{height:`100%`,htcJkRyLe:`Huéspedes con pernocte en dos habitaciones`,id:`Ar1xUCdtV`,k75Tj4ZBq:5,layoutId:`Ar1xUCdtV`,style:{height:`100%`,width:`100%`},TncBKiiI6:`yrs`,variant:$(`iV7bJmFcA`),width:`100%`})})})})]}),p(z,{links:[{href:{webPageId:`j1zbu2LlJ`},implicitPathVariables:void 0},{href:{webPageId:`j1zbu2LlJ`},implicitPathVariables:void 0},{href:{webPageId:`j1zbu2LlJ`},implicitPathVariables:void 0}],children:e=>p(G,{height:53,width:`240px`,children:p(V,{className:`framer-7d8uri-container`,nodeId:`XImRwxraM`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{mraUIbOsu:e[1]},kbVNPWMyK:{mraUIbOsu:e[2]}},children:p(Je,{height:`100%`,id:`XImRwxraM`,layoutId:`XImRwxraM`,mraUIbOsu:e[0],style:{width:`100%`},variant:$(`wEyFkHYwL`),width:`100%`,xPptMBCot:`CONSULTAR FECHA`})})})})})]}),p(`div`,{className:`framer-qglh3m`,"data-framer-name":`Overlay`}),p(G,{children:p(V,{className:`framer-1hqv89-container`,isAuthoredByUser:!0,isModuleExternal:!0,nodeId:`LPC7Ota9a`,scopeId:`YthgXUocT`,children:p(kt,{borderRadius:`0px`,boxShadow:``,height:`100%`,horizontalParallaxAmount:0,id:`LPC7Ota9a`,image:Rh({pixelHeight:1536,pixelWidth:2048,src:`/assets/framerusercontent.com/images/fhw5iWcCGm5yDJkr3B7AXsK848__8d126297a4.jpeg`,srcSet:`/assets/framerusercontent.com/images/fhw5iWcCGm5yDJkr3B7AXsK848__7fd309d7d9.jpeg 512w,/assets/framerusercontent.com/images/fhw5iWcCGm5yDJkr3B7AXsK848__c4b8d167cb.jpeg 1024w,/assets/framerusercontent.com/images/fhw5iWcCGm5yDJkr3B7AXsK848__8d126297a4.jpeg 2048w`},``),layoutId:`LPC7Ota9a`,style:{height:`100%`,width:`100%`},verticalParallaxAmount:75,width:`100%`})})})]}),p(S.section,{className:`framer-2frp74`,"data-border":!0,"data-framer-name":`Testimonial`,layout:ee,children:_(`div`,{className:`framer-w3ttw8`,children:[p(z,{links:[{href:{webPageId:`fhzyndQ7W`},implicitPathVariables:void 0},{href:{webPageId:`fhzyndQ7W`},implicitPathVariables:void 0},{href:{webPageId:`fhzyndQ7W`},implicitPathVariables:void 0}],children:e=>p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:327,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-rkhl0d-container`,nodeId:`A4lakCr57`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{F9nJqTVzk:e[1],variant:$(`e7jCmLncb`)},kbVNPWMyK:{F9nJqTVzk:e[2],variant:$(`jQUxj19s0`)}},children:p(Zm,{B2qWQM2Kn:`POR QUÉ ELEGIRNOS`,Civ3FnzVk:{borderColor:`var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(242, 237, 231, 0.2))`,borderStyle:`solid`,borderWidth:1},E1O3NBgQo:`RESERVAR POR WHATSAPP`,F9nJqTVzk:e[0],FAUEOSNK0:`Un predio cerrado y exclusivo: mientras estás vos, no hay nadie más.`,fnv7tXH0e:`wEyFkHYwL`,height:`100%`,id:`A4lakCr57`,koxy6GD8D:`GTNUDt4Zb`,l3EvDYHSy:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231))`,layoutId:`A4lakCr57`,rUvvcCQd7:`Lo que hace única a Quinta Dodó`,style:{width:`100%`},variant:$(`jeM7O389h`),width:`100%`})})})})})}),_(`div`,{className:`framer-1wyhfiu`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:530,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(rh,{__framer__animate:{transition:ig},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-7exunq-container`,nodeId:`tQGHbm8wF`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`EM8STj06d`)},kbVNPWMyK:{variant:$(`EM8STj06d`)}},children:p(Om,{height:`100%`,id:`tQGHbm8wF`,layoutId:`tQGHbm8wF`,style:{width:`100%`},variant:$(`KGCFJC1cC`),width:`100%`})})})})}),p(`div`,{className:`framer-1s2c8sb`,children:_(`div`,{className:`framer-1afixhc`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h5`,{className:`framer-styles-preset-ubyy1b`,"data-styles-preset":`NXuvUfUtD`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(255, 255, 255))`},children:`Piscina, salón, cancha, granja y hospedaje en un mismo predio`})}),className:`framer-1xj2le5`,"data-framer-name":`Text`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),_(`div`,{className:`framer-lpnsd1`,children:[_(`div`,{className:`framer-18it738`,children:[p(G,{height:80,width:`152px`,children:p(V,{className:`framer-km2sbw-container`,nodeId:`zymrVrq66`,scopeId:`YthgXUocT`,children:p(yp,{height:`100%`,id:`zymrVrq66`,layoutId:`zymrVrq66`,style:{width:`100%`},variant:$(`n1kfbTyQU`),width:`100%`})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-grtcq7-container`,nodeId:`VL2fwxNZD`,scopeId:`YthgXUocT`,children:p(yp,{height:`100%`,id:`VL2fwxNZD`,layoutId:`VL2fwxNZD`,style:{width:`100%`},variant:$(`bRcU_NRZl`),width:`100%`})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-1henfpw-container`,nodeId:`yGVFIVrta`,scopeId:`YthgXUocT`,children:p(yp,{height:`100%`,id:`yGVFIVrta`,layoutId:`yGVFIVrta`,style:{width:`100%`},variant:$(`n1kfbTyQU`),width:`100%`,WxWjGa_A5:Rh({pixelHeight:50,pixelWidth:277,src:`/assets/framerusercontent.com/images/eT2b7XhmunUwFgUZ01xGzZOa0U__058b5d5877.png`},``)})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-1yktj9y-container`,nodeId:`XPOw7l0iW`,scopeId:`YthgXUocT`,children:p(yp,{b8see0KbT:Rh({pixelHeight:400,pixelWidth:360,src:`/assets/framerusercontent.com/images/bu0dXRSJjBtjff52pKx7d4wY8__4f15343f19.png`},``),height:`100%`,id:`XPOw7l0iW`,layoutId:`XPOw7l0iW`,style:{width:`100%`},variant:$(`bRcU_NRZl`),width:`100%`})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-143u6we-container`,nodeId:`Qyl2gc0lY`,scopeId:`YthgXUocT`,children:p(yp,{height:`100%`,id:`Qyl2gc0lY`,layoutId:`Qyl2gc0lY`,style:{width:`100%`},variant:$(`n1kfbTyQU`),width:`100%`,WxWjGa_A5:Rh({pixelHeight:51,pixelWidth:289,src:`/assets/framerusercontent.com/images/zwntZ4XPeRh7xhSNqMT1b8DLE__d52e3555ba.png`},``)})})})]}),_(`div`,{className:`framer-202sw8`,children:[p(G,{height:80,width:`152px`,children:p(V,{className:`framer-1dkuajn-container`,nodeId:`C5UobKHKa`,scopeId:`YthgXUocT`,children:p(yp,{b8see0KbT:Rh({pixelHeight:400,pixelWidth:400,src:`/assets/framerusercontent.com/images/t75VDe99FQR8kvgOG7P6x6XP0__12f321ebc9.png`},``),height:`100%`,id:`C5UobKHKa`,layoutId:`C5UobKHKa`,style:{width:`100%`},variant:$(`bRcU_NRZl`),width:`100%`})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-16qx2bx-container`,nodeId:`GR3ztMtot`,scopeId:`YthgXUocT`,children:p(yp,{height:`100%`,id:`GR3ztMtot`,layoutId:`GR3ztMtot`,style:{width:`100%`},variant:$(`n1kfbTyQU`),width:`100%`,WxWjGa_A5:Rh({pixelHeight:50,pixelWidth:356,src:`/assets/framerusercontent.com/images/yVgjeuzt3dMYQBy5IcJocf2ly2I__30cb90a2d6.png`},``)})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-r2lg80-container`,nodeId:`dTCl9S5KJ`,scopeId:`YthgXUocT`,children:p(yp,{b8see0KbT:Rh({pixelHeight:381,pixelWidth:400,src:`/assets/framerusercontent.com/images/IX9DRFp5Gv3K2ldwwapozvYAY__c4469ba829.png`},``),height:`100%`,id:`dTCl9S5KJ`,layoutId:`dTCl9S5KJ`,style:{width:`100%`},variant:$(`bRcU_NRZl`),width:`100%`})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-8yoj96-container`,nodeId:`Yyb5ZYbHe`,scopeId:`YthgXUocT`,children:p(yp,{height:`100%`,id:`Yyb5ZYbHe`,layoutId:`Yyb5ZYbHe`,style:{width:`100%`},variant:$(`n1kfbTyQU`),width:`100%`,WxWjGa_A5:Rh({pixelHeight:50,pixelWidth:263,src:`/assets/framerusercontent.com/images/U3J3LorbS00fF3EUr959umL0V6o__22f4929cd4.png`},``)})})}),p(G,{height:80,width:`152px`,children:p(V,{className:`framer-s842yo-container`,nodeId:`L9fGixXw4`,scopeId:`YthgXUocT`,children:p(yp,{b8see0KbT:Rh({pixelHeight:400,pixelWidth:400,src:`/assets/framerusercontent.com/images/4COHChJQp5b8M5aB7dVrlsdU5E__12f321ebc9.png`},``),height:`100%`,id:`L9fGixXw4`,layoutId:`L9fGixXw4`,style:{width:`100%`},variant:$(`bRcU_NRZl`),width:`100%`})})})]})]})]})})]})]})}),p(S.section,{className:`framer-6eq253`,"data-framer-name":`Process`,layout:ee,children:_(`div`,{className:`framer-hmdthp`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:224,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-hjpfgh-container`,nodeId:`Q3SwbCOiI`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`U3HpoJyMQ`)},kbVNPWMyK:{variant:$(`MCpmnV3Gt`)}},children:p(Ut,{B2qWQM2Kn:`CÓMO RESERVAR`,FAUEOSNK0:`Tres pasos para asegurar tu fecha en Quinta Dodó y disfrutar sin imprevistos.`,gaIQh5FMV:{borderColor:`var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(242, 237, 231, 0.2))`,borderStyle:`solid`,borderWidth:0},height:`100%`,id:`Q3SwbCOiI`,koxy6GD8D:`GTNUDt4Zb`,l3EvDYHSy:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231))`,layoutId:`Q3SwbCOiI`,rUvvcCQd7:`Un proceso simple, transparente y directo`,style:{width:`100%`},variant:$(`OmSAbuIim`),width:`100%`})})})})}),_(`div`,{className:`framer-2wbabh`,children:[_(`div`,{className:`framer-25bmsq`,"data-framer-name":`Step 01`,id:H,ref:ue,children:[p(`div`,{className:`framer-114o7nd`,children:_(`div`,{className:`framer-1b1xdb0`,"data-framer-name":`Progressbar wrapper`,children:[p(`div`,{className:`framer-114vsn9`,"data-framer-name":`Dot wrapper`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{__framer__targets:void 0},kbVNPWMyK:{__framer__targets:void 0}},children:p(mh,{__framer__animate:{transition:_g},__framer__animateOnce:!1,__framer__enter:gg,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:ue,target:`animate`}],__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-6491ms`,"data-framer-name":`Dot`,style:{transformPerspective:1200}})})}),p(`div`,{className:`framer-1fkitvq`,"data-framer-name":`Progress bar`,children:p(mh,{__framer__adjustPosition:!0,__framer__animate:{transition:yg},__framer__animateOnce:!0,__framer__enter:vg,__framer__offset:0,__framer__parallaxTransformEnabled:!0,__framer__speed:0,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:ue,target:`animate`}],__framer__threshold:1,__perspectiveFX:!1,__targetOpacity:.6,className:`framer-4pmh76`,"data-framer-name":`Fill`,style:{transformPerspective:1200}})})]})}),p(`div`,{className:`framer-1elnbzg`,children:p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px) / 2, 1px)`}},children:p(G,{height:251,width:`max(min(${u?.width||`100vw`} - 32px, 1520px) / 2, 1px)`,children:p(rh,{__framer__animate:{transition:_g},__framer__animateOnce:!1,__framer__enter:bg,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:ue,target:`animate`}],__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1nxfkst-container`,nodeId:`lkF2qSmap`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`zM8CpP47d`)},kbVNPWMyK:{variant:$(`zqsTW8TXC`)}},children:p(jt,{ak2WbiDqS:`Nos escribís por WhatsApp con la fecha, la cantidad de personas y la modalidad elegida.`,DUim72CLt:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/framerusercontent.com/images/jy4ycMShtDVMLy5COajlsNqX50__0404e46688.jpeg`,srcSet:`/assets/framerusercontent.com/images/jy4ycMShtDVMLy5COajlsNqX50__f2c812bad0.jpeg 512w,/assets/framerusercontent.com/images/jy4ycMShtDVMLy5COajlsNqX50__42536f9797.jpeg 1024w,/assets/framerusercontent.com/images/jy4ycMShtDVMLy5COajlsNqX50__0404e46688.jpeg 1200w`},``),height:`100%`,id:`lkF2qSmap`,KY2qjuhNU:`/01`,layoutId:`lkF2qSmap`,PrmM1glBs:`Week 1-2`,style:{width:`100%`},variant:$(`RFW1D4IR6`),width:`100%`,y9D1Ns8Hn:`Consulta de fecha & modalidad`})})})})})})]}),_(`div`,{className:`framer-1qh0dex`,"data-framer-name":`Step 02`,id:de,ref:fe,children:[p(`div`,{className:`framer-rputj`,children:_(`div`,{className:`framer-1bpqna3`,"data-framer-name":`Progressbar wrapper`,children:[p(`div`,{className:`framer-18b5qu2`,"data-framer-name":`Dot wrapper`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{__framer__targets:void 0},kbVNPWMyK:{__framer__targets:void 0}},children:p(mh,{__framer__animate:{transition:_g},__framer__animateOnce:!1,__framer__enter:gg,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:fe,target:`animate`}],__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-r4snfh`,"data-framer-name":`Dot`,style:{transformPerspective:1200}})})}),p(`div`,{className:`framer-a3tep1`,"data-framer-name":`Progress bar`,children:p(mh,{__framer__adjustPosition:!0,__framer__animate:{transition:yg},__framer__animateOnce:!0,__framer__enter:vg,__framer__offset:0,__framer__parallaxTransformEnabled:!0,__framer__speed:0,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:fe,target:`animate`}],__framer__threshold:1,__perspectiveFX:!1,__targetOpacity:.6,className:`framer-1sq0hvn`,"data-framer-name":`Fill`,style:{transformPerspective:1200}})})]})}),p(`div`,{className:`framer-6fbhgn`,children:p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px) / 2, 1px)`}},children:p(G,{height:251,width:`max(min(${u?.width||`100vw`} - 32px, 1520px) / 2, 1px)`,children:p(rh,{__framer__animate:{transition:_g},__framer__animateOnce:!1,__framer__enter:bg,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:fe,target:`animate`}],__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-nguzrt-container`,nodeId:`WSEyy4Pap`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`zM8CpP47d`)},kbVNPWMyK:{variant:$(`zqsTW8TXC`)}},children:p(jt,{ak2WbiDqS:`Te enviamos el presupuesto detallado y congelás tu fecha con una seña bancaria segura.`,DUim72CLt:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/framerusercontent.com/images/ZYDgiVFxO0uDPg1gnHNkoD19PPA__0404e46688.jpeg`,srcSet:`/assets/framerusercontent.com/images/ZYDgiVFxO0uDPg1gnHNkoD19PPA__f2c812bad0.jpeg 512w,/assets/framerusercontent.com/images/ZYDgiVFxO0uDPg1gnHNkoD19PPA__42536f9797.jpeg 1024w,/assets/framerusercontent.com/images/ZYDgiVFxO0uDPg1gnHNkoD19PPA__0404e46688.jpeg 1200w`},``),height:`100%`,id:`WSEyy4Pap`,KY2qjuhNU:`/02`,layoutId:`WSEyy4Pap`,PrmM1glBs:`Week 3-6`,style:{width:`100%`},variant:$(`RFW1D4IR6`),width:`100%`,y9D1Ns8Hn:`Confirmación & seña bancaria`})})})})})})]}),_(`div`,{className:`framer-u0bf7j`,"data-framer-name":`Step 03`,id:q,ref:_e,children:[p(`div`,{className:`framer-wp46r2`,children:_(`div`,{className:`framer-6mm3x3`,"data-framer-name":`Progressbar wrapper`,children:[p(`div`,{className:`framer-qeqbnh`,"data-framer-name":`Dot wrapper`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{__framer__targets:void 0},kbVNPWMyK:{__framer__targets:void 0}},children:p(mh,{__framer__animate:{transition:_g},__framer__animateOnce:!1,__framer__enter:gg,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:_e,target:`animate`}],__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-64emjq`,"data-framer-name":`Dot`,style:{transformPerspective:1200}})})}),p(`div`,{className:`framer-1ihu4an`,"data-framer-name":`Progress bar`,children:p(mh,{__framer__adjustPosition:!0,__framer__animate:{transition:yg},__framer__animateOnce:!0,__framer__enter:vg,__framer__offset:0,__framer__parallaxTransformEnabled:!0,__framer__speed:0,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:_e,target:`animate`}],__framer__threshold:1,__perspectiveFX:!1,__targetOpacity:.6,className:`framer-jrjsd2`,"data-framer-name":`Fill`,style:{transformPerspective:1200}})})]})}),p(`div`,{className:`framer-1ckqj69`,children:p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px) / 2, 1px)`}},children:p(G,{height:251,width:`max(min(${u?.width||`100vw`} - 32px, 1520px) / 2, 1px)`,children:p(rh,{__framer__animate:{transition:_g},__framer__animateOnce:!1,__framer__enter:bg,__framer__styleAppearEffectEnabled:!0,__framer__targets:[{ref:_e,target:`animate`}],__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-10m1yhz-container`,nodeId:`Kmjn6K6Qw`,rendersWithMotion:!0,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`zM8CpP47d`)},kbVNPWMyK:{variant:$(`zqsTW8TXC`)}},children:p(jt,{ak2WbiDqS:`Llegás a la quinta con todo listo, limpio y preparado: el predio entero para vos y tus invitados.`,DUim72CLt:Rh({pixelHeight:896,pixelWidth:1200,src:`/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg`,srcSet:`/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__f2c812bad0.jpeg 512w,/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__42536f9797.jpeg 1024w,/assets/framerusercontent.com/images/99BDFysUyM0K66sHuK1SUal39U__0404e46688.jpeg 1200w`},``),height:`100%`,id:`Kmjn6K6Qw`,KY2qjuhNU:`/03`,layoutId:`Kmjn6K6Qw`,PrmM1glBs:`Week 7-12`,style:{width:`100%`},variant:$(`RFW1D4IR6`),width:`100%`,y9D1Ns8Hn:`Execution & Installation`})})})})})})]})]})]})}),p(S.section,{className:`framer-uyzntv`,"data-framer-name":`FAQs`,layout:ee,children:_(`div`,{className:`framer-1uugnvd`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:224,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-1nl1s68-container`,nodeId:`VvO5_J_Ox`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{variant:$(`U3HpoJyMQ`)},kbVNPWMyK:{variant:$(`MCpmnV3Gt`)}},children:p(Ut,{B2qWQM2Kn:`PREGUNTAS FRECUENTES`,FAUEOSNK0:`Las consultas más frecuentes sobre modalidades, horarios, seña y qué incluye el alquiler.`,gaIQh5FMV:{borderColor:`var(--token-5f9d0ed0-3a28-492f-91cc-b39dac28974e, rgba(44, 34, 24, 0.1))`,borderStyle:`solid`,borderWidth:1},height:`100%`,id:`VvO5_J_Ox`,koxy6GD8D:`GU0m0pCxW`,l3EvDYHSy:`var(--token-f71f3fb3-ed59-4297-9735-69a7386884ba, rgb(44, 34, 24))`,layoutId:`VvO5_J_Ox`,rUvvcCQd7:`Todo lo que necesitás saber antes de reservar`,style:{width:`100%`},variant:$(`OmSAbuIim`),width:`100%`})})})})}),_(mh,{__framer__animate:{transition:ig},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-1eu237y`,children:[p(`div`,{className:`framer-1xq2he8`,children:_(`div`,{className:`framer-y64fg2`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,children:`¿Tenés otra consulta? Escribinos por WhatsApp.`})}),className:`framer-q40z55`,"data-framer-name":`Text`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),p(J,{breakpoint:E,overrides:{BHHxTWG2D:{background:{alt:``,fit:`fill`,intrinsicHeight:2048,intrinsicWidth:2048,pixelHeight:2048,pixelWidth:2048,sizes:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) - 20px)`,src:`/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__648a05afdf.jpeg`,srcSet:`/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__6f1be7defe.jpeg 512w,/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__fb517ecbe0.jpeg 1024w,/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__648a05afdf.jpeg 2048w`}},kbVNPWMyK:{background:{alt:``,fit:`fill`,intrinsicHeight:2048,intrinsicWidth:2048,pixelHeight:2048,pixelWidth:2048,sizes:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`,src:`/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__648a05afdf.jpeg`,srcSet:`/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__6f1be7defe.jpeg 512w,/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__fb517ecbe0.jpeg 1024w,/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__648a05afdf.jpeg 2048w`}}},children:p(W,{background:{alt:``,fit:`fill`,intrinsicHeight:2048,intrinsicWidth:2048,pixelHeight:2048,pixelWidth:2048,sizes:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) - 40px)`,src:`/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__648a05afdf.jpeg`,srcSet:`/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__6f1be7defe.jpeg 512w,/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__fb517ecbe0.jpeg 1024w,/assets/framerusercontent.com/images/ZDXmYXxJB8FnUP0B7axLaM9w244__648a05afdf.jpeg 2048w`},className:`framer-wf3yf0`})}),p(z,{links:[{href:{webPageId:`j1zbu2LlJ`},implicitPathVariables:void 0},{href:{webPageId:`j1zbu2LlJ`},implicitPathVariables:void 0},{href:{webPageId:`j1zbu2LlJ`},implicitPathVariables:void 0}],children:e=>p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) - 20px)`},kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:53,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) - 40px)`,children:p(V,{className:`framer-12kg1b4-container`,nodeId:`JGPqf5P3f`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{mraUIbOsu:e[1]},kbVNPWMyK:{mraUIbOsu:e[2]}},children:p(Je,{height:`100%`,id:`JGPqf5P3f`,layoutId:`JGPqf5P3f`,mraUIbOsu:e[0],style:{width:`100%`},variant:$(`oRMomUJVX`),width:`100%`,xPptMBCot:`Contact Support`})})})})})})]})}),_(`div`,{className:`framer-qo8vv`,children:[_(`div`,{className:`framer-113x0bi`,children:[p(G,{height:14,children:p(V,{className:`framer-j0mc3w-container`,nodeId:`NlSiM5pZE`,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`NlSiM5pZE`,layoutId:`NlSiM5pZE`,SlFHHeous:`RESERVAS`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GU0m0pCxW`),width:`100%`})})}),_(`div`,{className:`framer-17yb4sg`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-1d3pjtx-container`,nodeId:`JlwER85cx`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`JlwER85cx`,ktvltmdNR:`La modalidad diurna va de 10:00 a 20:00 hs, con uso exclusivo del salón, la galería, la piscina y el parque durante toda la jornada.`,layoutId:`JlwER85cx`,NuFL0kKwx:`¿Cuáles son los horarios del día de campo?`,style:{width:`100%`},variant:$(`AteOMvoYh`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-16fo04s-container`,nodeId:`J2tlmurNM`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`J2tlmurNM`,ktvltmdNR:`Nos escribís por WhatsApp con la fecha, la cantidad de personas y la modalidad. Te pasamos el presupuesto y congelás la fecha con una seña bancaria. Ese día llegás con todo listo.`,layoutId:`J2tlmurNM`,NuFL0kKwx:`¿Cómo reservo una fecha?`,style:{width:`100%`},variant:$(`Tu0llLplW`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-ci1dgx-container`,nodeId:`UcLF2YXDs`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`UcLF2YXDs`,ktvltmdNR:`Sí, la quinta es 100% pet friendly y sin cargo extra. El parque está cercado en todo su perímetro.`,layoutId:`UcLF2YXDs`,NuFL0kKwx:`¿Se puede ir con mascotas?`,style:{width:`100%`},variant:$(`Tu0llLplW`),width:`100%`})})})})]})]}),_(`div`,{className:`framer-li526o`,children:[p(G,{height:14,children:p(V,{className:`framer-15gy1l1-container`,nodeId:`SKCMC9uQs`,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`SKCMC9uQs`,layoutId:`SKCMC9uQs`,SlFHHeous:`VALORES`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GU0m0pCxW`),width:`100%`})})}),_(`div`,{className:`framer-md2iqi`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-muvr51-container`,nodeId:`SE1HVEGrE`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`SE1HVEGrE`,ktvltmdNR:`El valor depende de la modalidad, la fecha y la cantidad de personas. Escribinos por WhatsApp con esos datos y te pasamos el presupuesto exacto.`,layoutId:`SE1HVEGrE`,NuFL0kKwx:`¿Cuánto sale el alquiler?`,style:{width:`100%`},variant:$(`AteOMvoYh`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-tgdhuj-container`,nodeId:`ZmKb2ABxj`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`ZmKb2ABxj`,ktvltmdNR:`No. Consultar disponibilidad y pedir presupuesto no tiene costo ni compromiso. Escribinos por WhatsApp con la fecha y la cantidad de personas.`,layoutId:`ZmKb2ABxj`,NuFL0kKwx:`¿La consulta tiene costo?`,style:{width:`100%`},variant:$(`Tu0llLplW`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-63eawt-container`,nodeId:`g5ZDjTgUB`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`g5ZDjTgUB`,ktvltmdNR:`El uso exclusivo del predio: salón climatizado, cocina completa con heladera vertical con freezer y un freezer aparte, galería con parrilla, mesa de ping-pong, piscina con solárium, cancha y parque. Carbón, leña y comida van por cuenta del grupo.`,layoutId:`g5ZDjTgUB`,NuFL0kKwx:`¿Qué incluye el alquiler?`,style:{width:`100%`},variant:$(`Tu0llLplW`),width:`100%`})})})})]})]}),_(`div`,{className:`framer-yop3hn`,children:[p(G,{height:14,children:p(V,{className:`framer-l4prip-container`,nodeId:`x09lr18bW`,scopeId:`YthgXUocT`,children:p(Ve,{height:`100%`,id:`x09lr18bW`,layoutId:`x09lr18bW`,SlFHHeous:`EL PREDIO`,UFegHV865:`var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, rgb(223, 2, 3))`,variant:$(`GU0m0pCxW`),width:`100%`})})}),_(`div`,{className:`framer-1ojzkjo`,children:[p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-cr9ual-container`,nodeId:`tdlKpBmU_`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`tdlKpBmU_`,ktvltmdNR:`El living-comedor cerrado tiene mesas largas para más de 25 comensales, cocina completa con horno, heladera vertical con freezer, un freezer aparte y vajilla.`,layoutId:`tdlKpBmU_`,NuFL0kKwx:`¿Cuánta gente entra en el salón?`,style:{width:`100%`},variant:$(`AteOMvoYh`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-e51xnm-container`,nodeId:`nPncGR_UC`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`nPncGR_UC`,ktvltmdNR:`Sí. Hay dos habitaciones climatizadas con sommier matrimonial y tres camas individuales, para hasta 5 personas, en las modalidades de fin de semana y estadía vacacional.`,layoutId:`nPncGR_UC`,NuFL0kKwx:`¿Hay lugar para dormir?`,style:{width:`100%`},variant:$(`Tu0llLplW`),width:`100%`})})})}),p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:134,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3)`,children:p(V,{className:`framer-130pjvr-container`,nodeId:`T4e7lDViE`,scopeId:`YthgXUocT`,children:p(op,{height:`100%`,id:`T4e7lDViE`,ktvltmdNR:`Sí. Coordinamos una visita para que conozcas el predio antes de confirmar. Escribinos y acordamos día y horario.`,layoutId:`T4e7lDViE`,NuFL0kKwx:`¿Se puede visitar la quinta antes de reservar?`,style:{width:`100%`},variant:$(`Tu0llLplW`),width:`100%`})})})})]})]})]})]})]})}),p(S.section,{className:`framer-1ugre1w`,"data-framer-name":`Journal`,layout:ee,children:_(`div`,{className:`framer-1l7valk`,children:[p(z,{links:[{href:{webPageId:`OMw2ERHP9`},implicitPathVariables:void 0},{href:{webPageId:`OMw2ERHP9`},implicitPathVariables:void 0},{href:{webPageId:`OMw2ERHP9`},implicitPathVariables:void 0}],children:e=>p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`min(${u?.width||`100vw`} - 24px, 1520px)`}},children:p(G,{height:187,width:`min(${u?.width||`100vw`} - 32px, 1520px)`,children:p(V,{className:`framer-120q0by-container`,nodeId:`iVYEJrOH7`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{T6RLhSQPD:e[1],variant:$(`frPWSaIVg`)},kbVNPWMyK:{T6RLhSQPD:e[2],variant:$(`do8Gz4RJ9`)}},children:p(Vt,{B2qWQM2Kn:`GUÍA RÁPIDA`,height:`100%`,id:`iVYEJrOH7`,ImGI0XuYk:`wEyFkHYwL`,JPh3A9twy:`VER LA GUÍA`,koxy6GD8D:`GTNUDt4Zb`,l3EvDYHSy:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(242, 237, 231))`,layoutId:`iVYEJrOH7`,rUvvcCQd7:`Modalidades, ubicación y preguntas frecuentes`,style:{width:`100%`},T6RLhSQPD:e[0],variant:$(`OxZOmCU6O`),width:`100%`})})})})})}),p(mh,{__framer__animate:{transition:ig},__framer__animateOnce:!0,__framer__enter:Kh,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__targetOpacity:1,className:`framer-nxwuhy`,children:_(`div`,{className:`framer-12t8mim`,"data-framer-name":`Frame 57`,children:[p(`div`,{className:`framer-n42tqi`,children:_(`div`,{className:`framer-1c60yxh`,"data-framer-name":`Wrapper`,children:[p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`h4`,{className:`framer-styles-preset-1tmtwu8`,"data-styles-preset":`DrC9SQV_P`,dir:`auto`,children:`Enterate de fechas disponibles y promociones`})}),className:`framer-1qm72sf`,"data-framer-name":`Newsletter Quarterly notes on new workS!`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),_(`div`,{className:`framer-1y98cfa`,"data-framer-name":`Form`,children:[p(ye,{className:`framer-17v138a`,nodeId:`CtOBXhoV6`,children:e=>_(y,{children:[p(U,{className:`framer-3sovc5`,inputName:`Email`,placeholder:`max@setframe.design`,required:!0,type:`email`}),p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`min(max(min(${u?.width||`100vw`} - 32px, 1520px), 50px) - 40px, (max(min(${u?.width||`100vw`} - 32px, 1520px), 50px) - 40px) * 0.49)`},kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:53,width:`calc(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) - 40px)`,children:p(V,{className:`framer-12xwfpz-container`,nodeId:`hTaqsuTLf`,scopeId:`YthgXUocT`,children:p(mt,{height:`100%`,id:`hTaqsuTLf`,layoutId:`hTaqsuTLf`,mKP6LVYc7:`Subscribe Now`,sSI3Z8O3C:`var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, rgb(255, 255, 255))`,style:{width:`100%`},tdgrfgAdO:{borderBottomWidth:0,borderColor:`var(--token-cd9ab0b2-9cd9-4969-83c9-2d224b49d0b5, rgb(244, 244, 244))`,borderLeftWidth:0,borderRightWidth:0,borderStyle:`solid`,borderTopWidth:1},type:`submit`,variant:xg(e,{pending:`bN3lJhnoq`,success:`lOmCHo7rr`},$(`JnhdRZA0D`)),width:`100%`})})})})]})}),p(K,{__fromCanvasComponent:!0,children:p(c,{children:p(`p`,{className:`framer-styles-preset-i0i9nf`,"data-styles-preset":`scO7LZAVg`,dir:`auto`,style:{"--framer-text-color":`var(--token-882f15a8-7122-4ca9-b62c-e2f8c413a3ab, rgb(221, 221, 221))`},children:`Dejanos tu mail y te avisamos cuando se liberan fines de semana.`})}),className:`framer-x2exes`,"data-framer-name":`Well for studios proud of their own digital presence; remove it if it doesn't fit.`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})]})}),_(`div`,{className:`framer-1mlbk15`,children:[p(`div`,{className:`framer-1tud2hr`,children:p(ge,{children:p(ug,{query:wg(),children:(e,t,n)=>p(y,{children:e?.map(({"RHenhwgxn.Nm9y_TLDH":e,id:t,lLbwIsKXg:n,Pg1bMBtx7:r,XBBGDydy1:i,XbITkRr0o:a,Z_6ZG5G1C:o,ziuBo4Hia:s},c)=>(e??=``,o??=0,i??=``,s??=``,r??=``,n??=``,p(T,{id:`tutNwIF4d-${t}`,children:p(O.Provider,{value:{lLbwIsKXg:n},children:p(`div`,{className:`framer-1cnrf11`,children:p(z,{links:[{href:{pathVariables:{lLbwIsKXg:n},webPageId:`QxOLakSMe`},implicitPathVariables:void 0},{href:{pathVariables:{lLbwIsKXg:n},webPageId:`QxOLakSMe`},implicitPathVariables:void 0},{href:{pathVariables:{lLbwIsKXg:n},webPageId:`QxOLakSMe`},implicitPathVariables:void 0}],children:t=>p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`max(max(min(${u?.width||`100vw`} - 32px, 1520px), 50px), 1px)`},kbVNPWMyK:{width:`max(max(min(${u?.width||`100vw`} - 24px, 1520px), 50px), 1px)`}},children:p(G,{height:360,width:`max(max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3, 1px)`,children:p(V,{className:`framer-6p2b7a-container`,nodeId:`rGXXNj4vZ`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{WDJj4HNLJ:t[1]},kbVNPWMyK:{WDJj4HNLJ:t[2]}},children:p(zt,{G_xZv3Zr3:i,height:`100%`,hmo739Jtv:sg(a),id:`rGXXNj4vZ`,layoutId:`rGXXNj4vZ`,style:{width:`100%`},sV1wUwJvF:s,TEL_rq6pQ:r,Tsf9T5bLO:e,variant:$(`EENJ9Q5FD`),WDJj4HNLJ:t[0],width:`100%`,XVCDuIzKO:Cg(Sg(o,{locale:``,notation:`standard`,style:`decimal`},ve),`min de lectura`)})})})})})})})})},t)))})})})}),p(`div`,{className:`framer-cn1c6s`,children:p(ge,{children:p(ug,{query:Eg(),children:(e,t,n)=>_(y,{children:[e?.map(({"RHenhwgxn.Nm9y_TLDH":e,id:t,lLbwIsKXg:n,Pg1bMBtx7:r,XBBGDydy1:i,XbITkRr0o:a,Z_6ZG5G1C:s,ziuBo4Hia:c},l)=>{e??=``,s??=0,i??=``,c??=``,r??=``,n??=``;let d=l+1;return p(T,{id:`O4UVjDZE9-${t}`,children:p(O.Provider,{value:{lLbwIsKXg:n},children:p(`div`,{className:`framer-yi7mc3`,children:p(z,{links:[{href:{pathVariables:{lLbwIsKXg:n},webPageId:`QxOLakSMe`},implicitPathVariables:void 0},{href:{pathVariables:{lLbwIsKXg:n},webPageId:`QxOLakSMe`},implicitPathVariables:void 0},{href:{pathVariables:{lLbwIsKXg:n},webPageId:`QxOLakSMe`},implicitPathVariables:void 0}],children:t=>p(J,{breakpoint:E,overrides:{BHHxTWG2D:{width:`max(max((max(min(${u?.width||`100vw`} - 32px, 1520px), 50px) - 20px) / 2, 50px), 1px)`},kbVNPWMyK:{width:`max(max(min(${u?.width||`100vw`} - 24px, 1520px), 50px), 1px)`}},children:p(G,{height:360,width:`max(max((max(min(${u?.width||`100vw`} - 32px, 1520px) / 4, 50px) * 3 - 20px) / 2, 50px), 1px)`,children:p(V,{className:`framer-129oto9-container`,nodeId:`oLGVTpmHt`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{WDJj4HNLJ:t[1]},kbVNPWMyK:{WDJj4HNLJ:t[2]}},children:p(zt,{G_xZv3Zr3:i,height:`100%`,hmo739Jtv:sg(a),id:`oLGVTpmHt`,layoutId:`oLGVTpmHt`,style:{width:`100%`},sV1wUwJvF:c,TEL_rq6pQ:r,Tsf9T5bLO:e,variant:$(Tg(ag(d),o)),WDJj4HNLJ:t[0],width:`100%`,XVCDuIzKO:Cg(Sg(s,{locale:``,notation:`standard`,style:`decimal`},ve),`min de lectura`)})})})})})})})})},t)}),p(z,{links:[{href:{webPageId:`OMw2ERHP9`},implicitPathVariables:void 0},{href:{webPageId:`OMw2ERHP9`},implicitPathVariables:void 0},{href:{webPageId:`OMw2ERHP9`},implicitPathVariables:void 0}],children:e=>p(J,{breakpoint:E,overrides:{kbVNPWMyK:{width:`max(min(${u?.width||`100vw`} - 24px, 1520px), 50px)`}},children:p(G,{height:53,width:`240px`,children:p(V,{className:`framer-qe5uid-container`,nodeId:`pWybRCL4S`,scopeId:`YthgXUocT`,children:p(J,{breakpoint:E,overrides:{BHHxTWG2D:{mraUIbOsu:e[1]},kbVNPWMyK:{mraUIbOsu:e[2]}},children:p(Je,{height:`100%`,id:`pWybRCL4S`,layoutId:`pWybRCL4S`,mraUIbOsu:e[0],style:{width:`100%`},variant:$(`wEyFkHYwL`),width:`100%`,xPptMBCot:`VER LA GUÍA`})})})})})})]})})})})]})]})})]})})]}),p(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-GkiUt.framer-97ry80, .framer-GkiUt .framer-97ry80 { display: block; }`,`.framer-GkiUt.framer-19vk3yv { align-content: center; align-items: center; background-color: var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, #f2ede7); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1350px; }`,`.framer-GkiUt .framer-aiycup, .framer-GkiUt .framer-134t1j6, .framer-GkiUt .framer-1s2c8sb, .framer-GkiUt .framer-lpnsd1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-ab78dw { align-content: center; align-items: center; background-color: var(--token-97ec7ff8-e305-467e-b9ac-c2ac103aea95, #e8e0d6); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 93vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 40px 16px 20px 16px; position: sticky; top: 60px; width: 100%; z-index: 1; }`,`.framer-GkiUt .framer-1agxmwb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 1px; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,`.framer-GkiUt .framer-1sdh4ul { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-15cyj6 { display: grid; flex: none; gap: 20px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1o7fi4e { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; grid-column: span 3; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-102xn4b-container, .framer-GkiUt .framer-fnt7hs-container, .framer-GkiUt .framer-km2sbw-container, .framer-GkiUt .framer-grtcq7-container, .framer-GkiUt .framer-1henfpw-container, .framer-GkiUt .framer-1yktj9y-container, .framer-GkiUt .framer-143u6we-container, .framer-GkiUt .framer-1dkuajn-container, .framer-GkiUt .framer-16qx2bx-container, .framer-GkiUt .framer-r2lg80-container, .framer-GkiUt .framer-8yoj96-container, .framer-GkiUt .framer-s842yo-container, .framer-GkiUt .framer-6p2b7a-container, .framer-GkiUt .framer-129oto9-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-GkiUt.framer-1qxd5su { background-color: rgba(26, 21, 18, 0.9); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,`.framer-GkiUt.framer-yfrlhf-container { aspect-ratio: 1.9444444444444444 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 637px); left: 50%; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 1239px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,`.framer-GkiUt .framer-14bzszq { align-self: stretch; background-color: var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, #f2ede7); flex: 1 0 0px; height: auto; opacity: 0; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,`.framer-GkiUt .framer-19uxege { align-content: center; align-items: center; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-14466wy { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-b3ilw6-container, .framer-GkiUt .framer-1geelzg-container, .framer-GkiUt .framer-123iawt-container, .framer-GkiUt .framer-kcrzb4-container, .framer-GkiUt .framer-oixsgs-container, .framer-GkiUt .framer-x6zpqt-container, .framer-GkiUt .framer-j0mc3w-container, .framer-GkiUt .framer-15gy1l1-container, .framer-GkiUt .framer-l4prip-container { flex: none; height: auto; position: relative; width: auto; }`,`.framer-GkiUt .framer-b4b9lw { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; pointer-events: none; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-q8kgu5-container, .framer-GkiUt .framer-1bl0khq-container, .framer-GkiUt .framer-oz1fcb-container, .framer-GkiUt .framer-7d8uri-container { flex: none; height: auto; position: relative; width: 240px; }`,`.framer-GkiUt .framer-1rekjd6 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-yg08gi { aspect-ratio: 1.09375 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 64px); overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 70px; will-change: var(--framer-will-change-filter-override, filter); }`,`.framer-GkiUt .framer-8ndmwc { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; pointer-events: none; position: relative; white-space: pre; width: auto; }`,`.framer-GkiUt .framer-1qbsg9t { --border-bottom-width: 1px; --border-color: var(--token-e0abea77-4284-4918-bb94-dc00fe96c8b4, #ddd4c9); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 200%; }`,`.framer-GkiUt .framer-hbnt28 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; }`,`.framer-GkiUt .framer-eygy0b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-16v743x { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-GkiUt .framer-me0pd6-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,`.framer-GkiUt .framer-nkj9oa-container, .framer-GkiUt .framer-1hjseti-container, .framer-GkiUt .framer-1hqv89-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,`.framer-GkiUt .framer-bk1czx { align-content: center; align-items: center; background-color: var(--token-f583f80d-77b6-48b4-9b80-6a3fc987668d, #000000); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 3; }`,`.framer-GkiUt .framer-17r3u4b-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,`.framer-GkiUt .framer-9j0qtz { align-content: center; align-items: center; background-color: var(--token-f583f80d-77b6-48b4-9b80-6a3fc987668d, #121110); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 120px 16px 120px 16px; position: relative; width: 100%; z-index: 2; }`,`.framer-GkiUt .framer-x0uo20, .framer-GkiUt .framer-w3ttw8, .framer-GkiUt .framer-1uugnvd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-14apyip-container, .framer-GkiUt .framer-82wf5q-container, .framer-GkiUt .framer-tc54hh-container, .framer-GkiUt .framer-rkhl0d-container, .framer-GkiUt .framer-7exunq-container, .framer-GkiUt .framer-hjpfgh-container, .framer-GkiUt .framer-1nl1s68-container, .framer-GkiUt .framer-12kg1b4-container, .framer-GkiUt .framer-1d3pjtx-container, .framer-GkiUt .framer-16fo04s-container, .framer-GkiUt .framer-ci1dgx-container, .framer-GkiUt .framer-muvr51-container, .framer-GkiUt .framer-tgdhuj-container, .framer-GkiUt .framer-63eawt-container, .framer-GkiUt .framer-cr9ual-container, .framer-GkiUt .framer-e51xnm-container, .framer-GkiUt .framer-130pjvr-container, .framer-GkiUt .framer-120q0by-container, .framer-GkiUt .framer-12xwfpz-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-GkiUt .framer-184l42h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1ov0ff3-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,`.framer-GkiUt .framer-vmlwa2-container { flex: none; height: auto; position: relative; width: 100%; z-index: 3; }`,`.framer-GkiUt .framer-16r0zzo-container { flex: none; height: auto; position: relative; width: 100%; z-index: 4; }`,`.framer-GkiUt .framer-1o5qyp2 { align-content: center; align-items: center; background-color: var(--token-191ab0d4-5b21-40da-b456-bd9916a1d580, #d4986a); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100vh; justify-content: center; overflow: hidden; padding: 12px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1qyh68q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; pointer-events: none; position: relative; width: 100%; }`,`.framer-GkiUt .framer-6dsgmj, .framer-GkiUt .framer-1su6k5l { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-15grppn { bottom: 16px; flex: none; gap: 10px; left: 16px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 16px; top: 16px; z-index: 1; }`,`.framer-GkiUt .framer-nyex8r-container { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: 0px; width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-5pvv60-container { bottom: 0px; flex: none; height: 20px; left: 0px; position: absolute; width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-1otrxs6-container { bottom: 0px; flex: none; height: 20px; position: absolute; right: 0px; width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-184q96j-container { flex: none; height: 20px; position: absolute; right: 0px; top: 0px; width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-hr0oaj-container { flex: none; height: 20px; left: 0px; position: absolute; top: calc(50.00000000000002% - 20px / 2); width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-ddm69z-container { flex: none; height: 20px; position: absolute; right: 0px; top: calc(50.00000000000002% - 20px / 2); width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-1c7ocwe-container { bottom: 0px; flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-1kly2or-container { flex: none; height: 20px; left: 0px; position: absolute; top: 0px; width: 20px; z-index: 1; }`,`.framer-GkiUt .framer-vfne17 { align-content: center; align-items: center; background-color: var(--token-cd9ab0b2-9cd9-4969-83c9-2d224b49d0b5, #f5f0eb); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 16px 120px 16px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1j0tlts, .framer-GkiUt .framer-1qudxke, .framer-GkiUt .framer-1l7valk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-lythd7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1gzi89d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1mr0e7r { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1lmcs10 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 6px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-wlkaep { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: start; flex: none; grid-column: span 3; height: auto; justify-self: start; position: relative; white-space: pre-wrap; width: 1fr; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-wo07li { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.3; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-xf94ee, .framer-GkiUt .framer-12t8mim { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-6rj6zc { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1czg0dk { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-GkiUt .framer-ig9uqr { aspect-ratio: 1 / 1; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; box-shadow: 0px 0px 0px 3px rgba(184, 132, 92, 0.8); flex: none; height: var(--framer-aspect-ratio-supported, 50px); position: relative; width: 50px; }`,`.framer-GkiUt .framer-13uu21g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-GkiUt .framer-y39w0u, .framer-GkiUt .framer-ng5u28, .framer-GkiUt .framer-uuh75s, .framer-GkiUt .framer-16o4nie { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-GkiUt .framer-1t01n0l { --framer-paragraph-spacing: 0px; flex: none; height: auto; opacity: 0.75; position: relative; white-space: pre; width: auto; }`,`.framer-GkiUt .framer-1rp2ojl { --border-bottom-width: 1px; --border-color: var(--token-5f9d0ed0-3a28-492f-91cc-b39dac28974e, #15130f); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200%; }`,`.framer-GkiUt .framer-1ndtbu { display: grid; flex: none; gap: 40px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-l4nkv6 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 4px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-kujbcq { align-self: start; flex: none; gap: 0px; height: 35px; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,`.framer-GkiUt .framer-5l6u8n { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1sz90u1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 480px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-52kmmd { align-self: start; flex: none; gap: 0px; height: 100%; justify-self: start; overflow: visible; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1u3www5-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,`.framer-GkiUt .framer-z1004e, .framer-GkiUt .framer-6eq253, .framer-GkiUt .framer-1ugre1w { align-content: center; align-items: center; background-color: var(--token-f583f80d-77b6-48b4-9b80-6a3fc987668d, #1a1512); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 120px 16px 120px 16px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-gkwf3n { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-f49yhy, .framer-GkiUt .framer-yi7mc3 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1tf26ni { --border-bottom-width: 1px; --border-color: var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(239, 235, 227, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200%; z-index: 1; }`,`.framer-GkiUt .framer-1dx3mxi { display: grid; flex: none; gap: 0px 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-124hxq4 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-q907b5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-GkiUt .framer-2671o0 { flex: none; height: 28px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 30px; will-change: var(--framer-will-change-filter-override, filter); }`,`.framer-GkiUt .framer-aqf9su { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-GkiUt .framer-1i8oovj { aspect-ratio: 1 / 1; border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; box-shadow: 0px 0px 0px 2px #ffffff; flex: none; height: var(--framer-aspect-ratio-supported, 50px); position: relative; width: 50px; }`,`.framer-GkiUt .framer-10sgb81 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,`.framer-GkiUt .framer-1ugpmrw { align-content: flex-end; align-items: flex-end; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; grid-column: span 3; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-ch19h8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 800px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-k7l5a3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-1tpxl96 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 120px 16px 120px 16px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1dxv4tc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,`.framer-GkiUt .framer-18gkykc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1o0445l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 880px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-yk9gzu, .framer-GkiUt .framer-1xj2le5, .framer-GkiUt .framer-q40z55, .framer-GkiUt .framer-1qm72sf { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-GkiUt .framer-118bfrb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1xp00tt { --border-bottom-width: 1px; --border-color: var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(239, 235, 227, 0.2)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 200%; }`,`.framer-GkiUt .framer-w9hpa2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-jfxzbe { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 60px 0px 0px 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-6td4le-container, .framer-GkiUt .framer-11r5d9w-container, .framer-GkiUt .framer-pipbj-container, .framer-GkiUt .framer-xhdqyx-container { flex: 1 0 0px; height: 240px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-1o3bsq5 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 240px 0px 0px 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-1xrzg7e { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-3o0upc { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 200px 0px 0px 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-qglh3m { background-color: var(--token-f583f80d-77b6-48b4-9b80-6a3fc987668d, #1a1512); bottom: 0px; flex: none; left: 0px; opacity: 0.5; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 2; }`,`.framer-GkiUt .framer-2frp74 { --border-bottom-width: 1px; --border-color: var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(239, 235, 227, 0.2)); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; background-color: var(--token-f583f80d-77b6-48b4-9b80-6a3fc987668d, #1a1512); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 120px 16px 120px 16px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1wyhfiu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1afixhc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 800px; }`,`.framer-GkiUt .framer-18it738, .framer-GkiUt .framer-202sw8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-hmdthp { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1520px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-2wbabh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-25bmsq, .framer-GkiUt .framer-1qh0dex, .framer-GkiUt .framer-u0bf7j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; width: 100%; }`,`.framer-GkiUt .framer-114o7nd, .framer-GkiUt .framer-rputj, .framer-GkiUt .framer-wp46r2 { align-self: stretch; flex: 1 0 0px; height: auto; max-width: 10%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,`.framer-GkiUt .framer-1b1xdb0, .framer-GkiUt .framer-1bpqna3, .framer-GkiUt .framer-6mm3x3 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 40px; }`,`.framer-GkiUt .framer-114vsn9, .framer-GkiUt .framer-18b5qu2, .framer-GkiUt .framer-qeqbnh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,`.framer-GkiUt .framer-6491ms, .framer-GkiUt .framer-r4snfh, .framer-GkiUt .framer-64emjq { aspect-ratio: 1 / 1; background-color: var(--token-cd9ab0b2-9cd9-4969-83c9-2d224b49d0b5, #f4f4f4); flex: none; height: var(--framer-aspect-ratio-supported, 15px); overflow: hidden; position: relative; width: 15px; z-index: 1; }`,`.framer-GkiUt .framer-1fkitvq, .framer-GkiUt .framer-a3tep1, .framer-GkiUt .framer-1ihu4an { align-content: center; align-items: center; background-color: var(--token-22dff10a-3ecc-4b96-8530-0a19dce3a26c, rgba(242, 237, 231, 0.2)); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 3px; z-index: 0; }`,`.framer-GkiUt .framer-4pmh76, .framer-GkiUt .framer-1sq0hvn, .framer-GkiUt .framer-jrjsd2 { background-color: var(--token-cd9ab0b2-9cd9-4969-83c9-2d224b49d0b5, #f4f4f4); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; flex: none; height: 50vh; opacity: 0.6; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-GkiUt .framer-1elnbzg, .framer-GkiUt .framer-6fbhgn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 40px 0px; position: relative; width: 1px; }`,`.framer-GkiUt .framer-1nxfkst-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 1; }`,`.framer-GkiUt .framer-nguzrt-container, .framer-GkiUt .framer-10m1yhz-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; z-index: 2; }`,`.framer-GkiUt .framer-1ckqj69 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 40px 0px; position: sticky; width: 1px; }`,`.framer-GkiUt .framer-uyzntv { align-content: center; align-items: center; background-color: var(--token-cd9ab0b2-9cd9-4969-83c9-2d224b49d0b5, #faf8f4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 120px 16px 120px 16px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1eu237y { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 80px 0px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1xq2he8 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-y64fg2 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-wf3yf0 { aspect-ratio: 0.9666666666666667 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 300px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,`.framer-GkiUt .framer-qo8vv { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; grid-column: span 3; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-113x0bi, .framer-GkiUt .framer-li526o, .framer-GkiUt .framer-yop3hn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-17yb4sg, .framer-GkiUt .framer-md2iqi, .framer-GkiUt .framer-1ojzkjo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-nxwuhy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-n42tqi { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; justify-self: start; overflow: visible; padding: 0px 40px 0px 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1c60yxh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1y98cfa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-17v138a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-3sovc5 { --framer-input-background: var(--token-4c0b3344-0af8-4492-84d4-6e4e0dd5d8d2, #333333); --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-adbf5976-a1aa-4ec2-95bd-aee8264eda17, #ffffff); --framer-input-font-family: "Geist"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 500; --framer-input-icon-mask-image: none; --framer-input-padding: 16px; --framer-input-placeholder-color: #999999; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-GkiUt .framer-x2exes { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: balance; flex: none; height: auto; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1mlbk15 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; grid-column: span 3; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1tud2hr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-1cnrf11 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-cn1c6s { display: grid; flex: none; gap: 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,`.framer-GkiUt .framer-qe5uid-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 0px; width: 240px; z-index: 1; }`,...ut,...Yt,...We,...Te,...Ae,...Nt,...Me,...ot,...et,`.framer-GkiUt[data-border="true"]::after, .framer-GkiUt [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,`@media (min-width: 768px) and (max-width: 1349.98px) { .framer-GkiUt.framer-19vk3yv { width: 768px; } .framer-GkiUt .framer-ab78dw { height: min-content; } .framer-GkiUt .framer-1agxmwb, .framer-GkiUt .framer-1sdh4ul { flex: none; height: min-content; } .framer-GkiUt .framer-15cyj6 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: unset; justify-content: space-between; } .framer-GkiUt .framer-1o7fi4e { align-self: unset; flex: 1 0 0px; gap: 40px; width: 1px; } .framer-GkiUt .framer-102xn4b-container { flex: none; width: 40%; } .framer-GkiUt.framer-yfrlhf-container { height: var(--framer-aspect-ratio-supported, 338px); width: 657px; } .framer-GkiUt .framer-1qyh68q { max-width: 600px; } .framer-GkiUt .framer-l4nkv6 { order: 0; } .framer-GkiUt .framer-kujbcq { order: 2; } .framer-GkiUt .framer-5l6u8n { grid-column: span 3; order: 1; } .framer-GkiUt .framer-52kmmd { grid-column: span 3; height: 294px; order: 3; } .framer-GkiUt .framer-gkwf3n { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-GkiUt .framer-1dx3mxi { gap: 20px 28px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-124hxq4 { gap: 40px; height: min-content; justify-content: flex-start; } .framer-GkiUt .framer-1i8oovj { height: var(--framer-aspect-ratio-supported, 44px); width: 44px; } .framer-GkiUt .framer-1ugpmrw { align-content: flex-start; align-items: flex-start; gap: 20px; grid-column: span 1; } .framer-GkiUt .framer-yk9gzu { max-width: 540px; } .framer-GkiUt .framer-1xj2le5 { width: 60%; } .framer-GkiUt .framer-114o7nd, .framer-GkiUt .framer-rputj, .framer-GkiUt .framer-wp46r2 { max-width: 8%; } .framer-GkiUt .framer-1b1xdb0, .framer-GkiUt .framer-1bpqna3, .framer-GkiUt .framer-6mm3x3 { width: 30px; } .framer-GkiUt .framer-1elnbzg, .framer-GkiUt .framer-6fbhgn, .framer-GkiUt .framer-1ckqj69 { padding: 20px 0px 20px 0px; } .framer-GkiUt .framer-1eu237y { grid-auto-rows: min-content; grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-1xq2he8 { order: 1; padding: 0px 0px 0px 20px; } .framer-GkiUt .framer-wf3yf0 { height: var(--framer-aspect-ratio-supported, 170px); } .framer-GkiUt .framer-qo8vv { gap: 40px; order: 0; } .framer-GkiUt .framer-12t8mim { gap: 40px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-n42tqi { gap: 0px; height: min-content; justify-content: center; order: 1; } .framer-GkiUt .framer-1c60yxh { gap: 24px; max-width: 49%; } .framer-GkiUt .framer-1mlbk15 { grid-column: span 1; order: 0; }}`,`@media (max-width: 767.98px) { .framer-GkiUt.framer-19vk3yv { width: 390px; } .framer-GkiUt .framer-ab78dw { height: min-content; padding: 100px 12px 100px 12px; position: relative; top: unset; } .framer-GkiUt .framer-1agxmwb { flex: none; gap: 24px; height: min-content; } .framer-GkiUt .framer-1sdh4ul { flex: none; height: min-content; order: 2; } .framer-GkiUt .framer-15cyj6 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; justify-content: flex-start; } .framer-GkiUt .framer-1o7fi4e { align-self: unset; flex-direction: column; gap: 48px; } .framer-GkiUt .framer-102xn4b-container { flex: none; order: 2; width: 100%; } .framer-GkiUt.framer-yfrlhf-container { height: var(--framer-aspect-ratio-supported, 180px); width: 350px; } .framer-GkiUt .framer-19uxege { align-self: unset; flex: none; height: min-content; order: 1; width: 100%; } .framer-GkiUt .framer-14466wy { gap: 24px; } .framer-GkiUt .framer-1qbsg9t { order: 1; } .framer-GkiUt .framer-hbnt28 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 20px; justify-content: flex-start; order: 0; } .framer-GkiUt .framer-eygy0b, .framer-GkiUt .framer-1xrzg7e { flex: none; width: 100%; } .framer-GkiUt .framer-9j0qtz, .framer-GkiUt .framer-vfne17, .framer-GkiUt .framer-z1004e, .framer-GkiUt .framer-1tpxl96, .framer-GkiUt .framer-2frp74, .framer-GkiUt .framer-6eq253, .framer-GkiUt .framer-uyzntv, .framer-GkiUt .framer-1ugre1w { padding: 100px 12px 100px 12px; } .framer-GkiUt .framer-15grppn { bottom: 12px; left: 12px; right: 12px; top: 12px; } .framer-GkiUt .framer-nyex8r-container, .framer-GkiUt .framer-1c7ocwe-container { height: 8px; left: calc(50.00000000000002% - 8px / 2); width: 8px; } .framer-GkiUt .framer-5pvv60-container, .framer-GkiUt .framer-1otrxs6-container, .framer-GkiUt .framer-184q96j-container, .framer-GkiUt .framer-1kly2or-container { height: 8px; width: 8px; } .framer-GkiUt .framer-hr0oaj-container, .framer-GkiUt .framer-ddm69z-container { height: 8px; top: calc(50.00000000000002% - 8px / 2); width: 8px; } .framer-GkiUt .framer-1mr0e7r { gap: 24px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-1lmcs10 { height: min-content; padding: 0px; } .framer-GkiUt .framer-wlkaep { grid-column: span 1; } .framer-GkiUt .framer-xf94ee, .framer-GkiUt .framer-cn1c6s { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-GkiUt .framer-1ndtbu { gap: 48px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-5l6u8n { gap: 24px; grid-column: span 1; } .framer-GkiUt .framer-52kmmd { aspect-ratio: 0.9696969696969697 / 1; height: var(--framer-aspect-ratio-supported, 378px); } .framer-GkiUt .framer-gkwf3n { grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-GkiUt .framer-1dx3mxi { gap: 32px 28px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-124hxq4 { gap: 64px; height: min-content; justify-content: center; order: 0; } .framer-GkiUt .framer-1ugpmrw { align-content: flex-start; align-items: flex-start; gap: 16px; grid-column: span 1; order: 1; } .framer-GkiUt .framer-1dxv4tc { gap: 80px; } .framer-GkiUt .framer-18gkykc, .framer-GkiUt .framer-1c60yxh { gap: 40px; } .framer-GkiUt .framer-w9hpa2 { flex-direction: column; } .framer-GkiUt .framer-jfxzbe, .framer-GkiUt .framer-1o3bsq5 { flex: none; padding: 0px; width: 100%; } .framer-GkiUt .framer-6td4le-container, .framer-GkiUt .framer-11r5d9w-container, .framer-GkiUt .framer-pipbj-container { height: 160px; } .framer-GkiUt .framer-1b1xdb0, .framer-GkiUt .framer-1bpqna3, .framer-GkiUt .framer-6mm3x3 { width: 20px; } .framer-GkiUt .framer-114vsn9, .framer-GkiUt .framer-18b5qu2, .framer-GkiUt .framer-qeqbnh { height: 48px; width: 48px; } .framer-GkiUt .framer-1elnbzg, .framer-GkiUt .framer-6fbhgn, .framer-GkiUt .framer-1ckqj69 { padding: 20px 0px 20px 0px; } .framer-GkiUt .framer-1eu237y { gap: 40px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); } .framer-GkiUt .framer-1xq2he8 { order: 1; padding: 0px; } .framer-GkiUt .framer-wf3yf0 { height: var(--framer-aspect-ratio-supported, 378px); } .framer-GkiUt .framer-qo8vv { gap: 40px; grid-column: span 1; order: 0; } .framer-GkiUt .framer-12t8mim { gap: 80px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); } .framer-GkiUt .framer-n42tqi { gap: 0px; height: min-content; justify-content: center; order: 1; padding: 0px; } .framer-GkiUt .framer-1mlbk15 { grid-column: span 1; order: 0; } .framer-GkiUt .framer-qe5uid-container { left: 0px; width: unset; }}`],`framer-GkiUt`),Ag.displayName=`Home`,Ag.defaultProps={height:16228,width:1350},I(Ag,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`/assets/framerusercontent.com/assets/gazZKZuUEtvr9ULhdA4SprP0AZ0.woff2`,weight:`600`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`/assets/framerusercontent.com/assets/pe8RoujoPxuTZhqoNzYqHX2MXA.woff2`,weight:`600`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+1F00-1FFF`,url:`/assets/framerusercontent.com/assets/teGhWnhH3bCqefKGsIsqFy3hK8.woff2`,weight:`600`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0370-03FF`,url:`/assets/framerusercontent.com/assets/qQHxgTnEk6Czu1yW4xS82HQWFOk.woff2`,weight:`600`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`/assets/framerusercontent.com/assets/MJ3N6lfN4iP5Um8rJGqLYl03tE.woff2`,weight:`600`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`/assets/framerusercontent.com/assets/PfdOpgzFf7N2Uye9JX7xRKYTgSc.woff2`,weight:`600`},{cssFamilyName:`Inter Display`,source:`framer`,style:`normal`,uiFamilyName:`Inter Display`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`/assets/framerusercontent.com/assets/0SEEmmWc3vovhaai4RlRQSWRrz0.woff2`,weight:`600`},{cssFamilyName:`Geist`,source:`google`,style:`normal`,uiFamilyName:`Geist`,url:`/assets/fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RruM4mJPby1QNtA.woff2`,weight:`500`}]},...th,...nh,...ih,...oh,...ch,...uh,...dh,...fh,...ph,...hh,...gh,..._h,...vh,...yh,...bh,...xh,...Sh,...Ch,...wh,...Th,...Eh,...Dh,...Oh,...kh,...N(dt),...N(Xt),...N(Ge),...N(De),...N(Pe),...N(Pt),...N(Re),...N(st),...N(tt)],{supportsExplicitInterCodegen:!0}),Ag.loader={load:(e,t)=>{let n=t.locale,r=ue.get(cg(),n),i=ue.get(lg(),n),a=ue.get(wg(),n),o=ue.get(Eg(),n);return Promise.allSettled([r.preload(),i.preload(),a.preload(),o.preload(),ne(Mp,{},t),ne(Ze,{},t),ne(Je,{},t),ne(Ve,{},t),ne(Zm,{},t),ne(Jp,{},t),ne(Qe,{},t),ne(Vt,{},t),ne(wt,{},t),ne(Om,{},t),ne(yp,{},t),ne(Ut,{},t),ne(jt,{},t),ne(op,{},t),ne(mt,{},t),(async()=>{let e=await r.readMaybeAsync()??[];return Promise.allSettled(e.flatMap(e=>ne(Lt,{},t)))})(),(async()=>{let e=await a.readMaybeAsync()??[];return Promise.allSettled(e.flatMap(e=>ne(zt,{},t)))})(),(async()=>{let e=await o.readMaybeAsync()??[];return Promise.allSettled(e.flatMap(e=>[ne(zt,{},t),ne(Je,{},t)]))})()])}},jg={exports:{Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FramerYthgXUocT`,slots:[],annotations:{framerComponentViewportWidth:`true`,framerContractVersion:`1`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"BHHxTWG2D":{"layout":["fixed","auto"]},"kbVNPWMyK":{"layout":["fixed","auto"]}}}`,framerColorSyntax:`true`,framerIntrinsicWidth:`1350`,framerIntrinsicHeight:`16228`,framerAcceptsLayoutTemplate:`true`,framerScrollSections:`{"e5FE2W6aP":{"pattern":":e5FE2W6aP","name":"service"},"Iaz3gWA8B":{"pattern":":Iaz3gWA8B","name":"step-01"},"FPw1o0xNx":{"pattern":":FPw1o0xNx","name":"step-02"},"NdBysKKCq":{"pattern":":NdBysKKCq","name":"step-03"}}`,framerLayoutTemplateFlowEffect:`true`,framerAutoSizeImages:`true`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`}},__FramerMetadata__:{type:`variable`}}}}))();export{jg as __FramerMetadata__,Ag as default,Mh as queryParamNames};
//# sourceMappingURL=fstYK9M8l7VwhPngczBQBERLbwwIzKMAjj0SiI3nBkc.Ce3RyAG3.mjs.map