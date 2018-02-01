exports.run = (client, message, args) => {

  const embed = {
    "title": "CONTRIBUTOR",
    "color": message.guild.roles.find(role => role.name.toLowerCase() === 'contributors').color,
    "description": "Become a contributor to the project! From drawing to writing to coding and everything in between, there's a lot\
 that needs to get done around here. You'll get access to the creation channels where members talk about the ideas they're planning\
 and everything they want to add to make this the best project ever. Be a part of something amazing!",
    "footer": {
      "icon_url": "https://i.imgur.com/HGeBf4L.png",
      "text": "I'll add this to you when you're an artist, a writer, or a coder!"
    },
    "thumbnail": {
      "url": "https://i.imgur.com/uoYlMPT.png"
    }
  };

  message.guild.channels.find(channels => channels.name.toLowerCase() === "welcome").send({embed});

}
