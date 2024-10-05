const express = require('express');

// Controllers
const {
    loginUser,
    updateUser,
    getUser,
} = require('../controllers/auth-controller');
const authmiddleware = require('../middleware/auth-middleware');
const validate = require('../middleware/validators-middleware');
const { loginSchema } = require('../validators/auth-validator');

const router = express.Router();

router.route("/login").post(validate(loginSchema), loginUser);

router.route('/user/update').patch(authmiddleware, updateUser);

router.route('/user/info').get(authmiddleware, getUser);

module.exports = router;