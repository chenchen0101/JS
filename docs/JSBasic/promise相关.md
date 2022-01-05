# promise相关

###### 1、基本概念

promise是用来解决异步编程的方法

（1）、语法上：promise是一个构造函数

（2）、功能上：promise封装一个异步操作并返回其结果



### promise链

将result通过.then进行链式传送

promise执行resolve(1),并在0.5秒后返回result1

每个.then里对result的操作都返回一个新的promise，新的promise产生新的结果再传递给下一个.then

```js
let promise = new Promise(resolve => {
  setTimeout(() => resolve(1), 500)
}).then(result1 => {
  console.log(result1);//1
  return new Promise(resolve => {
    setTimeout(() => resolve(result1 * 2), 0)
  })
}).then(result2 => {
  console.log(result2);//2
  return result2 * 2
}).then(result3 => {
  console.log(result3);//4
})
```

