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

  if (message.content.toLowerCase().includes("chiken") && message.member.id != client.user.id) {
    number = 30;
    var random = Math.floor(Math.random() * (number - 1 + 1) + 1);
    switch (random) {
      case 1:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken1]
        });
        break;
      case 2:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken2]
        });
        break;
      case 3:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken3]
        });
        break;
      case 4:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken4]
        });
        break;
      case 5:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken5]
        });
        break;
      case 6:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken6]
        });
        break;
      case 7:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken7]
        });
        break;
      case 8:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken8]
        });
        break;
      case 9:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken9]
        });
        break;
      case 10:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken10]
        });
        break;
      case 11:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken11]
        });
        break;
      case 12:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken12]
        });
        break;
      case 13:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken13]
        });
        break;
      case 14:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken14]
        });
        break;
      case 15:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken15]
        });
        break;
      case 16:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken16]
        });
        break;
      case 17:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken17]
        });
        break;
      case 18:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken18]
        });
        break;
      case 19:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken19]
        });
        break;
      case 20:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken20]
        });
        break;
      case 21:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken21]
        });
        break;
      case 22:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken22]
        });
        break;
      case 23:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken23]
        });
        break;
      case 24:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken24]
        });
        break;
      case 25:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken25]
        });
        break;
      case 26:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken26]
        });
        break;
      case 27:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken27]
        });
        break;
      case 28:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken28]
        });
        break;
      case 29:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken29]
        });
        break;
      case 30:
        message.channel.send("did someone say...chiken?");
        message.channel.send({
          files: [chiken30]
        });
        break;
    }
  }

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