<template>
  <el-header class="header">
    <router-link :to="{ name: 'home' }">
      <el-button type="text"> صفحه‌ی اصلی</el-button>
    </router-link>
    <el-button type="text" @click="aboutSurveyDrawer = true">
      درباره‌ پژوهش</el-button
    >
    <el-button type="text" @click="isHintVisible = true">راهنما</el-button>
    <el-button type="text" @click="aboutMeDrawer = true"
      >ارتباط با من</el-button
    >

    <el-drawer
      v-model="aboutSurveyDrawer"
      size="80%"
      title="درباره‌ی پژوهش"
      :direction="direction"
      :close-on-click-modal="true"
    >
      <p>
        پژوهش حاضر مربوط به تز کارشناسی ارشد من در رشته‌ی مهندسی صنایع گرایش
        مدیریت مهندسی است که در دانشگاه تربیت مدرس، دانشکده‌ی مهندسی صنایع و
        سیستم‌ها زیر نظر سرکار خانم دکتر گلناز تاج‌الدین در حال انجام آن هستم.
      </p>
      <p>
        در این تحقیق نمونه‌ی آماری تیم نرم‌افزار است و جمع‌آوری داده‌ها به ازای
        تیم‌ها صورت می‌گیرد. به این منظور به اعضای هر تیم یک لینک به پرسشنامه‌ی
        اختصاصی خودشان داده می‌شود و با توجه به پاسخی که هر یک از اعضای تیم به
        پرسشنامه می‌دهند، داده‌ها در سطح تیم تجمیع می‌گردد.
      </p>
      <p>
        در این راستا از یک نفر در سازمانی که علاقمند به مشارکت باشد می‌خواهم به
        عنوان نماینده‌ی سازمان، اعضای تیم‌های مشارکت‌کننده را به تفکیک تیم تعریف
        و ثبت کند و برای هر تیم لینک اختصاصی دریافت کرده و به اعضای آن تیم بدهد.
        لازم به ذکر است که تمام اطلاعات محرمانه می‌ماند و البته نیازی به درج
        مشخصات هویتی دقیق وجود ندارد.
      </p>
    </el-drawer>
    <el-drawer
      v-model="aboutMeDrawer"
      title="ارتباط با من"
      :direction="direction"
      :close-on-click-modal="true"
    >
      <p>
        اگر سوال، پیشنهاد یا نیاز به راهنمایی داشتید می‌توانید از طریق
        <a href="mailto:ashkan.taravati+thesis@gmail.com">ایمیل</a> با من در
        ارتباط باشید.
      </p>
    </el-drawer>
  </el-header>
  <el-divider style="margin-top: 0"></el-divider>
  <div class="common-layout add-bg">
    <el-container class="body-container">
      <!-- <el-header class="header" style="margin:10px 0; height: unset">
        <span>{{ surveyTitle }}</span>
      </el-header> -->
      <!-- <el-divider class="m-0"></el-divider> -->
      <el-main>
        <router-view
          @aboutSurveyRequested="aboutSurveyDrawer = true"
          @showHelpRequested="showHelp"
        />
      </el-main>
    </el-container>
  </div>
  <el-dialog
    v-model="isHintVisible"
    center="true"
    width="80%"
    show-close="false"
  >
    <div>
      <p class="hint-text">
        روال به این صورت است:
        <ol>
          <li>
            ابتدا از شما به عنوان نماینده‌ی سازمانتان می‌خواهم خودتان و سازمانتان را معرفی کرده و ترجیحا یک آدرس ایمیل در اختیار من بگذارید.
          </li>
          <li>
            اگر دوست ندارید نیازی نیست که نام دقیق یا واقعی سازمان را بنویسید.
          </li>
          <li>
            ممکن است شما صرفا یک تیم باشید. در این صورت مفهوم سازمان را همان تیم در نظر بگیرید
          </li>
          <li>
            در ادامه از شما می‌خواهم تک تک تیم‌هایی که از سازمان شما شرایط و رغبت برای مشارکت را دارند معرفی کنید. این تیم‌ها در درجه‌ی اول تیم‌های توسعه‌ی نرم‌افزار و در درجه‌ی بعد تیم‌هایی نظیر تیم طراحی، تست، تحلیل، مدیریت محصول و مانند این‌ها هستند؛ یعنی فعال در حوزه‌ی توسعه‌ی نرم‌افزار و مشغول به کار تیمی دانش‌محور
          </li>
          <li>
            برای تیم‌ها اسم بگذارید. اگر تمایل ندارید، اصراری نیست که این نام‌ها مطابق واقعیت باشد.
          </li>
          <li>
            نام هر یک از اعضای تیم را وارد کنید. باز هم اصراری نیست که نام افراد مطابق واقعیت باشد اما لازم است خود فرد بتواند نامش را تشخیص دهد.
          </li>
          <li>
            اگر خودتان نیز عضو تیمی هستید حتما نام خودتان را هم بنویسید.
          </li>
          <li>
            امیدوارم نام همه‌ی اعضای تیم را وارد کنید و همه‌ی اعضای تیم مشارکت کنند. در غیر این صورت دیتای به دست آمده ممکن است مفید نباشد.
          </li>
          <li>در نهایت بعد از آن که تیم‌ها و اعضای تیم‌ها را مشخص کردید با ثبت اطلاعات به اعضای هر کدام از تیم‌هایی که تعریف کردید یک لینک اختصاصی دریافت خواهید کرد که می‌بایست در اختیار اعضای آن تیم قرار دهید.</li>
        </ol>

      </p>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="isHintVisible = false"
          >متوجه ام!</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  computed: {
    ...mapGetters(["surveyTitle"]),
  },
  methods: {
    setExtraAttributesOnElNumberInputs() {
      document.querySelectorAll(".el-input-number input").forEach(function(el) {
        el.setAttribute("inputmode", "numeric");
        el.setAttribute("pattern", "[0-9]*");
      });
    },
    showHelp() {
      this.isHintVisible = true;
    },
  },
  mounted() {
    this.$nextTick(function() {
      this.setExtraAttributesOnElNumberInputs();
    });
  },

  setup() {
    const aboutSurveyDrawer = ref(false);
    const isHintVisible = ref(false);
    const aboutMeDrawer = ref(false);
    const direction = ref("btt");
    const handleClose = () => {};

    return {
      isHintVisible,
      aboutMeDrawer,
      aboutSurveyDrawer,
      direction,
      handleClose,
    };
  },
});
</script>

