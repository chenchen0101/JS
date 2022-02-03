# BFC你有了解过吗，你能大概说说吗？

## BFC是什么

> BFC是block Formatting Context, 即块级格式上下文。它是HTML中一块独立的渲染区域，在他内部的子元素布局不用影响外部元素。
> 
> 我们可以利用 BFC 避免盒子 Marin 重叠，清除浮动等。

BFC有以下几个特点：

1. 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，
2. 计算BFC的高度时，浮动子元素也参与计算
3. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。

## 怎么样才能创建 BFC

1. HTML中的Body元素就是一个独立的BFC
2. 盒子的overflow是 `auto`, `flow`, `hidden`等值
3. 盒子的position是 `absolute`, `fixed` 值
4. 盒子的display是 `inline-block`, `flex`, `grid`等值

## 我们可以使用BFC 做什么？？

- 避免盒子 Marin 重叠

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      div {
        width: 100px;
        height: 100px;
        margin: 20px;
        background-color: aqua;
      }
      .box {
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div class="box">盒子1 生成了一个独立的div BFC中</div>
    <div>盒子2 存在于Body BFC中</div>
    <p>
      盒子1 和 盒子2 是存在于不同的BFC，所以盒子1 和 盒子2 的 marin 不会重叠
    </p>
  </body>
</html>

```


- 清除浮动带来计算高度的影响
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      .box {
        border: 5px solid red;
      }
      .inner {
        background-color: aqua;
        width: 100px;
        height: 200px;
        float: left;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="inner">
        计算BFC的高度时，浮动子元素也参与计算。那么现在只有一个body BFC.
        所以只用 body 的高度被撑开了，而div的高度没有被撑开。所以div没有高度
      </div>
    </div>
  </body>
</html>

```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <style>
      .box {
        border: 5px solid red;
        overflow: hidden;
      }
      .inner {
        background-color: aqua;
        width: 100px;
        height: 200px;
        float: left;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="inner">
        现在 div.box 的overflow为：hidden 生成了一个独立的BFC.
        所以浮动元素的高度会被计算进这个盒子。所以 div.box 的高度被 div.inner 撑高了
      </div>
    </div>
  </body>
</html>

```
