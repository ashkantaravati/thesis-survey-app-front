<template>
  <p>
    از این که دقایقی از وقت ارزشمندتان را به تکمیل این پرسشنامه اختصاصی می‌دهید
    بسیار سپاسگزارم.
    <br />

    این پرسشنامه متشکل از <strong class="notice-text"> ۵ </strong> بخش و مجموعا
    شامل <strong class="notice-text"> ۳۵ </strong> پرسش می‌باشد و حداکثر
    <strong class="notice-text"> ۱۵ </strong> دقیقه از زمان شما را می‌گیرد..
  </p>

  <div class="mb-1rem">
    <em class="notice-text">
      <strong> توجه: </strong>
      مشارکت در این پرسشنامه در صورتی مفید خواهد بود که هر یک از اعضای یک تیم
      (گروهی متشکل از حداقل ۳ نفر) به این پرسشنامه پاسخ دهند و جامعه‌ی آماری این
      تحقیق افراد نیستند. در کمال ارادت، مشارکت افرادی که عضو تیمی نیستند یا
      سایر هم‌تیمی‌ها علاقه‌ای به مشارکت ندارند موثر نخواهد بود
    </em>
  </div>
  <div class="d-flex jc-center mb-halfrem mt-1rem">
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
