const match = require("../services/matching");

module.exports = (bot) => {

    bot.onText(/\/stop/, (msg) => {

        const id = msg.chat.id;

        const partner = match.stop(id);

        if (!partner) {
            return bot.sendMessage(id,
                "⚠️ Kamu sedang tidak berada dalam chat.");
        }

        bot.sendMessage(id,
            "🛑 Chat telah dihentikan.\n\nKetik /search untuk mencari partner baru.");

        bot.sendMessage(partner,
            "⚠️ Partner telah mengakhiri chat.\n\nKetik /search untuk mencari partner baru.");

    });

}
