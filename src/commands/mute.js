exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;
  if (message.mentions.members.first() == undefined ) {
    message.reply("No user given.").then(response => response.delete(client.config.responseTimeout));
    return;
  }

  let person = message.mentions.members.first();
  person.addRole(message.member.guild.roles.find('name', 'Muted'));
}

exports.info = {
    name: 'mute',
    usage: 'mute [user]',
    description: 'MOD: Mutes a user by assigning them a role (allowing for text channel mutes).',
    permission: 'moderator'
};
