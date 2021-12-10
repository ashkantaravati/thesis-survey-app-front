<template>
  <el-card class="mb-halfrem">
    <h4>
      درباره‌ی {{ survey.evaluatedParticipant.name }}
      <template v-if="evaluatedParticipantIsSelf"> (خودتان)</template>:
    </h4>
    <template v-for="question in questions" :key="question.index">
      <div class="mb-halfrem">
        {{ question.text }}
      </div>
      <div dir="ltr">
        <el-radio-group v-model="question.response.value" size="small">
          <el-radio-button :label="1">شدیدا مخالفم</el-radio-button>
          <el-radio-button :label="2">مخالفم</el-radio-button>
          <el-radio-button :label="3">نه مخالف و نه موافقم</el-radio-button>
          <el-radio-button :label="4">موافقم</el-radio-button>
          <el-radio-button :label="5">شدیدا موافقم</el-radio-button>
        </el-radio-group>
      </div>
      <el-divider></el-divider>
    </template>
  </el-card>
</template>

<script lang="ts">
import { TeamMember, VoiceSurvey } from "@/models";
import { LikertScaleQuestion } from "@/models/common";
import { defineComponent } from "vue";
type VoiceQuestions = {
  q1: LikertScaleQuestion;
  q2: LikertScaleQuestion;
  q3: LikertScaleQuestion;
  q4: LikertScaleQuestion;
  q5: LikertScaleQuestion;
  q6: LikertScaleQuestion;
};
export default defineComponent({
  name: "VoiceSurveyItem",
  props: {
    survey: { type: VoiceSurvey, required: true },
  },
  computed: {
    questions: {
      get(): VoiceQuestions {
        return {
          q1: this.survey.q1,
          q2: this.survey.q2,
          q3: this.survey.q3,
          q4: this.survey.q4,
          q5: this.survey.q5,
          q6: this.survey.q6,
        };
      },
      set(value: VoiceQuestions) {
        this.$store.commit("setVoiceSurveyResponse", value);
      },
    },
    activeParticipant(): TeamMember {
      return this.$store.state.activeParticipant;
    },
    evaluatedParticipantIsSelf(): boolean {
      return this.activeParticipant.id === this.survey.evaluatedParticipant.id;
    },
  },
  methods: {
    // onQ1Change(value) {
    //   this.questions.q1 = value;
    // },
    // onQ2Change(value) {
    //   this.questions.q2 = value;
    // },
    // onQ3Change(value) {
    //   this.questions.q3 = value;
    // },
    // onQ4Change(value) {
    //   this.questions.q4 = value;
    // },
    // onQ5Change(value) {
    //   this.questions.q5 = value;
    // },
    // onQ6Change(value) {
    //   this.questions.q6 = value;
    // },
  },
});
</script>

<style></style>
