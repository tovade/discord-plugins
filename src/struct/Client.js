const { Client, Collection } = require("discord.js");
const PluginManager = require("./pluginManager");
const cmdLoader = require("../loaders/commands");
module.exports = class PluginClient extends Client {
  constructor(clientOpts) {
    super(clientOpts);
    /* collections and managers */
    this.plugins = new PluginManager(this);
  }
};
