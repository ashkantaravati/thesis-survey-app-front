
<template>
<el-row class="jc-center">
  <el-col :span="12">
    <el-card>
      <img src="../assets/images/undraw_Setup_re_y9w8.svg" class="image">
      <div>
        <span>سلام و احوال پرسی اینا</span>
        <div class=" jc-center d-flex"> 
            <router-link :to="{ name: 'RegisterLanding' }" class="p-btn-primary"
              >ثبت نام</router-link
            > 
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
  export default { }
</script>

<style> 
   

  .image {
    width: 100%;
    display: block;
  }
</style>