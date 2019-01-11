const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let role = message.guild.roles.find(r => r.name === 'Muted') 
  let user = message.mentions.members.first()
  if(!user) return message.reply("you have not specified a user")
  
 if(!user.roles.has(role.id)) return message.reply("That user is not muted!")
 if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("🛑 **ACCESS DENIED! THIS IS A MOD/ADMIN ONLY COMMAND. 🛑**")
  
  user.removeRole(role.id) 
   message.reply(`${user} has been unmuted!`)
}

module.exports.help = {
  name:"unmute",
  description:"unmutes a user"
}
// work in progress um ok