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
      <template
        v-for="(question, name, index) in overconfidenceSurvey"
        :key="name"
      >
        <min-max-question :ref="name" :question="question" />
        <el-divider
          class="my-halfrem"
          v-if="isLastQuestion(index)"
        ></el-divider>
      </template>
    </el-card>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click="goNext" />
  <hint-dialog v-model="isHintVisible">
    <p>
      در این مرحله از شما می‌خواهیم بدون جستجو در اینترنت یا هر منبع دیگر یا
      پرسیدن از دیگران و صرفا با اتکا به حافطه‌ی خود یا آنچه به ذهنتان خطور
      می‌کند به هر یک از سوالات پاسخ دهید.
      <br />
      نحوه‌ی پاسخ به سوالات به این صورت است که می‌بایست به هر یک از سوالات یک
      عدد به عنوان کران پایین و یک عدد به عنوان کران بالای بازه‌ای ارائه کنید که
      تصور می‌کنید پاسخ صحیح سوال در آن قرار می‌گیرد.
    </p>
  </hint-dialog>
</template>

<script lang="ts">
import MinMaxQuestion from "@/components/survey/MinMaxQuestion.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MinMaxQuestion },
  name: "OverconfidenceSurvey",
    mounted() {
    this.isHintVisible = true;
  },
  data(){
    return {
      isHintVisible: false,

    }
  },
  methods: {
    isLastQuestion(index: number){
      return index !== Object.keys(this.overconfidenceSurvey).length - 1
    },
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
