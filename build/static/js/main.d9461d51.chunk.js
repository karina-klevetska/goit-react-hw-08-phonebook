(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{114:function(e,t,n){},115:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var r,c,a,u=n(0),s=n.n(u),i=n(37),o=n.n(i),l=n(34),j=n(9),b=n(23),d=n(4),f=n(60),p=n(21),O=n(12),h=Object(j.d)("",Object(d.a)({},f.a,(function(e,t){return t.payload}))),v=Object(j.d)([],(r={},Object(d.a)(r,p.c.fulfilled,(function(e,t){return t.payload})),Object(d.a)(r,p.a.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(d.a)(r,p.b.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),r)),x=Object(j.d)(!1,(c={},Object(d.a)(c,p.c.pending,(function(){return!0})),Object(d.a)(c,p.c.fulfilled,(function(){return!1})),Object(d.a)(c,p.c.rejected,(function(){return!1})),Object(d.a)(c,p.a.pending,(function(){return!0})),Object(d.a)(c,p.a.fulfilled,(function(){return!1})),Object(d.a)(c,p.a.rejected,(function(){return!1})),Object(d.a)(c,p.b.pending,(function(){return!0})),Object(d.a)(c,p.b.fulfilled,(function(){return!1})),Object(d.a)(c,p.b.rejected,(function(){return!1})),c)),g=Object(O.b)({contactFilter:h,contacts:v,isLoading:x}),m=n(26),k=Object(j.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:(a={},Object(d.a)(a,m.d.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(d.a)(a,m.b.fulfilled,(function(e,t){var n=t.payload;e.user=n.user,e.token=n.token,e.isLoggedIn=!0})),Object(d.a)(a,m.c.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(d.a)(a,m.a.pending,(function(e,t){e.isFetchingCurrentUser=!0})),Object(d.a)(a,m.a.fulfilled,(function(e,t){var n=t.payload;e.user=n,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(d.a)(a,m.a.rejected,(function(e,t){e.isFetchingCurrentUser=!1})),a)}).reducer,w=n(33),y=n(73),C={key:"auth",storage:n.n(y).a,whitelist:["token"]},N=Object(j.a)({reducer:{auth:Object(w.g)(C,k),contacts:g,filter:h},middleware:function(e){return e({serializableCheck:{ignoredActions:[w.a,w.f,w.b,w.c,w.d,w.e]}})}}),L=Object(w.h)(N),A=n(15),F=n(75),P=(n(114),n(3)),z=n(40),I=function(e){return e.auth.isLoggedIn},W=function(e){return e.auth.user.email},U=function(e){return e.auth.user.name},B=function(e){return e.auth.isFetchingCurrentUser},S=n(135),V=(n(115),n(1)),H=function(){var e=Object(A.c)(W),t=Object(A.c)(U),n=Object(A.b)();return Object(V.jsxs)("div",{className:"user-menu",children:[Object(V.jsx)("p",{children:Object(V.jsxs)("span",{children:["Welcome, ",t,"!"]})}),Object(V.jsx)("p",{children:Object(V.jsx)("span",{children:e})}),Object(V.jsx)(S.a,{type:"button",onClick:function(){return n(Object(m.c)())},variant:"text",color:"secondary",children:"Log Out"})]})},R=function(){return Object(V.jsxs)("ul",{className:"basic-nav-list",children:[Object(V.jsx)("li",{children:Object(V.jsx)(l.c,{to:"/login",className:function(e){return e.isActive?"active":"link"},children:"Login"})}),Object(V.jsx)("li",{children:Object(V.jsx)(l.c,{to:"/register",className:function(e){return e.isActive?"active":"link"},children:"Register"})})]})},E=(n(117),function(){var e=Object(A.c)(I);return Object(V.jsxs)("div",{className:"nav-wrapper",children:[Object(V.jsxs)("ul",{className:"basic-nav-list",children:[Object(V.jsx)("li",{children:Object(V.jsx)(l.c,{to:"/",className:function(e){return e.isActive?"active":"link"},children:"Home"})}),Object(V.jsx)("li",{children:Object(V.jsx)(l.c,{to:"/contacts",className:function(e){return e.isActive?"active":"link"},children:"Contacts"})})]}),e?Object(V.jsx)(H,{}):Object(V.jsx)(R,{})]})}),J=function(e){var t=e.component,n=Object(A.c)(I);return Object(V.jsx)(V.Fragment,{children:n?Object(V.jsx)(t,{}):Object(V.jsx)(P.a,{to:"/login"})})},M=function(e){var t=e.component,n=Object(A.c)(I);return Object(V.jsx)(V.Fragment,{children:n?Object(V.jsx)(P.a,{to:"/contacts"}):Object(V.jsx)(t,{})})},q=n(71),D=(n(119),Object(u.lazy)((function(){return n.e(7).then(n.bind(null,161))}))),G=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,167))})),K=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,168))})),Q=Object(u.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,166))}));var T=function(){var e=Object(A.c)(B),t=Object(A.b)();return Object(u.useEffect)((function(){t(Object(m.a)())}),[t]),!e&&Object(V.jsxs)("div",{className:"App",children:[Object(V.jsxs)("header",{children:[Object(V.jsx)("h1",{className:"logo",children:"Phonebook"}),Object(V.jsx)(E,{})]}),Object(V.jsx)(z.a,{}),Object(V.jsx)(u.Suspense,{fallback:Object(V.jsx)(q.a,{}),children:Object(V.jsxs)(P.d,{children:[Object(V.jsx)(P.b,{path:"/",element:Object(V.jsx)(D,{})}),Object(V.jsx)(P.b,{path:"/login",element:Object(V.jsx)(M,{component:G})}),Object(V.jsx)(P.b,{path:"/register",element:Object(V.jsx)(M,{component:K})}),Object(V.jsx)(P.b,{path:"/contacts",element:Object(V.jsx)(J,{component:Q})})]})})]})};o.a.render(Object(V.jsx)(s.a.StrictMode,{children:Object(V.jsx)(F.a,{persistor:L,children:Object(V.jsx)(A.a,{store:N,children:Object(V.jsx)(l.a,{children:Object(V.jsx)(T,{})})})})}),document.getElementById("root"))},21:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(8),c=n.n(r),a=n(22),u=n(9),s=n(24),i=n.n(s);i.a.defaults.baseURL="https://connections-api.herokuapp.com";var o=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/contacts");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/contacts",t);case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("/contacts/".concat(t));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=Object(u.c)("contacts/fetchContacts",Object(a.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),d=Object(u.c)("contacts/addContact",function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f=Object(u.c)("contacts/deleteContact",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,j(t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}())},26:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return O}));var r=n(8),c=n.n(r),a=n(22),u=n(24),s=n.n(u),i=n(9),o=n(40),l=(n(106),function(){return o.b.success("Success!",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}),j=function(e){s.a.defaults.headers.common.Authorization="Bearer ".concat(e)},b=function(){s.a.defaults.headers.common.Authorization=""},d=Object(i.c)("auth/register",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:return a=e.sent,u=a.data,j(u.token),l(),e.abrupt("return",u);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",r(o.b.error("A user with this name is already registered",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),f=Object(i.c)("auth/login",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:return a=e.sent,u=a.data,j(u.token),l(),e.abrupt("return",u);case 11:return e.prev=11,e.t0=e.catch(1),e.abrupt("return",r(o.b.error("Wrong email or password. Please try again",{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),e.t0.message));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(i.c)("auth/logout",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.rejectWithValue,e.prev=1,e.next=4,s.a.post("/users/logout");case 4:b(),e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",r(e.t0.message));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}()),O=Object(i.c)("auth/refresh",function(){var e=Object(a.a)(c.a.mark((function e(t,n){var r,a,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.getState(),null!==(a=r.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return j(a),e.prev=5,e.next=8,s.a.get("/users/current");case 8:return u=e.sent,i=u.data,e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(9),c=Object(r.b)("filter/value")},71:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(118);var r=n(1),c=function(){return Object(r.jsxs)("div",{className:"lds-default",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})}}},[[120,2,3]]]);
//# sourceMappingURL=main.d9461d51.chunk.js.map