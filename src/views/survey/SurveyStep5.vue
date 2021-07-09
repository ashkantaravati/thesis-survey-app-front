<template>
  <div class="step-container" id="survey-step-5">
    <h3 v-if="currentStep !== -1">
      {{ stepTitle }}
    </h3>
    <p>
      در این قسمت لطفا به ازای هر یک از هم‌تیمی‌های خود با این ۶ سوال پاسخ دهید:
    </p>
    <el-card
      class="mb-halfrem"
      v-for="member in answers.teamMembers"
      :key="member.name"
    >
      <h4>
        درباره‌ی {{ member.name }}
        <template v-if="member.id === answers.generalQuestions.participantId">
          (خودم)</template
        >:
      </h4>
      <template
        v-for="question in member.questions"
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
  name: "SurveyStep5",
});
</script>

<style>
</style>