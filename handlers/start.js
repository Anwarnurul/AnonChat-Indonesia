const keyboard = require("../lib/keyboard");
const { addUser, getUsers } = require("../lib/database");

module.exports = (bot) => {

    bot.onText(/\/start/, (msg) => {

        addUser({
            id: msg.from.id,
            name: msg.from.first_name,
            username: msg.from.username || "-"
        });

        const total = getUsers().length;

        bot.sendMessage(
            msg.chat.id,
`👋 Halo ${msg.from.first_name}

🇮🇩 Selamat datang di AnonChat Indonesia

━━━━━━━━━━━━━━

👥 Total User : ${total}

━━━━━━━━━━━━━━

Silakan gunakan tombol di bawah untuk memulai.`,
            keyboard
        );

    });

};
