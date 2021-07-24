<template>
  <div class="step-container" id="survey-step-1">
    <h3>سوالات عمومی</h3>
    <div class="block mb-halfrem">
      <p>نام</p>
      <el-select
        v-model="activeParticipant"
        value-key="id"
        filterable
        placeholder="نام خود را از لیست انتخاب کنید"
      >
        <el-option
          v-for="member in teamMembers"
          :key="member.id"
          :label="member.name"
          :value="member"
        >
        </el-option>
      </el-select>
    </div>
    <div class="block mb-halfrem">
      <p>سن</p>
      <el-input-number
        v-model="generalSurvey.age"
        :min="15"
        :max="80"
      ></el-input-number>
    </div>
    <div class="block mb-halfrem">
      <p>جنسیت</p>
      <el-radio-group v-model="generalSurvey.sex" dir="ltr" class="sex">
        <el-radio-button label="female">خانم</el-radio-button>
        <el-radio-button label="male">آقا</el-radio-button>
      </el-radio-group>
    </div>
    <div class="block mb-halfrem">
      <p>میزان کل سابقه کار شما ( بر حسب سال)</p>
      <el-slider v-model="generalSurvey.tenure" show-input step="0.5" :max="40">
      </el-slider>
    </div>
    <div class="block mb-halfrem">
      <p>مدت حضور شما در این تیم ( بر حسب ماه)</p>
      <el-slider v-model="generalSurvey.teamHistory" show-input :max="60">
      </el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "SurveyStep1",
  computed: {
    ...mapGetters({ teamMembers: "NotYetRespondedTeamMembers" }),
    // teamMembers() {
    //   return this.$store.state.teamInfo.members;
    // },
    generalSurvey: {
      get() {
        return this.$store.state.survey.generalSurvey;
      },
      set(value) {
        this.$store.commit("setGeneralSurveyResponse", value);
      },
    },
    activeParticipant: {
      get() {
        return this.$store.state.activeParticipant;
      },
      set(participant) {
        this.$store.commit("setActiveParticipant", participant);
      },
    },
  },
});
</script>

<style></style>
