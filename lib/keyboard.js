module.exports = {

    main: {
        reply_markup: {
            keyboard: [
                ["🔎 Cari Partner"],
                ["👤 Profil Saya", "ℹ️ Bantuan"]
            ],
            resize_keyboard: true
        }
    },

    chat: {
        reply_markup: {
            keyboard: [
                ["⏭ Next", "🛑 Stop"],
                ["🚩 Report"]
            ],
            resize_keyboard: true
        }
    }

};
