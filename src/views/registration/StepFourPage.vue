<template>
  <h3>دریافت لینک برای مشارکت تیم‌ها</h3>
  <p>
    از وقت که برای تکمیل مرحله ی اول گذاشتید متشکرم. حال می‌توانید با توجه به
    اطلاعات که ثبت نمدید نسبت به ارسال لینک های اختصاص زیر که برای هر کدام از
    تیم هایتان تلید شده به تیم ها اقدام فرمایید.
  </p>
  <template v-for="team in ruleForm.teams" :key="team.index">
    <el-alert type="info" :closable="false">
      <a :href="team.link"> {{ team.link }}</a>
      <el-button
        v-clipboard="team.link"
        icon="el-icon-document-copy"
        @click.stop.prevent="copyTestingCode"
        >کپی</el-button
      >
    </el-alert>
  </template>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "",
  props: {},
});
</script>

<style>
</style>