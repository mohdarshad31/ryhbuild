(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[24],{1203:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(40),o=a(72),c=a(70),s=a(69),i=a(0),l=a.n(i),u=a(336),d=a(337),m=a(314),f=a(315),p=a(514),b=a(330),g=a(318),h=a(319),v=a(303),y=(a(305),a(47)),Y=a(298),E=a(309),M=a(306),N=a(73),j=a(320),O=a.n(j),k=a(340),D=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"deleteInspectionItem",value:function(e){this.props.deleteInspectionAction(e)}},{key:"render",value:function(){var e,t=this,a=[],n=this.props.inspectionInfo,r=Object(M.a)(this.props.data.entries());try{for(r.s();!(e=r.n()).done;){var o=Object(E.a)(e.value,2),c=o[0],s=o[1];console.log(c);var i={inspectionName:n.inspectionName,organizationName:n.organizationName,employeeName:n.employeeFirstName+" "+n.employeeLastName,score:"".concat((100*s.score).toFixed(2),"%"),failedItem:s.wrongQuestion,templateName:n.templateName||" ",date:k.a.getDate(s.createdAt),action:""};a.push(i)}}catch(m){r.e(m)}finally{r.f()}var u=[{label:"Inspection",name:"inspectionName"},{label:"Employee",name:"employeeName"},{label:"Score",name:"score"},{label:"Failed Item",name:"failedItem"},{label:"Date",name:"date"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,n){var r=a.rowIndex,o=t.props.data[r];return l.a.createElement("p",null,l.a.createElement(N.Link,{to:"/admin/manage-inspection/inspection/".concat(o.inspectionId,"/").concat(o._id),className:"btn-view",disabled:t.state.buttonProcessing},l.a.createElement("i",{className:"fa fa-eye"})," "),l.a.createElement("a",{href:"#!",className:"btn-delete",disabled:t.state.buttonProcessing},l.a.createElement("i",{className:"fa fa-trash"})))}}}],d={search:!1,viewColumns:!1,filter:!1,searchOpen:!1,print:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}},fixedHeaderOptions:{xAxis:!1,yAxis:!1}};return l.a.createElement(O.a,{data:a,columns:u,options:d})}}]),a}(i.Component),w=(a(447),function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={modal:!1,inspectionFeedbackList:[],inspectionInfo:{},loading:!0},r.backButtonPrevious=r.backButtonPrevious.bind(Object(o.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params;void 0!==e.inspectionId&&""!==e.inspectionId?this.inspectionFeedbackList(e.inspectionId):(v.b.error("Some thing went wrong!"),this.props.history.push("/admin/inspection"))}},{key:"inspectionFeedbackList",value:function(e){var t=this;this.setState({loading:!0},(function(){y.a.getAPIWithAccessToken("inspection/feedback/"+e).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void v.b.error(e.data.message);var a=e.data.data,n=a.inspectionFeedBack;delete a.inspectionFeedBack;var r=a;t.setState({loading:!1,inspectionFeedbackList:n,inspectionInfo:r})})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),v.b.error(e.message))}))}))}},{key:"backButtonPrevious",value:function(){this.props.history.push("/admin/manage-inspection/inspection/")}},{key:"render",value:function(){var e=this.state,t=e.inspectionFeedbackList,a=e.loading,n=e.inspectionInfo,r="";return a&&(r=l.a.createElement(Y.a,null)),l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(u.a,null,r,l.a.createElement(d.a,{lg:12},l.a.createElement(m.a,null,l.a.createElement(f.a,{className:"mainHeading"},l.a.createElement("strong",null,"Feedback")," ",l.a.createElement(p.a,{color:"",className:"categoryAdd",type:"button",onClick:this.backButtonPrevious},l.a.createElement("i",{className:"fa fa-arrow-left"})," Back")),l.a.createElement(b.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{md:12},l.a.createElement(u.a,null,l.a.createElement(d.a,{md:3},l.a.createElement(g.a,null,l.a.createElement(h.a,{htmlFor:"organizationId"},l.a.createElement("strong",null,"Inspection")),l.a.createElement("p",null,n.inspectionName?n.inspectionName:""))),l.a.createElement(d.a,{lg:3},l.a.createElement(g.a,null,l.a.createElement(h.a,{htmlFor:"employeeId"},l.a.createElement("strong",null,"Organization")," "),l.a.createElement("p",null,n.organizationName?n.organizationName:""))),l.a.createElement(d.a,{lg:3},l.a.createElement(g.a,null,l.a.createElement(h.a,{htmlFor:"templateId"},l.a.createElement("strong",null,"Employee")),l.a.createElement("p",null,n.employeeFirstName?n.employeeFirstName:""," ",n.employeeLastName?n.employeeLastName:""))),l.a.createElement(d.a,{lg:3},l.a.createElement(g.a,null,l.a.createElement(h.a,{htmlFor:"templateId"},l.a.createElement("strong",null,"Template")),l.a.createElement("p",null,n.templateName?n.templateName:""))))),l.a.createElement(d.a,{md:12},l.a.createElement(D,{data:t,inspectionInfo:n,dataTableLoadingStatus:this.state.loading}))))))))}}]),a}(i.Component));t.default=w},298:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(299);t.a=function(){return r.a.createElement("div",{className:"loaderSection"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(307);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(300);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw o}}}}},307:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},309:function(e,t,a){"use strict";var n=a(300);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(n=(c=s.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),c=a.n(o),s=a(30),i=a.n(s),l=a(290),u=a.n(l),d=a(291),m={tag:d.p,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,i=e.inverse,l=e.outline,m=e.tag,f=e.innerRef,p=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(d.l)(u()(t,"card",!!i&&"text-white",!!s&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return c.a.createElement(m,Object(n.a)({},p,{className:b,ref:f}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},315:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),c=a.n(o),s=a(30),i=a.n(s),l=a(290),u=a.n(l),d=a(291),m={tag:d.p,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),i=Object(d.l)(u()(t,"card-header"),a);return c.a.createElement(o,Object(n.a)({},s,{className:i}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},318:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),c=a.n(o),s=a(30),i=a.n(s),l=a(290),u=a.n(l),d=a(291),m={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:d.p,className:i.a.string,cssModule:i.a.object},f=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,i=e.check,l=e.inline,m=e.tag,f=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(d.l)(u()(t,!!o&&"row",i?"form-check":"form-group",!(!i||!l)&&"form-check-inline",!(!i||!s)&&"disabled"),a);return"fieldset"===m&&(f.disabled=s),c.a.createElement(m,Object(n.a)({},f,{className:p}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},319:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),c=a.n(o),s=a(30),i=a.n(s),l=a(290),u=a.n(l),d=a(291),m=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.string,i.a.number,i.a.shape({size:m,order:m,offset:m})]),p={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:d.p,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,o=e.hidden,s=e.widths,i=e.tag,l=e.check,m=e.size,f=e.for,p=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];s.forEach((function(t,n){var r=e[t];if(delete p[t],r||""===r){var o,c=!n;if(Object(d.j)(r)){var s,i=c?"-":"-"+t+"-";o=g(c,t,r.size),b.push(Object(d.l)(u()(((s={})[o]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s))),a)}else o=g(c,t,r),b.push(o)}}));var h=Object(d.l)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!m&&"col-form-label-"+m,b,!!b.length&&"col-form-label"),a);return c.a.createElement(i,Object(n.a)({htmlFor:f},p,{className:h}))};h.propTypes=p,h.defaultProps=b,t.a=h},330:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),c=a.n(o),s=a(30),i=a.n(s),l=a(290),u=a.n(l),d=a(291),m={tag:d.p,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},f=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,i=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.l)(u()(t,"card-body"),a);return c.a.createElement(s,Object(n.a)({},i,{className:l,ref:o}))};f.propTypes=m,f.defaultProps={tag:"div"},t.a=f},340:function(e,t,a){"use strict";var n=a(39),r=a(40),o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getDateTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD H:i:s",a="";if(void 0!==e&&""!==e){var n=new Date(e),r=n.getDate();r=r<10?"0"+r:r;var o=n.getFullYear(),c=n.getMonth();c=(c+=1)<10?"0"+c:c;var s=n.getHours();s=s<10?"0"+s:s;var i=n.getMinutes();i=i<10?"0"+i:i;var l=n.getSeconds();l=l<10?"0"+l:l,"YYYY-MM-DD H:i:s"===t?a=o+"-"+c+"-"+r+" "+s+":"+i+":"+l:"DD-MM-YYYY H:i:s"===t?a=r+"-"+c+"-"+o+" "+s+":"+i+":"+l:"DD-MM-YYYY H:i"===t?a=r+"-"+c+"-"+o+" "+s+":"+i:"YYYY/MM/DD H:i:s"===t?a=o+"/"+c+"/"+r+" "+s+":"+i+":"+l:"MM/DD/YYYY H:i:s"===t?a=c+"/"+r+"/"+o+" "+s+":"+i+":"+l:"DD/MM/YYYY H:i:s"===t&&(a=r+"/"+c+"/"+o+" "+s+":"+i+":"+l)}return a}},{key:"getDate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY",a="";if(void 0!==e&&""!==e){var n=new Date(e),r=n.getDate();r=r<10?"0"+r:r;var o=n.getFullYear(),c=n.getMonth();c=(c+=1)<10?"0"+c:c,"YYYY-MM-DD"===t?a=o+"-"+c+"-"+r:"DD-MM-YYYY"===t?a=r+"-"+c+"-"+o:"YYYY/MM/DD"===t?a=o+"/"+c+"/"+r:"MM/DD/YYYY"===t?a=c+"/"+r+"/"+o:"DD/MM/YYYY"===t&&(a=r+"/"+c+"/"+o)}return a}},{key:"convertTime",value:function(e){if(void 0===e||e<0)return"0 seconds";var t=Math.ceil(e),a=Math.floor(t/3600)%24;t-=3600*a;var n=Math.floor(t/60)%60,r=(t-=60*n)%60;return a>0&&n>0&&r>0?"".concat(a," hours ").concat(n," minutes ").concat(r," seconds"):n>0&&r>0?"".concat(n," minutes ").concat(r," seconds"):r>0?"".concat(r," seconds"):"0 seconds"}},{key:"getcurrentDate",value:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate();return e.getFullYear()+"_"+((""+t).length<2?"0":"")+t+"_"+((""+a).length<2?"0":"")+a}}]),e}();t.a=new o},447:function(e,t,a){}}]);
//# sourceMappingURL=24.30e02cce.chunk.js.map