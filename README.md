- 在HTML中，script 标签有几种引入脚本的方式？ 

- ```
  1、通过src特性添加到HTML文件中
  2、
  ```

- 

- JS数据类型有哪些。typeof 运算符是如何使用的。

- ```
  8种数据类型，共分为两类
  基本数据类型：undefined、Boolean、String、BigInt、Symbol、Number、null
  复杂数据类型:Object
  
  ```

- ```
  //作为运算符：typeof x
  typeof undefined  //"undefined"
  typeof 0	//"Number"
  typeof true	//"Boolean"
  typeof 10n	//"BigInt"
  typeof "foo"//"String"
  typeof Symbol("id")//"symbol"
  //作为函数形式typeof(x)
  typeof Math	//"object"
  typeof null	//"object"
  typeof alert//"function"
  ```

- 

- JS中如何进行类型的强制转化

- ```
  字符串类型转换String(value)
  数字类型转换Number(value)
  
  ```

- 

- ==（非严格比较） 和 ===(严格比较)的本质区别是什么？

```
非严格比较(==):比较时先转换数据类型再比较
严格比较(===):在比较时不会做任何的数据类型转换
```

