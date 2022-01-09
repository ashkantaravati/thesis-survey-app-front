<template>
  <div class="mb-halfrem">
    <el-form :model="response" :rules="rules" ref="mainForm">
      <el-row v-if="$slots.pre">
        <slot name="pre"></slot>
      </el-row>
      <el-row :gutter="40">
        <el-col :md="12">
          <template v-if="index"> {{ index }}- </template>
          {{ question.text }}
        </el-col>
        <el-col :md="6">
          <span>حداقل:</span>
          <el-form-item prop="min">
            <el-input-number
              :disabled="readonly"
              :controls="!readonly"
              size="mini"
              :required="true"
              placeholder="کف"
              v-model="response.min"
              @change="onMinChange"
              :min="lowerBound"
              :max="response.max"
              :name="question.index + '-min'"
            >
            </el-input-number>
          </el-form-item>
        </el-col>
        <el-col :md="6">
          <span>حداکثر:</span>
          <el-form-item prop="max">
            <el-input-number
              :disabled="readonly"
              :controls="!readonly"
              size="mini"
              placeholder="سقف"
              v-model="response.max"
              @change="onMaxChange"
              :min="response.min"
              :max="upperBound"
              :name="question.index + '-max'"
            >
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row v-if="$slots.post">
        <slot name="post"></slot>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { MinMaxQuestion, MinMaxResponse } from "@/core/models";
import { AnyFunction } from "element-plus/lib/utils/types";
import { defineComponent } from "vue";
import { ElForm } from "element-plus";

export default defineComponent({
  name: "MinMaxQuestion",
  props: {
    question: { type: MinMaxQuestion, required: true },
    lowerBound: { type: Number, required: false },
    upperBound: { type: Number, required: false },
    index: { type: Number, required: false },
    readonly: { type: Boolean, required: false, default: false },
    correctAnswer: { required: false },
  },

  data() {
    return {
      rules: {
        min: [
          {
            required: true,
            message: "نمی‌تواند خالی باشد",
            trigger: "blur",
            type: "number",
          },
        ],
        max: [
          {
            required: true,
            message: "نمی‌تواند خالی باشد",
            trigger: "blur",
            type: "number",
          },
        ],
      },
    };
  },
  computed: {
    response: {
      get(): MinMaxResponse {
        return this.question.response;
      },
      set(value: MinMaxResponse) {
        let payload = this.question;
        payload.response = value;
        this.$store.commit("setOverconfidenceSurveyQuestionResponse", payload);
      },
    },
  },
  methods: {
    validate(callback: AnyFunction<any>): void {
      const mainForm = this.$refs["mainForm"] as typeof ElForm;
      mainForm.validate(callback);
    },
    onMinChange(value: number): void {
      this.response.min = value;
    },
    onMaxChange(value: number): void {
      this.response.max = value;
    },
  },
});
</script>

<style scoped>
.el-form-item__error {
  padding-top: 25px !important;
}
</style>
