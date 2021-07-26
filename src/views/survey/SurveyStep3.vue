<template>
  <div class="step-container" id="survey-step-3">
    <h3>
      ارزیابی هماهنگی تیم از نظر شما
    </h3>
    <p>
      درباره‌ی تیمی که در آن حضور دارید میزان موافقیت یا مخالفت خود با هر یک از
      گزاره‌های زیر را مشخص کنید.
    </p>
    <el-card class="mb-halfrem">
      <template
        v-for="question in teamCoordinationSurvey"
        :key="question.index"
      >
        <div class="mb-halfrem">
          {{ question.text }}
        </div>
        <div dir="ltr" class="text-right">
          <el-radio-group v-model="question.response.value" size="small">
            <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
            <el-radio-button :label="2">مخالفم</el-radio-button>
            <el-radio-button :label="3">نه مخالف و نه موافقم</el-radio-button>
            <el-radio-button :label="4">موافقم</el-radio-button>
            <el-radio-button :label="5">شدیدا موافقم</el-radio-button>
          </el-radio-group>
        </div>
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <proceed-button
    type="proceed"
    text="گام بعد"
    @click.once="$emit('proceed')"
  />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyStep3",
  computed: {
    teamCoordinationSurvey: {
      get() {
        return this.$store.state.survey.teamCoordinationSurvey;
      },
      set(value) {
        this.$store.commit("setTeamCoordinationSurveyResponse", value);
      },
    },
  },
});
</script>

<style></style>
