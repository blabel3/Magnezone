exports.run = (client, message, args) => {

  if (message.author.id != client.config.ownerID && message.member.roles.get(client.config.moderatorID) == undefined) return;
  if (message.mentions.members.first() == undefined ) {
    message.reply("No user given.").then(response => response.delete(3000));
    return;
  }

  let person = message.mentions.members.first();
  let roles = [];

  //slice to get rid of the mentions
  for (let rolename of args.slice(1)){
    const role = message.member.guild.roles.find(role => role.name.toLowerCase() === rolename.toLowerCase() );
    roles.push(role);
  }

  if(roles != null){
    person.addRoles(roles);
    message.reply("Done!").then(response => response.delete(3000));
  } else {
    message.reply("No valid roles given.");
  }
}

exports.info = {
    name: 'giveroles',
    usage: 'giveroles [user] [rolename] (rolename2) ...',
    description: 'MOD: Gives roles to a user.',
    permission: 'moderator'
};