<style>
@font-face {
  font-family: "IRANSansX";
  src: url(./fonts/woff/IRANSansXFaNum-Regular.woff),
    url(./fonts/woff2/IRANSansXFaNum-Regular.woff2);
}
body {
  font-family: "IRANSansX";
  box-sizing: border-box;
  margin: 0;
  direction: rtl;
  font-size: 16px;
  line-height: 24px;
  background: #384a5d;
  color: #f5f5f5;
  position: relative;
}
body::before {
  content: "";
  display: block;
  width: 100%;
  height: 420px;
  position: absolute;
  top: 0;
  left: 50%;
  background: url(./assets/images/colorfull-bg.svg) no-repeat 50%;
  transform: translateX(-50%);
  z-index: -1;
  opacity: 0.7;
}
@media screen and (max-width: 768px) {
  body::before {
    left: 60%;
    background: url(./assets/images/colorfull-bg.svg) no-repeat 60%;
    transform: translateX(-60%);
  }
}
a,
a:hover,
a:focus {
  text-decoration: none !important;
}
.el-input__inner,
.el-button,
.el-step__icon-inner {
  font-family: "IRANSansX" !important;
}
.el-menu {
  background-color: transparent !important;
}

@media screen and (min-width: 768px) {
  .body-container {
    width: 80%;
    margin: 0 auto;
  }
}
.el-menu--horizontal > .el-menu-item {
  float: right !important;
}
.el-main {
  min-height: 70vh;
}
.header {
  font-size: 1rem;
  display: flex;
  align-items: center;
}
.header button {
  color: rgb(218, 218, 218);
  margin-left: 1.5rem !important;
}
@media screen and (max-width: 320px) {
  .header a {
    color: rgb(218, 218, 218);
    margin-left: 0.82rem;
  }
}
/*  */
.jc-center {
  justify-content: center;
}
.jc-between {
  justify-content: space-between;
}
.d-flex {
  display: flex;
}
.m-0 {
  margin: 0 !important;
}
.pb-1rem {
  padding-bottom: 1rem;
}
.mb-halfrem {
  margin-bottom: 0.5rem !important;
}
.mx-halfrem {
  margin-right: 0.5rem !important;
  margin-left: 0.5rem !important;
}
.mr-halfrem {
  margin-right: 0.5rem !important;
}
.mt-1rem {
  margin-top: 1rem !important;
}

.my-1rem {
  margin-top: 1rem !important;
  margin-bottom: 1rem !important;
}
/*  */

.el-button.is-round {
  border-radius: 46px;
  padding: 19px 40px;
}
.responsive-img {
  height: 500px;
  width: 100%;
}
.el-input__inner {
  background-color: #384a5d !important;
  color: #f5f5f5 !important;
}
.el-link.el-link--info {
  color: #e2e2e2 !important;
}

.el-card {
  background-color: #384a5d !important;
  color: #f5f5f5 !important;
}
.card-header h4 {
  color: #f5f5f5 !important;
}

.el-drawer {
  background-color: #1f333a !important;
}

.el-drawer__header {
  font-weight: bold !important;
  font-size: larger !important;
  color: #fff !important;
}

.el-drawer__body {
  margin: 0 5%;
}

.hint-text{
  word-break: break-word;
  text-align: justify !important;
}
</style>
