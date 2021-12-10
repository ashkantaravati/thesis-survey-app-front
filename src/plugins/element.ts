import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/fa";

export default (app: any) => {
  app.use(ElementPlus, { locale });
};
