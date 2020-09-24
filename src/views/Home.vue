<template>
  <div class="home">
    <core-app-bar></core-app-bar>
    <!--클레스 이름을 불러올수있음케밥케이스로-->
    <core-view></core-view>
    <core-Footer></core-Footer>
  </div>
</template>

<script>
//@ is an alias to /src
export default {
  name: "Home",
  components: {
    CoreAppBar: () => import("@/components/core/AppBar.vue"),
    CoreView: () => import("@/components/core/View.vue"),
    CoreFooter: () => import("@/components/core/Footer.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss"></style>
