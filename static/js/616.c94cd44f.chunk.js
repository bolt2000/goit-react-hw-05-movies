"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{616:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(439),c=t(791),a=t(689),s=t(87),i=t(203),u="MovieDetails_fl__+DahA",o="MovieDetails_fl2__KQ5Lc",f="MovieDetails_btn__t5pTm",l=t(184),h=function(){var e,n,t=(0,a.UO)().movieId,h=(0,a.TH)(),p=(0,c.useState)(null),v=(0,r.Z)(p,2),d=v[0],x=v[1],m=(0,c.useState)([]),j=(0,r.Z)(m,2),w=j[0],_=j[1],g=(0,c.useRef)(null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");(0,c.useEffect)((function(){if(t)return(0,i.fh)(t).then((function(e){return _(e)})).catch((function(e){x(e.message)})),console.log(t),d?(0,l.jsx)("h1",{children:"Don't play with URL please. It's not funny"}):void 0}),[d,t]);var k=w.original_title,y=w.overview,b=w.genres,U=w.release_date,D=w.vote_average,M=w.poster_path;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.rU,{className:f,to:g.current,children:"Go back"}),(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original","/").concat(M),alt:k,width:"240px"}),(0,l.jsxs)("div",{className:o,children:[(0,l.jsxs)("h2",{children:[k," (",parseFloat(U),")"]}),(0,l.jsx)("p",{children:"User score: ".concat(Math.round(10*D),"%")}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:y}),(0,l.jsx)("h3",{children:"Genres"}),b&&(0,l.jsx)("ul",{children:w.genres.map((function(e){return(0,l.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,l.jsx)("div",{children:"Additional information"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(a.j3,{})]})}},203:function(e,n,t){function r(e,n,t,r,c,a,s){try{var i=e[a](s),u=i.value}catch(o){return void t(o)}i.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var s=e.apply(n,t);function i(e){r(s,c,a,i,u,"next",e)}function u(e){r(s,c,a,i,u,"throw",e)}i(void 0)}))}}t.d(n,{XT:function(){return o},au:function(){return h},fh:function(){return l},q5:function(){return p},gH:function(){return f}});var a=t(757),s=t.n(a),i="https://api.themoviedb.org/3",u="d923cfd5f948398665667bae929771df",o=function(){var e=c(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/trending/movie/week?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=c(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/search/movie?api_key=").concat(u,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=c(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(n,"?api_key=").concat(u));case 2:return t=e.sent,e.next=5,t.json(t);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=c(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=c(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1?"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=616.c94cd44f.chunk.js.map