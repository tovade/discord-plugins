const { EventEmitter } = require("events");
const path = require("path");
module.exports = class PluginManager extends EventEmitter {
  constructor(client, options) {
    super(client, options);
    this.client = client;
  }
  async use(pack, client = this.client) {
    try {
      const plugin = require(pack) || require(path.resolve(pack));
      if (!plugin)
        throw new Error(
          "Plugin is not installed via npm or plugin does not exist."
        );
      await plugin.load(client);
      this.emit("plugin_loaded", pack);
    } catch (err) {
      this.emit("loader_error", err);
    }
  }
};
