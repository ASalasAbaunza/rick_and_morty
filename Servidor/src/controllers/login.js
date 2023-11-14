/*const users = require('../utils/users');

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

module.exports = { login };*/

const { User } = require('../DB_connection');

async function login(email, password) {
    if (!email || !password) {
        return {error: 'Faltan datos'};
    } else {
        try {
            const userQuery = await User.findOne({where: {email: email}});
            if (!userQuery) {
                return {error: 'Usuario no encontrado'};
            } else if (userQuery.password === password) {
                return {access: true};
            } else {
                return {error: 'Contraseña incorrecta'};
            }
        } catch (error) {
            return {error: error.message};
        }
    }
}

module.exports = { login };