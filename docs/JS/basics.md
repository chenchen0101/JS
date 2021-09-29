---
title: JS 基础知识
---

# JS 基础知识

1. 在 HTML 中，script 标签有几种使用脚本的方式？

```html
<!-- 1. 在 html 内部直接使用 script 脚本 -->
<script>
  const hello = 'hello world';
  // code ...
</script>

<!-- 2. 通过src特性添加到HTML文件中  -->
<script src="./main.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

2. JS 数据类型有哪些。typeof 运算符是如何使用的。

```markdown
- 8 种数据类型，共分为两类

1. 基本数据类型：undefined、Boolean、String、BigInt、Symbol、Number、null
2. 复杂数据类型: Object
```

```js
//作为运算符：typeof x
typeof undefined; //"undefined"
typeof 0; //"Number"
typeof true; //"Boolean"
typeof 10n; //"BigInt"
typeof 'foo'; //"String"
typeof Symbol('id'); //"symbol"
//作为函数形式typeof(x)
typeof Math; //"object"
typeof null; //"object"
typeof alert; //"function"
```

3. JS 中如何进行类型的强制转化

```markdown
- 字符串类型转换 String(value)
- 数字类型转换 Number(value)
```

4. ==（非严格比较） 和 ===(严格比较)的本质区别是什么？

```markdown
- 非严格比较(==):比较时先转换数据类型再比较
- 严格比较(===):在比较时不会做任何的数据类型转换
```
