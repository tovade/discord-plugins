declare module "discord-plugins" {
  import EventEmitter from "events";
  import { Client, ClientOptions as DClientOptions } from "discord.js";

  export interface Pluginevents {
    plugin: [any];
  }

  export interface clientEvents {
    loaderError: [Error];
  }

  export class PluginManager extends EventEmitter {
    constructor(client: Client);

    use(pack: any, client?: Client);
  }

  export class PluginClient extends Client {
    constructor(
      clientOptions: DClientOptions,
    );
  }
}
