**BFC你有了解过吗，你能大概说说吗？**

BFC是一个独立的容器，里面的元素不会在布局上影响外面的元素

#### 布局规则

浏览器的规则。默认body内的元素margin重叠

1、内部的box会在垂直方向，一个接一个的放置

2、box垂直方向的距离由margin决定。属于同一个BFC的两个相邻box的margin会发生重叠

#### 触发条件

以下任意一个CSS属性都可触发BFC布局

###### 	body根元素

######     浮动元素：float不为none 

###### 	定位元素position:不是static或relative

- overflow: hidden / auto / scroll
- position: absolute/ fixed
- display: table-cells/  inline-block /flex

#### 解决问题

1、子元素使用float布局时，会使父元素的高度塌陷：在父元素内部触发	BFC（overflow: hidden），清除浮动。使父元素高度不再塌陷

2、解决margin边距重叠（将任意一个子元素放在一个BFC中，比如在外层包裹一个块级标签<p></p>）

3、防止元素被浮动元素覆盖（在非浮动元素中加在非浮动元素中加overflow：hidden，可实现两栏布局）