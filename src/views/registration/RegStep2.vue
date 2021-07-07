<template>
  <h3>اطلاعات تیم‌ها و اعضای تیم‌ها</h3>
  <p>
    نام افراد صرفا برای شناسایی و تفکیک اطلاعات آن هاست. چنانچه تمایل به مخفی
    ماندن نام افراد دارید می‌توانید از نام های مستعار اما یکتا استفاده کنید.
    توجه کنید این نام‌ها در پرسشنامه برای افراد قابل رویت خواهند بود
  </p>
  <el-card
    class="box-card mb-halfrem"
    v-for="(team, index) in teams"
    :key="team.index"
  >
    <template #header>
      <div class="card-header">
        <span>اعضای تیم {{ index + 1 }}</span>
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
      </div>
    </template>
    <el-row
      v-for="(member, index) in team.members"
      :key="index"
      class="text item d-flex"
    >
      <el-col :xs="4" :lg="2">عضو {{ index + 1 }}</el-col>
      <el-col :xs="18" :lg="21">
        <el-input class="pb-1rem" v-model="member.name" placeholder="نام عضو" />
      </el-col>
      <el-col :xs="2" :lg="1" v-show="team.members.length > 2">
        <el-tooltip
          class="item"
          effect="dark"
          content="حذف عضو"
          placement="top-start"
        >
          <el-button
            @click="removeTeamMember(team, member)"
            type="danger"
            icon="el-icon-delete"
            circle
            plain
            size="mini"
            class="mr-halfrem"
          ></el-button> </el-tooltip
      ></el-col>
    </el-row>

    <el-button @click="addTeamMember(team)" type="primary" plain>
      + افزودن عضو
    </el-button>
  </el-card>
  <div class="d-flex jc-center mb-halfrem">
    <el-button @click="addTeam" type="primary" round> + افزودن تیم </el-button>
  </div>

  <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
</template>

<script>
import { defineComponent } from "vue";
import { mapMutations } from "vuex";

export default defineComponent({
  name: "RegStep2",
  props: {},
  methods: {
    ...mapMutations(["addTeam"]),
  },
  computed: {
    teams: {
      get() {
        return this.$store.state.registrationInfo.teams;
      },
      set(value) {
        this.$store.$emit("updateTeams", value);
      },
    },
  },
});
</script>

<style>
</style>