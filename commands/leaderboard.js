const Discord = require("discord.js");
const eco = require("discord-economy");
const dl = require('discord-leveling')

module.exports.run = async (bot, message, args) => {

  if (message.mentions.users.first()) {
 
      var output = await dl.Leaderboard({
        search: message.mentions.users.first().id
      })
      message.channel.send(`${message.mentions.users.first().tag} je ${output.placement} na levelleaderbordu`);
 
      //Searches for the top 3 and outputs it to the user.
    } else {
 
      dl.Leaderboard({
        limit: 10
      }).then(async users => { //make sure it is async
 
        var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
        var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
        var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
        var fourthplace = await bot.fetchUser(users[3].userid)
        var fifthplace = await bot.fetchUser(users[4].userid)
        var sixthplace = await bot.fetchUser(users[5].userid)
        var seventhplace = await bot.fetchUser(users[6].userid)
        var eigthplace = await bot.fetchUser(users[7].userid)
        var ninethplace = await bot.fetchUser(users[8].userid)
        var tenthplace = await bot.fetchUser(users[9].userid)
 
        message.channel.send(`**Level LeaderBoard**:
 
1 - ${firstplace.tag || 'None'} | **Level** ${users[0].level || 'None'} | ${users[0].xp || 'None'} **Xp**
2 - ${secondplace.tag || 'None'} | **Level** ${users[1].level || 'None'} | ${users[1].xp || 'None'} **Xp**
3 - ${thirdplace.tag || 'None'} | **Level** ${users[2].level || 'None'} | ${users[2].xp || 'None'} **Xp**
4 - ${fourthplace.tag || 'None'} | **Level** ${users[3].level || 'None'} | ${users[3].xp || 'None'} **Xp**
5 - ${fifthplace.tag || 'None'} | **Level** ${users[4].level || 'None'} | ${users[4].xp || 'None'} **Xp**
6 - ${sixthplace.tag || 'None'} | **Level** ${users[5].level || 'None'} | ${users[5].xp || 'None'} **Xp**
7 - ${seventhplace.tag || 'None'} | **Level** ${users[6].level || 'None'} | ${users[6].xp || 'None'} **Xp**
8 - ${eigthplace.tag || 'None'} | **Level** ${users[7].level || 'None'} | ${users[7].xp || 'None'} **Xp**
9 - ${ninethplace.tag || 'None'} | **Level** ${users[8].level || 'None'} | ${users[8].xp || 'None'} **Xp**
10 - ${tenthplace.tag || 'None'} | **Level** ${users[9].level || 'None'} | ${users[9].xp || 'None'} **Xp**`) 

      })
 
    }

}

module.exports.help = {
  name: "levelleaderboard",
  aliases: ['lvlleaderboard', 'lvllb', 'levellb', 'xpleaderboard', 'xplb', 'xplb'],
  perm: "",
  role: "",
  group:"Leveling"
}
