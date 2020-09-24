<template>
  <div class="features">
    <h2>{{ "vuetify features".toUpperCase() }}</h2>
    <div class="divider"></div>
    <!-- /.divider -->
    <div class="wrapper">
      <feature-item
        v-for="(feature, i) in features"
        :key="i"
        :title="feature.title"
        :text="feature.text"
        :icon="feature.icon"
        class="flexd"
      ></feature-item>
    </div>
    <!-- /.wrapper -->
  </div>
  <!-- /.features -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "Features",
  components: {
    FeatureItem: () => import("@/components/main/FeatureItem.vue")
  },
  data() {
    return {
      features: [
        {
          icon: "mdi-baguette",
          title: "VIBRANT COMMUNITY",
          text:
            "Lorem  dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-airplane",
          title: "FREQUENT UPDATES",
          text:
            "ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        },
        {
          icon: "mdi-brightness-5",
          title: "LONG-TERM SUPPORT",
          text:
            "dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scope>
.divider {
  margin: 0 auto 40px;
  width: 56px;
  height: 5px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  opacity: 0.5;
}
.features {
  padding: 20px;
  background: #eee;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
}
.flexd {
  width: 300px;
  margin: 10px 10px;
  background: #fff;
  box-shadow: 2px 5px 5px #000;
}
@media only screen and(max-width: 768px) {
  .wrapper {
    flex-flow: column nowrap;
    margin: 20px 0;
  }
  .flexd {
    width: 100%;
  }
}
</style>
