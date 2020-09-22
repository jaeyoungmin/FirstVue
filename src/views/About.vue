<template>
  <div class="about">
    <div v-html="msg"></div>
    <div v-bind:title="title">Title</div>
    <div :title="title">Title 약어</div>
    <div>
      {{
        title
          .split("")
          .reverse()
          .join("")
      }}
    </div>
    <div>{{ reverseTitle }}</div>
    <div>{{ reverse() }}</div>
    <div>{{ lastName }}</div>
    <div v-bind:class="{ active: isActive }" class="text-danger">
      클래스 바인딩
    </div>
    <div :class="['active', 'text-danger']">zzz</div>
    <!--클래스 지정하기 - CSS속성 적용하기 isActive 가 ture일 때  active적용됨
    클래스 중복 가능-->
    <div :class="{ active: !isActive }">클래스 바인딩 반전</div>
    <div :style="{ color: 'blue', fontSize: size + 'px' }">
      인라인 스타일 바인딩
    </div>
    <div :style="fontStyle">인라인스타일바인딩 2</div>
    <div :style="[fontStyle]">인라인스타일바인딩 3</div>
  </div>
</template>

<script>
//@ is an alias to /src

export default {
  name: "about",
  components: {},
  data() {
    return {
      msg: '<p style="color:darkred;">안녕하세요</p>', //원시 html
      title: "v-bind 속성 사용하기",
      firstName: "first",
      lastName: "last",
      fullName: "Foo Bar",
      isActive: true,
      size: 30,
      fontStyle: { color: "purple", fontSize: "35px" }
    };
  },
  computed: {
    //선언형 프로그램
    // computed는 캐싱(저장)이 된다. Ex)한번 저장된 값은 속성이 바뀌지않는 한 계속 같은 값으로 저장되어 연산하지않고 출력됨매번 불러올 떄마다 같은 값을 보여줄 때는 COMPUTED
    reverseTitle() {
      this.title
        .split("")
        .reverse()
        .join("");
      let result = this.title + "이건 computed";
      return result;
    }
  },
  watch: {
    firstName: function(val) {
      //firstName 을 지켜보다가 바뀌면 실행  - 어떠한 변수를 지켜보다가 바뀔경우 어떠한 실행문을 실행 명령문프로그램
      this.fullName = val + " " + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + " " + val;
    }
  },
  methods: {
    //method는 그때 그때 식을 실행해서 값을 불러옴 - 불러올 때마다 값이 바뀌면 method 사용
    reverse() {
      this.title
        .split("")
        .reverse()
        .join("");
      let result = this.title + "이건 computed";
      return result;
    }
  }
};
</script>
<style lang="scss" scoped>
.about div {
  margin: 20px;
}
.active {
  font-size: 30px;
  color: darkturquoise;
}
.text-danger {
  border: 1px solid purple;
}
</style>
