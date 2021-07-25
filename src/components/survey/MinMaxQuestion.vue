<template>
  <div class="mb-halfrem">
    {{ question.text }}
  </div>
  <div>
    <div class="d-flex align-center" >
      <span>حداقل:</span>
      <el-input-number
        placeholder="کف"
        v-model="response.min"
        @change="onMinChange"
        :min="lowerBound"
        :max="response.max"
        :name="question.index + '-min'"
      >
      </el-input-number>
    </div>
    <div class="mt-1rem d-flex align-center">
      <span>حداکثر:</span>
      <el-input-number
        placeholder="سقف"
        v-model="response.max"
        @change="onMaxChange"
        :min="response.min"
        :max="upperBound"
        :name="question.index + '-max'"
      >
      </el-input-number>
    </div>
  </div>
</template>

<script lang="ts">
import { MinMaxQuestion, MinMaxResponse } from "@/models/common";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MinMaxQuestion",
  props: {
    question: { type: MinMaxQuestion, required: true },
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
    onMinChange(value: number): void {
      this.response.min = value;
    },
    onMaxChange(value: number): void {
      this.response.max = value;
    },
  },
});
</script>

<style></style>
