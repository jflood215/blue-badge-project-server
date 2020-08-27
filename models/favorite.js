module.exports = function (sequelize, DataTypes) {
  const Favorite = sequelize.define("favorite", {
    ownerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    recipeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });
  return Favorite;
};
