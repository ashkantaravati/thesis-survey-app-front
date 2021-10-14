<template>
  <div class="text-center">
    <h1>پژوهشی در اثربخشی تیم‌های توسعه‌ی نرم‌افزار</h1>
  </div>
  <el-row class="mobile-row-reverse jc-center">
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
      <div class="mt-1rem">
        <p>
          درصورتی‌که سازمان شما تعریف شده و لینک اختصاصی پرسشنامه را دریافت
          کرده‌ایداز این طریق وارد شوید
        </p>
        <div class="d-flex jc-center">
          <!-- inam drawer mikhad -->
          <router-link :to="{ name: 'register-landing' }">
            <el-button type="primary" plain> شروع پرسشنامه</el-button>
          </router-link>
        </div>
      </div>
    </el-col>
  </el-row>

  <el-divider></el-divider>
  <el-row class="mobile-row-reverse jc-center">
    <el-col :xs="24" :sm="24" :md="20" :lg="18" :xl="18">
      <div style="margin: 2rem 0 4rem 0">
        <p>آمارهای مشارکت تا این لحظه</p>
        <el-row class="d-flex jc-between">
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="7" class="mt-1rem">
            <el-card>
              <span>
                <span>
                  {{ stats.overall.number_of_registered_teams }}
                </span>
                تیم
              </span>
              <div class="more-info">
                <span type="text"
                  >از {{ stats.overall.target_team_size }} تیم
                </span>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="7" class="mt-1rem">
            <el-card>
              <span>
                <span>
                  {{ stats.overall.number_of_registered_participants }}
                </span>
                نفر
              </span>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="7" class="mt-1rem">
            <el-card>
              <span>
                <span>
                  {{ stats.overall.number_of_registered_organizations }}
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
        <p>برخی از سازمان‌های مشارکت‌کننده</p>
        <p style="color: #b3b3b3">
          بدیهی ست نمایش نام آنها با رضایت سرپرست تیم‌ها بوده است
        </p>
        <el-carousel :interval="4000" type="card" height="100px">
          <el-carousel-item
            v-for="organization in stats.registered_organizations"
            :key="organization"
          >
            <p class="name m-0">{{ organization.name }}</p>
            <p class="count">با  <span>{{ organization.number_of_teams }}</span> تیم</p>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapGetters(["surveyTitle"]),
  },
  data() {
    return {
      stats: {
        overall: {
          target_team_size: 70,
          number_of_registered_teams: 35,
          number_of_participated_teams: 30,
          number_of_registered_participants: 320,
          number_of_participated_participants: 270,
          number_of_registered_organizations: 40,
          number_of_participated_organizations: 37,
        },
        registered_organizations: [
          {
            id: 1,
            name: "اسنپ",
            number_of_teams: 5,
          },
          {
            id: 2,
            name: "پیام‌آوران پارسیان",
            number_of_teams: 5,
          },
          {
            id: 3,
            name: "ممدسافت",
            number_of_teams: 2,
          },
          {
            id: 4,
            name: "دیجی‌کالا",
            number_of_teams: 7,
          },
          {
            id: 5,
            name: "غدیر",
            number_of_teams: 2,
          },
        ],
      },
    };
  },
});
</script>

<style>
h1 {
  line-height: 36px;
}
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

.el-carousel__item  {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #fff;
  border-radius: 4px;
}
.el-carousel__item .count {
 font-size: 12px;
 margin:8px 0 0 0
}
.el-carousel__item:nth-child(2n) {
  background-color: #384a5d;
  
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #384a5d;
}
</style>