const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://tienkim:Tktk0909@postgresql-44078-0.cloudclusters.net:17391/library')

module.exports = db