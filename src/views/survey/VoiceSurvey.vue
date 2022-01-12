<template>
  <div class="step-container" id="survey-step-5">
    <!-- <h3>ارزیابی رفتار صدای تیم</h3> -->
    <span> سوالات زیر را در رابطه با خودتان و تیم‌تان پاسخ دهید </span>
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
  <proceed-button
    align="center"
    type="finalize"
    text="ثبت پاسخ"
    @click.stop="submit"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "VoiceSurvey",
  methods: {
    submit() {
      if (!this.surveyProgress.step5) {
        ElMessage("هنوز همه‌ی فیلدها را پر نکرده‌اید");
        return;
      }
      this.$emit("submit");
    },
  },
  computed: {
    ...mapGetters(["surveyProgress"]),

    voiceSurvey() {
      return this.$store.state.survey.voiceSurvey;
    },
  },
});
</script>

<style></style>
