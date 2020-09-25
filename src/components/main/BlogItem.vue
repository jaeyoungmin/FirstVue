<template>
  <div class="blog-item">
    <v-img :src="imgUrl" height="300" alt="img"></v-img>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <v-btn>CONTINUE READING</v-btn>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: ["imgUrl", "title", "text"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>