const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
      let developers = bot.devs
        let embed9 = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Pomoć', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed9)
  
            var user = message.mentions.users.first() || message.guild.members.get(args[0])
  
        
          const embed2 = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
   .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Tagovati Korisnika Kojem Želite Ukloniti Novac")
 .addField("✅» Korišćenje", ".removebal @User#1991 100")
         if (!user) return message.channel.send(embed2)
            
  let amount = message.content.split(" ").slice(2).join(" ");
  const embed = new Discord.RichEmbed()
            .setColor("RED")
   .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
   .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField(":x:» Pogreška", "Morate Staviti Koliko Želite Ukloniti Novaca Korisniku")
 .addField("✅» Korišćenje", ".removebal @User#1991 100")
  
       if (!amount) return message.channel.send(embed);


                   eco.SubstractFromBalance(user.id, amount).then(l =>
                   eco.FetchBalance(user.id).then(x => {
                     
                          let embed3 = new Discord.RichEmbed()

            .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
 .addField("👤» Korisnik", user)
 .addField("🪙» Oduzeto", amount + " <:Bitcoin:971362942924783616>")         
 .addField("💰» Trenutno", x.balance + " <:Bitcoin:971362942924783616>")

                                                          
                     message.channel.send(embed3)
                 }))
}

module.exports.help = {
  name: "removebalance",
  aliases: ["removebal"],
  perm: "",
  role: "*",
  group: "economy"
}
