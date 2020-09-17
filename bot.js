const discord = require("discord.js");
const bot = new discord.Client();
const prefix = "!";
// const bot = new discord.Client({ partials: ['MESSAGE', 'REACTION', 'CHANNEL'] });
require('dotenv').config();


bot.on("ready", () => {
    console.log("The bot is online");
    bot.user.setActivity("Mansi's Port", { type: 'WATCHING' });
    const botNotification = bot.channels.cache.get("740991793650335883");
    botNotification.send(`I'm Online`)


});

bot.on("guildMemberAdd", member => {
    const WelcomeChannelId = member.guild.channels.cache.get("740949661451288722");
    WelcomeChannelId.send(`Welcome Aboard Sailor! ${member}`);
})



bot.on("message", message => {
    const WelcomeChannelId = message.guild.channels.cache.get("740949661451288722");
    const ServerLogTest = message.guild.channels.cache.get("741006637099384922");
    //Command implementation
    let args = message.content.substring(prefix.length).split(" ")
    switch (args[0]) {
        case "permit":
            var person = message.mentions.members.first();
            if (!person) {
                message.channel("Mention a valid user");
                return;
            }
            var ShipmateRole = person.guild.roles.cache.get("738872066866020474");
            if (message.member.hasPermission("MANAGE_NICKNAMES")) {
                person.roles.add(ShipmateRole);
                message.react("👍");
                ServerLogTest.send(`${message.author} has permitted ${person}`);
            } else {
                message.react("👎");
            }
            break;

    }



})





//automated message
bot.on("message", message => {


    const messageContent = message.content.toLowerCase();

    //automatic react

    /* if (messageContent.includes('😂')) {
    //     message.channel.send('||scam||');
    };*/


    var fStr = "Fun";
    var pattern2 = /\b(f|F)\s{0,}\b/;
    var tst2 = pattern2.test(fStr);
    // console.log(tst2);

    // if (message.content === 'F' || message.content.includes('\sF\s')) {
    if (pattern2.test(messageContent) == true) {
        return message.react("🇫");
    };



    //automatic quote
    const quotesChannelId = message.guild.channels.cache.get("738709543814430760");
    var person = message.mentions.members.first();
    let args = message.content.substring(prefix.length).split(" ");
    var argsStr = args.slice(1, -1);
    var quote = argsStr.join(' ');
    user = message.member.displayName;

    switch (args[0]) {
        case "quote":
            quotesChannelId.send('"' + quote + '"' + ` - ${person}` + ' `Quoted by ' + user + '`');
            message.react("👍");
            break;
    };


    //Hugs

    if (messageContent.includes(" cry " || "cry " || " cry") || messageContent.includes(" sad " || "sad " || " sad") || messageContent === 'sad' || messageContent === 'cry') {
        user = message.member.displayName;

        if (message.author.bot) return;
        else {
            message.channel.send('```' + user + '.send("HUGS");```');
        }

    };


    //send gif hugs
    var urls = [
        "https://media.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.gif",
        "https://media.giphy.com/media/lXiRKBj0SAA0EWvbG/giphy.gif",
        "https://media.giphy.com/media/EvYHHSntaIl5m/giphy.gif",
        "https://media.giphy.com/media/jTSOClK7HBoMaVn5Hi/giphy.gif",
        "https://media.giphy.com/media/3o7TKOQ702VRR9PRxm/giphy.gif",
        "https://media.giphy.com/media/l0HlGu6yGT8X51Gko/giphy.gif",
        "https://media.giphy.com/media/cMhPpDTQnk0eZDQiZk/giphy.gif"

    ];
    var chooseGif = Math.floor(Math.random() * urls.length);
    var hugsStr = "I need a hug";
    var pattern1 = /\bhug?s{0,}\b/;
    var tst1 = pattern1.test(hugsStr);
    //  console.log(tst1);


    //if (messageContent.includes("hugs\s") || messageContent === "hugs"  ) {
    if (pattern1.test(messageContent) == true) {

        var person = message.mentions.members.first();
        //if (!person) return message.channel.send('```Hugs For EVERYONE!!```');
        if (!person) return message.channel.send({
            embed: {
                color: 16777215, description: '```Hugsssss for EVERYONE!!```',
                image: {
                    url: urls[chooseGif]
                }
            }
        });


        if (person.id === message.author.id) return message.channel.send('```Portbot sends you a hug!```')

        message.channel.send({
            embed: {
                color: 16777215, description: '```Hugsssss!!```',
                image: {
                    url: urls[chooseGif]
                }
            }
        });

        // message.channel.send('```Hugs Sent to ' + person.displayName + '```');

    };



    //conversations with port bot
    var replies = ["Yes", "Definitely", "maybe", "no", "not at all", "don't bug me"];
    var random = Math.floor(Math.random() * replies.length);

    if (messageContent.startsWith('port') && message.content.endsWith('?')) {
        message.channel.send(replies[random]);
    };

    var portBotReplies = ["Hey There", "What's up Doc?", "Heyyy", "Hiiii", "Talk to you later"];
    var random2 = Math.floor(Math.random() * portBotReplies.length);

    if (messageContent.includes('<@!740950858367238174>') || messageContent.includes('<@740950858367238174>')) {
        message.channel.send(portBotReplies[random2]);
    };

});

//Deleted message logs
bot.on('messageDelete', async (message) => {
    if (message.author.bot) return;
    let deleteEmbed = new discord.MessageEmbed()
        .setThumbnail(message.author.avatarURL())
        .setAuthor("DELETED MESSAGE") //or .setTitle(" ")
        .setColor("#fc3c3c")
        .setDescription("<@!" + message.author.id + ">")
        .addField("Channel", "<#" + message.channel.id + ">", true)
        //.addField("Author", message.author.tag, true)
        //.addField("Channel", message.channel, true)
        .addField("Message", message.content, true)
        .addField("Deleted at", message.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " (IST)")
        .addField("Message Link", "https://discordapp.com/channels/711634547770654791/" + message.channel.id + "/" + message.id)
        .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);


    const deletLogsChannel = message.guild.channels.cache.get("755740585096118282");
    deletLogsChannel.send(deleteEmbed);
});


//Edited Message Logs
bot.on("messageUpdate", async (oldMessage, newMessage) => {
    const editLogs = bot.channels.cache.get('755740585096118282');

    if (oldMessage.author.bot) return;
    if (oldMessage.content === newMessage.content) {
        return;
    }

    let editEmbed = new discord.MessageEmbed()
        .setThumbnail(oldMessage.author.avatarURL())
        .setAuthor("MESSAGE EDITED")
        .setColor("#FFFF00")
        .setDescription("<@" + oldMessage.author.id + ">")
        .addField("Channel", "<#" + newMessage.channel.id + ">", true)
        .addField("Before", oldMessage.content, true)
        .addField("After", newMessage.content, true)
        .addField("Sent at", oldMessage.createdAt.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " (IST)", true)
        .addField("Message Link", "https://discordapp.com/channels/711634547770654791/" + newMessage.channel.id + "/" + newMessage.id)
        .setTimestamp()
        .setFooter(`Author ID: ${newMessage.author.id}`);

    if (!editLogs) return;
    editLogs.send(editEmbed);
});


bot.login(process.env.authToken);

