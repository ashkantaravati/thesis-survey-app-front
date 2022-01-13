<template class="success-container">
  <h3>دریافت لینک برای مشارکت تیم‌ها</h3>

  <el-alert
    type="success"
    title="ثبت نام با موفقیت انجام شد"
    center
    show-icon
    :closable="false"
  >
  </el-alert>
  <div>
    <p>
      از زمانی که برای تکمیل مرحله‌ی اول گذاشتید بسیار سپاسگزارم.
      <br />
      حالا می‌توانید لینک‌های ساخته شده برای هر تیم را برای تکمیل پرسشنامه در
      اختیار اعضای آن تیم قرار دهید.
    </p>
    <em class="notice-text">
      بار دیگر توجه داشته باشید که هر لینک متعلق به تک تک اعضای آن تیم است و نه
      یک فرد خاص
    </em>

    <el-row
      v-for="team in teams"
      :key="team.id"
      class="link-row"
      justify="center"
    >
      <el-col>
        <strong>
          لینک دعوت برای اعضای
          {{ team.name }}:
        </strong>
      </el-col>

      <el-col>
        <el-button type="info" class="invitation-link-btn">
          <router-link
            :to="{ name: 'survey-intro', params: { teamId: team.id } }"
          >
            {{ team.link }}</router-link
          >
        </el-button>
        <el-button class="copy-button" v-clipboard="team.link">
          <el-icon>
            <copy-icon />
          </el-icon>
        </el-button>
      </el-col>
    </el-row>
    <em class="notice-text">
      اگر در گام قبل ایمیل خود را وارد نکرده اید در نگهداری از این لینک‌ها بیشتر
      کوشا باشید
    </em>
  </div>
</template>

<script lang="ts">
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

<style>
.invitation-link-btn {
  margin-left: 0.25rem;
  background: white;
  padding: 0.5rem;
  min-width: 18rem;
}

.success-container {
  width: 70%;
  margin: auto;
}

.link-row {
  margin: auto;
  margin-bottom: 1rem;
}
.copy-button {
  padding: 0.5rem;
}
</style>
