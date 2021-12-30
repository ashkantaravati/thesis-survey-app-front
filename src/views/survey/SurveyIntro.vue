<template>
  <div id="survey-intro">

    <p>
      از این که دقایقی از وقت ارزشمندتان را به تکمیل این پرسشنامه اختصاصی
      می‌دهید بسیار سپاسگزارم.
      <br />
      <ul>

        <li>
      این پرسشنامه متشکل از ۵ بخش و مجموعا شامل
      {{ totalNumberOfQuestions }} پرسش می‌باشد.
        </li>

      </ul>

      

    </p>

    <el-button
      round
      type="primary"
      @click="$router.push({ name: 'survey-step-1' })"
      >من آماده ام. شروع کن</el-button
    >

  </div>

</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "SurveyIntro",
  computed: {
    totalNumberOfQuestions() {
      const NO_OF_GENERAL_QUESTIONS = 5;
      const NO_OF_TEAM_COORDINATION_QUESTIONS = 5;
      const NO_OF_OVERCONFIDENCE_QUESTIONS = 10;
      const NO_OF_TEAM_EFFECTIVENESS_QUESTIONS = 10;
      const NO_OF_VOICE_BEHAVIOR_QUESTIONS = 6;
      return NO_OF_GENERAL_QUESTIONS +
          NO_OF_TEAM_COORDINATION_QUESTIONS +
          NO_OF_OVERCONFIDENCE_QUESTIONS +
          NO_OF_TEAM_EFFECTIVENESS_QUESTIONS +
          NO_OF_VOICE_BEHAVIOR_QUESTIONS;
    },
    // totalEstimatedTime() {
    //   const totalNumberOfQuestions = this.totalNumberOfQuestions;
    //   const AVERAGE_QUESTION_TIME = 0.5;
    //   const totalNumberOfMinutes =
    //     totalNumberOfQuestions * AVERAGE_QUESTION_TIME;
    //   const SLACK_FACTOR = 0.2;
    //   const slackTime = SLACK_FACTOR * totalNumberOfMinutes;
    //   const totalNumberOfMinutesWithSlack = totalNumberOfMinutes + slackTime;
    //   return Math.round(totalNumberOfMinutesWithSlack);
    // },

  },
});
</script>

<style></style>
