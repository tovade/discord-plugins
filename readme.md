# discord-bot-plugins

🎉 A custom client with support for community made plugins :) 🎉
With discord.js:

```js
const { DClient } = require("discord-bot-plugins");
const client = new DClient();

client.plugins.use("plugin here"); // DO NOT DO THIS THIS PLUGIN IS INVALID AND ONLY FOR LEARNING SHOWOFF
client.login("Your token");
```

With Eris:

```js
const { EClient } = require("discord-bot-plugins");
const client = new EClient("YOUR TOKEN"); //how eris works :/

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

```

```
