# 你有什么办法可以改变 this 指向？(call, apply, bind)

## 你能手写一个 bind 吗？

```javascript
function hello(age) {
  console.log(this.name, age);
  return 'hello world';
}
const obj = {
  name: 'xxx',
};
// hello();

// newHello => function
// const newHello = hello.bind(obj);

// newHello();

// => function
Function.prototype.myBind = function (context) {
  let that = this; // 这里的 this 指向函数本身

  return function (...args) {
    // 通过原来的 this 指向调用函数，并使用 apply 改变原来函数执行时的 this 指向
    return that.call(context, ...args);
  };
};

const newHello = hello.myBind(obj);
newHello(123);
```
