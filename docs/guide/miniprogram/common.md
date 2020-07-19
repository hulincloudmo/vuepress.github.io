--- 
title: 小程序开发中遇到的问题
date: 2019-12-28
categories: 
 - 小程序
tags: 
 - 小知识
---

## css
小程序的wxss编译出来是js，而不是css，所以存在着一些限制

1. 小程序中背景图片不能使用网络图片，只能使用本地或者转base64
2. 全局样式类不能在组件中使用!!!全局样式类不能在组件中使用!!!全局样式类不能在组件中使用!!!
3. 外部样式类要加!important


## js

1. 在page对象外的代码在小程序初始化的时候就会运行，不管是否初始化该界面
2. 在app.onLaunch, app.onShow, page.onLoad, page.onShow, page.onReady这些生命周期函数中尽量不要使用带Sync的同步函数，容易造成进程堵塞

## 云开发

1. 解决云函数50个的限制，使用`tcb-Router`

## 杂

1. 小程序的唯一js环境

微信小程序在初始化的时候，会把所有的页面代码初始化，即使你可能并没有使用到某些界面。所以在页面使用的定时器如果不主动清除，会被带到下一个界面，造成性能隐患。

2. 页面跳转优先采用navigator组件，有利于SEO




