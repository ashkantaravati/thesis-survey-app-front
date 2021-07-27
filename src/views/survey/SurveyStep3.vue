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
        <likert-scale-question
          v-model="question.response"
          :title="question.text"
        />
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <proceed-button
    type="proceed"
    text="گام بعد"
    @click.prevent="$emit('proceed')"
  />
</template>

<script>
import LikertScaleQuestion from "@/components/survey/LikertScaleQuestion.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { LikertScaleQuestion },
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
