<template>
  <el-steps :active="currentStep">
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
  </el-steps>
  <div v-show="currentStep === 0">
    <h2><strong>گام اول:</strong> مشخصات سازمان و نماینده</h2>
    <el-input
      placeholder="نام یا عنوان تجاری سازمان"
      v-model="organizationName"
    ></el-input>
    <el-input
      placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
      v-model="repFullName"
    ></el-input>
    <el-input placeholder="سمت شما" v-model="repJobTitle"></el-input>
    <el-input placeholder="ایمیل" v-model="repEmail"></el-input>
    <el-button @click="goNext"> گام بعد </el-button>
  </div>
  <div v-show="currentStep === 1">
    <h2><strong>گام دوم:</strong> اطلاعات تیم‌ها و اعضای تیم‌ها</h2>
    <p>
      نام افراد صرفا برای شناسایی و تفکیک اطلاعات آن هاست. چنانچه تمایل به مخف
      ماندن نام افراد دارید م تانید از نام های مستار اما یکتا استفاده کنید. تجه
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
        <el-input v-model="member.name" placeholder="نام عضو" />
      </div>
      <el-button @click="addTeamMember(team)"> + افزودن عضو </el-button>
    </el-card>

    <el-button @click="addTeam"> + افزودن تیم </el-button>

    <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button>
  </div>
  <div v-show="currentStep === 2">
    <h2><strong>گام سوم:</strong> خلاصه‌ی اطلاعات وارد‌شده و بازبینی</h2>
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
    <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button>
  </div>
  <div v-show="currentStep === 3">
    <h2><strong>گام چهارم:</strong> دریافت لینک برای مشارکت تیم‌ها</h2>
    <p>
      از وقت که برای تکمیل مرحله ی اول گذاشتید متشکرم. حال م تانید با تجه به
      اطلاعات که ثبت نمدید نسبت به ارسال لینک های اختصاص زیر که برای هر کدام از
      تیم هایتان تلید شده به تیم ها اقدام فرمایید.
    </p>
    <template v-for="team in teams" :key="team.index">
      <el-input v-model="team.sharableLink" readonly />
      <el-button icon="el-icon-document-copy"></el-button>
    </template>
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

<style></style>
