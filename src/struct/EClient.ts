import { Client, ClientOptions } from "eris"
import PluginManager from "./pluginManager"
export default class PluginErisClient extends Client {
 public plugins = PluginManager
 constructor(token: string, opts: ClientOptions) {
     super(token, opts)
 }
}