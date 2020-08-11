import Vue from "vue";
import VueRouter from "vue-router";
import MinhasAtividades from "../views/MinhasAtividades.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/minhas-atividades",
    name: "MinhasAtividades",
    component: MinhasAtividades,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
