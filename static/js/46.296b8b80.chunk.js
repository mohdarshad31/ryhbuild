(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[46],{1132:function(e,a,t){},1189:function(e,a,t){"use strict";t.r(a);var s=t(39),l=t(40),n=t(70),c=t(69),r=t(0),i=t.n(r),o=t(337),m=t(303),d=t(73),u=(t(305),t(47)),f=t(298),p=(t(1132),function(e){Object(n.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).scrollToTop=function(){return window.scrollTo(0,0)},l.state={modal:!1,loading:!1,clinicalTrialList:[]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getClinicalTrialList()}},{key:"getClinicalTrialList",value:function(){var e=this;this.setState({loading:!0},(function(){u.a.getAPIWithAccessToken("clinical-trial").then((function(a){if(void 0===a.data.data||!a.data.status)return e.setState({loading:!1}),void m.b.error(a.data.message);e.setState({loading:!1,clinicalTrialList:a.data.data})})).catch((function(a){void 0!==a.response&&401===a.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),m.b.error(a.message))}))}))}},{key:"render",value:function(){var e="";return this.state.loading&&(e=i.a.createElement(f.a,null)),i.a.createElement("div",{className:"clinical-trial-info-card"},i.a.createElement("div",{className:"clinical-trial-info"},e,this.state.clinicalTrialList.map((function(e,a){return i.a.createElement("div",{className:"profile-card-details",key:a},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement(o.a,{md:"4"},i.a.createElement("div",{className:"details-1"},i.a.createElement("div",{className:"profile-pic"}),i.a.createElement("div",{className:"details-dr"},i.a.createElement("span",{className:"profile-1-B"},e.clinicalTrial),i.a.createElement("div",{className:"border-R "},i.a.createElement("p",{className:"doctors-H-C"},"Doctors"),i.a.createElement("p",{className:"font-w"},e.selectedDoctorDetails.map((function(a,t){return i.a.createElement("t",{key:t},a.firstName," ",a.lastName," ",e.selectedDoctorDetails.length-2===t?" & ":0!==t&&e.selectedDoctorDetails.length-1!==t?", ":"")}))))))),i.a.createElement(o.a,{md:"3"},i.a.createElement("div",{className:"border-R-1 "},i.a.createElement("p",{className:"doctors-H-C"},"Patients"),i.a.createElement("p",{className:"font-w"},e.selectedPatientDetails.map((function(a,t){return i.a.createElement("t",{key:t},a.firstName," ",a.lastName," ",e.selectedPatientDetails.length-2===t?" & ":0!==t&&e.selectedPatientDetails.length-1!==t?", ":"")}))))),i.a.createElement(o.a,{md:"4"},i.a.createElement("div",{className:"border-R-2"},i.a.createElement("p",{className:"doctors-H-C"},"Visits"),i.a.createElement("p",{className:"font-w"},e.stagesData.map((function(a,t){return i.a.createElement("t",{key:t},"Visit ",parseInt(t)+1," ",e.stagesData.length-2===t?" & ":0!==t&&e.stagesData.length-1!==t?", ":"")}))))))),i.a.createElement("div",{className:"card-footer"},i.a.createElement("div",{className:"row"},i.a.createElement(o.a,{md:"6"},i.a.createElement("p",null," ",i.a.createElement("span",null,"Test visit: "),"  ",e.stagesData.map((function(a,t){return i.a.createElement("t",{key:t},"Visit ".concat(parseInt(t)+1," (").concat(u.a.getDaysDiffernce(a.startDate,a.endDate)," days)")," ",e.stagesData.length-2===t?" & ":0!==t&&e.stagesData.length-1!==t?", ":"")})))),i.a.createElement(o.a,{md:"6",className:"text-right"},i.a.createElement("div",{className:"btn view-details"},i.a.createElement(d.Link,{title:"View Details",to:"/admin/manage-trial/clinical-trial/".concat(e.clinicalTrialId)},"View Details"))))))}))))}}]),t}(r.Component));a.default=p},298:function(e,a,t){"use strict";var s=t(0),l=t.n(s);t(299);a.a=function(){return l.a.createElement("div",{className:"loaderSection"},l.a.createElement("div",{className:"spinner-border text-primary",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,a,t){},337:function(e,a,t){"use strict";var s=t(5),l=t(21),n=t(0),c=t.n(n),r=t(30),i=t.n(r),o=t(290),m=t.n(o),d=t(291),u=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:u,offset:u})]),p={tag:d.p,xs:f,sm:f,md:f,lg:f,xl:f,className:i.a.string,cssModule:i.a.object,widths:i.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,n=e.widths,r=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(a,s){var l=e[a];if(delete i[a],l||""===l){var n=!s;if(Object(d.j)(l)){var c,r=n?"-":"-"+a+"-",u=E(n,a,l.size);o.push(Object(d.l)(m()(((c={})[u]=l.size||""===l.size,c["order"+r+l.order]=l.order||0===l.order,c["offset"+r+l.offset]=l.offset||0===l.offset,c)),t))}else{var f=E(n,a,l);o.push(f)}}})),o.length||o.push("col");var u=Object(d.l)(m()(a,o),t);return c.a.createElement(r,Object(s.a)({},i,{className:u}))};h.propTypes=p,h.defaultProps=g,a.a=h}}]);
//# sourceMappingURL=46.296b8b80.chunk.js.map