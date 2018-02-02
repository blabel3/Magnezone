exports.run = (config, client, message, args) => {

  if (message.author.id != config.ownerID) return;

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
