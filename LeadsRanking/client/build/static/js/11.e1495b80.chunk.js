(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[11],{432:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"a",(function(){return m}));var n=a(4),i=a.n(n),s=a(1),l=a(9),r=function(e){return e.dataToSend.state&&e.dataToSend.statename&&localStorage.setItem(e.dataToSend.statename,JSON.stringify(e.data)),{type:l.a.GET_COMMON_SUCCESS,payload:e.data,root:e.dataToSend.root}},o=function(e){return{type:l.a.GET_COMMON_FAIL,payload:e}},c=function(e,t){if(null!=e.data||void 0!=e.data)return function(t,a){t(r({data:e.data,dataToSend:e}))};try{if(e.state&&localStorage.getItem(e.statename)||localStorage.getItem(e.statename))return function(t,a){var n=JSON.parse(localStorage.getItem(e.statename));t(r({data:n,dataToSend:e}))}}catch(a){}return function(a,n){i.a.get(s.a.api.base_url+"/mydb/list/",{params:e}).then((function(n){e.state&&e.statename&&localStorage.setItem(e.statename,JSON.stringify(n.data.data)),t&&t(n),a(r({data:n.data.data[0],dataToSend:e}))})).catch((function(e){a(o(e))}))}},u=function(e,t){return function(a,n){i.a.post(s.a.api.base_url+"/mydb/insert/",{data:e}).then((function(e){var n;t&&t(e),a((n={data:e.data},{type:l.a.INSERT_COMMON_SUCCESS,payload:n.data}))})).catch((function(e){a(function(e){return{type:l.a.INSERT_COMMON_FAIL,payload:e}}(e))}))}},d=function(e,t){return function(a,n){i.a.post(s.a.api.base_url+"/mydb/update/",{data:e}).then((function(e){var n;t&&t(e),a((n={data:e.data},{type:l.a.UPDATE_COMMON_SUCCESS,payload:n.data}))})).catch((function(e){a(function(e){return{type:l.a.UPDATE_COMMON_FAIL,payload:e}}(e))}))}},m=function(e,t){try{if(e.state&&localStorage.getItem(e.statename)||localStorage.getItem(e.statename)){var a=JSON.parse(localStorage.getItem(e.statename));return void t(a)}}catch(n){}i.a.get(s.a.api.base_url+"/mydb/list/",{params:e}).then((function(a){e.state&&e.statename&&localStorage.setItem(e.statename,JSON.stringify(a.data.data)),t(a.data.data)})).catch((function(e){}))}},441:function(e,t,a){"use strict";var n=a(39),i=a(40),s=a(42),l=a(41),r=a(0),o=a.n(r),c=a(61),u=a(90),d=a(1289),m=a(185),h=(a(452),a(453)),f=a.n(h),p=function(e){Object(s.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={nodes:[],checked:[],expanded:[]},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=2==Object(u.j)().RoleId?75:Object(u.j)().UserID;Object(c.k)({root:"Hierarchy",ManagerId:e,statename:"Hierarchy-"+e,value:this.props.value,state:!0},function(e){var t=JSON.stringify(e).replace(/UserName/g,"label");t=t.replace(this.props.value,"value"),this.setState({nodes:JSON.parse(t)})}.bind(this))}},{key:"componentWillReceiveProps",value:function(e){}},{key:"onButtonClick",value:function(){this.props.handleShow({SelectedSupervisors:this.state.checked}),this.forceUpdate()}},{key:"onMouseEnter",value:function(e){document.getElementById("floating").style.right=0,document.getElementById("handle").style.right="395px"}},{key:"onMouseOut",value:function(e){setTimeout((function(){document.getElementById("floating").style.right="-400px",document.getElementById("handle").style.right="-15px"}),700)}},{key:"RemoveChecked",value:function(e){var t=this.state.checked,a=t.indexOf(e);a>-1&&t.splice(a,1),this.setState(t)}},{key:"onClick",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.nodes;t.checked;return 0==a.length?null:o.a.createElement("div",{id:"floating",className:"floating",onMouseLeave:this.onMouseOut},o.a.createElement(d.a,null,o.a.createElement(m.a,{md:"8"},o.a.createElement("div",{id:"handle",className:"handle",onClick:this.onMouseEnter},"Filter")),o.a.createElement(m.a,{md:"4"},o.a.createElement("input",{type:"button",className:"btn btn-primary",onClick:this.onButtonClick.bind(this),value:"Show"}))),o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement("div",{className:"managers"},o.a.createElement(f.a,{nodes:a,checked:this.state.checked,expanded:this.state.expanded,checkModel:"all",name:"UserName",showNodeIcon:!1,onCheck:function(t){return e.setState({checked:t})},onExpand:function(t){return e.setState({expanded:t})},showExpandAll:!0})))))}}]),a}(o.a.Component);t.a=p},472:function(e,t,a){"use strict";a.r(t);var n=a(123),i=a(39),s=a(40),l=a(121),r=a(42),o=a(41),c=a(0),u=a.n(c),d=a(432),m=a(61),h=a(90),f=a(30),p=a(449),g=a.n(p),v=a(441),E=a(91),y=a.n(E),b=a(51),S=a.n(b),w=a(457),M=a(430),k=(a(427),a(672)),D=a(530),N=a(424),I=a(531),O=a(533),C=a(563),L=a(532),A=a(420),Y=a(1336),T=(a(425),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={PageTitle:"RealTime Panel",AgentData:[],TotalData:[],items:[],key:"ALL",onBarge:!1,SelectedSupervisors:[],winactive:0,BargeWith:"",queues:[],QueueData:[],MoreInfoData:[],contextName:null,showModal:!1,showMoreInfoModal:!1,addClass:"fa fa-play-circle",queueServerIp:"",clickedQueue:"",wraptime:"",wrapcomplete:!1},n.handleShow=n.handleShow.bind(Object(l.a)(n)),n.statuschange=n.statuschange.bind(Object(l.a)(n)),n._handleKeyDown=n._handleKeyDown.bind(Object(l.a)(n)),n.userAgent=null,n.winactive=0,n.schdular=null,n.unansweredlist=[{name:"Callid",selector:"callid"},{name:"leadid",selector:"leadid"},{name:"Calltime",cell:function(e){return u.a.createElement("div",{className:"calltime"},e.calltime?u.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.calltime):"N.A")}},{name:"Status",cell:function(e){return u.a.createElement("div",{className:"abandon"},n.state.ModalTitle.indexOf("Unanswered")>-1?"ABANDON":"ANSWERED")}},{name:"Waiting Time",selector:"waittime"},{name:"EnterTime",cell:function(e){return u.a.createElement("div",{className:"calltime"},e.entertime?u.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.entertime):"N.A")},width:"150px"},{name:"Main Queue EnterTime",cell:function(e){return u.a.createElement("div",{className:"calltime"},e.mainqueueentertime?u.a.createElement(y.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.mainqueueentertime):"N.A")},width:"150px"},{name:"IVR Time",selector:"ivrtime"},{name:"Call Type",selector:"call_type"},{name:"Listen",cell:function(e){return u.a.createElement("div",{className:"listenUserDetails"},n.getHtmlListen(e))}},{name:"More Info",cell:function(e){return u.a.createElement("div",{className:"moreinfo"},u.a.createElement("a",{onClick:function(t){return n.clickMoreinfo(t,e)},className:"detailsinfo"},u.a.createElement("i",{className:"fa fa-eye"})))}}],n.moreinfolist=[{name:"callid",selector:"callid"},{name:"leadid",selector:"leadid"},{name:"Calldate",cell:function(e){return u.a.createElement("div",{className:"calldate"},e.calldate?u.a.createElement(y.a,{utc:!0,format:"YYYY-MM-DD HH:mm:ss"},e.calldate):"N.A")}},{name:"agentno",selector:"agentno"},{name:"agentid",selector:"agentid"},{name:"isassignedagent",selector:"isassignedagent"},{name:"duration",selector:"ringtime"},{name:"disposition",cell:function(e){return n.state.ModalTitle.indexOf("Unanswered")>-1&&"ANSWERED"===e.custom_disposition?"NO ANSWER":e.custom_disposition}},{name:"Listen",cell:function(e){return["Playback","Hangup"].indexOf(e.custom_disposition)>-1?"No file found":u.a.createElement("div",{className:"listen"},n.getHtmlListenMoreInfo(e))}}],n.columnlist=[{name:"Barging",selector:"Barging",sortable:!0,width:"80px",cell:function(e){return u.a.createElement("div",{className:"BUSY"==e.Status?"":"hide"},u.a.createElement("button",{onClick:function(t){return n.bargecall(t,e)},className:e.Barge?"hide":"show"},u.a.createElement("i",{className:"fa fa-volume-up","aria-hidden":"true"})))}},{name:"Agent Code",selector:"AgentCode",sortable:!0},{name:"Status",selector:"Status",sortable:!0,cell:function(e){return u.a.createElement("div",{className:n.displayStatus(e)+" RealtimeStatus"},n.displayStatus(e))}},{name:"Agent Name",selector:"AgentName",sortable:!0},{name:"TL Name",selector:"TLName",sortable:!0},{name:"Call Type",selector:"CallType"},{name:"Lead Id",selector:"LeadId",sortable:!0},{name:"D.C.",selector:"CallingCompany",sortable:!0},{name:"DIDNo",selector:"DIDNo",sortable:!0},{name:"Asterisk_Url",selector:"Asterisk_Url",width:"120px",sortable:!0},{name:"Since",selector:"LastUpdatedOn",sortable:!0,width:"130px",cell:function(e){return u.a.createElement("div",{className:e.AgentCode},e.LastUpdatedOn?u.a.createElement(y.a,{fromNow:!0},n.getLastUpdatedOn(e)):"N.A")}},{name:"T Calls",selector:"TotalCalls",width:"70px",sortable:!0},{name:"U Dials",selector:"UniqueDials",width:"70px",sortable:!0},{name:"C Dials",selector:"ConnectedDials",width:"70px",sortable:!0},{name:"T TalkTime",selector:"TotalTalkTime",sortable:!0,width:"130px",cell:function(e){return Object(h.k)(e.TotalTalkTime)}}],n}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){if(e.queues&&e.queues!=this.props.queues){var t=Object(h.j)();this.setState({SelectedSupervisors:[""==Object(h.i)("m")?t.EmployeeId:Object(h.i)("m")]},function(){this.getqueue(),this.UserList(),this.queueList()}.bind(this))}null==this.schdular&&(this.schdular=setInterval(function(){(1==this.state.winactive||document.hasFocus())&&(this.UserList(),this.totalList(),this.queueList())}.bind(this),2500),window.addEventListener("message",function(e){"checkactive"==e.data.type&&(this.setState({winactive:e.data.winactive}),this.winactive=e.data.winactive)}.bind(this)))}},{key:"componentDidMount",value:function(){var e=Object(h.j)();this.setState({SelectedSupervisors:[""==Object(h.i)("m")?e.EmployeeId:Object(h.i)("m")]},function(){this.getqueue(),this.UserList(),this.queueList()}.bind(this)),null==this.schdular&&(this.schdular=setInterval(function(){(1==this.state.winactive||document.hasFocus())&&(this.UserList(),this.totalList(),this.queueList())}.bind(this),2500),window.addEventListener("message",function(e){"checkactive"==e.data.type&&(this.setState({winactive:e.data.winactive}),this.winactive=e.data.winactive)}.bind(this)))}},{key:"getHtmlListenMoreInfo",value:function(e){var t=this;return u.a.createElement("span",{id:"span_"+e.row_num,onClick:function(a){return t.CreateMoreInfoRecordingURL(a,e)}},u.a.createElement("i",{class:"fa fa-play-circle listen"}))}},{key:"getHtmlListen",value:function(e){var t=this,a=S()().format("YYYY-MM-DD HH:mm:ss"),n=S.a.utc(new Date(e.hanguptime)).format("YYYY-MM-DD HH:mm:ss"),i=S()(a,"YYYY-MM-DD HH:mm:ss").diff(S()(n,"YYYY-MM-DD HH:mm:ss"))/1e3;return 1==e.call_type&&i<600?u.a.createElement("i",{class:"fa fa-info-circle infotooltip",diff:i,"data-toggle":"tooltip",title:"Transferred Call- Recording available after 10 minutes of Call","aria-hidden":"true"}):i<600?u.a.createElement("i",{class:"fa fa-info-circle infotooltip","data-toggle":"tooltip",title:"IB - Recording available after 10 minutes of Call","aria-hidden":"true"}):u.a.createElement("span",{id:"span_"+e.row_num,onClick:function(a){return t.CreateNCallersRecordingURL(a,e)}},u.a.createElement("i",{class:"fa fa-play-circle listen"}))}},{key:"CreateMoreInfoRecordingURL",value:function(e,t){var a=document.getElementById("audio2"),n=t.row_num;if(a.paused){document.getElementById("span_"+n).innerHTML='<i class="fa fa-spinner fa-spin"></i>';var i=t.userfield,s=t.dstchannel,l=S()(new Date(i)).format("DD-MM-YYYY"),r=S()(new Date(i)).format("H"),o=S()(new Date(i)).format("YYYYMMDDHHmmss"),c=s.substring(s.indexOf("/")+1,s.indexOf("-")),u=t.callid;console.log(l,r,o,c,u);var d="recording/"+l+"/"+r+"/"+u+"-"+o+"-"+c+".wav";if("Invalid date"==l||"Invalid date"==r||"Invalid date"==o||null==c)return void(document.getElementById("span_"+n).innerHTML="No File Found");Object(m.e)(d,"asterisk-log",function(i){if(console.log("results",i),200==i.data.status){var s=i.data.data;a.src=i.data.data,document.getElementById("span_"+n).innerHTML='<i class="fa fa-spinner fa-spin"></i>',Object(m.m)(s,(function(i){if(i&&i.status&&404!=i.status)a.onloadedmetadata=function(){console.log(a.duration),a.play(),console.log(a.duration),0==a.paused&&a.duration>0&&"Infinity"!=a.duration&&"NaN"!=a.duration?(document.getElementById("span_"+n).innerHTML='<i class="fa fa-stop-circle listen"></i>',a.onended=function(){document.getElementById("span_"+n).innerHTML='<i class="fa fa-play-circle listen"></i>'}):document.getElementById("span_"+n).innerHTML="No File Found"};else try{document.getElementById("span_"+t.row_num).innerHTML="File not found"}catch(e){}}))}else document.getElementById("span_"+n).innerHTML="No File Found"}.bind(this))}else a.pause(),a.currentTime=0,document.getElementById("span_"+n).innerHTML='<i class="fa fa-play-circle listen"></i>'}},{key:"CreateNCallersRecordingURL",value:function(e,t){var a=document.getElementById("audio1"),n=t.row_num;if(a.paused){var i=t.orig_callid;this.state.AwsRecordingUrl="",document.getElementById("span_"+n).innerHTML='<i class="fa fa-spinner fa-spin"></i>',Object(m.u)(i,function(e){var t="",i="";1==e.data.file_available?(i=".wav",t=e.data.file_available):(i="-out.wav",t=e.data.agent_file),1==t?Object(m.e)(e.data.record+i,"newcctecbuckt",function(e){console.log("results",e),200==e.data.status?(this.setState({AwsRecordingUrl:e.data.data}),a.src=e.data.data,document.getElementById("span_"+n).innerHTML='<i class="fa fa-spinner fa-spin"></i>',a.onloadedmetadata=function(){console.log(a.duration),a.play(),console.log(a.duration),0==a.paused&&a.duration>0&&"Infinity"!=a.duration&&"NaN"!=a.duration?(document.getElementById("span_"+n).innerHTML='<i class="fa fa-stop-circle listen"></i>',a.onended=function(){document.getElementById("span_"+n).innerHTML='<i class="fa fa-play-circle listen"></i>'}):document.getElementById("span_"+n).innerHTML="No File Found"}):document.getElementById("span_"+n).innerHTML="No File Found"}.bind(this)):document.getElementById("span_"+n).innerHTML="No File Name Found"}.bind(this))}else a.pause(),a.currentTime=0,document.getElementById("span_"+n).innerHTML='<i class="fa fa-play-circle listen"></i>'}},{key:"totalList",value:function(){var e=Object(h.i)("c");""!=e&&Object(m.t)(e,function(e){this.setState({TotalData:e.data})}.bind(this))}},{key:"queueList",value:function(){var e=this.state.queues,t=e.map((function(e){return e.queuename})),a=e.map((function(e){return e.server_ip}));this.setState({queueServerIp:a[0]}),Object(m.r)(t.join(","),function(e){this.setState({QueueData:e.data})}.bind(this))}},{key:"getqueue",value:function(){var e=""==Object(h.i)("IsMobile")?"0":Object(h.i)("IsMobile"),t=""==Object(h.i)("IsClaim")?"0":Object(h.i)("IsClaim"),a=""==this.props.type?"sales":this.props.type,n=""==this.props.product?"1":this.props.product,i=this.props.queues;this.props.GetMySqlData({root:"getqueuetwo",ProductType:a,ProductId:n,IsMobile:e,IsClaim:t,queues:i},function(e){this.setState({queues:e.data.data[0]})}.bind(this))}},{key:"UserList",value:function(){var e=Object(h.i)("m"),t=null==this.state.contextName?Object(h.i)("c"):this.state.contextName;"breakinmotor"==t&&(t="BreakinMotor");var a=this.state.queues.filter((function(e){return e.queuename==t})),n="";a.length>0&&(this.setState({wraptime:a[0].wraptime}),n=1==a[0].isMaster?a[0].child:a[0].queuename);var i=Object(h.j)();this.state.SelectedSupervisors.length>0&&(e=this.state.SelectedSupervisors.join()),""==e&&""==t&&(e=i.EmployeeId,this.setState({SelectedSupervisors:[e]})),(e||t)&&Object(m.q)(e,n,function(e){this.setState({AgentData:e.data})}.bind(this))}},{key:"handleShow",value:function(e){this.setState({SelectedSupervisors:e.SelectedSupervisors})}},{key:"componentWillUnmount",value:function(){clearInterval(this.schdular),null!=this.userAgent&&this.userAgent.hangup()}},{key:"changeContext",value:function(e,t){this.setState({contextName:t.context})}},{key:"clickUnanswered",value:function(e,t){var a=t.context;this.setState({clickedQueue:a}),this.props.GetMySqlData({root:"unanswered",queues:a},function(e){this.setState({showModal:!0,UnansweredData:e.data.data[0],ModalTitle:"Unanswered Calls"})}.bind(this))}},{key:"clickanswered",value:function(e,t){var a=t.context;this.setState({clickedQueue:a}),this.props.GetMySqlData({root:"answered",queues:a},function(e){this.setState({showModal:!0,UnansweredData:e.data.data[0],ModalTitle:"Answered Calls"})}.bind(this))}},{key:"clickMoreinfo",value:function(e,t){var a=t.callid,n=this.state.queues,i=this.state.clickedQueue,s=n.find((function(e){return e.queuename.toLowerCase()===i.toLowerCase()})).server_ip;this.props.GetMySqlData({root:"moreinfo",uniqueid:a,queueServerIp:s},function(e){this.setState({showMoreInfoModal:!0,MoreInfoData:e.data.data[0]})}.bind(this))}},{key:"getLastUpdatedOn",value:function(e){if(this.state.wraptime&&"IDLE"==e.Status){var t=S()(e.LastUpdatedOn).format("YYYY-MM-DD HH:mm:ss"),a=S()(e.ServerTime).format("YYYY-MM-DD HH:mm:ss");if(S()(a,"YYYY-MM-DD HH:mm:ss").diff(S()(t,"YYYY-MM-DD HH:mm:ss"))/1e3>this.state.wraptime){var n=S()(e.LastUpdatedOn).add(this.state.wraptime,"seconds").format("YYYY-MM-DD HH:mm:ss");return console.log("agent",e.AgentCode,"since",n,"currenttime",a),console.log("agent",e.AgentCode,S()(n).fromNow()),n}return e.LastUpdatedOn}return e.LastUpdatedOn}},{key:"displayStatus",value:function(e){var t=this.state.BargeWithAgent;t&&t.AgentCode==e.AgentCode&&"BUSY"!=e.Status?this.unbargecall():t&&t.AgentCode==e.AgentCode&&e.Status,console.log("wraptime",this.state.wraptime);var a=e.Status;if(this.state.wraptime&&"IDLE"==e.Status){var n=S()(e.LastUpdatedOn).format("YYYY-MM-DD HH:mm:ss"),i=S()(e.ServerTime).format("YYYY-MM-DD HH:mm:ss"),s=S()(i,"YYYY-MM-DD HH:mm:ss").diff(S()(n,"YYYY-MM-DD HH:mm:ss"))/1e3;s<this.state.wraptime?(console.log("agent",e.AgentCode,"lastupdatetime",n,"currenttime",i,"diff",s),a="OnWrap"):a=e.Status}return a.toUpperCase()}},{key:"unbargecall",value:function(e){this.userAgent&&(this.userAgent.hangup(),this.userAgent=null),this.setState({onBarge:!1,BargeWith:"",BargeWithAgent:null})}},{key:"bargecall",value:function(e,t){try{this.userAgent&&(this.userAgent.hangup(),this.userAgent=null);var a={Display:Object(h.j)().EmployeeId,User:Object(h.j)().EmployeeId,Pass:Object(h.j)().EmployeeId,Realm:t.Asterisk_Url,WSServer:"wss://"+t.Asterisk_Url+":8089/ws"};this.LoginAsteriskServer(a,function(){setTimeout(function(){if(this.userAgent){var e="*222"+t.AgentCode;t.DIDNo&&(e="*222"+t.DIDNo),this.userAgent.call(e)}this.setState({onBarge:!0,BargeWith:t.AgentCode,BargeWithAgent:t})}.bind(this),1e3)}.bind(this),function(){document.getElementById(t.AgentCode).checked=!1}.bind(this))}catch(e){}}},{key:"LoginAsteriskServer",value:function(e,t,a){if(e){var n={media:{remote:{audio:document.getElementById("audioRemote")}},ua:{uri:e.User+"@"+e.Realm,wsServers:[e.WSServer],authorizationUser:e.Display,password:e.Pass}};w.Web&&(this.userAgent=new w.Web.Simple(n),this.userAgent.on("connected",(function(e){Object(M.b)("Barging Connected!",{type:"success"})})),this.userAgent.on("disconnected",(function(e){})),this.userAgent.on("registered",(function(e){t&&t()})),this.userAgent.on("registrationFailed",(function(e){Object(M.b)("Make sure your VPN is connected!",{type:"error"})})),this.userAgent.on("unregistered",(function(e){Object(M.b)("Dialer issue please contact administrator!",{type:"error"}),a&&a()})),this.userAgent.on("userMediaFailed",(function(e){})),this.userAgent.on("userMediaRequest",(function(e){})),this.userAgent.on("userMedia",(function(e){})),this.userAgent.on("invite",(function(e){})),this.userAgent.on("addStream",(function(e){})),this.userAgent.on("ended",(function(e){})))}return setTimeout(function(){this.userAgent&&this.userAgent.ua&&0==this.userAgent.ua.isRegistered()&&Object(M.b)("Make sure your VPN is connected!",{type:"error"})}.bind(this),1e4),this.userAgent}},{key:"play",value:function(e){var t=document.getElementById("audio_"+e),a=document.getElementById("play"+e);t.paused?(t.play(),a.classList.remove("fa-play-circle"),a.classList.add("fa-stop-circle"),this.CheckAudioFinishedPlay(t,a)):(t.pause(),t.currentTime=0,a.classList.remove("fa-stop-circle"),a.classList.add("fa-play-circle"))}},{key:"CheckAudioFinishedPlay",value:function(e,t){e.onended=function(){t.classList.remove("fa-stop-circle"),t.classList.add("fa-play-circle")}}},{key:"statuschange",value:function(e){this.setState({key:e.target.value})}},{key:"filterdata",value:function(e){var t=this,a=this.state.AgentData;if("ALL"===this.state.key)return a;if("Away"===this.state.key){var n=[];return a.forEach((function(e){(new Date-new Date(e.LastUpdatedOn))/1e3>60&&"IDLE"===e.Status&&n.push(e)})),n}var i=[];return a.forEach((function(e){t.state.key.indexOf(e.Status)>-1&&i.push(e)})),i}},{key:"_handleKeyDown",value:function(e){"Enter"===e.key&&this.setState({SelectedSupervisors:[e.target.value]})}},{key:"_handleOnClick",value:function(e){this.setState({SelectedSupervisors:[document.getElementById("EmpId").value]})}},{key:"renderTotalData",value:function(){var e=this,t=[],a=this.state.QueueData;return a&&a.length>0?(a.forEach((function(a){t.push(u.a.createElement("tr",{className:e.state.contextName==a.context?"active":""},u.a.createElement("td",null,u.a.createElement("a",{onClick:function(t){return e.changeContext(t,a)},"data-myattribute":"check",className:"abutton clickMe"},a.context)),u.a.createElement("td",null,u.a.createElement("a",{onClick:function(t){return e.clickanswered(t,a)},className:"abutton"},a.answered)),u.a.createElement("td",null,u.a.createElement("a",{onClick:function(t){return e.clickUnanswered(t,a)},className:"abutton"},a.unanswered)),u.a.createElement("td",{className:a.waitingibcalls>0?"waiting_call_gt0":""},a.waitingibcalls),u.a.createElement("td",{className:a.waitingctccalls>0?"waiting_call_gt0":""},a.waitingctccalls),u.a.createElement("td",{className:a.waitingassignedcalls>0?"waiting_call_gt0":""},a.waitingassignedcalls),u.a.createElement("td",null,a.totalcalls)))})),u.a.createElement(k.a,{responsive:!0},u.a.createElement("thead",{className:"text-primary"},u.a.createElement("tr",null,u.a.createElement("th",null,"context"),u.a.createElement("th",null,"answered"),u.a.createElement("th",null,"unanswered"),u.a.createElement("th",null,"waitingibcalls"),u.a.createElement("th",null,"waitingctccalls"),u.a.createElement("th",null,"waitingassignedcalls"),u.a.createElement("th",null,"totalcalls"))),u.a.createElement("tbody",null,t))):null}},{key:"render",value:function(){var e=this,t=this.columnlist,a=this.unansweredlist,i=this.moreinfolist,s=(this.totalcolumnlist,this.filterdata()),l=Object(h.i)("m"),r=Object(h.i)("c"),o=this.state,c=o.PageTitle,d=o.UnansweredData,m=o.MoreInfoData;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"content"},u.a.createElement(M.a,null),u.a.createElement(D.a,null,u.a.createElement(N.a,{md:"12"},u.a.createElement(I.a,null,u.a.createElement(O.a,null,u.a.createElement(D.a,null,u.a.createElement(N.a,{md:3},u.a.createElement(C.a,{tag:"h4"},"Queues")),u.a.createElement(N.a,{md:9}))),u.a.createElement(L.a,null,u.a.createElement("div",{className:"queuetable"},this.renderTotalData()))))),u.a.createElement(D.a,null,u.a.createElement(N.a,{md:"12"},u.a.createElement(I.a,null,u.a.createElement(O.a,null,u.a.createElement(D.a,null,u.a.createElement(N.a,{md:3},u.a.createElement(C.a,{tag:"h4"},c)),u.a.createElement(N.a,{md:4},u.a.createElement("div",null,"Queue Name : ",this.state.contextName)),u.a.createElement(N.a,{md:3},u.a.createElement("div",{className:"input-group hide"},u.a.createElement(A.a.Control,{required:!0,type:"text",name:"EmpId",id:"EmpId",onKeyDown:this._handleKeyDown,onChange:function(t){return e.setState({username:t.target.value})},value:this.state.username,placeholder:"Enter Supervisor Id"}),u.a.createElement("div",{className:"input-group-append"},u.a.createElement("button",{onClick:function(t){return e._handleOnClick(t)},className:"btn btn-primary input-group-button"},u.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"}))))),u.a.createElement(N.a,{md:2},u.a.createElement("div",{className:"form-group "},u.a.createElement("select",{className:"form-control",onChange:this.statuschange},u.a.createElement("option",{value:"ALL"},"ALL"),u.a.createElement("option",{value:"IDLE"},"IDLE"),u.a.createElement("option",{value:"Away"},"Away"),u.a.createElement("option",{value:"BUSY"},"BUSY"),u.a.createElement("option",{value:"Lunch,Tea,Training,Meeting,Day End"},"Break"),u.a.createElement("option",{value:"PAUSE"},"PAUSE"),u.a.createElement("option",{value:"Auto Logout,LOGOUT"},"LOGOUT"))),""==l&&" "==r?u.a.createElement(v.a,{handleShow:this.handleShow,value:/EmployeeId/g}):null,u.a.createElement("button",{id:"BargeWith",onClick:function(t){return e.unbargecall(t)},className:""==this.state.BargeWith?"hide":"btn btn-primary hangupwith show"},u.a.createElement("i",{className:"fa fa-volume-off","aria-hidden":"true"})," Hang Up With: ",this.state.BargeWith)))),u.a.createElement(L.a,null,u.a.createElement("div",{className:"statusdata"},u.a.createElement(g.a,{columns:t,data:s,pagination:!1,striped:!0,noHeader:!0,highlightOnHover:!0,dense:!0}))))),u.a.createElement("audio",{id:"audioRemote"}),u.a.createElement("audio",{id:"audioLocal"})),u.a.createElement("audio",{src:"",id:"audio1"}),u.a.createElement("audio",{src:"",id:"audio2"}),u.a.createElement(Y.a,{show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})},dialogClassName:"modal-70w"},u.a.createElement(Y.a.Header,{closeButton:!0},u.a.createElement(Y.a.Title,null,this.state.ModalTitle)),u.a.createElement(Y.a.Body,null,u.a.createElement("div",{className:"modaldata"},u.a.createElement(g.a,Object(n.a)({columns:a,data:d&&d.length>0?d:[],pagination:!1,striped:!0,noHeader:!0,highlightOnHover:!0,dense:!0},"pagination",!0)))),u.a.createElement(Y.a.Footer,null)),u.a.createElement(Y.a,{show:this.state.showMoreInfoModal,onHide:function(){return e.setState({showMoreInfoModal:!1})},dialogClassName:"modal-90w"},u.a.createElement(Y.a.Header,{closeButton:!0},u.a.createElement(Y.a.Title,null)),u.a.createElement(Y.a.Body,null,u.a.createElement("div",{className:"modalmoreinfodata"},u.a.createElement(g.a,{columns:i,data:m&&m.length>0?m:[],pagination:!1,striped:!0,noHeader:!0,highlightOnHover:!0,dense:!0}))),u.a.createElement(Y.a.Footer,null))))}}]),a}(u.a.Component));t.default=Object(f.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:m.g,GetCommonspData:m.h,GetMySqlData:d.b})(T)}}]);
//# sourceMappingURL=11.e1495b80.chunk.js.map