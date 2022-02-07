module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false, // https://stackoverflow.com/questions/36906500/avoid-created-at-and-updated-at-being-auto-generated-by-sequelize
  });

  return User;
};