exports.run = (client, message, args) => {
  if (message.author.id != client.config.ownerID) return;

  message.reply(`Restarting...`)
  .then(message => client.destroy())
  .then(() => client.login(client.config.token));
};

exports.info = {
    name: 'restart',
    usage: 'reload',
    description: 'OWNER: Restarts the bot, making it fresh.',
    permission: 'owner'
};
