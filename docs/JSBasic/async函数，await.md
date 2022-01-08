### async

`async`表示函数里有异步操作，`await`表示紧跟在后面的表达式需要等待结果。

进一步说，`async`函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而`await`命令就是内部`then`命令

```js
//`async`函数的返回值是 Promise 对象,可调用then
//下面这个函数返回一个结果为 1 的 resolved promise
async function f() {
  return 1
}
//then的第一个参数接收resolve的结果
f().then(result => console.log(result))

```

### await（必须在async函数中用）

`await` 实际上会暂停函数的执行，直到 promise 状态变为 settled，然后以 promise 的结果继续执行。这个行为不会耗费任何 CPU 资源，因为 JavaScript 引擎可以同时处理其他任务：执行其他脚本，处理事件等。

```js
//一秒后输出‘done
async function f(){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>reslove('done'),1000)
    })
    //等待，直到promise完成并返回结果
    let result = await promise
    console.log(result)
}
f()
```

### try...catch捕捉error

promise 可能需要一点时间后才 reject。在这种情况下，在 `await` 抛出（throw）一个 error 之前会有一个延时。

用 `try..catch` 来捕获上面提到的那个 error，无延时，与常规的 `throw`一样 

```js
async function f() {
//try可以包装多行await代码
  try {
    let response = await fetch('/no-user-here');
    let user = await response.json();
  } catch(err) {
    // 捕获到 fetch 和 response.json 中的错误
    alert(err);//Failed to fetch
  }
}
f();
```



