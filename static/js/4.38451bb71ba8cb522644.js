webpackJsonp([4],{VCrJ:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("Dd8w"),e=i.n(a),r=i("NYxO"),n=i("7biW"),c=i("hyxP"),u={computed:e()({},Object(r.c)({loading:"musicList/loading",title:"musicList/title",list:"musicList/list"})),watch:{$route:function(t,s){if(0==t.path.indexOf("/mu/")){var i={k:this.$route.params.searchKey,start:0,count:5};this.$store.dispatch("musicList/searchMusic",i)}}},mounted:function(){if("mu"==this.$route.name){var t={k:this.$route.params.searchKey,start:0,count:5};this.$store.dispatch("musicList/searchMusic",t)}},methods:e()({},Object(r.b)({searchMusic:"musicList/searchMusic"}),{getFilterData:function(t){var s=[];if(!t||0==t.length)return"";for(var i=0;i<t.length;i++)s.push(t[i].name);return s.join("/")},getImages:function(t){if(void 0!==t)return"https://images.weserv.nl/?url="+t.substring(8)}}),components:{cqw:n.default,mvpage:c.a}},l={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("cqw"),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"canvas"},[i("div",{staticClass:"spinner"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[i("div",{staticClass:"card-columns"},t._l(t.list,function(s){return i("div",{key:s.id,staticClass:"card"},[i("router-link",{attrs:{to:{path:"/mus/"+s.id}}},[i("img",{staticClass:"card-img-top",attrs:{src:t.getImages(s.image),alt:"item.title"}})]),t._v(" "),i("div",{staticClass:"card-body"},[i("h5",{staticClass:"card-title"},[t._v(t._s(s.title))]),t._v(" "),i("p",{staticClass:"card-text"},[t._v(t._s(s.subtitle))])]),t._v(" "),i("ul",{staticClass:"list-group list-group-flush"},[i("li",{staticClass:"list-group-item"},[t._v("评分："+t._s(s.rating.average)+" / 评价："+t._s(s.rating.numRaters))]),t._v(" "),t._l(s.attrs.pubdate,function(s){return i("li",{staticClass:"list-group-item"},[t._v(" 年份：\n                "+t._s(s)+"\n              ")])}),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v(" 作者： \n               "),t._l(s.author,function(s){return[t._v("\n                "+t._s(s.name)+"/\n               ")]})],2),t._v(" "),i("li",{staticClass:"list-group-item"},[t._v("类型：\n               "),t._l(s.tags,function(s,i){return[i<3?[t._v(t._s(s.name)+"/")]:t._e()]})],2)],2),t._v(" "),i("div",{staticClass:"card-body"},[i("router-link",{staticClass:"btn btn-primary",attrs:{role:"button",to:{path:"/mus/"+s.id}}},[t._v(t._s(s.title))])],1)],1)}),0)]),t._v(" "),i("mvpage")],1)},staticRenderFns:[]};var o=i("VU/8")(u,l,!1,function(t){i("rd5Q")},"data-v-686a8ced",null);s.default=o.exports},rd5Q:function(t,s){}});