# vite-react18-antd5-admin

#### 介绍
基于vite脚手架构建的react18+antd5后台管理项目

#### 软件架构
软件架构说明

* antd5.0 启用less，采用css in js，这个本身就具有按需加载
* vite在启动时会做依赖的预构建，运行时默认支队jsx与tsx做语法转换，不会对js做jsx的语法转换
* react-router：为 React 应用提供了路由的核心功能；
* react-router-dom：基于 react-router，加入了在浏览器运行环境下的一些功能。
* axios自从v0.22.0以来，Axios 支持以 fetch API 方式—— AbortController 取消请求

```JavaScript
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
```
