<template>
  <div class="main-banner">
    <v-img :src="require('../../assets/banner.jpg')" min-height="485px"></v-img>
    <div class="main-copy">
      <div class="flex-item">WELCOME TO</div>
      <div class="flex-item big-font">VUETIFY</div>
      <div class="flex-item">
        <v-btn
          class="align-self-end"
          fab
          outlined
          @click="$vuetify.goTo('#about-me')"
        >
          <v-icon>mdi-chevron-double-down</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MainBanner",
  components: {},
  data() {
    return {
      mainCopy: "welcome to vuetify"
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.main-banner {
  display: flex;
  justify-content: center; //가로정렬
  align-items: center; //세로정렬
}
.main-copy {
  position: absolute;
}
.flex-item {
  font-size: 50px;
  color: #fff;
  text-align: center;
}
.big-font {
  font-size: 95px;
  font-weight: 900;
}
.align-self-end {
  color: #fff;
}
</style>
