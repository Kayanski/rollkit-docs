"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[688],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var l=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(e,t){if(null==e)return{};var o,l,a=function(e,t){if(null==e)return{};var o,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)o=i[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return o?l.createElement(m,r(r({ref:t},u),{},{components:o})):l.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=h;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[d]="string"==typeof e?e:a,r[1]=n;for(var p=2;p<i;p++)r[p]=o[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2692:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>p});var l=o(7462),a=(o(7294),o(3905));const i={slug:"introducing-rollkit",title:"Introducing Rollkit - a modular rollup framework",authors:["AlCJoseph","alex-beckett"],tags:["Rollkit","Celestia"],description:"Neutral and independent from Celestia, Rollkit serves as a community-led public good that empowers developers with the freedom to deploy throughout the modular stack and accelerate innovation."},r=void 0,n={permalink:"/blog/introducing-rollkit",editUrl:"https://github.com/rollkit/docs/tree/main/blog/2023-02-21-introducing-rollkit.mdx",source:"@site/blog/2023-02-21-introducing-rollkit.mdx",title:"Introducing Rollkit - a modular rollup framework",description:"Neutral and independent from Celestia, Rollkit serves as a community-led public good that empowers developers with the freedom to deploy throughout the modular stack and accelerate innovation.",date:"2023-02-21T00:00:00.000Z",formattedDate:"February 21, 2023",tags:[{label:"Rollkit",permalink:"/blog/tags/rollkit"},{label:"Celestia",permalink:"/blog/tags/celestia"}],readingTime:6.16,hasTruncateMarker:!1,authors:[{name:"Joseph Al-Chami",title:"Product Manager @ Celestia Labs",url:"https://github.com/AlCJoseph",imageURL:"https://github.com/AlCJoseph.png",key:"AlCJoseph"},{name:"Alex Beckett",title:"Marketing Lead @ Celestia Labs",url:"https://github.com/alex-beckett",imageURL:"https://github.com/alex-beckett.png",key:"alex-beckett"}],frontMatter:{slug:"introducing-rollkit",title:"Introducing Rollkit - a modular rollup framework",authors:["AlCJoseph","alex-beckett"],tags:["Rollkit","Celestia"],description:"Neutral and independent from Celestia, Rollkit serves as a community-led public good that empowers developers with the freedom to deploy throughout the modular stack and accelerate innovation."}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"tl;dr:",id:"tldr",level:2},{value:"Deploying a new chain is hard",id:"deploying-a-new-chain-is-hard",level:2},{value:"Freedom to deploy",id:"freedom-to-deploy",level:2},{value:"Vision for Rollkit",id:"vision-for-rollkit",level:2},{value:"Execution environments",id:"execution-environments",level:3},{value:"Sequencers",id:"sequencers",level:3},{value:"Proof schemes",id:"proof-schemes",level:3},{value:"Rollup types",id:"rollup-types",level:3},{value:"Rollkit is neutral",id:"rollkit-is-neutral",level:2},{value:"Next steps",id:"next-steps",level:2}],u={toc:p};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Neutral and independent from Celestia, Rollkit serves as a community-led public good that empowers developers with the freedom to deploy throughout the modular stack and accelerate innovation."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rollkit blog cover",src:o(6197).Z,width:"3000",height:"1500"})),(0,a.kt)("p",null,"Today, we\u2019re pleased to introduce Rollkit, previously known as Rollmint. Rollkit is a modular rollup framework that gives developers the freedom to deploy rollups throughout the modular stack, opening new possibilities for rapid experimentation and innovation."),(0,a.kt)("p",null,"Rollkit provides a modular node for running rollups on top of a data availability layer. It exposes an ABCI-compatible client interface that can be used as a replacement for Tendermint for any ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/tendermint/tree/main/abci"},"ABCI"),"-compatible blockchain app, including Cosmos chains."),(0,a.kt)("p",null,"In development since 2021, Rollkit is now emerging as neutral and independent from Celestia. Rollkit will serve as a community-led public good for the modular ecosystem going forward, with its own docs at ",(0,a.kt)("a",{parentName:"p",href:"/"},"rollkit.dev"),"."),(0,a.kt)("h2",{id:"tldr"},"tl;dr:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can now ",(0,a.kt)("a",{parentName:"li",href:"/"},"build with Rollkit")," on Celestia\u2019s Mocha testnet. Check out the ",(0,a.kt)("a",{parentName:"li",href:"/docs/intro"},"docs"),"."),(0,a.kt)("li",{parentName:"ul"},"You can customize rollups and plug in arbitrary data availability and execution layers by leveraging Rollkit\u2019s modular framework."),(0,a.kt)("li",{parentName:"ul"},"Rollkit is spinning out from Celestia so that both can serve the modular ecosystem as credibly neutral public goods."),(0,a.kt)("li",{parentName:"ul"},"Stay tuned for Rollkit developer calls that begin in April to help guide its development.")),(0,a.kt)("h2",{id:"deploying-a-new-chain-is-hard"},"Deploying a new chain is hard"),(0,a.kt)("p",null,"Deploying your decentralized application as a smart contract on a shared blockchain means it will share computational resources and is restricted to that blockchain's execution environment. This limits your application's scalability and flexibility."),(0,a.kt)("p",null,"For that reason, many developers have turned to launching their own layer 1 chains using tools like Tendermint and the Cosmos SDK. However, deploying a new layer 1 chain presents its own set of complex challenges and trade-offs."),(0,a.kt)("p",null,"In order to deploy a new layer 1 chain, a developer must gather a set of validators to secure the chain, issue a token to compensate these validators, and continuously maintain the network infrastructure. This represents a huge cost in social coordination, time, capital and expertise. This cost prevents many developers from launching their own chains and innovation from progressing as quickly as it could."),(0,a.kt)("h2",{id:"freedom-to-deploy"},"Freedom to deploy"),(0,a.kt)("p",null,"Rollups are the answer to this problem. Rollups provide similar advantages as a layer 1 blockchain but reduce the overhead of deploying and maintaining your own chain."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rollkit comparison table",src:o(3988).Z,width:"1600",height:"374"})),(0,a.kt)("p",null,"Rollups provide similar benefits to blockchain developers that cloud infrastructure provides for traditional web developers. Deploying a new layer 1 blockchain is like maintaining a physical server, slow and expensive. Rollups remove the need for blockchain developers to launch and maintain their own layer 1s to deploy their own chain."),(0,a.kt)("p",null,"With Rollkit, developers no longer have to worry about the complex challenges of deploying a new blockchain. Rollkit will do for rollup chains what Tendermint did for layer 1 chains. The way it works is that rollups leverage an underlying layer for consensus, so that developers don\u2019t need to build their own consensus networks. Rollkit rollups inherit security from the data availability layer, eliminating the need for a full set of validators and reducing the technical barrier for developers."),(0,a.kt)("h2",{id:"vision-for-rollkit"},"Vision for Rollkit"),(0,a.kt)("p",null,"In the spirit of modularity, Rollkit\u2019s long-term vision is to give developers a variety of options to choose from so that they can easily plug-in, switch or replace features in Rollkit."),(0,a.kt)("p",null,"In a rapidly evolving industry like blockchain, time to market and the ability to rapidly experiment and innovate are critical. Rollkit\u2019s customizable stack will enable developers to bring their products to market faster and with more flexibility."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rollkit lego",src:o(6194).Z,width:"1600",height:"1322"})),(0,a.kt)("h3",{id:"execution-environments"},"Execution environments"),(0,a.kt)("p",null,"Rollkit will allow you to easily swap in different execution environments. Not fond of the Cosmos SDK? Try Rust with CosmWasm. Still like Solidity? Plug in the EVM. None of the options suit your needs? Modify or add your own execution environment without needing to rebuild your entire chain from scratch."),(0,a.kt)("h3",{id:"sequencers"},"Sequencers"),(0,a.kt)("p",null,"Rollkit will support multiple sequencing modes to suit your specific use case. A single sequencer might be all you need. If your application requires stronger liveness, you can opt for multiple sequencers using your own set or leverage a set of shared sequencers."),(0,a.kt)("h3",{id:"proof-schemes"},"Proof schemes"),(0,a.kt)("p",null,"Rollkit will support a multitude of proof schemes to ensure the execution of your rollup. Run your application in zk mode, optimistic mode with fraud proofs, or pessimistic mode without any proofs."),(0,a.kt)("h3",{id:"rollup-types"},"Rollup types"),(0,a.kt)("p",null,"Rollkit will allow you to build a diverse range of rollups, including sovereign rollups, settlement rollups and settled rollups."),(0,a.kt)("p",null,"Rollkit is in an early stage of development and many features remain to be built to reach this vision. In its ",(0,a.kt)("a",{parentName:"p",href:"/docs/rollkit-stack"},"current state"),", Rollkit rollups are ",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/sovereign-rollup-chains"},"sovereign rollups")," with single sequencers, with support for a pessimistic mode and a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/blob/manav/state_fraud_proofs_adr/docs/lazy-adr/adr-009-state-fraud-proofs.md"},"work-in-progress optimistic")," mode. ",(0,a.kt)("a",{parentName:"p",href:"/docs/category/tutorials"},"Integration tutorials")," are ready and available with Cosmos SDK, Ethermint, and CosmWasm."),(0,a.kt)("p",null,"We invite the community to collaborate with us to build new features. Each new team that joins the growing Rollkit community brings more firepower to ship new features that we all benefit from. This is the power of modularity in action."),(0,a.kt)("h2",{id:"rollkit-is-neutral"},"Rollkit is neutral"),(0,a.kt)("p",null,"Celestia Labs originally started developing Rollkit in 2021, when the modular ecosystem was nascent and general-purpose rollup software did not exist. We started building Rollkit out of necessity, because having general-purpose software for rollup chains was critical to the Celestia mission of making deploying a new chain as easy as deploying a smart contract."),(0,a.kt)("p",null,"Since 2021 several projects have also started building general-purpose execution layer rollup software for various use cases. This includes ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/EclipseFND"},"Eclipse")," (Solana VM rollups), ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/dymensionXYZ"},"Dymension")," (settled Cosmos rollups), ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/sovereign_labs"},"Sovereign Labs")," (sovereign ZK rollups), and ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/optimismFND"},"Optimism")," (EVM rollups)."),(0,a.kt)("p",null,"To ensure Celestia remains a decentralized and credibly neutral data availability layer that treats all rollup software as first class citizens, we decided to spin out Rollkit from Celestia Labs into its own project with its own GitHub org and docs site."),(0,a.kt)("p",null,"This also means that Rollkit aims to be neutral to the underlying data availability layer. Rollkit is designed to allow developers to integrate other data availability layers besides Celestia via the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/blob/567b9f500db8055289365ea63450cefe4b135077/da/da.go#L60"},"data availability interface"),"."),(0,a.kt)("p",null,"The Celestia Labs Execution Environments team is currently contributing to the initial and necessary components of Rollkit, and is calling for all developers to contribute to it."),(0,a.kt)("p",null,"Spinning out Rollkit will enable both Celestia and Rollkit to serve the entire modular ecosystem as public goods that are neutral and independent from each other, and not favor each other in the modular stack."),(0,a.kt)("p",null,"We believe that to create a positive-sum crypto ecosystem where modularism thrives over maximalism, it\u2019s important that developers have access to neutral rollup frameworks that are treated as public goods. In order for crypto to move into mainstream adoption, the industry needs to work together to create foundational developer tooling that will help crypto to level up."),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("p",null,"Moving towards a community-led project means increased visibility, transparency and inclusivity. That\u2019s why the Rollkit team will soon release a roadmap blog post to detail ongoing work and its purpose. The team will also hold regular public calls with community members to showcase recent developments, discuss the roadmap and gather feedback from developers building with Rollkit. Keep an eye out for a new announcement from Rollkit."),(0,a.kt)("p",null,"Learn more about how Rollkit works ",(0,a.kt)("a",{parentName:"p",href:"/"},"on the new Rollkit website")," (you're already on it!). And don\u2019t forget to check out the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit"},"Rollkit repo")," too."),(0,a.kt)("p",null,"You can find the original blog post ",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/p/f36529f7-8ecc-469e-b602-11284b7eb1a4/"},"here"),"."))}d.isMDXComponent=!0},3988:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/comparison-table-7c865eb80a6add486978246e68eb69fa.png"},6197:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/rollkit-blog-cover-8cba9a7759f1f728fb99c4bb344ef12b.png"},6194:(e,t,o)=>{o.d(t,{Z:()=>l});const l=o.p+"assets/images/rollkit-lego-67992ef3767eb2c35eff95a0240749bd.png"}}]);