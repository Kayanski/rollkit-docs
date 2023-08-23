import{_ as s,o as a,c as o,X as e}from"./chunks/framework.116dfe39.js";const A=JSON.parse('{"title":"🔄 How to restart your rollup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"🔄 How to restart your rollup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/restart-rollup.md","filePath":"tutorials/restart-rollup.md","lastUpdated":1692827241000}'),l={name:"tutorials/restart-rollup.md"},n=e(`<h1 id="🔄-how-to-restart-your-rollup" tabindex="-1">🔄 How to restart your rollup <a class="header-anchor" href="#🔄-how-to-restart-your-rollup" aria-label="Permalink to &quot;🔄 How to restart your rollup&quot;">​</a></h1><p>This guide will teach you how to restart your Rollkit rollup in the case that the node that you are using to post blocks to your DA and consensus layer runs out of funds (tokens).</p><h2 id="toc" tabindex="-1">📋 Table of contents for this tutorial <a class="header-anchor" href="#toc" aria-label="Permalink to &quot;📋 Table of contents for this tutorial {#toc}&quot;">​</a></h2><p>The following tutorial is broken down into the following sections:</p><details class="details custom-block"><summary>Table of contents</summary><nav class="table-of-contents"><ul><li><a href="#toc">📋 Table of contents for this tutorial</a></li><li><a href="#setup">💻 Setup of this example</a><ul><li><a href="#errors">🟠 Errors in this example</a></li></ul></li><li><a href="#refund-your-account">💰 Re-fund your account</a></li><li><a href="#stopping-your-rollup">🛑 Stopping your rollup</a></li><li><a href="#restarting-your-rollup">🔁 Restarting your rollup</a><ul><li><a href="#increase-gas-fee">⛽ Increase the gas fee</a></li><li><a href="#reduce-gas-fee-restart-again">🛢️ Reduce gas fee &amp; restart again</a></li></ul></li></ul></nav></details><h2 id="setup" tabindex="-1">💻 Setup of this example <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;💻 Setup of this example {#setup}&quot;">​</a></h2><p>In this example, we&#39;re using Celestia&#39;s <a href="https://docs.celestia.org/nodes/blockspace-race/" target="_blank" rel="noreferrer">Blockspacerace testnet</a> and running an Ethermint chain. In this example, our Celestia DA light node ran out of Blockspace Race TIA and we are unable to post new blocks to Celestia due to a <a href="https://github.com/cosmos/cosmos-sdk/blob/main/types/errors/errors.go#L95" target="_blank" rel="noreferrer"><code>Code: 19</code></a> error. This error is defined by Cosmos SDK as:</p><div class="language-go"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ErrTxInMempoolCache defines an ABCI typed error where a tx already exists in the mempool.</span></span>
<span class="line"><span style="color:#A6ACCD;">ErrTxInMempoolCache </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Register</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">RootCodespace</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">19</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">tx already in mempool</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>In order to get around this error, and the same error on other Rollkit rollups, you will need to re-fund your Celestia account and increase the gas fee. This will override the transaction that is stuck in the mempool.</p><p>If you top up the balance of your node and don&#39;t increase the gas fee, you will still encounter the <code>Code: 19</code> error because there is a transaction (posting block to DA) that is duplicate to one that already exists. In order to get around this, you&#39;ll need to increase the gas fee and restart the chain.</p><h3 id="errors" tabindex="-1">🟠 Errors in this example <a class="header-anchor" href="#errors" aria-label="Permalink to &quot;🟠 Errors in this example {#errors}&quot;">​</a></h3><p>This is what the errors will look like if your DA node runs out of funding or you restart the chain without changing the gas fee:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submitting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">block</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">height=</span><span style="color:#F78C6C;">28126</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span>
<span class="line"><span style="color:#FFCB6B;">4:51PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ERR</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DA</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">submission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">failed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Codespace: &#39;sdk&#39;, Code: 19, Message: </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">attempt=</span><span style="color:#F78C6C;">6</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=BlockManager</span></span></code></pre></div><h2 id="refund-your-account" tabindex="-1">💰 Re-fund your account <a class="header-anchor" href="#refund-your-account" aria-label="Permalink to &quot;💰 Re-fund your account {#refund-your-account}&quot;">​</a></h2><p>First, you&#39;ll need to send more tokens to the account running your Celestia node. If you didn&#39;t keep track of your key, you can run the following to get your address:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia-node</span></span>
<span class="line"><span style="color:#FFCB6B;">./cel-key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--keyring-backend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--node.type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">light</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--p2p.network</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">networ</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="stopping-your-rollup" tabindex="-1">🛑 Stopping your rollup <a class="header-anchor" href="#stopping-your-rollup" aria-label="Permalink to &quot;🛑 Stopping your rollup {#stopping-your-rollup}&quot;">​</a></h2><p>You can stop your Ethermint chain (or other Rollkit rollup) by using <code>Control + C</code> in your terminal where the node is running.</p><h2 id="restarting-your-rollup" tabindex="-1">🔁 Restarting your rollup <a class="header-anchor" href="#restarting-your-rollup" aria-label="Permalink to &quot;🔁 Restarting your rollup {#restarting-your-rollup}&quot;">​</a></h2><p>First, be sure that you are using the same Namespace ID as you were before your Celestia node ran out of tokens.</p><p>Next, you&#39;ll need to fetch the current block height and set the variable accordingly for your start command. In this example, we&#39;re using <a href="https://docs.celestia.org/nodes/blockspace-race" target="_blank" rel="noreferrer">Blockspace Race testnet</a> on Celestia for DA and consensus:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DA_BLOCK_HEIGHT</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> https://rpc-blockspacerace.pops.one/block </span><span style="color:#89DDFF;">|</span><span style="color:#C3E88D;"> </span><span style="color:#FFCB6B;">jq</span><span style="color:#C3E88D;"> -r </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.result.block.header.height</span><span style="color:#89DDFF;">&#39;)</span></span></code></pre></div><h3 id="increase-gas-fee" tabindex="-1">⛽ Increase the gas fee <a class="header-anchor" href="#increase-gas-fee" aria-label="Permalink to &quot;⛽ Increase the gas fee {#increase-gas-fee}&quot;">​</a></h3><p>To reiterate, before restarting the chain, you will need to increase the gas fee in order to avoid a <code>Code: 19</code> error:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ethermintd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.aggregator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_config=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;base_url&quot;:&quot;http://localhost:26659&quot;,&quot;timeout&quot;:60000000000,&quot;gas_limit&quot;:6000000,&quot;fee&quot;:8900}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.namespace_id</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#C3E88D;">BE3175CBF305BC2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_start_height</span><span style="color:#A6ACCD;"> $DA_BLOCK_HEIGHT</span></span></code></pre></div><h3 id="reduce-gas-fee-restart-again" tabindex="-1">🛢️ Reduce gas fee &amp; restart again <a class="header-anchor" href="#reduce-gas-fee-restart-again" aria-label="Permalink to &quot;🛢️ Reduce gas fee &amp; restart again {#reduce-gas-fee-restart-again}&quot;">​</a></h3><p>In order to save your TIA, we also recommend stopping the chain with <code>Control + C</code>, changing the gas fee back to the default (in our case, 8000 utia), fetching current block height, and restarting the chain:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ethermintd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.aggregator</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_config=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;base_url&quot;:&quot;http://localhost:26659&quot;,&quot;timeout&quot;:60000000000,&quot;gas_limit&quot;:6000000,&quot;fee&quot;:8000}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.namespace_id</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#C3E88D;">BE3175CBF305BC2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rollkit.da_start_height</span><span style="color:#A6ACCD;"> $DA_BLOCK_HEIGHT</span></span></code></pre></div><p>🎊 Congrats! You&#39;ve successfully restarted your Rollkit rollup after running out of TIA.</p>`,29),t=[n];function p(r,c,C,y,i,u){return a(),o("div",null,t)}const d=s(l,[["render",p]]);export{A as __pageData,d as default};
