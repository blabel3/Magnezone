exports.run = (config, client, message, args) => {
  let husbandosupreme = Math.floor( Math.random() * args.length);
  message.reply(args[husbandosupreme] + " is objectively the best waifu.");
}

exports.info = {
    name: 'waifuwar',
    usage: 'waifuwar [waifu1] [waifu2] (waifu3) ...',
    description: 'Determines which waifu is objectively superior.'
};
