import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.8e69e8d9.js";const i=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"pages/react-native/code.md","lastUpdated":1681371301000}'),p={name:"pages/react-native/code.md"},o=l(`<h2 id="react-navigation" tabindex="-1">react-navigation <a class="header-anchor" href="#react-navigation" aria-label="Permalink to &quot;react-navigation&quot;">​</a></h2><p>参考项目 <a href="https://github.com/react-navigation/react-navigation.git" target="_blank" rel="noreferrer">https://github.com/react-navigation/react-navigation.git</a></p><p>∆ react-navigation / exapmle / App.tsx</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">最外层</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;View style={{ flex: 1 }}&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">包裹</span></span>
<span class="line"><span style="color:#F78C6C;">2.</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">NativeViewGestureHandler</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 源自 react</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">native</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">gesture</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">handler（在UI线程中识别和跟踪手势，防止手势操作被一些Native组件劫持）</span></span>
<span class="line"><span style="color:#F78C6C;">3.</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Animated</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ScrollView</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 包裹滚动区域</span></span>
<span class="line"><span style="color:#A6ACCD;">4</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">原生动画驱动 改变translateY的值 参考：</span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;font-style:italic;">//reactnative.cn/docs/0.51/animations.html#使用原生动画驱动</span></span>
<span class="line"><span style="color:#A6ACCD;">5</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">translateY改变 绑定的对象值改变，例：</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> translateY </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scrollY</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">interpolate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">extrapolate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clamp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">inputRange</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">450</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">outputRange</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">6</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">interpolate 值变动范围；</span><span style="color:#FFCB6B;">extrapolate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">clamp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">阻断值的输入；</span></span>
<span class="line"><span style="color:#A6ACCD;">7</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">绑定的对象值改变 因绑定在transform上 改变UI视图；</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Animated.View</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    styles</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">backgroundUnderlay</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> backgroundScale </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">translateY</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> backgroundTranslateY </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">8.</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">SafeAreaView</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">安全区域 内容不会被机型的刘海遮挡；forceInset可以选择是否显示边距 forceInset</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">{ </span><span style="color:#F07178;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">never</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">always</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">9</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">图片资源的加载</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Image</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">source</span><span style="color:#89DDFF;">={</span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./src/assets/NavLogo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">styles</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bannerImage</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 10. 文字需包裹在Text组件里</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">styles</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bannerTitle</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    React Navigation Examples</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Text</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,4),e=[o];function t(c,r,D,y,F,C){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{i as __pageData,g as default};
