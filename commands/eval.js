const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let developers = bot.devs
        let embed = new Discord.RichEmbed()

    .setColor("RED")
  .setAuthor('CzvVesti | Pomoć', 'https://i.imgur.com/iSbCziO.jpg' )
  .setFooter("CzvVesti | Admin Team", 'https://i.imgur.com/iSbCziO.jpg' )
  .setThumbnail (message.author.displayAvatarURL)
  .addField("❌» Nemate dozvolu da koristite ovu komandu", "Ovu komandu mogu koristiti samo Developeri Bota") 
        
  if(!developers.includes(message.author.id)) return message.channel.send(embed)
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval",
  aliases: [],
  description: "Evals a code.",
  perm: "ADMINISTRATOR",
  role: "",
  group:""
}
