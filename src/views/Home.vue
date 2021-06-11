
<template>
  <el-card>
    <el-row class="jc-center">
      <el-col :xs="24" :lg="18" :xl="18">
        <img src="../assets/images/Forms-pana.svg" class="image" />
      </el-col>
    </el-row>

    <div>
      <span>سلام و احوال پرسی اینا</span>
      <div class="jc-center d-flex">
        <router-link :to="{ name: 'RegisterLanding' }"
          >
            <el-button round type="primary"
      > ثبت نام</el-button
    >
         </router-link
        >
      </div>
    </div>
  </el-card>
</template>

<script>
export default {};
</script>

<style>
.image {
  width: 100%;
  display: block;
}
</style>