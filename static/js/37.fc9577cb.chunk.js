(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[37],{1151:function(e,a,t){"use strict";t.r(a);var n=t(312),s=t(39),o=t(40),r=t(70),i=t(69),l=t(0),c=t.n(l),d=t(699),u=t(361),f=t(318),p=t(319),b=t(322),m=t(514),h=t(4),g=t(73),v=t(303),w=(t(305),t(47)),j=t(298),O=(t(458),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).submitHandler=function(e){if(e.preventDefault(),e.target.className+=" was-validated",!o.validateForm())return!1;o.setState({loading:!0},(function(){v.b.errors("Something went wrong"),o.setState({loading:!1})}))},o.changeHandler=function(e){o.setState(Object(n.a)({},e.target.name,e.target.value))},o.unsubscribe=null,o.state={email:"",password:"",cpassword:"",userName:"",forgotPasswordEmail:"",modal:!1,loggedIn:!1,loading:!1,isLoggedIn:!1,errors:{},settingsData:{},userInfo:{},userDocId:""},o}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"validateForm",value:function(){var e={},a=!0;return this.state.password||(a=!1,e.password="*Please enter new password."),this.state.cpassword||(a=!1,e.cpassword="*Please enter your confirm password."),this.state.password!==this.state.cpassword&&(a=!1,e.cpassword="*New password and confirm password does not match."),this.setState({loading:!1,errors:e}),a}},{key:"render",value:function(){var e=this.state,a=e.password,t=e.cpassword,n=e.loggedIn,s=e.loading,o=e.errors;return n?"admin"===w.a.getLocalStorageValue("role")?c.a.createElement(h.c,{to:"/admin",noThrow:!0}):c.a.createElement(h.c,{to:"/dashboard",noThrow:!0}):c.a.createElement(d.a,{className:"Login"},c.a.createElement("h2",null,"Reset Password"),s?c.a.createElement(j.a,null):c.a.createElement(c.a.Fragment,null),c.a.createElement(v.a,null),c.a.createElement(u.a,{className:"form needs-validation",onSubmit:this.submitHandler,noValidate:!0},c.a.createElement(f.a,null,c.a.createElement(p.a,null,"New Password"),c.a.createElement(b.a,{type:"password",name:"password",invalid:void 0!==o.password&&""!==o.password,value:a,onChange:this.changeHandler,id:"email",placeholder:"password"}),c.a.createElement("div",{className:"invalid-feedback"},o.password)),c.a.createElement(f.a,null,c.a.createElement(p.a,{for:"examplePassword"},"Confirm Password"),c.a.createElement(b.a,{type:"password",name:"cpassword",invalid:void 0!==o.cpassword&&""!==o.cpassword,value:t,onChange:this.changeHandler,id:"password",placeholder:"********"}),c.a.createElement("div",{className:"invalid-feedback"},o.cpassword)),c.a.createElement(m.a,{type:"submit",className:"submit-btn"},"Submit"),c.a.createElement("div",{class:"col-md-6"},c.a.createElement("p",{class:"forgot-text "},c.a.createElement(g.Link,{className:"btn-view",title:"Sign Up",to:"/login"},"Login")))))}}]),t}(l.Component));a.default=O},298:function(e,a,t){"use strict";var n=t(0),s=t.n(n);t(299);a.a=function(){return s.a.createElement("div",{className:"loaderSection"},s.a.createElement("div",{className:"spinner-border text-primary",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,a,t){},312:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}t.d(a,"a",(function(){return n}))},318:function(e,a,t){"use strict";var n=t(5),s=t(21),o=t(0),r=t.n(o),i=t(30),l=t.n(i),c=t(290),d=t.n(c),u=t(291),f={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.p,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.row,i=e.disabled,l=e.check,c=e.inline,f=e.tag,p=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(u.l)(d()(a,!!o&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!i)&&"disabled"),t);return"fieldset"===f&&(p.disabled=i),r.a.createElement(f,Object(n.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},319:function(e,a,t){"use strict";var n=t(5),s=t(21),o=t(0),r=t.n(o),i=t(30),l=t.n(i),c=t(290),d=t.n(c),u=t(291),f=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.string,l.a.number,l.a.shape({size:f,order:f,offset:f})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.p,className:l.a.string,cssModule:l.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:l.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,o=e.hidden,i=e.widths,l=e.tag,c=e.check,f=e.size,p=e.for,b=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];i.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var o,r=!n;if(Object(u.j)(s)){var i,l=r?"-":"-"+a+"-";o=h(r,a,s.size),m.push(Object(u.l)(d()(((i={})[o]=s.size||""===s.size,i["order"+l+s.order]=s.order||0===s.order,i["offset"+l+s.offset]=s.offset||0===s.offset,i))),t)}else o=h(r,a,s),m.push(o)}}));var g=Object(u.l)(d()(a,!!o&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,m,!!m.length&&"col-form-label"),t);return r.a.createElement(l,Object(n.a)({htmlFor:p},b,{className:g}))};g.propTypes=b,g.defaultProps=m,a.a=g},322:function(e,a,t){"use strict";var n=t(5),s=t(21),o=t(301),r=t(9),i=t(0),l=t.n(i),c=t(30),d=t.n(c),u=t(290),f=t.n(u),p=t(291),b={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.focus=t.focus.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.type,r=e.bsSize,i=e.valid,c=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,m=e.innerRef,h=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),w=d||("select"===o||"textarea"===o?o:"input"),j="form-control";b?(j+="-plaintext",w=d||"input"):"file"===o?j+="-file":g&&(j=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var O=Object(p.l)(f()(a,c&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,j),t);return("input"===w||d&&"function"===typeof d)&&(h.type=o),h.children&&!b&&"select"!==o&&"string"===typeof w&&"select"!==w&&(Object(p.s)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),l.a.createElement(w,Object(n.a)({},h,{ref:m,className:O}))},a}(l.a.Component);m.propTypes=b,m.defaultProps={type:"text"},a.a=m},361:function(e,a,t){"use strict";var n=t(5),s=t(21),o=t(301),r=t(9),i=t(0),l=t.n(i),c=t(30),d=t.n(c),u=t(290),f=t.n(u),p=t(291),b={children:d.a.node,inline:d.a.bool,tag:p.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(o.a)(t)),t.submit=t.submit.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,o=e.inline,r=e.tag,i=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(p.l)(f()(a,!!o&&"form-inline"),t);return l.a.createElement(r,Object(n.a)({},c,{ref:i,className:d}))},a}(i.Component);m.propTypes=b,m.defaultProps={tag:"form"},a.a=m},458:function(e,a,t){},514:function(e,a,t){"use strict";var n=t(5),s=t(21),o=t(301),r=t(9),i=t(0),l=t.n(i),c=t(30),d=t.n(c),u=t(290),f=t.n(u),p=t(291),b={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:p.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(o.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],o=e.block,r=e.className,i=e.close,c=e.cssModule,d=e.color,u=e.outline,b=e.size,m=e.tag,h=e.innerRef,g=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);i&&"undefined"===typeof g.children&&(g.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(u?"-outline":"")+"-"+d,w=Object(p.l)(f()(r,{close:i},i||"btn",i||v,!!b&&"btn-"+b,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),c);g.href&&"button"===m&&(m="a");var j=i?"Close":null;return l.a.createElement(m,Object(n.a)({type:"button"===m&&g.onClick?"button":void 0},g,{className:w,ref:h,onClick:this.onClick,"aria-label":t||j}))},a}(l.a.Component);m.propTypes=b,m.defaultProps={color:"secondary",tag:"button"},a.a=m},699:function(e,a,t){"use strict";var n=t(5),s=t(21),o=t(0),r=t.n(o),i=t(30),l=t.n(i),c=t(290),d=t.n(c),u=t(291),f={tag:u.p,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,o=e.fluid,i=e.tag,l=Object(s.a)(e,["className","cssModule","fluid","tag"]),c="container";!0===o?c="container-fluid":o&&(c="container-"+o);var f=Object(u.l)(d()(a,c),t);return r.a.createElement(i,Object(n.a)({},l,{className:f}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p}}]);
//# sourceMappingURL=37.fc9577cb.chunk.js.map