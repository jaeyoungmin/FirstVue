<template>
  <div class="vuex container">
    <div class="container">
      <v-row justify="center">
        <v-col cols="12" md="4" xs="12" v-for="(file, i) in files" :key="i"
          ><!--cols 라는 가로 컬럼은 사이즈를 4칸을 가진다 - 총 12 -->
          <vuex-item
            :title="file.title"
            :url="file.url"
            :text="file.text"
            class="file-item"
          ></vuex-item
        ></v-col>
      </v-row>
      <v-btn @click="addFileItem">addFile</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "vuex",
  components: { VuexItem: () => import("@/components/main/VuexItem.vue") },
  data() {
    return {};
  },
  computed: { ...mapState(["files"]) },
  methods: {
    addFileItem() {
      this.$store.commit("addFile", {
        title: "Iu",
        url:
          "https://img4.yna.co.kr/photo/cms/2019/05/02/02/PCM20190502000402370_P2.jpg",
        text: "아이유입니다."
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1185px;
}

.blog-item {
  margin: 0 10px;
}
</style>
