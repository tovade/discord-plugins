const Discord = require("discord.js");
module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(client.extra.options.prefix)) return;
  const args = message.content
    .slice(client.extra.options.prefix.length)
    .trim()
    .split(/ +/);
  const commandName = args.shift();
  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.nsfwOnly && !message.channel.nsfw) {
    return message.reply("Only use this in nsfw channels please");
  }
  if (
    command.ownerOnly &&
    !client.extra.options.owners.includes(message.author.id)
  ) {
    return message.reply("Only the owner is allowed to run this");
  }

  if (!client.cooldowns.has(command.name)) {
    client.cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = client.cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 0) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  if (command.botPermission) {
    let neededPerms = [];

    command.botPermission.forEach((p) => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`");
    });

    if (neededPerms.length)
      return message.channel.send(
        `I need ${neededPerms.join(", ")} permission(s) to execute the command!`
      );
  } else if (command.memberPermission) {
    let neededPerms = [];

    command.memberPermission.forEach((p) => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`");
    });

    if (neededPerms.length)
      return message.channel.send(
        `You need ${neededPerms.join(
          ", "
        )} permission(s) to execute the command!`
      );
  }
  try {
    command.execute(client, message, args);
  } catch (error) {
    console.log(error);
    message.reply("there was an error trying to execute that command!");
  }
};
