const User = require('../models').user;
const { Op } = require('sequelize');

// eslint-disable-next-line no-undef
getUsersData = async () => {
  return await User.findAll({});
};

// eslint-disable-next-line no-undef
getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

// eslint-disable-next-line no-undef
addUserData = async (user) => {
  return await User.create({
    name: user.name,
    email: user.email,
    address: user.address,
    role: user.role
  });
};

// eslint-disable-next-line no-undef
getUserById = async (id) => {
  return await User.findByPk(id);
};

// eslint-disable-next-line no-undef
isDuplicateEmailFound = async (params) => {
  return await User.findOne({
    where: {
      email: params.email,
      id: {
        [Op.ne]: params.id
      }
    }
  });
};

// eslint-disable-next-line no-undef
updateUserData = async (params) => {
  // eslint-disable-next-line no-undef
  const getUser = await User.findByPk(params.id);
  return await getUser.update(params.body);
};

// eslint-disable-next-line no-undef
deleteUserData = async (id) => {
  return await User.destroy({
    where: {
      id
    }
  });
};

module.exports = {
  // eslint-disable-next-line no-undef
  getUsersData, addUserData, updateUserData, deleteUserData, getUserByEmail, getUserById, isDuplicateEmailFound
};
