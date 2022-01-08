```js
function foo() {
  setTimeout(function () {
    console.log(this);
  }, 100);
}
//普通函数作为参数传递给setTimeOut，0.1s后由setTimeOut执行，所以普通函数的this指向参照setTimeout的调用机制
//由于setTimeOut调用时内部是一个回调函数，它的this指向 全局/undefined
//在setTimeOut里传入的参数就是这个回调函数，
var id = 21;

foo.call({ id: 42 });

//setTimeOut调用机制
function mysettimeout(callback, ms) {
  callback();
}
```

