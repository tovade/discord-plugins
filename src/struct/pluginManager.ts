import path from "path"
import { EventEmitter } from "events"
import {Client } from "discord.js"
export default class PluginManager extends EventEmitter {
  public client: Client
  constructor(client: Client) {
    super();
    this.client = client
  }
  async use(pack: any, client = this.client) {
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
