# apply,call,bind

## this的指向

在 ES5 中，其实 this 的指向，始终坚持一个原理：**this 永远指向最后调用它的那个对象**

```js
// 默认绑定
function fn() {
	console.log(this);
}
fn()
// 直接调用函数时。默认情况下，非严格模式下，this是指向windows对象。在严格模式下，this是指向undefined
```

```js
// 隐式绑定
function fn() {
  console.log(this.name);
}
const a = {
  name: 'chenchen',
};
const b = {
  name: 'xqx',
};
// 给a,b对象添加函数属性a.f,b.f
a.f = fn;
b.f = fn;
a.f(); // 这里是调用对象a下的f方法，所以this是指向对象a,是打印对象a的name
b.f(); // 同理这里是打印对象b的name

```

## 改变this指向

有时我们需要显示的绑定this指向，要如何处理呢。

我们就可以使用apply, call, bind方法改变 this 的指向的。同样的我们看个例子

```js
// fun.call(thisArg, param1, param2, ...)
// fun.apply(thisArg, [param1,param2,...])
var obj1 = {
  name: 'sven',
};
var obj2 = {
  name: 'anne',
};
var getName = function () {
  console.log(this.name);
};
getName.call(obj1); // 输出: sven
getName.apply(obj2); // 输出: anne
// call和apply在效果上没有区别，都是绑定this指向的时同时执行函数
// 他们的区别在于传参数
var sayHi = function (n1, n2) {
  console.log(`n1:${n1}, n2:${n2}, name:${this.name}`);
};
sayHi.call(obj1, 'number1', 'number2'); // 参数直接传递
sayHi.apply(obj1, ['number1', 'number2']); // 参数包裹在一个数组里面传递
```

bind的使用和call,apply不太一样，我们直接看例子

```js
var obj1 = {
  name: 'sven',
};
var obj2 = {
  name: 'anne',
};
var getName = function () {
  console.log(this.name);
};
const newGetName1 = getName.bind(obj1); // 返回一个绑定好this的新函数newGetName1
const newGetName2 = getName.bind(obj2); // 返回一个绑定好this的新函数newGetName2
// 之后我们再调用这些绑定好this的函数，就不用怕this指向丢失或者改变了
newGetName1(); // sven
newGetName2(); // anne

```

## this绑定应用

```js
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Hello, undefined!
// 为什么输出没有像 `this.firstName` 那样显示 “John”，而显示了 `undefined`！
// 为什么函数的this会丢失呢？
```

浏览器中的 `setTimeout` 方法有些特殊：它为函数调用设定了 `this=window`对象。所以对于 `this.firstName`，它其实试图获取的是 `window.firstName`，这个变量并不存在。在其他类似的情况下，通常 `this` 会变为 `undefined`。

即传入给定时器的函数的this指向会被设定为`this = window`

下面我们来解决这个问题

```js
let user = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};
let fn = user.sayHi;
let newFn = fn.bind(user);
setTimeout(user.sayHi.bind(user), 1000); // Hello, John!
// 这里我们进行了强制绑定，所以传入的函数this始终指向user
```

## 练习

```js
// 1. 自己写个例子，体会apply,call使用和传参区别
let obj1 = {
    id:123
}
let obj2 = {
    id:456
}
let getId = function(a,b){
    console.log(`a:${a},b:${b},${this.name}`)
}
getId.apply(obj1,["a","b"])
getId.call(obj2,"a","b")
let id1 = getId.bind(obj1);
let id2 = getId.bind(obj2);
id1(1, 2)

// 2. 写个例子，体会bind 和 apply,call区别

// 3. 利用bind，解决定时器的this丢失问题
let obj = {
    name:"c"
    say(){
        console.log(this.name)
    }
}
setTimeout(user.say.bind(user),0)
```

