const database = require('./Connection');
const { Sequelize, Model } = require('sequelize');
const schema = "";

class Generic extends Model{ }

module.exports  = database.define('Generic', {
    Id:
    {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Description:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

