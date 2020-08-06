const discord = require("discord.js");
const bot = new discord.Client();
const token = "NzQwOTUwODU4MzY3MjM4MTc0.XyweQg.y29Rpjmk14tzRioqvZB7TFRjhuQ";


bot.on("ready", ()=>{
    console.log("The bot is online");
    bot.user.setActivity("Mansi's Port", { type: 'WATCHING'});

});





bot.login(token);