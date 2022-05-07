const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {

  
      let user = message.mentions.users.first() || message.author;
                   eco.FetchBalance(user.id).then(x => {
    const embed = new Discord.RichEmbed()
            .setColor("GREEN")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
   .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
   .addField("👤» Korisnik", `<@${user.id}>`)
   .addField("💰» Trenutno", x.balance + " <:Bitcoin:971362942924783616>")
   .setThumbnail(user.displayAvatarURL)
    return message.channel.send(embed);

})
}

module.exports.help = {
  name: "balance",
  aliases: ['wallet', 'bal', 'Bal', 'Balance'],
  perm: "",
  role: "",
  group:""
}
