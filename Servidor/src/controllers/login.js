const users = require('../utils/users');

function login(email, password) {
    const userFound = users.find((user) => {
        return user.email === email && user.password === password
    });
    if (userFound) {
        return {access: true};
    } else {
        return {access: false};
    }
}

module.exports = { login };