<template>
  <div class="step-container" id="survey-step-4">
    <h3>
      ارزیابی اثربخشی تیم از نظر شما
    </h3>
    <el-card class="mb-halfrem">
      <template v-for="(question, name) in teamEffectivenessSurvey" :key="name">
        <likert-scale-question
          :ref="name"
          v-model="question.response"
          :title="question.text"
          :scale="7"
        />
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click="goNext" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LikertScaleQuestion from "@/components/survey/LikertScaleQuestion.vue";

export default defineComponent({
  name: "SurveyStep4",
  components: { LikertScaleQuestion },
    methods: {
    validateAll():boolean {
      let valid = true;
       const keys = Object.keys(this.teamEffectivenessSurvey);
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
    teamEffectivenessSurvey: {
      get() {
        return this.$store.state.survey.teamEffectivenessSurvey;
      },
      set(value) {
        this.$store.commit("setTeamEffectivenessSurveyResponse", value);
      },
    },
  },
});
</script>

<style></style>
