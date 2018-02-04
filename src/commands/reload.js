exports.run = (client, message, args) => {
  if (message.author.id != client.config.ownerID) return;

  if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  // the path is relative to the *current folder*, so just ./filename.js
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  message.reply(`The command ${args[0]} has been reloaded`);
};

exports.info = {
    name: 'reload',
    usage: 'reload [command]',
    description: 'Reloads the file for the command, updating its functionality.'
    permission: 'owner'
};
