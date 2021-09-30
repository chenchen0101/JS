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
