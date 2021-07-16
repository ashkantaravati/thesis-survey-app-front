
<template>
  <div class="common-layout add-bg">
    <el-container class="body-container">
      <el-header class="header">
        <el-menu class="el-menu-demo" id="nav" mode="horizontal">
          <el-menu-item index="1">
            <span>پرسشنامه‌ی پایان‌نامه :)</span>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-row class="jc-center">
          <el-col :xs="24" :lg="18" :xl="18">
            <router-view />
          </el-col>
        </el-row>
      </el-main>
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
export default {};
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
  background: #fff;
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
  /* z-index: 1; */
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
.footer {
  font-size: 0.8rem;
}
.footer a {
  color: #333;
  margin-left: 1rem;
}
/*  */
.jc-center {
  justify-content: center;
}
.d-flex {
  display: flex;
}
.m-0{
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
/*  */


.fix{
  position: fixed;
    bottom: 0;
    z-index: 9999999;
    background: #fff;
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;
    right: 0;
    align-items: center;
    left: 0;
    box-shadow: 0 -7px 8px #1010102e;
    padding: 1.5rem 0px;
}
.el-button.is-round {
    border-radius: 46px;
    padding: 19px 40px;
}
</style>