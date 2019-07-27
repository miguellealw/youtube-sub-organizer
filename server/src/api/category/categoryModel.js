import { Sequelize } from "sequelize";

module.exports = connection => {
  const Category = connection.define("category", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};
