const Discord = require("discord.js");
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.first()) {
 
      var output = await eco.Leaderboard({
        search: message.mentions.users.first().id
      })
 
    } else {
 
      eco.Leaderboard({
        limit: 10
      }).then(async users => { //make sure it is async
 
        var firstplace = await bot.fetchUser(users[0].userid) 
        var secondplace = await bot.fetchUser(users[1].userid)
        var thirdplace = await bot.fetchUser(users[2].userid) 
        var fourthplace = await bot.fetchUser(users[3].userid)
        var fifthplace = await bot.fetchUser(users[4].userid)
        var sixthplace = await bot.fetchUser(users[5].userid)
        var seventhplace = await bot.fetchUser(users[6].userid)
        var eigthplace = await bot.fetchUser(users[7].userid)
        var ninethplace = await bot.fetchUser(users[8].userid)
        var tenthplace = await bot.fetchUser(users[9].userid)

        
let embed3 = new Discord.RichEmbed()
  .setColor("GREEN")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField(`1️⃣» ${firstplace.tag || 'None'} **|** ${users[0].balance || "0"} <:Bitcoin:971362942924783616>`, 
            `2️⃣» ${secondplace.tag || 'None'} **|** ${users[1].balance || "0"} <:Bitcoin:971362942924783616>`)
  .addField(`3️⃣» ${thirdplace.tag || 'None'} **|** ${users[2].balance || "0"} <:Bitcoin:971362942924783616>`, 
            `4️⃣» ${fourthplace.tag || 'None'} **|** ${users[3].balance || "0"} <:Bitcoin:971362942924783616>`)
  .addField(`5️⃣» ${fifthplace.tag || 'None'} **|** ${users[4].balance || "0"} <:Bitcoin:971362942924783616>`, 
            `6️⃣» ${sixthplace.tag || 'None'} **|** ${users[5].balance || "0"} <:Bitcoin:971362942924783616>`)
  .addField(`7️⃣» ${seventhplace.tag || 'None'} **|** ${users[6].balance || "0"} <:Bitcoin:971362942924783616>`,
            `8️⃣» ${eigthplace.tag || 'None'} **|** ${users[7].balance || "0"} <:Bitcoin:971362942924783616>`)
  .addField(`9️⃣» ${ninethplace.tag || 'None'} **|** ${users[8].balance || "0"} <:Bitcoin:971362942924783616>`, 
            `🔟» ${tenthplace.tag || 'None'} **|** ${users[9].balance || "0"} <:Bitcoin:971362942924783616>`)
        message.channel.send(embed3)
                                                          
      })
 
    }

}

module.exports.help = {
  name: "lb",
  aliases: ['leaderboard', 'topbal', 'baltop', "top"],
  perm: "",
  role: "",
  group:"Economy"
}
