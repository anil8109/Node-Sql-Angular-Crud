const {
  getUsersData, addUserData, updateUserData, deleteUserData, getUserById
} = require('../services/userService');
const {
  errorMessages
} = require('../constant/errorMessages');
const {
  messages
} = require('../constant/messages');

// eslint-disable-next-line no-undef
getUsers = async (req, res) => {
  try {
    const Users = await getUsersData();
    if (Users) {
      return res.send({
        status: true,
        message: messages.usersFetched,
        data: Users
      });
    } else {
      return res.send({
        status: false,
        message: messages.unableToFetchUsers,
        error: messages.usesNotFound
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};

// eslint-disable-next-line no-undef
addUser = async (req, res) => {
  try {
    const User = await addUserData(req.body);
    if (User) {
      return res.send({
        status: true,
        message: messages.userAdded,
        data: User
      });
    } else {
      return res.send({
        status: false,
        message: messages.couldNotAddUser,
        error: errorMessages.unExpectedError.message
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};
// eslint-disable-next-line no-undef
editUser = async (req, res) => {
  try {
    const userData = await updateUserData({ body: req.body, id: req.params.id });
    if (userData) {
      return res.send({
        status: true,
        message: messages.userUpdated,
        data: userData
      });
    } else {
      return res.send({
        status: false,
        message: messages.couldNotEdit,
        error: errorMessages.unExpectedError.message
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};

// eslint-disable-next-line no-undef
deleteUser = async (req, res) => {
  try {
    const userData = await deleteUserData(req.params.id);
    if (userData) {
      return res.send({
        status: true,
        message: messages.userDataIsDeleted,
        data: userData
      });
    } else {
      return res.send({
        status: false,
        message: messages.unableToDeleteUser,
        error: errorMessages.unExpectedError
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};

// eslint-disable-next-line no-undef
getUser = async (req, res) => {
  try {
    const userData = await getUserById(req.params.id);
    if (userData) {
      return res.send({
        status: true,
        message: messages.userDataFetched,
        data: userData
      });
    } else {
      return res.send({
        status: false,
        message: messages.userNotFound,
        error: errorMessages.unExpectedError.message
      });
    }
  } catch (error) {
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};

module.exports = {
  // eslint-disable-next-line no-undef
  getUsers, addUser, editUser, deleteUser, getUser
};
