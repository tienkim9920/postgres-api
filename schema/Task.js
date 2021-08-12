const Sequelize = require('sequelize')
const db = require('../config/database')
const User = require('./User.js')

const Task = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    language: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.INTEGER
    },
})

User.hasMany(Task, { foreignKey: 'userId' })
Task.belongsTo(User);

// Task.sync().then(() => {
//     console.log('table created');
// });

module.exports = Task