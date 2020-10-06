<template>
  <div class="blog-view">
    <h2>{{ "blog".toUpperCase() }}</h2>
    <div class="divider"></div>
    <!-- /.divider -->
    <div class="container">
      <v-row justify="center">
        <v-col cols="12" md="4" xs="12" v-for="(blog, i) in blogs" :key="i"
          ><!--cols 라는 가로 컬럼은 사이즈를 4칸을 가진다 - 총 12 -->
          <blog-item
            :title="blog.title"
            :imgUrl="blog.imgUrl"
            :text="blog.text"
            class="blog-item"
          ></blog-item
        ></v-col>
      </v-row>
      <v-btn @click="addBlogItem">addBlog</v-btn>
    </div>
    <!-- /.wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Blog",
  components: { BlogItem: () => import("@/components/main/BlogItem.vue") },
  data() {
    return {};
  },
  computed: { ...mapState(["blogs", "etc"]) }, //vuex 를 불러오기위해서는 쓰고싶은 파일에서 사용하면댐
  methods: {
    //함수를 선언하는 공간
    addBlogItem() {
      //click
      this.$store.commit("addBlog", {
        title: "Iu",
        imgUrl:
          "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg",
        text: "아이유입니다."
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.blog-view {
  padding: 20px;
}
.container {
  max-width: 1185px;
}

.blog-item {
  margin: 0 10px;
}
</style>
