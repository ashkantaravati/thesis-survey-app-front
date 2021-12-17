<template>
  <div  class="mb-halfrem">
    {{ question.text }}
  </div>
  <el-form :model="response" :rules="rules" ref="mainForm">
    <div dir="ltr" class="text-right">
      <el-form-item prop="value">
        <el-radio-group v-model="response.value" size="small">
          <template v-if="question.scale === 7">
            <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
            <el-radio-button :label="2">مخالفم</el-radio-button>
            <el-radio-button :label="3">نسبتا مخالفم</el-radio-button>
            <el-radio-button :label="4">نه مخالف و نه موافقم</el-radio-button>
            <el-radio-button :label="5">نسبتا موافقم</el-radio-button>
            <el-radio-button :label="6">موافقم</el-radio-button>
            <el-radio-button :label="7">شدیدا موافقم</el-radio-button>
          </template>
          <template v-else>
            <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
            <el-radio-button :label="2">مخالفم</el-radio-button>
            <el-radio-button :label="3">نه مخالف و نه موافقم</el-radio-button>
            <el-radio-button :label="4">موافقم</el-radio-button>
            <el-radio-button :label="5">شدیدا موافقم</el-radio-button>
          </template>
        </el-radio-group>
      </el-form-item>
    </div>
  </el-form>
</template>

<script lang="ts">
import {LikertResponse, LikertScaleQuestion} from "@/models/common";
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
    question :{
      type: Object as PropType<LikertScaleQuestion>,
      required: true
    },
    mutationType:{
      type: String,
      required: true
    }
  },

  computed: {
    response: {
      get(): LikertResponse {
        return this.question.response;
      },
      set(value: LikertResponse) {
        let payload = this.question;
        payload.response = value;
        this.$store.commit(this.mutationType, payload);
      },
    },
  }
});
</script>

<style></style>
