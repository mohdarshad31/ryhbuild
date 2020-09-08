(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[28],{1122:function(e,t,a){},1224:function(e,t,a){"use strict";a.r(t);var r=a(312),n=a(39),o=a(40),s=a(71),i=a(70),c=a(69),l=a(0),u=a.n(l),d=a(336),m=a(337),g=a(314),f=a(330),y=a(634),h=a(1151),v=a(361),p=a(513),b=a(322),E=a(323),S=a(324),j=a(831),I=a(514),O=a(302),C=(a(305),a(47)),A=a(297),w=a(327),N=a(308),k=a(306),_=a(315),x=a.n(_),L=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editCategoryItem",value:function(e){this.props.editCategoryAction(e)}},{key:"deleteCategoryItem",value:function(e){this.props.deleteCategoryAction(e)}},{key:"render",value:function(){var e,t=this,a=[{label:"Name",name:"name"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,r){var n=a.rowIndex;return u.a.createElement("p",null,u.a.createElement("button",{className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-pencil"})," "),u.a.createElement("button",{className:"btn-delete",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this category?")&&t.deleteCategoryItem(n)}},u.a.createElement("i",{className:"fa fa-trash"})))}}}],r=[],n=Object(k.a)(this.props.data.entries());try{for(n.s();!(e=n.n()).done;){var o=Object(N.a)(e.value,2),s=o[0],i=o[1];console.log(s);var c={name:i.categoryName,image:i.imagUrl,status:i.status?"Active":"Inactive",action:""};r.push(c)}}catch(d){n.e(d)}finally{n.f()}var l={search:!1,filter:!1,searchOpen:!1,print:!1,viewColumns:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}},fixedHeaderOptions:{xAxis:!1,yAxis:!1},customToolbar:function(){return u.a.createElement(I.a,{color:"",className:"categoryAdd",type:"button",onClick:t.props.toggle},u.a.createElement("i",{className:"fa fa-plus"})," Add Category")}};return u.a.createElement(x.a,{data:r,columns:a,options:l})}}]),a}(l.Component),T=(a(1122),function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value;o.setState(Object(r.a)({},t,a),(function(){o.validateField(t,a)}))},o.toggle=function(){o.setState({modal:!o.state.modal,category_name:"",rowIndex:-1,formValid:!1,categoryImageUrl:""})},o.changeFileHandler=function(e){var t=e.target.files[0],a=o.state.formErrors;a.category_image="","image/png"!==t.type&&"image/jpeg"!==t.type&&"image/jpg"!==t.type&&"image/svg"!==t.type?(a.category_image=" accept only png, jpeg, jpg",o.setState({categoryImage:t,formErrors:a})):o.setState({categoryImage:t,formErrors:a})},o.state={modal:!1,category_name:"",categoryList:[],categoryImage:null,categoryImageUrl:"",loading:!0,rowIndex:-1,status:"",formErrors:{category_name:"",category_image:"",error:""},category_name_valid:!1,formValid:!1},o.handleEditCategory=o.handleEditCategory.bind(Object(s.a)(o)),o.submitHandler=o.submitHandler.bind(Object(s.a)(o)),o.handleDeleteCategory=o.handleDeleteCategory.bind(Object(s.a)(o)),o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.categoryList()}},{key:"categoryList",value:function(){var e=this;this.setState({loading:!0},(function(){C.a.getAPIWithAccessToken("template/category").then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void O.b.error(t.data.message);e.setState({loading:!1,categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),O.b.error(t.message))}))}))}},{key:"submitHandler",value:function(e){var t=this;e.preventDefault(),e.target.className+=" was-validated";var a={};a.categoryName=this.state.category_name;var r=this.state.status,n=""===r||"Active"===r;a.status=n,this.setState({loading:!0},(function(){if(t.state.rowIndex>-1){var e=t.state.categoryList[t.state.rowIndex].categoryId;a.categoryId=e,C.a.putAPIWithAccessToken("template/category",a).then((function(e){if(console.log(e),void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void O.b.error(e.data.message);t.state.categoryList[t.state.rowIndex]=e.data.data,t.setState({modal:!1,rowIndex:"",loading:!1}),O.b.success(e.data.message),t.categoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),O.b.error(e.message))}))}else C.a.postAPIWithAccessToken("template/category",a).then((function(e){if(console.log(e),t.state.formErrors.error="",void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void O.b.error(e.data.message);t.setState({modal:!1,loading:!1}),O.b.success(e.data.message),t.categoryList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),O.b.error(e.message))}))}))}},{key:"validateField",value:function(e,t){var a=this.state.formErrors;a.error="";var r=this.state.category_name_valid;switch(e){case"category_name":r=""!==t,a.category_name=r?"":" is required"}this.setState({formErrors:a,category_name_valid:r},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.category_name_valid})}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditCategory",value:function(e){var t=this.state.categoryList[e],a=t.status?"Active":"Inactive";this.setState({modal:!0,status:a,category_name:t.categoryName,rowIndex:e,formValid:!0,category_name_valid:!0,categoryImageUrl:t.imagUrl})}},{key:"handleDeleteCategory",value:function(e){var t=this,a=this.state.categoryList[e];this.setState({loading:!0},(function(){C.a.deleteAPIWithAccessToken("template/category/"+a.categoryId).then((function(e){t.setState({loading:!1}),void 0!==e.data&&e.data.status?(O.b.success(e.data.message),t.categoryList()):O.b.error(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),O.b.error(e.message))}))}))}},{key:"render",value:function(){var e=this.state,t=e.categoryList,a=e.loading,r=e.modal,n="";return a&&(n=u.a.createElement(A.a,null)),u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,n,u.a.createElement(m.a,{lg:12},u.a.createElement(g.a,{className:"categoryList"},u.a.createElement(f.a,null,u.a.createElement(L,{data:t,toggle:this.toggle,editCategoryAction:this.handleEditCategory,deleteCategoryAction:this.handleDeleteCategory,dataTableLoadingStatus:this.state.loading}))))),u.a.createElement(y.a,{isOpen:r,toggle:this.toggle,className:"category-modal-section"},u.a.createElement(h.a,{toggle:this.toggle},"Category"),u.a.createElement(v.a,{onSubmit:this.submitHandler,noValidate:!0},u.a.createElement(p.a,null,u.a.createElement(w.a,{formErrors:this.state.formErrors}),u.a.createElement(b.a,null,u.a.createElement(E.a,{htmlFor:"category_name"},"Category Name"),u.a.createElement(S.a,{type:"text",placeholder:"Category Name *",id:"category_name",name:"category_name",value:this.state.category_name,onChange:this.changeHandler,required:!0})),u.a.createElement(b.a,null,u.a.createElement(E.a,{htmlFor:"template_status"},"Status"),u.a.createElement(S.a,{type:"select",placeholder:"Status *",id:"status",name:"status",value:this.state.status,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select Status"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive")))),u.a.createElement(j.a,null,u.a.createElement(I.a,{color:"primary",disabled:!this.state.formValid,type:"submit"},"Submit"),u.a.createElement(I.a,{color:"secondary",onClick:this.toggle},"Cancel")))))}}]),a}(l.Component));t.default=T},297:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(307);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(300);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,s=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(i)throw o}}}}},307:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},308:function(e,t,a){"use strict";var r=a(300);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(r=(s=i.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(c){n=!0,o=c}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},312:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),i=a(30),c=a.n(i),l=a(290),u=a.n(l),d=a(291),m={tag:d.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,o=e.color,i=e.body,c=e.inverse,l=e.outline,m=e.tag,g=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),y=Object(d.l)(u()(t,"card",!!c&&"text-white",!!i&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return s.a.createElement(m,Object(r.a)({},f,{className:y,ref:g}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g},327:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a(0),n=a.n(r),o=(a(328),function(e){var t=e.formErrors;return n.a.createElement("div",{className:"col-md-12 col-lg-12"},n.a.createElement("div",{className:"formErrors"},Object.keys(t).map((function(e,a){if(t[e].length>0){var r=e.replace("_"," ");return n.a.createElement("p",{key:a},r," ",t[e])}return""}))))})},328:function(e,t,a){},330:function(e,t,a){"use strict";var r=a(5),n=a(21),o=a(0),s=a.n(o),i=a(30),c=a.n(i),l=a(290),u=a.n(l),d=a(291),m={tag:d.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},g=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,i=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.l)(u()(t,"card-body"),a);return s.a.createElement(i,Object(r.a)({},c,{className:l,ref:o}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g}}]);
//# sourceMappingURL=28.171044ef.chunk.js.map