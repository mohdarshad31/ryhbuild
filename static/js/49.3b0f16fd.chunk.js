(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[49],{1134:function(e,t,a){},1192:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),s=a(70),i=a(69),l=a(0),r=a.n(l),c=a(324),d=a(336),p=a(337),u=a(634),m=a(513),h=a(315),f=a.n(h),b=(a(305),a(1134),"".concat("https://niletechinnovations.com/projects/researchyourhealth","/images/popup-img.png")),g=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).toggleModal=function(){o.setState({modal:!o.state.modal})},o.state={loading:!0,userList:[],modal:!1,rowIndex:-1,formProccessing:!1,formField:{paitent_name:"",email:"",first_name:"",last_name:"",skype_id:"",latitude:"",longitude:"",phoneNumber:"",address:"",city:"",state:"",country:"",postalCode:"",role:"",status:""},errors:{paitent_name:"",email:"",contact_person:"",role:"",address:"",error:""},formValid:!0,items:[],filterItem:{filter_paitent_id:"",country:"",state:"",custom_search:"",filter_accept_trial:""},categoryList:[],templateList:[],deepProfileTemplateList:[]},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=[{label:"Patient Details",name:"patientDetails"},{label:"Consent Form",name:"consentForm",options:{filter:!0,customBodyRender:function(e,t,a){return r.a.createElement("p",null,"Download Form ",r.a.createElement("i",{className:"fa fa-download"}))}}},{label:"Deep Profile Form",name:"deepProfileForm",options:{filter:!0,customBodyRender:function(e,t,a){return r.a.createElement("p",null,"Download Form ",r.a.createElement("i",{className:"fa fa-download"}))}}},{label:"Suggest another trial",name:"suggestAnotherTrial",options:{filter:!0,customBodyRender:function(e,t,a){return r.a.createElement(c.a,{name:"suggest_another_trial"})}}},{label:"suggest new trial form",name:"suggestNewTrialForm",options:{filter:!0,customBodyRender:function(e,t,a){return r.a.createElement(c.a,{name:"suggest_new_trial_form",type:"select"},r.a.createElement("option",{value:""},"Select"),r.a.createElement("option",{value:"Form 1"},"Form 1"),r.a.createElement("option",{value:"Form 2"},"Form 2"))}}},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(t,a,n){return r.a.createElement("p",null,r.a.createElement("button",{title:"Edit ",className:"btn-edit"},r.a.createElement("i",{className:"fa fa-check"})," "),r.a.createElement("button",{title:"Delete ",className:"btn-close-D",onClick:function(){e.setState({modal:!0})}},r.a.createElement("i",{className:"fa fa-times"})," "))}}}],a={search:!1,viewColumns:!1,filter:!1,searchOpen:!1,print:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}},fixedHeaderOptions:{xAxis:!1,yAxis:!1}};return r.a.createElement("div",{className:"animated fadeIn header-Table"},r.a.createElement(d.a,null,r.a.createElement(p.a,{lg:2},r.a.createElement("div",{className:"btn btn-back-Table",onClick:function(){e.props.history.goBack()}},"Back")),r.a.createElement(p.a,{lg:8},r.a.createElement("p",{className:"Patient-text"},"New Patient Approval"))),r.a.createElement(f.a,{data:[],columns:t,options:a}),r.a.createElement(u.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"Popup-Modal-YesNo full-width-modal-section organization-modal"},r.a.createElement(m.a,{className:""},r.a.createElement(d.a,null,r.a.createElement(p.a,{md:"12"},r.a.createElement("div",{className:"popup-head-img"},r.a.createElement("img",{src:b,className:"imghead",alt:"img",width:"100px",height:"100px"})),r.a.createElement("div",{className:"popup-C"},r.a.createElement("h2",null,"Are you sure to delete patient"),r.a.createElement("button",{className:"btn addBtn btn-no"},"No"),r.a.createElement("button",{className:"btn addBtn btn-yes"},"Yes")))))))}}]),a}(l.Component);t.default=g},324:function(e,t,a){"use strict";var n=a(5),o=a(21),s=a(303),i=a(9),l=a(0),r=a.n(l),c=a(30),d=a.n(c),p=a(290),u=a.n(p),m=a(291),h={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,i=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,p=e.addon,h=e.plaintext,f=e.innerRef,b=Object(o.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,O=new RegExp("\\D","g"),y=d||("select"===s||"textarea"===s?s:"input"),v="form-control";h?(v+="-plaintext",y=d||"input"):"file"===s?v+="-file":g&&(v=p?null:"form-check-input"),b.size&&O.test(b.size)&&(Object(m.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var k=Object(m.l)(u()(t,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,v),a);return("input"===y||d&&"function"===typeof d)&&(b.type=s),b.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(m.s)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),r.a.createElement(y,Object(n.a)({},b,{ref:f,className:k}))},t}(r.a.Component);f.propTypes=h,f.defaultProps={type:"text"},t.a=f},513:function(e,t,a){"use strict";var n=a(5),o=a(21),s=a(0),i=a.n(s),l=a(30),r=a.n(l),c=a(290),d=a.n(c),p=a(291),u={tag:p.p,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(p.l)(d()(t,"modal-body"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};m.propTypes=u,m.defaultProps={tag:"div"},t.a=m},634:function(e,t,a){"use strict";var n=a(347),o=a(5),s=a(303),i=a(9),l=a(0),r=a.n(l),c=a(30),d=a.n(c),p=a(290),u=a.n(p),m=a(72),h=a.n(m),f=a(291),b={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return f.e?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);g.propTypes=b;var O=g,y=a(386);function v(){}var k=d.a.shape(y.a.propTypes),E={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,scrollable:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:k,modalTransition:k,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func]),unmountOnClose:d.a.bool,returnFocusAfterClose:d.a.bool},C=Object.keys(E),N={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:f.d.Modal},backdropTransition:{mountOnEnter:!0,timeout:f.d.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},_=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(s.a)(a)),a.handleBackdropClick=a.handleBackdropClick.bind(Object(s.a)(a)),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(s.a)(a)),a.handleEscape=a.handleEscape.bind(Object(s.a)(a)),a.handleStaticBackdropAnimation=a.handleStaticBackdropAnimation.bind(Object(s.a)(a)),a.handleTab=a.handleTab.bind(Object(s.a)(a)),a.onOpened=a.onOpened.bind(Object(s.a)(a)),a.onClosed=a.onClosed.bind(Object(s.a)(a)),a.manageFocusAfterClose=a.manageFocusAfterClose.bind(Object(s.a)(a)),a.clearBackdropAnimationTimeout=a.clearBackdropAnimationTimeout.bind(Object(s.a)(a)),a.state={isOpen:!1,showStaticBackdropAnimation:!1},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this.props,t=e.isOpen,a=e.autoFocus,n=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),a&&this.setFocus()),n&&n(),this._isMounted=!0},a.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.props.isOpen&&this.close()),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(f.g.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),a=t.length;if(0!==a){for(var n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&e.keyCode===f.k.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},a.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(f.h)(),Object(f.f)(),0===t.openCount&&(document.body.className=u()(document.body.className,Object(f.l)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},a.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},a.close=function(){if(t.openCount<=1){var e=Object(f.l)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(f.o)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(f.m)(this.props,C);return r.a.createElement("div",Object(o.a)({},a,{className:Object(f.l)(u()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(f.l)(u()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var a=this.props,s=a.wrapClassName,i=a.modalClassName,l=a.backdropClassName,c=a.cssModule,d=a.isOpen,p=a.backdrop,m=a.role,h=a.labelledBy,b=a.external,g=a.innerRef,v={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":h,role:m,tabIndex:"-1"},k=this.props.fade,E=Object(n.a)({},y.a.defaultProps,{},this.props.modalTransition,{baseClass:k?this.props.modalTransition.baseClass:"",timeout:k?this.props.modalTransition.timeout:0}),C=Object(n.a)({},y.a.defaultProps,{},this.props.backdropTransition,{baseClass:k?this.props.backdropTransition.baseClass:"",timeout:k?this.props.backdropTransition.timeout:0}),N=p&&(k?r.a.createElement(y.a,Object(o.a)({},C,{in:d&&!!p,cssModule:c,className:Object(f.l)(u()("modal-backdrop",l),c)})):r.a.createElement("div",{className:Object(f.l)(u()("modal-backdrop","show",l),c)}));return r.a.createElement(O,{node:this._element},r.a.createElement("div",{className:Object(f.l)(s)},r.a.createElement(y.a,Object(o.a)({},v,E,{in:d,onEntered:this.onOpened,onExited:this.onClosed,cssModule:c,className:Object(f.l)(u()("modal",i,this.state.showStaticBackdropAnimation&&"modal-static"),c),innerRef:g}),b,this.renderModalDialog()),N))}return null},a.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(r.a.Component);_.propTypes=E,_.defaultProps=N,_.openCount=0;t.a=_}}]);
//# sourceMappingURL=49.3b0f16fd.chunk.js.map