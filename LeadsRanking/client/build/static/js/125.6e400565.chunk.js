(this.webpackJsonpMatrix_Dashboard=this.webpackJsonpMatrix_Dashboard||[]).push([[125],{1273:function(e,a,t){"use strict";t.r(a);var n=t(39),l=t(40),r=t(42),s=t(41),c=t(0),m=t.n(c),o=(t(51),t(1),t(61)),i=(t(425),t(30)),u=(t(431),t(496),t(430)),g=(t(427),t(90)),E=t(530),d=t(424),f=t(531),h=t(533),p=t(563),b=t(532),v=function(e){console.log("-----props",e);var a=new Date(e.time),t="";return t=0==e.msg.indexOf("http://")||0==e.msg.indexOf("https://")?m.a.createElement("a",{href:e.msg,target:"blank",className:"date-line"},m.a.createElement("strong",null,e.msg)):e.msg,m.a.createElement("div",{className:"chatPattern"},m.a.createElement("b",null,e.name)," ",m.a.createElement("span",{className:"msg-time"}," ",a.toLocaleTimeString()),m.a.createElement("br",null),m.a.createElement("p",null,t))},D=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={messages:[],PageTitle:"Chat History"},l}return Object(l.a)(t,[{key:"getMessage",value:function(){console.log("/////////////////")}},{key:"componentDidMount",value:function(){var e=this,a=Object(g.i)("rid");Object(o.f)(a,(function(a){console.log("-----result",a.data.data),Array.isArray(a.data.data)&&e.setState((function(){return{messages:a.data.data}}))}))}},{key:"render",value:function(){var e,a=this.state,t=a.messages,n=a.PageTitle;return console.log("-------messages-------",t),t&&t[0]&&(e=(e=new Date(t[0].ts)).toLocaleDateString()),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"content"},m.a.createElement(u.a,null),m.a.createElement(E.a,null,m.a.createElement(d.a,{md:"8"},m.a.createElement(f.a,null,m.a.createElement(h.a,null,m.a.createElement(E.a,null,m.a.createElement(d.a,{md:10},m.a.createElement(p.a,{tag:"h3"},n)))),m.a.createElement(b.a,null,0==t.length?m.a.createElement("h6",null,"no message found"):m.a.createElement(m.a.Fragment,null,m.a.createElement("h6",null,"Start of conversation ",e&&m.a.createElement("span",null,"(",e,")")),m.a.createElement("div",{className:"main-section"},t&&t.map((function(e){return m.a.createElement(v,{msg:e.msg,name:e.name,time:e.ts})}))))))))))}}]),t}(m.a.Component);a.default=Object(i.b)((function(e){return{CommonData:e.CommonData}}),{GetCommonData:o.g,InsertData:o.y,UpdateData:o.S,DeleteData:o.c})(D)}}]);
//# sourceMappingURL=125.6e400565.chunk.js.map