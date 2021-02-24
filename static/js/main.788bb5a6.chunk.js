(this["webpackJsonpimage-classification"]=this["webpackJsonpimage-classification"]||[]).push([[0],{67:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(21),i=n.n(c),r=n(6),o=n(7),u=n(9),l=n(8),d=n(72),j=n(20),h=n(15),m=n.n(h),b=n(18),p=n.n(b),O=n(12),g=Object(O.a)(),f=n(5),v=n(0),x=[],y=[],k=[],I=[],N={},S={},E=Object(f.b)((function(e){return{userId:e.auth.userId}}))((function(e){var t=Object(s.useState)(0),n=Object(j.a)(t,2),c=n[0],i=n[1],r=a.a.useRef(null),o=a.a.useRef(null),u=a.a.useRef(null),l=a.a.useRef(null),d=a.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=r.current.getScreenshot().split(",").pop();x.push(t),document.getElementById("upcount").innerHTML="Captured Images for UP: "+x.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[r]),h=a.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=o.current.getScreenshot().split(",").pop();y.push(t),document.getElementById("downcount").innerHTML="Captured Images for DOWN: "+y.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[o]),b=a.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=u.current.getScreenshot().split(",").pop();k.push(t),document.getElementById("leftcount").innerHTML="Captured Images for LEFT:"+k.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[u]),O=a.a.useCallback((function(){for(var e=0;e<10;e++)try{var t=l.current.getScreenshot().split(",").pop();I.push(t),document.getElementById("rightcount").innerHTML="Captured Images for RIGHT: "+I.length}catch(n){document.getElementById("status").innerHTML="Grant camera permissions";break}}),[l]),f=function(e,t){var n=JSON.stringify(Object.assign({},t)),s=JSON.parse(n);N[e]=s};return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col"}),Object(v.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(v.jsx)(m.a,{onClick:d,audio:!1,ref:r,screenshotFormat:"image/jpg",width:320}),Object(v.jsx)("p",{id:"upcount",style:{textAlign:"center"},children:"Captured Images for UP: 0"})]}),Object(v.jsx)("div",{className:"col"})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(v.jsx)(m.a,{onClick:b,audio:!1,ref:u,screenshotFormat:"image/jpg",width:320}),Object(v.jsx)("p",{id:"leftcount",style:{textAlign:"center"},children:"Captured Images for LEFT: 0"})]}),Object(v.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(v.jsx)("button",{onClick:function(){document.getElementById("status").innerHTML="Training...",document.getElementById("status").style.fontSize="25px";var t=x.length,n=k.length,s=I.length,a=y.length;f("up",x),f("down",y),f("right",k),f("left",I),S.finalJson=N,S.userId=e.userId,t>=10&&n>=10&&a>=10&&s>=10?p.a.post("https://15.207.67.182:5000/upload",S).then((function(t){return p.a.post("https://15.207.67.182:5000/train_data",{idd:e.userId}).then((function(e){return i(1)}))})).catch((function(e){e.response||(document.getElementById("status").innerHTML="NETWORK ERROR",document.getElementById("status").style.fontSize="25px")})):(document.getElementById("status").innerHTML="Enter missing DATA",document.getElementById("status").style.fontSize="25px")},className:"ui button",style:{marginTop:"25%"},children:"Train"}),Object(v.jsxs)("div",{children:[Object(v.jsx)("p",{id:"status",style:{margin:"0 auto",textAlign:"center"}}),0==c?void 0:(document.getElementById("status").innerHTML="Trained",document.getElementById("status").style.fontSize="25px",Object(v.jsx)("button",{className:"ui button",style:{marginTop:"3%"},onClick:function(){x=[],y=[],k=[],I=[],N={},S={},g.push({pathname:"/games-ic/playground",trainingStatus:1})},children:"Next"}))]})]}),Object(v.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(v.jsx)(m.a,{onClick:O,audio:!1,ref:l,screenshotFormat:"image/jpg",width:320}),Object(v.jsx)("p",{id:"rightcount",style:{textAlign:"center"},children:"Captured Images for RIGHT: 0"})]})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col"}),Object(v.jsxs)("div",{className:"col",style:{margin:"0 auto",textAlign:"center"},children:[Object(v.jsx)(m.a,{onClick:h,audio:!1,ref:o,screenshotFormat:"image/jpg",width:320}),Object(v.jsx)("p",{id:"downcount",style:{textAlign:"center"},children:"Captured Images for DOWN: 0"})]}),Object(v.jsx)("div",{className:"col"})]}),Object(v.jsx)("div",{})]})})),w=n(24),T=function(e){return Object(v.jsx)("div",{children:e.snakeDots.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return Object(v.jsx)("div",{className:"snake-dot",style:n},t)}))})},C=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%"),backgroundColor:"RED"};return Object(v.jsx)("div",{className:"snake-food",style:t})},B=(n(67),function(e){return Object(v.jsx)("div",{children:e.obs.map((function(e,t){var n={left:"".concat(e[0],"%"),top:"".concat(e[1],"%"),backgroundColor:"black"};return Object(v.jsx)("div",{className:"snake-dot",style:n},t)}))})}),D=0,H=0,R=0,L=0,M=function(){H=window.innerWidth,R=window.innerHeight,console.log(H,R);return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},G={food:M(),speed:100,direction:"RIGHT",snakeDots:[[0,50],[2,50],[4,50]],renderButtonBol:0},A=[[20,20],[20,22],[20,24],[20,26],[20,28],[20,30],[20,32],[20,34],[50,22],[50,24],[50,26],[50,28],[50,30],[50,32],[50,34]],F=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state=G,e.startgame=function(){e.setState({renderButtonBol:1}),clearInterval(D),e.props.start(),D=setInterval(e.moveSnake,e.state.speed)},e.stopgame=function(){e.setState({renderButtonBol:0}),e.props.stop(),clearInterval(D)},e.moveSnake=function(){var t=Object(w.a)(e.state.snakeDots),n=t[t.length-1];switch(e.props.dir_val){case"RIGHT":if("LEFT"===e.state.direction){n=[n[0]-2,n[1]];break}e.setState({direction:e.props.dir_val}),n=[n[0]+2,n[1]];break;case"LEFT":if("RIGHT"===e.state.direction){n=[n[0]+2,n[1]];break}e.setState({direction:e.props.dir_val}),n=[n[0]-2,n[1]];break;case"DOWN":if("UP"===e.state.direction){n=[n[0],n[1]-2];break}e.setState({direction:e.props.dir_val}),n=[n[0],n[1]+2];break;case"UP":if("DOWN"===e.state.direction){n=[n[0],n[1]+2];break}e.setState({direction:e.props.dir_val}),n=[n[0],n[1]-2]}t.push(n),t.shift(),e.setState({snakeDots:t})},e.renderButton=function(){return 0==e.state.renderButtonBol?Object(v.jsx)("button",{className:"ui button",id:"startgame",onClick:e.startgame,children:"Start"}):Object(v.jsx)("button",{className:"ui button",id:"stopgame",onClick:e.stopgame,children:"Pause"})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.stop()}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(w.a)(this.state.snakeDots),n=t[t.length-1];A.forEach((function(t){n[0]==t[0]&&n[1]==t[1]&&e.onGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]==t[0]&&e[1]==t[1]&&(this.setState({food:M()}),this.enlargeSnake(),this.increaseSpeed(),L+=1)}},{key:"enlargeSnake",value:function(){var e=Object(w.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakeDots.length)),this.setState(G),this.props.stop(),clearInterval(D)}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{style:{textAlign:"center"},children:Object(v.jsx)("h3",{children:Object(v.jsxs)("div",{children:["Current Score:",L]})})}),Object(v.jsxs)("div",{id:"myDiv",className:"game-area",style:{height:.8*R,width:.5*H},children:[Object(v.jsx)(T,{snakeDots:this.state.snakeDots}),Object(v.jsx)(B,{obs:A}),Object(v.jsx)(C,{dot:this.state.food})]}),Object(v.jsx)("div",{children:this.renderButton()})]})}}]),n}(s.Component),_=Object(f.b)((function(e){return{dir_val:e.auth.dir}}))(F),U=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.stop()}},{key:"render",value:function(){return Object(v.jsx)("div",{children:"IN DEVELOPMENT"})}}]),n}(s.Component),P=Object(f.b)((function(e){return{value:e.auth.dir}}))(U),W=28,z=0,J=0,V=Object(f.b)((function(e){return{userId:e.auth.userId}}),{movement:function(e){return{type:e}}})((function(e){var t=Object(s.useState)(!1),n=Object(j.a)(t,2),c=n[0],i=n[1],r=Object(s.useState)(!1),o=Object(j.a)(r,2),u=o[0],l=o[1];Object(s.useEffect)((function(){z=document.getElementById("headerdiv").clientHeight,W=document.getElementById("twc").clientWidth}));var d=a.a.useRef(null),h=a.a.useCallback((function(){try{var t=d.current.getScreenshot().split(",").pop();p.a.post("https://15.207.67.182:5000/predict",{imageSrc:t,idd:e.userId}).then((function(t){return n=t.data.Predicted,void(J&&(0==n?e.movement("DOWN"):1==n?e.movement("RIGHT"):2==n?e.movement("LEFT"):e.movement("UP"),setTimeout(h,0)));var n}))}catch(n){}}),[d]),b=function(){J=0};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:Object(v.jsx)("p",{id:"status"})}),Object(v.jsxs)("div",{className:"ui grid",style:{height:window.innerHeight-z-60},children:[Object(v.jsxs)("div",{id:"twc",className:" three wide column",style:{height:"100%"},children:[Object(v.jsx)("div",{children:"GAME LIST"}),Object(v.jsxs)("div",{className:"ui vertical menu",style:{overflowY:"auto",height:"70%",width:"100%"},children:[Object(v.jsx)("a",{className:"item",id:"showhere",onClick:function(){l(!1),i(!0)},children:Object(v.jsx)("h3",{children:"Snake"})}),Object(v.jsx)("a",{className:"item",id:"showhere",onClick:function(){i(!1),l(!0)},children:Object(v.jsx)("h3",{children:"Pac Man"})})]}),Object(v.jsx)("div",{children:Object(v.jsx)(m.a,{audio:!1,ref:d,screenshotFormat:"image/jpg",width:W-28})})]}),Object(v.jsxs)("div",{id:"gamediv",className:"thirteen wide column",children:[c&&Object(v.jsx)(_,{start:function(){J=1,h()},stop:b}),u&&Object(v.jsx)(P,{stop:b})]})]})]})})),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).setusernamefunc=function(t){window.FB.api("/"+t,"GET",{fields:"name"},(function(t){e.props.setUserName(t.name)}))},e.login=function(){window.FB.login((function(t){try{e.props.signIn(t.authResponse.userID),e.setusernamefunc(t.authResponse.userID),g.push("/games-ic/data-collection")}catch(n){alert("Login to continue...!!!")}}))},e.logout=function(){window.FB.logout((function(){e.props.signOut(),g.push("/games-ic")}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.fbAsyncInit=function(){window.FB.init({appId:"2260742510736157",version:"v2.7"}),window.FB.getLoginStatus((function(t){"connected"==t.status?(e.props.signIn(t.authResponse.userID),e.setusernamefunc(t.authResponse.userID),g.push("/games-ic/data-collection")):e.props.signOut()}))}}},{key:"renderAuthButton",value:function(){return"connected"===this.props.isSignedIn?Object(v.jsxs)("div",{className:"ui secondary menu",children:[Object(v.jsx)("div",{className:"ui label",style:{fontSize:"23px"},children:this.props.uname}),Object(v.jsxs)("button",{className:"ui green button large",onClick:function(){return g.push("/games-ic/data-collection")},children:[Object(v.jsx)("i",{className:"home icon"}),"Home"]}),Object(v.jsx)("button",{onClick:this.logout,className:"ui blue facebook button massive right menu",children:"Sign Out"})]}):Object(v.jsxs)("div",{className:"ui secondary menu",children:[Object(v.jsxs)("button",{className:"ui green button large",onClick:function(){return g.push("/games-ic/data-collection")},children:[Object(v.jsx)("i",{className:"home icon"}),"Home"]}),Object(v.jsxs)("div",{onClick:this.login,className:"ui animated button blue massive right menu",tabIndex:"0",children:[Object(v.jsxs)("div",{className:"visible content",children:[Object(v.jsx)("i",{className:"facebook icon "})," Facebook"]}),Object(v.jsx)("div",{className:"hidden content",children:"Sign In"})]})]})}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:this.renderAuthButton()})}}]),n}(a.a.Component),q=Object(f.b)((function(e){return{isSignedIn:e.auth.isSignedIn,userIdd:e.auth.userId,uname:e.auth.userName}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}},setUserName:function(e){return{type:"SET_USERNAME",payload:e}}})(X),K=function(){return Object(v.jsx)("div",{id:"headerdiv",className:"ui segment",children:Object(v.jsxs)("div",{className:"ui secondary menu",children:[Object(v.jsx)("h1",{children:"Games-IC "}),Object(v.jsx)("div",{className:"right menu",children:Object(v.jsx)(q,{})})]})})},Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:"Landing page"})}}]),n}(a.a.Component),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(d.b,{history:g,children:[Object(v.jsx)(K,{}),Object(v.jsxs)(d.c,{children:[Object(v.jsx)(d.a,{path:"/games-ic",exact:!0,component:Y}),Object(v.jsx)(d.a,{path:"/games-ic/data-collection",component:E}),Object(v.jsx)(d.a,{path:"/games-ic/playground",component:V})]})]})})}}]),n}(s.Component),Z=(n(69),n(3)),$=n(14),ee={isSignedIn:"unknown",userId:"",dir:"RIGHT",userName:""},te=Object($.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USERNAME":return Object(Z.a)(Object(Z.a)({},e),{},{userName:"Welcome ".concat(t.payload)});case"SIGN_IN":return Object(Z.a)(Object(Z.a)({},e),{},{isSignedIn:"connected",userId:t.payload});case"SIGN_OUT":return Object(Z.a)(Object(Z.a)({},e),{},{isSignedIn:"unknown",userId:"null"});case"UP":return Object(Z.a)(Object(Z.a)({},e),{},{dir:"UP"});case"DOWN":return Object(Z.a)(Object(Z.a)({},e),{},{dir:"DOWN"});case"RIGHT":return Object(Z.a)(Object(Z.a)({},e),{},{dir:"RIGHT"});case"LEFT":return Object(Z.a)(Object(Z.a)({},e),{},{dir:"LEFT"});default:return e}}}),ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.d,se=Object($.e)(te,ne(Object($.a)()));i.a.render(Object(v.jsx)(f.a,{store:se,children:Object(v.jsx)(Q,{})}),document.querySelector("#root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.788bb5a6.chunk.js.map