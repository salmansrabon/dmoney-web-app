(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[15],{36:function(e,a,t){"use strict";var s=t(4),c=t(7),n=t(92).a.create({baseURL:"https://dmoney.roadtocareer.net"});n.interceptors.request.use(function(){var e=Object(c.a)(Object(s.a)().mark((function e(a){return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.headers["Content-Type"]="application/json",a.headers["X-Auth-Secret-Key"]="ROADTOSDET",e.abrupt("return",a);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),n.interceptors.response.use((function(e){return 401===e.status&&(window.location.href="/login"),e})),a.a=n},37:function(e,a,t){"use strict";var s=t(39),c=t(13),n=t(12),r=t(15),i=t(16),l=t(0),d=t.n(l),o=t(25),b=t(3),j=function(){var e=localStorage.getItem("role"),a=localStorage.getItem("email"),t=function(){localStorage.clear(),window.location.href="/login"};return"Admin"===e||"Agent"===e||"Customer"===e||"Merchant"===e?Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(b.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{"data-bs-toggle":"modal","data-bs-target":"#add-lead-modal",className:"nav-link highlighted-text",href:"#!",children:a})}),Object(b.jsxs)("li",{className:"nav-item dropdown notifications",children:[Object(b.jsx)("a",{className:"nav-link",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:Object(b.jsx)("i",{className:"fa fa-user-circle","aria-hidden":"true"})}),Object(b.jsxs)("div",{className:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdown",children:[Object(b.jsxs)(o.b,{className:"dropdown-item",to:"/my-profile",children:[Object(b.jsx)("i",{class:"fa fa-user","aria-hidden":"true"})," Profile"]}),Object(b.jsx)("div",{className:"dropdown-divider"}),Object(b.jsxs)(o.b,{className:"dropdown-item",onClick:t,children:[Object(b.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})," Sign out"]})]})]})]})})]})}):void 0},h=(t(42),t(43)),m=t.n(h),u=t(2),O=function(){var e=localStorage.getItem("role"),a=Object(u.m)();return"Admin"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/user-list",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(m.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/user-list",children:[Object(b.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," User List"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/create-user",children:[Object(b.jsx)("i",{class:"fa fa-user-plus","aria-hidden":"true"})," Create User"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/transaction",children:[Object(b.jsx)("i",{class:"fa fa-exchange","aria-hidden":"true"})," Transaction"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/system-balance",children:[Object(b.jsx)("i",{class:"fa fa-money","aria-hidden":"true"})," System Balance"]})})]})})]}):"Agent"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(m.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/deposit",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Deposit"]})})]})})]}):"Customer"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(m.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/send-money",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Send Money"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/payment",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Payment"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/user-limit",children:[Object(b.jsx)("i",{class:"fa fa-ban","aria-hidden":"true"})," Limit"]})})]})})]}):"Merchant"===e?Object(b.jsxs)("div",{className:"border-end sidenav",id:"sidebar-wrapper",children:[Object(b.jsx)("div",{className:"sidebar-heading border-bottom ",children:Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("h5",{children:"Dmoney"})})}),Object(b.jsx)(m.a,{className:"sidebar-items",children:Object(b.jsxs)("ul",{className:"list-unstyled ps-0",children:[Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/statement",children:[Object(b.jsx)("i",{class:"fa fa-file-text-o","aria-hidden":"true"})," Statement"]})}),Object(b.jsx)("li",{className:"mb-1",children:Object(b.jsxs)(o.b,{tag:"a",className:"",to:"/withdraw",children:[Object(b.jsx)("i",{class:"fa fa-paper-plane","aria-hidden":"true"})," Withdraw"]})})]})})]}):void a("/login")},x=t(44);a.a=function(e){return function(a){Object(r.a)(l,a);var t=Object(i.a)(l);function l(e){var a;return Object(c.a)(this,l),(a=t.call(this,e)).handleParentData=function(e){console.log(e)},a.state={pageLoaded:!1,saveLeadClickEvent:""},a}return Object(n.a)(l,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState((function(){return{pageLoaded:!0}}))}),1e3)}},{key:"renderHtml",value:function(){return this.state.pageLoaded?Object(b.jsxs)("div",{className:"d-flex",id:"wrapper",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"main",id:"page-content-wrapper",children:[Object(b.jsx)(j,{}),Object(b.jsx)("div",{className:"container-fluid content-container",children:Object(b.jsx)(e,Object(s.a)({},this.props))})]})]}):Object(b.jsx)("div",{className:"loading-page",children:Object(b.jsx)("div",{className:"center",children:Object(b.jsx)(x.Preloader,{use:x.Bars,size:60,strokeWidth:10,strokeColor:"#f7b085",duration:600})})})}},{key:"addLeadModalFooterContent",value:function(){var e=this;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{style:{width:"100%"},children:Object(b.jsx)("button",{onClick:function(a){return e.setState((function(){return{saveLeadClickEvent:(Math.random()+1).toString(36).substring(7)}}))},className:"btn btn-default low-height-btn",children:"Add Lead"})})})}},{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:this.renderHtml()})}}]),l}(d.a.Component)}},89:function(e,a,t){"use strict";t.r(a);var s=t(4),c=t(7),n=t(5),r=t(0),i=t(37),l=t(36),d=t(40),o=t.n(d),b=t(3);a.default=Object(i.a)((function(){var e=Object(r.useState)(null),a=Object(n.a)(e,2),t=a[0],i=a[1],d=t?t.toLocaleString("en-US"):"";return Object(r.useEffect)((function(){function e(){return(e=Object(c.a)(Object(s.a)().mark((function e(){var a,t,c;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={Authorization:localStorage.getItem("token"),"X-Auth-Secret-Key":"ROADTOSDET"},t={headers:a},e.prev=2,e.next=5,l.a.get("/transaction/balance/SYSTEM",t);case 5:c=e.sent,i(c.data.balance),e.next=15;break;case 9:if(e.prev=9,e.t0=e.catch(2),401!==e.t0.response.status){e.next=14;break}return window.location.href="/login",e.abrupt("return");case 14:o.a.fire("Error",e.t0.response.data.message||"Something went wrong","error");case 15:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[localStorage.getItem("token")]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("h3",{children:["This is Our System Balance: ",d," TK"]})})})})}))}}]);
//# sourceMappingURL=15.1dd44051.chunk.js.map