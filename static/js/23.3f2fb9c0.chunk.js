(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[23],{1208:function(e,t,a){"use strict";a.r(t);var o=a(312),n=a(39),s=a(40),r=a(70),l=a(69),i=a(0),c=a.n(i),u=a(699),d=a(361),m=a(322),p=a(323),f=a(324),g=a(514),h=a(336),v=a(4),b=a(302),w=(a(305),a(47)),y=a(297),E=a(634),S=a(1151),N=a(513),P=a(337),j=a(830),O=a(831),F=(a(458),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){s.setState(Object(o.a)({},e.target.name,e.target.value))},s.forgotPasswordHandler=function(e){if(e.preventDefault(),e.target.className+=" was-validated",!s.validateForm())return!1;s.setState({loading:!0},(function(){w.a.postAPI("auth/forgot-password",{email:s.state.email}).then((function(e){if(s.setState({loading:!1}),void 0===e.data||!e.data.status)return b.b.error(e.data.message),void s.setState({loading:!1});b.b.success(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),s.props.propHistory.push("/login")):(s.setState({loading:!1,loggedIn:!0}),b.b.error(e.message))}))}))},s.toggle=function(){s.props.hideForgotPasswordForm()},s.unsubscribe=null,s.state={email:"",password:"",userName:"",name:"",forgotPasswordEmail:"",modal:!1,loggedIn:!1,loading:!1,isLoggedIn:!1,errors:{},settingsData:{}},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"validateForm",value:function(){var e={},t=!0;(this.state.email||(t=!1,e.email="*Please enter your email."),void 0!==this.state.email&&""!==this.state.email.trim())&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(this.state.email.trim())||(t=!1,e.email="Invalid email address"));return this.setState({loading:!1,errors:e}),t}},{key:"render",value:function(){var e=this.state.email;return c.a.createElement(E.a,{isOpen:!0,toggle:this.toggle,className:"store-modal"},c.a.createElement(S.a,{toggle:this.toggle},"Forgot Password "),c.a.createElement(d.a,{onSubmit:this.forgotPasswordHandler,noValidate:!0,className:"form-info"},c.a.createElement(N.a,null,c.a.createElement(h.a,null,c.a.createElement(P.a,{md:"12"},c.a.createElement(m.a,null,c.a.createElement(p.a,{htmlFor:"email"},"Email Address"),c.a.createElement(f.a,{type:"email",placeholder:"email *",id:"email",name:"email",value:this.state.email,onChange:this.changeHandler,required:!0}),c.a.createElement(j.a,null,this.state.errors[e]))))),c.a.createElement(O.a,null,c.a.createElement(g.a,{className:"submit-btn",disabled:this.state.loading,type:"submit"},"Forgot"),c.a.createElement(g.a,{className:"btnCancel",onClick:this.toggle},"Cancel"))))}}]),a}(i.Component)),k="".concat("https://niletechinnovations.com/projects/researchyourhealth","/logo.png"),C="".concat("https://niletechinnovations.com/projects/researchyourhealth","/images/log-In.jpg"),I="".concat("https://niletechinnovations.com/projects/researchyourhealth","/images/site-inspection.jpg"),M=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).submitHandler=function(e){if(e.preventDefault(),e.target.className+=" was-validated",!s.validateForm())return!1;s.setState({loading:!0},(function(){w.a.postAPI("auth/sign-in",{email:s.state.email,password:s.state.password}).then((function(e){if(void 0===e.data||!e.data.status)return s.setState({loading:!1}),b.b.error(e.data.message),void(e.data.status||void 0===e.data.isAccountVerified||e.data.isAccountVerified||s.setState({loading:!0,isLoggedIn:!0},(function(){w.a.postAPI("auth/resend-otp",{email:s.state.email}).then((function(e){if(console.log(e),void 0===e.data||!e.data.status)return s.setState({loading:!1}),void b.b.error(e.data.message);s.setState({loading:!1}),b.b.success(e.data.message)})).catch((function(e){s.setState({loading:!1}),b.b.error(e.message)}))})));var t=e.data;"admin"===t.data.role.toLowerCase()?(w.a.setLocalStorageValue("accessToken",t.data.accessToken),w.a.setLocalStorageValue("refreshToken",t.data.refreshToken),w.a.setLocalStorageValue("role",t.data.role),w.a.setLocalStorageValue("authId",t.data.authId),w.a.setLocalStorageValue("profilePic",t.data.profilePic),w.a.setLocalStorageValue("userName",t.data.firstName),s.props.history.push("/admin/dashboard")):b.b.error("You have not permission to access dashboard")})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),s.props.propHistory.push("/login")):(s.setState({loading:!1,loggedIn:!0}),b.b.error(e.message))}))}))},s.changeHandler=function(e){s.setState(Object(o.a)({},e.target.name,e.target.value))},s.unsubscribe=null,s.state={email:"",password:"",userName:"",forgotPasswordEmail:"",modal:!1,loggedIn:!1,loading:!1,isLoggedIn:!1,errors:{},showforgotPassword:!1,settingsData:{}},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"validateForm",value:function(){var e={},t=!0;return this.state.password||(t=!1,e.password="*Please enter password."),this.state.email||(t=!1,e.email="*Please enter your email."),this.setState({loading:!1,errors:e}),t}},{key:"showForgotPasswordForm",value:function(){this.setState({showforgotPassword:!0})}},{key:"hideForgotPasswordForm",value:function(){this.setState({showforgotPassword:!1})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,o=e.loggedIn,n=e.loading,s=e.errors;return o?"admin"===w.a.getLocalStorageValue("role")?c.a.createElement(v.c,{to:"/admin",noThrow:!0}):c.a.createElement(v.c,{to:"/dashboard",noThrow:!0}):c.a.createElement("div",{className:"login-page",style:{backgroundImage:'url("'.concat(I,'")')}},c.a.createElement(u.a,{className:"Login"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"researchImage-L"},c.a.createElement("img",{src:C,alt:"logo"}))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"login-page-header"},c.a.createElement("img",{src:k,alt:"logo"})),c.a.createElement("div",{className:"loginForm"},c.a.createElement("div",{className:"loginForm-1"},c.a.createElement("h2",null,"Sign In"),n?c.a.createElement(y.a,null):c.a.createElement(c.a.Fragment,null),c.a.createElement(b.a,null),c.a.createElement(d.a,{className:"form needs-validation",onSubmit:this.submitHandler,noValidate:!0},c.a.createElement(m.a,null,c.a.createElement(p.a,null,"Email"),c.a.createElement(f.a,{type:"email",name:"email",invalid:void 0!==s.email&&""!==s.email,value:t,onChange:this.changeHandler,id:"email",placeholder:"myemail@email.com"}),c.a.createElement("div",{className:"invalid-feedback"},"Please enter your registered email-id.")),c.a.createElement(m.a,null,c.a.createElement(p.a,{for:"examplePassword"},"Password"),c.a.createElement(f.a,{type:"password",name:"password",invalid:void 0!==s.password&&""!==s.password,value:a,onChange:this.changeHandler,id:"password",placeholder:"********"}),c.a.createElement("p",{className:"forgot-text ",onClick:this.showForgotPasswordForm.bind(this)},"Forgot Password?"),c.a.createElement("div",{className:"invalid-feedback"},"Please enter your registered password.")),c.a.createElement(g.a,{type:"submit",className:"submit-btn-login"},"Submit"),c.a.createElement(h.a,null,c.a.createElement("div",{className:"col-md-6"}))),this.state.showforgotPassword?c.a.createElement(F,{hideForgotPasswordForm:this.hideForgotPasswordForm.bind(this)}):""))))))}}]),a}(i.Component);t.default=M},297:function(e,t,a){"use strict";var o=a(0),n=a.n(o);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},312:function(e,t,a){"use strict";function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return o}))},318:function(e,t,a){"use strict";function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return o}))},329:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},336:function(e,t,a){"use strict";var o=a(5),n=a(21),s=a(0),r=a.n(s),l=a(30),i=a.n(l),c=a(290),u=a.n(c),d=a(291),m=i.a.oneOfType([i.a.number,i.a.string]),p={tag:d.p,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,a=e.cssModule,s=e.noGutters,l=e.tag,i=e.form,c=e.widths,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];c.forEach((function(t,a){var o=e[t];if(delete m[t],o){var n=!a;p.push(n?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var f=Object(d.l)(u()(t,s?"no-gutters":null,i?"form-row":"row",p),a);return r.a.createElement(l,Object(o.a)({},m,{className:f}))};g.propTypes=p,g.defaultProps=f,t.a=g},337:function(e,t,a){"use strict";var o=a(5),n=a(21),s=a(0),r=a.n(s),l=a(30),i=a.n(l),c=a(290),u=a.n(c),d=a(291),m=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:m,offset:m})]),f={tag:d.p,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.widths,l=e.tag,i=Object(n.a)(e,["className","cssModule","widths","tag"]),c=[];s.forEach((function(t,o){var n=e[t];if(delete i[t],n||""===n){var s=!o;if(Object(d.j)(n)){var r,l=s?"-":"-"+t+"-",m=h(s,t,n.size);c.push(Object(d.l)(u()(((r={})[m]=n.size||""===n.size,r["order"+l+n.order]=n.order||0===n.order,r["offset"+l+n.offset]=n.offset||0===n.offset,r)),a))}else{var p=h(s,t,n);c.push(p)}}})),c.length||c.push("col");var m=Object(d.l)(u()(t,c),a);return r.a.createElement(l,Object(o.a)({},i,{className:m}))};v.propTypes=f,v.defaultProps=g,t.a=v},347:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a(318);function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Object(o.a)(e,t,a[t])}))}return e}},400:function(e,t,a){"use strict";function o(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function n(e){this.setState(function(t){var a=this.constructor.getDerivedStateFromProps(e,t);return null!==a&&void 0!==a?a:null}.bind(this))}function s(e,t){try{var a=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(a,o)}finally{this.props=a,this.state=o}}function r(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var a=null,r=null,l=null;if("function"===typeof t.componentWillMount?a="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(a="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?r="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(r="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?l="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(l="UNSAFE_componentWillUpdate"),null!==a||null!==r||null!==l){var i=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==a?"\n  "+a:"")+(null!==r?"\n  "+r:"")+(null!==l?"\n  "+l:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=o,t.componentWillReceiveProps=n),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=s;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,a){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:a;u.call(this,e,t,o)}}return e}a.r(t),a.d(t,"polyfill",(function(){return r})),o.__suppressDeprecationWarning=!0,n.__suppressDeprecationWarning=!0,s.__suppressDeprecationWarning=!0},458:function(e,t,a){},514:function(e,t,a){"use strict";var o=a(5),n=a(21),s=a(303),r=a(9),l=a(0),i=a.n(l),c=a(30),u=a.n(c),d=a(290),m=a.n(d),p=a(291),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:p.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],s=e.block,r=e.className,l=e.close,c=e.cssModule,u=e.color,d=e.outline,f=e.size,g=e.tag,h=e.innerRef,v=Object(n.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof v.children&&(v.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var b="btn"+(d?"-outline":"")+"-"+u,w=Object(p.l)(m()(r,{close:l},l||"btn",l||b,!!f&&"btn-"+f,!!s&&"btn-block",{active:t,disabled:this.props.disabled}),c);v.href&&"button"===g&&(g="a");var y=l?"Close":null;return i.a.createElement(g,Object(o.a)({type:"button"===g&&v.onClick?"button":void 0},v,{className:w,ref:h,onClick:this.onClick,"aria-label":a||y}))},t}(i.a.Component);g.propTypes=f,g.defaultProps={color:"secondary",tag:"button"},t.a=g},699:function(e,t,a){"use strict";var o=a(5),n=a(21),s=a(0),r=a.n(s),l=a(30),i=a.n(l),c=a(290),u=a.n(c),d=a(291),m={tag:d.p,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.fluid,l=e.tag,i=Object(n.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===s?c="container-fluid":s&&(c="container-"+s);var m=Object(d.l)(u()(t,c),a);return r.a.createElement(l,Object(o.a)({},i,{className:m}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},830:function(e,t,a){"use strict";var o=a(5),n=a(21),s=a(0),r=a.n(s),l=a(30),i=a.n(l),c=a(290),u=a.n(c),d=a(291),m={children:i.a.node,tag:d.p,className:i.a.string,cssModule:i.a.object,valid:i.a.bool,tooltip:i.a.bool},p={tag:"div",valid:void 0},f=function(e){var t=e.className,a=e.cssModule,s=e.valid,l=e.tooltip,i=e.tag,c=Object(n.a)(e,["className","cssModule","valid","tooltip","tag"]),m=l?"tooltip":"feedback",p=Object(d.l)(u()(t,s?"valid-"+m:"invalid-"+m),a);return r.a.createElement(i,Object(o.a)({},c,{className:p}))};f.propTypes=m,f.defaultProps=p,t.a=f}}]);
//# sourceMappingURL=23.3f2fb9c0.chunk.js.map