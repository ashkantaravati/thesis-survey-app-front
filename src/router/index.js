import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import RegisterLanding from "@/views/RegisterLanding.vue";
import RegisterWizard from "@/views/RegisterWizard.vue";
import Survey from "@/views/Survey.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "RegisterLanding",
    component: RegisterLanding,
  },
  {
    path: "/register-wizard",
    name: "RegisterWizard",
    component: RegisterWizard,
  },
  {
    path: "/participate",
    name: "Survey",
    component: Survey,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
