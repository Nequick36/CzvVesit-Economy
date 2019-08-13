const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args) => {
    let warns = JSON.parse(fs.readFileSync('commands/warns.json', 'utf8'));
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("⛔**ACCESS DENIED! THIS IS A STAFF-ONLY COMMAND.⛔**");
        return;
    }
    var user = message.mentions.users.first() || message.guild.members.get(args[0])
    if (!user) return message.reply('cannot find user!')
    if(!warns[user.id]) warns[user.id] = {}
    if(!warns[user.id].warns) warns[user.id].warns = 0
   if(warns[user.id].reasons) warns[user.id].reason
   warns[user.id].warns = 0
   warns[user.id].reasons = ''
   message.channel.send({embed:{description:`${user.username} Su resetovani warnovi sad ih ima 0.`, color:0xff0000}})
   fs.writeFile('commands/warns.json', JSON.stringify(warns, null, 4), (err) => {
if(err) console.error(err)
})
}
module.exports.help = {
  name: "resetwarns",
  aliases: [],
  description:"Resets a user's warnings.",
  perm: "",
  role: "*",
  group:"Admin"
}
