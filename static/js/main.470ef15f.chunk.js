(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,n,t){e.exports=t(352)},172:function(e,n,t){},173:function(e,n,t){},352:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(26),r=t.n(o),l=(t(172),t(48)),i=t(74),u=t(89),s=t(75),m=t(90),d=t(18),b=t(144),g=function e(){var n=this;Object(l.a)(this,e),this.auth=new b.a.WebAuth({domain:"cfotest.auth0.com",clientID:"Ok9OydrLAiZM7r90JtJZ0aw2mKFpfb7W",audience:"https://".concat("cfotest.auth0.com","/userinfo"),redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid"}),this.login=function(){n.auth.authorize(),n.handleAuthentication()},this.isAuthenticated=function(){return!!localStorage.getItem("idToken")},this.logout=function(){localStorage.removeItem("accessToken"),localStorage.removeItem("idToken"),localStorage.removeItem("sub"),n.auth.logout()},this.checkSession=function(){n.auth.checkSession({},n.setSession)},this.setSession=function(e){localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("sub",e.idTokenPayload.sub),localStorage.setItem("idToken",e.idToken)},this.handleAuthentication=function(){n.auth.parseHash(function(e,t){e&&("login_required"===e.error&&n.login(),console.log(e)),t&&t.idToken&&t.accessToken&&n.setSession(t)})}},p=(t(173),t(154)),f=t.n(p),h=t(155),E=t.n(h),y=t(56),v=t.n(y),O=t(27),j=t.n(O),k=t(156),C=t.n(k),w=t(157),_=t.n(w),S=t(31),x=t(153),A=t.n(x),I=t(107),F=t.n(I),$=t(152),T=t.n($),N=t(147),D=t.n(N),B=t(148),L=t.n(B),R=t(151),W=t.n(R),q=t(150),K=t.n(q),P=t(149),H=t.n(P),G={en:{overview:"Overview",invoice:"Invoice",bills:"Bills",transactions:"Transactions",customers:"Customers",products:"Products",accounts:"Accounts",sales:"Sales",login:"Login",logout:"Logout",addcompany:"Add Company",cancel:"Cancel",add:"Add"},fo:{overview:"Yvirlit",invoice:"Faktura",bills:"Rokningar",transactions:"Flytingar",customers:"Kundar",products:"V\xf8rur",accounts:"Kontur",sales:"S\xf8lur",login:"Rita inn",logout:"Rita \xfat",addcompany:"Stovna Fyrit\xf8ku",cancel:"Strika",add:"Legg afturat"},de:{overview:"\xdcbersicht",invoice:"Rechnung",bills:"Rechnungen",transactions:"Transaktionen",customers:"Kunden",products:"Produkte",accounts:"Konten",sales:"Verkauf",login:"Anmeldung",logout:"Ausloggen",addcompany:"Firma Hinzuf\xfcgen",cancel:"Stornieren",add:"Hinzuf\xfcgen"}},J=t(47),M=Object(a.createContext)(),U=Object(S.withStyles)({list:{width:250},fullList:{width:"auto"}})(function(e){var n=Object(a.useContext)(M),t=Object(d.a)(n,2),o=t[0],r=(t[1],Object(a.useState)(!0)),l=Object(d.a)(r,2),i=l[0],u=l[1],s=function(e,n){return function(){u(n)}},m=function(){},b=e.classes,g=c.a.createElement("div",{className:b.list},c.a.createElement(F.a,null,[G.en.overview,G.en.invoice,G.en.bills,G.en.transactions,G.en.accounts,G.en.addcompany].map(function(e,n){return c.a.createElement(J.b,{key:n,to:"/".concat(e.split(" ").join(""))},c.a.createElement(D.a,{button:!0,key:n,onClick:m},c.a.createElement(L.a,null,n%2===0?c.a.createElement(H.a,null):c.a.createElement(K.a,null)),c.a.createElement(W.a,{primary:G[o.locals][e.toLowerCase().split(" ").join("")]})))})),c.a.createElement(T.a,null));return c.a.createElement("div",null,c.a.createElement(A.a,{open:i,onClose:s(0,!1)},c.a.createElement("div",{tabIndex:0,role:"button",onClick:s(0,!1),onKeyDown:s(0,!1)},g)))}),z=Object(S.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var n=new g,t=Object(a.useState)(!1),o=Object(d.a)(t,2),r=o[0],l=o[1],i=Object(a.useContext)(M),u=Object(d.a)(i,2),s=u[0],m=(u[1],e.classes);return c.a.createElement("div",{className:m.root},c.a.createElement(f.a,{position:"static"},c.a.createElement(E.a,null,c.a.createElement(C.a,{className:m.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){l(!r)}},c.a.createElement(_.a,null),r?c.a.createElement(U,null):""),c.a.createElement(v.a,{variant:"h6",color:"inherit",className:m.grow},"CFO"),localStorage.getItem("sub")?c.a.createElement(j.a,{onClick:function(){n.logout()},color:"inherit"},G[s.locals].logout):c.a.createElement(j.a,{onClick:function(){!1===n.isAuthenticated()?n.login():console.log("try again")},color:"inherit"},G[s.locals].login))))}),V=t(40),Z=t(360),Y=t(33),Q=t(34),X=t.n(Q);function ee(){var e=Object(Y.a)(["\n  {\n    day_book {\n      account_id\n      name\n      balance\n    }\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(Y.a)(["\n  mutation createAccount(\n    $name: String!\n    $balance: numeric!\n    $debit: Boolean!\n    $company_id: uuid!\n  ) {\n    insert_Account(\n      objects: {\n        name: $name\n        balance: $balance\n        debit: $debit\n        company_id: $company_id\n      }\n    ) {\n      affected_rows\n    }\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(Y.a)(["\n  mutation createCompany($name: String!, $mother_id: uuid, $user_id: uuid!) {\n    insert_Company(\n      objects: { name: $name, mother_id: $mother_id, user_id: $user_id }\n    ) {\n      affected_rows\n    }\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(Y.a)(["\n  query($token: String!) {\n    User(where: { token: { _like: $token } }) {\n      first_name\n      last_name\n      id\n    }\n  }\n"]);return ae=function(){return e},e}function ce(){var e=Object(Y.a)(["\n  subscription($company_id: uuid!) {\n    Account(where: { company_id: { _eq: $company_id } }) {\n      id\n      name\n      debit\n      balance\n      company_id\n      Company {\n        user_id\n        name\n      }\n    }\n  }\n"]);return ce=function(){return e},e}function oe(){var e=Object(Y.a)(["\n  {\n    Company {\n      user_id\n      name\n    }\n  }\n"]);return oe=function(){return e},e}function re(){var e=Object(Y.a)(["\n  subscription {\n    Company {\n      user_id\n      name\n    }\n  }\n"]);return re=function(){return e},e}function le(){var e=Object(Y.a)(["\n  query getCompanies {\n    Company {\n      id\n      mother_id\n      name\n      user_id\n    }\n  }\n"]);return le=function(){return e},e}var ie=X()(le()),ue=(X()(re()),X()(oe()),X()(ce())),se=X()(ae()),me=X()(te()),de=X()(ne()),be=(X()(ee()),t(79)),ge=t.n(be),pe=t(81),fe=t.n(pe),he=t(20),Ee=t.n(he),ye=t(80),ve=t.n(ye),Oe=t(51),je=t.n(Oe),ke=t(37),Ce=t.n(ke),we=function(){var e=Object(Z.a)(ie,{suspend:!1}).data,n=Object(a.useContext)(M),t=Object(d.a)(n,2),o=t[0],r=t[1];return c.a.createElement(a.Fragment,null,c.a.createElement("h1",null,"Hello mr.",o.user?o.user.first_name+" "+o.user.last_name:""),c.a.createElement("p",null,"Bergur & Kristmund"),c.a.createElement("p",null,"current company:",o.company?o.company.name:"Nan"),c.a.createElement("p",null,o.user?o.user.name:console.log('err"3efdfor')),c.a.createElement("button",{onClick:function(){r({type:"change_company",companies:e.Company})}},"load companies"),c.a.createElement("button",{onClick:function(){r({type:"set_company",index:0})}},"get company"),c.a.createElement("button",{onClick:function(){r({type:"set_locals",locals:"en"})}},"EN"),c.a.createElement("button",{onClick:function(){r({type:"set_locals",locals:"fo"})}},"FO"),c.a.createElement("button",{onClick:function(){r({type:"set_locals",locals:"de"})}},"DE"),c.a.createElement(Ce.a,null,c.a.createElement(ge.a,null,c.a.createElement(ve.a,null,c.a.createElement(je.a,null,c.a.createElement(Ee.a,null,"Id"),c.a.createElement(Ee.a,{align:"right"},"Mother Id"),c.a.createElement(Ee.a,{align:"right"},"User Id"),c.a.createElement(Ee.a,{align:"right"},"Name"))),c.a.createElement(fe.a,null,o.companies?o.companies.map(function(e,n){return c.a.createElement(je.a,{key:n},c.a.createElement(Ee.a,{component:"th",scope:"row"},e.id),c.a.createElement(Ee.a,{align:"right"},e.mother_id),c.a.createElement(Ee.a,{align:"right"},e.user_id),c.a.createElement(Ee.a,{align:"right"},e.name))}):console.log("error")))))},_e=function(e){function n(){return Object(l.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Hello from callback"))}}]),n}(c.a.Component),Se=t(358),xe=function(){var e=Object(a.useContext)(M),n=Object(d.a)(e,2),t=n[0],o=(n[1],Object(Se.a)(ue,{suspend:!1,variables:{company_id:t.company?t.company.id:null}})),r=o.data,l=o.error;return o.loading?(console.log("Loading accounts..."),c.a.createElement("tr",null,c.a.createElement("td",null,"-"))):l?(console.log("Error accounts: ",l),c.a.createElement("tr",null,c.a.createElement("td",null,"-"))):c.a.createElement(Ce.a,null,c.a.createElement(ge.a,null,c.a.createElement(ve.a,null,c.a.createElement(je.a,null,c.a.createElement(Ee.a,null,"Id"),c.a.createElement(Ee.a,{align:"right"},"Name"),c.a.createElement(Ee.a,{align:"right"},"Balance"),c.a.createElement(Ee.a,{align:"right"},"Debit / Credit"),c.a.createElement(Ee.a,{align:"right"},"Company name"))),c.a.createElement(fe.a,null,r.Account.map(function(e,n){return c.a.createElement(je.a,{key:n},c.a.createElement(Ee.a,{component:"th",scope:"row"},e.id),c.a.createElement(Ee.a,{align:"right"},e.name),c.a.createElement(Ee.a,{align:"right"},e.balance),c.a.createElement(Ee.a,{align:"right"},e.debit?"debit":"credit"),c.a.createElement(Ee.a,{align:"right"},e.Company.name))}))))},Ae=t(82),Ie=t.n(Ae),Fe=t(83),$e=t.n(Fe),Te=t(84),Ne=t.n(Te),De=t(88),Be=t.n(De),Le=t(86),Re=t.n(Le),We=t(87),qe=t.n(We),Ke=t(85),Pe=t.n(Ke),He=t(41),Ge=t.n(He),Je=t(359),Me=Object(S.withStyles)(function(e){return{fab:{margin:e.spacing.unit,flexGrow:1},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var n=Object(a.useState)(!1),t=Object(d.a)(n,2),o=t[0],r=t[1],l=Object(a.useState)(""),i=Object(d.a)(l,2),u=i[0],s=i[1],m=Object(a.useState)(!0),b=Object(d.a)(m,2),g=b[0],p=b[1],f=Object(a.useState)(0),h=Object(d.a)(f,2),E=h[0],y=h[1],v=e.classes,O=Object(Je.a)(de),k=Object(a.useContext)(M),C=Object(d.a)(k,2),w=C[0],_=(C[1],function(){s(""),y(0),p(!0),null!==w.company&&r(!o)});return c.a.createElement(a.Fragment,null,c.a.createElement(Ie.a,{onClick:_,color:"primary","aria-label":"Add",className:v.fab},c.a.createElement($e.a,null)),c.a.createElement(Ne.a,{open:o,onClose:_,"aria-labelledby":"form-dialog-title"},c.a.createElement(Pe.a,{id:"form-dialog-title"},"Add Account"),c.a.createElement(Re.a,null,c.a.createElement(qe.a,null,"Fill this form to add an account"),c.a.createElement(Ge.a,{autoFocus:!0,margin:"dense",id:"name",label:"Account name",type:"text",fullWidth:!0,onChange:function(e){s(e.target.value)}}),c.a.createElement(Ge.a,{autoFocus:!0,margin:"dense",id:"balance",label:"Balance",value:E,type:"number",fullWidth:!0,onChange:function(e){y(e.target.value)}}),c.a.createElement(Ge.a,{autoFocus:!0,select:!0,margin:"dense",id:"debit",label:"Debit / Credit",fullWidth:!0,value:g,onChange:function(e){p(e.target.value)}},c.a.createElement("option",{key:1,value:!0},"Debit"),c.a.createElement("option",{key:2,value:!1},"Credit"))),c.a.createElement(Be.a,null,c.a.createElement(j.a,{onClick:_,color:"primary"},G[w.locals].cancel),c.a.createElement(j.a,{onClick:function(e){e.preventDefault(),""!==u&&O({variables:{name:u,balance:E,debit:g,company_id:w.company.id}}),_()},color:"primary"},G[w.locals].add))))}),Ue=function(){return c.a.createElement(a.Fragment,null,c.a.createElement(Me,null),c.a.createElement(xe,null))},ze=Object(S.withStyles)(function(e){return{fab:{margin:e.spacing.unit,flexGrow:1},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var n=Object(a.useState)(""),t=Object(d.a)(n,2),o=t[0],r=t[1],l=Object(a.useState)(null),i=Object(d.a)(l,2),u=i[0],s=i[1],m=e.classes,b=Object(Je.a)(me),g=Object(a.useContext)(M),p=Object(d.a)(g,1)[0],f=Object(a.useState)(!1),h=Object(d.a)(f,2),E=h[0],y=h[1],v=function(){r(""),s(null),null!==p.user&&y(!E)};return c.a.createElement(a.Fragment,null,c.a.createElement(Ie.a,{onClick:v,color:"primary","aria-label":"Add",className:m.fab},c.a.createElement($e.a,null)),c.a.createElement(Ne.a,{open:E,onClose:v,"aria-labelledby":"form-dialog-title"},c.a.createElement(Pe.a,{id:"form-dialog-title"},"Add Company"),c.a.createElement(Re.a,null,c.a.createElement(qe.a,null,"Fill this form to add a company"),c.a.createElement(Ge.a,{autoFocus:!0,margin:"dense",id:"name",label:"Company name",type:"text",fullWidth:!0,onChange:function(e){r(e.target.value)}}),c.a.createElement(Ge.a,{autoFocus:!0,margin:"dense",id:"mother_id",label:"Mother ID",type:"text",fullWidth:!0,onChange:function(e){s(e.target.value)}})),c.a.createElement(Be.a,null,c.a.createElement(j.a,{onClick:v,color:"primary"},"Cancel"),c.a.createElement(j.a,{onClick:function(e){e.preventDefault(),""!==o&&b({variables:{name:o,mother_id:u,user_id:p.user.id}}),v()},color:"primary"},"Add"))))}),Ve=function(){return c.a.createElement(V.c,null,c.a.createElement(V.a,{path:"/Overview",component:we}),c.a.createElement(V.a,{path:"/callback",component:_e}),c.a.createElement(V.a,{path:"/Accounts",component:Ue}),c.a.createElement(V.a,{path:"/AddCompany",component:ze}))},Ze=function(){return c.a.createElement(a.Fragment,null,c.a.createElement(z,null),c.a.createElement(Ve,null))},Ye=t(49),Qe=t(162),Xe=t(2),en=t(164),nn=t(21),tn=t(165),an=t(58),cn=t(163),on=t(161),rn=t.n(on),ln=new en.a({uri:"https://cfo-foeroyar.herokuapp.com/v1alpha1/graphql",headers:{"x-hasura-admin-secret":"skopun","x-hasura-role":"user","x-hasura-user-id":localStorage.getItem("sub")},fetch:fetch}),un="undefined"===typeof window?rn.a:null,sn=new an.SubscriptionClient("wss://cfo-foeroyar.herokuapp.com/v1alpha1/graphql",{reconnect:!0,connectionParams:function(){return{headers:{"x-hasura-admin-secret":"skopun","x-hasura-role":"user","x-hasura-user-id":localStorage.getItem("sub")}}},wsForNode:un}),mn=new Qe.a(sn),dn=new nn.d(function(e){var n=e.query,t=Object(Xe.k)(n),a=t.kind,c=t.operation;return"OperationDefinition"===a&&"subscription"===c},mn,ln),bn=new tn.a({link:dn,cache:new cn.a}),gn=function(){var e=Object(Z.a)(se,{variables:{token:localStorage.getItem("sub")}}),n=e.data,t=(e.loading,e.error,Object(a.useContext)(M)),c=Object(d.a)(t,2),o=(c[0],c[1]);return Object(a.useEffect)(function(){o({type:"load_user",user:n.User})}),null},pn=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(u.a)(this,Object(s.a)(n).call(this,e))).handleAuth=function(){!1===t.auth.isAuthenticated()?t.auth.login():console.log("try again")},t.handleLogout=function(){t.auth.logout()},t.auth=new g,t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(a.Fragment,null,c.a.createElement(Ye.a,{client:bn},c.a.createElement(gn,null),c.a.createElement(Ze,null)))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fn=t(60),hn={currentIndex:0,locals:"fo",companies:null,company:null,user:null},En=function(e,n){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1?arguments[1]:void 0;return n.hasOwnProperty(a.type)?n[a.type](t,a):t}}(hn,{reset:function(){return hn},change_company:function(e,n){return Object(fn.a)({},e,{companies:n.companies})},set_company:function(e,n){return Object(fn.a)({},e,{company:e.companies[n.index]})},set_locals:function(e,n){return Object(fn.a)({},e,{locals:n.locals})},load_user:function(e,n){return Object(fn.a)({},e,{user:n.user?n.user[0]:null})}}),yn=function(e){var n=Object(a.useReducer)(En,hn),t=Object(d.a)(n,2),o=t[0],r=t[1];return c.a.createElement(M.Provider,{value:[o,r]},e.children)};r.a.render(c.a.createElement(yn,null,c.a.createElement(J.a,null,c.a.createElement(pn,null)," ")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.470ef15f.chunk.js.map