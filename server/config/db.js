import Sequelize from 'sequelize';
import keys from './keys'
import { setupModels } from '../src/api';

const models = [
  require('../src/api/category/categoryModel'),
  require('../src/api/subs/subsModel'),
  require('../src/api/user/userModel')
];

const connection = new Sequelize({
  database: keys.dbName,
  username: keys.dbUsername,
  password: keys.dbPassword,
  host: 'localhost',
  dialect: 'mysql'
});

// confirm connection
connection
  .authenticate()
  .then(() => {
    console.log(`
    <========================================>
      Connection to DB has been established successfully...
    <========================================>`);
  })
  .catch(err => {
    console.error('Unable to connect to the database 🤬:', err);
  });

export const userModel = connection.define('user', {
  name: Sequelize.STRING,
  profileId: Sequelize.STRING,
  accessToken: Sequelize.STRING,
  refreshToken: Sequelize.STRING,
})

// setupModels(Sequelize, connection, models);

connection.sync();
