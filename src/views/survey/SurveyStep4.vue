<template>
  <div class="step-container" id="survey-step-4">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <el-card class="mb-halfrem">
      برای این قسمت هنوز پرسشنامه‌ی مشخصی نداریم...
    </el-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyStep4",
});
</script>

<style>
</style>