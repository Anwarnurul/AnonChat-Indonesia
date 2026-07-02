const match = require("../services/matching");

module.exports = (bot)=>{

bot.onText(/\/search/,msg=>{

const id=msg.chat.id;

const result=match.search(id);

switch(result.status){

case "already_chatting":

return bot.sendMessage(id,"⚠️ Kamu sedang berada dalam chat.");

case "waiting":

return bot.sendMessage(id,"⏳ Masih menunggu partner.");

case "queue":

return bot.sendMessage(id,"🔎 Sedang mencari partner...");

case "matched":

bot.sendMessage(id,"🎉 Partner ditemukan!");

bot.sendMessage(result.partner,"🎉 Partner ditemukan!");

break;

}

});

}
