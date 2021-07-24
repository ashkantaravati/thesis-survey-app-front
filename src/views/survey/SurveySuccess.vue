<template>
  <div>با موفقیت ثبت شد. با تشکر</div>
     <!-- <img  class="responsive-img" src="../assets/images/Completed-pana.svg" alt=""> -->
     <template>
  <el-row class="jc-center">
    <el-col :xs="24" :lg="18" :xl="18">
      <h4 class="text-center mb-halfrem">
با موفقیت ثبت شد. با تشکر
      </h4>
     <div class="text-center">

      <router-link :to="{ name: 'register-landing' }">
        <el-button round type="primary" class="mt-1rem">
          صفحه اصلی</el-button
        >
      </router-link>
     </div>
      <div class="mt-1rem">
        <img
          class="responsive-img"
          src="../../assets/images/Completed-pana.svg"
          alt=""
        />
      </div>
    </el-col>
  </el-row>
</template>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveySuccess",
});
</script>

<style></style>
