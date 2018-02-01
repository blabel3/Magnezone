exports.run = (client, message, args) => {
  if( message.channel.name.toLowerCase() != 'welcome') return;
  const role = message.member.guild.roles.find(role => role.name.toLowerCase() === args[0].toLowerCase() );

  // Making sure users can't mod themselves.
  if( role.hasPermission('ADMINISTRATOR') || role.hasPermission('MANAGE_GUILD') || role.hasPermission('BAN_MEMBERS') ) return;

  switch (role.name.toLowerCase()){
    case 'artists':
    case 'writers':
    case 'coders' :
      message.member.addRole(message.member.guild.roles.find('name', 'Contributors'));
      break;
  }

  message.member.addRole(role);
}
