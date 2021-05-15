const { Client } = require("../src/index");

const client = new Client(
  { partials: [] },
  {
    token: "NzIxMjUyNTgyNTg0MDkwNjU1.XuR0zw.X4CMlyca4ieNR--84ukYI6qcXwQ",
    prefix: "!",
  }
);
client.plugins.use("./plugins/plugin.js");
client.start();
