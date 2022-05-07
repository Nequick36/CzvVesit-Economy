const Discord = require("discord.js")
const eco = require("discord-economy")

module.exports.run = async (bot, message, args) => {
  
  let item = message.content.split(" ").slice(1).join(" ")
if  (!item) return message.reply("You have not specified an item!");
eco.FetchBalance(message.author.id).then(User => {
  if(item === 'coal' || item === 'Coal') {
    let role = message.guild.roles.find(role => role.name === 'Coal')
    if(message.member.roles.has(role.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 250) return message.channel.send(`Sorry but you don't have $250.`)
    eco.SubstractFromBalance(message.author.id, 250).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Coal Rank`)
      message.member.addRole(role.id)
    })
  }
 else if(item === 'Iron' || item === 'iron') {
    let role = message.guild.roles.find(role => role.name === 'Iron')
    let currentRole = message.guild.roles.find(role => role.name === 'Iron')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 750) return message.channel.send(`Sorry but you don't have $750.`)
    eco.SubstractFromBalance(message.author.id, 750).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Iron Rank`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'Vodka' || item === 'vodka') {
    if(User.balance < 5) return message.channel.send(`Sorry but you don't have $5.`)
    eco.SubstractFromBalance(message.author.id, 5).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Vodku`)
    })
  }
     else if(item === 'Kafa' || item === 'Kafa') {
    if(User.balance < 2) return message.channel.send(`Sorry but you don't have $2.`)
    eco.SubstractFromBalance(message.author.id, 2).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Kafu`)
    })
  }
     else if(item === 'Piva' || item === 'piva') {
    if(User.balance < 3) return message.channel.send(`Sorry but you don't have $3.`)
    eco.SubstractFromBalance(message.author.id, 3).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Pivu`)
    })
  }
 else if(item === 'gold' || item === 'Gold') {
    let role = message.guild.roles.find(role => role.name === 'Gold')
    let currentRole = message.guild.roles.find(role => role.name === 'Gold')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 1000) return message.channel.send(`Sorry but you don't have $1000.`)
    eco.SubstractFromBalance(message.author.id, 1000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Gold Rank`)
      message.member.addRole(role.id)
    })
  }

   else if(item === 'Redstone' || item === 'redstone') {
    let role = message.guild.roles.find(role => role.name === 'Redstone')
    let currentRole = message.guild.roles.find(role => role.name === 'Redstone')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 1250) return message.channel.send(`Sorry but you don't have $1250.`)
    eco.SubstractFromBalance(message.author.id, 1250).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Redstone Rank`)
      message.member.addRole(role.id)
    })
}
   else if(item === 'lapis' || item === 'Lapis') {
    let role = message.guild.roles.find(role => role.name === 'Lapis')
    let currentRole = message.guild.roles.find(role => role.name === 'Lapis')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 1500) return message.channel.send(`Sorry but you don't have $1500.`)
    eco.SubstractFromBalance(message.author.id, 1500).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Lapis Rank`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'Diamond' || item === 'diamond') {
    let role = message.guild.roles.find(role => role.name === 'Diamond')
    let currentRole = message.guild.roles.find(role => role.name === 'Diamond')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 3000) return message.channel.send(`Sorry but you don't have $3000.`)
    eco.SubstractFromBalance(message.author.id, 3000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Diamond Rank`)
      message.member.addRole(role.id)
    })
  }
     else if(item === 'vip' || item === 'Vip') {
    let role = message.guild.roles.find(role => role.name === 'VIP')
    let currentRole = message.guild.roles.find(role => role.name === 'VIP')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 8000) return message.channel.send(`Sorry but you don't have $8000.`)
    eco.SubstractFromBalance(message.author.id, 8000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Vip Rank`)
      message.member.addRole(role.id)
    })
  }
     else if(item === 'Vip+' || item === 'vip+') {
    let role = message.guild.roles.find(role => role.name === 'VIP+')
    let currentRole = message.guild.roles.find(role => role.name === 'VIP+')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 8750) return message.channel.send(`Sorry but you don't have $8750.`)
    eco.SubstractFromBalance(message.author.id, 8750).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Vip+ Rank`)
      message.member.addRole(role.id)
    })
  }
     else if(item === 'premium' || item === 'Premium') {
    let role = message.guild.roles.find(role => role.name === 'PREMIUM')
    let currentRole = message.guild.roles.find(role => role.name === 'PREMIUM')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 10000) return message.channel.send(`Sorry but you don't have $10000.`)
    eco.SubstractFromBalance(message.author.id, 10000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Premium Rank`)
      message.member.addRole(role.id)
    })
  }
         else if(item === 'Ultra' || item === 'ultra') {
    let role = message.guild.roles.find(role => role.name === 'Ultra')
    let currentRole = message.guild.roles.find(role => role.name === 'Ultra')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 12500) return message.channel.send(`Sorry but you don't have $12500.`)
    eco.SubstractFromBalance(message.author.id, 12500).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Ultra Rank`)
      message.member.addRole(role.id)
    })
  }
         else if(item === 'Master' || item === 'Master') {
    let role = message.guild.roles.find(role => role.name === 'Master')
    let currentRole = message.guild.roles.find(role => role.name === 'Master')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 15000) return message.channel.send(`Sorry but you don't have $15000.`)
    eco.SubstractFromBalance(message.author.id, 15000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Master Rank`)
      message.member.addRole(role.id)
    })
  }
       else if(item === 'Supreme' || item === 'Supreme') {
    let role = message.guild.roles.find(role => role.name === 'Supreme')
    let currentRole = message.guild.roles.find(role => role.name === 'Supreme')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 17500) return message.channel.send(`Sorry but you don't have $17500.`)
    eco.SubstractFromBalance(message.author.id, 10000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Supreme Rank`)
      message.member.addRole(role.id)
    })
  }
         else if(item === 'Member+' || item === 'Member+') {
    let role = message.guild.roles.find(role => role.name === 'Member+')
    let currentRole = message.guild.roles.find(role => role.name === 'Member+')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 125) return message.channel.send(`Sorry but you don't have $125.`)
    eco.SubstractFromBalance(message.author.id, 125).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Member+ Rank`)
      message.member.addRole(role.id)
    })
  }
       else if(item === 'Titan' || item === 'titan') {
    let role = message.guild.roles.find(role => role.name === 'Titan')
    let currentRole = message.guild.roles.find(role => role.name === 'Titan')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 20000) return message.channel.send(`Sorry but you don't have $20000.`)
    eco.SubstractFromBalance(message.author.id, 20000).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Titan Rank`)
      message.member.addRole(role.id)
    })
  }
   else if(item === 'Emerald' || item === 'emerald') {
    let role = message.guild.roles.find(role => role.name === 'Emerald')
    let currentRole = message.guild.roles.find(role => role.name === 'Emerald')
    if(message.member.roles.has(currentRole.id)) return message.channel.send("Vec ste kupili taj rank!")
    if(User.balance < 5500) return message.channel.send(`Sorry but you don't have $5500.`)
    eco.SubstractFromBalance(message.author.id, 5500).then(u => {
      message.channel.send(`<@${message.author.id}> Uspjesno ste kupili Emerald Rank`)
      message.member.addRole(role.id)
    })
  }
})

       
}
module.exports.help = {
    name: "buy",
  aliases: ['Buy'],
  perm: "",
  role: "",
  group:"Economy"
}