const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();

var config = JSON.parse(fs.readFileSync('./settings.json', 'utf-8'));

const discordToken = config.discordToken;
const prefix = config.prefix;


client.login(discordToken);

client.on('ready', function () {
  console.log(`${client.user.username} is online in ${client.guilds.size} server(s)`);
  client.user.setActivity("c!help || CHIKEN, NOT CHICKEN");
});

client.on('message', function (message) {
  let logsChannel = message.guild.channels.find(`name`, "bot-logs");

  //chikens
  chiken1 = "./chikens/chiken1.jpeg";
  chiken2 = "./chikens/chiken2.jpeg";
  chiken3 = "./chikens/chiken3.jpeg";
  chiken4 = "./chikens/chiken4.jpeg";
  chiken5 = "./chikens/chiken5.jpeg";
  chiken6 = "./chikens/chiken6.jpeg";
  chiken7 = "./chikens/chiken7.jpeg";
  chiken8 = "./chikens/chiken8.jpeg";
  chiken9 = "./chikens/chiken9.jpeg";
  chiken10 = "./chikens/chiken10.jpeg";
  chiken11 = "./chikens/chiken11.jpeg";
  chiken12 = "./chikens/chiken12.jpeg";
  chiken13 = "./chikens/chiken13.jpeg";
  chiken14 = "./chikens/chiken14.jpeg";
  chiken15 = "./chikens/chiken15.jpeg";
  chiken16 = "./chikens/chiken16.jpeg";
  chiken17 = "./chikens/chiken17.jpeg";
  chiken18 = "./chikens/chiken18.jpeg";
  chiken19 = "./chikens/chiken19.jpeg";
  chiken20 = "./chikens/chiken20.jpeg";
  chiken21 = "./chikens/chiken21.jpeg";
  chiken22 = "./chikens/chiken22.jpeg";
  chiken23 = "./chikens/chiken23.jpeg";
  chiken24 = "./chikens/chiken24.jpeg";
  chiken25 = "./chikens/chiken25.jpeg";
  chiken26 = "./chikens/chiken26.jpeg";
  chiken27 = "./chikens/chiken27.jpeg";
  chiken28 = "./chikens/chiken28.jpeg";
  chiken29 = "./chikens/chiken29.jpeg";
  chiken30 = "./chikens/chiken30.jpeg";

  //send chikens
  if (message.content.toLowerCase().includes("chiken") && message.member.id != client.user.id) {
    number = 30;
    var random = Math.floor(Math.random() * (number - 1 + 1) + 1);
    switch (random) {
      case 1:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken1]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken1]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 2:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken2]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken2]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 3:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken3]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken3]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 4:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken4]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken4]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 5:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken5]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken5]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 6:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken6]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken6]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 7:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken7]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken7]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 8:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken8]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken8]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 9:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken9]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken9]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 10:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken10]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken10]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 11:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken11]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken11]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 12:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken12]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken12]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 13:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken13]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken13]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 14:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken14]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken14]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 15:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken15]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken15]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 16:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken16]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken16]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 17:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken17]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken17]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 18:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken18]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken18]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 19:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken19]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken19]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 20:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken20]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken20]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 21:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken21]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken21]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 22:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken22]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken22]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 23:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken23]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken23]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 24:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken24]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken24]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 25:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken25]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken25]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 26:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken26]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken26]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 27:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken27]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken27]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 28:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken28]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken28]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 29:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken29]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken29]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
      case 30:
        if (!logsChannel) {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken30]
          });
        } else {
          message.channel.send("did someone say...chiken?");
          message.channel.send({
            files: [chiken30]
          });
          return logsChannel.send(`**${message.member.displayName}** got a :chicken:!!!`);
        }
        break;
    }
  }

  //react to "chicken"
  if ((message.content.toLowerCase().includes("chicken") && message.member.id != client.user.id)) {
    if (!logsChannel) {
      message.react('🐔');
    } else {
      message.react('🐔');
      return logsChannel.send(`reacted to **${message.member.displayName}**'s "chicken" with :chicken:`);
    }
  }

  //help command
  if (message.content.toLowerCase().startsWith("c!help")) {
    let chikenPic = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
      .setTitle("Chiken Bot Help")
      .setDescription(`litearlly just type "chiken"\nbut not "chicken"\nbc then it wont work\n...thats it`)
      .addField("Code, if u want it", "https://goo.gl/c37Q8z")
      .setColor("#7fc0ff")
      .setThumbnail(chikenPic)

    message.channel.send(botEmbed);
  }
});