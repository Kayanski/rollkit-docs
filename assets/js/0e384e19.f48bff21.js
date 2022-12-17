"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=u(o),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},p),{},{components:o})):n.createElement(h,a({ref:t},p))}));function h(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,a=new Array(i);a[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:l,a[1]=r;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9881:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>u});var n=o(7462),l=(o(7294),o(3905));const i={sidebar_position:1},a="Introduction to RollKit",r={unversionedId:"intro",id:"intro",title:"Introduction to RollKit",description:"RollKit is a modular development kit for anyone to easily deploy their own",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Core Concepts",permalink:"/docs/core-concepts"}},s={},u=[{value:"Main Components of RollKit",id:"main-components-of-rollkit",level:2},{value:"1. Build rollups using an SDK",id:"1-build-rollups-using-an-sdk",level:3},{value:"2. Compatible with multiple VMs",id:"2-compatible-with-multiple-vms",level:3},{value:"3. Develop with modular software",id:"3-develop-with-modular-software",level:3},{value:"Use Cases",id:"use-cases",level:2},{value:"Build a sovereign rollup on Celestia",id:"build-a-sovereign-rollup-on-celestia",level:3},{value:"Build an app chain on Celestia",id:"build-an-app-chain-on-celestia",level:3},{value:"Developer Pain Points for Monolithic Blockchains",id:"developer-pain-points-for-monolithic-blockchains",level:2},{value:"Modular Blockchains",id:"modular-blockchains",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"introduction-to-rollkit"},"Introduction to RollKit"),(0,l.kt)("p",null,"RollKit is a modular development kit for anyone to easily deploy their own\nblockchain with minimal overhead. It solves the problem of bootstrapping a\nsecure and decentralized validator set while removing the burden of maintaining\na new consensus network."),(0,l.kt)("p",null,"RollKit provides developers with a ",(0,l.kt)("a",{parentName:"p",href:"./core-concepts"},"modular design")," to enable\na truly flexible development process. Importantly, RollKit rollups are\n",(0,l.kt)("a",{parentName:"p",href:"./rollkit-stack"},"sovereign by default"),", enabling communities to use their\nsovereign rollup as a coordination mechanism."),(0,l.kt)("p",null,"RollKit will become a credibly neutral public good for building rollups.\nWe want RollKit to contributions from multiple organizations in the future.\nAs it stands, ",(0,l.kt)("a",{parentName:"p",href:"https://celestia.org"},"Celestia Labs")," will be the core maintainer\nto bootstrap, develop, and fund R&D for RollKit."),(0,l.kt)("admonition",{title:"Tip",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you're familiar with RollKit, you may want to skip to the ",(0,l.kt)("a",{parentName:"p",href:"./category/tutorials"},"tutorials section"))),(0,l.kt)("h2",{id:"main-components-of-rollkit"},"Main Components of RollKit"),(0,l.kt)("h3",{id:"1-build-rollups-using-an-sdk"},"1. Build rollups using an SDK"),(0,l.kt)("p",null,"Easily deploy a new rollup using a ready-made template."),(0,l.kt)("h3",{id:"2-compatible-with-multiple-vms"},"2. Compatible with multiple VMs"),(0,l.kt)("p",null,"Rollmint sovereign rollups can plug in any Virtual Machine (VM) compatible\nwith the ABCI interface."),(0,l.kt)("h3",{id:"3-develop-with-modular-software"},"3. Develop with modular software"),(0,l.kt)("p",null,"Rollmint is built for developers to easily modify or replace components\nof the rollup, unlocking a more flexible development process."),(0,l.kt)("h2",{id:"use-cases"},"Use Cases"),(0,l.kt)("h3",{id:"build-a-sovereign-rollup-on-celestia"},"Build a sovereign rollup on Celestia"),(0,l.kt)("h3",{id:"build-an-app-chain-on-celestia"},"Build an app chain on Celestia"),(0,l.kt)("h2",{id:"developer-pain-points-for-monolithic-blockchains"},"Developer Pain Points for Monolithic Blockchains"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If a developer wants to build a monolithic blockchain using a template,\nlike the Cosmos SDK, they need to bootstrap a decentralized validator set\nand maintain the overhead of a consensus network."),(0,l.kt)("li",{parentName:"ol"},"If a developer wants to build a rollup using an SDK, they currently have\nno options. Their only choices are to fork an existing rollup or build their\nown from scratch.")),(0,l.kt)("p",null,"If you're a developer who wants to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"deploy a chain for your application"),(0,l.kt)("li",{parentName:"ul"},"build a new blockchain in general"),(0,l.kt)("li",{parentName:"ul"},"build a rollup"),(0,l.kt)("li",{parentName:"ul"},"build a chain for your sovereign community")),(0,l.kt)("p",null,"You've come to the right place."),(0,l.kt)("h2",{id:"modular-blockchains"},"Modular Blockchains"),(0,l.kt)("p",null,"A modular blockchain is a type of blockchain that specializes in only a few\nfunctions, rather than all of them. The key functions are:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Execution"),(0,l.kt)("li",{parentName:"ol"},"Settlement"),(0,l.kt)("li",{parentName:"ol"},"Consensus"),(0,l.kt)("li",{parentName:"ol"},"Data availability")),(0,l.kt)("p",null,"Modular blockchains are arranged as a modular stack, with each blockchain in\nthe stack referred to as a \u201clayer\u201d. Since modular blockchains only provided\na subset of the key functions, this enables them to to be purpose-built for\nthe functions it provides."),(0,l.kt)("p",null,"For example, Celestia is a consensus and data availability layer as it only\nprovides ordering over transactions (consensus) and verifying that their data\nis available."),(0,l.kt)("p",null,"RollKit is as a developer toolkit to bootstrap a sequencer and execution layer\nfor developers to build their own modular rollups on using Celestia or another\nlayer for Data Availability and Consensus."),(0,l.kt)("p",null,"Now, you're ready to dive deeper into the core concepts of RollKit."))}c.isMDXComponent=!0}}]);