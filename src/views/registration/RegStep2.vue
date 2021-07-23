<template>
  <h3>اطلاعات تیم‌ها و اعضای تیم‌ها</h3>
  <p>
    چنانچه تمایل به مخفی ماندن نام افراد دارید می‌توانید از نام های مستعار اما
    یکتا استفاده کنید
  </p>
  <p>توجه کنید این نام‌ها در پرسشنامه برای افراد قابل رویت خواهند بود</p>
  <el-form :model="generalInfo" :rules="rules" ref="teamInfoForm">
    <el-card
      class="box-card mb-halfrem"
      v-for="(team, index) in teams"
      :key="team.index"
    >
      <template #header>
        <div class="card-header">
          <h4>تیم {{ index + 1 }}</h4>
          <el-row :gutter="12">
            <el-col :xs="4" :lg="2"><span>عنوان تیم</span></el-col>
            <el-col :xs="18" :lg="21">
              <el-form-item prop="teamName">
                <el-input
                  class="pb-1rem"
                  v-model="team.name"
                  :placeholder="`تیم شماره ${index + 1}`"
                />
              </el-form-item>
            </el-col>
            <el-col :xs="2" :lg="1">
              <el-tooltip
                class="item"
                effect="dark"
                content="حذف تیم"
                placement="top-start"
              >
                <el-button
                  @click="removeTeam(team)"
                  type="danger"
                  icon="el-icon-delete"
                  circle
                  plain
                  class="mr-halfrem"
                ></el-button>
              </el-tooltip>
            </el-col>
          </el-row>
        </div>
      </template>
      <el-row
        v-for="(member, index) in team.members"
        :key="index"
        class="text item d-flex"
      >
        <el-col :xs="4" :lg="2">عضو {{ index + 1 }}</el-col>
        <el-col :xs="18" :lg="21">
          <el-form-item prop="memberName">
            <el-input
              class="pb-1rem"
              v-model="member.name"
              placeholder="نام عضو"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="2" :lg="1" v-show="team.members.length > 2">
          <el-tooltip
            class="item"
            effect="dark"
            content="حذف عضو"
            placement="top-start"
          >
            <el-button
              @click="removeMemberFromTeam({ team, member })"
              type="danger"
              icon="el-icon-delete"
              circle
              plain
              size="mini"
              class="mr-halfrem"
            ></el-button> </el-tooltip
        ></el-col>
      </el-row>

      <el-button @click="addAMemberToTeam(team)" type="primary" plain>
        + افزودن عضو
      </el-button>
    </el-card>
    <div class="d-flex jc-center mb-halfrem">
      <el-button @click="addTeam" type="primary" round>
        + افزودن تیم
      </el-button>
    </div>
  </el-form>
  <proceed-button type="proceed" text="گام بعد" @click="goNext" />
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import ProceedButton from "@/components/common/ProceedButton.vue";
export default defineComponent({
  name: "RegStep2",
  props: {},
  components: { ProceedButton },
  methods: {
    ...mapMutations([
      "addTeam",
      "removeTeam",
      "addAMemberToTeam",
      "removeMemberFromTeam",
    ]),
    goNext() {
      this.$emit("proceed");
    },
  },
  data() {
    return {
      rules: {
        teamName: [
          {
            required: true,
            message: "نام تیم نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 5,
            message: "نام تیم باید حداقل ۵ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        memberName: [
          {
            required: true,
            message: "نام عضو نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 5,
            message: "نام عضو باید حداقل ۵ کاراکتر باشد",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    // TODO: prevent user from adding members with the same name as other members to a team
    teams: {
      get() {
        return this.$store.state.registrationInfo.teams;
      },
      set(value) {
        this.$store.commit("updateTeams", value);
      },
    },
  },
});
</script>

<style></style>
