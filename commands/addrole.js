const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let role = message.guild.roles.find(r => r.name === 'Ne-Brisat')
  if(!message.member.roles.has(role.id)) return message.reply("Sorry pal, you can't do that.");//you didnt see anything lol
    let rMember = message.guild.member(message.mentions.members.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user");
    let roleName = args.slice(1).join(" ")
    if(!roleName) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(role => role.name === roleName);
    if(!gRole) return message.reply("Couldn't find that role.");
    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");

    await(rMember.addRole(gRole.id));
  message.channel.send(`${rMember.user.tag} Upravo ste obavjestili Staff-Team o pokusaju grifa to jest da ste dobili role: ${roleName}!`)

    try{

      await rMember.send(`⚠️ **__!!!_ALERT_!!!__** ⚠️ **!!!⚠️⚠️⚠️ NEKO JE DOBIO ROLE ODMAH PROVJERI AUDIT LOG I BANUJ GA ⚠️⚠️⚠️!!! DOBIO JE ROLE** ${gRole.name}`)

    }catch(e){

      message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)

    }
  }


module.exports.help = {
  name: "addrole",
  aliases: [],
  description: "Adds a role to specififed user.",
  perm: "",
  role: "",
  group: "ADMIN"
  
}