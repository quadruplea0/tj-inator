const { TOKEN } = require("./config.json") 
const { Client, GatewayIntentBits, Events } = require("discord.js");
let channel = "yourchannelhere"



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
 
    ],
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('presenceUpdate', (oldPresence, newPresence) => {
    // yeah
    const possiblemsgs = ["hewwo ama :33", "haii! ;3", "hewwo amaaa hru :333"];
let r = Math.floor(Math.random() * possiblemsgs.length);
let i = possiblemsgs[r];

    if (newPresence.userId !== 'youruserid') return;
 
  if (oldPresence.status === newPresence.status) return;
 
  if (newPresence.status !== 'online') return;

    
    try {
    client.channels.cache.get(channel).send(i);
  } catch (error) {
    console.log(error);
  }    
});


client.login(TOKEN);

