```vue
<template>
  <div>
    <input type="text" v-model="str" />
    <button v-on:click="add(str)">add</button>
    <li
      v-for="(value, index) in arr"
      :key="value"
      v-bind:class="{ active: Active === index }"
      v-on:click="handelClick(index)"
    >
      {{ value }}
      <button v-on:click="remove(index)">remove</button>
    </li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["java", "c++", "js", "python"],
      Active: -1,
      str: "",
    };
  },
  methods: {
    remove(index) {
      this.arr.splice(index, 1);
    },
    handelClick(index) {
      this.Active = index;
    },
    add(str) {
      this.arr.push(str);
      this.str = "";
    },
  },
};
</script>
<style>
.active {
  background: red;
}
</style>
```

```vue
<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>编号</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>
            <button v-on:click="subtract(index)">-</button>
            {{ item.count }}
            <button v-on:click="add(index)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h1>总价：{{ total }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { id: 1, name: "小米1", price: 1100, count: 1 },
        { id: 2, name: "小米2", price: 1200, count: 1 },
        { id: 3, name: "小米3", price: 1300, count: 1 },
        { id: 4, name: "小米4", price: 1400, count: 1 },
      ],
    };
  },
  methods: {
    add(index) {
      this.arr[index].count++;
    },
    subtract(index) {
      this.arr[index].count--;
    },
  },
  computed: {
    total() {
      let sum = 0;
      this.arr.forEach(function (item, index, arr) {
        sum += item.price * item.count;
      });
      return sum;
    },
  },
};
</script>
<style>
</style>
```

