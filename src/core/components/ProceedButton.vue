<template>
  <div class="fix-btns-container" :style="styleObject">
    <template v-if="type === 'proceed'">
      <el-button
        size="medium"
        type="primary"
        :tabindex="innerButtonTabIndex"
        @click="onClick"
      >
        {{ text }} <i class="el-icon-arrow-left"></i
      ></el-button>
    </template>
    <template v-if="type === 'finalize'">
      <el-button
        size="medium"
        type="success"
        :tabindex="innerButtonTabIndex"
        @click="onClick"
      >
        {{ text }}<i class="el-icon-arrow-left"></i
      ></el-button>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProceedButton",
  props: {
    align: {
      type: String,
      required: false,
      default: "flex-end",
    },
    type: {
      type: String,
      default: "proceed",
    },
    text: {
      type: String,
      required: true,
    },
    innerButtonTabIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    styleObject() {
      return {
        "justify-content": `${this.align} !important`,
      };
    },
  },
  methods: {
    onClick: function () {
      this.$emit("click");
    },
  },
});
</script>

<style></style>
