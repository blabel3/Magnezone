const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");

const config = require('./config.json');
const prefix = config.prefix;

// Reads from the /events/ folder to match the event file with the event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./src/events/${file}`);
    let eventName = file.split(".")[0];
    // strat to call events with their arguments, AFTER the client variable.
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('message', message => {

  //Check if mmessage starts with !, if it doesn't just exit. Speed.
  if ( !message.content.startsWith(prefix) || message.author.bot ) return;


  //Get command and arguments.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //My rudimentary guard against commands that dig through the file system.
  if( command.indexOf(".") != -1 ) return;

  //Gets what to do for each command from the commands folder.
  try {
    let commandFile = require(`./src/commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }

});

client.login( config.token );
