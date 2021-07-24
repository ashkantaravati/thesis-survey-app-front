<template>
  <div class="text-center">
    <h1>پژوهشی در تیم‌های توسعه‌ی نرم‌افزار</h1>
    <h3>
      بررسی نقش تعدیل‌کننده‌ی رفتار صدای تیم در رابطه‌ی میان بیش‌اطمینانی و
      اثربخشی تیم‌های نرم‌افزار
    </h3>
  </div>
  <el-row :gutter="10" class="mobile-row-reverse">
    <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
      <div class="long-text">
        <p>
          از تیم‌های توسعه‌ی نرم‌افزار متعلق به انواع موسسات، سازمان‌ها،
          کسب‌و‌کارها و حتی تیم‌های بلندمدت فریلنس صمیمانی دعوت می‌شود تا با
          مشارکت در این پرسشنامه به پیش‌برد این پژوهش کمک نمایند.
        </p>
        <strong
          >داده‌های جمع‌آوری شده از طریق این پرسشنامه پیش از تحلیل و ارائه‌ی
          گزارش ناشناس‌سازی می‌شوند.</strong
        >
        <h3>مراحل مشارکت</h3>
        <div class="home-steps-container">
          <ul class="home-steps">
            <li><h4>ثبت اطلاعات سازمان ویا تیم</h4></li>
          </ul>
          <ul class="home-steps">
            <li><h4>دریافت لینک قابل اشتراک‌گذاری برای هر یک از تیم‌ها</h4></li>
          </ul>
          <ul class="home-steps">
            <li><h4>قرار دادن لینک هر تیم در اختیار اعضای آن تیم</h4></li>
          </ul>
          <ul class="home-steps">
            <li><h4>پاسخ اعضای تیم‌ها به پرسشنامه با مراجعه به لینک</h4></li>
          </ul>
        </div>
      </div></el-col
    >
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
      <div class="home-img">
        <img
          style="width: 100%"
          src="../assets/images/Designteam-amico.svg"
          alt=""
        /></div
    ></el-col>
  </el-row>
  <!-- <el-divider></el-divider>
  <p>برخی از شرکت‌هایی که برای این پرسشنامه همکاری کردند</p>
  <p style="color:#b3b3b3">
    بدیهیست نمایش نام آنها با رضایت سرپرست تیم‌ها بوده است
  </p>
  <el-row style="margin-bottom: 6rem" :gutter="20">
    <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row> -->
  <div class="jc-center d-flex fix">
    <router-link :to="{ name: 'register-landing' }">
      <el-button round type="success" class="winking-btn">
        شروع و ثبت اطلاعات سازمان</el-button
      >
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapGetters(["surveyTitle"]),
  },
});
</script>

<style>
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
  height: 75%;
  border-right: 2px dashed #81d2b6;
  background: transparent;
}
.home-steps:after {
  content: "";
  position: absolute;
  right: 6px;
  top: 6px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #e4fff5;
  border: 2px dashed #81d2b6;
  z-index: 1;
}

/* .home-steps-inner:after {
  content: "";
  position: absolute;
  right: 1.3rem;
  top: 12px;
  width: 3px;
  height: 45%;
  background: #85daec;
} */
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
.winking-btn {
  animation: glowing 2500ms infinite;
}
@keyframes glowing {
  0% {
    background-color: #67c23a;
    box-shadow: 0 0 3px #67c23a;
  }
  50% {
    background-color: #2a7e00;
    box-shadow: 0 0 10px #2a7e00;
  }
  100% {
    background-color: #67c23a;
    box-shadow: 0 0 3px #67c23a;
  }
}
mark {
  background-color: #c5f5ff;
  padding: 0 5px;
}
.title {
  line-height: 32px;
}

@media screen and (max-width: 768px) {
  .fix {
    padding: 1rem 0px;
  }
  .mobile-row-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
