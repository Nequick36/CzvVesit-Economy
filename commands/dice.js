const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  
    var roll = args[0]
    var amount = args[1]
 
    
     let embed = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate odabrati neki broj od 1 do 6")
 .addField("✅» Korišćenje", ".dice 5 100")
     
    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.channel.send(embed)
  
  
       let embed2 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate navesti sumu novca u koju se želite kladiti")
 .addField("✅» Korišćenje", ".dice 5 100")
    if (!amount) return message.channel.send(embed2)
 
    var output = await eco.FetchBalance(message.author.id)
    let embed3 = new Discord.RichEmbed()
.setColor("RED")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
     .addField(":x:» Pogreška", "Vi Nemate toliko novca")
 .addField("✅» Korišćenje", ".dice 5 100")
    if (output.balance < amount) return message.channel.send(embed3)
 
    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
  
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
  name: "dice",
  aliases: ["Dice", "Roll", "roll", "betroll", "Betroll"],
  description: "Roll.",
  perm: "",
  role: "",
  group:"Economy"
}