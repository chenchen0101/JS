flex-grow:在相同的容器中，项目相对于其他项目的放大比例

```css
默认值：0（有剩余空间不放大）
让第二个弹性项目的宽度成为其余弹性项目的三倍
div:nth-of-type(1) {flex-grow: 1;}
div:nth-of-type(2) {flex-grow: 3;}
div:nth-of-type(3) {flex-grow: 1;}
```

flex-shrink:在相同的容器中，项目相对于其他项目的缩小比列(它不关心内容, 只是把空间等比收缩和放大)

```css
默认值：1（空间不足会缩小）
使第二个弹性项目相比其余项目收缩三倍：
div:nth-of-type(2) {
  flex-shrink: 3;
}
```

flex-basis:弹性项目的初始长度

```css
默认值：auto（根据自己的内容撑开）
固定值：number（rem/px或%）2px\2%

```

### flex:1; === flex:1 1 0px/0%;

### 等分项目宽度