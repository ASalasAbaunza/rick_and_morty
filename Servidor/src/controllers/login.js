const users = require('../utils/users');

function login(req, res) {
    let { email, password } = req.query;
    const userFound = users.find((user) => {
        return user.email === email && user.password === password
    });
    if (userFound) {
        res.status(200).json({access: true});
        console.log('Access OK');
    } else {
        res.status(200).json({access: false});
        console.log('Access Denied');
    }
}

module.exports = { login };