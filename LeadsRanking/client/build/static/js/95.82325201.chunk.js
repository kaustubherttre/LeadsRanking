(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[95,126],{1267:function(e,t,n){"use strict";n.r(t);var a=n(94),l=n(39),u=n(40),r=n(42),i=n(41),o=n(0),d=n.n(o),c=n(1262),f=(n(51),n(1),n(61)),s=(n(425),n(30)),h=n(430),p=(n(427),n(90)),m=n(530),y=n(424),P=n(531),b=n(533),g=n(563),O=n(532),v=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={PageTitle:"QuickSight Visualization",QuicksightUrl:[]},a.ecode=null,a.mapping={Motor:{DashboardId:"69489666-583f-4147-81a0-5e02dae0a382",users:{PW00603:"GG",PW12049:"Amol",PW08726:"Puneet Bhatia",PW12750:"Shaukat Ali",AU00720:"test"}},Investment:{DashboardId:"9c8e7da4-0c30-4d52-933e-8c131f0b6763",users:{PW01088:"Akshay Sahni",PW15063:["Aritra","Aritra Saha"],PW00512:"Joy Bhatnagar",PW00547:"Kushagra Ghai",PW00448:"simmerpreet Singh",PW12750:"Shaukat Ali",AU00720:"test"}},Term:{DashboardId:"1590a560-7fff-44d3-bb33-5e8ace69cb18",users:{PW12926:"Umang",PW00446:"Devender Singh",PW12049:"Amol",PW01455:"Justin Thomas",PW00547:"Kushagra Ghai",PW20500:"Smruti Shetty",PW08961:"Punit Gandhi",AU00720:"test"}},Health:{DashboardId:"a94a49c0-0479-41ad-b916-0813273c9c99",users:{PW14905:"Amit Ahuja",PW12049:"Amol Sawant",PW18603:"Mohit Arora",PW01420:"Shailja Charan",PW00637:"Anand",PW20500:"Smruti Shetty",AU00720:"test"}}},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("getuser",Object(p.j)());var t=Object(p.j)().EmployeeId;this.ecode=t;var n=this.mapping,l=function(l){n[l].users[t]&&e.setState((function(e){return{QuicksightUrl:[].concat(Object(a.a)(e.QuicksightUrl),[{department:l}])}}))};for(var u in n)l(u)}},{key:"handleOpen",value:function(e){console.log("----------department",e),Object(f.j)({userid:this.ecode,DashboardId:this.mapping[e].DashboardId},(function(e){console.log("-----result",e),e&&e.data&&e.data.QuicksightUrl&&window.open(e.data.QuicksightUrl,"_blank")}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.QuicksightUrl,a=t.PageTitle;return console.log("-------QuicksightUrl-------",n),d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"content"},d.a.createElement(h.a,null),d.a.createElement(m.a,null,d.a.createElement(y.a,{md:"12"},d.a.createElement(P.a,null,d.a.createElement(b.a,null,d.a.createElement(m.a,null,d.a.createElement(y.a,{md:10},d.a.createElement(g.a,{tag:"h3"},a)))),d.a.createElement(O.a,null,n&&n.map((function(t){return d.a.createElement("div",null,d.a.createElement("h5",null,t.department),d.a.createElement(c.a,{onClick:function(){return e.handleOpen(t.department)},variant:"primary",style:{marginBottom:"3.5%"}},"Click to view dashboard"))}))))))))}}]),n}(d.a.Component);t.default=Object(s.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:f.g,InsertData:f.y,UpdateData:f.S,DeleteData:f.c})(v)},425:function(e,t,n){var a,l,u;l=[t,n(6),n(0)],void 0===(u="function"===typeof(a=function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return"function"===typeof e.children?n.default.createElement(n.default.Fragment,null,e.children()):n.default.createElement(n.default.Fragment,null,e.children||null)}function u(e){return!!("function"===typeof e?e():e)}function r(e){return l(e)}function i(e){return l(e)}function o(e){var t=e.condition,a=e.children;if(null==a)return null;var l=u(t);return n.default.createElement(n.default.Fragment,null,[].concat(a).find((function(e){return e.type!==n.default.createElement(i,null).type^!l}))||null)}Object.defineProperty(e,"__esModule",{value:!0}),e.Then=r,e.Else=i,e.If=o,e.Unless=c,e.When=f,e.Case=s,e.Default=h,e.Switch=p,e.default=void 0,t=a(t),n=a(n),r.propTypes=i.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])};var d=t.default.oneOfType([t.default.instanceOf(r),t.default.instanceOf(i),t.default.node]);function c(e){var t=e.condition,n=e.children;return!u(t)&&n?l({condition:t,children:n}):null}function f(e){var t=e.condition,n=e.children;return u(t)&&n?l({condition:t,children:n}):null}function s(e){return l(e)}function h(e){return l(e)}function p(e){var t,a,l=e.children;return n.default.Children.forEach(l,(function(e){n.default.isValidElement(e)&&(t||e.type!==s?a||e.type!==h||(a=e):u(e.props.condition)&&(t=e))})),t||a||null}o.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.arrayOf(d),d])},c.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},c.defaultProps={children:null},f.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},f.defaultProps={children:null},s.propTypes={condition:t.default.oneOfType([t.default.func,t.default.bool]).isRequired,children:t.default.oneOfType([t.default.func,t.default.node])},s.defaultProps={children:null},h.propTypes={children:t.default.oneOfType([t.default.func,t.default.node])},h.defaultProps={children:null};var m=t.default.oneOfType([t.default.instanceOf(s),t.default.instanceOf(h),t.default.node]);p.propTypes={children:t.default.oneOfType([t.default.arrayOf(m),m])},p.defaultProps={children:null},o.Then=r,o.Else=i,o.When=f,o.Unless=c,o.Switch=p,o.Case=s,o.Default=h;var y=o;e.default=y})?a.apply(t,l):a)||(e.exports=u)},427:function(e,t,n){}}]);
//# sourceMappingURL=95.82325201.chunk.js.map