<template>
  <div class="step-container" id="survey-step-3">
    <!-- <h3>ارزیابی هماهنگی تیم از نظر شما</h3> -->
    <p>
      درباره‌ی تیمی که در آن حضور دارید میزان موافقت یا مخالفت خود با هر یک از
      گزاره‌های زیر را مشخص کنید.
    </p>
    <div class="mb-halfrem inner-container">
      <template
        v-for="(question, index) in teamCoordinationSurvey"
        :key="index"
      >
        <likert-scale-question
          :ref="`f-${question.index}`"
          :question="question"
          mutation-type="setTeamCoordinationSurveyResponse"
        />
        <el-divider></el-divider>
      </template>
    </div>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click.stop="goNext" />
</template>

<script lang="ts">
import LikertScaleQuestion from "@/core/components/LikertScaleQuestion.vue";
import { defineComponent } from "vue";
import { ElMessage } from "element-plus";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "TeamCoordinationSurvey",
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
      if (!this.surveyProgress.step3) {
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

    teamCoordinationSurvey() {
      return this.$store.state.survey.teamCoordinationSurvey;
    },
  },
});
</script>

<style></style>
