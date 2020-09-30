(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[34],{1200:function(e,t,a){"use strict";a.r(t);var s=a(39),n=a(40),o=a(70),r=a(69),l=a(0),c=a.n(l),i=(a(305),a(71)),d=a(336),u=a(337),m=a(314),p=a(317),g=a(330),f=a(322),b=a(323),h=a(324),v=a(507),y=a(302),j=a(47),N=a(297),E=a(5),O=a(21),I=a(30),C=a.n(I),T=a(290),k=a.n(T),M=a(291),S={tag:M.p,className:C.a.string,cssModule:C.a.object},w=function(e){var t=e.className,a=e.cssModule,s=e.tag,n=Object(O.a)(e,["className","cssModule","tag"]),o=Object(M.l)(k()(t,"card-title"),a);return c.a.createElement(s,Object(E.a)({},n,{className:o}))};w.propTypes=S,w.defaultProps={tag:"div"};var z=w,L={tag:M.p,className:C.a.string,cssModule:C.a.object},x=function(e){var t=e.className,a=e.cssModule,s=e.tag,n=Object(O.a)(e,["className","cssModule","tag"]),o=Object(M.l)(k()(t,"card-text"),a);return c.a.createElement(s,Object(E.a)({},n,{className:o}))};x.propTypes=L,x.defaultProps={tag:"p"};var P=x,R=a(73),A=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editTemplateFile",value:function(e){this.props.editTemplateFile(e)}},{key:"deleteTemplate",value:function(e){this.props.deleteTemplate(e)}},{key:"render",value:function(){var e=this;return c.a.createElement(d.a,null,this.props.data.map((function(t,a){return c.a.createElement(u.a,{lg:3,key:a},c.a.createElement(m.a,{className:"cardArea"},c.a.createElement(z,{className:"oep-title"},c.a.createElement("b",null,"Template :")," ",t.templateName),"free"!==t.type.toLowerCase()?c.a.createElement(P,{className:"oep-title"},c.a.createElement("b",null,"Organization Name :")," ",t.createdBy):"",c.a.createElement(P,{className:"oep-title"},c.a.createElement("b",null,"Category :")," ",t.categoryName),c.a.createElement(P,{className:"oep-title"},c.a.createElement("b",null,"Status :")," ",t.status?"Active":"Inactive"),c.a.createElement("div",{className:"card-footer-section"},t.isCreated?c.a.createElement(R.Link,{to:"/common/template/".concat(t.templateId),target:"_blank",className:"btn-preview"},"Preview "):"",t.isUploaded&&""!==t.uploadedFileName&&!t.isCreated?c.a.createElement("a",{href:"".concat(e.props.apiUrl,"template/").concat(t.uploadedFileName),target:"_blank",rel:"noopener noreferrer",className:"btn-Uploaded"},"View Uploaded Template"):"",c.a.createElement(R.Link,{to:"/admin/manage-template/create-template/".concat(t.templateId),className:"btn-Edit"},t.isCreated?"Edit":"Create Template"," "),t.isCreated?c.a.createElement(R.Link,{to:"/admin/manage-template/create-template/".concat(t.templateId,"?action=copy"),className:"btn-Copy"},"Copy "):"","free"===t.type.toLowerCase()?c.a.createElement("button",{className:"btn-Delete",onClick:function(){window.confirm("Are you sure you wish to delete this template? All related inspection to this template will be removed.")&&e.deleteTemplate(a)}},"Delete"):c.a.createElement(c.a.Fragment,null))))})))}}]),a}(l.Component);a(752);function F(e){var t=e.categoryItem;return c.a.createElement("option",{value:t.categoryId},t.categoryName)}var D=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeCategoryHandle=function(e){var t=e.target.name,a=e.target.value,s=n.state.filterItem;s[t]=a,n.setState({filterItem:s})},n.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,s=n.state.filterItem;s[t]=a,n.setState({filterItem:s})},n.state={loading:!0,displayContentCount:10,displayContentSize:10,templateList:[],subCategoryList:[],categoryList:[],filterItem:{organizationId:"",categoryId:"",subCategoryId:""}},n.filterTemplateList=n.filterTemplateList.bind(Object(i.a)(n)),n.loadMoreContent=n.loadMoreContent.bind(Object(i.a)(n)),n.deleteTemplate=n.deleteTemplate.bind(Object(i.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.templateList(),this.categoryList()}},{key:"templateList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";a+="?owntemplate=free",void 0!==t.categoryId&&""!==t.categoryId&&(a+=""===a?"?categoryId="+t.categoryId:"&categoryId="+t.categoryId),void 0!==t.subCategoryId&&""!==t.subCategoryId&&(a+=""===a?"?subCategoryId="+t.subCategoryId:"&subCategoryId="+t.subCategoryId),void 0!==t.organizationId&&""!==t.organizationId&&(a+=""===a?"?organizationId="+t.organizationId:"&organizationId="+t.organizationId),this.setState({loading:!0},(function(){j.a.getAPIWithAccessToken("template"+a).then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void y.b.error(t.data.message);e.setState({loading:!1,templateList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),y.b.error(t.message))}))}))}},{key:"categoryList",value:function(){var e=this;j.a.getAPIWithAccessToken("template/category").then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void y.b.error(t.data.message);e.setState({categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):y.b.error(t.message)}))}},{key:"getSubCategoryList",value:function(e){var t=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],s=this.state.filterItem;if(""===e)return s.subCategoryId="",void this.setState({filterItem:s,subCategoryList:[]});this.setState({loading:!0},(function(){j.a.getAPIWithAccessToken("category/"+e).then((function(e){if(console.log(e),void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void y.b.error(e.data.message);a&&(s.subCategoryId=""),t.setState({subCategoryList:e.data.data,filterItem:s,loading:!1})})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),y.b.error(e.message))}))}))}},{key:"filterTemplateList",value:function(){var e=this.state.filterItem;this.setState({displayContentCount:this.state.displayContentSize}),this.templateList(e)}},{key:"loadMoreContent",value:function(){var e=this.state.templateList.length,t=this.state.displayContentCount+this.state.displayContentSize;e<=t&&(t=e),this.setState({displayContentCount:t})}},{key:"deleteTemplate",value:function(e){var t=this,a=this.state.templateList[e];this.setState({loading:!0},(function(){j.a.deleteAPIWithAccessToken("template/".concat(a.templateId)).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void y.b.error(e.data.message);t.setState({modal:!1,loading:!1}),y.b.success(e.data.message),t.templateList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):t.setState({loading:!1}),y.b.error(e.message)}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.templateList,s=t.loading,n=t.categoryList,o=t.displayContentCount,r="",l=[];return a.length>=o?l=a.slice(0,o):a.length>0&&(l=a.slice(0,a.length)),s&&(r=c.a.createElement(N.a,null)),c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(d.a,null,r,c.a.createElement(u.a,{lg:12},c.a.createElement(m.a,{className:"oep-card"},c.a.createElement(p.a,{className:"mainHeading"},c.a.createElement("strong",null,"Template Library")),c.a.createElement(g.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,{md:12},c.a.createElement("div",{className:"search-filter"},c.a.createElement(d.a,null,c.a.createElement(u.a,{md:"6",lg:"4"},c.a.createElement(f.a,null,c.a.createElement(b.a,{htmlFor:"categoryId"},"Category"),c.a.createElement(h.a,{type:"select",placeholder:"category Name *",id:"categoryId",name:"categoryId",value:this.state.filterItem.categoryId,onChange:this.changeCategoryHandle},c.a.createElement("option",{value:""},"Select Category"),n.map((function(t,a){return c.a.createElement(F,{key:a,categoryItem:t,selectedCategory:e.state.filterItem.categoryId})}))))),c.a.createElement(u.a,{md:"6",lg:"3"},c.a.createElement(f.a,{className:"filter-button-section"},c.a.createElement(b.a,{htmlFor:"searchButton"},"\xa0"),c.a.createElement(v.a,{color:"success",className:"search-btn",id:"searchButton",type:"button",onClick:this.filterTemplateList}," Search")))))),c.a.createElement(u.a,{md:12},c.a.createElement(A,{data:l,deleteTemplate:this.deleteTemplate,editTemplateFile:"",apiUrl:j.a.getAPIUrl(),dataTableLoadingStatus:this.state.loading})),a.length>0&&a.length>o?c.a.createElement(u.a,{md:12},c.a.createElement("div",{className:"load-more-section"},c.a.createElement("button",{className:"btn-Edit",onClick:this.loadMoreContent},"Load More"))):""))))))}}]),a}(l.Component),H=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).toggle=function(e){n.state.activeTab!==e&&n.setState({activeTab:e})},n.state={loading:!0,activeTab:"1",subscriptionDetails:{}},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return c.a.createElement(D,{history:this.props.history})}}]),a}(l.Component);t.default=H},297:function(e,t,a){"use strict";var s=a(0),n=a.n(s);a(299);t.a=function(){return n.a.createElement("div",{className:"loaderSection"},n.a.createElement("div",{className:"spinner-border text-primary",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},314:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m={tag:u.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.color,l=e.body,c=e.inverse,i=e.outline,m=e.tag,p=e.innerRef,g=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(u.l)(d()(t,"card",!!c&&"text-white",!!l&&"card-body",!!o&&(i?"border":"bg")+"-"+o),a);return r.a.createElement(m,Object(s.a)({},g,{className:f,ref:p}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},317:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m={tag:u.p,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),c=Object(u.l)(d()(t,"card-header"),a);return r.a.createElement(o,Object(s.a)({},l,{className:c}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},322:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.p,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.row,l=e.disabled,c=e.check,i=e.inline,m=e.tag,p=Object(n.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),g=Object(u.l)(d()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!l)&&"disabled"),a);return"fieldset"===m&&(p.disabled=l),r.a.createElement(m,Object(s.a)({},p,{className:g}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},323:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),g={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.p,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},f={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.hidden,l=e.widths,c=e.tag,i=e.check,m=e.size,p=e.for,g=Object(n.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),f=[];l.forEach((function(t,s){var n=e[t];if(delete g[t],n||""===n){var o,r=!s;if(Object(u.j)(n)){var l,c=r?"-":"-"+t+"-";o=b(r,t,n.size),f.push(Object(u.l)(d()(((l={})[o]=n.size||""===n.size,l["order"+c+n.order]=n.order||0===n.order,l["offset"+c+n.offset]=n.offset||0===n.offset,l))),a)}else o=b(r,t,n),f.push(o)}}));var h=Object(u.l)(d()(t,!!o&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,f,!!f.length&&"col-form-label"),a);return r.a.createElement(c,Object(s.a)({htmlFor:p},g,{className:h}))};h.propTypes=g,h.defaultProps=f,t.a=h},324:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(303),r=a(9),l=a(0),c=a.n(l),i=a(30),d=a.n(i),u=a(290),m=a.n(u),p=a(291),g={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.p,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,r=e.bsSize,l=e.valid,i=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,f=e.innerRef,b=Object(n.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=d||("select"===o||"textarea"===o?o:"input"),j="form-control";g?(j+="-plaintext",y=d||"input"):"file"===o?j+="-file":h&&(j=u?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(p.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var N=Object(p.l)(m()(t,i&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===y||d&&"function"===typeof d)&&(b.type=o),b.children&&!g&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(p.s)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(y,Object(s.a)({},b,{ref:f,className:N}))},t}(c.a.Component);f.propTypes=g,f.defaultProps={type:"text"},t.a=f},330:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m={tag:u.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,l=e.tag,c=Object(n.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.l)(d()(t,"card-body"),a);return r.a.createElement(l,Object(s.a)({},c,{className:i,ref:o}))};p.propTypes=m,p.defaultProps={tag:"div"},t.a=p},336:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m=c.a.oneOfType([c.a.number,c.a.string]),p={tag:u.p,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},g={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,l=e.tag,c=e.form,i=e.widths,m=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(t,a){var s=e[t];if(delete m[t],s){var n=!a;p.push(n?"row-cols-"+s:"row-cols-"+t+"-"+s)}}));var g=Object(u.l)(d()(t,o?"no-gutters":null,c?"form-row":"row",p),a);return r.a.createElement(l,Object(s.a)({},m,{className:g}))};f.propTypes=p,f.defaultProps=g,t.a=f},337:function(e,t,a){"use strict";var s=a(5),n=a(21),o=a(0),r=a.n(o),l=a(30),c=a.n(l),i=a(290),d=a.n(i),u=a(291),m=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:m,offset:m})]),g={tag:u.p,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.widths,l=e.tag,c=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(t,s){var n=e[t];if(delete c[t],n||""===n){var o=!s;if(Object(u.j)(n)){var r,l=o?"-":"-"+t+"-",m=b(o,t,n.size);i.push(Object(u.l)(d()(((r={})[m]=n.size||""===n.size,r["order"+l+n.order]=n.order||0===n.order,r["offset"+l+n.offset]=n.offset||0===n.offset,r)),a))}else{var p=b(o,t,n);i.push(p)}}})),i.length||i.push("col");var m=Object(u.l)(d()(t,i),a);return r.a.createElement(l,Object(s.a)({},c,{className:m}))};h.propTypes=g,h.defaultProps=f,t.a=h},752:function(e,t,a){}}]);
//# sourceMappingURL=34.45136353.chunk.js.map