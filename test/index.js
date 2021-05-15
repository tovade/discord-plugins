const { Client } = require("../src/index");

const client = new Client(
  { partials: [] },
  {
    token: "",
    prefix: "!",
  }
);
client.plugins.use("./plugins/plugin.js");
client.start();
