(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[92],{1313:function(e,t,a){"use strict";a.r(t);var n=a(39),s=a(40),l=a(121),r=a(42),o=a(41),c=a(0),i=a.n(c),u=a(61),m=a(90),d=a(30),h=a(449),p=a.n(h),f=a(441),v=a(430),E=(a(427),a(530)),g=a(424),k=a(531),b=a(533),y=a(563),C=a(532),S=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={PageTitle:"User Stats",items:{},SelectedSupervisors:[],SelectedRows:[],clearSelected:!1,key:"-1",Performancekey:"-1"},s.handleShow=s.handleShow.bind(Object(l.a)(s)),s.statuschange=s.statuschange.bind(Object(l.a)(s)),s.columnlist=[{name:"EmployeeId",selector:"EmployeeId",sortable:!0},{name:"UserName",selector:"UserName",sortable:!0},{name:"GroupName",selector:"GroupName",sortable:!0},{name:"LoginHours (hrs)",selector:"LoginHours",sortable:!0,cell:function(e){return i.a.createElement("span",null,(e.LoginHours/60).toFixed(1)," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"LoginHours"))}},{name:"IdleTime (min)",selector:"IdleTime",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.IdleTime," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"IdleTime",!0))}},{name:"Talktime (min)",selector:"TalkTime",sortable:!0,cell:function(e){return i.a.createElement("span",null,(e.TalkTime/60).toFixed(0)," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"TalkTime"))}},{name:"Attempts",selector:"Attempts",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.Attempts," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"Attempts"))}},{name:"UniqueDials",selector:"UniqueDials",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.UniqueDials," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"UniqueDials"))}},{name:"TotalBreaks",selector:"TotalBreaks",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.TotalBreaks," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"TotalBreaks",!0))}},{name:"MissedCB",selector:"MissedCB",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.MissedCB," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"MissedCB",!0))}},{name:"APE (mtd)",selector:"APE",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.APE," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"APE"))}},{name:"BKGS (mtd)",selector:"BKGS",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.BKGS," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"BKGS"))}},{name:"Missed Attempts",selector:"MissedAttempts",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.MissedAttempts," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"MissedAttempts",!0))}},{name:"Cancel Attempts",selector:"CancelAttempts",sortable:!0,cell:function(e){return i.a.createElement("span",null,e.CancelAttempts," ",s.PerformanceCalculation(e,s.state.items.AvgGroupList,"CancelAttempts",!0))}}],s}return Object(s.a)(a,[{key:"handleShow",value:function(e){this.setState({ReportTime:new Date,SelectedSupervisors:e.SelectedSupervisors}),setTimeout(function(){this.fetchData()}.bind(this),500)}},{key:"statuschange",value:function(e){this.setState({key:e.target.value})}},{key:"CheckPerformance",value:function(e){this.setState({Performancekey:e.target.value})}},{key:"filterdata",value:function(e){var t=this,a=this.state.items.UsersList;if("-1"===this.state.key&&"-1"===this.state.Performancekey)return a;var n=[];return a.forEach((function(e){-1!=t.state.key&&t.state.key.indexOf(e.GroupId)>-1&&n.push(e)})),n&&n.length,n}},{key:"PerformanceCalculation",value:function(e,t,a,n){var s=e.GroupId,l={};t.length>1?t.forEach((function(e){e.GroupId==s&&(l=e)})):l=t[0];var r,o=100*(e[a]/(0==l[a]?1:l[a])-1);return r=1==n?o>0?"fa fa-long-arrow-up userstatred":"fa fa-long-arrow-down userstatgreen":o<0?"fa fa-long-arrow-down userstatred":"fa fa-long-arrow-up userstatgreen",o<0&&(o*=-1),i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:r}," ",o.toFixed(0),"%"))}},{key:"componentDidMount",value:function(){var e=Object(m.j)();this.setState({ReportTime:new Date,SelectedSupervisors:[e.UserID]}),setTimeout(function(){this.fetchData()}.bind(this),500)}},{key:"fetchData",value:function(){var e=this,t=this.state.SelectedSupervisors;this.props.GetCommonspData({root:"GetUserStats",params:[{ManagerIds:t.join()},{UserId:0}]},(function(t){if(t&&t.data&&t.data.data){var a={UsersList:t.data.data[0],AvgGroupList:t.data.data[1]};e.setState({items:a})}})),e.state.SelectedRows.length>0&&e.dtRef.current.handleClearRows()}},{key:"componentWillUnmount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.CommonData.isError}},{key:"render",value:function(){var e=this.columnlist,t=this.state,a=t.items,n=t.PageTitle;console.log(a);var s=this.filterdata(),l=[];return a&&a.AvgGroupList&&a.AvgGroupList.forEach((function(e){l.push(i.a.createElement("option",{value:e.GroupId},e.GroupName))})),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"content"},i.a.createElement(v.a,null),i.a.createElement(E.a,null,i.a.createElement(g.a,{md:"12"},i.a.createElement(k.a,null,i.a.createElement(b.a,null,i.a.createElement(E.a,null,i.a.createElement(g.a,{md:3},i.a.createElement(y.a,{tag:"h4"},n)),i.a.createElement(g.a,{md:5}),i.a.createElement(g.a,{md:2},i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{className:"form-control",onChange:this.CheckPerformance},i.a.createElement("option",{value:"-1"},"ALL"),i.a.createElement("option",{value:"80"},"Less than 80"),i.a.createElement("option",{value:"60"},"Less than 60"),i.a.createElement("option",{value:"50"},"Less than 50"),i.a.createElement("option",{value:"40"},"Less than 40")))),i.a.createElement(g.a,{md:2},i.a.createElement("div",{className:"form-group"},i.a.createElement("select",{className:"form-control",onChange:this.statuschange},i.a.createElement("option",{value:"-1"},"ALL"),l)),i.a.createElement(f.a,{handleShow:this.handleShow,value:/UserID/g})))),i.a.createElement(C.a,null,i.a.createElement("div",{className:"statusdata"},i.a.createElement(p.a,{columns:e,data:s,pagination:!1,striped:!0,noHeader:!0,highlightOnHover:!0,dense:!0,ref:this.dtRef}))))))))}}]),a}(i.a.Component);t.default=Object(d.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:u.g,GetCommonspData:u.h,GetComunicationData:u.i})(S)},427:function(e,t,a){},441:function(e,t,a){"use strict";var n=a(39),s=a(40),l=a(42),r=a(41),o=a(0),c=a.n(o),i=a(61),u=a(90),m=a(1289),d=a(185),h=(a(452),a(453)),p=a.n(h),f=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={nodes:[],checked:[],expanded:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=2==Object(u.j)().RoleId?75:Object(u.j)().UserID;Object(i.k)({root:"Hierarchy",ManagerId:e,statename:"Hierarchy-"+e,value:this.props.value,state:!0},function(e){var t=JSON.stringify(e).replace(/UserName/g,"label");t=t.replace(this.props.value,"value"),this.setState({nodes:JSON.parse(t)})}.bind(this))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"onButtonClick",value:function(){this.props.handleShow({SelectedSupervisors:this.state.checked}),this.forceUpdate()}},{key:"onMouseEnter",value:function(e){document.getElementById("floating").style.right=0,document.getElementById("handle").style.right="395px"}},{key:"onMouseOut",value:function(e){setTimeout((function(){document.getElementById("floating").style.right="-400px",document.getElementById("handle").style.right="-15px"}),700)}},{key:"RemoveChecked",value:function(e){var t=this.state.checked,a=t.indexOf(e);a>-1&&t.splice(a,1),this.setState(t)}},{key:"onClick",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.nodes;t.checked;return 0==a.length?null:c.a.createElement("div",{id:"floating",className:"floating",onMouseLeave:this.onMouseOut},c.a.createElement(m.a,null,c.a.createElement(d.a,{md:"8"},c.a.createElement("div",{id:"handle",className:"handle",onClick:this.onMouseEnter},"Filter")),c.a.createElement(d.a,{md:"4"},c.a.createElement("input",{type:"button",className:"btn btn-primary",onClick:this.onButtonClick.bind(this),value:"Show"}))),c.a.createElement(m.a,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"managers"},c.a.createElement(p.a,{nodes:a,checked:this.state.checked,expanded:this.state.expanded,checkModel:"all",name:"UserName",showNodeIcon:!1,onCheck:function(t){return e.setState({checked:t})},onExpand:function(t){return e.setState({expanded:t})},showExpandAll:!0})))))}}]),a}(c.a.Component);t.a=f}}]);
//# sourceMappingURL=92.53053b86.chunk.js.map