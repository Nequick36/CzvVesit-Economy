const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  
          var user = message.mentions.users.first() || message.guild.members.get(args[0])

  let embed = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Tagovati Korisnika Kojem Želite Dodat Novac")
 .addField("✅» Korišćenje", ".addbalance @User#1991 100")
       if (!user) return message.channel.send(embed)
  
    let amount = message.content.split(" ").slice(2).join(" ");
  let embed2 = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Dodati Iznos Novca")
 .addField(":CheckMark:» Korišćenje", ".addbalance @User#1991 100")
       if (!amount) return message.channel.send(embed2)

        


eco.AddToBalance(user.id, amount).then(l =>{

                   eco.FetchBalance(user.id).then(x => {
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("#FF0000")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField("👤» Korisnik", user)
 .addField("🪙» Dodano", amount)         
 .addField("💰» Trenutno", x.balance)

                                                          
                     message.channel.send(embed3)
                 })})
}

module.exports.help = {
  name: "addbalance",
  aliases: ["addbal", "addmoney"],
  perm: "",
  role: "",
  group: "economy"
}
