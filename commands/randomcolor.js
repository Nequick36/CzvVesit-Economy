 const discord = require('discord.js')
exports.run = async (bot,message,args) => {
    let Embed = new discord.RichEmbed()
     .setColor('RANDOM')

    message.channel.send(Embed)
}
module.exports.help = {
name: "randomcolor",
aliases: []
}