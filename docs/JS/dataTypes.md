---
title: JS 数据类型基础
order: 4
---

# JS 数据类型基础

1. 学会了解 JS 原始类型是如何对象进行访问其方法的？(列出步骤即可)

   （1）原始值在访问其属性时，创建一个包含相应字面量的特殊对象（其中具有有用的方法）

   （2）该方法返回一个新的字面量

   （3）特殊对象被销毁，只留下原始值

2. 学会数字类型的 `toString`, `parseInt`, `parserFloat` 方法(用代码表示即可)

   ```js
   //方法 num.toString(base) 返回在给定 base 进制数字系统中 num 的字符串表示形式
   let num = 255;
   alert( num.toString(16));//ff：255转16进制
   alert( num.toString(2)); //11111111: 255转2进制
   
   //使用两点来调用toString()方法
   123..toString(16)
   ```

   ```js
   //parseInt 和 parseFloat可以从字符串中“读取”数字，直到无法读取为止。如果发生 error，则返回收集到的数字
   alert( parseInt('100px') ); // 100
   alert( parseFloat('12.5em') ); // 12.5
   
   alert( parseInt('12.3') ); // 12，只有整数部分被返回了
   alert( parseFloat('12.3.4') ); // 12.3，在第二个点出停止了读取
   
   //当没有数字可读时,parseInt/parseFloat 会返回 NaN
   alert( parseInt('a123') ); // NaN，第一个符号停止了读取
   ```

   

3. 理解字符串是不可变的(理解即可)

4. 学会如何查找子字符串，如何获取子字符串方法(用代码表示即可)

5. 了解数组 pop/push, shift/unshift 方法(用代码表示即可)

6. 学会如何遍历数组，如何使用 new Array() 创建数组(用代码表示即可)

7. 学会数组的几种方法

```js
// 1. 如何使用 splice 方法删除数组元素
let arr = ["I", "go", "home"];
...
console.log(arr) // ["I"],

// 2. 如何使用 slice 方法对数组进行切片

let arr = ["t", "e", "s", "t"];

console.log(arr1) // t,e,s
console.log(arr2) // e,s,t

// 4. 如何在数组中搜索元素
// indexOf / lastIndexOf / includes / find / findIndex 都是如何使用的。

// 5. 如何使用 filter 方法对数组进行筛选

// 6. 如何使用 map 方法对数组进行处理

// 7. 如何使用 reverse 方法对数组元素进行颠倒

// 8. 如何使用 split / join 方法在数组和字符串之间进行转化

// 9. 如何使用 reduce 方法对数组进行求和

// 10. 如何使用 Array.isArray 方法检查 arr 是否是一个数组。

```

8. 如何使用 Map / Set 存取数据， 如何遍历 Map / Set (用代码表示即可)
9. 如何使用 Object.keys, Object.values, Object.entries 对对象元素进行遍历(用代码表示即可)
10. 学会如何进行数组解构，如何进行对象解构，如何进行嵌套解构.()

```js
let options = {
  size: {
    width: 120,
    height: 110,
  },
  items: ['Cake12', 'Donut34'],
  extra: true,
};

// 为了清晰起见，解构赋值语句被写成多行的形式
let {
  size: {
    // 把 size 赋值到这里
    width,
    height,
  },
  items: [item1, item2], // 把 items 赋值到这里
  title = 'Object', // 在对象中不存在（使用默认值）
} = options;

console.log(title);
console.log(width);
console.log(height);
console.log(item1);
console.log(item2);
```

11. 学会如何创建日期对象，根据日期对象获得年、月、日、具体日期、小时、分钟、秒针。(用代码表示即可)
12. 了解时间戳的概念，学会 JS 如何获得当前时间戳(查资料)
13. 了解序列化与反序列的概念(查资料)
14. 学会如何使用 JS JSON 方法对数据进行序列化，反序列化。(用代码表示即可)

```js
// JSON.stringify 的三个参数代表什么？

// JSON.parse 如何使用
```
