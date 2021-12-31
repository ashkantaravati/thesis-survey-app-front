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
        <a class="emphasized" href="mailto:ashkan.taravati+thesis@gmail.com">ایمیل</a> با من در
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
  <hint-dialog v-model="isHintVisible">
      <p>
        روال به این صورت است:
        <ol>
          <li>
            ابتدا از شما به عنوان نماینده‌ی سازمانتان می‌خواهم خودتان و سازمانتان را معرفی کرده و ترجیحا یک آدرس ایمیل در اختیار من بگذارید.
          </li>

          <li>
            ممکن است شما صرفا یک تیم باشید. در این صورت مفهوم سازمان را همان تیم در نظر بگیرید
          </li>

          <li>در نهایت بعد از آن که تیم‌ها و اعضای تیم‌ها را مشخص کردید با ثبت اطلاعات به اعضای هر کدام از تیم‌هایی که تعریف کردید یک لینک اختصاصی دریافت خواهید کرد که می‌بایست در اختیار اعضای آن تیم قرار دهید.</li>
        </ol>

      </p>
  </hint-dialog>
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
    showHelp() {
      this.isHintVisible = true;
    },
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


</style>
