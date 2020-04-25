(window["webpackJsonpcorona-app"]=window["webpackJsonpcorona-app"]||[]).push([[0],{12:function(e,t,a){e.exports={container:"Cards_container__3pPmh",card:"Cards_card__ZA1yb",infected:"Cards_infected__1kH3H",recovered:"Cards_recovered__3FDG1",deaths:"Cards_deaths__3TiQP"}},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=a(4),l=a.n(i),s=a(6),u=a(70),d=a(18),p=a(71),f=a(72),m=a(81),h=a(218),v=a(221),b=a(219),g=a(220),y=a(12),E=a.n(y),O=(a(89),a(31)),w=a.n(O),C=function(e){return e.toLocaleString("en-IN")},j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:E.a.container},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:w()(E.a.card,E.a.infected)},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(g.a,{variant:"h5"},C(a.value)),r.a.createElement(g.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Total positive cases of COVID-19"))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:w()(E.a.card,E.a.recovered)},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(g.a,{variant:"h5"},C(n.value)),r.a.createElement(g.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Total recovered cases from COVID-19"))),r.a.createElement(h.a,{item:!0,component:v.a,xs:12,md:3,className:w()(E.a.card,E.a.deaths)},r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(g.a,{variant:"h5"},C(c.value)),r.a.createElement(g.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(g.a,{variant:"body2"},"Total deaths by COVID-19"))))):"Loading..."},x=a(17),_=a(32),k=a.n(_),D="https://covid19.mathdro.id/api/countries",S=function(){var e=Object(s.a)(l.a.mark((function e(t){var a,n,r,c,o,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://covid19.mathdro.id/api",console.log(t),t&&"World"!==t&&(a=D.concat("/").concat(t)),e.prev=3,console.log(a),e.next=7,k.a.get(a);case 7:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,i=r.deaths,s=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:i,lastUpdate:s});case 16:e.prev=16,e.t0=e.catch(3),console.log("Error fetching data from the API..!!");case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("https://covid19.mathdro.id/api/daily");case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get(D);case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=a(77),N=a.n(I),V=a(44),B=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,i=e.country,u=Object(n.useState)([]),d=Object(x.a)(u,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,P();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(i);var m=0!==p.length?r.a.createElement(V.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",backgroundColor:"rgba(127, 127, 255, 0.3)",opacity:.5,fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",backgroundColor:"rgba(255, 127, 127, 0.6)",opacity:.5,fill:!0}]},width:800,height:400,options:{maintainAspectRatio:!1}}):null,h=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(127, 127, 255, 1)","rgba(127,255,127,1)","rgba(255, 127, 127, 1)"],data:[a.value,c.value,o.value]}]},width:800,height:400,options:{maintainAspectRatio:!1,legend:{display:!1},title:{display:!0,text:"Current scenario in "+i,fontColor:"white"}}}):null;return r.a.createElement("div",{className:N.a.container},i&&"Global"!==i?h:m)},R=a(16),T=a(80);function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var z=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(x.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[i]),console.log(o);var u,d={option:function(e,t){return U({},e,{backgroundColor:t.isSelected?"gray":"cornsilk","&:hover":{backgroundColor:"darkgray"}})},control:function(e){return U({},e,{width:"300px",backgroundColor:"black"})},singleValue:function(e){return U({},e,{color:"#808080"})},placeholder:function(e){return U({},e,{color:"#808080"})}},p=0,f={};return u=o.map((function(e){return f=0===p?{value:"World",label:"Global"}:{value:e,label:e},p+=1,f})),r.a.createElement("div",null,r.a.createElement(T.a,{styles:d,options:u,onChange:function(e){return t(e.value)},placeholder:"Select a country",defaultValue:u[0]}))},F=a(33),H=a.n(F),J=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(f.a)(t).call(this,e))).handleCountryChange=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,a.setState({data:n,choosenCountry:t}),console.log(t),console.log(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={data:{},choosenCountry:""},a}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("");case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.choosenCountry;return console.log(t),r.a.createElement("div",null,r.a.createElement("div",{className:H.a.container},r.a.createElement("div",{className:H.a.header},r.a.createElement("h3",null,"COVID-19 Application")),r.a.createElement(j,{data:t}),r.a.createElement(z,{handleCountryChange:this.handleCountryChange}),r.a.createElement(B,{data:t,country:a})),r.a.createElement("div",{className:H.a.designer},r.a.createElement("h6",null,r.a.createElement("a",{href:"https://github.com/riteshzd/Covid19-Application"},"designed by riteshzd"))))}}]),t}(r.a.Component);o.a.render(r.a.createElement(J,null),document.getElementById("root"))},33:function(e,t,a){e.exports={header:"App_header__1nAeE",container:"App_container__1F5PA",designer:"App_designer__apnp4"}},77:function(e,t,a){e.exports={container:"Charts_container__11bhD"}},83:function(e,t,a){e.exports=a(204)}},[[83,1,2]]]);
//# sourceMappingURL=main.3940e208.chunk.js.map