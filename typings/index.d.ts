declare module "discord-bot-plugins" {
  import EventEmitter from "events";
  import { Client, ClientOptions as DClientOptions } from "discord.js";
  import { ClientOptions as EClientOptions} from "eris"

  export interface Pluginevents {
    PluginLoaded: [any];
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
  export class PluginErisClient extends Client {
    constructor(token: string, options: EClientOptions)
  }
}
declare module "path" {}