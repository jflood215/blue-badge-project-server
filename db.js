const Sequelize = require("sequelize");

// const sequelize = new Sequelize('blue-badge-server', 'postgres', 'password', {
//     host: 'localhost',
//     dialect: 'postgres'
// });

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
