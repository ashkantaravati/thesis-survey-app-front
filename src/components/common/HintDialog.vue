<template>
  <el-dialog
    v-model="isHintVisible"
    center="true"
    open-delay="10"
    :width="width"
    show-close="false"
    custom-class="hint-dialog"
  >
    <slot></slot>

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="isHintVisible = false"
          >متوجه ام!</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Hintdialog",
  props: {
    modelValue: Boolean,
    width: {
      type: String,
      required: false,
      default: "80%",
    },
  },
  computed: {
    isHintVisible: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
});
</script>

<style>
.hint-dialog {
  background-color: #384a5d !important;
}
.hint-dialog > .el-dialog__body {
  color: #fff;
  word-break: break-word;
  text-align: justify !important;
}
</style>
