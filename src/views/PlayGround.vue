<template>
  <div class="PlayGround">
    <p v-bind:title="message">{{ msg + " 어쩌라고" }}</p>
    <div v-html="msgg"></div>
    <div v-bind:title="dynamicId">v-bind</div>
    <p v-if="seen">Vue if문활용하기(조건문) - true일때 나와요</p>
    <ul>
      <li v-for="(todo, i) in todos" v-bind:key="i">{{ todo.text }}</li>
    </ul>
    <p>{{ aad }}</p>
    <button v-on:click="reverse">으악</button>
    <input v-model="aad" />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "PlayGrund",
  components: {},
  data() {
    return {
      msg: "Mustache구문 (이중 중괄호)을 사용한 텍스트 보간입니다.",
      msgg: "<h1 style='color:darkred;'>안녕하세요</h1>",
      //원시 html(v-html='') - 스크립트에서 html 문법을 사욯할수 있다.
      dynamicId: "v-bind 속성 걸기",
      message:
        "이 페이지는는" +
        new Date() +
        "에 로드되었습니다.(v-bind:title='message')",
      seen: "true",
      todos: [
        { text: "todo 데이터" },
        { text: "i는 다른 식별자" },
        { text: "todos는 배열" },
        { text: "v-bind:key='i' 는 다른 인덱스임을 알려준다. 배열" }
      ],
      aad: "집에 가자"
    };
  },
  methods: {
    reverse: function() {
      this.aad = this.aad
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style lang="scss" scoped>
//scoped가 다른 css 파일에 영향을 끼치지 않는다.
</style>
