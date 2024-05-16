require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ], 
});

client.on('ready', (c) => {
    console.log(`${c.user.tag}ist online`);
});

client.on('messageCreate', (message) => {
if(message.author.bot) {
    return;
}

   if (message.content === 'hello') {
    message.reply('hello');
   } 
});

client.login('MTIzOTIzNDMzNjk5NDA5OTI4MA.G4PLK_.vd3pJlR1ooyeN0uHzYWwLasWnVsWulM3CGqTj8');
