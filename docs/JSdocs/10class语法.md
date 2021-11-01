# Class语法

在ES6之前我们可以使用构造函数来new出对象，但这个方式还是太过复杂，我们需要指明每个构造函数的`prototype`,需要清楚理清每个对象的`__proto__`。这无疑会消耗开发者的心智，极大的降低开发效率。

所以ES6 提供了更接近传统语言的写法，引入了 Class（类）这个概念，作为对象的模板。

基本上，ES6 的`class`可以看作只是一个构造函数的语法糖，只是新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

我们来看个例子，来了解class语法

```js
class Point {
  // `constructor`称之为构造方法,
  //  构造方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
  constructor(x, y) {
    // 这里 this 指向你所 new 出来的实例对象。
    // 这里的this.x 叫做实例属性
    this.x = x;
    this.y = y;
  }
}
const p = new Point(1, 2);
console.log(p); // Point { x: 1, y: 2 }
```

**一个类必须有`constructor`方法**，怎么理解这句话？

```js
class Point {
  // 这里在class内部没有定义构造方法
  // 如果我们没有显式定义构造方法呢？难道会出错吗？
  // 其实不会，这会等同于下列代码
}

class Point {
  // 实际上js内部会默认添加一个空的构造方法
  // 所以我们就需要理解一个类必须有constructor方法
  constructor() {}
}
```

## 实例属性

实际上，我们除了在构造函数内部给实例赋值属性。我们还可以在这样去定义实例属性

```js
class Cat {
  // 直接是属性名 = 属性值的方式创建实例属性
  // 只不过以这种方式创建实例属性，不能接受构造函数的参数
  type = 'cat';

  constructor(name) {
    this.name = name;
  }
}
// 等同于class定义
class Cat {
  constructor(name) {
    this.name = name;
    this.type = 'cat';
  }
}
const cat = new Cat('chenchen');
console.log(cat); // Cat { type: 'cat', name: 'chenchen' }

```

**这种新写法虽然没办法接受构造函数的参数，但好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。**

```js
class foo {
  bar = 'hello';
  baz = 'world';
  constructor() {
    // ...
  }
}
// 一眼就能看出，foo类有两个实例属性，一目了然。
// 看起来也更加简洁。
```

## 实例方法

如果我们需要定义对象的方法呢，我们一般会这样去定义

```js
class Point {
  // `constructor`称之为构造方法,
  //  构造方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
  constructor(x, y) {
    // 这里 this 指向你所 new 出来的实例对象。
    // 这里的this.x 叫做实例属性
    this.x = x;
    this.y = y;
  }

  // 直接以 method() {} 的形式定义实例方法
  printf() {
    console.log(`point: ${this.x}, ${this.y}`);
  }
}
const p = new Point(1, 2);
p.printf(); // point: 1, 2
console.log(p); // Point { x: 1, y: 2 }
// 但是我们打印对象 p 没有发现 printf 方法
// 这是为什么呢？
// 为了减少内存消耗，我们一般会把方法的定义放在对象原型指向上
// 在这里就指 我们把 printf 方法放在了 Point.protoype 上了
// 所以 p.__proto__ ==> Point.protoype
console.log(p.__proto__);
/*
{
  constructor: class Point
  printf: ƒ printf()
  [[Prototype]]: Object
}
 */

```

## 理解构造函数和class

这里你一定很好奇为什么class会有prototype

因为实际上class就是构造函数的语法糖，他们的本质几乎是一模一样的

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // 实例方法，是被放在类的prototype中的
  printf() {
    console.log(`point: ${this.x}, ${this.y}`);
  }
}
// 等同于
function Point(x, y) {
  this.x = x;
  this.y = y;
  this.say = function() {
      
  }
}
Point.prototype.printf = function () {
  console.log(`point: ${this.x}, ${this.y}`);
};
```

## 理解实例属性和实例方法

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // 实例方法定义方式
  printf() {
    console.log(`point: ${this.x}, ${this.y}`);
  }
  // 实例属性定义方式
  print = function () {
    console.log(`point: ${this.x}, ${this.y}`);
  };
  // 这里 printf 和 print 有什么区别？
  // 虽然他们都是函数，但区别还是比较大的
}
const p = new Point(1, 2);
console.log(p); // Point { print: [Function: print], x: 1, y: 2 }
// 对象 p 是属性有 print, x, y，这三个属性的，却没有printf
// 这里因为 printf 被当作实例方法，是被放在 Point.prototype 中的
// 而 print 是被当作实例属性，是直接被放在对象内部的，即类似于 this.print = function() {}

```

