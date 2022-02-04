# 能说说let、var、const 的区别吗？

let和const是ES6新增的命令

从以下五点分析他们的区别

###### 变量提升：

var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined。

let和const声明的变量不存在变量提升，他们声明的变量一定要在声明后使用，否则会报错。

###### 暂时性死区

var不存在暂时性死区

let和const存在，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

###### 块级作用域

var不存在块级作用域

let和const存在块级作用域

###### 重复声明

var允许重复声明变量

let和const在同一作用域不允许重复声明变量

###### 修改变量的声明

var和let可以

const声明一个只读的变量。一旦声明，常量的值就不能改变

###### 使用：

能用const的情况尽量使用const，其他情况下大多用let，避免使用var

# 你了解变量提升吗？ 变量提升在什么情况下会出现？ 

JS引擎会在正式执行之前先进行一次预编译，在这个过程中，首先将变量声明和函数声明提升至当前作用域的顶端，变量赋值留在原地，再执行。

js的变量声明大体分为三种：var、let和const、函数声明

函数提升：js中创建函数有两种方式，函数声明和函数表达式。只有函数声明才提升

```js

a = 2;
var a;
console.log(a);//2
//var变量提升
var a
a = 2
console.log(a)//2
```



```js
var a = 2
console.log(a)//undefined

//原因：var a = 2是分为两步解析的
var a//变量只提升
console.log(a)
a = 2//赋值位置不变
```



```js
var foo = 3;

function hoistFunction() {
    console.log(foo); // function foo() {}

    foo = 5;
    
    console.log(foo); // 5

    function foo() {}
}

hoistFunction();
console.log(foo);     // 3
```

```js
//预编译hou
var foo = undefined
foo = 3
function hoistFunction() {
    var foo////先函数提升至作用域最顶端
    
    foo = function foo(){}
    
    console.log(foo)//function foo(){}
    
    foo = 5//函数名和变量名相同，赋值给函数
    
    console.log(foo)//5
}
hoistFunction();
console.log(foo);     // 全局变量的提升
```

