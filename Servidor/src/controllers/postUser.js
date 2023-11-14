const { User } = require('../DB_connection');

async function postUser(email, password) {
    if (!email || !password) {
        return {error: 'Faltan datos'};
    } else {
        try {
            const [newUser, created] = await User.findOrCreate({where: {email, password}});
            return newUser;
        } catch (error) {
            return {error: error.message};
        }
    }
}

module.exports = { postUser };