const fs = require('fs')
const discord = require('discord.js')
exports.run = async (bot, oldMessage, newMessage) => {
  let logChannel = oldMessage.guild.channels.find(c => c.name === 'chat-logs')
    if(oldMessage.author.bot) {}
  else {
  logChannel.send(`Message edited: 
Old Message: [${oldMessage.channel.name}] ${oldMessage.author.username}: ${oldMessage.content.replace('<@', '<')}
New Message: [${newMessage.channel.name}] ${newMessage.author.username}: ${newMessage.content.replace('<@', '<')}`)
  console.log(`Message edited: 
Old Message: [${oldMessage.channel.name}] ${oldMessage.author.username}: ${oldMessage.content}
New Message: [${newMessage.channel.name}] ${newMessage.author.username}: ${newMessage.content}`);
  }
}