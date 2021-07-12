<template>
  <div class="mb-halfrem">
    {{ question.text }}
  </div>
  <span>حد پایین:</span>
  <el-input-number
    placeholder="کف"
    v-model="response.min"
    @change="onMinChange"
    :min="lowerBound"
    :max="response.max"
    :name="question.index + '-min'"
  >
  </el-input-number>
  <span>حد بالا:</span>
  <el-input-number
    placeholder="سقف"
    v-model="response.max"
    @change="onMaxChange"
    :min="response.min"
    :max="upperBound"
    :name="question.index + '-max'"
  >
  </el-input-number>
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
