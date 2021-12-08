import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import NotFound from "@/views/NotFound.vue";
import Error from "@/views/Error.vue";
import Success from "@/views/Success.vue";
import Dashboard from "@/views/Dashboard.vue";
import RegistrationLayout from "@/views/RegistrationLayout.vue";
import SurveyLayout from "@/views/SurveyLayout.vue";

import {
  SurveyIntro,
  SurveyReview,
  SurveyStep1,
  SurveyStep2,
  SurveyStep3,
  SurveyStep4,
  SurveyStep5,
} from "@/views/survey";
import {
  GeneralInfo,
  TeamSetup,
  RegistrationReview,
  RegistrationSuccess,
} from "@/views/registration";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/dashboard/:orgId",
    name: "dashboard",
    props: true,
    component: Dashboard,
  },
  {
    path: "/register",
    name: "register",
    component: RegistrationLayout,
    children: [
      {
        path: "",
        name: "register-landing",
        redirect: "/register/1",
      },
      {
        path: "1",
        name: "register-step-1",
        component: GeneralInfo,
      },
      {
        path: "2",
        name: "register-step-2",
        component: TeamSetup,
      },
      {
        path: "3",
        name: "register-step-3",
        component: RegistrationReview,
      },
      {
        path: "success",
        name: "register-success",
        component: RegistrationSuccess,
      },
    ],
  },
  {
    path: "/participate/:teamId",
    name: "Survey",
    component: SurveyLayout,
    props: true,
    children: [
      {
        path: "",
        name: "survey-intro",
        component: SurveyIntro,
      },
      {
        path: "1",
        name: "survey-step-1",
        component: SurveyStep1,
      },
      {
        path: "2",
        name: "survey-step-2",
        component: SurveyStep2,
      },
      {
        path: "3",
        name: "survey-step-3",
        component: SurveyStep3,
      },
      {
        path: "4",
        name: "survey-step-4",
        component: SurveyStep4,
      },
      {
        path: "5",
        name: "survey-step-5",
        component: SurveyStep5,
      },
      {
        path: "6",
        name: "survey-review",
        component: SurveyReview,
      },
    ],
  },
  { path: "/error", name: "error", component: Error },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/success",
    name: "success",
    component: Success,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
