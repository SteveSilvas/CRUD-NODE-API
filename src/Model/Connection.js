const Sequelize = require('sequelize');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPwd = process.env.DB_PASSWORD;
// const dbDialect = process.env.DB_DIALECT;

const componenteSequelize = new Sequelize(dbName,dbUser, dbPwd,
{
    dialect:'mysql', host:dbHost, port: dbPort
});

// const componenteSequelize = new Sequelize('railway','root','Hmloo5sEpY1MZpudG23D',
// {
//     dialect:'mysql', host:'containers-us-west-159.railway.app', port: '6940'
// });





module.exports = componenteSequelize;