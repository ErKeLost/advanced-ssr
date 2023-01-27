import { createApp } from "vue";
import Home from "./App.vue";
import { createWebHistory } from "vue-router";
import createRouter from "../router";
const app = createApp(Home);
const router = createRouter(createWebHistory());
app.use(router);
router.isReady().then(() => {
  app.mount("#app");
});
