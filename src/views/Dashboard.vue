<template>
  <div v-if="isAuthenticated">
    <h1>نماینده‌ی محترم {{ stats.name }}</h1>
    <h3>وقت بخیر؛ به داشبورد خوش آمدید</h3>
    <p>
      در این قسمت می‌توانید وضعیت تیم‌های خود را مشاهده و در صورت نیاز لینک
      اختصاصی تیم‌ها را بازیابی کنید.
    </p>
    <br />
    <el-row>
      <el-col
        :xs="24"
        :sm="24"
        :md="11"
        :lg="11"
        :xl="11"
        class="mt-1rem add-margin"
        v-for="team in stats.teams"
        :key="team.id"
      >
        <el-card>
          <template #header>
            <div class="card-header">
              <h3 class="text-right">{{ team.name }}</h3>
              <h4 class="text-right">
                <strong>تعداد اعضا:</strong>
                <span>{{ team.size }} نفر</span>
              </h4>
              <div>
                لینک دعوت اعضا:

                <el-link type="info" class="link">
                  <router-link
                    :to="{ name: 'survey-intro', params: { teamId: team.id } }"
                  >
                    {{ getLink(team.id) }}</router-link
                  >
                </el-link>
              </div>
            </div>
          </template>
          <div
            class="name-container"
  
          >
            <div class="name-container-header" 
            >
              <div style="width:40%" class="flex:50%">
                نام
              </div>
              <div class="flex:50%">
                وضعیت
              </div>
            </div>

            <div
              class="name-row"
              v-for="(member, index) in team.members"
              :key="index"
            >
              <div style="width:40%" class="flex:50%">
                {{ member.name }}
              </div>
              <div class="flex:50%">

                <el-icon class="icon-styles">
                  <finished-icon class="success" v-if="member.has_participated" />
                  <minus-icon class="danger" v-else />
                </el-icon>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <div v-else>
    <el-row style="justify-content:center">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mt-1rem">
        <div>
          <p>
            نماینده‌ی محترم؛ برای ورود به داشبورد، توکن و ایمیلی را که در زمان
            ثبت نام اعلام کرده اید وارد نمایید.
          </p>
        </div>
        <el-input
          class="mt-1rem"
          type="text"
          placeholder="توکن سازمان"
          :disabled="isDirectVisit"
          v-model="auth.token"
        />
        <el-input
          class="my-1rem"
          type="email"
          placeholder="ایمیل نماینده سازمان"
          v-model="auth.email"
        />
        <div class="text-center">
          <el-button type="primary" @click="authenticate">احراز هویت</el-button>
        </div>
      </el-col>
    </el-row>
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

<style scoped>
.link a {
  color: #fff;
}
.el-link.el-link--info.is-underline:hover:after,
.el-link.el-link--info:after {
  border: none;
}
.link a:hover {
  color: rgb(30 30 30);
  background: #979797;
  transition: 0.3s;
}

.icon-styles{
  border-radius: 50%;
  padding: 5px;
  border: 1px solid;
  border-radius: 50%;
  padding: 5px;
  background: #fff;
  border: 1px solid;
  font-size: 19px;
  font-weight: 800;
}
.icon-styles>.success {
  color: green;
  border-color: green;
}
.icon-styles>.danger {
  color: red;
  border-color: red;
}

.name-row {
  display: flex;
  flex-direction: row;
  padding: 6px 0;
  border-bottom: 1px solid #fff;
}
/* .name-row:first-child {
  border-top: 1px solid #fff;
} */
.name-row:last-child {
  border-bottom: none;
}
@media screen and(min-width:560px) {
  .add-margin:nth-child(2n) {
    margin-right: 8px;
  }
}

.name-container {
  max-height: 230px;
  overflow-y: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.name-container::-webkit-scrollbar {
  width: 8px;
}

.name-container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.name-container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
.name-container-header{
  position: sticky;
  top:0;
  display:flex; flex-direction:row ;  border-bottom: 1px solid #fff; padding-bottom:6px;
  background: #384a5d;
}
</style>
