(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[41],{1216:function(e,t,a){"use strict";a.r(t);var n=a(39),s=a(40),i=a(71),r=a(70),o=a(69),l=a(0),c=a.n(l),d=a(73),m=a(314),u=a(317),p=a(336),g=a(337),h=a(330),f=a(361),v=a(322),S=a(323),E=a(324),b=a(893),y=a(514),k=a(302),N=(a(305),a(47)),_=a(421),I=function(e){var t=e.label,a=e.isSelected,n=e.onCheckboxChange,s=e.value;return c.a.createElement("div",{className:"form-check"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",name:t,checked:a,onChange:n,value:s,className:"form-check-input"}),t))},C=a(297),z=(a(892),[{day:1,dayName:"Mon",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]},{day:2,dayName:"Tue",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]},{day:3,dayName:"Wed",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]},{day:4,dayName:"Thu",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]},{day:5,dayName:"Fri",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]},{day:6,dayName:"Sat",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]},{day:0,dayName:"Sun",isSelected:!1,timeSlots:[{startTime:"",endTime:""}]}]),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).changeHandler=function(e){var t=e.target.name,a=e.target.value,n=s.state.formField;n[t]=a,s.setState({formField:n})},s.handleAvlChange=function(e){var t=s.state.checkboxes;t[e.target.value].isSelected=e.target.checked,s.setState({checkboxes:t})},s.handleAvlCatChange=function(e){var t=s.state.selectedServices;e.target.checked?t.push(e.target.value):t.splice(t.indexOf(e.target.value),1),s.setState({selectedServices:t})},s.handleSpecializationChange=function(e){var t=s.state.selectedSpecialization;e.target.checked?t.push(e.target.value):t.splice(t.indexOf(e.target.value),1),s.setState({selectedSpecialization:t})},s.handleSuperSpecializationChange=function(e){var t=s.state.selectedSuperSpecialization;e.target.checked?t.push(e.target.value):t.splice(t.indexOf(e.target.value),1),s.setState({selectedSuperSpecialization:t})},s.changeTimeHandler=function(e){var t=e.target.name.split("-");if(t.length>1){var a=s.state.checkboxes,n=a[t[1]].timeSlots;"openTime"===t[0]?n[t[2]].startTime=e.target.value:n[t[2]].endTime=e.target.value,a[t[1]].timeSlots=n,s.setState({checkboxes:a})}},s.addMoreTimeSlots=function(e){var t=s.state.checkboxes;t[e].timeSlots.push({startTime:"",endTime:""}),s.setState({checkboxes:t})},s.removeTimeSlots=function(e,t){var a=s.state.checkboxes,n=a[e].timeSlots;n.splice(t,1),a[e].timeSlots=n,s.setState({checkboxes:a})},s.handleImageChange=function(e){s.setState({profileImage:e.target.files[0]})},s.onDocumentsImageChange=function(e){s.setState({documentsImages:e.target.files})},s.state={buttonProcessing:!1,loading:!0,errors:{},visible:!1,profileImage:"",documentsImages:[],uploadedDocumentsImages:[],formProccessing:!1,formField:{},checkboxes:z,dataTableItem:[],categoryList:[],selectedServices:[],superSpecializationList:[],specializationList:[],selectedSpecialization:[],selectedSuperSpecialization:[]},s.getCategoryList=s.getCategoryList.bind(Object(i.a)(s)),s.submitHandler=s.submitHandler.bind(Object(i.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params;void 0!==e.doctorsId&&""!==e.doctorsId?(this.setState({doctorsId:e.doctorsId}),this.getCategoryList(),this.getDoctorProfile(e.doctorsId)):this.props.history.push("/admin/manage-investigator/investigator"),this.getSpecialization(),this.getSuperSpecialization()}},{key:"getSpecialization",value:function(){var e=this;N.a.getAPIWithAccessToken("specialization?isSuperSpecialization="+!1).then((function(t){void 0!==t.data.data&&t.data.status?e.setState({specializationList:t.data.data}):k.b.error(t.data.message)})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):k.b.error(t.message)}))}},{key:"getSuperSpecialization",value:function(){var e=this;N.a.getAPIWithAccessToken("specialization?isSuperSpecialization="+!0).then((function(t){void 0!==t.data.data&&t.data.status?e.setState({superSpecializationList:t.data.data}):k.b.error(t.data.message)})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):k.b.error(t.message)}))}},{key:"getDoctorProfile",value:function(e){var t=this;N.a.getAPIWithAccessToken("doctors/profile/"+e).then((function(e){if(console.log(e),t.setState({loading:!1}),void 0===e.data.data||!e.data.status)return t.setState({loading:!1}),void k.b.error(e.data.message);var a=e.data.data,n=t.state.formField;n.first_name=a.firstName,n.last_name=a.lastName||"",n.phoneNumber=a.phoneNumber||"",n.address=a.address||"",n.description=a.description||"";var s=(a.services||[]).map((function(e){return e.categoryId})),i=(a.specialization||[]).map((function(e){return e.specializationId})),r=(a.superSpecialization||[]).map((function(e){return e.specializationId})),o=a.availability||[],l=[],c=a.profileImage||"",d=a.documentsImages||[];z.forEach((function(e,t){var a=o.filter((function(t){return t.day===e.day}));a.length>0?(e.timeSlots=a[0].timeSlots.length>0?a[0].timeSlots:[{startTime:"",endTime:""}],e.isSelected=a[0].isOpen,l.push(e)):l.push(e)})),t.setState({formField:n,profileImage:c,uploadedDocumentsImages:d,selectedServices:s,selectedSpecialization:i,selectedSuperSpecialization:r,checkboxes:l})})).catch((function(e){t.setState({loading:!1}),void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):k.b.error(e.message)}))}},{key:"getCategoryList",value:function(){var e=this;N.a.getAPIWithAccessToken("category").then((function(t){if(console.log(t),void 0===t.data.data||!t.data.status)return e.setState({loading:!1}),void k.b.error(t.data.message);e.setState({categoryList:t.data.data})})).catch((function(t){void 0!==t.response&&401===t.response.status?(localStorage.clear(),e.props.history.push("/login")):k.b.error(t.message)}))}},{key:"submitHandler",value:function(e){var t=this;if(e.preventDefault(),e.target.className+=" was-validated",this.validateForm())return!1;this.setState({formProccessing:!0},(function(){var e=t.state.formField,a=new FormData;a.append("organizationId",t.state.doctorsId),a.append("firstName",e.first_name),a.append("lastName",e.last_name),a.append("phoneNumber",e.phoneNumber),a.append("description",e.description),a.append("address",e.address||""),a.append("latitude",e.latitude||""),a.append("longitude",e.longitude||""),""!==t.state.profileImage&&a.append("profileImage",t.state.profileImage);for(var n=0;n<t.state.documentsImages.length;n++)a.append("documentsImages",t.state.documentsImages[n]);for(var s=0;s<t.state.checkboxes.length;s++)t.state.checkboxes[s].isSelected?a.append("availability",JSON.stringify({day:t.state.checkboxes[s].day,dayName:t.state.checkboxes[s].dayName,isOpen:!0,timeSlots:t.state.checkboxes[s].timeSlots})):a.append("availability",JSON.stringify({day:t.state.checkboxes[s].day,dayName:t.state.checkboxes[s].dayName,isOpen:!1,timeSlots:[]}));for(var i=0;i<t.state.selectedServices.length;i++)a.append("services["+i+"]",t.state.selectedServices[i]);for(var r=0;r<t.state.selectedSpecialization.length;r++)a.append("specialization["+r+"]",t.state.selectedSpecialization[r]);for(var o=0;o<t.state.selectedSuperSpecialization.length;o++)a.append("superSpecialization["+o+"]",t.state.selectedSuperSpecialization[o]);N.a.putAPIWithAccessToken("doctors/info",a).then((function(e){if(void 0===e.data.data||!e.data.status)return t.setState({formProccessing:!1}),void k.b.error(e.data.message);t.props.history.push("/admin/manage-investigator/investigator"),k.b.success(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),t.props.history.push("/login")):t.setState({formProccessing:!1}),k.b.error(e.message)}))}))}},{key:"validateForm",value:function(){var e=!1,t=this.state.formField,a={};void 0!==t.first_name&&""!==t.first_name.trim()||(e=!0,a.firstName="First name field required!"),0===this.state.selectedSpecialization.length&&(e=!0,a.specialization="Choose atleast single specialization"),0===this.state.selectedSuperSpecialization.length&&(e=!0,a.superSpecialization="Choose atleast single super specialization");var n=this.state.checkboxes.filter((function(e){return e.isSelected}));return n.length>0&&n.forEach((function(e,n){0===e.timeSlots.filter((function(e){return""!==e.startTime&&""!==e.endTime})).length&&(t=!0,a.availability="Selected Availability Day should have time slot")})),this.setState({errors:a}),e}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.errors,s=t.formProccessing,i=t.profileImage,r=t.uploadedDocumentsImages,o="",l="";return""!==i&&(l=c.a.createElement("div",{className:"previewDefaultImage"},c.a.createElement("img",{alt:"default",width:"100",className:"img-fluid img-thumbnail",src:i}))),a&&(o=c.a.createElement(C.a,null)),c.a.createElement("div",{className:"animated fadeIn"},o,c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(p.a,null,c.a.createElement(g.a,{md:"3",className:"mainHeading"},c.a.createElement("strong",{className:"mr-5"},"Investigator Info")))),c.a.createElement(h.a,null,c.a.createElement(f.a,{onSubmit:this.submitHandler,noValidate:!0,className:"oep-form"},c.a.createElement(p.a,null,c.a.createElement(g.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"first_name"},"First Name"),c.a.createElement(E.a,{type:"text",placeholder:"First Name *",invalid:void 0!==n.firstName&&""!==n.firstName,id:"first_name",name:"first_name",value:this.state.formField.first_name,onChange:this.changeHandler,required:!0}),c.a.createElement("div",{className:"invalid-feedback"},n.firstName))),c.a.createElement(g.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"last_name"},"Last Name"),c.a.createElement(E.a,{type:"text",placeholder:"Last Name",id:"last_name",name:"last_name",value:this.state.formField.last_name,onChange:this.changeHandler}),c.a.createElement("div",{className:"invalid-feedback"},n.lastName))),c.a.createElement(g.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"phoneNumber"},"Contact Number"),c.a.createElement(E.a,{type:"text",placeholder:"Contact Number ",id:"phoneNumber",name:"phoneNumber",value:this.state.formField.phoneNumber,onChange:this.changeHandler}))),c.a.createElement(g.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"address"},"Address"),c.a.createElement(_.a,{setLatitudeLongitude:this.setLatitudeLongitude,address:this.state.formField.address}))),c.a.createElement(g.a,{md:"12"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"description"},"Description"),c.a.createElement(E.a,{type:"textarea",placeholder:"Doctor details",id:"description",name:"description",value:this.state.formField.description,onChange:this.changeHandler}))),c.a.createElement(g.a,{md:"12"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"avl"},"Super Specialization "),c.a.createElement("br",null),c.a.createElement(p.a,null,this.state.superSpecializationList.map((function(t,a){return c.a.createElement(g.a,{md:5},c.a.createElement(v.a,{check:!0,inline:!0,key:a},c.a.createElement(S.a,{check:!0},c.a.createElement(I,{label:t.specializationName,isSelected:e.state.selectedServices.indexOf(t.specializationId)>-1,onCheckboxChange:e.handleSuperSpecializationChange,value:t.specializationId,key:a}))))})),c.a.createElement("div",{className:"error-feedback"},n.superSpecialization)))),c.a.createElement(g.a,{md:"12"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"avl"},"Specialization "),c.a.createElement("br",null),c.a.createElement(p.a,null,this.state.specializationList.map((function(t,a){return c.a.createElement(g.a,{md:5},c.a.createElement(v.a,{check:!0,inline:!0,key:a},c.a.createElement(S.a,{check:!0},c.a.createElement(I,{label:t.specializationName,isSelected:e.state.selectedServices.indexOf(t.specializationId)>-1,onCheckboxChange:e.handleSpecializationChange,value:t.specializationId,key:a}))))})),c.a.createElement("div",{className:"error-feedback"},n.specialization)))),c.a.createElement(g.a,{md:"12"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"avl"},"Availability "),c.a.createElement("br",null),c.a.createElement("div",{className:"error-feedback"},n.availability),c.a.createElement(p.a,null,z.map((function(t,a){return c.a.createElement(g.a,{md:5},c.a.createElement(v.a,{check:!0,key:a},c.a.createElement(S.a,{check:!0},c.a.createElement(I,{label:e.state.checkboxes[a].dayName,isSelected:e.state.checkboxes[a].isSelected,onCheckboxChange:e.handleAvlChange,value:a,key:e.state.checkboxes[a].day})),e.state.checkboxes[a].isSelected&&e.state.checkboxes[a].timeSlots.length>0?c.a.createElement(v.a,{className:"opening-hours"},c.a.createElement(S.a,{htmlFor:"openTime"},"Opening Hours"),c.a.createElement("br",null),e.state.checkboxes[a].timeSlots.map((function(t,n){return c.a.createElement(p.a,{className:"mb-1"},c.a.createElement(g.a,{md:"5"},c.a.createElement("input",{type:"time",id:"openTime",className:"form-control input-hour",name:"openTime-".concat(a,"-").concat(n),value:t.startTime,onChange:e.changeTimeHandler})),c.a.createElement(g.a,{md:"5"},c.a.createElement("input",{type:"time",id:"closeTime",className:"form-control input-hour",name:"closeTime-".concat(a,"-").concat(n),value:t.endTime,onChange:e.changeTimeHandler})),c.a.createElement(g.a,{md:"1",className:"add-btn"},e.state.checkboxes[a].timeSlots.length-1===n?c.a.createElement("span",{className:"add-more-slots",title:"Add more time slots",onClick:e.addMoreTimeSlots.bind(e,a)},c.a.createElement("i",{className:"fa fa-plus"})):c.a.createElement("span",{className:"remove-more-slots",title:"Remove time slots",onClick:e.removeTimeSlots.bind(e,a,n)},c.a.createElement("i",{className:"fa fa-minus"}))))}))):c.a.createElement(c.a.Fragment,null)))}))))),c.a.createElement(g.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"defaultImage"},"Profile Image"),c.a.createElement(E.a,{type:"file",id:"defaultImage",name:"defaultImage",className:"form-control",onChange:this.handleImageChange}),c.a.createElement("small",null,"Image will be shown as a Doctor profile image."))),c.a.createElement(g.a,{md:"6"},l),c.a.createElement(g.a,{md:"6"},c.a.createElement(v.a,null,c.a.createElement(S.a,{htmlFor:"documents"},"Documents"),c.a.createElement(E.a,{type:"file",id:"documents",name:"documents",className:"form-control",multiple:!0,onChange:this.onDocumentsImageChange}))),c.a.createElement(g.a,{md:"6"},c.a.createElement("div",{className:"previewdocumentsImageArea row"},r.map((function(t,a){return c.a.createElement(b.a,{className:"previewdocumentsImage col-md-2",key:a},c.a.createElement("img",{className:"img-fluid img-thumbnail",width:"80",alt:"documents",src:t})," ",c.a.createElement("i",{className:"fa fa-times text-danger",onClick:function(){window.confirm("Are you sure, you want to delete this image?")&&e.deleteTruckImage(a,"documents")}}))}))))),c.a.createElement(y.a,{color:"primary",disabled:s,type:"submit"},s?"Proccessing...":"Update Details"),"\xa0","","\xa0",c.a.createElement(d.Link,{className:"btn btn-secondary",to:"/admin/manage-investigator/investigator"},"Cancel")))))}}]),a}(l.Component);t.default=T},297:function(e,t,a){"use strict";var n=a(0),s=a.n(n);a(299);t.a=function(){return s.a.createElement("div",{className:"loaderSection"},s.a.createElement("div",{className:"spinner-border text-primary",role:"status"},s.a.createElement("span",{className:"sr-only"},"Loading...")))}},299:function(e,t,a){},353:function(e,t,a){"use strict";var n=a(39),s=a(40),i=a(70),r=a(69),o=a(0),l=a.n(o),c=function(e){Object(i.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={address:"",scriptLoading:!1},s}return Object(s.a)(a,[{key:"render",value:function(){return this.props.updateAddress(this.props.cords),l.a.createElement(l.a.Fragment,null)}}]),a}(l.a.Component);t.a=c},421:function(e,t,a){"use strict";var n=a(39),s=a(40),i=a(71),r=a(70),o=a(69),l=a(0),c=a.n(l),d=a(422),m=a.n(d),u=a(302),p=a(352),g=a(353),h=(a(427),a(47)),f=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).useCurrentLocation=function(e){s.state.locationEnabled?s.props.setLatitudeLongitude(s.state.currentAddress.formatted_address,{latitude:s.state.currentAddress.latitude,longitude:s.state.currentAddress.longitude},s.state.currentAddress.city,s.state.currentAddress.state,s.state.currentAddress.country,s.state.currentAddress.postal_code):u.b.error("Please allow to access your location")},s.handleChange=function(e){s.setState({address:e}),""===e&&s.props.setLatitudeLongitude(e,{lat:"",lng:""})},s.handleSelect=function(e){s.setState({address:e}),console.log(e);var t="",a="",n="",i="";Object(d.geocodeByAddress)(e).then((function(e){for(var s=e[0],r={premise:"short_name",street_number:"short_name",route:"long_name",locality:"long_name",administrative_area_level_1:"long_name",country:"long_name",postal_code:"long_name"},o=0;o<s.address_components.length;o++){var l=s.address_components[o].types[0];r[l]&&("locality"===l?t=s.address_components[o][r[l]]:"country"===l?n=s.address_components[o][r[l]]:"administrative_area_level_1"===l?a=s.address_components[o][r[l]]:"postal_code"===l&&(i=s.address_components[o][r[l]]))}Object(d.getLatLng)(e[0])})).then((function(r){return s.props.setLatitudeLongitude(e,r,t,a,n,i)})).catch((function(e){return console.error("Error",e)}))},s.state={address:"",latitude:"",longitude:"",scriptLoading:!1,currentAddress:{country:"",state:"",city:"",postal_code:"",formatted_address:"",latitude:"",longitude:""},locationEnabled:!1},s.updateGeoLocationAddress=s.updateGeoLocationAddress.bind(Object(i.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;if("undefined"===typeof google){var t=document.createElement("script");t.type="text/javascript",t.src="https://maps.google.com/maps/api/js?key=AIzaSyBmyGVmnHPHZp2eC1XNMx-GaBRC20g9Tck&libraries=places";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(t,a),t.addEventListener("load",(function(t){e.setState({scriptLoading:!0})}))}else this.setState({scriptLoading:!0})}},{key:"updateGeoLocationAddress",value:function(e){var t=this;e.latitude&&e.longitude&&this.setState({latitude:e.latitude,longitude:e.longitude,locationEnabled:!0},(function(){h.a.getExternalAPI("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e.latitude+","+e.longitude+"&key="+h.a.getGoogleAPIKey()).then((function(a){var n=a.data.results?a.data.results[0]:[];if(void 0!==n.address_components&&n.address_components.length>0){var s=n.address_components.filter((function(e){return e.types.indexOf("country")>-1})),i=n.address_components.filter((function(e){return e.types.indexOf("administrative_area_level_1")>-1})),r=n.address_components.filter((function(e){return e.types.indexOf("administrative_area_level_2")>-1})),o=n.address_components.filter((function(e){return e.types.indexOf("postal_code")>-1})),l=n.formatted_address||"",c={country:s.length>0?s[0].long_name:"",state:i.length>0?i[0].long_name:"",city:r.length>0?r[0].long_name:"",postal_code:o.length>0?o[0].long_name:"",formatted_address:l,latitude:e.latitude,longitude:e.longitude};t.setState({currentAddress:c})}})).catch((function(e){}))}))}},{key:"render",value:function(){var e=""===this.state.address&&this.props.address?this.props.address:this.state.address;return this.state.scriptLoading?c.a.createElement(c.a.Fragment,null,this.props.isGeolocationAvailable&&this.props.isGeolocationEnabled?null==this.props.coords||this.state.locationEnabled?c.a.createElement(c.a.Fragment,null):c.a.createElement(g.a,{cords:this.props.coords,updateAddress:this.updateGeoLocationAddress}):c.a.createElement(c.a.Fragment,null),c.a.createElement("span",{className:"use-current-location pull-right",onClick:this.useCurrentLocation},c.a.createElement("span",{className:"location-icon"},c.a.createElement("img",{src:"https://retailoep.com/current_location.png",alt:" Current Location",className:"current-location-icon"})),"Use current location"),c.a.createElement(m.a,{value:e,onChange:this.handleChange,onSelect:this.handleSelect},(function(e){var t=e.getInputProps,a=e.suggestions,n=e.getSuggestionItemProps,s=e.loading;return c.a.createElement("div",null,c.a.createElement("input",t({name:"address",placeholder:"Search Location ...",className:"form-control location-search-input"})),c.a.createElement("div",{className:"autocomplete-dropdown-container"},s&&c.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item",a=e.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return c.a.createElement("div",n(e,{className:t,style:a}),c.a.createElement("strong",null,e.formattedSuggestion.mainText)," ",c.a.createElement("small",null,e.formattedSuggestion.secondaryText))}))))}))):c.a.createElement(c.a.Fragment,null)}}]),a}(c.a.Component);t.a=Object(p.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(f)},427:function(e,t,a){},892:function(e,t,a){}}]);
//# sourceMappingURL=41.edbebcb6.chunk.js.map