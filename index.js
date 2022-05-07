const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.send(`If you want to see help go to <a href="/help">/help!</a>
To see about and credits go to <a href="/about">/about!</a>!`)
});

app.get("/help", (req, res) => {
  res.sendFile(__dirname + '/help.html')
})

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/about.txt')
})
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
var replaceall = require("replaceall");
const eco = require("discord-economy");
const logger = require("winston");
const antispam = require("discord-anti-spam");
const fs = require("fs")
const bot = new Discord.Client()
bot.commands = new Discord.Collection()
bot.aliases = new Discord.Collection();
bot.workCooldown = new Map()
bot.hobbyCooldown = new Map()
bot.crimeCooldown = new Map()
bot.devs = ['824799268270243891', '774046091334778921', '883794267007516682', '779433631088115762']
let helpCmd = `Prefix is <b>en!</b><br>\nCommands:<br><br>\n\n` 
fs.readdir("./commands", (err, files) => {
    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile <= 0){
        console.log("couldn't find commands")
        return;
    }
    jsfile.forEach((f, i) => {
         let props = require(`./commands/${f}`)
         console.log(`${f} loaded!`)
         bot.commands.set(props.help.name, props)
      
      if(props.help.description) helpCmd = `${helpCmd}<b>${props.help.name}</b>,<br>\n`
      else helpCmd = `${helpCmd}<b>${props.help.name}</b>,<br>\n`
           props.help.aliases.forEach(alias => {
         bot.aliases.set(alias, props.help.name);

     });


      });
  console.log(`Loaded ${jsfile.length} commands!`)
      helpCmd = `${helpCmd}<br>\n
  <b>Bot made by ⚡ Veka ⚡ ᴼᴿᴵᴳᴵᴺᴬᴸ#7740</b><br>`
});
bot.on("message", message => {
    if(message.author.bot) return;
  let prefix = ".";
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice(1);
  if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)));
  // let NeededPerm = commandfile.help.perm
  // let NeededRole = message.guild.roles.find(r => r.name === commandfile.help.role)
  // if(!NeededRole) {}
  // if(NeededRole === '' && NeededPerm === '') {}
  // if(NeededRole && NeededPerm !== '') if(!message.member.roles.has(NeededRole.id) || !message.member.hasPermission(NeededPerm)) return message.channel.send(`🛑 **ACCESS DENIED! THIS IS ${commandfile.help.group.toUpperCase()} ONLY COMMAND. 🛑**"`)
  // if(NeededPerm !== '' && !NeededRole) if(!message.member.hasPermission(NeededPerm)) return message.channel.send(`🛑 **ACCESS DENIED! THIS IS ${commandfile.help.group.toUpperCase()} ONLY COMMAND. 🛑**"`)
    if(commandfile) commandfile.run(bot, message, args) //can you go th
   
    if(cmd === `${prefix}fdgdgdfgdfgdfgdfgfdghefdgldfdgsfdsgp`) {
      if(!args[0])  {
        message.author.send(`https://extremecommunitybot.glitch.me/help`)
        message.channel.send(`${message.author.tag} Pogledajte svoj DM!`)
    fs.writeFile('./help.html', helpCmd, (err) => {
 if(err) console.error(err)
});

        return;
      }
      let command = bot.commands.get(args[0]) || bot.commands.get(bot.aliases.get(args[0]));
      if(!command) return message.channel.send(`Can't find command named ${args[0]}!`)
      console.log(command)
      let HelpEmbed = new Discord.RichEmbed()
      .setColor(0xff0000)
      .addField(`Name`, `${command.help.name}`)
      .addField(`Description`, `${command.help.description || 'None'}`)
      .addField(`Aliases`, `${replaceall(" ", ", ", command.help.aliases.join(" ")) || 'None'}`)
      .addField(`Required Permission`, `${command.help.perm || 'None'}`)
      .addField(`Required Role`, `${command.help.role || 'None'}`)
      .addField(`Group`, `${command.help.group.toLowerCase() || 'None'}`)
      message.channel.send(HelpEmbed)
    }

  
})

bot.on("guildMemberAdd", function (member) {
    member.send("AntiJoin Systems is ON")
    member.kick()
});

bot.on('ready', () => {
    console.log(`${bot.user.username} is online!`)

    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'Prefix: s! | AntiRaid BOT',
            type: "WATCHING",
        }
    })
});



bot.login("OTEyMDA2OTY2MzAwMjUwMTQy.YZpqrQ.0sU6jUaI7M8i6Od4Ued-l_oKftQ")