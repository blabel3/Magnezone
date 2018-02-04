exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID) return;

/*
  const embed = new client.discord.RichEmbed();

  message.channel.send("Title?");
  const collector = new client.discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
  console.log(collector)
  async() => {
    await collector.on('collect', message => {
          if (message.content == "#") {
              message.channel.send("No title.");
          } else {
              message.channel.send("Title: " + message.content);
              embed.setTitle(message.content);
              console.log("nice");
          }
      });

    message.channel.send("Color?");

    console.log("test");

    message.guild.channels.find(channels => channels.name.toLowerCase() === "welcome").send({embed});

  }

  */

  const embed = {
    "title": "LURKER",
    "color": message.guild.roles.find(role => role.name.toLowerCase() === 'lurkers').color,
    "description": "I can understand if you have other stuff to do and don't want to actually add stuff to the project.\
 Sometimes just being there and having a good time is enough, plus, you'll get to follow development. You won't get access\
 to the creation channels, but you still have announcements and general chat to follow development and talk to people. ",
    "footer": {
      "icon_url": "https://i.imgur.com/HGeBf4L.png",
      "text": "!roleme lurkers"
    },
    "thumbnail": {
      "url": "https://i.imgur.com/XAUKaO2.png"
    }
  };

  message.guild.channels.find(channels => channels.name.toLowerCase() === "welcome").send({embed});

}

exports.info = {
    name: 'embed',
    usage: 'embed',
    description: "Owner only: posts the embed that's currently written in the file for this command."
};
