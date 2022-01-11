<template>
  <el-dialog
    v-model="isHintVisible"
    :center="true"
    :width="80"
    :open-delay="10"
    :show-close="false"
    custom-class="hint-dialog"
    :destroy-on-close="true"
  >
    <slot></slot>

    <template #footer>
      <div class="dialog-footer">
        <el-button
          v-if="showNormalButton"
          :type="normalButtonType"
          @click="hideDialog"
          >{{ normalButtonText }}</el-button
        >
        <el-button v-if="showActionButton" type="success" @click="act">{{
          actionButtonText
        }}</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HintDialog",
  methods: {
    hideDialog() {
      this.isHintVisible = false;
    },
    act() {
      this.$emit("act");
    },
  },
  props: {
    modelValue: Boolean,
    showNormalButton: {
      type: Boolean,
      required: false,
      default: true,
    },
    normalButtonText: {
      type: String,
      required: false,
      default: "متوجه ام!",
    },
    showActionButton: {
      required: false,
      type: Boolean,
      default: false,
    },
    actionButtonText: {
      required: false,
      type: String,
      default: "تایید",
    },
    width: {
      type: String,
      required: false,
      default: "80%",
    },
  },
  computed: {
    normalButtonType() {
      return !this.showActionButton ? "primary" : "";
    },
    isHintVisible: {
      get() {
        return this.modelValue;
      },
      set(value: boolean) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>

<style>
.hint-dialog {
  background-color: #384a5d !important;
  width: 80% !important;
}
@media screen and (min-width: 768px) {
  .hint-dialog {
    width: 50% !important;
  }
}

.hint-dialog > .el-dialog__body {
  color: #fff;
  word-break: break-word;
  /* text-align: justify !important; */
}
</style>
