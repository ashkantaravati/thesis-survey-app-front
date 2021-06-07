<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link :to="{ name: 'Home' }">صفحه اصلی</router-link> |
        <router-link :to="{ name: 'RegisterLanding' }">ثبت نام</router-link> |
        <!-- <router-link :to="{ name: 'RegisterWizard' }">مشارکت</router-link> -->
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <router-link to="#">درباره‌ی پژوهش</router-link> |
      <router-link to="#">درباره‌ی پژوهشگر</router-link> |
      <router-link to="#">ارسال بازخورد</router-link>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@font-face {
  font-family: "IRANSansX";
  src:
   url(./fonts/woff/IRANSansX-Regular.woff),
   url(./fonts/woff2/IRANSansX-Regular.woff2);
}
body{
  font-family: 'IRANSansX';
  box-sizing: border-box;
    margin: 0;
    direction: rtl;
    font-size: 16px;
    line-height: 24px;
}
</style>
