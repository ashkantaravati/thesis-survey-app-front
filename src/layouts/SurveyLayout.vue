<template>
  <h2>پرسشنامه</h2>
  <div id="info-bar">
    <p class=" ">
      شرکت‌کننده‌ی گرامی از تیم
      <strong> «{{ teamInfo.name }}» </strong>
      سازمان
      <strong> «{{ teamInfo.organizationName }}» </strong>
      ؛ وقت بخیر!
    </p>
  </div>
  <el-steps v-if="currentStep" :active="currentStepIndex" align-center>
    <el-step
      v-for="step in steps"
      :key="step.index"
      :title="step.title"
    ></el-step>
  </el-steps>
  <div style="position: relative">
    <el-link
      class="prev-step"
      v-if="!isFirstStep"
      @click.prevent="goPrev"
      type="info"
    >
      <i class="el-icon-right"></i>
      گام قبل</el-link
    >
  </div>
  <router-view
    @proceed="goNext"
    @submit="submitResponse({ goToSuccessPage, goToErrorPage })"
  ></router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapActions, useStore } from "vuex";
// import { getTeamInfo } from "../api/survey.service";
type Step = { index: number; title: string; routeName: string };
export default defineComponent({
  name: "SurveyLayout",
  props: {
    teamId: { type: String, required: true },
  },
  setup() {
    const store = useStore();

    return {
      teamInfo: computed(() => store.state.teamInfo),
    };
  },
  methods: {
    ...mapActions(["fetchTeamInfo", "submitResponse"]),
    goNext() {
      const nextIndex = this.currentStepIndex + 1;
      const nextStep = this.getStep(nextIndex);
      if (nextStep == undefined) return;

      this.$router.push({ name: nextStep.routeName });
    },
    goPrev() {
      const prevIndex = this.currentStepIndex - 1;
      const prevStep = this.getStep(prevIndex);
      if (prevStep == undefined) return;
      this.$router.push({ name: prevStep.routeName });
    },
    getStep(index: number) {
      return this.steps.find((step) => step.index === index);
    },
    goToSuccessPage() {
      this.$router.push({ name: "register-success" });
    },
    goToErrorPage() {
      this.$router.push({ name: "error" });
    },
  },
  computed: {
    currentStep(): Step | undefined {
      const currentRouteName = this.$router.currentRoute.value.name;
      return this.steps.find((step) => step.routeName === currentRouteName);
    },

    currentStepIndex(): number {
      return this.currentStep != undefined ? this.currentStep.index : 0;
    },
    isFirstStep(): boolean {
      return this.currentStepIndex === 0;
    },
    isLastStep(): boolean {
      return this.currentStepIndex === this.steps.length - 1;
    },
  },

  created() {
    this.fetchTeamInfo(this.teamId);
  },

  data() {
    return {
      steps: [
        {
          index: 0,
          title: "سوالات عمومی",
          routeName: "survey-step-1",
        },
        {
          index: 1,
          title: "بیش‌اطمینانی",
          routeName: "survey-step-2",
        },
        {
          index: 2,
          title: "هماهنگی تیم",
          routeName: "survey-step-3",
        },
        {
          index: 3,
          title: "اثربخشی تیم",
          routeName: "survey-step-4",
        },
        {
          index: 4,
          title: "رفتار صدای تیم",
          routeName: "survey-step-5",
        },
        {
          index: 5,
          title: "بازبینی",
          routeName: "survey-review",
        },
      ],
    };
  },
});
</script>

<style>
@media screen and (max-width: 768px) {
  .el-radio-group:not(.sex) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .el-radio-button--small .el-radio-button__inner {
    border-left: 1px solid #dcdfe6;
    min-width: 9rem;
    border-radius: 0 !important;
  }
}
.step-container h4 {
  background: #d9ebff;
  padding: 5px 10px;
  border-radius: 5px;
  color: #384a5d;
}
.el-input-number__decrease,
.el-input-number__increase {
  background: #324f6d !important;
  color: #ffffff !important;
  font-size: 15px !important;
}
</style>
