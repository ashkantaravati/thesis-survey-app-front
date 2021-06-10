<template>
  <div>
    <span>
      سازمان شما:
      {{ teamInfo.organization.name }}
    </span>
    <br />
    <span>
      تیم شما:
      {{ teamInfo.name }}
    </span>

    <h2 v-if="currentStep !== -1">گام {{ currentStep + 1 }}:</h2>
  </div>
  <div v-show="currentStep === -1">
    <p>
      سلام! از این که وقت ارزشمندتان را در اختیار من قرار می‌دهید سپاسگزارم
      .پاسخ به این پرسشنامه حدودا ۱۵ دقیقه زمان می‌برد. روند پرسشنامه به این
      صورت است که:
    </p>

    <el-button round type="primary" @click="goNext"
      >من آماده ام. شروع کن</el-button
    >
  </div>
  <div v-show="currentStep === 0">
    <el-select
      v-model="answers.participantName"
      filterable
      placeholder="نام خود را از لیست انتخاب کنید"
    >
      <el-option
        v-for="member in teamInfo.members"
        :key="member.id"
        :label="member.name"
        :value="member.id"
      >
      </el-option>
    </el-select>
    <el-input-number
      v-model="answers.participantAge"
      :min="15"
      :max="80"
    ></el-input-number>
  </div>
  <div v-show="currentStep === 1"></div>
  <div v-show="currentStep === 2"></div>
  <div v-show="currentStep === 3"></div>
  <div v-show="currentStep === 4"></div>
  <div v-show="currentStep === 5"></div>
</template>

<script>
import { defineComponent } from "vue";
// import { getTeamInfo } from "../api/survey.service";

export default defineComponent({
  name: "Survey",
  // setup() {
  //   stepTitle: computed(() => {
  //     if (this.currentStep === -1) return "";
  //     console.log(this.currentStep);
  //     const STEPS = [
  //       "سوالات عمومی",
  //       "ارزیابی بیش‌اطمینانی",
  //       "ارزیابی هماهنگی تیم از نظر شما",
  //       "ارزیابی اثربخشی تیم از نظر شما",
  //       "ارزیابی رفتار صدای تیم",
  //       "پایان",
  //     ];
  //     return STEPS[this.currentStep];
  //   });
  // },
  data() {
    return {
      answers: {
        participantId: 0,
        participantAge: 22,
      },

      // STEP: {
      //   INTRO: -1,
      //   GENERAL: 0,
      //   OVERCONFIDENCE: 1,
      //   COORDINATION: 2,
      //   EFFECTIVENESS: 3,
      //   VOICE: 4,
      //   FINISHED: 5,
      // },
      currentStep: -1,
      teamInfo: {
        name: "تیم شماره ۱",
        id: "29ce0188-8688-4ba1-b79f-3b2b76786529",
        members: [
          {
            id: 1,
            name: "سرکار خانم مرادی",
          },
          {
            id: 2,
            name: "مرجان",
          },
          {
            id: 3,
            name: "علیرضا احمدی",
          },
          {
            id: 4,
            name: "اشکان طراوتی",
          },
        ],
        organization: {
          id: "47d126c8-8966-4a2e-9f55-a8a25d014431",
          name: "ارتباطات نوین پیام‌آوران پارسیان هومان",
        },
      },
    };
  },
  mounted() {
    // getTeamInfo("29ce0188-8688-4ba1-b79f-3b2b76786529").then((res) => {
    //   this.teamInfo = res;
    // });
  },
  methods: {
    goNext() {
      this.currentStep++;
    },
    goPrev() {
      if (this.currentStep == 0) return;
      this.currentStep--;
    },
    // computed: {},
  },
});
</script>

<style>
</style>