(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[61,126],{1288:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),r=a(121),l=a(42),i=a(41),s=a(0),c=a.n(s),d=a(1261),u=a(1262),f=a(420),m=a(1336),p=a(61),h=a(124),g=a(425),v=a(30),y=a(431),b=a(125),k=a(428),C=a(90),S=a(530),D=a(424),O=a(531),E=a(533),A=a(563),w=a(532),j=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var o;Object(n.a)(this,a),(o=t.call(this,e)).handleChange=function(e,t){var a=o.state.formvalue;o.state.od;e.target&&"checkbox"==e.target.type?a[e.target.id]=e.target.checked:e._isAMomentObject?a[t]=e.format():a[e.target.id]=e.target.value,o.setState({formvalue:a,ModalValueChanged:!0})},o.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"LeadAgentRankMapping",PageTitle:"Lead Agent Rank Mapping",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,user:{},prolist:"",agentranklist:"",leadranklist:""},o.handleClose=o.handleClose.bind(Object(r.a)(o)),o.handleShow=o.handleShow.bind(Object(r.a)(o)),o.handleSave=o.handleSave.bind(Object(r.a)(o)),o.productchange=o.productchange.bind(Object(r.a)(o)),o.leadranklistchange=o.leadranklistchange.bind(Object(r.a)(o)),o.agentranklistchange=o.agentranklistchange.bind(Object(r.a)(o)),o.selectedrow={Id:0,ProductID:null,TempCount:null},o.columnlist=[{name:"Id",label:"Id",type:"hidden",hide:!0},{name:"AgentRank",label:"AgentRank",type:"dropdown",config:{root:"LeadAgentRankMapping",cols:["DISTINCT AgentRank AS Id","AgentRank AS Display"],statename:"agentrankmapping",state:!0}},{name:"LeadRank",label:"LeadRank",type:"dropdown",config:{root:"LeadAgentRankMapping",cols:["DISTINCT LeadRank AS Id","LeadRank AS Display"],statename:"leadrankmapping",state:!0}},{name:"Coeff",label:"Coeff",type:"decimal"},{name:"ProductID",label:"Product",type:"dropdown",config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]},searchable:!0,editable:!1},{name:"Priority",label:"Priority",type:"number"},{name:"TempCount",label:"TempCount",type:"string"}];return o.ProductList={config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]}},o.AgentRankList={config:{root:"LeadAgentRankMapping",cols:["DISTINCT AgentRank AS Id","AgentRank AS Display"],statename:"agentrankmapping",state:!0}},o.LeadRankList={config:{root:"LeadAgentRankMapping",cols:["DISTINCT LeadRank AS Id","LeadRank AS Display"],statename:"leadrankmapping",state:!0}},o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.columnlist.map((function(t){return Object(C.c)(t,e.props)})),this.props.GetCommonData({limit:10,skip:0,root:this.state.root,cols:Object(C.a)(this.columnlist,"name"),c:"L"}),setTimeout(function(){this.setState({user:Object(C.j)()})}.bind(this),500)}},{key:"fnBindStore",value:function(e,t){var a;"dropdown"==e.type&&(t.CommonData[this.state.root]&&t.CommonData[e.config.root]&&(a=Object(C.l)(t.CommonData[this.state.root],t.CommonData[e.config.root],e.name),this.setState({items:a})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}),this.columnlist.map((function(a){return t.fnBindStore(a,e)}))),e.CommonData&&e.CommonData.InsertSuccessData&&e.CommonData.InsertSuccessData.status&&(200!=e.CommonData.InsertSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Add Successfully.",AlertVarient:"success"})),e.CommonData&&e.CommonData.UpdateSuccessData&&e.CommonData.UpdateSuccessData.status&&(200!=e.CommonData.UpdateSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Updated Successfully.",AlertVarient:"success"}))}},{key:"fnDatatableCol",value:function(){var e=this,t=Object(C.e)(this.columnlist);return t.push({name:"Action",cell:function(t){return c.a.createElement(d.a,{"aria-label":"Basic example"},c.a.createElement(u.a,{variant:"secondary",onClick:function(){return e.handleCopy(t)}},c.a.createElement("i",{className:"fa fa-files-o","aria-hidden":"true"})),c.a.createElement(u.a,{variant:"secondary",onClick:function(){return e.handleEdit(t)}},c.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})))}}),t}},{key:"handleCopy",value:function(e){this.setState({formvalue:Object.assign({},e,{}),event:"Copy",showModal:!0,FormTitle:"Copy Record"})}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:this.selectedrow,event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"handleSave",value:function(){if(document.getElementsByName("frmLeadAgentRankMapping_NewApp").length>0&&document.getElementsByName("frmLeadAgentRankMapping_NewApp")[0].reportValidity()){var e=JSON.parse(JSON.stringify(this.state.formvalue));this.fnCleanData(e);var t=e.Id;if(delete e.Id,"Edit"==this.state.event){this.fnCleanData(e);this.props.UpdateData({root:this.state.root,body:e,querydata:{Id:t},c:"L"});this.props.addRecord({root:"History",body:{module:"LeadAgentRankMapping_NewApp",od:this.state.od,nd:e,ts:new Date,by:Object(C.j)().UserID}})}else"Copy"==this.state.event?(this.fnCleanData(e),this.props.InsertData({root:this.state.root,body:e,c:"L"})):this.props.InsertData({root:this.state.root,body:e,c:"L"});setTimeout(function(){this.props.GetCommonData({root:this.state.root,cols:Object(C.a)(this.columnlist,"name"),c:"L",con:[{Id:t}]})}.bind(this),2e3),this.setState({showModal:!1})}return!1}},{key:"fnCleanData",value:function(e){e=Object(C.d)(this.columnlist,e),this.setState({formvalue:e})}},{key:"productchange",value:function(e,t){this.setState({prolist:e.target.value})}},{key:"leadranklistchange",value:function(e,t){this.setState({leadranklist:e.target.value})}},{key:"agentranklistchange",value:function(e,t){console.log(e.target.value),this.setState({agentranklist:e.target.value}),console.log(this.state.leadranklist+this.state.agentranklist+this.state.prolist),this.props.GetCommonData({limit:10,skip:0,root:this.state.root,cols:Object(C.a)(this.columnlist,"name"),c:"L",con:[{ProductID:this.state.prolist},{AgentRank:e.target.value},{LeadRank:this.state.leadranklist}]})}},{key:"render",value:function(){var e=this,t=this.fnDatatableCol(),a=this.state,n=a.items,o=a.PageTitle,r=a.showModal,l=a.FormTitle,i=a.formvalue,s=a.showAlert,d=a.AlertMsg,p=a.AlertVarient,h=a.ModalValueChanged,v=a.event;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content"},c.a.createElement(k.a,{show:s,variant:p,body:d}),c.a.createElement(S.a,null,c.a.createElement(D.a,{md:"12"},c.a.createElement(O.a,null,c.a.createElement(E.a,null,c.a.createElement(S.a,null,c.a.createElement(D.a,{md:2},c.a.createElement(A.a,{tag:"h4"},o)),c.a.createElement(D.a,{md:3},c.a.createElement(f.a.Group,{as:D.a,md:12,controlId:"product_dropdown"},c.a.createElement(b.a,{firstoption:"Select Product",col:this.ProductList,onChange:this.productchange}))),c.a.createElement(D.a,{md:3},c.a.createElement(f.a.Group,{as:D.a,md:12,controlId:"leadrank_dropdown"},c.a.createElement(b.a,{firstoption:"Select Lead Rank",col:this.LeadRankList,onChange:this.leadranklistchange}))),c.a.createElement(D.a,{md:3},c.a.createElement(f.a.Group,{as:D.a,md:12,controlId:"agentrank_dropdown"},c.a.createElement(b.a,{firstoption:"Select Agent Rank",col:this.AgentRankList,onChange:this.agentranklistchange}))),c.a.createElement(D.a,{md:1},c.a.createElement(u.a,{variant:"primary",onClick:this.handleShow},"ADD")))),c.a.createElement(w.a,null,c.a.createElement(y.a,{columns:t,data:n}))))),c.a.createElement(m.a,{show:r,onHide:this.handleClose,dialogClassName:"modal-90w"},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,l)),c.a.createElement(m.a.Body,null,c.a.createElement(f.a,{name:"frmLeadAgentRankMapping_NewApp"},c.a.createElement(S.a,null,this.columnlist.map((function(t){return Object(C.f)(t,i,e.handleChange,v)}))))),c.a.createElement(m.a.Footer,null,c.a.createElement(u.a,{variant:"secondary",onClick:this.handleClose},"Close"),c.a.createElement(g.If,{condition:h},c.a.createElement(g.Then,null,c.a.createElement("input",{type:"submit",value:"Save Changes",className:"btn btn-primary",onClick:this.handleSave})))))))}}]),a}(c.a.Component);t.default=Object(v.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:p.g,InsertData:p.y,UpdateData:p.S,addRecord:h.d})(j)},425:function(e,t,a){var n,o,r;o=[t,a(6),a(0)],void 0===(r="function"===typeof(n=function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return"function"===typeof e.children?a.default.createElement(a.default.Fragment,null,e.children()):a.default.createElement(a.default.Fragment,null,e.children||null)}function r(e){return!!("function"===typeof e?e():e)}function l(e){return o(e)}function i(e){return o(e)}function s(e){var t=e.condition,n=e.children;if(null==n)return null;var o=r(t);return a.default.createElement(a.default.Fragment,null,[].concat(n).find((function(e){return e.type!==a.default.createElement(i,null).type^!o}))||null)}Object.defineProperty(e,"__esModule",{value:!0}),e.Then=l,e.Else=i,e.If=s,e.Unless=d,e.When=u,e.Case=f,e.Default=m,e.Switch=p,e.default=void 0,t=n(t),a=n(a),l.propTypes=i.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var c=t.default.oneOfType([t.default.instanceOf(l),t.default.instanceOf(i),t.default.node]);function d(e){var t=e.condition,a=e.children;return!r(t)&&a?o({condition:t,children:a}):null}function u(e){var t=e.condition,a=e.children;return r(t)&&a?o({condition:t,children:a}):null}function f(e){return o(e)}function m(e){return o(e)}function p(e){var t,n,o=e.children;return a.default.Children.forEach(o,(function(e){a.default.isValidElement(e)&&(t||e.type!==f?n||e.type!==m||(n=e):r(e.props.condition)&&(t=e))})),t||n||null}s.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.arrayOf(c),c])},d.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},d.defaultProps={children:null},u.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},u.defaultProps={children:null},f.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},f.defaultProps={children:null},m.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])},m.defaultProps={children:null};var h=t.default.oneOfType([t.default.instanceOf(f),t.default.instanceOf(m),t.default.node]);p.propTypes={children:t.default.oneOfType([t.default.arrayOf(h),h])},p.defaultProps={children:null},s.Then=l,s.Else=i,s.When=u,s.Unless=d,s.Switch=p,s.Case=f,s.Default=m;var g=s;e.default=g})?n.apply(t,o):n)||(e.exports=r)},426:function(e,t,a){"use strict";e.exports=function(e,t,a,n,o,r,l,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[a,n,o,r,l,i],d=0;(s=new Error(t.replace(/%s/g,(function(){return c[d++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},428:function(e,t,a){"use strict";var n=a(39),o=a(40),r=a(42),l=a(41),i=a(0),s=a.n(i),c=a(440),d=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={show:o.props.show},o}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show}),e.show&&setTimeout(function(){this.setState({show:!1})}.bind(this),5e3)}},{key:"render",value:function(){return this.state.show?s.a.createElement(c.a,{variant:this.props.variant},this.props.body):null}}]),a}(s.a.Component);t.a=d},440:function(e,t,a){"use strict";var n=a(3),o=a(7),r=a(8),l=a.n(r),i=a(0),s=a.n(i);a(426);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function d(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(a,r){var l,s=a,u=s[c(r)],f=s[r],m=Object(o.a)(s,[c(r),r].map(d)),p=t[r],h=function(e,t,a){var n=Object(i.useRef)(void 0!==e),o=Object(i.useState)(t),r=o[0],l=o[1],s=void 0!==e,c=n.current;return n.current=s,!s&&c&&r!==t&&l(t),[s?e:r,Object(i.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];a&&a.apply(void 0,[e].concat(n)),l(e)}),[a])]}(f,u,e[p]),g=h[0],v=h[1];return Object(n.a)({},m,((l={})[r]=g,l[p]=v,l))}),e)}a(23),a(433);var f=a(435),m=a(10),p=a(439),h=a(437),g=a(438),v=a(122),y=a(436),b=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],k=Object(g.a)("h4");k.displayName="DivStyledAsH4";var C=Object(v.a)("alert-heading",{Component:k}),S=Object(v.a)("alert-link",{Component:y.a}),D={show:!0,transition:p.a,closeLabel:"Close alert"},O=s.a.forwardRef((function(e,t){var a=u(e,{show:"onClose"}),r=a.bsPrefix,i=a.show,c=a.closeLabel,d=a.className,g=a.children,v=a.variant,y=a.onClose,k=a.dismissible,C=a.transition,S=Object(o.a)(a,b),D=Object(m.a)(r,"alert"),O=Object(f.a)((function(e){y&&y(!1,e)})),E=!0===C?p.a:C,A=s.a.createElement("div",Object(n.a)({role:"alert"},E?void 0:S,{ref:t,className:l()(d,D,v&&D+"-"+v,k&&D+"-dismissible")}),k&&s.a.createElement(h.a,{onClick:O,label:c}),g);return E?s.a.createElement(E,Object(n.a)({unmountOnExit:!0},S,{ref:void 0,in:i}),A):i?A:null}));O.displayName="Alert",O.defaultProps=D,O.Link=S,O.Heading=C;t.a=O}}]);
//# sourceMappingURL=61.b64436e9.chunk.js.map