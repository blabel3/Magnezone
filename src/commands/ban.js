exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;
  if (message.mentions.members.first() == undefined ) {
    message.reply("No user given.").then(response => response.delete(client.config.responseTimeout));
    return;
  }

  let person = message.mentions.members.first();
  //slice to get rid of the mentions
  let reason = args.slice(1).join(" ");
  person.ban(reason);
}

exports.info = {
    name: 'ban',
    usage: 'ban [user] (reason)',
    description: 'Bans a user, with an optional reason for logs.',
    permission: 'moderator'
};
