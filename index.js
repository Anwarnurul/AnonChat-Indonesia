require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true
});

require("./handlers/start")(bot);
require("./handlers/search")(bot);
require("./handlers/message")(bot);
require("./handlers/media")(bot);
require("./handlers/admin")(bot);
require("./handlers/next")(bot);
require("./handlers/stop")(bot);
bot.on("message", (msg) => {

    if(msg.text==="🔍 Cari Partner")
        bot.emit("text",{...msg,text:"/search"});

    if(msg.text==="⏭ Partner Baru")
        bot.emit("text",{...msg,text:"/next"});

    if(msg.text==="🛑 Berhenti")
        bot.emit("text",{...msg,text:"/stop"});

});
console.log("🤖 AnonChat Indonesia Online");
