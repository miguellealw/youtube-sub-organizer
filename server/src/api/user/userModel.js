module.exports = (Sequelize, connection) => {
  connection.define('user', {
    name: Sequelize.STRING,
    profileId: Sequelize.STRING
  })
}
