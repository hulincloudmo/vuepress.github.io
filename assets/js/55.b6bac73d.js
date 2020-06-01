(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{368:function(t,v,_){"use strict";_.r(v);var e=_(0),i=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("p",[t._v("2 月份发布的 Chrome 80 版本中默认屏蔽了第三方的 Cookie,我们知道，Cookie是为了解决Http无状态的问题而产生的。\n")]),t._v(" "),_("h2",{attrs:{id:"什么是http"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是http"}},[t._v("#")]),t._v(" 什么是Http")]),t._v(" "),_("p",[t._v("一般我们都会说 “HTTP 是一个无状态的协议”，不过要注意这里的 HTTP 其实是指 HTTP 1.x，而所谓无状态协议，简单的理解就是即使同一个客户端连续两次发送请求给服务器，服务器也识别不出这是同一个客户端发送的请求，这导致的问题就比如你加了一个商品到购物车中，但因为识别不出是同一个客户端，你刷新下页面就没有了……")]),t._v(" "),_("h3",{attrs:{id:"http1-x？http2？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http1-x？http2？"}},[t._v("#")]),t._v(" Http1.x？Http2？")]),t._v(" "),_("p",[t._v("Http1.x是1999年推出的http协议，是目前使用最广泛的http协议，Http2在Http1.x的基础上实现了多路复用技术，一个连接中能够荷载多个多个请求，接收方再根据请求的ID将连接中的请求再次分离")]),t._v(" "),_("h2",{attrs:{id:"cookie介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie介绍"}},[t._v("#")]),t._v(" Cookie介绍")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",[t._v("Cookie（复数形态Cookies），类型为「小型文本文件」，指某些网站为了辨别用户身份而储存在用户本地终端上的数据。")])]),t._v(" "),_("p",[t._v("作为一段一般不超过 4KB 的小型文本数据，它由一个名称（Name）、一个值（Value）和其它几个用于控制 Cookie 有效期、安全性、使用范围的可选属性组成，这些涉及的属性我们会在后面会介绍。")]),t._v(" "),_("h3",{attrs:{id:"设置cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#设置cookie"}},[t._v("#")]),t._v(" 设置Cookie")]),t._v(" "),_("ol",[_("li",[t._v("客户端发送 HTTP 请求到服务器")]),t._v(" "),_("li",[t._v("当服务器收到 HTTP 请求时，在响应头里面添加一个 Set-Cookie 字段")]),t._v(" "),_("li",[t._v("浏览器收到响应后保存下 Cookie")]),t._v(" "),_("li",[t._v("之后对该服务器每一次请求中都通过 Cookie 字段将 Cookie 信息发送给服务器。")])]),t._v(" "),_("h3",{attrs:{id:"热议的samesite属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#热议的samesite属性"}},[t._v("#")]),t._v(" 热议的SameSite属性")]),t._v(" "),_("p",[t._v("SameSite 可以有下面三种值：")]),t._v(" "),_("ol",[_("li",[t._v("Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。")]),t._v(" "),_("li",[t._v("Lax 允许部分第三方请求携带 Cookie")]),t._v(" "),_("li",[t._v("None 无论是否跨站都会发送 Cookie")])]),t._v(" "),_("p",[t._v("之前默认是 None 的，Chrome80 后默认是 Lax。")]),t._v(" "),_("h3",{attrs:{id:"在浏览器中输入url到页面渲染的整个过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在浏览器中输入url到页面渲染的整个过程"}},[t._v("#")]),t._v(" *** 在浏览器中输入URL到页面渲染的整个过程")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("构建请求 => 是get还是post？是Http1.0还是1.1? 请求路径？参数")])]),t._v(" "),_("li",[_("p",[t._v("检查系统DNS => 是否有该请求的IP地址缓存？ 是否有在系统配置文件中配置解析地址？如果有直接获得，没有向服务商查询")])]),t._v(" "),_("li",[_("p",[t._v("建立TCP连接 => 三次TCP握手")])]),t._v(" "),_("li",[_("p",[t._v("判断请求是否是Https 如果是，进行LTS解析密钥，如果不是，请求Http")])]),t._v(" "),_("li",[_("p",[t._v("得到浏览器响应，判断请求是否成功（状态码）")])]),t._v(" "),_("li",[_("p",[t._v("如果是页面，浏览器将开始解析页面")])])]),t._v(" "),_("p",[t._v("6.1 浏览器")]),t._v(" "),_("p",[t._v("① 解析得到的HTML，获取语法，异步Script请求，获取CSS样式,构建DOM节点")]),t._v(" "),_("p",[t._v("② 回流：计算每个DOM元素的位置和节点，几何信息，遍历DOM树")]),t._v(" "),_("p",[t._v("③ 重绘：根据回流计算的结果，计算出元素在当前屏幕分辨率下的真实物理像素")]),t._v(" "),_("p",[t._v("④ 绘制： 将数据发送给GPU处理，最终得到页面")]),t._v(" "),_("ol",{attrs:{start:"7"}},[_("li",[t._v("断开TCP连接 => 四次TCP捂手")])]),t._v(" "),_("h2",{attrs:{id:"回流与重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘"}},[t._v("#")]),t._v(" 回流与重绘")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",[t._v("回流一定会触发重绘，而重绘不一定会回流")])]),t._v(" "),_("h3",{attrs:{id:"回流与重绘何时会触发？"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘何时会触发？"}},[t._v("#")]),t._v(" 回流与重绘何时会触发？")]),t._v(" "),_("p",[t._v("回流："),_("strong",[t._v("当页面布局和几何信息发生变化的时候")])]),t._v(" "),_("p",[t._v("例如：")]),t._v(" "),_("ul",[_("li",[t._v("页面一开始渲染的时候")]),t._v(" "),_("li",[t._v("浏览器的窗口尺寸变化 （因为回流是根据视口的大小来计算元素的位置和大小的）")]),t._v(" "),_("li",[t._v("添加或删除可见的DOM元素")]),t._v(" "),_("li",[t._v("元素的位置发生变化")]),t._v(" "),_("li",[t._v("元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）")]),t._v(" "),_("li",[t._v("内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代")])]),t._v(" "),_("p",[t._v("重绘："),_("strong",[t._v("改变某个元素的背景色、文字颜色、边框颜色等等不影响它周围或内部布局的属性时，屏幕的一部分要重画，")]),t._v(" "),_("span",{staticStyle:{color:"red"}},[t._v("但是元素的几何尺寸没有变")])]),t._v(" "),_("h3",{attrs:{id:"真实场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#真实场景"}},[t._v("#")]),t._v(" 真实场景")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",[t._v("获取这些布局信息的属性的时候会触发强制回流重绘")]),t._v(" "),_("ul",[_("li",[t._v("offsetTop、offsetLeft、offsetWidth、offsetHeight")]),t._v(" "),_("li",[t._v("scrollTop、scrollLeft、scrollWidth、scrollHeight")]),t._v(" "),_("li",[t._v("clientTop、clientLeft、clientWidth、clientHeight")]),t._v(" "),_("li",[t._v("getComputedStyle()")]),t._v(" "),_("li",[t._v("getBoundingClientRect")])]),t._v(" "),_("p",[t._v("以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，最好避免使用上面列出的属性，他们都会刷新渲染队列。如果要使用它们，最好将值缓存起来。")])]),t._v(" "),_("h3",{attrs:{id:"如何减少回流和重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何减少回流和重绘"}},[t._v("#")]),t._v(" 如何减少回流和重绘")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("对于复杂动画效果,使用绝对定位让其脱离文档流")])]),t._v(" "),_("li",[_("p",[t._v("css3硬件加速（GPU加速）")])])]),t._v(" "),_("p",[t._v("使用css3硬件加速，可以让transform、opacity、filters、Will-change这些动画不会引起回流重绘")])])}),[],!1,null,null,null);v.default=i.exports}}]);