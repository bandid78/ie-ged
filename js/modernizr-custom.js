/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-canvas-cssfilters-filereader-flexbox-fontface-inlinesvg-json-localizednumber-srcset-svg-svgasimg-svgfilters-video-videoautoplay-videopreload-setclasses-shiv !*/
!function(e,A,t){function n(e,A){return typeof e===A}function o(){var e,A,t,o,r,i,a;for(var l in E)if(E.hasOwnProperty(l)){if(e=[],A=E[l],A.name&&(e.push(A.name.toLowerCase()),A.options&&A.options.aliases&&A.options.aliases.length))for(t=0;t<A.options.aliases.length;t++)e.push(A.options.aliases[t].toLowerCase());for(o=n(A.fn,"function")?A.fn():A.fn,r=0;r<e.length;r++)i=e[r],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function r(e){var A=T.className,t=Modernizr._config.classPrefix||"";if(R&&(A=A.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");A=A.replace(n,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(A+=" "+t+e.join(" "+t),R?T.className.baseVal=A:T.className=A)}function i(){return"function"!=typeof A.createElement?A.createElement(arguments[0]):R?A.createElementNS.call(A,"http://www.w3.org/2000/svg",arguments[0]):A.createElement.apply(A,arguments)}function a(){var e=A.body;return e||(e=i(R?"svg":"body"),e.fake=!0),e}function l(e,t,n,o){var r,l,s,c,d="modernizr",u=i("div"),p=a();if(parseInt(n,10))for(;n--;)s=i("div"),s.id=o?o[n]:d+(n+1),u.appendChild(s);return r=i("style"),r.type="text/css",r.id="s"+d,(p.fake?p:u).appendChild(r),p.appendChild(u),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(A.createTextNode(e)),u.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",c=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),l=t(u,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=c,T.offsetHeight):u.parentNode.removeChild(u),!!l}function s(e,A){if("object"==typeof e)for(var t in e)Q(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;A="function"==typeof A?A():A,1==n.length?Modernizr[n[0]]=A:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=A),r([(A&&0!=A?"":"no-")+n.join("-")]),Modernizr._trigger(e,A)}return Modernizr}function c(e,A){return!!~(""+e).indexOf(A)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,A,t){return A+t.toUpperCase()}).replace(/^-/,"")}function u(e,A){return function(){return e.apply(A,arguments)}}function p(e,A,t){var o;for(var r in e)if(e[r]in A)return t===!1?e[r]:(o=A[e[r]],n(o,"function")?u(o,t||A):o);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,A){return"-"+A.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(A,n){var o=A.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(A[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+f(A[o])+":"+n+")");return r=r.join(" or "),l("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,A,o,r){function a(){s&&(delete k.style,delete k.modElem)}if(r=n(r,"undefined")?!1:r,!n(o,"undefined")){var l=m(e,o);if(!n(l,"undefined"))return l}for(var s,u,p,f,h,g=["modernizr","tspan"];!k.style;)s=!0,k.modElem=i(g.shift()),k.style=k.modElem.style;for(p=e.length,u=0;p>u;u++)if(f=e[u],h=k.style[f],c(f,"-")&&(f=d(f)),k.style[f]!==t){if(r||n(o,"undefined"))return a(),"pfx"==A?f:!0;try{k.style[f]=o}catch(v){}if(k.style[f]!=h)return a(),"pfx"==A?f:!0}return a(),!1}function g(e,A,t,o,r){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+Z.join(i+" ")+i).split(" ");return n(A,"string")||n(A,"undefined")?h(a,A,o,r):(a=(e+" "+N.join(i+" ")+i).split(" "),p(a,A,t))}function v(e,A,n){return g(e,t,t,A,n)}var y=[],E=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,A){var t=this;setTimeout(function(){A(t[e])},0)},addTest:function(e,A,t){E.push({name:e,fn:A,options:t})},addAsyncTest:function(e){E.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("json","JSON"in e&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("svg",!!A.createElementNS&&!!A.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("svgfilters",function(){var A=!1;try{A="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return A});var T=A.documentElement,R="svg"===T.nodeName.toLowerCase();R||!function(e,A){function t(e,A){var t=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return t.innerHTML="x<style>"+A+"</style>",n.insertBefore(t.lastChild,n.firstChild)}function n(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e,A){var t=y.elements;"string"!=typeof t&&(t=t.join(" ")),"string"!=typeof e&&(e=e.join(" ")),y.elements=t+" "+e,s(A)}function r(e){var A=v[e[h]];return A||(A={},g++,e[h]=g,v[g]=A),A}function i(e,t,n){if(t||(t=A),d)return t.createElement(e);n||(n=r(t));var o;return o=n.cache[e]?n.cache[e].cloneNode():m.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),!o.canHaveChildren||f.test(e)||o.tagUrn?o:n.frag.appendChild(o)}function a(e,t){if(e||(e=A),d)return e.createDocumentFragment();t=t||r(e);for(var o=t.frag.cloneNode(),i=0,a=n(),l=a.length;l>i;i++)o.createElement(a[i]);return o}function l(e,A){A.cache||(A.cache={},A.createElem=e.createElement,A.createFrag=e.createDocumentFragment,A.frag=A.createFrag()),e.createElement=function(t){return y.shivMethods?i(t,e,A):A.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-:]+/g,function(e){return A.createElem(e),A.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,A.frag)}function s(e){e||(e=A);var n=r(e);return!y.shivCSS||c||n.hasCSS||(n.hasCSS=!!t(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),d||l(e,n),e}var c,d,u="3.7.3",p=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=A.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,d=1==e.childNodes.length||function(){A.createElement("a");var e=A.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(t){c=!0,d=!0}}();var y={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:u,shivCSS:p.shivCSS!==!1,supportsUnknownElements:d,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a,addElements:o};e.html5=y,s(A),"object"==typeof module&&module.exports&&(module.exports=y)}("undefined"!=typeof e?e:this,A),Modernizr.addTest("video",function(){var e=i("video"),A=!1;try{(A=!!e.canPlayType)&&(A=new Boolean(A),A.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),A.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),A.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),A.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),A.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return A}),Modernizr.addTest("srcset","srcset"in i("img")),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("videopreload","preload"in i("video")),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))});var F=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=F;var C="CSS"in e&&"supports"in e.CSS,B="supportsCSS"in e;Modernizr.addTest("supports",C||B);var G=w.testStyles=l,b=function(){var e=navigator.userAgent,A=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>A&&e.match(/android/gi);return t||o||n}();b?Modernizr.addTest("fontface",!1):G('@font-face {font-family:"font";src:url("https://")}',function(e,t){var n=A.getElementById("smodernizr"),o=n.sheet||n.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",i=/src/i.test(r)&&0===r.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",i)}),Modernizr.addTest("formvalidation",function(){var A=i("form");if(!("checkValidity"in A&&"addEventListener"in A))return!1;if("reportValidity"in A)return!0;var t,n=!1;return Modernizr.formvalidationapi=!0,A.addEventListener("submit",function(A){(!e.opera||e.operamini)&&A.preventDefault(),A.stopPropagation()},!1),A.innerHTML='<input name="modTest" required><button></button>',G("#modernizr form{position:absolute;top:-99999em}",function(e){e.appendChild(A),t=A.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){n=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,A.getElementsByTagName("button")[0].click()}),n});var x=i("input"),S="search tel url email datetime date month week time datetime-local number range color".split(" "),M={};Modernizr.inputtypes=function(e){for(var n,o,r,i=e.length,a="1)",l=0;i>l;l++)x.setAttribute("type",n=e[l]),r="text"!==x.type&&"style"in x,r&&(x.value=a,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&x.style.WebkitAppearance!==t?(T.appendChild(x),o=A.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,T.removeChild(x)):/^(search|tel)$/.test(n)||(r=/^(url|email)$/.test(n)?x.checkValidity&&x.checkValidity()===!1:x.value!=a)),M[e[l]]=!!r;return M}(S),Modernizr.addTest("localizednumber",function(){if(!Modernizr.inputtypes.number)return!1;if(!Modernizr.formvalidation)return!1;var e,t=i("div"),n=a(),o=function(){return T.insertBefore(n,T.firstElementChild||T.firstChild)}();t.innerHTML='<input type="number" value="1.0" step="0.1"/>';var r=t.childNodes[0];o.appendChild(t),r.focus();try{A.execCommand("InsertText",!1,"1,1")}catch(l){}return e="number"===r.type&&1.1===r.valueAsNumber&&r.checkValidity(),o.removeChild(t),n.fake&&o.parentNode.removeChild(o),e});var Q;!function(){var e={}.hasOwnProperty;Q=n(e,"undefined")||n(e.call,"undefined")?function(e,A){return A in e&&n(e.constructor.prototype[A],"undefined")}:function(A,t){return e.call(A,t)}}(),w._l={},w.on=function(e,A){this._l[e]||(this._l[e]=[]),this._l[e].push(A),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,A){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,n;for(e=0;e<t.length;e++)(n=t[e])(A)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=s}),Modernizr.addTest("svgasimg",A.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")),Modernizr.addAsyncTest(function(){function e(t){clearTimeout(A),n.removeEventListener("playing",e,!1),s("videoautoplay",t&&"playing"===t.type||0!==n.currentTime),n.parentNode.removeChild(n)}var A,t=300,n=i("video"),o=n.style;if(!(Modernizr.video&&"autoplay"in n))return void s("videoautoplay",!1);o.position="absolute",o.height=0,o.width=0;try{if(Modernizr.video.ogg)n.src="data:video/ogg;base64,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";else{if(!Modernizr.video.h264)return void s("videoautoplay",!1);n.src="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="}}catch(r){return void s("videoautoplay",!1)}n.setAttribute("autoplay",""),n.style.cssText="display:none",T.appendChild(n),setTimeout(function(){n.addEventListener("playing",e,!1),A=setTimeout(e,t)},0)});var V="Moz O ms Webkit",Z=w._config.usePrefixes?V.split(" "):[];w._cssomPrefixes=Z;var N=w._config.usePrefixes?V.toLowerCase().split(" "):[];w._domPrefixes=N;var Y={elem:i("modernizr")};Modernizr._q.push(function(){delete Y.elem});var k={style:Y.elem.style};Modernizr._q.unshift(function(){delete k.style}),w.testAllProps=g,w.testAllProps=v,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return v("filter","blur(2px)");var e=i("a");return e.style.cssText=F.join("filter:blur(2px); "),!!e.style.length&&(A.documentMode===t||A.documentMode>9)}),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),o(),r(y),delete w.addTest,delete w.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);