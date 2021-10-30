# Dom节点类

## 节点属性

- [ ] innerHTML 
- [ ] textHTML

## Dom属性 与 HTML属性是同步的



## 如何修改html 文档

```js
//创建
let div = document.createElement('div')
div.className = "rool";
div.innerHTML = '<p>hello</p>'
//插入
document.body.append(div);
```



## Dom 样式和类

```js
//创建
    let div = document.createElement('div')
    div.className = "rool";
    div.innerHTML = '<p>hello</p>'
    //插入
    document.body.append(div);
//修改样式
    div.style.color = "red";
    div.classList.add("root")
```

