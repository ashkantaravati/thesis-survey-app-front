<template>
  <div class="step-container" id="survey-step-2">
    <div class="mb-halfrem">
      <strong
        >مشابه مثال، محدوده‌ای که پاسخ سوال را در بر دارد حدس بزنید</strong
      >
    </div>

    <div class="mb-halfrem inner-container example-card">
      <min-max-question
        :ref="`f-${example.question.index}`"
        :readonly="true"
        :question="example.question"
      >
        <template v-slot:pre>
          <strong style="color: orange"> مثال: </strong>
        </template>
        <template v-slot:post>
          <strong style="color: red"> توجه: </strong>
          <ul>
            <em class="notice-text"></em>

            <li>پاسخ‌ها را صرفا <em class="notice-text">حدس</em> بزنید</li>
            <li>
              از جستجو در اینترنت یا استفاده از منابع دیگر
              <em class="notice-text">پرهیز</em> کنید
            </li>
            <li>پاسخ درست را از دیگران سوال نکنید</li>
            <li>برای پوشش دادن پاسخ صحیح، بازه را بیش از حد بزرگ نکنید</li>
          </ul>
        </template>
      </min-max-question>
    </div>
    <div class="mb-halfrem inner-container">
      <!-- <min-max-question
        :ref="`f-${example.question.index}`"
        :readonly="true"
        :question="example.question"
      >
        <template v-slot:pre>
          <span style="color: orange"> مثال: </span>
        </template>
      </min-max-question>
      <el-divider class="my-halfrem"></el-divider> -->
      <template
        v-for="(question, index) in overconfidenceSurvey"
        :key="question.index"
      >
        <min-max-question
          :ref="`f-${question.index}`"
          :question="question"
          :index="index + 1"
        />
        <el-divider
          class="my-halfrem"
          v-if="isNotLastQuestion(index)"
        ></el-divider>
      </template>
    </div>
  </div>
  <proceed-button type="proceed" text="گام بعد" @click="goNext" />
</template>

<script lang="ts">
import MinMaxQuestion from "@/core/components/MinMaxQuestion.vue";
import { defineComponent } from "vue";

const example = {
  question: {
    index: 0,
    text: "مهاتما گاندی در چه سال میلادی متولد شد؟ (جواب ۱۸۶۹ است)",
    response: {
      min: 1865,
      max: 1875,
    },
  },
  correctAnswer: "مهاتما گاندی در سال ۱۸۶۹ متولد شد. ",
};
export default defineComponent({
  components: { MinMaxQuestion },
  name: "OverconfidenceSurvey",

  data() {
    return {
      isHintVisible: false,
      example,
    };
  },
  methods: {
    isNotLastQuestion(index: number) {
      return index !== Object.keys(this.overconfidenceSurvey).length - 1;
    },
    validateAll(): boolean {
      let valid = true;
      for (const refKey in this.$refs) {
        const form = this.$refs[refKey] as typeof MinMaxQuestion;
        form.validate((isValid: boolean) => {
          valid &&= isValid;
        });
      }
      return valid;
    },
    goNext(): void | boolean {
      if (this.validateAll()) {
        this.$emit("proceed");
      } else {
        return false;
      }
    },
  },
  computed: {
    overconfidenceSurvey() {
      return this.$store.state.survey.overconfidenceSurvey;
    },
  },
});
</script>

<style>
.example-card {
  border: 1px orange dashed !important;
}
</style>
