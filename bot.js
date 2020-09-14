const discord = require("discord.js");
const bot = new discord.Client();
const prefix = "!";



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

    // console.log("I'm in the block");
    // const LetsTalkChannelId = message.guild.channels.cache.get("738709494493610046");
    // if (message.channel == LetsTalkChannelId){

    if (message.content.includes('😂')) {

        message.channel.send('||scam||');

    };

    const messageContent = message.content.toLowerCase();
    if (messageContent.includes(" cry " || "cry " || " cry") || messageContent.includes(" sad " || "sad " || " sad") || messageContent === 'sad') {
        user = message.member.displayName;

        if (message.author.bot) return;
        else {
            message.channel.send('```' + user + '.send("HUGS");```');
        }

    };

    if (messageContent.includes('send hugs')) {

        var person = message.mentions.members.first();
        if (!person) return message.channel.send('```Hugs For EVERYONE!!```');

        if (person.id === message.author.id) return message.channel.send('```Portbot sends you a hug!```')

        message.channel.send('```Hugs Sent to ' + person.displayName + '```');

    };

    //conversations with port bot
    var replies = ["Yes", "Definitely", "maybe", "no", "not at all", "don't bug me"];
    var random = Math.floor(Math.random() * replies.length);

    if (messageContent.startsWith('port') && message.content.endsWith('?')) {
        message.channel.send(replies[random]);
    };

    var portBotReplies = ["Hey There", "What's up Doc?", "Heyyy", "Hiiii", "Talk to you later"];
    var random2 = Math.floor(Math.random() * portBotReplies.length);

    if(messageContent.includes('<@!740950858367238174>')){
        message.channel.send(portBotReplies[random2]);
    };

});



bot.login(process.env.authToken);