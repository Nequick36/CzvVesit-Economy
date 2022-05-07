const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.channel.send(`
**__SHOP__**
==============
Member+ - $125
Coal - $250
Iron - $750
Gold - $1000 
Redstone - $1250
Lapis - $1500
Diamond - $3000
Emerald - $5500
Vip - $8000
Vip+ - $8750
Premium - $10000
Ultra - $12500
Master - $15000
Supeme - $17500
Titan - $200000        
`)
  
}
module.exports.help = {
name: "shop",
aliases: ["Shop"]
}