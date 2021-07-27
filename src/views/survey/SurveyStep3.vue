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
      <template v-for="(question, name) in teamCoordinationSurvey" :key="name">
        <likert-scale-question
          :ref="name"
          v-model="question.response"
          :title="question.text"
        />
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click="goNext" />
</template>

<script lang="ts">
import LikertScaleQuestion from "@/components/survey/LikertScaleQuestion.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { LikertScaleQuestion },
  name: "SurveyStep3",
    methods: {
    validateAll():boolean {
      let valid = true;
       const keys = Object.keys(this.teamCoordinationSurvey);
      for (const key of keys) {
      const form = this.$refs[key] as any;
      form.validate((isValid:boolean) => {valid &&=isValid;})
      }
      return valid;
    },
    goNext():void | boolean {
       if (this.validateAll()) {
          this.$emit("proceed");
        } else {
          return false;
        }
      }
    },
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
