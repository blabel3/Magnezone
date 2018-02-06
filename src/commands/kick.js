exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;

  let person = message.mentions.members.first();
  //slice to get rid of the mentions
  let reason = args.slice(1).join(" ");
  person.kick(reason);
}

exports.info = {
    name: 'kick',
    usage: 'kick [user] (reason)',
    description: 'MOD: Kicks a user, with an optional reason for logs.',
    permission: 'moderator'
};
