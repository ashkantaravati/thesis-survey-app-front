<template>
  <el-steps :active="currentStep" align-center>
    <el-step title="گام اول"></el-step>
    <el-step title="گام دوم"></el-step>
    <el-step title="گام سوم"></el-step>
    <el-step title="گام چهارم"></el-step>
  </el-steps>
  <div class="step-container" v-show="currentStep === 0">
    <h3>مشخصات سازمان و نماینده</h3>

    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="organizationName">
        <el-input
          placeholder="نام یا عنوان تجاری سازمان"
          v-model="ruleForm.organizationName"
          type="text"
          autocomplete="organization"
        ></el-input>
      </el-form-item>
      <el-form-item prop="repFullName">
        <el-input
          placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
          v-model="ruleForm.repFullName"
          autocomplete="name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="repJobTitle">
        <el-input
          placeholder="سمت شما"
          v-model="ruleForm.repJobTitle"
          autocomplete="organization-title"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="ایمیل (اختیاری)"
          v-model="repEmail"
          autocomplete="email"
          type="email"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
  <div class="step-container" v-show="currentStep === 1">
    <h3>اطلاعات تیم‌ها و اعضای تیم‌ها</h3>
    <p>
      نام افراد صرفا برای شناسایی و تفکیک اطلاعات آن هاست. چنانچه تمایل به مخفی
      ماندن نام افراد دارید می‌توانید از نام های مستعار اما یکتا استفاده کنید.
      توجه کنید این نام‌ها در پرسشنامه برای افراد قابل رویت خواهند بود
    </p>
    <el-card
      class="box-card mb-halfrem"
      v-for="(team, index) in teams"
      :key="team.index"
    >
      <template #header>
        <div class="card-header">
          <span>اعضای تیم {{ index + 1 }}</span>
          <el-tooltip
            class="item"
            effect="dark"
            content="حذف تیم"
            placement="top-start"
          >
            <el-button
              @click="removeTeam(team)"
              type="danger"
              icon="el-icon-delete"
              circle
              plain
              class="mr-halfrem"
            ></el-button>
          </el-tooltip>
        </div>
      </template>
      <el-row
        v-for="(member, index) in team.members"
        :key="index"
        class="text item d-flex"
      >
        <el-col :xs="4" :lg="2">عضو {{ index + 1 }}</el-col>
        <el-col :xs="18" :lg="21">
          <el-input
            class="pb-1rem"
            v-model="member.name"
            placeholder="نام عضو"
          />
        </el-col>
        <el-col :xs="2" :lg="1" v-show="team.members.length > 2">
          <el-tooltip
            class="item"
            effect="dark"
            content="حذف عضو"
            placement="top-start"
          >
            <el-button
              @click="removeTeamMember(team, member)"
              type="danger"
              icon="el-icon-delete"
              circle
              plain
              size="mini"
              class="mr-halfrem"
            ></el-button> </el-tooltip
        ></el-col>
      </el-row>

      <el-button @click="addTeamMember(team)" type="primary" plain>
        + افزودن عضو
      </el-button>
    </el-card>
    <div class="d-flex jc-center mb-halfrem">
      <el-button @click="addTeam" type="primary" round>
        + افزودن تیم
      </el-button>
    </div>

    <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
  </div>
  <div class="step-container" v-show="currentStep === 2">
    <h3>خلاصه‌ی اطلاعات وارد‌شده و بازبینی</h3>
    <el-alert type="warning" :closable="false" class="mb-halfrem">
      <span class="mx-halfrem">نام سازمان: {{ organizationName }}</span>
      <span class="mx-halfrem"> نام شما: {{ repFullName }}</span>
      <span class="mx-halfrem"> سمت شما: {{ repJobTitle }}</span>
      <span class="mx-halfrem"> ایمیل شما: {{ repEmail }}</span>
      <span class="mx-halfrem"> تعداد تیم‌های شما: {{ teams.length }}</span>
    </el-alert>

    <el-card
      class="box-card mb-halfrem"
      v-for="team in teams"
      :key="team.index"
    >
      <template #header>
        <div class="card-header">
          <span
            >اطلاعات تیم {{ team.index }} (شامل
            {{ team.members.length }} نفر)</span
          >
        </div>
      </template>
      <div v-for="member in team.members" :key="member.index" class="text item">
        {{ member.name }} <br />
      </div>
    </el-card>
    <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
  </div>
  <div class="step-container" v-show="currentStep === 3">
    <h3>دریافت لینک برای مشارکت تیم‌ها</h3>
    <p>
      از وقت که برای تکمیل مرحله ی اول گذاشتید متشکرم. حال می‌توانید با توجه به
      اطلاعات که ثبت نمدید نسبت به ارسال لینک های اختصاص زیر که برای هر کدام از
      تیم هایتان تلید شده به تیم ها اقدام فرمایید.
    </p>
    <template v-for="team in teams" :key="team.index">
      <el-alert type="info" :closable="false">
        <a :href="team.sharableLink "> {{ team.sharableLink }}</a> 
        <el-button
          icon="el-icon-document-copy"
          @click.stop.prevent="copyTestingCode"
          >کپی</el-button
        >

        <input type="hidden" id="testing-code" :value="team.sharableLink" />
      </el-alert>
    </template>
  </div>

  <div class="fix-btns-container">
    <el-button @click="goPrev" :disabled="currentStep === 0">
      <i class="el-icon-arrow-right"></i>گام قبل
    </el-button>
    <el-button @click="goNext" :disabled="currentStep === 3">
      گام بعد <i class="el-icon-arrow-left"></i
    ></el-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      currentStep: 0,
      repEmail: ref(""),
      teams: [],
      testingCode: "1234",
      ruleForm: {
        organizationName: ref(""),
        repFullName: ref(""),
        repJobTitle: ref(""),
      },
      rules: {
        organizationName: [
          {
            required: true,
            message: "نام سازمان نمی‌تواند خالی باشد",
            trigger: "blur",
          },
        ],
        repFullName: [
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
      },
    };
  },
  methods: {
    goNext() {
      this.currentStep++;
    },
    goPrev() {
      this.currentStep--;
    },
    addTeam() {
      this.teams.push({
        members: [{ name: ref("") }, { name: ref("") }],
        sharableLink: ref(
          "https://thesis.ashkantaravati.ir/participate/Xh12b8Y"
        ),
      });
    },
    removeTeam(team) {
      this.teams.splice(this.teams.indexOf(team), 1);
    },
    addTeamMember(team) {
      team.members.push({ name: ref("") });
    },
    removeTeamMember(team, member) {
      if (team.members.length === 2) return; // at least 2 members required
      team.members.splice(team.members.indexOf(member), 1);
    },
    copyTestingCode() {
      let testingCodeToCopy = document.querySelector("#testing-code");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();
      try {
        alert("با موفقیت کپی شد");
      } catch (err) {
        alert("کپی نشد :(");
      }

      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
.step-container h3,
h6 {
  color: #3a8ee6;
}
</style>
