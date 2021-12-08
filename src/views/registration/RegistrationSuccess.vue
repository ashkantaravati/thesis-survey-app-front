<template>
  <h3>دریافت لینک برای مشارکت تیم‌ها</h3>

  <el-alert
    type="success"
    title="ثبت نام با موفقیت انجام شد"
    center
    show-icon
    :closable="false"
  >
    <div>
      <p>
        از زمانی که برای تکمیل مرحله‌ی اول گذاشتید بسیار سپاسگزارم. حالا
        می‌توانید لینک‌های ساخته شده برای هر تیم را برای تکمیل پرسشنامه (مرحله‌ی
        دوم) در اختیار اعضای آن تیم قرار دهید.
      </p>
      <ul v-for="team in teams" :key="team.id">
        <li>
          <strong>
            لینک دعوت برای اعضای
            {{ team.name }}:
          </strong>
          <el-link type="info">
            <router-link
              style="margin-left:10px"
              :to="{ name: 'survey-intro', params: { teamId: team.id } }"
            >
              {{ team.link }}</router-link
            >
          </el-link>

          <el-button v-clipboard="team.link" icon="el-icon-document-copy"
            >کپی</el-button
          >
        </li>
      </ul>
    </div>
  </el-alert>
</template>

<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "RegistrationSuccess",

  setup() {
    const store = useStore();

    return {
      teams: computed(() => store.state.temp.teams),
    };
  },
});
</script>

<style></style>
