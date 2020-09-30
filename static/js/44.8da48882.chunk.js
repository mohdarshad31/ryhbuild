(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[44],{1133:function(e,t,a){},1191:function(e,t,a){"use strict";a.r(t);var l=a(39),s=a(40),n=a(70),c=a(69),r=a(0),i=a.n(r),o=a(336),m=a(302),d=(a(305),a(47)),u=a(351),D=a(297),p=(a(1133),function(e){Object(n.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).scrollToTop=function(){return window.scrollTo(0,0)},s.state={modal:!1,loading:!1,clinicalTrialDetails:{clinicalTrialSchedular:[],selectedDoctorDetails:[],selectedPatientDetails:[],stagesData:[]}},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params;void 0!==e.clinicalTrialId&&""!==e.clinicalTrialId?this.getClinicalTrialDetails(e.clinicalTrialId):this.props.history.goBack()}},{key:"getClinicalTrialDetails",value:function(e){var t=this;this.setState({loading:!0},(function(){d.a.getAPIWithAccessToken("clinical-trial/"+e).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void m.b.error(e.data.message);t.setState({loading:!1,clinicalTrialDetails:e.data.data})})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),m.b.error(e.message))}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,l=t.clinicalTrialDetails,s="";return a&&(s=i.a.createElement(D.a,null)),i.a.createElement("div",{className:"clinical-trial-info-card"},i.a.createElement("div",{className:"clinical-trial-info"},s,i.a.createElement("div",{className:"btn addBtn btn-back",onClick:function(){e.props.history.goBack()}},"Back"),i.a.createElement("div",{className:"profile-details-inner"},i.a.createElement("div",{className:"profile-C-M"},i.a.createElement("div",{className:"profile-pic"}," "),i.a.createElement("span",{className:"profile-1-B-inner"},this.state.clinicalTrialDetails.clinicalTrial)),i.a.createElement("div",{className:"clinical-test"},i.a.createElement("div",{className:"btn clinical-btn"},"Clinical Test Detail"),i.a.createElement(o.a,null,i.a.createElement("div",{class:"col-md-3"},i.a.createElement("div",{class:"border-R-1 "},i.a.createElement("p",{class:"doctors-H-C"},"Doctors"),i.a.createElement("p",{class:"font-w"},l.selectedDoctorDetails.map((function(e,t){return i.a.createElement("t",{key:t},e.profile.firstName," ",e.profile.lastName," ",l.selectedDoctorDetails.length-2===t?" & ":0!==t&&l.selectedDoctorDetails.length-1!==t?", ":"")}))))),i.a.createElement("div",{class:"col-md-3"},i.a.createElement("div",{class:"border-R-2"},i.a.createElement("p",{class:"doctors-H-C"},"Patients"),i.a.createElement("p",{class:"font-w"},l.selectedPatientDetails.map((function(e,t){return i.a.createElement("t",{key:t},e.profile.firstName," ",e.profile.lastName," ",l.selectedPatientDetails.length-2===t?" & ":0!==t&&l.selectedPatientDetails.length-1!==t?", ":"")}))))),i.a.createElement("div",{class:"col-md-6 text-right"})),i.a.createElement(o.a,null,i.a.createElement("div",{class:"col-md-3"},i.a.createElement("div",{class:"border-R-1 "},i.a.createElement("p",{class:"doctors-H-C"},"Test Tenure"),i.a.createElement("p",{class:"font-w"},"".concat(u.a.getDate(l.startDate)," to ").concat(u.a.getDate(l.endDate))))),i.a.createElement("div",{class:"col-md-4"},i.a.createElement("div",{class:"border-R-2"},i.a.createElement("p",{class:"doctors-H-C"},"Visit"),i.a.createElement("p",{class:"font-w"},l.stagesData.map((function(e,t){return i.a.createElement("t",{key:t},"Visit ",parseInt(t)+1," ",l.stagesData.length-2===t?" & ":0!==t&&l.stagesData.length-1!==t?", ":"")}))))))),i.a.createElement("div",{className:"clinical-test"},i.a.createElement("div",{className:"btn clinical-btn"},"Appoinment Assignment Detail"),i.a.createElement(o.a,null,l.selectedDoctorDetails.map((function(e,t){return i.a.createElement("div",{class:"col-md-4",key:t},i.a.createElement("div",{class:0===t||t%3!==1?"Assignment-detail":"border-R-2"},i.a.createElement("p",{class:"doctors-H-C"},0===t?"Assignments":" "),i.a.createElement("p",{class:"font-w"},e.profile.firstName," ",e.profile.lastName),e.relatedData.map((function(e,t){return i.a.createElement("p",{class:"font-w",key:t},parseInt(t)+1,". ",e.patientInfo.firstName," ",e.patientInfo.lastName)}))))})),i.a.createElement("div",{class:"col-md-4 text-right"}))),i.a.createElement("div",{className:"clinical-test"},i.a.createElement("div",{className:"btn clinical-btn"},"Assign & Review Form"),i.a.createElement(o.a,null,i.a.createElement("div",{class:"col-md-12 text-right"})),l.selectedDoctorDetails.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("div",{className:"Heading-assign mt-2"},e.profile.firstName," ",e.profile.lastName),i.a.createElement(o.a,null,e.relatedData.map((function(e,t){return i.a.createElement("div",{class:"col-md-4",key:t},i.a.createElement("div",{class:"border-R-2  mt-2"},i.a.createElement("p",{class:"doctors-H-C"},"Visit ",e.stage," (","".concat(u.a.getDate(l.stagesData[parseInt(e.stage)-1].startDate)," to ").concat(u.a.getDate(l.stagesData[parseInt(e.stage)-1].endDate)),")"),i.a.createElement("p",{class:"font-w"},e.doctorTemplateFormData),i.a.createElement("p",{class:"font-w"},"Schedule Date: ",u.a.getDate(e.scheduleDate))))}))))})),l.selectedPatientDetails.map((function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("div",{className:"Heading-assign mt-2"},e.profile.firstName," ",e.profile.lastName),i.a.createElement(o.a,null,e.relatedData.map((function(e,t){return i.a.createElement("div",{class:"col-md-4",key:t},i.a.createElement("div",{class:"border-R-2  mt-2"},i.a.createElement("p",{class:"doctors-H-C"},"Visit ",e.stage," (","".concat(u.a.getDate(l.stagesData[parseInt(e.stage)-1].startDate)," to ").concat(u.a.getDate(l.stagesData[parseInt(e.stage)-1].endDate)),")"),i.a.createElement("p",{class:"font-w"},e.patientTemplateFormData),i.a.createElement("p",{class:"font-w"},"Schedule Date: ",u.a.getDate(e.scheduleDate))))}))))}))))))}}]),a}(r.Component));t.default=p},297:function(e,t,a){"use strict";var l=a(0),s=a.n(l);a(299);t.a=function(){return s.a.createElement("div",{className:"loaderSection"},s.a.createElement("div",{className:"spinner-border text-primary",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},336:function(e,t,a){"use strict";var l=a(5),s=a(21),n=a(0),c=a.n(n),r=a(30),i=a.n(r),o=a(290),m=a.n(o),d=a(291),u=i.a.oneOfType([i.a.number,i.a.string]),D={tag:d.p,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var t=e.className,a=e.cssModule,n=e.noGutters,r=e.tag,i=e.form,o=e.widths,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),D=[];o.forEach((function(t,a){var l=e[t];if(delete u[t],l){var s=!a;D.push(s?"row-cols-"+l:"row-cols-"+t+"-"+l)}}));var p=Object(d.l)(m()(t,n?"no-gutters":null,i?"form-row":"row",D),a);return c.a.createElement(r,Object(l.a)({},u,{className:p}))};f.propTypes=D,f.defaultProps=p,t.a=f},351:function(e,t,a){"use strict";var l=a(39),s=a(40),n=function(){function e(){Object(l.a)(this,e)}return Object(s.a)(e,[{key:"getDateTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD H:i:s",a="";if(void 0!==e&&""!==e){var l=new Date(e),s=l.getDate();s=s<10?"0"+s:s;var n=l.getFullYear(),c=l.getMonth();c=(c+=1)<10?"0"+c:c;var r=l.getHours();r=r<10?"0"+r:r;var i=l.getMinutes();i=i<10?"0"+i:i;var o=l.getSeconds();o=o<10?"0"+o:o,"YYYY-MM-DD H:i:s"===t?a=n+"-"+c+"-"+s+" "+r+":"+i+":"+o:"DD-MM-YYYY H:i:s"===t?a=s+"-"+c+"-"+n+" "+r+":"+i+":"+o:"DD-MM-YYYY H:i"===t?a=s+"-"+c+"-"+n+" "+r+":"+i:"YYYY/MM/DD H:i:s"===t?a=n+"/"+c+"/"+s+" "+r+":"+i+":"+o:"MM/DD/YYYY H:i:s"===t?a=c+"/"+s+"/"+n+" "+r+":"+i+":"+o:"DD/MM/YYYY H:i:s"===t&&(a=s+"/"+c+"/"+n+" "+r+":"+i+":"+o)}return a}},{key:"getDate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY",a="";if(void 0!==e&&""!==e){var l=new Date(e),s=l.getDate();s=s<10?"0"+s:s;var n=l.getFullYear(),c=l.getMonth();c=(c+=1)<10?"0"+c:c,"YYYY-MM-DD"===t?a=n+"-"+c+"-"+s:"DD-MM-YYYY"===t?a=s+"-"+c+"-"+n:"YYYY/MM/DD"===t?a=n+"/"+c+"/"+s:"MM/DD/YYYY"===t?a=c+"/"+s+"/"+n:"DD/MM/YYYY"===t&&(a=s+"/"+c+"/"+n)}return a}},{key:"convertTime",value:function(e){if(void 0===e||e<0)return"0 seconds";var t=Math.ceil(e),a=Math.floor(t/3600)%24;t-=3600*a;var l=Math.floor(t/60)%60,s=(t-=60*l)%60;return a>0&&l>0&&s>0?"".concat(a," hours ").concat(l," minutes ").concat(s," seconds"):l>0&&s>0?"".concat(l," minutes ").concat(s," seconds"):s>0?"".concat(s," seconds"):"0 seconds"}},{key:"getcurrentDate",value:function(){var e=new Date,t=e.getMonth()+1,a=e.getDate();return e.getFullYear()+"_"+((""+t).length<2?"0":"")+t+"_"+((""+a).length<2?"0":"")+a}}]),e}();t.a=new n}}]);
//# sourceMappingURL=44.8da48882.chunk.js.map