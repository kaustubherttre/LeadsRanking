(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[118],{1316:function(e,t,a){"use strict";a.r(t);var n,o=a(123),l=a(5),r=a(39),s=a(40),i=a(121),d=a(42),c=a(41),m=a(0),u=a.n(m),h=a(1261),b=a(1262),p=a(420),f=a(1336),v=a(124),g=a(425),y=a(30),C=a(431),E=a(496),O=a(430),D=(a(427),a(90)),j=a(530),w=a(424),S=a(531),k=a(533),I=a(563),A=a(532),M=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){var a=n.state.formvalue;n.state.od;e.target&&"checkbox"==e.target.type?a[e.target.id]=e.target.checked:e._isAMomentObject?a[t]=e.format():a[e.target.id]="number"===e.target.type?parseInt(e.target.value):e.target.value,n.setState({formvalue:a,ModalValueChanged:!0})},n.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"livechat_department_agents",departmentId:"0",PageTitle:"Chat Agent Configuration",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,user:{}},n.departmentchange=n.departmentchange.bind(Object(i.a)(n)),n.handleRemove=n.handleRemove.bind(Object(i.a)(n)),n.handleClose=n.handleClose.bind(Object(i.a)(n)),n.handleShow=n.handleShow.bind(Object(i.a)(n)),n.handleSave=n.handleSave.bind(Object(i.a)(n)),n.selectedrow={username:"",isOutbound:!1,chatbot:!1,offline:!1,newcar:!1},n.columnlist=[{name:"_id",label:"id",type:"hidden",hide:!0},{name:"username",label:"Username",type:"string",searchable:!0,editable:!1},{name:"count",label:"OpenChat",type:"number",editable:!1},{name:"order",label:"Grade",type:"number",searchable:!0},{name:"limit",label:"OpenLimit",type:"number"},{name:"dailylimit",label:"Dailylimit",type:"number"},{name:"assigned",label:"Assigned",type:"number",editable:!1},{name:"isOutbound",label:"IsOutbound",type:"bool"},{name:"chatbot",label:"Chatbot",type:"bool"},{name:"offline",label:"Offline",type:"bool"},{name:"newcar",label:"Newcar",type:"bool"}];return n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({user:Object(D.j)()})}.bind(this),500)}},{key:"componentWillReceiveProps",value:function(e){e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}))}},{key:"fnDatatableCol",value:function(){var e=this,t=Object(D.e)(this.columnlist);return t.push({name:"Action",cell:function(t){return u.a.createElement(h.a,{"aria-label":"Basic example"},u.a.createElement(b.a,{variant:"secondary",onClick:function(){return e.handleEdit(t)}},u.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),u.a.createElement(b.a,{variant:"secondary",onClick:function(){window.confirm("Are you sure you wish to block this agent?")&&e.handleRemove(t)}},u.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})))}}),t}},{key:"handleRemove",value:function(e){this.props.DeleteData({root:this.state.root,body:{departmentId:e.departmentId,username:e.username}},(function(e){200===e.data.status?Object(O.b)("Agent removed!",{type:"success"}):O.b.error("Agent could not be removed")})),setTimeout(function(){this.props.GetCommonData({root:this.state.root,cols:{},c:"L",con:{departmentId:e.departmentId}})}.bind(this),1e3)}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:Object(l.a)({},this.selectedrow),event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"handleSave",value:function(){if(document.getElementsByName("frmChatAgentConfigure").length>0&&document.getElementsByName("frmChatAgentConfigure")[0].reportValidity()){var e=JSON.parse(JSON.stringify(this.state.formvalue));console.log("formvalue",e),this.fnCleanData(e);var t=e._id;if(delete e._id,"Edit"==this.state.event){this.fnCleanData(e);this.props.UpdateData({root:this.state.root,body:e,querydata:{_id:t},c:"L"},(function(e){Object(O.b)("Record Saved Successfully!",{type:"success"})}));this.props.addRecord({root:"History",body:{module:"ChatAgentDepartmentConfigure",od:this.state.od,nd:e,ts:new Date,by:Object(D.j)().UserId}},(function(e){Object(O.b)("History Maintained!",{type:"success"})}))}else e.departmentId=this.state.departmentId,this.props.addRecord({root:this.state.root,body:e},(function(e){400===e.data.status?O.b.error(e.data.message):Object(O.b)("User Added Successfully!",{type:"success"})}));var a=e.departmentId;setTimeout(function(){this.props.GetCommonData({root:this.state.root,cols:{},c:"L",con:{departmentId:a}})}.bind(this),1e3),this.setState({showModal:!1})}return!1}},{key:"fnCleanData",value:function(e){e=Object(D.d)(this.columnlist,e),this.setState({formvalue:e})}},{key:"departmentchange",value:function(e){this.setState({departmentId:e.target.value}),this.props.GetCommonData({limit:10,skip:0,root:this.state.root,cols:{},c:"L",con:{departmentId:e.target.value}})}},{key:"render",value:function(){var e=this,t=this.fnDatatableCol(),a=this.state,n=a.items,o=a.PageTitle,l=a.showModal,r=a.FormTitle,s=a.formvalue,i=a.ModalValueChanged,d=a.event;console.log("renderitems",n);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"content"},u.a.createElement(O.a,null),u.a.createElement(j.a,null,u.a.createElement(w.a,{md:"12"},u.a.createElement(S.a,null,u.a.createElement(k.a,null,u.a.createElement(j.a,null,u.a.createElement(w.a,{md:7},u.a.createElement(I.a,{tag:"h4"},o)),u.a.createElement(w.a,{md:3},u.a.createElement(p.a.Group,{as:w.a,md:12,controlId:"Department_dropdown"},u.a.createElement(E.a,{firstoption:"Select Department",col:{config:{root:"livechat_department",cols:{_id:1,name:1},con:{enabled:!0},statename:"",state:!0,Idfield:/_id/g,Displayfield:/name/g}},onChange:this.departmentchange}))),u.a.createElement(w.a,{md:2},u.a.createElement(b.a,{disabled:"0"===this.state.departmentId&&!0,variant:"primary",onClick:this.handleShow},"Add User")))),u.a.createElement(A.a,null,u.a.createElement(C.a,{columns:t,data:n,extention:!0,export:!1,print:!1}))))),u.a.createElement(f.a,{show:l,onHide:this.handleClose,dialogClassName:"modal-90w"},u.a.createElement(f.a.Header,{closeButton:!0},u.a.createElement(f.a.Title,null,r)),u.a.createElement(f.a.Body,null,u.a.createElement(p.a,{name:"frmChatAgentConfigure"},u.a.createElement(j.a,null,this.columnlist.map((function(t){return Object(D.f)(t,s,e.handleChange,d)}))))),u.a.createElement(f.a.Footer,null,u.a.createElement(b.a,{variant:"secondary",onClick:this.handleClose},"Close"),u.a.createElement(g.If,{condition:i},u.a.createElement(g.Then,null,u.a.createElement("input",{type:"submit",value:"Save Changes",className:"btn btn-primary",onClick:this.handleSave})))))))}}]),a}(u.a.Component);t.default=Object(y.b)((function(e){return{CommonData:e.CommonData}}),(n={GetCommonData:v.b,addRecord:v.d,UpdateData:v.c},Object(o.a)(n,"addRecord",v.d),Object(o.a)(n,"DeleteData",v.a),n))(M)}}]);
//# sourceMappingURL=118.74c03dce.chunk.js.map