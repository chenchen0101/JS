# 你有什么办法可以改变 this 指向？(call, apply, bind)

## 你能手写一个 bind 吗？

```javascript
Function.protoype.myBind = function (context, args) {
  let that = this; // 这里的 this 指向函数本身
  return function () {
    // 通过原来的 this 指向调用函数，并使用 apply 改变原来函数执行时的 this 指向
    return that.apply(context, ...args);
  };
};
```
