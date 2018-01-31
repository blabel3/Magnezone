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

  //Get command and arguments.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.reply('pong');
  }

  if (command === 'foo') {
    message.reply("I'll give you the bar ;)");
  }

  if(command === 'husbandowar') {
    let husbandosupreme = Math.floor( Math.random() * args.length);
    message.reply(args[husbandosupreme] + " is objectively the best husbando.");
  }

});

client.login( config.token );
