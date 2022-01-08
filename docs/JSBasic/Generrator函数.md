Generator 函数与常规函数的行为不同。在此类函数被调用时，它不会运行其代码。而是返回一个被称为 “generator object” 的特殊对象，来管理执行流程。

### Generator 函数的语法

```js
//Generator 函数的特定写法
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" 创建了一个 "generator object"
let generator = generateSequence();
alert(generator); // [object Generator]
```

以上代码函数体里的内容还未开始执行

### 调用next()方法运行函数体

```js
function* generateSequence() {
  yield 1;
  yield 2;
  console.log(3);
  return 3
}
let generator = generateSequence()
//调用一次next执行一行代码
//next返回一个对象{"value":yield值,"done":true/false}
//done代表代码的执行状态(完成or未完成)
let one = generator.next()
let two = generator.next()
let three = generator.next()
console.log(JSON.stringify(one));//{"value":1,"done":false}
console.log(JSON.stringify(two));//{"value":2,"done":false}
console.log(JSON.stringify(three));//3 {"value":3,"done":true}

```

```js
function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;//注意这里如果是return会忽略，所以写成yield
}

let sequence = [0, ...generateSequence()];

alert(sequence); // 0, 1, 2, 3
```

