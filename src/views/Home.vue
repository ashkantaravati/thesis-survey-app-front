<template>
  <el-row class="jc-center">
    <el-col :md="20" :lg="20">
      <el-row class="halfheight">
        <img src="../assets/images/exams-bro.svg" alt="" />
      </el-row>
      <el-row>
        <h1>پژوهشی در اثربخشی تیم‌های توسعه‌ی نرم‌افزار</h1>

        <p class="mb-halfrem home-intro">
          من
          <a class="emphasized" href="https://linkedin.com/in/ashkantaravati"
            >اشکان طراوتی</a
          >
          هستم، یکی از فعالان فناوری اطلاعات در ایران و علاقمند به مباحث مدیریت
          مهندسی و رفتار سازمانی. در حال حاضر مشغول به انجام پایان‌نامه‌ام با
          موضوع «بررسی نقش تعدیل‌کننده‌ی رفتار صدای تیم در رابطه‌ی میان
          بیش‌اطمینانی و اثربخشی تیم‌های نرم‌افزار» هستم. برای جمع‌آوری داده‌های
          این تحقیق به مشارکت تیم‌ها و سازمان‌های توسعه‌دهنده‌ی نرم‌افزار نیاز
          دارم.
        </p>

        <div>
          <router-link :to="{ name: 'register-landing' }">
            <el-button type="primary" class="my-1rem color-accent-cta">
              می‌خواهم مشارکت کنم</el-button
            >
          </router-link>
          <el-divider direction="vertical"></el-divider>
          <el-button
            class="color-secondary-cta"
            @click="showAboutSurveyDialog()"
            type="text"
          >
            می‌خواهم بیشتر بدانم
          </el-button>
        </div>
      </el-row>
    </el-col>
    <el-col v-if="stats.overall" :md="20" :lg="4" :xl="4">
      <div>
        <h2>مشارکت تاکنون</h2>
        <el-row class="jc-between overal-stats">
          <el-col class="mt-1rem">
            <el-card class="overal-stats-card">
              <span>
                <span>
                  {{ stats.overall.numberOfRegisteredTeams }}
                </span>
                تیم
              </span>
              <div class="more-info">
                <span type="text"
                  >از {{ stats.overall.targetTeamSize }} تیم
                </span>
              </div>
            </el-card>
          </el-col>
          <el-col class="mt-1rem">
            <el-card class="overal-stats-card">
              <span>
                <span>
                  {{ stats.overall.numberOfRegisteredParticipants }}
                </span>
                نفر
              </span>
            </el-card>
          </el-col>
          <el-col class="mt-1rem">
            <el-card class="overal-stats-card">
              <span>
                <span>
                  {{ stats.overall.numberOfRegisteredOrganizations }}
                </span>
                سازمان
              </span>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>

  <el-divider></el-divider>

  <el-row class="mobile-row-reverse jc-center">
    <el-col :md="20" :lg="18" :xl="18">
      <div>
        <h2>برخی از مشارکت‌کنندگان</h2>
        <el-carousel
          indicator-position="none"
          :interval="4000"
          type="card"
          height="100px"
        >
          <el-carousel-item
            v-for="organization in stats.registeredOrganizations"
            :key="organization"
          >
            <p class="name m-0">{{ organization.name }}</p>
            <p class="count">
              با <span>{{ organization.numberOfTeams }}</span> تیم
            </p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "Home",
  methods: {
    ...mapActions(["fetchStats"]),
    showAboutSurveyDialog() {
      this.$emit("aboutSurveyRequested");
    },
  },
  created() {
    this.fetchStats();
  },
  computed: {
    ...mapGetters(["surveyTitle", "stats"]),
  },
  data() {
    return {
      isHidden: false,
    };
  },
});
</script>

<style>
.overal-stats {
  flex-direction: column;
}
.overal-stats-card .el-card__body {
  align-items: self-start;
  padding: 5px 16px;
}
/* h1 {
  line-height: 36px;
} */
@media screen and (min-width: 768px) {
  .long-text {
    line-height: 30px;
  }
}
.home-img {
  text-align: center;
}
.home-img img {
  height: 23rem;
}

.text-center {
  text-align: center;
}

.home-steps-container,
.home-steps,
.home-steps-inner,
.home-steps-inner li {
  position: relative;
  list-style: none;
}
.home-steps-container:after {
  content: "";
  position: absolute;
  right: 17px;
  top: 12px;
  width: 1px;
  height: 82%;
  border-right: 2px dashed #81d2b6;
  background: transparent;
}
.home-steps:after {
  content: "";
  position: absolute;
  right: 8px;
  top: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #e4fff5;
  border: 2px dashed #81d2b6;
  z-index: 1;
}

.home-steps-inner li:after {
  content: "";
  position: absolute;
  right: -22px;
  top: 11px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #85daec;
}
mark {
  background-color: #c5f5ff;
  padding: 0 5px;
}
.title {
  line-height: 32px;
}
.align-center {
  align-items: center;
}
.text-right {
  text-align: right;
}
@media screen and (max-width: 768px) {
  .mobile-row-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}

.el-card__body {
  padding: 16px;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.el-card__body .more-info {
  position: absolute;
  bottom: 0;
  left: 0;
  background: #ffffff38;
  padding: 1px 6px;
  border-top-right-radius: 4px;
}
.el-card__body span {
  font-size: 14px;
}
.el-card__body span span {
  font-size: 24px;
}

.el-carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 4px;
}
.el-carousel__item .count {
  font-size: 12px;
  margin: 8px 0 0 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #384a5d;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #384a5d;
}

.color-accent-cta {
  background-color: #ffcc29;
  color: #142334;
  border-radius: 6px;
  border-width: 0;
}

.color-secondary-cta {
  color: #ffcc29;
}

.home-intro {
  text-align: justify;
}
.halfheight {
  height: 50%;
}
.emphasized {
  color: #fff;
  background-color: #ffffff38;
  border-radius: 5px;
  padding: 0px 5px;
}
</style>
