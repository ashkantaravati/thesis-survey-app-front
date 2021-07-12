<template>
  <div class="step-container">
    <h3>
      بازبینی
    </h3>

    <el-card class="mb-halfrem">
      <h4>اطلاعات کلی</h4>
      <span> نام شما: {{ surveySummary.name }} </span>
      <span> سن: {{ surveySummary.age }} </span>
      <span> جنسیت: {{ surveySummary.sex }} </span>

      <span> سابقه کار: {{ surveySummary.tenure }} </span>

      <span> سابقه همکاری با تیم: {{ surveySummary.teamHistory }} </span>
    </el-card>
    <el-card class="mb-halfrem">
      <h4>سوالات بیش‌اطمینانی</h4>
      <ul>
        <li v-for="question in surveySummary.overconfidence" :key="question.id">
          <span>{{ question.text }}:</span>
          <span>{{ question.response.min }} - {{ question.response.max }}</span>
        </li>
      </ul>
    </el-card>
    <el-card class="mb-halfrem">
      <h4>سوالات هماهنگی</h4>
      <ul>
        <li
          v-for="question in surveySummary.teamCoordination"
          :key="question.id"
        >
          <span>{{ question.text }}:</span>
          <span>{{ question.response.value }}</span>
        </li>
      </ul>
    </el-card>
    <el-card class="mb-halfrem">
      <h4>سوالات رفتار صدا</h4>
      {{ surveySummary.voice }}
      <!-- <div v-for="voiceSurvey in surveySummary.voice" :key="voiceSurvey.id">
        <ul>
          <li v-for="question in voiceSurvey" :key="question.index">
            <span>{{ question.text }}:</span>
            <span>{{ question.response.value }}</span>
          </li>
        </ul>
      </div> -->
    </el-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "SurveyReview",
  computed: {
    ...mapGetters(["surveySummary"]),
  },
});
</script>

<style></style>
