(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[3],{1214:function(t,e,n){"use strict";var o=n(21),r=n(9),i=(n(30),n(0)),a=n.n(i),s=n(71),u=n.n(s),l=!1,c=n(695),p=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(r="exited",o.appearStatus="entering"):r="entered":r=e.unmountOnExit||e.mountOnEnter?"unmounted":"exited",o.state={status:r},o.nextCallback=null,o}Object(r.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&"unmounted"===e.status?{status:"exited"}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(e="entering"):"entering"!==n&&"entered"!==n||(e="exiting")}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),"entering"===e?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[u.a.findDOMNode(this),o],i=r[0],a=r[1],s=this.getTimeouts(),c=o?s.appear:s.enter;!t&&!n||l?this.safeSetState({status:"entered"},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:"entering"},(function(){e.props.onEntering(i,a),e.onTransitionEnd(c,(function(){e.safeSetState({status:"entered"},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:u.a.findDOMNode(this);e&&!l?(this.props.onExit(o),this.safeSetState({status:"exiting"},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:"exited"},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:u.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if("unmounted"===t)return null;var e=this.props,n=e.children,r=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(o.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(c.a.Provider,{value:null},"function"===typeof n?n(t,r):a.a.cloneElement(a.a.Children.only(n),r))},e}(a.a.Component);function d(){}p.contextType=c.a,p.propTypes={},p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},p.UNMOUNTED="unmounted",p.EXITED="exited",p.ENTERING="entering",p.ENTERED="entered",p.EXITING="exiting";e.a=p},1216:function(t,e,n){"use strict";var o=n(21),r=n(5),i=n(301),a=n(9),s=(n(30),n(0)),u=n.n(s),l=n(695);function c(t,e){var n=Object.create(null);return t&&s.Children.map(t,(function(t){return t})).forEach((function(t){n[t.key]=function(t){return e&&Object(s.isValidElement)(t)?e(t):t}(t)})),n}function p(t,e,n){return null!=n[e]?n[e]:t.props[e]}function d(t,e,n){var o=c(t.children),r=function(t,e){function n(n){return n in e?e[n]:t[n]}t=t||{},e=e||{};var o,r=Object.create(null),i=[];for(var a in t)a in e?i.length&&(r[a]=i,i=[]):i.push(a);var s={};for(var u in e){if(r[u])for(o=0;o<r[u].length;o++){var l=r[u][o];s[r[u][o]]=n(l)}s[u]=n(u)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}(e,o);return Object.keys(r).forEach((function(i){var a=r[i];if(Object(s.isValidElement)(a)){var u=i in e,l=i in o,c=e[i],d=Object(s.isValidElement)(c)&&!c.props.in;!l||u&&!d?l||!u||d?l&&u&&Object(s.isValidElement)(c)&&(r[i]=Object(s.cloneElement)(a,{onExited:n.bind(null,a),in:c.props.in,exit:p(a,"exit",t),enter:p(a,"enter",t)})):r[i]=Object(s.cloneElement)(a,{in:!1}):r[i]=Object(s.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:p(a,"exit",t),enter:p(a,"enter",t)})}})),r}var f=Object.values||function(t){return Object.keys(t).map((function(e){return t[e]}))},h=function(t){function e(e,n){var o,r=(o=t.call(this,e,n)||this).handleExited.bind(Object(i.a)(o));return o.state={contextValue:{isMounting:!0},handleExited:r,firstRender:!0},o}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(t,e){var n,o,r=e.children,i=e.handleExited;return{children:e.firstRender?(n=t,o=i,c(n.children,(function(t){return Object(s.cloneElement)(t,{onExited:o.bind(null,t),in:!0,appear:p(t,"appear",n),enter:p(t,"enter",n),exit:p(t,"exit",n)})}))):d(t,r,i),firstRender:!1}},n.handleExited=function(t,e){var n=c(this.props.children);t.key in n||(t.props.onExited&&t.props.onExited(e),this.mounted&&this.setState((function(e){var n=Object(r.a)({},e.children);return delete n[t.key],{children:n}})))},n.render=function(){var t=this.props,e=t.component,n=t.childFactory,r=Object(o.a)(t,["component","childFactory"]),i=this.state.contextValue,a=f(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===e?u.a.createElement(l.a.Provider,{value:i},a):u.a.createElement(l.a.Provider,{value:i},u.a.createElement(e,r,a))},e}(u.a.Component);h.propTypes={},h.defaultProps={component:"div",childFactory:function(t){return t}};e.a=h},290:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var i=typeof o;if("string"===i||"number"===i)t.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&t.push(a)}else if("object"===i)for(var s in o)n.call(o,s)&&o[s]&&t.push(s)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(o=function(){return r}.apply(e,[]))||(t.exports=o)}()},291:function(t,e,n){"use strict";n.d(e,"o",(function(){return a})),n.d(e,"h",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"l",(function(){return l})),n.d(e,"m",(function(){return c})),n.d(e,"n",(function(){return p})),n.d(e,"s",(function(){return f})),n.d(e,"a",(function(){return g})),n.d(e,"q",(function(){return m})),n.d(e,"p",(function(){return b})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return v})),n.d(e,"k",(function(){return E})),n.d(e,"b",(function(){return T})),n.d(e,"e",(function(){return O})),n.d(e,"r",(function(){return C})),n.d(e,"j",(function(){return j})),n.d(e,"i",(function(){return w})),n.d(e,"g",(function(){return D}));var o,r=n(30),i=n.n(r);function a(t){document.body.style.paddingRight=t>0?t+"px":null}function s(){var t=window.getComputedStyle(document.body,null);return parseInt(t&&t.getPropertyValue("padding-right")||0,10)}function u(){var t=function(){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}(),e=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=e?parseInt(e.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&a(n+t)}function l(t,e){return void 0===t&&(t=""),void 0===e&&(e=o),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function c(t,e){var n={};return Object.keys(t).forEach((function(o){-1===e.indexOf(o)&&(n[o]=t[o])})),n}function p(t,e){for(var n,o=Array.isArray(e)?e:[e],r=o.length,i={};r>0;)i[n=o[r-=1]]=t[n];return i}var d={};function f(t){d[t]||("undefined"!==typeof console&&console.error(t),d[t]=!0)}var h="object"===typeof window&&window.Element||function(){};function g(t,e,n){if(!(t[e]instanceof h))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var m=i.a.oneOfType([i.a.string,i.a.func,g,i.a.shape({current:i.a.any})]),b=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),y={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],E={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},T=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],O=!("undefined"===typeof window||!window.document||!window.document.createElement);function x(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function C(t){var e=typeof t;if("number"===e)return t;if("symbol"===e||"object"===e&&"[object Symbol]"===x(t))return NaN;if(j(t)){var n="function"===typeof t.valueOf?t.valueOf():t;t=j(n)?""+n:n}if("string"!==e)return 0===t?t:+t;t=t.replace(/^\s+|\s+$/g,"");var o=/^0b[01]+$/i.test(t);return o||/^0o[0-7]+$/i.test(t)?parseInt(t.slice(2),o?2:8):/^[-+]0x[0-9a-f]+$/i.test(t)?NaN:+t}function j(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function N(t){if(function(t){return!(!t||"object"!==typeof t)&&"current"in t}(t))return t.current;if(function(t){if(!j(t))return!1;var e=x(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}(t))return t();if("string"===typeof t&&O){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function k(t){return null!==t&&(Array.isArray(t)||O&&"number"===typeof t.length)}function w(t,e){var n=N(t);return e?k(n)?n:null===n?[]:[n]:k(n)?n[0]:n}var D=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},301:function(t,e,n){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return o}))},303:function(t,e,n){"use strict";n.d(e,"a",(function(){return M})),n.d(e,"b",(function(){return z}));var o=n(5),r=n(21),i=n(9),a=n(0),s=n.n(a),u=n(30),l=n.n(u),c=n(290),p=n.n(c),d=n(1214),f=n(1216),h=n(71),g={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},m={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},b=0,y=1,v=2,E=3,T=4,O=function(){};function x(t){return"number"===typeof t&&!isNaN(t)&&t>0}function C(t){return Object.keys(t).map((function(e){return t[e]}))}var j=!("undefined"===typeof window||!window.document||!window.document.createElement);var N,k=((N=function(t,e,n){var o=t[e];return!1===o||x(o)?null:new Error(n+" expect "+e+" \n      to be a valid Number > 0 or equal to false. "+o+" given.")}).isRequired=function(t,e,n){if("undefined"===typeof t[e])return new Error("The prop "+e+" is marked as required in \n      "+n+", but its value is undefined.");N(t,e,n)},N),w={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t){return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach((function(t){return clearTimeout(t)})),this.emitQueue.delete(t)),this},emit:function(t){for(var e=this,n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];this.list.has(t)&&this.list.get(t).forEach((function(n){var r=setTimeout((function(){n.apply(void 0,o)}),0);e.emitQueue.has(t)||e.emitQueue.set(t,[]),e.emitQueue.get(t).push(r)}))}};function D(t){var e=t.enter,n=t.exit,i=t.duration,a=void 0===i?750:i,u=t.appendPosition,l=void 0!==u&&u;return function(t){var i,u,c=t.children,p=t.position,f=t.preventExitTransition,h=Object(r.a)(t,["children","position","preventExitTransition"]),g=l?e+"--"+p:e,m=l?n+"--"+p:n;Array.isArray(a)&&2===a.length?(i=a[0],u=a[1]):i=u=a;return s.a.createElement(d.a,Object(o.a)({},h,{timeout:f?0:{enter:i,exit:u},onEnter:function(t){t.classList.add(g),t.style.animationFillMode="forwards",t.style.animationDuration=.001*i+"s"},onEntered:function(t){t.classList.remove(g),t.style.cssText=""},onExit:f?O:function(t){t.classList.add(m),t.style.animationFillMode="forwards",t.style.animationDuration=.001*u+"s"}}),c)}}function R(t){var e,n,r=t.delay,i=t.isRunning,a=t.closeToast,u=t.type,l=t.hide,c=t.className,d=t.style,f=t.controlledProgress,h=t.progress,g=t.rtl,m=Object(o.a)({},d,{animationDuration:r+"ms",animationPlayState:i?"running":"paused",opacity:l?0:1,transform:f?"scaleX("+h+")":null}),b=p()("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar--"+u,((e={})["Toastify__progress-bar--rtl"]=g,e),c),y=((n={})[f&&h>=1?"onTransitionEnd":"onAnimationEnd"]=f&&h<1?null:a,n);return s.a.createElement("div",Object(o.a)({className:b,style:m},y))}function S(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function _(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}R.propTypes={delay:k.isRequired,isRunning:l.a.bool.isRequired,closeToast:l.a.func.isRequired,rtl:l.a.bool.isRequired,type:l.a.string,hide:l.a.bool,className:l.a.oneOfType([l.a.string,l.a.object]),progress:l.a.number,controlledProgress:l.a.bool},R.defaultProps={type:m.DEFAULT,hide:!1};var I=j&&/(msie|trident)/i.test(navigator.userAgent),L=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={isRunning:!0,preventExitTransition:!1},e.flag={canCloseOnClick:!0,canDrag:!1},e.drag={start:0,x:0,y:0,deltaX:0,removalDistance:0},e.boundingRect=null,e.ref=null,e.pauseToast=function(){e.props.autoClose&&e.setState({isRunning:!1})},e.playToast=function(){e.props.autoClose&&e.setState({isRunning:!0})},e.onDragStart=function(t){e.flag.canCloseOnClick=!0,e.flag.canDrag=!0,e.boundingRect=e.ref.getBoundingClientRect(),e.ref.style.transition="",e.drag.start=e.drag.x=S(t.nativeEvent),e.drag.removalDistance=e.ref.offsetWidth*(e.props.draggablePercent/100)},e.onDragMove=function(t){e.flag.canDrag&&(e.state.isRunning&&e.pauseToast(),e.drag.x=S(t),e.drag.deltaX=e.drag.x-e.drag.start,e.drag.y=_(t),e.drag.start!==e.drag.x&&(e.flag.canCloseOnClick=!1),e.ref.style.transform="translateX("+e.drag.deltaX+"px)",e.ref.style.opacity=1-Math.abs(e.drag.deltaX/e.drag.removalDistance))},e.onDragEnd=function(t){if(e.flag.canDrag){if(e.flag.canDrag=!1,Math.abs(e.drag.deltaX)>e.drag.removalDistance)return void e.setState({preventExitTransition:!0},e.props.closeToast);e.ref.style.transition="transform 0.2s, opacity 0.2s",e.ref.style.transform="translateX(0)",e.ref.style.opacity=1}},e.onDragTransitionEnd=function(){if(e.boundingRect){var t=e.boundingRect,n=t.top,o=t.bottom,r=t.left,i=t.right;e.props.pauseOnHover&&e.drag.x>=r&&e.drag.x<=i&&e.drag.y>=n&&e.drag.y<=o?e.pauseToast():e.playToast()}},e.onExitTransitionEnd=function(){if(I)e.props.onExited();else{var t=e.ref.scrollHeight,n=e.ref.style;requestAnimationFrame((function(){n.minHeight="initial",n.height=t+"px",n.transition="all 0.4s ",requestAnimationFrame((function(){n.height=0,n.padding=0,n.margin=0})),setTimeout((function(){return e.props.onExited()}),400)}))}},e}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.onOpen(this.props.children.props),this.props.draggable&&this.bindDragEvents(),this.props.pauseOnFocusLoss&&this.bindFocusEvents()},n.componentDidUpdate=function(t){t.draggable!==this.props.draggable&&(this.props.draggable?this.bindDragEvents():this.unbindDragEvents()),t.pauseOnFocusLoss!==this.props.pauseOnFocusLoss&&(this.props.pauseOnFocusLoss?this.bindFocusEvents():this.unbindFocusEvents())},n.componentWillUnmount=function(){this.props.onClose(this.props.children.props),this.props.draggable&&this.unbindDragEvents(),this.props.pauseOnFocusLoss&&this.unbindFocusEvents()},n.bindFocusEvents=function(){window.addEventListener("focus",this.playToast),window.addEventListener("blur",this.pauseToast)},n.unbindFocusEvents=function(){window.removeEventListener("focus",this.playToast),window.removeEventListener("blur",this.pauseToast)},n.bindDragEvents=function(){document.addEventListener("mousemove",this.onDragMove),document.addEventListener("mouseup",this.onDragEnd),document.addEventListener("touchmove",this.onDragMove),document.addEventListener("touchend",this.onDragEnd)},n.unbindDragEvents=function(){document.removeEventListener("mousemove",this.onDragMove),document.removeEventListener("mouseup",this.onDragEnd),document.removeEventListener("touchmove",this.onDragMove),document.removeEventListener("touchend",this.onDragEnd)},n.render=function(){var t,e=this,n=this.props,r=n.closeButton,i=n.children,a=n.autoClose,u=n.pauseOnHover,l=n.onClick,c=n.closeOnClick,d=n.type,f=n.hideProgressBar,h=n.closeToast,g=n.transition,m=n.position,b=n.className,y=n.bodyClassName,v=n.progressClassName,E=n.progressStyle,T=n.updateId,O=n.role,x=n.progress,C=n.rtl,j={className:p()("Toastify__toast","Toastify__toast--"+d,(t={},t["Toastify__toast--rtl"]=C,t),b)};a&&u&&(j.onMouseEnter=this.pauseToast,j.onMouseLeave=this.playToast),c&&(j.onClick=function(t){l&&l(t),e.flag.canCloseOnClick&&h()});var N=parseFloat(x)===x;return s.a.createElement(g,{in:this.props.in,appear:!0,onExited:this.onExitTransitionEnd,position:m,preventExitTransition:this.state.preventExitTransition},s.a.createElement("div",Object(o.a)({onClick:l},j,{ref:function(t){return e.ref=t},onMouseDown:this.onDragStart,onTouchStart:this.onDragStart,onMouseUp:this.onDragTransitionEnd,onTouchEnd:this.onDragTransitionEnd}),s.a.createElement("div",Object(o.a)({},this.props.in&&{role:O},{className:p()("Toastify__toast-body",y)}),i),r&&r,(a||N)&&s.a.createElement(R,Object(o.a)({},T&&!N?{key:"pb-"+T}:{},{rtl:C,delay:a,isRunning:this.state.isRunning,closeToast:h,hide:f,type:d,style:E,className:v,controlledProgress:N,progress:x}))))},e}(a.Component);function P(t){var e=t.closeToast,n=t.type,o=t.ariaLabel;return s.a.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},"\u2716\ufe0e")}L.propTypes={closeButton:l.a.oneOfType([l.a.node,l.a.bool]).isRequired,autoClose:k.isRequired,children:l.a.node.isRequired,closeToast:l.a.func.isRequired,position:l.a.oneOf(C(g)).isRequired,pauseOnHover:l.a.bool.isRequired,pauseOnFocusLoss:l.a.bool.isRequired,closeOnClick:l.a.bool.isRequired,transition:l.a.func.isRequired,rtl:l.a.bool.isRequired,hideProgressBar:l.a.bool.isRequired,draggable:l.a.bool.isRequired,draggablePercent:l.a.number.isRequired,in:l.a.bool,onExited:l.a.func,onOpen:l.a.func,onClose:l.a.func,type:l.a.oneOf(C(m)),className:l.a.oneOfType([l.a.string,l.a.object]),bodyClassName:l.a.oneOfType([l.a.string,l.a.object]),progressClassName:l.a.oneOfType([l.a.string,l.a.object]),progressStyle:l.a.object,progress:l.a.number,updateId:l.a.oneOfType([l.a.string,l.a.number]),ariaLabel:l.a.string,containerId:l.a.oneOfType([l.a.string,l.a.number]),role:l.a.string},L.defaultProps={type:m.DEFAULT,in:!0,onOpen:O,onClose:O,className:null,bodyClassName:null,progressClassName:null,updateId:null},P.propTypes={closeToast:l.a.func,arialLabel:l.a.string},P.defaultProps={ariaLabel:"close"};var F=D({enter:"Toastify__bounce-enter",exit:"Toastify__bounce-exit",appendPosition:!0}),M=(D({enter:"Toastify__slide-enter",exit:"Toastify__slide-exit",duration:[450,750],appendPosition:!0}),D({enter:"Toastify__zoom-enter",exit:"Toastify__zoom-exit"}),D({enter:"Toastify__flip-enter",exit:"Toastify__flip-exit"}),function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={toast:[]},e.toastKey=1,e.collection={},e.isToastActive=function(t){return-1!==e.state.toast.indexOf(t)},e}Object(i.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;w.cancelEmit(E).on(b,(function(e,n){return t.ref?t.buildToast(e,n):null})).on(y,(function(e){return t.ref?null==e?t.clear():t.removeToast(e):null})).emit(v,this)},n.componentWillUnmount=function(){w.emit(E,this)},n.removeToast=function(t){this.setState({toast:this.state.toast.filter((function(e){return e!==t}))},this.dispatchChange)},n.dispatchChange=function(){w.emit(T,this.state.toast.length,this.props.containerId)},n.makeCloseButton=function(t,e,n){var o=this,r=this.props.closeButton;return Object(a.isValidElement)(t)||!1===t?r=t:!0===t&&(r=this.props.closeButton&&"boolean"!==typeof this.props.closeButton?this.props.closeButton:s.a.createElement(P,null)),!1!==r&&Object(a.cloneElement)(r,{closeToast:function(){return o.removeToast(e)},type:n})},n.getAutoCloseDelay=function(t){return!1===t||x(t)?t:this.props.autoClose},n.canBeRendered=function(t){return Object(a.isValidElement)(t)||"string"===typeof t||"number"===typeof t||"function"===typeof t},n.parseClassName=function(t){return"string"===typeof t?t:null!==t&&"object"===typeof t&&"toString"in t?t.toString():null},n.belongToContainer=function(t){return t.containerId===this.props.containerId},n.buildToast=function(t,e){var n=this,o=e.delay,i=Object(r.a)(e,["delay"]);if(!this.canBeRendered(t))throw new Error("The element you provided cannot be rendered. You provided an element of type "+typeof t);var s=i.toastId,u=i.updateId;if(!(this.props.enableMultiContainer&&!this.belongToContainer(i)||this.isToastActive(s)&&null==u)){var l=function(){return n.removeToast(s)},c={id:s,key:i.key||this.toastKey++,type:i.type,closeToast:l,updateId:i.updateId,rtl:this.props.rtl,position:i.position||this.props.position,transition:i.transition||this.props.transition,className:this.parseClassName(i.className||this.props.toastClassName),bodyClassName:this.parseClassName(i.bodyClassName||this.props.bodyClassName),onClick:i.onClick||this.props.onClick,closeButton:this.makeCloseButton(i.closeButton,s,i.type),pauseOnHover:"boolean"===typeof i.pauseOnHover?i.pauseOnHover:this.props.pauseOnHover,pauseOnFocusLoss:"boolean"===typeof i.pauseOnFocusLoss?i.pauseOnFocusLoss:this.props.pauseOnFocusLoss,draggable:"boolean"===typeof i.draggable?i.draggable:this.props.draggable,draggablePercent:"number"!==typeof i.draggablePercent||isNaN(i.draggablePercent)?this.props.draggablePercent:i.draggablePercent,closeOnClick:"boolean"===typeof i.closeOnClick?i.closeOnClick:this.props.closeOnClick,progressClassName:this.parseClassName(i.progressClassName||this.props.progressClassName),progressStyle:this.props.progressStyle,autoClose:this.getAutoCloseDelay(i.autoClose),hideProgressBar:"boolean"===typeof i.hideProgressBar?i.hideProgressBar:this.props.hideProgressBar,progress:parseFloat(i.progress),role:"string"===typeof i.role?i.role:this.props.role};"function"===typeof i.onOpen&&(c.onOpen=i.onOpen),"function"===typeof i.onClose&&(c.onClose=i.onClose),Object(a.isValidElement)(t)&&"string"!==typeof t.type&&"number"!==typeof t.type?t=Object(a.cloneElement)(t,{closeToast:l}):"function"===typeof t&&(t=t({closeToast:l})),x(o)?setTimeout((function(){n.appendToast(c,t,i.staleToastId)}),o):this.appendToast(c,t,i.staleToastId)}},n.appendToast=function(t,e,n){var r,i=t.id,a=t.updateId;this.collection=Object(o.a)({},this.collection,((r={})[i]={options:t,content:e,position:t.position},r)),this.setState({toast:(a?[].concat(this.state.toast):[].concat(this.state.toast,[i])).filter((function(t){return t!==n}))},this.dispatchChange)},n.clear=function(){this.setState({toast:[]})},n.renderToast=function(){var t=this,e={},n=this.props,r=n.className,i=n.style;return(n.newestOnTop?Object.keys(this.collection).reverse():Object.keys(this.collection)).forEach((function(n){var r=t.collection[n],i=r.position,a=r.options,u=r.content;e[i]||(e[i]=[]),-1!==t.state.toast.indexOf(a.id)?e[i].push(s.a.createElement(L,Object(o.a)({},a,{isDocumentHidden:t.state.isDocumentHidden,key:"toast-"+a.key}),u)):(e[i].push(null),delete t.collection[n])})),Object.keys(e).map((function(n){var a,u=1===e[n].length&&null===e[n][0],l={className:p()("Toastify__toast-container","Toastify__toast-container--"+n,(a={},a["Toastify__toast-container--rtl"]=t.props.rtl,a),t.parseClassName(r)),style:u?Object(o.a)({},i,{pointerEvents:"none"}):Object(o.a)({},i)};return s.a.createElement(f.a,Object(o.a)({},l,{key:"container-"+n}),e[n])}))},n.render=function(){var t=this;return s.a.createElement("div",{ref:function(e){return t.ref=e},className:"Toastify"},this.renderToast())},e}(a.Component));M.propTypes={position:l.a.oneOf(C(g)),autoClose:k,closeButton:l.a.oneOfType([l.a.node,l.a.bool]),hideProgressBar:l.a.bool,pauseOnHover:l.a.bool,closeOnClick:l.a.bool,newestOnTop:l.a.bool,className:l.a.oneOfType([l.a.string,l.a.object]),style:l.a.object,toastClassName:l.a.oneOfType([l.a.string,l.a.object]),bodyClassName:l.a.oneOfType([l.a.string,l.a.object]),progressClassName:l.a.oneOfType([l.a.string,l.a.object]),progressStyle:l.a.object,transition:l.a.func,rtl:l.a.bool,draggable:l.a.bool,draggablePercent:l.a.number,pauseOnFocusLoss:l.a.bool,enableMultiContainer:l.a.bool,containerId:l.a.oneOfType([l.a.string,l.a.number]),role:l.a.string,onClick:l.a.func},M.defaultProps={position:g.TOP_RIGHT,transition:F,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:s.a.createElement(P,null),pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,className:null,style:null,toastClassName:null,bodyClassName:null,progressClassName:null,progressStyle:null,role:"alert"};var A=new Map,q=null,B=null,H={},U=[],V=!1;function X(){return A.size>0}function W(t,e){var n=function(t){return X()?t?A.get(t):A.get(q):null}(e.containerId);if(!n)return null;var o=n.collection[t];return"undefined"===typeof o?null:o}function $(t,e){return Object(o.a)({},t,{type:e,toastId:Q(t)})}function G(){return(Math.random().toString(36)+Date.now().toString(36)).substr(2,10)}function Q(t){return t&&("string"===typeof t.toastId||"number"===typeof t.toastId&&!isNaN(t.toastId))?t.toastId:G()}function Y(t,e){return X()?w.emit(b,t,e):(U.push({action:b,content:t,options:e}),V&&j&&(V=!1,B=document.createElement("div"),document.body.appendChild(B),Object(h.render)(s.a.createElement(M,H),B))),e.toastId}var z=function(t,e){return Y(t,$(e,e&&e.type||m.DEFAULT))},J=function(t){m[t]!==m.DEFAULT&&(z[m[t].toLowerCase()]=function(e,n){return Y(e,$(n,n&&n.type||m[t]))})};for(var K in m)J(K);z.warn=z.warning,z.dismiss=function(t){return void 0===t&&(t=null),X()&&w.emit(y,t)},z.isActive=function(t){var e=!1;return A.size>0&&A.forEach((function(n){n.isToastActive(t)&&(e=!0)})),e},z.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=W(t,e);if(n){var r=n.options,i=n.content,a=Object(o.a)({},r,{},e,{toastId:e.toastId||t});e.toastId&&e.toastId!==t?a.staleToastId=t:a.updateId=G();var s="undefined"!==typeof a.render?a.render:i;delete a.render,Y(s,a)}}),0)},z.done=function(t){z.update(t,{progress:1})},z.onChange=function(t){"function"===typeof t&&w.on(T,t)},z.configure=function(t){V=!0,H=t},z.POSITION=g,z.TYPE=m,w.on(v,(function(t){q=t.props.containerId||t,A.set(q,t),U.forEach((function(t){w.emit(t.action,t.content,t.options)})),U=[]})).on(E,(function(t){t?A.delete(t.props.containerId||t):A.clear(),0===A.size&&w.off(b).off(y),j&&B&&document.body.removeChild(B)}))},305:function(t,e,n){},695:function(t,e,n){"use strict";var o=n(0),r=n.n(o);e.a=r.a.createContext(null)}}]);
//# sourceMappingURL=3.519b3e1f.chunk.js.map