(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(16),i=c(0),s=c.n(i),r=c(13),a=c.n(r),j=(c(51),c(19)),d=c(86),l=c(87),b=c(84),o=c(85),h=(c(52),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),u=c(18),O=c(6),x=(c(53),c(88)),p=c(20),f=c(1);function m(e){return Object(f.jsxs)("p",{className:"mt-3",children:["\uc7ac\uace0 : ",e.\uc7ac\uace0]})}function v(e){return Object(i.useEffect)((function(){e.\uc2a4\uc704\uce58\ubcc0\uacbd(!0)})),0===e.\ub204\ub978\ud0ed?Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),"   \ub0b4\uc6a90"]}):1===e.\ub204\ub978\ud0ed?Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),"\ub0b4\uc6a91"]}):2===e.\ub204\ub978\ud0ed?Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),"\ub0b4\uc6a92"]}):void 0}var g=Object(p.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){var t=Object(O.e)(),c=Object(O.f)().id,n=e.shoes.find((function(e){return e.id==c})),s=Object(i.useState)(!0),r=Object(j.a)(s,2),a=r[0],d=r[1];Object(i.useEffect)((function(){var e=setTimeout((function(){d(!1)}),2e3);return function(){clearTimeout(e)}}),[]);var b=Object(i.useState)(0),o=Object(j.a)(b,2),h=o[0],u=o[1],p=Object(i.useState)(!1),g=Object(j.a)(p,2),k=g[0],y=g[1];return Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-md-6",children:Object(f.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(n.id+1)+".jpg",width:"100%"})}),Object(f.jsxs)("div",{className:"col-md-6 mt-4",children:[!0===a?Object(f.jsx)("div",{className:"my-alert2",children:Object(f.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):null,Object(f.jsx)("h4",{className:"pt-5",children:n.title}),Object(f.jsx)("p",{children:n.content}),Object(f.jsxs)("p",{children:[n.price,"\uc6d0"]}),Object(f.jsx)("button",{className:"btn btn-danger",onClick:function(){e.dispatch({type:"\ud56d\ubaa9\ucd94\uac00","\ub370\uc774\ud130":{id:n.id,name:n.title,quan:1}}),t.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),Object(f.jsx)("span",{className:"pr-1"}),Object(f.jsx)("button",{onClick:function(){t.goBack()},className:"btn btn-primary",children:"\ub4a4\ub85c\uac00\uae30"}),Object(f.jsx)(m,{"\uc7ac\uace0":e.\uc7ac\uace0[0]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)(l.a,{variant:"tabs",defaultActiveKey:"link-0",children:[Object(f.jsx)(l.a.Item,{children:Object(f.jsx)(l.a.Link,{eventKey:"link-0",onClick:function(){y(!1),u(0)},children:"Active"})}),Object(f.jsx)(l.a.Item,{children:Object(f.jsx)(l.a.Link,{eventKey:"link-1",onClick:function(){y(!1),u(1)},children:"Option 2"})})]}),Object(f.jsx)(x.a,{in:k,classNames:"wow",timeout:500,children:Object(f.jsx)(v,{"\ub204\ub978\ud0ed":h,"\uc2a4\uc704\uce58\ubcc0\uacbd":y})})]})]})})})),k=c(43),y=c.n(k),N=c(83);var C=Object(p.b)((function(e){return{state:e.reducer,"alert\uc5f4\ub838\ub2c8":e.reducer2}}))((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsxs)(N.a,{responsive:!0,children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(f.jsx)("th",{children:"\uc218\ub7c9"}),Object(f.jsx)("th",{children:"\ubcc0\uacbd"}),Object(f.jsx)("th",{children:"\uc0ad\uc81c"})]}),e.state.map((function(t,c){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t.id}),Object(f.jsx)("td",{children:t.name}),Object(f.jsx)("td",{children:t.quan}),Object(f.jsxs)("td",{children:[Object(f.jsx)("button",{className:"btn btn-danger",onClick:function(){e.dispatch({type:"\uc218\ub7c9\uc99d\uac00","\ub370\uc774\ud130":t.id})},children:" + "}),Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){e.dispatch({type:"\uc218\ub7c9\uac10\uc18c","\ub370\uc774\ud130":t.id})},children:" - "})]}),Object(f.jsx)("td",{children:Object(f.jsx)("button",{className:"btn btn-dark",onClick:function(){e.dispatch({type:"\uc0c1\ud488\uc0ad\uc81c","\ub370\uc774\ud130":t.id})},children:" x "})})]},c)}))]}),!0===e.alert\uc5f4\ub838\ub2c8?Object(f.jsxs)("div",{className:"my-alert2",children:[Object(f.jsx)("p",{children:"\uc9c0\uae08 \uad6c\ub9e4\ud558\uc2dc\uba74 20% \ud560\uc778"}),Object(f.jsx)("button",{onClick:function(){e.dispatch({type:"alert\ub2eb\uae30"})},children:"\ub2eb\uae30"})]}):null]})}));function S(e){var t=Object(O.e)();return Object(f.jsxs)("div",{className:"col-md-4",onClick:function(){t.push("/detail/"+e.shoes.id)},children:[Object(f.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(f.jsx)("h4",{children:e.shoes.title}),Object(f.jsxs)("p",{children:[e.shoes.content," & ",e.shoes.price]})]})}var w=function(){var e=Object(i.useState)(h),t=Object(j.a)(e,2),c=t[0],s=t[1],r=Object(i.useState)([10,11,12]),a=Object(j.a)(r,2),x=a[0],p=a[1];return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(f.jsx)(d.a.Brand,{as:u.b,to:"/",children:"Shoe-Shop"}),Object(f.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(f.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(f.jsxs)(l.a,{className:"ml-auto",children:[Object(f.jsx)(l.a.Link,{as:u.b,to:"/",children:" Home "}),Object(f.jsx)(l.a.Link,{as:u.b,to:"/Detail",children:" Detail "})]})})]}),Object(f.jsxs)(O.a,{exact:!0,path:"/",children:[Object(f.jsxs)(b.a,{className:"background",children:[Object(f.jsx)("h1",{children:"Hello, world!"}),Object(f.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(f.jsx)("p",{children:Object(f.jsx)(o.a,{variant:"primary",children:"Learn more"})})]}),Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(f.jsx)(S,{shoes:c[t],i:t})}))})}),Object(f.jsx)("br",{}),Object(f.jsx)("button",{className:"btn btn-primary",onClick:function(){y.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){s([].concat(Object(n.a)(c),Object(n.a)(e.data)))})).catch((function(){}))},children:"\ub354\ubcf4\uae30"})]}),Object(f.jsx)(O.a,{path:"/detail/:id",children:Object(f.jsx)(g,{shoes:c,"\uc7ac\uace0":x,"\uc7ac\uace0\ubcc0\uacbd":p})}),Object(f.jsx)(O.a,{path:"/cart",children:Object(f.jsx)(C,{})})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))},I=c(33),L=[];var T=Object(I.b)(Object(I.a)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;if("\ud56d\ubaa9\ucd94\uac00"===t.type){var c=Object(n.a)(e),i=c.findIndex((function(e){return e.id===t.\ub370\uc774\ud130.id}));return i>=0?(c[i].quan++,c):(c.push(t.\ub370\uc774\ud130),c)}if("\uc218\ub7c9\uc99d\uac00"===t.type){var s=Object(n.a)(e),r=s.findIndex((function(e){return e.id===t.\ub370\uc774\ud130}));return s[r].quan++,s}if("\uc218\ub7c9\uac10\uc18c"===t.type){var a=Object(n.a)(e),j=a.findIndex((function(e){return e.id===t.\ub370\uc774\ud130}));return a[j].quan--,a}if("\uc0c1\ud488\uc0ad\uc81c"===t.type){var d=Object(n.a)(e),l=d.filter((function(e){return e.id!==t.\ub370\uc774\ud130}));return l}return e},reducer2:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"alert\ub2eb\uae30"!==t.type&&e}}));a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(u.a,{children:Object(f.jsx)(p.a,{store:T,children:Object(f.jsx)(w,{})})})}),document.getElementById("root")),B()}},[[81,1,2]]]);
//# sourceMappingURL=main.65144f94.chunk.js.map