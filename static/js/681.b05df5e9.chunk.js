"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{681:function(n,e,t){t.r(e);var r=t(439),c=t(689),u=t(791),a=t(203),o=t(184);e.default=function(){var n=(0,c.UO)().movieId,e=(0,u.useState)([]),t=(0,r.Z)(e,2),s=t[0],i=t[1];return(0,u.useEffect)((function(){(0,a.q5)(n).then((function(n){i(n.results),console.log(n.results)}))}),[n]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("ul",{children:s.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,o.jsxs)("li",{children:[(0,o.jsx)("h4",{children:e}),(0,o.jsx)("p",{children:t})]},r)}))}),0===s.length&&(0,o.jsx)("h3",{children:"We don't have any reviews for this movie"})]})}},203:function(n,e,t){function r(n,e,t,r,c,u,a){try{var o=n[u](a),s=o.value}catch(i){return void t(i)}o.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,u){var a=n.apply(e,t);function o(n){r(a,c,u,o,s,"next",n)}function s(n){r(a,c,u,o,s,"throw",n)}o(void 0)}))}}t.d(e,{XT:function(){return i},au:function(){return h},fh:function(){return p},q5:function(){return v},gH:function(){return f}});var u=t(757),a=t.n(u),o="https://api.themoviedb.org/3",s="d923cfd5f948398665667bae929771df",i=function(){var n=c(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/trending/movie/week?api_key=").concat(s));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=c(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=c(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.json(t);case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=c(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=c(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1?"));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=681.b05df5e9.chunk.js.map