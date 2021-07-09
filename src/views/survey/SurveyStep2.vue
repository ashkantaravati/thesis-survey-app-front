<template>
  <div class="step-container" id="survey-step-2">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <p>
      در پاسخ به هر یک از سوالاتی که در ادامه آمده است بازه‌ای از اعداد را وارد
      کنید که با حداقل ۹۰٪ اطمینان فکر می‌کنید پاسخ درست در آن بازه قرار دارد.
    </p>
    <el-card class="mb-halfrem">
      <template
        v-for="question in answers.overconfidenceQuestions"
        :key="question.questionText"
      >
        <div class="mb-halfrem">
          {{ question.questionText }}
        </div>
        <el-input-number placeholder="کف" v-model="question.min">
        </el-input-number>
        <el-input-number placeholder="سقف" v-model="question.max">
        </el-input-number>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyStep2",
});
</script>

<style>
</style>