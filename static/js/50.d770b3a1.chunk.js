(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[50],{1215:function(e,t,a){"use strict";a.r(t);var n=a(1140),r=a(306),l=a(312),i=a(39),s=a(40),o=a(71),c=a(70),m=a(69),d=a(0),u=a.n(d),p=a(336),g=a(337),f=a(314),h=a(317),_=a(514),y=a(322),v=a(323),E=a(324),b=a(634),I=a(361),N=a(513),C=a(831),S=a(302),k=a(73),P=(a(305),a(47)),F=a(297),w=a(308),L=a(315),T=a.n(L),A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={buttonProcessing:!1,rowIndex:"",dataTableItem:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"editPaitentItem",value:function(e){this.props.editPaitentAction(e)}},{key:"deletePaitentItem",value:function(e){this.props.deletePaitentAction(e)}},{key:"render",value:function(){var e,t=this,a=[],n=Object(r.a)(this.props.data.entries());try{for(n.s();!(e=n.n()).done;){var l=Object(w.a)(e.value,2),i=l[0],s=l[1];console.log(i);var o={paitentName:"".concat(s.firstName," ").concat(s.lastName),email:s.email,phoneNumber:s.phoneNumber||" ",address:s.address||" ",city:s.city||" ",state:s.state||" ",country:s.country||" ",skype_id:s.skype_id||" ",status:P.a.getUserStatus(s.status),action:"",authId:s.authId,profileId:s.profileId,assign_trial_category:s.userAssignPracticeInfo.length>0?s.userAssignPracticeInfo.map((function(e){return e.categoryInfo.categoryName})).join(","):" "};a.push(o)}}catch(d){n.e(d)}finally{n.f()}var c=[{label:"Patient Name",name:"paitentName"},{label:"Email",name:"email"},{label:"Phone Number",name:"phoneNumber"},{label:"Skype ID",name:"skype_id"},{label:"Address",name:"address"},{label:"Assign Trial Category",name:"assign_trial_category"},{label:"Status",name:"status"},{label:"Action",name:"action",options:{filter:!0,customBodyRender:function(e,a,n){var r=a.rowIndex,l=t.props.data[r].profileId;return u.a.createElement("p",null,u.a.createElement("button",{title:"Edit Paitent",className:"btn-edit",disabled:t.state.buttonProcessing,onClick:function(){return t.editPaitentItem(r)}},u.a.createElement("i",{className:"fa fa-eye"})," "),u.a.createElement(k.Link,{title:"View Paitent Details",className:"btn-view",to:"/admin/users/".concat(l)},u.a.createElement("i",{className:"fa fa-list"})," "),u.a.createElement("button",{title:"Delete Paitent",className:"btn-delete",color:"warning",disabled:t.state.buttonProcessing,onClick:function(){window.confirm("Are you sure you wish to delete this paitent?")&&t.deletePaitentItem(r)}},u.a.createElement("i",{className:"fa fa-trash"})))}}}],m={search:!1,viewColumns:!1,filter:!1,searchOpen:!1,print:!1,download:!1,responsive:"stacked",selectableRows:"none",textLabels:{body:{noMatch:this.props.dataTableLoadingStatus?"Processing........":"",toolTip:"Sort",columnHeaderTooltip:function(e){return"Sort for ".concat(e.label)}}},fixedHeaderOptions:{xAxis:!1,yAxis:!1}};return u.a.createElement(T.a,{data:a,columns:c,options:m})}}]),a}(d.Component),D=(a(894),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value,r=n.state.formField;r[t]=a,n.setState({formField:r})},n.changeTrialHandler=function(e){var t=e.target.value;n.setState({trialCategoryId:t}),n.subPracticeCategoryList(t)},n.toggle=function(){n.setState({modal:!n.state.modal,rowIndex:-1,formValid:!1,formProccessing:!1,formField:{paitent_name:"",email:"",first_name:"",last_name:"",phoneNumber:"",address:"",city:"",state:"",country:"",postalCode:"",role:""},formErrors:{paitent_name:"",email:"",contact_person:"",role:"",address:"",error:""},editMode:!0})},n.changeFilterHandler=function(e){var t=e.target.name,a=e.target.value,r=n.state.filterItem;r[t]=a,n.setState({filterItem:r})},n.changeCategoryHandle=function(e){var t=e.target.name,a=e.target.value,r=n.state.formField;r[t]=a,n.setState({formField:r});var l="templateList";"consent_category_id"!==t&&(l="deepProfileTemplateList"),n.getTemplateList(a,l,a)},n.state={loading:!0,userList:[],modal:!1,rowIndex:-1,formProccessing:!1,formField:{paitent_name:"",email:"",first_name:"",last_name:"",skype_id:"",latitude:"",longitude:"",phoneNumber:"",address:"",city:"",state:"",country:"",postalCode:"",role:"",status:""},errors:{paitent_name:"",email:"",contact_person:"",role:"",address:"",error:""},formValid:!0,items:[],filterItem:{filter_paitent_id:"",country:"",state:"",custom_search:"",filter_assign_trial_category:""},categoryList:[],templateList:[],deepProfileTemplateList:[],practiceCategoryList:[],trialCategoryId:"",trialSubCategoryId:"",subPracticeCategoryList:[],assignTrialInfo:[],editMode:!0,viewInfoData:{}},n.handleEditPaitent=n.handleEditPaitent.bind(Object(o.a)(n)),n.submitHandler=n.submitHandler.bind(Object(o.a)(n)),n.handleDeletePaitent=n.handleDeletePaitent.bind(Object(o.a)(n)),n.filterPaitentsList=n.filterPaitentsList.bind(Object(o.a)(n)),n.resetSearchFilter=n.resetSearchFilter.bind(Object(o.a)(n)),n.setLatitudeLongitude=n.setLatitudeLongitude.bind(Object(o.a)(n)),n.handleInputChange=n.handleInputChange.bind(Object(o.a)(n)),n.handleInputKeyDown=n.handleInputKeyDown.bind(Object(o.a)(n)),n.handleRemoveItem=n.handleRemoveItem.bind(Object(o.a)(n)),n.subPracticeCategoryList=n.subPracticeCategoryList.bind(Object(o.a)(n)),n.addTrialInfoToPatient=n.addTrialInfoToPatient.bind(Object(o.a)(n)),n.removeAssignTrial=n.removeAssignTrial.bind(Object(o.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.userList(),this.categoryList(),this.practiceCategoryList()}},{key:"setLatitudeLongitude",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",i=this.state.formField;i.state=n,i.latitude=t.latitude,i.longitude=t.longitude,i.country=r,i.city=a,i.postalCode=l,i.address=e,this.setState({formField:i})}},{key:"userList",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a="";if(void 0!==t.country&&""!==t.country&&(a+=""!==a?"&location="+t.country:"?location="+t.country),void 0!==t.custom_search&&""!==t.custom_search&&(a+=""!==a?"&emailOrName="+t.custom_search:"?emailOrName="+t.custom_search),void 0!==t.filter_assign_trial_category&&""!==t.filter_assign_trial_category&&(a+=""!==a?"&practiceCategory="+t.filter_assign_trial_category:"?practiceCategory="+t.filter_assign_trial_category),void 0!==t.status&&""!==t.status){var n=1;n=P.a.getStatusVal(t.status),a+=""!==a?"&status="+n:"?status="+n}this.setState({loading:!0},(function(){P.a.getAPIWithAccessToken("profile/list"+a).then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void S.b.error(t.data.message);e.setState({loading:!1,userList:t.data.data.profileList})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),S.b.error(t.message))}))}))}},{key:"categoryList",value:function(){var e=this;P.a.getAPIWithAccessToken("template/category").then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void S.b.error(t.data.message);e.setState({categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):S.b.error(t.message)}))}},{key:"practiceCategoryList",value:function(){var e=this;P.a.getAPIWithAccessToken("category").then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void S.b.error(t.data.message);e.setState({practiceCategoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):S.b.error(t.message)}))}},{key:"subPracticeCategoryList",value:function(e){var t=this;""!==e?this.setState({loading:!0},(function(){P.a.getAPIWithAccessToken("category/"+e).then((function(e){if(console.log(e),void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void S.b.error(e.data.message);t.setState({subPracticeCategoryList:e.data.data,trialSubCategoryId:"",loading:!1})})).catch((function(e){t.setState({loading:!1}),void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):S.b.error(e.message)}))})):this.setState({subPracticeCategoryList:[],trialSubCategoryId:""})}},{key:"getTemplateList",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"templateList",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(""===e){var r=this.state.formField;return r.consent_template_id="",void this.setState({formField:r,templateList:[]})}this.setState({loading:!0},(function(){P.a.getAPIWithAccessToken("template?categoryId="+e).then((function(e){var r;console.log(e);var i=t.state.formField;if(void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void S.b.error(e.data.message);n&&("templateList"===a?i.consent_template_id="":i.deep_profile_template_id=""),t.setState((r={},Object(l.a)(r,a,e.data.data),Object(l.a)(r,"formField",i),Object(l.a)(r,"loading",!1),r))})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):(t.setState({loading:!1}),S.b.error(e.message))}))}))}},{key:"submitHandler",value:function(e){var t=this;return e.preventDefault(),!(this.state.rowIndex>-1&&!window.confirm("Are your sure to update??"))&&(e.target.className+=" was-validated",!this.validateForm()&&void this.setState({formProccessing:!0},(function(){var e,a=t.state.formField,n=[],l=Object(r.a)(t.state.assignTrialInfo);try{for(l.s();!(e=l.n()).done;){var i=e.value;n.push({categoryId:i.categoryId,subCategoryId:i.subCategoryId})}}catch(m){l.e(m)}finally{l.f()}var s={email:a.email,firstName:a.first_name,lastName:a.last_name,phoneNumber:a.phoneNumber,address:a.address,roleName:a.role,city:a.city,state:a.state,latitude:a.latitude,longitude:a.longitude,country:a.country,postalCode:a.postalCode,skype_id:a.skype_id,accept_trial:t.state.items.join(","),consent_category_id:a.consent_category_id,consent_template_id:a.consent_template_id,deep_profile_category_id:a.deep_profile_category_id,deep_profile_template_id:a.deep_profile_template_id,status:P.a.getStatusVal(a.status),userAssignPracticeInfo:n},o=t.state.rowIndex;if(o>-1){var c=t.state.userList[o];P.a.putAPIWithAccessToken("profile/"+c.profileId,s).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({formProccessing:!1}),void S.b.error(e.data.message);t.setState({modal:!1,formProccessing:!1}),S.b.success(e.data.message),t.userList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):t.setState({formProccessing:!1}),S.b.error(e.message)}))}else P.a.postAPIWithAccessToken("profile",s).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({formProccessing:!1}),void S.b.error(e.data.message);t.setState({modal:!1,formProccessing:!1}),S.b.success(e.data.message),t.userList()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):t.setState({formProccessing:!1}),S.b.error(e.message)}))})))}},{key:"validateForm",value:function(){var e=!1,t=this.state.formField,a={},n=new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);return void 0!==t.first_name&&""!==t.first_name.trim()||(e=!0,a.firstName="Full name field required!"),void 0===t.email||""===t.email.trim()?(e=!0,a.email="Email field required!"):n.test(t.email)||(e=!0,a.email="Invalid email format"),void 0!==t.consent_category_id&&""!==t.consent_category_id.trim()||(e=!0,a.consent_category_id="Please select consent category!"),void 0!==t.consent_template_id&&""!==t.consent_template_id.trim()||(e=!0,a.consent_template_id="Please select consent template!"),void 0!==t.deep_profile_category_id&&""!==t.deep_profile_category_id.trim()||(e=!0,a.deep_profile_category_id="Please select medical history category!"),void 0!==t.deep_profile_template_id&&""!==t.deep_profile_template_id.trim()||(e=!0,a.deep_profile_template_id="Please select medical history template!"),void 0!==t.status&&""!==t.status.trim()||(e=!0,a.status="Status field required!"),this.setState({errors:a}),e}},{key:"errorClass",value:function(e){return 0===e.length?"":"has-error"}},{key:"handleEditPaitent",value:function(e){var t=this.state.userList[e],a=P.a.getUserStatus(t.status),n={email:t.email,first_name:t.firstName,last_name:t.lastName,phoneNumber:t.phoneNumber,address:t.address,city:t.city,state:t.state,country:t.country,postalCode:t.postalCode,skype_id:t.skype_id||"",consent_template_id:t.consent_template_id||"",consent_category_id:t.consent_category_id||"",deep_profile_category_id:t.deep_profile_category_id||"",deep_profile_template_id:t.deep_profile_template_id||"",status:a},r=t.userAssignPracticeInfo||[];this.setState({rowIndex:e,editMode:!1,viewInfoData:t,formField:n,modal:!0,formValid:!0,formProccessing:!1,assignTrialInfo:r});var l=this;setTimeout((function(){l.getTemplateList(t.deep_profile_category_id,"deepProfileTemplateList",!1),l.getTemplateList(t.consent_category_id,"templateList",!1)}),300)}},{key:"handleDeletePaitent",value:function(e){var t=this,a=this.state.userList[e];this.setState({loading:!0},(function(){P.a.deleteAPIWithAccessToken("profile",{profileId:a.profileId}).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void S.b.error(e.data.message);t.setState({modal:!1,loading:!1}),S.b.success(e.data.message),t.resetSearchFilter()})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):t.setState({loading:!1}),S.b.error(e.message)}))}))}},{key:"filterPaitentsList",value:function(){var e=this.state.filterItem;this.userList(e)}},{key:"resetSearchFilter",value:function(){this.setState({filterItem:{filter_doctor_id:"",country:"",state:"",custom_search:"",filter_assign_trial_category:""}}),this.userList()}},{key:"handleInputChange",value:function(e){this.setState({input:e.target.value})}},{key:"handleInputKeyDown",value:function(e){if(13===e.keyCode){var t=e.target.value;e.preventDefault(),this.setState((function(e){return{items:[].concat(Object(n.a)(e.items),[t]),input:""}}))}this.state.items.length&&8===e.keyCode&&!this.state.input.length&&this.setState((function(e){return{items:e.items.slice(0,e.items.length-1)}}))}},{key:"handleRemoveItem",value:function(e){var t=this;return function(){t.setState((function(t){return{items:t.items.filter((function(t,a){return a!==e}))}}))}}},{key:"addTrialInfoToPatient",value:function(e){if(e.preventDefault(),""!==this.state.trialCategoryId&&""!==this.state.trialSubCategoryId){var t=this.state.assignTrialInfo,a=this.state.trialCategoryId,n=this.state.trialSubCategoryId;if(0===t.filter((function(e){return e.categoryId===a&&e.subCategoryId===n})).length){var r=this.state.practiceCategoryList.filter((function(e){return e.categoryId===a})),l=this.state.subPracticeCategoryList.filter((function(e){return e.subCategoryId===n}));if(r.length>0&&l.length>0){var i={categoryId:a,subCategoryId:n,categoryInfo:r[0],subCategoryInfo:l[0]};t.push(i),this.setState({assignTrialInfo:t,trialSubCategoryId:""})}}}}},{key:"removeAssignTrial",value:function(e,t){t.preventDefault();var a=this.state.assignTrialInfo;a.splice(e,1),this.setState({assignTrialInfo:a})}},{key:"render",value:function(){var e=this,t=this.state,a=t.userList,n=t.loading,r=t.modal,l=t.formProccessing,i=t.errors,s=t.categoryList,o=t.templateList,c=t.deepProfileTemplateList,m=t.practiceCategoryList,d=t.subPracticeCategoryList,S="";n&&(S=u.a.createElement(F.a,null));var w=u.a.createElement(u.a.Fragment,null,"Save ",u.a.createElement("i",{className:"fa fa-spinner"}));return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(p.a,null,S,u.a.createElement(g.a,{lg:12},u.a.createElement(f.a,{className:"oep-card"},u.a.createElement(h.a,{className:"mainHeading"},u.a.createElement("strong",null,"Patient List"),u.a.createElement(_.a,{color:"",className:"categoryAdd-1",type:"button",onClick:function(){e.props.history.push("/admin/users/new")}}," New Account Approval"),u.a.createElement(_.a,{color:"",className:"categoryAdd",type:"button",onClick:this.toggle},u.a.createElement("i",{className:"fa fa-plus"})," Add Patient")),u.a.createElement(p.a,null,u.a.createElement(g.a,{md:12},u.a.createElement("div",{className:"search-filter"},u.a.createElement(p.a,null,u.a.createElement(g.a,{md:"3"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"filter_doctor_id"},"Search By Email/ Name"),u.a.createElement(E.a,{type:"text",placeholder:"Search By Email/Name",id:"custom_search",name:"custom_search",value:this.state.filterItem.custom_search,onChange:this.changeFilterHandler}))),u.a.createElement(g.a,{md:"3"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"filter_assign_trial_category"},"Search By Assign Trial Category"),u.a.createElement(E.a,{type:"select",placeholder:"Search By Assign Trial Category",id:"filter_assign_trial_category",name:"filter_assign_trial_category",value:this.state.filterItem.filter_assign_trial_category,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),m.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:e})}))))),u.a.createElement(g.a,{md:"3"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"filter_doctor_id"},"Search By Status"),u.a.createElement(E.a,{type:"select",placeholder:"Search By Status",id:"status",name:"status",value:this.state.filterItem.status,onChange:this.changeFilterHandler},u.a.createElement("option",{value:""},"Select"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Block"},"Block")))),u.a.createElement(g.a,{md:"3"},u.a.createElement(y.a,{className:"filter-button-section"},u.a.createElement(_.a,{className:"search-btn",type:"button",onClick:this.filterPaitentsList},"Search"),u.a.createElement(_.a,{className:"search-btn",id:"resetButton",type:"button",onClick:this.resetSearchFilter},"Reset")))))),u.a.createElement(g.a,{lg:12},u.a.createElement(A,{data:a,editPaitentAction:this.handleEditPaitent,deletePaitentAction:this.handleDeletePaitent,dataTableLoadingStatus:this.state.loading})))))),u.a.createElement(b.a,{isOpen:r,toggle:this.toggle,className:"full-width-modal-section organization-modal"},u.a.createElement("div",{className:"popup-Heading"},u.a.createElement(p.a,null,u.a.createElement(g.a,{md:"6"},"Add New Patient"),u.a.createElement(g.a,{md:"6"},u.a.createElement("label",{className:"pull-right",onClick:this.toggle},"Close"),!this.state.editMode&&this.state.rowIndex>-1&&u.a.createElement("label",{className:"view-icon pull-right",style:{marginRight:"10px"},onClick:function(){e.setState({editMode:!0})}},u.a.createElement("i",{className:"fa fa-pencil"})),this.state.editMode&&this.state.rowIndex>-1&&u.a.createElement("label",{className:"view-icon pull-right",style:{marginRight:"10px"},onClick:function(){e.setState({editMode:!1})}},u.a.createElement("i",{className:"fa fa-eye"}))))),this.state.editMode&&u.a.createElement(I.a,{onSubmit:this.submitHandler,noValidate:!0},u.a.createElement(N.a,null,u.a.createElement(p.a,null,u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"first_name"},"Full Name"),u.a.createElement(E.a,{type:"text",placeholder:"Full Name *",invalid:void 0!==i.firstName&&""!==i.firstName,id:"first_name",name:"first_name",value:this.state.formField.first_name,onChange:this.changeHandler,required:!0}),u.a.createElement("div",{className:"invalid-feedback"},i.firstName))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"email"},"Email"),u.a.createElement(E.a,{type:"text",placeholder:"Email *",invalid:void 0!==i.email&&""!==i.email,id:"email",name:"email",value:this.state.formField.email,onChange:this.changeHandler,required:!0}),u.a.createElement("div",{className:"invalid-feedback"},i.email))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"phoneNumber"},"Contact Number"),u.a.createElement(E.a,{type:"text",placeholder:"Contact Number ",id:"phoneNumber",name:"phoneNumber",value:this.state.formField.phoneNumber,onChange:this.changeHandler}))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"skype_id"},"Skype ID"),u.a.createElement(E.a,{type:"text",placeholder:"Skype ID ",id:"skype_id",name:"skype_id",value:this.state.formField.skype_id,onChange:this.changeHandler}))),u.a.createElement(g.a,{md:"8"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"address"},"Address"),u.a.createElement(E.a,{type:"text",placeholder:"Address",id:"address",name:"address",value:this.state.formField.address,onChange:this.changeHandler}))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"postalCode"},"Postal Code"),u.a.createElement(E.a,{type:"text",placeholder:"Postal Code",id:"postalCode",name:"postalCode",value:this.state.formField.postalCode,onChange:this.changeHandler}))),u.a.createElement(g.a,{lg:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"template_status"},"Status"),u.a.createElement(E.a,{type:"select",placeholder:"Status *",id:"status",name:"status",value:this.state.formField.status,invalid:void 0!==i.status&&""!==i.status,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select Status"),u.a.createElement("option",{value:"Active"},"Active"),u.a.createElement("option",{value:"Inactive"},"Inactive"),u.a.createElement("option",{value:"Pending"},"Pending"),u.a.createElement("option",{value:"Block"},"Block")),u.a.createElement("div",{className:"invalid-feedback"},i.status))),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"consent_category_id"},"Consent Category ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(E.a,{type:"select",placeholder:"category Name *",id:"consent_category_id",invalid:void 0!==i.consent_category_id&&""!==i.consent_category_id,name:"consent_category_id",value:this.state.formField.consent_category_id,onChange:this.changeCategoryHandle,required:!0},u.a.createElement("option",{value:""},"Select"),s.map((function(t,a){return u.a.createElement(H,{key:a,categoryItem:t,selectedCategory:e.state.formField.consent_category_id})}))),u.a.createElement("div",{className:"invalid-feedback"},i.consent_category_id))),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"consent_template_id"},"Select Consent Form ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(E.a,{type:"select",placeholder:"Subcategory Name *",id:"consent_template_id",invalid:void 0!==i.consent_template_id&&""!==i.consent_template_id,name:"consent_template_id",value:this.state.formField.consent_template_id,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select"),o.map((function(t,a){return u.a.createElement(O,{key:a,templateItem:t,selectedCategory:e.state.formField.consent_template_id})}))),u.a.createElement("div",{className:"invalid-feedback"},i.consent_template_id)),this.state.formField.consent_template_id?u.a.createElement(g.a,{lg:8,md:8},u.a.createElement("div",{className:"previewTemplateIcon"},u.a.createElement(k.Link,{to:"/common/template/".concat(this.state.formField.consent_template_id),target:"_blank",className:"Preview-btn"},"Preview Template "))):""),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"deep_profile_category_id"},"Select Medical History Category ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(E.a,{type:"select",placeholder:"category Name *",id:"deep_profile_category_id",invalid:void 0!==i.deep_profile_category_id&&""!==i.deep_profile_category_id,name:"deep_profile_category_id",value:this.state.formField.deep_profile_category_id,onChange:this.changeCategoryHandle,required:!0},u.a.createElement("option",{value:""},"Select"),s.map((function(t,a){return u.a.createElement(H,{key:a,categoryItem:t,selectedCategory:e.state.formField.deep_profile_category_id})}))),u.a.createElement("div",{className:"invalid-feedback"},i.deep_profile_category_id))),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"deep_profile_template_id"},"Select Medical History Template ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(E.a,{type:"select",placeholder:"",id:"deep_profile_template_id",invalid:void 0!==i.deep_profile_template_id&&""!==i.deep_profile_template_id,name:"deep_profile_template_id",value:this.state.formField.deep_profile_template_id,onChange:this.changeHandler,required:!0},u.a.createElement("option",{value:""},"Select"),c.map((function(t,a){return u.a.createElement(O,{key:a,templateItem:t,selectedCategory:e.state.formField.deep_profile_template_id})}))),u.a.createElement("div",{className:"invalid-feedback"},i.deep_profile_template_id)),this.state.formField.deep_profile_template_id?u.a.createElement(g.a,{lg:8,md:8},u.a.createElement("div",{className:"previewTemplateIcon"},u.a.createElement(k.Link,{to:"/common/template/".concat(this.state.formField.deep_profile_template_id),target:"_blank",className:"Preview-btn"},"Preview Template "))):""),u.a.createElement(g.a,{lg:5},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"assign_trail_category"},"Assign Trial Category ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(E.a,{type:"select",placeholder:"",id:"assign_trail_category",invalid:void 0!==i.assign_trail_category&&""!==i.assign_trail_category,name:"assign_trail_category",value:this.state.trialCategoryId,onChange:this.changeTrialHandler},u.a.createElement("option",{value:""},"Select"),m.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:e})}))),u.a.createElement("div",{className:"invalid-feedback"},i.assign_trail_category))),u.a.createElement(g.a,{lg:5},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"assign_trial_subcategory"},"Assign Trial Subcategory",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement(E.a,{type:"select",placeholder:"",id:"assign_trial_subcategory",invalid:void 0!==i.assign_trial_subcategory&&""!==i.assign_trial_subcategory,name:"assign_trial_subcategory",value:this.state.trialSubCategoryId,onChange:function(t){e.setState({trialSubCategoryId:t.target.value})}},u.a.createElement("option",{value:""},"Select"),d.map((function(e,t){return u.a.createElement(H,{key:t,categoryItem:{categoryId:e.subCategoryId,categoryName:e.subCategoryName}})}))),u.a.createElement("div",{className:"invalid-feedback"},i.assign_trial_subcategory))),u.a.createElement(g.a,{md:"2"},u.a.createElement("div",{className:"btn profie-btn addBtn-1",disabled:!(""===this.state.trialCategoryId||!this.state.trialSubCategoryId),onClick:function(t){e.addTrialInfoToPatient(t)}},"Add")),this.state.assignTrialInfo.length>0&&u.a.createElement(g.a,{md:"12"},u.a.createElement("div",{className:"addDrs"},u.a.createElement(p.a,null,this.state.assignTrialInfo.map((function(t,a){return u.a.createElement(g.a,{md:6,key:a},u.a.createElement("div",{className:"select-user-info"},"".concat(t.categoryInfo.categoryName," | ").concat(t.subCategoryInfo.subCategoryName),u.a.createElement("button",{className:"remove-selected-user-info",onClick:function(t){e.removeAssignTrial(a,t)}},u.a.createElement("i",{className:"fa fa-times"}))))}))))))),u.a.createElement(C.a,null,u.a.createElement("div",{className:"btn-group-popup"},u.a.createElement("div",{className:"btn btn-back-popup",color:"primary",onClick:this.toggle},"Back"),u.a.createElement("button",{className:"btn btn-save-popup",color:"secondary",disabled:l,type:"submit"},l?w:"Save")))),!this.state.editMode&&u.a.createElement("div",{className:"viewInfo"},u.a.createElement(N.a,null,u.a.createElement(p.a,null,u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"first_name"},"Full Name"),u.a.createElement("p",null,this.state.viewInfoData.firstName))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"email"},"Email"),u.a.createElement("p",null,this.state.viewInfoData.email))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"phoneNumber"},"Contact Number"),u.a.createElement("p",null,this.state.viewInfoData.phoneNumber))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"skype_id"},"Skype ID"),u.a.createElement("p",null,this.state.viewInfoData.skype_id))),u.a.createElement(g.a,{md:"8"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"address"},"Address"))),u.a.createElement(g.a,{md:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"postalCode"},"Postal Code"),u.a.createElement("p",null,this.state.viewInfoData.postalCode))),u.a.createElement(g.a,{lg:"4"},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"template_status"},"Status"),u.a.createElement("p",null,P.a.getStatus(this.state.viewInfoData.status)))),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"consent_category_id"},"Consent Category ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement("p",null,this.state.viewInfoData.consent_category_name))),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"consent_template_id"},"Select Consent Form ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement("p",null,this.state.viewInfoData.consent_template_name)),this.state.viewInfoData.consent_template_id?u.a.createElement(g.a,{lg:8,md:8},u.a.createElement("div",{className:"previewTemplateIcon"},u.a.createElement(k.Link,{to:"/common/template/".concat(this.state.viewInfoData.consent_template_id),target:"_blank",className:"Preview-btn"},"Preview Template "))):""),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"deep_profile_category_id"},"Select Medical History Category ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement("p",null,this.state.viewInfoData.deep_profile_category_name))),u.a.createElement(g.a,{lg:6},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"deep_profile_template_id"},"Select Medical History Template ",u.a.createElement("span",{className:"mandatory"},"*")),u.a.createElement("p",null,this.state.viewInfoData.deep_profile_template_name)),this.state.viewInfoData.deep_profile_template_id?u.a.createElement(g.a,{lg:8,md:8},u.a.createElement("div",{className:"previewTemplateIcon"},u.a.createElement(k.Link,{to:"/common/template/".concat(this.state.viewInfoData.deep_profile_template_id),target:"_blank",className:"Preview-btn"},"Preview Template "))):""),u.a.createElement(g.a,{lg:12},u.a.createElement(y.a,null,u.a.createElement(v.a,{htmlFor:"assign_trial_subcategory"},"Assign Trial Category & Subcategory",u.a.createElement("span",{className:"mandatory"},"*")))),this.state.viewInfoData.userAssignPracticeInfo.length>0&&u.a.createElement(g.a,{md:"12"},u.a.createElement("div",{className:"addDrs"},u.a.createElement(p.a,null,this.state.viewInfoData.userAssignPracticeInfo.map((function(e,t){return u.a.createElement(g.a,{md:6,key:t},u.a.createElement("div",{className:"select-user-info"},"".concat(e.categoryInfo.categoryName," | ").concat(e.subCategoryInfo.subCategoryName)))}))))))))))}}]),a}(d.Component));function H(e){var t=e.categoryItem;return u.a.createElement("option",{value:t.categoryId},t.categoryName)}function O(e){var t=e.templateItem;return u.a.createElement("option",{value:t.templateId},t.templateName)}t.default=D},297:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(299);t.a=function(){return r.a.createElement("div",{className:"loaderSection"},r.a.createElement("div",{className:"spinner-border text-primary",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},894:function(e,t,a){}}]);
//# sourceMappingURL=50.d770b3a1.chunk.js.map