const o=[["script",{},`
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?f00a6211b690ac3505105511f6b90b30";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
        `]];function n(){const i=document.getElementsByTagName("body")[0],e=document.createElement("div");e.className="loading-container",e.innerHTML='<div class="out"><div class="fade-in"><div class="container"><div class="one common"></div><div class="two common"></div><div class="three common"></div><div class="four common"></div><div class="five common"></div><div class="six common"></div><div class="seven common"></div><div class="eight common"></div></div></div></div>',i.appendChild(e),setTimeout(function(){document.body.contains(e)&&i.removeChild(e)},2400)}export{o as EXTRA_CONFIG,n as renderLoading};
