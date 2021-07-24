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
        <li>
       پاسخ به این پرسشنامه حدودا
      {{ totalEstimatedTime }} دقیقه زمان می‌برد.
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

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "SurveyIntro",
  computed: {
    ...mapGetters(["teamSize"]),
    totalNumberOfQuestions() {
      const NO_OF_GENERAL_QUESTIONS = 5;
      const NO_OF_TEAM_COORDINATION_QUESTIONS = 5;
      const NO_OF_OVERCONFIDENCE_QUESTIONS = 10;
      const NO_OF_TEAM_EFFECTIVENESS_QUESTIONS = 10;
      const NO_OF_VOICE_BEHAVIOR_QUESTIONS_PER_MEMBER = 6;
      const totalNumberOfVoiceBehaviorQuestions =
        this.teamSize * NO_OF_VOICE_BEHAVIOR_QUESTIONS_PER_MEMBER;
      const totalNumberOfQuestions =
        NO_OF_GENERAL_QUESTIONS +
        NO_OF_TEAM_COORDINATION_QUESTIONS +
        NO_OF_OVERCONFIDENCE_QUESTIONS +
        NO_OF_TEAM_EFFECTIVENESS_QUESTIONS +
        totalNumberOfVoiceBehaviorQuestions;
      return totalNumberOfQuestions;
    },
    totalEstimatedTime() {
      const totalNumberOfQuestions = this.totalNumberOfQuestions;
      const AVERAGE_QUESTION_TIME = 0.5;
      const totalNumberOfMinutes =
        totalNumberOfQuestions * AVERAGE_QUESTION_TIME;
      const SLACK_FACTOR = 0.2;
      const slackTime = SLACK_FACTOR * totalNumberOfMinutes;
      const totalNumberOfMinutesWithSlack = totalNumberOfMinutes + slackTime;
      const roundedTotalNumberOfMinutesWithSlack = Math.round(totalNumberOfMinutesWithSlack);
      return roundedTotalNumberOfMinutesWithSlack;
    },
  },
});
</script>

<style></style>
