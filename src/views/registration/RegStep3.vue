<template>
  <h3>خلاصه‌ی اطلاعات وارد‌شده و بازبینی</h3>
  <el-alert type="warning" :closable="false" class="mb-halfrem">
    <span class="mx-halfrem">نام سازمان: {{ ruleForm.name }}</span>
    <span class="mx-halfrem"> نام شما: {{ ruleForm.rep_name }}</span>
    <span class="mx-halfrem"> سمت شما: {{ ruleForm.rep_job_title }}</span>
    <span class="mx-halfrem"> ایمیل شما: {{ ruleForm.rep_email }}</span>
    <span class="mx-halfrem">
      تعداد تیم‌های شما: {{ ruleForm.teams.length }}</span
    >
  </el-alert>

  <el-card
    class="box-card mb-halfrem"
    v-for="team in ruleForm.teams"
    :key="team.index"
  >
    <template #header>
      <div class="card-header">
        <span
          >اطلاعات تیم {{ team.index }} (شامل
          {{ team.members.length }} نفر)</span
        >
      </div>
    </template>
    <div v-for="member in team.members" :key="member.index" class="text item">
      {{ member.name }} <br />
    </div>
  </el-card>
  <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RegStep3",
  props: {},
});
</script>

<style>
</style>