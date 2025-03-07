const { TOKEN } = require("./config.json") // Load environment variables from .env
const { Client, GatewayIntentBits, Events } = require("discord.js");
let channel = "idkyourchannelhere"



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
	    //let the bot send and read messages
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
    ],
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', async (message) => {
    // yeah
    const possiblemsgs = ["hewwo ama :33", "haii! ;3", "hewwo amaaa hru :333"];
let r = Math.floor(Math.random() * possiblemsgs.length);
let i = possiblemsgs[r];

    
    if(message.author.id == "idk amas userid"){
    message.channel.send(i);
    
  }
});


client.login(TOKEN);

