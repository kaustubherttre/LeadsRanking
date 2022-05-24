(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[56],{1329:function(e,t,a){"use strict";a.r(t);var n=a(39),s=a(40),o=a(42),l=a(41),i=a(0),r=a.n(i),c=a(61),u=a(30),d=a(90),m=a(431),h=a(91),p=a.n(h),f=a(425),v=a(428),E=a(430),b=(a(427),a(448),a(530)),S=a(424),g=a(531),D=a(533),C=a(563),L=a(532),y=a(1336),w=a(1262),A=(a(51),a(458),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={PageTitle:"Quote Shared Leads",QuoteLeadsList:[],showAssignLeadPopUp:!1,SelectedAgentAssigTo:0,SelectedRow:null,hideAssign:!1,ReportTime:null,SelectedSupervisors:[],SelectedRows:[],clearSelected:!1,formvalue:{}},s.dtRef=r.a.createRef(),s.myInputRef=r.a.createRef(),s.columnlist=[{name:"LeadId",selector:"leadId"},{name:"ParentId",selector:"ParentId"},{name:"StatusName",selector:"StatusName"},{name:"Lead Status",selector:"QuoteStatus"},{name:"Quote Updated on",selector:"QuoteUpdatedOn",cell:function(e){return r.a.createElement("div",{className:"calldate"},e.QuoteUpdatedOn?r.a.createElement(p.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.QuoteUpdatedOn):"N.A")},type:"datetime",sortable:!0},{name:"Last contacted Date",selector:"CallDateTime",cell:function(e){return r.a.createElement("div",{className:"calldate"},e.CallDateTime?r.a.createElement(p.a,{format:"YYYY-MM-DD HH:mm:ss",utc:!0},e.CallDateTime):"N.A")},type:"datetime",sortable:!0}],s}return Object(s.a)(a,[{key:"OpenAssignLeadPopUp",value:function(e){this.setState({showAssignLeadPopUp:!0})}},{key:"componentWillReceiveProps",value:function(e){if(!e.CommonData.isError&&e.CommonData.GetQuoteLeads){var t=e.CommonData.GetQuoteLeads;this.setState({QuoteLeadsList:t[0]})}}},{key:"handleClose",value:function(){this.setState({showAssignLeadPopUp:!1})}},{key:"componentDidMount",value:function(){this.fetchCallBackData()}},{key:"fetchCallBackData",value:function(){this.props.GetCommonspData({limit:10,skip:0,root:"GetQuoteLeads",params:[{agentId:Object(d.j)().UserID}]}),this.state.SelectedRows.length>0&&this.dtRef.current.handleClearRows()}},{key:"onSelectedAgent",value:function(e){this.setState({SelectedAgentAssigTo:e.target.value})}},{key:"AssignLead",value:function(){for(var e=this,t=this.state,a=t.SelectedRows,n=(t.SelectedAgentAssigTo,function(t){var n=a[t];o={LeadId:n.leadId,Name:n.Name,CustomerId:n.CustomerID,UserID:Object(d.j)().UserID,Priority:0,ProductId:n.ProductID,Reason:"Manual added",ReasonId:33,CallStatus:""},l={UserId:Object(d.j)().UserID,Leads:[o]},e.props.PostCommunicationData({root:"communication/LeadPrioritization.svc/AddLeadToPriorityQueue",data:l},(function(e){Object(E.b)("Lead ("+n.leadId+") Added in Call Queue",{type:"success"})}))}),s=0;s<a.length;s++){var o,l;n(s)}this.setState({showAssignLeadPopUp:!1})}},{key:"onSelectedRows",value:function(e){this.setState({SelectedRows:e})}},{key:"render",value:function(){var e=this,t=this.columnlist,a=this.state,n=(a.items,a.PageTitle),s=a.QuoteLeadsList,o=a.showAssignLeadPopUp,l=a.showAlert,i=a.AlertMsg,c=a.AlertVarient,u=a.ReportTime,d=a.SelectedRows;console.log(this.state.paymentStatuses);var h=[];return d.forEach((function(e){h.push(e.leadId)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content QuoteLeadsListLeadsContainer"},r.a.createElement(v.a,{show:l,variant:c,body:i}),r.a.createElement(E.a,null),r.a.createElement(b.a,null,r.a.createElement(S.a,{md:"12"},r.a.createElement(g.a,null,r.a.createElement(D.a,null,r.a.createElement(b.a,null,r.a.createElement(S.a,{md:6},r.a.createElement(C.a,{tag:"h4"},n)),r.a.createElement(S.a,{md:4},r.a.createElement(C.a,{tag:"h5"},u?r.a.createElement(p.a,{format:"DD/MM/YYYY HH:mm:ss"},u):null)),r.a.createElement(S.a,{md:2},this.state.hideAssign?null:r.a.createElement("button",{className:"btn btn-info btn-sm float-right",onClick:function(){return e.OpenAssignLeadPopUp()}},"Add Lead")))),r.a.createElement(L.a,null,r.a.createElement(m.a,{columns:t,data:s&&s.length>0?s:[],defaultSortField:"GracePeriodDate",defaultSortAsc:!1,selectableRows:!0,export:!1,ref:this.dtRef,onSelectedRows:this.onSelectedRows.bind(this)}))))),r.a.createElement(y.a,{show:o,onHide:this.handleClose.bind(this)},r.a.createElement(y.a.Header,{closeButton:!0},r.a.createElement(y.a.Title,null,"Add Leads")),r.a.createElement(y.a.Body,null,r.a.createElement(b.a,null,r.a.createElement(S.a,null,"LeadId : ",h.join())),r.a.createElement(b.a,null,r.a.createElement(S.a,null))),r.a.createElement(y.a.Footer,null,r.a.createElement(f.If,{condition:this.state.SelectedRows.length>0},r.a.createElement(f.Then,null,r.a.createElement(w.a,{variant:"primary",onClick:this.AssignLead.bind(this)},"Add Lead"))),r.a.createElement(w.a,{variant:"secondary",onClick:this.handleClose.bind(this)},"Close")))))}}]),a}(r.a.Component));t.default=Object(u.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:c.g,GetCommonspData:c.h,PostCommunicationData:c.B})(A)},428:function(e,t,a){"use strict";var n=a(39),s=a(40),o=a(42),l=a(41),i=a(0),r=a.n(i),c=a(440),u=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={show:s.props.show},s}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show}),e.show&&setTimeout(function(){this.setState({show:!1})}.bind(this),5e3)}},{key:"render",value:function(){return this.state.show?r.a.createElement(c.a,{variant:this.props.variant},this.props.body):null}}]),a}(r.a.Component);t.a=u},448:function(e,t,a){"use strict";var n=a(39),s=a(40),o=a(42),l=a(41),i=a(0),r=a.n(i),c=a(420),u=(a(30),a(61),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={items:[]},s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({items:e.items})}},{key:"displayoption",value:function(e){return r.a.createElement("option",{key:e.Id,value:e.Id},e.Display)}},{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.value,s=t.onChange,o=t.visible,l=t.items;return l||(l=[]),0==o?null:r.a.createElement("div",null,r.a.createElement(c.a.Control,{as:"select",disabled:this.props.disabled,value:n,name:a,onChange:s},!1!==this.props.firstoption&&r.a.createElement("option",{key:0,value:0},this.props.firstoption?this.props.firstoption:"Select"),l.map((function(t){return e.displayoption(t)}))))}}]),a}(r.a.Component));t.a=u},458:function(e,t,a){}}]);
//# sourceMappingURL=56.a8cc53fa.chunk.js.map