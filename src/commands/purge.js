exports.run = (client, message, args) => {

  let deletedMessages = 0;

  console.log("potato");

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;

  const maxMessages = 100;

  if(args.length === 0){

    message.channel.fetchMessages({ limit: maxMessages }).then(channelMessages => {
      channelMessages.forEach(msg => {
        msg.delete().catch(console.error);
        deletedMessages++;
      });
    }).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${deletedMessages} messages!`)
        .then(response => response.delete(3000));
    }).catch(console.error);

  } else if (args.length === 1){

    message.channel.fetchMessages({ limit: Math.max(1, Math.min(parseInt(args[0]), maxMessages)) }).then(channelMessages => {
      channelMessages.forEach(msg => {
        msg.delete().catch(console.error);
        deletedMessages++;
      });
    }).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${deletedMessages} messages!`)
        .then(response => response.delete(3000));
    }).catch(console.error);

  } else {

    message.channel.fetchMessages({ limit: Math.min(parseInt(args[0]), maxMessages) }).then(messages => {
      messages.forEach(msg => {
        if(message.mentions.members.get(msg.author.id) != undefined){
          msg.delete().catch(console.error);
          deletedMessages++;
        }
      });
    }).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${deletedMessages} messages!`)
        .then(response => response.delete(3000));
    }).catch(console.error);

  }
}

exports.info = {
    name: 'purge',
    usage: 'purge (number) (mentions)',
    description: 'Scans the number of messages specified and deletes them, only those from some members if mentions are specified.',
    permission: 'moderator'
}
