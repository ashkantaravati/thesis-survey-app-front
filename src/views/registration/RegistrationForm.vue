<template>
  <h3>مشخصات سازمان و نماینده</h3>
  <el-form
    :model="generalInfo"
    :rules="rules"
    ref="generalInfoForm"
    class="demo-ruleForm"
  >
    <el-form-item prop="repName">
      <el-input
        placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
        v-model="generalInfo.repName"
        autocomplete="name"
      ></el-input>
    </el-form-item>
    <el-form-item prop="name">
      <el-input
        placeholder="نام یا عنوان تجاری سازمان"
        v-model="generalInfo.name"
        type="text"
        autocomplete="organization"
      ></el-input>
    </el-form-item>
    <el-form-item prop="repJobTitle">
      <el-input
        placeholder="سمت شما"
        v-model="generalInfo.repJobTitle"
        autocomplete="organization-title"
      ></el-input>
    </el-form-item>
    <el-form-item prop="repEmail">
      <el-input
        placeholder="ایمیل (اختیاری)"
        v-model="generalInfo.repEmail"
        autocomplete="email"
        type="email"
      ></el-input>
    </el-form-item>
  </el-form>
  <h3>تیم‌های شرکت‌کننده در پژوهش</h3>

  <el-card
    class="box-card mb-halfrem"
    v-for="(team, index) in teams"
    :key="index"
  >
    <div class="card-header">
      <h4>تیم شماره {{ index + 1 }} :</h4>
      <el-row>
        <el-col :xs="4" :lg="2"><span>نام تیم:</span></el-col>
        <el-col :xs="16" :lg="6">
          <el-input
            class="pb-1rem"
            tabindex="5"
            v-model="team.name"
            :placeholder="`تیم شماره ${index + 1}`"
          />
        </el-col>
        <el-col :xs="4" :lg="2"><span>سایز تیم:</span></el-col>
        <el-col :xs="16" :lg="10">
          <el-input-number
            v-model="team.size"
            :min="3"
            :max="10"
            size="small"
          ></el-input-number>
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
              circle
              plain
              class="mr-halfrem"
            >
              <el-icon>
                <delete-icon />
              </el-icon>
            </el-button>
          </el-tooltip>
        </el-col>
      </el-row>
    </div>
  </el-card>
  <div class="d-flex jc-center mb-halfrem">
    <el-button @click="addTeam" type="primary" tabindex="3" round>
      + افزودن تیم
    </el-button>
  </div>
  <proceed-button type="finalize" text="ثبت" @click="goNext" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProceedButton from "@/components/ProceedButton.vue";
const MIN_TEAM_NAME_LENGTH = 3;
import { mapMutations } from "vuex";
import { Team } from "@/models";

export default defineComponent({
  name: "RegistrationForm",
  components: { ProceedButton },

  computed: {
    generalInfo: {
      get() {
        return this.$store.state.registrationInfo.generalInfo;
      },
      set(value) {
        this.$store.commit("updateGeneralInfo", value);
      },
    },
    teams: {
      get(): Team[] {
        return this.$store.state.registrationInfo.teams;
      },
      set(value) {
        this.$store.commit("updateTeams", value);
      },
    },
  },

  data() {
    return {
      rules: {
        name: [
          {
            required: true,
            message: "نام سازمان نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 3,
            message: "نام سازمان باید حداقل ۳ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        repName: [
          {
            required: true,
            message: "نام شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 5,
            message: "نام شما باید حداقل ۵ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        repJobTitle: [
          {
            required: true,
            message: "سمت شما نمی‌تواند خالی باشد",
            trigger: "blur",
          },
          {
            min: 4,
            message: "سمت شما باید حداقل ۴ کاراکتر باشد",
            trigger: "blur",
          },
        ],
        repEmail: [
          {
            required: false,
            message: "آدرس ایمیل صحیح وارد کنید",
            trigger: "blur",
          },
          {
            type: "email",
            message: "لطفا ایمیل با فرمت صحیح وارد کنید",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  created() {
    this.showHelp();
  },

  methods: {
    ...mapMutations(["addTeam", "removeTeam"]),

    isValid(): boolean {
      return (
        this.atLeastOneTeamHasBeenAdded() &&
        this.allTeamsHaveName() &&
        this.noTwoTeamsHaveTheSameName()
      );
    },
    allTeamsHaveName(): boolean {
      return this.teams.every(
        (team: Team) => team.name.length >= MIN_TEAM_NAME_LENGTH
      );
    },
    atLeastOneTeamHasBeenAdded(): boolean {
      return this.teams.length > 0;
    },
    noTwoTeamsHaveTheSameName(): boolean {
      let result = true;
      this.teams.forEach((team: Team) => {
        result &&= this.teams
          .filter((team2) => team2 !== team)
          .every((team2: Team) => team.name !== team2.name);
      });
      return result;
    },
    showHelp() {
      this.$emit("showHelpRequested");
    },
    goNext(): void {
      const generalInfoForm = this.$refs["generalInfoForm"] as any;
      generalInfoForm.validate((valid: boolean) => {
        if (valid) {
          this.$emit("submit");
        } else {
          return false;
        }
      });
    },
  },
});
</script>

<style>
.el-card__body {
  flex-direction: column;
}
</style>
