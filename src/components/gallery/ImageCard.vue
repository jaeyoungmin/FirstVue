<template>
  <div class="image-card" @mouseover="mouseover" @mouseleave="mouseleave">
    <v-fade-transition>
      <div v-if="isMouseOver" class="cover">
        <v-row justify="center" align="center" style="height:100%">
          <div class="content-wrapper" :class="{'on-hover ' : hover}">
                     <v-hover v-slot:default="{ hover }">
            <v-avatar color="#fff" :class="{ 'on-hover': hover }">
              <!-- hover 애니메이션이 복잡할 땐 v-hover 태그 내에서 토글되는 클래스를 효율적으로 사용 -->
              <v-icon>
                mdi-link
              </v-icon>
            </v-avatar>
          </v-hover>

            <h4>{{ text }}</h4>
          </div>
        </v-row>
      </div>
    </v-fade-transition>
    <v-img :src="url" alt="3" aspect-ratio="1.7" class="img"></v-img>
    <!-- <v-hover v-slot:default="{ hover }">
      <v-img :src="url" alt="3" aspect-ratio="1.7" class="img">
        <v-fade-transition>
          <div
            v-if="hover"
            class="d-flex flex-column transition-fast-in-fast-out orange darken-2 v-card--reveal"
          >
            <v-icon large color="white" class="icon">mdi-link</v-icon>
            <h3>
              {{ text }}
            </h3>
            <p class="un">Unsplash</p>
          </div>
        </v-fade-transition>
      </v-img>
    </v-hover> -->
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "ImageCard",
  // computed: { ...mapState(["images"]) }
  props: ["url", "text"],
  data() {
    return {
      isMouseOver: false
    };
  },
  methods: {
    mouseover() {
      this.isMouseOver = true;
      //console.log("up");
    },
    mouseleave() {
      //console.log("out");
      this.isMouseOver = false;
    }
  }
};
</script>

<style lang="scss" scoped>
/*.v-card--reveal {
  height: 100%;
  transform-origin: center top;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  width: 100%;
}

.un {
  font-size: 0.8em;
}*/
.image-card {
  position: relative;
}
.content-wrapper {
  text-align: center;
}
.cover {
  background-color: #efa053;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.8;
}
.v-avatar {
  transition: all 0.5s;
}

.v-avatar:not(.on-hover) {
  opacity: 0.4;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-laeve-to {
  opacity: 0;
}
</style>