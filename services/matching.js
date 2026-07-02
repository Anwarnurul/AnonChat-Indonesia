const waitingUsers = [];
const activeChats = new Map();

function search(chatId) {

    if (activeChats.has(chatId)) {
        return {
            status: "already_chatting"
        };
    }

    if (waitingUsers.includes(chatId)) {
        return {
            status: "waiting"
        };
    }

    if (waitingUsers.length > 0) {

        const partner = waitingUsers.shift();

        activeChats.set(chatId, partner);
        activeChats.set(partner, chatId);

        return {
            status: "matched",
            partner
        };

    }

    waitingUsers.push(chatId);

    return {
        status: "queue"
    };

}

function next(chatId){

    const partner = activeChats.get(chatId);

    if(!partner){
        return null;
    }

    activeChats.delete(chatId);
    activeChats.delete(partner);

    waitingUsers.push(chatId);

    return partner;

}

function stop(chatId){

    const partner = activeChats.get(chatId);

    if(!partner){
        return null;
    }

    activeChats.delete(chatId);
    activeChats.delete(partner);

    return partner;

}

function partner(chatId){

    return activeChats.get(chatId);

}

module.exports = {

    search,
    next,
    stop,
    partner

}
