exports.run = (config, client, member)  => {
  const welcomeRole = member.guild.roles.find(role => role.name.toLowerCase() === 'fresh meat');
  member.addRole(welcomeRole);
}
