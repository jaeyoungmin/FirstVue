<template>
  <div class="listpage">
    <h1>ListPage😎</h1>
    <ul id="example-1">
      <li v-for="item in items" :key="item">
        <!--반복되는 지시문에는 v-bind:key 가있어야한다.-->
        {{ item.message }}
      </li>
      <li v-for="(item, i) in indexs" :key="i">
        {{ item.msg }}
      </li>
      <li v-for="(value, name) in object" :key="name">
        {{ name }} : {{ value }}
      </li>
      <!--객체를 반복함-->
      <li v-for="(n, i) in evenNumbers" :key="i">{{ n }}</li>
    </ul>
    <span v-for="a in 10" :key="a">{{ a }} ,</span>
    <!--1에서 10까지 반복시켜줌 -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ListPage",
  components: {},
  data() {
    return {
      items: [{ message: "😞" }, { message: "😁" }],
      indexs: [{ msg: "배열" }, { msg: "값" }],
      object: {
        Title: "How to do lists in Vue", //title = key, 'how to do lists in vue = value
        Author: "Jae Min",
        PublishedAt: "2016-04-10"
      },
      numbers: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        // .filter false 을 return하면 필터링 시켜서 나오지않음
        return number % 2 === 1;
      });
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#example-1 li {
  margin-top: 10px;
}
</style>
