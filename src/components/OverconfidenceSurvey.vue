<template>
  <p>
    در پاسخ به هر یک از سوالاتی که در ادامه آمده است بازه‌ای از اعداد را وارد
    کنید که با حداقل ۹۰٪ اطمینان فکر می‌کنید پاسخ درست در آن بازه قرار دارد.
  </p>
  <el-card class="mb-halfrem">
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_1 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_1_min">
    </el-input-number>

    <el-input-number placeholder="سقف" v-model="answers.question_1_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_2 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_2_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_2_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_3 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_3_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_3_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_4 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_4_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_4_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_5 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_5_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_5_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_6 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_6_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_6_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_7 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_7_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_7_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_8 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_8_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_8_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_9 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_9_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_9_max">
    </el-input-number>
    <el-divider></el-divider>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_10 }}
    </div>
    <div class="mb-halfrem">
      {{ overconfidenceQuestions.question_10 }}
    </div>
    <el-input-number placeholder="کف" v-model="answers.question_10_min">
    </el-input-number>
    <el-input-number placeholder="سقف" v-model="answers.question_10_max">
    </el-input-number>
    <el-divider></el-divider>
  </el-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "OverconfidenceSurvey",
  props: { modelValue: Object, overconfidenceAnswers: Object },
  computed: {
    answers: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("@update:modelValue", value);
      },
    },
  },
});
</script>

<style>
</style>