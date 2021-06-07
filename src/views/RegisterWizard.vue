<template>
  <el-steps :active="currentStep" align-center>
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
  </el-steps> 
  <div class="step-container" v-show="currentStep === 0">
    <h3><strong>گام اول:</strong> مشخصات سازمان و نماینده</h3>
    <el-input class="pb-1rem"
      placeholder="نام یا عنوان تجاری سازمان"
      v-model="organizationName"
    ></el-input>
    <el-input class="pb-1rem"
      placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
      v-model="repFullName"
    ></el-input>
    <el-input class="pb-1rem" placeholder="سمت شما" v-model="repJobTitle"></el-input>
    <el-input class="pb-1rem" placeholder="ایمیل" v-model="repEmail"></el-input>

  </div>
  <div class="step-container" v-show="currentStep === 1">
    <h3><strong>گام دوم:</strong> اطلاعات تیم‌ها و اعضای تیم‌ها</h3>
    <p>
      نام افراد صرفا برای شناسایی و تفکیک اطلاعات آن هاست. چنانچه تمایل به مخف
      ماندن نام افراد دارید می‌توانید از نام های مستار اما یکتا استفاده کنید. توجه
      کنید این نام ها در پرسشنامه برای افراد قابل رویت خواهند بود
    </p>
    <el-card class="box-card" v-for="team in teams" :key="team.index">
      <template #header>
        <div class="card-header">
          <span>اعضای تیم {{ team.index }}</span>
          <el-button class="button" type="text">حذف تیم</el-button>
        </div>
      </template>
      <div v-for="member in team.members" :key="member.index" class="text item">
        <el-input class="pb-1rem" v-model="member.name" placeholder="نام عضو" />
      </div>
      <el-button @click="addTeamMember(team)"> + افزودن عضو </el-button>
    </el-card>

    <el-button @click="addTeam" class="p-btn-primary "> + افزودن تیم </el-button>

    <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
  </div>
  <div class="step-container" v-show="currentStep === 2">
    <h3><strong>گام سوم:</strong> خلاصه‌ی اطلاعات وارد‌شده و بازبینی</h3>
    نام سازمان: {{ organizationName }} نام شما: {{ repFullName }} سمت شما:
    {{ repJobTitle }} ایمیل شما: {{ repEmail }} تعداد تیم‌های شما:
    {{ teams.length }}

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
      <el-input class="pb-1rem" v-model="team.sharableLink" readonly />
      <el-button icon="el-icon-document-copy"></el-button>
    </template>
  </div>
  



  <div class="fix-btns-container">
        <el-button @click="goPrev" :disabled="currentStep !==0 ? disabled : ''">  <i class="el-icon-arrow-right"></i>گام قبل </el-button>
        <el-button @click="goNext"  :disabled="currentStep !==3 ? disabled : ''"> گام بعد  <i class="el-icon-arrow-left"></i></el-button>
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
      lastTeamIndex: 0,
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
      this.lastTeamIndex++;
      this.teams.push({
        index: this.lastTeamIndex,
        members: [
          { index: 1, name: ref("") },
          { index: 2, name: ref("") },
        ],
        sharableLink: ref(
          "https://thesis.ashkantaravati.ir/participate/Xh12b8Y"
        ),
      });
    },
    addTeamMember(team) {
      team.members.push({ index: 0, name: ref("") });
    },
  },
});
</script>

<style>
.el-steps--horizontal{
position: relative;
}
.el-steps--horizontal:after{
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
    height: 2px;
    background: #d9d9d9;
    top: 10px;
}
.el-step.is-horizontal .el-step__line{
  display: none;
}
.step-container{
  min-height: 300px;
}
.fix-btns-container{
  background: white;
    box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
    border-radius: .5rem;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    position: sticky; 
    z-index: 1;
    bottom: 0;
    margin: 0 auto;
}
</style>
