<template>
  <div class="parallax">
    <v-parallax
      height=" isMobile ? 800 : 500 "
      :src="require('../../assets/sss.jpg')"
      class="wrapper"
    >
      <div class="inner-parallax">
        <div class="container">
          <div
            class="spec"
            v-for="(parallax, i) in aho"
            :key="i"
            :title="parallax.title"
            :text="parallax.text"
          >
            <div class="value-text">{{ parallax.title }}</div>
            <div class="title-text">{{ parallax.text.toUpperCase() }}</div>
          </div>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.inner-parallax -->
    </v-parallax>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Parallax",
  components: {
    // ParallaxItem: () => import("@/components/main/ParallaxItem.vue")
  },
  data() {
    return {
      aho: [
        { title: "24k", text: "github stars" },
        { title: "330+", text: "releases" },
        { title: "1m", text: "downloads/mo" },
        { title: "5m", text: "total downloads" }
      ],
      isMobile: false
    };
  },
  methods: {},
  mounted() {
    let onresize = () => {
      let width = document.body.clinetWidth;
      console.log(width);
      if (width < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    };
    window.addEventListener("resize", onresize);
  }
};
</script>
<style lang="scss" scoped>
.inner-parallax {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  .spec {
    margin: 0 20px;
    width: 300px;
  }
  .value-text {
    font-size: 4rem;
    font-weight: 900;
  }
  .title-text {
    font-size: 1rem;
  }
}

@media only screen and(max-width:768px) {
  .container {
    flex-flow: column;
    align-items: center;
  }
}
</style>
