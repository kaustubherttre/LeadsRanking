(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[94,126],{1305:function(e,t,a){"use strict";a.r(t);var n=a(123),l=a(39),o=a(40),i=a(121),r=a(42),u=a(41),c=a(0),d=a.n(c),s=a(420),f=a(1262),m=a(1336),h=a(61),p=a(124),y=(a(425),a(30)),v=a(431),g=(a(125),a(91)),D=a.n(g),T=a(51),O=a.n(T),b=a(92),E=(a(187),a(430)),C=(a(427),a(90)),M=a(530),j=a(424),Y=a(531),w=a(533),L=a(532),S=function(e){Object(r.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).validationdate=function(e){return!e.isBefore(O()(n.state.maxdate))},n.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"LoginLogoutHistory",PageTitle:"Login Logout History",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,empid:"",CallDate:O()().format("YYYY-MM-DD"),maxdate:O()().subtract(59,"days").format("YYYY-MM-DD"),ResponseData:[]},n.handleClose=n.handleClose.bind(Object(i.a)(n)),n.handleShow=n.handleShow.bind(Object(i.a)(n)),n.empchange=n.empchange.bind(Object(i.a)(n)),n.selectedrow={CallDataId:0,CallID:null,LeadID:null},n.columnlist=[{selector:"employeeId",name:"EmployeeId",type:"string"},{selector:"username",name:"UserName",type:"string"},{selector:"LoginTime",name:"LoginTime",type:"datetime",cell:function(e){return d.a.createElement("div",{className:"LoginTime"},e.LoginTime?d.a.createElement(D.a,{utc:!0,format:"YYYY-MM-DD HH:mm:ss"},e.LoginTime):"N.A")}},{selector:"LogoutTime",name:"LogoutTime",type:"datetime",cell:function(e){return d.a.createElement("div",{className:"LogoutTime"},e.LogoutTime?d.a.createElement(D.a,{utc:!0,format:"YYYY-MM-DD HH:mm:ss"},e.LogoutTime):"N.A")}}];return n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.columnlist.map((function(t){return Object(C.c)(t,e.props)})),setTimeout(function(){this.setState({user:Object(C.j)()})}.bind(this),500)}},{key:"fnBindStore",value:function(e,t){var a;"dropdown"==e.type&&(t.CommonData[this.state.root]&&t.CommonData[e.config.root]&&(a=Object(C.l)(t.CommonData[this.state.root],t.CommonData[e.config.root],e.name),this.setState({items:a})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}),this.columnlist.map((function(a){return t.fnBindStore(a,e)})))}},{key:"fnDatatableCol",value:function(){return Object(C.e)(this.columnlist)}},{key:"handleCopy",value:function(e){this.setState({formvalue:Object.assign({},e,{}),event:"Copy",showModal:!0,FormTitle:"Copy Record"})}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:this.selectedrow,event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"empchange",value:function(e,t){this.setState({empid:e.target.value})}},{key:"CallDateChange",value:function(e,t){e._isAMomentObject&&this.setState({CallDate:e.format("YYYY-MM-DD")},(function(){}))}},{key:"fetchData",value:function(){if(this.state.empid)if(this.state.CallDate){var e={agentid:this.state.empid,departmentname:"Health",searchdate:this.state.CallDate};Object(h.F)(e,function(e){var t=this;console.log(e),this.setState({ResponseData:e.data.data,items:[]},(function(){return t.AgentChatLoginData()}))}.bind(this))}else Object(E.b)("Please select Date",{type:"error"});else Object(E.b)("Please enter Employee Id",{type:"error"})}},{key:"AgentChatLoginData",value:function(){var e=this.state.ResponseData,t=[];e.map((function(e,a){e.history.map((function(a,n){var l={employeeId:e.employeeId,username:e.username,LoginTime:a.loginTime,LogoutTime:a.logoutTime};t.push(l)}))})),console.log(t),this.setState({items:t})}},{key:"render",value:function(){var e,t=this,a=this.columnlist,l=this.state,o=l.items,i=(l.PageTitle,l.showModal),r=l.FormTitle;l.formvalue,l.showAlert,l.AlertMsg,l.AlertVarient,l.ModalValueChanged,l.event;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"content"},d.a.createElement(E.a,null),d.a.createElement(M.a,null,d.a.createElement(j.a,{md:"12"},d.a.createElement(Y.a,null,d.a.createElement(w.a,null,d.a.createElement(M.a,null,d.a.createElement(j.a,{md:2},d.a.createElement(s.a.Control,{type:"text",onChange:this.empchange,placeholder:"Enter EmployeeId"})),d.a.createElement(j.a,{md:2},d.a.createElement(b,(e={value:new Date,dateFormat:"YYYY-MM-DD"},Object(n.a)(e,"value",this.state.CallDate),Object(n.a)(e,"isValidDate",this.validationdate),Object(n.a)(e,"onChange",(function(e){return t.CallDateChange(e)})),Object(n.a)(e,"utc",!0),Object(n.a)(e,"timeFormat",!1),e))),d.a.createElement(j.a,{md:1},d.a.createElement(f.a,{variant:"primary",onClick:function(){return t.fetchData()}},"Fetch")),d.a.createElement(j.a,{md:1}))),d.a.createElement(L.a,null,d.a.createElement(v.a,{columns:a,data:o}))))),d.a.createElement("audio",{src:"",id:"audio1"}),d.a.createElement(m.a,{show:i,onHide:this.handleClose,dialogClassName:"modal-90w"},d.a.createElement(m.a.Header,{closeButton:!0},d.a.createElement(m.a.Title,null,r)),d.a.createElement(m.a.Body,null),d.a.createElement(m.a.Footer,null))))}}]),a}(d.a.Component);t.default=Object(y.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:h.g,InsertData:h.y,UpdateData:h.S,addRecord:p.d})(S)},425:function(e,t,a){var n,l,o;l=[t,a(6),a(0)],void 0===(o="function"===typeof(n=function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return"function"===typeof e.children?a.default.createElement(a.default.Fragment,null,e.children()):a.default.createElement(a.default.Fragment,null,e.children||null)}function o(e){return!!("function"===typeof e?e():e)}function i(e){return l(e)}function r(e){return l(e)}function u(e){var t=e.condition,n=e.children;if(null==n)return null;var l=o(t);return a.default.createElement(a.default.Fragment,null,[].concat(n).find((function(e){return e.type!==a.default.createElement(r,null).type^!l}))||null)}Object.defineProperty(e,"__esModule",{value:!0}),e.Then=i,e.Else=r,e.If=u,e.Unless=d,e.When=s,e.Case=f,e.Default=m,e.Switch=h,e.default=void 0,t=n(t),a=n(a),i.propTypes=r.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var c=t.default.oneOfType([t.default.instanceOf(i),t.default.instanceOf(r),t.default.node]);function d(e){var t=e.condition,a=e.children;return!o(t)&&a?l({condition:t,children:a}):null}function s(e){var t=e.condition,a=e.children;return o(t)&&a?l({condition:t,children:a}):null}function f(e){return l(e)}function m(e){return l(e)}function h(e){var t,n,l=e.children;return a.default.Children.forEach(l,(function(e){a.default.isValidElement(e)&&(t||e.type!==f?n||e.type!==m||(n=e):o(e.props.condition)&&(t=e))})),t||n||null}u.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.arrayOf(c),c])},d.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},d.defaultProps={children:null},s.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},s.defaultProps={children:null},f.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},f.defaultProps={children:null},m.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])},m.defaultProps={children:null};var p=t.default.oneOfType([t.default.instanceOf(f),t.default.instanceOf(m),t.default.node]);h.propTypes={children:t.default.oneOfType([t.default.arrayOf(p),p])},h.defaultProps={children:null},u.Then=i,u.Else=r,u.When=s,u.Unless=d,u.Switch=h,u.Case=f,u.Default=m;var y=u;e.default=y})?n.apply(t,l):n)||(e.exports=o)},427:function(e,t,a){}}]);
//# sourceMappingURL=94.b9c1a134.chunk.js.map