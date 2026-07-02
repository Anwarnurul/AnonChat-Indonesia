const config = require("../config/config");
const { getUsers } = require("../lib/database");

module.exports = (bot) => {

    // Statistik
    bot.onText(/\/stats/, (msg) => {

        if (!config.admin.includes(msg.from.id)) {
            return bot.sendMessage(msg.chat.id, "❌ Kamu bukan admin.");
        }

        const total = getUsers().length;

        bot.sendMessage(
            msg.chat.id,
`📊 AnonChat Indonesia

👥 Total User : ${total}`
        );

    });

    // Broadcast
    bot.onText(/\/broadcast (.+)/, async (msg, match) => {

        if (!config.admin.includes(msg.from.id)) {
            return bot.sendMessage(msg.chat.id, "❌ Kamu bukan admin.");
        }

        const text = match[1];
        const users = getUsers();

        let sukses = 0;
        let gagal = 0;

        for (const user of users) {
            try {
                await bot.sendMessage(user.id, `📢 Pengumuman\n\n${text}`);
                sukses++;
            } catch (e) {
                gagal++;
            }
        }

        bot.sendMessage(
            msg.chat.id,
`✅ Broadcast selesai

✔ Berhasil : ${sukses}
❌ Gagal : ${gagal}`
        );

    });

};
