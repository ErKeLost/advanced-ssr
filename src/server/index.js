import createApp from "../client/main";
import { renderToString } from "@vue/server-renderer";
import createRouter from "../router";
import { createMemoryHistory } from "vue-router";
let express = require("express");
import { createPinia } from 'pinia'

let server = express();

server.use(express.static("dist"));
server.get("/*", async (req, res) => {
  // 创建实例
  let app = createApp();
  // pinia
  const pinia = createPinia()
  app.use(pinia)
  // 安装路由插件
  const router = createRouter(createMemoryHistory());
  app.use(router)
  await router.push(req.url || '/')
  // 等待页面跳转完成 路由异步加载完成
  await router.isReady()
  const html = await renderToString(app);
  console.log(html);
  res.send(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id='app'>
        ${html}
    </div>
    <script src="/client_bundle.js"></script>
</body>
</html>
`
  );
});

server.listen(3000, () => {
  console.log("server start");
});
