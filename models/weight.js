module.exports = function (sequelize, DataTypes) {
  const Weight = sequelize.define("weight", {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    owner: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  });
  return Weight;
};
