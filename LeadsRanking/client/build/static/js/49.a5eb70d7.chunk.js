(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[49],{1291:function(e,t,a){"use strict";a.r(t);var n=a(123),l=a(39),r=a(40),i=a(121),o=a(42),c=a(41),s=a(0),d=a.n(s),m=a(61),u=a(432),f=a(30),p=a(90),h=a(431),y=a(448),v=(a(441),a(91)),g=a.n(v),D=a(51),b=a.n(D),E=(a(425),a(428)),M=a(430),T=(a(427),a(92)),C=(a(187),a(530)),S=a(424),I=a(531),Y=a(533),O=a(563),N=a(532),k=a(420),_=a(1262),A=a(1336),w=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){e._isAMomentObject&&n.setState({ReportDate:e.format("YYYY-MM-DD")},(function(){this.fetchCallBackData()}))},n.handleStartDateChange=function(e,t){e._isAMomentObject&&n.setState({startdate:e.format("YYYY-MM-DD"),enddate:e.add(60,"days").format("YYYY-MM-DD")},(function(){}))},n.handleEndDateChange=function(e,t){e._isAMomentObject&&n.setState({enddate:e.format("YYYY-MM-DD")},(function(){}))},n.validation=function(e){return e.isBefore(b()())},n.validationEndDate=function(e){return!!e.isBefore(b()(n.state.enddate))&&!e.isBefore(b()(n.state.startdate))},n.state={root:"conference",PageTitle:"ConferenceDetails",ConferenceDetails:[],ProductId:0,ReportDate:b()().subtract(1,"days").format("YYYY-MM-DD"),ReportTime:null,SelectedSupervisors:[],ConfType:"sales_to_service",startdate:b()().format("YYYY-MM-DD"),enddate:b()().add(60,"days").format("YYYY-MM-DD"),showMoreInfoModal:!1,MoreInfoData:[],addClass:"fa fa-play-circle",confTypes:[]},n.conftypechange=n.conftypechange.bind(Object(i.a)(n)),n.columnlist=[{label:"CallId",name:"callid",width:"150px",type:"string",cell:function(e){return d.a.createElement("div",{className:"callid"},e.callid?e.callid:"N.A")}},{label:"ServerIp",name:"ServerIp",hide:!0,cell:function(e){return d.a.createElement("div",{className:"serverip"},e.ServerIp?e.ServerIp:"N.A")}},{label:"LeadId",name:"LeadId",searchable:!0},{label:"BookingId",name:"BookingId",searchable:!0},{label:"Campaign",name:"Campaign"},{label:"TP Call Type",name:"blocked_agent_call",cell:function(e){return d.a.createElement("div",{className:"insurer_name"},e.blocked_agent_call?"BlockedAgent":"Queue")}},{label:"Insurer",name:"insurer_name",cell:function(e){return d.a.createElement("div",{className:"insurer_name"},e.insurer_name?e.insurer_name:"N.A")}},{label:"TTBeforeTransfer",name:"TTBeforeTransfer",sortable:!0,width:"130px",cell:function(e){return Object(p.k)(e.TTBeforeTransfer)}},{label:"Transfered By",name:"TransferedBy",searchable:!0},{label:"TransferInitiateTime",name:"TransferInitiateTime",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.TransferInitiateTime?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.TransferInitiateTime):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"TP Answer Time",name:"ServiceAgentAnswerTime",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.ServiceAgentAnswerTime?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.ServiceAgentAnswerTime):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"CallConferenceTime",name:"CallConferenceTime",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.CallConferenceTime?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.CallConferenceTime):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"ConferenceCancelTime",name:"ConferenceCancelTime",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.ConferenceCancelTime?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.ConferenceCancelTime):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"CustomerDisconnectTime",name:"CustomerDisconnectTime",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.CustomerDisconnectTime?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.CustomerDisconnectTime):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"Disconnect(First Agent)",name:"SalesAgentDisconnect",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.SalesAgentDisconnect?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.SalesAgentDisconnect):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"Disconnect(TP)",name:"ServiceAgentDisconnect",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.ServiceAgentDisconnect?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.ServiceAgentDisconnect):"N.A")},type:"datetime",sortable:!0,width:"150px"},{name:"TransferedToAgent",label:"TP Agent",type:"string",cell:function(e){return d.a.createElement("div",{className:"transferedagent"},e.TransferedToAgent?e.TransferedToAgent:"N.A")}},{name:"ThirdPartyDialStatus",label:"TP CallStatus",type:"string",cell:function(e){return d.a.createElement("div",{className:"ThirdPartyDialStatus"},e.ThirdPartyDialStatus?e.ThirdPartyDialStatus:"N.A")}},{label:"Hanguptime",name:"Hanguptime",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.Hanguptime?d.a.createElement(g.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.Hanguptime):"N.A")},type:"datetime",sortable:!0,width:"150px"},{label:"More Info",name:"More Info",cell:function(e){return d.a.createElement("div",{className:"moreinfo"},d.a.createElement("a",{onClick:function(t){return n.clickMoreinfo(t,e)},className:"detailsinfo"},d.a.createElement("i",{className:"fa fa-eye"})))}}],n.ConfTypeList={config:{root:"Products",data:[{Id:"sales_to_service",Display:"Life Hot Call Transfer"},{Id:"telimedical",Display:"Teli-Medical [BMS Transfer]"},{Id:"telemax",Display:"Tele-Max"},{Id:"telehdfc",Display:"Tele-Hdfc"},{Id:"teleipru",Display:"Tele-Ipru"},{Id:"teletata",Display:"Tele-Tata"},{Id:"tltransfer",Display:"TLTransfer"},{Id:"transfer_salesservice",Display:"Service Agent Transfer"},{Id:0,Display:"Other"}]}},n.moreinfolist=[{name:"callid",selector:"callid"},{name:"leadid",selector:"leadid"},{name:"Calldate",cell:function(e){return d.a.createElement("div",{className:"calldate"},e.calldate?d.a.createElement(g.a,{utc:!0,format:"YYYY-MM-DD HH:mm:ss"},e.calldate):"N.A")}},{name:"agentno",selector:"agentno"},{name:"agentid",selector:"agentid"},{name:"duration",selector:"ringtime"},{name:"disposition",selector:"custom_disposition"},{name:"Listen",cell:function(e){return["Playback","Hangup"].indexOf(e.custom_disposition)>-1?"No file found":d.a.createElement("div",{className:"listen"},n.getHtmlListenMoreInfo(e))}}],n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.GetMySqlData({root:"getConferenceType"},function(e){this.setState({confTypes:e.data.data[0]})}.bind(this))}},{key:"componentWillMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){e.CommonData.isError||console.log(e.CommonData[this.state.root])}},{key:"fnDatatableCol",value:function(){return Object(p.e)(this.columnlist)}},{key:"clickMoreinfo",value:function(e,t){var a="10.0.91.34",n=t.callid;"telemax"==t.Campaign&&(a="10.0.91.32"),"telimedical"==this.state.ConfType&&(a=t.ServerIp),t.blocked_agent_call&&(a=t.ServerIp),this.props.GetMySqlData({root:"moreinfo",uniqueid:n,queueServerIp:a,startdate:this.state.startdate,enddate:this.state.enddate},function(e){this.setState({showMoreInfoModal:!0,MoreInfoData:e.data.data[0]})}.bind(this))}},{key:"fetchConferenceData",value:function(){this.props.GetMySqlData({root:this.state.root,startdate:this.state.startdate,enddate:this.state.enddate,conftype:this.state.ConfType},function(e){this.setState({ConferenceDetails:e.data.data[0]})}.bind(this))}},{key:"play",value:function(e){var t=document.getElementById("audio_"+e),a=document.getElementById("play"+e);t.paused?(t.play(),a.classList.remove("fa-play-circle"),a.classList.add("fa-stop-circle")):(t.pause(),t.currentTime=0,a.classList.remove("fa-stop-circle"),a.classList.add("fa-play-circle"))}},{key:"getHtmlListenMoreInfo",value:function(e){var t=this;return d.a.createElement("span",{id:"span_"+e.row_num,onClick:function(a){return t.CreateMoreInfoRecordingURL(a,e)}},d.a.createElement("i",{class:"fa fa-play-circle listen"}))}},{key:"CreateMoreInfoRecordingURL",value:function(e,t){var a=document.getElementById("audio2"),n=t.row_num;if(a.paused){document.getElementById("span_"+n).innerHTML='<i class="fa fa-spinner fa-spin"></i>';var l=t.userfield,r=t.dstchannel,i=b()(new Date(l)).format("DD-MM-YYYY"),o=b()(new Date(l)).format("H"),c=b()(new Date(l)).format("YYYYMMDDHHmmss"),s=r.substring(r.indexOf("/")+1,r.indexOf("-")),d=t.callid;console.log(i,o,c,s,d);var u="recording/"+i+"/"+o+"/"+d+"-"+c+"-"+s+".wav";if("Invalid date"==i||"Invalid date"==o||"Invalid date"==c||null==s)return void(document.getElementById("span_"+n).innerHTML="No File Found");Object(m.e)(u,"asterisk-log",function(l){if(console.log("results",l),200==l.data.status){var r=l.data.data;a.src=l.data.data,document.getElementById("span_"+n).innerHTML='<i class="fa fa-spinner fa-spin"></i>',Object(m.m)(r,(function(l){if(l&&l.status&&404!=l.status)a.onloadedmetadata=function(){console.log(a.duration),a.play(),console.log(a.duration),0==a.paused&&a.duration>0&&"Infinity"!=a.duration&&"NaN"!=a.duration?(document.getElementById("span_"+n).innerHTML='<i class="fa fa-stop-circle listen"></i>',a.onended=function(){document.getElementById("span_"+n).innerHTML='<i class="fa fa-play-circle listen"></i>'}):document.getElementById("span_"+n).innerHTML="No File Found"};else try{document.getElementById("span_"+t.row_num).innerHTML="File not found"}catch(e){}}))}else document.getElementById("span_"+n).innerHTML="No File Found"}.bind(this))}else a.pause(),a.currentTime=0,document.getElementById("span_"+n).innerHTML='<i class="fa fa-play-circle listen"></i>'}},{key:"conftypechange",value:function(e,t){this.setState({ConfType:e.target.value},(function(){}))}},{key:"render",value:function(){var e,t,a=this,l=this.fnDatatableCol(),r=this.moreinfolist,i=this.state,o=(i.items,i.PageTitle),c=i.ConferenceDetails,s=i.showAlert,m=i.AlertMsg,u=i.AlertVarient,f=(i.ReportTime,i.MoreInfoData);console.log(c);return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"content"},d.a.createElement(E.a,{show:s,variant:u,body:m}),d.a.createElement(M.a,null),d.a.createElement(C.a,null,d.a.createElement(S.a,{md:"12"},d.a.createElement(I.a,null,d.a.createElement(Y.a,null,d.a.createElement(C.a,null,d.a.createElement(S.a,{md:3},d.a.createElement(O.a,{tag:"h4"},o)),d.a.createElement(S.a,{md:3},d.a.createElement(k.a.Group,{as:S.a,md:12,controlId:"conftype_dropdown"},d.a.createElement(y.a,{firstoption:"Select Conference Type",items:this.state.confTypes,onChange:this.conftypechange}))),d.a.createElement(S.a,{md:2},d.a.createElement(T,(e={value:new Date,dateFormat:"YYYY-MM-DD"},Object(n.a)(e,"value",this.state.startdate),Object(n.a)(e,"isValidDate",this.validation),Object(n.a)(e,"onChange",(function(e){return a.handleStartDateChange(e)})),Object(n.a)(e,"utc",!0),Object(n.a)(e,"timeFormat",!1),e))),d.a.createElement(S.a,{md:2},d.a.createElement(T,(t={value:new Date,dateFormat:"YYYY-MM-DD"},Object(n.a)(t,"value",this.state.enddate),Object(n.a)(t,"isValidDate",this.validationEndDate),Object(n.a)(t,"onChange",(function(e){return a.handleEndDateChange(e)})),Object(n.a)(t,"utc",!0),Object(n.a)(t,"timeFormat",!1),t))),d.a.createElement(S.a,{md:1},d.a.createElement(_.a,{variant:"primary",onClick:function(){return a.fetchConferenceData()}},"Fetch")),d.a.createElement(S.a,{md:2}))),d.a.createElement(N.a,null,d.a.createElement(h.a,{columns:l,data:c&&c.length>0?c:[]}))))),d.a.createElement("audio",{src:"",id:"audio2"}),d.a.createElement(A.a,{show:this.state.showMoreInfoModal,onHide:function(){return a.setState({showMoreInfoModal:!1})},dialogClassName:"modal-90w"},d.a.createElement(A.a.Header,{closeButton:!0},d.a.createElement(A.a.Title,null)),d.a.createElement(A.a.Body,null,d.a.createElement("div",{className:"modalmoreinfodata"},d.a.createElement(h.a,{columns:r,data:f&&f.length>0?f:[],pagination:!1,striped:!0,noHeader:!0,highlightOnHover:!0,dense:!0}))),d.a.createElement(A.a.Footer,null))))}}]),a}(d.a.Component);t.default=Object(f.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:m.g,GetCommonspData:m.h,GetMySqlData:u.b})(w)},428:function(e,t,a){"use strict";var n=a(39),l=a(40),r=a(42),i=a(41),o=a(0),c=a.n(o),s=a(440),d=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={show:l.props.show},l}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show}),e.show&&setTimeout(function(){this.setState({show:!1})}.bind(this),5e3)}},{key:"render",value:function(){return this.state.show?c.a.createElement(s.a,{variant:this.props.variant},this.props.body):null}}]),a}(c.a.Component);t.a=d},432:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return m})),a.d(t,"a",(function(){return u}));var n=a(4),l=a.n(n),r=a(1),i=a(9),o=function(e){return e.dataToSend.state&&e.dataToSend.statename&&localStorage.setItem(e.dataToSend.statename,JSON.stringify(e.data)),{type:i.a.GET_COMMON_SUCCESS,payload:e.data,root:e.dataToSend.root}},c=function(e){return{type:i.a.GET_COMMON_FAIL,payload:e}},s=function(e,t){if(null!=e.data||void 0!=e.data)return function(t,a){t(o({data:e.data,dataToSend:e}))};try{if(e.state&&localStorage.getItem(e.statename)||localStorage.getItem(e.statename))return function(t,a){var n=JSON.parse(localStorage.getItem(e.statename));t(o({data:n,dataToSend:e}))}}catch(a){}return function(a,n){l.a.get(r.a.api.base_url+"/mydb/list/",{params:e}).then((function(n){e.state&&e.statename&&localStorage.setItem(e.statename,JSON.stringify(n.data.data)),t&&t(n),a(o({data:n.data.data[0],dataToSend:e}))})).catch((function(e){a(c(e))}))}},d=function(e,t){return function(a,n){l.a.post(r.a.api.base_url+"/mydb/insert/",{data:e}).then((function(e){var n;t&&t(e),a((n={data:e.data},{type:i.a.INSERT_COMMON_SUCCESS,payload:n.data}))})).catch((function(e){a(function(e){return{type:i.a.INSERT_COMMON_FAIL,payload:e}}(e))}))}},m=function(e,t){return function(a,n){l.a.post(r.a.api.base_url+"/mydb/update/",{data:e}).then((function(e){var n;t&&t(e),a((n={data:e.data},{type:i.a.UPDATE_COMMON_SUCCESS,payload:n.data}))})).catch((function(e){a(function(e){return{type:i.a.UPDATE_COMMON_FAIL,payload:e}}(e))}))}},u=function(e,t){try{if(e.state&&localStorage.getItem(e.statename)||localStorage.getItem(e.statename)){var a=JSON.parse(localStorage.getItem(e.statename));return void t(a)}}catch(n){}l.a.get(r.a.api.base_url+"/mydb/list/",{params:e}).then((function(a){e.state&&e.statename&&localStorage.setItem(e.statename,JSON.stringify(a.data.data)),t(a.data.data)})).catch((function(e){}))}},441:function(e,t,a){"use strict";var n=a(39),l=a(40),r=a(42),i=a(41),o=a(0),c=a.n(o),s=a(61),d=a(90),m=a(1289),u=a(185),f=(a(452),a(453)),p=a.n(f),h=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={nodes:[],checked:[],expanded:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=2==Object(d.j)().RoleId?75:Object(d.j)().UserID;Object(s.k)({root:"Hierarchy",ManagerId:e,statename:"Hierarchy-"+e,value:this.props.value,state:!0},function(e){var t=JSON.stringify(e).replace(/UserName/g,"label");t=t.replace(this.props.value,"value"),this.setState({nodes:JSON.parse(t)})}.bind(this))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"onButtonClick",value:function(){this.props.handleShow({SelectedSupervisors:this.state.checked}),this.forceUpdate()}},{key:"onMouseEnter",value:function(e){document.getElementById("floating").style.right=0,document.getElementById("handle").style.right="395px"}},{key:"onMouseOut",value:function(e){setTimeout((function(){document.getElementById("floating").style.right="-400px",document.getElementById("handle").style.right="-15px"}),700)}},{key:"RemoveChecked",value:function(e){var t=this.state.checked,a=t.indexOf(e);a>-1&&t.splice(a,1),this.setState(t)}},{key:"onClick",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.nodes;t.checked;return 0==a.length?null:c.a.createElement("div",{id:"floating",className:"floating",onMouseLeave:this.onMouseOut},c.a.createElement(m.a,null,c.a.createElement(u.a,{md:"8"},c.a.createElement("div",{id:"handle",className:"handle",onClick:this.onMouseEnter},"Filter")),c.a.createElement(u.a,{md:"4"},c.a.createElement("input",{type:"button",className:"btn btn-primary",onClick:this.onButtonClick.bind(this),value:"Show"}))),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement("div",{className:"managers"},c.a.createElement(p.a,{nodes:a,checked:this.state.checked,expanded:this.state.expanded,checkModel:"all",name:"UserName",showNodeIcon:!1,onCheck:function(t){return e.setState({checked:t})},onExpand:function(t){return e.setState({expanded:t})},showExpandAll:!0})))))}}]),a}(c.a.Component);t.a=h},448:function(e,t,a){"use strict";var n=a(39),l=a(40),r=a(42),i=a(41),o=a(0),c=a.n(o),s=a(420),d=(a(30),a(61),function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={items:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({items:e.items})}},{key:"displayoption",value:function(e){return c.a.createElement("option",{key:e.Id,value:e.Id},e.Display)}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.value,l=t.onChange,r=t.visible,i=t.items;return i||(i=[]),0==r?null:c.a.createElement("div",null,c.a.createElement(s.a.Control,{as:"select",disabled:this.props.disabled,value:n,name:a,onChange:l},!1!==this.props.firstoption&&c.a.createElement("option",{key:0,value:0},this.props.firstoption?this.props.firstoption:"Select"),i.map((function(t){return e.displayoption(t)}))))}}]),a}(c.a.Component));t.a=d}}]);
//# sourceMappingURL=49.a5eb70d7.chunk.js.map