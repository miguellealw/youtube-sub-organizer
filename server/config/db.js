import Sequelize from "sequelize";
import keys from "./keys";
import { setupModels } from "../src/api";
import { successDBStartup, errorDBStartup } from "../utils/logMessages";

const models = [
  require("../src/api/category/categoryModel"),
  require("../src/api/subs/subsModel"),
  require("../src/api/user/userModel")
];

const connection = new Sequelize({
  database: keys.dbName,
  username: keys.dbUsername,
  password: keys.dbPassword,
  host: "localhost",
  dialect: "mysql",
  logging: false
});

// confirm connection
connection
  .authenticate()
  .then(() => {
    console.log(successDBStartup);
  })
  .catch(err => {
    console.error(errorDBStartup(err));
  });

export const userModel = connection.define("user", {
  name: Sequelize.STRING,
  profileId: Sequelize.STRING,
  accessToken: Sequelize.STRING,
  refreshToken: Sequelize.STRING
});

export const Category = connection.define("category", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// setupModels(Sequelize, connection, models);

connection.sync();
