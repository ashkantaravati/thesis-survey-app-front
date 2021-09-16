<template>
  <div class="step-container" id="survey-step-5">
    <h3>
      ارزیابی رفتار صدای تیم
    </h3>
    <p>
      در این قسمت لطفا به ازای هر یک از هم‌تیمی‌های خود با این ۶ سوال پاسخ دهید:
    </p>
    <voice-survey-item
      v-for="survey in voiceSurvey"
      :survey="survey"
      :key="survey.id"
    />
  </div>
  <!-- <proceed-button type="proceed" text="گام بعد" @click="$emit('proceed')" /> -->
  <proceed-button type="finalize" text="ارسال" @click="$emit('submit')" />
</template>

<script>
import VoiceSurveyItem from "@/components/survey/VoiceSurveyItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { VoiceSurveyItem },
  name: "SurveyStep5",
  computed: {
    voiceSurvey() {
      return this.$store.state.survey.voiceSurveys;
    },
  },
});
</script>

<style></style>
