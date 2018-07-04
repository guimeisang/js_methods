### 背景
在单页应用上，前端路由并不陌生。接下来对 react-router 进行分析。


### 实现一个简单的路由机制
- hash实现



### react-router 中 router封装history 模块 和 react-router如何使用；
- 封装history模块的功能，historyModule.updateLocation() -> listener( )；
- Router 通过对其进行包装开发，针对 historyModule 的机制对 Router 也起到了作用，即historyModule.updateLocation() 将触发 Router.listen 中的回调函数；

- 需要声明一个含有 path to component 的各个映射的路由器。触发link组件，通知到映射中进行匹配，并拿到对应component 及 state 进行 render渲染页面
    ```
        <Link to={`/user`}>'GM'</Link>
    ```
- 从点击Link到render对应的component，从顶层组件Router出发，可看到Router在react component 生命周期之组件被挂载前 componentWillMount 中使用 this.history.listen 去注册了 url 更新的回调函数。回调函数将在 url 更新时触发，回调中的 setState 起到 render 了新的 component 的作用。



### 参考文档
- react-router 源码分析
https://github.com/976500133/FETopic/blob/master/interview/react/js-react-router.md#%E5%89%8D%E7%AB%AF%E8%B7%AF%E7%94%B1%E5%AE%9E%E7%8E%B0%E4%B8%8E-react-router-%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90