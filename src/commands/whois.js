exports.run = (client, message, args) => {
  let person = message.mentions.members.first();

  const embed = new client.discord.RichEmbed();

  embed.setThumbnail(person.user.displayAvatarURL);

  embed.setColor(person.displayColor);
  embed.setTitle(person.user.username);

  embed.addField("Account created:", person.user.createdAt);
  embed.addField("Joined server:", person.joinedAt);

  message.channel.send({embed});
}

exports.info = {
    name: 'whois',
    usage: 'whois [user]',
    description: 'Informs about the user in question.',
    permission: 'all'
};
