<template>
  <div v-if="title" class="mb-halfrem">
    {{ title }}
  </div>
  <div dir="ltr" class="text-right">
    <el-radio-group v-model="response.value" size="small">
      <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
      <el-radio-button :label="2">مخالفم</el-radio-button>
      <el-radio-button :label="3">نه مخالف و نه موافقم</el-radio-button>
      <el-radio-button :label="4">موافقم</el-radio-button>
      <el-radio-button :label="5">شدیدا موافقم</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { LikertResponse } from "@/models/common";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "LikertScaleQuestion",
  props: {
    modelValue: {
      type: Object as PropType<LikertResponse>,
      required: true,
    },
    title: {
      type: String,
    },
  },
  computed: {
    response: {
      get(): LikertResponse {
        return this.modelValue;
      },
      set(value: LikertResponse) {
        this.$emit("@update:modelValue", value);
      },
    },
  },
});
</script>

<style></style>
