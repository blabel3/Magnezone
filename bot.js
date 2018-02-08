const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const prompt = require("prompt-sync")();

client.discord = Discord;

//Creates config file if run without one
if(!fs.existsSync('./config.json')){

  let version = "0.1";
  let token = prompt('Bot token: ');
  let prefix = prompt('Command prefix: ');
  let ownerID = prompt('Owner ID: ');
  let moderatorID = prompt('Moderator Role ID: ');
  let welcomeID = prompt('Welcome Channel ID: ');

  let readyText = prompt('What should I say on ready? ', 'BZZZZT, READY!');

  const configFile = {
    version: version,
    token: token,
    prefix: prefix,
    ownerID: ownerID,
    moderatorID: moderatorID,
    welcomeID: welcomeID,
    readyText: readyText
  }

  console.log(configFile);

  fs.writeFileSync("./config.json", JSON.stringify(configFile), (err) => console.error);

}

const config = require('./config.json');
const prefix = config.prefix;

client.config = config;


// Reads from the /events/ folder to match the event file with the event.
fs.readdir("./src/events/", (err, files) => {
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

  if ( (message.channel.type === 'dm' || message.channel.type === 'group') && message.author.id != client.config.ownerID ) return;


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
