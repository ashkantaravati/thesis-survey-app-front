<template>
  <div class="step-container" id="survey-step-3">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <p>
      درباره‌ی تیمی که در آن حضور دارید میزان موافقیت یا مخالفت خود با هر یک از
      گزاره‌های زیر را مشخص کنید.
    </p>
    <el-card class="mb-halfrem">
      <template
        v-for="question in answers.teamCoordinationQuestions"
        :key="question.questionText"
      >
        <div class="mb-halfrem">
          {{ question.questionText }}
        </div>
        <div dir="ltr">
          <el-radio-group v-model="question.answer" size="small">
            <el-radio-button label="1">شدیدا مخالفم</el-radio-button>
            <el-radio-button label="2">مخالفم</el-radio-button>
            <el-radio-button label="3">نه مخالف و نه موافقم</el-radio-button>
            <el-radio-button label="4">موافقم</el-radio-button>
            <el-radio-button label="5">شدیدا موافقم</el-radio-button>
          </el-radio-group>
        </div>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyStep3",
});
</script>

<style>
</style>