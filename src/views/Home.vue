<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p v-bind:title="msg">
      <!--v-bind을 치면 javascript와 연동이되어 아래 지정된 변수를 가져온다.
        'message'로 넣게되면 문자열로 들어가 변수가 아니게 된다.
      -->
      <!-- 내 위에 잠시 마우스를 올리면 -->
      <span>동적</span>으로 바인딩 된 Title을 볼 수 있습니다.
    </p>
    <p v-if="seen">이제 나를 볼 수 있어요</p>
    <!--v-if : 조건문 -->

    <li v-for="(todo, i) in todos" v-bind:key="i">
      <!--todo데이터 i는 다른 식별자, todos는 배열 v-bind:key="i" : 다른 인덱스임을 알려줌 -->
      {{ todo.text }}
    </li>

    <p>{{ message }}</p>
    <button v-on:click="reverse">메시지 뒤집기</button>
    <input v-model="message" />
    <!--v-model은 form에서 사용할 수 있는 -->
    <HelloWorld></HelloWorld>
    <Event :pageH1="eventH1"></Event>
    <Event :pageH1="'이건 H2'"></Event>
  </div>
</template>

<script>
//@ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Event from "@/views/Event.vue";
export default {
  name: "Home",
  components: { HelloWorld, Event },
  data() {
    return {
      eventH1: "이건 eventH1",
      message: "안녕하세요! Vue.js!",
      msg: "이 페이지는" + new Date() + "에 로드 되었습니다.",
      seen: true,
      todos: [
        { text: "JavaScript" },
        { text: "Vue 배우기" },
        { text: "무언가 멋진 것을 만들기" },
        { text: "Vue.js" }
      ]
    };
  },
  methods: {
    /* methods은 객체안에 들어가 있는 함수 */
    reverse: function() {
      this.message = this.message // this 자기자신안에 있는 .message
        .split("") //객체를 구분 Ex) '안녕하세요'.split ('') => "안", "녕", "하", "세", "요" or '123 213 123'.split('-') => 123-213-123
        .reverse() // 반전 시킴 Ex) '안녕하세요'.split ('').resverse() => "요", "세", "하", "녕", "안"
        .join(""); //나누어진 객체를 합침 => '안녕하세요'.split ('').resverse().join("") "안녕하세요"
    }
  }
};
</script>
<style lang="scss">
.home span {
  color: red;
}
</style>
