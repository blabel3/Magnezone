exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;

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
