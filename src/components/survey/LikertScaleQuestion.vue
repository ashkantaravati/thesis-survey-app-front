<template>
  <div v-if="title" class="mb-halfrem">
    {{ title }}
  </div>
  <el-form :model="response" :rules="rules" ref="mainForm">
    <div dir="ltr" class="text-right">
      <el-form-item prop="value">
        <el-radio-group v-model="response.value" size="small">
          <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
          <el-radio-button :label="2">مخالفم</el-radio-button>
          <el-radio-button :label="3">نه مخالف و نه موافقم</el-radio-button>
          <el-radio-button :label="4">موافقم</el-radio-button>
          <el-radio-button :label="5">شدیدا موافقم</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts">
import { LikertResponse } from "@/models/common";
import { AnyFunction } from "element-plus/lib/utils/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "LikertScaleQuestion",
  data() {
    return {
      rules: {
        value: [
          {
            required: true,
            message: "پاسخ خود را انتخاب کنید",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    validate(callback: AnyFunction<any>): void {
      const mainForm = this.$refs["mainForm"] as any;
      mainForm.validate(callback);
    },
  },
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
