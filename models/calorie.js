module.exports = function (sequelize, DataTypes) {
  const Calorie = sequelize.define("calorie", {
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fat: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    carbohydrate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    protein: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Calorie;
};
