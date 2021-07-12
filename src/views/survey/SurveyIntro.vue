<template>
  <div id="survey-intro">
    <p>
      سلام! از این که وقت ارزشمندتان را در اختیار من قرار می‌دهید سپاسگزارم
      .پاسخ به این پرسشنامه حدودا ۱۵ دقیقه زمان می‌برد. روند پرسشنامه به این
      صورت است که:
    </p>

    <el-button
      round
      type="primary"
      @click="$router.push({ name: 'survey-step-1' })"
      >من آماده ام. شروع کن</el-button
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyIntro",
});
</script>

<style>
</style>