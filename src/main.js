import { createApp } from "vue";
import "./assets/Styles.scss";
import App from "./App.vue";

// Router Config
import router from "./router";
// Importing Pinia
import { createPinia } from "pinia";

createApp(App).use(createPinia()).use(router).mount("#app");
