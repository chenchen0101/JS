# `setTimeout` 和 `setInterval`

有时我们并不想立即执行一个函数，而是等待特定一段时间之后再执行。我们就可以使用`setTimeout` 和 `setInterval`

- `setTimeout` 设定一个函数推迟到一段时间之后再执行。
- `setInterval` 设定一个函数每隔一段时间重复运行这个函数，

语法: `setTimeout(function, time)` , `setInterval(function, time)`

```js
// setTimeout(func, time, arg1, arg2)

function sayHi() {
  alert('Hello');
}

// sayHi() 方法会在 1 秒后执行：
setTimeout(sayHi, 1000);
```

```js
function sayHi(name, str) {
	console.log(`hello ${name}`)
}
// 如果我们要给函数传参怎么办呢？
// 我们能有两种实现方式,我们来看两个例子
// 1. 使用setTimeout自身的语法
setTimeout(sayHi, 1000, 'chenchen','xxx'); // 这里第三个参数就是传递给sayHi的实参

// 2. 利用函数将调用函数包裹起来
setTimeout(() => sayHi('chenchen'), 1000); // 这里我们传递一个箭头函数，这个箭头函数调用时，会执行sayHi('chenchen')，我们利用这种方式执行我们想要的带有参数的函数。

```



setInterval 的语法跟setTimout基本一致。不同的是，他设定的函数会每隔一段时间就重复运行，即若不清除就会无限的运行下去。

```js
function sayHi(){
    console.log('hi')
}
function sayHello() {
	console.log('hello')
}
setTimeout(sayHi,1000); // 1s之后执行sayHi，该定时器就结束
setInterval(sayHello, 1000); // 每隔1s之后就会执行sayHello,在程序结束之前就会一直执行下去
```

## 如何清除

既然上面我们提到过清除定时器，那么我们就来学习如何清除

还是一样的，我们来看个例子

```js
// 在调用 setTimeout 和 setInterval 都会返回一个`id`值
// 我们可以通过把这个id值，传递给clearTimeout/clearInterval来停止响应的定时器
let timerId1 = setTimeout(() => alert("never happens"), 1000);
clearTimeout(timerId1)
let timerId2 = setInterval(() => alert('tick'), 2000);
clearInterval(timerId2)
```

## 练习

```js
function fn(name,age) {
	console.log(name,age);
}
function fn(name, age) {
    console.log(name, age);
}
// 1. 设定在1s之后执行fn的定时器,并且给fn传递对应的参数
let timerId1 = setTimeout(() => fn("chen", 13), 1000)

// 2. 设定每隔2s重复执行fn的定时器，并在第5s的时候把他清除
let timerId2 = setInterval(() => fn("cc", 40), 2000);
setTimeout(() => { clearInterval(timerId2); }, 5000);

```

