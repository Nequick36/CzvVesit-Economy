const Discord = require("discord.js");
const eco = require("discord-economy");

module.exports.run = async (bot, message, args) => {
  eco.Daily(message.author.id).then(d => {
//l.updated tells you if the user already claimed his/her daily yes or no.
               if (d.updated) {

eco.AddToBalance(message.author.id,).then(x => {
                   eco.AddToBalance(500).then(d => {
let embed = new Discord.RichEmbed()
.setColor("#00FF0C")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎁» Dnevna Nagrada", "Čestitamo uzeli ste dnevnu nagradu od 500 <:Bitcoin:971362942924783616>")
  .addField("💰» Trenutno Stanje Računa", d.newbalance + " <:Bitcoin:971362942924783616>")
                   
message.channel.send(embed);
                 })})

               } else {
                 let embed2 = new Discord.RichEmbed()
.setColor("#FF0000")
  .setAuthor('CzvVesti | Ekonomija', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .addField("🎁» Dnevna Nagrada", "Već ste uzali svoju dnevnu nagradu")
  .addField("⌚» Preostalo Vremena", "Preostalo Vam je još " + d.timetowait + " do vaše dnevne nagrade!")
                 message.channel.send(embed2)
               }
           })
}

module.exports.help = {
  name: "daily",
  aliases: [],
  perm: "",
  role: "",
  group:"Economy"
}