<template>
  <div id="info-bar">
    <span>
      سازمان شما:
      {{ teamInfo.organization.name }}
    </span>
    <br />
    <span>
      تیم شما:
      {{ teamInfo.name }}
    </span>

    <h2 v-if="currentStep !== -1">
      گام {{ currentStep + 1 }}: {{ stepTitle }}
    </h2>
  </div>
  <div id="survey-intro" v-show="currentStep === -1">
    <p>
      سلام! از این که وقت ارزشمندتان را در اختیار من قرار می‌دهید سپاسگزارم
      .پاسخ به این پرسشنامه حدودا ۱۵ دقیقه زمان می‌برد. روند پرسشنامه به این
      صورت است که:
    </p>

    <el-button round type="primary" @click="goNext"
      >من آماده ام. شروع کن</el-button
    >
  </div>
  <div id="survey-step-1" v-show="currentStep === 0">
    <el-select
      v-model="answers.generalQuestions.participantName"
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
      v-model="answers.generalQuestions.participantAge"
      :min="15"
      :max="80"
    ></el-input-number>
    <el-radio-group v-model="answers.generalQuestions.sex" dir="ltr">
      <el-radio-button label="خانم"></el-radio-button>
      <el-radio-button label="آقا"></el-radio-button>
    </el-radio-group>

    <div class="block">
      <p>میزان سابقه کار شما ( بر حسب سال)</p>
      <el-slider
        v-model="answers.generalQuestions.tenure"
        show-input
        step="0.5"
        :max="40"
      >
      </el-slider>
    </div>
    <div class="block">
      <p>مدت حضور شما در این تیم ( بر حسب ماه)</p>
      <el-slider
        v-model="answers.generalQuestions.teamHistory"
        show-input
        :max="60"
      >
      </el-slider>
    </div>
  </div>
  <div id="survey-step-2" v-show="currentStep === 1">
    در پاسخ به هر یک از سوالاتی که در ادامه آمده است بازه‌ای از اعداد را وارد
    کنید که با حداقل ۹۰٪ اطمینان فکر می‌کنید پاسخ درست در آن بازه قرار دارد.

    <el-card>
      <template
        v-for="question in answers.overconfidenceQuestions"
        :key="question.questionText"
      >
        <span>
          {{ question.questionText }}
        </span>
        <el-input-number placeholder="کف" v-model="question.min">
        </el-input-number>
        <el-input-number placeholder="سقف" v-model="question.max">
        </el-input-number>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <div id="survey-step-3" v-show="currentStep === 2"></div>
  <div id="survey-step-4" v-show="currentStep === 3"></div>
  <div id="survey-step-5" v-show="currentStep === 4"></div>
  <div v-show="currentStep === 5"></div>
  <div class="fix-btns-container" v-show="currentStep !== -1">
    <el-button @click="goPrev" :disabled="currentStep !== 0 ? disabled : ''">
      <i class="el-icon-arrow-right"></i>گام قبل
    </el-button>
    <el-button @click="goNext" :disabled="currentStep !== 3 ? disabled : ''">
      گام بعد <i class="el-icon-arrow-left"></i
    ></el-button>
  </div>
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
        generalQuestions: {
          participantId: 0,
          participantAge: 22,
          sex: "male",
          tenure: "",
          teamHistory: "",
        },
        overconfidenceQuestions: [
          { questionText: "به نظر شما سوال ۱", min: "", max: "" },
          { questionText: "به نظر شما سوال ۲", min: "", max: "" },
          { questionText: "به نظر شما سوال ۳", min: "", max: "" },
          { questionText: "به نظر شما سوال ۴", min: "", max: "" },
          { questionText: "به نظر شما سوال ۵", min: "", max: "" },
          { questionText: "به نظر شما سوال ۶", min: "", max: "" },
          { questionText: "به نظر شما سوال ۷", min: "", max: "" },
          { questionText: "به نظر شما سوال ۸", min: "", max: "" },
          { questionText: "به نظر شما سوال ۹", min: "", max: "" },
          { questionText: "به نظر شما سوال ۱۰", min: "", max: "" },
        ],
      },
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
  },
  computed: {
    stepTitle() {
      if (this.currentStep === -1) return "";
      console.log(this.currentStep);
      const STEPS = [
        "سوالات عمومی",
        "ارزیابی بیش‌اطمینانی",
        "ارزیابی هماهنگی تیم از نظر شما",
        "ارزیابی اثربخشی تیم از نظر شما",
        "ارزیابی رفتار صدای تیم",
        "پایان",
      ];
      return STEPS[this.currentStep];
    },
  },
});
</script>

<style>
</style>