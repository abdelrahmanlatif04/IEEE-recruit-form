import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

import main from "./components/main.vue";
import teamInfo from "./components/team-info.vue";
import committeesJob from "./components/committees-job.vue";
import committeeInfo from "./components/committees job/committee-info.vue";
import viewApplicants from "./components/view-applicants.vue";
import form from "./components/form.vue";
const routes = [
  {
    path: "/",
    component: main,
    name: "main",
  },
  {
    path: "/about-team",
    component: teamInfo,
    name: "about team",
  },
  {
    path: "/register",
    component: form,
    name: "register",
  },
  {
    path: "/committees-job",
    component: committeesJob,
    name: "committees info",
  },
  {
    path: "/view/:committee?",
    component: viewApplicants,
    props: true,
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

const pinia = createPinia();

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
