(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[21],{1119:function(e,t,a){},1207:function(e,t,a){"use strict";a.r(t);var n=a(39),r=a(40),o=a(71),i=a(70),s=a(69),c=a(0),l=a.n(c),u=a(336),d=a(337),f=a(314),m=a(317),b=a(330),p=a(322),h=a(323),g=a(324),v=a(514),y=a(302),M=(a(305),a(47)),j=a(297),Y=a(308),O=a(306),D=a(315),N=a.n(D),E=a(340),z=function(e){var t=new Date;return e.status?new Date(e.endDate).getTime()>=t.getTime()?"Active":"Inactive":e.cancelDate?"Cancelled":"Inactive"},S=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t=[],a=Object(O.a)(this.props.data.entries());try{for(a.s();!(e=a.n()).done;){var n=Object(Y.a)(e.value,2),r=n[0],o=n[1];console.log(r);var i={organizationName:o.organizationName||" ",planName:o.planName||" ",amount:o.amount,startDate:E.a.getDate(o.startDate||" "),endDate:E.a.getDate(o.endDate||" "),subscriberId:o.subscriberId||" ",status:z(o),paymentMethod:o.paymentMethod||"PayPal",action:""};o.organizationName&&t.push(i)}}catch(c){a.e(c)}finally{a.f()}var s={search:!1,viewColumns:!1,filter:!1,searchOpen:!1,print:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}},fixedHeaderOptions:{xAxis:!1,yAxis:!1}};return l.a.createElement(N.a,{data:t,columns:[{label:"Organization Name",name:"organizationName"},{label:"Plan Name",name:"planName"},{label:"Subscription Id",name:"subscriberId"},{label:"Amount",name:"amount"},{label:"Payment Method",name:"paymentMethod"},{label:"Start Date",name:"startDate"},{label:"Expiry Date",name:"endDate"},{label:"Status",name:"status"}],options:s})}}]),a}(c.Component),w=(a(1119),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,n=r.state.filterItem;n[t]=a,r.setState({filterItem:n})},r.state={modal:!1,subscriberList:[],loading:!0,formProccessing:!1,rowIndex:-1,filterItem:{filter_organization:"",custom_search:"",planId:""}},r.filterSubscriberList=r.filterSubscriberList.bind(Object(o.a)(r)),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.subscriberList()}},{key:"subscriberList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";void 0!==t.filter_organization_id&&""!==t.filter_organization_id&&(a+=""!==a?"&organizationAuthId="+t.filter_organization_id:"?organizationAuthId="+t.filter_organization_id),void 0!==t.planId&&""!==t.planId&&(a+=""!==a?"&planId="+t.planId:"?planId="+t.planId),void 0!==t.custom_search&&""!==t.custom_search&&(a+=""!==a?"&organizationName="+t.custom_search:"?organizationName="+t.custom_search),this.setState({loading:!0},(function(){M.a.getAPIWithAccessToken("organization/subscriber-list"+a).then((function(t){if(void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void y.b.error(t.data.message);e.setState({loading:!1,subscriberList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),y.b.error(t.message))}))}))}},{key:"filterSubscriberList",value:function(){var e=this.state.filterItem;this.subscriberList(e)}},{key:"render",value:function(){var e=this.state,t=e.subscriberList,a="";return e.loading&&(a=l.a.createElement(j.a,null)),l.a.createElement("div",{className:"animated fadeIn"},l.a.createElement(u.a,null,a,l.a.createElement(d.a,{lg:12},l.a.createElement(f.a,{className:"oep-card"},l.a.createElement(m.a,{className:"mainHeading"},l.a.createElement("strong",null,"Subscriber List")),l.a.createElement(b.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{md:12},l.a.createElement("div",{className:"search-filter"},l.a.createElement(u.a,null,l.a.createElement(d.a,{md:"3"},l.a.createElement(p.a,null,l.a.createElement(h.a,{htmlFor:"filter_organization_id"},"Search By Email/ Organization Name"),l.a.createElement(g.a,{type:"text",placeholder:"Search By Email/ Name",id:"custom_search",name:"custom_search",value:this.state.filterItem.custom_search,onChange:this.changeFilterHandler}))),l.a.createElement(d.a,{md:"2"},l.a.createElement(p.a,{className:"filter-button-section"},l.a.createElement(h.a,{htmlFor:"filter_organization_id"},"\xa0"),l.a.createElement(v.a,{className:"search-btn",type:"button",onClick:this.filterSubscriberList},"Search")))))),l.a.createElement(d.a,{md:12},l.a.createElement(S,{data:t}))))))))}}]),a}(c.Component));t.default=w},297:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(299);t.a=function(){return r.a.createElement("div",{className:"loaderSection"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},300:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(307);function r(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Object(n.a)(e,t):void 0}}},306:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(300);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw o}}}}},307:function(e,t,a){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,"a",(function(){return n}))},308:function(e,t,a){"use strict";var n=a(300);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}a.d(t,"a",(function(){return r}))},314:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),i=a.n(o),s=a(30),c=a.n(s),l=a(290),u=a.n(l),d=a(291),f={tag:d.p,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.color,s=e.body,c=e.inverse,l=e.outline,f=e.tag,m=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(d.l)(u()(t,"card",!!c&&"text-white",!!s&&"card-body",!!o&&(l?"border":"bg")+"-"+o),a);return i.a.createElement(f,Object(n.a)({},b,{className:p,ref:m}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},317:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),i=a.n(o),s=a(30),c=a.n(s),l=a(290),u=a.n(l),d=a(291),f={tag:d.p,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),c=Object(d.l)(u()(t,"card-header"),a);return i.a.createElement(o,Object(n.a)({},s,{className:c}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},322:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),i=a.n(o),s=a(30),c=a.n(s),l=a(290),u=a.n(l),d=a(291),f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.p,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.row,s=e.disabled,c=e.check,l=e.inline,f=e.tag,m=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(d.l)(u()(t,!!o&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),a);return"fieldset"===f&&(m.disabled=s),i.a.createElement(f,Object(n.a)({},m,{className:b}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},323:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),i=a.n(o),s=a(30),c=a.n(s),l=a(290),u=a.n(l),d=a(291),f=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.p,className:c.a.string,cssModule:c.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:c.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.hidden,s=e.widths,c=e.tag,l=e.check,f=e.size,m=e.for,b=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];s.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var o,i=!n;if(Object(d.j)(r)){var s,c=i?"-":"-"+t+"-";o=h(i,t,r.size),p.push(Object(d.l)(u()(((s={})[o]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s))),a)}else o=h(i,t,r),p.push(o)}}));var g=Object(d.l)(u()(t,!!o&&"sr-only",!!l&&"form-check-label",!!f&&"col-form-label-"+f,p,!!p.length&&"col-form-label"),a);return i.a.createElement(c,Object(n.a)({htmlFor:m},b,{className:g}))};g.propTypes=b,g.defaultProps=p,t.a=g},324:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(303),i=a(9),s=a(0),c=a.n(s),l=a(30),u=a.n(l),d=a(290),f=a.n(d),m=a(291),b={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.p,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,i=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,p=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(o)>-1,v=new RegExp("\\D","g"),y=u||("select"===o||"textarea"===o?o:"input"),M="form-control";b?(M+="-plaintext",y=u||"input"):"file"===o?M+="-file":g&&(M=d?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(m.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var j=Object(m.l)(f()(t,l&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,M),a);return("input"===y||u&&"function"===typeof u)&&(h.type=o),h.children&&!b&&"select"!==o&&"string"===typeof y&&"select"!==y&&(Object(m.s)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(y,Object(n.a)({},h,{ref:p,className:j}))},t}(c.a.Component);p.propTypes=b,p.defaultProps={type:"text"},t.a=p},330:function(e,t,a){"use strict";var n=a(5),r=a(21),o=a(0),i=a.n(o),s=a(30),c=a.n(s),l=a(290),u=a.n(l),d=a(291),f={tag:d.p,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var t=e.className,a=e.cssModule,o=e.innerRef,s=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.l)(u()(t,"card-body"),a);return i.a.createElement(s,Object(n.a)({},c,{className:l,ref:o}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},340:function(e,t,a){"use strict";var n=a(39),r=a(40),o=function(){function e(){Object(n.a)(this,e)}return Object(r.a)(e,[{key:"getDateTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD H:i:s",a="";if(void 0!==e&&""!==e){var n=new Date(e),r=n.getDate();r=r<10?"0"+r:r;var o=n.getFullYear(),i=n.getMonth();i=(i+=1)<10?"0"+i:i;var s=n.getHours();s=s<10?"0"+s:s;var c=n.getMinutes();c=c<10?"0"+c:c;var l=n.getSeconds();l=l<10?"0"+l:l,"YYYY-MM-DD H:i:s"===t?a=o+"-"+i+"-"+r+" "+s+":"+c+":"+l:"DD-MM-YYYY H:i:s"===t?a=r+"-"+i+"-"+o+" "+s+":"+c+":"+l:"DD-MM-YYYY H:i"===t?a=r+"-"+i+"-"+o+" "+s+":"+c:"YYYY/MM/DD H:i:s"===t?a=o+"/"+i+"/"+r+" "+s+":"+c+":"+l:"MM/DD/YYYY H:i:s"===t?a=i+"/"+r+"/"+o+" "+s+":"+c+":"+l:"DD/MM/YYYY H:i:s"===t&&(a=r+"/"+i+"/"+o+" "+s+":"+c+":"+l)}return a}},{key:"getDate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY",a="";if(void 0!==e&&""!==e){var n=new Date(e),r=n.getDate();r=r<10?"0"+r:r;var o=n.getFullYear(),i=n.getMonth();i=(i+=1)<10?"0"+i:i,"YYYY-MM-DD"===t?a=o+"-"+i+"-"+r:"DD-MM-YYYY"===t?a=r+"-"+i+"-"+o:"YYYY/MM/DD"===t?a=o+"/"+i+"/"+r:"MM/DD/YYYY"===t?a=i+"/"+r+"/"+o:"DD/MM/YYYY"===t&&(a=r+"/"+i+"/"+o)}return a}},{key:"convertTime",value:function(e){if(void 0===e||e<0)return"0 seconds";var t=Math.ceil(e),a=Math.floor(t/3600)%24;t-=3600*a;var n=Math.floor(t/60)%60,r=(t-=60*n)%60;return a>0&&n>0&&r>0?"".concat(a," hours ").concat(n," minutes ").concat(r," seconds"):n>0&&r>0?"".concat(n," minutes ").concat(r," seconds"):r>0?"".concat(r," seconds"):"0 seconds"}},{key:"getcurrentDate",value:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate();return e.getFullYear()+"_"+((""+t).length<2?"0":"")+t+"_"+((""+a).length<2?"0":"")+a}}]),e}();t.a=new o}}]);
//# sourceMappingURL=21.06af2d74.chunk.js.map