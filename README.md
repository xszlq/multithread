# multithread 
前端多线程

## 工程介绍
源码都在src路径下

### src/base
多线程要用到的一些基础技术

#### webworker
一个简单的demo，使用Work，并实现了work线程和UI线程的通信。

### src/webmutilne
web端的多线程，参考小程序设计，Work线程实现Page，包含onShow、onHide、onUnload生命周期钩子、setData方法，事件注册,data属性

### src/vue
ui线程使用vue实现
