(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[31],{1193:function(e,t,a){"use strict";a.r(t);var n=a(312),i=a(39),r=a(40),s=a(71),o=a(70),l=a(69),c=a(0),u=a.n(c),d=a(336),m=a(337),p=a(314),f=a(317),h=a(514),g=a(322),v=a(323),b=a(324),y=a(634),S=a(1151),E=a(361),N=a(513),z=a(831),I=a(302),k=(a(305),a(47)),w=a(297),j=a(626),O=(a(627),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value;r.setState(Object(n.a)({},t,a))},r.toggle=function(){r.setState({modal:!r.state.modal,specializationName:"",status:"",errors:{},rowIndex:-1})},r.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,n=r.state.filterItem;n[t]=a,r.setState({filterItem:n})},r.state={modal:!1,specializationName:"",specializationList:[],loading:!0,rowIndex:-1,status:"",errors:{specializationName:"",status:"",error:""},filterItem:{}},r.handleEditCategory=r.handleEditCategory.bind(Object(s.a)(r)),r.submitHandler=r.submitHandler.bind(Object(s.a)(r)),r.handleDeleteCategory=r.handleDeleteCategory.bind(Object(s.a)(r)),r.filterItemList=r.filterItemList.bind(Object(s.a)(r)),r.resetSearchFilter=r.resetSearchFilter.bind(Object(s.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.specializationList()}},{key:"specializationList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";if(a="?isSuperSpecialization="+!1,void 0!==t.keyword&&""!==t.keyword&&(a+=""!==a?"&keyword="+t.keyword:"?keyword="+t.keyword),void 0!==t.status&&""!==t.status){var n=1;"Inactive"===t.status?n=0:"Pending"===t.status?n=2:"Under Negotiation"===t.status&&(n=3),a+=""!==a?"&status="+n:"?status="+n}this.setState({loading:!0},(function(){k.a.getAPIWithAccessToken("specialization"+a).then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void I.b.error(t.data.message);e.setState({loading:!1,specializationList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),I.b.error(t.message))}))}))}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),e.target.className+=" was-validated",!this.validateForm())return!1;var a={};a.specializationName=this.state.specializationName;var n=this.state.status,i=1;"Inactive"===n?i=0:"Pending"===n?i=2:"Under Negotiation"===n&&(i=3),a.status=i,this.setState({loading:!0},(function(){if(t.state.rowIndex>-1){var e=t.state.specializationList[t.state.rowIndex].specializationId;a.specializationId=e,k.a.putAPIWithAccessToken("specialization",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return a.specializationName=e.data.message,void t.setState({loading:!1,errors:a})}t.state.specializationList[t.state.rowIndex]=e.data.data,t.setState({modal:!1,rowIndex:"",loading:!1,errors:{specializationName:"",status:""}}),I.b.success(e.data.message),t.specializationList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),I.b.error(e.message))}))}else k.a.postAPIWithAccessToken("specialization",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return a.specializationName=e.data.message,void t.setState({loading:!1,errors:a})}t.setState({modal:!1,loading:!1}),I.b.success(e.data.message),t.specializationList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),I.b.error(e.message))}))}))}},{key:"validateForm",value:function(){var e=!0,t=this.state,a={};return void 0!==t.specializationName&&""!==t.specializationName.trim()||(e=!1,a.specializationName="Specialization name field required"),void 0!==t.status&&""!==t.status.trim()||(e=!1,a.status="Status field required"),this.setState({errors:a}),e}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditCategory",value:function(e){var t=this.state.specializationList[e],a="Active";0===t.status?a="Active":2===t.status?a="Pending":3===t.status&&(a="Under Negotiation"),this.setState({modal:!0,status:a,specializationName:t.specializationName,remark:t.remark,rowIndex:e,formValid:!0,specializationName_valid:!0,categoryImageUrl:t.imagUrl})}},{key:"handleDeleteCategory",value:function(e){var t=this,a=this.state.specializationList[e];this.setState({loading:!0},(function(){k.a.deleteAPIWithAccessToken("specialization/"+a.specializationId).then((function(e){t.setState({loading:!1}),void 0!==e.data&&e.data.status?(I.b.success(e.data.message),t.specializationList()):I.b.error(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),I.b.error(e.message))}))}))}},{key:"filterItemList",value:function(){var e=this.state.filterItem;this.specializationList(e)}},{key:"resetSearchFilter",value:function(){this.setState({filterItem:{keyword:"",status:""}}),this.specializationList()}},{key:"render",value:function(){var e=this.state,t=e.specializationList,a=e.loading,n=e.modal,i=e.errors,r="";return a&&(r=u.a.createElement(w.a,null)),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,r,u.a.createElement(m.a,{lg:12},u.a.createElement(p.a,{className:"oep-card "},u.a.createElement(f.a,{className:"mainHeading"},u.a.createElement("strong",null,"Specialization List"),u.a.createElement(h.a,{color:"",className:"categoryAdd",type:"button",onClick:this.toggle},u.a.createElement("i",{className:"fa fa-plus"})," Add Specialization")),u.a.createElement(d.a,null,u.a.createElement(m.a,{md:12},u.a.createElement("div",{className:"search-filter"},u.a.createElement(d.a,null,u.a.createElement(m.a,{md:"3"},u.a.createElement(g.a,null,u.a.createElement(v.a,{htmlFor:"filter_doctor_id"},"Search By Name"),u.a.createElement(b.a,{type:"text",placeholder:"Search By Name",id:"keyword",name:"keyword",value:this.state.filterItem.keyword,onChange:this.changeFilterHandler}))),u.a.createElement(m.a,{md:"3"},u.a.createElement(g.a,null,u.a.createElement(v.a,{htmlFor:"filter_doctor_id"},"Search By Status"),u.a.createElement(b.a,{type:"select",placeholder:"Search By Status",id:"status",name:"status",value:this.state.filterItem.status,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive")))),u.a.createElement(m.a,{md:"3"},u.a.createElement(g.a,{className:"filter-button-section"},u.a.createElement(h.a,{className:"search-btn",type:"button",onClick:this.filterItemList},"Search"),u.a.createElement(h.a,{className:"search-btn",id:"resetButton",type:"button",onClick:this.resetSearchFilter},"Reset")))))),u.a.createElement(m.a,{lg:12},u.a.createElement(j.a,{data:t,toggle:this.toggle,editCategoryAction:this.handleEditCategory,deleteCategoryAction:this.handleDeleteCategory,dataTableLoadingStatus:this.state.loading})))))),u.a.createElement(y.a,{isOpen:n,toggle:this.toggle,className:"category-modal-section"},u.a.createElement(S.a,{toggle:this.toggle},"Specialization"),u.a.createElement(E.a,{onSubmit:this.submitHandler,noValidate:!0},u.a.createElement(N.a,null,u.a.createElement(g.a,null,u.a.createElement(v.a,{htmlFor:"specializationName"},"Specialization Name"),u.a.createElement(b.a,{type:"text",placeholder:"Specialization Name *",invalid:void 0!==i.specializationName&&""!==i.specializationName,id:"specializationName",name:"specializationName",value:this.state.specializationName,onChange:this.changeHandler,required:!0}),u.a.createElement("div",{className:"invalid-feedback"},i.specializationName)),u.a.createElement(g.a,null,u.a.createElement(v.a,{htmlFor:"template_status"},"Status"),u.a.createElement(b.a,{type:"select",placeholder:"Status *",id:"status",invalid:void 0!==i.status&&""!==i.status,name:"status",value:this.state.status,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select Status"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive")),u.a.createElement("div",{className:"invalid-feedback"},i.status))),u.a.createElement(z.a,null,u.a.createElement(h.a,{color:"primary",disabled:this.state.loading,type:"submit"},"Submit"),u.a.createElement(h.a,{color:"secondary",onClick:this.toggle},"Cancel")))))}}]),a}(c.Component));t.default=O},297:function(e,t,a){"use strict";var n=a(0),i=a.n(n);a(299);t.a=function(){return i.a.createElement("div",{className:"loaderSection"},i.a.createElement("div",{className:"spinner-border text-primary",role:"status"},i.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(307);function i(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(300);function i(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r,s=!0,o=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return s=e.done,e},e:function(e){o=!0,r=e},f:function(){try{s||null==i.return||i.return()}finally{if(o)throw r}}}}},307:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},308:function(e,t,a){"use strict";var n=a(300);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,i=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(l){i=!0,r=l}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return i}))},312:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},314:function(e,t,a){"use strict";var n=a(5),i=a(21),r=a(0),s=a.n(r),o=a(30),l=a.n(o),c=a(290),u=a.n(c),d=a(291),m={tag:d.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,a=e.cssModule,r=e.color,o=e.body,l=e.inverse,c=e.outline,m=e.tag,p=e.innerRef,f=Object(i.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.l)(u()(t,"card",!!l&&"text-white",!!o&&"card-body",!!r&&(c?"border":"bg")+"-"+r),a);return s.a.createElement(m,Object(n.a)({},f,{className:h,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},317:function(e,t,a){"use strict";var n=a(5),i=a(21),r=a(0),s=a.n(r),o=a(30),l=a.n(o),c=a(290),u=a.n(c),d=a(291),m={tag:d.p,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.tag,o=Object(i.a)(e,["className","cssModule","tag"]),l=Object(d.l)(u()(t,"card-header"),a);return s.a.createElement(r,Object(n.a)({},o,{className:l}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},626:function(e,t,a){"use strict";var n=a(308),i=a(306),r=a(39),s=a(40),o=a(70),l=a(69),c=a(0),u=a.n(c),d=a(315),m=a.n(d),p=a(47),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editCategoryItem",value:function(e){this.props.editCategoryAction(e)}},{key:"deleteCategoryItem",value:function(e){this.props.deleteCategoryAction(e)}},{key:"render",value:function(){var e,t=this,a=[{label:"Name",name:"name"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,n){var i=a.rowIndex;return u.a.createElement("p",null,u.a.createElement("button",{className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editCategoryItem(i)}},u.a.createElement("i",{className:"fa fa-pencil"})," "),u.a.createElement("button",{className:"btn-delete",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this specialization?")&&t.deleteCategoryItem(i)}},u.a.createElement("i",{className:"fa fa-trash"})))}}}],r=[],s=Object(i.a)(this.props.data.entries());try{for(s.s();!(e=s.n()).done;){var o=Object(n.a)(e.value,2),l=o[0],c=o[1];console.log(l);var d={name:c.specializationName,status:p.a.getStatus(c.status),action:""};r.push(d)}}catch(h){s.e(h)}finally{s.f()}var f={search:!1,filter:!1,searchOpen:!1,print:!1,viewColumns:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}}};return u.a.createElement(m.a,{data:r,columns:a,options:f})}}]),a}(c.Component);t.a=f},627:function(e,t,a){}}]);
//# sourceMappingURL=31.f45d01e1.chunk.js.map