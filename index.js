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
bot.afk = new Map()
bot.workCooldown = new Map()
bot.devs = ['532659544791318540']
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
    if(message.channel.type === "dm") return;
    if(message.author.bot) return;
if(message.content.toLowerCase().includes("suck one")) return message.reply("Thats the best you got? LOL how pathetic.")
 if(message.content.toLowerCase().includes("seth is gay")) return message.reply("stfu boi, you do not talk like that about my creator like that")
    if(message.content.toLowerCase().includes("j122 is gay")) return message.reply("psst -> ||dont tell him i told you this but he is gay||")
 if(message.content.toLowerCase().includes("your mom")) return message.reply("Wow, *how orginal*")


    let prefix = botconfig.prefix;
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
    if(commandfile) commandfile.run(bot, message, args) //can you go thru files and add needed perms or roles they are blank but add like MANAGE_MESSAGES
    else { //ok wait is there roles and perms //i need to go now
      if(cmd.slice(prefix.length) === 'help') {}
      else message.channel.send(`Ta komanda ne postoji ukucajte en!help da vidite listu komandi`)
      }
   
    if(cmd === `${prefix}hfgdfgeldfggfp`) {
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
 fs.readdir("./events/", (err, files) => {
	if (err) console.log(err);
   let jsfiles = files.filter(f => f.split(".").pop() === "js")
	jsfiles.forEach(file => {
		let eventFunc = require(`./events/${file}`);
		let eventName = file.split(".")[0];
		bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
    console.log(`${file} Loaded!`)
	});
})
bot.on('ready', () => {
    setInterval(() => {
        bot.user.setActivity(`en!help`, {type: 'STREAMING', url: 'https://www.twitch.tv/veka_peka312'}); 
    }, 8000);
});

bot.on('ready', () => {
    setInterval(() => {
        bot.user.setActivity(`YouTube Veka`, {type: 'STREAMING', url: 'https://www.twitch.tv/veka_peka312'}); 
    }, 14000);
});

bot.on('ready', () => {
    setInterval(() => {
        bot.user.setActivity(`${bot.memberCount} Membera`, {type: 'STREAMING', url: 'https://www.twitch.tv/veka_peka312'}); 
    }, 21000);
});


bot.login(process.env.TOKEN)