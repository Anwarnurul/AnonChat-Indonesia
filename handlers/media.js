const match = require("../services/matching");

module.exports = (bot) => {

    // FOTO
    bot.on("photo", (msg) => {

        const partner = match.partner(msg.chat.id);

        if (!partner) return;

        const photo = msg.photo[msg.photo.length - 1].file_id;

        bot.sendPhoto(partner, photo, {
            caption: msg.caption || ""
        });

    });

    // STICKER
    bot.on("sticker", (msg) => {

        const partner = match.partner(msg.chat.id);

        if (!partner) return;

        bot.sendSticker(partner, msg.sticker.file_id);

    });

    // VOICE
    bot.on("voice", (msg) => {

        const partner = match.partner(msg.chat.id);

        if (!partner) return;

        bot.sendVoice(partner, msg.voice.file_id);

    });

    // AUDIO
    bot.on("audio", (msg) => {

        const partner = match.partner(msg.chat.id);

        if (!partner) return;

        bot.sendAudio(partner, msg.audio.file_id);

    });

    // VIDEO
    bot.on("video", (msg) => {

        const partner = match.partner(msg.chat.id);

        if (!partner) return;

        bot.sendVideo(partner, msg.video.file_id, {
            caption: msg.caption || ""
        });

    });

    // DOKUMEN
    bot.on("document", (msg) => {

        const partner = match.partner(msg.chat.id);

        if (!partner) return;

        bot.sendDocument(partner, msg.document.file_id, {
            caption: msg.caption || ""
        });

    });

};
