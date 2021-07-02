<template>
  <div id="info-bar">
    <p class="m-0">
      سازمان شما:
      <strong>
        {{ teamInfo.organization.name }}
      </strong>
    </p>
    <p>
      تیم شما:
      <strong>
        {{ teamInfo.name }}
      </strong>
    </p>
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
  <el-steps :active="currentStep" align-center v-show="currentStep !== -1">
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
    <el-step title="گام آخر"></el-step>
  </el-steps>

  <div class="step-container" id="survey-step-1" v-show="currentStep === 0">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <div class="block mb-halfrem">
      <p>نام خود را از لیست انتخاب کنید</p>
      <el-select
        v-model="answers.generalQuestions.participantId"
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
    </div>
    <div class="block mb-halfrem">
      <p>سن خود را از لیست انتخاب کنید</p>
      <el-input-number
        v-model="answers.generalQuestions.participantAge"
        :min="15"
        :max="80"
      ></el-input-number>
    </div>
    <div class="block mb-halfrem">
      <p>جنسیت خود را از لیست انتخاب کنید</p>
      <el-radio-group v-model="answers.generalQuestions.sex" dir="ltr">
        <el-radio-button label="خانم"></el-radio-button>
        <el-radio-button label="آقا"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="block mb-halfrem">
      <p>میزان کل سابقه کار شما ( بر حسب سال)</p>
      <el-slider
        v-model="answers.generalQuestions.tenure"
        show-input
        step="0.5"
        :max="40"
      >
      </el-slider>
    </div>
    <div class="block mb-halfrem">
      <p>مدت حضور شما در این تیم ( بر حسب ماه)</p>
      <el-slider
        v-model="answers.generalQuestions.teamHistory"
        show-input
        :max="60"
      >
      </el-slider>
    </div>
  </div>
  <div class="step-container" id="survey-step-2" v-show="currentStep === 1">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <p>
      در پاسخ به هر یک از سوالاتی که در ادامه آمده است بازه‌ای از اعداد را وارد
      کنید که با حداقل ۹۰٪ اطمینان فکر می‌کنید پاسخ درست در آن بازه قرار دارد.
    </p>
    <el-card class="mb-halfrem">
      <template
        v-for="question in answers.overconfidenceQuestions"
        :key="question.questionText"
      >
        <div class="mb-halfrem">
          {{ question.questionText }}
        </div>
        <el-input-number placeholder="کف" v-model="question.min">
        </el-input-number>
        <el-input-number placeholder="سقف" v-model="question.max">
        </el-input-number>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <div class="step-container" id="survey-step-3" v-show="currentStep === 2">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <p>
      درباره‌ی تیمی که در آن حضور دارید میزان موافقیت یا مخالفت خود با هر یک از
      گزاره‌های زیر را مشخص کنید.
    </p>
    <el-card class="mb-halfrem">
      <template
        v-for="question in answers.teamCoordinationQuestions"
        :key="question.questionText"
      >
        <div class="mb-halfrem">
          {{ question.questionText }}
        </div>
        <div dir="ltr">
          <el-radio-group v-model="question.answer" size="small">
            <el-radio-button label="1">شدیدا مخالفم</el-radio-button>
            <el-radio-button label="2">مخالفم</el-radio-button>
            <el-radio-button label="3">نه مخالف و نه موافقم</el-radio-button>
            <el-radio-button label="4">موافقم</el-radio-button>
            <el-radio-button label="5">شدیدا موافقم</el-radio-button>
          </el-radio-group>
        </div>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <div class="step-container" id="survey-step-4" v-show="currentStep === 3">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <el-card class="mb-halfrem">
      برای این قسمت هنوز پرسشنامه‌ی مشخصی نداریم...
    </el-card>
  </div>
  <div class="step-container" id="survey-step-5" v-show="currentStep === 4">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <p>
      در این قسمت لطفا به ازای هر یک از هم‌تیمی‌های خود با این ۶ سوال پاسخ دهید:
    </p>
    <el-card
      class="mb-halfrem"
      v-for="member in answers.teamMembers"
      :key="member.name"
    >
      <h4>
        درباره‌ی {{ member.name }}
        <template v-if="member.id === answers.generalQuestions.participantId">
          (خودم)</template
        >:
      </h4>
      <template
        v-for="question in member.questions"
        :key="question.questionText"
      >
        <div class="mb-halfrem">
          {{ question.questionText }}
        </div>
        <div dir="ltr">
          <el-radio-group v-model="question.answer" size="small">
            <el-radio-button label="1">شدیدا مخالفم</el-radio-button>
            <el-radio-button label="2">مخالفم</el-radio-button>
            <el-radio-button label="3">نه مخالف و نه موافقم</el-radio-button>
            <el-radio-button label="4">موافقم</el-radio-button>
            <el-radio-button label="5">شدیدا موافقم</el-radio-button>
          </el-radio-group>
        </div>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <div v-show="currentStep === 5"></div>
  <div class="fix-btns-container" v-show="currentStep !== -1">
    <el-button @click="goPrev" :disabled="currentStep === 0">
      <i class="el-icon-arrow-right"></i>گام قبل
    </el-button>
    <el-button @click="goNext" :disabled="currentStep === 4">
      گام بعد <i class="el-icon-arrow-left"></i
    ></el-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import http from "@/api/gateway";
// import { getTeamInfo } from "../api/survey.service";

export default defineComponent({
  name: "Survey",
  props: {
    teamId: { type: String, required: true },
  },

  data() {
    return {
      answers: {
        generalQuestions: {
          participantId: 0,
          participantName: "",
          participantAge: 22,
          sex: "male",
          tenure: "",
          teamHistory: "",
        },
        teamEffectivenessQuestions: [],
        teamMembers: [],
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

  created() {
    http
      .get(`/teams/${this.teamId}`)
      .then((res) => (this.teamInfo = res.data))
      .catch((e) => {
        console.log(e);
        // TODO: handle if team with teamId doesn't exist
      });
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
      ];
      return STEPS[this.currentStep];
    },
  },
});
</script>

<style>
@media screen and (max-width: 768px) {
  .el-radio-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .el-radio-button--small .el-radio-button__inner {
    border-width: 0 0 1px 0 !important;
    min-width: 9rem;
    border-radius: 0 !important;
  }
}
.step-container h4 {
  background: #d9ebff;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>