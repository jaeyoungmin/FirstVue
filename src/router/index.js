import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Home from "../views/Home.vue"; //Home 어차피 불러와야하기때문에 위에써도 상관없지만 다른것 들은 굳이 위에 쓸 필요가 없음
// import PlayGround from "../views/PlayGround.vue" 위에써도 상관없지만 느려짐;

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
      //두번째로 나오는 router-view에 뿌림
      path: "/",
      component: () => import("../views/main/Main.vue"),
    }] // path에 따라 동적으로 움직임
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/About.vue") //그때 그떄 가져오게 import는 여기서 해주는게 좋다
  }
];

const router = new VueRouter({
  routes
});

export default router;