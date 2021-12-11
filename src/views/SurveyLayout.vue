<template>
  <h2>پرسشنامه</h2>
  <div id="info-bar" v-loading.fullscreen.lock="loading">
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
  <div>
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
    <router-view @proceed.once="goNext" @submit.once="submit"></router-view>
    <hint-dialog
      v-model="feedbackDialogIsVisible"
      @act="confirmAndSend"
      actionButtonText="تایید و ارسال"
      normalButtonText="بازگشت"
      showActionButton="true"
      width="40%"
    >
      <el-input
        v-model="feedback"
        autosize
        type="textarea"
        placeholder="نظر شما در مورد این پرسشنامه (اختیاری)"
      />
    </hint-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { mapActions, mapMutations, useStore } from "vuex";
// import { getTeamInfo } from "../api/survey.service";
type Step = {
  index: number;
  title: string;
  routeName: string;
  completed: boolean;
};
export default defineComponent({
  name: "SurveyLayout",
  props: {
    teamId: { type: String, required: true },
  },
  setup() {
    const store = useStore();
    const feedbackDialogIsVisible = ref(false);

    return {
      loading: computed(() => store.state.loading),
      progress: computed(() => store.state.progress),
      teamInfo: computed(() => store.state.teamInfo),
      feedbackDialogIsVisible,
    };
  },
  methods: {
    ...mapActions(["fetchTeamInfo", "submitResponse"]),
    ...mapMutations(["setProgress"]),

    goNext() {
      this.markCurrentStepAsComplete();
      const nextIndex = this.currentStepIndex + 1;
      const nextStep = this.getStep(nextIndex);
      if (nextStep == undefined) return;
      this.setProgress(nextIndex);
      this.$router.push({ name: nextStep.routeName });
    },
    goPrev() {
      const prevIndex = this.currentStepIndex - 1;
      const prevStep = this.getStep(prevIndex);
      if (prevStep == undefined) return;
      this.$router.push({ name: prevStep.routeName });
    },
    getStep(index: number): Step | undefined {
      return this.steps.find((step) => step.index === index);
    },
    goToSuccessPage() {
      this.$router.push({ name: "success" });
    },
    goToErrorPage() {
      this.$router.push({ name: "error" });
    },
    confirmAndSend() {
      this.feedbackDialogIsVisible = false;

      this.submitResponse({
        onSuccess: this.goToSuccessPage,
        onFailure: this.goToErrorPage,
      });
    },
    submit(): void {
      this.markCurrentStepAsComplete();
      if (this.noRemainingStepsLeft) {
        this.feedbackDialogIsVisible = true;
      } else {
        this.$alert("هنوز همه‌ی مراحل را تکمیل نکرده اید.", "دست نگه‌دارید!", {
          confirmButtonText: "بازگشت به مراحل",
          callback: () => {
            this.$router.push({ name: this.firstIncompleteStep.routeName });
          },
        });
      }
    },
    markCurrentStepAsComplete() {
      this.currentStep.completed = true;
    },
  },
  computed: {
    feedback: {
      get(): string {
        return this.$store.state.survey.feedback;
      },
      set(value: string) {
        this.$store.commit("setFeedback", value);
      },
    },
    currentStep(): Step {
      const currentRouteName = this.$router.currentRoute.value.name;
      return (
        this.steps.find((step) => step.routeName === currentRouteName) ||
        this.firstStep
      );
    },

    currentStepIndex(): number {
      return (this.currentStep != undefined) ? this.currentStep.index : 0;
    },
    isFirstStep(): boolean {
      return this.currentStepIndex === 0;
    },
    isLastStep(): boolean {
      return this.currentStepIndex === this.steps.length - 1;
    },
    lastIndex(): number {
      return this.steps.length > 0
        ? this.steps[this.steps.length - 1].index
        : 0;
    },
    numberOfSteps(): number {
      return this.steps.length;
    },
    numberOfCompletedSteps(): number {
      return this.steps.filter((step) => step.completed).length;
    },
    numberOfRemainingSteps(): number {
      return this.steps.length - this.numberOfCompletedSteps;
    },
    noRemainingStepsLeft(): boolean {
      return this.numberOfRemainingSteps === 0;
    },
    firstIncompleteStep(): Step {
      return this.steps.find((step) => !step.completed) || this.firstStep;
    },
    firstStep(): Step {
      return this.getStep(0) as Step;
    },
  },
  created() {
    if (this.teamInfo.members.length === 0) this.fetchTeamInfo(this.teamId);
  },

  data() {
    return {
      steps: [
        {
          index: 0,
          title: "سوالات عمومی",
          routeName: "survey-step-1",
          completed: false,
        },
        {
          index: 1,
          title: "بیش‌اطمینانی",
          routeName: "survey-step-2",
          completed: false,
        },
        {
          index: 2,
          title: "هماهنگی تیم",
          routeName: "survey-step-3",
          completed: false,
        },
        {
          index: 3,
          title: "اثربخشی تیم",
          routeName: "survey-step-4",
          completed: false,
        },
        {
          index: 4,
          title: "رفتار صدای تیم",
          routeName: "survey-step-5",
          completed: false,
        },
        // {
        //   index: 5,
        //   title: "بازبینی",
        //   routeName: "survey-review",
        //   completed: false,
        // },
      ] as Step[],
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
