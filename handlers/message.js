const match=require("../services/matching");

module.exports=(bot)=>{

bot.on("message",msg=>{

if(!msg.text) return;

if(msg.text.startsWith("/")) return;

const partner=match.partner(msg.chat.id);

if(!partner) return;

bot.sendMessage(partner,msg.text);

});

}
