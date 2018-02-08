exports.run = (client, message, args) => {

  if(message.guild.available){
    const embed = new client.discord.RichEmbed();

    embed.setTitle(message.guild.name);
    embed.setThumbnail(message.guild.iconURL);
    embed.setColor('RANDOM');

    embed.addField("Server Created:", formatDate(message.guild.createdAt));
    embed.addField("Members:", message.guild.memberCount);
    embed.addField("Owner:", message.guild.owner.user.username);
    embed.addField("Region:", message.guild.region);

    let emojis = [];

    for (let emoji of message.guild.emojis.array()){
      emojis.push("<:" + emoji.name + ":" + emoji.id + ">");
    }

    embed.addField("Emojis:", emojis.join(" "));


    message.channel.send({embed});
  } else {
    console.log("Server's down.");
  }
}

function formatDate(date) {
  let output = "";

  output = output + date.getUTCFullYear();
  output = output + "-" + (date.getUTCMonth() + 1);
  output = output + "-" + date.getUTCDate();
  output = output + ", " + date.getUTCHours();
  output = output + ":" + date.getUTCMinutes();

  return output;
}

exports.info = {
    name: 'serverinfo',
    usage: 'serverinfo',
    description: "Informs about the server it's called in.",
    permission: 'all'
};
