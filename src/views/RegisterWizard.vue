<template>
  <el-steps :active="currentStep" align-center>
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
  </el-steps>
  <div class="step-container" v-show="currentStep === 0"></div>
  <div class="step-container" v-show="currentStep === 1"></div>
  <div class="step-container" v-show="currentStep === 2"></div>
  <div class="step-container" v-show="currentStep === 3"></div>

  <div class="fix-btns-container">
    <el-button @click="goPrev" :disabled="currentStep === 0">
      <i class="el-icon-arrow-right"></i>گام قبل
    </el-button>
    <el-button @click="goNext" v-show="!isLastStep">
      گام بعد <i class="el-icon-arrow-left"></i
    ></el-button>
    <el-button @click="register" v-show="isLastStep">
      ثبت و دریافت لینک اشتراک‌گذاری <i class="el-icon-arrow-left"></i
    ></el-button>
  </div>
</template>

<script>
import { submitOrganizationInfo } from "@/api/services";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      currentStep: 0,
      rules: {
        name: [
          {
            required: true,
            message: "نام سازمان نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
        rep_name: [
          {
            required: true,
            message: "نام شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
        rep_job_title: [
          {
            required: true,
            message: "سمت شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    isLastStep() {
      return this.currentStep === 2;
    },
  },
  // methods: {
  //   goNext() {
  //     this.currentStep++;
  //   },
  //   goPrev() {
  //     this.currentStep--;
  //   },
  //   resetForm(formName) {
  //     this.$refs[formName].resetFields();
  //   },
  // },
});
</script>

<style>
</style>
