exports.run = (client, message, args) => {
  if( message.channel.name.toLowerCase() != 'welcome') return;
  const role = message.member.guild.roles.find(role => role.name.toLowerCase() === args[0].toLowerCase() );
  message.member.addRole(role);
}
