<template>
  <div class="mb-halfrem d-flex">
    {{ question.text }}
    <el-form :model="response" :rules="rules" ref="mainForm">
      <div class="d-flex">
        <div class="d-flex align-center">
          <span>حداقل:</span>
          <el-form-item prop="min">
            <el-input-number
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
        </div>
        <div class="d-flex align-center">
          <span>حداکثر:</span>
          <el-form-item prop="max">
            <el-input-number
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
        </div>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { MinMaxQuestion, MinMaxResponse } from "@/models/common";
import { AnyFunction } from "element-plus/lib/utils/types";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MinMaxQuestion",
  props: {
    question: { type: MinMaxQuestion, required: true },
    lowerBound: { type: Number, required: false },
    upperBound: { type: Number, required: false },
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
        console.log("value", value);
        this.$store.commit("setOverconfidenceSurveyQuestionResponse", {
          index: this.question.index,
          response: value,
        });
      },
    },
  },
  methods: {
    validate(callback: AnyFunction<any>): void {
      const mainForm = this.$refs["mainForm"] as any;
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
