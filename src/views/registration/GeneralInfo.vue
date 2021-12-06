<template>
  <h3>مشخصات سازمان و نماینده</h3>
  <el-form
    :model="generalInfo"
    :rules="rules"
    ref="generalInfoForm"
    class="demo-ruleForm"
  >
    <el-form-item prop="repName">
      <el-input
        placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
        v-model="generalInfo.repName"
        autocomplete="name"
      ></el-input>
    </el-form-item>
    <el-form-item prop="name">
      <el-input
        placeholder="نام یا عنوان تجاری سازمان"
        v-model="generalInfo.name"
        type="text"
        autocomplete="organization"
      ></el-input>
    </el-form-item>
    <el-form-item prop="repJobTitle">
      <el-input
        placeholder="سمت شما"
        v-model="generalInfo.repJobTitle"
        autocomplete="organization-title"
      ></el-input>
    </el-form-item>
    <el-form-item prop="repEmail">
      <el-input
        placeholder="ایمیل (اختیاری)"
        v-model="generalInfo.repEmail"
        autocomplete="email"
        type="email"
      ></el-input>
    </el-form-item>
    <proceed-button type="proceed" text="گام بعد" @click="goNext" />
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProceedButton from "@/components/common/ProceedButton.vue";

export default defineComponent({
  name: "GeneralInfo",
  components: { ProceedButton },
  computed: {
    generalInfo: {
      get() {
        return this.$store.state.registrationInfo.generalInfo;
      },
      set(value) {
        this.$store.commit("updateGeneralInfo", value);
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
          {
            min: 3,
            message: "نام سازمان باید حداقل ۳ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        repName: [
          {
            required: true,
            message: "نام شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 5,
            message: "نام شما باید حداقل ۵ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        repJobTitle: [
          {
            required: true,
            message: "سمت شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 4,
            message: "سمت شما باید حداقل ۴ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        repEmail: [
          {
            required: false,
            message: "آدرس ایمیل صحیح وارد کنید",
            trigger: "blur",
          },
          {
            type: "email",
            message: "لطفا ایمیل با فرمت صحیح وارد کنید",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  mounted() {
    this.showHelp();
  },

  methods: {
    showHelp() {
      this.$emit("showHelpRequested");
    },
    goNext(): void {
      const generalInfoForm = this.$refs["generalInfoForm"] as any;
      generalInfoForm.validate((valid: boolean) => {
        if (valid) {
          this.$emit("proceed");
        } else {
          return false;
        }
      });
    },
  },
});
</script>

<style></style>
