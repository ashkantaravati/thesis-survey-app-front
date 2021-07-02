import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
import RegisterLanding from "@/views/Home.vue";
import RegisterWizard from "@/views/RegisterWizard.vue";
import Survey from "@/views/Survey.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "RegzisterLanding",
    component: RegisterLanding,
  },
  {
    path: "/register-wizard",
    name: "RegisterWizard",
    component: RegisterWizard,
  },
  {
    path: "/participate/:teamId",
    name: "Survey",
    component: Survey,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
