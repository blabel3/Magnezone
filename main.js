const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');
const prefix = config.prefix;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {

  //Check if mmessage starts with !, if it doesn't just exit. Speed.
  if ( !message.content.startsWith(prefix) || message.author.bot ) return;

  if (message.content.startsWith(prefix + 'ping')) {
    message.reply('pong');
  }

  if (message.content.startsWith(prefix + 'foo')) {
    message.reply("I'll give you the bar ;)");
  }

});

client.login( config.token );
