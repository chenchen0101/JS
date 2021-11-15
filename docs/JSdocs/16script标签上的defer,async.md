# script标签上的defer,async

首先我们需要了解一个概念

**当浏览器加载 HTML 时遇到 `<script>...</script>` 标签，浏览器就不能继续构建 DOM。它必须立刻执行此脚本。**

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Document</title>
</head>

<body>
  <p>...content before script...</p>

  <!-- html遇见script标签不会继续构建DOM Tree,而是会转去执行js脚本 -->
  <script>
    // 做一些很耗时的计算，
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
      sum += i;
    }
    console.log(sum);
  </script>


  <!-- 等script内的js脚本执行完毕才会继续构建DOM Tree -->
  <p>...content after script...</p>
</body>

</html>
```

但浏览器为什么要一定要等待js脚本执行完毕呢 

​	因为接下来的 JavaScript 可能要修改当前已经生成的 DOM 结构，这时候 HTML 解析器就需要暂停工作。若等待DOM Tree构建完再执行JS脚本，JS脚本再去改变之前构建好的DOM 结构，有可能在之前构建的Dom结构全部白白构建。

所以避免阻塞Dom的解析，我们一般会把script标签放在页面底部。此时，它可以访问到它上面的元素，并且不会阻塞页面显示内容。

```html
<body>
  ...all content is above the script...

</body>
<script src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script>
<!-- 把script脚本放在底部，若是网络请求很大的js脚本，会需要等待DomTree就解析的差不多了，才会开始下载js脚本 -->
```

但是这种解决方案远非完美。若把script标签放在底部，浏览器只有前面内容都解析完成后，直到解析script脚本时才会去下载脚本。

幸运的是，这里有两个 `<script>` 特性可以为我们解决这个问题：`defer` 和 `async`。

## defer

`defer` 特性告诉浏览器不要等待脚本。相反，浏览器将继续处理 HTML，构建 DOM。脚本会“在后台”下载，然后等 DOM 构建完成后，脚本才会执行。

换句话说：

- 具有 `defer` 特性的脚本不会阻塞页面。
- 具有 `defer` 特性的脚本总是要等到 DOM 解析完毕，

```html
<p>...content before scripts...</p>

<script defer src="https://javascript.info/article/script-async-defer/long.js?speed=1"></script> 
<!-- 不会阻塞Dom的解析，但会在后台下载。但Dom解析完成，下载好的JS才会执行 -->

<p>...content after scripts...</p>
```

**具有 `defer` 特性的脚本保持其相对顺序，就像常规脚本一样。**

假设，我们有两个具有 `defer` 特性的脚本：`long.js` 在前，`small.js` 在后。

```html
<script defer src="https://javascript.info/article/script-async-defer/long.js"></script>
<script defer src="https://javascript.info/article/script-async-defer/small.js"></script>
```

浏览器扫描页面寻找脚本，然后并行下载它们，以提高性能。因此，在上面的示例中，两个脚本是并行下载的。哪怕`small.js` 可能会先下载完成。也会等待long下载完毕之后按顺序执行。

## async

`async` 特性与 `defer` 有些类似。它也能够让脚本不阻塞页面。但是，在行为上二者有着重要的区别。

当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析，

## 额外阅读

[图解 script 标签中的 async 和 defer 属性 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/292953374)

