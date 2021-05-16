import { Client, ClientOptions } from 'discord.js'
import PluginManager from "./pluginManager"
export default class PluginClient extends Client {
  public plugins = new PluginManager(this);
  constructor(clientOpts: ClientOptions) {
    super(clientOpts);
  }
};
