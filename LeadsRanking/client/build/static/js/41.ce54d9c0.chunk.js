(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[41,126],{1320:function(e,t,a){"use strict";a.r(t);var n=a(123),r=a(43),o=a.n(r),i=a(63),l=a(39),s=a(40),c=a(121),u=a(42),d=a(41),f=a(0),m=a.n(f),h=a(1261),p=a(1262),v=a(420),b=a(1336),y=a(61),I=a(124),g=a(425),D=a(30),C=a(431),S=a(125),O=a(428),E=a(90),M=a(530),j=a(424),w=a(531),A=a(533),k=a(563),T=a(532),P=a(92),R=(a(187),a(51)),x=a.n(R),L=a(467),Y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){var a=n.state.formvalue;n.state.od;e.target&&"checkbox"==e.target.type?a[e.target.id]=e.target.checked:e._isAMomentObject?a[t]=e.format():a[e.target.id]=e.target.value,n.setState({formvalue:a,ModalValueChanged:!0})},n.validation=function(e){return e.isBefore(x()())},n.handleStartDateChange=function(e,t){e._isAMomentObject&&n.setState({startdate:e.format("YYYY-MM-DD"),enddate:e.add(60,"days").format("YYYY-MM-DD")},(function(){}))},n.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"AgentsIncentiveCriteria",PageTitle:"Agents Incentive Criteria",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,user:{},ProId:"",agentranklist:"",groupnamelist:"",startdate:x()().format("YYYY-MM-DD"),IncentiveLoader:!1,InsertLoader:!1},n.handleClose=n.handleClose.bind(Object(c.a)(n)),n.handleShow=n.handleShow.bind(Object(c.a)(n)),n.handleSave=n.handleSave.bind(Object(c.a)(n)),n.productchange=n.productchange.bind(Object(c.a)(n)),n.selectedrow={Id:0,ProductID:null,Validfrom:new Date,IsActive:!0},n.columnlist=[{name:"ProductID",label:"Product",type:"dropdown",config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]},searchable:!0,editable:!1,required:!0},{name:"Id",label:"Id",type:"hidden",hide:!0},{name:"SuperGroupID",label:"SuperGroupName",type:"dropdown",config:{root:"SuperGroupMaster",cols:["SuperGroupID AS Id","SuperGroupName AS Display"],con:[{Isactive:1}]},searchable:!0,editable:!1,required:!0},{name:"MinRange",label:"MinRange",type:"decimal",searchable:!0},{name:"MaxRange",label:"MaxRange",type:"decimal",searchable:!0},{name:"SuperGroupTypeId",label:"SuperGroupType",type:"dropdown",config:{root:"SuperGroupTypeMaster",cols:["SuperGroupTypeId AS Id","SuperGroupType AS Display"],con:[{Isactive:1}]},searchable:!0,editable:!1,required:!0},{name:"Value",label:"Value",type:"int",searchable:!0},{name:"Validfrom",label:"IncentiveMonth",type:"datetime",editable:!1,timeFormat:!1},{name:"IsActive",label:"IsActive",type:"bool"},{name:"CreatedOn",label:"CreatedOn",type:"datetime",hide:!0}];return n.ProductList={config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.columnlist.map((function(t){return Object(E.c)(t,e.props)})),setTimeout(function(){this.setState({user:Object(E.j)()})}.bind(this),500)}},{key:"fnBindStore",value:function(e,t){var a;"dropdown"==e.type&&(t.CommonData[this.state.root]&&t.CommonData[e.config.root]&&(a=Object(E.l)(this.state.IncentiveData,t.CommonData[e.config.root],e.name),this.setState({items:a})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}),this.columnlist.map((function(a){return t.fnBindStore(a,e)}))),e.CommonData&&e.CommonData.InsertSuccessData&&e.CommonData.InsertSuccessData.status&&200!=e.CommonData.InsertSuccessData.status&&this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}),e.CommonData&&e.CommonData.UpdateSuccessData&&e.CommonData.UpdateSuccessData.status&&(200!=e.CommonData.UpdateSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Updated Successfully.",AlertVarient:"success"}))}},{key:"fnDatatableCol",value:function(){var e=this,t=Object(E.e)(this.columnlist);return t.push({name:"Action",cell:function(t){return m.a.createElement(h.a,{"aria-label":"Basic example"},m.a.createElement(p.a,{variant:"secondary",onClick:function(){return e.handleCopy(t)}},m.a.createElement("i",{className:"fa fa-files-o","aria-hidden":"true"})),m.a.createElement(p.a,{variant:"secondary",onClick:function(){return e.handleEdit(t)}},m.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})))}}),t}},{key:"handleCopy",value:function(e){this.setState({formvalue:Object.assign({},e,{}),event:"Copy",showModal:!0,FormTitle:"Copy Record"})}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:this.selectedrow,event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"CheckLoader",value:function(e){if("IncentiveFetch"==e){if(this.state.IncentiveLoader)return m.a.createElement(L.a,null)}else if("IncentiveInsert"==e&&this.state.InsertLoader)return m.a.createElement(L.a,null)}},{key:"handleSave",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(document.getElementsByName("frmAgentsIncentiveCriteria").length>0&&document.getElementsByName("frmAgentsIncentiveCriteria")[0].reportValidity())){e.next=28;break}if(t=JSON.parse(JSON.stringify(this.state.formvalue)),this.fnCleanData(t),console.log("formvalue/////////////////",t),a=t.Id,delete t.Id,"Edit"!=this.state.event){e.next=14;break}return this.fnCleanData(t),e.next=10,this.props.GetCommonspData({root:"InsertAgentsIncentiveCriteria",c:"L",params:[{incentiveId:a,MinRange:t.MinRange,MaxRange:t.MaxRange,IncValue:t.Value,IsActive:t.IsActive,userId:Object(E.j)().UserID}]},function(e){e.data&&(console.log(e.data),alert(e.data.message))}.bind(this));case 10:n=Object(E.j)().UserID,this.props.addRecord({root:"History",body:{module:"AgentsIncentiveCriteria",od:this.state.od,nd:t,ts:new Date,by:n}}),e.next=25;break;case 14:if("Copy"!=this.state.event){e.next=19;break}this.fnCleanData(t),this.props.InsertData({root:this.state.root,body:t,c:"L"}),e.next=25;break;case 19:if(!(t.MaxRange<t.MinRange)){e.next=22;break}return alert("MinRange should be less than MaxRange"),e.abrupt("return",!1);case 22:return this.setState({InsertLoader:!0}),e.next=25,this.props.GetCommonspData({root:"InsertAgentsIncentiveCriteria",c:"L",params:[{SuperGroupID:t.SuperGroupID,SuperGroupTypeId:t.SuperGroupTypeId,IncentiveMonth:x()(t.Validfrom).format("YYYY-MM-DD"),ProductId:t.ProductID,MinRange:t.MinRange,MaxRange:t.MaxRange,IncValue:t.Value,IsActive:t.IsActive,userId:Object(E.j)().UserID}]},function(e){e.data&&(console.log(e.data),alert(e.data.message),this.setState({InsertLoader:!1}))}.bind(this));case 25:r=t.ProductID,setTimeout(function(){r&&this.props.GetCommonspData({root:"AgentsIncentiveCriteria",c:"L",params:[{ProductId:r,IncentiveMonth:x()(t.Validfrom).format("YYYY-MM-DD")}]},function(e){this.setState({IncentiveLoader:!1}),e.data&&e.data.data[0]&&(console.log(e.data.data[0]),this.setState({IncentiveData:e.data.data[0]}))}.bind(this))}.bind(this),2e3),this.setState({showModal:!1});case 28:return e.abrupt("return",!1);case 29:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fnCleanData",value:function(e){e=Object(E.d)(this.columnlist,e),this.setState({formvalue:e})}},{key:"productchange",value:function(e,t){this.setState({ProId:e.target.value})}},{key:"fnRenderfrmControl",value:function(e,t,a,n){return Object(E.f)(e,t,a,n)}},{key:"fetchIncentiveData",value:function(){this.setState({IncentiveLoader:!0}),this.props.GetCommonspData({root:"AgentsIncentiveCriteria",c:"L",params:[{ProductId:this.state.ProId,IncentiveMonth:this.state.startdate}]},function(e){this.setState({IncentiveLoader:!1}),e.data&&e.data.data[0]&&(console.log(e.data.data[0]),this.setState({IncentiveData:e.data.data[0]}))}.bind(this)),console.log("///////////",this.state.user)}},{key:"render",value:function(){var e,t=this,a=this.fnDatatableCol(),r=this.state,o=(r.items,r.PageTitle),i=r.showModal,l=r.FormTitle,s=r.formvalue,c=r.showAlert,u=r.AlertMsg,d=r.AlertVarient,f=r.ModalValueChanged,h=r.event,y=r.IncentiveData;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"content"},m.a.createElement(O.a,{show:c,variant:d,body:u}),m.a.createElement(M.a,null,m.a.createElement(j.a,{md:"12"},m.a.createElement(w.a,null,m.a.createElement(A.a,null,m.a.createElement(M.a,null,m.a.createElement(j.a,{md:4},m.a.createElement(k.a,{tag:"h4"},o)),m.a.createElement(j.a,{md:3},m.a.createElement(v.a.Group,{as:j.a,md:12,controlId:"product_dropdown"},m.a.createElement(S.a,{firstoption:"Select Product",col:this.ProductList,onChange:this.productchange}))),m.a.createElement(j.a,{md:2},m.a.createElement(P,(e={value:new Date,dateFormat:"YYYY-MM-DD"},Object(n.a)(e,"value",this.state.startdate),Object(n.a)(e,"isValidDate",this.validation),Object(n.a)(e,"onChange",(function(e){return t.handleStartDateChange(e)})),Object(n.a)(e,"utc",!0),Object(n.a)(e,"timeFormat",!1),e))),m.a.createElement(j.a,{md:1},m.a.createElement(p.a,{variant:"primary",onClick:function(){return t.fetchIncentiveData()}},"Fetch ",this.CheckLoader("IncentiveFetch"))),m.a.createElement(j.a,{md:1},m.a.createElement(p.a,{variant:"primary",onClick:this.handleShow},"ADD")))),m.a.createElement(T.a,null,m.a.createElement(C.a,{columns:a,data:y}))))),m.a.createElement(b.a,{show:i,onHide:this.handleClose,dialogClassName:"modal-90w"},m.a.createElement(b.a.Header,{closeButton:!0},m.a.createElement(b.a.Title,null,l)),m.a.createElement(b.a.Body,null,m.a.createElement(v.a,{name:"frmAgentsIncentiveCriteria"},m.a.createElement(M.a,null,this.columnlist.map((function(e){return t.fnRenderfrmControl(e,s,t.handleChange,h)}))))),m.a.createElement(b.a.Footer,null,m.a.createElement(p.a,{variant:"secondary",onClick:this.handleClose},"Close"),m.a.createElement(g.If,{condition:f},m.a.createElement(g.Then,null,m.a.createElement("input",{type:"submit",value:this.CheckLoader("IncentiveInsert"),className:"btn btn-primary",onClick:this.handleSave})))))))}}]),a}(m.a.Component);t.default=Object(D.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:y.g,InsertData:y.y,UpdateData:y.S,addRecord:I.d,GetCommonspData:y.h})(Y)},425:function(e,t,a){var n,r,o;r=[t,a(6),a(0)],void 0===(o="function"===typeof(n=function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return"function"===typeof e.children?a.default.createElement(a.default.Fragment,null,e.children()):a.default.createElement(a.default.Fragment,null,e.children||null)}function o(e){return!!("function"===typeof e?e():e)}function i(e){return r(e)}function l(e){return r(e)}function s(e){var t=e.condition,n=e.children;if(null==n)return null;var r=o(t);return a.default.createElement(a.default.Fragment,null,[].concat(n).find((function(e){return e.type!==a.default.createElement(l,null).type^!r}))||null)}Object.defineProperty(e,"__esModule",{value:!0}),e.Then=i,e.Else=l,e.If=s,e.Unless=u,e.When=d,e.Case=f,e.Default=m,e.Switch=h,e.default=void 0,t=n(t),a=n(a),i.propTypes=l.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var c=t.default.oneOfType([t.default.instanceOf(i),t.default.instanceOf(l),t.default.node]);function u(e){var t=e.condition,a=e.children;return!o(t)&&a?r({condition:t,children:a}):null}function d(e){var t=e.condition,a=e.children;return o(t)&&a?r({condition:t,children:a}):null}function f(e){return r(e)}function m(e){return r(e)}function h(e){var t,n,r=e.children;return a.default.Children.forEach(r,(function(e){a.default.isValidElement(e)&&(t||e.type!==f?n||e.type!==m||(n=e):o(e.props.condition)&&(t=e))})),t||n||null}s.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.arrayOf(c),c])},u.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},u.defaultProps={children:null},d.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},d.defaultProps={children:null},f.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},f.defaultProps={children:null},m.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])},m.defaultProps={children:null};var p=t.default.oneOfType([t.default.instanceOf(f),t.default.instanceOf(m),t.default.node]);h.propTypes={children:t.default.oneOfType([t.default.arrayOf(p),p])},h.defaultProps={children:null},s.Then=i,s.Else=l,s.When=d,s.Unless=u,s.Switch=h,s.Case=f,s.Default=m;var v=s;e.default=v})?n.apply(t,r):n)||(e.exports=o)},426:function(e,t,a){"use strict";e.exports=function(e,t,a,n,r,o,i,l){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[a,n,r,o,i,l],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},428:function(e,t,a){"use strict";var n=a(39),r=a(40),o=a(42),i=a(41),l=a(0),s=a.n(l),c=a(440),u=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={show:r.props.show},r}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show}),e.show&&setTimeout(function(){this.setState({show:!1})}.bind(this),5e3)}},{key:"render",value:function(){return this.state.show?s.a.createElement(c.a,{variant:this.props.variant},this.props.body):null}}]),a}(s.a.Component);t.a=u},440:function(e,t,a){"use strict";var n=a(3),r=a(7),o=a(8),i=a.n(o),l=a(0),s=a.n(l);a(426);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(a,o){var i,s=a,d=s[c(o)],f=s[o],m=Object(r.a)(s,[c(o),o].map(u)),h=t[o],p=function(e,t,a){var n=Object(l.useRef)(void 0!==e),r=Object(l.useState)(t),o=r[0],i=r[1],s=void 0!==e,c=n.current;return n.current=s,!s&&c&&o!==t&&i(t),[s?e:o,Object(l.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a&&a.apply(void 0,[e].concat(n)),i(e)}),[a])]}(f,d,e[h]),v=p[0],b=p[1];return Object(n.a)({},m,((i={})[o]=v,i[h]=b,i))}),e)}a(23),a(433);var f=a(435),m=a(10),h=a(439),p=a(437),v=a(438),b=a(122),y=a(436),I=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],g=Object(v.a)("h4");g.displayName="DivStyledAsH4";var D=Object(b.a)("alert-heading",{Component:g}),C=Object(b.a)("alert-link",{Component:y.a}),S={show:!0,transition:h.a,closeLabel:"Close alert"},O=s.a.forwardRef((function(e,t){var a=d(e,{show:"onClose"}),o=a.bsPrefix,l=a.show,c=a.closeLabel,u=a.className,v=a.children,b=a.variant,y=a.onClose,g=a.dismissible,D=a.transition,C=Object(r.a)(a,I),S=Object(m.a)(o,"alert"),O=Object(f.a)((function(e){y&&y(!1,e)})),E=!0===D?h.a:D,M=s.a.createElement("div",Object(n.a)({role:"alert"},E?void 0:C,{ref:t,className:i()(u,S,b&&S+"-"+b,g&&S+"-dismissible")}),g&&s.a.createElement(p.a,{onClick:O,label:c}),v);return E?s.a.createElement(E,Object(n.a)({unmountOnExit:!0},C,{ref:void 0,in:l}),M):l?M:null}));O.displayName="Alert",O.defaultProps=S,O.Link=C,O.Heading=D;t.a=O},467:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("i",{className:"fa fa-spinner fa-spin"})}}}]);
//# sourceMappingURL=41.ce54d9c0.chunk.js.map