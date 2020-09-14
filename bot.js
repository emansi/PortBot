const discord = require("discord.js");
const bot = new discord.Client();
const token = "NzQwOTUwODU4MzY3MjM4MTc0.XyweQg.y29Rpjmk14tzRioqvZB7TFRjhuQ";
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




// //automated message
// bot.on("message", message => {

//     // console.log("I'm in the block");
//     // const LetsTalkChannelId = message.guild.channels.cache.get("738709494493610046");
//     // if (message.channel == LetsTalkChannelId){

//     if (message.content.includes('😂')) {

//         message.channel.send('||scam||');

//     };


//     if (message.content.includes('sad' || 'cry')) {
//         user = message.author.username;

//         if (message.author.bot) return;
//         else {
//             message.channel.send('```' + user + '.send("HUGS");```');
//         }

//     };


//     // };
// });



bot.on("message", message => {
    var replies = [
        "Hello there!", 
        "How are you?",
        "What's up?",
        "Yes",
        "I'm great!",
        "what's up doc?",
        "definitely",
        "maybe",
        "no", 
        "not at all", 
        "don't bug me"
    ]
    var random = Math.floor(Math.random() * replies.length);

    if (message.content.startsWith('bot') && message.content.endsWith('?')) {
        //bot.message.send(replies[random]);
        //bot.reply(message, choose)
        //bot.message.send(choose);
        message.channel.send(replies[random]);
        console.log("ok");
    };
});




bot.login(token);