const discord = require("discord.js");
const bot = new discord.Client();
const token = "NzQwOTUwODU4MzY3MjM4MTc0.XyweQg.y29Rpjmk14tzRioqvZB7TFRjhuQ";


bot.on("ready", ()=>{
    console.log("The bot is online");
    bot.user.setActivity("Mansi's Port", { type: 'WATCHING'});

});

bot.on("guildMemberAdd", member=>{
    const WelcomeChannelId = member.guild.channels.cache.get("740949661451288722");
    WelcomeChannelId.send(`Welcome Aboard Sailor ${member.displayName}!`);
})





bot.login(token);