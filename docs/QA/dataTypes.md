---
title: 数据类型基础
---

# 数据类型基础

```js
// 对字符串进行数值分析
// 请问下列分别会输出什么
parseInt('100.19px');//100
parseFloat('100.19px');//100.19
parseInt('b145');//NaN
```

---

```js
const str = 'hello world';
// 请解决一下场景
// 1. 首先需要判断 str 字符串是否有 'lo' 字串
// 2. 若存在 'lo' 字串，找到 'lo' 字串为位置，
// 3. 从 'lo' 位置开始截取到字符串末尾，即 截取 'lo world' 字符串。
const str = 'hello world';
if(str.indexOf('lo') != -1){
    const currentIndex = str.indexOf('lo');
    console.log(currentIndex);
    console.log(str.slice(currentIndex));
}
```

---

```js
const arr = ['A', 'B', 'C'];
// 请对数组进行变换
// arr =>  ['A', 'B', 'C', 'D'];arr.push('D'));
arr.push('D');
console.log(arr);
// arr => ['B', 'C', 'D'];
arr.shift();
console.log(arr);
// arr => ['Z', 'B', 'C', 'D'];
arr.unshift('Z');
console.log(arr);
// arr => ['Z', 'B', 'C'];
arr.pop();
console.log(arr);
```

---

```js
const arr = ['A', 1, true, { name: 'hello js' }];
// 请对数组进行变换

// arr => ['A', 'C', 2, { name: 'hello js' }];
arr.splice(1,2,'C',2);
console.log(arr);
```

---

```js
const arr = ['js', 'ts', 'python', 'go'];

// 1. 请用代码判断 'java' 字符串是否在数组中，
 console.log(arr.indexOf('java') !== -1);
console.log(arr.includes('java'));
// 2. 请查找 'ts' 在数组中的位置，
console.log(arr.indexOf('ts'));
 3. 请在数组中找到 'python' 元素并返回它
 let newarr = arr.find(item => item == "python");
console.log(newarr);


//find方法返回的是一个元素的值
const arr1 = [
    {id:1, name:'a'},
    {id:2, name:'b'},
    {id:3, name:'d'},
]
const users = [
    {id:101, name: 'chenchen', age:21, school: 'CSUFT'},
    {id:104, name: 'chenchen3', age:28, school: 'CSUFT'},
    {id:106, name: 'chenchen4', age:24, school: 'CSUFT'},
    {id:107, name: 'chenchen6', age:27, school: 'CSUFT'},
]
const user = users.find(item => item.id==106);
console.log(user.name);
```

---

```js
const arr = [
  'subscription',
  'narrow',
  'discriminate',
  'concurrent',
  'incremental',
  'hardware',
];
//filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
// 请从 arr 生成一个新数组,要求数组中的元素字符串都包含 'cr' 字串
const newArr = arr.filter((item,index,arr) =>item.includes('cr'))
console.log(newArr);
```

---

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
//map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
//map() 方法按照原始数组元素顺序依次处理元素。
// 请从 arr 中生成新数组，要求新数组为: [1,  4,  9,  16, 25,36, 49, 81, 100]
const newarr = arr.map(item => {
    return item * item;
})
console.log(newarr);
```

---

```js
const str = 'hello chenchen';

// 要求生成新字符串, newStr = 'nehcnehc olleh';
const newarr = str.split('');
console.log(newarr.reverse());
console.log(newarr.join(''));

```

---

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// 请使用 reduce 方法，对 arr 元素进行平方求和
// 即求 [1,  4,  9,  16, 25,36, 49, 81, 100] 之和
function getSum(total, num) {
    return total + num * num;
}
console.log(arr.reduce(getSum));
```

