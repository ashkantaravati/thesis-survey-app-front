<template>
  <h3>مشخصات سازمان و نماینده</h3>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
  >
    <el-form-item prop="name">
      <el-input
        placeholder="نام یا عنوان تجاری سازمان"
        v-model="generalInfo.name"
        type="text"
        autocomplete="organization"
      ></el-input>
    </el-form-item>
    <el-form-item prop="rep_name">
      <el-input
        placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
        v-model="generalInfo.repName"
        autocomplete="name"
      ></el-input>
    </el-form-item>
    <el-form-item prop="rep_job_title">
      <el-input
        placeholder="سمت شما"
        v-model="generalInfo.repJobTitle"
        autocomplete="organization-title"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-input
        placeholder="ایمیل (اختیاری)"
        v-model="generalInfo.repEmail"
        autocomplete="email"
        type="email"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegStep1",
  computed: {
    generalInfo: {
      get() {
        return this.$store.state.registrationInfo.generalInfo;
      },
      set(value) {
        this.$store.$emit("updateGeneralInfo", value);
      },
    },
  },

  props: {},
});
</script>

<style>
</style>