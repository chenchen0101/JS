# JavaScript modules 模块

## 概念

在早期，Javascript 程序本来很小，它们大多被用来执行独立的脚本任务。我们一般只用一个独立的文件来加载，因此历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。

而现在前端能做的事情越来越多，js程序变得越来越大。现在最新的浏览器也开始原生支持模块功能了。所以我们需要学习这种模式。

一个模块（module）就是一个文件。一个脚本就是一个模块。

模块可以相互加载，并可以使用特殊的指令 `export` 和 `import` 来交换功能，从另一个模块调用一个模块的函数

```js
// 📁 sayHi.js
// 导出一个函数
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
// 从sayHi.js文件中导入这个函数
import {sayHi} from './sayHi.js';

// 然后才能过执行这个函数
alert(sayHi); // function...
sayHi('John'); // Hello, John!
```



## “常规脚本” 与 “模块”

首先我们需要了解，由于历史原因，过去浏览器加载是以脚本的形式去加载js。现在我们可以加载“模块”，但过去的“常规脚本”已经保存。或者说我们需要一定的条件才能让浏览器开启模块形式

```html
<!DOCTYPE html>
<html lang="en">
<head></head>
<body></body>
<script>
  // "常规脚本"
  let a = 1;
</script>
<script>
  // “常规脚本”
  console.log(a); // 1
</script>
<!--
  由于两个script标签都是常规脚本，所以他们都是在同一个全局作用域下。
  所以哪怕是不同的脚本也可以打印a值
-->
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head></head>
<body></body>
<script type="module">
  // "模块脚本"
  let a = 1;
</script>
<script type="module">
  // “模块脚本”
  console.log(a); // Uncaught ReferenceError: a is not defined
</script>
<!--
  由于两个script标签都是脚本脚本，所以他们有各种的作用域。
  换句话说，一个模块中的作用域内的变量和函数在其他脚本中是不可见的。
  无法直接引用a的值，需要用import / export 语句进行处理才行
-->
</html>
```



模块功能主要由两个命令构成：`export`和`import`

`export`命令用于规定模块的对外接口，`import`命令用于输入其他模块提供的功能。

下面我们就来分别了解下这两个命令

## export命令

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用`export`关键字输出该变量。

```js
// profile.js
export let firstName = 'Michael';
export let lastName = 'Jackson';
export let year = 1958;
```

上面代码是`profile.js`文件，保存了用户信息。ES6 将其视为一个模块，里面用`export`命令对外部输出了三个变量。

除了分别导出，还可以用大括号指定输出的一组变量

```JS
let firstName = 'Michael';
let lastName = 'Jackson';
let year = 1958;
export { firstName, lastName, year };
```

它与前一种写法是等价的，但是应该优先考虑使用这种写法。因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量。

****

我们不仅可以输出变量，我们还可以导出函数，导出类

```js
export function multiply(x, y) { // 导出函数
  return x * y;
}
export class User { // 导出类
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

或者

```js
function multiply(x, y) { // 导出函数
  return x * y;
}
class User { // 导出类
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export {
	multiply,
    User,
}
```

## import命令

使用`export`命令定义了模块的对外接口以后，其他 JS 文件就可以通过`import`命令加载这个模块。

```JS
// main.js
// import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。
// firstName, lastName, year都是profile.js使用export出的变量
import { firstName, lastName, year } from './profile.js';
function setName(element) {
  element.textContent = firstName + ' ' + lastName;
}
```

因为必须与对接接口的名称相同。但有时我们想给输入的变量重新取一个名字怎么处理呢？我们可以用as关键词

```js
// lastName 重新取了一个名字为 surname
import { lastName as surname } from './profile.js';
console.log(surname)
```

## 默认导入导出

todo

## 练习

```js
// 1. 熟悉导入导出语法，如何用导入导出组织代码
```



