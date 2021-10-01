---
title: 数据类型基础
---

# 数据类型基础

```js
// 对字符串进行数值分析
// 请问下列分别会输出什么
parseInt('100.19px');
parseFloat('100.19px');
parseInt('b145');
```

---

```js
const str = 'hello world';
// 请解决一下场景
// 1. 首先需要判断 str 字符串是否有 'lo' 字串
// 2. 若存在 'lo' 字串，找到 'lo' 字串为位置，
// 3. 从 'lo' 位置开始截取到字符串末尾，即 截取 'lo world' 字符串。
```

---

```js
const arr = ['A', 'B', 'C'];
// 请对数组进行变换

// arr =>  ['A', 'B', 'C', 'D'];

// arr => ['B', 'C', 'D'];

// arr => ['Z', 'B', 'C', 'D'];

// arr => ['Z', 'B', 'C'];
```

---

```js
const arr = ['A', 1, true, { name: 'hello js' }];
// 请对数组进行变换

// arr => ['A', 'C', 2, { name: 'hello js' }];
```

---

```js
const arr = ['js', 'ts', 'python', 'go'];

// 1. 请用代码判断 'java' 字符串是否在数组中，

// 2. 请查找 'ts' 在数组中的位置，

// 3. 请在数组中找到 'python' 元素并返回它
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
// 请从 arr 生成一个新数组,要求数组中的元素字符串都包含 'cr' 字串
```

---

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// 请从 arr 中生成新数组，要求新数组为: [1,  4,  9,  16, 25,36, 49, 81, 100]
```

---

```js
const str = 'hello chenchen';

// 要求生成新字符串, newStr = 'nehcnehc olleh';
```

---

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// 请使用 reduce 方法，对 arr 元素进行平方求和
// 即求 [1,  4,  9,  16, 25,36, 49, 81, 100] 之和
```
