webpackJsonp([3],{"4tQK":function(t,e){},fGKr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("ZYmg"),a={data:function(){return{title:"",description:"",content:"",atIndex:""}},methods:{onCreate:function(){var t=this;i.a.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h1",[t._v("编辑文章")]),t._v(" "),n("h3",[t._v("文章标题")]),t._v(" "),n("el-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h3",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6}},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h3",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("p",[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onCreate}},[t._v("确定")])],1)},staticRenderFns:[]};var c=n("VU/8")(a,s,!1,function(t){n("4tQK")},"data-v-5fec72d2",null);e.default=c.exports}});
//# sourceMappingURL=3.f7d2fefb07a96cfe0081.js.map