<template>
  <h3>خلاصه‌ی اطلاعات وارد‌شده و بازبینی</h3>
  <el-alert type="warning" :closable="false" class="mb-halfrem">
    <span class="mx-halfrem">نام سازمان: {{ generalInfo.name }}</span>
    <span class="mx-halfrem"> نام شما: {{ generalInfo.repName }}</span>
    <span class="mx-halfrem"> سمت شما: {{ generalInfo.repJobTitle }}</span>
    <span class="mx-halfrem"> ایمیل شما: {{ generalInfo.repEmail }}</span>
    <span class="mx-halfrem"> تعداد تیم‌های شما: {{ teams.length }}</span>
  </el-alert>

  <el-card class="box-card mb-halfrem" v-for="team in teams" :key="team.index">
    <template #header>
      <div class="card-header">
        <span
          >اعضای تیم {{ team.index }} (شامل
          {{ team.members.length }} نفر)</span
        >
      </div>
    </template>
    <div v-for="member in team.members" :key="member.index" class="text item">
      <p>  {{ member.name }}</p>
    
    </div>
  </el-card>
  <!-- <el-button @click="goNext"> بازبینی و ثبت نهایی </el-button> -->
</template>

<script>
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "RegStep3",
  setup() {
    const store = useStore();

    return {
      teams: computed(() => store.state.registrationInfo.teams),
      generalInfo: computed(() => store.state.registrationInfo.generalInfo),
    };
  },
  props: {},
});
</script>

<style>
</style>