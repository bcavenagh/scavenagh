(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"4/DZ":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("2iEm"),i=n("gcgR"),c=n("YalI"),u=n("s3D0"),l=n.n(u);function s(){return o.a.createElement("div",{className:l.a.container},o.a.createElement(a.a,{to:i.q},o.a.createElement(c.a,{className:l.a.logo})),o.a.createElement("p",{className:l.a.text},"Make something awesome"))}n.d(t,"a",function(){return s})},"6Dux":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(t){return function(e){return t.username===e.username}}},"7fyn":function(e,t,n){e.exports={"--xs-max":"(--xs-max)","--sm-min":"(--sm-min)","--md-max":"(--md-max)","--lg-min":"(--lg-min)",colorWhite:"#fff",spacingUnit:"4px",backgroundImageFooterGutter:"calc(4px * 2)",backgroundImageContainer:"_2QgdQ",backgroundImagePictureContainer:"_1wT8D",backgroundImageContentOverlay:"_2IASm",whiteLink:"ICezk",subContent:"_1ReuZ",backgroundImageFooter:"_2Oa0G _1ReuZ",backgroundImageFooterGutterContainer:"BcmU7",backgroundImageFooterGutterItem:"-wAV0",showFromSmMin:"_36V_V",showFromMdMin:"xZmk-",leftFooterItem:"jGus2 -wAV0",centerFooterItem:"_2J1eG -wAV0",rightFooterItem:"JHj-M -wAV0",rightFooterItemSpaceReservation:"_2I80X",sponsorMessage:"kT6Q5",sponsorLinkContainer:"_1s1zj",sponsorLogo:"AMHhv"}},ALSr:function(e,t,n){"use strict";var a=n("7H/G"),i=n("q1tI"),h=n.n(i),y=n("JKmW"),r=n("/MKj"),o=n("wIs1"),u=n("26FU"),c=n("bne5"),l=n("dzgT"),s=n("5tAl"),f=n("VnD/"),p=n("ou9H"),d=n("b2r9"),m=n("Sh83"),b=n("ZfPj"),g=n("nVTw"),v=n("2Fwo");function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=Object(g.a)()({shouldDisableInfiniteScroll:!1}),k=function(e){function t(){var c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(c=S(this,E(t).apply(this,arguments))).shouldDisableInfiniteScrollSubject=new u.a(c.props.shouldDisableInfiniteScroll),c.invokeSuppliedFetchMethod=function(){var e=c.props,t=e.fetchDataAndBuildActions,n=e.fetchDataParams,r=e.isDoneFetching,o=e.history,a=e.dispatch;if(!r){var i=t(n).pipe(Object(s.a)(3));c.fetchSubscription=i.subscribe(function(e){return a(d.a.BatchActions({actions:e}))},Object(b.b)(a,o))}},c}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,i["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){this.addLoadMoreSubscription()}},{key:"componentWillReceiveProps",value:function(e){var t=e.shouldDisableInfiniteScroll;t!==this.props.shouldDisableInfiniteScroll&&this.shouldDisableInfiniteScrollSubject.next(t)}},{key:"componentWillUnmount",value:function(){this.removeLoadMoreSubscription()}},{key:"addLoadMoreSubscription",value:function(){var e=this,t=Object(c.a)(window,"scroll").pipe(Object(f.a)(m.m)),n=Object(l.a)(t,this.shouldDisableInfiniteScrollSubject).pipe(Object(f.a)(function(e){var t=j(e,2),n=t[0],r=t[1];return n&&!r}),Object(p.a)(function(){return e.props.fetchDataParams.page}));this.loadMoreSubscription=n.subscribe(this.invokeSuppliedFetchMethod)}},{key:"removeLoadMoreSubscription",value:function(){a.a.of(this.loadMoreSubscription).get().unsubscribe(),a.a.of(this.fetchSubscription).forEach(function(e){return e.unsubscribe()})}},{key:"render",value:function(){return this.props.children}}])&&w(n.prototype,r),o&&w(n,o),t}();k.displayName="FeedScrollHandler";var C=Object(v.a)(Object(o.a)(Object(r.connect)()(k)),_),x=n("4/DZ"),P=n("OjOI"),N=n.n(P);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){var t=e.content;return h.a.createElement("div",{className:N.a.container},t)},L=function(e){function t(){var b;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(b=T(this,U(t).apply(this,arguments))).renderFeed=function(e,t){var n=b.props,r=n.fetchDataAndBuildActions,o=n.shouldDisableInfiniteScroll,a=n.renderItems,i=n.getScrollFooterEl,c=e.lastPageFetched,u=e.perPage,l=e.orderBy,s=e.total,f={page:c+1,perPage:u,orderBy:l},p=Object(y.b)({total:s,perPage:e.perPage})<=c,d=p?h.a.createElement(x.a,null):i(),m=h.a.createElement(h.a.Fragment,null,a(t),d);return h.a.createElement(C,{fetchDataAndBuildActions:r,fetchDataParams:f,isDoneFetching:p,shouldDisableInfiniteScroll:o},D({content:m}))},b.renderFeedOrNoContent=function(e,t){return 0===t.length?b.props.getNoContentEl():b.renderFeed(e,t)},b.renderPlaceholder=function(){return D({content:b.props.getPlaceholderEl()})},b}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,i["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.feedOption,n=e.feedItemsOption;return a.a.map2(t,n,this.renderFeedOrNoContent).getOrElseL(this.renderPlaceholder)}}])&&R(n.prototype,r),o&&R(n,o),t}();L.displayName="Feed";var M=L;n.d(t,"a",function(){return M})},BUGo:function(e,t,n){e.exports={colorWhite:"#fff",colorLightGrey:"#ddd",colorGrey:"#999",colorDarkGrey:"#777",colorBlue:"#007fff",colorDarkBlue:"#006aff",colorBlack:"#000",followButton:"_3nDcb",isFollowing:"_2br-F",followIcon:"_2BKrY"}},DUaC:function(e,t,n){"use strict";var s=n("7H/G"),r=n("56YH"),a=n.n(r),o=n("vN+2"),i=n.n(o),c=n("WjpJ"),u=n.n(c),f=n("6l12"),l=n("q1tI"),p=n.n(l),d=n("/MKj"),m=n("y3By"),b=n("67Y/"),h=n("QFtp"),y=n("b2r9"),g=n("OcE/"),v=n("pq3u"),O=n("nVTw"),j=n("2Fwo"),w=n("owNl"),S=n("5hI/"),E=n("6kA8"),I=n("ALSr"),_=n("V+UN"),k=n("W/VI"),C=n("JQ16"),x=n.n(C);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=_.a.Responsive({multi:{},single:{}}),B=Object(f.a)(function(){return p.a.createElement("div",{className:x.a.placeholdersContainer},p.a.createElement("div",{className:x.a.placeholderItemsContainer},u()(9).map(function(e){return p.a.createElement("div",{key:e,className:x.a.placeholderItemContainer},p.a.createElement("div",{className:x.a.placeholderItem}))})))}),D=Object(O.a)()({shouldRequireInfiniteScrollOptIn:!1,getNoContentEl:Object(f.a)(function(){return null})}),L=Object(h.unionize)({OptInRequired:Object(h.ofType)(),Enabled:{}}),M=function(e){function t(){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=F(this,R(t).apply(this,arguments))).getInfiniteScrollSetting=function(e){return e.shouldRequireInfiniteScrollOptIn?L.OptInRequired({optedIn:!1}):L.Enabled()},r.state={infiniteScrollSetting:r.getInfiniteScrollSetting(r.props)},r.toggleInfiniteScrollOptIn=function(){var e=r.state.infiniteScrollSetting;L.match({OptInRequired:function(e){var t=e.optedIn,n=L.OptInRequired({optedIn:!t});r.setState({infiniteScrollSetting:n})},default:i.a})(e)},r.defaultRenderChildren=function(e){return p.a.createElement(_.b,{photos:e,mode:U})},r.fetchDataAndBuildActions=a()(r.props.fetchPhotos,Object(m.a)(Object(b.a)(w.g),Object(b.a)(g.e),Object(b.a)(function(e){var t=e.entities,n=e.result;return[Object(y.V)(t),y.a.HandleNextPhotoFeedPageResponse({feedId:r.props.feedId,photoIds:n})]}))),r}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,l["Component"]),n=t,(r=[{key:"componentWillReceiveProps",value:function(e){if(e.shouldRequireInfiniteScrollOptIn!==this.props.shouldRequireInfiniteScrollOptIn){var t=this.getInfiniteScrollSetting(e);this.setState({infiniteScrollSetting:t})}}},{key:"render",value:function(){var t=this,e=this.props,n=e.photoFeedOption,r=e.photosOption,o=e.children,a=e.getNoContentEl,i=this.state.infiniteScrollSetting,c=!L.match({OptInRequired:function(e){return e.optedIn},Enabled:function(){return!0}})(i),u=s.a.of(o).getOrElse(this.defaultRenderChildren),l=Object(f.a)(function(){return L.match({OptInRequired:function(e){return e.optedIn?p.a.createElement(k.a,null):p.a.createElement("div",{className:x.a.buttonFooterContainer},p.a.createElement(E.a,{tag:"button",buttonType:"outline",onClick:t.toggleInfiniteScrollOptIn},"Load more photos"))},Enabled:function(){return p.a.createElement(k.a,null)}})(i)});return p.a.createElement(I.a,{renderItems:u,feedItemsOption:r,feedOption:n,getScrollFooterEl:l,getNoContentEl:a,getPlaceholderEl:B,shouldDisableInfiniteScroll:c,fetchDataAndBuildActions:this.fetchDataAndBuildActions})}}])&&N(n.prototype,r),o&&N(n,o),t}();M.displayName="PhotoFeed";var A=Object(v.c)()(function(e,t){return{photoFeedOption:Object(S.b)(e,t.feedId),photosOption:Object(S.a)(e,t.feedId)}}),q=Object(j.a)(Object(d.connect)(A)(M),D);n.d(t,"a",function(){return q})},Eexj:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("TJpk"),s=n.n(r),f=n("0uHb"),o=n("J4Es"),p=n("QH2T"),d=n("mjVK"),i=n("Mzc0"),c=n("TSYQ"),u=n.n(c),m=n("/MKj"),b=n("pq3u"),h=n("LB2o"),y=n("2iEm"),g=n("b2r9"),v=n("IXrn"),O=n("gcgR"),j=n("g9Q9"),w=n("j2cz"),S=n("5oSN"),E=n("+2WB"),I=n("WYac"),_=n("oC3F"),k=n("7H/G"),C=n("56YH"),x=n.n(C),P=n("FyPc"),N=n.n(P),F=n("WjpJ"),R=n.n(F),T=n("NbrK"),U=n("PCiO"),B=n("uYHa"),D=n("cANf");function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M={fit:_.ImgixFit.crop,q:80,ch:{dpr:!0}},A=Object(T.d)(1),q=new Map([[0,440],[D.b,470],[D.e,485],[915,594]]),H=x()(function(e){return R()(0,e,200)},function(e){return Object(f.g)(e).map(function(e){var t=L(e,2);return[t[0],t[1]-1]})}),G=function(e){var t=e.baseUrl,n=e.height,r=e.minWidth,o=e.width;return{srcSet:Object(U.a)({width:o,baseUrl:t,getParams:k.a.some(function(){return Object.assign({h:n},M)})}),media:Object(B.b)(r)?Object(T.b)(Object(T.g)(r)):void 0,sizes:A}},W=function(a){return function(e){var t,n,r=L(e,2),o=(r[0],r[1]);return(n=a,t=o,k.a.of(x()(function(e){return Array.from(e)},function(e){return e.filter(function(e){return L(e,1)[0]<=t})},function(e){return N()(e,function(e){return L(e,1)[0]})})(n)).map(function(e){return L(e,2)[1]})).map(function(e){return{width:o,height:e}})}},V=n("Kx6F"),K=n.n(V),z=function(e,t){return l.a.createElement("source",Object.assign({key:t},e))},Q=function(e){var o,a,t=e.width,n=e.url,r=H(t);return Object(f.a)(r.map((a={url:n}.url,o=q,function(e){var t=L(e,2),n=t[0],r=t[1];return W(o)([n,r]).map(function(e){return Object.assign({},e,{minWidth:n,baseUrl:a})})}))).map(G).map(z).reverse()},J=function(e){var t=e.width,n=e.url,r=Q({width:t,url:n}),o=Object(_.buildImgixUrl)(n)(Object.assign({w:1e3,h:1e3},M));return l.a.createElement("picture",{className:K.a.backgroundImagePicture},r,l.a.createElement("img",{className:K.a.backgroundImageImg,role:"presentation",src:o}))},Y=n("7fyn"),Z=n.n(Y);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ee(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function te(e){return(te=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n},oe=S.a.HomePageHeader(),ae=function(e){function t(){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=ee(this,te(t).apply(this,arguments))).handleSponsorClick=function(e){var t=e.sponsor;return function(){n.props.trackSponsorLinkClick({sponsor:t,linkLocation:"home-feed-header"})}},n.renderSponsorMessage=function(e){return l.a.createElement("div",{className:Z.a.sponsorMessage},l.a.createElement("div",{className:Z.a.sponsorLinkContainer},l.a.createElement("a",{href:Object(v.a)(e),target:"_blank",onClick:n.handleSponsorClick({sponsor:e.company})},l.a.createElement("img",{className:Z.a.sponsorLogo,src:e.transparentLogo}))),l.a.createElement("div",null,e.companyTagline))},n.renderSponsorContent=function(e){return l.a.createElement("div",{className:u()(Z.a.rightFooterItem,e.isEmpty()&&Z.a.rightFooterItemSpaceReservation)},e.map(n.renderSponsorMessage).orNull())},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,a["Component"]),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.user,n=e.photoId,r=e.children,o=re(e,["user","photoId","children"]);return l.a.createElement("div",{className:Z.a.backgroundImageContainer},l.a.createElement("div",{className:Z.a.backgroundImagePictureContainer},l.a.createElement(J,Object.assign({},o))),l.a.createElement("div",{className:Z.a.backgroundImageContentOverlay},r,l.a.createElement("div",{className:Z.a.backgroundImageFooter},l.a.createElement("div",{className:Z.a.backgroundImageFooterGutterContainer},l.a.createElement("div",{className:u()(Z.a.leftFooterItem,Z.a.showFromSmMin)},l.a.createElement(E.a,{photoId:n,linkClassName:Z.a.whiteLink},"Photo of the Day")," by ",l.a.createElement(I.a,{user:t},l.a.createElement(y.a,{className:Z.a.whiteLink,to:Object(j.h)({username:t.username})},t.name))),l.a.createElement("div",{className:u()(Z.a.centerFooterItem,Z.a.showFromMdMin)},"Read more about the ",l.a.createElement(y.a,{className:Z.a.whiteLink,to:O.m},"Unsplash License")),l.a.createElement(w.a,{adType:oe},this.renderSponsorContent)))))}}])&&$(n.prototype,r),o&&$(n,o),t}();ae.displayName="BackgroundImageContainer";var ie={trackSponsorLinkClick:g.P},ce=Object(m.connect)(null,ie)(ae),ue=n("aOk/"),le=n("hyvg"),se=n("xOrC"),fe=n("zPcV"),pe=n.n(fe),de=[{title:"Business"},{title:"Computer"},{title:"Nature"},{title:"Love"},{title:"House"}],me=n("oj76"),be=n("xlmH"),he=n.n(be),ye=n("OcXI"),ge=n.n(ye),ve=function(e){var i=e.trackSearchSuggestionClick;return l.a.createElement("div",{className:he.a.subContent},l.a.createElement("span",{className:ge.a.suggestionsLabel},"Trending searches:"),l.a.createElement("ul",{className:ge.a.suggestionsList},de.map(function(e){return t=Object.assign({},e,{trackSearchSuggestionClick:i}),n=t.title,r=t.trackSearchSuggestionClick,o=Object(j.f)(n),a=n.toLowerCase(),l.a.createElement("li",{key:o,className:ge.a.suggestionsListItem},l.a.createElement(y.a,{to:o,onClick:function(){return r(a,ue.a.HomepageHeader)},className:ge.a.whiteLink},n));var t,n,r,o,a})))},Oe={trackSearchSuggestionClick:g.O},je=Object(se.b)(Object(m.connect)(null,Oe)(function(e){var t=e.routeData,n=e.trackSearchSuggestionClick,r=le.d.is.Search(t)?t.props.query:"";return l.a.createElement("div",{className:ge.a.gutterContainer},l.a.createElement("div",{className:ge.a.gutterItem},l.a.createElement("div",{className:pe.a.showUntilXsMax},l.a.createElement(me.a,{inputIdSuffix:"homepage-header-small",isInNav:!1,key:r})),l.a.createElement("div",{className:pe.a.showFromSmMin},l.a.createElement(me.a,{inputIdSuffix:"homepage-header-big",isInNav:!1,key:r}))),l.a.createElement("div",{className:ge.a.gutterItem},ve({trackSearchSuggestionClick:n})))})),we=function(e){var t=e.maybeBackgroundImage.map(function(e){return{photoId:e.id,url:e.urls.raw,width:e.width,user:e.user}}),n=l.a.createElement("div",{className:he.a.container},l.a.createElement("div",{className:he.a.contentContainer},l.a.createElement("span",{className:he.a.title},"Unsplash"),l.a.createElement("div",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:he.a.subHeader},"Beautiful, free photos."),l.a.createElement("p",{className:he.a.text},"Gifted by the world’s most generous community of photographers. 🎁")),l.a.createElement(je,null))));return l.a.createElement("div",{className:u()(he.a.wrapper)},t.map(function(e){return l.a.createElement(ce,Object.assign({},e),n)}).getOrElse(n))};we.displayName="FeedHeader";var Se=Object(b.e)()({maybeBackgroundImage:h.a}),Ee=Object(m.connect)(Se)(we),Ie=n("XMnP"),_e=n("s6EG"),ke=n("vjdK"),Ce=Object(ke.a)(O.f),xe=function(e){var t,n=e.photosOption,r=e.editorialFeedElement,o=n.chain(f.d),a=(t=o,Object(_e.f)({photoOption:t,title:"Beautiful Free Images & Pictures | Unsplash",description:"Beautiful, free images and photos that you can download and use for any project. Better than any royalty free or stock photos.",canonicalUrl:Ce})),i=a.title,c=a.meta,u=a.link;return l.a.createElement("div",Object.assign({},Object(d.a)(p.d)),l.a.createElement(s.a,{title:i,meta:c,link:u}),l.a.createElement(Ee,null),r)},Pe=Object(o.b)({routeType:o.a.DynamicRoute})(function(){return l.a.createElement(i.a,{feedId:Ie.a,render:xe})});n.d(t,"default",function(){return Pe})},FyPc:function(e,t,n){var r=n("dunj"),o=n("V9xz"),a=n("ut/Y");e.exports=function(e,t){return e&&e.length?r(e,a(t,2),o):void 0}},J4Es:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"b",function(){return y});var c=n("q1tI"),u=n.n(c),r=n("/MKj"),o=n("b2r9"),l=n("pq3u"),s=n("uNqx");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,i,h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};(i=b||(b={})).StaticRoute="StaticRoute",i.DynamicRoute="DynamicRoute";var y=function(e){var i=e.routeType;return function(a){var e=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,c["Component"]),n=t,(r=[{key:"componentDidUpdate",value:function(){i===b.DynamicRoute?this.props.dynamicRouteComponentUpdated():this.props.staticRouteComponentUpdated()}},{key:"render",value:function(){var e=this.props,t=(e.dynamicRouteComponentUpdated,e.staticRouteComponentUpdated,h(e,["dynamicRouteComponentUpdated","staticRouteComponentUpdated"]));return u.a.createElement(a,Object.assign({},t))}}])&&f(n.prototype,r),o&&f(n,o),t}();e.displayName="TrackRouteUpdates(".concat(Object(s.a)(a),")");var t=Object(l.b)()({dynamicRouteComponentUpdated:o.a.DynamicRouteComponentUpdated,staticRouteComponentUpdated:o.a.StaticRouteComponentUpdated});return Object(r.connect)(null,t)(e)}}},JQ16:function(e,t,n){e.exports={clearfix:"_2KLco",container:"_2sCnE PrOBO _1CR66","col-12":"wRfkF","sm-col-6":"_2cVF0","md-col-4":"_1hITE",floatLeft:"_2T3hc",floatRight:"_3pmDG",spacingUnit:"4px","--sm-min":"(--sm-min)",colorLightGrey:"#ddd",placeholderBackground:"_2VWD4",placeholderGutter:"24px",buttonFooterContainer:"_3sS4m",placeholdersContainer:"ILvgD",placeholderItemsContainer:"vbiZb",placeholderItemContainer:"_1fA3Q wRfkF _2cVF0 _1hITE",placeholderItem:"IjvFe _2VWD4"}},KScQ:function(e,t,n){"use strict";var r=n("TSYQ"),l=n.n(r),o=n("56YH"),a=n.n(o),i=n("mwIZ"),c=n.n(i),u=n("q1tI"),s=n.n(u),f=n("/MKj"),p=n("wIs1"),d=n("5tAl"),m=n("t9fZ"),b=n("b2r9"),h=n("acyj"),y=n("d8i8"),g=n("nVTw"),v=n("2Fwo"),O=n("GBJA"),j=Object(O.a)("M31.2 12.8h-2.4v-2.4c0-.4-.4-.8-.8-.8h-1.6c-.4 0-.8.4-.8.8v2.4h-2.4c-.4 0-.8.4-.8.8v1.6c0 .4.4.8.8.8h2.4v2.4c0 .4.4.8.8.8h1.6c.4 0 .8-.4.8-.8v-2.4h2.4c.4 0 .8-.4.8-.8v-1.6c0-.4-.4-.8-.8-.8zm-15.2 5.1v-1.2c1.9-1.1 3.2-3.1 3.2-5.5v-1.6c0-3.5-2.9-6.4-6.4-6.4s-6.4 2.9-6.4 6.4v1.6c0 2.4 1.3 4.4 3.2 5.5v1.2c-5.5.9-9.6 4-9.6 7.7v1.6c0 .9.7 1.6 1.6 1.6h22.4c.9 0 1.6-.7 1.6-1.6v-1.6c0-3.7-4.1-6.8-9.6-7.7z"),w=n("KVl2"),S=n("XqAV"),E=n("6kA8"),I=n("BUGo"),_=n.n(I);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var F=Object(g.a)()({labelText:{isFollowing:"Following",isNotFollowing:"Follow"}}),R=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,P(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,u["Component"]),n=t,(r=[{key:"componentWillUnmount",value:function(){this.followSubscription&&this.followSubscription.unsubscribe()}},{key:"getLabelText",value:function(){var e=this.props.labelText;return this.props.user.followed_by_user?e.isFollowing:e.isNotFollowing}},{key:"buildToLink",value:function(){var e=this.props,t=e.location,n=e.user;return Object(y.a)(t)(S.c.Login(S.b.Follow({userId:n.id})))}},{key:"buildClickHandler",value:function(){var t=this,e=this.props,n=e.authUser,r=e.user,o=e.followUser,a=e.unfollowUser,i=e.trackFollowButtonClick,c=e.trackUnfollowButtonClick,u=e.buttonType;if(!n)return function(){return i(r.id,u)};var l=r.username,s=r.followed_by_user,f=(s?h.a.users.unfollowUser:h.a.users.followUser)({username:l}).pipe(Object(d.a)(3),Object(m.a)(1));return function(e){e.stopPropagation(),s?(a(r.id),c(r.id,u)):(o(r.id),i(r.id,u)),t.followSubscription=f.subscribe()}}},{key:"renderContainer",value:function(e){var t=this.props,n=t.user,r=t.className,o=t.authUser,a=this.buildClickHandler(),i=n.followed_by_user,c=!o,u={className:l()(_.a.followButton,i&&_.a.isFollowing,r),buttonSize:"small"};return c?s.a.createElement(E.a,Object.assign({tag:"link",to:this.buildToLink(),onMouseUp:a},u),e):s.a.createElement(E.a,Object.assign({tag:"button",onMouseUp:a},u),e)}},{key:"render",value:function(){var e=this.props,t=e.user,n=e.authUser;return c()(n,"username")===t.username?s.a.createElement("div",null):this.renderContainer(s.a.createElement("span",null,s.a.createElement(j,{className:_.a.followIcon}),this.getLabelText()))}}])&&C(n.prototype,r),o&&C(n,o),t}();R.displayName="FollowButton";Object(v.a)(R,F);var T={trackFollowButtonClick:b.F,trackUnfollowButtonClick:b.Q,followUser:b.j,unfollowUser:b.T},U=Object(v.a)(a()(Object(f.connect)(function(e){return{authUser:Object(w.b)(e)}},T),p.a)(R),F);n.d(t,"a",function(){return U})},KwrD:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return h});var i=n("6l12"),c=n("q1tI"),u=n.n(c),l=n("IsKo"),r=n("QFtp"),o=n("uNqx");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=Object(r.unionize)({Unenhanced:{},Enhanced:{}}),b=function(e){return e?m.Enhanced():m.Unenhanced()},h=function(a){var e="WithRenderType(".concat(Object(o.a)(a),")"),t=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=f(this,p(t).apply(this,arguments))).createRenderTypeFromIsEnhancedMemoized=Object(i.a)(b),e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,c["Component"]),n=t,(r=[{key:"render",value:function(){var r=this;return u.a.createElement(l.Consumer,null,function(e){var t=e.isEnhanced,n=r.createRenderTypeFromIsEnhancedMemoized(t);return u.a.createElement(a,Object.assign({renderType:n},r.props))})}}])&&s(n.prototype,r),o&&s(n,o),t}();return t.displayName=e,t}},Kx6F:function(e,t,n){e.exports={"--sm-min":"(--sm-min)","--xs-max":"(--xs-max)",backgroundImagePicture:"_2XHNB",backgroundImageImg:"_1OiuV"}},Mzc0:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("/MKj"),i=n("acyj"),c=n("5hI/"),u=n("DUaC"),l=i.a.photoFeeds.listEditorialFeedPhotos,s=function(e){var t=e.photoFeedOption,n=e.photosOption,r=e.render,o=e.feedId;return r({photosOption:n,photoFeedOption:t,editorialFeedElement:a.a.createElement(u.a,{feedId:o,fetchPhotos:l})})};s.displayName="EditorialFeedElementAndData";var f=Object(o.connect)(function(e,t){return{photosOption:Object(c.a)(e,t.feedId),photoFeedOption:Object(c.b)(e,t.feedId)}})(s);n.d(t,"a",function(){return f})},OcXI:function(e,t,n){e.exports={colorWhite:"#fff",resetList:"_2Pvqc _1aofb",gutter:"16px",gutterContainer:"wqRmt",gutterItem:"_3k9pE",suggestionsLabel:"SLG9B",suggestionsList:"_39Gnz _2Pvqc _1aofb",suggestionsListItem:"_3boor",whiteLink:"LhP3s"}},OjOI:function(e,t,n){e.exports={container:"_2HheS _2sCnE PrOBO _1CR66"}},V9xz:function(e,t){e.exports=function(e,t){return t<e}},dunj:function(e,t,n){var l=n("/9aa");e.exports=function(e,t,n){for(var r=-1,o=e.length;++r<o;){var a=e[r],i=t(a);if(null!=i&&(void 0===c?i==i&&!l(i):n(i,c)))var c=i,u=a}return u}},eSEV:function(e,t,n){"use strict";var r=n("Xp7I"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=n("TSYQ"),u=n.n(c),l=n("/MKj"),s=n("2iEm"),f=n("b2r9"),p=n("g9Q9"),d=n("fO8F"),m=n.n(d),b=function(e){var t=e.tag,n=e.emplacement,r=e.trackSearchSuggestionClick,o=e.className,a="linkUrl"in t?t.linkUrl:Object(p.f)(t.title);return i.a.createElement(s.a,{className:u()(m.a.smallTag,o),to:a,title:"".concat(t.title," images"),onClick:function(){return r(t.title.toLowerCase(),n)}},t.title)};b.displayName="SmallTag";var h={trackSearchSuggestionClick:f.O},y=Object(l.connect)(null,h)(b),g=n("hBm8"),v=n.n(g),O=function(e){var t=e.tags,n=e.emplacement,r=e.takeN;return i.a.createElement("div",{className:v.a.tagsContainer},(r?o()(t,r):t).map(function(e){return i.a.createElement("div",{key:e.title,className:v.a.tagItem},i.a.createElement(y,{tag:e,emplacement:n}))}))};O.displayName="SmallTagsList";var j=O;n.d(t,"a",function(){return j})},fO8F:function(e,t,n){e.exports={smallTag:"_6PxCM"}},fadw:function(e,t,n){"use strict";var r=n("q1tI"),c=n.n(r),u=n("i8i4");n("17x9"),n("QLaP"),n("6DQo");var b=/^-?\d*\.?\d+(px|%)$/;function h(n,r){return Array.isArray(n)&&Array.isArray(r)&&n.length===r.length?n.some(function(e,t){return h(n[t],r[t])}):n!==r}var y=new Map;function l(){for(var e,t,n,r,o,a,i,c,u,l=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},s=l.root||null,f=(e=l.rootMargin,t=(e?e.trim():"0px").split(/\s+/).map(function(e){if(!b.test(e))throw new Error("rootMargin must be a string literal containing pixels and/or percent values");return e}),n=t[0],r=void 0===n?"0px":n,o=t[1],a=void 0===o?r:o,i=t[2],c=void 0===i?r:i,u=t[3],r+" "+a+" "+c+" "+(void 0===u?a:u)),p=Array.isArray(l.threshold)?l.threshold:[null!=l.threshold?l.threshold:0],d=y.keys(),m=void 0;m=d.next().value;){if(!(s!==m.root||f!==m.rootMargin||h(p,m.thresholds)))return m}return null}function o(e,t){var n=y.get(e);if(n)for(var r=n.values(),o=void 0;o=r.next().value;)if(o.target===t.target)return o;return null}function s(e,t){for(var n=0;n<e.length;n++){var r=o(t,e[n]);r&&r.handleChange(e[n])}}var f=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=["root","rootMargin","threshold"],m=["disabled"].concat(d),g=Object.prototype,a=function(a){function i(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r=p(this,a.call.apply(a,[this].concat(n)))).handleChange=function(e){r.props.onChange(e,r.unobserve),r.props.onlyOnce&&e.isIntersecting&&r.unobserve()},r.handleNode=function(e){"function"==typeof r.props.children.ref&&r.props.children.ref(e),r.targetChanged=null!=(r.renderedTarget&&e)&&r.renderedTarget!==e,r.targetChanged&&r.unobserve(),r.target=e},r.observe=function(){var e,t,n;r.target=(e=r.target,c.a.isValidElement(e)&&"string"==typeof e.type?r.target:Object(u.findDOMNode)(r.target)),r.observer=l(t=r.options)||new IntersectionObserver(s,t),n=r,y.has(n.observer)||y.set(n.observer,new Set),y.get(n.observer).add(n),n.observer.observe(n.target)},r.unobserve=function(){null!=r.target&&function(e){if(y.has(e.observer)){var t=y.get(e.observer);t.delete(e)&&(0<t.size?e.observer.unobserve(e.target):(e.observer.disconnect(),y.delete(e.observer)))}}(r)},p(r,e)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,a),i.prototype.componentDidMount=function(){this.props.disabled||this.observe()},i.prototype.componentDidUpdate=function(t){var n=this,e=m.some(function(e){return h(n.props[e],t[e])});e&&this.unobserve(),(this.targetChanged||e)&&(this.props.disabled||this.observe())},i.prototype.componentWillUnmount=function(){this.unobserve()},i.prototype.render=function(){return this.renderedTarget=this.target,c.a.cloneElement(c.a.Children.only(this.props.children),{ref:this.handleNode})},f(i,[{key:"options",get:function(){var r=this;return d.reduce(function(e,t){if(g.hasOwnProperty.call(r.props,t)){var n="root"===t&&"[object String]"===g.toString.call(r.props[t]);e[t]=n?document.querySelector(r.props[t]):r.props[t]}return e},{})}}]),i}(c.a.Component);a.displayName="IntersectionObserver";var i=a;n.d(t,"a",function(){return i})},gPaA:function(e,t,n){var r=n("dunj"),o=n("ut/Y"),a=n("jSBL");e.exports=function(e,t){return e&&e.length?r(e,o(t,2),a):void 0}},hBm8:function(e,t,n){e.exports={gutter:"8px",tagsContainer:"_2_OE1",tagItem:"_3Z-ua"}},jSBL:function(e,t){e.exports=function(e,t){return e<t}},ou9H:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("mrSG"),o=n("MGBS"),a=n("zotm");function i(t,n){return function(e){return e.lift(new c(t,n))}}var c=function(){function e(e,t){this.keySelector=e,this.flushes=t}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.keySelector,this.flushes))},e}(),u=function(o){function e(e,t,n){var r=o.call(this,e)||this;return r.keySelector=t,r.values=new Set,n&&r.add(Object(a.a)(r,n)),r}return r.a(e,o),e.prototype.notifyNext=function(e,t,n,r,o){this.values.clear()},e.prototype.notifyError=function(e,t){this._error(e)},e.prototype._next=function(e){this.keySelector?this._useKeySelector(e):this._finalizeNext(e,e)},e.prototype._useKeySelector=function(e){var t,n=this.destination;try{t=this.keySelector(e)}catch(e){return void n.error(e)}this._finalizeNext(t,e)},e.prototype._finalizeNext=function(e,t){var n=this.values;n.has(e)||(n.add(e),this.destination.next(t))},e}(o.a)},s3D0:function(e,t,n){e.exports={colorGrey:"#999","--sm":"(--sm)","--md-min":"(--md-min)",container:"_2WMKE",logo:"_1Ig-9",text:"_1cQDt"}},vjdK:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n("WOfl"),o=n("h4WG"),a=function(e){return Object(r.replacePathInUrl)({url:o.d})({newPath:e})}},xlmH:function(e,t,n){e.exports={container:"_3QkSI _2sCnE PrOBO _1CR66","sm-col-8":"_1pgnK","mx-auto":"_2HBSG","--xxs-max":"undefined","--xs-min":"(--xs-min)",colorWhite:"#fff",colorBlack:"#000",fontWeightNormal:"_27Bp2",fontWeightBold:"_2svCU",headingL:"_2RmO0",bodyCopy:"_1iWCF",wrapper:"_114h2",contentContainer:"_24vCv _1pgnK _2HBSG",title:"VkP27 _2RmO0 _2svCU",subHeader:"_9IFIy _27Bp2 _1iWCF",text:"_3fk_U _27Bp2 _1iWCF"}}}]);
//# sourceMappingURL=editorial-route.ffe0f.js.map