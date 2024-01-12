const {
  errorMessages
} = require('../constant/errorMessages');
const {
  messages
} = require('../constant//messages');
const {
  getUserById, getUserByEmail, isDuplicateEmailFound
} = require('../services/userService');

// eslint-disable-next-line no-undef
isDuplicateEmailExisted = async (req, res, next) => {
  const {
    params: {
      id
    },
    body: {
      email
    }
  } = req;
  try {
    const getUser = await isDuplicateEmailFound({
      email, id
    });
    if (getUser) {
      return res.send({
        status: false,
        message: messages.couldNotEdit,
        error: messages.duplicateUserFound
      });
    }
    next();
  } catch (error) {
    console.log('error', error);
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};

// eslint-disable-next-line no-undef
isUserExisted = async (req, res, next) => {
  const {
    params: {
      id
    }
  } = req;
  try {
    const getUser = await getUserById(id);
    if (!getUser) {
      return res.send({
        status: false,
        message: messages.couldNotEdit,
        error: messages.userNotFound
      });
    }
    next();
  } catch (error) {
    console.log('error', error);
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};

// eslint-disable-next-line no-undef
isEmailExisted = async (req, res, next) => {
  const {
    body: {
      email
    }
  } = req;
  try {
    const getUser = await getUserByEmail(email);
    if (getUser) {
      return res.send({
        status: false,
        message: messages.couldNotAddUser,
        error: messages.duplicateUserFound
      });
    }
    next();
  } catch (error) {
    console.log('error', error);
    return res.send({
      status: false,
      message: errorMessages.unExpectedError.title,
      error: errorMessages.unExpectedError.message
    });
  }
};
module.exports = {
  // eslint-disable-next-line no-undef
  isUserExisted, isEmailExisted, isDuplicateEmailExisted
};
