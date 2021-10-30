# Vue基础

[toc]



## data

```js
data(){
    return{
        
    };//data中存数据，返回一个对象
}
```



## methods

```js
mothods: {
     
}
```

## class与style绑定

```vue
<div :class="{ active: isActive }"></div>
<!--:class={}是v-bind:class={}缩写-->
<script>
    data() {
  		return {
    		isActive: true,
    		hasError: false
  	}
}
</script>
```

```vue
<div v-bind:style="styleObject"></div>

<script>
    data() {
  return {
    styleObject: {
      color: 'red',
      fontSize: '13px'
    }
  }
}
</script>
```



## computed

不同：

1、语法：{{computed}}、{{methods()}}

2、渲染方式：

当页面被重新渲染时：computed会缓存上一次渲染的值，不会重新调用其中的方法；而methods则是每一次渲染都会重新调用其方法。

## v-for用于列表循环

1、基于数组：

```vue
<li v-for="(value,index) in arr" :key="value">
    {{vaue}},{{index}}
</li>

Vue.creatApp(){
data(){
	return{
		arr:[1,2,3,4]
  	}
 }
}
```

## v-if / v-show

只有当条件为true时，v-if才会执行，元素被渲染（真正的销毁和重建）。

v-show不论什么条件下元素都会被渲染，但它利用css的display属性，当条件为false，display为none，所以元素被假性渲染。

```vue
<!-- 1. v-if -->
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>

<!-- 2. v-show -->
<h1 v-show="ok">Hello!</h1>

```

