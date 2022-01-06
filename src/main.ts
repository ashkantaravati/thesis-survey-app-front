import { createApp } from "vue";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import App from "./App.vue";
import "element-plus/dist/index.css";
import installElementPlus from "./plugins/element";
import {
  Delete,
  Finished,
  Minus,
  Right,
  DocumentCopy,
  Plus,
} from "@element-plus/icons";
import router from "./router";
import store from "./store";
import {
  LikertScaleQuestion,
  ProceedButton,
  HintDialog,
} from "@/core/components";
import "@/assets/scss/_app.scss";

const app = createApp(App);
installElementPlus(app);
app.use(VueClipboard);
app.use(router);
app.use(store);
app.component("delete-icon", Delete);
app.component("finished-icon", Finished);
app.component("right-icon", Right);
app.component("minus-icon", Minus);
app.component("plus-icon", Plus);

app.component("copy-icon", DocumentCopy);
app.component("proceed-button", ProceedButton);
app.component("hint-dialog", HintDialog);
app.component("likert-scale-question", LikertScaleQuestion);
app.mount("#app");
