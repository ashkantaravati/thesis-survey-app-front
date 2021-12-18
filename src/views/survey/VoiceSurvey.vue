<template>
  <div class="step-container" id="survey-step-5">
    <h3>
      ارزیابی رفتار صدای تیم
    </h3>
    <p>
      در این قسمت لطفا به ازای هر یک از هم‌تیمی‌های خود به این ۶ سوال پاسخ دهید:
    </p>
    <multi-response-likert-scale-question
      v-for="(question,index) in voiceSurvey"
      :question="question"
      :index="index+1"
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
  methods:{
    submit(){
      // if valid
      this.$emit('submit')
    }
  },
  computed: {
    voiceSurvey() {
      return this.$store.state.survey.voiceSurvey;
    },
  },
});
</script>

<style></style>
