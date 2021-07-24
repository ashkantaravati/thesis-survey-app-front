<template>
  <el-row class="jc-center">
    <el-col :xs="24" :lg="18" :xl="18">
      <h4 class="text-center mb-halfrem">
        <i class="el-icon-circle-check d-block " style="     font-weight: 900;   font-size: 5rem;
    color: #67c23a;
    display: block;"></i>
        با موفقیت ثبت شد. با تشکر
      </h4>
      <div class="text-center"></div>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SurveySuccess",
});
</script>

<style></style>
