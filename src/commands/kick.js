exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID || message.author.id === client.config.moderatorID) return;

  let person = message.mentions.members.first();
  //slice to get rid of the mentions
  let reason = args.slice(1).join(" ");
  person.kick(reason);
}

exports.info = {
    name: 'kick',
    usage: 'kick [user] (reason)',
    description: 'Kicks a user, with an optional reason for logs.',
    permission: 'moderator'
};
