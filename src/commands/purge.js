exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;

  const maxMessages = 100;
  let deletedMessages = 0;

  if(args.length === 0){

    message.channel.fetchMessages({ limit: maxMessages }).then(channelMessages => {
      channelMessages.forEach(msg => {
        msg.delete();
        deletedMessages++;
      });
    }).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${deletedMessages} messages!`)
        .then(response => response.delete(client.config.responseTimeout));
    });

  } else if (args.length === 1){

    message.channel.fetchMessages({ limit: Math.max(1, Math.min(parseInt(args[0]), maxMessages)) }).then(channelMessages => {
      channelMessages.forEach(msg => {
        msg.delete();
        deletedMessages++;
      });
    }).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${deletedMessages} messages!`)
        .then(response => response.delete(client.config.responseTimeout));
    });

  } else {

    message.channel.fetchMessages({ limit: Math.min(parseInt(args[0]), maxMessages) }).then(messages => {
      messages.forEach(msg => {
        if(message.mentions.members.get(msg.author.id) != undefined){
          msg.delete();
          deletedMessages++;
        }
      });
    }).then(() => {
      message.channel.send(`:white_check_mark: Deleted ${deletedMessages} messages!`)
        .then(response => response.delete(client.config.responseTimeout));
    });

  }
}

exports.info = {
    name: 'purge',
    usage: 'purge (number) (mentions)',
    description: 'MOD: Scans the number of messages specified and deletes them, only those from some members if mentions are specified.',
    permission: 'moderator'
}
