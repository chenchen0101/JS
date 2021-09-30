---
title: JS 对象基础
---

# JS 对象基础

1. 对象点操作和方括号访问有什么区别(理解)

```js
const user = {
  name: 'xxx',
  age: 18,
};
user.name; // 点操作
//点操作的变量为有效的标识符（不包含空格，不以数字，不包含特殊字符）
user['name']; // 方括号访问
//方括号可操作任何变量、可访问计算属性
```

2. 使用 `in` 操作符判断对象是否有字段(写出代码示例即可)

```js
let person = { name, age: 20 };
alert('age' in person); //true, person.age存在
alert('sex' in person); //false， person.sex不存在
```

3. 如何使用`for`循环遍历对象(写出代码示例即可)

```js
  let person = {
      name: "cxr",
      age: "20",
      sex: "女"
  }；
  for (let key in person){
      alert(key);//name,age,sex
      alert(person[key]);//cxr,20,女
  }
```

4. 理解这一句话,**"赋值了对象的变量存储的不是对象本身，而是该对象“在内存中的地址”，换句话说就是对该对象的“引用”"**。

> 正因变量存储的是引用，但有时候我们希望得到的是一个对象的副本。这时候我们就需要对对象进行克隆。
> 就比如有这样一种使用场景
>
> ```js
> const uesr = {
>   name: 'xxx',
>   age: 17,
> };
> function fn(obj) {
>   const newObj = Object.assign(obj);
>   newObj.name = 'hello world';
>   console.log(obj);
> }
> // 我希望在函数内部不对 user 对象做修改，这时候我们就需要克隆对象.
> fn(user);
> ```

对象的克隆分为浅层克隆和深层克隆,这里我们像学会使用 `Object.assign` API 浅层克隆对象(写出示例代码即可)。

```js
//Object.assign浅拷贝
let user = {
  name: 'xxx',
  age: 17,
};
let user1 = { sex: 女 };
let user2 = { sex: 男 };
//将user1和user2中所有的属性都拷贝到user中
Object.assign(user, user1, user2);
//先user = { name: 'xxx', age: 17, sex: '男' }
```

5. **[垃圾回收 (javascript.info)](https://zh.javascript.info/garbage-collection)**

6. **[对象方法，"this" (javascript.info)](https://zh.javascript.info/object-methods)**

7. 构造函数 new 的执行步骤(列出)

```markdown
1. 创建空对象并分配 this

2. 为 this 添加属性

3. 返回 this 的值
```

8. 如何使用可选链 "?."处理“不存在属性”的问题

```js
// 修改代码保证运行正确
const obj = undefined;
console.log(obj?.user.name);
```
