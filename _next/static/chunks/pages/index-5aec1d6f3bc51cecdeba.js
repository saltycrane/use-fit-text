_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(t,e,n){"use strict";n.r(e);var r=n("8Kt/"),o=n.n(r),i=n("q1tI"),a=n.n(i),s=n("rg7i"),u=n.n(s),c=a.a.createElement;function f(){var t=u()(),e=t.fontSize,n=t.ref;return c(a.a.Fragment,null,c("b",null,"Example 1 - basic example"),c("div",{ref:n,style:{fontSize:e,height:40,width:120,border:"1px solid #ccc"}},"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"),c("hr",null))}function l(){var t=u()(),e=t.fontSize,n=t.ref;return c(a.a.Fragment,null,c("b",null,"Example 2 - non-wrapping text"),c("div",{ref:n,style:{fontSize:e,height:40,width:120,border:"1px solid #ccc"}},c("div",{style:{whiteSpace:"nowrap"}},"Lorem ipsum dolor sit amet, consectetur")),c("hr",null))}function d(){var t=Object(i.useCallback)((function(){console.log("Example 3 resizing started")}),[]),e=Object(i.useCallback)((function(t){console.log("Example 3 resizing finished",t)}),[]),n=u()({maxFontSize:500,onStart:t,onFinish:e}),r=n.fontSize,o=n.ref;return c(a.a.Fragment,null,c("b",null,"Example 3 - recalculating on container change"),c("p",null,"Demonstrates:"),c("ul",null,c("li",null,"recalculating font size on window resize"),c("li",null,c("code",{className:"text-dark"},"onStart")," and"," ",c("code",{className:"text-dark"},"onFinish")," callbacks (see log message in the console)")),c("div",{ref:o,style:{fontSize:r,height:100,width:"100%"}},"Lorem ipsum dolor sit amet, consectetur"),c("hr",null))}function h(){var t=Object(i.useState)("Lorem ipsum dolor sit amet, consectetur"),e=t[0],n=t[1],r=u()(),o=r.fontSize,s=r.ref;return c(a.a.Fragment,null,c("b",null,"Example 4 - recalculating on content change"),c("p",null,"Change the input text and the font size will be updated to fit the text in the div"),c("div",null,c("textarea",{onChange:function(t){return n(t.target.value)},value:e}),c("div",{ref:s,style:{fontSize:o,height:40,width:120,border:"1px solid #ccc"}},e)),c("hr",null))}function p(){var t=u()({maxFontSize:285.7142857142857,minFontSize:125.7142857142857,onFinish:function(){}}),e=t.fontSize,n=t.ref;return c(a.a.Fragment,null,c("b",null,"Example 5 - fails to fit text because ",c("code",null,"fontSizeMin")," is too big. Shows a message in the console."),c("div",{ref:n,style:{fontSize:e,height:40,width:120,border:"1px solid red"}},"Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur"),c("hr",null))}e.default=function(){return c(a.a.Fragment,null,c(o.a,null,c("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css",integrity:"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z",crossOrigin:"anonymous"})),c("nav",{className:"navbar navbar-light bg-light"},c("div",{className:"container"},c("span",{className:"navbar-brand"},"use-fit-text"),c("ul",{className:"navbar-nav"},c("li",{className:"nav-item"},c("a",{className:"nav-link",href:"https://github.com/saltycrane/use-fit-text"},"Github"))))),c("div",{className:"container",style:{fontSize:16}},c("h1",{className:"my-4"},"Examples"),c(f,null),c(l,null),c(d,null),c(h,null),c(p,null)))}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),s=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var s=0,u=d.length;s<u;s++){var c=d[s];if(o.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?i=!1:n.add(c);else{var f=o.props[c],l=r[c]||new Set;l.has(f)?i=!1:(l.add(f),r[c]=l)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function p(t){var e=t.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}p.rewind=function(){};var v=p;e.default=v},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),u=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){a(n,t);var e=c(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},bdgK:function(t,e,n){"use strict";n.r(e),function(t){var n=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];t.call(e,o[1],o[0])}},e}()}(),r="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,o="undefined"!==typeof t&&t.Math===Math?t:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),i="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],s="undefined"!==typeof MutationObserver,u=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,o=0;function a(){n&&(n=!1,t()),r&&u()}function s(){i(a)}function u(){var t=Date.now();if(n){if(t-o<2)return;r=!0}else n=!0,r=!1,setTimeout(s,e);o=t}return u}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){r&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),s?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){r&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),c=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},f=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},l=b(0,0,0,0);function d(t){return parseFloat(t)||0}function h(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return l;var r=f(t).getComputedStyle(t),o=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],i=t["padding-"+o];e[o]=d(i)}return e}(r),i=o.left+o.right,a=o.top+o.bottom,s=d(r.width),u=d(r.height);if("border-box"===r.boxSizing&&(Math.round(s+i)!==e&&(s-=h(r,"left","right")+i),Math.round(u+a)!==n&&(u-=h(r,"top","bottom")+a)),!function(t){return t===f(t).document.documentElement}(t)){var c=Math.round(s+i)-e,p=Math.round(u+a)-n;1!==Math.abs(c)&&(s-=c),1!==Math.abs(p)&&(u-=p)}return b(o.left,o.top,s,u)}var v="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof f(t).SVGGraphicsElement}:function(t){return t instanceof f(t).SVGElement&&"function"===typeof t.getBBox};function m(t){return r?v(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):p(t):l}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=m(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n=function(t){var e=t.x,n=t.y,r=t.width,o=t.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return c(a,{x:e,y:n,width:r,height:o,top:n,right:e+r,bottom:o+n,left:e}),a}(e);c(this,{target:t,contentRect:n})},g=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof f(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!==typeof WeakMap?new WeakMap:new n,x=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(e,n,this);w.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){x.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));var S="undefined"!==typeof o.ResizeObserver?o.ResizeObserver:x;e.default=S}.call(this,n("yLpj"))},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},rg7i:function(t,e,n){var r,o=n("q1tI"),i=(r=n("bdgK"))&&"object"==typeof r&&"default"in r?r.default:r,a={debug:10,info:20,warn:30,error:40,none:100},s="undefined"!=typeof window&&window.document&&window.document.createElement?o.useLayoutEffect:o.useEffect;t.exports=function(t){void 0===t&&(t={});var e=t.logLevel;void 0===e&&(e="info");var n=t.maxFontSize;void 0===n&&(n=100);var r=t.minFontSize;void 0===r&&(r=20);var u=t.onFinish,c=t.onStart,f=t.resolution;void 0===f&&(f=5);var l=a[e],d=o.useCallback((function(){return{calcKey:0,fontSize:n,fontSizePrev:r,fontSizeMax:n,fontSizeMin:r}}),[n,r]),h=o.useRef(null),p=o.useRef(),v=o.useRef(!1),m=o.useState(d),b=m[0],y=m[1],_=b.calcKey,g=b.fontSize,w=b.fontSizeMax,x=b.fontSizeMin,S=b.fontSizePrev,O=null,M=o.useState((function(){return new i((function(){O=window.requestAnimationFrame((function(){v.current||(c&&c(),v.current=!0,y(Object.assign({},d(),{calcKey:_+1})))}))}))}))[0];o.useEffect((function(){return h.current&&M.observe(h.current),function(){O&&window.cancelAnimationFrame(O),M.disconnect()}}),[O,M]);var E=h.current&&h.current.innerHTML;return o.useEffect((function(){0===_||v.current||(E!==p.current&&(c&&c(),y(Object.assign({},d(),{calcKey:_+1}))),p.current=E)}),[_,d,E,c]),s((function(){if(0!==_){var t=Math.abs(g-S)<=f,e=!!h.current&&(h.current.scrollHeight>h.current.offsetHeight||h.current.scrollWidth>h.current.offsetWidth),n=g>S;if(t)e&&g===S?(v.current=!1,l<=a.info&&console.info("[use-fit-text] reached `minFontSize = "+r+"` without fitting text")):e?y({fontSize:n?S:x,fontSizeMax:w,fontSizeMin:x,fontSizePrev:S,calcKey:_}):(v.current=!1,u&&u(g));else{var o,i=w,s=x;e?(o=n?S-g:x-g,i=Math.min(w,g)):(o=n?w-g:S-g,s=Math.max(x,g)),y({calcKey:_,fontSize:g+o/2,fontSizeMax:i,fontSizeMin:s,fontSizePrev:g})}}}),[_,g,w,x,S,u,h,f]),{fontSize:g+"%",ref:h}}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}},[["/EDR",0,1]]]);