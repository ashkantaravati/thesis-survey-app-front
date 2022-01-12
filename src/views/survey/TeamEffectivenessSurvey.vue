<template>
  <div class="step-container" id="survey-step-4">
    <!-- <h3>ارزیابی اثربخشی تیم از نظر شما</h3> -->
    <div class="mb-halfrem inner-container">
      <template
        v-for="(question, index) in teamEffectivenessSurvey"
        :key="index"
      >
        <likert-scale-question
          :ref="`f-${question.index}`"
          :question="question"
          mutation-type="setTeamEffectivenessSurveyResponse"
        />
        <el-divider></el-divider>
      </template>
    </div>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click.stop="goNext" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LikertScaleQuestion from "@/core/components/LikertScaleQuestion.vue";
import { ElMessage } from "element-plus";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TeamEffectivenessSurvey",
  methods: {
    validateAll(): boolean {
      let valid = true;
      for (const refKey in this.$refs) {
        const form = this.$refs[refKey] as typeof LikertScaleQuestion;
        form.validate((isValid: boolean) => {
          valid &&= isValid;
        });
      }
      return valid;
    },
    goNext(): void | boolean {
      if (!this.surveyProgress.step4) {
        ElMessage("هنوز همه‌ی فیلدها را پر نکرده‌اید");
      }
      if (this.validateAll()) {
        this.$emit("proceed");
      } else {
        return false;
      }
    },
  },
  computed: {
    ...mapGetters(["surveyProgress"]),

    teamEffectivenessSurvey() {
      return this.$store.state.survey.teamEffectivenessSurvey;
    },
  },
});
</script>

<style></style>
