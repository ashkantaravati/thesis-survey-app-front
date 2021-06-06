<template>
  <el-container>
    <el-header>
      <div id="nav">
        <router-link to="/">صفحه اصلی</router-link> |
        <router-link to="/register">ثبت نام</router-link> |
        <router-link to="/participate">مشارکت</router-link>
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

<style></style>
