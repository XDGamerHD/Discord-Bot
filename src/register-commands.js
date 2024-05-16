require('dotenv').config();
const {REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'hey',
        description: 'Antwortet mit hey!',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.BOT_TOKEN);

(async () => {
  try {
    console.log('Nehme Slash Command auf...');
    
    await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
    { body: commands }
    )
  
console.log('Slash Commands wurden erfolgreich aufgenommen!')
} catch (error) {
    console.log(`Es ist ein Fehler aufgetreten: ${error}`);
  }
})()