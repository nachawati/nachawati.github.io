"use strict";(self.webpackChunknachawati_github_io=self.webpackChunknachawati_github_io||[]).push([[644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),g=s(r),d=i,m=g["".concat(l,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[g]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:2,image:"/img/cube-1873956_640.png"},a="2 - Pull Unity DGMS Docker Image",c={unversionedId:"getting-started-with-unity-dgms/pull-unity-dgms-docker-image",id:"getting-started-with-unity-dgms/pull-unity-dgms-docker-image",title:"2 - Pull Unity DGMS Docker Image",description:"First login to the GitLab.com registry, and then pull the Unity DGMS docker image:",source:"@site/docs/getting-started-with-unity-dgms/2-pull-unity-dgms-docker-image.md",sourceDirName:"getting-started-with-unity-dgms",slug:"/getting-started-with-unity-dgms/pull-unity-dgms-docker-image",permalink:"/docs/getting-started-with-unity-dgms/pull-unity-dgms-docker-image",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,image:"/img/cube-1873956_640.png"},sidebar:"tutorialsSidebar",previous:{title:"1 - Prerequisites",permalink:"/docs/getting-started-with-unity-dgms/prerequisites"},next:{title:"3 - Add Unity DGMS Shell Script to PATH",permalink:"/docs/getting-started-with-unity-dgms/add-unity-dgms-shell-script-to-path"}},l={},s=[],u={toc:s},g="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2---pull-unity-dgms-docker-image"},"2 - Pull Unity DGMS Docker Image"),(0,i.kt)("p",null,"First login to the GitLab.com registry, and then pull the Unity DGMS docker image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"    docker login registry.gitlab.com\n    docker pull registry.gitlab.com/nachawati/unity/docker:0.0.1-SNAPSHOT\n")))}p.isMDXComponent=!0}}]);