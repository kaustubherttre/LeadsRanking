(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[50,126],{1282:function(e,t,a){"use strict";a.r(t);var n=a(39),o=a(40),r=a(121),l=a(42),i=a(41),s=a(0),c=a.n(s),u=a(1261),d=a(1262),f=a(1336),m=a(420),h=a(61),p=a(124),v=a(425),b=a(30),y=a(431),C=a(428),O=a(90),S=a(530),D=a(424),g=a(531),E=a(533),w=a(563),j=a(532),A=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var o;Object(n.a)(this,a),(o=t.call(this,e)).handleChange=function(e,t){var a=o.state.formvalue;o.state.od;e.target&&"checkbox"==e.target.type?a[e.target.id]=e.target.checked:e._isAMomentObject?a[t]=e.format():a[e.target.id]=e.target.value,o.setState({formvalue:a,ModalValueChanged:!0})},o.state={isLoaded:!1,showModal:!1,items:[],store:[],activePage:1,root:"AgeBucketScoreMaster",PageTitle:"Age Bucket Score",FormTitle:"",formvalue:{},event:"",ModalValueChanged:!1,user:{}},o.handleClose=o.handleClose.bind(Object(r.a)(o)),o.handleShow=o.handleShow.bind(Object(r.a)(o)),o.handleSave=o.handleSave.bind(Object(r.a)(o)),o.selectedrow={Id:0,Score:"",IsActive:!1,CreatedOn:new Date,ProductID:null,ProcessName:null},o.columnlist=[{name:"Id",label:"Id",type:"hidden",hide:!0},{name:"AgeGroup",label:"AgeGroup",type:"number"},{name:"Score",label:"Score",type:"decimal"},{name:"ProductID",label:"Product",type:"dropdown",config:{root:"Products",cols:["ID AS Id","ProductName AS Display"],con:[{Isactive:1}]},searchable:!0,editable:!1},{name:"ProcessName",label:"ProcessName",type:"dropdown",config:{root:"AllocationProcessMaster",cols:["ProcessName AS Id","ProcessName AS Display"],con:[{Isactive:1}]},searchable:!0},{name:"CreatedOn",label:"CreatedOn",type:"datetime",hide:!0},{name:"IsActive",label:"IsActive",type:"bool"}];return o}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.columnlist.map((function(t){return Object(O.c)(t,e.props)})),this.props.GetCommonData({limit:10,skip:0,root:this.state.root,cols:Object(O.a)(this.columnlist,"name"),c:"L"}),setTimeout(function(){this.setState({user:Object(O.j)()})}.bind(this),500)}},{key:"fnBindStore",value:function(e,t){var a;"dropdown"==e.type&&(t.CommonData[this.state.root]&&t.CommonData[e.config.root]&&(a=Object(O.l)(t.CommonData[this.state.root],t.CommonData[e.config.root],e.name),this.setState({items:a})))}},{key:"componentWillReceiveProps",value:function(e){var t=this;e.CommonData.isError||(this.setState({items:e.CommonData[this.state.root]}),this.setState({store:e.CommonData}),this.columnlist.map((function(a){return t.fnBindStore(a,e)}))),e.CommonData&&e.CommonData.InsertSuccessData&&e.CommonData.InsertSuccessData.status&&(200!=e.CommonData.InsertSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Add Successfully.",AlertVarient:"success"})),e.CommonData&&e.CommonData.UpdateSuccessData&&e.CommonData.UpdateSuccessData.status&&(200!=e.CommonData.UpdateSuccessData.status?this.setState({showAlert:!0,AlertMsg:e.CommonData.InsertSuccessData.error,AlertVarient:"danger"}):this.setState({showAlert:!0,AlertMsg:"Record Updated Successfully.",AlertVarient:"success"}))}},{key:"fnDatatableCol",value:function(){var e=this,t=Object(O.e)(this.columnlist);return t.push({name:"Action",cell:function(t){return c.a.createElement(u.a,{"aria-label":"Basic example"},c.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.handleCopy(t)}},c.a.createElement("i",{className:"fa fa-files-o","aria-hidden":"true"})),c.a.createElement(d.a,{variant:"secondary",onClick:function(){return e.handleEdit(t)}},c.a.createElement("i",{className:"fa fa-pencil-square-o","aria-hidden":"true"})))}}),t}},{key:"handleCopy",value:function(e){this.setState({formvalue:Object.assign({},e,{}),event:"Copy",showModal:!0,FormTitle:"Copy Record"})}},{key:"handleEdit",value:function(e){this.setState({od:Object.assign({},e,{}),formvalue:Object.assign({},e,{}),event:"Edit",showModal:!0,FormTitle:"Edit Record"})}},{key:"handleClose",value:function(){this.setState({showModal:!1})}},{key:"handleShow",value:function(){this.setState({formvalue:this.selectedrow,event:"Add",showModal:!0,FormTitle:"Add New Record"})}},{key:"handleSave",value:function(){if(document.getElementsByName("frmAgeBucketScoreMaster").length>0&&document.getElementsByName("frmAgeBucketScoreMaster")[0].reportValidity()){var e=JSON.parse(JSON.stringify(this.state.formvalue));this.fnCleanData(e);var t=e.Id;if(delete e.Id,"Edit"==this.state.event){this.fnCleanData(e);this.props.UpdateData({root:this.state.root,body:e,querydata:{Id:t},c:"L"});this.props.addRecord({root:"History",body:{module:"AgeBucketScoreMaster",od:this.state.od,nd:e,ts:new Date,by:Object(O.j)().UserID}})}else"Copy"==this.state.event?(e.CreatedOn=new Date,this.fnCleanData(e),this.props.InsertData({root:this.state.root,body:e,c:"L"})):(e.CreatedOn=new Date,this.props.InsertData({root:this.state.root,body:e,c:"L"}));setTimeout(function(){this.props.GetCommonData({root:this.state.root,cols:Object(O.a)(this.columnlist,"name"),c:"L"})}.bind(this),2e3),this.setState({showModal:!1})}return!1}},{key:"fnCleanData",value:function(e){e=Object(O.d)(this.columnlist,e),this.setState({formvalue:e})}},{key:"render",value:function(){var e=this,t=this.fnDatatableCol(),a=this.state,n=a.items,o=a.PageTitle,r=a.showModal,l=a.FormTitle,i=a.formvalue,s=a.showAlert,u=a.AlertMsg,h=a.AlertVarient,p=a.ModalValueChanged,b=a.event;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"content"},c.a.createElement(C.a,{show:s,variant:h,body:u}),c.a.createElement(S.a,null,c.a.createElement(D.a,{md:"12"},c.a.createElement(g.a,null,c.a.createElement(E.a,null,c.a.createElement(S.a,null,c.a.createElement(D.a,{md:11},c.a.createElement(w.a,{tag:"h4"},o)),c.a.createElement(D.a,{md:1},c.a.createElement(d.a,{variant:"primary",onClick:this.handleShow},"ADD")))),c.a.createElement(j.a,null,c.a.createElement(y.a,{columns:t,data:n}))))),c.a.createElement(f.a,{show:r,onHide:this.handleClose,dialogClassName:"modal-90w"},c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,l)),c.a.createElement(f.a.Body,null,c.a.createElement(m.a,{name:"frmAgeBucketScoreMaster"},c.a.createElement(S.a,null,this.columnlist.map((function(t){return Object(O.f)(t,i,e.handleChange,b)}))))),c.a.createElement(f.a.Footer,null,c.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),c.a.createElement(v.If,{condition:p},c.a.createElement(v.Then,null,c.a.createElement("input",{type:"submit",value:"Save Changes",className:"btn btn-primary",onClick:this.handleSave})))))))}}]),a}(c.a.Component);t.default=Object(b.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:h.g,InsertData:h.y,UpdateData:h.S,addRecord:p.d})(A)},425:function(e,t,a){var n,o,r;o=[t,a(6),a(0)],void 0===(r="function"===typeof(n=function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){return"function"===typeof e.children?a.default.createElement(a.default.Fragment,null,e.children()):a.default.createElement(a.default.Fragment,null,e.children||null)}function r(e){return!!("function"===typeof e?e():e)}function l(e){return o(e)}function i(e){return o(e)}function s(e){var t=e.condition,n=e.children;if(null==n)return null;var o=r(t);return a.default.createElement(a.default.Fragment,null,[].concat(n).find((function(e){return e.type!==a.default.createElement(i,null).type^!o}))||null)}Object.defineProperty(e,"__esModule",{value:!0}),e.Then=l,e.Else=i,e.If=s,e.Unless=u,e.When=d,e.Case=f,e.Default=m,e.Switch=h,e.default=void 0,t=n(t),a=n(a),l.propTypes=i.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var c=t.default.oneOfType([t.default.instanceOf(l),t.default.instanceOf(i),t.default.node]);function u(e){var t=e.condition,a=e.children;return!r(t)&&a?o({condition:t,children:a}):null}function d(e){var t=e.condition,a=e.children;return r(t)&&a?o({condition:t,children:a}):null}function f(e){return o(e)}function m(e){return o(e)}function h(e){var t,n,o=e.children;return a.default.Children.forEach(o,(function(e){a.default.isValidElement(e)&&(t||e.type!==f?n||e.type!==m||(n=e):r(e.props.condition)&&(t=e))})),t||n||null}s.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.arrayOf(c),c])},u.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},u.defaultProps={children:null},d.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},d.defaultProps={children:null},f.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},f.defaultProps={children:null},m.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])},m.defaultProps={children:null};var p=t.default.oneOfType([t.default.instanceOf(f),t.default.instanceOf(m),t.default.node]);h.propTypes={children:t.default.oneOfType([t.default.arrayOf(p),p])},h.defaultProps={children:null},s.Then=l,s.Else=i,s.When=d,s.Unless=u,s.Switch=h,s.Case=f,s.Default=m;var v=s;e.default=v})?n.apply(t,o):n)||(e.exports=r)},426:function(e,t,a){"use strict";e.exports=function(e,t,a,n,o,r,l,i){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[a,n,o,r,l,i],u=0;(s=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},428:function(e,t,a){"use strict";var n=a(39),o=a(40),r=a(42),l=a(41),i=a(0),s=a.n(i),c=a(440),u=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).state={show:o.props.show},o}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillReceiveProps",value:function(e){this.setState({show:e.show}),e.show&&setTimeout(function(){this.setState({show:!1})}.bind(this),5e3)}},{key:"render",value:function(){return this.state.show?s.a.createElement(c.a,{variant:this.props.variant},this.props.body):null}}]),a}(s.a.Component);t.a=u},440:function(e,t,a){"use strict";var n=a(3),o=a(7),r=a(8),l=a.n(r),i=a(0),s=a.n(i);a(426);function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(a,r){var l,s=a,d=s[c(r)],f=s[r],m=Object(o.a)(s,[c(r),r].map(u)),h=t[r],p=function(e,t,a){var n=Object(i.useRef)(void 0!==e),o=Object(i.useState)(t),r=o[0],l=o[1],s=void 0!==e,c=n.current;return n.current=s,!s&&c&&r!==t&&l(t),[s?e:r,Object(i.useCallback)((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];a&&a.apply(void 0,[e].concat(n)),l(e)}),[a])]}(f,d,e[h]),v=p[0],b=p[1];return Object(n.a)({},m,((l={})[r]=v,l[h]=b,l))}),e)}a(23),a(433);var f=a(435),m=a(10),h=a(439),p=a(437),v=a(438),b=a(122),y=a(436),C=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],O=Object(v.a)("h4");O.displayName="DivStyledAsH4";var S=Object(b.a)("alert-heading",{Component:O}),D=Object(b.a)("alert-link",{Component:y.a}),g={show:!0,transition:h.a,closeLabel:"Close alert"},E=s.a.forwardRef((function(e,t){var a=d(e,{show:"onClose"}),r=a.bsPrefix,i=a.show,c=a.closeLabel,u=a.className,v=a.children,b=a.variant,y=a.onClose,O=a.dismissible,S=a.transition,D=Object(o.a)(a,C),g=Object(m.a)(r,"alert"),E=Object(f.a)((function(e){y&&y(!1,e)})),w=!0===S?h.a:S,j=s.a.createElement("div",Object(n.a)({role:"alert"},w?void 0:D,{ref:t,className:l()(u,g,b&&g+"-"+b,O&&g+"-dismissible")}),O&&s.a.createElement(p.a,{onClick:E,label:c}),v);return w?s.a.createElement(w,Object(n.a)({unmountOnExit:!0},D,{ref:void 0,in:i}),j):i?j:null}));E.displayName="Alert",E.defaultProps=g,E.Link=D,E.Heading=S;t.a=E}}]);
//# sourceMappingURL=50.ef9e6dc0.chunk.js.map