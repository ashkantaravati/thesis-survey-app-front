<template>
  <div class="text-center">
    <h2>پرسشنامه‌‌ی فلان</h2>
    <h3>
      خاطر جمع باشید که هویت مشارکت‌کنندگان و داده‌های مربوط به سازمان‌ها فاش
      نخواهد شد و گزارش‌های حاصل از این پژوهش از افراد و سازمان‌ها به صورت
      <mark>ناشناس</mark>
      یاد خواهند کرد.
    </h3>
  </div>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
      <div class="long-text">
        <p>از این که در این پژوهش بنده را یاری می‌کنید بسیار سپاسگزارم.</p>
        <p>
          شرکت کنندگان این پژوهش اعضای تیم‌های توسعه‌ی نرم‌افزار هستند. اگر در
          سازمان خود بیش از یک تیم دارید، مشارکت همه‌ی تیم‌ها در این پژوهش لطف
          بزرگ خواهد بود.
        </p>
        <p>مشارکت در این پژوهش <strong>دو</strong> مرحله دارد:</p>
        <div class="home-steps-container">
          <ul class="home-steps">
            <li>
              ابتدا از شما به عنوان نماینده‌ی سازمانتان می‌خواهم:

              <ul class="home-steps-inner">
                <li>
                  اطلاعات مختصری درباره‌ی اعضای هر یک از تیم‌ها وارد نمایید
                </li>
                <li>
                  پس از ثبت اطلاعات برای هر تیم یک لینک اختصاص در اختیارتان قرار
                  می‌گیرد که می‌بایست با اعضای آن تیم به اشتراک گذاشته شود
                </li>
              </ul>
            </li>
          </ul>
          <ul class="home-steps">
            <li>
              گام دوم هر یک از افرادی که لینک تیم خود را دریافت کرده‌اند وارد
              سامانه شده و سوالات پرسشنامه‌ای که برایشان نمایان می‌شود را پاسخ
              می‌دهند
            </li>
          </ul>
        </div>
      </div></el-col
    >
    <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
      <div class="home-img">
        <img src="../assets/images/Designteam-amico.svg" alt="" /></div
    ></el-col>
  </el-row>
  <el-divider></el-divider>
  <p>برخی از شرکت‌هایی که برای این پرسشنامه همکاری کردند</p>
  <p style="color:#b3b3b3">بدیهیست نمایش نام آنها با رضایت سرپرست تیم‌ها بوده است</p>
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
  </el-row>
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

export default defineComponent({
  name: "Home",
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
  animation: glowing 1300ms infinite;
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
</style>
