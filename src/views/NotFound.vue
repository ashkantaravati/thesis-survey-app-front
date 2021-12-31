<template>
  <el-row class="jc-center">
    <el-col :xs="24" :lg="18" :xl="18">
      <h4 class="text-center mb-halfrem">
        باعث شرمندگیه... متاسفانه مشکلی پیش آمد.
      </h4>
      <div class="text-center">
        <router-link :to="{ name: 'registration-form' }">
          <el-button round type="primary" class="mt-1rem"> صفحه اصلی</el-button>
        </router-link>
      </div>
      <div class="mt-1rem">
        <img
          class="responsive-img"
          src="@/assets/images/404Error-bro.svg"
          alt=""
        />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

<style></style>
