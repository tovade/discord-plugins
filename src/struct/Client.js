const { Client, Collection } = require("discord.js");
const PluginManager = require("./pluginManager");
const cmdLoader = require("../loaders/commands");
module.exports = class PluginClient extends Client {
  constructor(clientOpts, opts, PluginOpts) {
    super(clientOpts, opts, PluginOpts);
    /* collections and managers */
    this.commands = new Collection();
    this.plugins = new PluginManager(this, PluginOpts);
    this.events = new Collection();
    this.aliases = new Collection();
    this.cooldowns = new Collection();
    /* utils */
    this.extra = {
      options: opts,
    };
  }
  async loadCommands(cmdPath) {
    try {
      await cmdLoader.load(this, cmdPath);
    } catch (err) {
      this.emit("loaderError", err, "commands");
    }
  }
  async validate() {
    const options = this.extra.options;
    if (!options.prefix)
      throw new Error("Prefix is required for the bot to work!");

    if (!options.token)
      throw new Error("The bot token is required to start the bot!");
    if (!options.owners) options.owners = ["00000000000"];
    if (options.prefix && options.token) return true;
  }
  async start() {
    await this.validate();
    super.login(this.extra.options.token);
    await this.loadCommands();
    this.on("message", (message) =>
      require("../events/message")(this, message)
    );
    this.on("ready", () => console.log("im ready!"));
  }
};
