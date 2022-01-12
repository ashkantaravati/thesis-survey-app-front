<template>
  <el-header class="header">
    <router-link :to="{ name: 'home' }">
      <el-button type="text"> صفحه‌ی اصلی</el-button>
    </router-link>

    <el-button type="text" @click="aboutMeDrawer = true"
      >ارتباط با من</el-button
    >

    <el-button type="text" @click="openDoc">فایل توضیحات</el-button>

    <el-drawer
      v-model="aboutMeDrawer"
      title="ارتباط با من"
      direction="btt"
      :close-on-click-modal="true"
    >
      <p>
        اگر سوال، پیشنهاد یا نیاز به راهنمایی داشتید می‌توانید از طریق
        <a class="emphasized" href="mailto:ashkan.taravati+thesis@gmail.com"
          >ایمیل</a
        >
        با من در ارتباط باشید.
      </p>
    </el-drawer>
  </el-header>
  <div class="common-layout add-bg">
    <el-container class="body-container">
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <el-divider class="mb-halfrem"></el-divider>

    <el-footer height="40px">
      <el-row justify="center">
        طراحی و توسعه توسط
        <a class="emphasized" href="https://linkedin.com/in/ashkantaravati"
          >اشکان طراوتی</a
        >
        و با مشارکت جمعی از دوستان | توزیع شده تحت
        <a
          class="emphasized"
          href="https://fa.wikipedia.org/wiki/%D9%BE%D8%B1%D9%88%D8%A7%D9%86%D9%87_%D8%A7%D9%85%E2%80%8C%D8%A2%DB%8C%E2%80%8C%D8%AA%DB%8C"
        >
          پروانه MIT
        </a>
        بر بستر
        <a
          class="emphasized"
          href="https://github.com/ashkantaravati/thesis-survey-app-front"
          >GitHub</a
        >
        | زمستان ۱۴۰۰
      </el-row>
    </el-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "App",
  computed: {
    ...mapGetters(["surveyTitle"]),
  },
  methods: {
    openDoc() {
      window.open("/docs/README.pdf", "_blank");
    },
  },
  setup() {
    const aboutMeDrawer = ref(false);

    return {
      aboutMeDrawer,
    };
  },
});
</script>

<style></style>
