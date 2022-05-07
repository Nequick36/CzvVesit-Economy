const Discord = require("discord.js")
const eco = require("discord-economy")
module.exports.run = async (bot, message, args) => {
  //message.channel.send("This command is still a work in progress!")
  var user = message.mentions.users.first()
    var amount = args[1]
      
    let embed3 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Tagovati Osobu Kojoj Želite Poslati Novac")
 .addField("✅» Korišćenje", ".pay @User#1991 100")
  
    if (!user) return message.channel.send(embed3)
    
        let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Dodati Iznos Novca Za Transfer")
 .addField("✅» Korišćenje", ".pay @User#1991 100")
        
    if(isNaN(amount)) return message.channel.send(embed)
  
        let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Ne Možete Sebi Poslati Novac")
 .addField("✅» Korišćenje", ".pay @User#1991 100")
        
 if(message.author.id === user.id) return message.channel.send(embed2)
  
    let embed4 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Nemate Toliko Novca")
 .addField(":CheckMark:» Korišćenje", ".pay @User#1991 100")
  
    if (!amount) return message.channel.send(embed4)
 
    var output = await eco.FetchBalance(message.author.id)
        let embed5 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Nemate Toliko Novca")
 .addField(":CheckMark:» Korišćenje", ".pay @User#1991 100")
    if (output.balance < amount) return message.channel.send(embed5)
 
          let embed6 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Nemate Toliko Novca")
 .addField(":CheckMark:» Korišćenje", ".pay @User#1991 100")
          
    var transfer = await eco.Transfer(message.author.id, user.id, amount)
    let embed7 = new Discord.RichEmbed()
          .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField("✅» Uspješno", "Uspješno ste poslali novac")
 .addField(`🪙» Trenutno Stanje: ${message.author.tag}`, `${transfer.FromUser}` + " <:Bitcoin:971362942924783616>")
 .addField(`🪙» Trenutno Stanje: ${user.tag}`, `${transfer.ToUser}` + " <:Bitcoin:971362942924783616>")
    message.channel.send(embed7)
}

module.exports.help = {
  name: "transfer",
  aliases: ["pay", "Pay", "Transfer"],
  perm: "",
  role: "",
  group:"SIMPLE"
}