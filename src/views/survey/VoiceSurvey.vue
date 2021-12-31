<template>
  <div class="step-container" id="survey-step-5">
    <!-- <h3>ارزیابی رفتار صدای تیم</h3> -->
    <p>
      در این قسمت لطفا به ازای هر یک از هم‌تیمی‌های خود به این ۶ سوال پاسخ دهید:
    </p>
    <div class="mb-halfrem inner-container">
      <template v-for="(question, index) in voiceSurvey" :key="index">
        <likert-scale-question
          :ref="`f-${question.index}`"
          :question="question"
          mutation-type="setVoiceSurveyResponse"
        />
        <el-divider></el-divider>
      </template>
    </div>
  </div>
  <proceed-button type="finalize" text="ارسال" @click="submit" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VoiceSurvey",
  methods: {
    submit() {
      // if valid
      this.$emit("submit");
    },
  },
  computed: {
    voiceSurvey() {
      return this.$store.state.survey.voiceSurvey;
    },
  },
});
</script>

<style></style>
