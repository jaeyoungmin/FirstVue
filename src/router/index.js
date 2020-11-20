import Vue from 'vue';
import VueRouter from 'vue-router';
// import { component } from "vue/types/umd";
import Home from '../views/Home.vue'; //Home 어차피 불러와야하기때문에 위에써도 상관없지만 다른것 들은 굳이 위에 쓸 필요가 없음
// import PlayGround from "../views/PlayGround.vue" 위에써도 상관없지만 느려짐;

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        //home 안에 자식
        path: '/',
        component: () => import('../views/main/Main.vue'),
      },
      {
        //home 안에 자식
        path: 'gallery',
        component: () => import('../views/Gallery.vue'),
      },
      {
        //home 안에 자식
        path: 'menu',
        component: () => import('../views/Menu.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/About.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
