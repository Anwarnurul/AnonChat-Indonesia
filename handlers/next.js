const match=require("../services/matching");

module.exports=(bot)=>{

bot.onText(/\/next/,msg=>{

const id=msg.chat.id;

const partner=match.next(id);

if(!partner){

return bot.sendMessage(id,"⚠️ Kamu belum memiliki partner.");

}

bot.sendMessage(partner,
"⚠️ Partner meninggalkan chat.\n\nKetik /search untuk mencari partner baru.");

bot.sendMessage(id,
"🔎 Kamu keluar dari chat.\n\nKetik /search untuk mencari partner baru.");

});

}
