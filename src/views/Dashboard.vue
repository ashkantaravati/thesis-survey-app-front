<template>
  <div v-if="isAuthenticated">
    <h1>نماینده‌ی محترم {{ stats.name }}</h1>
    <h3>وقت بخیر؛ به داشبورد خوش آمدید</h3>
    <p>
      در این قسمت می‌توانید وضعیت تیم‌های خود را مشاهده و در صورت نیاز لینک
      اختصاصی تیم‌ها را بازیابی کنید.
    </p>
    <br />
    <el-card v-for="team in stats.teams" :key="team.id">
      <template #header>
        <div class="card-header">
          <h3>{{ team.name }}</h3>
          <strong>تعداد اعضا:</strong>
          <span>{{ team.size }} نفر</span>
          <el-link type="info">
            <router-link
              :to="{ name: 'survey-intro', params: { teamId: team.id } }"
            >
              {{ getLink(team.id) }}</router-link
            >
          </el-link>
        </div>
      </template>
      <ul>
        <li v-for="(member, index) in team.members" :key="index">
          {{ member.name }}
          <i
            :class="{
              'el-icon-check success': member.has_participated,
              'el-icon-close danger': !member.has_participated,
            }"
          ></i>
        </li>
      </ul>
    </el-card>
  </div>
  <div v-else>
    <el-input
      type="text"
      placeholder="توکن سازمان"
      :disabled="isDirectVisit"
      v-model="auth.token"
    />
    <el-input
      type="email"
      placeholder="ایمیل نماینده سازمان"
      v-model="auth.email"
    />
    <el-button type="primary" @click="authenticate">احراز هویت</el-button>
  </div>
</template>

<script lang="ts">
import { getOrganizationStatsIfAuthorized } from "@/api/services";
import { defineComponent } from "vue";
import { generateUrlToTeamSurvey } from "@/mappers/TeamMapper";

export default defineComponent({
  name: "Dashboard",
  props: {
    orgId: { type: String, required: true },
  },
  mounted() {
    if (this.orgId) {
      this.isDirectVisit = true;
      this.auth.token = this.orgId as string;
    }
  },
  data() {
    return {
      auth: {
        token: "",
        email: "",
      },
      isDirectVisit: false,
      isAuthenticated: false,
      stats: {},
    };
  },
  methods: {
    authenticate() {
      getOrganizationStatsIfAuthorized(this.auth).then((response) => {
        this.stats = response.data;
        this.isAuthenticated = true;
      });
    },
    getLink(teamId: string) {
      return generateUrlToTeamSurvey(teamId);
    },
  },
});
</script>

<style></style>
