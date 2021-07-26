import { createApp } from "vue";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import router from "./router";
import store from "./store";
import ProceedButton from "@/components/common/ProceedButton.vue";

const app = createApp(App);
installElementPlus(app);
app.use(VueClipboard);
app.use(router);
app.use(store);
app.component("proceed-button", ProceedButton);
app.mount("#app");
