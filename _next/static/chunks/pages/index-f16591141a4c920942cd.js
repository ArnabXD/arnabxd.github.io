_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("q1tI"),a=n("sKF2"),i=n("g4pe"),c=n.n(i),u=n("vRNQ"),s=n.n(u);t.default=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],i=Object(a.b)(),u=i.theme,l=i.setTheme;Object(o.useEffect)((function(){n(!0)}),[]);return Object(r.jsxs)("div",{className:s.a.container,children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"Create Next App"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsxs)("div",{className:"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4",children:[Object(r.jsx)("div",{className:"flex-shrink-0",children:Object(r.jsx)("img",{className:"h-12 w-12",src:"../vercel.svg",alt:"ChitChat Logo",onClick:function(){t&&l("light"===u?"dark":"light")}})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"text-xl font-medium text-black",children:"ArnabXD"}),Object(r.jsx)("p",{className:"text-gray-500",children:"Arnab Paryali"})]})]})]})}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var l=d[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],m=r[l]||new Set;"name"===l&&i||!m.has(f)?(m.add(f),r[l]=m):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}p.rewind=function(){};var h=p;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},sKF2:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return u}));var r=n("q1tI"),o=n.n(r),a=n("g4pe"),i=n.n(a),c=Object(r.createContext)({setTheme:function(e){},themes:[]}),u=function(){return Object(r.useContext)(c)},s=["light","dark"],l="(prefers-color-scheme: dark)",f=function(e){var t=e.forcedTheme,n=e.disableTransitionOnChange,a=void 0!==n&&n,i=e.enableSystem,u=void 0===i||i,f=e.enableColorScheme,v=void 0===f||f,y=e.storageKey,b=void 0===y?"theme":y,g=e.themes,_=void 0===g?["light","dark"]:g,x=e.defaultTheme,j=void 0===x?u?"system":"light":x,w=e.attribute,O=void 0===w?"data-theme":w,S=e.value,k=e.children,M=Object(r.useState)((function(){return m(b,j)})),C=M[0],E=M[1],I=Object(r.useState)((function(){return m(b)})),P=I[0],A=I[1],T=S?Object.values(S):_,H=Object(r.useCallback)((function(e){var n=h(e);A(n),"system"!==C||t||D(n,!1)}),[C,t]),N=Object(r.useRef)(H);N.current=H;var D=Object(r.useCallback)((function(e,t,n){void 0===t&&(t=!0),void 0===n&&(n=!0);var r=(null==S?void 0:S[e])||e,o=a&&n?p():null;if(t)try{localStorage.setItem(b,e)}catch(e){}if("system"===e&&u){var i=h();r=(null==S?void 0:S[i])||i}if(n){var c,s=document.documentElement;"class"===O?((c=s.classList).remove.apply(c,T),s.classList.add(r)):s.setAttribute(O,r),null==o||o()}}),[]);Object(r.useEffect)((function(){var e=function(){return N.current.apply(N,[].slice.call(arguments))},t=window.matchMedia(l);return t.addListener(e),e(t),function(){return t.removeListener(e)}}),[]);var L=Object(r.useCallback)((function(e){t?D(e,!0,!1):D(e),E(e)}),[t]);return Object(r.useEffect)((function(){var e=function(e){e.key===b&&L(e.newValue)};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}}),[L]),Object(r.useEffect)((function(){if(v){var e=t&&s.includes(t)?t:C&&s.includes(C)?C:"system"===C&&P||null;document.documentElement.style.setProperty("color-scheme",e)}}),[v,C,P,t]),o.a.createElement(c.Provider,{value:{theme:C,setTheme:L,forcedTheme:t,resolvedTheme:"system"===C?P:C,themes:u?[].concat(_,["system"]):_,systemTheme:u?P:void 0}},o.a.createElement(d,{forcedTheme:t,storageKey:b,attribute:O,value:S,enableSystem:u,defaultTheme:j,attrs:T}),k)},d=Object(r.memo)((function(e){var t=e.forcedTheme,n=e.storageKey,r=e.attribute,a=e.enableSystem,c=e.defaultTheme,u=e.value,s="class"===r?"var d=document.documentElement.classList;d.remove("+e.attrs.map((function(e){return"'"+e+"'"})).join(",")+");":"var d=document.documentElement;",f=function(e,t){e=(null==u?void 0:u[e])||e;var n=t?e:"'"+e+"'";return"class"===r?"d.add("+n+")":"d.setAttribute('"+r+"', "+n+")"},d="system"===c;return o.a.createElement(i.a,null,o.a.createElement("script",t?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){"+s+f(t)+"}()"}}:a?{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try {"+s+"var e=localStorage.getItem('"+n+"');"+(d?"":f(c)+";")+'if("system"===e||(!e&&'+d+')){var t="'+l+'",m=window.matchMedia(t);m.media!==t||m.matches?'+f("dark")+":"+f("light")+"}else if(e) "+(u?"var x="+JSON.stringify(u)+";":"")+f(u?"x[e]":"e",!0)+"}catch(e){}}()"}}:{key:"next-themes-script",dangerouslySetInnerHTML:{__html:"!function(){try{"+s+'var e=localStorage.getItem("'+n+'");if(e){'+(u?"var x="+JSON.stringify(u)+";":"")+f(u?"x[e]":"e",!0)+"}else{"+f(c)+";}}catch(t){}}();"}}))}),(function(e,t){return e.forcedTheme===t.forcedTheme})),m=function(e,t){if("undefined"!=typeof window){var n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=function(){var e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),function(){window.getComputedStyle(document.body),setTimeout((function(){document.head.removeChild(e)}),1)}},h=function(e){return e||(e=window.matchMedia(l)),e.matches?"dark":"light"}},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},[["/EDR",0,1]]]);