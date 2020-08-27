module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [5, 70],
      },
    },
  });
  return User;
};
