<template>
  <h3>اطلاعات تیم‌ها و اعضای تیم‌ها</h3>
  <p>
    چنانچه تمایل به مخفی ماندن نام افراد دارید می‌توانید از نام های مستعار اما
    یکتا استفاده کنید
  </p>
  <p>توجه کنید این نام‌ها در پرسشنامه برای افراد قابل رویت خواهند بود</p>
  <el-card
    class="box-card mb-halfrem"
    v-for="(team, index) in teams"
    :key="team.index"
  >
    <template #header>
      <div class="card-header">
        <h4>تیم شماره {{ index + 1 }} :</h4>
        <el-row>
          <el-col :xs="4" :lg="4"><span>نام تیم</span></el-col>
          <el-col :xs="16" :lg="18">
            <el-input
              class="pb-1rem"
              tabindex="5"
              v-model="team.name"
              :placeholder="`تیم شماره ${index + 1}`"
            />
          </el-col>
          <el-col :xs="4" :lg="2">
            <el-tooltip
              class="item"
              effect="dark"
              content="حذف تیم"
              placement="top-start"
            >
              <el-button
                @click="removeTeam(team)"
                type="danger"
                tabindex="6"
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
    <div style="margin-bottom:1%">
      <!-- <el-alert
        class="mb-halfrem"
        title="لطفا عضو با نام تکراری وارد نکنید."
        type="warning"
        show-icon
      >
      </el-alert>
      <el-alert
        class="mb-halfrem"
        title="اگر دو عضو با نام تکراری در این تیم حضور دارند با عدد لقب آن‌ها را متمایز کنید."
        type="warning"
        show-icon
      >
      </el-alert> -->
      <el-alert
        class="mb-halfrem"
        title="اگر عضو این تیم هستید خودتان را از قلم نیندازید."
        type="warning"
        show-icon
      >
      </el-alert>
    </div>
    <el-row
      v-for="(member, index) in team.members"
      :key="index"
      class="text item d-flex"
    >
      <el-col :xs="4" :lg="4"
        ><span>عضو {{ index + 1 }}:</span></el-col
      >
      <el-col :xs="18" :lg="18">
        <el-input
          class="pb-1rem"
          v-model="member.name"
          tabindex="1"
          placeholder="نام یا نام مستعار عضو"
        />
      </el-col>
      <el-col :xs="2" :lg="2" v-show="team.members.length > 2">
        <el-tooltip
          class="item"
          effect="dark"
          content="حذف عضو"
          placement="top-start"
        >
          <el-button
            @click="removeMemberFromTeam({ team, member })"
            tabindex="7"
            type="danger"
            icon="el-icon-delete"
            circle
            plain
            size="mini"
            class="mr-halfrem"
          ></el-button> </el-tooltip
      ></el-col>
    </el-row>

    <el-button
      @click="addAMemberToTeam(team)"
      tabindex="2"
      type="primary"
      plain
    >
      + افزودن عضو
    </el-button>
  </el-card>
  <div class="d-flex jc-center mb-halfrem">
    <el-button @click="addTeam" type="primary" tabindex="3" round>
      + افزودن تیم
    </el-button>
  </div>
  <proceed-button
    type="proceed"
    text="گام بعد"
    innerButtonTabIndex="4"
    @click.stop="goNext"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations } from "vuex";
import ProceedButton from "@/components/common/ProceedButton.vue";
import { Team } from "@/models";
const MIN_MEMBER_NAME_LENGTH = 3;
const MIN_TEAM_NAME_LENGTH = 5;
export default defineComponent({
  name: "TeamSetup",
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
      if (this.isValid)
        {
          this.$emit("proceed");
          return;
        }
      else {
        let offset = 20;
        const OFFSET_INCREMENT = 40;
        if (!this.allMembersHaveNames)
          {this.$notify.error({message:"نام عضو باید حداقل ۳ کاراکتر باشد.", offset:offset});
          offset+=OFFSET_INCREMENT;}
        if (!this.allTeamsHaveName)
          {this.$notify.error({message:"نام تیم باید حداقل ۵ کاراکتر باشد.",offset:offset});offset+=OFFSET_INCREMENT;}
        if(!this.atLeastOneTeamHasBeenAdded)
          {this.$notify.error({message:"حداقل یک تیم باید وارد نمایید.",offset:offset});offset+=OFFSET_INCREMENT;}
        if(!this.noTwoMembersWithinATeamHaveTheSameName)
          {this.$notify.error({message:"نام اعضای یک تیم باید یکتا باشد", offset:offset});offset+=OFFSET_INCREMENT;}
        if(!this.noTwoTeamsHaveTheSameName)
          this.$notify.error({message:"نام تیم‌ها باید یکتا باشد", offset:offset});
      }

    },
  },
  computed: {
    teams: {
      get(): Team[] {
        return this.$store.state.registrationInfo.teams;
      },
      set(value) {
        this.$store.commit("updateTeams", value);
      },
    },
    allMembersHaveNames(): boolean{
      let result = true;
      this.teams.forEach((team:Team) => {
        result &&= team.members.every(member => member.name.length >= MIN_MEMBER_NAME_LENGTH)});

      return result;
    },
    allTeamsHaveName(): boolean{
      return this.teams.every((team:Team)=> team.name.length >= MIN_TEAM_NAME_LENGTH)
    },
    atLeastOneTeamHasBeenAdded(): boolean{
      return this.teams.length > 0;
    },
    isValid():boolean {
      const result =  this.atLeastOneTeamHasBeenAdded && this.allMembersHaveNames && this.allTeamsHaveName && this.noTwoMembersWithinATeamHaveTheSameName && this.noTwoTeamsHaveTheSameName;
      return result;
    },
    noTwoMembersWithinATeamHaveTheSameName(): boolean{
      let result = true;
      this.teams.forEach((team:Team) => {
        team.members.forEach((member) => {
          result &&= team.members.filter(member2=> member2!==member).every(member2 => member.name !== member2.name);
        });
      });
      return result;
    },
    noTwoTeamsHaveTheSameName(): boolean{
      let result = true;
      this.teams.forEach((team:Team) => {
        result &&= this.teams.filter(team2=> team2!==team).every((team2:Team) => team.name !== team2.name);
      });
      return result;
    },

  },
});
</script>

<style></style>
