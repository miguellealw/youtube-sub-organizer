import Sequelize from 'sequelize';
import keys from './keys'
import { setupModels } from '../src/api';

const models = [
  require('../src/api/category/categoryModel'),
  require('../src/api/subs/subsModel')
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
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

setupModels(Sequelize, connection, models);

connection.sync();
