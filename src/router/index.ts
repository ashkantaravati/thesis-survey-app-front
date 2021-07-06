import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import RegistrationLayout from "@/layouts/RegistrationLayout.vue";
import Survey from "@/views/Survey.vue";
import { RegStep1, RegStep2, RegStep3, RegStep4 } from "@/views/registration";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    component: RegistrationLayout,
    children: [
      {
        path: "step-1",
        name: "register-step-1",
        component: RegStep1,
      },
      {
        path: "step-2",
        name: "register-step-2",
        component: RegStep2,
      },
      {
        path: "step-3",
        name: "register-step-3",
        component: RegStep3,
      },
      {
        path: "step-4",
        name: "register-step-4",
        component: RegStep4,
      },
    ],
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
