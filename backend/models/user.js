const {
  roles
} = require('../constant/constant');
module.exports = (sequelize, Sequelize) => {
  const UserSchema = sequelize.define('user', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    role: {
      type: Sequelize.ENUM,
      values: roles
    }
  });
  return UserSchema;
};
