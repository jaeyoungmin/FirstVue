<template>
  <div class="about-me">
    <div class="flex-item">
      <h2>{{ "about me".toUpperCase() }}</h2>
      <!--toUpperCase() 소문자 대문자로-->
      <div class="divider"></div>
      <p>{{ text }}</p>
      <v-card
        elevation="12"
        rounded="circle"
        width="100"
        style="display:inline-block;margin-top:50px;"
      >
        <v-avatar size="100">
          <img :src="iuimg" alt="iu" />
        </v-avatar>
      </v-card>
      <div class="btn">
        <v-btn color="gray" outlined>VUETIFY DOCUMENTATION</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "AboutMe",
  components: {},
  data() {
    return {
      text:
        "Vuetify is the #1 component library for Vue.js and has been in active development since 2016. The goal of the project is to provide users with everything that is needed to build rich and engaging web applications using the Material Design specification. It accomplishes that with a consistent update cycle, Long-term Support (LTS) for previous versions, responsive community engagement, a vast ecosystem of resources and a dedication to quality components.",
      iuimg:
        "https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=590x330&q=h&e=t&f=t&cb=1",
      featureText: "VUETIFY FEATURES"
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.about-me {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  text-align: center;
  padding: 96px;
}
.flex-item {
  max-width: 650px;
}

.btn {
  margin: 50px 0 0;
}
</style>
