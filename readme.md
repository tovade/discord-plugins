# discord-bot-plugins

🎉 A custom client with support for community made plugins :) 🎉

```js
const { Client } = require("discord-bot-plugins");
const client = Client(
  { partials: ["MESSAGE"] },
  { token: "YOUR BOT TOKEN", prefix: "YOUR BOT PREFIX" }
);

client.plugins.use("plugin here"); // DO NOT DO THIS THIS PLUGIN IS INVALID AND ONLY FOR LEARNING SHOWOFF
```

❤ Typings by CasperTheGhost and made by darkcodes and with ❤
