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
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      currentStep: 0,
      testingCode: "1234",
      ruleForm: {
        rep_email: ref(""),
        teams: [],
        name: ref(""),
        rep_name: ref(""),
        rep_job_title: ref(""),
      },
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
  methods: {
    goNext() {
      this.currentStep++;
    },
    goPrev() {
      this.currentStep--;
    },
    addTeam() {
      this.ruleForm.teams.push({
        name: "team",
        members: [{ name: ref("") }, { name: ref("") }],
        link: ref(""),
      });
    },
    removeTeam(team) {
      this.ruleForm.teams.splice(this.ruleForm.teams.indexOf(team), 1);
    },
    addTeamMember(team) {
      team.members.push({ name: ref("") });
    },
    removeTeamMember(team, member) {
      if (team.members.length === 2) return; // at least 2 members required
      team.members.splice(team.members.indexOf(member), 1);
    },
    register() {
      const organization = JSON.parse(JSON.stringify(this.ruleForm));
      submitOrganizationInfo(organization)
        .then((res) => {
          this.ruleForm = res.data;
          this.goNext();
        })
        .catch((e) => alert(e));
    },
    // PQ's codes
    // copyTestingCode() {
    //   let testingCodeToCopy = document.querySelector("#testing-code");
    //   testingCodeToCopy.setAttribute("type", "text");
    //   testingCodeToCopy.select();
    //   try {
    //     alert("با موفقیت کپی شد");
    //   } catch (err) {
    //     alert("کپی نشد :(");
    //   }

    //   testingCodeToCopy.setAttribute("type", "hidden");
    //   window.getSelection().removeAllRanges();
    // },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert("submit!");
    //     } else {
    //       console.log("error submit!!");
    //       return false;
    //     }
    //   });
    // },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
});
</script>

<style>
.el-steps--horizontal {
  position: relative;
}
.el-steps--horizontal:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #b0d7ff;
  top: 10px;
}
/*#region step numbers style*/

/* is wait */
.el-step__head.is-wait {
  border-color: #b0d7ff;
}
.el-step__head.is-wait .el-step__icon-inner {
  transition: 0.3s;
}
/* is process */
.el-step__title.is-process {
  color: #ffa51f;
}
.el-step__head.is-process {
  border-color: #ffa51f;
  color: #ffa51f;
}
.el-step__head.is-process .el-step__icon-inner {
  color: #fff;
  position: relative;
  transition: 0.3s;
}
.el-step__head.is-process .el-step__icon-inner:after {
  content: "";
  position: absolute;
  height: 7px;
  width: 7px;
  border: 2px solid #ffa51f;
  border-width: 0 0 2px 2px;
  transform: rotate(-45deg);
  top: 4px;
  left: 0px;
  border-radius: 0 0 0 2px;
  transition: 0.3s;
}
.el-step__head.is-process .el-step__icon-inner:before {
  content: "";
  position: absolute;
  height: 10px;
  width: 5px;
  border-left: 2px solid #ffa51f;
  top: 2px;
  left: 3px;
  transition: 0.3s;
}
@media screen and (max-width: 768px) {
  .el-step__head.is-process .el-step__icon-inner:before {
    left: 3.5px;
  }
}
/* is finish */
.el-step__title.is-finish {
  color: #2a7e00;
}
.el-step__head.is-finish {
  color: #2a7e00;
  border-color: #2a7e00;
}
.el-step__head.is-finish .el-step__icon-inner {
  color: #fff;
  position: relative;
  transition: 0.3s;
}
.el-step__head.is-finish .el-step__icon-inner:after {
  content: "";
  position: absolute;
  height: 5px;
  width: 10px;
  border: 2px solid #2a7e00;
  border-width: 0 0 2px 2px;
  transform: rotate(-45deg);
  top: 2px;
  left: -2px;
  border-radius: 0 0 0 2px;
  transition: 0.3s;
}
/*#endregion step numbers style*/

.el-step.is-horizontal .el-step__line {
  display: none;
}
.step-container {
  min-height: 300px;
}
.fix-btns-container {
  background: white;
  box-shadow: 0 2px 10px rgb(0 0 0 / 20%);
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 1;
  bottom: 0;
  margin: 0 auto;
}
.el-form-item__error {
  left: unset !important;
  right: 0;
}
.step-container h3 {
  color: #3a8ee6;
  text-align: center;
}
</style>
