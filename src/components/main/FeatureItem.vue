<template>
  <div class="feature-item">
    <v-avatar color="#1976de">
      <v-icon dark>{{ icon }}</v-icon>
    </v-avatar>
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "FeatureItem",
  props: ["title", "text", "icon"], // features 에서 데이터 받아옴
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.feature-item {
  padding: 20px;
  text-align: center;
}
h2 {
  margin-bottom: 20px;
  font-size: 2rem;
}
</style>
