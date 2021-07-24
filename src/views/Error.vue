<template>
  <el-row class="jc-center">
    <el-col :xs="24" :lg="18" :xl="18">
      <h4 class="text-center mb-halfrem">باعث شرمندگیه... متاسفانه مشکلی پیش آمد.</h4>
      <div class="mt-1rem">
        <img
          class="responsive-img"
          src="../assets/images/500InternalServerError-cuate.svg"
          alt=""
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error",
});
</script>

<style></style>
