<template>
  <h3>دریافت لینک برای مشارکت تیم‌ها</h3>
  <p>
    از زمانی که برای تکمیل مرحله‌ی اول گذاشتید بسیار سپاسگزارم. حالا می‌توانید
    لینک‌های ساخته شده برای هر تیم را برای تکمیل پرسشنامه (مرحله‌ی دوم) در
    اختیار اعضای آن تیم قرار دهید.
  </p>
  <template v-for="team in teams" :key="team.index">
    <el-alert type="info" :closable="false">
      <router-link
        style="margin-left:10px"
        :to="{ name: 'survey-intro', params: { teamId: team.id } }"
      >
        {{ team.link }}</router-link
      >
      <el-button v-clipboard="team.link" icon="el-icon-document-copy"
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
