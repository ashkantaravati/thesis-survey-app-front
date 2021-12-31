<template>
  <p>
    از این که دقایقی از وقت ارزشمندتان را به تکمیل این پرسشنامه اختصاصی می‌دهید
    بسیار سپاسگزارم.
    <br />

    این پرسشنامه متشکل از ۵ بخش و مجموعا شامل ۳۵ پرسش می‌باشد.
  </p>
  <div class="d-flex jc-center mb-halfrem">
    <el-button
      round
      type="primary"
      @click="$router.push({ name: 'survey-step-1' })"
      >من آماده ام. شروع کن</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyIntro",
});
</script>

<style></style>
