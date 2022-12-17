"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(f,r(r({ref:t},h),{},{components:n})):o.createElement(f,r({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},r="Core Concepts",l={unversionedId:"core-concepts",id:"core-concepts",title:"Core Concepts",description:"This section will cover the core concepts and basics of RollKit so you can",source:"@site/docs/core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/docs/core-concepts",draft:!1,editUrl:"https://github.com/rollkit/docs/tree/main/docs/core-concepts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to RollKit",permalink:"/docs/intro"},next:{title:"The RollKit Stack",permalink:"/docs/rollkit-stack"}},s={},c=[{value:"Rollups",id:"rollups",level:2},{value:"Modular Rollups",id:"modular-rollups",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Shared Security",id:"shared-security",level:2},{value:"Fraud Proofs",id:"fraud-proofs",level:2},{value:"Leader Selection",id:"leader-selection",level:2},{value:"Why you need a sequencer",id:"why-you-need-a-sequencer",level:3},{value:"Main types of Rollups",id:"main-types-of-rollups",level:2},{value:"zk-Rollups",id:"zk-rollups",level:3},{value:"Optimistic Rollups",id:"optimistic-rollups",level:3}],h={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"core-concepts"},"Core Concepts"),(0,a.kt)("p",null,"This section will cover the core concepts and basics of RollKit so you can\nbuild rollups using an SDK."),(0,a.kt)("admonition",{title:"Tip",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you're familiar with RollKit's core, you may want to skip to the ",(0,a.kt)("a",{parentName:"p",href:"./category/tutorials"},"tutorials section"))),(0,a.kt)("h2",{id:"rollups"},"Rollups"),(0,a.kt)("p",null,"A blockchain rollup is a type of scalability solution for blockchain networks.\nIt allows multiple transactions to be bundled or \u201crolled up\u201d into a single\ntransaction, which is then added to the base-layer blockchain. This can greatly\nincrease the transaction throughput of the network, allowing it to process more\ntransactions in a given time period."),(0,a.kt)("p",null,"One key feature of a blockchain rollup is that it maintains the security of the\nunderlying blockchain, since the bundled transactions are still\ncryptographically linked to the base-layer blockchain. This allows users to\ntrust that their transactions will be processed securely, even as the network\nscales."),(0,a.kt)("p",null,"Another key advantage of a blockchain rollup is that it can be implemented\nwithout changing the underlying, base-layer blockchain protocol. This means\nthat the existing blockchain networks can potentially benefit from the\nincreased scalability of a rollup without having to undergo a hard fork\n(or spoon)."),(0,a.kt)("p",null,"Overall, a blockchain rollup is a promising solution for improving the\nscalability of blockchain networks and application-specific blockchains,\noften known as rollups, allowing them to process more transactions and\nsupport a larger number of users."),(0,a.kt)("p",null,"The downside to using traditional, monolithic rollups is that there are\nexisting ",(0,a.kt)("a",{parentName:"p",href:"./intro#developer-pain-points-for-monolithic-blockchains"},"developer pain points"),"\nthat we covered in the introduction."),(0,a.kt)("p",null,"If you want to learn more, we recommend Vitalik Buterin's\n",(0,a.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2021/01/05/rollup.html"},"An Incomplete Guide to Rollups"),"\nread this ",(0,a.kt)("a",{parentName:"p",href:"https://members.delphidigital.io/reports/the-complete-guide-to-rollups/"},"The Complete Guide to Rollups"),"\nby Jon Charbonneau from Delphi Digital."),(0,a.kt)("h2",{id:"modular-rollups"},"Modular Rollups"),(0,a.kt)("p",null,"Modular rollups allow developers to build application-specific blockchains\nas a new type of sovereign blockchain."),(0,a.kt)("p",null,"A modular rollup allows you to scale your blockchain without sacrificing\nsecurity or decentralization. By using a layer of off-chain data availability\nand a layer of on-chain consensus, a modular rollup can handle a much larger\nvolume of transactions than a traditional blockchain."),(0,a.kt)("p",null,"Lastly, a modular blockchain can make your blockchain more flexible and\nadaptable. Because the off-chain DA layer is modular, you can easily modify\nand update it to support new features or changes in the network. This can\nhelp you stay ahead of the curve and keep your blockchain competitive in\na rapidly evolving market."),(0,a.kt)("p",null,"This approach can help improve the performance and efficiency of a blockchain\nnetwork, allowing it to process more transactions per second and reducing\ntransaction fees."),(0,a.kt)("p",null,"Modular blockchains allow for the processing of transactions on a rollup\nand then periodically rolling up the results of those transactions on to\nthe desired data availability (DA) and consensus layer, thus reducing the\nload on the DA and consensus layer and increasing its overall scalability.\nThis also saves the standard overhead associated with bootstrapping a new\nblockchain\u2019s own DA and consensus layer."),(0,a.kt)("p",null,"Using RollKit, anyone can ",(0,a.kt)("strong",{parentName:"p"},"easily deploy a blockchain with minimal overhead"),"."),(0,a.kt)("p",null,"Developers can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deploy easily",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Developers can easily deploy a new blockchain without needing to bootstrap\na secure and decentralized validator set. In addition, Rollmint does not have\nthe overhead associated with a heavy BFT consensus mechanism."))),(0,a.kt)("li",{parentName:"ul"},"Be sovereign",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Rollmint enables developers to build rollups with sovereignty in mind. A\nsovereign rollup can fork just like an L1, giving its community a mechanism\nfor social coordination."))),(0,a.kt)("li",{parentName:"ul"},"Scale effortlessly",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Developers don\u2019t need to sacrifice on security to achieve scale. Rollmint\nenables developers to build blockchains using a data availability layer that\nscales with adoption while staying decentralized and secure."))),(0,a.kt)("li",{parentName:"ul"},"Use a credibly neutral public good",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Developers don\u2019t need to sacrifice on security to achieve scale. Rollmint\nenables developers to build blockchains using a data availability layer that\nscales with adoption while staying decentralized and secure.")))),(0,a.kt)("h2",{id:"consensus"},"Consensus"),(0,a.kt)("p",null,"In a decentralized network, consensus refers to the process of reaching\nagreement among the network participants on the current state of the network\nand the validity of the transactions being processed. In a blockchain network,\nconsensus is typically achieved through the use of a consensus algorithm,\nwhich is a set of rules governing how the network participants reach an\nagreement on the current state of the network and the validity of transactions."),(0,a.kt)("p",null,"Consensus algorithms are designed to ensure that the network remains secure\nand that transactions are processed in a fair and transparent manner. Some\nexamples of consensus algorithms include proof of work, proof of stake,\nand delegated proof of stake."),(0,a.kt)("h2",{id:"shared-security"},"Shared Security"),(0,a.kt)("p",null,"Shared security is security that a blockchain inherits from an external source.\nThis security can come in the forms such as preventing invalid state\ntransitions or re-org attacks. Since security of the external blockchain can\nbe shared, multiple blockchains can derive benefits from harnessing its\nsecurity."),(0,a.kt)("p",null,"For example, Celestia will provide shared security to blockchains that deploy\non it because they will inherit security from the consensus and data\navailability Celestia provides, which is shared among all chains that will\nutilize it."),(0,a.kt)("p",null,"Interchain security is another example of shared security where security\nisn\u2019t inherited from the blockchain itself. Rather, the Cosmos Hub validator\nset will be able to opt-in to become a validator for other zones."),(0,a.kt)("h2",{id:"fraud-proofs"},"Fraud Proofs"),(0,a.kt)("p",null,"The RollKit chains will have no consensus rules. All valid transactions will\nbe accepted by block creators. Fraud proofs will be the only way to detect\nand rollback malicious state transitions."),(0,a.kt)("p",null,"The state of the Rollmint chain will be stored in a Sparse Merkle Tree.\nThey can be used to generate fraud proofs in very compact and easy to verify form."),(0,a.kt)("p",null,"To be able to validate fraud proofs, blocks of the Rollmint chain have\nto contain intermediate state roots, reflecting the state of SMT after every\ntransaction."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"RollKit ",(0,a.kt)("a",{parentName:"p",href:"./rollkit-stack#the-rollkit-stack"},"does not yet support fraud proofs"),".")),(0,a.kt)("h2",{id:"leader-selection"},"Leader Selection"),(0,a.kt)("p",null,'In a proof-of-stake (PoS) blockchain network, the leader is typically\nselected through a process called "stakeholder voting." In this process,\nthe leader is chosen based on their stake, or the amount of cryptocurrency\nthey have invested in the network.'),(0,a.kt)("p",null,"In a PoS system, the leader is responsible for proposing new blocks and\nvalidating transactions. When a new block needs to be added to the chain,\nthe leader is selected through a voting process in which the nodes with\nthe highest stake are more likely to be chosen as the leader."),(0,a.kt)("p",null,"Once the leader has been selected, they are responsible for proposing the\nnew block and including the transactions that they wish to include in it.\nThe other nodes in the network then validate the proposed block, and if\nit is deemed valid, it is added to the chain."),(0,a.kt)("p",null,"Overall, the leader selection process in a PoS blockchain is designed to\nincentivize node operators to act in the best interests of the network,\nas they stand to gain more rewards if they are selected as the leader\nand their proposed blocks are successfully added to the chain."),(0,a.kt)("h3",{id:"why-you-need-a-sequencer"},"Why you need a sequencer"),(0,a.kt)("p",null,"A blockchain is a distrbitued database that consists of a chain of blocks,\nwhere each block contains a list of transactions. The transactions in each\nblock are grouped together and sequenced, so that they can be processed\nin a specific order."),(0,a.kt)("p",null,"The sequencer in a blockchain is responsible for ordering the transactions\nwithin a block, and ensuring that the transactions are processed in the\ncorrect order. This is important because it allows the blockchain to maintain\nconsistency and integrity, as the transactions in a block must be processed in\na specific order for the blockchain to function properly."),(0,a.kt)("p",null,"The sequencer is typically part of the consensus algorithm, which is the\nmechanism which nodes in a blockchain agree on the order and content of the\nblocks that are added to the chain. Different consensus algorithms also use\ndifferent approaches to sequencing transactions, but the goal is to always\nensure that the transactions are processed in a consistent and predictable way."),(0,a.kt)("h2",{id:"main-types-of-rollups"},"Main types of Rollups"),(0,a.kt)("h3",{id:"zk-rollups"},"zk-Rollups"),(0,a.kt)("p",null,"A zk-rollup is a type of scaling solution for blockchains that use\nzero-knowledge proofs to allow for the processing of transactions\noff-chain or on another chain."),(0,a.kt)("p",null,"In a zk-rollup, transactions are bundled together and then a zero-knowledge\nproof is generated to prove that the transactions are valid without revealing\nany of the transaction details. This proof is then added to the DA and consensus\nlayer blockchain (main chain), allowing for the transactions to be verified\nwithout putting a large load on the main chain."),(0,a.kt)("p",null,"Zk-rollups can help improve the scalability and performance of a blockchain\nnetwork by allowing for more transactions to be processed off-chain or on\nanother chain."),(0,a.kt)("h3",{id:"optimistic-rollups"},"Optimistic Rollups"),(0,a.kt)("p",null,"An optimistic rollup is a type of scaling solution for blockchains that\nallows for the processing of transactions off-chain or on another chain,\nwhile still maintaining the security guarantees of the main chain. In an\noptimistic rollup, transactions are processed and validated off-chain,\nor on another chain, by a group of participants, who then produce proof\nthat the transactions are valid."),(0,a.kt)("p",null,"This proof is then submitted to the main chain, where it can be quickly\nverified without requiring the entire transaction history to be processed.\nThis allows for higher transaction throughput and lower fees, while still\nmaintaining the security of the main chain."),(0,a.kt)("p",null,"The term \u201coptimistic\u201d refers to the fact that the transaction processing\nis done off-chain, or on another chain, with the assumption that the\ntransactions will be valid, and the main chain only needs to verify the\nproof of their validity."))}p.isMDXComponent=!0}}]);