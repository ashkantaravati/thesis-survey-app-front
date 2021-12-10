import { createApp } from "vue";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import App from "./App.vue";
import 'element-plus/dist/index.css'
import installElementPlus from "./plugins/element";
import router from "./router";
import store from "./store";
import ProceedButton from "@/components/common/ProceedButton.vue";
import HintDialog from "@/components/common/HintDialog.vue";
import '@/css/main.css'

const app = createApp(App);
installElementPlus(app);
app.use(VueClipboard);
app.use(router);
app.use(store);
app.component("proceed-button", ProceedButton);
app.component("hint-dialog", HintDialog);
app.mount("#app");
