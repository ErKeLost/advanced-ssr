import { createSSRApp } from "vue";
import home from "./App";

// 通过函数返回app 避免跨请求状态的污染 每次请求返回一个新的app 
export default function createApp() {
  const app = createSSRApp(home);
  return app;
}
