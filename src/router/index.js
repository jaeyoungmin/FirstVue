import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Home from "../views/Home.vue"; //Home 어차피 불러와야하기때문에 위에써도 상관없지만 다른것 들은 굳이 위에 쓸 필요가 없음
// import PlayGround from "../views/PlayGround.vue" 위에써도 상관없지만 느려짐;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/play",
    name: "Play",
    component: () => import("../views/PlayGround.vue") // 효율적
  },
  {
    path: "/for",
    name: "Forif",
    component: () => import("../views/ForIf.vue")
  },
  {
    path: "/list",
    name: "ListPage",
    component: () => import("../views/ListPage.vue")
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../views/Event.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue") //그때 그떄 가져오게 import는 여기서 해주는게 좋다
  }
];

const router = new VueRouter({
  routes
});

export default router;
