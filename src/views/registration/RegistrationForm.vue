<template>
  <el-form
    :model="generalInfo"
    :rules="rules"
    ref="generalInfoForm"
    class="demo-ruleForm"
  >
    <el-row :gutter="16">
      <el-col :lg="16">
        <div class="number-container">
          <h3><span class="number">1</span> مشخصات سازمان و نماینده</h3>

          <el-row>
            <el-col :lg="24">
              <el-form-item prop="repName">
                <el-input
                  placeholder="نام و نام خانوادگی شما به عنوان نماینده‌ی سازمان"
                  v-model="generalInfo.repName"
                  autocomplete="name"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :lg="24">
              <el-form-item prop="name">
                <el-input
                  placeholder="نام یا عنوان تجاری سازمان"
                  v-model="generalInfo.name"
                  type="text"
                  autocomplete="organization"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :lg="24">
              <el-form-item prop="repJobTitle">
                <el-input
                  placeholder="سمت شما"
                  v-model="generalInfo.repJobTitle"
                  autocomplete="organization-title"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :lg="24">
              <el-form-item prop="repEmail">
                <el-input
                  placeholder="ایمیل (اختیاری)"
                  v-model="generalInfo.repEmail"
                  autocomplete="email"
                  type="email"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="number-container">
          <h3><span class="number">2</span> تیم‌های شرکت‌کننده در پژوهش</h3>

          <el-card
            class="box-card mb-halfrem"
            v-for="(team, index) in teams"
            :key="index"
          >
            <div class="card-header">
              <el-row :gutter="4">
                <el-col :sm="24" :lg="8">
                  <el-form-item label="نام تیم:">
                    <el-input
                      class="pb-1rem"
                      tabindex="5"
                      v-model="team.name"
                      :placeholder="`تیم شماره ${index + 1}`"
                    />
                  </el-form-item>
                </el-col>
                <el-col :xs="14" :lg="10">
                  <el-form-item label="تعداد اعضا:">
                    <el-input-number
                      v-model="team.size"
                      :min="3"
                      :max="10"
                      controls-position="right"
                    ></el-input-number>
                  </el-form-item>
                </el-col>
                <el-col :xs="10" :lg="6">
                  <el-tooltip
                    v-if="teams.length > 1"
                    class="item"
                    effect="dark"
                    content="حذف تیم"
                    placement="top-start"
                  >
                    <el-button
                      @click="removeTeam(team)"
                      type="text"
                     
                      tabindex="6"
                      class="mr-halfrem"
                      style="color: #fd7373"
                    >
                      <el-icon>
                        <delete-icon />
                      </el-icon>
                      حذف تیم
                    </el-button>
                  </el-tooltip>
                  <el-button
                    @click="addTeam"
                    type="text"
                    style="color: #67c23a; border:1px solid #67c23a; padding: 0 4px;"
                    class="mr-halfrem"
                    
                    v-if="index === teams.length - 1"
                  >
                    <el-icon>
                      <plus-icon />
                    </el-icon>
                    افزودن تیم دیگر
                  </el-button>
                </el-col>
              </el-row>
            </div>
          </el-card>
          <!-- <div class="d-flex jc-center mb-halfrem">
            <el-button @click="addTeam" type="success" tabindex="11" plain>
              <el-icon>
                <plus-icon />
              </el-icon>
              افزودن تیم دیگر
            </el-button>
          </div> -->
        </div>
      </el-col>
      <el-col :lg="8">
        <h3 class=" text-right mb-halfrem">توضیحات</h3> 
         <el-card class="hints">
        
          <ol>
            <li>
              آدرس ایمیل اختیاری است اما اگر آن را در اختیارمان قرار دهید برای
              شما لینک داشبورد ارسال می‌گردد.
            </li>

            <li>
              ممکن است شما صرفا یک تیم باشید. در این صورت مفهوم سازمان را همان
              تیم در نظر بگیرید
            </li>

            <li>
              پس از ثبت این اطلاعات، به ازای هر یک از تیم‌هایی که تعریف کرده اید
              یک لینک اختصاصی برای اعضای آن تیم به شما داده می‌شود
            </li>
            <li>
              می‌توانید نام تیم را تعیین نکنید و از همان نام پیش‌فرض استفاده
              کنید.
            </li>
          </ol>
        </el-card>
      </el-col>
    </el-row>
  </el-form>

  <proceed-button
    type="finalize"
    align="center"
    text="ثبت سازمان و دریافت لینک"
    @click="goNext"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
const MIN_TEAM_NAME_LENGTH = 3;
import { mapMutations } from "vuex";
import { Team } from "@/models";

export default defineComponent({
  name: "RegistrationForm",

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

<style scoped>
.el-card__body {
  flex-direction: column;
}
.el-form-item__label {
  color: white;
  padding-left: 2px;
}

.el-input-number {
  width: 100px;
}
.hints {
  margin-bottom: 1rem;
}
.number-container{
position: relative; 
}
.number-container h3{
text-align:right !important
}
/* .number-container:after{
  content:"";
  background:#fff;
  height: 100%;
  width:1px;
  position:absolute;
  top:0;
  right:-10px
} */
 .number-container .number{
 height: 30px;
  width:30px;
  border:1px solid #fff;
  border-radius:50%;
  display:inline-flex;
  justify-content: center;
  align-items: center;
  margin-left:1rem
 }
 h3.text-right{
text-align:right !important
 }
</style>
