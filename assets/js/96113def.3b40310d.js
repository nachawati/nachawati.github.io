"use strict";(self.webpackChunknachawati_github_io=self.webpackChunknachawati_github_io||[]).push([[691],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4135:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Compiling CasADi to WebAssembly",description:"This is my first post on Docusaurus 2.",authors:"nachawati",tags:["casadi","wasm","webassembly"],image:"/img/casadi.png"},o=void 0,s={permalink:"/blog/2023/08/08/compiling-casadi-webassembly",source:"@site/blog/2023-08-08-compiling-casadi-webassembly.md",title:"Compiling CasADi to WebAssembly",description:"This is my first post on Docusaurus 2.",date:"2023-08-08T00:00:00.000Z",formattedDate:"August 8, 2023",tags:[{label:"casadi",permalink:"/blog/tags/casadi"},{label:"wasm",permalink:"/blog/tags/wasm"},{label:"webassembly",permalink:"/blog/tags/webassembly"}],readingTime:1.07,hasTruncateMarker:!1,authors:[{name:"Mohamad Omar Nachawati",title:"Research Software Engineer",url:"https://nachawati.me",email:"mnachawa@gmail.com",imageURL:"/img/image.svg",key:"nachawati"}],frontMatter:{title:"Compiling CasADi to WebAssembly",description:"This is my first post on Docusaurus 2.",authors:"nachawati",tags:["casadi","wasm","webassembly"],image:"/img/casadi.png"}},l={authorsImageUrls:[void 0]},p=[],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Today I revisited ",(0,n.kt)("a",{parentName:"p",href:"https://web.casadi.org/"},"CasADi")," to see if I could use ",(0,n.kt)("a",{parentName:"p",href:"https://emscripten.org/"},"emscripten")," to compile it to a WebAssembly and run it inside of a Web browser. CasADi is an awesome tool for performing ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Computer_algebra"},"symbolic computation")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Automatic_differentiation"},"automatic differentiation"),", among other things. It also provides interfaces to popular open-source solvers, such as the MINLP solver ",(0,n.kt)("a",{parentName:"p",href:"https://www.coin-or.org/Bonmin/"},"BONMIN"),"."),(0,n.kt)("p",null,"I had previously used CasADi during my PhD to implement a grey-box algorithmic framework that I had designed and aptly named GreyOpt (",(0,n.kt)("a",{parentName:"p",href:"https://www.scitepress.org/PublishedPapers/2021/103501/103501.pdf"},"paper"),", ",(0,n.kt)("a",{parentName:"p",href:"http://mason.gmu.edu/~mnachawa/icores2021-slides.pdf"},"slides"),"). I also used CasADi for implementing the main backend of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nachawati/unity"},"Unity DGMS"),", an open-source JSONiq analytics engine. I thought it would be interesting to see if at least some functionality could be easily ported to run directly in the browser."),(0,n.kt)("p",null,"It was fairly easy to add a new executable target in ",(0,n.kt)("a",{parentName:"p",href:"https://cmake.org/"},"CMAKE"),", along with a simple C API that wrapped some functions for constructing symbolic variables and for performing basic symbolic arithmetic. I initially got some compilation errors stemming from an issue with some preprocessor directives that conditionally enabled the ",(0,n.kt)("inlineCode",{parentName:"p"},"pack")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"unpack")," methods for ",(0,n.kt)("inlineCode",{parentName:"p"},"unsigned int&")," arguments based on the value of ",(0,n.kt)("inlineCode",{parentName:"p"},"SIZE_MAX")," (WASM support is currently only 32-bit)."),(0,n.kt)("p",null,"After resolving those errors, the build and linking of the CasADi WebAssembly completed successfully. Now I can use CasADi to do computer algebra in Chromium ;-)"))}u.isMDXComponent=!0}}]);