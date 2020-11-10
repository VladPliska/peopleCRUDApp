///
// id,fullname, role , buissnsec location, email, phone, hourly rate

const  DataTypes  = require("sequelize");

module.exports = (db) => {
  const User = db.define("users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      role: {
        type: DataTypes.STRING,
      },
      rate: {
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );
  return User;
};
