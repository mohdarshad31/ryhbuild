(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[36],{1214:function(e,t,a){"use strict";a.r(t);var r=a(312),n=a(39),o=a(40),s=a(71),i=a(70),c=a(69),l=a(0),u=a.n(l),m=a(336),d=a(337),g=a(314),f=a(317),y=a(514),h=a(322),v=a(323),p=a(324),b=a(634),E=a(1151),S=a(361),I=a(513),N=a(831),k=a(302),j=(a(305),a(47)),C=a(297),O=a(308),w=a(306),A=a(315),_=a.n(A),L=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editCategoryItem",value:function(e){this.props.editCategoryAction(e)}},{key:"deleteCategoryItem",value:function(e){this.props.deleteCategoryAction(e)}},{key:"render",value:function(){var e,t=this,a=[{label:"Name",name:"name"},{label:"Remark",name:"remark"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,r){var n=a.rowIndex;return u.a.createElement("p",null,u.a.createElement("button",{className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-pencil"})," "),u.a.createElement("button",{className:"btn-delete",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this practice?")&&t.deleteCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-trash"})))}}}],r=[],n=Object(w.a)(this.props.data.entries());try{for(n.s();!(e=n.n()).done;){var o=Object(O.a)(e.value,2),s=o[0],i=o[1];console.log(s);var c={name:i.categoryName,image:i.imagUrl,remark:i.remark||"",status:j.a.getStatus(i.status),action:""};r.push(c)}}catch(m){n.e(m)}finally{n.f()}var l={search:!1,filter:!1,searchOpen:!1,print:!1,viewColumns:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}}};return u.a.createElement(_.a,{data:r,columns:a,options:l})}}]),a}(l.Component),P=(a(895),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value;o.setState(Object(r.a)({},t,a))},o.toggle=function(){o.setState({modal:!o.state.modal,category_name:"",remark:"",status:"",rowIndex:-1,formValid:!1,errors:{},categoryImageUrl:""})},o.changeFileHandler=function(e){var t=e.target.files[0],a=o.state.formErrors;a.category_image="","image/png"!==t.type&&"image/jpeg"!==t.type&&"image/jpg"!==t.type&&"image/svg"!==t.type?(a.category_image=" accept only png, jpeg, jpg",o.setState({categoryImage:t,formErrors:a})):o.setState({categoryImage:t,formErrors:a})},o.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,r=o.state.filterItem;r[t]=a,o.setState({filterItem:r})},o.state={modal:!1,category_name:"",categoryList:[],categoryImage:null,categoryImageUrl:"",loading:!0,rowIndex:-1,status:"",errors:{category_name:"",category_image:"",error:""},category_name_valid:!1,filterItem:{},formValid:!1},o.handleEditCategory=o.handleEditCategory.bind(Object(s.a)(o)),o.submitHandler=o.submitHandler.bind(Object(s.a)(o)),o.handleDeleteCategory=o.handleDeleteCategory.bind(Object(s.a)(o)),o.filterItemList=o.filterItemList.bind(Object(s.a)(o)),o.resetSearchFilter=o.resetSearchFilter.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.categoryList()}},{key:"categoryList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";if(void 0!==t.custom&&""!==t.custom&&(a+=""!==a?"&keyword="+t.custom:"?keyword="+t.custom),void 0!==t.status&&""!==t.status){var r=j.a.getStatusVal(t.status);a+=""!==a?"&status="+r:"?status="+r}this.setState({loading:!0},(function(){j.a.getAPIWithAccessToken("category"+a).then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void k.b.error(t.data.message);e.setState({loading:!1,categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),k.b.error(t.message))}))}))}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),e.target.className+=" was-validated",!this.validateForm())return!1;var a={};a.categoryName=this.state.category_name;var r=j.a.getStatusVal(this.state.status);a.status=r,a.remark=this.state.remark,this.setState({loading:!0,formProccessing:!0},(function(){if(t.state.rowIndex>-1){var e=t.state.categoryList[t.state.rowIndex].categoryId;a.categoryId=e,j.a.putAPIWithAccessToken("category",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return void 0!==e.data.errors?a=e.data.errors:a.categoryName=e.data.message,t.setState({formProccessing:!1,loading:!1,errors:a}),!1}t.state.categoryList[t.state.rowIndex]=e.data.data,t.setState({modal:!1,rowIndex:"",formProccessing:!1,loading:!1}),k.b.success(e.data.message),t.categoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({formProccessing:!1,loading:!1}),k.b.error(e.message))}))}else j.a.postAPIWithAccessToken("category",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return void 0!==e.data.errors?a=e.data.errors:a.categoryName=e.data.message,t.setState({formProccessing:!1,loading:!1,errors:a}),!1}t.setState({modal:!1,formProccessing:!1,loading:!1}),k.b.success(e.data.message),t.categoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({formProccessing:!1,loading:!1}),k.b.error(e.message))}))}))}},{key:"validateForm",value:function(){var e=!0,t=this.state,a={};return void 0!==t.category_name&&""!==t.category_name.trim()||(e=!1,a.categoryName="Studies name field required"),void 0!==t.status&&""!==t.status.trim()||(e=!1,a.status="Status field required"),this.setState({errors:a}),e}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditCategory",value:function(e){var t,a=this.state.categoryList[e];t=j.a.getStatus(a.status),this.setState({modal:!0,status:t,category_name:a.categoryName,remark:a.remark,rowIndex:e,formValid:!0,category_name_valid:!0,categoryImageUrl:a.imagUrl})}},{key:"handleDeleteCategory",value:function(e){var t=this,a=this.state.categoryList[e];this.setState({loading:!0},(function(){j.a.deleteAPIWithAccessToken("category/"+a.categoryId).then((function(e){t.setState({loading:!1}),void 0!==e.data&&e.data.status?(k.b.success(e.data.message),t.categoryList()):k.b.error(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),k.b.error(e.message))}))}))}},{key:"filterItemList",value:function(){var e=this.state.filterItem;this.categoryList(e)}},{key:"resetSearchFilter",value:function(){this.setState({filterItem:{status:"",custom:""}}),this.categoryList()}},{key:"render",value:function(){var e=this.state,t=e.categoryList,a=e.loading,r=e.modal,n=e.errors,o="";return a&&(o=u.a.createElement(C.a,null)),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,o,u.a.createElement(d.a,{lg:12},u.a.createElement(g.a,{className:"oep-card "},u.a.createElement(f.a,{className:"mainHeading"},u.a.createElement("strong",null,"Studies List"),u.a.createElement(y.a,{color:"",className:"categoryAdd",type:"button",onClick:this.toggle},u.a.createElement("i",{className:"fa fa-plus"})," Add Study")),u.a.createElement(m.a,null,u.a.createElement(d.a,{md:12},u.a.createElement("div",{className:"search-filter"},u.a.createElement(m.a,null,u.a.createElement(d.a,{md:"3"},u.a.createElement(h.a,null,u.a.createElement(v.a,{htmlFor:"filter_doctor_id"},"Search By Name"),u.a.createElement(p.a,{type:"text",placeholder:"Search By Name",id:"custom",name:"custom",value:this.state.filterItem.custom,onChange:this.changeFilterHandler}))),u.a.createElement(d.a,{md:"3"},u.a.createElement(h.a,null,u.a.createElement(v.a,{htmlFor:"filter_doctor_id"},"Search By Status"),u.a.createElement(p.a,{type:"select",placeholder:"Search By Status",id:"status",name:"status",value:this.state.filterItem.status,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Under Negotiation"},"Under Negotiation")))),u.a.createElement(d.a,{md:"3"},u.a.createElement(h.a,{className:"filter-button-section"},u.a.createElement(y.a,{className:"search-btn",type:"button",onClick:this.filterItemList},"Search"),u.a.createElement(y.a,{className:"search-btn",id:"resetButton",type:"button",onClick:this.resetSearchFilter},"Reset")))))),u.a.createElement(d.a,{lg:12},u.a.createElement(L,{data:t,toggle:this.toggle,editCategoryAction:this.handleEditCategory,deleteCategoryAction:this.handleDeleteCategory,dataTableLoadingStatus:this.state.loading})))))),u.a.createElement(b.a,{isOpen:r,toggle:this.toggle,className:"category-modal-section"},u.a.createElement(E.a,{toggle:this.toggle},"Study"),u.a.createElement(S.a,{onSubmit:this.submitHandler,noValidate:!0},u.a.createElement(I.a,null,u.a.createElement(h.a,null,u.a.createElement(v.a,{htmlFor:"category_name"},"Studies Name"),u.a.createElement(p.a,{type:"text",placeholder:"Studies Name *",invalid:void 0!==n.categoryName&&""!==n.categoryName,id:"category_name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler,required:!0}),u.a.createElement("div",{className:"invalid-feedback"},n.categoryName)),u.a.createElement(h.a,null,u.a.createElement(v.a,{htmlFor:"category_name"},"Remark"),u.a.createElement(p.a,{type:"textarea",placeholder:"Remark ",id:"remark",name:"remark",value:this.state.remark,onChange:this.changeHandler})),u.a.createElement(h.a,null,u.a.createElement(v.a,{htmlFor:"template_status"},"Status"),u.a.createElement(p.a,{type:"select",placeholder:"Status *",invalid:void 0!==n.status&&""!==n.status,id:"status",name:"status",value:this.state.status,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select Status"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Under Negotiation"},"Under Negotiation")),u.a.createElement("div",{className:"invalid-feedback"},n.status))),u.a.createElement(N.a,null,u.a.createElement(y.a,{color:"primary",disabled:this.state.formProccessing,type:"submit"},"Submit"),u.a.createElement(y.a,{color:"secondary",onClick:this.toggle},"Cancel")))))}}]),a}(l.Component));t.default=P},297:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(307);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(300);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,s=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw o}}}}},307:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},308:function(e,t,a){"use strict";var r=a(300);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},312:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),i=a(30),c=a.n(i),l=a(290),u=a.n(l),m=a(291),d={tag:m.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,c=e.inverse,l=e.outline,d=e.tag,g=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),y=Object(m.l)(u()(t,"card",!!c&&"text-white",!!i&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return s.a.createElement(d,Object(r.a)({},f,{className:y,ref:g}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},317:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),i=a(30),c=a.n(i),l=a(290),u=a.n(l),m=a(291),d={tag:m.p,className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.l)(u()(t,"card-header"),a);return s.a.createElement(o,Object(r.a)({},i,{className:c}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},895:function(e,t,a){}}]);
//# sourceMappingURL=36.a445f6cc.chunk.js.map