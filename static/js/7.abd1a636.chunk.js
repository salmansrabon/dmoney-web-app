(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[7],{36:function(e,t,a){"use strict";var s=a(4),c=a(7),n=a(92).a.create({baseURL:"https://dmoney.roadtocareer.net"});n.interceptors.request.use(function(){var e=Object(c.a)(Object(s.a)().mark((function e(t){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers["Content-Type"]="application/json",t.headers["X-Auth-Secret-Key"]="ROADTOSDET",e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.interceptors.response.use((function(e){return 401===e.status&&(window.location.href="/login"),e})),t.a=n},37:function(e,t,a){"use strict";var s=a(39),c=a(13),n=a(12),r=a(15),i=a(16),l=a(0),d=a.n(l),o=a(25),j=a(3),b=function(){var e=localStorage.getItem("role"),t=localStorage.getItem("email"),a=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:t})}),Object(j.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(j.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(j.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(j.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(j.jsxs)(o.b,{className:"dropdown-item",to:"/my-profile",children:[Object(j.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(j.jsx)("div",{className:"dropdown-divider"}),Object(j.jsxs)(o.b,{className:"dropdown-item",onClick:a,children:[Object(j.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},h=(a(42),a(43)),u=a.n(h),m=a(2),O=function(){var e=localStorage.getItem("role"),t=Object(m.m)();return"Admin"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/user-list",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/user-list",children:[Object(j.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/create-user",children:[Object(j.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/transaction",children:[Object(j.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/system-balance",children:[Object(j.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/deposit",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/send-money",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/user-limit",children:[Object(j.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(j.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(j.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("h5",{children:"Dmoney"})})}),Object(j.jsx)(u.a,{className:"sidebar-items",children:Object(j.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(j.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(j.jsx)("li",{className:"mb-1",children:Object(j.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(j.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void t("/login")},x=a(44);t.a=function(e){return function(t){Object(r.a)(l,t);var a=Object(i.a)(l);function l(e){var t;return Object(c.a)(this,l),(t=a.call(this,e)).handleParentData=function(e){console.log(e)},t.state={pageLoaded:!1,saveLeadClickEvent:""},t}return Object(n.a)(l,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(j.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(j.jsx)(b,{}),Object(j.jsx)("div",{className:"container-fluid content-container",children:Object(j.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(j.jsx)("div",{className:"loading-page",children:Object(j.jsx)("div",{className:"center",children:Object(j.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{style:{width:"100%"},children:Object(j.jsx)("button",{onClick:function(t){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(j.jsx)(j.Fragment,{children:this.renderHtml()})}}]),l}(d.a.Component)}},46:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var s=a(4),c=a(7),n=a(5),r=a(0),i=a(37),l=a(36),d=(a(46),a(40)),o=a.n(d),j=a(3);t.default=Object(i.a)((function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],i=t[1],d=Object(r.useState)(0),b=Object(n.a)(d,2),h=b[0],u=b[1],m=Object(r.useState)(1),O=Object(n.a)(m,2),x=O[0],p=O[1],f=Object(r.useState)(10),g=Object(n.a)(f,2),N=g[0],v=(g[1],Object(r.useState)(!1)),w=Object(n.a)(v,2),y=(w[0],w[1]),S=Object(r.useState)(""),k=Object(n.a)(S,2),C=(k[0],k[1]),D=h?h.toLocaleString("en-US"):"";function _(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}var A=function(e){p(e)},L=x*N,T=L-N,I=a.slice(T,L),M=Math.ceil(a.length/N),U=localStorage.getItem("user"),E=JSON.parse(U),P=null===E||void 0===E?void 0:E.phone_number;return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(Object(s.a)().mark((function e(){var t,a,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={Authorization:localStorage.getItem("token"),"X-Auth-Secret-Key":"ROADTOSDET"},a={headers:t},e.prev=2,e.next=5,l.a.get("/transaction/statement/".concat(P),a);case 5:return c=e.sent,i(c.data.transactions),y(!1),0===c.data.length&&C("No data found"),e.next=11,l.a.get("/transaction/balance/".concat(P),a).then((function(e){var t;u(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.balance)})).catch((function(e){}));case 11:e.next=19;break;case 13:if(e.prev=13,e.t0=e.catch(2),401!==e.t0.response.status){e.next=18;break}return window.location.href="/login",e.abrupt("return");case 18:o.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 19:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("h2",{style:{fontWeight:"bold"},children:["Balance: ",D||0,"\xa0TK"]})}),Object(j.jsx)("div",{className:"col text-right",children:Object(j.jsxs)("button",{type:"button",class:"btn btn-outline-secondary",children:[Object(j.jsx)("i",{class:"fa fa-file-excel-o","aria-hidden":"true"})," Export"]})})]}),Object(j.jsxs)("div",{className:"row mt-3",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"ID"}),Object(j.jsx)("th",{children:"Phone Number"}),Object(j.jsx)("th",{children:"Description"}),Object(j.jsx)("th",{children:"From Account"}),Object(j.jsx)("th",{children:"To Account"}),Object(j.jsx)("th",{children:"TRNXID"}),Object(j.jsx)("th",{children:"Debit"}),Object(j.jsx)("th",{children:"Credit"}),Object(j.jsx)("th",{children:"Created At"}),Object(j.jsx)("th",{children:"Updated At"})]})}),Object(j.jsx)("tbody",{children:I&&I.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:e.id}),Object(j.jsx)("td",{children:e.account}),Object(j.jsx)("td",{children:e.description}),Object(j.jsx)("td",{children:e.from_account}),Object(j.jsx)("td",{children:e.to_account}),Object(j.jsx)("td",{children:e.trnxId}),Object(j.jsxs)("td",{children:[e.debit.toLocaleString("en-US")," TK"]}),Object(j.jsxs)("td",{children:[e.credit.toLocaleString("en-US")," TK"]}),Object(j.jsx)("td",{children:_(e.createdAt)}),Object(j.jsx)("td",{children:_(e.updatedAt)})]},e.id)}))})]})}),Object(j.jsxs)("div",{className:"pagination",children:[Object(j.jsx)("button",{className:"pagination__button",onClick:function(){return A(x-1)},disabled:1===x,children:"Prev"}),x>3&&Object(j.jsx)("button",{className:"pagination__button",onClick:function(){return A(1)},children:"1"}),x>4&&Object(j.jsx)("span",{className:"pagination__ellipsis",children:"..."}),Array.from({length:M},(function(e,t){return t+1})).filter((function(e){return 1===e||e===M||Math.abs(e-x)<2||x<4&&e<6||x>M-4&&e>M-6})).map((function(e){return Object(j.jsx)("button",{className:"pagination__button ".concat(e===x?"pagination__button--active":""),onClick:function(){return A(e)},children:e},e)})),x<M-3&&Object(j.jsx)("span",{className:"pagination__ellipsis",children:"..."}),x<M-2&&Object(j.jsx)("button",{className:"pagination__button",onClick:function(){return A(M)},children:M}),Object(j.jsx)("button",{className:"pagination__button",onClick:function(){return A(x+1)},disabled:x===M,children:"Next"})]})]})]})})})}))}}]);
//# sourceMappingURL=7.abd1a636.chunk.js.map