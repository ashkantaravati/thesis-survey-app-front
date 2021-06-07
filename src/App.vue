
<template>
  <div class="common-layout">
    <el-container class="body-container">
      <el-header class="header">
        <el-menu
          :default-active="activeIndex2"
          id="nav"
          mode="horizontal"
          @select="handleSelect" 
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1"
            ><router-link :to="{ name: 'Home' }"
              >صفحه اصلی</router-link
            ></el-menu-item
          >
          <el-menu-item index="2">
            <router-link :to="{ name: 'RegisterLanding' }"
              >ثبت نام</router-link
            ></el-menu-item
          >
        </el-menu>
      </el-header>
      <el-main> <router-view /> </el-main>
         <el-divider></el-divider>
      <el-footer class="footer">
        <router-link to="#">درباره‌ی پژوهش</router-link>
        <router-link to="#">درباره‌ی پژوهشگر</router-link>
        <router-link to="#">ارسال بازخورد</router-link></el-footer
      >
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
@font-face {
  font-family: "IRANSansX";
  src: url(./fonts/woff/IRANSansX-Regular.woff),
    url(./fonts/woff2/IRANSansX-Regular.woff2);
}
body {
  font-family: "IRANSansX";
  box-sizing: border-box;
  margin: 0;
  direction: rtl;
  font-size: 16px;
  line-height: 24px;
    color: #333;
    background: rgb(241, 241, 241);
}
a,a:hover, a:focus{
  text-decoration: none !important;
} 
.body-container{
    width: 80%;
    margin: 0 auto;
}
.header{
  padding: 0 !important;
}

.header ul{
    padding: 0 1rem;
    background-color: #177aa6 !important;

    border-radius: 0 0 1rem 1rem;
}
.el-menu--horizontal>.el-menu-item{
  float: right !important;
     background-color: transparent !important;
}
.el-main{
  min-height: 70vh;
}
.footer{
  font-size: .8rem;
}
.footer a{
    color: #333;
    margin-left: 1rem;
}
</style>