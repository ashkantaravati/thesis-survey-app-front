<template>
  <div class="step-container" id="survey-step-5">
    <h3>ارزیابی رفتار صدای تیم</h3>
    <p>
      در این قسمت لطفا به ازای هر یک از هم‌تیمی‌های خود به این ۶ سوال پاسخ دهید:
    </p>
    <multi-response-likert-scale-question
      v-for="(question, index) in voiceSurvey"
      :ref="`f-${question.index}`"
      :question="question"
      :index="index + 1"
      mutationType="setVoiceSurveyResponse"
      :key="question.index"
    />
  </div>
  <proceed-button type="finalize" text="ارسال" @click="submit" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MultiResponseLikertScaleQuestion from "@/core/components/MultiResponseLikertScaleQuestion.vue";

export default defineComponent({
  components: { MultiResponseLikertScaleQuestion },
  name: "VoiceSurvey",
  methods: {
    validateAll(): boolean {
      let valid = true;
      for (const refKey in this.$refs) {
        const form = this.$refs[
          refKey
        ] as typeof MultiResponseLikertScaleQuestion;
        form.validate((isValid: boolean) => {
          valid &&= isValid;
        });
      }
      return valid;
    },
    submit(): void | boolean {
      if (this.validateAll()) {
        this.$emit("submit");
      } else {
        return false;
      }
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
