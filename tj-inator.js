const { TOKEN } = require("./config.json") // Load environment variables from .env
const { Client, GatewayIntentBits, Events } = require("discord.js");
let channel = "1297112743274479619"



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent// Enables bot to work in servers
 // Enables bot to read message content
    ],
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', async (message) => {
    // Ignore messages from bots to avoid loops
    const possiblemsgs = ["hewwo ama :33", "haii! ;3", "hewwo amaaa hru :333"];
let r = Math.floor(Math.random() * possiblemsgs.length);
let i = possiblemsgs[r];

    
    if(message.author.id == "1143416222772367370"){
    message.channel.send(i);
    
  }
});


client.login(TOKEN);

