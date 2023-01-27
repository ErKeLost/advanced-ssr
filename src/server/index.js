import createApp from "../client/main";
import { renderToString } from "@vue/server-renderer";
let express = require("express");

let server = express();

server.get("/", async (req, res) => {
  let app = createApp();
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
</body>
</html>
`
  );
});

server.listen(3000, () => {
  console.log("server start");
});
