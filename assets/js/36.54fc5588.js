(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{349:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"视图对象和模型对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视图对象和模型对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 视图对象和模型对象")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("ul",[s("li",[t._v("视图对象")])]),t._v(" "),s("p",[t._v("是指从页面中触发事件所返回的对象，如点击后返回一个渲染对象")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item in obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("click(item)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这里的item就是一个视图对象")]),t._v(" "),s("ul",[s("li",[t._v("模型对象")])]),t._v(" "),s("p",[t._v("js中定义的一般对象")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区别","aria-hidden":"true"}},[t._v("#")]),t._v(" 区别")]),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",[t._v("视图对象是从js引擎中返回的，这个对象往往不会携带对象的方法，只会携带对象的属性！！")])]),t._v(" "),s("p",[t._v("下面我们看一个示例，打印同一个对象，一个是传到视图层后再返回到逻辑层，一个是直接打印逻辑层，也就是视图对象与模型对象，我们来对比一下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://api.hulincloud.cn/vuepress/viewOrObject.jpg",alt:"image text"}})]),t._v(" "),s("p",[t._v("上图中的96行所打出的就是"),s("strong",[t._v("视图对象")]),t._v("，而102行打出的则是"),s("strong",[t._v("模型对象")])]),t._v(" "),s("p",[t._v("图中可以看出，模型对象中多了很多奇奇怪怪的东西，但是就是没有我们想要的在模型中定义的方法，"),s("strong",[t._v("getCellCode()")]),t._v("\n所以，我们如果需要用到模型返回的对象中的方法时，要么提前保存了这个对象，要么在使用时，需要"),s("strong",[t._v("重新new")]),t._v("这个对象，来获得对象的方法")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cell\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" judger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("judger\n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解决模型返回的数据不带方法的问题")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" cell "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Cell")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);