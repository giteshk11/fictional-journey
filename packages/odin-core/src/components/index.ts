import TButton from "./button/TButton.vue";
import type { App } from "vue";

export default {
  install(app: App) {
    app.component(TButton.name, TButton);
  },
};
