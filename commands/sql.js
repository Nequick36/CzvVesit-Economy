const Discord = require("discord.js")
const sqlite = require('sqlite3').verbose()
var fs = require('fs');

module.exports.run = async (bot, message, args) => {

  if(!message.member.roles.has(message.guild.roles.find(r => r.name === 'GH Bot Developer').id)) return message.channel.send('Can\'t pass here!')
  var dbFile = './database.sqlite';
  var dbExists = fs.existsSync(dbFile);

  if (!dbExists) {
      fs.openSync(dbFile, 'w');
  }

  var db = new sqlite.Database(dbFile);
  let code = args.join(" ")
  let output = await db.run(code)
  db.close();
  message.channel.send(`\`\`\`${output.stringify()}\`\`\``)

}

module.exports.help = {
  name: "sql",
  aliases: [],
  description: "Runs a sql code.",
  perm: "ADMINISTRATOR",
  role: "GH Bot Developer",
  group:"Developer"
}