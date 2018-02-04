exports.run = (client, message, args) => {
  message.reply('pong');
}

exports.info = {
    name: 'ping',
    usage: 'ping',
    description: 'Responds with pong, used for testing.'
    permission: 'all'
};
