<template>
  <el-steps :active="currentStep" align-center>
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
  </el-steps>
  <div class="step-container" v-show="currentStep === 0">
    <h3><strong>گام اول:</strong> مشخصات سازمان و نماینده</h3>
    <el-input
      class="pb-1rem"
      placeholder="نام یا عنوان تجاری سازمان"
      v-model="organizationName"
      type="text"
      autocomplete="organization"
    ></el-input>
    <el-input
      class="pb-1rem"
      placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
      v-model="repFullName"
      autocomplete="name"
    ></el-input>
    <el-input
      class="pb-1rem"
      placeholder="سمت شما"
      v-model="repJobTitle"
      autocomplete="organization-title"
    ></el-input>
    <el-input
      class="pb-1rem"
      placeholder="ایمیل"
      v-model="repEmail"
      autocomplete="email"
      type="email"
    ></el-input>
  </div>
  <div class="step-container" v-show="currentStep === 1">
    <h3><strong>گام دوم:</strong> اطلاعات تیم‌ها و اعضای تیم‌ها</h3>
    <p>
      نام افراد صرفا برای شناسایی و تفکیک اطلاعات آن هاست. چنانچه تمایل به مخف
      ماندن نام افراد دارید می‌توانید از نام های مستار اما یکتا استفاده کنید.
      توجه کنید این نام ها در پرسشنامه برای افراد قابل رویت خواهند بود
    </p>
    <el-card
      class="box-card mb-halfrem"
      v-for="(team, index) in teams"
      :key="team.index"
    >
      <template #header>
        <div class="card-header">
          <span>اعضای تیم {{ index + 1 }}</span>
          <el-button class="button mr-halfrem" type="danger" plain round>
            <i class="el-icon-delete"></i> حذف تیم</el-button
          >
        </div>
      </template>
      <el-row
        v-for="(member, index) in team.members"
        :key="member.name"
        class="text item d-flex"
      >
        <el-col :span="2">عضو {{ index + 1 }}</el-col>
        <el-col :span="22">
          <el-input
            class="pb-1rem"
            v-model="member.name"
            placeholder="نام عضو"
          />
        </el-col>
      </el-row>
      <el-button @click="addTeamMember(team)" type="primary">
        + افزودن عضو
      </el-button>
    </el-card>

    <el-button @click="addTeam" class="p-btn-primary"> + افزودن تیم </el-button>

    <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
  </div>
  <div class="step-container" v-show="currentStep === 2">
    <h3><strong>گام سوم:</strong> خلاصه‌ی اطلاعات وارد‌شده و بازبینی</h3>
    <el-alert type="warning" :closable="false" class="mb-halfrem">
      <span class="mx-halfrem">نام سازمان: {{ organizationName }}</span>
      <span class="mx-halfrem"> نام شما: {{ repFullName }}</span>
      <span class="mx-halfrem"> سمت شما: {{ repJobTitle }}</span>
      <span class="mx-halfrem"> ایمیل شما: {{ repEmail }}</span>
      <span class="mx-halfrem"> تعداد تیم‌های شما: {{ teams.length }}</span>
    </el-alert>

    <el-card class="box-card" v-for="team in teams" :key="team.index">
      <template #header>
        <div class="card-header">
          <span
            >اطلاعات تیم {{ team.index }} (شامل
            {{ team.members.length }} نفر)</span
          >
        </div>
      </template>
      <div v-for="member in team.members" :key="member.index" class="text item">
        {{ member.name }} <br />
      </div>
    </el-card>
    <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
  </div>
  <div class="step-container" v-show="currentStep === 3">
    <h3><strong>گام چهارم:</strong> دریافت لینک برای مشارکت تیم‌ها</h3>
    <p>
      از وقت که برای تکمیل مرحله ی اول گذاشتید متشکرم. حال می‌توانید با توجه به
      اطلاعات که ثبت نمدید نسبت به ارسال لینک های اختصاص زیر که برای هر کدام از
      تیم هایتان تلید شده به تیم ها اقدام فرمایید.
    </p>
    <template v-for="team in teams" :key="team.index">
      <p class="code text-red">
        {{ team.sharableLink
        }}<el-button
          icon="el-icon-document-copy"
          @click.stop.prevent="copyTestingCode"
          >کپی</el-button
        >
      </p>

      <input type="hidden" id="testing-code" :value="team.sharableLink" />
    </template>
  </div>

  <div class="fix-btns-container">
    <el-button @click="goPrev" :disabled="currentStep !== 0 ? disabled : ''">
      <i class="el-icon-arrow-right"></i>گام قبل
    </el-button>
    <el-button @click="goNext" :disabled="currentStep !== 3 ? disabled : ''">
      گام بعد <i class="el-icon-arrow-left"></i
    ></el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      currentStep: 0,
      organizationName: ref(""),
      repFullName: ref(""),
      repJobTitle: ref(""),
      repEmail: ref(""),
      teams: [],
      testingCode: "1234",
    };
  },
  methods: {
    goNext() {
      this.currentStep++;
    },
    goPrev() {
      this.currentStep--;
    },
    addTeam() {
      this.teams.push({
        members: [{ name: ref("") }, { name: ref("") }],
        sharableLink: ref(
          "https://thesis.ashkantaravati.ir/participate/Xh12b8Y"
        ),
      });
    },
    addTeamMember(team) {
      team.members.push({ name: ref("") });
    },
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#testing-code");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();
      try {
        alert("با موفقیت کپی شد");
      } catch (err) {
        alert("کپی نشد :(");
      }

      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
  },
});
</script>

<style>
.el-steps--horizontal {
  position: relative;
}
.el-steps--horizontal:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #d9d9d9;
  top: 10px;
}
.el-step.is-horizontal .el-step__line {
  display: none;
}
.step-container {
  min-height: 300px;
}
.fix-btns-container {
  background: white;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 1;
  bottom: 0;
  margin: 0 auto;
}
</style>
