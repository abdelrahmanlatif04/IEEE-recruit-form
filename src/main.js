import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";

import "./style.css";
import App from "./App.vue";

import main from "./components/main.vue";
import teamInfo from "./components/team-info.vue";
import committeeInfo from "./components/committee-info.vue";
import form from "./components/form.vue";
const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/team-info",
    component: teamInfo,
  },
  {
    path: "/register",
    component: form,
  },
  {
    path: "/committee/:committee",
    component: committeeInfo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
