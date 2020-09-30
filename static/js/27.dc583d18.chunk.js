(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[27],{1213:function(e,t,a){"use strict";a.r(t);var r=a(312),n=a(39),o=a(40),s=a(71),l=a(70),c=a(69),i=a(0),u=a.n(i),m=a(336),d=a(337),g=a(314),y=a(317),h=a(514),f=a(322),p=a(323),b=a(324),v=a(634),E=a(1151),S=a(361),I=a(513),C=a(831),N=a(302),k=(a(305),a(47)),w=a(297),j=a(327),L=a(308),O=a(306),A=a(315),P=a.n(A),_=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editSubCategoryItem",value:function(e){this.props.editSubCategoryAction(e)}},{key:"deleteSubCategoryItem",value:function(e){this.props.deleteSubCategoryAction(e)}},{key:"render",value:function(){var e,t=this,a=[],r=Object(O.a)(this.props.data.entries());try{for(r.s();!(e=r.n()).done;){var n=Object(L.a)(e.value,2),o=n[0],s=n[1];console.log(o);var l={name:s.subCategoryName,image:s.imagUrl,parentCategory:s.categoryName,status:k.a.getStatus(s.status),remark:s.remark||"",sponsorName:s.sponsorName||"",contactPerson:s.sponsorContactInfo.length>0?"".concat(s.sponsorContactInfo[0].title||""," ").concat(s.sponsorContactInfo[0].contactPerson||""):"",action:""};a.push(l)}}catch(m){r.e(m)}finally{r.f()}var c=[{label:"Sub Study",name:"name"},{label:"Study",name:"parentCategory"},{label:"Remark",name:"remark"},{label:"Sponsor Name",name:"sponsorName"},{label:"Contact Person",name:"contactPerson"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,r){var n=a.rowIndex;return u.a.createElement("p",null,u.a.createElement("a",{href:"#!",className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editSubCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-eye"})," "),u.a.createElement("a",{href:"#!",className:"btn-delete",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this sub study?")&&t.deleteSubCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-trash"})))}}}],i={search:!1,viewColumns:!1,filter:!1,searchOpen:!1,print:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}}};return u.a.createElement(P.a,{data:a,columns:c,options:i})}}]),a}(i.Component),F=(a(896),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value;if("categoryId"===t){var n=o.state.categoryList.filter((function(e){return e.categoryId==a}));n.length>0&&void 0!==n[0].sponsorId&&""!==n[0].sponsorId&&o.setState({sponsorId:n[0].sponsorId})}o.setState(Object(r.a)({},t,a))},o.toggle=function(){o.setState({modal:!o.state.modal,subCategory_name:"",categoryId:"",rowIndex:-1,formValid:!1,subCategoryImageUrl:"",editMode:!0})},o.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,r=o.state.filterItem;r[t]=a,o.setState({filterItem:r})},o.state={modal:!1,subCategory_name:"",categoryId:"",subCategoryList:[],subCategoryImage:null,subCategoryImageUrl:"",loading:!0,status:"",rowIndex:-1,remark:"",sponsorId:"",categoryList:[],sponsorsList:[],formErrors:{subCategory_name:"",subCategory_image:"",category:"",error:""},errors:{},subCategory_name_valid:!1,filterItem:{},category_valid:!1,formValid:!1,formProccessing:!1,editMode:!0,viewInfoData:{}},o.handleEditSubCategory=o.handleEditSubCategory.bind(Object(s.a)(o)),o.submitHandler=o.submitHandler.bind(Object(s.a)(o)),o.handleDeleteSubCategory=o.handleDeleteSubCategory.bind(Object(s.a)(o)),o.filterItemList=o.filterItemList.bind(Object(s.a)(o)),o.resetSearchFilter=o.resetSearchFilter.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.subCategoryList(),this.categoryList(),this.sponsorsList()}},{key:"categoryList",value:function(){var e=this;k.a.getAPIWithAccessToken("category").then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void N.b.error(t.data.message);e.setState({categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):N.b.error(t.message)}))}},{key:"subCategoryList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";if(void 0!==t.custom&&""!==t.custom&&(a+=""!==a?"&keyword="+t.custom:"?keyword="+t.custom),void 0!==t.sponsorId&&""!==t.sponsorId&&(a+=""!==a?"&sponsorId="+t.sponsorId:"?sponsorId="+t.sponsorId),void 0!==t.categoryId&&""!==t.categoryId&&(a+=""!==a?"&categoryId="+t.categoryId:"?categoryId="+t.categoryId),void 0!==t.status&&""!==t.status){var r=k.a.getStatusVal(t.status);a+=""!==a?"&status="+r:"?status="+r}this.setState({loading:!0},(function(){k.a.getAPIWithAccessToken("sub-category"+a).then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void N.b.error(t.data.message);e.setState({loading:!1,subCategoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),N.b.error(t.message))}))}))}},{key:"sponsorsList",value:function(){var e=this;k.a.getAPIWithAccessToken("sponsors").then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void N.b.error(t.data.message);e.setState({sponsorsList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):N.b.error(t.message)}))}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),this.state.rowIndex>-1&&!window.confirm("Are your sure to update??"))return!1;if(e.target.className+=" was-validated",!this.validateForm())return!1;var a={};a.categoryId=this.state.categoryId,a.subCategoryName=this.state.subCategory_name,a.sponsorId=this.state.sponsorId;var r=k.a.getStatusVal(this.state.status);a.status=r,a.remark=this.state.remark,this.setState({formProccessing:!0,loading:!0},(function(){if(t.state.rowIndex>-1){var e=t.state.subCategoryList[t.state.rowIndex].subCategoryId;a.subCategoryId=e,k.a.putAPIWithAccessToken("sub-category",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return void 0!==e.data.errors?a=e.data.errors:a.categoryName=e.data.message,t.setState({formProccessing:!1,loading:!1,errors:a}),!1}t.setState({modal:!1,rowIndex:"",formProccessing:!1,loading:!1}),N.b.success(e.data.message),t.subCategoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({formProccessing:!1,loading:!1}),N.b.error(e.message))}))}else k.a.postAPIWithAccessToken("sub-category",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return void 0!==e.data.errors?a=e.data.errors:a.categoryName=e.data.message,t.setState({formProccessing:!1,loading:!1,errors:a}),!1}t.setState({modal:!1,formProccessing:!1,loading:!1}),N.b.success(e.data.message),t.subCategoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({formProccessing:!1,loading:!1}),N.b.error(e.message))}))}))}},{key:"validateForm",value:function(){var e=!0,t=this.state,a={};return void 0!==t.categoryId&&""!==t.categoryId.trim()||(e=!1,a.categoryName="Study field required"),void 0!==t.subCategory_name&&""!==t.subCategory_name.trim()||(e=!1,a.subCategoryName="Sub Study field required"),void 0!==t.status&&""!==t.status.trim()||(e=!1,a.status="Status field required"),this.setState({errors:a}),e}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditSubCategory",value:function(e){var t=this.state.subCategoryList[e],a=k.a.getStatus(t.status);this.setState({modal:!0,editMode:!1,viewInfoData:t,status:a,subCategory_name:t.subCategoryName,remark:t.remark,sponsorId:t.sponsorId,subCategory_name_valid:!0,category_valid:!0,rowIndex:e,categoryId:t.categoryId,subCategoryImageUrl:t.imagUrl,formValid:!0})}},{key:"handleDeleteSubCategory",value:function(e){var t=this,a=this.state.subCategoryList[e];this.setState({loading:!0},(function(){k.a.deleteAPIWithAccessToken("sub-category/"+a.subCategoryId).then((function(e){t.setState({loading:!1}),void 0!==e.data&&e.data.status?(N.b.success(e.data.message),t.setState({filterItem:{}}),t.subCategoryList()):N.b.error(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),N.b.error(e.message))}))}))}},{key:"filterItemList",value:function(){var e=this.state.filterItem;this.subCategoryList(e)}},{key:"resetSearchFilter",value:function(){this.setState({filterItem:{status:"",custom:"",categoryId:"",sponsorId:""}}),this.subCategoryList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.subCategoryList,r=t.loading,n=t.modal,o=t.categoryList,s=t.categoryId,l=t.formProccessing,c=t.errors,i="";r&&(i=u.a.createElement(w.a,null));var N=u.a.createElement(u.a.Fragment,null,"Submit ",u.a.createElement("i",{className:"fa fa-spinner"}));return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m.a,null,i,u.a.createElement(d.a,{lg:12},u.a.createElement(g.a,{className:"oep-card "},u.a.createElement(y.a,{className:"mainHeading"},u.a.createElement("strong",null,"Sub Studies List"),u.a.createElement(h.a,{color:"",className:"categoryAdd",type:"button",onClick:this.toggle},u.a.createElement("i",{className:"fa fa-plus"})," Add Sub Study")),u.a.createElement(m.a,null,u.a.createElement(d.a,{md:12},u.a.createElement("div",{className:"search-filter"},u.a.createElement(m.a,null,u.a.createElement(d.a,{md:"2"},u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"categoryId"},"Search By Study"),u.a.createElement(b.a,{type:"select",placeholder:"Study Name *",name:"categoryId",value:this.state.filterItem.categoryId,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),o.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:e,selectedCategory:s})}))))),u.a.createElement(d.a,{md:"2"},u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"sponsorId"},"Search By Sponsor"),u.a.createElement(b.a,{type:"select",placeholder:"Select Sponsor",id:"sponsorId",name:"sponsorId",value:this.state.filterItem.sponsorId,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select Sponsor"),this.state.sponsorsList.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:{categoryId:e.sponsorId,categoryName:e.companyName}})}))))),u.a.createElement(d.a,{md:"3"},u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"filter_doctor_id"},"Search By Name"),u.a.createElement(b.a,{type:"text",placeholder:"Search By Name",id:"custom",name:"custom",value:this.state.filterItem.custom,onChange:this.changeFilterHandler}))),u.a.createElement(d.a,{md:"2"},u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"filter_doctor_id"},"Search By Status"),u.a.createElement(b.a,{type:"select",placeholder:"Search By Status",id:"status",name:"status",value:this.state.filterItem.status,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Under Negotiation"},"Under Negotiation")))),u.a.createElement(d.a,{md:"3"},u.a.createElement(f.a,{className:"filter-button-section"},u.a.createElement(h.a,{className:"search-btn",type:"button",onClick:this.filterItemList},"Search"),u.a.createElement(h.a,{className:"search-btn",id:"resetButton",type:"button",onClick:this.resetSearchFilter},"Reset")))))),u.a.createElement(d.a,{lg:12},u.a.createElement(_,{data:a,toggle:this.toggle,editSubCategoryAction:this.handleEditSubCategory,deleteSubCategoryAction:this.handleDeleteSubCategory,dataTableLoadingStatus:this.state.loading})))))),u.a.createElement(v.a,{isOpen:n,toggle:this.toggle,className:"subCategory-modal-section"},u.a.createElement(E.a,{toggle:this.toggle,className:"viewModalHead"},"Sub Study ",!this.state.editMode&&this.state.rowIndex>-1&&u.a.createElement("label",{className:"view-icon pull-right",onClick:function(){e.setState({editMode:!0})}},u.a.createElement("i",{className:"fa fa-pencil"})),this.state.editMode&&this.state.rowIndex>-1&&u.a.createElement("label",{className:"view-icon pull-right",onClick:function(){e.setState({editMode:!1})}},u.a.createElement("i",{className:"fa fa-eye"}))),this.state.editMode&&u.a.createElement(S.a,{onSubmit:this.submitHandler,noValidate:!0},u.a.createElement(I.a,null,u.a.createElement(j.a,{formErrors:this.state.formErrors}),u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"categoryId"},"Study ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(b.a,{type:"select",placeholder:"Study Name *",invalid:void 0!==c.categoryName&&""!==c.categoryName,id:"categoryId",name:"categoryId",value:this.state.categoryId,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select"),o.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:e,selectedCategory:s})}))),u.a.createElement("div",{className:"invalid-feedback"},c.categoryName)),u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"sponsorId"},"Select Sponsor "),u.a.createElement(b.a,{type:"select",placeholder:"Select Sponsor",id:"sponsorId",name:"sponsorId",value:this.state.sponsorId,onChange:this.changeHandler},u.a.createElement("option",{value:""},"Select Sponsor"),this.state.sponsorsList.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:{categoryId:e.sponsorId,categoryName:e.companyName}})})))),u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"subCategory_name"},"Sub Study ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(b.a,{type:"text",placeholder:"Sub Study *",invalid:void 0!==c.subCategoryName&&""!==c.subCategoryName,id:"subCategory_name",name:"subCategory_name",value:this.state.subCategory_name,onChange:this.changeHandler,required:!0}),u.a.createElement("div",{className:"invalid-feedback"},c.subCategoryName)),u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"category_name"},"Remark"),u.a.createElement(b.a,{type:"textarea",placeholder:"Remark ",id:"remark",name:"remark",value:this.state.remark,onChange:this.changeHandler})),u.a.createElement(f.a,null,u.a.createElement(p.a,{htmlFor:"template_status"},"Status"),u.a.createElement(b.a,{type:"select",placeholder:"Status *",invalid:void 0!==c.status&&""!==c.status,id:"status",name:"status",value:this.state.status,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select Status"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Under Negotiation"},"Under Negotiation")),u.a.createElement("div",{className:"invalid-feedback"},c.status))),u.a.createElement(C.a,null,u.a.createElement(h.a,{color:"primary",disabled:l,type:"submit"},l?N:"Submit"),u.a.createElement(h.a,{color:"secondary",onClick:this.toggle},"Cancel"))),!this.state.editMode&&u.a.createElement("div",{className:"viewInfo"},u.a.createElement(I.a,null,u.a.createElement(m.a,null,u.a.createElement(f.a,{className:"col-md-6"},u.a.createElement(p.a,{htmlFor:"sponsorId"},"Sponsor Name "),u.a.createElement("p",null,this.state.viewInfoData.sponsorName)),u.a.createElement(f.a,{className:"col-md-6"},u.a.createElement(p.a,{htmlFor:"sponsorId"},"Contact Person "),u.a.createElement("p",null,this.state.viewInfoData.sponsorContactInfo.length>0?this.state.viewInfoData.sponsorContactInfo[0].contactPerson:"")),u.a.createElement(f.a,{className:"col-md-6"},u.a.createElement(p.a,{htmlFor:"category_name"},"Study Name"),u.a.createElement("p",null,this.state.viewInfoData.categoryName)),u.a.createElement(f.a,{className:"col-md-6"},u.a.createElement(p.a,{htmlFor:"category_name"},"Sub Study Name"),u.a.createElement("p",null,this.state.viewInfoData.subCategoryName)),u.a.createElement(f.a,{className:"col-md-6"},u.a.createElement(p.a,{htmlFor:"category_name"},"Remark"),u.a.createElement("p",null,this.state.viewInfoData.remark)),u.a.createElement(f.a,{className:"col-md-6"},u.a.createElement(p.a,{htmlFor:"template_status"},"Status"),u.a.createElement("p",null,k.a.getStatus(this.state.viewInfoData.status))))))))}}]),a}(i.Component));function H(e){var t=e.categoryItem;return u.a.createElement("option",{value:t.categoryId},t.categoryName)}t.default=F},297:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(307);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(300);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}},307:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},308:function(e,t,a){"use strict";var r=a(300);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==l.return||l.return()}finally{if(n)throw o}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},312:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),l=a(30),c=a.n(l),i=a(290),u=a.n(i),m=a(291),d={tag:m.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,o=e.color,l=e.body,c=e.inverse,i=e.outline,d=e.tag,g=e.innerRef,y=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(m.l)(u()(t,"card",!!c&&"text-white",!!l&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return s.a.createElement(d,Object(r.a)({},y,{className:h,ref:g}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},317:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),l=a(30),c=a.n(l),i=a(290),u=a.n(i),m=a(291),d={tag:m.p,className:c.a.string,cssModule:c.a.object},g=function(e){var t=e.className,a=e.cssModule,o=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),c=Object(m.l)(u()(t,"card-header"),a);return s.a.createElement(o,Object(r.a)({},l,{className:c}))};g.propTypes=d,g.defaultProps={tag:"div"},t.a=g},327:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a.n(r),o=(a(328),function(e){var t=e.formErrors;return n.a.createElement("div",{className:"col-md-12 col-lg-12"},n.a.createElement("div",{className:"formErrors"},Object.keys(t).map((function(e,a){if(t[e].length>0){var r=e.replace("_"," ");return n.a.createElement("p",{key:a},r," ",t[e])}return""}))))})},328:function(e,t,a){},896:function(e,t,a){}}]);
//# sourceMappingURL=27.dc583d18.chunk.js.map