exports.run = (client, message, args) => {
  let husbandosupreme = Math.floor( Math.random() * args.length);
  message.reply(args[husbandosupreme] + " is objectively the best husbando.");
}

exports.info = {
    name: 'husbandowar',
    usage: 'husbandowar [husbando1] [husbando2] (husbando3) ...',
    description: 'Determines which husbando is objectively superior.'
};
