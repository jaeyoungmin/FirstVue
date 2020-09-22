<template>
  <div class="event">
    <h1>Event Page : {{ pageH1 }} 🤩</h1>
    <button v-on:click="counter += 1">Add 1</button>
    <!-- <button @click="counter += 1">Add 1</button> 약어  -->
    <p>위 버튼을 클릭한 횟수는 {{ counter }} 번 입니다.</p>
    <button @click="greet">Greet</button>
    <!--greet 자체가 callback 함수가 된다.-->
    <button v-on:click="say('Hi')">Say hi</button>
    <button v-on:click.ctrl="say('What')">Say what</button>
    <!--.ctrl을 누르고 클릭해야 실행 keycode-->
    <!--callback 함수안에 새로운 say()함수가 생겨 say함수가 실행됨-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Event",
  props: ["pageH1"],
  components: {},
  data() {
    return {
      counter: 0,
      name: "vue.js!"
    };
  },
  methods: {
    greet: function(event) {
      //메소드 안에서 사용하는 'this'는 vue인스턴스를 가리킵니다.
      alert("Hello🤩" + this.name + "!");
      //'event'는 네이티브 DOM 이벤트입니다.
      if (event) {
        alert(event.target.tagName); //if event가 ture일때 알람이뜸
      }
    },
    say: message => {
      alert(message);
      // e.preventDefault(); 새로고침 막기
      // e.stopPropagation(); EVENT을 부모쪽으로 중단하고싶을때 -이벤트 상위 엘리먼트 전달 중지
    }
    //say: function(message){alert(message)} 줄여쓰기
  }
};
</script>
<style lang="scss" scoped>
.event button {
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 4px 4px #102546;
}
</style>
<!---->
