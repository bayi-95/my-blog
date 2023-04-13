import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.8e69e8d9.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/react/source.md","lastUpdated":1681371301000}'),o={name:"pages/react/source.md"},p=l(`<h2 id="nginx-一键配置" tabindex="-1">nginx 一键配置 <a class="header-anchor" href="#nginx-一键配置" aria-label="Permalink to &quot;nginx 一键配置&quot;">​</a></h2><p><a href="https://nginxconfig.io/" target="_blank" rel="noreferrer">https://nginxconfig.io/</a></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reject</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">reason</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// reason失败态时接收的拒因</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">            </span><span style="color:#676E95;font-style:italic;">// 调用reject 回调对应onRejected函数</span></span>
<span class="line highlighted"><span style="color:#F07178;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PENDING</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">                </span><span style="color:#676E95;font-style:italic;">// 只能由pending状态 =&gt; rejected状态 (避免调用多次resolve reject)</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">status</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">REJECTED</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">reason</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reason</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">                </span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onRejectedCallbacks</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">cb</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">cb</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">that</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">reason</span><span style="color:#F07178;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span></code></pre></div>`,3),e=[p];function t(c,r,y,F,D,i){return n(),a("div",null,e)}const h=s(o,[["render",t]]);export{C as __pageData,h as default};
