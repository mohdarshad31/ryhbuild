(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[37],{1136:function(e,t,a){},1218:function(e,t,a){"use strict";a.r(t);var r=a(312),n=a(39),s=a(40),o=a(71),i=a(70),l=a(69),c=a(0),d=a.n(c),u=a(336),m=a(337),g=a(314),f=a(317),h=a(514),v=a(322),b=a(323),p=a(324),y=a(634),E=a(1151),N=a(361),S=a(513),I=a(831),w=a(302),k=(a(305),a(47)),j=a(297),C=a(308),O=a(306),A=a(315),L=a.n(A),M=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editCategoryItem",value:function(e){this.props.editCategoryAction(e)}},{key:"deleteCategoryItem",value:function(e){this.props.deleteCategoryAction(e)}},{key:"render",value:function(){var e,t=this,a=[{label:"Name",name:"name"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,r){var n=a.rowIndex;return d.a.createElement("p",null,d.a.createElement("button",{className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editCategoryItem(n)}},d.a.createElement("i",{className:"fa fa-eye"})," "),d.a.createElement("button",{className:"btn-delete",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this degree?")&&t.deleteCategoryItem(n)}},d.a.createElement("i",{className:"fa fa-trash"})))}}}],r=[],n=Object(O.a)(this.props.data.entries());try{for(n.s();!(e=n.n()).done;){var s=Object(C.a)(e.value,2),o=s[0],i=s[1];console.log(o);var l={name:i.degreeName,status:k.a.getStatus(i.status),action:""};r.push(l)}}catch(u){n.e(u)}finally{n.f()}var c={search:!1,filter:!1,searchOpen:!1,print:!1,viewColumns:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}}};return d.a.createElement(L.a,{data:r,columns:a,options:c})}}]),a}(c.Component),x=(a(1136),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value;s.setState(Object(r.a)({},t,a))},s.toggle=function(){s.setState({modal:!s.state.modal,degreeName:"",status:"",errors:{},rowIndex:-1,editMode:!0})},s.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,r=s.state.filterItem;r[t]=a,s.setState({filterItem:r})},s.state={modal:!1,degreeName:"",degreeList:[],loading:!0,rowIndex:-1,status:"",errors:{degreeName:"",status:"",error:""},filterItem:{},editMode:!0,viewInfoData:{}},s.handleEditCategory=s.handleEditCategory.bind(Object(o.a)(s)),s.submitHandler=s.submitHandler.bind(Object(o.a)(s)),s.handleDeleteCategory=s.handleDeleteCategory.bind(Object(o.a)(s)),s.filterItemList=s.filterItemList.bind(Object(o.a)(s)),s.resetSearchFilter=s.resetSearchFilter.bind(Object(o.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.degreeList()}},{key:"degreeList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";if(a="?isSuperSpecialization="+!1,void 0!==t.keyword&&""!==t.keyword&&(a+=""!==a?"&keyword="+t.keyword:"?keyword="+t.keyword),void 0!==t.status&&""!==t.status){var r=1;"Inactive"===t.status?r=0:"Pending"===t.status?r=2:"Under Negotiation"===t.status&&(r=3),a+=""!==a?"&status="+r:"?status="+r}this.setState({loading:!0},(function(){k.a.getAPIWithAccessToken("degree"+a).then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void w.b.error(t.data.message);e.setState({loading:!1,degreeList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),w.b.error(t.message))}))}))}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),this.state.rowIndex>-1&&!window.confirm("Are you sure to update?"))return!1;if(e.target.className+=" was-validated",!this.validateForm())return!1;var a={};a.degreeName=this.state.degreeName;var r=this.state.status,n=1;"Inactive"===r?n=0:"Pending"===r?n=2:"Under Negotiation"===r&&(n=3),a.status=n,this.setState({loading:!0},(function(){if(t.state.rowIndex>-1){var e=t.state.degreeList[t.state.rowIndex].degreeId;a.degreeId=e,k.a.putAPIWithAccessToken("degree",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return a.degreeName=e.data.message,void t.setState({loading:!1,errors:a})}t.state.degreeList[t.state.rowIndex]=e.data.data,t.setState({modal:!1,rowIndex:"",loading:!1,errors:{degreeName:"",status:""}}),w.b.success(e.data.message),t.degreeList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),w.b.error(e.message))}))}else k.a.postAPIWithAccessToken("degree",a).then((function(e){if(void 0===e.data.data||!e.data.status){var a={};return a.degreeName=e.data.message,void t.setState({loading:!1,errors:a})}t.setState({modal:!1,loading:!1}),w.b.success(e.data.message),t.degreeList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),w.b.error(e.message))}))}))}},{key:"validateForm",value:function(){var e=!0,t=this.state,a={};return void 0!==t.degreeName&&""!==t.degreeName.trim()||(e=!1,a.degreeName="Degree name field required"),void 0!==t.status&&""!==t.status.trim()||(e=!1,a.status="Status field required"),this.setState({errors:a}),e}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditCategory",value:function(e){var t=this.state.degreeList[e],a="Active";0===t.status?a="Active":2===t.status?a="Pending":3===t.status&&(a="Under Negotiation"),this.setState({modal:!0,editMode:!1,viewInfoData:t,status:a,degreeName:t.degreeName,remark:t.remark,rowIndex:e,formValid:!0,degreeName_valid:!0,categoryImageUrl:t.imagUrl})}},{key:"handleDeleteCategory",value:function(e){var t=this,a=this.state.degreeList[e];this.setState({loading:!0},(function(){k.a.deleteAPIWithAccessToken("degree/"+a.degreeId).then((function(e){t.setState({loading:!1}),void 0!==e.data&&e.data.status?(w.b.success(e.data.message),t.degreeList()):w.b.error(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),w.b.error(e.message))}))}))}},{key:"filterItemList",value:function(){var e=this.state.filterItem;this.degreeList(e)}},{key:"resetSearchFilter",value:function(){this.setState({filterItem:{keyword:"",status:""}}),this.degreeList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.degreeList,r=t.loading,n=t.modal,s=t.errors,o="";return r&&(o=d.a.createElement(j.a,null)),d.a.createElement("div",{className:"animated fadeIn"},d.a.createElement(u.a,null,o,d.a.createElement(m.a,{lg:12},d.a.createElement(g.a,{className:"oep-card "},d.a.createElement(f.a,{className:"mainHeading"},d.a.createElement("strong",null,"Degree List"),d.a.createElement(h.a,{color:"",className:"categoryAdd",type:"button",onClick:this.toggle},d.a.createElement("i",{className:"fa fa-plus"})," Add Degree")),d.a.createElement(u.a,null,d.a.createElement(m.a,{md:12},d.a.createElement("div",{className:"search-filter"},d.a.createElement(u.a,null,d.a.createElement(m.a,{md:"3"},d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"filter_doctor_id"},"Search By Name"),d.a.createElement(p.a,{type:"text",placeholder:"Search By Name",id:"keyword",name:"keyword",value:this.state.filterItem.keyword,onChange:this.changeFilterHandler}))),d.a.createElement(m.a,{md:"3"},d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"filter_doctor_id"},"Search By Status"),d.a.createElement(p.a,{type:"select",placeholder:"Search By Status",id:"status",name:"status",value:this.state.filterItem.status,onChange:this.changeFilterHandler},d.a.createElement("option",{value:""},"Select"),d.a.createElement("option",{value:"Active"},"Active"),d.a.createElement("option",{value:"Inactive"},"Inactive")))),d.a.createElement(m.a,{md:"3"},d.a.createElement(v.a,{className:"filter-button-section"},d.a.createElement(h.a,{className:"search-btn",type:"button",onClick:this.filterItemList},"Search"),d.a.createElement(h.a,{className:"search-btn",id:"resetButton",type:"button",onClick:this.resetSearchFilter},"Reset")))))),d.a.createElement(m.a,{lg:12},d.a.createElement(M,{data:a,toggle:this.toggle,editCategoryAction:this.handleEditCategory,deleteCategoryAction:this.handleDeleteCategory,dataTableLoadingStatus:this.state.loading})))))),d.a.createElement(y.a,{isOpen:n,toggle:this.toggle,className:"category-modal-section"},d.a.createElement(E.a,{toggle:this.toggle,className:"viewModalHead"},"Degree ",!this.state.editMode&&this.state.rowIndex>-1&&d.a.createElement("label",{className:"view-icon pull-right",onClick:function(){e.setState({editMode:!0})}},d.a.createElement("i",{className:"fa fa-pencil"})),this.state.editMode&&this.state.rowIndex>-1&&d.a.createElement("label",{className:"view-icon pull-right",onClick:function(){e.setState({editMode:!1})}},d.a.createElement("i",{className:"fa fa-eye"}))),this.state.editMode&&d.a.createElement(N.a,{onSubmit:this.submitHandler,noValidate:!0},d.a.createElement(S.a,null,d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"degreeName"},"Degree Name"),d.a.createElement(p.a,{type:"text",placeholder:"Degree Name *",invalid:void 0!==s.degreeName&&""!==s.degreeName,id:"degreeName",name:"degreeName",value:this.state.degreeName,onChange:this.changeHandler,required:!0}),d.a.createElement("div",{className:"invalid-feedback"},s.degreeName)),d.a.createElement(v.a,null,d.a.createElement(b.a,{htmlFor:"template_status"},"Status"),d.a.createElement(p.a,{type:"select",placeholder:"Status *",id:"status",invalid:void 0!==s.status&&""!==s.status,name:"status",value:this.state.status,onChange:this.changeHandler,required:!0},d.a.createElement("option",{value:""},"Select Status"),d.a.createElement("option",{value:"Active"},"Active"),d.a.createElement("option",{value:"Inactive"},"Inactive")),d.a.createElement("div",{className:"invalid-feedback"},s.status))),d.a.createElement(I.a,null,d.a.createElement(h.a,{color:"primary",disabled:this.state.loading,type:"submit"},"Submit"),d.a.createElement(h.a,{color:"secondary",onClick:this.toggle},"Cancel"))),!this.state.editMode&&d.a.createElement("div",{className:"viewInfo"},d.a.createElement(S.a,null,d.a.createElement(u.a,null,d.a.createElement(v.a,{className:"col-md-6"},d.a.createElement(b.a,{htmlFor:"sponsorId"},"Degree Name "),d.a.createElement("p",null,this.state.viewInfoData.degreeName)),d.a.createElement(v.a,{className:"col-md-6"},d.a.createElement(b.a,{htmlFor:"template_status"},"Status"),d.a.createElement("p",null,k.a.getStatus(this.state.viewInfoData.status))))))))}}]),a}(c.Component));t.default=x},297:function(e,t,a){"use strict";var r=a(0),n=a.n(r);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(307);function n(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(r.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(300);function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}}},307:function(e,t,a){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a.d(t,"a",(function(){return r}))},308:function(e,t,a){"use strict";var r=a(300);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(l){n=!0,s=l}finally{try{r||null==i.return||i.return()}finally{if(n)throw s}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return n}))},312:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var r=a(5),n=a(21),s=a(0),o=a.n(s),i=a(30),l=a.n(i),c=a(290),d=a.n(c),u=a(291),m={tag:u.p,inverse:l.a.bool,color:l.a.string,body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},g=function(e){var t=e.className,a=e.cssModule,s=e.color,i=e.body,l=e.inverse,c=e.outline,m=e.tag,g=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(u.l)(d()(t,"card",!!l&&"text-white",!!i&&"card-body",!!s&&(c?"border":"bg")+"-"+s),a);return o.a.createElement(m,Object(r.a)({},f,{className:h,ref:g}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g},317:function(e,t,a){"use strict";var r=a(5),n=a(21),s=a(0),o=a.n(s),i=a(30),l=a.n(i),c=a(290),d=a.n(c),u=a(291),m={tag:u.p,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=Object(n.a)(e,["className","cssModule","tag"]),l=Object(u.l)(d()(t,"card-header"),a);return o.a.createElement(s,Object(r.a)({},i,{className:l}))};g.propTypes=m,g.defaultProps={tag:"div"},t.a=g}}]);
//# sourceMappingURL=37.b9e2aa0f.chunk.js.map