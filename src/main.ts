import { createApp } from "vue";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import App from "./App.vue";
import 'element-plus/dist/index.css'
import installElementPlus from "./plugins/element";
import {Delete, Finished, Minus} from "@element-plus/icons"
import router from "./router";
import store from "./store";
import ProceedButton from "@/core/components/ProceedButton.vue";
import HintDialog from "@/core/components/HintDialog.vue";
import '@/assets/css/main.css'

const app = createApp(App);
installElementPlus(app);
app.use(VueClipboard);
app.use(router);
app.use(store);
app.component("delete-icon",Delete)
app.component("finished-icon",Finished)
app.component("minus-icon",Minus)
app.component("proceed-button", ProceedButton);
app.component("hint-dialog", HintDialog);
app.mount("#app");
