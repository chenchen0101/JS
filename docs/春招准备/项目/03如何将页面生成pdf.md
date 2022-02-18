## 1. 学习canvas

参考文章：

[五分钟学会 Canvas 基础（一）](https://juejin.cn/post/6972454875477049380)

[canvas - 基础了解](https://juejin.cn/post/7031407945447374861)

[canvas进阶之图像处理基础知识](https://juejin.cn/post/7031964172929892389)

[html2canvas实现浏览器截图的原理](https://juejin.cn/post/6908255717317148685)

首先采用canvas来绘制html：

原理：利用svg中的<foreignObject>元素可以插入html片段的特性，将整个Dom片段转化为svg；然后调用一个方法将svg绘制到canvas上。

但这个方所依赖的svg图像在实现上非常严格，若引入了外部图像就会污染画布。而且生成的canvas画质下降，文字模糊。



综上，我采用html2canvas库来将html页面转化为图片或pdf

1、html2canvas其实是一个函数，页面渲染完之后直接调用。可以只传一个参数，就是你要截图的DOM元素，该函数返回一个promise对象，在它的then方法中可以获取绘制好的canvas对象，通过调用canvas对象的toDataURL方法就可以将其转化为图片。

2、使用 [jsPDF](https://parall.ax/products/jspdf) 来生成 PDF

> jsPDF 是一个使用Javascript语言生成PDF的开源库

jsPDF 通过生成的图片插入到 PDF 中，生成 PDF 。