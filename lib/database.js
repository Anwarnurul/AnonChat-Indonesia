const fs = require("fs");

const DB_PATH = "./database/users.json";

function getUsers() {
    try {
        const data = fs.readFileSync(DB_PATH);
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
}

function saveUsers(users) {
    fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

function addUser(user) {
    const users = getUsers();

    const exist = users.find(u => u.id === user.id);

    if (!exist) {
        users.push(user);
        saveUsers(users);
    }
}

module.exports = {
    getUsers,
    saveUsers,
    addUser
};
