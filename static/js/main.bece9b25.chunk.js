(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(e,t,a){e.exports={Button__container:"Button_Button__container__l3Nrq",Button:"Button_Button__fakI-"}},13:function(e,t,a){e.exports={modal__backdrop:"Modal_modal__backdrop__1OU-l",modal__content:"Modal_modal__content__qUdJT"}},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(23),c=a.n(r),l=a(4),s=a(5),i=a(7),h=a(6),u=a(14),d=a(10),m=a.n(d),p=a(24),f=a.n(p),_="20057586-194248245024f7fdf6233c620",b=12,g=function(e,t){return f.a.get("https://pixabay.com/api/?image_type=photo&key=".concat(_,"&page=").concat(e,"&per_page=").concat(b,"&orientation=horizontal&q=").concat(t)).then((function(e){return e.data.hits}))},j=a(8),O=a.n(j),y=a(0);var v=function(e){var t=e.fnSearch;return Object(y.jsx)("header",{className:O.a.Searchbar,children:Object(y.jsxs)("form",{className:O.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(e.target.lastChild.value)},children:[Object(y.jsx)("button",{type:"submit",className:O.a.SearchForm__button,children:Object(y.jsx)("span",{className:O.a.SearchForm__button_label,children:"Search"})}),Object(y.jsx)("input",{className:O.a.SearchForm__input,type:"text",placeholder:"Search images and photos"})]})})},x=a(9),S=a.n(x);var w=function(e){var t=e.src,a=e.srcLarge;return Object(y.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(y.jsx)("img",{src:t,"data-img":a,alt:" ",className:S.a.ImageGalleryItem__image})})},M=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).fnCatchSrc=function(t){e.props.fnModalOpen(t.target.dataset.img)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("ul",{className:S.a.ImageGallery,onClick:this.fnCatchSrc,children:this.props.collection.map((function(e){return Object(y.jsx)(w,{src:e.webformatURL,srcLarge:e.largeImageURL},e.id)}))})})}}]),a}(n.Component),k=a(12),F=a.n(k);var I=function(e){var t=e.fnLoadMore;return Object(y.jsx)("div",{className:F.a.Button__container,children:Object(y.jsx)("button",{onClick:t,className:F.a.Button,type:"button",children:"Load more"})})},C=a(13),L=a.n(C),G=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).fnCloseEscape=function(t){"Escape"===t.code&&e.props.fnTogleModal()},e.fnCloseBackdrop=function(t){"IMG"!==t.target.nodeName&&e.props.fnTogleModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.fnCloseEscape)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.fnCloseEscape)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:L.a.modal__backdrop,onClick:this.fnCloseBackdrop,children:Object(y.jsx)("div",{className:L.a.modal__content,children:this.props.children})})}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={collection:[],search:"",currentPage:1,error:null,loader:!1,showModal:!1,srcLarge:""},e.fnGetCollection=function(){console.log("Go to backend"),e.setState({loader:!0}),g(e.state.currentPage,e.state.search).then((function(t){e.setState({loader:!1,collection:[].concat(Object(u.a)(e.state.collection),Object(u.a)(t))}),console.log(e.state.collection)})).catch((function(){return console.warn("Server communication error")}))},e.fnSearch=function(t){console.log('I am ready for search "'.concat(t,'"')),e.setState({search:t,currentPage:1,error:null,collection:[]})},e.fnLoadMore=function(){console.log('Load More "'.concat(e.state.search,'"')),e.setState((function(e){return{currentPage:e.currentPage+1}}))},e.fnModalOpen=function(t){console.log("Modal Open"),e.setState({srcLarge:t,showModal:!0})},e.fnTogleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&(console.log("\u0424-\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438(\u21161)"),this.fnGetCollection()),t.currentPage!==this.state.currentPage&&t.search===this.state.search&&(console.log("\u0424-\u044f \u0414\u043e\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438(\u21162)"),this.fnGetCollection()),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(v,{fnSearch:this.fnSearch}),this.state.collection.length>0&&Object(y.jsx)(M,{collection:this.state.collection,fnModalOpen:this.fnModalOpen}),this.state.loader&&0===this.state.collection.length?Object(y.jsx)(m.a,{type:"BallTriangle",color:"#00BFFF",height:150,width:150,style:{marginLeft:"50%",transform:"translate(-50px)",marginTop:"15%"}}):null,this.state.loader&&this.state.collection.length>0?Object(y.jsx)(m.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,style:{marginLeft:"50%",transform:"translate(-50px)",marginTop:"2%"}}):null,this.state.collection.length>0&&Object(y.jsx)(I,{fnLoadMore:this.fnLoadMore}),this.state.showModal&&Object(y.jsxs)(G,{fnTogleModal:this.fnTogleModal,children:[Object(y.jsx)(m.a,{type:"BallTriangle",color:"#00BFFF",height:150,width:150,timeout:1500,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-75px, -75px)"}}),Object(y.jsx)("img",{src:this.state.srcLarge,alt:" "})]})]})}}]),a}(n.Component),N=(a(68),function(e){Object(i.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)(B,{})})}}]),a}(o.a.Component));a(69);c.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2wyrg",SearchForm:"Searchbar_SearchForm__3hCF7",SearchForm__button:"Searchbar_SearchForm__button__11dEv",SearchForm__button_label:"Searchbar_SearchForm__button_label__1_Law",SearchForm__input:"Searchbar_SearchForm__input__An71p"}},9:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1yPDc",ImageGalleryItem:"ImageGallery_ImageGalleryItem__1CA4i",ImageGalleryItem__image:"ImageGallery_ImageGalleryItem__image__3DscN"}}},[[70,1,2]]]);
//# sourceMappingURL=main.bece9b25.chunk.js.map