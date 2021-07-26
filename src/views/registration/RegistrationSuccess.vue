<template>
  <h3>دریافت لینک برای مشارکت تیم‌ها</h3>
  <p>
    از وقت که برای تکمیل مرحله ی اول گذاشتید متشکرم. حال می‌توانید با توجه به
    اطلاعات که ثبت نمدید نسبت به ارسال لینک های اختصاص زیر که برای هر کدام از
    تیم هایتان تلید شده به تیم ها اقدام فرمایید.
  </p>
  <template v-for="team in teams" :key="team.index">
    <el-alert type="info" :closable="false">
      <router-link style="margin-left:10px" :to="{ name: 'survey-intro', params: { teamId: team.id } }">
        {{ team.link }}</router-link
      >
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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "RegistrationSuccess",
  props: {},
  setup() {
    const store = useStore();

    return {
      teams: computed(() => store.state.registrationInfo.teams),
    };
  },
});
</script>

<style></style>
