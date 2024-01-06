import{_ as e,o as t,c as a,X as s}from"./chunks/framework.0d22b6ed.js";const g=JSON.parse('{"title":"GM world rollup: Part three","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"GM world rollup: Part three | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/gm-world-mainnet.md","filePath":"tutorials/gm-world-mainnet.md","lastUpdated":1704579172000}'),o={name:"tutorials/gm-world-mainnet.md"},l=s('<h1 id="gm-world-rollup-part-three" tabindex="-1">GM world rollup: Part three <a class="header-anchor" href="#gm-world-rollup-part-three" aria-label="Permalink to &quot;GM world rollup: Part three&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>This tutorial is under construction. 🏗️</p></div><p>This tutorial is part three of the GM world rollup tutorials. In this tutorial, it is expected that you&#39;ve completed <a href="./gm-world">part one</a> and <a href="./gm-world-testnet">part two</a> of the tutorial and are familiar with running a local rollup devnet and posting to a Celestia testnet.</p><h2 id="deploying-to-celestia-mainnet-beta" tabindex="-1">Deploying to Celestia Mainnet Beta <a class="header-anchor" href="#deploying-to-celestia-mainnet-beta" aria-label="Permalink to &quot;Deploying to Celestia Mainnet Beta&quot;">​</a></h2><p>In this section, we will cover how to deploy to Celestia&#39;s Mainnet Beta.</p><p>For this portion, you will need to stop the rollup that you have running from above using <code>Control + C</code> in the terminal.</p><ol><li><p>Start your Celestia light node with state access (using the <code>--core.ip string</code> flag), this time on <code>celestia</code>, which is the chain ID for Mainnet Beta.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">light</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--core.ip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rpc.celestia.pops.one</span></span></code></pre></div></li><li><p>Download the script for deploying to Celestia&#39;s Mainnet Beta:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># From inside the `gm` directory</span></span>\n<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/rollkit/docs/main/scripts/gm/init-mainnet.sh</span></span></code></pre></div></li><li><p>Ensure that the account for your light node is funded.</p></li><li><p>Run the <code>init-mainnet.sh</code> script:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init-mainnet.sh</span></span></code></pre></div></li><li><p>Watch as your rollup posts blocks to Celestia!</p></li></ol><p>To deploy to a different DA layer, modify the script to fit your architecture.</p><h2 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next steps&quot;">​</a></h2><p>If you&#39;re interested in setting up a full node alongside your sequencer, see the <a href="./full-and-sequencer-node">Full and sequencer node rollup setup</a> tutorial.</p>',10),n=[l];function i(r,p,c,d,h,u){return t(),a("div",null,n)}const y=e(o,[["render",i]]);export{g as __pageData,y as default};
