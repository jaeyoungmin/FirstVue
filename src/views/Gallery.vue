<template>
  <div class="gallery">
    <v-row no-gutters>
      <v-col
        v-for="(image, i) in images"
        :key="i"
        cols="12"
        md="4"
        sm="6"
        lg="3"
      >
        <image-card :url="image.download_url" :text="image.author"></image-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Gallery",
  components: {
    ImageCard: () => import("@/components/gallery/ImageCard.vue")
  },
  data() {
    return {};
  },
  methods: {},
  computed: { ...mapState(["images"]) },
  beforeMount() {
    if (this.images.length <= 0) {
      this.$http.get("https://picsum.photos/v2/list").then(images => {
        let parsedImage = images.data.map(el => {
          let tmpArr = el.download_url.split("/");
          tmpArr.splice(-2, 2, "300/200.webp");
          el.download_url = tmpArr.join("/");
          return el;
        });
        this.$store.commit("setImage", parsedImage);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
}
</style>
