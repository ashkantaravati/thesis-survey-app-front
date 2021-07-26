<template>
  <div class="fix-btns-container align-left">
    <template v-if="type === 'proceed'">
      <el-button size="medium" type="primary" @click="onClick">
        {{ text }} <i class="el-icon-arrow-left"></i
      ></el-button>
    </template>
    <template v-if="type === 'finalize'">
      <el-button size="medium" type="success" @click="onClick">
        {{ text }}<i class="el-icon-arrow-left"></i
      ></el-button>
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProceedButton",
  props: {
    type: {
      type: String,
      default: "proceed",
    },
    text: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick: function() {
      this.$emit("click");
    },
  },
});
</script>

<style></style>
