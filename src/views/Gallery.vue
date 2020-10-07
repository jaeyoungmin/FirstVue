<template>
  <div class="gallery">
    <v-btn v-on:click="show = !show">
      BUTTON
    </v-btn>
    <transition name="fade">
      <p v-if="show">Fade</p>
    </transition>
    <transition name="slide-fade">
      <p v-if="show">SlideFade</p>
    </transition>
    <transition name="bounce">
      <p v-if="show">I wanna go home!</p>
    </transition>
    <div id="list-demo">
      <v-btn @click="add">Add</v-btn>
      <v-btn v-on:click="remove">Remove</v-btn>
      <transition-group name="list" tag="h3">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
      <!--List Transition은 transition-group으로 지어줘야함 태그는 transition-group을  P태그로 감싸진 친구들로 보겠다 -->
    </div>
    <!--Shuffle-->
    <v-btn v-on:click="shuffle">Shuffle</v-btn>
    <transition-group name="flip-list" tag="ul">
      <li v-for="item in its" v-bind:key="item">
        {{ item }}
      </li>
    </transition-group>
    <transition name="fade" mode="out-in">
      <v-btn v-if="isEditing" key="save" @click="isEditing = !isEditing">
        Save
      </v-btn>
      <v-btn v-else key="edit" @click="isEditing = !isEditing">Edit</v-btn>
    </transition>
    <div>
      <transition name="slide-fade" mode="in-out">
        <v-btn
          v-if="isEditing"
          key="save"
          @click="isEditing = !isEditing"
          class="absol"
        >
          Save
        </v-btn>
        <v-btn v-else key="edit" @click="isEditing = !isEditing" class="absol">
          Edit
        </v-btn>
      </transition>
    </div>
    <!--Element들간의 트랜지션-->
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "Gallery",
  data() {
    return {
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      its: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      isEditing: false
    };
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
      //.splice() = 배열에 데이터를 추가하고 삭제해 원래 배열을 변경, 0 삭제할 것이 '0' 없다. nextNum이 10이므로 10부터 11, 12, 랜덤한 인덱스에 추가된다.
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
      //this.randomIndex() - 무작위로 랜덤한 인덱스를 설정 1 - 삭제할 갯수
    },
    shuffle: function() {
      this.its = _.shuffle(this.its);
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  min-height: calc(100vh - 120px); //vh - 스크린 화면에서 100% 출력
  padding: 20px;
}
#list-demo {
  margin-top: 40px;
}
.absol {
  position: absolute;
  margin-top: 20px;
  margin-left: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  //animation이 시작될때 opacitiy가 0으로 시작해서 0을 끝난다 상단에 opacitiy가 일치
  opacity: 0;
}

/* 애니메이션 진입 및 진출은 다른 지속 시간 및  */
/* 타이밍 기능을 사용할 수 있습니다. */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); //cubic-bezier :
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-25px);
  opacity: 0;
}

//bounce css animation
.bounce-enter-active {
  animation: bounce-in 0.8s ease;
}
.bounce-leave-active {
  animation: bounce-in 0.8s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: all 1s;
}
</style>
