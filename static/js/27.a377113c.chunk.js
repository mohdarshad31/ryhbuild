(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[27],{1213:function(e,t,a){"use strict";a.r(t);var r=a(312),n=a(39),o=a(40),s=a(71),i=a(70),l=a(69),c=a(0),u=a.n(c),d=a(336),m=a(337),g=a(314),y=a(317),h=a(514),b=a(322),f=a(323),p=a(324),v=a(634),S=a(1151),E=a(361),I=a(513),C=a(831),N=a(302),k=(a(305),a(47)),j=a(297),L=a(327),O=a(308),A=a(306),w=a(315),P=a.n(w),_=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editSubCategoryItem",value:function(e){this.props.editSubCategoryAction(e)}},{key:"deleteSubCategoryItem",value:function(e){this.props.deleteSubCategoryAction(e)}},{key:"render",value:function(){var e,t=this,a=[],r=Object(A.a)(this.props.data.entries());try{for(r.s();!(e=r.n()).done;){var n=Object(O.a)(e.value,2),o=n[0],s=n[1];console.log(o);var i={name:s.subCategoryName,image:s.imagUrl,parentCategory:s.categoryName,status:k.a.getStatus(s.status),remark:s.remark||"",sponsorName:s.sponsorName||"",action:""};a.push(i)}}catch(d){r.e(d)}finally{r.f()}var l=[{label:"Sub Studies",name:"name"},{label:"Studies",name:"parentCategory"},{label:"Remark",name:"remark"},{label:"Sponsor Name",name:"sponsorName"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,r){var n=a.rowIndex;return u.a.createElement("p",null,u.a.createElement("a",{href:"#!",className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editSubCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-pencil"})," "),u.a.createElement("a",{href:"#!",className:"btn-delete",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this sub practice?")&&t.deleteSubCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-trash"})))}}}],c={search:!1,viewColumns:!1,filter:!1,searchOpen:!1,print:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}}};return u.a.createElement(P.a,{data:a,columns:l,options:c})}}]),a}(c.Component),F=(a(896),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value;o.setState(Object(r.a)({},t,a))},o.toggle=function(){o.setState({modal:!o.state.modal,subCategory_name:"",categoryId:"",rowIndex:-1,formValid:!1,subCategoryImageUrl:""})},o.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,r=o.state.filterItem;r[t]=a,o.setState({filterItem:r})},o.state={modal:!1,subCategory_name:"",categoryId:"",subCategoryList:[],subCategoryImage:null,subCategoryImageUrl:"",loading:!0,status:"",rowIndex:-1,remark:"",sponsorId:"",categoryList:[],sponsorsList:[],formErrors:{subCategory_name:"",subCategory_image:"",category:"",error:""},errors:{},subCategory_name_valid:!1,filterItem:{},category_valid:!1,formValid:!1,formProccessing:!1},o.handleEditSubCategory=o.handleEditSubCategory.bind(Object(s.a)(o)),o.submitHandler=o.submitHandler.bind(Object(s.a)(o)),o.handleDeleteSubCategory=o.handleDeleteSubCategory.bind(Object(s.a)(o)),o.filterItemList=o.filterItemList.bind(Object(s.a)(o)),o.resetSearchFilter=o.resetSearchFilter.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.subCategoryList(),this.categoryList(),this.sponsorsList()}},{key:"categoryList",value:function(){var e=this;k.a.getAPIWithAccessToken("category").then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void N.b.error(t.data.message);e.setState({categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):N.b.error(t.message)}))}},{key:"subCategoryList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";if(void 0!==t.custom&&""!==t.custom&&(a+=""!==a?"&keyword="+t.custom:"?keyword="+t.custom),void 0!==t.sponsorId&&""!==t.sponsorId&&(a+=""!==a?"&sponsorId="+t.sponsorId:"?sponsorId="+t.sponsorId),void 0!==t.categoryId&&""!==t.categoryId&&(a+=""!==a?"&categoryId="+t.categoryId:"?categoryId="+t.categoryId),void 0!==t.status&&""!==t.status){var r=k.a.getStatusVal(t.status);a+=""!==a?"&status="+r:"?status="+r}this.setState({loading:!0},(function(){k.a.getAPIWithAccessToken("sub-category"+a).then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void N.b.error(t.data.message);e.setState({loading:!1,subCategoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),N.b.error(t.message))}))}))}},{key:"sponsorsList",value:function(){var e=this;k.a.getAPIWithAccessToken("sponsors").then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void N.b.error(t.data.message);e.setState({sponsorsList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):N.b.error(t.message)}))}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),e.target.className+=" was-validated",!this.validateForm())return!1;var a={};a.categoryId=this.state.categoryId,a.subCategoryName=this.state.subCategory_name,a.sponsorId=this.state.sponsorId;var r=k.a.getStatusVal(this.state.status);a.status=r,a.remark=this.state.remark,this.setState({formProccessing:!0,loading:!0},(function(){if(t.state.rowIndex>-1){var e=t.state.subCategoryList[t.state.rowIndex].subCategoryId;a.subCategoryId=e,k.a.putAPIWithAccessToken("sub-category",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return void 0!==e.data.errors?a=e.data.errors:a.categoryName=e.data.message,t.setState({formProccessing:!1,loading:!1,errors:a}),!1}t.state.subCategoryList[t.state.rowIndex]=e.data.data,t.setState({modal:!1,rowIndex:"",formProccessing:!1,loading:!1}),N.b.success(e.data.message),t.subCategoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({formProccessing:!1,loading:!1}),N.b.error(e.message))}))}else k.a.postAPIWithAccessToken("sub-category",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return void 0!==e.data.errors?a=e.data.errors:a.categoryName=e.data.message,t.setState({formProccessing:!1,loading:!1,errors:a}),!1}t.setState({modal:!1,formProccessing:!1,loading:!1}),N.b.success(e.data.message),t.subCategoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({formProccessing:!1,loading:!1}),N.b.error(e.message))}))}))}},{key:"validateForm",value:function(){var e=!0,t=this.state,a={};return void 0!==t.categoryId&&""!==t.categoryId.trim()||(e=!1,a.categoryName="Studies field required"),void 0!==t.subCategory_name&&""!==t.subCategory_name.trim()||(e=!1,a.subCategoryName="Sub Studies field required"),void 0!==t.status&&""!==t.status.trim()||(e=!1,a.status="Status field required"),this.setState({errors:a}),e}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditSubCategory",value:function(e){var t=this.state.subCategoryList[e],a=k.a.getStatus(t.status);this.setState({modal:!0,status:a,subCategory_name:t.subCategoryName,remark:t.remark,sponsorId:t.sponsorId,subCategory_name_valid:!0,category_valid:!0,rowIndex:e,categoryId:t.categoryId,subCategoryImageUrl:t.imagUrl,formValid:!0})}},{key:"handleDeleteSubCategory",value:function(e){var t=this,a=this.state.subCategoryList[e];this.setState({loading:!0},(function(){k.a.deleteAPIWithAccessToken("sub-category/"+a.subCategoryId).then((function(e){t.setState({loading:!1}),void 0!==e.data&&e.data.status?(N.b.success(e.data.message),t.setState({filterItem:{}}),t.subCategoryList()):N.b.error(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),N.b.error(e.message))}))}))}},{key:"filterItemList",value:function(){var e=this.state.filterItem;this.subCategoryList(e)}},{key:"resetSearchFilter",value:function(){this.setState({filterItem:{status:"",custom:"",categoryId:"",sponsorId:""}}),this.subCategoryList()}},{key:"render",value:function(){var e=this.state,t=e.subCategoryList,a=e.loading,r=e.modal,n=e.categoryList,o=e.categoryId,s=e.formProccessing,i=e.errors,l="";a&&(l=u.a.createElement(j.a,null));var c=u.a.createElement(u.a.Fragment,null,"Submit ",u.a.createElement("i",{className:"fa fa-spinner"}));return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,l,u.a.createElement(m.a,{lg:12},u.a.createElement(g.a,{className:"oep-card "},u.a.createElement(y.a,{className:"mainHeading"},u.a.createElement("strong",null,"Sub Studies List"),u.a.createElement(h.a,{color:"",className:"categoryAdd",type:"button",onClick:this.toggle},u.a.createElement("i",{className:"fa fa-plus"})," Add Sub Study")),u.a.createElement(d.a,null,u.a.createElement(m.a,{md:12},u.a.createElement("div",{className:"search-filter"},u.a.createElement(d.a,null,u.a.createElement(m.a,{md:"2"},u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"categoryId"},"Search By Study"),u.a.createElement(p.a,{type:"select",placeholder:"Study Name *",name:"categoryId",value:this.state.filterItem.categoryId,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),n.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:e,selectedCategory:o})}))))),u.a.createElement(m.a,{md:"2"},u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"sponsorId"},"Search By Sponsor"),u.a.createElement(p.a,{type:"select",placeholder:"Select Sponsor",id:"sponsorId",name:"sponsorId",value:this.state.filterItem.sponsorId,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select Sponsor"),this.state.sponsorsList.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:{categoryId:e.sponsorId,categoryName:e.companyName}})}))))),u.a.createElement(m.a,{md:"3"},u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"filter_doctor_id"},"Search By Name"),u.a.createElement(p.a,{type:"text",placeholder:"Search By Name",id:"custom",name:"custom",value:this.state.filterItem.custom,onChange:this.changeFilterHandler}))),u.a.createElement(m.a,{md:"2"},u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"filter_doctor_id"},"Search By Status"),u.a.createElement(p.a,{type:"select",placeholder:"Search By Status",id:"status",name:"status",value:this.state.filterItem.status,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Under Negotiation"},"Under Negotiation")))),u.a.createElement(m.a,{md:"3"},u.a.createElement(b.a,{className:"filter-button-section"},u.a.createElement(h.a,{className:"search-btn",type:"button",onClick:this.filterItemList},"Search"),u.a.createElement(h.a,{className:"search-btn",id:"resetButton",type:"button",onClick:this.resetSearchFilter},"Reset")))))),u.a.createElement(m.a,{lg:12},u.a.createElement(_,{data:t,toggle:this.toggle,editSubCategoryAction:this.handleEditSubCategory,deleteSubCategoryAction:this.handleDeleteSubCategory,dataTableLoadingStatus:this.state.loading})))))),u.a.createElement(v.a,{isOpen:r,toggle:this.toggle,className:"subCategory-modal-section"},u.a.createElement(S.a,{toggle:this.toggle},"Sub Study"),u.a.createElement(E.a,{onSubmit:this.submitHandler,noValidate:!0},u.a.createElement(I.a,null,u.a.createElement(L.a,{formErrors:this.state.formErrors}),u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"categoryId"},"Studies ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(p.a,{type:"select",placeholder:"Studies Name *",invalid:void 0!==i.categoryName&&""!==i.categoryName,id:"categoryId",name:"categoryId",value:this.state.categoryId,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select"),n.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:e,selectedCategory:o})}))),u.a.createElement("div",{className:"invalid-feedback"},i.categoryName)),u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"sponsorId"},"Select Sponsor "),u.a.createElement(p.a,{type:"select",placeholder:"Select Sponsor",id:"sponsorId",name:"sponsorId",value:this.state.sponsorId,onChange:this.changeHandler},u.a.createElement("option",{value:""},"Select Sponsor"),this.state.sponsorsList.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:{categoryId:e.sponsorId,categoryName:e.companyName}})})))),u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"subCategory_name"},"Sub Studies ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(p.a,{type:"text",placeholder:"Sub Studies *",invalid:void 0!==i.subCategoryName&&""!==i.subCategoryName,id:"subCategory_name",name:"subCategory_name",value:this.state.subCategory_name,onChange:this.changeHandler,required:!0}),u.a.createElement("div",{className:"invalid-feedback"},i.subCategoryName)),u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"category_name"},"Remark"),u.a.createElement(p.a,{type:"textarea",placeholder:"Remark ",id:"remark",name:"remark",value:this.state.remark,onChange:this.changeHandler})),u.a.createElement(b.a,null,u.a.createElement(f.a,{htmlFor:"template_status"},"Status"),u.a.createElement(p.a,{type:"select",placeholder:"Status *",invalid:void 0!==i.status&&""!==i.status,id:"status",name:"status",value:this.state.status,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select Status"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Under Negotiation"},"Under Negotiation")),u.a.createElement("div",{className:"invalid-feedback"},i.status))),u.a.createElement(C.a,null,u.a.createElement(h.a,{color:"primary",disabled:s,type:"submit"},s?c:"Submit"),u.a.createElement(h.a,{color:"secondary",onClick:this.toggle},"Cancel")))))}}]),a}(c.Component));function H(e){var t=e.categoryItem;return u.a.createElement("option",{value:t.categoryId},t.categoryName)}t.default=F},297:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(307);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(300);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,s=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw o}}}}},307:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},308:function(e,t,a){"use strict";var r=a(300);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(l){n=!0,o=l}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},312:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),i=a(30),l=a.n(i),c=a(290),u=a.n(c),d=a(291),m={tag:d.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},g=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,g=e.innerRef,y=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(d.l)(u()(t,"card",!!l&&"text-white",!!i&&"card-body",!!o&&(c?"border":"bg")+"-"+o),a);return s.a.createElement(m,Object(r.a)({},y,{className:h,ref:g}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g},317:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),i=a(30),l=a.n(i),c=a(290),u=a.n(c),d=a(291),m={tag:d.p,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(d.l)(u()(t,"card-header"),a);return s.a.createElement(o,Object(r.a)({},i,{className:l}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g},327:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a.n(r),o=(a(328),function(e){var t=e.formErrors;return n.a.createElement("div",{className:"col-md-12 col-lg-12"},n.a.createElement("div",{className:"formErrors"},Object.keys(t).map((function(e,a){if(t[e].length>0){var r=e.replace("_"," ");return n.a.createElement("p",{key:a},r," ",t[e])}return""}))))})},328:function(e,t,a){},896:function(e,t,a){}}]);
//# sourceMappingURL=27.a377113c.chunk.js.map