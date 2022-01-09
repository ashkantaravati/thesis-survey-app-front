<template>
  <h2>ثبت نام سازمان</h2>

  <div class="registration-title">
    <router-view
      @submit.once="submit"
      @showHelpRequested="showHelp"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { mapActions, useStore } from "vuex";

export default defineComponent({
  name: "RegistrationLayout",
  props: {},
  setup() {
    const store = useStore();

    return {
      loading: computed(() => store.state.loading),
    };
  },
  methods: {
    ...mapActions(["registerOrganization"]),
    showHelp() {
      this.$emit("showHelpRequested");
    },
    submit() {
      this.registerOrganization();
    },
  },
});
</script>

<style></style>
