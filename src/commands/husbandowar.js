exports.run = (config, client, message, args) => {
  let husbandosupreme = Math.floor( Math.random() * args.length);
  message.reply(args[husbandosupreme] + " is objectively the best husbando.");
}
