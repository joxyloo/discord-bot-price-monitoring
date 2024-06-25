const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = 'your_token';
const CHANEL_ID = 'your_chanel_id';

const discordBot = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

discordBot.login(TOKEN);

discordBot.sendMessage = async (message) => {
  try {
    const channel = await discordBot.channels.fetch(CHANEL_ID);
    if (channel) {
      await channel.send(message);
      console.log('Message sent:', message);
    } else {
      console.error('Channel not found');
    }
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

module.exports = discordBot;
