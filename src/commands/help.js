const fs = require('fs');

const getHelp = function (client, command) {
    return {
        name: `${command.info.name}`,
        value: `Usage: \`${client.config.prefix}${command.info.usage}\`\n${command.info.description}`
    };
};

exports.run = (client, message, args) => {

  //Command is run to show all helps.
  if (args.length === 0) {

      let fields = [];

      fs.readdir("./src/commands/", function(err, files) {
        if (err) return console.error(err);

        files.forEach(file => {
          let command = require(`./${file}`);
          let commandName = file.split(".")[0];

          //console.log(command);
          if(message.author.id === client.config.ownerID) {

            switch (command.info.permission){
              case 'owner':
              case 'moderator':
              case 'all':
                fields.push(getHelp(client, command));
                break;
            }

          } else if (message.author.id === client.config.moderatorID) {

            switch (command.info.permission){
              case 'owner':
                break;
              case 'moderator':
              case 'all':
                fields.push(getHelp(client, command));
                break;
            }

          } else {

            switch (command.info.permission){
              case 'owner':
                break;
              case 'moderator':
                break;
              case 'all':
                fields.push(getHelp(client, command));
                break;
            }

          }
        })

        const embed = new client.discord.RichEmbed();

        for (let field of fields) {
          embed.addField(field.name, field.value);
        }

        embed.setColor("#7289da");
        embed.setTitle("Commands");
        embed.setFooter(`Magnezone v${client.config.version} made with love by Blabel`, "https://i.imgur.com/ZYi3t0N.png");

        message.author.send({embed});

      });

  }
  //Command is run with a specific command to show
  else {

    let command = require(`./${args[0]}`);

    if(command.info.permission === 'all'){
      const help = getHelp(client, command);

      const embed = new client.discord.RichEmbed();
      embed.setTitle(help.name);
      embed.setDescription(help.value);
      embed.setColor("#7289da");

      message.channel.send({embed});
    } else if (command.info.permission === 'moderator'){
      if (message.author.id === client.config.moderatorID || message.author.id === client.config.ownerID){
        const help = getHelp(client, command);

        const embed = new client.discord.RichEmbed();
        embed.setTitle(help.name);
        embed.setDescription(help.value);
        embed.setColor("#7289da");

        message.channel.send({embed});
      } else {
        message.reply("You do not have the permission to use this command.");
      }
    } else if (command.info.permission === 'owner'){
      if(message.author.id === client.config.ownerID){
        const help = getHelp(client, command);

        const embed = new client.discord.RichEmbed();
        embed.setTitle(help.name);
        embed.setDescription(help.value);
        embed.setColor("#7289da");

        message.channel.send({embed});
      } else {
        message.reply("You do not have the permission to use this command.");
      }
    }

  }

}

exports.info = {
    name: 'help',
    usage: 'help (command)',
    description: "Explains the functionality of this bot or a specific command.",
    permission: 'all'
};
