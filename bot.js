const discord = require("discord.js");
const bot = new discord.Client();
const prefix = "!";
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


    //automatic react
    if (message.content === 'F' || message.content.includes('F')) {

        message.react("🇫");

    }

})


//automated message
bot.on("message", message => {

    // console.log("I'm in the block");
    // const LetsTalkChannelId = message.guild.channels.cache.get("738709494493610046");
    // if (message.channel == LetsTalkChannelId){

    const messageContent = message.content.toLowerCase();

    if (messageContent.includes('😂')) {

        message.channel.send('||scam||');

    };


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
    var hugsStr ="I need a hug";
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





bot.login(process.env.authToken);
