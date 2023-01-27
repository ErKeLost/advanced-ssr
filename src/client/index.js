import { createApp } from "vue";
import Home from "./App.vue";
import { createWebHistory } from "vue-router";
import createRouter from "../router";
import { createPinia } from 'pinia'
const app = createApp(Home);
const router = createRouter(createWebHistory());
app.use(router);
const pinia = createPinia()
app.use(pinia)
router.isReady().then(() => {
  app.mount("#app");
});
