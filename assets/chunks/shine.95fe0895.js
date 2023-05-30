/*! shine.js - v0.2.6 - 2014-04-15
* http://bigspaceship.github.io/shine.js
* Copyright (c) 2014 Big Spaceship; Licensed MIT */Function.prototype.bind||(Function.prototype.bind=function(t){if(typeof this!="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),i=this,s=function(){},o=function(){return i.apply(this instanceof s&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))};return s.prototype=this.prototype,o.prototype=new s,o});window.performance=window.performance||window.webkitPeformance||window.mozPeformance||{now:function(){return new Date().getTime()}};var n,u;try{n=n||exports||{}}catch{n={}}try{u=u||global||{}}catch{u={}}typeof define<"u"&&define.amd&&define([],function(){return n});n.Color=function(t,e,i){this.r=t||0,this.g=e||0,this.b=i||0};n.Color.colorFromHex=function(t){var e=new n.Color;return e.parseHex(t),e};n.Color.prototype.parseHex=function(t){t=t.replace("#","");var e=parseInt(t,16);this.r=e>>16&255,this.g=e>>8&255,this.b=e&255};n.Color.prototype.getRGBAString=function(){return"rgba("+Math.round(this.r)+","+Math.round(this.g)+","+Math.round(this.b)+", 1.0)"};n.Config=function(t){this.numSteps=5,this.opacity=.15,this.opacityPow=1.2,this.offset=.15,this.offsetPow=1.8,this.blur=40,this.blurPow=1,this.shadowRGB=new n.Color(0,0,0),this.applyValues(t)};n.Config.prototype.applyValues=function(t){if(t)for(var e in this)e in t&&(this[e]=t[e])};n.Light=function(e){this.position=e||new n.Point(0,0),this.intensity=1};n.Point=function(t,e){this.x=t||0,this.y=e||0};n.Point.prototype.delta=function(t){return new n.Point(t.x-this.x,t.y-this.y)};n.Shadow=function(t){this.position=new n.Point(0,0),this.domElement=t,this.shadowProperty="textShadow",this.fnHandleViewportUpdate=null,this.fnHandleWindowLoaded=this.handleWindowLoaded.bind(this),this.enableAutoUpdates(),this.handleViewportUpdate(),window.addEventListener("load",this.fnHandleWindowLoaded,!1)};n.Shadow.prototype.destroy=function(){window.removeEventListener("load",this.fnHandleWindowLoaded,!1),this.disableAutoUpdates(),this.fnHandleWindowLoaded=null,this.domElement=null,this.position=null};n.Shadow.prototype.draw=function(t,e){var i=this.position.delta(t.position),s=Math.sqrt(i.x*i.x+i.y*i.y);s=Math.max(32,s);for(var o=[],a=0;a<e.numSteps;a++){var r=a/e.numSteps,l=Math.pow(r,e.opacityPow),h=Math.pow(r,e.offsetPow),p=Math.pow(r,e.blurPow),d=t.intensity*Math.max(0,e.opacity*(1-l)),f=-e.offset*i.x*h,w=-e.offset*i.y*h,c=s*e.blur*p/512,m=this.getShadow(e.shadowRGB,d,f,w,c);o.push(m)}this.drawShadows(o)};n.Shadow.prototype.getShadow=function(t,e,i,s,o){var a="rgba("+t.r+", "+t.g+", "+t.b+", "+e+")";return a+" "+i+"px "+s+"px "+Math.round(o)+"px"};n.Shadow.prototype.drawShadows=function(t){this.domElement.style[this.shadowProperty]=t.join(", ")};n.Shadow.prototype.enableAutoUpdates=function(){this.disableAutoUpdates();var t=this.fnHandleViewportUpdate=n.Timing.debounce(this.handleViewportUpdate,1e3/15,this);document.addEventListener("resize",t,!1),window.addEventListener("resize",t,!1),window.addEventListener("scroll",t,!1)};n.Shadow.prototype.disableAutoUpdates=function(){var t=this.fnHandleViewportUpdate;t&&(this.fnHandleViewportUpdate=null,document.removeEventListener("resize",t,!1),window.removeEventListener("resize",t,!1),window.removeEventListener("scroll",t,!1))};n.Shadow.prototype.handleViewportUpdate=function(){var t=this.domElement.getBoundingClientRect();this.position.x=t.left+t.width*.5,this.position.y=t.top+t.height*.5};n.Shadow.prototype.handleWindowLoaded=function(){this.handleViewportUpdate()};n.Splitter=function(t,e){this.domElement=t,this.classPrefix=e||"",this.wrapperElement=document.createElement("div"),this.maskElement=document.createElement("div"),this.wordElements=[],this.elements=[],this.text=""};n.Splitter.prototype.split=function(t,e){this.text=t||this.text,this.wordElements.length=0,this.elements.length=0,this.wrapperElement.className=this.classPrefix+"wrapper",this.wrapperElement.innerHTML="",t&&(this.domElement.textContent=this.text),e?this.splitChildren(this.domElement,this.maskElement,this.wrapperElement,this.classPrefix):this.splitText(this.domElement,this.maskElement,this.wrapperElement,this.classPrefix)};n.Splitter.prototype.splitChildren=function(t,e,i,s){for(var o=t.childNodes,a=0;a<o.length;a++){var r=o[a];r.nodeType===1&&(r.className+=" "+s+"letter",i.appendChild(r),this.elements.push(r))}e.innerHTML=i.innerHTML,e.className=s+"mask",i.appendChild(e),t.innerHTML="",t.appendChild(i)};n.Splitter.prototype.splitText=function(t,e,i,s){for(var o=t.textContent,a=o.length,r=null,l=0;l<a;l++){var h=o.charAt(l);if(r||(r=document.createElement("span"),r.className=s+"word",i.appendChild(r),this.wordElements.push(r)),h.match(/[\s]/)){var p=document.createElement("span");p.className=s+"spacer",p.innerHTML=h,i.appendChild(p),r=null;continue}var d=document.createElement("span");d.innerHTML=h,d.className=s+"letter",this.elements.push(d),r.appendChild(d),h.match(/[\W]/)&&(r=null)}e.innerHTML=i.innerHTML,e.className=s+"mask",i.appendChild(e),t.innerHTML="",t.appendChild(i)};n.StyleInjector=function(){this.injections={}};n.StyleInjector.instance_=null;n.StyleInjector.getInstance=function(){return n.StyleInjector.instance_||(n.StyleInjector.instance_=new n.StyleInjector),n.StyleInjector.instance_};n.StyleInjector.prototype.inject=function(t,e){if(e=e||window.document,this.injections[t]!==e){var i=document.createElement("style");i.type="text/css",i.innerHTML=t;var s=e.getElementsByTagName("head")[0].firstChild;return e.getElementsByTagName("head")[0].insertBefore(i,s),this.injections[t]=e,i}};n.Timing=function(){};n.Timing.debounce=function(t,e,i){var s=NaN;return function(){e=e||0,i=i||this;var o=arguments;isNaN(s)||clearTimeout(s),s=setTimeout(function(){t.apply(i,o)},e)}};n.Timing.throttle=function(t,e,i){var s=NaN,o=NaN;return function(){e=e||0,i=i||this;var a=window.performance.now(),r=arguments;!isNaN(s)&&a<s+e?(isNaN(o)||clearTimeout(o),o=setTimeout(function(){s=a,t.apply(i,r)},e)):(isNaN(o)||clearTimeout(o),s=a,t.apply(i,r))}};n.Shine=function(t,e,i,s){if(!t)throw new Error("No valid DOM element passed as first parameter");this.light=new n.Light,this.config=e||new n.Config,this.domElement=t,this.classPrefix=i||"shine-",this.shadowProperty=s||(this.elememtHasTextOnly(t)?"textShadow":"boxShadow"),this.shadows=[],this.splitter=new n.Splitter(t,this.classPrefix),this.areAutoUpdatesEnabled=!0,this.fnDrawHandler=null,this.updateContent()};n.Shine.prototype.destroy=function(){this.disableAutoUpdates();for(var t=this.shadows.length-1;t>=0;t--)this.shadows[t].destroy();this.light=null,this.shadows=null,this.splitter=null,this.fnDrawHandler=null};n.Shine.prototype.draw=function(){for(var t=this.shadows.length-1;t>=0;t--)this.shadows[t].draw(this.light,this.config)};n.Shine.prototype.updateContent=function(t){var e=this.areAutoUpdatesEnabled;this.disableAutoUpdates(),n.StyleInjector.getInstance().inject(this.getCSS()),this.shadows.length=0,this.splitter.split(t,!t&&!this.elememtHasTextOnly(this.domElement));for(var i=this.getPrefixed(this.shadowProperty),s=0;s<this.splitter.elements.length;s++){var o=this.splitter.elements[s],a=new n.Shadow(o);a.shadowProperty=i,this.shadows.push(a)}e&&this.enableAutoUpdates(),this.draw()};n.Shine.prototype.enableAutoUpdates=function(){this.disableAutoUpdates(),this.areAutoUpdatesEnabled=!0;var t=this.fnDrawHandler=this.draw.bind(this);window.addEventListener("scroll",t,!1),window.addEventListener("resize",t,!1);for(var e=this.shadows.length-1;e>=0;e--){var i=this.shadows[e];i.enableAutoUpdates()}};n.Shine.prototype.disableAutoUpdates=function(){this.areAutoUpdatesEnabled=!1;var t=this.fnDrawHandler;if(t){this.fnDrawHandler=null,window.removeEventListener("scroll",t,!1),window.removeEventListener("resize",t,!1);for(var e=this.shadows.length-1;e>=0;e--){var i=this.shadows[e];i.disableAutoUpdates()}}};n.Shine.prototype.getCSS=function(){return"/* shine.js styles */.shine-wrapper { display: inline-block; position: relative; max-width: 100%;}.shine-word { display: inline-block; white-space: nowrap;}.shine-letter { position: relative; display: inline-block;}.shine-mask { position: absolute; top: 0; left: 0; right: 0; bottom: 0;}"};n.Shine.prototype.getPrefixed=function(t){for(var e=this.domElement||document.createElement("div"),i=e.style,s=["webkit","ms","Moz","Webkit","O"],o=t.charAt(0).toUpperCase()+t.substring(1),a=0;a<s.length;a++){var r=s[a]+o;if(r in i)return r}return t};n.Shine.prototype.isCSSPropertySupported=function(t,e){var i=document.createElement("div"),s=i.style,o=["-webkit-","-ms-","-moz-"];return s.cssText=o.join(t+":"+e+";"),!!s.length&&(document.documentMode===void 0||document.documentMode>9)};n.Shine.prototype.areFiltersSupported=function(){return this.isCSSPropertySupported("filter","blur(2px)")};n.Shine.prototype.elememtHasTextOnly=function(t){var e=t.childNodes;if(!e||e.length===0)return!0;for(var i=0;i<e.length;i++)if(e[i].nodeType!==3)return!1;return!0};u.Shine=u.Shine||n.Shine;const v=n.Shine;export{v as Shine};