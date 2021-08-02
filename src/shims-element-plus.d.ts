import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $alert: any;
    $message: any;
    $notify: any;
  }
}
