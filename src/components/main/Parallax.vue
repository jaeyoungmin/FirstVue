<template>
  <div class="parallax">
    <v-parallax
      :height="isMobile ? 700 : 400"
      :src="require('../../assets/sss.jpg')"
      class="wrapper"
    >
      <div class="inner-parallax">
        <div class="container">
          <div class="spec" v-for="(parallax, i) in aho" :key="i">
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
      let width = document.body.clientWidth; //.clientWidth : 보더안에있는 가로길이 offsetWidth:마진을제외한 완전한 컨텐츠 가로사이즈
      console.log(width);
      if (width < 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    };
    window.addEventListener("resize", onresize); //onresize를 사용하기위해선 이벤트핸들러로 사용해야함
    //window 사이즈가 바뀔 때  addEventListner 로 이벤트 resize 되었을 때 onresize 함수를 실행
    //resize는 연속적인  함수
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
