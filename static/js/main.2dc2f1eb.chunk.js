(this.webpackJsonpmonsterfriends=this.webpackJsonpmonsterfriends||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(12),n(1)),s=(n(13),function(e){var t=e.name,n=e.nickname,a=e.email,c=e.id;return r.a.createElement("div",{className:"tc bg-red dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"mosters",src:"https://robohash.org/set_set2/".concat(c,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("h3",null,n),r.a.createElement("p",null,a)))}),i=function(e){var t=e.monsters;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(s,{key:n,id:t[n].id,name:t[n].name,nickname:t[n].username,email:t[n].email})})))},u=function(e){var t=e.searchChange;return r.a.createElement("input",{className:"pa3 ba b--red",type:"search",placeholder:"search by name",onChange:t})},m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},h=n(4),d=n(5),f=n(7),E=n(6),b=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Error loading page, please contact web admin"):this.props.children}}]),n}(a.Component);var p=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),s=Object(l.a)(o,2),h=s[0],d=s[1];Object(a.useEffect)((function(){fetch("https://my-json-server.typicode.com/brogkul/testDB/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var f=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f-5 ma2"},"Monster Friends"),r.a.createElement(u,{searchChange:function(e){d(e.target.value)}}),r.a.createElement(m,null,r.a.createElement(b,null,r.a.createElement(i,{monsters:f})))):r.a.createElement("h1",null,"Loading")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(14);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.2dc2f1eb.chunk.js.map