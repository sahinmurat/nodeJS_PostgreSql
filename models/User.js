const {Sequelize, DataTypes} = require('sequelize');
require('dotenv').config();

//< connecting to db >

const {DB_USERNAME,  DB_PASSWORD,  DB_HOSTNAME,  DB_PORT,  DB_NAME} = process.env; 
const  sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`);

sequelize
.authenticate()
.then(()=> console.log('succeded db'))
.catch((err)=> console.log('Unable to connect!', err));


// ORM table
// recruiter table in the recruiter DB

// modelname attribute options

const UserModel = sequelize.define(
    "recruiters",
    {
        // attribute
        // id firstName lastName update createdate
        firstName:{
            type: DataTypes.STRING,
            allowNull : false
        },
        lastName:{
            type: DataTypes.STRING,
             allowNull : false
        }
    }

    ,
    {
        // second options for recruiter/recruiters
        freezeTableName: true
    }
)
module.exports = UserModel;