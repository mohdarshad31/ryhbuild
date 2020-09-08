(this.webpackJsonpResearchYourHealth=this.webpackJsonpResearchYourHealth||[]).push([[48],{1165:function(e,a,t){"use strict";t.r(a);var n=t(39),l=t(40),r=t(71),s=t(70),c=t(69),i=t(0),o=t.n(i),d=t(872),m=t(336),u=t(337),g=t(302),h=(t(305),t(47));t(871);function f(e,a){return Math.floor(Math.random()*(a-e+1)+e)}for(var E=[],v=[],p=[],b=0;b<=27;b++)E.push(f(50,200)),v.push(f(80,100)),p.push(65);var x=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},l.toggle=l.toggle.bind(Object(r.a)(l)),l.onRadioBtnClick=l.onRadioBtnClick.bind(Object(r.a)(l)),l.state={dropdownOpen:!1,radioSelected:2,loading:!1,dashBoardStats:{organizationCount:0,inspectionCount:0,totalTemplate:0,totalPatients:0},inspectionLabels:[],inspectionData:[],organizationLables:[],organizationData:[],totalTemplate:0,storeWalkLables:[],storeWalkData:[],totalPatients:0,subscriberGraphData:[],subscriberGraphLables:[],conductedInspection:{labels:[],data:[]},selected:void 0,hovered:void 0,pieChartData:[{title:"One",value:10,color:"#34bae9"},{title:"Two",value:15,color:"#42d9bf"},{title:"Three",value:20,color:"#f83179"},{title:"Three",value:20,color:"#fdc102"}]},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){h.a.getAPIWithAccessToken("dashboard").then((function(a){if(console.log(a),void 0===a.data.data||!a.data.status)return e.setState({loading:!1}),void g.b.error(a.data.message);e.setState({loading:!1,dashBoardStats:a.data.data})})).catch((function(a){void 0!==a.response&&401===a.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),g.b.error(a.message))}))}))}},{key:"getConductedGraph",value:function(){var e=this;h.a.getAPIWithAccessToken("dashboard/conducted-inspection").then((function(a){if(console.log(a),void 0===a.data.data||!a.data.status)return e.setState({loading:!1}),void g.b.error(a.data.message);var t=a.data.data,n=e.state.conductedInspection;n.labels=t.inspectionConducted.labels,n.data=t.inspectionConducted.data,e.setState({conductedInspection:n})})).catch((function(a){void 0!==a.response&&401===a.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),g.b.error(a.message))}))}},{key:"storeWalkGraph",value:function(){var e=this;h.a.getAPIWithAccessToken("dashboard/store-walk-graph").then((function(a){if(console.log(a),void 0===a.data.data||!a.data.status)return e.setState({loading:!1}),void g.b.error(a.data.message);var t=a.data.data;e.setState({totalTemplate:t.totalTemplate})})).catch((function(a){void 0!==a.response&&401===a.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),g.b.error(a.message))}))}},{key:"subscriptionGraph",value:function(){var e=this;h.a.getAPIWithAccessToken("dashboard/subscription-graph").then((function(a){if(console.log(a),void 0===a.data.data||!a.data.status)return e.setState({loading:!1}),void g.b.error(a.data.message);var t=a.data.data;e.setState({totalPatients:t.totalPatients,subscriberGraphData:t.subscriptionData.data,subscriberGraphLables:t.subscriptionData.labels})})).catch((function(a){void 0!==a.response&&401===a.response.status?(localStorage.clear(),e.props.history.push("/login")):(e.setState({loading:!1}),g.b.error(a.message))}))}},{key:"toggle",value:function(){this.setState({dropdownOpen:!this.state.dropdownOpen})}},{key:"onRadioBtnClick",value:function(e){this.setState({radioSelected:e})}},{key:"setSelected",value:function(e){var a=e===this.state.selected?void 0:e;this.setState({selected:a})}},{key:"setHovered",value:function(e){this.setState({hovered:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",sm:"6",lg:"3"},o.a.createElement("div",{id:"pie-chart-profile"},o.a.createElement(d.PieChart,{style:{fontFamily:'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',fontSize:"8px"},data:this.state.pieChartData,radius:d.PieChart.defaultProps.radius-6,lineWidth:60,segmentsStyle:{transition:"stroke .3s",cursor:"pointer"},segmentsShift:function(a){return a===e.state.selected?6:1},animate:!0,label:function(e){var a=e.dataEntry;return Math.round(a.percentage)+"%"},labelPosition:70,labelStyle:{fill:"#fff",opacity:.75,pointerEvents:"none"},onClick:function(a,t){e.setSelected(t)},onMouseOver:function(a,t){e.setHovered(t)},onMouseOut:function(){e.setHovered(void 0)}}))),o.a.createElement(u.a,{xs:"12",sm:"6",lg:"9"},o.a.createElement("div",{className:"dashbpard-card"},o.a.createElement("div",{className:"border-card"}),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",sm:"6",lg:"3"},o.a.createElement("div",{className:" "},o.a.createElement("div",{class:"no-gutters align-items-center p-3"},o.a.createElement("div",{className:"col text-center dash-card-c"},o.a.createElement("p",null,"Total",o.a.createElement("br",null)," Clinical Trial")),o.a.createElement("div",{class:"col"},o.a.createElement("div",{class:"h5 mb-0 one"},this.state.dashBoardStats.inspectionCount),o.a.createElement("div",{class:"text-xs text-primary mb-1"},"Total Clinical Trial"))))),o.a.createElement(u.a,{xs:"12",sm:"6",lg:"3"},o.a.createElement("div",{className:" "},o.a.createElement("div",{class:" no-gutters align-items-center p-3"},o.a.createElement("div",{className:"col text-center dash-card-c"},o.a.createElement("p",null,"Total",o.a.createElement("br",null)," Doctors")),o.a.createElement("div",{class:"col"},o.a.createElement("div",{class:"h5 mb-0 two"},this.state.dashBoardStats.organizationCount),o.a.createElement("div",{class:"text-xs text-success mb-1"},"Total Doctors"))))),o.a.createElement(u.a,{xs:"12",sm:"6",lg:"3"},o.a.createElement("div",{className:""},o.a.createElement("div",{class:" no-gutters align-items-center p-3"},o.a.createElement("div",{className:"col text-center dash-card-c"},o.a.createElement("p",null,"Total",o.a.createElement("br",null)," Patients")),o.a.createElement("div",{class:"col"},o.a.createElement("div",{class:"h5 mb-0 three"},this.state.dashBoardStats.totalPatients),o.a.createElement("div",{class:"text-xs text-info mb-1"},"Total Paitents"))))),o.a.createElement(u.a,{xs:"12",sm:"6",lg:"3"},o.a.createElement("div",{className:""},o.a.createElement("div",{class:" no-gutters align-items-center p-3"},o.a.createElement("div",{className:"col text-center dash-card-c"},o.a.createElement("p",null,"Total",o.a.createElement("br",null)," Templates")),o.a.createElement("div",{class:"col mr-2"},o.a.createElement("div",{class:"h5 mb-0 four"},this.state.dashBoardStats.totalTemplate),o.a.createElement("div",{class:"text-xs text-warning mb-1"},"Total Templates"))))))))),o.a.createElement(m.a,{className:"mt-5 mb-5"},o.a.createElement(u.a,{xs:"6",md:"3",lg:"3 card-m-5"},o.a.createElement("div",{className:"card-detail"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"inner-card-detail pink"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"12"},o.a.createElement("p",null,"Ongoing ",o.a.createElement("br",null),"Clinical Trial"),o.a.createElement("div",{className:"card-num Number-C-1"},o.a.createElement("p",null,"4")))),o.a.createElement("div",{className:"inner-card-detail-1"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"12"},o.a.createElement("div",{className:"Number-C-1"},o.a.createElement("p",null," 1 ",o.a.createElement("br",null)," Inactive"))))))),o.a.createElement(u.a,{xs:"6",md:"3",lg:"3 card-m-5"},o.a.createElement("div",{className:"card-detail"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"inner-card-detail Yellow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"12"},o.a.createElement("p",null,"Clinical",o.a.createElement("br",null)," Trial Result"),o.a.createElement("div",{className:"card-num Number-C-2"},o.a.createElement("p",null,"4")))),o.a.createElement("div",{className:"inner-card-detail-1"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"12"},o.a.createElement("div",{className:"Number-C-2"},o.a.createElement("p",null,"2 ",o.a.createElement("br",null)," Restarted"))))))),o.a.createElement(u.a,{xs:"6",md:"3",lg:"3 card-m-5"},o.a.createElement("div",{className:"card-detail"},o.a.createElement(m.a,null,o.a.createElement("div",{className:"inner-card-detail turquoise"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"12"},o.a.createElement("p",null,"Ongoing ",o.a.createElement("br",null),"Clinical Trial Patients"),o.a.createElement("div",{className:"card-num Number-C-3"},o.a.createElement("p",null,"4")))),o.a.createElement("div",{className:"inner-card-detail-1"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"12"},o.a.createElement("div",{className:"Number-C-3"},o.a.createElement("p",null,"2"),o.a.createElement("p",null,"Inactive")))))))),o.a.createElement("div",{className:"TableCard mb-5"},o.a.createElement(m.a,{className:"TableHeader"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"6"},o.a.createElement("h4",{className:""},"Clinical Trial Conducted")),o.a.createElement(u.a,{xs:"12",md:"12",lg:"6"},o.a.createElement("div",{className:"datePicker"},o.a.createElement("input",{type:"text",placeholder:"July, 2020"})))),o.a.createElement("div",{className:"TableCard-1"},o.a.createElement(m.a,{className:"cardRow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},"21 July, 2020"),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},o.a.createElement("div",{className:"btn profie-btn"},"Lipid Profile")),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},o.a.createElement("div",{className:"btn profie-btn"},"Lipid Profile")),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"})),o.a.createElement(m.a,{className:"cardRow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},"21 July, 2020"),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"})),o.a.createElement(m.a,{className:"cardRow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},"21 July, 2020"),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"})),o.a.createElement(m.a,{className:"cardRow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},"21 July, 2020"),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},o.a.createElement("div",{className:"btn profie-btn"},"Lipid Profile")),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"})),o.a.createElement(m.a,{className:"cardRow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},"21 July, 2020"),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"})),o.a.createElement(m.a,{className:"cardRow"},o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},"21 July, 2020"),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},o.a.createElement("div",{className:"btn profie-btn"},"Lipid Profile")),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"},o.a.createElement("div",{className:"btn profie-btn"},"Lipid Profile")),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"}),o.a.createElement(u.a,{xs:"12",md:"12",lg:"2"})))))}}]),t}(i.Component);a.default=x},336:function(e,a,t){"use strict";var n=t(5),l=t(21),r=t(0),s=t.n(r),c=t(30),i=t.n(c),o=t(290),d=t.n(o),m=t(291),u=i.a.oneOfType([i.a.number,i.a.string]),g={tag:m.p,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},h={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,i=e.form,o=e.widths,u=Object(l.a)(e,["className","cssModule","noGutters","tag","form","widths"]),g=[];o.forEach((function(a,t){var n=e[a];if(delete u[a],n){var l=!t;g.push(l?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var h=Object(m.l)(d()(a,r?"no-gutters":null,i?"form-row":"row",g),t);return s.a.createElement(c,Object(n.a)({},u,{className:h}))};f.propTypes=g,f.defaultProps=h,a.a=f},337:function(e,a,t){"use strict";var n=t(5),l=t(21),r=t(0),s=t.n(r),c=t(30),i=t.n(c),o=t(290),d=t.n(o),m=t(291),u=i.a.oneOfType([i.a.number,i.a.string]),g=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:u,offset:u})]),h={tag:m.p,xs:g,sm:g,md:g,lg:g,xl:g,className:i.a.string,cssModule:i.a.object,widths:i.a.array},f={tag:"div",widths:["xs","sm","md","lg","xl"]},E=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,i=Object(l.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,n){var l=e[a];if(delete i[a],l||""===l){var r=!n;if(Object(m.j)(l)){var s,c=r?"-":"-"+a+"-",u=E(r,a,l.size);o.push(Object(m.l)(d()(((s={})[u]=l.size||""===l.size,s["order"+c+l.order]=l.order||0===l.order,s["offset"+c+l.offset]=l.offset||0===l.offset,s)),t))}else{var g=E(r,a,l);o.push(g)}}})),o.length||o.push("col");var u=Object(m.l)(d()(a,o),t);return s.a.createElement(c,Object(n.a)({},i,{className:u}))};v.propTypes=h,v.defaultProps=f,a.a=v},871:function(e,a,t){},872:function(e,a,t){!function(e,a){"use strict";var t="default"in a?a.default:a;function n(e){return e*Math.PI/180}function l(e,a,t){return e>t?t:e<a?a:e}function r(e,a){return a/100*e}function s(e,a){return e+a/2}function c(e,a){var t=n(e);return{dx:a*Math.cos(t),dy:a*Math.sin(t)}}function i(e){return"number"===typeof e}function o(e,a){return"function"===typeof e?e(a):e}function d(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}function m(e){e.dataEntry,e.dataIndex;var a=d(e,["dataEntry","dataIndex"]);return t.createElement("text",Object.assign({dominantBaseline:"central"},a))}function u(e){var a,t=e.labelPosition,n=e.lineWidth,l=e.labelHorizontalShift,r=(a=l,Math.round(1e14*(a+Number.EPSILON))/1e14);return 0===r?"middle":t>100?r>0?"start":"end":t<100-n?r>0?"end":"start":"middle"}function g(e,a){return e.map((function(e,n){var l,i=null!=(l=o(a.segmentsShift,n))?l:0,d=r(a.radius,a.labelPosition)+i,g=c(s(e.startAngle,e.degrees),d),h=g.dx,f=g.dy,E={x:a.center[0],y:a.center[1],dx:h,dy:f,textAnchor:u({labelPosition:a.labelPosition,lineWidth:a.lineWidth,labelHorizontalShift:h}),dataEntry:e,dataIndex:n,style:o(a.labelStyle,n)};return a.label&&function(e,a){var n=e(a);return"string"===typeof n||"number"===typeof n?t.createElement(m,Object.assign({key:"label-"+(a.dataEntry.key||a.dataIndex)},a),n):t.isValidElement(n)?n:null}(a.label,E)}))}m.displayName="ReactMinimalPieChartLabel";var h=function(e,a,t,n,l){var r=l-n;if(0===r)return[];var s=t*Math.cos(n)+e,c=t*Math.sin(n)+a,i=t*Math.cos(l)+e,o=t*Math.sin(l)+a;return[["M",s,c],["A",t,t,0,Math.abs(r)<=Math.PI?"0":"1",r<0?"0":"1",i,o]]};function f(e){var a,o,m=e.cx,u=e.cy,g=e.lengthAngle,f=e.lineWidth,E=e.radius,v=e.shift,p=void 0===v?0:v,b=e.reveal,x=e.rounded,y=e.startAngle,N=e.title,S=d(e,["cx","cy","lengthAngle","lineWidth","radius","shift","reveal","rounded","startAngle","title"]),k=E-f/2,T=c(s(y,g),p),O=function(e,a,t,r,s){var c=l(r,-359.999,359.999);return h(e,a,s,n(t),n(t+c)).map((function(e){return e.join(" ")})).join(" ")}(m+T.dx,u+T.dy,y,g,k);if(i(b)){var P=n(k)*g;o=(a=Math.abs(P))-r(a,b)}return t.createElement("path",Object.assign({d:O,fill:"none",strokeWidth:f,strokeDasharray:a,strokeDashoffset:o,strokeLinecap:x?"round":void 0},S),N&&t.createElement("title",null,N))}function E(e,a,t){var n="stroke-dashoffset "+e+"ms "+a;return t&&t.transition&&(n=n+","+t.transition),{transition:n}}function v(e,a){return e&&function(t){e(t,a)}}function p(e,a,n){var l=null!=n?n:function(e){return e.animate&&!i(e.reveal)?100:e.reveal}(a),s=a.radius,c=a.center,d=c[0],m=c[1],u=r(s,a.lineWidth),g=e.map((function(e,n){var r=o(a.segmentsStyle,n);return t.createElement(f,{cx:d,cy:m,key:e.key||n,lengthAngle:e.degrees,lineWidth:u,radius:s,rounded:a.rounded,reveal:l,shift:o(a.segmentsShift,n),startAngle:e.startAngle,title:e.title,style:Object.assign({},r,a.animate&&E(a.animationDuration,a.animationEasing,r)),stroke:e.color,tabIndex:a.segmentsTabIndex,onBlur:v(a.onBlur,n),onClick:v(a.onClick,n),onFocus:v(a.onFocus,n),onKeyDown:v(a.onKeyDown,n),onMouseOver:v(a.onMouseOver,n),onMouseOut:v(a.onMouseOut,n)})}));return a.background&&g.unshift(t.createElement(f,{cx:d,cy:m,key:"bg",lengthAngle:a.lengthAngle,lineWidth:u,radius:s,rounded:a.rounded,startAngle:a.startAngle,stroke:a.background})),g}function b(e){var n=a.useState(e.animate?0:null),s=n[0],c=n[1];a.useEffect((function(){if(e.animate)return function(){var e,a;return e=setTimeout((function(){e=null,a=requestAnimationFrame((function(){a=null,c(null)}))})),function(){e&&clearTimeout(e),a&&cancelAnimationFrame(a)}}()}),[]);var i=function(e){for(var a=e.data,t=e.lengthAngle,n=e.totalValue,s=e.paddingAngle,c=e.startAngle,i=n||function(e){for(var a=0,t=0;t<e.length;t++)a+=e[t].value;return a}(a),o=l(t,-360,360),d=360===Math.abs(o)?a.length:a.length-1,m=Math.abs(s)*Math.sign(t),u=o-m*d,g=0,h=[],f=0;f<a.length;f++){var E=a[f],v=0===i?0:E.value/i*100,p=r(u,v),b=g+c;g=g+p+m,h.push(Object.assign({percentage:v,startAngle:b,degrees:p},E))}return h}(e);return t.createElement("svg",{viewBox:"0 0 "+e.viewBoxSize[0]+" "+e.viewBoxSize[1],width:"100%",height:"100%",className:e.className,style:e.style},p(i,e,s),e.label&&g(i,e),e.children)}f.displayName="ReactMinimalPieChartPath",b.defaultProps={animationDuration:500,animationEasing:"ease-out",center:[50,50],data:[],labelPosition:50,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100]},b.displayName="ReactMinimalPieChart",e.PieChart=b,Object.defineProperty(e,"__esModule",{value:!0})}(a,t(0))}}]);
//# sourceMappingURL=48.f62ec2d9.chunk.js.map