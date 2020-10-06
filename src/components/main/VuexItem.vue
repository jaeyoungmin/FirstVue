<template>
  <div class="vuex-item">
    <v-img :src="url" height="300" alt="img"></v-img>
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <v-btn>CONTINUE READING</v-btn>
  </div>
</template>

<script>
export default {
  name: 'vuex-item',
  props: ['url', 'title', 'text'],
};
</script>

<style lang="scss" scoped></style>
