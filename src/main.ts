import { createApp } from "vue";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import App from "./App.vue";
import installElementPlus from "./plugins/element";
import router from "./router";
import store from "./store";

const app = createApp(App);
installElementPlus(app);
app.use(VueClipboard);
app.use(router);
app.use(store);
app.mount("#app");
