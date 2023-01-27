let express = require("express");

let server = express();

server.get("/", (req, res) => {
  res.send(
    `
   hello node server
        `
  );
});

server.listen(3000, () => {
  console.log("server start");
});
