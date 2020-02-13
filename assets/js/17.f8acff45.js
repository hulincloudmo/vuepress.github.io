(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{325:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js的垃圾回收机制与闭包的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js的垃圾回收机制与闭包的使用","aria-hidden":"true"}},[t._v("#")]),t._v(" JS的垃圾回收机制与闭包的使用")]),t._v(" "),a("h2",{attrs:{id:"js是如何判断一个变量是没有必要的？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js是如何判断一个变量是没有必要的？","aria-hidden":"true"}},[t._v("#")]),t._v(" js是如何判断一个变量是没有必要的？")]),t._v(" "),a("p",[t._v("垃圾回收，也就是将没有必要的变量清理出内存中，在js中，会进行下面两种方式判断一个变量是不需要的")]),t._v(" "),a("ul",[a("li",[t._v("如果变量是全局变量，那么变量不会被销毁")]),t._v(" "),a("li",[t._v("如果是在函数中定义的变量，在函数结束后不管是全局变量（var）还是局部变量（let）都会进行销毁")])]),t._v(" "),a("h2",{attrs:{id:"我就是想保存函数中的变量怎么办？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我就是想保存函数中的变量怎么办？","aria-hidden":"true"}},[t._v("#")]),t._v(" 我就是想保存函数中的变量怎么办？")]),t._v(" "),a("p",[t._v("在javascript中，由于没有类的概念，当我们想保证一个变量，他只能通过自己定义的方法去修改他的属性值时就遇到了困难，其实这时候，我们就可以使用闭包，让js引擎不再清除我们的变量")]),t._v(" "),a("ul",[a("li",[t._v("规则：如果一个函数被外部变量所引用时，js将不会清除函数中的变量")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])])]),a("p",[t._v("这里的b变量虽然是函数变量，但是她被d所间接引用，所以就构成了一个闭包，那么只要d变量没有销毁，b变量就会保存")])])}),[],!1,null,null,null);s.default=r.exports}}]);