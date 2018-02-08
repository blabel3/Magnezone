exports.run = (client, message) => {
  if(client.config.autopurgeChannelIDs.includes(message.channel.id)){
    message.delete(1000);
  }
}
