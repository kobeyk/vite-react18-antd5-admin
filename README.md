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
* CSS position定位
```
CSS 中的 position 属性用来设置元素在页面中的位置，通过该属性您可以把任何属性放置在任何您认为合适的位置。position 属性有 5 个可选值，分别对应 5 种不同的定位方式：
（1）static：默认值，静态定位，表示没有定位，元素会按照正常的位置显示，此时 top、bottom、left 和 right 4 个定位属性也不会被应用。
（2）relative：相对定位，即相对于元素的正常位置进行定位，您可以通过 top、right、bottom、left 这 4 个属性来设置元素相对于正常位置的偏移量，在此过程中不会对其它元素造成影响。
（3）absolute：绝对定位，相对于第一个非 static 定位的父级元素进行定位，可以通过 top、right、bottom、left 这 4 个属性来设置元素相对于父级元素位置的偏移量。如果没有满足条件的父级元素，则会相对于浏览器窗口来进行定位。使用绝对定位的元素不会对其它元素造成影响。（使用绝对定位的元素会脱离原来的位置，不再占用网页上的空间。与相对定位相同，使用绝对定位的元素同样会与页面中的其它元素发声重叠，另外使用绝对定位的元素可以有外边距，并且外边距不会与其它元素的外边距发生重叠。）
（4）fixed：固定定位，相对于浏览器的创建进行定位，可以使用 top、right、bottom、left 这 4 个属性来定义元素相对于浏览器窗口的位置。使用固定定位的元素无论如何滚动浏览器窗口元素的位置都是固定不变的（固定定位就是将元素相对于浏览器窗口进行定位，使用固定定位的元素不会因为浏览器窗口的滚动而移动，就像是固定在了页面上一样，我们经常在网页上看到的返回顶部按钮就是使用固定定位实现的。）。
（5）sticky：粘性定位，它是 relative 和 fixed 的结合体，能够实线类似吸附的效果，当滚动页面时它的效果与 relative 相同，当要滚动到屏幕之外时则会自动变成 fixed 的效果。
```