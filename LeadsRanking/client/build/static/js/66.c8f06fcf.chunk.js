(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[66,126],{1279:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),r=a(121),l=a(42),i=a(41),s=a(0),c=a.n(s),u=a(1261),d=a(1262),f=a(420),m=a(1336),p=a(61),h=a(124),v=a(425),y=a(30),b=a(431),D=a(125),C=a(428),g=a(90),S=a(530),O=a(424),I=a(531),E=a(533),w=a(563),j=a(532),T=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var o;Object(n.a)(this,a),(o=t.call(this,e)).handleChange=function(e,t){var a=o.state.formvalue;o.state.od;e.target&&"checkbox"==e.target.type?a[e.target.id]=e.target.checked:e._isAMomentObject?a[t]=e.format():a[e.target.id]=e.target.value,o.setState({formvalue:a,ModalValueChanged:!0})},o.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"ProductGrpMapping",PageTitle:"Product Group Mapping",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,user:{},prolist:"",agentranklist:"",groupnamelist:""},o.handleClose=o.handleClose.bind(Object(r.a)(o)),o.handleShow=o.handleShow.bind(Object(r.a)(o)),o.handleSave=o.handleSave.bind(Object(r.a)(o)),o.productchange=o.productchange.bind(Object(r.a)(o)),o.selectedrow={Id:0,ProductID:null,NonSelectionAllocation:!1},o.columnlist=[{name:"ProductID",label:"Product",type:"dropdown",config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]},searchable:!0,editable:!1},{name:"Id",label:"Id",type:"hidden",hide:!0},{name:"Description",label:"Description",type:"string",searchable:!0},{name:"InvTypeID",label:"Inv Type",type:"dropdown",searchable:!0,distinct:!0,config:{root:"Investers",data:[{Id:1,Display:"None"},{Id:2,Display:"Growth"},{Id:3,Display:"Retairment"},{Id:4,Display:"Child"}]}},{name:"GroupID",label:"Group",type:"dropdown",searchable:!0,distinct:!0,config:{root:"vwUserGroup",cols:["DISTINCT UGM.UserGroupID AS Id","UGM.UserGroupName AS Display","ProductID"]}},{name:"InsurerID",label:"Insurer",type:"dropdown",searchable:!0,config:{root:"Suppliers",cols:["DISTINCT OldSupplierId AS Id","SupplierName AS Display","ProductID"]}},{name:"GradeRuleID",label:"Grade Rule",type:"dropdown",searchable:!0,distinct:!0,config:{root:"AgentRules",cols:["RuleID AS Id","RuleName AS Display","ProductID"]}},{name:"NonSelectionAllocation",label:"NSA",type:"bool"},{name:"CreatedOn",label:"CreatedOn",type:"datetime",hide:!0}];return o.ProductList={config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]}},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.columnlist.map((function(t){return Object(g.c)(t,e.props)})),setTimeout(function(){this.setState({user:Object(g.j)()})}.bind(this),500)}},{key:"fnBindStore",value:function(e,t){var a;"dropdown"==e.type&&(t.CommonData[this.state.root]&&t.CommonData[e.config.root]&&(a=Object(g.l)(t.CommonData[this.state.root],t.CommonData[e.config.root],e.name),this.setState({items:a})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}),this.columnlist.map((function(a){return t.fnBindStore(a,e)}))),e.CommonData&&e.CommonData.InsertSuccessData&&e.CommonData.InsertSuccessData.status&&(200!=e.CommonData.InsertSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Add Successfully.",AlertVarient:"success"})),e.CommonData&&e.CommonData.UpdateSuccessData&&e.CommonData.UpdateSuccessData.status&&(200!=e.CommonData.UpdateSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Updated Successfully.",AlertVarient:"success"}))}},{key:"fnDatatableCol",value:function(){var e=this,t=Object(g.e)(this.columnlist);return t.push({name:"Action",cell:function(t){return c.a.createElement(u.a,{"aria-label":"Basic example"},c.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.handleCopy(t)}},c.a.createElement("i",{className:"fa fa-files-o","aria-hidden":"true"})),c.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.handleEdit(t)}},c.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})))}}),t}},{key:"handleCopy",value:function(e){this.setState({formvalue:Object.assign({},e,{}),event:"Copy",showModal:!0,FormTitle:"Copy Record"})}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:this.selectedrow,event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"handleSave",value:function(){if(document.getElementsByName("frmProductGrpMapping_Allocation").length>0&&document.getElementsByName("frmProductGrpMapping_Allocation")[0].reportValidity()){var e=JSON.parse(JSON.stringify(this.state.formvalue));this.fnCleanData(e),"InvTypeID"in e||(e.InvTypeID=1);var t=e.Id;if(delete e.Id,"Edit"==this.state.event){this.fnCleanData(e);this.props.UpdateData({root:this.state.root,body:e,querydata:{Id:t},c:"L"});var a=Object(g.j)().UserID;this.props.addRecord({root:"History",body:{module:"ProductGrpMapping_Allocation",od:this.state.od,nd:e,ts:new Date,by:a}})}else"Copy"==this.state.event?(this.fnCleanData(e),this.props.InsertData({root:this.state.root,body:e,c:"L"})):this.props.InsertData({root:this.state.root,body:e,c:"L"});var n=e.ProductID;setTimeout(function(){n?this.props.GetCommonData({root:this.state.root,cols:Object(g.a)(this.columnlist,"name"),c:"L",con:[{ProductID:n}]}):this.props.GetCommonData({limit:10,skip:0,root:this.state.root,cols:Object(g.a)(this.columnlist,"name"),c:"L"})}.bind(this),2e3),this.setState({showModal:!1})}return!1}},{key:"fnCleanData",value:function(e){e=Object(g.d)(this.columnlist,e),this.setState({formvalue:e})}},{key:"productchange",value:function(e,t){this.setState({prolist:e.target.value}),this.props.GetCommonData({root:this.state.root,cols:Object(g.a)(this.columnlist,"name"),c:"L",con:[{ProductID:e.target.value}]})}},{key:"fnRenderfrmControl",value:function(e,t,a,n){return Object(g.f)(e,t,a,n)}},{key:"render",value:function(){var e=this,t=this.fnDatatableCol(),a=this.state,n=a.items,o=a.PageTitle,r=a.showModal,l=a.FormTitle,i=a.formvalue,s=a.showAlert,u=a.AlertMsg,p=a.AlertVarient,h=a.ModalValueChanged,y=a.event;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content"},c.a.createElement(C.a,{show:s,variant:p,body:u}),c.a.createElement(S.a,null,c.a.createElement(O.a,{md:"12"},c.a.createElement(I.a,null,c.a.createElement(E.a,null,c.a.createElement(S.a,null,c.a.createElement(O.a,{md:7},c.a.createElement(w.a,{tag:"h4"},o)),c.a.createElement(O.a,{md:3},c.a.createElement(f.a.Group,{as:O.a,md:12,controlId:"product_dropdown"},c.a.createElement(D.a,{firstoption:"Select Product",col:this.ProductList,onChange:this.productchange}))),c.a.createElement(O.a,{md:2},c.a.createElement(d.a,{variant:"primary",onClick:this.handleShow},"ADD")))),c.a.createElement(j.a,null,c.a.createElement(b.a,{columns:t,data:n}))))),c.a.createElement(m.a,{show:r,onHide:this.handleClose,dialogClassName:"modal-90w"},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,l)),c.a.createElement(m.a.Body,null,c.a.createElement(f.a,{name:"frmProductGrpMapping_Allocation"},c.a.createElement(S.a,null,this.columnlist.map((function(t){return e.fnRenderfrmControl(t,i,e.handleChange,y)}))))),c.a.createElement(m.a.Footer,null,c.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),c.a.createElement(v.If,{condition:h},c.a.createElement(v.Then,null,c.a.createElement("input",{type:"submit",value:"Save Changes",className:"btn btn-primary",onClick:this.handleSave})))))))}}]),a}(c.a.Component);t.default=Object(y.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:p.g,InsertData:p.y,UpdateData:p.S,addRecord:h.d})(T)},425:function(e,t,a){var n,o,r;o=[t,a(6),a(0)],void 0===(r="function"===typeof(n=function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return"function"===typeof e.children?a.default.createElement(a.default.Fragment,null,e.children()):a.default.createElement(a.default.Fragment,null,e.children||null)}function r(e){return!!("function"===typeof e?e():e)}function l(e){return o(e)}function i(e){return o(e)}function s(e){var t=e.condition,n=e.children;if(null==n)return null;var o=r(t);return a.default.createElement(a.default.Fragment,null,[].concat(n).find((function(e){return e.type!==a.default.createElement(i,null).type^!o}))||null)}Object.defineProperty(e,"__esModule",{value:!0}),e.Then=l,e.Else=i,e.If=s,e.Unless=u,e.When=d,e.Case=f,e.Default=m,e.Switch=p,e.default=void 0,t=n(t),a=n(a),l.propTypes=i.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var c=t.default.oneOfType([t.default.instanceOf(l),t.default.instanceOf(i),t.default.node]);function u(e){var t=e.condition,a=e.children;return!r(t)&&a?o({condition:t,children:a}):null}function d(e){var t=e.condition,a=e.children;return r(t)&&a?o({condition:t,children:a}):null}function f(e){return o(e)}function m(e){return o(e)}function p(e){var t,n,o=e.children;return a.default.Children.forEach(o,(function(e){a.default.isValidElement(e)&&(t||e.type!==f?n||e.type!==m||(n=e):r(e.props.condition)&&(t=e))})),t||n||null}s.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.arrayOf(c),c])},u.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},u.defaultProps={children:null},d.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},d.defaultProps={children:null},f.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},f.defaultProps={children:null},m.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])},m.defaultProps={children:null};var h=t.default.oneOfType([t.default.instanceOf(f),t.default.instanceOf(m),t.default.node]);p.propTypes={children:t.default.oneOfType([t.default.arrayOf(h),h])},p.defaultProps={children:null},s.Then=l,s.Else=i,s.When=d,s.Unless=u,s.Switch=p,s.Case=f,s.Default=m;var v=s;e.default=v})?n.apply(t,o):n)||(e.exports=r)},426:function(e,t,a){"use strict";e.exports=function(e,t,a,n,o,r,l,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[a,n,o,r,l,i],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},428:function(e,t,a){"use strict";var n=a(39),o=a(40),r=a(42),l=a(41),i=a(0),s=a.n(i),c=a(440),u=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={show:o.props.show},o}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show}),e.show&&setTimeout(function(){this.setState({show:!1})}.bind(this),5e3)}},{key:"render",value:function(){return this.state.show?s.a.createElement(c.a,{variant:this.props.variant},this.props.body):null}}]),a}(s.a.Component);t.a=u},440:function(e,t,a){"use strict";var n=a(3),o=a(7),r=a(8),l=a.n(r),i=a(0),s=a.n(i);a(426);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(a,r){var l,s=a,d=s[c(r)],f=s[r],m=Object(o.a)(s,[c(r),r].map(u)),p=t[r],h=function(e,t,a){var n=Object(i.useRef)(void 0!==e),o=Object(i.useState)(t),r=o[0],l=o[1],s=void 0!==e,c=n.current;return n.current=s,!s&&c&&r!==t&&l(t),[s?e:r,Object(i.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];a&&a.apply(void 0,[e].concat(n)),l(e)}),[a])]}(f,d,e[p]),v=h[0],y=h[1];return Object(n.a)({},m,((l={})[r]=v,l[p]=y,l))}),e)}a(23),a(433);var f=a(435),m=a(10),p=a(439),h=a(437),v=a(438),y=a(122),b=a(436),D=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],C=Object(v.a)("h4");C.displayName="DivStyledAsH4";var g=Object(y.a)("alert-heading",{Component:C}),S=Object(y.a)("alert-link",{Component:b.a}),O={show:!0,transition:p.a,closeLabel:"Close alert"},I=s.a.forwardRef((function(e,t){var a=d(e,{show:"onClose"}),r=a.bsPrefix,i=a.show,c=a.closeLabel,u=a.className,v=a.children,y=a.variant,b=a.onClose,C=a.dismissible,g=a.transition,S=Object(o.a)(a,D),O=Object(m.a)(r,"alert"),I=Object(f.a)((function(e){b&&b(!1,e)})),E=!0===g?p.a:g,w=s.a.createElement("div",Object(n.a)({role:"alert"},E?void 0:S,{ref:t,className:l()(u,O,y&&O+"-"+y,C&&O+"-dismissible")}),C&&s.a.createElement(h.a,{onClick:I,label:c}),v);return E?s.a.createElement(E,Object(n.a)({unmountOnExit:!0},S,{ref:void 0,in:i}),w):i?w:null}));I.displayName="Alert",I.defaultProps=O,I.Link=S,I.Heading=g;t.a=I}}]);
//# sourceMappingURL=66.c8f06fcf.chunk.js.map