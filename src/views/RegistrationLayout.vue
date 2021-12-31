<template>
  <h2>ثبت نام سازمان</h2>

  <div class="registration-title">
    <router-view
      @submit.once="submit"
      @showHelpRequested="showHelp"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
  name: "RegistrationLayout",
  props: {},
  setup() {
    const store = useStore();

    return {
      loading: computed(() => store.state.loading),
    };
  },
  methods: {
    ...mapActions(["registerOrganization"]),
    showHelp() {
      this.$emit("showHelpRequested");
    },
    submit() {
      this.registerOrganization().then(() =>
        this.$router.push({ name: "register-success" })
      );
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
  right: 50%;
  transform: translateX(50%);
  left: 0;
  width: 80%;
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
  color: #a7ff7b;
}
.el-step__head.is-finish {
  color: #a7ff7b;
  border-color: #a7ff7b;
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
  font-weight: 300 !important;
}
@media screen and(max-width: 520px) {
  .el-step__title {
    font-size: 13px;
  }
}
.el-step.is-horizontal .el-step__line {
  display: none;
}
.step-container {
  min-height: 300px;
}
.fix-btns-container {
  background: #384a5d;
  box-shadow: 0 3px 10px rgb(0 0 0 / 50%);
  border-radius: 0.5rem;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  position: sticky;
  z-index: 1;
  bottom: 0;
  margin: 0 auto;
}
.fix-btns-container.align-left {
  justify-content: flex-end !important;
}
.el-form-item__error {
  left: unset !important;
  right: 0;
}
.step-container h3,
.registration-title h3 {
  color: #f5f5f5;
  margin-top: 2rem;
  text-align: center;
}
.prev-step {
  position: absolute;
  bottom: -45px;
  right: 0px;
}

@media screen and (max-width: 360px) {
  .fix-btns-container button {
    font-size: 10px !important;
  }
}
@media screen and (max-width: 400px) {
  .prev-step {
    bottom: -10px;
  }
}
</style>
