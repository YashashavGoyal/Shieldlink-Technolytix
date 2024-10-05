const express = require('express');
// middleware
const authmiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
// Controllers
const {
    adminLogin,
    getAdminUsers,
    createUser,
    deleteUser,
    getAdminContacts,
    deleteMsg,
    getUserDevice,
    getAllDevices
} = require('../controllers/admin-controller');
const validate = require('../middleware/validators-middleware');
const { loginSchema, signupSchema } = require('../validators/auth-validator');

const router = express.Router();

router.route('/login').post(validate(loginSchema), adminLogin);

router.route("/users/register").post(validate(signupSchema), createUser);

router.route('/users/read').get(authmiddleware, adminMiddleware, getAdminUsers);

router.route('/devices').get(authmiddleware, adminMiddleware, getAllDevices);

router.route('/contacts').get(authmiddleware, adminMiddleware, getAdminContacts);

router.route('/:id/devices').get(authmiddleware, adminMiddleware, getUserDevice);

router.route('/:id/delete/user').delete(authmiddleware, adminMiddleware, deleteUser);

router.route('/:id/delete/msg').delete(authmiddleware, adminMiddleware, deleteMsg);


module.exports = router;