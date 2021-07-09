<template>
  <div class="step-container" id="survey-step-1">
    <h3>سوالات عمومی</h3>
    <div class="block mb-halfrem">
      <p>نام خود را از لیست انتخاب کنید</p>
      <el-select
        v-model="answers.generalQuestions.participantId"
        filterable
        placeholder="نام خود را از لیست انتخاب کنید"
      >
        <el-option
          v-for="member in teamInfo.members"
          :key="member.id"
          :label="member.name"
          :value="member.id"
        >
        </el-option>
      </el-select>
    </div>
    <div class="block mb-halfrem">
      <p>سن خود را از لیست انتخاب کنید</p>
      <el-input-number
        v-model="answers.generalQuestions.participantAge"
        :min="15"
        :max="80"
      ></el-input-number>
    </div>
    <div class="block mb-halfrem">
      <p>جنسیت خود را از لیست انتخاب کنید</p>
      <el-radio-group v-model="answers.generalQuestions.sex" dir="ltr">
        <el-radio-button label="خانم"></el-radio-button>
        <el-radio-button label="آقا"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="block mb-halfrem">
      <p>میزان کل سابقه کار شما ( بر حسب سال)</p>
      <el-slider
        v-model="answers.generalQuestions.tenure"
        show-input
        step="0.5"
        :max="40"
      >
      </el-slider>
    </div>
    <div class="block mb-halfrem">
      <p>مدت حضور شما در این تیم ( بر حسب ماه)</p>
      <el-slider
        v-model="answers.generalQuestions.teamHistory"
        show-input
        :max="60"
      >
      </el-slider>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveyStep1",
});
</script>

<style>
</style>