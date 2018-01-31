const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

const config = require('./config.json');
const prefix = config.prefix;

// Reads from the /events/ folder to match the event file with the event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    // strat to call events with their arguments, AFTER the client variable.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {

  //Check if mmessage starts with !, if it doesn't just exit. Speed.
  if ( !message.content.startsWith(prefix) || message.author.bot ) return;


  //Get command and arguments.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //Gets what to do for each command from the commands folder.
  //Still need to make sure the user doesn't do a diff file with their command.
  try {
    let commandFile = require(`.commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

  /* Old series of if elses for each command (annoying)
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
  */

});

client.login( config.token );
