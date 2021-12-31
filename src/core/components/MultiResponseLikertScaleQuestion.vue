<template>
  <el-card class="mb-halfrem">
    <template #header>
      <div>
        <span class="index-indicator" v-if="index">سوال {{ index }}</span>
        {{ question.text }}
      </div>
    </template>
    <el-form :model="q" status-icon ref="mainForm">
      <div
        v-for="(response, index) in q.responses"
        :key="response.evaluatedParticipant.id"
      >
        <div class="mb-halfrem">
          {{ response.evaluatedParticipant.name }}
        </div>
        <div dir="ltr" class="text-right">
          <el-form-item
            :prop="`responses.${index}.value`"
            :rules="{
              required: true,
              min: 1,
              type: 'number',
              message: 'پاسخ خود را انتخاب کنید',
              trigger: 'focus',
            }"
          >
            <!-- <el-rate
              dir="rtl"
              v-model.number="response.value"
              :texts="[
                'شدیدا مخالفم',
                'مخالفم',
                'نه مخالف و نه موافقم',
                'موافقم',
                'شدیدا موافقم',
              ]"
              show-text
            >
            </el-rate> -->
            <el-radio-group v-model="response.value" size="small">
              <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
              <el-radio-button :label="2">مخالفم</el-radio-button>
              <el-radio-button :label="3">نه مخالف و نه موافقم</el-radio-button>
              <el-radio-button :label="4">موافقم</el-radio-button>
              <el-radio-button :label="5">شدیدا موافقم</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </el-card>
</template>

<script lang="ts">
import { AnyFunction } from "element-plus/lib/utils/types";
import { defineComponent, PropType } from "vue";
import {
  LikertResponseWithRatee,
  MultiResponseLikertScaleQuestion,
} from "@/core/models";
type Q = { responses: LikertResponseWithRatee[] };
export default defineComponent({
  name: "MultiResponseLikertScaleQuestion",

  methods: {
    validate(callback: AnyFunction<any>): void {
      const mainForm = this.$refs["mainForm"] as any;

      mainForm.validate((val: Boolean) => {
        callback(val);
      });
    },
  },
  props: {
    question: {
      type: Object as PropType<MultiResponseLikertScaleQuestion>,
      required: true,
    },
    mutationType: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: false,
    },
  },

  computed: {
    q: {
      get(): Q {
        return { responses: this.question.response };
      },
      set(value: Q) {
        let payload = this.question;
        payload.response = value.responses;
        this.$store.commit(this.mutationType, payload);
      },
    },
  },
});
</script>

<style></style>
