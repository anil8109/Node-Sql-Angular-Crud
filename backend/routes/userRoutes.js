const User = require('../controllers/userControllers');
const {
  checkUserDetails
} = require('../middleware/checkUserDetails');
const {
  isUserExisted, isEmailExisted, isDuplicateEmailExisted
} = require('../middleware/isUserExisted');

const express = require('express');
const router = express.Router();

router.get('/get_users', User.getUsers);
router.get('/get_one_user/:id', User.getUser);
router.post('/add_user', [checkUserDetails, isEmailExisted], User.addUser);
router.patch('/edit_user/:id', [isUserExisted, checkUserDetails, isDuplicateEmailExisted], User.editUser);
router.delete('/delete_user/:id', [isUserExisted], User.deleteUser);
module.exports = router;
