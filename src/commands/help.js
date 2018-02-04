const fs = require('fs');

const getHelp = function (client, command) {
    return {
        name: `${command.info.name}`,
        value: `Usage: \`${client.config.prefix}${command.info.usage}\`\n${command.info.description}`
    };
};

exports.run = (client, message, args) => {

  if (args.length === 0) {

      var fields = [];

      fs.readdir("./src/commands/", function(err, files) {
        if (err) return console.error(err);

        console.log(files);

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
              default:
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
              default:
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
              default:
                break;
            }

          }
        })

        const embed = new client.discord.RichEmbed();

        for (let field of fields) {
          embed.addField(field.name, field.value);
        }

        embed.color = message.guild.roles.find(role => role.name.toLowerCase() === 'bots').color;
        embed.title = "Commands:";

        message.author.send({embed});

      });

  } else {



  }

}

exports.info = {
    name: 'help',
    usage: 'help (command)',
    description: "Explains the functionality of this bot or a specific command.",
    permission: 'all'
};
