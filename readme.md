# discord-bot-plugins

🎉 A custom client with support for community made plugins :) 🎉

```js
const { Client } = require("discord-bot-plugins");
const client = Client();

client.plugins.use("plugin here"); // DO NOT DO THIS THIS PLUGIN IS INVALID AND ONLY FOR LEARNING SHOWOFF
```

Making a plugin:

```js
module.exports.load = async (client) => {
  //your code here
};
```

any issues? feel free to join my [Discord](https://discord.gg/HBZcEhxHSj)

❤ Typings by CasperTheGhost and made with ❤
