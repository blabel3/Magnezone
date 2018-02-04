const fs = require('fs');

const getHelp = function (client, command) {
    return {
        name: `\`${command.info.name}\``,
        value: `Usage: \`${client.config.prefix}${command.info.usage}\`\nDescription: ${command.info.description}`
    };
};

exports.run = (client, message, args) => {

  if (args.length === 0) {

      var fields = [];

      fs.readdir("./src/commands/", function(err, files) {
        if (err) return console.error(err);

        files.forEach(file => {
          let command = require(`./src/commands/${file}`);
          let commandName = file.split(".")[0];


        })

        console.log(items);

      });

  } else {



  }

}
