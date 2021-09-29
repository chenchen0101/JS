## JS 基础知识

- [ ] 在HTML中，script 标签有几种使用脚本的方式？ 

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

- [ ] JS数据类型有哪些。typeof 运算符是如何使用的。

```markdown
- 8种数据类型，共分为两类
1. 基本数据类型：undefined、Boolean、String、BigInt、Symbol、Number、null
2. 复杂数据类型:Object
```

```js
//作为运算符：typeof x
typeof undefined  //"undefined"
typeof 0	//"Number"
typeof true	//"Boolean"
typeof 10n	//"BigInt"
typeof "foo"//"String"
typeof Symbol("id")//"symbol"
//作为函数形式typeof(x)
typeof Math	//"object"
typeof null	//"object"
typeof alert//"function"
```

- [ ] JS中如何进行类型的强制转化

```markdown
- 字符串类型转换String(value)
- 数字类型转换Number(value)
```

- [ ] ==（非严格比较） 和 ===(严格比较)的本质区别是什么？

```markdown
- 非严格比较(==):比较时先转换数据类型再比较
- 严格比较(===):在比较时不会做任何的数据类型转换
```



## JS 函数基础

## 

- [ ] 什么是函数表达式？ 什么是函数声明？ 

  ```js
  //函数声明
  function sayHi(){ 
      alert("hi");
  }//参数被复制到函数的局部变量
  //函数可由内到外访问变量
  //函数可以返回值，若无，则返回undefined
  ```

  ```js
  //函数表达式()
  const sayHi = function(){
      alert("hi");
  };
  ```

  

- [x] 它们之间的区别是什么？

  ```
  语法区别：
  
  ```

- [ ] 箭头函数基础

了解这段话，并学会使用箭头函数表达式语法。

> 对于一行代码的函数来说，箭头函数是相当方便的。它具体有两种：
>
> 1. 不带花括号：`(...args) => expression` — 右侧是一个表达式：函数计算表达式并返回其结果。
> 2. 带花括号：`(...args) => { body }` — 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。
