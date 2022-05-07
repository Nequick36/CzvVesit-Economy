const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  
  
    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble
 
 let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate odabrati 'heads' ili 'tails' ")
 .addField("✅» Korišćenje", ".casino heads 100")
 if (!flip || !['tails', 'heads'].includes(flip)) return message.channel.send(embed)
  
  let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
   .addField(":x:» Pogreška", "Morate staviti iznos novca u koji se želite kladiti")
 .addField("✅» Korišćenje", ".casino heads 100")
    if (!amount) return message.channel.send(embed2)
  
  
    var output = await eco.FetchBalance(message.author.id)
    let embed3 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
     .addField(":x:» Pogreška", "Vi Nemate toliko novca")
 .addField("✅» Korišćenje", ".casino heads 100")
    if (output.balance < amount) return message.channel.send(embed3)
  
    
    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
if(gamble.output === "won") {

  let embed4 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField(`🏆» Čestitamo Vi ste`, "Pobijedili")
  .addField(`💰» Trenutno Stanje`, gamble.newbalance + " <:Bitcoin:971362942924783616>")
  
    message.channel.send(embed4)
} else {
    
  let embed5 = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField(`🏆» Na Žalost Vi Ste`, "Izgubili")
  .addField(`💰» Trenutno Stanje`, gamble.newbalance + " <:Bitcoin:971362942924783616>")
  
    message.channel.send(embed5)
}
  
  
  
  }
module.exports.help = {
  name: "casino",
  aliases: ["Casino", "Kazino", "kazino"],
  perm: "",
  role: "",
  group: "Simple"
};
