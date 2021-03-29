interface Pluginevents {
  plugin_loaded: [Package];
  loader_error: [Error];
}
interface clientEvents {
  loaderError: [Error];
}
declare module "discord-plugins" {
  import { Client } from "discord.js";
  export interface Options {
    token: string;
    prefix: string;
    owners?: string;
  }
}
