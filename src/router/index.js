import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import RegisterLanding from "@/views/register/RegisterLanding.vue";
import RegisterWizard from "@/views/register/RegisterWizard.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
