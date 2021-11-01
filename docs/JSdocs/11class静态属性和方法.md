# class静态属性和方法

## class静态属性

我们可以把属性直接定义在`class`本身上，这叫做class的静态属性。

```js
class Foo {
}
Foo.prop = 1;
Foo.prop // 1
// 但是一般我们不这样写。
// 我们通过class的语法，定义静态属性，看下面的例子
class Foo {
  static prop = 1; // 静态属性，这个属性是放在类本身上的
  name = 'foo'; // 实例属性，这个属性是放在由类实例化出来的对象上的
}
const f = new Foo();
// 静态属性，直接从类名上取出来
console.log(Foo.prop); // 1

// 实例属性，是从实例对象上取出来的
console.log(f.name); // foo

```



## class静态方法

静态方法的语法跟静态属性的语法类似，是在属性方法前面加上`static`关键词来定义的。

```js
class Foo {
  // 实例方法，是挂载实例对象上
  sayHi() {
    console.log('Hi');
  }
  // 静态方法，是挂载到类上的
  static sayHello() {
    console.log('Hello');
  }
}
const f = new Foo();
f.sayHi(); // Hi
Foo.sayHello(); // Hello

```

**注意：由于静态方法是挂载class上的方法，所以它的`this`指向的是class本身**

```js
class Foo {
  static bar() {
    // 这里的this指向的是 class Foo，而不是由实例对象
    // 所以可以调用Foo上的baz方法
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
}
Foo.bar(); // hello
```

上面代码中，静态方法`bar`调用了`this.baz`，这里的`this`指的是`Foo`类，而不是`Foo`的实例，等同于调用`Foo.baz`。

## 练习

```js
// 1. 实现一个类，同时拥有静态属性，静态方法，实例属性，实例方法。体会他们之间的区别。
```

