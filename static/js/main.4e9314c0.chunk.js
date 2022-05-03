(this["webpackJsonpposts-react"]=this["webpackJsonpposts-react"]||[]).push([[0],{127:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var o=n(39),c=n.n(o),s=(n(127),n(26)),a=n(66),i=n(92),l=n(105),r=n(17),d={posts:[],isLoaded:!1},u=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.b,j=Object(a.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":return Object(r.a)(Object(r.a)({},e),{},{posts:[].concat(Object(l.a)(e.posts),[t.payload])});case"DELETE_POST":return Object(r.a)(Object(r.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.payload}))});case"INIT_POSTS":return Object(r.a)(Object(r.a)({},e),{},{posts:t.payload});case"SET_LOADED":return Object(r.a)(Object(r.a)({},e),{},{isLoaded:t.payload});default:return e}}),u(Object(a.a)(i.a))),b=n(50),h=n(51),p=n(62),O=n(59),m=n(0),x=n.n(m),f=n(4),g=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object(h.a)(n,[{key:"render",value:function(){return this.state.hasError?Object(f.jsx)("h2",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a. \u041f\u043e\u0441\u0442\u044b \u043d\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(m.Component),v=n(37),y=n(74),D=n.n(y),_=n(93),k=n(94),C=n.n(k).a.create({baseURL:"http://jsonplaceholder.typicode.com/posts"}),w=function(){return C.get("?_limit=10").then((function(e){return e.data}))};var I=function(e){return{type:"SET_LOADED",payload:e}},S=n(211),E=n(3),P=n(106),T=n(206),L=n(213),R=function(e){var t=e.showModal,n=e.hideModal,o=Object(s.c)((function(e){return e.posts})),c=Object(s.b)(),a=m.useState(""),i=Object(v.a)(a,2),l=i[0],r=i[1],d=m.useState(""),u=Object(v.a)(d,2),j=u[0],b=u[1];return Object(f.jsx)("div",{children:Object(f.jsxs)(S.a,{isOpen:t,onDismiss:n,containerClassName:N.container,children:[Object(f.jsx)("div",{className:N.header,children:Object(f.jsx)("h2",{children:"New Post"})}),Object(f.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""!==(null===l||void 0===l?void 0:l.trim())&&""!==(null===j||void 0===j?void 0:j.trim())){var t=0===o.length?1:o[o.length-1].id+1;c({type:"ADD_POST",payload:{id:t,title:l,body:j}}),n.call(null),r(""),b("")}},children:[Object(f.jsxs)("div",{className:N.body,children:[Object(f.jsx)(L.a,{label:"Post title: ",value:l,onChange:function(e,t){r(t)},required:!0}),Object(f.jsx)(L.a,{label:"Post description:",value:j,onChange:function(e,t){b(t)},multiline:!0,rows:3,required:!0})]}),Object(f.jsxs)("div",{className:N.footer,children:[Object(f.jsx)(P.a,{onClick:n,text:"Cancel"}),Object(f.jsx)(T.a,{text:"Add Post",type:"submit"})]})]})]})})},N=Object(E.z)({container:{display:"flex",flexFlow:"column nowrap",padding:"20px",borderRadius:"10px"},header:{flex:"0 1 auto",color:"#000",display:"flex",justifyContent:"center",fontWeight:"bold"},body:{flex:"0 1 auto",display:"flex",flexFlow:"column nowrap",padding:"10px 0",selectors:{p:{margin:"10px 0",fontWeight:"bold"}}},footer:{display:"flex",justifyContent:"space-between",margin:"15px 0"}}),A=n(107),F=n(209),M=n(210),W=n(7),B=n(23),z=n(63),U=n(216),q=Object(E.w)(),H=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var o;return Object(b.a)(this,n),(o=t.call(this,e))._selection=void 0,o._columns=void 0,o._handleRenderPage=function(){var e=o.state.selectedItem[0].checkId;o._selection.selectToIndex(e+1,!0)},o._onRenderRow=function(e){var t={root:{"& * div":{whiteSpace:"normal"}}};return e?(e.itemIndex%2===0&&(t.root={backgroundColor:q.palette.themeLighterAlt}),Object(f.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{styles:t}))):null},o._columns=[{key:"column1",name:"ID",fieldName:"id",minWidth:10,maxWidth:50},{key:"column2",name:"Title",fieldName:"title",minWidth:100,maxWidth:200,isResizable:!0},{key:"column3",name:"Description",fieldName:"body",minWidth:100,maxWidth:200,isResizable:!0}],o._selection=new F.a({onSelectionChanged:function(){return o.setState({selectedItem:o._selection.getSelection()})}}),o.state={selectedItem:[]},o}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(e){e.posts!==this.props.posts&&0!==this.state.selectedItem.length&&this._handleRenderPage()}},{key:"render",value:function(){var e=this.state.selectedItem,t=this.props.posts;return Object(f.jsxs)("div",{children:[e.length>0&&Object(f.jsx)("p",{children:Object(f.jsx)(T.a,{text:"Delete current post",onClick:this._handleClickPostDelete.bind(this,e[0].id)})}),Object(f.jsx)(U.a,{selection:this._selection,children:Object(f.jsx)(M.a,{items:t,columns:this._columns,setKey:"set",layoutMode:W.e.justified,ariaLabelForSelectionColumn:"Toggle selection",ariaLabelForSelectAllCheckbox:"Toggle selection for all items",checkButtonAriaLabel:"select row",onRenderDetailsFooter:this._onRenderDetailsFooter,selection:this._selection,selectionMode:B.b.single,onRenderRow:this._onRenderRow})})]})}},{key:"_handleClickPostDelete",value:function(e){this.props.currentIDForDel(e)}},{key:"_onRenderDetailsFooter",value:function(e){return Object(f.jsx)(A.a,Object(r.a)(Object(r.a)({},e),{},{columns:e.columns,item:{},itemIndex:-1,groupNestingDepth:e.groupNestingDepth,selectionMode:B.b.single,selection:e.selection,onRenderItemColumn:J,onRenderCheck:K}))}}]),n}(m.PureComponent),J=function(e,t,n){if(n)return Object(f.jsx)("div",{children:Object(f.jsx)("b",{children:n.name})})},X={root:{visibility:"hidden"}},K=function(e){return Object(f.jsx)(z.a,Object(r.a)(Object(r.a)({},e),{},{styles:X,selected:!0}))},V=n(200),G=n(36),Q=n(214),Y=n(108),Z=n(199),$={main:{maxWidth:450}},ee={type:G.a.normal,title:"Delete current post?",closeButtonAriaLabel:"Close",subText:"If you want to delete post click Delete or Cancel this action"},te=function(e){var t=e.hideDialog,n=e.toggleHideDialog,o=e.currentPostId,c=Object(Z.a)("dialogLabel"),a=Object(Z.a)("subTextLabel"),i=Object(s.b)(),l=m.useMemo((function(){return{titleAriaId:c,subtitleAriaId:a,isBlocking:!1,styles:$}}),[c,a]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(Q.a,{hidden:t,onDismiss:n,dialogContentProps:ee,modalProps:l,children:Object(f.jsxs)(Y.a,{children:[Object(f.jsx)(T.a,{onClick:function(){i({type:"DELETE_POST",payload:o}),n.call(null)},text:"Delete post"}),Object(f.jsx)(P.a,{onClick:n,text:"Cancel"})]})})})},ne=n(215),oe=function(){var e=Object(V.a)(!0),t=Object(v.a)(e,2),n=t[0],o=t[1].toggle,c=Object(V.a)(!1),a=Object(v.a)(c,2),i=a[0],l=a[1],r=l.setTrue,d=l.setFalse,u=x.a.useState(null),j=Object(v.a)(u,2),b=j[0],h=j[1],p=Object(s.b)(),O=Object(s.c)((function(e){return e})),m=O.posts,g=O.isLoaded;x.a.useEffect((function(){p(function(){var e=Object(_.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),e.prev=1,e.next=4,w();case 4:n=e.sent,t({type:"INIT_POSTS",payload:n}),t(I(!1)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]);return Object(f.jsxs)("div",{className:"App-wrapper",children:[Object(f.jsx)(ne.a,{block:!0,variant:"large",className:"App-header",children:"Posts List"}),!i&&Object(f.jsx)(T.a,{text:"Add post",onClick:r}),i&&Object(f.jsx)(R,{showModal:i,hideModal:function(){return d()}}),g&&Object(f.jsx)("p",{children:"Loading posts..."}),m.length>0&&Object(f.jsx)(H,{posts:m,currentIDForDel:function(e){h(e),o.call(null)}}),m.length||g?"":Object(f.jsx)("p",{children:"No posts"}),!n&&Object(f.jsx)(te,{hideDialog:n,toggleHideDialog:o,currentPostId:b})]})};c.a.render(Object(f.jsx)(s.a,{store:j,children:Object(f.jsx)(g,{children:Object(f.jsx)(oe,{})})}),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.4e9314c0.chunk.js.map