(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[119],{1310:function(e,t,a){"use strict";a.r(t);var n,o=a(123),l=a(5),r=a(39),s=a(40),i=a(121),d=a(42),c=a(41),m=a(0),u=a.n(m),h=a(1261),b=a(1262),p=a(1336),f=a(420),v=a(124),y=a(425),g=a(30),E=a(431),C=(a(496),a(430)),O=(a(427),a(90)),S=a(530),D=a(424),j=a(531),M=a(533),w=a(563),k=a(532),N=a(51),R=a.n(N),J=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){var a=n.state.formvalue;n.state.od;e.target&&"checkbox"==e.target.type?a[e.target.id]=e.target.checked:e._isAMomentObject?a[t]=e.format():a[e.target.id]="number"===e.target.type?parseInt(e.target.value):e.target.value,n.setState({formvalue:a,ModalValueChanged:!0})},n.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"JagStoryBoard",departmentId:"0",PageTitle:"Jag Story Board",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,user:{}},n.handleRemove=n.handleRemove.bind(Object(i.a)(n)),n.handleClose=n.handleClose.bind(Object(i.a)(n)),n.handleShow=n.handleShow.bind(Object(i.a)(n)),n.handleSave=n.handleSave.bind(Object(i.a)(n)),n.selectedrow={empId:"",story:""},n.columnlist=[{name:"_id",label:"id",type:"hidden",hide:!0},{name:"empId",label:"Employee Id",type:"string",searchable:!0},{name:"empName",label:"Employee Name",type:"string",searchable:!0},{name:"designation",label:"Designation",type:"string",searchable:!0},{name:"story",label:"story",type:"textarea",width:"450px",editable:!0},{name:"CreatedOn",label:"CreatedOn",type:"datetime",hide:!0},{name:"UpdatedOn",label:"UpdatedOn",type:"datetime",hide:!0}];return n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){setTimeout(function(){this.setState({user:Object(O.j)()})}.bind(this),500),this.props.GetCommonData({limit:10,skip:0,root:this.state.root,cols:{},con:{},c:"M"})}},{key:"componentWillReceiveProps",value:function(e){e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}))}},{key:"fnDatatableCol",value:function(){var e=this,t=Object(O.e)(this.columnlist);return t.push({name:"Action",cell:function(t){return u.a.createElement(h.a,{"aria-label":"Basic example"},u.a.createElement(b.a,{variant:"secondary",onClick:function(){return e.handleEdit(t)}},u.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})),u.a.createElement(b.a,{variant:"secondary",onClick:function(){window.confirm("Are you sure you wish to delete this record?")&&e.handleRemove(t)}},u.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})))}}),t}},{key:"handleRemove",value:function(e){var t=JSON.parse(JSON.stringify(this.state.formvalue))._id;this.props.DeleteData({root:this.state.root,body:{_id:t},c:"M"},(function(e){200===e.data.status?Object(C.b)("Record deleted!",{type:"success"}):C.b.error("Record could not be deleted")})),setTimeout(function(){this.props.GetCommonData({root:this.state.root,cols:{},con:{},c:"M"})}.bind(this),1e3)}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:Object(l.a)({},this.selectedrow),event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"handleSave",value:function(){if(document.getElementsByName("frmJagStoryBoard").length>0&&document.getElementsByName("frmJagStoryBoard")[0].reportValidity()){var e=JSON.parse(JSON.stringify(this.state.formvalue));console.log("formvalue",e),this.fnCleanData(e);var t=e._id;if(delete e._id,"Edit"==this.state.event){this.fnCleanData(e),e.UpdatedOn=R()().format("YYYY-MM-DD HH:mm:ss");this.props.UpdateData({root:this.state.root,body:e,querydata:{_id:t},c:"M"},(function(e){Object(C.b)("Record Updated Successfully!",{type:"success"})}))}else e.CreatedOn=R()().format("YYYY-MM-DD HH:mm:ss"),this.props.addRecord({root:this.state.root,body:e},(function(e){400===e.data.status?C.b.error(e.data.message):Object(C.b)("User Added Successfully!",{type:"success"})}));setTimeout(function(){this.props.GetCommonData({root:this.state.root,cols:{},con:{},c:"M"})}.bind(this),1e3),this.setState({showModal:!1})}return!1}},{key:"fnCleanData",value:function(e){e=Object(O.d)(this.columnlist,e),this.setState({formvalue:e})}},{key:"render",value:function(){var e=this,t=this.fnDatatableCol(),a=this.state,n=a.items,o=a.PageTitle,l=a.showModal,r=a.FormTitle,s=a.formvalue,i=a.ModalValueChanged,d=a.event;return console.log("renderitems",n),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"content"},u.a.createElement(C.a,null),u.a.createElement(S.a,null,u.a.createElement(D.a,{md:"12"},u.a.createElement(j.a,null,u.a.createElement(M.a,null,u.a.createElement(S.a,null,u.a.createElement(D.a,{md:10},u.a.createElement(w.a,{tag:"h4"},o)),u.a.createElement(D.a,{md:2},u.a.createElement(b.a,{variant:"primary",onClick:this.handleShow},"Add Story")))),u.a.createElement(k.a,null,u.a.createElement(E.a,{columns:t,data:n,extention:!0,export:!1,print:!1}))))),u.a.createElement(p.a,{show:l,onHide:this.handleClose,dialogClassName:"modal-90w"},u.a.createElement(p.a.Header,{closeButton:!0},u.a.createElement(p.a.Title,null,r)),u.a.createElement(p.a.Body,null,u.a.createElement(f.a,{name:"frmJagStoryBoard"},u.a.createElement(S.a,null,this.columnlist.map((function(t){return Object(O.f)(t,s,e.handleChange,d)}))))),u.a.createElement(p.a.Footer,null,u.a.createElement(b.a,{variant:"secondary",onClick:this.handleClose},"Close"),u.a.createElement(y.If,{condition:i},u.a.createElement(y.Then,null,u.a.createElement("input",{type:"submit",value:"Save Changes",className:"btn btn-primary",onClick:this.handleSave})))))))}}]),a}(u.a.Component);t.default=Object(g.b)((function(e){return{CommonData:e.CommonData}}),(n={GetCommonData:v.b,addRecord:v.d,UpdateData:v.c},Object(o.a)(n,"addRecord",v.d),Object(o.a)(n,"DeleteData",v.a),n))(J)}}]);
//# sourceMappingURL=119.43f8e1b8.chunk.js.map