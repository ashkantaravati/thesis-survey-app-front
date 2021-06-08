<template>
  <div v-show="currentStep === -1">
    <p>
      سلام! از این که وقت ارزشمندتان را در اختیار من قرار می‌دهید سپاسگزارم
      .پاسخ به این پرسشنامه حدودا ۱۵ دقیقه زمان می‌برد. روند پرسشنامه به این
      صورت است که:
    </p>
    <span>
      سازمان شما:
      {{ teamInfo.organization.name }}
    </span>
    <br />
    <span>
      تیم شما:
      {{ teamInfo.name }}
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { getTeamInfo } from "../api/survey.service";

export default defineComponent({
  name: "Survey",
  data() {
    return {
      currentStep: -1,
      teamInfo: {
        name: "تیم شماره ۱",
        id: "29ce0188-8688-4ba1-b79f-3b2b76786529",
        members: ["اشکان طراوتی", "علیرضا احمدی", "مرجان", "سرکار خانم مرادی"],
        organization: {
          id: "47d126c8-8966-4a2e-9f55-a8a25d014431",
          name: "ارتباطات نوین پیام‌آوران پارسیان هومان",
        },
      },
    };
  },
  mounted() {
    // getTeamInfo("29ce0188-8688-4ba1-b79f-3b2b76786529").then((res) => {
    //   this.teamInfo = res;
    // });
  },
  methods: {
    goNext() {
      this.currentStep++;
    },
    goPrev() {
      if (this.currentStep == 0) return;
      this.currentStep--;
    },
  },
});
</script>

<style>
</style>