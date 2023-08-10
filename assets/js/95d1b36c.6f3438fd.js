"use strict";(self.webpackChunknachawati_github_io=self.webpackChunknachawati_github_io||[]).push([[5658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6,image:"/img/cube-1873956_640.png"},i="6 - Run Local Query (Multiple File)",l={unversionedId:"getting-started-with-unity-dgms/run-local-query-multiple-file",id:"getting-started-with-unity-dgms/run-local-query-multiple-file",title:"6 - Run Local Query (Multiple File)",description:"Assuming your current working directory is set to /home//workspace, run the following command:",source:"@site/docs/getting-started-with-unity-dgms/6-run-local-query-multiple-file.md",sourceDirName:"getting-started-with-unity-dgms",slug:"/getting-started-with-unity-dgms/run-local-query-multiple-file",permalink:"/docs/getting-started-with-unity-dgms/run-local-query-multiple-file",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,image:"/img/cube-1873956_640.png"},sidebar:"tutorialsSidebar",previous:{title:"5 - Run Local Query (Single File)",permalink:"/docs/getting-started-with-unity-dgms/run-local-query-single-file"},next:{title:"7 - Run Local Notebook Server",permalink:"/docs/getting-started-with-unity-dgms/run-notebook-server"}},u={},c=[],s={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6---run-local-query-multiple-file"},"6 - Run Local Query (Multiple File)"),(0,a.kt)("p",null,"Assuming your current working directory is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/<username>/workspace"),", run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"UNITY_PACKAGES=/home/<username>/packages unity run example.jq -o out.json >> stdout.txt\n")),(0,a.kt)("p",null,"Listing of ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/<username>/workspace/example.jq")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'jsoniq version "1.0";\n\nimport module namespace a = "http://dgms.io/modules/analytics";\n\nimport module namespace m = "http://acme.com/mymodel.jqm";\n\nlet $input := a:collection("http://acme.com/mydata.json")\n\nreturn a:maximize({\n    model: m:model#1,\n    input: $input,\n    objective: "cost",\n    options: {\n        solver: "minos"\n    }\n})\n')),(0,a.kt)("p",null,"Listing of ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/<username>/packages/mypackage/lib/com/acme/mydata.json")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "x": {"float?": null},\n    "y": {"float?": null}\n}\n')),(0,a.kt)("p",null,"Listing of ",(0,a.kt)("inlineCode",{parentName:"p"},"/home/<username>/packages/mypackage/lib/com/acme/mymodel.jqm")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'jsoniq version "1.0";\n\nmodule namespace m = "http://acme.com/mymodel.jqm";\n\ndeclare function m:model($input)\n{\n    let $x := $input.x\n    let $y := $input.y\n    return\n    {\n        cost: 10 * $x + 15 * $y,\n         constraints:\n            $x div 40 + $y div 30 le 40 and\n            $x ge 0 and $x le 1000 and\n            $y ge 0 and $y le 860\n     }\n};\n')))}p.isMDXComponent=!0}}]);