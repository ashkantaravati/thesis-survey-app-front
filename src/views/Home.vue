<template>
  <div class="text-center">
    <h1>پژوهشی در اثربخشی تیم‌های توسعه‌ی نرم‌افزار</h1>
  </div>
  <el-row class="jc-center" :gutter="10">
    <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="18">
      <p class="mb-hlafrem">
        برای مشارکت در این پرسشنامه لازم است ابتدا مشخصات تیم‌های سازمان شما ثبت
        شده و برای هر تیم یک لینک/کد دریافت کنید.
      </p>
      <el-alert
        style="background: transparent"
        :closable="false"
        show-icon
        title="
        اطلاعات تیم‌ها و سازمان می‌تواند مستعار باشد. کافی است تعداد تیم‌ها و
        اعضا مطابق با واقعیت درج شود"
        type="warning"
      />
      <div class="d-flex jc-center">
        <router-link :to="{ name: 'register-landing' }">
          <el-button type="primary" class="my-1rem">
            شروع و ثبت اطلاعات سازمان</el-button
          >
        </router-link>
      </div>
    </el-col>
    <el-col v-if="stats.overall" :xs="24" :sm="24" :md="20" :lg="6" :xl="6">
      <div style="margin: 2rem 0 4rem 0">
        <h2>آمارهای مشارکت تا این لحظه</h2>
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
    <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="18">
      <div style="margin: 2rem 0 6rem 0">
        <h2>برخی از سازمان‌های مشارکت‌کننده</h2>
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
</style>
