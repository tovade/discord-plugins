const { EventEmitter } = require("events");
const path = require("path");
const glob = require("glob");
module.exports = class PluginManager extends EventEmitter {
  constructor(client) {
    super(client);
    this.client = client;
  }
  async use(pack, client = this.client) {
    console.log("loading plugins....");
    let plugin;
    try {
      plugin = require(pack);
    } catch (err) {
      plugin = require(path.resolve(pack));
    }

    if (!plugin) return console.log(`Plugin (${pack}) does not exist.`);

    await plugin.load(client);
    this.emit("plugin", pack);
  }
};
