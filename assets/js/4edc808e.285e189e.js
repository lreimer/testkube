"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>I,contentTitle:()=>E,default:()=>S,frontMatter:()=>j,metadata:()=>_,toc:()=>D});var r=n(87462),o=(n(67294),n(3905)),a=(n(39960),"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0);function i(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on".concat(t),(function(){n(window.event)}))}function s(e,t){for(var n=t.slice(0,t.length-1),r=0;r<n.length;r++)n[r]=e[n[r].toLowerCase()];return n}function l(e){"string"!=typeof e&&(e="");for(var t=(e=e.replace(/\s/g,"")).split(","),n=t.lastIndexOf("");n>=0;)t[n-1]+=",",t.splice(n,1),n=t.lastIndexOf("");return t}for(var u={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":a?173:189,"=":a?61:187,";":a?59:186,"'":222,"[":219,"]":221,"\\":220},c={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},p={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},f={16:!1,18:!1,17:!1,91:!1},d={},m=1;m<20;m++)u["f".concat(m)]=111+m;var y=[],h=!1,k="all",b=[],g=function(e){return u[e.toLowerCase()]||c[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)};function v(e){k=e||"all"}function w(){return k||"all"}var O=function(e){var t=e.key,n=e.scope,r=e.method,o=e.splitKey,a=void 0===o?"+":o;l(t).forEach((function(e){var t=e.split(a),o=t.length,i=t[o-1],l="*"===i?"*":g(i);if(d[l]){n||(n=w());var u=o>1?s(c,t):[];d[l]=d[l].filter((function(e){return!((!r||e.method===r)&&e.scope===n&&function(e,t){for(var n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,o=!0,a=0;a<n.length;a++)-1===r.indexOf(n[a])&&(o=!1);return o}(e.mods,u))}))}}))};function x(e,t,n,r){var o;if(t.element===r&&(t.scope===n||"all"===t.scope)){for(var a in o=t.mods.length>0,f)Object.prototype.hasOwnProperty.call(f,a)&&(!f[a]&&t.mods.indexOf(+a)>-1||f[a]&&-1===t.mods.indexOf(+a))&&(o=!1);(0!==t.mods.length||f[16]||f[18]||f[17]||f[91])&&!o&&"*"!==t.shortcut||!1===t.method(e,t)&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}function C(e,t){var n=d["*"],r=e.keyCode||e.which||e.charCode;if(T.filter.call(this,e)){if(93!==r&&224!==r||(r=91),-1===y.indexOf(r)&&229!==r&&y.push(r),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(t){var n=p[t];e[t]&&-1===y.indexOf(n)?y.push(n):!e[t]&&y.indexOf(n)>-1?y.splice(y.indexOf(n),1):"metaKey"===t&&e[t]&&3===y.length&&(e.ctrlKey||e.shiftKey||e.altKey||(y=y.slice(y.indexOf(n))))})),r in f){for(var o in f[r]=!0,c)c[o]===r&&(T[o]=!0);if(!n)return}for(var a in f)Object.prototype.hasOwnProperty.call(f,a)&&(f[a]=e[p[a]]);e.getModifierState&&(!e.altKey||e.ctrlKey)&&e.getModifierState("AltGraph")&&(-1===y.indexOf(17)&&y.push(17),-1===y.indexOf(18)&&y.push(18),f[17]=!0,f[18]=!0);var i=w();if(n)for(var s=0;s<n.length;s++)n[s].scope===i&&("keydown"===e.type&&n[s].keydown||"keyup"===e.type&&n[s].keyup)&&x(e,n[s],i,t);if(r in d)for(var l=0;l<d[r].length;l++)if(("keydown"===e.type&&d[r][l].keydown||"keyup"===e.type&&d[r][l].keyup)&&d[r][l].key){for(var u=d[r][l],m=u.splitKey,h=u.key.split(m),k=[],b=0;b<h.length;b++)k.push(g(h[b]));k.sort().join("")===y.sort().join("")&&x(e,u,i,t)}}}function T(e,t,n){y=[];var r=l(e),o=[],a="all",u=document,p=0,m=!1,k=!0,v="+",w=!1;for(void 0===n&&"function"==typeof t&&(n=t),"[object Object]"===Object.prototype.toString.call(t)&&(t.scope&&(a=t.scope),t.element&&(u=t.element),t.keyup&&(m=t.keyup),void 0!==t.keydown&&(k=t.keydown),void 0!==t.capture&&(w=t.capture),"string"==typeof t.splitKey&&(v=t.splitKey)),"string"==typeof t&&(a=t);p<r.length;p++)o=[],(e=r[p].split(v)).length>1&&(o=s(c,e)),(e="*"===(e=e[e.length-1])?"*":g(e))in d||(d[e]=[]),d[e].push({keyup:m,keydown:k,scope:a,mods:o,shortcut:r[p],method:n,key:r[p],splitKey:v,element:u});void 0!==u&&!function(e){return b.indexOf(e)>-1}(u)&&window&&(b.push(u),i(u,"keydown",(function(e){C(e,u)}),w),h||(h=!0,i(window,"focus",(function(){y=[]}),w)),i(u,"keyup",(function(e){C(e,u),function(e){var t=e.keyCode||e.which||e.charCode,n=y.indexOf(t);if(n>=0&&y.splice(n,1),e.key&&"meta"===e.key.toLowerCase()&&y.splice(0,y.length),93!==t&&224!==t||(t=91),t in f)for(var r in f[t]=!1,c)c[r]===t&&(T[r]=!1)}(e)}),w))}var P={setScope:v,getScope:w,deleteScope:function(e,t){var n,r;for(var o in e||(e=w()),d)if(Object.prototype.hasOwnProperty.call(d,o))for(n=d[o],r=0;r<n.length;)n[r].scope===e?n.splice(r,1):r++;w()===e&&v(t||"all")},getPressedKeyCodes:function(){return y.slice(0)},isPressed:function(e){return"string"==typeof e&&(e=g(e)),-1!==y.indexOf(e)},filter:function(e){var t=e.target||e.srcElement,n=t.tagName,r=!0;return!t.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||t.readOnly)||(r=!1),r},trigger:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";Object.keys(d).forEach((function(n){var r=d[n].find((function(n){return n.scope===t&&n.shortcut===e}));r&&r.method&&r.method()}))},unbind:function(e){if(void 0===e)Object.keys(d).forEach((function(e){return delete d[e]}));else if(Array.isArray(e))e.forEach((function(e){e.key&&O(e)}));else if("object"==typeof e)e.key&&O(e);else if("string"==typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0],a=n[1];"function"==typeof o&&(a=o,o=""),O({key:e,scope:o,method:a,splitKey:"+"})}},keyMap:u,modifier:c,modifierMap:p};for(var N in P)Object.prototype.hasOwnProperty.call(P,N)&&(T[N]=P[N]);if("undefined"!=typeof window){var K=window.hotkeys;T.noConflict=function(e){return e&&window.hotkeys===T&&(window.hotkeys=K),T},window.hotkeys=T}T.filter=function(){return!0};T.isPressed,n(44996);const j={sidebar_position:0,sidebar_label:"Welcome",hide_table_of_contents:!0},E="Testkube",_={unversionedId:"index",id:"index",title:"Testkube",description:"Testkube is a Kubernetes-native testing framework for Testers and Developers that allows you to automate the executions",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/testkube/",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/index.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Welcome",hide_table_of_contents:!0},sidebar:"tutorialSidebar",next:{title:"Testkube Cloud",permalink:"/testkube/category/testkube-cloud"}},I={},D=[{value:"Testkube helps you:",id:"testkube-helps-you",level:3},{value:"The main Testkube components are:",id:"the-main-testkube-components-are",level:3},{value:"Testkube Cloud",id:"testkube-cloud",level:3},{value:"Blog Posts",id:"blog-posts",level:2},{value:"Questions or Comments?",id:"questions-or-comments",level:2}],A={toc:D};function S(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube"},"Testkube"),(0,o.kt)("p",{class:"intro--index"},(0,o.kt)("small",null,"Testkube is a Kubernetes-native testing framework for Testers and Developers that allows you to automate the executions of your existing testing tools inside your Kubernetes cluster, removing all the complexity from your CI/CD/GitOps pipelines.")),(0,o.kt)("p",null,"Tests are meant to be part of a cluster's state and can be executed as needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Manually via kubectl CLI."),(0,o.kt)("li",{parentName:"ul"},"Externally triggered via API (CI, external tooling, etc)."),(0,o.kt)("li",{parentName:"ul"},"Automatically on deployment of annotated/labeled services/pods/etc (WIP).")),(0,o.kt)("h3",{id:"testkube-helps-you"},"Testkube helps you:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid vendor lock-in for test orchestration and execution in CI/CD pipelines."),(0,o.kt)("li",{parentName:"ul"},"Make it easy to orchestrate and run any kinds of tests - functional, load/performance, security, compliance, etc.,\nin your clusters, without having to wrap them in docker-images or provide network access."),(0,o.kt)("li",{parentName:"ul"},"Make it possible to decouple test execution from build processes, allowing engineers to run specific tests whenever needed."),(0,o.kt)("li",{parentName:"ul"},"Centralize all test results in a consistent format for actionable QA analytics."),(0,o.kt)("li",{parentName:"ul"},"Provide a modular architecture for adding new types of test scripts and executors.")),(0,o.kt)("h3",{id:"the-main-testkube-components-are"},"The main Testkube components are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubectl plugin - simple - installed w/o 3rd party repositories (like Krew etc), communicates with API server."),(0,o.kt)("li",{parentName:"ul"},"API Server - Work orchestrator, Runs executors, gathers execution results."),(0,o.kt)("li",{parentName:"ul"},"Custom Resource Descriptors (CRD) Operator - Watches Testkube Custom Resources (CR), handles changes, communicates with API Server."),(0,o.kt)("li",{parentName:"ul"},"Executors - Run tests defined for specific runner."),(0,o.kt)("li",{parentName:"ul"},"Results DB - For centralized test results management."),(0,o.kt)("li",{parentName:"ul"},"A simple browser-based ",(0,o.kt)("a",{parentName:"li",href:"/testkube/using-testkube/UI"},"User Interface")," for monitoring test results.")),(0,o.kt)("h3",{id:"testkube-cloud"},"Testkube Cloud"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Testkube managed solution for enterprises"),(0,o.kt)("li",{parentName:"ul"},"It can manage complexinty of storing artifacts and test execution results for you"),(0,o.kt)("li",{parentName:"ul"},"It can manage multiple clusters"),(0,o.kt)("li",{parentName:"ul"},"It can manage your organisation and access the structure"),(0,o.kt)("li",{parentName:"ul"},"It can manage API keys access for easier integration into CI/CD systems")),(0,o.kt)("h2",{id:"blog-posts"},"Blog Posts"),(0,o.kt)("p",null,"Check out our blog posts that highlight Testkube functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testkube.io/blog/testkube-v17-release-notes"},"Testkube Release v1.7")," - November 9, 2022")),(0,o.kt)("h2",{id:"questions-or-comments"},"Questions or Comments?"),(0,o.kt)("p",null,"What do you think of Testkube? We'd LOVE to hear from you! Please share your experiences and, of course, ideas on how we can make it better. Feel free to reach out on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/uNuhy6GDyn"},"Discord server"),"."))}S.isMDXComponent=!0}}]);