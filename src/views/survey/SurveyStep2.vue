<template>
  <div class="step-container" id="survey-step-2">
    <h3>
      ارزیابی بیش‌اطمینانی
    </h3>
    <p>
      در پاسخ به هر یک از سوالاتی که در ادامه آمده است بازه‌ای از اعداد را وارد
      کنید که با حداقل ۹۰٪ اطمینان فکر می‌کنید پاسخ درست در آن بازه قرار دارد.
    </p>
    <el-card class="mb-halfrem">
      <template v-for="(question, name) in overconfidenceSurvey" :key="name">
        <min-max-question :ref="name" :question="question" />
        <el-divider></el-divider>
      </template>
    </el-card>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click="goNext" />
</template>

<script lang="ts">
import MinMaxQuestion from "@/components/survey/MinMaxQuestion.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MinMaxQuestion },
  name: "SurveyStep2",
  methods: {
    validateAll():boolean {
      let valid = true;
      const keys = Object.keys(this.overconfidenceSurvey);
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
    overconfidenceSurvey() {
      return this.$store.state.survey.overconfidenceSurvey;
    },
  },
});
</script>

<style></style>
