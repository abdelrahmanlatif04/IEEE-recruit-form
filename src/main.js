import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
// import { createPinia } from "pinia";
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
    path: "/about-team",
    component: teamInfo,
  },
  {
    path: "/register",
    component: form,
  },
  {
    path: "/committee/:id",
    component: committeeInfo,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    redirect: {
      path: "/",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// const pinia = createPinia();

const app = createApp(App);
app.use(router);
// app.use(pinia);
app.mount("#app");
