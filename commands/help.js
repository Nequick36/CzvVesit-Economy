const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {


    if(args[0] === "kazino"){
        let embed1 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎰» Kazino", "Sve komande za Kazino")
  .addField(".casino", "Head-Tails/Glava Pismo prije bacanja novčića birate glavu ili pismu, ako novčić padne na stranu koju sve vi odabrali dobit ćete Novac")
  .addField(".dice", "Dice/Kocka jednostavnim bacanjem kocke dobijate novac ako kocka padne na broj 5 ili 6")
  .addField(".slot", "Fruit Machine/Mašina za voće je mašina za kockanje koja kreira igru na sreću za svoje klijente")
       message.channel.send(embed1)
}
  
    if(args[0] === "zarada"){
          let embed2 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💰» Zarada", "Sve komande za Zaradu")
  .addField(".work", "Idete na posao i dobijete novac")
  .addField(".hobby", "Bavite se svojim hobijem i dobijete novac")
  .addField(".daily", "Dobijate 500 <:Bitcoin:971362942924783616> Svakih 24h")
       message.channel.send(embed2)
}

 
    if(args[0] === "shop"){
          let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🏪» Shop", "Sve komande za Shop")
  .addField(".shop", "Prikazuje sve Rolove/Rankove koje možete kupiti")
  .addField(".buy", "Kupujete stvari iz Shopa '.shop'")
       message.channel.send(embed3) 
}
  
  
    if(args[0] === "balance"){
          let embed4 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("💳» Balance", "Sve komande za Balance")
  .addField(".balance", "Sa ovom komandom možete da vidite koliko imate novca na računu")
  .addField(".topbalance", "Pokazuje Top 10 članova sa najviše novca")
  .addField(".transfer", "Ovom komandom možete nekome dati novac")
        message.channel.send(embed4)
}
  
  if(args[0] === "staff"){
          let embed5 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("👮‍♂️» Staff", "Sve komande za Staff")
  .addField(".addbalance", 'Dodaje članu određenu sumu novca')
  .addField(".removebalance", "Uklanja članu određenu sumu novca")
  .addField(".eval", "Komanda Za Vlasnike")
        message.channel.send(embed5) 
  }
  
  if(!args[0]) {
           let embed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎰» Kazino", "Komanda: .help kazino")
  .addField("💰» Zarada", "Komanda: .help zarada")
  .addField("🏪» Shop", "Komanda: .help shop")
  .addField("💳» Balance", "Komanda: .help balance")
  .addField("👮‍♂️» Staff", "Komanda: .help staff")
       message.channel.send(embed)
  }
}
module.exports.help = {
name: "help",
aliases: ["pomoc", "Help", "Pomoc", "pomoć", "Pomoć", "komande", "Komande", "komanda", "Komanda"]
}