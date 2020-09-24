<template>
  <div class="core-app-bar">
    <div>
      <v-app-bar color="white">
        <v-avatar class="logo">
          <!-- <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="john" /> -->
          <img :src="require('../../assets/logo.svg')" alt="logo" />
          <!--require - import 기능이 같음-->
        </v-avatar>
        <v-toolbar-title>VUETIFY</v-toolbar-title>
        <v-spacer></v-spacer>
        <!--중간에 간격을 두기 위해 사용 VUETIFY 기능-->
        <v-btn>Sign in</v-btn>
      </v-app-bar>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: "AppBar",
  components: {},
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.logo {
  margin-right: 15px;
}
</style>
<!---->
