const glob = require("glob");
const path = require("path");
module.exports.load = async (client, commandPath) => {
  const files = await glob.sync(`${commandPath}/**/*.js`);
  for (const file of files) {
    const cmd = require(path.resolve(file));

    if (cmd.name) {
      return client.commands.set(cmd.name, cmd);
    } else if (!cmd.name) {
      const cmdNewName = file.split(".")[0];
      return client.commands.set(cmdNewName, cmd);
    }
    if (cmd.aliases && Array.isArray(cmd.aliases))
      return cmd.aliases.forEach((all) => client.aliases.set(all, cmd));
  }
};
