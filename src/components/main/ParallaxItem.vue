<template>
  <div class="parallax-item">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ParallaxItem",
  props: ["title", "text"],
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.parallax-item {
}
h2 {
  font-size: 3rem;
  font-weight: 900;
}
p {
  color: #fff;
  font-weight: 300;
}
</style>
