<template>
  <div class="main">
    <main-banner></main-banner>
    <about-me></about-me>
    <features></features>
    <parallax></parallax>
    <blog></blog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Main",
  components: {
    MainBanner: () => import("@/components/main/MainBanner.vue"),
    AboutMe: () => import("@/components/main/AbuotMe.vue"),
    Features: () => import("@/components/main/Features.vue"),
    Parallax: () => import("@/components/main/Parallax.vue"),
    Blog: () => import("@/components/main/Blog.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.main {
}
</style>
