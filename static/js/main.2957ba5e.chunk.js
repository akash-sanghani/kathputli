(this["webpackJsonpimage-classification"]=this["webpackJsonpimage-classification"]||[]).push([[0],{67:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(19),i=n.n(a),r=n(10),o=n(11),u=n(14),l=n(13),d=n(68),j=n(36),g=n(9),p=n.n(g),b=n(16),h=n.n(b),m=n(6),O=Object(m.a)(),f=n(8),x=n(1),I=[],y=[],v=[],N=[],k={},S={},T=Object(f.b)((function(e){return{userId:e.auth.userId}}))((function(e){var t=Object(c.useState)(0),n=Object(j.a)(t,2),a=n[0],i=n[1],r=s.a.useRef(null),o=s.a.useRef(null),u=s.a.useRef(null),l=s.a.useRef(null),d=s.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=r.current.getScreenshot().split(",").pop();I.push(t),document.getElementById("upcount").innerHTML="Captured Images for UP: "+I.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[r]),g=s.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=o.current.getScreenshot().split(",").pop();y.push(t),document.getElementById("downcount").innerHTML="Captured Images for DOWN: "+y.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[o]),b=s.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=u.current.getScreenshot().split(",").pop();v.push(t),document.getElementById("leftcount").innerHTML="Captured Images for LEFT:"+v.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[u]),m=s.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=l.current.getScreenshot().split(",").pop();N.push(t),document.getElementById("rightcount").innerHTML="Captured Images for RIGHT: "+N.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[l]),f=function(e,t){var n=JSON.stringify(Object.assign({},t)),c=JSON.parse(n);k[e]=c};return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("div",{className:"ui segment ",style:{textAlign:"center",fontSize:"20px"},children:"Data Collection"}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col"}),Object(x.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(x.jsx)(p.a,{onClick:d,audio:!1,ref:r,screenshotFormat:"image/jpg",width:320}),Object(x.jsx)("p",{id:"upcount",style:{textAlign:"center"},children:"Captured Images for UP: 0"})]}),Object(x.jsx)("div",{className:"col"})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(x.jsx)(p.a,{onClick:b,audio:!1,ref:u,screenshotFormat:"image/jpg",width:320}),Object(x.jsx)("p",{id:"leftcount",style:{textAlign:"center"},children:"Captured Images for LEFT: 0"})]}),Object(x.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(x.jsx)("button",{onClick:function(){document.getElementById("status").innerHTML="Training...",document.getElementById("status").style.fontSize="25px";var t=I.length,n=v.length,c=N.length,s=y.length;f("up",I),f("down",y),f("right",v),f("left",N),S.finalJson=k,S.userId=e.userId,console.log(S),t>=10&&n>=10&&s>=10&&c>=10?h.a.post("https://15.207.67.182/upload",S).then((function(t){return h.a.post("https://15.207.67.182/train_data",{idd:e.userId}).then((function(e){return i(1)}))})).catch((function(e){e.response||(document.getElementById("status").innerHTML="NETWORK ERROR",document.getElementById("status").style.fontSize="25px")})):(document.getElementById("status").innerHTML="Enter missing DATA",document.getElementById("status").style.fontSize="25px")},className:"ui button",style:{marginTop:"25%"},children:"Train"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("p",{id:"status",style:{margin:"0 auto",textAlign:"center"}}),0==a?void 0:(document.getElementById("status").innerHTML="Trained",document.getElementById("status").style.fontSize="25px",Object(x.jsx)("button",{className:"ui button",style:{marginTop:"3%"},onClick:function(){return O.push("/playground")},children:"Next"}))]})]}),Object(x.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(x.jsx)(p.a,{onClick:m,audio:!1,ref:l,screenshotFormat:"image/jpg",width:320}),Object(x.jsx)("p",{id:"rightcount",style:{textAlign:"center"},children:"Captured Images for RIGHT: 0"})]})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col"}),Object(x.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(x.jsx)(p.a,{onClick:g,audio:!1,ref:o,screenshotFormat:"image/jpg",width:320}),Object(x.jsx)("p",{id:"downcount",style:{textAlign:"center"},children:"Captured Images for DOWN: 0"})]}),Object(x.jsx)("div",{className:"col"})]}),Object(x.jsx)("div",{})]})})),w=1,C=Object(f.b)((function(e){return{userId:e.auth.userId}}))((function(e){var t=s.a.useRef(null),n=s.a.useCallback((function(){console.log("func called ");var c=t.current.getScreenshot().split(",").pop();h.a.post("https://15.207.67.182/predict",{imageSrc:c,idd:e.userId}).then((function(e){return t=e.data.Predicted,console.log("setStatus"),console.log(t),void(w&&(document.getElementById("status").innerHTML=0==t?"DOWN":1==t?"RIGHT":2==t?"LEFT":"UP",setTimeout(n,500)));var t}))}),[t]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:Object(x.jsx)("p",{id:"status"})}),Object(x.jsx)(p.a,{audio:!1,height:640,ref:t,screenshotFormat:"image/jpg",width:320}),Object(x.jsx)("button",{onClick:function(){w=1,n()},children:"Start"}),Object(x.jsx)("button",{onClick:function(){return w=0},children:"Stop"})]})})),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).login=function(){window.FB.login((function(t){e.props.signIn(t.authResponse.userID),O.push("/data-collection")}))},e.logout=function(){window.FB.logout((function(){e.props.signOut(),O.push("/")}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.fbAsyncInit=function(){window.FB.init({appId:"2260742510736157",version:"v2.7"}),window.FB.getLoginStatus((function(t){"connected"==t.status?(e.props.signIn(t.authResponse.userID),O.push("/data-collection")):e.props.signOut()}))}}},{key:"renderAuthButton",value:function(){return"connected"===this.props.isSignedIn?Object(x.jsxs)("button",{onClick:this.logout,className:"ui blue facebook button",children:[Object(x.jsx)("i",{className:"facebook icon"}),"Sign Out"]}):Object(x.jsxs)("button",{onClick:this.login,className:"ui blue facebook button",children:[Object(x.jsx)("i",{className:"facebook icon"}),"Sign In"]})}},{key:"render",value:function(){return Object(x.jsx)("div",{children:this.renderAuthButton()})}}]),n}(s.a.Component),E=Object(f.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(B),L=function(){return Object(x.jsx)("div",{className:"ui segment ",children:Object(x.jsx)(E,{})})},A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:"Landing page"})}}]),n}(s.a.Component),H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsxs)(d.b,{history:O,children:[Object(x.jsx)(L,{}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{path:"/",exact:!0,component:A}),Object(x.jsx)(d.a,{path:"/data-collection",component:T}),Object(x.jsx)(d.a,{path:"/playground",component:C})]})]})})}}]),n}(c.Component),M=(n(66),n(12)),R=n(18),F={isSignedIn:"unknown",userId:""},G=Object(M.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(R.a)(Object(R.a)({},e),{},{isSignedIn:"connected",userId:t.payload});case"SIGN_OUT":return Object(R.a)(Object(R.a)({},e),{},{isSignedIn:"unknown",userId:"null"});default:return e}}}),D=Object(M.c)(G);i.a.render(Object(x.jsx)(f.a,{store:D,children:Object(x.jsx)(H,{})}),document.querySelector("#root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.2957ba5e.chunk.js.map