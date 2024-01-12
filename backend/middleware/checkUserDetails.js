const {
  roles
} = require('../constant/constant');
const {
  errorMessages
} = require('../constant/errorMessages');
const _ = require('lodash');
// eslint-disable-next-line no-undef
checkUserDetails = async (req, res, next) => {
  const {
    body: {
      role, name, email, address
    }
  } = req;
  try {
    if (!name || !email || !address || !role ||
      _.isUndefined(name) || _.isUndefined(email) || _.isUndefined(address) || _.isUndefined(role)
    ) {
      return res.send({
        status: false,
        message: errorMessages.missingParameters.title,
        error: errorMessages.missingParameters.message
      });
    } else if (!roles.includes(role)) {
      return res.send({
        status: false,
        message: errorMessages.invalidRole.title,
        error: errorMessages.invalidRole.message
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
  checkUserDetails
};
