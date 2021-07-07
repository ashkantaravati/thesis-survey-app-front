<template>
  <el-steps :active="currentStepIndex" align-center>
    <el-step
      v-for="step in steps"
      :key="step.index"
      :title="step.title"
    ></el-step>
  </el-steps>

  <router-view></router-view>
  <div class="fix-btns-container">
    <el-button @click="goPrev" :disabled="isFirstStep">
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegistrationLayout",
  props: {},
  methods: {
    goNext() {
      const nextIndex = this.currentStepIndex + 1;
      const nextStep = this.getStep(nextIndex);
      if (nextStep == undefined) return;

      this.$router.push({ name: nextStep.routeName });
    },
    goPrev() {
      const prevIndex = this.currentStepIndex - 1;
      const prevStep = this.getStep(prevIndex);
      if (prevStep == undefined) return;
      this.$router.push({ name: prevStep.routeName });
    },
    getStep(index) {
      return this.steps.find((step) => step.index === index);
    },
  },
  computed: {
    currentStep() {
      const currentRouteName = this.$router.currentRoute.value.name;
      return this.steps.find((step) => step.routeName === currentRouteName);
    },

    currentStepIndex() {
      return this.currentStep != undefined ? this.currentStep.index : 0;
    },
    isFirstStep() {
      return this.currentStepIndex === 0;
    },
    isLastStep() {
      return this.currentStepIndex === this.steps.length - 1;
    },
  },

  data() {
    return {
      steps: [
        {
          index: 0,
          title: "اطلاعات اصلی",
          routeName: "register-step-1",
        },
        {
          index: 1,
          title: "تیم‌های شرکت‌کننده",
          routeName: "register-step-2",
        },
        {
          index: 2,
          title: "بازبینی اطلاعات",
          routeName: "register-step-3",
        },
        {
          index: 3,
          title: "پایان",
          routeName: "register-step-4",
        },
      ],
    };
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
.el-step__title {
  line-height: 18px;
}

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