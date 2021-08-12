const Sequelize = require('sequelize')
const db = require('../config/database')
const Task = require('./Task.js')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullname: {
        type: Sequelize.STRING
    },
    phone: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    }
})


// User.sync().then(() => {
//     console.log('table created');
// });

module.exports = User

