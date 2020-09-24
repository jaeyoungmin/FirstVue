<template>
  <v-app>
    <router-view></router-view>
    <!--HOME 파일-->
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
<style lang="scss">
/*h2, h1, p 등 텍스트 태그에 대한 css 는 먼저 정의해주는것이 좋다*/
h2 {
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
}
p {
  font-weight: 300;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.87);
  .divider {
    margin: 0 auto 40px;
    width: 56px;
    height: 5px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    opacity: 0.5;
  }
}
</style>