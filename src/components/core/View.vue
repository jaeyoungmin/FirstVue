<template>
  <div>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
      <!--main.vue를 받아옴 (index.js 에서)동적으로 페이지를 계속 바꾸기위해 router-view를 사용한다.-->
    </transition>
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
<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  transform: translateX(400px);
  opacity: 0;
}
</style>
