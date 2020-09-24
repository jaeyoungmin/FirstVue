<template>
  <div>
    <router-view></router-view>
    <!--main.vue를 받아옴 (index.js 에서)동적으로 페이지를 계속 바꾸기위해 router-view를 사용한다.-->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CoreView",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped></style>
