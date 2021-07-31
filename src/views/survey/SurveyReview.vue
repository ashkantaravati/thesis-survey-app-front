<template>
  <div class="step-container">
    <h3>
      بازبینی
    </h3>
    <el-card class="mb-halfrem">
      <h4>اطلاعات کلی</h4>
      <ul>
        <li>
          <span>
            نام:
            {{ surveySummary.name }}
          </span>
        </li>
        <li>
          <span> سن: {{ surveySummary.age }}</span>
        </li>
        <li>
          <span> جنسیت: {{ surveySummary.sex }} </span>
        </li>

        <li>
          <span> سابقه کار: {{ surveySummary.tenure }} </span>
        </li>

        <li>
          <span> سابقه همکاری با تیم: {{ surveySummary.teamHistory }} </span>
        </li>
      </ul>
    </el-card>
    <el-card class="mb-halfrem">
      <h4>سوالات بیش‌اطمینانی</h4>
      <el-table :data="surveySummary.overconfidence">
        <el-table-column align="right" prop="text" label="سوال">
        </el-table-column>
        <el-table-column align="right" prop="answer" label="پاسخ" width="120">
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="mb-halfrem">
      <h4>سوالات هماهنگی</h4>
      <el-table :data="surveySummary.teamCoordination">
        <el-table-column align="right" prop="text" label="سوال">
        </el-table-column>
        <el-table-column align="right" prop="answer" label="پاسخ" width="120">
        </el-table-column>
      </el-table>
    </el-card>
    <el-card class="mb-halfrem">
      <h4>سوالات رفتار صدا</h4>
      <div
        v-for="voiceSurvey in surveySummary.voice"
        :key="voiceSurvey.subject"
      >
        <h5>درباره‌ی {{ voiceSurvey.subject }}:</h5>
        <el-table :data="voiceSurvey.questions">
          <el-table-column align="right" prop="text" label="سوال">
          </el-table-column>
          <el-table-column align="right" prop="answer" label="پاسخ" width="120">
          </el-table-column>
        </el-table>
        <!-- <ul>

          <li v-for="question in voiceSurvey.questions" :key="question.index">
            <span>{{ question.text }}:</span>
            <span class="answer">{{ question.answer }}</span>
          </li>
        </ul> -->
      </div>
    </el-card>
  </div>
  <proceed-button type="finalize" text="ارسال" @click="$emit('submit')" />
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "SurveyReview",
  computed: {
    ...mapGetters(["surveySummary"]),
    // bio() {
    //   return {
    //     name: this.surveySummary.name,
    //     sex: this.surveySummary.sex,
    //     age: this.surveySummary.age,
    //     tenure: this.surveySummary.tenure,
    //     teamHistory: this.surveySummary.teamHistory,
    //   };
    // },
  },
});
</script>

<style>
.answer {
  background-color: deepskyblue;
  padding: 2%;
  border-radius: 10px;
}
</style>
