<template>
  <h3>مشخصات سازمان و نماینده</h3>
  <el-form
    :model="generalInfo"
    :rules="rules"
    ref="generalInfoForm"
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
    <el-form-item prop="repName">
      <el-input
        placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
        v-model="generalInfo.repName"
        autocomplete="name"
      ></el-input>
    </el-form-item>
    <el-form-item prop="repJobTitle">
      <el-input
        placeholder="سمت شما"
        v-model="generalInfo.repJobTitle"
        autocomplete="organization-title"
      ></el-input>
    </el-form-item>
    <el-form-item prop="email">
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

  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "نام سازمان نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
        repName: [
          {
            required: true,
            message: "نام شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
        repJobTitle: [
          {
            required: true,
            message: "سمت شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
        repEmail: [
          {
            required: false,
            message: "آدرس ایمیل صحیح وارد کنید",
            trigger: "blur",
          },
        ],
      },
    };
  },

  props: {},
});
</script>

<style>
</style>