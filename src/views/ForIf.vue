<template>
  <div class="forif">
    <h1>New For/If page 조건부 렌더링</h1>
    <h1 v-if="awesome">Vue is Visible!</h1>
    <h1 v-if="!awesome">Vue is Unvisible!</h1>
    <!--False는 출력되지않음-->
    <h2 v-else-if="isElse">This is Else If 😖</h2>
    <!--위에 If가 false 일떄 아래 if 조건문이 실행-->
    <h1 v-else>Oh no 😂</h1>
    <!--바로 위에있는 IF가 False가되어 렌더링되지못하면 바로 아래 Else가 렌더링됨-->
    <h1 v-show="ok">Hello🤩</h1>
    <!--v-show = v-if 조금 다르지만 기능은 같다 if = false가 되면 아예 없는것 이지만 렌더링이 아예 안됨 
    show는 렌더링은 하되 CSS로 보이지않게 하는 것 보였다가 안보였다가 반복할 때 Show 사용-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ForIf",
  components: {},
  data() {
    return {
      awesome: true, //False면 출력되지않음
      isElse: true,
      ok: true
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
<!---->
