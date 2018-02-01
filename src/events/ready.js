exports.run = (client) => {
  console.log(`Ready to help in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
  client.user.setUsername("Magnezone");
}
