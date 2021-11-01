# Class继承

## 了解继承基本语法

Class 可以通过`extends`关键字清晰和方便的实现继承。

```js
class Point {
}
// ColorPoint 就继承了 Point
class ColorPoint extends Point {
}
```

****

我们再看一个复杂的例子

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}
let rabbit = new Rabbit('White Rabbit');
console.log(rabbit); // Rabbit { speed: 0, name: 'White Rabbit' }
// 这样就轻松的实现了类 Rabbit 继承 Animal
```

他们的之间的关系如下图

![截屏2021-11-02 上午1.41.24](12class%E7%9A%84%E7%BB%A7%E6%89%BF.assets/%E6%88%AA%E5%B1%8F2021-11-02%20%E4%B8%8A%E5%8D%881.41.24.png)

要查找 `rabbit.run` 方法，JS内部会这样查找

1. 查找对象 `rabbit`（没有 `run`）。
2. 查找它的原型，即 `Rabbit.prototype`（有 `hide`，但没有 `run`）。
3. 查找它的原型，即（由于 `extends`）`Animal.prototype`，在这儿找到了 `run` 方法。

## 重写方法

"**由于原型链的出现，若有同名方法，我们会执行子类的同名方法。**", 下面我们看个例子就能理解这句话了

```js
class Person {
  sayHi() {
    console.log('person sayHi');
  }
}
class Student extends Person {
  sayHi() {
    console.log('stduent sayHi');
  }
}
const s = new Student();
s.sayHi(); // stduent sayHi
// 由于子类和父类拥有同名的方法，子类的方法会被优先找到，优先进行执行。
```

有时我们不想全部覆盖父类的方法，我们只想在父类的方法上进行扩展怎么办呢？我们就需要用到`super`关键词

`super`这个关键字，在类中可以当作对象使用。我们了解下它被当作对象使用是什么情况。

```js
class Person {
  sayHi() {
    console.log('person sayHi');
  }
}
class Student extends Person {
  sayHi() {
    // super 指向父类的原型对象。 即 Person.prototype
    // 所以可以直接调用存在于 Person.prototype中的 sayHi 方法
    super.sayHi();
    console.log('stduent sayHi');
  }
}
const s = new Student();
s.sayHi();
// person sayHi
// stduent sayHi
```

**“这里需要注意，由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过`super`调用的。”**

为了理解这句话，我们来看下面的例子

```js
class A {
  a = 2;
}
class B extends A {
  printf() {
    // super 为 A.prototype
    console.log(super.a);
  }
}
const b = new B();
console.log(b); // B { a: 2 }
b.printf(); // undefined
// 这是为什么呢？
// 因为 a 为实例属性，是直接放在实例对象内部的，
// 而 super 是 A.prototype 这个对象，

```

****

`super`这个关键词除了，在类中可以当作对象使用，还可以作为函数调用。而作为函数调用的时候，实际上是代表父类的构造函数。

```js
class A {
  constructor() {
    console.log('inner A constructor');
  }
}
class B extends A {
  constructor() {
    // 实际上是调用了A的构造函数。
    super();
  }
}
const b = new B(); // inner A constructor
// 由于构造函数会在new出对象的时候自动执行。所以会打印 'inner A constructor'
```

****

更多例子

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
class ColorPoint extends Point {
  constructor(x, y, color) {
    // super 它在这里表示父类的构造函数，
    /*
      即等价于调用Point中的
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
      我们可以给他传递参数。
    */
    super(x, y); // 必须放在最前面，保证父类的构造函数执行完毕
    this.color = color;
  }
}
const c = new ColorPoint(1, 2, 'red');
console.log(c); // ColorPoint { x: 1, y: 2, color: 'red' }

//需要注意的是： 子类必须在constructor方法中调用super方法，否则新建实例时会报错。

```

****

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name); // 执行父类Animal的构造函数，把参数name传递过去
    this.earLength = earLength;
  }
}

let rabbit = new Rabbit('White Rabbit', 10);
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10
```

## 练习

```js
// 1. 使用class继承实现Person,Student;

// 2. 学会如何使用super关键词重写父类的方法
```

