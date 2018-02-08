exports.run = (client, message, args) => {
  let person = message.mentions.members.first();

  const embed = new client.discord.RichEmbed();

  embed.setThumbnail(person.user.displayAvatarURL);

  embed.setColor(person.displayColor);
  embed.setTitle(person.user.username);
  if(person.nickname != null){
    embed.setDescription(person.nickname);
  }

  embed.addField("Account created:", formatDate(person.user.createdAt));
  embed.addField("Joined server:", formatDate(person.joinedAt));

  if(person.roles.first() != null){
    embed.addField("Roles:", person.roles.array());
  }

  message.channel.send({embed});
}

function formatDate(date) {
  let output = "";

  output = output + date.getUTCFullYear();
  output = output + "-" + (date.getUTCMonth() + 1);
  output = output + "-" + date.getUTCDate();
  output = output + ", " + date.getUTCHours();
  output = output + ":" + date.getUTCMinutes();

  return output;
}

exports.info = {
    name: 'whois',
    usage: 'whois [user]',
    description: 'Informs about the user in question.',
    permission: 'all'
};
