<template>
  <el-steps :active="currentStep">
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
  </el-steps>
  <div v-show="currentStep === 0">
    <h2>
      گام اول: مشخصات سازمان و نماینده
    </h2>
    <el-input
      placeholder="نام یا عنوان تجاری سازمان"
      v-model="organizationName"
    ></el-input>
    <el-input
      placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
      v-model="repFullName"
    ></el-input>
    <el-input placeholder="سمت شما" v-model="repJobTitle"></el-input>
    <el-input placeholder="ایمیل" v-model="repEmail"></el-input>
    <el-button @click="currentStep++"> گام بعد </el-button>
  </div>
  <div v-show="currentStep === 1">
    <h2>گام دوم: اطلاعات تیم‌ها و اعضای تیم‌ها</h2>
    <el-button> افزودن تیم </el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      currentStep: 0,
      organizationName: ref(""),
      repFullName: ref(""),
      repJobTitle: ref(""),
      repEmail: ref(""),
    };
  },
});
</script>

<style></style>
