import{_ as s,o as a,c as n,X as e}from"./chunks/framework.0ddc172f.js";const A=JSON.parse('{"title":"Full and sequencer node rollup setup","description":"","frontmatter":{"head":[["meta",{"name":"og:title","content":"Full and sequencer node rollup setup | Rollkit"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"tutorials/full-and-sequencer-node.md","filePath":"tutorials/full-and-sequencer-node.md","lastUpdated":1706138411000}'),l={name:"tutorials/full-and-sequencer-node.md"},o=e(`<h1 id="full-and-sequencer-node-rollup-setup" tabindex="-1">Full and sequencer node rollup setup <a class="header-anchor" href="#full-and-sequencer-node-rollup-setup" aria-label="Permalink to &quot;Full and sequencer node rollup setup&quot;">​</a></h1><p>This guide will cover how to set up the GM world rollup example as a multi-node network using a full and sequencer node.</p><h2 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-label="Permalink to &quot;About&quot;">​</a></h2><p>This guide is using a new feature released in v0.10.2 that uses <a href="https://github.com/celestiaorg/go-header" target="_blank" rel="noreferrer">go-header</a>, which uses libp2p that syncs blocks over a peer-to-peer (p2p) network.</p><p>This is the same way that celestia-node syncs blocks over p2p.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>First, you&#39;ll need to complete the <a href="./gm-world">GM world</a> tutorial.</p><p>In this demo, we&#39;ll be using the local-celestia-devnet setup used in <a href="./gm-world">part 1</a>.</p><h2 id="getting-started" tabindex="-1">Getting started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting started&quot;">​</a></h2><p>For running a full node, you will need to update <code>NAMESPACE</code>, <code>DA_HEIGHT</code>, and <code>P2P_ID</code> manually. You can retrieve namespace and height from your terminal output from when you ran the <code>init-local.sh</code> script.</p><p>They will be printed before your chain starts:</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#A6ACCD;">______         _  _  _     _  _</span></span>
<span class="line"><span style="color:#A6ACCD;">| ___ \\       | || || |   (_)| |</span></span>
<span class="line"><span style="color:#A6ACCD;">| |_/ /  ___  | || || | __ _ | |_</span></span>
<span class="line"><span style="color:#A6ACCD;">|    /  / _ \\ | || || |/ /| || __|</span></span>
<span class="line"><span style="color:#A6ACCD;">| |\\ \\ | (_) || || ||   &lt; | || |_</span></span>
<span class="line"><span style="color:#A6ACCD;">\\_| \\_| \\___/ |_||_||_|\\_\\|_| \\__|</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line has-focus"><span style="color:#A6ACCD;"> Your DA_BLOCK_HEIGHT is 5 </span></span></code></pre></div><h3 id="clone-the-script" tabindex="-1">Clone the script <a class="header-anchor" href="#clone-the-script" aria-label="Permalink to &quot;Clone the script&quot;">​</a></h3><p>Now, clone the script for the full node:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># From inside the \`gm\` directory</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> $HOME</span><span style="color:#C3E88D;">/gm</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/rollkit/docs/main/scripts/gm/init-full-node.sh</span></span></code></pre></div><h3 id="set-namespace-and-da-height" tabindex="-1">Set namespace and DA height <a class="header-anchor" href="#set-namespace-and-da-height" aria-label="Permalink to &quot;Set namespace and DA height&quot;">​</a></h3><p>Next, you can open the script and set your namespace and DA height from above:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line diff remove"><span style="color:#A6ACCD;">DA_BLOCK_HEIGHT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">your-block-height</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">DA_BLOCK_HEIGHT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff remove"><span style="color:#A6ACCD;">NAMESPACE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your-namespace</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">NAMESPACE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">31e2c345c895c3577bea</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">P2P_ID</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your-p2p-id</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><h3 id="update-the-p2p-address" tabindex="-1">Update the p2p address <a class="header-anchor" href="#update-the-p2p-address" aria-label="Permalink to &quot;Update the p2p address&quot;">​</a></h3><p>Next, we&#39;ll update the p2p address.</p><p>Once your sequencer starts producing blocks, it will show the p2p address, beginning with 12D:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-focused-lines"><code><span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">binded</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=x/ibc/port</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">port=icahost</span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">claimed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">capability</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">capability=</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=icahost</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name=ports/icahost</span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">impl=RPC</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg={}</span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">service</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">impl=Node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">msg={}</span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">P2P</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">client</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">serving</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HTTP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address={</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IP</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Port</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:36657,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Zone</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#C3E88D;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=server</span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listening</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=/ip4/10.0.0.171/tcp/36656/p2p/12D3KooWCmfJLkQjZUArWpNUDJSezeFiLYzCULXe1dEKY6ZpXZpk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=p2p</span><span style="color:#A6ACCD;"> </span></span>
<span class="line has-focus"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listening</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">address=/ip4/127.0.0.1/tcp/36656/p2p/12D3KooWCmfJLkQjZUArWpNUDJSezeFiLYzCULXe1dEKY6ZpXZpk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=p2p</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">no</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">seed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">listening</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">connections</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=p2p</span></span>
<span class="line"><span style="color:#FFCB6B;">3:55PM</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">INF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Celestia</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Data</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Availability</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Layer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Client</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">baseURL=http://localhost:26658</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module=da_client</span></span></code></pre></div><p>In your <code>init-full-node.sh</code> script, you will now set the <code>P2P_ADDRESS</code> variable for your script to use:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">DA_BLOCK_HEIGHT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#A6ACCD;">NAMESPACE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">31e2c345c895c3577bea</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line diff remove"><span style="color:#A6ACCD;">P2P_ID</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">your-p2p-id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line diff add"><span style="color:#A6ACCD;">P2P_ID</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">12D3KooWCmfJLkQjZUArWpNUDJSezeFiLYzCULXe1dEKY6ZpXZpk</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span></span></code></pre></div><h3 id="set-auth-token" tabindex="-1">Set auth token <a class="header-anchor" href="#set-auth-token" aria-label="Permalink to &quot;Set auth token&quot;">​</a></h3><p>When passing the <code>--rollkit.da_config</code> flag, it will require <code>AUTH_TOKEN</code> to be passed in. The auth token with write permission is required to submit blobs and can be set with the following command once your local-celestia-devnet is running:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> AUTH_TOKEN</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> exec </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">docker</span><span style="color:#C3E88D;"> ps -q</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">  celestia bridge --node.store /home/celestia/bridge/ auth admin</span><span style="color:#89DDFF;">)</span></span></code></pre></div><p>This will set the local-celestia-devnet bridge node auth token. This assumes that there is only one container, otherwise you can pass the container name.</p><h2 id="start-the-full-node" tabindex="-1">Start the full node <a class="header-anchor" href="#start-the-full-node" aria-label="Permalink to &quot;Start the full node&quot;">​</a></h2><p>Now run your full node with the script:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># from the gm directory</span></span>
<span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init-full-node.sh</span></span></code></pre></div><p>Congratulations! You will now have a full node running alongside your Rollkit sequencer.</p>`,32),p=[o];function t(r,c,C,i,y,D){return a(),n("div",null,p)}const u=s(l,[["render",t]]);export{A as __pageData,u as default};
